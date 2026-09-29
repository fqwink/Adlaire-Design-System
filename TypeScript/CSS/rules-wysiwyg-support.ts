export const WYSIWYG_SUPPORT_CSS = `
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

.adlaire-wysiwyg-outline,
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

/* Priority C: advanced support UI */
.adlaire-wysiwyg-assist-menu {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: stretch;
  flex-direction: column;
  padding: 8px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-md);
  box-shadow: var(--adlaire-shadow-card);
}

.adlaire-wysiwyg-assist-menu [aria-current="true"] {
  background-color: var(--adlaire-surface-soft);
  color: var(--adlaire-surface-accent-strong);
}

.adlaire-wysiwyg-width-narrow {
  max-width: 640px;
}

.adlaire-wysiwyg-width-wide {
  max-width: 960px;
}

.adlaire-wysiwyg-width-full {
  width: 100%;
}

.adlaire-wysiwyg-block-group {
  display: grid;
  gap: 10px;
  padding: 12px;
  background-color: var(--adlaire-surface-soft);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-lg);
}

.adlaire-wysiwyg-comment-marker {
  display: inline-flex;
  min-width: 24px;
  min-height: 24px;
  align-items: center;
  justify-content: center;
  background-color: var(--adlaire-surface-notice-soft);
  border: 1px solid var(--adlaire-surface-notice);
  border-radius: var(--adlaire-radius-round);
  color: var(--adlaire-surface-notice-text);
  font-size: 0.75rem;
  font-weight: 700;
}

.adlaire-wysiwyg-comment-marker[aria-current="true"] {
  box-shadow: var(--adlaire-shadow-marker-ring);
}

.adlaire-wysiwyg-suggestion,
.adlaire-wysiwyg-assist-suggestion {
  padding: 12px;
  background-color: var(--adlaire-surface-soft);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-md);
}

.adlaire-wysiwyg-suggestion[aria-selected="true"],
.adlaire-wysiwyg-assist-suggestion[aria-selected="true"] {
  border-color: var(--adlaire-surface-accent);
  box-shadow: var(--adlaire-shadow-blue-soft);
}

@media (prefers-reduced-motion: reduce) {
  .adlaire-wysiwyg-tool,
  .adlaire-wysiwyg-block,
  .adlaire-wysiwyg-slash-item,
  .adlaire-wysiwyg-block-inserter,
  .adlaire-wysiwyg-quick-insert {
    transition: none;
  }
}

@media (max-width: 768px) {
  .adlaire-wysiwyg-header,
  .adlaire-wysiwyg-footer {
    align-items: flex-start;
    flex-direction: column;
  }

  .adlaire-wysiwyg-canvas,
  .adlaire-wysiwyg-preview {
    padding: 18px;
  }
}

@media (max-width: 480px) {
  .adlaire-wysiwyg-toolbar {
    align-items: stretch;
    flex-direction: column;
  }

  .adlaire-wysiwyg-toolbar-group {
    padding-right: 0;
    border-right: none;
  }

  .adlaire-wysiwyg-block {
    grid-template-columns: 1fr;
  }

  .adlaire-wysiwyg-mobile-bar {
    position: sticky;
    bottom: 0;
    z-index: var(--adlaire-z-sticky);
  }

  .adlaire-wysiwyg-mobile-sheet {
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
  }
}
`;
