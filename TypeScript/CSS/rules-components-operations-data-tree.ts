export const COMPONENTS_OPERATIONS_DATA_TREE_CSS = `.adlaire-tree-view,
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

`;
