export const COMPONENTS_FOUNDATION_DOMAINS_COLLABORATION_CSS =
  `.adlaire-review-request-card,
.adlaire-annotation-card,
.adlaire-meeting-notes {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  gap: 12px;
  align-items: center;
  padding: 14px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-lg);
}

.adlaire-collaborator-list img,
.adlaire-review-request-card img,
.adlaire-change-request-list img,
.adlaire-annotation-card img,
.adlaire-version-history img,
.adlaire-task-board img,
.adlaire-escalation-banner img,
.adlaire-meeting-notes img {
  width: 20px;
  height: 20px;
  flex: 0 0 auto;
}

.adlaire-review-request-card span,
.adlaire-annotation-card span,
.adlaire-meeting-notes span {
  display: block;
  margin-top: 2px;
  color: var(--adlaire-surface-text-subtle);
  font-size: 0.875rem;
}

.adlaire-collaborator-list,
.adlaire-change-request-list,
.adlaire-version-history {
  display: grid;
  gap: 10px;
  margin: 0;
  padding: 12px;
  background-color: var(--adlaire-surface-soft);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-md);
  list-style: none;
}

.adlaire-collaborator-item,
.adlaire-change-request-item,
.adlaire-version-history-item,
.adlaire-task-card,
.adlaire-escalation-banner {
  display: flex;
  gap: 10px;
  align-items: center;
  min-width: 0;
  padding: 10px 12px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-md);
  color: var(--adlaire-surface-text-muted);
}

.adlaire-presence-stack {
  display: flex;
  align-items: center;
  padding: 8px;
}

.adlaire-presence-avatar {
  display: inline-flex;
  width: 32px;
  height: 32px;
  align-items: center;
  justify-content: center;
  margin-left: -6px;
  background-color: var(--adlaire-surface-accent);
  border: 2px solid var(--adlaire-surface-card);
  border-radius: var(--adlaire-radius-round);
  color: var(--adlaire-surface-card);
  font-size: 0.75rem;
  font-weight: 800;
}

.adlaire-presence-avatar:first-child {
  margin-left: 0;
}

.adlaire-review-decision,
.adlaire-suggestion-panel,
.adlaire-diff-summary,
.adlaire-checklist-panel,
.adlaire-notification-digest,
.adlaire-signoff-panel {
  display: grid;
  gap: 10px;
  padding: 16px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-lg);
}

.adlaire-review-decision > span,
.adlaire-diff-summary > span,
.adlaire-notification-digest > span,
.adlaire-signoff-panel > span {
  color: var(--adlaire-surface-accent-strong);
  font-size: 1.25rem;
  font-weight: 800;
  line-height: 1.1;
}

.adlaire-comment-thread {
  display: grid;
  gap: 10px;
  padding: 14px;
  background-color: var(--adlaire-surface-soft);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-lg);
}

.adlaire-task-board {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 12px;
  padding: 12px;
  background-color: var(--adlaire-surface-soft);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-md);
}

`;
