export const COMPONENTS_FOUNDATION_MEDIA_BASE_CSS = `.adlaire-hero-panel,
.adlaire-visual-banner,
.adlaire-image-frame {
  overflow: hidden;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-lg);
}

.adlaire-hero-panel,
.adlaire-visual-banner {
  padding: 32px 24px;
  background-color: var(--adlaire-surface-soft);
  color: var(--adlaire-surface-text-muted);
}

.adlaire-image-frame {
  display: block;
  padding: 8px;
}

.adlaire-logo-list,
.adlaire-partner-list,
.adlaire-icon-tile-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 14px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.adlaire-logo-list-item,
.adlaire-partner-list-item,
.adlaire-icon-tile {
  display: grid;
  min-height: 88px;
  place-items: center;
  padding: 16px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-md);
  color: var(--adlaire-surface-text-muted);
  text-align: center;
}

.adlaire-icon-tile img,
.adlaire-icon-tile svg {
  width: 28px;
  height: 28px;
  color: var(--adlaire-surface-accent);
}

.adlaire-icon-list,
.adlaire-icon-picker,
.adlaire-action-menu,
.adlaire-stat-strip {
  display: grid;
  gap: 10px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.adlaire-icon-list {
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
}

.adlaire-icon-list-item,
.adlaire-action-menu-item,
.adlaire-stat-strip-item {
  display: flex;
  gap: 10px;
  align-items: center;
  padding: 12px 14px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-md);
  color: var(--adlaire-surface-text-muted);
}

.adlaire-icon-list-item img,
.adlaire-icon-list-item svg,
.adlaire-action-menu-item img,
.adlaire-action-menu-item svg {
  width: 18px;
  height: 18px;
  color: var(--adlaire-surface-accent);
  flex: 0 0 auto;
}

.adlaire-icon-picker {
  grid-template-columns: repeat(auto-fit, minmax(44px, 1fr));
}

.adlaire-icon-picker .adlaire-icon-button {
  width: 100%;
}

.adlaire-action-menu {
  min-width: min(100%, 260px);
}

.adlaire-action-menu-item {
  width: 100%;
  justify-content: flex-start;
  cursor: pointer;
}

.adlaire-action-menu-item:hover,
.adlaire-action-menu-item:focus-visible {
  background-color: var(--adlaire-surface-soft);
  border-color: var(--adlaire-surface-accent);
  color: var(--adlaire-surface-accent);
}

.adlaire-stat-strip {
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
}

.adlaire-stat-strip-item {
  display: grid;
  gap: 4px;
}

.adlaire-stat-strip-value {
  color: var(--adlaire-surface-accent-strong);
  font-size: 1.4rem;
  font-weight: 700;
}

.adlaire-notification-list,
.adlaire-activity-feed {
  display: grid;
  gap: 10px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.adlaire-notification-item,
.adlaire-activity-feed-item {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  gap: 12px;
  align-items: start;
  padding: 14px 16px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-md);
  color: var(--adlaire-surface-text-muted);
}

.adlaire-notification-item[aria-current="true"] {
  background-color: var(--adlaire-semantic-selected-bg);
  border-color: var(--adlaire-semantic-selected-border);
}

.adlaire-activity-feed-item::before {
  width: 10px;
  height: 10px;
  margin-top: 7px;
  background-color: var(--adlaire-surface-accent);
  border-radius: var(--adlaire-radius-round);
  content: "";
}

.adlaire-empty-action {
  display: grid;
  gap: 12px;
  justify-items: center;
  padding: 28px 20px;
  background-color: var(--adlaire-surface-soft);
  border: 1px dashed var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-lg);
  color: var(--adlaire-surface-text-muted);
  text-align: center;
}

.adlaire-shortcut-key {
  display: inline-flex;
  min-width: 28px;
  min-height: 28px;
  align-items: center;
  justify-content: center;
  padding: 3px 8px;
  background-color: var(--adlaire-surface-soft);
  border: 1px solid var(--adlaire-surface-border);
  border-bottom-width: 2px;
  border-radius: var(--adlaire-radius-sm);
  color: var(--adlaire-surface-text);
  font-family: var(--adlaire-font-family-mono);
  font-size: 0.78rem;
  font-weight: 700;
}

`;
