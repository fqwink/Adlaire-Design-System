export const WYSIWYG_SHELL_CSS = `/* Adlaire-Design WYSIWYG editor */
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

.adlaire-wysiwyg-header {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  align-items: center;
  justify-content: space-between;
  padding: 16px 20px;
  background-color: var(--adlaire-surface-soft);
  border-bottom: 1px solid var(--adlaire-surface-border);
}

.adlaire-wysiwyg-title {
  margin: 0;
  color: var(--adlaire-surface-accent-strong);
  font-size: 1rem;
  font-weight: 700;
}

.adlaire-wysiwyg-status {
  color: var(--adlaire-surface-text-subtle);
  font-size: 0.9rem;
}
`;
