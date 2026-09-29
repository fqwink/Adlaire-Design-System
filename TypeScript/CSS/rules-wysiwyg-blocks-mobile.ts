export const WYSIWYG_BLOCKS_MOBILE_CSS = `.adlaire-wysiwyg-mobile-bar {
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: space-between;
  padding: 10px 12px;
  background-color: var(--adlaire-surface-card);
  border-top: 1px solid var(--adlaire-surface-border);
  box-shadow: var(--adlaire-shadow-blue-sticky);
}

.adlaire-wysiwyg-mobile-action {
  display: inline-flex;
  min-width: 44px;
  min-height: 44px;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-md);
  color: var(--adlaire-surface-text);
}

.adlaire-wysiwyg-mobile-action[aria-pressed="true"] {
  background-color: var(--adlaire-surface-soft);
  border-color: var(--adlaire-surface-accent);
  color: var(--adlaire-surface-accent-strong);
}

.adlaire-wysiwyg-mobile-sheet {
  display: grid;
  gap: 0;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-lg);
  box-shadow: var(--adlaire-shadow-card-hover);
}

.adlaire-wysiwyg-mobile-sheet-header {
  padding: 14px 16px;
  border-bottom: 1px solid var(--adlaire-surface-border);
  font-weight: 700;
}

.adlaire-wysiwyg-mobile-sheet-body {
  display: grid;
  gap: 4px;
  padding: 8px;
}

.adlaire-wysiwyg-mobile-sheet-item {
  display: flex;
  min-height: 44px;
  align-items: center;
  padding: 10px 12px;
  border-radius: var(--adlaire-radius-sm);
  color: var(--adlaire-surface-text);
}

.adlaire-wysiwyg-mobile-sheet-item:hover,
.adlaire-wysiwyg-mobile-sheet-item[aria-selected="true"] {
  background-color: var(--adlaire-surface-soft);
  color: var(--adlaire-surface-accent);
}
`;
