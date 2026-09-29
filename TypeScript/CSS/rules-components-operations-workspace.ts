export const COMPONENTS_OPERATIONS_WORKSPACE_CSS = `.adlaire-tab-workspace,
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

.adlaire-context-menu {
  gap: 4px;
  min-width: 220px;
  padding: 8px;
  box-shadow: var(--adlaire-shadow-card-hover);
}

.adlaire-context-menu-item,
.adlaire-quick-action-item {
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: space-between;
  padding: 8px 10px;
  background-color: var(--adlaire-surface-card);
  border: 0;
  border-radius: var(--adlaire-radius-sm);
  color: var(--adlaire-surface-text);
  cursor: pointer;
  text-align: left;
}

.adlaire-context-menu-item:hover,
.adlaire-context-menu-item:focus-visible,
.adlaire-quick-action-item:hover,
.adlaire-quick-action-item:focus-visible {
  background-color: var(--adlaire-surface-soft);
  color: var(--adlaire-surface-accent);
  outline: 0;
}

.adlaire-split-button,
.adlaire-overflow-toolbar {
  display: inline-flex;
  position: relative;
  flex-wrap: wrap;
  gap: 0;
  align-items: center;
}

.adlaire-split-button-primary,
.adlaire-split-button-toggle,
.adlaire-overflow-toolbar-button {
  min-height: 38px;
  padding: 8px 12px;
  background-color: var(--adlaire-surface-accent);
  border: 1px solid var(--adlaire-surface-accent);
  color: var(--adlaire-surface-card);
  cursor: pointer;
}

.adlaire-split-button-primary {
  border-radius: var(--adlaire-radius-sm) 0 0 var(--adlaire-radius-sm);
}

.adlaire-split-button-toggle {
  border-left-color: var(--adlaire-surface-card);
  border-radius: 0 var(--adlaire-radius-sm) var(--adlaire-radius-sm) 0;
}

.adlaire-overflow-toolbar {
  gap: 8px;
  padding: 8px;
  background-color: var(--adlaire-surface-soft);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-md);
}

.adlaire-overflow-toolbar-menu {
  display: grid;
  gap: 4px;
  padding: 8px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-sm);
  box-shadow: var(--adlaire-shadow-card);
}

.adlaire-quick-action-list {
  gap: 6px;
  padding: 8px;
}

.adlaire-kanban-board {
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  align-items: start;
}

.adlaire-swimlane {
  display: grid;
  gap: 10px;
  min-width: 0;
  padding: 10px;
  background-color: var(--adlaire-surface-soft);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-md);
}

.adlaire-swimlane-header,
.adlaire-lane-summary {
  padding: 0 0 8px;
  background-color: transparent;
}

.adlaire-lane-summary {
  border-top: 1px solid var(--adlaire-surface-border);
  border-bottom: 0;
  padding-top: 8px;
  color: var(--adlaire-surface-text-subtle);
  font-size: 0.875rem;
}

.adlaire-board-card {
  display: grid;
  gap: 8px;
  padding: 12px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-sm);
  box-shadow: var(--adlaire-shadow-card);
}

.adlaire-board-card-dragging {
  border-color: var(--adlaire-surface-accent);
  box-shadow: var(--adlaire-shadow-card-hover);
}

.adlaire-sparkline,
.adlaire-gauge,
.adlaire-heatmap,
.adlaire-distribution-bar,
.adlaire-status-meter {
  display: grid;
  gap: 8px;
  padding: 12px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-md);
}

.adlaire-sparkline svg {
  width: 100%;
  height: 48px;
  color: var(--adlaire-surface-accent);
}

.adlaire-gauge {
  place-items: center;
}

.adlaire-gauge-value {
  display: grid;
  width: 96px;
  height: 96px;
  place-items: center;
  background: conic-gradient(var(--adlaire-surface-accent) 0 70%, var(--adlaire-surface-soft) 70% 100%);
  border-radius: var(--adlaire-radius-round);
  color: var(--adlaire-surface-card);
  font-weight: 800;
}

.adlaire-heatmap {
  grid-template-columns: repeat(5, minmax(0, 1fr));
}

.adlaire-heatmap-cell {
  min-height: 36px;
  background-color: var(--adlaire-surface-soft);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-sm);
}

.adlaire-heatmap-cell[data-level="2"] {
  background-color: var(--adlaire-semantic-info-bg);
  border-color: var(--adlaire-semantic-info-border);
}

.adlaire-heatmap-cell[data-level="3"] {
  background-color: var(--adlaire-semantic-success-bg);
  border-color: var(--adlaire-semantic-success-border);
}

.adlaire-distribution-bar {
  display: flex;
  flex-direction: row;
  gap: 4px;
}

.adlaire-distribution-segment {
  min-height: 16px;
  flex: 1 1 0;
  background-color: var(--adlaire-surface-accent);
  border-radius: var(--adlaire-radius-sm);
}

.adlaire-distribution-segment:nth-child(2) {
  background-color: var(--adlaire-semantic-info-color);
}

.adlaire-distribution-segment:nth-child(3) {
  background-color: var(--adlaire-semantic-success-color);
}

.adlaire-status-meter-track {
  overflow: hidden;
  background-color: var(--adlaire-surface-soft);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-round);
}

.adlaire-status-meter-value {
  min-height: 12px;
  background-color: var(--adlaire-surface-accent);
  border-radius: var(--adlaire-radius-round);
}

.adlaire-asset-browser {
  grid-template-columns: minmax(0, 1.4fr) minmax(220px, 0.8fr);
}

.adlaire-thumbnail-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(96px, 1fr));
  gap: 10px;
}

.adlaire-thumbnail-item {
  display: grid;
  gap: 8px;
  min-width: 0;
  padding: 8px;
  background-color: var(--adlaire-surface-soft);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-sm);
  color: var(--adlaire-surface-text-muted);
}

.adlaire-thumbnail-item[aria-selected="true"] {
  border-color: var(--adlaire-surface-accent);
  box-shadow: var(--adlaire-shadow-focus-ring);
  color: var(--adlaire-surface-accent-strong);
}

.adlaire-thumbnail-preview {
  min-height: 72px;
  background-color: var(--adlaire-surface-card);
  border-radius: var(--adlaire-radius-sm);
}

.adlaire-media-metadata-panel {
  display: grid;
  gap: 8px;
  padding: 12px;
  background-color: var(--adlaire-surface-soft);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-sm);
}

.adlaire-preview-compare {
  display: grid;
  position: relative;
  min-height: 160px;
  overflow: hidden;
  background-color: var(--adlaire-surface-soft);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-md);
}

.adlaire-preview-compare-before,
.adlaire-preview-compare-after {
  display: grid;
  grid-area: 1 / 1;
  place-items: center;
  color: var(--adlaire-surface-card);
  font-weight: 800;
}

.adlaire-preview-compare-before {
  background-color: var(--adlaire-surface-accent-strong);
}

.adlaire-preview-compare-after {
  width: var(--adlaire-preview-compare-position, 50%);
  overflow: hidden;
  background-color: var(--adlaire-semantic-success-color);
}

.adlaire-document-outline {
  gap: 6px;
}

.adlaire-outline-item,
.adlaire-publication-checklist-item,
.adlaire-comment-resolver-item {
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: space-between;
  padding: 8px 10px;
  background-color: var(--adlaire-surface-soft);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-sm);
  color: var(--adlaire-surface-text-muted);
}

.adlaire-outline-item[aria-current="true"],
.adlaire-publication-checklist-item[aria-checked="true"],
.adlaire-comment-resolver-item[data-state="resolved"] {
  border-color: var(--adlaire-surface-accent);
  color: var(--adlaire-surface-accent-strong);
}

.adlaire-mini-map {
  display: grid;
  gap: 6px;
  min-height: 160px;
  padding: 10px;
  background-color: var(--adlaire-surface-soft);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-md);
}

.adlaire-mini-map-marker {
  min-height: 10px;
  background-color: var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-round);
}

.adlaire-mini-map-marker[aria-current="true"] {
  background-color: var(--adlaire-surface-accent);
}

`;
