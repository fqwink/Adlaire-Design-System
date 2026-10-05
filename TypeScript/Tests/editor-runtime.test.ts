import { createBlock, createEditor, isSafeHref } from "../Editor/index.ts";

function assert(condition: unknown, message: string): asserts condition {
  if (!condition) throw new Error(message);
}

function assertEquals<T>(actual: T, expected: T, message: string): void {
  if (JSON.stringify(actual) !== JSON.stringify(expected)) {
    throw new Error(
      `${message}: expected ${JSON.stringify(expected)}, got ${
        JSON.stringify(actual)
      }`,
    );
  }
}

Deno.test("headless editor starts with a valid document", () => {
  const editor = createEditor();
  const document = editor.getDocument();

  assertEquals(
    document.schemaVersion,
    "1.0.0",
    "editor document schema version must be stable",
  );
  assert(
    document.blocks.length === 0,
    "default editor document must start without blocks",
  );
  assertEquals(
    editor.getValidationSummary().errorCount,
    0,
    "default editor document must validate cleanly",
  );
});

Deno.test("headless editor dispatch mutates valid insert commands", () => {
  const editor = createEditor();
  const block = createBlock("paragraph", {
    text: [{ type: "text", text: "Deno test block" }],
  }, "test-paragraph");
  const result = editor.dispatch({ type: "insert-block", payload: { block } });

  assert(result.changed, "insert-block must report a changed document");
  assertEquals(
    editor.getDocument().blocks.some((entry) => entry.id === "test-paragraph"),
    true,
    "inserted block must be present",
  );
  assertEquals(
    editor.getSaveState().dirty,
    true,
    "document mutation must mark save state dirty",
  );
});

Deno.test("dispatchBatch applies document changes atomically", () => {
  const editor = createEditor();
  const block = createBlock("paragraph", {
    text: [{ type: "text", text: "Atomic batch block" }],
  }, "atomic-batch-block");
  const result = editor.dispatchBatch([
    { type: "insert-block", payload: { block } },
    {
      type: "set-selection",
      payload: {
        selection: {
          anchor: { blockId: "missing-block" },
          focus: { blockId: "missing-block" },
          mode: "caret",
        },
      },
    },
  ]);

  assert(!result.changed, "invalid batch must not report a mutation");
  assertEquals(
    result.errors?.[0]?.code,
    "selection.invalid",
    "invalid batch must report the selection error",
  );
  assertEquals(
    editor.getDocument().blocks.some((entry) =>
      entry.id === "atomic-batch-block"
    ),
    false,
    "invalid batch must not partially insert blocks",
  );
});

Deno.test("editor history supports batch undo and redo", () => {
  const editor = createEditor();
  const first = createBlock("paragraph", {
    text: [{ type: "text", text: "First" }],
  }, "history-first");
  const second = createBlock("paragraph", {
    text: [{ type: "text", text: "Second" }],
  }, "history-second");
  const result = editor.dispatchBatch([
    { type: "insert-block", payload: { block: first } },
    { type: "insert-block", payload: { block: second } },
  ]);

  assert(result.changed, "valid batch must mutate the document");
  assertEquals(editor.getDocument().blocks.map((entry) => entry.id), [
    "history-first",
    "history-second",
  ], "batch insert order must be stable");

  assert(editor.undo().changed, "undo must report a change after batch insert");
  assertEquals(
    editor.getDocument().blocks.length,
    0,
    "undo must restore the pre-batch document",
  );

  assert(editor.redo().changed, "redo must report a change after undo");
  assertEquals(editor.getDocument().blocks.map((entry) => entry.id), [
    "history-first",
    "history-second",
  ], "redo must restore the batch document");
});

Deno.test("save and publish state transitions emit request events", () => {
  const editor = createEditor();
  const events: string[] = [];
  editor.subscribe((event) => events.push(event.type));

  editor.dispatch({
    type: "insert-block",
    payload: {
      block: createBlock("paragraph", {
        text: [{ type: "text", text: "Save me" }],
      }, "save-block"),
    },
  });
  const saveResult = editor.dispatch({
    type: "save",
    payload: { context: { reason: "manual" } },
  });
  const savedState = editor.completeSave({ dirty: false });
  const publishResult = editor.dispatch({
    type: "request-publish",
    payload: { context: { reason: "after-save" } },
  });
  const publishedState = editor.completePublish();

  assert(saveResult.request, "save command must return a save request");
  assert(
    publishResult.request,
    "publish command must return a publish request",
  );
  assertEquals(
    savedState.dirty,
    false,
    "successful save must clear dirty state",
  );
  assertEquals(
    savedState.saving,
    false,
    "successful save must clear saving state",
  );
  assertEquals(
    publishedState.publishing,
    false,
    "successful publish must clear publishing state",
  );
  assert(
    events.includes("save:requested"),
    "save request event must be emitted",
  );
  assert(
    events.includes("publish:requested"),
    "publish request event must be emitted",
  );
  assert(
    events.includes("publish:completed"),
    "publish completion event must be emitted",
  );
});

Deno.test("read-only editor rejects mutable commands without changing the document", () => {
  const editor = createEditor({ readOnly: true });
  const before = editor.getDocument();
  const result = editor.dispatch({
    type: "insert-block",
    payload: { block: createBlock("paragraph", {}, "blocked-paragraph") },
  });

  assert(!result.changed, "read-only insert must not report a mutation");
  assertEquals(
    result.errors?.[0]?.code,
    "command.readOnly",
    "read-only insert must return the read-only error",
  );
  assertEquals(
    editor.getDocument(),
    before,
    "read-only insert must leave the document unchanged",
  );
});

Deno.test("editor href safety rejects script protocols", () => {
  assert(isSafeHref("https://example.com"), "https links must be allowed");
  assert(isSafeHref("mailto:team@example.com"), "mailto links must be allowed");
  assert(!isSafeHref("javascript:alert(1)"), "script URLs must be rejected");
});
