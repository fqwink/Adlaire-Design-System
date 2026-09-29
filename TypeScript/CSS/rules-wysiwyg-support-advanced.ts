export const WYSIWYG_SUPPORT_ADVANCED_CSS = `/* Priority C: advanced support UI */
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

`;
