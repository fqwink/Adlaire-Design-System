export const COMPONENTS_OPERATIONS_WORKSPACE_TABS_CSS = `.adlaire-tab-workspace,
.adlaire-dock-panel,
.adlaire-context-menu,
.adlaire-quick-action-list,
.adlaire-kanban-board,
.adlaire-asset-browser,
.adlaire-document-outline,
.adlaire-comment-resolver,
.adlaire-publication-checklist {
  display: grid;
  gap: 12px;
  padding: 14px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-md);
  color: var(--adlaire-surface-text);
}

.adlaire-tab-workspace-list {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
  border-bottom: 1px solid var(--adlaire-surface-border);
}

.adlaire-tab-workspace-tab {
  padding: 8px 12px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-bottom: 0;
  border-radius: var(--adlaire-radius-sm) var(--adlaire-radius-sm) 0 0;
  color: var(--adlaire-surface-text-muted);
  cursor: pointer;
}

.adlaire-tab-workspace-tab[aria-selected="true"],
.adlaire-tab-workspace-tab:hover,
.adlaire-tab-workspace-tab:focus-visible {
  background-color: var(--adlaire-surface-soft);
  border-color: var(--adlaire-surface-accent);
  box-shadow: var(--adlaire-shadow-focus-ring);
  color: var(--adlaire-surface-accent-strong);
  outline: 0;
}

.adlaire-tab-workspace-panel {
  display: grid;
  gap: 10px;
  padding: 14px;
  background-color: var(--adlaire-surface-soft);
  border-radius: var(--adlaire-radius-sm);
}

.adlaire-tab-workspace-panel[hidden],
.adlaire-context-menu[hidden],
.adlaire-overflow-toolbar-menu[hidden] {
  display: none;
}

.adlaire-dock-panel {
  padding: 0;
  overflow: hidden;
}

.adlaire-dock-panel-header,
.adlaire-status-bar,
.adlaire-swimlane-header,
.adlaire-lane-summary {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
  justify-content: space-between;
  padding: 10px 12px;
  background-color: var(--adlaire-surface-soft);
  border-bottom: 1px solid var(--adlaire-surface-border);
}

.adlaire-dock-panel-body {
  display: grid;
  gap: 10px;
  padding: 12px;
}

.adlaire-dock-panel.is-collapsed .adlaire-dock-panel-body {
  display: none;
}

.adlaire-panel-rail {
  display: inline-flex;
  gap: 6px;
  align-items: center;
  padding: 6px;
  background-color: var(--adlaire-surface-soft);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-lg);
}

.adlaire-panel-rail-item {
  display: inline-flex;
  min-width: 36px;
  min-height: 36px;
  align-items: center;
  justify-content: center;
  padding: 0 10px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-md);
  color: var(--adlaire-surface-text-muted);
}

.adlaire-panel-rail-item[aria-current="true"],
.adlaire-panel-rail-item:hover,
.adlaire-panel-rail-item:focus-visible {
  border-color: var(--adlaire-surface-accent);
  box-shadow: var(--adlaire-shadow-focus-ring);
  color: var(--adlaire-surface-accent);
  outline: 0;
}

.adlaire-status-bar {
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-sm);
  color: var(--adlaire-surface-text-subtle);
  font-size: 0.875rem;
}

`;
