export const COMPONENTS_FOUNDATION_SUPPORT_CARDS_CSS = `.adlaire-help-article-card,
.adlaire-personalization-card,
.adlaire-release-highlight {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  gap: 12px;
  align-items: center;
  padding: 14px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-lg);
}

.adlaire-onboarding-flow img,
.adlaire-tour-callout img,
.adlaire-guided-task-list img,
.adlaire-help-article-card img,
.adlaire-search-result-list img,
.adlaire-recent-item-list img,
.adlaire-personalization-card img,
.adlaire-notification-preference-list img,
.adlaire-release-highlight img {
  width: 20px;
  height: 20px;
  flex: 0 0 auto;
}

.adlaire-help-article-card span,
.adlaire-personalization-card span,
.adlaire-release-highlight span {
  display: block;
  margin-top: 2px;
  color: var(--adlaire-surface-text-subtle);
  font-size: 0.875rem;
}

.adlaire-onboarding-flow,
.adlaire-guided-task-list,
.adlaire-search-result-list,
.adlaire-recent-item-list,
.adlaire-notification-preference-list {
  display: grid;
  gap: 10px;
  margin: 0;
  padding: 12px;
  background-color: var(--adlaire-surface-soft);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-md);
  list-style: none;
}

.adlaire-onboarding-step-card,
.adlaire-guided-task-item,
.adlaire-search-result-item,
.adlaire-recent-item,
.adlaire-notification-preference-item,
.adlaire-tour-callout {
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

`;
