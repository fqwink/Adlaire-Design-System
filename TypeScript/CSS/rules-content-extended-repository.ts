export const CONTENT_EXTENDED_REPOSITORY_CSS = `.adlaire-repo-file-list,
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

`;
