export const COMPONENTS_OVERLAY_CATALOG_CSS =
  `/* Catalog completeness aliases */
.adlaire-affiliation-meta,
.adlaire-invite-status,
.adlaire-role-badge,
.adlaire-member-list,
.adlaire-team-list,
.adlaire-git-alert-status,
.adlaire-git-severity,
.adlaire-git-tag,
.adlaire-git-permission,
.adlaire-git-member-permission,
.adlaire-language-switcher-label,
.adlaire-pagination-count,
.adlaire-settings-label,
.adlaire-settings-help,
.adlaire-last-updated {
  color: var(--adlaire-surface-text-subtle);
  font-size: 0.875rem;
}

.adlaire-member-item,
.adlaire-team-item,
.adlaire-git-pr-item,
.adlaire-git-issue-item,
.adlaire-git-check-item,
.adlaire-git-board-card,
.adlaire-git-mobile-action,
.adlaire-search-suggest-item,
.adlaire-related-link,
.adlaire-page-prev,
.adlaire-page-next,
.adlaire-filter-clear,
.adlaire-git-star-action,
.adlaire-git-watch-action,
.adlaire-git-fork-action,
.adlaire-git-download-action,
.adlaire-git-edit-action {
  display: flex;
  gap: 8px;
  align-items: center;
  padding: 10px 12px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-sm);
}

.adlaire-git-check-list,
.adlaire-git-board-column,
.adlaire-git-code-search,
.adlaire-git-search-filter,
.adlaire-git-search-result,
.adlaire-git-activity,
.adlaire-git-insights,
.adlaire-git-contribution-graph,
.adlaire-git-org,
.adlaire-git-team-list {
  display: grid;
  gap: 10px;
}

.adlaire-git-pr-detail,
.adlaire-git-issue-detail,
.adlaire-git-danger-zone,
.adlaire-git-empty,
.adlaire-git-error,
.adlaire-git-loading {
  padding: 16px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-md);
}

.adlaire-git-danger-zone,
.adlaire-git-error {
  background-color: var(--adlaire-alert-danger-bg);
  border-color: var(--adlaire-alert-danger-border);
  color: var(--adlaire-alert-danger-text);
}

.adlaire-git-loading {
  background-color: var(--adlaire-surface-soft);
  color: var(--adlaire-surface-text-subtle);
}

.adlaire-git-edit-disabled {
  opacity: 0.6;
  pointer-events: none;
}

.adlaire-search-empty,
.adlaire-table-empty,
.adlaire-knowledge-empty {
  padding: 18px;
  background-color: var(--adlaire-surface-soft);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-sm);
  color: var(--adlaire-surface-text-subtle);
  text-align: center;
}

.adlaire-dialog-close,
.adlaire-language-option-current,
.adlaire-git-mobile-tab {
  display: inline-flex;
  gap: 6px;
  align-items: center;
  justify-content: center;
  padding: 8px 10px;
  border-radius: var(--adlaire-radius-sm);
}

.adlaire-language-option-current,
.adlaire-git-mobile-tab[aria-current="true"] {
  background-color: var(--adlaire-surface-soft);
  color: var(--adlaire-surface-accent);
}

.adlaire-git-settings {
  display: grid;
  gap: 12px;
  padding: 16px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-md);
}

/* Implemented extended UI patterns */`;
