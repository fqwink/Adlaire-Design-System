export const COMPONENTS_OPERATIONS_DATA_CSS = `.adlaire-language-switcher,
.adlaire-language-current,
.adlaire-language-list,
.adlaire-language-option {
  display: flex;
  gap: 8px;
  align-items: center;
}

.adlaire-language-switcher {
  position: relative;
}

.adlaire-language-list {
  flex-direction: column;
  min-width: 180px;
  padding: 8px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-md);
  box-shadow: var(--adlaire-shadow-card-hover);
}

.adlaire-language-option {
  width: 100%;
  padding: 8px 10px;
  border-radius: var(--adlaire-radius-sm);
  color: var(--adlaire-surface-text);
}

.adlaire-language-option[aria-current="true"],
.adlaire-language-option:hover {
  background-color: var(--adlaire-surface-soft);
  color: var(--adlaire-surface-accent);
}

.adlaire-table-toolbar,
.adlaire-table-footer,
.adlaire-pagination,
.adlaire-page-list {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-items: center;
}

.adlaire-table-toolbar,
.adlaire-table-footer {
  justify-content: space-between;
  margin-bottom: 12px;
}

.adlaire-pagination {
  justify-content: center;
}

.adlaire-page-list {
  margin: 0;
  padding: 0;
  list-style: none;
}

.adlaire-page-link,
.adlaire-page-current {
  display: inline-flex;
  min-width: 36px;
  min-height: 36px;
  align-items: center;
  justify-content: center;
  padding: 8px 10px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-sm);
  color: var(--adlaire-surface-text);
  font-weight: 600;
}

.adlaire-page-current,
.adlaire-page-link[aria-current="page"] {
  background-color: var(--adlaire-surface-accent);
  border-color: var(--adlaire-surface-accent);
  color: var(--adlaire-surface-card);
}

.adlaire-modal,
.adlaire-confirm-dialog,
.adlaire-notice-dialog,
.adlaire-drawer {
  position: fixed;
  inset: 0;
  z-index: var(--adlaire-layer-modal);
  display: none;
  padding: 24px;
  background-color: var(--adlaire-overlay-black-48);
}

.adlaire-modal.is-open,
.adlaire-confirm-dialog.is-open,
.adlaire-notice-dialog.is-open,
.adlaire-drawer.is-open {
  display: grid;
  place-items: center;
}

.adlaire-modal-dialog,
.adlaire-confirm-dialog-panel,
.adlaire-notice-dialog-panel,
.adlaire-drawer-panel {
  width: min(100%, 640px);
  max-height: min(720px, 90vh);
  overflow: auto;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-lg);
  box-shadow: var(--adlaire-shadow-card-hover);
}

.adlaire-drawer {
  justify-items: end;
}

.adlaire-drawer-panel {
  height: 100%;
  border-radius: var(--adlaire-radius-lg) 0 0 var(--adlaire-radius-lg);
}

.adlaire-filter-panel,
.adlaire-filter-row,
.adlaire-saved-filter-list {
  display: grid;
  gap: 12px;
}

.adlaire-filter-panel {
  padding: 16px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-md);
}

.adlaire-filter-row {
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
}

.adlaire-saved-filter-item {
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: space-between;
  padding: 10px 12px;
  background-color: var(--adlaire-surface-soft);
  border-radius: var(--adlaire-radius-sm);
}

.adlaire-search-box,
.adlaire-search-results,
.adlaire-command-palette,
.adlaire-omnibar {
  display: grid;
  gap: 10px;
}

.adlaire-search-box,
.adlaire-command-palette,
.adlaire-omnibar {
  padding: 12px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-md);
}

.adlaire-search-input,
.adlaire-command-input,
.adlaire-omnibar-input {
  width: 100%;
  padding: 10px 12px;
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-sm);
}

.adlaire-command-item,
.adlaire-omnibar-result,
.adlaire-search-result {
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: space-between;
  padding: 10px 12px;
  border-radius: var(--adlaire-radius-sm);
  color: var(--adlaire-surface-text);
}

.adlaire-command-item[aria-selected="true"],
.adlaire-command-item:hover,
.adlaire-omnibar-result[aria-selected="true"],
.adlaire-omnibar-result:hover,
.adlaire-search-result:hover {
  background-color: var(--adlaire-surface-soft);
  color: var(--adlaire-surface-accent);
}

.adlaire-command-shortcut {
  color: var(--adlaire-surface-text-subtle);
  font-family: var(--adlaire-font-family-mono);
  font-size: 0.75rem;
}

.adlaire-omnibar-empty {
  padding: 12px;
  color: var(--adlaire-surface-text-subtle);
}

.adlaire-tree-view,
.adlaire-tree-list,
.adlaire-tree-branch {
  display: grid;
  gap: 6px;
}

.adlaire-tree-view {
  padding: 12px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-md);
}

.adlaire-tree-list,
.adlaire-tree-branch {
  margin: 0;
  padding: 0;
  list-style: none;
}

.adlaire-tree-branch {
  padding-left: 18px;
  border-left: 1px solid var(--adlaire-surface-border);
}

.adlaire-tree-branch[hidden] {
  display: none;
}

.adlaire-tree-item {
  display: grid;
  gap: 6px;
}

.adlaire-tree-row,
.adlaire-tree-toggle {
  display: flex;
  gap: 8px;
  align-items: center;
}

.adlaire-tree-row {
  min-height: 34px;
  padding: 6px 8px;
  border-radius: var(--adlaire-radius-sm);
  color: var(--adlaire-surface-text);
}

.adlaire-tree-row:hover,
.adlaire-tree-row[aria-current="true"] {
  background-color: var(--adlaire-surface-soft);
  color: var(--adlaire-surface-accent-strong);
}

.adlaire-tree-toggle {
  min-width: 28px;
  min-height: 28px;
  justify-content: center;
  padding: 0;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-sm);
  color: var(--adlaire-surface-text-muted);
  cursor: pointer;
}

.adlaire-tree-toggle:hover,
.adlaire-tree-toggle:focus-visible,
.adlaire-tree-toggle[aria-expanded="true"] {
  border-color: var(--adlaire-surface-accent);
  box-shadow: var(--adlaire-shadow-focus-ring);
  color: var(--adlaire-surface-accent);
  outline: 0;
}

.adlaire-data-grid,
.adlaire-column-manager,
.adlaire-saved-view-bar {
  display: grid;
  gap: 10px;
}

.adlaire-data-grid {
  overflow: hidden;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-md);
}

.adlaire-data-grid-toolbar,
.adlaire-data-grid-footer,
.adlaire-saved-view-bar {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
  justify-content: space-between;
  padding: 10px 12px;
  background-color: var(--adlaire-surface-soft);
  border-bottom: 1px solid var(--adlaire-surface-border);
}

.adlaire-data-grid-footer {
  border-top: 1px solid var(--adlaire-surface-border);
  border-bottom: 0;
}

.adlaire-data-grid-scroll {
  overflow: auto;
}

.adlaire-data-grid-table {
  width: 100%;
  border-collapse: collapse;
}

.adlaire-data-grid-table th,
.adlaire-data-grid-table td {
  padding: 10px 12px;
  border-bottom: 1px solid var(--adlaire-surface-border);
  color: var(--adlaire-surface-text);
  text-align: left;
  white-space: nowrap;
}

.adlaire-data-grid-table th {
  background-color: var(--adlaire-surface-soft);
  color: var(--adlaire-surface-accent-strong);
  font-size: 0.875rem;
  font-weight: 800;
}

.adlaire-data-grid-row-selected,
.adlaire-data-grid-table tr[aria-selected="true"] {
  background-color: var(--adlaire-semantic-selected-bg);
}

.adlaire-column-manager {
  padding: 12px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-md);
}

.adlaire-column-manager-item,
.adlaire-saved-view {
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: space-between;
  padding: 8px 10px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-sm);
}

.adlaire-property-inspector {
  display: grid;
  gap: 12px;
  padding: 14px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-md);
}

.adlaire-property-section {
  display: grid;
  gap: 8px;
}

.adlaire-property-row {
  display: grid;
  grid-template-columns: minmax(110px, 0.8fr) minmax(0, 1fr);
  gap: 10px;
  align-items: center;
  padding: 8px 0;
  border-bottom: 1px solid var(--adlaire-surface-border);
}

.adlaire-property-row:last-child {
  border-bottom: 0;
}

.adlaire-property-name {
  color: var(--adlaire-surface-text-subtle);
  font-size: 0.875rem;
  font-weight: 800;
}

.adlaire-property-value {
  color: var(--adlaire-surface-text);
}

.adlaire-token-swatch,
.adlaire-component-preview,
.adlaire-component-state-matrix,
.adlaire-anatomy-panel,
.adlaire-a11y-checklist,
.adlaire-keyboard-map {
  display: grid;
  gap: 10px;
  padding: 14px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-md);
}

.adlaire-token-swatch {
  grid-template-columns: auto minmax(0, 1fr);
  align-items: center;
}

.adlaire-token-swatch-color {
  width: 44px;
  height: 44px;
  background-color: var(--adlaire-token-swatch-color, var(--adlaire-surface-accent));
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-md);
  box-shadow: var(--adlaire-shadow-marker-ring);
}

.adlaire-token-swatch-meta,
.adlaire-component-preview-meta,
.adlaire-anatomy-panel-meta {
  color: var(--adlaire-surface-text-subtle);
  font-size: 0.875rem;
}

.adlaire-component-preview-frame {
  display: grid;
  min-height: 140px;
  place-items: center;
  padding: 18px;
  background-color: var(--adlaire-surface-soft);
  border: 1px dashed var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-md);
}

.adlaire-component-state-matrix {
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
}

.adlaire-component-state-cell,
.adlaire-a11y-checklist-item,
.adlaire-keyboard-map-row {
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: space-between;
  padding: 8px 10px;
  background-color: var(--adlaire-surface-soft);
  border-radius: var(--adlaire-radius-sm);
}

.adlaire-anatomy-panel-list,
.adlaire-a11y-checklist,
.adlaire-keyboard-map {
  margin: 0;
  list-style: none;
}

.adlaire-bottom-sheet {
  position: fixed;
  inset: 0;
  z-index: var(--adlaire-layer-modal);
  display: none;
  align-items: end;
  padding: 0;
  background-color: var(--adlaire-overlay-black-48);
}

.adlaire-bottom-sheet.is-open {
  display: grid;
}

.adlaire-bottom-sheet-panel {
  display: grid;
  width: 100%;
  max-height: min(720px, 82vh);
  grid-template-rows: auto minmax(0, 1fr) auto;
  overflow: auto;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-bottom: 0;
  border-radius: var(--adlaire-radius-lg) var(--adlaire-radius-lg) 0 0;
  box-shadow: var(--adlaire-shadow-card-hover);
}

.adlaire-bottom-sheet-header,
.adlaire-bottom-sheet-footer {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-items: center;
  justify-content: space-between;
  padding: 14px 16px;
  border-bottom: 1px solid var(--adlaire-surface-border);
}

.adlaire-bottom-sheet-footer {
  border-top: 1px solid var(--adlaire-surface-border);
  border-bottom: 0;
}

.adlaire-bottom-sheet-body {
  display: grid;
  gap: 12px;
  padding: 16px;
  color: var(--adlaire-surface-text-muted);
}

`;
