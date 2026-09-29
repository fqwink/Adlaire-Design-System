export const COMPONENTS_FOUNDATION_SUPPORT_CSS = `.adlaire-help-article-card,
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

.adlaire-help-center-panel,
.adlaire-recommendation-panel,
.adlaire-preference-panel,
.adlaire-language-selector-panel,
.adlaire-keyboard-shortcut-panel {
  display: grid;
  gap: 10px;
  padding: 16px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-lg);
}

.adlaire-help-center-panel > span,
.adlaire-recommendation-panel > span,
.adlaire-preference-panel > span,
.adlaire-language-selector-panel > span,
.adlaire-keyboard-shortcut-panel > span {
  color: var(--adlaire-surface-accent-strong);
  font-size: 1.25rem;
  font-weight: 800;
  line-height: 1.1;
}

.adlaire-split-block {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  gap: 24px;
  align-items: center;
}

.adlaire-stacked-feature {
  display: grid;
  gap: 16px;
}

.adlaire-pagination {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
  margin: 0;
  padding: 0;
  list-style: none;
}

.adlaire-page-link {
  display: inline-flex;
  min-width: 36px;
  min-height: 36px;
  align-items: center;
  justify-content: center;
  padding: 6px 10px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-sm);
  color: var(--adlaire-surface-text-muted);
  text-decoration: none;
}

.adlaire-page-link:hover,
.adlaire-page-link:focus-visible {
  border-color: var(--adlaire-surface-accent);
  box-shadow: var(--adlaire-shadow-focus-ring);
  color: var(--adlaire-surface-accent);
  outline: 0;
}

.adlaire-page-link-current,
.adlaire-page-link[aria-current="page"] {
  background-color: var(--adlaire-surface-accent);
  border-color: var(--adlaire-surface-accent);
  color: var(--adlaire-surface-card);
  font-weight: 700;
}

.adlaire-page-link-disabled,
.adlaire-page-link[aria-disabled="true"] {
  background-color: var(--adlaire-status-gray-light);
  color: var(--adlaire-status-gray-999);
  cursor: not-allowed;
  pointer-events: none;
}

.adlaire-filter-chip-list {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.adlaire-filter-chip {
  display: inline-flex;
  min-height: 36px;
  align-items: center;
  justify-content: center;
  padding: 6px 12px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-sm);
  color: var(--adlaire-surface-text-muted);
  cursor: pointer;
}

.adlaire-filter-chip:hover,
.adlaire-filter-chip:focus-visible,
.adlaire-filter-chip[aria-pressed="true"] {
  background-color: var(--adlaire-surface-soft);
  border-color: var(--adlaire-surface-accent);
  color: var(--adlaire-surface-accent-strong);
  outline: 0;
}
`;
