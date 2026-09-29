export const WYSIWYG_EXTENSIONS_PANELS_CSS = `
/* Implemented editor feature extension UI */
.adlaire-wysiwyg-insert,
.adlaire-wysiwyg-insert-menu,
.adlaire-wysiwyg-transform,
.adlaire-wysiwyg-link-editor,
.adlaire-wysiwyg-comment-thread,
.adlaire-wysiwyg-stats,
.adlaire-wysiwyg-template-panel,
.adlaire-wysiwyg-shortcut-help,
.adlaire-wysiwyg-help-panel,
.adlaire-wysiwyg-diff,
.adlaire-wysiwyg-publish-check,
.adlaire-wysiwyg-a11y-panel,
.adlaire-wysiwyg-empty,
.adlaire-wysiwyg-alert,
.adlaire-wysiwyg-settings,
.adlaire-wysiwyg-minimap {
  display: grid;
  gap: 10px;
  padding: 12px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-md);
}

.adlaire-wysiwyg-insert-item,
.adlaire-wysiwyg-block-type,
.adlaire-wysiwyg-inline-button,
.adlaire-wysiwyg-template-item,
.adlaire-wysiwyg-block-action,
.adlaire-wysiwyg-command-item,
.adlaire-wysiwyg-mobile-toolbar,
.adlaire-wysiwyg-check-item,
.adlaire-wysiwyg-empty-action,
.adlaire-wysiwyg-density-control,
.adlaire-wysiwyg-view-toggle {
  display: flex;
  gap: 8px;
  align-items: center;
  padding: 8px 10px;
  border-radius: var(--adlaire-radius-sm);
}

.adlaire-wysiwyg-insert-item:hover,
.adlaire-wysiwyg-block-type:hover,
.adlaire-wysiwyg-inline-button:hover,
.adlaire-wysiwyg-template-item:hover,
.adlaire-wysiwyg-block-action:hover,
.adlaire-wysiwyg-command-item:hover,
.adlaire-wysiwyg-command-active,
.adlaire-wysiwyg-inline-active {
  background-color: var(--adlaire-surface-soft);
  color: var(--adlaire-surface-accent);
}

`;
