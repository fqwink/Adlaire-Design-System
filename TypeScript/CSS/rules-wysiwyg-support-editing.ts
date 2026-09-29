export const WYSIWYG_SUPPORT_EDITING_CSS = `
/* Priority B: editing support UI */
.adlaire-wysiwyg-block-toolbar,
.adlaire-wysiwyg-block-menu,
.adlaire-wysiwyg-transform-menu,
.adlaire-wysiwyg-style-menu {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
  padding: 8px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-md);
  box-shadow: var(--adlaire-shadow-card);
}

.adlaire-wysiwyg-block-menu,
.adlaire-wysiwyg-transform-menu,
.adlaire-wysiwyg-style-menu {
  align-items: stretch;
  flex-direction: column;
}

.adlaire-wysiwyg-block-menu [aria-selected="true"],
.adlaire-wysiwyg-transform-menu [aria-selected="true"],
.adlaire-wysiwyg-style-menu [aria-pressed="true"] {
  background-color: var(--adlaire-surface-soft);
  color: var(--adlaire-surface-accent-strong);
}

.adlaire-wysiwyg-quick-insert {
  display: inline-flex;
  min-width: 44px;
  min-height: 44px;
  align-items: center;
  justify-content: center;
  background-color: var(--adlaire-surface-card);
  border: 1px dashed var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-md);
  color: var(--adlaire-surface-accent);
  cursor: pointer;
}

.adlaire-wysiwyg-quick-insert:hover,
.adlaire-wysiwyg-quick-insert:focus-visible {
  background-color: var(--adlaire-surface-soft);
  border-color: var(--adlaire-surface-accent);
  box-shadow: var(--adlaire-shadow-focus-ring);
  outline: 0;
}

`;
