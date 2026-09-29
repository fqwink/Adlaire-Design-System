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

`;
