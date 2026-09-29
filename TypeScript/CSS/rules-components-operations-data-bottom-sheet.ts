export const COMPONENTS_OPERATIONS_DATA_BOTTOM_SHEET_CSS = `.adlaire-bottom-sheet {
  position: fixed;
  inset: 0;
  z-index: var(--adlaire-layer-modal);
  display: none;
  align-items: end;
  padding: 0;
  background-color: var(--adlaire-overlay-black-48);
}

.adlaire-bottom-sheet.is-open {
  display: grid;
}

.adlaire-bottom-sheet-panel {
  display: grid;
  width: 100%;
  max-height: min(720px, 82vh);
  grid-template-rows: auto minmax(0, 1fr) auto;
  overflow: auto;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-bottom: 0;
  border-radius: var(--adlaire-radius-lg) var(--adlaire-radius-lg) 0 0;
  box-shadow: var(--adlaire-shadow-card-hover);
}

.adlaire-bottom-sheet-header,
.adlaire-bottom-sheet-footer {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-items: center;
  justify-content: space-between;
  padding: 14px 16px;
  border-bottom: 1px solid var(--adlaire-surface-border);
}

.adlaire-bottom-sheet-footer {
  border-top: 1px solid var(--adlaire-surface-border);
  border-bottom: 0;
}

.adlaire-bottom-sheet-body {
  display: grid;
  gap: 12px;
  padding: 16px;
  color: var(--adlaire-surface-text-muted);
}

`;
