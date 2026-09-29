export const COMPONENTS_OPERATIONS_DATA_GRID_CSS = `.adlaire-data-grid,
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
.adlaire-data-density-toolbar,
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

.adlaire-data-density-toolbar {
  justify-content: flex-start;
  background-color: var(--adlaire-surface-card);
  border-top: 1px solid var(--adlaire-surface-border);
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

.adlaire-row-selection-cell {
  width: 1%;
  color: var(--adlaire-surface-text-subtle);
  text-align: center;
}

.adlaire-data-grid-detail-row td {
  background-color: var(--adlaire-surface-soft);
  color: var(--adlaire-surface-text-muted);
  white-space: normal;
}

.adlaire-data-grid-summary-row td {
  background-color: var(--adlaire-semantic-selected-bg);
  color: var(--adlaire-surface-accent-strong);
  font-weight: 800;
}

.adlaire-column-resize-handle {
  display: inline-grid;
  width: 8px;
  min-height: 24px;
  margin-inline-start: 8px;
  place-items: center;
  vertical-align: middle;
  cursor: col-resize;
}

.adlaire-column-resize-handle::before {
  width: 2px;
  height: 18px;
  background-color: var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-round);
  content: "";
}

.adlaire-column-resize-handle:focus-visible {
  box-shadow: var(--adlaire-shadow-focus-ring);
  outline: 0;
}

.adlaire-data-grid-row-selected,
.adlaire-data-grid-table tr[aria-selected="true"] {
  background-color: var(--adlaire-semantic-selected-bg);
}

.adlaire-cell-status {
  display: inline-flex;
  width: fit-content;
  gap: 6px;
  align-items: center;
  padding: 4px 8px;
  background-color: var(--adlaire-surface-soft);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-round);
  color: var(--adlaire-surface-text-muted);
  font-size: 0.8125rem;
  font-weight: 700;
}

.adlaire-cell-status[data-state="changed"] {
  background-color: var(--adlaire-semantic-warning-bg);
  border-color: var(--adlaire-semantic-warning-border);
  color: var(--adlaire-semantic-warning-text);
}

.adlaire-cell-status[data-state="valid"] {
  background-color: var(--adlaire-semantic-success-bg);
  border-color: var(--adlaire-semantic-success-border);
  color: var(--adlaire-semantic-success-text);
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

.adlaire-import-preview-table {
  display: grid;
  overflow: auto;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-md);
}

.adlaire-import-preview-table table {
  width: 100%;
  border-collapse: collapse;
}

.adlaire-import-preview-table th,
.adlaire-import-preview-table td {
  padding: 8px 10px;
  border-bottom: 1px solid var(--adlaire-surface-border);
  color: var(--adlaire-surface-text);
  text-align: left;
  white-space: nowrap;
}

`;
