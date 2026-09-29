export const COMPONENTS_PLATFORM_DEVELOPER_CSS = `
.adlaire-api-explorer-panel,
.adlaire-request-builder,
.adlaire-schema-reference-panel,
.adlaire-sdk-selector,
.adlaire-webhook-delivery-log,
.adlaire-integration-setup-checklist,
.adlaire-production-readiness-checklist,
.adlaire-deprecation-timeline,
.adlaire-migration-step-list {
  display: grid;
  gap: 12px;
  padding: 14px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-md);
  color: var(--adlaire-surface-text);
}

.adlaire-endpoint-card,
.adlaire-response-preview,
.adlaire-code-sample-card,
.adlaire-webhook-endpoint-card,
.adlaire-oauth-consent-panel,
.adlaire-api-key-rotation-card,
.adlaire-secret-rotation-panel,
.adlaire-rate-limit-meter,
.adlaire-quota-usage-card,
.adlaire-sandbox-environment-card,
.adlaire-integration-health-panel,
.adlaire-connection-test-card,
.adlaire-payload-inspector,
.adlaire-event-replay-panel,
.adlaire-version-compatibility-badge,
.adlaire-breaking-change-notice,
.adlaire-developer-note-card,
.adlaire-changelog-entry-card,
.adlaire-support-escalation-card {
  display: grid;
  gap: 8px;
  padding: 12px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-sm);
  color: var(--adlaire-surface-text);
}

.adlaire-endpoint-card,
.adlaire-webhook-event-row,
.adlaire-dependency-status-row,
.adlaire-version-compatibility-badge,
.adlaire-changelog-entry-card,
.adlaire-support-escalation-card,
.adlaire-sdk-option,
.adlaire-environment-option,
.adlaire-integration-setup-item,
.adlaire-production-readiness-item,
.adlaire-migration-step-item,
.adlaire-deprecation-timeline-item {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
  justify-content: space-between;
}

.adlaire-sdk-selector,
.adlaire-integration-setup-checklist,
.adlaire-production-readiness-checklist,
.adlaire-migration-step-list {
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
}

.adlaire-webhook-event-row,
.adlaire-webhook-delivery-item,
.adlaire-dependency-status-row,
.adlaire-sdk-option,
.adlaire-environment-option,
.adlaire-integration-setup-item,
.adlaire-production-readiness-item,
.adlaire-migration-step-item,
.adlaire-deprecation-timeline-item {
  padding: 10px 12px;
  background-color: var(--adlaire-surface-soft);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-sm);
  color: var(--adlaire-surface-text-muted);
}

.adlaire-sdk-option,
.adlaire-sandbox-environment-card,
.adlaire-connection-test-card,
.adlaire-migration-step-item {
  cursor: pointer;
}

.adlaire-sdk-option[aria-pressed="true"],
.adlaire-sandbox-environment-card[aria-selected="true"],
.adlaire-connection-test-card[aria-pressed="true"],
.adlaire-migration-step-item[aria-checked="true"] {
  border-color: var(--adlaire-surface-accent);
  box-shadow: var(--adlaire-shadow-focus-ring);
  color: var(--adlaire-surface-accent-strong);
}

.adlaire-breaking-change-notice[data-state="breaking"],
.adlaire-rate-limit-meter[data-state="limited"],
.adlaire-quota-usage-card[data-state="near-limit"] {
  background-color: var(--adlaire-semantic-warning-bg);
  border-color: var(--adlaire-semantic-warning-border);
  color: var(--adlaire-semantic-warning-text);
}

.adlaire-connection-test-card[data-state="passed"],
.adlaire-integration-health-panel[data-state="healthy"],
.adlaire-version-compatibility-badge[data-state="compatible"],
.adlaire-production-readiness-checklist[data-state="ready"] {
  border-color: var(--adlaire-semantic-success-border);
  color: var(--adlaire-semantic-success-text);
}

`;
