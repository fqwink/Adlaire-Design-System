export const COMPONENTS_FOUNDATION_MEDIA_APP_CSS = `.adlaire-app-nav,
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
