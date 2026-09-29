export const WYSIWYG_SHELL_FRAME_CSS = `/* Adlaire-Design WYSIWYG editor */
/* Editor UI common structure */
.adlaire-wysiwyg {
  display: grid;
  gap: 0;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-lg);
  box-shadow: var(--adlaire-shadow-card);
  color: var(--adlaire-surface-text);
  overflow: hidden;
}

.adlaire-wysiwyg[aria-disabled="true"],
.adlaire-wysiwyg[aria-busy="true"] {
  border-color: var(--adlaire-surface-border);
}

`;
