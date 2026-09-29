export const WYSIWYG_EXTENSIONS_BLOCKS_CSS = `.adlaire-wysiwyg-heading-block,
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

`;
