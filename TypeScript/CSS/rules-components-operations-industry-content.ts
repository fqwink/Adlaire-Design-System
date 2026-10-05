export const COMPONENTS_OPERATIONS_INDUSTRY_CONTENT_CSS =
  `.adlaire-editorial-calendar,
.adlaire-draft-status-board,
.adlaire-review-gate-panel,
.adlaire-media-library-panel,
.adlaire-rendition-list,
.adlaire-asset-approval-queue,
.adlaire-locale-switcher-panel,
.adlaire-translation-queue,
.adlaire-locale-coverage-matrix,
.adlaire-missing-string-list,
.adlaire-seo-checklist,
.adlaire-keyword-cluster,
.adlaire-moderation-queue,
.adlaire-report-reason-panel {
  display: grid;
  gap: 12px;
  padding: 14px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-md);
  color: var(--adlaire-surface-text);
}

.adlaire-content-brief-card,
.adlaire-publish-readiness-card,
.adlaire-asset-rights-card,
.adlaire-usage-license-badge,
.adlaire-metadata-completeness-meter,
.adlaire-translation-memory-card,
.adlaire-glossary-term-card,
.adlaire-search-preview-card,
.adlaire-metadata-editor-panel,
.adlaire-canonical-url-card,
.adlaire-flagged-content-card,
.adlaire-user-trust-score,
.adlaire-appeal-status-tracker {
  display: grid;
  gap: 8px;
  padding: 12px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-sm);
  color: var(--adlaire-surface-text);
}

.adlaire-editorial-calendar-item,
.adlaire-draft-status-item,
.adlaire-editor-assignment-row,
.adlaire-review-gate-option,
.adlaire-media-library-item,
.adlaire-rendition-list-item,
.adlaire-asset-approval-item,
.adlaire-locale-switcher-option,
.adlaire-translation-queue-item,
.adlaire-locale-coverage-row,
.adlaire-missing-string-item,
.adlaire-seo-checklist-item,
.adlaire-keyword-cluster-item,
.adlaire-crawl-status-row,
.adlaire-moderation-queue-item,
.adlaire-moderation-decision-row,
.adlaire-report-reason-item {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
  justify-content: space-between;
  padding: 10px 12px;
  background-color: var(--adlaire-surface-soft);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-sm);
  color: var(--adlaire-surface-text-muted);
}

.adlaire-draft-status-board,
.adlaire-review-gate-panel,
.adlaire-locale-switcher-panel,
.adlaire-locale-coverage-matrix,
.adlaire-seo-checklist,
.adlaire-moderation-queue {
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
}

.adlaire-review-gate-option,
.adlaire-locale-switcher-option,
.adlaire-moderation-decision-row {
  cursor: pointer;
}

.adlaire-review-gate-option[aria-selected="true"],
.adlaire-locale-switcher-option[aria-selected="true"],
.adlaire-moderation-decision-row[aria-pressed="true"] {
  border-color: var(--adlaire-surface-accent);
  box-shadow: var(--adlaire-shadow-focus-ring);
  color: var(--adlaire-surface-accent-strong);
}

.adlaire-publish-readiness-card[data-state="blocked"],
.adlaire-missing-string-list[data-state="incomplete"],
.adlaire-flagged-content-card[data-state="flagged"],
.adlaire-crawl-status-row[data-state="blocked"] {
  background-color: var(--adlaire-semantic-warning-bg);
  border-color: var(--adlaire-semantic-warning-border);
  color: var(--adlaire-semantic-warning-text);
}

.adlaire-asset-rights-card[data-state="cleared"],
.adlaire-metadata-completeness-meter[data-state="complete"],
.adlaire-translation-memory-card[data-state="matched"],
.adlaire-appeal-status-tracker[data-state="resolved"] {
  border-color: var(--adlaire-semantic-success-border);
  color: var(--adlaire-semantic-success-text);
}

`;
