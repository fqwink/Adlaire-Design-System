export type ComponentContractArea =
  | "layout"
  | "interaction"
  | "data"
  | "workspace"
  | "overlay"
  | "forms"
  | "platform"
  | "editor"
  | "content"
  | "admin"
  | "business"
  | "enterprise"
  | "strategic"
  | "industry"
  | "support"
  | "communication"
  | "publishing"
  | "device"
  | "travel"
  | "civic"
  | "energy"
  | "quality"
  | "agent"
  | "developer"
  | "theme"
  | "collaboration"
  | "observability"
  | "product"
  | "commerce"
  | "ai"
  | "cloud"
  | "workflow"
  | "guidance";

export type ComponentContractReviewSurface =
  | "public-ui"
  | "admin-ui"
  | "editor-ui";
export type ComponentContractReviewTier =
  | "foundation"
  | "domain"
  | "integration";
export type ComponentContractOwner =
  | "public-system"
  | "admin-system"
  | "editor-system";
export type ComponentContractDepth =
  | "catalog"
  | "source"
  | "generated"
  | "behavior"
  | "sample";
export type ComponentContractRisk = "low" | "medium" | "high";
export type ComponentContractLifecycle =
  | "stable"
  | "expanding"
  | "requires-review";

export interface ComponentContract {
  readonly id: string;
  readonly area: ComponentContractArea;
  readonly catalog: string;
  readonly cssSources: readonly string[];
  readonly generatedCss: readonly string[];
  readonly behaviorSources: readonly string[];
  readonly generatedBehavior: readonly string[];
  readonly sample: string;
  readonly requiredClasses: readonly string[];
  readonly hooks: readonly string[];
  readonly ariaRequirements: readonly string[];
  readonly stateAttributes: readonly string[];
  readonly requiredIcons: readonly string[];
  readonly sampleSection: string;
  readonly responsiveModes: readonly string[];
  readonly checkCoverage: readonly string[];
}

export interface ComponentContractCoverageGap {
  readonly id: string;
  readonly missingCoverage: readonly string[];
}

export interface ComponentContractGovernanceRecord {
  readonly id: string;
  readonly owner: ComponentContractOwner;
  readonly reviewSurface: ComponentContractReviewSurface;
  readonly reviewTier: ComponentContractReviewTier;
  readonly risk: ComponentContractRisk;
  readonly lifecycle: ComponentContractLifecycle;
  readonly depth: readonly ComponentContractDepth[];
  readonly coverageGaps: readonly string[];
}

export interface ComponentContractAccessibilityRecord {
  readonly id: string;
  readonly ariaRequirements: readonly string[];
  readonly stateAttributes: readonly string[];
  readonly risk: ComponentContractRisk;
}

const FOUNDATION_AREAS: readonly ComponentContractArea[] = [
  "layout",
  "interaction",
  "forms",
  "content",
  "data",
  "quality",
  "editor",
] as const;

const INTEGRATION_AREAS: readonly ComponentContractArea[] = [
  "platform",
  "developer",
  "theme",
  "cloud",
  "observability",
  "workflow",
] as const;

const HIGH_RISK_BEHAVIOR_AREAS: readonly ComponentContractArea[] = [
  "data",
  "editor",
  "forms",
  "overlay",
  "workflow",
] as const;

const MEDIUM_RISK_STATE_AREAS: readonly ComponentContractArea[] = [
  "admin",
  "cloud",
  "collaboration",
  "commerce",
  "guidance",
  "observability",
  "platform",
  "product",
] as const;

export const COMPONENT_CONTRACT_REQUIRED_COVERAGE: readonly string[] = [
  "catalog",
  "sample",
] as const;

export const COMPONENT_CONTRACTS: readonly ComponentContract[] = [
  {
    id: "layout-system-core",
    area: "layout",
    catalog: "Docs/Generic_Component_Catalog",
    cssSources: [
      "TypeScript/CSS/rules-grid.ts",
      "TypeScript/CSS/rules-layout.ts",
    ],
    generatedCss: [
      "UI/grid.css",
      "UI/layout.css",
    ],
    behaviorSources: [],
    generatedBehavior: [],
    sample: "Samples/design/index.html",
    requiredClasses: [
      ".adlaire-workbench-layout",
      ".adlaire-split-pane",
      ".adlaire-split-pane-collapsed",
    ],
    hooks: [],
    ariaRequirements: ['aria-labelledby="quality-title"'],
    stateAttributes: ["adlaire-split-pane-collapsed"],
    requiredIcons: [],
    sampleSection: "quality-title",
    responsiveModes: ["desktop", "tablet", "mobile"],
    checkCoverage: ["catalog", "generated-css", "sample", "layout-load-order"],
  },
  {
    id: "content-interaction-core",
    area: "content",
    catalog: "Docs/Generic_Component_Catalog",
    cssSources: [
      "TypeScript/CSS/rules-components-foundation-core-base.ts",
      "TypeScript/CSS/rules-content-foundation-timeline.ts",
      "TypeScript/CSS/rules-content-extended-markdown.ts",
      "TypeScript/CSS/rules-content-extended-repository.ts",
    ],
    generatedCss: ["UI/components.css", "UI/content.css"],
    behaviorSources: [
      "TypeScript/UI/components.ts",
      "TypeScript/UI/content.ts",
    ],
    generatedBehavior: ["UI/components.js", "UI/content.js"],
    sample: "Samples/design/index.html",
    requiredClasses: [
      ".adlaire-markdown-body",
      ".adlaire-code-block",
      ".adlaire-tabs",
      ".adlaire-tab-button",
      ".adlaire-tab-panel",
      ".adlaire-timeline",
    ],
    hooks: [
      "data-adlaire-code-copy",
      "data-adlaire-sort",
      "data-adlaire-tab",
      "data-adlaire-code-line",
      "data-adlaire-toc-link",
    ],
    ariaRequirements: ['aria-labelledby="generic-title"', 'aria-live="polite"'],
    stateAttributes: [
      "data-adlaire-copied",
      "aria-sort",
      "data-adlaire-sort-state",
      "data-adlaire-sort-order",
      "aria-selected",
      "aria-current",
    ],
    requiredIcons: [],
    sampleSection: "generic-title",
    responsiveModes: ["desktop", "mobile"],
    checkCoverage: [
      "catalog",
      "generated-css",
      "generated-javascript",
      "sample",
      "javascript-hook",
    ],
  },
  {
    id: "admin-operations-core",
    area: "admin",
    catalog: "Docs/Admin_UI_Catalog",
    cssSources: [
      "TypeScript/CSS/rules-components-operations-admin-layout.ts",
      "TypeScript/CSS/rules-components-operations-admin-actions.ts",
      "TypeScript/CSS/rules-components-operations-admin-governance.ts",
      "TypeScript/CSS/rules-components-operations-admin-observability.ts",
      "TypeScript/CSS/rules-components-operations-admin-security.ts",
      "TypeScript/CSS/rules-components-operations-admin-states.ts",
    ],
    generatedCss: ["UI/components.css"],
    behaviorSources: [],
    generatedBehavior: [],
    sample: "Samples/design/index.html",
    requiredClasses: [
      ".adlaire-admin-layout",
      ".adlaire-admin-dashboard",
      ".adlaire-admin-resource-header",
      ".adlaire-admin-state-badge",
      ".adlaire-admin-data-toolbar",
      ".adlaire-admin-bulk-action",
      ".adlaire-admin-settings",
      ".adlaire-admin-approval-panel",
      ".adlaire-admin-health-check",
      ".adlaire-admin-release-panel",
      ".adlaire-admin-security-overview",
      ".adlaire-admin-secret-panel",
      ".adlaire-admin-risk-signal",
      ".adlaire-admin-incident-panel",
      ".adlaire-admin-mobile-stack",
    ],
    hooks: [],
    ariaRequirements: ['aria-labelledby="admin-title"'],
    stateAttributes: ["adlaire-admin-state-badge"],
    requiredIcons: [],
    sampleSection: "admin-title",
    responsiveModes: ["desktop", "mobile"],
    checkCoverage: ["catalog", "generated-css", "sample", "admin-state"],
  },
  {
    id: "data-workbench-core",
    area: "data",
    catalog: "Docs/Generic_Component_Catalog",
    cssSources: [
      "TypeScript/CSS/rules-components-operations-data-grid.ts",
      "TypeScript/CSS/rules-components-operations-data-inspection.ts",
    ],
    generatedCss: ["UI/components.css"],
    behaviorSources: ["TypeScript/UI/components.ts"],
    generatedBehavior: ["UI/components.js"],
    sample: "Samples/design/index.html",
    requiredClasses: [
      ".adlaire-data-grid",
      ".adlaire-data-density-toolbar",
      ".adlaire-row-selection-cell",
      ".adlaire-data-grid-detail-row",
      ".adlaire-data-grid-summary-row",
      ".adlaire-column-resize-handle",
      ".adlaire-cell-status",
      ".adlaire-import-preview-table",
      ".adlaire-column-manager",
      ".adlaire-column-visibility-panel",
      ".adlaire-saved-view-bar",
      ".adlaire-pagination-status",
      ".adlaire-selection-counter-bar",
      ".adlaire-bulk-action-tray",
      ".adlaire-status-inspector",
      ".adlaire-empty-recovery-panel",
    ],
    hooks: [
      "data-adlaire-record-row-toggle",
      "data-adlaire-inline-edit-toggle",
      "data-adlaire-bulk-confirm-toggle",
      "data-adlaire-column-toggle",
      "data-adlaire-page-select",
      "data-adlaire-saved-view-apply",
    ],
    ariaRequirements: ['role="region"', 'aria-orientation="vertical"'],
    stateAttributes: [
      'aria-selected="true"',
      'aria-checked="true"',
      "aria-current",
      'data-state="valid"',
      "data-adlaire-selected-count",
    ],
    requiredIcons: [],
    sampleSection: "advanced-ui-title",
    responsiveModes: ["desktop", "mobile"],
    checkCoverage: ["catalog", "generated-css", "sample", "javascript-hook"],
  },
  {
    id: "business-operations-core",
    area: "business",
    catalog: "Docs/Generic_Component_Catalog",
    cssSources: [
      "TypeScript/CSS/rules-components-operations-business-planning.ts",
    ],
    generatedCss: ["UI/components.css"],
    behaviorSources: ["TypeScript/UI/components.ts"],
    generatedBehavior: ["UI/components.js"],
    sample: "Samples/design/index.html",
    requiredClasses: [
      ".adlaire-agenda-view",
      ".adlaire-time-slot-grid",
      ".adlaire-floor-selector",
      ".adlaire-policy-exception-panel",
    ],
    hooks: [
      "data-adlaire-time-slot",
      "data-adlaire-floor-select",
      "data-adlaire-policy-exception-toggle",
    ],
    ariaRequirements: [
      'aria-labelledby="business-operations-title"',
      'aria-label="Time slots"',
    ],
    stateAttributes: ['aria-selected="true"', 'aria-expanded="true"'],
    requiredIcons: [],
    sampleSection: "business-operations-title",
    responsiveModes: ["desktop", "mobile"],
    checkCoverage: [
      "catalog",
      "generated-css",
      "generated-javascript",
      "sample",
      "javascript-hook",
    ],
  },
  {
    id: "enterprise-domain-core",
    area: "enterprise",
    catalog: "Docs/Generic_Component_Catalog",
    cssSources: [
      "TypeScript/CSS/rules-components-operations-business-enterprise.ts",
    ],
    generatedCss: ["UI/components.css"],
    behaviorSources: ["TypeScript/UI/components.ts"],
    generatedBehavior: ["UI/components.js"],
    sample: "Samples/design/index.html",
    requiredClasses: [
      ".adlaire-budget-panel",
      ".adlaire-shift-roster",
      ".adlaire-pipeline-stage-rail",
      ".adlaire-policy-acknowledgement",
    ],
    hooks: [
      "data-adlaire-shift-select",
      "data-adlaire-pipeline-stage-select",
      "data-adlaire-policy-acknowledgement",
    ],
    ariaRequirements: [
      'aria-labelledby="enterprise-domain-title"',
      'role="listbox"',
    ],
    stateAttributes: ['aria-selected="true"', 'aria-current="step"'],
    requiredIcons: [],
    sampleSection: "enterprise-domain-title",
    responsiveModes: ["desktop", "mobile"],
    checkCoverage: [
      "catalog",
      "generated-css",
      "generated-javascript",
      "sample",
      "javascript-hook",
    ],
  },
  {
    id: "strategic-operations-core",
    area: "strategic",
    catalog: "Docs/Generic_Component_Catalog",
    cssSources: [
      "TypeScript/CSS/rules-components-operations-business-governance.ts",
    ],
    generatedCss: ["UI/components.css"],
    behaviorSources: ["TypeScript/UI/components.ts"],
    generatedBehavior: ["UI/components.js"],
    sample: "Samples/design/index.html",
    requiredClasses: [
      ".adlaire-objective-card",
      ".adlaire-confidence-indicator",
      ".adlaire-milestone-tracker",
      ".adlaire-compliance-attestation-row",
    ],
    hooks: [
      "data-adlaire-confidence-select",
      "data-adlaire-milestone-select",
      "data-adlaire-attestation-toggle",
    ],
    ariaRequirements: [
      'aria-labelledby="strategic-operations-title"',
      'aria-label="Confidence indicator"',
    ],
    stateAttributes: ['aria-pressed="true"', 'aria-current="step"'],
    requiredIcons: [],
    sampleSection: "strategic-operations-title",
    responsiveModes: ["desktop", "mobile"],
    checkCoverage: [
      "catalog",
      "generated-css",
      "generated-javascript",
      "sample",
      "javascript-hook",
    ],
  },
  {
    id: "industry-operations-core",
    area: "industry",
    catalog: "Docs/Generic_Component_Catalog",
    cssSources: [
      "TypeScript/CSS/rules-components-operations-business-industry.ts",
    ],
    generatedCss: ["UI/components.css"],
    behaviorSources: ["TypeScript/UI/components.ts"],
    generatedBehavior: ["UI/components.js"],
    sample: "Samples/design/index.html",
    requiredClasses: [
      ".adlaire-shipment-tracker",
      ".adlaire-delivery-route-board",
      ".adlaire-evidence-list",
      ".adlaire-care-plan-checklist",
    ],
    hooks: [
      "data-adlaire-route-select",
      "data-adlaire-care-plan-check",
      "data-adlaire-evidence-select",
    ],
    ariaRequirements: [
      'aria-labelledby="industry-operations-title"',
      'aria-label="Evidence list"',
    ],
    stateAttributes: ['aria-current="step"', 'aria-selected="true"'],
    requiredIcons: [],
    sampleSection: "industry-operations-title",
    responsiveModes: ["desktop", "mobile"],
    checkCoverage: [
      "catalog",
      "generated-css",
      "generated-javascript",
      "sample",
      "javascript-hook",
    ],
  },
  {
    id: "customer-growth-support-core",
    area: "support",
    catalog: "Docs/Generic_Component_Catalog",
    cssSources: [
      "TypeScript/CSS/rules-components-operations-business-insights.ts",
    ],
    generatedCss: ["UI/components.css"],
    behaviorSources: ["TypeScript/UI/components.ts"],
    generatedBehavior: ["UI/components.js"],
    sample: "Samples/design/index.html",
    requiredClasses: [
      ".adlaire-support-inbox",
      ".adlaire-ticket-priority-board",
      ".adlaire-health-score-panel",
      ".adlaire-report-parameter-bar",
    ],
    hooks: [
      "data-adlaire-ticket-priority-select",
      "data-adlaire-success-playbook-check",
      "data-adlaire-report-parameter-select",
    ],
    ariaRequirements: [
      'aria-labelledby="customer-growth-title"',
      'aria-label="Support inbox"',
    ],
    stateAttributes: ['data-state="healthy"', 'aria-selected="true"'],
    requiredIcons: [],
    sampleSection: "customer-growth-title",
    responsiveModes: ["desktop", "mobile"],
    checkCoverage: [
      "catalog",
      "generated-css",
      "generated-javascript",
      "sample",
      "javascript-hook",
    ],
  },
  {
    id: "communication-notification-core",
    area: "communication",
    catalog: "Docs/Generic_Component_Catalog",
    cssSources: [
      "TypeScript/CSS/rules-components-operations-business-messaging.ts",
    ],
    generatedCss: ["UI/components.css"],
    behaviorSources: ["TypeScript/UI/components.ts"],
    generatedBehavior: ["UI/components.js"],
    sample: "Samples/design/index.html",
    requiredClasses: [
      ".adlaire-message-composer",
      ".adlaire-channel-list",
      ".adlaire-quiet-hours-panel",
      ".adlaire-topic-preference-list",
    ],
    hooks: [
      "data-adlaire-channel-select",
      "data-adlaire-quiet-hours-toggle",
      "data-adlaire-topic-preference-toggle",
    ],
    ariaRequirements: [
      'aria-labelledby="communication-ops-title"',
      'aria-label="Message composer"',
    ],
    stateAttributes: ['data-state="failed"', 'aria-checked="true"'],
    requiredIcons: [],
    sampleSection: "communication-ops-title",
    responsiveModes: ["desktop", "mobile"],
    checkCoverage: [
      "catalog",
      "generated-css",
      "generated-javascript",
      "sample",
      "javascript-hook",
    ],
  },
  {
    id: "content-publishing-localization-core",
    area: "publishing",
    catalog: "Docs/Generic_Component_Catalog",
    cssSources: [
      "TypeScript/CSS/rules-components-operations-industry-content.ts",
    ],
    generatedCss: ["UI/components.css"],
    behaviorSources: ["TypeScript/UI/components.ts"],
    generatedBehavior: ["UI/components.js"],
    sample: "Samples/design/index.html",
    requiredClasses: [
      ".adlaire-editorial-calendar",
      ".adlaire-review-gate-panel",
      ".adlaire-locale-switcher-panel",
      ".adlaire-moderation-queue",
    ],
    hooks: [
      "data-adlaire-editorial-gate-select",
      "data-adlaire-locale-select",
      "data-adlaire-moderation-decision",
    ],
    ariaRequirements: [
      'aria-labelledby="content-publishing-title"',
      'aria-label="Review gate panel"',
    ],
    stateAttributes: ['aria-selected="true"', 'aria-pressed="true"'],
    requiredIcons: [],
    sampleSection: "content-publishing-title",
    responsiveModes: ["desktop", "mobile"],
    checkCoverage: [
      "catalog",
      "generated-css",
      "generated-javascript",
      "sample",
      "javascript-hook",
    ],
  },
  {
    id: "device-fleet-edge-core",
    area: "device",
    catalog: "Docs/Generic_Component_Catalog",
    cssSources: [
      "TypeScript/CSS/rules-components-operations-industry-devices.ts",
    ],
    generatedCss: ["UI/components.css"],
    behaviorSources: ["TypeScript/UI/components.ts"],
    generatedBehavior: ["UI/components.js"],
    sample: "Samples/design/index.html",
    requiredClasses: [
      ".adlaire-device-card",
      ".adlaire-device-registry-table",
      ".adlaire-deployment-ring-selector",
      ".adlaire-device-handoff-checklist",
    ],
    hooks: [
      "data-adlaire-device-select",
      "data-adlaire-deployment-ring-select",
      "data-adlaire-handoff-check",
    ],
    ariaRequirements: [
      'aria-labelledby="device-edge-title"',
      'aria-label="Device registry table"',
    ],
    stateAttributes: ['data-state="degraded"', 'aria-checked="true"'],
    requiredIcons: [],
    sampleSection: "device-edge-title",
    responsiveModes: ["desktop", "mobile"],
    checkCoverage: [
      "catalog",
      "generated-css",
      "generated-javascript",
      "sample",
      "javascript-hook",
    ],
  },
  {
    id: "travel-hospitality-event-core",
    area: "travel",
    catalog: "Docs/Generic_Component_Catalog",
    cssSources: [
      "TypeScript/CSS/rules-components-operations-industry-hospitality.ts",
    ],
    generatedCss: ["UI/components.css"],
    behaviorSources: ["TypeScript/UI/components.ts"],
    generatedBehavior: ["UI/components.js"],
    sample: "Samples/design/index.html",
    requiredClasses: [
      ".adlaire-itinerary-card",
      ".adlaire-booking-summary-panel",
      ".adlaire-room-inventory-board",
      ".adlaire-recovery-task-board",
    ],
    hooks: [
      "data-adlaire-fare-option-select",
      "data-adlaire-room-select",
      "data-adlaire-recovery-task-check",
    ],
    ariaRequirements: [
      'aria-labelledby="travel-hospitality-event-title"',
      'aria-label="Room inventory board"',
    ],
    stateAttributes: ['aria-selected="true"', 'aria-checked="true"'],
    requiredIcons: [],
    sampleSection: "travel-hospitality-event-title",
    responsiveModes: ["desktop", "mobile"],
    checkCoverage: [
      "catalog",
      "generated-css",
      "generated-javascript",
      "sample",
      "javascript-hook",
    ],
  },
  {
    id: "public-civic-nonprofit-core",
    area: "civic",
    catalog: "Docs/Generic_Component_Catalog",
    cssSources: [
      "TypeScript/CSS/rules-components-operations-industry-civic.ts",
    ],
    generatedCss: ["UI/components.css"],
    behaviorSources: ["TypeScript/UI/components.ts"],
    generatedBehavior: ["UI/components.js"],
    sample: "Samples/design/index.html",
    requiredClasses: [
      ".adlaire-service-application-card",
      ".adlaire-eligibility-checklist",
      ".adlaire-document-requirement-list",
      ".adlaire-volunteer-shift-board",
    ],
    hooks: [
      "data-adlaire-eligibility-check",
      "data-adlaire-permit-step-select",
      "data-adlaire-volunteer-shift-select",
    ],
    ariaRequirements: [
      'aria-labelledby="public-civic-nonprofit-title"',
      'aria-label="Document requirement list"',
    ],
    stateAttributes: ['aria-checked="true"', 'aria-selected="true"'],
    requiredIcons: [],
    sampleSection: "public-civic-nonprofit-title",
    responsiveModes: ["desktop", "mobile"],
    checkCoverage: [
      "catalog",
      "generated-css",
      "generated-javascript",
      "sample",
      "javascript-hook",
    ],
  },
  {
    id: "energy-utilities-sustainability-core",
    area: "energy",
    catalog: "Docs/Generic_Component_Catalog",
    cssSources: [
      "TypeScript/CSS/rules-components-operations-industry-utilities.ts",
    ],
    generatedCss: ["UI/components.css"],
    behaviorSources: ["TypeScript/UI/components.ts"],
    generatedBehavior: ["UI/components.js"],
    sample: "Samples/design/index.html",
    requiredClasses: [
      ".adlaire-energy-usage-card",
      ".adlaire-demand-response-panel",
      ".adlaire-service-appointment-board",
      ".adlaire-disclosure-checklist",
    ],
    hooks: [
      "data-adlaire-demand-response-select",
      "data-adlaire-outage-report-select",
      "data-adlaire-disclosure-check",
    ],
    ariaRequirements: [
      'aria-labelledby="energy-utilities-sustainability-title"',
      'aria-label="Demand response panel"',
    ],
    stateAttributes: ['data-state="active"', 'aria-selected="true"'],
    requiredIcons: [],
    sampleSection: "energy-utilities-sustainability-title",
    responsiveModes: ["desktop", "mobile"],
    checkCoverage: [
      "catalog",
      "generated-css",
      "generated-javascript",
      "sample",
      "javascript-hook",
    ],
  },
  {
    id: "component-quality-composition-core",
    area: "quality",
    catalog: "Docs/Generic_Component_Catalog",
    cssSources: [
      "TypeScript/CSS/rules-components-operations-workflow-layout.ts",
    ],
    generatedCss: ["UI/components.css"],
    behaviorSources: ["TypeScript/UI/components.ts"],
    generatedBehavior: ["UI/components.js"],
    sample: "Samples/design/index.html",
    requiredClasses: [
      ".adlaire-section-header",
      ".adlaire-verification-checklist",
      ".adlaire-density-switcher",
      ".adlaire-sticky-action-footer",
    ],
    hooks: [
      "data-adlaire-density-select",
      "data-adlaire-bulk-selection-toggle",
      "data-adlaire-verification-check",
    ],
    ariaRequirements: [
      'aria-labelledby="component-quality-composition-title"',
      'aria-label="Verification checklist"',
    ],
    stateAttributes: ['aria-pressed="true"', 'aria-checked="true"'],
    requiredIcons: [],
    sampleSection: "component-quality-composition-title",
    responsiveModes: ["desktop", "mobile"],
    checkCoverage: [
      "catalog",
      "generated-css",
      "generated-javascript",
      "sample",
      "javascript-hook",
    ],
  },
  {
    id: "agent-automation-workbench-core",
    area: "agent",
    catalog: "Docs/Generic_Component_Catalog",
    cssSources: [
      "TypeScript/CSS/rules-components-operations-workflow-automation.ts",
    ],
    generatedCss: ["UI/components.css"],
    behaviorSources: ["TypeScript/UI/components.ts"],
    generatedBehavior: ["UI/components.js"],
    sample: "Samples/design/index.html",
    requiredClasses: [
      ".adlaire-agent-run-card",
      ".adlaire-agent-task-list",
      ".adlaire-approval-gate-panel",
      ".adlaire-notification-policy-card",
    ],
    hooks: [
      "data-adlaire-tool-permission-toggle",
      "data-adlaire-approval-gate-toggle",
      "data-adlaire-notification-policy-toggle",
    ],
    ariaRequirements: [
      'aria-labelledby="agent-automation-title"',
      'aria-label="Agent task list"',
    ],
    stateAttributes: ['aria-pressed="false"', 'data-state="valid"'],
    requiredIcons: [],
    sampleSection: "agent-automation-title",
    responsiveModes: ["desktop", "mobile"],
    checkCoverage: [
      "catalog",
      "generated-css",
      "generated-javascript",
      "sample",
      "javascript-hook",
    ],
  },
  {
    id: "data-ai-operations-core",
    area: "ai",
    catalog: "Docs/Generic_Component_Catalog",
    cssSources: ["TypeScript/CSS/rules-components-foundation-domains-data.ts"],
    generatedCss: ["UI/components.css"],
    behaviorSources: [],
    generatedBehavior: [],
    sample: "Samples/design/index.html",
    requiredClasses: [
      ".adlaire-dataset-card",
      ".adlaire-schema-table",
      ".adlaire-query-console",
      ".adlaire-guardrail-panel",
    ],
    hooks: [],
    ariaRequirements: [
      'aria-labelledby="icon-title"',
      'aria-label="Guardrail panel"',
    ],
    stateAttributes: ["adlaire-dataset-card"],
    requiredIcons: ["Icons/adlaire-icon-content-dataset-record.svg"],
    sampleSection: "icon-title",
    responsiveModes: ["desktop", "mobile"],
    checkCoverage: ["catalog", "generated-css", "sample", "icon-inventory"],
  },
  {
    id: "experience-guidance-core",
    area: "guidance",
    catalog: "Docs/Generic_Component_Catalog",
    cssSources: ["TypeScript/CSS/rules-components-foundation-support-cards.ts"],
    generatedCss: ["UI/components.css"],
    behaviorSources: [],
    generatedBehavior: [],
    sample: "Samples/design/index.html",
    requiredClasses: [
      ".adlaire-onboarding-flow",
      ".adlaire-onboarding-step-card",
      ".adlaire-help-article-card",
      ".adlaire-notification-preference-list",
    ],
    hooks: [],
    ariaRequirements: ['aria-labelledby="icon-title"', 'aria-current="true"'],
    stateAttributes: ["adlaire-notification-preference-list"],
    requiredIcons: ["Icons/adlaire-icon-content-onboarding-step.svg"],
    sampleSection: "icon-title",
    responsiveModes: ["desktop", "mobile"],
    checkCoverage: ["catalog", "generated-css", "sample", "icon-inventory"],
  },
  {
    id: "workspace-command-core",
    area: "workspace",
    catalog: "Docs/Generic_Component_Catalog",
    cssSources: [
      "TypeScript/CSS/rules-components-operations-workspace-tabs.ts",
    ],
    generatedCss: ["UI/components.css"],
    behaviorSources: ["TypeScript/UI/components.ts"],
    generatedBehavior: ["UI/components.js"],
    sample: "Samples/design/index.html",
    requiredClasses: [
      ".adlaire-tab-workspace",
      ".adlaire-dock-panel",
      ".adlaire-workspace-breadcrumb",
      ".adlaire-command-bar",
      ".adlaire-command-bar-item",
      ".adlaire-panel-stack",
      ".adlaire-panel-stack-item",
      ".adlaire-resizable-panel",
      ".adlaire-resize-handle",
      ".adlaire-quick-switcher",
      ".adlaire-shortcut-recorder",
    ],
    hooks: [
      "data-adlaire-workspace-tab",
      "data-adlaire-dock-toggle",
      "data-adlaire-resizable-panel",
      "data-adlaire-resize-handle",
    ],
    ariaRequirements: ['role="tablist"', 'aria-expanded="true"'],
    stateAttributes: ["data-adlaire-panel-size", "hidden"],
    requiredIcons: [],
    sampleSection: "workspace-command-title",
    responsiveModes: ["desktop", "mobile"],
    checkCoverage: [
      "catalog",
      "generated-css",
      "generated-javascript",
      "sample",
      "javascript-hook",
    ],
  },
  {
    id: "form-input-core",
    area: "forms",
    catalog: "Docs/Generic_Component_Catalog",
    cssSources: [
      "TypeScript/CSS/rules-forms-foundation-base.ts",
      "TypeScript/CSS/rules-forms-composite-date-time.ts",
      "TypeScript/CSS/rules-forms-composite-selects.ts",
      "TypeScript/CSS/rules-forms-validation-builder.ts",
    ],
    generatedCss: ["UI/forms.css"],
    behaviorSources: ["TypeScript/UI/forms.ts"],
    generatedBehavior: ["UI/forms.js"],
    sample: "Samples/design/index.html",
    requiredClasses: [
      ".adlaire-filter-builder",
      ".adlaire-form-grid",
      ".adlaire-field-hint",
      ".adlaire-required-marker",
      ".adlaire-input-addon",
      ".adlaire-validation-list",
      ".adlaire-combobox",
      ".adlaire-multi-select",
      ".adlaire-segmented-control",
      ".adlaire-segmented-option",
      ".adlaire-radio-card-group",
      ".adlaire-radio-card",
      ".adlaire-switch-group",
      ".adlaire-switch-item",
      ".adlaire-token-list",
      ".adlaire-token",
      ".adlaire-token-count",
      ".adlaire-character-count",
      ".adlaire-range-field",
      ".adlaire-range-meter",
      ".adlaire-stepper-control",
      ".adlaire-stepper-action",
      ".adlaire-date-picker",
    ],
    hooks: [
      "data-adlaire-validate",
      "data-adlaire-validate-summary",
      "data-adlaire-file-input",
      "data-adlaire-toggle-input",
      "data-adlaire-combobox-input",
      "data-adlaire-combobox-option",
      "data-adlaire-multi-select-option",
      "data-adlaire-segmented-option",
      "data-adlaire-radio-card",
      "data-adlaire-switch-item",
      "data-adlaire-range-input",
      "data-adlaire-stepper-action",
      "data-adlaire-token-add",
      "data-adlaire-token-remove",
      "data-adlaire-character-count",
      "data-adlaire-date-preset",
    ],
    ariaRequirements: [
      'aria-live="polite"',
      'role="switch"',
      'role="radiogroup"',
      'aria-label="Density"',
    ],
    stateAttributes: [
      "hidden",
      'aria-checked="true"',
      'aria-pressed="true"',
      "data-adlaire-field-dirty",
      "data-adlaire-field-touched",
      "data-adlaire-range-value",
    ],
    requiredIcons: [],
    sampleSection: "quality-title",
    responsiveModes: ["desktop", "mobile"],
    checkCoverage: [
      "catalog",
      "generated-css",
      "generated-javascript",
      "sample",
      "javascript-hook",
    ],
  },
  {
    id: "overlay-feedback-core",
    area: "overlay",
    catalog: "Docs/Generic_Component_Catalog",
    cssSources: [
      "TypeScript/CSS/rules-components-overlays-surfaces.ts",
      "TypeScript/CSS/rules-components-platform-states.ts",
    ],
    generatedCss: ["UI/components.css"],
    behaviorSources: ["TypeScript/UI/components.ts"],
    generatedBehavior: ["UI/components.js"],
    sample: "Samples/design/index.html",
    requiredClasses: [
      ".adlaire-dialog",
      ".adlaire-drawer",
      ".adlaire-popover",
      ".adlaire-toast",
      ".adlaire-toast-queue",
      ".adlaire-focus-sentry",
      ".adlaire-touch-target",
    ],
    hooks: ["data-adlaire-dismiss", "data-adlaire-toast-dismiss"],
    ariaRequirements: ['role="dialog"', 'aria-modal="true"'],
    stateAttributes: [
      "hidden",
      "is-open",
      "data-adlaire-overlay-depth",
      "data-adlaire-overlay-inert",
      "data-adlaire-dismiss-reason",
    ],
    requiredIcons: [],
    sampleSection: "overlay-title",
    responsiveModes: ["desktop", "mobile"],
    checkCoverage: [
      "catalog",
      "generated-css",
      "accessibility",
      "sample",
      "javascript-hook",
    ],
  },
  {
    id: "github-platform-core",
    area: "platform",
    catalog: "Docs/Generic_Component_Catalog",
    cssSources: ["TypeScript/CSS/rules-components-platform-github.ts"],
    generatedCss: ["UI/components.css"],
    behaviorSources: [],
    generatedBehavior: [],
    sample: "Samples/design/index.html",
    requiredClasses: [
      ".adlaire-github-pr-card",
      ".adlaire-github-checks-panel",
      ".adlaire-github-merge-readiness",
      ".adlaire-github-branch-badge",
      ".adlaire-github-commit-timeline",
      ".adlaire-github-commit-item",
    ],
    hooks: [],
    ariaRequirements: ['aria-labelledby="git-title"'],
    stateAttributes: ["adlaire-github-branch-badge"],
    requiredIcons: [
      "Icons/adlaire-icon-content-github-pull-request.svg",
      "Icons/adlaire-icon-status-github-check-pending.svg",
      "Icons/adlaire-icon-status-github-pr-merged.svg",
    ],
    sampleSection: "git-title",
    responsiveModes: ["desktop", "mobile"],
    checkCoverage: ["catalog", "generated-css", "sample", "icon-inventory"],
  },
  {
    id: "developer-platform-core",
    area: "developer",
    catalog: "Docs/Generic_Component_Catalog",
    cssSources: ["TypeScript/CSS/rules-components-platform-developer.ts"],
    generatedCss: ["UI/components.css"],
    behaviorSources: ["TypeScript/UI/components.ts"],
    generatedBehavior: ["UI/components.js"],
    sample: "Samples/design/index.html",
    requiredClasses: [
      ".adlaire-api-explorer-panel",
      ".adlaire-endpoint-card",
      ".adlaire-request-builder",
      ".adlaire-response-preview",
      ".adlaire-sdk-selector",
      ".adlaire-sandbox-environment-card",
      ".adlaire-production-readiness-checklist",
      ".adlaire-connection-test-card",
      ".adlaire-migration-step-list",
    ],
    hooks: [
      "data-adlaire-environment-select",
      "data-adlaire-sdk-select",
      "data-adlaire-connection-test-toggle",
      "data-adlaire-migration-step-toggle",
    ],
    ariaRequirements: [
      'aria-labelledby="developer-platform-title"',
      'aria-label="API explorer panel"',
    ],
    stateAttributes: ['aria-selected="true"', 'data-state="passed"'],
    requiredIcons: ["Icons/adlaire-icon-content-api-contract.svg"],
    sampleSection: "developer-platform-title",
    responsiveModes: ["desktop", "mobile"],
    checkCoverage: [
      "catalog",
      "generated-css",
      "generated-javascript",
      "sample",
      "javascript-hook",
    ],
  },
  {
    id: "theme-brand-core",
    area: "theme",
    catalog: "Docs/Generic_Component_Catalog",
    cssSources: ["TypeScript/CSS/rules-components-platform-theme.ts"],
    generatedCss: ["UI/components.css"],
    behaviorSources: ["TypeScript/UI/components.ts"],
    generatedBehavior: ["UI/components.js"],
    sample: "Samples/design/index.html",
    requiredClasses: [
      ".adlaire-theme-workspace-panel",
      ".adlaire-brand-kit-card",
      ".adlaire-palette-editor",
      ".adlaire-color-ramp-row",
      ".adlaire-semantic-color-mapping",
      ".adlaire-theme-preview-frame",
      ".adlaire-dark-mode-switcher",
      ".adlaire-high-contrast-preview",
      ".adlaire-token-override-panel",
      ".adlaire-theme-publish-summary",
    ],
    hooks: [
      "data-adlaire-theme-select",
      "data-adlaire-dark-mode-toggle",
      "data-adlaire-high-contrast-toggle",
      "data-adlaire-token-override-toggle",
    ],
    ariaRequirements: [
      'aria-labelledby="theme-brand-customization-title"',
      'aria-label="Theme workspace panel"',
    ],
    stateAttributes: ['aria-pressed="false"', 'data-state="ready"'],
    requiredIcons: [],
    sampleSection: "theme-brand-customization-title",
    responsiveModes: ["desktop", "mobile"],
    checkCoverage: [
      "catalog",
      "generated-css",
      "generated-javascript",
      "sample",
      "javascript-hook",
    ],
  },
  {
    id: "cloud-infrastructure-core",
    area: "cloud",
    catalog: "Docs/Generic_Component_Catalog",
    cssSources: ["TypeScript/CSS/rules-components-platform-cloud.ts"],
    generatedCss: ["UI/components.css"],
    behaviorSources: [],
    generatedBehavior: [],
    sample: "Samples/design/index.html",
    requiredClasses: [
      ".adlaire-cloud-resource-grid",
      ".adlaire-cloud-service-card",
      ".adlaire-cloud-region-card",
      ".adlaire-cloud-environment-card",
      ".adlaire-cloud-topology-map",
      ".adlaire-cloud-deployment-target",
      ".adlaire-cloud-runtime-card",
      ".adlaire-cloud-database-card",
      ".adlaire-cloud-storage-card",
      ".adlaire-cloud-queue-card",
      ".adlaire-cloud-worker-card",
      ".adlaire-cloud-domain-panel",
      ".adlaire-cloud-certificate-panel",
      ".adlaire-cloud-secret-vault",
      ".adlaire-cloud-quota-panel",
      ".adlaire-cloud-cost-summary",
    ],
    hooks: [],
    ariaRequirements: [
      'aria-labelledby="cloud-title"',
      'aria-label="Cloud topology map"',
    ],
    stateAttributes: ["adlaire-cloud-resource-grid"],
    requiredIcons: ["Icons/adlaire-icon-content-cloud-service.svg"],
    sampleSection: "cloud-title",
    responsiveModes: ["desktop", "mobile"],
    checkCoverage: ["catalog", "generated-css", "sample", "icon-inventory"],
  },
  {
    id: "collaboration-review-core",
    area: "collaboration",
    catalog: "Docs/Generic_Component_Catalog",
    cssSources: [
      "TypeScript/CSS/rules-components-foundation-domains-collaboration.ts",
    ],
    generatedCss: ["UI/components.css"],
    behaviorSources: [],
    generatedBehavior: [],
    sample: "Samples/design/index.html",
    requiredClasses: [
      ".adlaire-collaborator-list",
      ".adlaire-presence-stack",
      ".adlaire-review-request-card",
      ".adlaire-review-decision",
      ".adlaire-change-request-list",
      ".adlaire-comment-thread",
      ".adlaire-suggestion-panel",
      ".adlaire-version-history",
      ".adlaire-task-board",
      ".adlaire-signoff-panel",
    ],
    hooks: [],
    ariaRequirements: [
      'aria-label="Review decision"',
      'aria-label="Signoff panel"',
    ],
    stateAttributes: ['aria-label="Notification digest"'],
    requiredIcons: ["Icons/adlaire-icon-content-review-request.svg"],
    sampleSection: "icon-title",
    responsiveModes: ["desktop", "mobile"],
    checkCoverage: ["catalog", "generated-css", "sample", "icon-inventory"],
  },
  {
    id: "product-commerce-core",
    area: "commerce",
    catalog: "Docs/Generic_Component_Catalog",
    cssSources: [
      "TypeScript/CSS/rules-components-foundation-domains-product.ts",
      "TypeScript/CSS/rules-components-foundation-domains-commerce.ts",
    ],
    generatedCss: ["UI/components.css"],
    behaviorSources: [],
    generatedBehavior: [],
    sample: "Samples/design/index.html",
    requiredClasses: [
      ".adlaire-product-card",
      ".adlaire-plan-selector",
      ".adlaire-billing-summary",
      ".adlaire-invoice-list",
      ".adlaire-workflow-builder",
      ".adlaire-integration-card",
      ".adlaire-commerce-cart",
      ".adlaire-checkout-summary",
      ".adlaire-order-card",
      ".adlaire-order-timeline",
      ".adlaire-product-grid",
      ".adlaire-product-tile",
      ".adlaire-sku-list",
      ".adlaire-inventory-panel",
    ],
    hooks: [],
    ariaRequirements: ['role="radiogroup"', 'aria-label="Commerce cart"'],
    stateAttributes: ['aria-checked="true"'],
    requiredIcons: ["Icons/adlaire-icon-content-product-dashboard.svg"],
    sampleSection: "icon-title",
    responsiveModes: ["desktop", "mobile"],
    checkCoverage: ["catalog", "generated-css", "sample", "icon-inventory"],
  },
  {
    id: "observability-diagnostics-core",
    area: "observability",
    catalog: "Docs/Generic_Component_Catalog",
    cssSources: [
      "TypeScript/CSS/rules-components-foundation-domains-observability.ts",
    ],
    generatedCss: ["UI/components.css"],
    behaviorSources: [],
    generatedBehavior: [],
    sample: "Samples/design/index.html",
    requiredClasses: [
      ".adlaire-health-overview",
      ".adlaire-service-status-card",
      ".adlaire-uptime-panel",
      ".adlaire-log-stream",
      ".adlaire-log-event-row",
      ".adlaire-trace-timeline",
      ".adlaire-span-detail",
      ".adlaire-metric-threshold-card",
      ".adlaire-alert-rule-card",
      ".adlaire-alert-incident-list",
      ".adlaire-diagnostic-run-card",
      ".adlaire-remediation-panel",
    ],
    hooks: [],
    ariaRequirements: [
      'aria-label="Health overview"',
      'aria-label="Remediation panel"',
    ],
    stateAttributes: ["adlaire-alert-incident-list"],
    requiredIcons: ["Icons/adlaire-icon-content-diagnostic-run.svg"],
    sampleSection: "icon-title",
    responsiveModes: ["desktop", "mobile"],
    checkCoverage: ["catalog", "generated-css", "sample", "icon-inventory"],
  },
  {
    id: "workflow-governance-core",
    area: "workflow",
    catalog: "Docs/Generic_Component_Catalog",
    cssSources: [
      "TypeScript/CSS/rules-components-foundation-domains-workflow.ts",
    ],
    generatedCss: ["UI/components.css"],
    behaviorSources: [],
    generatedBehavior: [],
    sample: "Samples/design/index.html",
    requiredClasses: [
      ".adlaire-workflow-runner",
      ".adlaire-automation-rule-card",
      ".adlaire-trigger-list",
      ".adlaire-condition-builder",
      ".adlaire-action-chain",
      ".adlaire-schedule-panel",
      ".adlaire-policy-card",
      ".adlaire-compliance-checklist",
      ".adlaire-evidence-locker",
      ".adlaire-approval-route",
      ".adlaire-access-review-panel",
      ".adlaire-risk-banner",
      ".adlaire-audit-event-stream",
      ".adlaire-retention-policy-panel",
      ".adlaire-incident-summary",
      ".adlaire-control-status-grid",
    ],
    hooks: [],
    ariaRequirements: [
      'aria-label="Condition builder"',
      'aria-label="Access review panel"',
    ],
    stateAttributes: ["adlaire-control-status-grid"],
    requiredIcons: ["Icons/adlaire-icon-content-workflow-run.svg"],
    sampleSection: "icon-title",
    responsiveModes: ["desktop", "mobile"],
    checkCoverage: ["catalog", "generated-css", "sample", "icon-inventory"],
  },
  {
    id: "wysiwyg-editor-ui-core",
    area: "editor",
    catalog: "Docs/WYSIWYG_Editor_UI_Catalog",
    cssSources: [
      "TypeScript/CSS/rules-wysiwyg.ts",
      "TypeScript/CSS/rules-wysiwyg-extensions-banners.ts",
      "TypeScript/CSS/rules-wysiwyg-extensions-feedback.ts",
    ],
    generatedCss: ["EditorUI/wysiwyg.css"],
    behaviorSources: ["TypeScript/EditorUI/wysiwyg.ts"],
    generatedBehavior: ["EditorUI/wysiwyg.js"],
    sample: "Samples/design/index.html",
    requiredClasses: [
      ".adlaire-wysiwyg",
      ".adlaire-wysiwyg-toolbar",
      ".adlaire-wysiwyg-canvas",
      ".adlaire-wysiwyg-block",
      ".adlaire-wysiwyg-block-selected",
      ".adlaire-wysiwyg-slash-menu",
      ".adlaire-wysiwyg-suggestion-card",
      ".adlaire-wysiwyg-save-banner",
      ".adlaire-wysiwyg-lock-banner",
      ".adlaire-wysiwyg-a11y-panel",
    ],
    hooks: [
      "data-adlaire-wysiwyg-mode",
      "data-adlaire-wysiwyg-toggle",
      "data-adlaire-wysiwyg-select",
      "data-adlaire-wysiwyg-toolbar-group",
      "data-adlaire-wysiwyg-slash-item",
      "data-adlaire-wysiwyg-suggestion",
    ],
    ariaRequirements: [
      'aria-labelledby="editor-title"',
      'aria-expanded="true"',
    ],
    stateAttributes: [
      "data-adlaire-wysiwyg-mode",
      "data-adlaire-toolbar-group",
      "data-adlaire-disclosure-state",
      'aria-selected="true"',
    ],
    requiredIcons: [],
    sampleSection: "editor-title",
    responsiveModes: ["desktop", "tablet", "mobile", "reduced-motion"],
    checkCoverage: [
      "catalog",
      "generated-css",
      "generated-javascript",
      "sample",
      "javascript-hook",
    ],
  },
] as const;

export function componentContractIds(): readonly string[] {
  return COMPONENT_CONTRACTS.map((contract) => contract.id);
}

export function componentContractsByArea(
  area: ComponentContractArea,
): readonly ComponentContract[] {
  return COMPONENT_CONTRACTS.filter((contract) => contract.area === area);
}

export function componentContractReviewSurface(
  contract: ComponentContract,
): ComponentContractReviewSurface {
  if (contract.catalog === "Docs/Admin_UI_Catalog") return "admin-ui";
  if (
    contract.catalog === "Docs/WYSIWYG_Editor_UI_Catalog" ||
    contract.area === "editor"
  ) return "editor-ui";
  return "public-ui";
}

export function componentContractReviewTier(
  contract: ComponentContract,
): ComponentContractReviewTier {
  if (FOUNDATION_AREAS.includes(contract.area)) return "foundation";
  if (INTEGRATION_AREAS.includes(contract.area)) return "integration";
  return "domain";
}

export function componentContractOwner(
  contract: ComponentContract,
): ComponentContractOwner {
  if (contract.catalog === "Docs/Admin_UI_Catalog") return "admin-system";
  if (
    contract.catalog === "Docs/WYSIWYG_Editor_UI_Catalog" ||
    contract.area === "editor"
  ) return "editor-system";
  return "public-system";
}

export function componentContractDepth(
  contract: ComponentContract,
): readonly ComponentContractDepth[] {
  const depth: ComponentContractDepth[] = ["catalog"];
  if (contract.cssSources.length > 0 || contract.behaviorSources.length > 0) {
    depth.push("source");
  }
  if (
    contract.generatedCss.length > 0 || contract.generatedBehavior.length > 0
  ) depth.push("generated");
  if (contract.hooks.length > 0) depth.push("behavior");
  if (contract.sample !== "" && contract.sampleSection !== "") {
    depth.push("sample");
  }
  return depth;
}

export function componentContractRisk(
  contract: ComponentContract,
): ComponentContractRisk {
  const hasBehavior = contract.hooks.length > 0 ||
    contract.generatedBehavior.length > 0;
  const hasStatefulAccessibility = contract.ariaRequirements.length > 0 &&
    contract.stateAttributes.length > 0;

  if (
    hasBehavior &&
    hasStatefulAccessibility &&
    HIGH_RISK_BEHAVIOR_AREAS.includes(contract.area)
  ) return "high";
  if (
    hasBehavior &&
    contract.generatedBehavior.length > 0 &&
    contract.stateAttributes.length > 1
  ) return "high";
  if (
    hasBehavior ||
    contract.requiredIcons.length > 0 ||
    contract.responsiveModes.includes("reduced-motion") ||
    (hasStatefulAccessibility &&
      MEDIUM_RISK_STATE_AREAS.includes(contract.area))
  ) return "medium";
  return "low";
}

export function componentContractLifecycle(
  contract: ComponentContract,
): ComponentContractLifecycle {
  const coverageGaps = COMPONENT_CONTRACT_REQUIRED_COVERAGE.filter((coverage) =>
    !contract.checkCoverage.includes(coverage)
  );
  if (coverageGaps.length > 0) return "requires-review";
  if (
    contract.checkCoverage.includes("generated-css") &&
    (contract.generatedBehavior.length === 0 ||
      contract.checkCoverage.includes("generated-javascript"))
  ) return "stable";
  return "expanding";
}

export function componentContractCoverageGaps(
  requiredCoverage: readonly string[] = COMPONENT_CONTRACT_REQUIRED_COVERAGE,
): readonly ComponentContractCoverageGap[] {
  return COMPONENT_CONTRACTS.map((contract) => ({
    id: contract.id,
    missingCoverage: requiredCoverage.filter((coverage) =>
      !contract.checkCoverage.includes(coverage)
    ),
  })).filter((gap) => gap.missingCoverage.length > 0);
}

export function componentContractsRequiringBehavior(): readonly ComponentContract[] {
  return COMPONENT_CONTRACTS.filter((contract) => contract.hooks.length > 0);
}

export function componentContractGovernanceRecords(
  requiredCoverage: readonly string[] = COMPONENT_CONTRACT_REQUIRED_COVERAGE,
): readonly ComponentContractGovernanceRecord[] {
  return COMPONENT_CONTRACTS.map((contract) => ({
    id: contract.id,
    owner: componentContractOwner(contract),
    reviewSurface: componentContractReviewSurface(contract),
    reviewTier: componentContractReviewTier(contract),
    risk: componentContractRisk(contract),
    lifecycle: componentContractLifecycle(contract),
    depth: componentContractDepth(contract),
    coverageGaps: requiredCoverage.filter((coverage) =>
      !contract.checkCoverage.includes(coverage)
    ),
  }));
}

export function componentContractPlatformSupport(): readonly string[] {
  return Array.from(
    new Set(
      COMPONENT_CONTRACTS.flatMap((contract) => contract.responsiveModes),
    ),
  );
}

export function componentContractAccessibilityRecords(): readonly ComponentContractAccessibilityRecord[] {
  return COMPONENT_CONTRACTS.map((contract) => ({
    id: contract.id,
    ariaRequirements: contract.ariaRequirements,
    stateAttributes: contract.stateAttributes,
    risk: componentContractRisk(contract),
  }));
}

export function componentContractRequiredClasses(): readonly string[] {
  return Array.from(
    new Set(
      COMPONENT_CONTRACTS.flatMap((contract) => contract.requiredClasses),
    ),
  );
}

export function componentContractHooks(): readonly string[] {
  return Array.from(
    new Set(COMPONENT_CONTRACTS.flatMap((contract) => contract.hooks)),
  );
}

export function componentContractAriaRequirements(): readonly string[] {
  return Array.from(
    new Set(
      COMPONENT_CONTRACTS.flatMap((contract) => contract.ariaRequirements),
    ),
  );
}

export function componentContractStateAttributes(): readonly string[] {
  return Array.from(
    new Set(
      COMPONENT_CONTRACTS.flatMap((contract) => contract.stateAttributes),
    ),
  );
}

export function componentContractRequiredIcons(): readonly string[] {
  return Array.from(
    new Set(COMPONENT_CONTRACTS.flatMap((contract) => contract.requiredIcons)),
  );
}

export function componentContractSampleSections(): readonly string[] {
  return Array.from(
    new Set(COMPONENT_CONTRACTS.map((contract) => contract.sampleSection)),
  );
}

export function componentContractResponsiveModes(): readonly string[] {
  return Array.from(
    new Set(
      COMPONENT_CONTRACTS.flatMap((contract) => contract.responsiveModes),
    ),
  );
}
