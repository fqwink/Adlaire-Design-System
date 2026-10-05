import {
  COMPONENT_CONTRACTS,
  componentContractAccessibilityRecords,
  componentContractCoverageGaps,
  componentContractHooks,
  componentContractIds,
  componentContractRequiredClasses,
  componentContractsRequiringBehavior,
} from "../UI/component-contracts.ts";
import {
  UI_INTERACTION_CONTRACTS,
  uiInteractionAuditRecords,
  uiInteractionGeneratedTargets,
  uiInteractionHooks,
  uiInteractionSampleRequiredHooks,
  uiInteractionStateAttributes,
} from "../UI/interaction-contracts.ts";

function assert(condition: unknown, message: string): asserts condition {
  if (!condition) throw new Error(message);
}

function assertEquals<T>(actual: T, expected: T, message: string): void {
  if (JSON.stringify(actual) !== JSON.stringify(expected)) {
    throw new Error(`${message}: expected ${JSON.stringify(expected)}, got ${JSON.stringify(actual)}`);
  }
}

function duplicateValues(values: readonly string[]): readonly string[] {
  const counts = new Map<string, number>();
  for (const value of values) counts.set(value, (counts.get(value) ?? 0) + 1);
  return Array.from(counts.entries()).filter(([, count]) => count > 1).map(([value]) => value);
}

Deno.test("component contract metadata keeps ids, classes, and coverage stable", () => {
  const ids = componentContractIds();
  const gaps = componentContractCoverageGaps().filter((gap) => gap.missingCoverage.length > 0);

  assert(COMPONENT_CONTRACTS.length >= 31, "component contract count must stay at or above the manifest minimum");
  assertEquals(duplicateValues(ids), [], "component contract ids must be unique");
  assertEquals(gaps, [], "component contracts must keep required coverage");
  assert(componentContractRequiredClasses().length > COMPONENT_CONTRACTS.length, "component contracts must expose required class coverage");
  assert(componentContractAccessibilityRecords().every((record) => record.ariaRequirements.length > 0 || record.stateAttributes.length > 0), "accessibility records must carry aria or state coverage");
});

Deno.test("interaction contract metadata keeps hooks and generated targets stable", () => {
  const hooks = uiInteractionHooks();
  const auditRecords = uiInteractionAuditRecords();

  assert(UI_INTERACTION_CONTRACTS.length >= 99, "interaction contract count must stay at or above the manifest minimum");
  assertEquals(duplicateValues(hooks), [], "interaction hooks must be unique");
  assertEquals(auditRecords.length, UI_INTERACTION_CONTRACTS.length, "audit records must map one-to-one from interaction contracts");
  assertEquals(
    Array.from(uiInteractionGeneratedTargets()).sort(),
    ["EditorUI/wysiwyg.js", "UI/components.js", "UI/content.js", "UI/forms.js"].sort(),
    "interaction targets must stay within generated UI behavior outputs",
  );
  assert(uiInteractionSampleRequiredHooks().length > 0, "sample-required hooks must be explicit");
  assert(uiInteractionStateAttributes().includes("aria-expanded"), "state attributes must include common disclosure state");
});

Deno.test("behavior-owning component contracts reference checked interaction hooks", () => {
  const interactionHooks = new Set(uiInteractionHooks());
  const componentHooks = componentContractHooks();
  const missing = componentHooks.filter((hook) => !interactionHooks.has(hook));

  assert(componentContractsRequiringBehavior().length > 0, "behavior-owning component contracts must be discoverable");
  assertEquals(missing, [], "component hooks must be represented by interaction contracts");
});
