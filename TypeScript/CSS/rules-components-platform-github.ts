export const COMPONENTS_PLATFORM_GITHUB_CSS = `.adlaire-git-repo-list,
.adlaire-git-repo-card,
.adlaire-git-branch-switcher,
.adlaire-git-pr-list,
.adlaire-git-issue-list,
.adlaire-git-review-thread,
.adlaire-git-review-state,
.adlaire-git-check-status,
.adlaire-git-ci-status,
.adlaire-git-merge-state,
.adlaire-git-security-alert,
.adlaire-git-settings-panel,
.adlaire-git-web-ide-entry,
.adlaire-git-project-board,
.adlaire-git-diff-hunk,
.adlaire-git-notification-actions,
.adlaire-git-org-members,
.adlaire-git-mobile-nav {
  display: grid;
  gap: 12px;
}

.adlaire-git-repo-card,
.adlaire-git-settings-panel,
.adlaire-git-review-thread,
.adlaire-git-security-alert,
.adlaire-git-project-board,
.adlaire-git-diff-hunk {
  padding: 16px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-md);
}

.adlaire-git-branch-switcher,
.adlaire-git-notification-actions,
.adlaire-git-mobile-nav {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.adlaire-git-check-status {
  padding: 12px;
  background-color: var(--adlaire-surface-soft);
  border-left: 4px solid var(--adlaire-status-success);
  border-radius: var(--adlaire-radius-sm);
}

.adlaire-git-review-state,
.adlaire-git-ci-status,
.adlaire-git-merge-state {
  display: inline-flex;
  width: fit-content;
  gap: 6px;
  align-items: center;
  padding: 6px 10px;
  background-color: var(--adlaire-semantic-selected-bg);
  border: 1px solid var(--adlaire-semantic-selected-border);
  border-radius: var(--adlaire-radius-round);
  color: var(--adlaire-semantic-selected-text);
  font-size: 0.875rem;
  font-weight: 600;
}

.adlaire-git-ci-status[data-state="failed"],
.adlaire-git-merge-state[data-state="blocked"] {
  background-color: var(--adlaire-semantic-danger-bg);
  border-color: var(--adlaire-semantic-danger-border);
  color: var(--adlaire-semantic-danger-text);
}

.adlaire-git-diff-hunk {
  font-family: var(--adlaire-font-family-mono);
  font-size: 0.875rem;
}

.adlaire-git-security-alert {
  background-color: var(--adlaire-alert-warning-bg);
  border-color: var(--adlaire-alert-warning-border);
  color: var(--adlaire-alert-warning-text);
}

.adlaire-github-product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 12px;
}

.adlaire-github-product-card,
.adlaire-github-action-card,
.adlaire-github-copilot-card,
.adlaire-github-codespace-card,
.adlaire-github-package-card,
.adlaire-github-pages-card,
.adlaire-github-project-board-card,
.adlaire-github-discussion-card,
.adlaire-github-release-card,
.adlaire-github-marketplace-card {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  gap: 12px;
  align-items: center;
  padding: 14px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-md);
}

.adlaire-github-product-grid img,
.adlaire-github-integration-list img,
.adlaire-github-dependabot-alert img {
  width: 20px;
  height: 20px;
  flex: 0 0 auto;
}

.adlaire-github-product-card span,
.adlaire-github-action-card span,
.adlaire-github-copilot-card span,
.adlaire-github-codespace-card span,
.adlaire-github-package-card span,
.adlaire-github-pages-card span,
.adlaire-github-project-board-card span,
.adlaire-github-discussion-card span,
.adlaire-github-release-card span,
.adlaire-github-marketplace-card span {
  display: block;
  margin-top: 2px;
  color: var(--adlaire-surface-text-subtle);
  font-size: 0.875rem;
}

.adlaire-github-security-panel,
.adlaire-github-webhook-panel,
.adlaire-github-api-key-panel {
  display: grid;
  gap: 8px;
  padding: 14px;
  background-color: var(--adlaire-surface-soft);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-md);
}

.adlaire-github-security-panel > span,
.adlaire-github-webhook-panel > span,
.adlaire-github-api-key-panel > span {
  color: var(--adlaire-surface-accent-strong);
  font-weight: 700;
}

.adlaire-github-dependabot-alert,
.adlaire-github-integration-list li {
  display: flex;
  gap: 10px;
  align-items: center;
  min-width: 0;
  padding: 10px 12px;
  background-color: var(--adlaire-alert-warning-bg);
  border: 1px solid var(--adlaire-alert-warning-border);
  border-radius: var(--adlaire-radius-md);
  color: var(--adlaire-alert-warning-text);
}

.adlaire-github-integration-list {
  display: grid;
  gap: 10px;
  margin: 0;
  padding: 12px;
  background-color: var(--adlaire-surface-soft);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-md);
  list-style: none;
}

`;
