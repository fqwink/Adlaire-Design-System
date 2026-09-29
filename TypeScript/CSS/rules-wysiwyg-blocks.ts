export const WYSIWYG_BLOCKS_CSS = `
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

.adlaire-wysiwyg-inline-toolbar {
  display: inline-flex;
  flex-wrap: wrap;
  gap: 6px;
  padding: 8px;
  background-color: var(--adlaire-status-dark);
  border-radius: var(--adlaire-radius-sm);
  box-shadow: var(--adlaire-shadow-nav);
  color: var(--adlaire-surface-card);
}

.adlaire-wysiwyg-slash-menu {
  display: grid;
  gap: 4px;
  min-width: 220px;
  padding: 8px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-md);
  box-shadow: var(--adlaire-shadow-card-hover);
}

.adlaire-wysiwyg-slash-item {
  display: flex;
  gap: 10px;
  align-items: center;
  padding: 10px 12px;
  border-radius: var(--adlaire-radius-sm);
  color: var(--adlaire-surface-text);
  cursor: pointer;
  transition: background-color var(--adlaire-transition-fast), color var(--adlaire-transition-fast);
}

.adlaire-wysiwyg-slash-item:hover,
.adlaire-wysiwyg-slash-item:focus-visible,
.adlaire-wysiwyg-slash-item[aria-selected="true"] {
  background-color: var(--adlaire-surface-soft);
  color: var(--adlaire-surface-accent);
}

.adlaire-wysiwyg-slash-item[aria-current="true"] {
  background-color: var(--adlaire-surface-soft-strong);
  color: var(--adlaire-surface-accent-strong);
  font-weight: 700;
}

.adlaire-wysiwyg-preview {
  padding: 24px;
  background-color: var(--adlaire-surface-card);
  border-top: 1px solid var(--adlaire-surface-border);
  color: var(--adlaire-surface-text-muted);
  line-height: 1.8;
}

.adlaire-wysiwyg-json-panel {
  overflow-x: auto;
  padding: 16px;
  background-color: var(--adlaire-status-dark);
  color: var(--adlaire-surface-card);
  font-family: "Courier New", monospace;
  font-size: 0.9rem;
  line-height: 1.7;
}

.adlaire-wysiwyg-footer {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  background-color: var(--adlaire-surface-soft);
  border-top: 1px solid var(--adlaire-surface-border);
  color: var(--adlaire-surface-text-subtle);
  font-size: 0.9rem;
}

.adlaire-wysiwyg-block-heading .adlaire-wysiwyg-block-content {
  color: var(--adlaire-surface-accent-strong);
  font-weight: 700;
}

.adlaire-wysiwyg-block-paragraph .adlaire-wysiwyg-block-content {
  color: var(--adlaire-surface-text);
}

.adlaire-wysiwyg-block-list .adlaire-wysiwyg-block-content,
.adlaire-wysiwyg-block-checklist .adlaire-wysiwyg-block-content {
  padding-left: 18px;
}

.adlaire-wysiwyg-block-checklist input[type="checkbox"] {
  margin-right: 8px;
  accent-color: var(--adlaire-surface-accent);
}

.adlaire-wysiwyg-block-quote {
  border-left: 4px solid var(--adlaire-surface-accent);
}

.adlaire-wysiwyg-block-code {
  background-color: var(--adlaire-status-dark);
  color: var(--adlaire-surface-card);
}

.adlaire-wysiwyg-block-code .adlaire-wysiwyg-block-content {
  overflow-x: auto;
  font-family: "Courier New", monospace;
}

.adlaire-wysiwyg-block-image {
  background-color: var(--adlaire-surface-soft);
}

.adlaire-wysiwyg-block-image img {
  display: block;
  max-width: 100%;
  border-radius: var(--adlaire-radius-md);
}

.adlaire-wysiwyg-block-divider {
  min-height: 1px;
  padding: 0;
  background-color: var(--adlaire-surface-border);
}

.adlaire-wysiwyg-block-callout {
  background-color: var(--adlaire-alert-info-bg);
  border-color: var(--adlaire-alert-info-border);
  color: var(--adlaire-alert-info-text);
}

.adlaire-wysiwyg-block-label {
  display: inline-flex;
  width: fit-content;
  align-items: center;
  padding: 6px 10px;
  background-color: var(--adlaire-surface-soft);
  border-color: var(--adlaire-surface-accent);
  color: var(--adlaire-surface-accent-strong);
  font-weight: 700;
}

.adlaire-wysiwyg-block-progress {
  background-color: var(--adlaire-surface-soft);
}

.adlaire-wysiwyg-block-progress .adlaire-wysiwyg-block-content {
  display: grid;
  gap: 8px;
}

/* Editor UI state classes */
.adlaire-wysiwyg-block-hover,
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

.adlaire-wysiwyg-mobile-bar {
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
