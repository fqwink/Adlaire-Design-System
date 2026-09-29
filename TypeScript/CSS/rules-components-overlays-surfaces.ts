export const COMPONENTS_OVERLAY_SURFACES_CSS = `
.adlaire-modal,
.adlaire-drawer {
  position: fixed;
  inset: 0;
  display: none;
  background-color: var(--adlaire-overlay-white-80);
  z-index: var(--adlaire-z-page-top);
}

.adlaire-overlay-open {
  overflow: hidden;
}

.adlaire-modal.is-open,
.adlaire-drawer.is-open {
  display: grid;
}

.adlaire-modal {
  place-items: center;
  padding: 24px;
}

.adlaire-modal-dialog {
  display: grid;
  width: min(100%, 640px);
  max-height: 100%;
  overflow: auto;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-lg);
  box-shadow: var(--adlaire-shadow-card);
}

.adlaire-modal-header,
.adlaire-modal-footer,
.adlaire-drawer-header,
.adlaire-drawer-footer {
  display: flex;
  gap: 12px;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  border-bottom: 1px solid var(--adlaire-surface-border);
}

.adlaire-modal-footer,
.adlaire-drawer-footer {
  justify-content: flex-end;
  border-top: 1px solid var(--adlaire-surface-border);
  border-bottom: none;
}

.adlaire-modal-title,
.adlaire-drawer-title {
  margin: 0;
  color: var(--adlaire-surface-text);
  font-size: 1.125rem;
  line-height: 1.4;
}

.adlaire-modal-body,
.adlaire-drawer-body {
  padding: 16px;
  color: var(--adlaire-surface-text-muted);
  line-height: 1.7;
}

.adlaire-modal-close,
.adlaire-drawer-close {
  display: inline-flex;
  min-width: 36px;
  min-height: 36px;
  align-items: center;
  justify-content: center;
  padding: 0;
  background-color: transparent;
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-sm);
  color: var(--adlaire-surface-text-muted);
  cursor: pointer;
}

.adlaire-modal-close:hover,
.adlaire-modal-close:focus-visible,
.adlaire-drawer-close:hover,
.adlaire-drawer-close:focus-visible {
  border-color: var(--adlaire-surface-accent);
  box-shadow: var(--adlaire-shadow-focus-ring);
  color: var(--adlaire-surface-accent);
  outline: 0;
}

.adlaire-drawer {
  align-items: stretch;
  justify-content: end;
}

.adlaire-drawer-left {
  justify-content: start;
}

.adlaire-drawer-panel {
  display: grid;
  width: min(100%, 420px);
  grid-template-rows: auto 1fr auto;
  overflow: auto;
  background-color: var(--adlaire-surface-card);
  border-left: 1px solid var(--adlaire-surface-border);
  box-shadow: var(--adlaire-shadow-card);
}

.adlaire-drawer-left .adlaire-drawer-panel {
  border-right: 1px solid var(--adlaire-surface-border);
  border-left: none;
}

.adlaire-dropdown {
  position: relative;
  display: inline-block;
}

.adlaire-dropdown-trigger {
  display: inline-flex;
  min-height: 36px;
  align-items: center;
  justify-content: center;
  padding: 6px 12px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-sm);
  color: var(--adlaire-surface-text);
  cursor: pointer;
}

.adlaire-dropdown-menu {
  position: absolute;
  top: 100%;
  right: 0;
  display: none;
  min-width: 180px;
  margin-top: 6px;
  padding: 6px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-md);
  box-shadow: var(--adlaire-shadow-card);
  z-index: var(--adlaire-z-sticky);
}

.adlaire-dropdown-menu.is-open {
  display: grid;
  gap: 4px;
}

.adlaire-dropdown-item {
  display: block;
  width: 100%;
  padding: 8px 10px;
  background-color: transparent;
  border: 0;
  border-radius: var(--adlaire-radius-sm);
  color: var(--adlaire-surface-text-muted);
  cursor: pointer;
  text-align: left;
  text-decoration: none;
}

.adlaire-dropdown-item:hover,
.adlaire-dropdown-item:focus-visible,
.adlaire-dropdown-item[aria-current="true"] {
  background-color: var(--adlaire-surface-soft);
  color: var(--adlaire-surface-accent-strong);
  outline: 0;
}

`;
