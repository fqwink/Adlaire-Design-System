export const WYSIWYG_SUPPORT_PANELS_CSS = `.adlaire-wysiwyg-outline,
.adlaire-wysiwyg-comment-panel,
.adlaire-wysiwyg-history-panel,
.adlaire-wysiwyg-publish-check {
  display: grid;
  gap: 8px;
  padding: 16px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-md);
}

.adlaire-wysiwyg-comment-panel[aria-busy="true"],
.adlaire-wysiwyg-history-panel[aria-busy="true"],
.adlaire-wysiwyg-publish-check[aria-busy="true"] {
  background-color: var(--adlaire-surface-soft);
}

.adlaire-wysiwyg-outline-item {
  padding: 8px 10px;
  border-left: 3px solid transparent;
  color: var(--adlaire-surface-text-muted);
}

.adlaire-wysiwyg-outline-item[aria-current="true"] {
  border-left-color: var(--adlaire-surface-accent);
  color: var(--adlaire-surface-accent-strong);
  font-weight: 700;
}

.adlaire-wysiwyg-current-block-indicator,
.adlaire-wysiwyg-sync-status {
  color: var(--adlaire-surface-text-subtle);
  font-size: 0.875rem;
}

.adlaire-wysiwyg-sync-status[aria-live] {
  border-left: 3px solid var(--adlaire-surface-accent);
  padding-left: 8px;
}

.adlaire-wysiwyg-recent-blocks,
.adlaire-wysiwyg-suggested-blocks {
  display: grid;
  gap: 6px;
  padding: 10px;
  background-color: var(--adlaire-surface-soft);
  border-radius: var(--adlaire-radius-md);
}

`;
