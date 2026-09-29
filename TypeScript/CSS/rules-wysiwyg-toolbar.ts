export const WYSIWYG_TOOLBAR_CSS = `
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

.adlaire-wysiwyg-tool {
  display: inline-flex;
  min-width: 36px;
  min-height: 36px;
  align-items: center;
  justify-content: center;
  padding: 8px 10px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-sm);
  color: var(--adlaire-surface-text);
  cursor: pointer;
  font-weight: 600;
  transition: background-color var(--adlaire-transition-fast), border-color var(--adlaire-transition-fast), color var(--adlaire-transition-fast);
}

.adlaire-wysiwyg-tool:hover,
.adlaire-wysiwyg-tool:focus-visible,
.adlaire-wysiwyg-tool[aria-pressed="true"] {
  background-color: var(--adlaire-surface-soft);
  border-color: var(--adlaire-surface-accent);
  color: var(--adlaire-surface-accent);
}

.adlaire-wysiwyg-tool:focus-visible,
.adlaire-wysiwyg-slash-item:focus-visible,
.adlaire-wysiwyg-mobile-action:focus-visible,
.adlaire-wysiwyg-mobile-sheet-item:focus-visible,
.adlaire-wysiwyg-outline-item:focus-visible {
  box-shadow: var(--adlaire-shadow-focus-ring);
  outline: 0;
}

.adlaire-wysiwyg-tool:disabled,
.adlaire-wysiwyg-tool[aria-disabled="true"] {
  background-color: var(--adlaire-status-gray-light);
  border-color: var(--adlaire-surface-border);
  color: var(--adlaire-surface-text-subtle);
  cursor: not-allowed;
}
`;
