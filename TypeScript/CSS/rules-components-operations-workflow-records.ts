export const COMPONENTS_OPERATIONS_WORKFLOW_RECORDS_CSS = `.adlaire-query-bar,
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

`;
