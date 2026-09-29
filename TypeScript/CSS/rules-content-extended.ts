export const CONTENT_EXTENDED_CSS = `
/* Implemented extended content UI patterns */
.adlaire-toc,
.adlaire-toc-list,
.adlaire-toc-item {
  display: grid;
  gap: 8px;
}

.adlaire-toc {
  padding: 16px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-md);
}

.adlaire-toc-list {
  margin: 0;
  padding: 0;
  list-style: none;
}

.adlaire-toc-link {
  color: var(--adlaire-surface-text);
  text-decoration: none;
}

.adlaire-toc-link:hover,
.adlaire-toc-link[aria-current="true"] {
  color: var(--adlaire-surface-accent);
  text-decoration: underline;
}

.adlaire-content-card,
.adlaire-code-block,
.adlaire-related-articles,
.adlaire-knowledge-search,
.adlaire-knowledge-category-nav,
.adlaire-knowledge-updates {
  display: grid;
  gap: 12px;
  padding: 16px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-md);
}

.adlaire-code-block {
  overflow: auto;
  background-color: var(--adlaire-status-dark);
  color: var(--adlaire-surface-card);
  font-family: var(--adlaire-font-family-mono);
  line-height: 1.7;
}

.adlaire-code-header {
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: space-between;
  color: var(--adlaire-surface-card);
  font-size: 0.875rem;
}

.adlaire-code-copy {
  cursor: pointer;
}

.adlaire-related-list,
.adlaire-knowledge-category-list,
.adlaire-knowledge-update-list {
  display: grid;
  gap: 10px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.adlaire-related-item,
.adlaire-knowledge-category-item,
.adlaire-knowledge-update-item {
  padding: 10px 0;
  border-bottom: 1px solid var(--adlaire-surface-border);
}

.adlaire-related-item:last-child,
.adlaire-knowledge-category-item:last-child,
.adlaire-knowledge-update-item:last-child {
  border-bottom: 0;
}

.adlaire-repo-file-list,
.adlaire-repo-commit-list,
.adlaire-repo-diff,
.adlaire-git-file-tree,
.adlaire-git-path-nav,
.adlaire-git-file-viewer,
.adlaire-git-code-view,
.adlaire-git-commit-list,
.adlaire-git-commit-detail,
.adlaire-git-diff-viewer,
.adlaire-git-release-list,
.adlaire-git-wiki-body,
.adlaire-git-package-list {
  display: grid;
  gap: 10px;
}

.adlaire-repo-file-list,
.adlaire-repo-commit-list,
.adlaire-repo-diff,
.adlaire-git-file-viewer,
.adlaire-git-code-view,
.adlaire-git-diff-viewer {
  padding: 16px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-md);
}

.adlaire-repo-file-item,
.adlaire-repo-commit-item,
.adlaire-git-file-tree-item,
.adlaire-git-commit-item,
.adlaire-git-release-item,
.adlaire-git-package-item {
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
  border-bottom: 1px solid var(--adlaire-surface-border);
}

.adlaire-git-path-nav {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  align-items: center;
}

.adlaire-git-code-line {
  display: grid;
  grid-template-columns: 56px minmax(0, 1fr);
  font-family: var(--adlaire-font-family-mono);
}

.adlaire-git-line-number {
  padding-right: 12px;
  color: var(--adlaire-surface-text-subtle);
  text-align: right;
  user-select: none;
}

.adlaire-git-line-code {
  min-width: 0;
  overflow-x: auto;
}

.adlaire-git-line-highlight,
.adlaire-git-diff-added {
  background-color: var(--adlaire-alert-success-bg);
}

.adlaire-git-diff-removed {
  background-color: var(--adlaire-alert-danger-bg);
}

.adlaire-markdown-body,
.adlaire-mdx-body {
  color: var(--adlaire-surface-text);
  line-height: 1.8;
}

.adlaire-markdown-body > *:first-child,
.adlaire-mdx-body > *:first-child {
  margin-top: 0;
}

.adlaire-markdown-body pre,
.adlaire-mdx-body pre {
  overflow: auto;
  padding: 16px;
  background-color: var(--adlaire-status-dark);
  border-radius: var(--adlaire-radius-sm);
  color: var(--adlaire-surface-card);
}

.adlaire-md-note {
  padding: 14px 16px;
  background-color: var(--adlaire-surface-soft);
  border-left: 4px solid var(--adlaire-surface-accent);
  border-radius: var(--adlaire-radius-sm);
}

.adlaire-md-footnote {
  color: var(--adlaire-surface-text-subtle);
  font-size: 0.875rem;
}

.adlaire-audit-trail,
.adlaire-activity-log,
.adlaire-admin-audit-log {
  display: grid;
  gap: 10px;
}

.adlaire-activity-item,
.adlaire-audit-item {
  display: grid;
  grid-template-columns: minmax(120px, auto) minmax(0, 1fr) auto;
  gap: 12px;
  align-items: start;
  padding: 12px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-sm);
}

.adlaire-activity-actor {
  color: var(--adlaire-surface-accent-strong);
  font-weight: 700;
}

.adlaire-activity-time {
  color: var(--adlaire-surface-text-subtle);
  font-family: var(--adlaire-font-family-mono);
  font-size: 0.875rem;
}

@media (max-width: 480px) {
  .adlaire-activity-item,
  .adlaire-audit-item,
  .adlaire-git-code-line {
    grid-template-columns: 1fr;
  }
}
`;
