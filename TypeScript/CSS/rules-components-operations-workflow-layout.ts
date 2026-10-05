export const COMPONENTS_OPERATIONS_WORKFLOW_LAYOUT_CSS =
  `.adlaire-section-header,
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

`;
