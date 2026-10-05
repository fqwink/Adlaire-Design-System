export type UIInteractionSurface =
  | "components"
  | "forms"
  | "content"
  | "wysiwyg";
export type UIInteractionEvent = "click" | "input" | "change" | "keydown";
export type UIInteractionSamplePolicy = "required" | "optional";
export type UIInteractionFallbackPolicy =
  | "strict-target"
  | "closest-root"
  | "document-query"
  | "no-target";
export type UIInteractionStateScope =
  | "trigger"
  | "target"
  | "group"
  | "document";
export type UIInteractionInputModality =
  | "pointer"
  | "keyboard"
  | "text-input"
  | "system";

export interface UIInteractionContract {
  readonly surface: UIInteractionSurface;
  readonly hook: string;
  readonly event: UIInteractionEvent;
  readonly source: string;
  readonly generated: string;
  readonly sampleRequired: boolean;
  readonly stateAttribute?: string;
}

export interface UIInteractionAuditRecord {
  readonly surface: UIInteractionSurface;
  readonly hook: string;
  readonly event: UIInteractionEvent;
  readonly source: string;
  readonly generated: string;
  readonly samplePolicy: UIInteractionSamplePolicy;
  readonly stateAttribute: string | null;
  readonly fallbackPolicy: UIInteractionFallbackPolicy;
  readonly stateScope: UIInteractionStateScope;
  readonly inputModality: UIInteractionInputModality;
}

export const UI_INTERACTION_PRIMITIVES: readonly string[] = [
  "eventSourceElement",
  "hookSelector",
  "closestBoundTrigger",
  "queryInteractionRoot",
  "isDisabledInteraction",
  "isNativeInteractive",
  "setBooleanAttribute",
  "setOpenState",
  "setOptionalText",
  "safeDocumentQuery",
  "safeDocumentQueryAll",
  "safeScopedQuery",
  "safeScopedQueryAll",
  "writeClipboardText",
] as const;

const componentSource = "TypeScript/UI/components.ts";
const componentGenerated = "UI/components.js";
const formSource = "TypeScript/UI/forms.ts";
const formGenerated = "UI/forms.js";
const contentSource = "TypeScript/UI/content.ts";
const contentGenerated = "UI/content.js";
const wysiwygSource = "TypeScript/EditorUI/wysiwyg.ts";
const wysiwygGenerated = "EditorUI/wysiwyg.js";

export const UI_INTERACTION_CONTRACTS: readonly UIInteractionContract[] = [
  {
    surface: "components",
    hook: "data-adlaire-toggle",
    event: "click",
    source: componentSource,
    generated: componentGenerated,
    sampleRequired: false,
    stateAttribute: "aria-expanded",
  },
  {
    surface: "components",
    hook: "data-adlaire-dismiss",
    event: "click",
    source: componentSource,
    generated: componentGenerated,
    sampleRequired: true,
  },
  {
    surface: "components",
    hook: "data-adlaire-toast-dismiss",
    event: "click",
    source: componentSource,
    generated: componentGenerated,
    sampleRequired: true,
  },
  {
    surface: "components",
    hook: "data-adlaire-tab",
    event: "click",
    source: componentSource,
    generated: componentGenerated,
    sampleRequired: true,
    stateAttribute: "aria-selected",
  },
  {
    surface: "components",
    hook: "data-adlaire-sidebar-toggle",
    event: "click",
    source: componentSource,
    generated: componentGenerated,
    sampleRequired: false,
    stateAttribute: "aria-expanded",
  },
  {
    surface: "components",
    hook: "data-adlaire-tree-toggle",
    event: "click",
    source: componentSource,
    generated: componentGenerated,
    sampleRequired: true,
    stateAttribute: "aria-expanded",
  },
  {
    surface: "components",
    hook: "data-adlaire-workspace-tab",
    event: "click",
    source: componentSource,
    generated: componentGenerated,
    sampleRequired: true,
    stateAttribute: "aria-selected",
  },
  {
    surface: "components",
    hook: "data-adlaire-context-menu",
    event: "click",
    source: componentSource,
    generated: componentGenerated,
    sampleRequired: true,
    stateAttribute: "aria-expanded",
  },
  {
    surface: "components",
    hook: "data-adlaire-split-button-toggle",
    event: "click",
    source: componentSource,
    generated: componentGenerated,
    sampleRequired: true,
    stateAttribute: "aria-expanded",
  },
  {
    surface: "components",
    hook: "data-adlaire-overflow-toggle",
    event: "click",
    source: componentSource,
    generated: componentGenerated,
    sampleRequired: true,
    stateAttribute: "aria-expanded",
  },
  {
    surface: "components",
    hook: "data-adlaire-dock-toggle",
    event: "click",
    source: componentSource,
    generated: componentGenerated,
    sampleRequired: true,
    stateAttribute: "aria-expanded",
  },
  {
    surface: "components",
    hook: "data-adlaire-folder-toggle",
    event: "click",
    source: componentSource,
    generated: componentGenerated,
    sampleRequired: true,
    stateAttribute: "aria-expanded",
  },
  {
    surface: "components",
    hook: "data-adlaire-policy-exception-toggle",
    event: "click",
    source: componentSource,
    generated: componentGenerated,
    sampleRequired: true,
    stateAttribute: "aria-expanded",
  },
  {
    surface: "components",
    hook: "data-adlaire-resizable-panel",
    event: "click",
    source: componentSource,
    generated: componentGenerated,
    sampleRequired: true,
    stateAttribute: "data-adlaire-panel-size",
  },
  {
    surface: "components",
    hook: "data-adlaire-resize-handle",
    event: "click",
    source: componentSource,
    generated: componentGenerated,
    sampleRequired: true,
    stateAttribute: "aria-valuenow",
  },
  {
    surface: "components",
    hook: "data-adlaire-preview-compare",
    event: "input",
    source: componentSource,
    generated: componentGenerated,
    sampleRequired: true,
  },
  {
    surface: "components",
    hook: "data-adlaire-time-slot",
    event: "click",
    source: componentSource,
    generated: componentGenerated,
    sampleRequired: true,
    stateAttribute: "aria-selected",
  },
  {
    surface: "components",
    hook: "data-adlaire-floor-select",
    event: "click",
    source: componentSource,
    generated: componentGenerated,
    sampleRequired: true,
    stateAttribute: "aria-pressed",
  },
  {
    surface: "components",
    hook: "data-adlaire-option-select",
    event: "click",
    source: componentSource,
    generated: componentGenerated,
    sampleRequired: true,
    stateAttribute: "aria-selected",
  },
  {
    surface: "components",
    hook: "data-adlaire-shift-select",
    event: "click",
    source: componentSource,
    generated: componentGenerated,
    sampleRequired: true,
    stateAttribute: "aria-selected",
  },
  {
    surface: "components",
    hook: "data-adlaire-pipeline-stage-select",
    event: "click",
    source: componentSource,
    generated: componentGenerated,
    sampleRequired: true,
    stateAttribute: "aria-current",
  },
  {
    surface: "components",
    hook: "data-adlaire-confidence-select",
    event: "click",
    source: componentSource,
    generated: componentGenerated,
    sampleRequired: true,
    stateAttribute: "aria-pressed",
  },
  {
    surface: "components",
    hook: "data-adlaire-milestone-select",
    event: "click",
    source: componentSource,
    generated: componentGenerated,
    sampleRequired: true,
    stateAttribute: "aria-current",
  },
  {
    surface: "components",
    hook: "data-adlaire-route-select",
    event: "click",
    source: componentSource,
    generated: componentGenerated,
    sampleRequired: true,
    stateAttribute: "aria-selected",
  },
  {
    surface: "components",
    hook: "data-adlaire-evidence-select",
    event: "click",
    source: componentSource,
    generated: componentGenerated,
    sampleRequired: true,
    stateAttribute: "aria-selected",
  },
  {
    surface: "components",
    hook: "data-adlaire-ticket-priority-select",
    event: "click",
    source: componentSource,
    generated: componentGenerated,
    sampleRequired: true,
    stateAttribute: "aria-selected",
  },
  {
    surface: "components",
    hook: "data-adlaire-report-parameter-select",
    event: "click",
    source: componentSource,
    generated: componentGenerated,
    sampleRequired: true,
    stateAttribute: "aria-pressed",
  },
  {
    surface: "components",
    hook: "data-adlaire-channel-select",
    event: "click",
    source: componentSource,
    generated: componentGenerated,
    sampleRequired: true,
    stateAttribute: "aria-selected",
  },
  {
    surface: "components",
    hook: "data-adlaire-editorial-gate-select",
    event: "click",
    source: componentSource,
    generated: componentGenerated,
    sampleRequired: true,
    stateAttribute: "aria-selected",
  },
  {
    surface: "components",
    hook: "data-adlaire-locale-select",
    event: "click",
    source: componentSource,
    generated: componentGenerated,
    sampleRequired: true,
    stateAttribute: "aria-selected",
  },
  {
    surface: "components",
    hook: "data-adlaire-moderation-decision",
    event: "click",
    source: componentSource,
    generated: componentGenerated,
    sampleRequired: true,
    stateAttribute: "aria-pressed",
  },
  {
    surface: "components",
    hook: "data-adlaire-device-select",
    event: "click",
    source: componentSource,
    generated: componentGenerated,
    sampleRequired: true,
    stateAttribute: "aria-selected",
  },
  {
    surface: "components",
    hook: "data-adlaire-deployment-ring-select",
    event: "click",
    source: componentSource,
    generated: componentGenerated,
    sampleRequired: true,
    stateAttribute: "aria-selected",
  },
  {
    surface: "components",
    hook: "data-adlaire-fare-option-select",
    event: "click",
    source: componentSource,
    generated: componentGenerated,
    sampleRequired: true,
    stateAttribute: "aria-selected",
  },
  {
    surface: "components",
    hook: "data-adlaire-room-select",
    event: "click",
    source: componentSource,
    generated: componentGenerated,
    sampleRequired: true,
    stateAttribute: "aria-selected",
  },
  {
    surface: "components",
    hook: "data-adlaire-permit-step-select",
    event: "click",
    source: componentSource,
    generated: componentGenerated,
    sampleRequired: true,
    stateAttribute: "aria-selected",
  },
  {
    surface: "components",
    hook: "data-adlaire-volunteer-shift-select",
    event: "click",
    source: componentSource,
    generated: componentGenerated,
    sampleRequired: true,
    stateAttribute: "aria-selected",
  },
  {
    surface: "components",
    hook: "data-adlaire-demand-response-select",
    event: "click",
    source: componentSource,
    generated: componentGenerated,
    sampleRequired: true,
    stateAttribute: "aria-selected",
  },
  {
    surface: "components",
    hook: "data-adlaire-outage-report-select",
    event: "click",
    source: componentSource,
    generated: componentGenerated,
    sampleRequired: true,
    stateAttribute: "aria-selected",
  },
  {
    surface: "components",
    hook: "data-adlaire-density-select",
    event: "click",
    source: componentSource,
    generated: componentGenerated,
    sampleRequired: true,
    stateAttribute: "aria-pressed",
  },
  {
    surface: "components",
    hook: "data-adlaire-saved-view-select",
    event: "click",
    source: componentSource,
    generated: componentGenerated,
    sampleRequired: true,
    stateAttribute: "aria-pressed",
  },
  {
    surface: "components",
    hook: "data-adlaire-checkpoint-select",
    event: "click",
    source: componentSource,
    generated: componentGenerated,
    sampleRequired: true,
    stateAttribute: "aria-selected",
  },
  {
    surface: "components",
    hook: "data-adlaire-sdk-select",
    event: "click",
    source: componentSource,
    generated: componentGenerated,
    sampleRequired: true,
    stateAttribute: "aria-pressed",
  },
  {
    surface: "components",
    hook: "data-adlaire-environment-select",
    event: "click",
    source: componentSource,
    generated: componentGenerated,
    sampleRequired: true,
    stateAttribute: "aria-selected",
  },
  {
    surface: "components",
    hook: "data-adlaire-theme-select",
    event: "click",
    source: componentSource,
    generated: componentGenerated,
    sampleRequired: true,
    stateAttribute: "aria-pressed",
  },
  {
    surface: "components",
    hook: "data-adlaire-policy-acknowledgement",
    event: "click",
    source: componentSource,
    generated: componentGenerated,
    sampleRequired: true,
    stateAttribute: "aria-pressed",
  },
  {
    surface: "components",
    hook: "data-adlaire-attestation-toggle",
    event: "click",
    source: componentSource,
    generated: componentGenerated,
    sampleRequired: true,
    stateAttribute: "aria-pressed",
  },
  {
    surface: "components",
    hook: "data-adlaire-care-plan-check",
    event: "click",
    source: componentSource,
    generated: componentGenerated,
    sampleRequired: true,
    stateAttribute: "aria-checked",
  },
  {
    surface: "components",
    hook: "data-adlaire-success-playbook-check",
    event: "click",
    source: componentSource,
    generated: componentGenerated,
    sampleRequired: true,
    stateAttribute: "aria-checked",
  },
  {
    surface: "components",
    hook: "data-adlaire-quiet-hours-toggle",
    event: "click",
    source: componentSource,
    generated: componentGenerated,
    sampleRequired: true,
    stateAttribute: "aria-pressed",
  },
  {
    surface: "components",
    hook: "data-adlaire-topic-preference-toggle",
    event: "click",
    source: componentSource,
    generated: componentGenerated,
    sampleRequired: true,
    stateAttribute: "aria-checked",
  },
  {
    surface: "components",
    hook: "data-adlaire-handoff-check",
    event: "click",
    source: componentSource,
    generated: componentGenerated,
    sampleRequired: true,
    stateAttribute: "aria-checked",
  },
  {
    surface: "components",
    hook: "data-adlaire-recovery-task-check",
    event: "click",
    source: componentSource,
    generated: componentGenerated,
    sampleRequired: true,
    stateAttribute: "aria-checked",
  },
  {
    surface: "components",
    hook: "data-adlaire-eligibility-check",
    event: "click",
    source: componentSource,
    generated: componentGenerated,
    sampleRequired: true,
    stateAttribute: "aria-checked",
  },
  {
    surface: "components",
    hook: "data-adlaire-disclosure-check",
    event: "click",
    source: componentSource,
    generated: componentGenerated,
    sampleRequired: true,
    stateAttribute: "aria-checked",
  },
  {
    surface: "components",
    hook: "data-adlaire-bulk-selection-toggle",
    event: "click",
    source: componentSource,
    generated: componentGenerated,
    sampleRequired: true,
    stateAttribute: "aria-selected",
  },
  {
    surface: "components",
    hook: "data-adlaire-verification-check",
    event: "click",
    source: componentSource,
    generated: componentGenerated,
    sampleRequired: true,
    stateAttribute: "aria-checked",
  },
  {
    surface: "components",
    hook: "data-adlaire-record-row-toggle",
    event: "click",
    source: componentSource,
    generated: componentGenerated,
    sampleRequired: true,
    stateAttribute: "aria-selected",
  },
  {
    surface: "components",
    hook: "data-adlaire-inline-edit-toggle",
    event: "click",
    source: componentSource,
    generated: componentGenerated,
    sampleRequired: true,
    stateAttribute: "aria-pressed",
  },
  {
    surface: "components",
    hook: "data-adlaire-bulk-confirm-toggle",
    event: "click",
    source: componentSource,
    generated: componentGenerated,
    sampleRequired: true,
    stateAttribute: "aria-pressed",
  },
  {
    surface: "components",
    hook: "data-adlaire-tool-permission-toggle",
    event: "click",
    source: componentSource,
    generated: componentGenerated,
    sampleRequired: true,
    stateAttribute: "aria-pressed",
  },
  {
    surface: "components",
    hook: "data-adlaire-approval-gate-toggle",
    event: "click",
    source: componentSource,
    generated: componentGenerated,
    sampleRequired: true,
    stateAttribute: "aria-pressed",
  },
  {
    surface: "components",
    hook: "data-adlaire-notification-policy-toggle",
    event: "click",
    source: componentSource,
    generated: componentGenerated,
    sampleRequired: true,
    stateAttribute: "aria-pressed",
  },
  {
    surface: "components",
    hook: "data-adlaire-connection-test-toggle",
    event: "click",
    source: componentSource,
    generated: componentGenerated,
    sampleRequired: true,
    stateAttribute: "aria-pressed",
  },
  {
    surface: "components",
    hook: "data-adlaire-migration-step-toggle",
    event: "click",
    source: componentSource,
    generated: componentGenerated,
    sampleRequired: true,
    stateAttribute: "aria-checked",
  },
  {
    surface: "components",
    hook: "data-adlaire-dark-mode-toggle",
    event: "click",
    source: componentSource,
    generated: componentGenerated,
    sampleRequired: true,
    stateAttribute: "aria-pressed",
  },
  {
    surface: "components",
    hook: "data-adlaire-high-contrast-toggle",
    event: "click",
    source: componentSource,
    generated: componentGenerated,
    sampleRequired: true,
    stateAttribute: "aria-pressed",
  },
  {
    surface: "components",
    hook: "data-adlaire-token-override-toggle",
    event: "click",
    source: componentSource,
    generated: componentGenerated,
    sampleRequired: true,
    stateAttribute: "aria-checked",
  },
  {
    surface: "components",
    hook: "data-adlaire-column-toggle",
    event: "click",
    source: componentSource,
    generated: componentGenerated,
    sampleRequired: true,
    stateAttribute: "aria-checked",
  },
  {
    surface: "components",
    hook: "data-adlaire-page-select",
    event: "click",
    source: componentSource,
    generated: componentGenerated,
    sampleRequired: true,
    stateAttribute: "aria-current",
  },
  {
    surface: "components",
    hook: "data-adlaire-saved-view-apply",
    event: "click",
    source: componentSource,
    generated: componentGenerated,
    sampleRequired: true,
    stateAttribute: "aria-pressed",
  },
  {
    surface: "forms",
    hook: "data-adlaire-filter-input",
    event: "input",
    source: formSource,
    generated: formGenerated,
    sampleRequired: false,
  },
  {
    surface: "forms",
    hook: "data-adlaire-filter-chip",
    event: "click",
    source: formSource,
    generated: formGenerated,
    sampleRequired: false,
    stateAttribute: "aria-pressed",
  },
  {
    surface: "forms",
    hook: "data-adlaire-combobox-input",
    event: "input",
    source: formSource,
    generated: formGenerated,
    sampleRequired: true,
    stateAttribute: "aria-expanded",
  },
  {
    surface: "forms",
    hook: "data-adlaire-combobox-option",
    event: "click",
    source: formSource,
    generated: formGenerated,
    sampleRequired: true,
    stateAttribute: "aria-selected",
  },
  {
    surface: "forms",
    hook: "data-adlaire-multi-select-option",
    event: "click",
    source: formSource,
    generated: formGenerated,
    sampleRequired: true,
    stateAttribute: "aria-selected",
  },
  {
    surface: "forms",
    hook: "data-adlaire-segmented-option",
    event: "click",
    source: formSource,
    generated: formGenerated,
    sampleRequired: true,
    stateAttribute: "aria-pressed",
  },
  {
    surface: "forms",
    hook: "data-adlaire-radio-card",
    event: "click",
    source: formSource,
    generated: formGenerated,
    sampleRequired: true,
    stateAttribute: "aria-checked",
  },
  {
    surface: "forms",
    hook: "data-adlaire-switch-item",
    event: "click",
    source: formSource,
    generated: formGenerated,
    sampleRequired: true,
    stateAttribute: "aria-checked",
  },
  {
    surface: "forms",
    hook: "data-adlaire-range-input",
    event: "input",
    source: formSource,
    generated: formGenerated,
    sampleRequired: true,
    stateAttribute: "data-adlaire-range-value",
  },
  {
    surface: "forms",
    hook: "data-adlaire-stepper-action",
    event: "click",
    source: formSource,
    generated: formGenerated,
    sampleRequired: true,
  },
  {
    surface: "forms",
    hook: "data-adlaire-token-add",
    event: "click",
    source: formSource,
    generated: formGenerated,
    sampleRequired: true,
  },
  {
    surface: "forms",
    hook: "data-adlaire-token-remove",
    event: "click",
    source: formSource,
    generated: formGenerated,
    sampleRequired: true,
  },
  {
    surface: "forms",
    hook: "data-adlaire-character-count",
    event: "input",
    source: formSource,
    generated: formGenerated,
    sampleRequired: true,
    stateAttribute: "data-adlaire-field-dirty",
  },
  {
    surface: "forms",
    hook: "data-adlaire-date-preset",
    event: "click",
    source: formSource,
    generated: formGenerated,
    sampleRequired: true,
    stateAttribute: "aria-pressed",
  },
  {
    surface: "forms",
    hook: "data-adlaire-file-input",
    event: "change",
    source: formSource,
    generated: formGenerated,
    sampleRequired: true,
  },
  {
    surface: "forms",
    hook: "data-adlaire-toggle-input",
    event: "change",
    source: formSource,
    generated: formGenerated,
    sampleRequired: true,
    stateAttribute: "aria-checked",
  },
  {
    surface: "forms",
    hook: "data-adlaire-validate",
    event: "input",
    source: formSource,
    generated: formGenerated,
    sampleRequired: true,
    stateAttribute: "aria-invalid",
  },
  {
    surface: "forms",
    hook: "data-adlaire-validate-summary",
    event: "input",
    source: formSource,
    generated: formGenerated,
    sampleRequired: true,
  },
  {
    surface: "content",
    hook: "data-adlaire-sort",
    event: "click",
    source: contentSource,
    generated: contentGenerated,
    sampleRequired: true,
    stateAttribute: "aria-sort",
  },
  {
    surface: "content",
    hook: "data-adlaire-code-copy",
    event: "click",
    source: contentSource,
    generated: contentGenerated,
    sampleRequired: true,
    stateAttribute: "data-adlaire-copied",
  },
  {
    surface: "content",
    hook: "data-adlaire-code-line",
    event: "click",
    source: contentSource,
    generated: contentGenerated,
    sampleRequired: false,
    stateAttribute: "aria-selected",
  },
  {
    surface: "content",
    hook: "data-adlaire-toc-link",
    event: "click",
    source: contentSource,
    generated: contentGenerated,
    sampleRequired: true,
    stateAttribute: "aria-current",
  },
  {
    surface: "wysiwyg",
    hook: "data-adlaire-wysiwyg-mode",
    event: "click",
    source: wysiwygSource,
    generated: wysiwygGenerated,
    sampleRequired: true,
    stateAttribute: "aria-pressed",
  },
  {
    surface: "wysiwyg",
    hook: "data-adlaire-wysiwyg-toggle",
    event: "click",
    source: wysiwygSource,
    generated: wysiwygGenerated,
    sampleRequired: true,
    stateAttribute: "aria-expanded",
  },
  {
    surface: "wysiwyg",
    hook: "data-adlaire-wysiwyg-select",
    event: "click",
    source: wysiwygSource,
    generated: wysiwygGenerated,
    sampleRequired: true,
    stateAttribute: "aria-selected",
  },
  {
    surface: "wysiwyg",
    hook: "data-adlaire-wysiwyg-toolbar-group",
    event: "click",
    source: wysiwygSource,
    generated: wysiwygGenerated,
    sampleRequired: true,
    stateAttribute: "aria-pressed",
  },
  {
    surface: "wysiwyg",
    hook: "data-adlaire-wysiwyg-slash-item",
    event: "click",
    source: wysiwygSource,
    generated: wysiwygGenerated,
    sampleRequired: true,
    stateAttribute: "aria-selected",
  },
  {
    surface: "wysiwyg",
    hook: "data-adlaire-wysiwyg-suggestion",
    event: "click",
    source: wysiwygSource,
    generated: wysiwygGenerated,
    sampleRequired: true,
    stateAttribute: "aria-selected",
  },
  {
    surface: "components",
    hook: "componentKeyBinding",
    event: "keydown",
    source: componentSource,
    generated: componentGenerated,
    sampleRequired: false,
  },
  {
    surface: "forms",
    hook: "closeFormPopup",
    event: "keydown",
    source: formSource,
    generated: formGenerated,
    sampleRequired: false,
    stateAttribute: "aria-expanded",
  },
  {
    surface: "content",
    hook: "sortTable",
    event: "keydown",
    source: contentSource,
    generated: contentGenerated,
    sampleRequired: false,
    stateAttribute: "aria-sort",
  },
  {
    surface: "wysiwyg",
    hook: "closeWysiwygSurface",
    event: "keydown",
    source: wysiwygSource,
    generated: wysiwygGenerated,
    sampleRequired: false,
    stateAttribute: "aria-expanded",
  },
] as const;

export function uiInteractionHooks(): readonly string[] {
  return Array.from(
    new Set(UI_INTERACTION_CONTRACTS.map((contract) => contract.hook)),
  );
}

export function uiInteractionContractsByEvent(
  event: UIInteractionEvent,
): readonly UIInteractionContract[] {
  return UI_INTERACTION_CONTRACTS.filter((contract) =>
    contract.event === event
  );
}

export function uiInteractionHooksBySurface(
  surface: UIInteractionSurface,
): readonly string[] {
  return UI_INTERACTION_CONTRACTS.filter((contract) =>
    contract.surface === surface
  ).map((contract) => contract.hook);
}

export function uiInteractionSampleRequiredHooks(): readonly string[] {
  return UI_INTERACTION_CONTRACTS.filter((contract) => contract.sampleRequired)
    .map((contract) => contract.hook);
}

export function uiInteractionGeneratedTargets(): readonly string[] {
  return Array.from(
    new Set(UI_INTERACTION_CONTRACTS.map((contract) => contract.generated)),
  );
}

export function uiInteractionStateAttributes(): readonly string[] {
  return Array.from(
    new Set(
      UI_INTERACTION_CONTRACTS.map((contract) => contract.stateAttribute)
        .filter((value): value is string => Boolean(value)),
    ),
  );
}

export function uiInteractionFallbackPolicy(
  contract: UIInteractionContract,
): UIInteractionFallbackPolicy {
  if (!contract.stateAttribute) return "no-target";
  if (contract.hook.includes("input") || contract.hook.includes("file")) {
    return "document-query";
  }
  if (
    contract.hook.includes("toggle") || contract.hook.includes("select") ||
    contract.hook.includes("option") || contract.hook.includes("preset") ||
    contract.hook.includes("card") || contract.hook.includes("item")
  ) return "closest-root";
  return "strict-target";
}

export function uiInteractionStateScope(
  contract: UIInteractionContract,
): UIInteractionStateScope {
  if (!contract.stateAttribute) return "document";
  if (
    contract.hook.includes("option") || contract.hook.includes("select") ||
    contract.hook.includes("preset") || contract.hook.includes("line") ||
    contract.hook.includes("card") || contract.hook.includes("item")
  ) return "group";
  if (contract.hook.includes("input") || contract.hook.includes("copy")) {
    return "target";
  }
  return "trigger";
}

export function uiInteractionInputModality(
  contract: UIInteractionContract,
): UIInteractionInputModality {
  if (contract.event === "keydown") return "keyboard";
  if (contract.event === "input") return "text-input";
  if (contract.event === "change") return "system";
  return "pointer";
}

export function uiInteractionFallbackPolicies(): readonly UIInteractionFallbackPolicy[] {
  return Array.from(
    new Set(
      UI_INTERACTION_CONTRACTS.map((contract) =>
        uiInteractionFallbackPolicy(contract)
      ),
    ),
  );
}

export function uiInteractionStateScopes(): readonly UIInteractionStateScope[] {
  return Array.from(
    new Set(
      UI_INTERACTION_CONTRACTS.map((contract) =>
        uiInteractionStateScope(contract)
      ),
    ),
  );
}

export function uiInteractionInputModalities(): readonly UIInteractionInputModality[] {
  return Array.from(
    new Set(
      UI_INTERACTION_CONTRACTS.map((contract) =>
        uiInteractionInputModality(contract)
      ),
    ),
  );
}

export function uiInteractionAuditRecords(): readonly UIInteractionAuditRecord[] {
  return UI_INTERACTION_CONTRACTS.map((contract) => ({
    surface: contract.surface,
    hook: contract.hook,
    event: contract.event,
    source: contract.source,
    generated: contract.generated,
    samplePolicy: contract.sampleRequired ? "required" : "optional",
    stateAttribute: contract.stateAttribute ?? null,
    fallbackPolicy: uiInteractionFallbackPolicy(contract),
    stateScope: uiInteractionStateScope(contract),
    inputModality: uiInteractionInputModality(contract),
  }));
}
