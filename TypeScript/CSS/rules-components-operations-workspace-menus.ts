export const COMPONENTS_OPERATIONS_WORKSPACE_MENUS_CSS = `.adlaire-context-menu {
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

`;
