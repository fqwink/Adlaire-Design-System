export const COMPONENTS_OPERATIONS_DATA_INSPECTION_CSS = `.adlaire-property-inspector {
  display: grid;
  gap: 12px;
  padding: 14px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-md);
}

.adlaire-property-section {
  display: grid;
  gap: 8px;
}

.adlaire-property-row {
  display: grid;
  grid-template-columns: minmax(110px, 0.8fr) minmax(0, 1fr);
  gap: 10px;
  align-items: center;
  padding: 8px 0;
  border-bottom: 1px solid var(--adlaire-surface-border);
}

.adlaire-property-row:last-child {
  border-bottom: 0;
}

.adlaire-property-name {
  color: var(--adlaire-surface-text-subtle);
  font-size: 0.875rem;
  font-weight: 800;
}

.adlaire-property-value {
  color: var(--adlaire-surface-text);
}

.adlaire-token-swatch,
.adlaire-component-preview,
.adlaire-component-state-matrix,
.adlaire-anatomy-panel,
.adlaire-a11y-checklist,
.adlaire-keyboard-map {
  display: grid;
  gap: 10px;
  padding: 14px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-md);
}

.adlaire-token-swatch {
  grid-template-columns: auto minmax(0, 1fr);
  align-items: center;
}

.adlaire-token-swatch-color {
  width: 44px;
  height: 44px;
  background-color: var(--adlaire-token-swatch-color, var(--adlaire-surface-accent));
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-md);
  box-shadow: var(--adlaire-shadow-marker-ring);
}

.adlaire-token-swatch-meta,
.adlaire-component-preview-meta,
.adlaire-anatomy-panel-meta {
  color: var(--adlaire-surface-text-subtle);
  font-size: 0.875rem;
}

.adlaire-component-preview-frame {
  display: grid;
  min-height: 140px;
  place-items: center;
  padding: 18px;
  background-color: var(--adlaire-surface-soft);
  border: 1px dashed var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-md);
}

.adlaire-component-state-matrix {
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
}

.adlaire-component-state-cell,
.adlaire-a11y-checklist-item,
.adlaire-keyboard-map-row {
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: space-between;
  padding: 8px 10px;
  background-color: var(--adlaire-surface-soft);
  border-radius: var(--adlaire-radius-sm);
}

.adlaire-anatomy-panel-list,
.adlaire-a11y-checklist,
.adlaire-keyboard-map {
  margin: 0;
  list-style: none;
}

`;
