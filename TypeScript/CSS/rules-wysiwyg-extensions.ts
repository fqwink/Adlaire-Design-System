export const WYSIWYG_EXTENSIONS_CSS = `
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

.adlaire-wysiwyg-reorder,
.adlaire-wysiwyg-drag-target,
.adlaire-wysiwyg-dragging,
.adlaire-wysiwyg-drag-handle {
  border-color: var(--adlaire-surface-accent);
}

.adlaire-wysiwyg-dragging {
  opacity: 0.72;
  box-shadow: var(--adlaire-shadow-card-hover);
}

.adlaire-wysiwyg-selection-toolbar,
.adlaire-wysiwyg-selection-count {
  display: inline-flex;
  gap: 8px;
  align-items: center;
  padding: 8px 10px;
  background-color: var(--adlaire-status-dark);
  border-radius: var(--adlaire-radius-sm);
  color: var(--adlaire-surface-card);
}

.adlaire-wysiwyg-link-preview {
  color: var(--adlaire-surface-accent);
  overflow-wrap: anywhere;
}

.adlaire-wysiwyg-link-error,
.adlaire-wysiwyg-status-error,
.adlaire-wysiwyg-check-warning,
.adlaire-wysiwyg-a11y-warning,
.adlaire-wysiwyg-alt-warning,
.adlaire-wysiwyg-warning {
  padding: 10px 12px;
  background-color: var(--adlaire-alert-warning-bg);
  border: 1px solid var(--adlaire-alert-warning-border);
  border-radius: var(--adlaire-radius-sm);
  color: var(--adlaire-alert-warning-text);
}

.adlaire-wysiwyg-comment,
.adlaire-wysiwyg-comment-resolved {
  padding: 10px 12px;
  background-color: var(--adlaire-surface-soft);
  border-left: 4px solid var(--adlaire-surface-accent);
  border-radius: var(--adlaire-radius-sm);
}

.adlaire-wysiwyg-comment-resolved {
  opacity: 0.72;
}

.adlaire-wysiwyg-stat-item,
.adlaire-wysiwyg-outline-meta {
  color: var(--adlaire-surface-text-subtle);
  font-size: 0.875rem;
}

.adlaire-wysiwyg-heading-block,
.adlaire-wysiwyg-text-block,
.adlaire-wysiwyg-quote-block,
.adlaire-wysiwyg-list-block,
.adlaire-wysiwyg-media-block,
.adlaire-wysiwyg-image-block,
.adlaire-wysiwyg-video-block,
.adlaire-wysiwyg-file-block,
.adlaire-wysiwyg-table-block,
.adlaire-wysiwyg-code-block,
.adlaire-wysiwyg-callout-block,
.adlaire-wysiwyg-note-block,
.adlaire-wysiwyg-warning-block,
.adlaire-wysiwyg-divider-block,
.adlaire-wysiwyg-spacer-block,
.adlaire-wysiwyg-embed-block,
.adlaire-wysiwyg-reusable-block {
  padding: 12px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-md);
}

.adlaire-wysiwyg-quote-block {
  border-left: 4px solid var(--adlaire-surface-accent);
}

.adlaire-wysiwyg-code-block {
  overflow: auto;
  background-color: var(--adlaire-status-dark);
  color: var(--adlaire-surface-card);
  font-family: var(--adlaire-font-family-mono);
}

.adlaire-wysiwyg-code-language,
.adlaire-wysiwyg-code-copy,
.adlaire-wysiwyg-kbd {
  display: inline-flex;
  align-items: center;
  padding: 3px 6px;
  background-color: var(--adlaire-surface-soft);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-sm);
  color: var(--adlaire-surface-text);
  font-family: var(--adlaire-font-family-mono);
  font-size: 0.75rem;
}

.adlaire-wysiwyg-table-toolbar {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.adlaire-wysiwyg-table-cell-selected {
  outline: 2px solid var(--adlaire-surface-accent);
  outline-offset: -2px;
}

.adlaire-wysiwyg-divider-block {
  min-height: 1px;
  padding: 0;
  background-color: var(--adlaire-surface-border);
}

.adlaire-wysiwyg-spacer-block {
  min-height: 32px;
  background-color: var(--adlaire-surface-soft);
  border-style: dashed;
}

.adlaire-wysiwyg-status-saving,
.adlaire-wysiwyg-save-state,
.adlaire-wysiwyg-ai-loading {
  color: var(--adlaire-surface-text-subtle);
}

.adlaire-wysiwyg-readonly,
.adlaire-wysiwyg-disabled,
.adlaire-wysiwyg-locked {
  opacity: 0.78;
}

.adlaire-wysiwyg-disabled {
  pointer-events: none;
}

.adlaire-wysiwyg-diff-added {
  background-color: var(--adlaire-alert-success-bg);
}

.adlaire-wysiwyg-ai-entry,
.adlaire-wysiwyg-ai-suggestion {
  padding: 10px 12px;
  background-color: var(--adlaire-surface-soft);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-sm);
}

.adlaire-wysiwyg-collaborator,
.adlaire-wysiwyg-remote-cursor,
.adlaire-wysiwyg-remote-selection {
  display: inline-flex;
  align-items: center;
  background-color: var(--adlaire-surface-soft);
  border: 1px solid var(--adlaire-surface-accent);
  color: var(--adlaire-surface-accent-strong);
}

.adlaire-wysiwyg-collaborator {
  gap: 6px;
  padding: 4px 8px;
  border-radius: var(--adlaire-radius-sm);
}

.adlaire-wysiwyg-remote-cursor {
  width: 2px;
  min-height: 1.2em;
}

.adlaire-wysiwyg-remote-selection {
  background-color: var(--adlaire-surface-soft-strong);
}

.adlaire-wysiwyg-empty-title {
  margin: 0;
  color: var(--adlaire-surface-accent-strong);
  font-weight: 700;
}

.adlaire-wysiwyg-outline-current {
  background-color: var(--adlaire-surface-soft);
  color: var(--adlaire-surface-accent);
}

.adlaire-wysiwyg-slash-menu,
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
