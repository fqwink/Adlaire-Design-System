export const WYSIWYG_BLOCKS_STATES_CSS = `.adlaire-wysiwyg-block-hover,
.adlaire-wysiwyg-block-focused {
  border-color: var(--adlaire-surface-accent);
  box-shadow: var(--adlaire-shadow-focus-ring);
}

.adlaire-wysiwyg-block-dragging {
  border-color: var(--adlaire-surface-accent-strong);
  box-shadow: var(--adlaire-shadow-card-hover);
}

.adlaire-wysiwyg-block-drop-before::before,
.adlaire-wysiwyg-block-drop-after::after {
  position: absolute;
  right: 12px;
  left: 12px;
  height: 2px;
  background-color: var(--adlaire-surface-accent);
  content: "";
}

.adlaire-wysiwyg-block-drop-before::before {
  top: -7px;
}

.adlaire-wysiwyg-block-drop-after::after {
  bottom: -7px;
}

.adlaire-wysiwyg-block-empty {
  border-style: dashed;
  color: var(--adlaire-surface-text-subtle);
}

.adlaire-wysiwyg-block-readonly {
  background-color: var(--adlaire-status-gray-light);
}

.adlaire-wysiwyg-block-error {
  background-color: var(--adlaire-semantic-danger-bg);
  border-color: var(--adlaire-semantic-danger-color);
  box-shadow: var(--adlaire-semantic-focus-ring);
  color: var(--adlaire-semantic-danger-text);
}

.adlaire-wysiwyg-block-collapsed .adlaire-wysiwyg-block-content {
  max-height: 2.4em;
  overflow: hidden;
}

.adlaire-wysiwyg-block-inserter {
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

.adlaire-wysiwyg-block-inserter:hover,
.adlaire-wysiwyg-block-inserter:focus-visible {
  background-color: var(--adlaire-surface-soft);
  border-color: var(--adlaire-surface-accent);
  box-shadow: var(--adlaire-shadow-focus-ring);
  outline: 0;
}

`;
