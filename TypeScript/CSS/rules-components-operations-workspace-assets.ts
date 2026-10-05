export const COMPONENTS_OPERATIONS_WORKSPACE_ASSETS_CSS =
  `.adlaire-asset-browser {
  grid-template-columns: minmax(0, 1.4fr) minmax(220px, 0.8fr);
}

.adlaire-thumbnail-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(96px, 1fr));
  gap: 10px;
}

.adlaire-thumbnail-item {
  display: grid;
  gap: 8px;
  min-width: 0;
  padding: 8px;
  background-color: var(--adlaire-surface-soft);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-sm);
  color: var(--adlaire-surface-text-muted);
}

.adlaire-thumbnail-item[aria-selected="true"] {
  border-color: var(--adlaire-surface-accent);
  box-shadow: var(--adlaire-shadow-focus-ring);
  color: var(--adlaire-surface-accent-strong);
}

.adlaire-thumbnail-preview {
  min-height: 72px;
  background-color: var(--adlaire-surface-card);
  border-radius: var(--adlaire-radius-sm);
}

.adlaire-media-metadata-panel {
  display: grid;
  gap: 8px;
  padding: 12px;
  background-color: var(--adlaire-surface-soft);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-sm);
}

.adlaire-preview-compare {
  display: grid;
  position: relative;
  min-height: 160px;
  overflow: hidden;
  background-color: var(--adlaire-surface-soft);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-md);
}

.adlaire-preview-compare-before,
.adlaire-preview-compare-after {
  display: grid;
  grid-area: 1 / 1;
  place-items: center;
  color: var(--adlaire-surface-card);
  font-weight: 800;
}

.adlaire-preview-compare-before {
  background-color: var(--adlaire-surface-accent-strong);
}

.adlaire-preview-compare-after {
  width: var(--adlaire-preview-compare-position, 50%);
  overflow: hidden;
  background-color: var(--adlaire-semantic-success-color);
}

`;
