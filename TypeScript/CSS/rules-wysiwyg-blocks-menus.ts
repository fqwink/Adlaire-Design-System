export const WYSIWYG_BLOCKS_MENUS_CSS = `.adlaire-wysiwyg-inline-toolbar {
  display: inline-flex;
  flex-wrap: wrap;
  gap: 6px;
  padding: 8px;
  background-color: var(--adlaire-status-dark);
  border-radius: var(--adlaire-radius-sm);
  box-shadow: var(--adlaire-shadow-nav);
  color: var(--adlaire-surface-card);
}

.adlaire-wysiwyg-slash-menu {
  display: grid;
  gap: 4px;
  min-width: 220px;
  padding: 8px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-md);
  box-shadow: var(--adlaire-shadow-card-hover);
}

.adlaire-wysiwyg-slash-item {
  display: flex;
  gap: 10px;
  align-items: center;
  padding: 10px 12px;
  border-radius: var(--adlaire-radius-sm);
  color: var(--adlaire-surface-text);
  cursor: pointer;
  transition: background-color var(--adlaire-transition-fast), color var(--adlaire-transition-fast);
}

.adlaire-wysiwyg-slash-item:hover,
.adlaire-wysiwyg-slash-item:focus-visible,
.adlaire-wysiwyg-slash-item[aria-selected="true"] {
  background-color: var(--adlaire-surface-soft);
  color: var(--adlaire-surface-accent);
}

.adlaire-wysiwyg-slash-item[aria-current="true"] {
  background-color: var(--adlaire-surface-soft-strong);
  color: var(--adlaire-surface-accent-strong);
  font-weight: 700;
}

`;
