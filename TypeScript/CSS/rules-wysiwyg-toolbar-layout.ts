export const WYSIWYG_TOOLBAR_LAYOUT_CSS = `
.adlaire-wysiwyg-toolbar {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-items: center;
  padding: 12px 16px;
  background-color: var(--adlaire-surface-card);
  border-bottom: 1px solid var(--adlaire-surface-border);
}

.adlaire-wysiwyg-toolbar-group {
  display: inline-flex;
  flex-wrap: wrap;
  gap: 6px;
  align-items: center;
  padding-right: 10px;
  border-right: 1px solid var(--adlaire-surface-border);
}

.adlaire-wysiwyg-toolbar-group:last-child {
  padding-right: 0;
  border-right: none;
}

`;
