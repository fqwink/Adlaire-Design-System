export const COMPONENTS_FOUNDATION_MEDIA_CSS = `.adlaire-hero-panel,
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

.adlaire-resource-card,
.adlaire-pricing-card {
  display: grid;
  gap: 12px;
  padding: 18px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-lg);
  box-shadow: var(--adlaire-shadow-card);
  color: var(--adlaire-surface-text-muted);
}

.adlaire-resource-card-header,
.adlaire-pricing-card-header {
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: space-between;
  color: var(--adlaire-surface-text);
  font-weight: 700;
}

.adlaire-pricing-card-price {
  color: var(--adlaire-surface-accent-strong);
  font-size: 1.7rem;
  font-weight: 700;
}

.adlaire-permission-matrix {
  display: grid;
  min-width: 0;
  overflow-x: auto;
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-md);
}

.adlaire-permission-matrix table {
  width: 100%;
  min-width: 520px;
  border-collapse: collapse;
}

.adlaire-permission-matrix th,
.adlaire-permission-matrix td {
  padding: 10px 12px;
  border-bottom: 1px solid var(--adlaire-surface-border);
  color: var(--adlaire-surface-text-muted);
  text-align: left;
}

.adlaire-permission-matrix th {
  background-color: var(--adlaire-surface-soft);
  color: var(--adlaire-surface-text);
  font-weight: 700;
}

.adlaire-status-timeline,
.adlaire-approval-flow,
.adlaire-review-checklist {
  display: grid;
  gap: 10px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.adlaire-status-timeline-item,
.adlaire-approval-flow-item,
.adlaire-review-checklist-item {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  gap: 12px;
  align-items: start;
  padding: 12px 14px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-md);
  color: var(--adlaire-surface-text-muted);
}

.adlaire-status-timeline-item::before,
.adlaire-approval-flow-item::before {
  width: 12px;
  height: 12px;
  margin-top: 6px;
  background-color: var(--adlaire-semantic-selected-border);
  border-radius: var(--adlaire-radius-round);
  content: "";
}

.adlaire-monitoring-card,
.adlaire-deployment-card,
.adlaire-team-card {
  display: grid;
  gap: 12px;
  padding: 18px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-lg);
  box-shadow: var(--adlaire-shadow-card);
  color: var(--adlaire-surface-text-muted);
}

.adlaire-monitoring-card-header,
.adlaire-deployment-card-header,
.adlaire-team-card-header {
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: space-between;
  color: var(--adlaire-surface-text);
  font-weight: 700;
}

.adlaire-monitoring-card-metric {
  color: var(--adlaire-surface-accent-strong);
  font-size: 1.6rem;
  font-weight: 700;
}

.adlaire-release-notes {
  display: grid;
  gap: 12px;
  padding: 18px;
  background-color: var(--adlaire-surface-soft);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-lg);
}

.adlaire-release-note-item {
  display: grid;
  gap: 4px;
  padding-bottom: 10px;
  border-bottom: 1px solid var(--adlaire-surface-border);
  color: var(--adlaire-surface-text-muted);
}

.adlaire-release-note-item:last-child {
  padding-bottom: 0;
  border-bottom: 0;
}

.adlaire-query-result {
  display: grid;
  min-width: 0;
  overflow-x: auto;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-md);
}

.adlaire-query-result table {
  width: 100%;
  min-width: 560px;
  border-collapse: collapse;
}

.adlaire-query-result th,
.adlaire-query-result td {
  padding: 10px 12px;
  border-bottom: 1px solid var(--adlaire-surface-border);
  color: var(--adlaire-surface-text-muted);
  text-align: left;
}

.adlaire-query-result th {
  background-color: var(--adlaire-surface-soft);
  color: var(--adlaire-surface-text);
}

.adlaire-organization-switcher {
  display: inline-flex;
  gap: 10px;
  align-items: center;
  padding: 10px 12px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-md);
  color: var(--adlaire-surface-text);
}

.adlaire-responsive-preview {
  display: grid;
  gap: 10px;
  padding: 14px;
  background-color: var(--adlaire-surface-soft);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-lg);
}

.adlaire-responsive-preview-frame {
  min-height: 120px;
  padding: 16px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-md);
}

.adlaire-app-nav,
.adlaire-sidebar-section,
.adlaire-command-launcher,
.adlaire-inbox-list,
.adlaire-message-thread,
.adlaire-upload-queue,
.adlaire-audit-log {
  display: grid;
  gap: 10px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.adlaire-app-nav,
.adlaire-command-launcher,
.adlaire-message-thread,
.adlaire-file-card,
.adlaire-agent-card {
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-lg);
}

.adlaire-app-nav {
  padding: 10px;
}

.adlaire-app-nav-item,
.adlaire-sidebar-section-item,
.adlaire-command-launcher-item,
.adlaire-inbox-list-item,
.adlaire-upload-queue-item,
.adlaire-audit-log-item,
.adlaire-workspace-switcher {
  display: flex;
  gap: 10px;
  align-items: center;
  min-width: 0;
  padding: 10px 12px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-md);
  color: var(--adlaire-surface-text-muted);
  text-decoration: none;
}

.adlaire-app-nav-item[aria-current="page"],
.adlaire-inbox-list-item[aria-current="true"] {
  background-color: var(--adlaire-semantic-selected-bg);
  border-color: var(--adlaire-semantic-selected-border);
  color: var(--adlaire-surface-accent-strong);
}

.adlaire-app-nav img,
.adlaire-sidebar-section img,
.adlaire-command-launcher img,
.adlaire-inbox-list img,
.adlaire-file-card img,
.adlaire-upload-queue img,
.adlaire-agent-card img,
.adlaire-workspace-switcher img,
.adlaire-audit-log img {
  width: 20px;
  height: 20px;
  flex: 0 0 auto;
}

.adlaire-sidebar-section {
  padding: 12px;
  background-color: var(--adlaire-surface-soft);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-md);
}

.adlaire-sidebar-section-title {
  color: var(--adlaire-surface-text);
  font-size: 0.78rem;
  font-weight: 700;
  text-transform: uppercase;
}

.adlaire-command-launcher {
  padding: 14px;
  box-shadow: var(--adlaire-shadow-card);
}

.adlaire-command-launcher-input {
  width: 100%;
  box-sizing: border-box;
  padding: 10px 12px;
  background-color: var(--adlaire-surface-soft);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-md);
  color: var(--adlaire-surface-text);
}

.adlaire-command-launcher-item {
  text-align: left;
  cursor: pointer;
}

.adlaire-message-thread {
  padding: 14px;
  background-color: var(--adlaire-surface-soft);
}

.adlaire-message-bubble {
  max-width: min(100%, 560px);
  padding: 12px 14px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-lg);
  color: var(--adlaire-surface-text-muted);
}

.adlaire-message-bubble-self {
  justify-self: end;
  background-color: var(--adlaire-semantic-selected-bg);
  border-color: var(--adlaire-semantic-selected-border);
}

.adlaire-file-card,
.adlaire-agent-card {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  gap: 12px;
  align-items: center;
  padding: 14px;
}

.adlaire-file-card span,
.adlaire-agent-card span {
  display: block;
  margin-top: 2px;
  color: var(--adlaire-surface-text-subtle);
  font-size: 0.875rem;
}

.adlaire-upload-queue {
  padding: 12px;
  background-color: var(--adlaire-surface-soft);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-md);
}

.adlaire-upload-queue-state {
  margin-left: auto;
  color: var(--adlaire-surface-accent-strong);
  font-family: var(--adlaire-font-family-mono);
  font-size: 0.875rem;
  font-weight: 700;
}

.adlaire-workspace-switcher {
  display: inline-flex;
  cursor: pointer;
}

.adlaire-audit-log {
  padding: 12px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-md);
}

`;
