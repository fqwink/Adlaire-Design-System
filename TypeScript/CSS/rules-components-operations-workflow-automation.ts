export const COMPONENTS_OPERATIONS_WORKFLOW_AUTOMATION_CSS = `.adlaire-agent-task-list,
.adlaire-run-status-rail,
.adlaire-execution-timeline,
.adlaire-context-attachment-tray,
.adlaire-context-source-list,
.adlaire-instruction-stack,
.adlaire-artifact-diff-panel,
.adlaire-recovery-action-list {
  display: grid;
  gap: 12px;
  padding: 14px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-md);
  color: var(--adlaire-surface-text);
}

.adlaire-agent-run-card,
.adlaire-automation-trigger-card,
.adlaire-tool-permission-card,
.adlaire-approval-gate-panel,
.adlaire-human-review-card,
.adlaire-checkpoint-card,
.adlaire-retry-checkpoint-panel,
.adlaire-handoff-card,
.adlaire-memory-note-card,
.adlaire-prompt-composer-panel,
.adlaire-model-setting-row,
.adlaire-reasoning-meter,
.adlaire-token-budget-meter,
.adlaire-artifact-preview-card,
.adlaire-output-validation-card,
.adlaire-guardrail-result-row,
.adlaire-failure-diagnosis-panel,
.adlaire-schedule-run-card,
.adlaire-recurring-automation-row,
.adlaire-notification-policy-card,
.adlaire-run-summary-panel {
  display: grid;
  gap: 8px;
  padding: 12px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-sm);
  color: var(--adlaire-surface-text);
}

.adlaire-agent-run-card,
.adlaire-automation-trigger-card,
.adlaire-tool-call-row,
.adlaire-tool-permission-card,
.adlaire-approval-gate-panel,
.adlaire-checkpoint-card,
.adlaire-handoff-card,
.adlaire-context-attachment-item,
.adlaire-context-source-item,
.adlaire-instruction-step,
.adlaire-model-setting-row,
.adlaire-guardrail-result-row,
.adlaire-recovery-action-item,
.adlaire-recurring-automation-row,
.adlaire-notification-policy-card,
.adlaire-run-summary-panel {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
  justify-content: space-between;
}

.adlaire-agent-task-list,
.adlaire-run-status-rail,
.adlaire-context-attachment-tray,
.adlaire-context-source-list,
.adlaire-recovery-action-list {
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
}

.adlaire-instruction-stack,
.adlaire-execution-timeline,
.adlaire-artifact-diff-panel {
  grid-template-columns: 1fr;
}

.adlaire-tool-call-row,
.adlaire-run-status-item,
.adlaire-execution-timeline-item,
.adlaire-context-attachment-item,
.adlaire-context-source-item,
.adlaire-instruction-step,
.adlaire-recovery-action-item {
  padding: 10px 12px;
  background-color: var(--adlaire-surface-soft);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-sm);
  color: var(--adlaire-surface-text-muted);
}

.adlaire-tool-permission-card,
.adlaire-approval-gate-panel,
.adlaire-checkpoint-card,
.adlaire-notification-policy-card {
  cursor: pointer;
}

.adlaire-tool-permission-card[aria-pressed="true"],
.adlaire-approval-gate-panel[aria-pressed="true"],
.adlaire-checkpoint-card[aria-selected="true"],
.adlaire-notification-policy-card[aria-pressed="true"] {
  border-color: var(--adlaire-surface-accent);
  box-shadow: var(--adlaire-shadow-focus-ring);
  color: var(--adlaire-surface-accent-strong);
}

.adlaire-token-budget-meter[data-state="high"],
.adlaire-guardrail-result-row[data-state="blocked"],
.adlaire-failure-diagnosis-panel[data-state="failed"] {
  background-color: var(--adlaire-semantic-warning-bg);
  border-color: var(--adlaire-semantic-warning-border);
  color: var(--adlaire-semantic-warning-text);
}

.adlaire-artifact-preview-card[data-state="ready"],
.adlaire-output-validation-card[data-state="valid"],
.adlaire-schedule-run-card[data-state="scheduled"],
.adlaire-run-summary-panel[data-state="complete"] {
  border-color: var(--adlaire-semantic-success-border);
  color: var(--adlaire-semantic-success-text);
}
`;
