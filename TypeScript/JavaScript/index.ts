import {
  GENERATED_JAVASCRIPT_TARGETS,
  generatedJavaScriptSourcePaths,
  type GeneratedJavaScriptTarget,
  generatedJavaScriptTargetPaths,
} from "./manifest.ts";

export * from "./manifest.ts";

export interface GeneratedJavaScriptCompilerManifest {
  readonly checkName: "check-generated-js";
  readonly sourceFiles: readonly string[];
  readonly targets: readonly string[];
  readonly integrityAlgorithm: "sha256";
}

export interface GeneratedJavaScriptIntegrityFailure {
  readonly path: string;
  readonly label: string;
  readonly reason: "header" | "bytes" | "sha256";
  readonly expected: string | number;
  readonly actual: string | number;
}

type DenoLike = {
  readonly args?: readonly string[];
  readFile?: (path: string) => Promise<Uint8Array>;
  exit?: (code?: number) => never;
};

declare const Deno: DenoLike | undefined;

const decoder = new TextDecoder();

export function getGeneratedJavaScriptCompilerManifest(): GeneratedJavaScriptCompilerManifest {
  return {
    checkName: "check-generated-js",
    sourceFiles: generatedJavaScriptSourcePaths(),
    targets: generatedJavaScriptTargetPaths(),
    integrityAlgorithm: "sha256",
  };
}

async function sha256Hex(bytes: Uint8Array): Promise<string> {
  const digest = await crypto.subtle.digest("SHA-256", bytes);
  return Array.from(new Uint8Array(digest))
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
}

function firstLine(bytes: Uint8Array): string {
  return decoder.decode(bytes).split("\n")[0] ?? "";
}

export async function verifyGeneratedJavaScriptTarget(
  target: GeneratedJavaScriptTarget,
  readFile: (path: string) => Promise<Uint8Array>,
): Promise<readonly GeneratedJavaScriptIntegrityFailure[]> {
  const bytes = await readFile(target.generated);
  const failures: GeneratedJavaScriptIntegrityFailure[] = [];
  const header = firstLine(bytes);
  const sha256 = await sha256Hex(bytes);

  if (header !== target.header) {
    failures.push({
      path: target.generated,
      label: target.label,
      reason: "header",
      expected: target.header,
      actual: header,
    });
  }
  if (bytes.byteLength !== target.bytes) {
    failures.push({
      path: target.generated,
      label: target.label,
      reason: "bytes",
      expected: target.bytes,
      actual: bytes.byteLength,
    });
  }
  if (sha256 !== target.sha256) {
    failures.push({
      path: target.generated,
      label: target.label,
      reason: "sha256",
      expected: target.sha256,
      actual: sha256,
    });
  }

  return failures;
}

export async function checkGeneratedJavaScriptTargets(
  readFile: (path: string) => Promise<Uint8Array>,
): Promise<readonly GeneratedJavaScriptIntegrityFailure[]> {
  const results = await Promise.all(
    GENERATED_JAVASCRIPT_TARGETS.map((target) =>
      verifyGeneratedJavaScriptTarget(target, readFile)
    ),
  );
  return results.flat();
}

function printLine(line: string): void {
  globalThis.console.log(line);
}

function printFailure(failure: GeneratedJavaScriptIntegrityFailure): void {
  printLine(
    `generated JavaScript ${failure.reason} mismatch: ${failure.path} ` +
      `(expected ${failure.expected}, got ${failure.actual})`,
  );
}

async function main(args: readonly string[]): Promise<void> {
  const command = args[0] ?? "--list";

  if (command === "--list") {
    getGeneratedJavaScriptCompilerManifest().targets.forEach(printLine);
    return;
  }

  if (command === "check-generated-js") {
    if (typeof Deno === "undefined" || !Deno.readFile) {
      throw new Error("check-generated-js requires Deno.readFile.");
    }
    const failures = await checkGeneratedJavaScriptTargets(Deno.readFile);
    failures.forEach(printFailure);
    if (failures.length > 0) {
      Deno.exit?.(1);
      return;
    }
    printLine("check-generated-js-ok");
    return;
  }

  printLine(
    "usage: deno run --allow-read TypeScript/JavaScript/index.ts [--list|check-generated-js]",
  );
  Deno?.exit?.(1);
}

if (typeof Deno !== "undefined" && import.meta.main) {
  await main(Deno.args ?? []);
}
