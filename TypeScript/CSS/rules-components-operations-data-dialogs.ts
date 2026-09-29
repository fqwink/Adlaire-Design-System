export const COMPONENTS_OPERATIONS_DATA_DIALOGS_CSS = `.adlaire-modal,
.adlaire-confirm-dialog,
.adlaire-notice-dialog,
.adlaire-drawer {
  position: fixed;
  inset: 0;
  z-index: var(--adlaire-layer-modal);
  display: none;
  padding: 24px;
  background-color: var(--adlaire-overlay-black-48);
}

.adlaire-modal.is-open,
.adlaire-confirm-dialog.is-open,
.adlaire-notice-dialog.is-open,
.adlaire-drawer.is-open {
  display: grid;
  place-items: center;
}

.adlaire-modal-dialog,
.adlaire-confirm-dialog-panel,
.adlaire-notice-dialog-panel,
.adlaire-drawer-panel {
  width: min(100%, 640px);
  max-height: min(720px, 90vh);
  overflow: auto;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-lg);
  box-shadow: var(--adlaire-shadow-card-hover);
}

.adlaire-drawer {
  justify-items: end;
}

.adlaire-drawer-panel {
  height: 100%;
  border-radius: var(--adlaire-radius-lg) 0 0 var(--adlaire-radius-lg);
}

.adlaire-filter-panel,
.adlaire-filter-row,
.adlaire-saved-filter-list {
  display: grid;
  gap: 12px;
}

.adlaire-filter-panel {
  padding: 16px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-md);
}

.adlaire-filter-row {
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
}

.adlaire-saved-filter-item {
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: space-between;
  padding: 10px 12px;
  background-color: var(--adlaire-surface-soft);
  border-radius: var(--adlaire-radius-sm);
}

`;
