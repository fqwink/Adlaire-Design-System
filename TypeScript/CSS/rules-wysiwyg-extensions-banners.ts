export const WYSIWYG_EXTENSIONS_BANNERS_CSS = `.adlaire-wysiwyg-slash-menu,
.adlaire-wysiwyg-suggestion-card,
.adlaire-wysiwyg-save-banner,
.adlaire-wysiwyg-lock-banner {
  display: grid;
  gap: 8px;
  padding: 12px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-md);
  box-shadow: var(--adlaire-shadow-card);
}

.adlaire-wysiwyg-slash-menu {
  max-width: 360px;
}

.adlaire-wysiwyg-suggestion-card {
  border-left: 4px solid var(--adlaire-surface-accent);
}

.adlaire-wysiwyg-save-banner {
  background-color: var(--adlaire-alert-success-bg);
  border-color: var(--adlaire-alert-success-border);
  color: var(--adlaire-alert-success-text);
}

.adlaire-wysiwyg-lock-banner {
  background-color: var(--adlaire-alert-warning-bg);
  border-color: var(--adlaire-alert-warning-border);
  color: var(--adlaire-alert-warning-text);
}
`;
