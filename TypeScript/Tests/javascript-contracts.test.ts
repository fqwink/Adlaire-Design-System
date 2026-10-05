import {
  checkGeneratedJavaScriptTargets,
  GENERATED_JAVASCRIPT_TARGETS,
  getGeneratedJavaScriptCompilerManifest,
} from "../JavaScript/index.ts";

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

Deno.test("generated JavaScript compiler manifest mirrors integrity targets", () => {
  const manifest = getGeneratedJavaScriptCompilerManifest();
  const generatedPaths = GENERATED_JAVASCRIPT_TARGETS.map((target) =>
    target.generated
  );
  const sourcePaths = GENERATED_JAVASCRIPT_TARGETS.map((target) =>
    target.source
  );

  assertEquals(
    manifest.targets,
    generatedPaths,
    "generated JavaScript targets must preserve manifest order",
  );
  assertEquals(
    manifest.sourceFiles,
    sourcePaths,
    "generated JavaScript sources must preserve manifest order",
  );
  assertEquals(
    unique(manifest.targets),
    manifest.targets,
    "generated JavaScript targets must be unique",
  );
  assertEquals(
    manifest.integrityAlgorithm,
    "sha256",
    "generated JavaScript integrity algorithm must stay fixed",
  );
});

Deno.test("generated JavaScript targets match JSON contract manifest", async () => {
  const contract = JSON.parse(
    await Deno.readTextFile("Tools/check/adlaire-design-contracts.json"),
  );
  const pairs = contract.generatedJavaScriptPairs as Array<{
    label: string;
    source: string;
    generated: string;
    header: string;
    bytes: number;
    sha256: string;
    parityTerms: readonly string[];
  }>;

  assertEquals(
    pairs.map((pair) => pair.generated),
    GENERATED_JAVASCRIPT_TARGETS.map((target) => target.generated),
    "JSON generated JavaScript outputs must match TypeScript manifest",
  );
  assertEquals(
    pairs,
    GENERATED_JAVASCRIPT_TARGETS,
    "JSON generated JavaScript pair metadata must match TypeScript manifest",
  );
});

Deno.test("generated JavaScript files keep recorded integrity", async () => {
  const failures = await checkGeneratedJavaScriptTargets(Deno.readFile);

  assertEquals(
    failures,
    [],
    "generated JavaScript files must match recorded headers, sizes, and hashes",
  );
  assert(
    GENERATED_JAVASCRIPT_TARGETS.every((target) =>
      target.sha256.length === 64 && target.bytes > target.header.length
    ),
    "generated JavaScript integrity metadata must be complete",
  );
});
