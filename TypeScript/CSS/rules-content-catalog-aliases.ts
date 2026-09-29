export const CONTENT_CATALOG_ALIASES_CSS = `
/* Catalog completeness aliases */
.adlaire-content-card-header,
.adlaire-content-card-body,
.adlaire-content-card-footer,
.adlaire-code-title,
.adlaire-code-body,
.adlaire-related-meta,
.adlaire-data-card-title,
.adlaire-data-card-value,
.adlaire-toc-title,
.adlaire-knowledge-search-nav,
.adlaire-knowledge-list,
.adlaire-git-readme,
.adlaire-git-readme-meta,
.adlaire-git-docs-nav,
.adlaire-git-docs-page,
.adlaire-git-wiki,
.adlaire-git-artifact-list,
.adlaire-repo-save-status,
.adlaire-repo-change-badge {
  display: block;
}

.adlaire-content-card-header,
.adlaire-code-title,
.adlaire-data-card-title,
.adlaire-toc-title {
  color: var(--adlaire-surface-accent-strong);
  font-weight: 700;
}

.adlaire-content-card-body,
.adlaire-content-card-footer,
.adlaire-related-meta,
.adlaire-git-readme-meta,
.adlaire-repo-save-status {
  color: var(--adlaire-surface-text-subtle);
  line-height: 1.7;
}

.adlaire-data-card-value {
  color: var(--adlaire-surface-text);
  font-size: 1.5rem;
  font-weight: 700;
}

.adlaire-code-body {
  overflow: auto;
  font-family: var(--adlaire-font-family-mono);
}

.adlaire-comparison-table,
.adlaire-data-table,
.adlaire-table {
  width: 100%;
  border-collapse: collapse;
}

.adlaire-comparison-table th,
.adlaire-comparison-table td,
.adlaire-data-table th,
.adlaire-data-table td,
.adlaire-table th,
.adlaire-table td {
  padding: 12px 14px;
  border: 1px solid var(--adlaire-surface-border);
  text-align: left;
}

.adlaire-table-row-selected {
  background-color: var(--adlaire-surface-soft);
}

.adlaire-table-cell-muted {
  color: var(--adlaire-surface-text-subtle);
}

.adlaire-toc-sticky {
  position: sticky;
  top: 16px;
}

.adlaire-toc-link-current {
  color: var(--adlaire-surface-accent);
  font-weight: 700;
}

.adlaire-repo-file-row,
.adlaire-repo-directory-row,
.adlaire-git-file-row,
.adlaire-git-file-header,
.adlaire-git-file-empty,
.adlaire-git-ref-switcher,
.adlaire-git-ref-current,
.adlaire-git-ref-menu {
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
}

.adlaire-repo-diff-added,
.adlaire-git-diff-added {
  background-color: var(--adlaire-alert-success-bg);
}

.adlaire-repo-diff-removed,
.adlaire-git-diff-removed {
  background-color: var(--adlaire-alert-danger-bg);
}

.adlaire-git-review-comment,
.adlaire-git-review-resolved {
  padding: 10px 12px;
  background-color: var(--adlaire-surface-soft);
  border-left: 4px solid var(--adlaire-surface-accent);
  border-radius: var(--adlaire-radius-sm);
}

.adlaire-git-review-resolved {
  opacity: 0.72;
}

.adlaire-search-result-item,
.adlaire-search-suggest {
  display: grid;
  gap: 8px;
}

.adlaire-git-repo-meta,
.adlaire-git-repo-summary,
.adlaire-repo-settings,
.adlaire-repo-settings-row,
.adlaire-repo-settings-section {
  display: grid;
  gap: 8px;
}

.adlaire-git-repo-meta,
.adlaire-git-repo-summary {
  color: var(--adlaire-surface-text-subtle);
  line-height: 1.7;
}

.adlaire-repo-settings-section {
  padding: 14px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-sm);
}

`;
