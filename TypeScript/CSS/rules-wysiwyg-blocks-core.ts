export const WYSIWYG_BLOCKS_CORE_CSS = `
.adlaire-wysiwyg-canvas {
  display: grid;
  gap: 12px;
  min-height: 320px;
  padding: 24px;
  background-color: var(--adlaire-surface-page);
}

/* Priority A: core block editor UI */
.adlaire-wysiwyg-block {
  position: relative;
  display: grid;
  grid-template-columns: 32px 1fr;
  gap: 12px;
  align-items: start;
  padding: 12px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid transparent;
  border-radius: var(--adlaire-radius-md);
  transition: border-color var(--adlaire-transition-fast), box-shadow var(--adlaire-transition-fast);
}

.adlaire-wysiwyg-block:hover,
.adlaire-wysiwyg-block:focus-within,
.adlaire-wysiwyg-block-selected,
.adlaire-wysiwyg-block[aria-selected="true"] {
  border-color: var(--adlaire-semantic-selected-border);
  box-shadow: var(--adlaire-shadow-blue-soft);
}

.adlaire-wysiwyg-block-handle {
  display: inline-flex;
  width: 32px;
  height: 32px;
  align-items: center;
  justify-content: center;
  border-radius: var(--adlaire-radius-sm);
  color: var(--adlaire-surface-text-subtle);
  cursor: grab;
  user-select: none;
}

.adlaire-wysiwyg-block-handle:hover {
  background-color: var(--adlaire-surface-soft);
  color: var(--adlaire-surface-accent);
}

.adlaire-wysiwyg-block-content {
  min-width: 0;
  color: var(--adlaire-surface-text);
  line-height: 1.8;
}

.adlaire-wysiwyg-placeholder {
  color: var(--adlaire-surface-text-subtle);
  font-style: italic;
}

`;
