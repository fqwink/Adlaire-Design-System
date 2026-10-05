import {
  CSS_TARGETS,
  generateCssFiles,
  getCssCompilerManifest,
} from "../CSS/index.ts";

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

function unique(values: readonly string[]): readonly string[] {
  return Array.from(new Set(values));
}

Deno.test("CSS compiler manifest mirrors generated CSS targets", () => {
  const manifest = getCssCompilerManifest();
  const targetPaths = CSS_TARGETS.map((target) => target.path);

  assertEquals(
    manifest.targets,
    targetPaths,
    "manifest targets must preserve CSS_TARGETS order",
  );
  assertEquals(
    unique(manifest.targets),
    manifest.targets,
    "manifest targets must be unique",
  );
  assert(
    manifest.sourceModules.includes("TypeScript/CSS/tokens.ts"),
    "manifest must include token source",
  );
  assert(
    manifest.sourceModules.includes("TypeScript/CSS/rules.ts"),
    "manifest must include CSS rule aggregator",
  );
});

Deno.test("generated CSS files preserve target identity", () => {
  const generated = generateCssFiles();
  const generatedPaths = generated.map((file) => file.path);

  assertEquals(
    generatedPaths,
    CSS_TARGETS.map((target) => target.path),
    "generated CSS order must match targets",
  );

  for (const target of CSS_TARGETS) {
    const file = generated.find((entry) => entry.path === target.path);
    assert(file, `missing generated CSS file for ${target.path}`);
    assertEquals(
      file.css.split("\n")[0],
      target.firstLine,
      `${target.path} first line must match contract`,
    );
    assert(
      file.css.length > target.firstLine.length,
      `${target.path} must contain CSS beyond the identity header`,
    );
  }
});

Deno.test("CSS target source modules stay explicit and covered", () => {
  const manifest = getCssCompilerManifest();
  const requiredFiles = new Set(manifest.requiredFiles);

  for (const target of CSS_TARGETS) {
    assert(
      target.sourceModules.length > 0,
      `${target.path} must list source modules`,
    );
    assertEquals(
      unique([...target.sourceModules]),
      [...target.sourceModules],
      `${target.path} source modules must be unique`,
    );
    assert(
      target.sourceModules.every((source) => source.endsWith(".ts")),
      `${target.path} source modules must be TypeScript files`,
    );
    assert(
      target.kind === "token" || target.sourceModules.includes("rules.ts"),
      `${target.path} must include the shared rules source`,
    );
    for (const source of target.sourceModules) {
      assert(
        requiredFiles.has(`TypeScript/CSS/${source}`),
        `${target.path} source module must be listed in required files: ${source}`,
      );
    }
  }
});
