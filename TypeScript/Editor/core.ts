import { applyCommand } from "./commands.ts";
import { asRecord, cloneDocument, createDefaultBlockRegistry, createEmptyDocument, normalizeDocument, ToolRegistry } from "./document.ts";
import { EventBus, editorError } from "./events.ts";
import { History } from "./history.ts";
import { normalizeSelection, sameSelection } from "./selection.ts";
import { sanitizeDocument, validateDocument } from "./validation.ts";
import type {
  EditorCommand,
  EditorCommandResult,
  EditorConfig,
  EditorController,
  EditorDocument,
  EditorError,
  EditorEventListener,
  HistoryCheckpoint,
  EditorSelection,
  PublishState,
  PublishContext,
  PublishRequest,
  SaveContext,
  SaveRequest,
  SaveState,
  SetSelectionPayload,
  Unsubscribe,
  ValidationSummary,
} from "./types.ts";

const mutableCommands = new Set(["insert-block", "delete-block", "move-block", "update-block", "split-block", "merge-block", "set-document-meta"]);
const knownCommands = new Set([...mutableCommands, "set-selection", "save", "request-publish"]);

function normalizeStateError(error: string, fallback: string): string {
  const message = String(error ?? "").trim();
  return message || fallback;
}

function normalizeCompletionError<T extends { error?: string }>(state: T, fallback: string): T {
  if (!Object.prototype.hasOwnProperty.call(state, "error") || state.error === undefined) return state;
  return { ...state, error: normalizeStateError(state.error, fallback) };
}

type DispatchValidationMode = "single" | "batch";
type DispatchCommandValidation =
  | { readonly ok: true; readonly command: EditorCommand }
  | { readonly ok: false; readonly error: EditorError };

export class HeadlessEditorController implements EditorController {
  #registry: ToolRegistry;
  #events = new EventBus();
  #history: History;
  #document: EditorDocument;
  #selection: EditorSelection | null = null;
  #readOnly: boolean;
  #saveState: SaveState = { dirty: false, saving: false };
  #publishState: PublishState = { publishing: false };

  constructor(config: EditorConfig = {}) {
    const defaultBlock = config.defaultBlock ?? "paragraph";
    this.#registry = createDefaultBlockRegistry(config.tools ?? []);
    if (!this.#registry.has(defaultBlock)) {
      throw new Error(`Default block '${defaultBlock}' is not registered.`);
    }
    this.#history = new History(config.historyLimit);
    this.#readOnly = Boolean(config.readOnly);
    this.#document = normalizeDocument(config.document ?? createEmptyDocument(), this.#registry);
    this.#emitValidation();
  }

  getDocument(): EditorDocument {
    return cloneDocument(this.#document);
  }

  setDocument(document: EditorDocument): void {
    this.#document = sanitizeDocument(normalizeDocument(document, this.#registry), this.#registry);
    this.#selection = normalizeSelection(this.#document, this.#selection);
    this.#saveState = { dirty: false, saving: false };
    this.#publishState = { publishing: false };
    this.#history.clear();
    this.#events.emit({ type: "document:changed", document: this.getDocument() });
    this.#events.emit({ type: "selection:changed", selection: this.getSelection() });
    this.#events.emit({ type: "history:changed", canUndo: this.#history.canUndo, canRedo: this.#history.canRedo });
    this.#emitValidation();
  }

  dispatch(command: EditorCommand): EditorCommandResult {
    const validation = validateDispatchCommand(command, this.#readOnly, "single");
    if (!validation.ok) return this.#fail(validation.error);
    const dispatchCommand = validation.command;
    if (dispatchCommand.type === "set-selection") return this.#setSelection(commandSelection(dispatchCommand), true);
    if (dispatchCommand.type === "save") return this.#requestSave(commandContext<SaveContext>(dispatchCommand));
    if (dispatchCommand.type === "request-publish") return this.#requestPublish(commandContext<PublishContext>(dispatchCommand));
    return this.#applyDocumentCommand(dispatchCommand, true);
  }

  dispatchBatch(commands: EditorCommand[]): EditorCommandResult {
    if (!Array.isArray(commands)) return this.#error("command.batch.invalid", "Batch payload must be an array of commands.");
    if (commands.length === 0) return { document: this.getDocument(), selection: this.getSelection(), changed: false };
    for (const command of commands) {
      const validation = validateDispatchCommand(command, this.#readOnly, "batch");
      if (!validation.ok) return this.#fail(validation.error);
    }

    const before = { document: this.getDocument(), selection: this.getSelection() };
    let nextDocument = this.#document;
    let nextSelection = this.#selection;
    let hasDocumentChange = false;
    let hasSelectionChange = false;
    const errors: EditorError[] = [];

    for (const command of commands) {
      if (command.type === "set-selection") {
        const selection = commandSelection(command);
        const normalized = normalizeSelection(nextDocument, selection);
        if (!commandSelectionIsExplicitNull(command) && normalized === null) {
          errors.push(editorError("selection.invalid", "Selection must reference valid document positions."));
          break;
        }
        hasSelectionChange = hasSelectionChange || !sameSelection(nextSelection, normalized);
        nextSelection = normalized;
        continue;
      }
      const result = applyCommand(nextDocument, command, this.#registry);
      if (result.errors.length > 0) {
        errors.push(...result.errors);
        break;
      }
      if (result.changed) hasDocumentChange = true;
      nextDocument = sanitizeDocument(normalizeDocument(result.document, this.#registry), this.#registry);
      nextSelection = normalizeSelection(nextDocument, nextSelection);
    }

    if (errors.length > 0) {
      for (const error of errors) this.#emitError(error);
      return { document: this.getDocument(), selection: this.getSelection(), changed: false, errors };
    }
    if (!hasDocumentChange && !hasSelectionChange) return { document: this.getDocument(), selection: this.getSelection(), changed: false };

    this.#document = nextDocument;
    this.#selection = nextSelection;
    if (hasDocumentChange) this.#saveState = { ...this.#saveState, dirty: true };
    this.#history.push({ before, after: { document: this.getDocument(), selection: this.getSelection() }, commands });
    this.#emitChanged(hasDocumentChange);
    return { document: this.getDocument(), selection: this.getSelection(), changed: true };
  }

  canDispatch(command: EditorCommand): boolean {
    return validateDispatchCommand(command, this.#readOnly, "single").ok;
  }

  getSelection(): EditorSelection | null {
    return this.#selection ? JSON.parse(JSON.stringify(this.#selection)) : null;
  }

  setSelection(selection: EditorSelection | null): void {
    this.#setSelection(selection, false);
  }

  getSaveState(): SaveState {
    return { ...this.#saveState };
  }

  getPublishState(): PublishState {
    return { ...this.#publishState };
  }

  getValidationSummary(): ValidationSummary {
    const validation = validateDocument(this.#document, this.#registry);
    return {
      valid: validation.valid,
      errorCount: validation.errors.length,
      warningCount: validation.warnings.length,
      firstError: validation.errors[0],
    };
  }

  setReadOnly(readOnly: boolean): void {
    const next = Boolean(readOnly);
    if (this.#readOnly === next) return;
    this.#readOnly = next;
    this.#events.emit({ type: "readOnly:changed", readOnly: next });
  }

  checkpoint(label: string): HistoryCheckpoint {
    const checkpoint = {
      label: String(label || "checkpoint"),
      createdAt: new Date().toISOString(),
      canUndo: this.#history.canUndo,
      canRedo: this.#history.canRedo,
    };
    this.#events.emit({ type: "history:checkpoint", checkpoint });
    return checkpoint;
  }

  undo(): EditorCommandResult {
    const snapshot = this.#history.undo({ document: this.getDocument(), selection: this.getSelection() });
    if (!snapshot) return { document: this.getDocument(), selection: this.getSelection(), changed: false };
    this.#document = snapshot.before.document;
    this.#selection = snapshot.before.selection;
    this.#saveState = { ...this.#saveState, dirty: true };
    this.#emitChanged(true);
    return { document: this.getDocument(), selection: this.getSelection(), changed: true };
  }

  redo(): EditorCommandResult {
    const snapshot = this.#history.redo({ document: this.getDocument(), selection: this.getSelection() });
    if (!snapshot) return { document: this.getDocument(), selection: this.getSelection(), changed: false };
    this.#document = snapshot.after.document;
    this.#selection = snapshot.after.selection;
    this.#saveState = { ...this.#saveState, dirty: true };
    this.#emitChanged(true);
    return { document: this.getDocument(), selection: this.getSelection(), changed: true };
  }

  save(context: SaveContext = { reason: "manual" }): SaveRequest {
    const document = sanitizeDocument(this.#document, this.#registry);
    const validation = validateDocument(document, this.#registry);
    for (const error of validation.errors) this.#emitError(error);
    const request: SaveRequest = {
      document,
      context,
      state: { ...this.#saveState, saving: true, lastRequestedAt: new Date().toISOString() },
    };
    this.#saveState = request.state;
    delete this.#saveState.error;
    request.state = this.getSaveState();
    this.#events.emit({ type: "save:requested", request });
    return request;
  }

  completeSave(state: Partial<SaveState> = {}): SaveState {
    const normalizedState = normalizeCompletionError(state, "Save failed.");
    const failed = Object.prototype.hasOwnProperty.call(normalizedState, "error") && normalizedState.error !== undefined;
    this.#saveState = { ...this.#saveState, ...normalizedState, dirty: failed, saving: false };
    if (!Object.prototype.hasOwnProperty.call(state, "error") || state.error === undefined) delete this.#saveState.error;
    if (failed) this.#emitError(editorError("save.failed", this.#saveState.error ?? "Save failed."));
    return this.getSaveState();
  }

  failSave(error: string): SaveState {
    this.#saveState = { ...this.#saveState, dirty: true, saving: false, error: normalizeStateError(error, "Save failed.") };
    this.#emitError(editorError("save.failed", this.#saveState.error ?? "Save failed."));
    return this.getSaveState();
  }

  requestPublish(context: PublishContext = { reason: "manual" }): PublishRequest {
    const document = sanitizeDocument(this.#document, this.#registry);
    const validation = validateDocument(document, this.#registry);
    for (const error of validation.errors) this.#emitError(error);
    this.#publishState = { ...this.#publishState, publishing: true, lastRequestedAt: new Date().toISOString() };
    delete this.#publishState.error;
    const request = { document, context, validation, state: this.getPublishState() };
    this.#events.emit({ type: "publish:requested", request });
    return request;
  }

  completePublish(state: Partial<PublishState> = {}): PublishState {
    const normalizedState = normalizeCompletionError(state, "Publish failed.");
    this.#publishState = { ...this.#publishState, ...normalizedState, publishing: false, lastCompletedAt: new Date().toISOString() };
    if (!Object.prototype.hasOwnProperty.call(state, "error") || state.error === undefined) delete this.#publishState.error;
    if (this.#publishState.error !== undefined) {
      delete this.#publishState.lastCompletedAt;
      this.#emitError(editorError("publish.failed", this.#publishState.error ?? "Publish failed."));
      this.#events.emit({ type: "publish:failed", state: this.getPublishState() });
      return this.getPublishState();
    }
    this.#events.emit({ type: "publish:completed", state: this.getPublishState() });
    return this.getPublishState();
  }

  failPublish(error: string): PublishState {
    this.#publishState = { ...this.#publishState, publishing: false, error: normalizeStateError(error, "Publish failed.") };
    delete this.#publishState.lastCompletedAt;
    this.#emitError(editorError("publish.failed", this.#publishState.error ?? "Publish failed."));
    this.#events.emit({ type: "publish:failed", state: this.getPublishState() });
    return this.getPublishState();
  }

  subscribe(listener: EditorEventListener): Unsubscribe {
    return this.#events.subscribe(listener);
  }

  destroy(): void {
    this.#events.clear();
  }

  #applyDocumentCommand(command: EditorCommand, pushHistory: boolean): EditorCommandResult {
    const before = { document: this.getDocument(), selection: this.getSelection() };
    const result = applyCommand(this.#document, command, this.#registry);
    if (!result.changed || result.errors.length > 0) {
      for (const error of result.errors) this.#emitError(error);
      return { document: this.getDocument(), selection: this.getSelection(), changed: false, errors: result.errors };
    }
    this.#document = sanitizeDocument(normalizeDocument(result.document, this.#registry), this.#registry);
    this.#selection = normalizeSelection(this.#document, this.#selection);
    this.#saveState = { ...this.#saveState, dirty: true };
    if (pushHistory) this.#history.push({ before, after: { document: this.getDocument(), selection: this.getSelection() }, commands: [command] });
    this.#emitChanged(true);
    return { document: this.getDocument(), selection: this.getSelection(), changed: true };
  }

  #setSelection(selection: EditorSelection | null, pushHistory: boolean): EditorCommandResult {
    const normalized = normalizeSelection(this.#document, selection);
    if (selection !== null && normalized === null) return this.#error("selection.invalid", "Selection must reference valid document positions.");
    if (sameSelection(this.#selection, normalized)) return { document: this.getDocument(), selection: this.getSelection(), changed: false };
    const before = { document: this.getDocument(), selection: this.getSelection() };
    this.#selection = normalized;
    if (pushHistory) this.#history.push({ before, after: { document: this.getDocument(), selection: this.getSelection() }, commands: [{ type: "set-selection", payload: { selection } }] });
    this.#emitChanged(false);
    return { document: this.getDocument(), selection: this.getSelection(), changed: true };
  }

  #requestSave(context?: SaveContext): EditorCommandResult {
    return { document: this.getDocument(), selection: this.getSelection(), changed: false, request: this.save(context) };
  }

  #requestPublish(context?: PublishContext): EditorCommandResult {
    return { document: this.getDocument(), selection: this.getSelection(), changed: false, request: this.requestPublish(context) };
  }

  #emitChanged(documentChanged: boolean): void {
    if (documentChanged) this.#events.emit({ type: "document:changed", document: this.getDocument() });
    this.#events.emit({ type: "selection:changed", selection: this.getSelection() });
    this.#events.emit({ type: "history:changed", canUndo: this.#history.canUndo, canRedo: this.#history.canRedo });
    this.#emitValidation();
  }

  #emitValidation(): void {
    const validation = validateDocument(this.#document, this.#registry);
    this.#events.emit({ type: "validation:changed", validation });
    for (const error of validation.errors) this.#emitError(error);
  }

  #emitError(error: EditorError): void {
    this.#events.emit({ type: "error", error });
  }

  #fail(error: EditorError): EditorCommandResult {
    this.#emitError(error);
    return { document: this.getDocument(), selection: this.getSelection(), changed: false, errors: [error] };
  }

  #error(code: string, message: string): EditorCommandResult {
    return this.#fail(editorError(code, message));
  }
}

export function createEditor(config: EditorConfig = {}): EditorController {
  return new HeadlessEditorController(config);
}

function isEditorCommand(value: unknown): value is EditorCommand {
  return typeof value === "object" && value !== null && !Array.isArray(value) && typeof (value as EditorCommand).type === "string" && "payload" in value;
}

function validateDispatchCommand(value: unknown, readOnly: boolean, mode: DispatchValidationMode): DispatchCommandValidation {
  if (!isEditorCommand(value)) return { ok: false, error: editorError("command.invalid", "Command must be an object with a string type.") };
  if (!knownCommands.has(value.type)) return { ok: false, error: editorError("command.unknown", `Command '${value.type}' is not registered.`) };
  if (mode === "batch" && (value.type === "save" || value.type === "request-publish")) return { ok: false, error: editorError("command.batch.unsupported", "Save and publish commands cannot be batched.") };
  if (readOnly && mutableCommands.has(value.type)) return { ok: false, error: editorError("command.readOnly", `Command '${value.type}' is not allowed in read-only mode.`) };
  return { ok: true, command: value };
}

function commandPayload<TPayload extends object>(command: EditorCommand): Partial<TPayload> {
  return asRecord(command.payload) as Partial<TPayload>;
}

function commandSelection(command: EditorCommand): EditorSelection | null {
  return commandPayload<SetSelectionPayload>(command).selection ?? null;
}

function commandSelectionIsExplicitNull(command: EditorCommand): boolean {
  return commandPayload<SetSelectionPayload>(command).selection === null;
}

function commandContext<TContext>(command: EditorCommand): TContext | undefined {
  return commandPayload<{ context?: TContext }>(command).context;
}
