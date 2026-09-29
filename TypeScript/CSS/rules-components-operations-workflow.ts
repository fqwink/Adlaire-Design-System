export const COMPONENTS_OPERATIONS_WORKFLOW_CSS = `.adlaire-section-header,
.adlaire-section-action-bar,
.adlaire-content-group,
.adlaire-summary-rail,
.adlaire-inline-toolbar,
.adlaire-status-badge-group,
.adlaire-bulk-action-tray,
.adlaire-range-selection-panel,
.adlaire-batch-progress-list,
.adlaire-provenance-panel,
.adlaire-verification-checklist,
.adlaire-density-switcher,
.adlaire-responsive-stack-panel,
.adlaire-mobile-overflow-bar,
.adlaire-sticky-action-footer {
  display: grid;
  gap: 12px;
  padding: 14px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-md);
  color: var(--adlaire-surface-text);
}

.adlaire-detail-header,
.adlaire-validation-summary-card,
.adlaire-stale-data-banner,
.adlaire-retry-action-panel,
.adlaire-selection-counter-bar,
.adlaire-compare-selection-card,
.adlaire-confidence-score-card,
.adlaire-audit-trail-card,
.adlaire-viewport-notice,
.adlaire-print-layout-panel {
  display: grid;
  gap: 8px;
  padding: 12px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-sm);
  color: var(--adlaire-surface-text);
}

.adlaire-section-header,
.adlaire-section-action-bar,
.adlaire-detail-header,
.adlaire-inline-toolbar,
.adlaire-status-badge-item,
.adlaire-sync-indicator-row,
.adlaire-selectable-list-row,
.adlaire-batch-progress-item,
.adlaire-source-citation-row,
.adlaire-audit-trail-item,
.adlaire-verification-check-item,
.adlaire-density-option {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
  justify-content: space-between;
}

.adlaire-status-badge-item,
.adlaire-sync-indicator-row,
.adlaire-selectable-list-row,
.adlaire-batch-progress-item,
.adlaire-source-citation-row,
.adlaire-audit-trail-item,
.adlaire-verification-check-item,
.adlaire-density-option {
  padding: 10px 12px;
  background-color: var(--adlaire-surface-soft);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-sm);
  color: var(--adlaire-surface-text-muted);
}

.adlaire-section-action-bar,
.adlaire-inline-toolbar,
.adlaire-status-badge-group,
.adlaire-bulk-action-tray,
.adlaire-density-switcher,
.adlaire-mobile-overflow-bar {
  grid-template-columns: repeat(auto-fit, minmax(120px, max-content));
}

.adlaire-content-group,
.adlaire-responsive-stack-panel {
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
}

.adlaire-summary-rail {
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
}

.adlaire-severity-marker,
.adlaire-freshness-badge {
  display: inline-grid;
  width: fit-content;
  gap: 4px;
  align-items: center;
  padding: 6px 10px;
  background-color: var(--adlaire-surface-soft);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: 999px;
  color: var(--adlaire-surface-text-muted);
}

.adlaire-bulk-action-item,
.adlaire-density-option,
.adlaire-selectable-list-row,
.adlaire-verification-check-item {
  cursor: pointer;
}

.adlaire-density-option[aria-pressed="true"],
.adlaire-selectable-list-row[aria-selected="true"],
.adlaire-verification-check-item[aria-checked="true"] {
  border-color: var(--adlaire-surface-accent);
  box-shadow: var(--adlaire-shadow-focus-ring);
  color: var(--adlaire-surface-accent-strong);
}

.adlaire-severity-marker[data-severity="high"],
.adlaire-validation-summary-card[data-state="invalid"],
.adlaire-stale-data-banner[data-state="stale"],
.adlaire-viewport-notice[data-state="narrow"] {
  background-color: var(--adlaire-semantic-warning-bg);
  border-color: var(--adlaire-semantic-warning-border);
  color: var(--adlaire-semantic-warning-text);
}

.adlaire-sync-indicator-row[data-state="synced"],
.adlaire-confidence-score-card[data-state="high"],
.adlaire-freshness-badge[data-state="fresh"],
.adlaire-print-layout-panel[data-state="ready"] {
  border-color: var(--adlaire-semantic-success-border);
  color: var(--adlaire-semantic-success-text);
}

.adlaire-query-bar,
.adlaire-saved-filter-bar,
.adlaire-active-filter-chips,
.adlaire-facet-panel,
.adlaire-column-visibility-panel,
.adlaire-column-pin-rail,
.adlaire-record-list,
.adlaire-sync-queue-panel,
.adlaire-merge-suggestion-panel,
.adlaire-view-preset-switcher {
  display: grid;
  gap: 12px;
  padding: 14px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-md);
  color: var(--adlaire-surface-text);
}

.adlaire-sort-control,
.adlaire-row-action-menu,
.adlaire-record-detail-preview,
.adlaire-record-expansion-panel,
.adlaire-inline-edit-field,
.adlaire-edit-conflict-banner,
.adlaire-change-summary-card,
.adlaire-undo-action-banner,
.adlaire-import-job-card,
.adlaire-export-job-card,
.adlaire-data-quality-score,
.adlaire-duplicate-warning-card,
.adlaire-bulk-confirmation-panel,
.adlaire-bulk-result-summary,
.adlaire-selection-scope-notice,
.adlaire-table-footer-summary,
.adlaire-pagination-status,
.adlaire-saved-view-card,
.adlaire-record-audit-summary {
  display: grid;
  gap: 8px;
  padding: 12px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-sm);
  color: var(--adlaire-surface-text);
}

.adlaire-query-bar,
.adlaire-saved-filter-bar,
.adlaire-active-filter-chips,
.adlaire-column-pin-rail,
.adlaire-record-row,
.adlaire-row-action-menu,
.adlaire-inline-edit-field,
.adlaire-undo-action-banner,
.adlaire-sync-queue-item,
.adlaire-table-footer-summary,
.adlaire-pagination-status,
.adlaire-saved-view-card,
.adlaire-record-audit-summary {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
  justify-content: space-between;
}

.adlaire-query-bar,
.adlaire-saved-filter-bar,
.adlaire-active-filter-chips,
.adlaire-column-pin-rail,
.adlaire-view-preset-switcher {
  grid-template-columns: repeat(auto-fit, minmax(120px, max-content));
}

.adlaire-facet-panel,
.adlaire-column-visibility-panel,
.adlaire-record-list,
.adlaire-sync-queue-panel,
.adlaire-merge-suggestion-panel {
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
}

.adlaire-record-row,
.adlaire-sync-queue-item,
.adlaire-view-preset-option,
.adlaire-active-filter-chip,
.adlaire-facet-option,
.adlaire-column-option {
  padding: 10px 12px;
  background-color: var(--adlaire-surface-soft);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-sm);
  color: var(--adlaire-surface-text-muted);
}

.adlaire-sort-option,
.adlaire-column-pin-item,
.adlaire-view-preset-option,
.adlaire-record-row,
.adlaire-inline-edit-field,
.adlaire-bulk-confirmation-panel {
  cursor: pointer;
}

.adlaire-sort-option[aria-pressed="true"],
.adlaire-view-preset-option[aria-pressed="true"],
.adlaire-record-row[aria-selected="true"],
.adlaire-inline-edit-field[aria-pressed="true"],
.adlaire-bulk-confirmation-panel[aria-pressed="true"] {
  border-color: var(--adlaire-surface-accent);
  box-shadow: var(--adlaire-shadow-focus-ring);
  color: var(--adlaire-surface-accent-strong);
}

.adlaire-edit-conflict-banner[data-state="conflict"],
.adlaire-duplicate-warning-card[data-state="warning"],
.adlaire-selection-scope-notice[data-state="partial"] {
  background-color: var(--adlaire-semantic-warning-bg);
  border-color: var(--adlaire-semantic-warning-border);
  color: var(--adlaire-semantic-warning-text);
}

.adlaire-import-job-card[data-state="running"],
.adlaire-export-job-card[data-state="ready"],
.adlaire-data-quality-score[data-state="good"],
.adlaire-bulk-result-summary[data-state="complete"] {
  border-color: var(--adlaire-semantic-success-border);
  color: var(--adlaire-semantic-success-text);
}

.adlaire-agent-task-list,
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
