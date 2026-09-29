export const COMPONENTS_PLATFORM_SURFACES_CSS = `.adlaire-backdrop {
  position: fixed;
  inset: 0;
  z-index: var(--adlaire-layer-overlay);
  background-color: var(--adlaire-overlay-black-48);
}

.adlaire-dialog {
  display: grid;
  gap: 16px;
  max-width: min(560px, calc(100vw - 32px));
  padding: 20px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-lg);
  box-shadow: var(--adlaire-shadow-card-hover);
  color: var(--adlaire-surface-text);
}

.adlaire-dialog[aria-modal="true"],
.adlaire-dialog.is-open {
  position: relative;
  z-index: var(--adlaire-layer-modal);
}

.adlaire-dialog-stack {
  position: fixed;
  inset: 0;
  z-index: var(--adlaire-layer-modal);
  display: grid;
  place-items: center;
  padding: var(--adlaire-layout-gutter);
  pointer-events: none;
}

.adlaire-dialog-stack > .adlaire-dialog {
  pointer-events: auto;
}

.adlaire-dialog-header,
.adlaire-dialog-footer {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  align-items: center;
  justify-content: space-between;
}

.adlaire-dialog-title {
  margin: 0;
  color: var(--adlaire-surface-accent-strong);
  font-weight: 700;
}

.adlaire-dialog-body {
  color: var(--adlaire-surface-text-muted);
  line-height: 1.8;
}

.adlaire-dialog-close {
  display: inline-flex;
  min-width: 36px;
  min-height: 36px;
  align-items: center;
  justify-content: center;
  background-color: var(--adlaire-surface-soft);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-sm);
  color: var(--adlaire-surface-text);
}

.adlaire-dialog-close:hover,
.adlaire-dialog-close:focus-visible {
  border-color: var(--adlaire-surface-accent);
  box-shadow: var(--adlaire-shadow-focus-ring);
  color: var(--adlaire-surface-accent);
  outline: 0;
}

.adlaire-popover {
  display: grid;
  gap: 8px;
  max-width: 320px;
  padding: 12px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-md);
  box-shadow: var(--adlaire-shadow-card);
  color: var(--adlaire-surface-text);
}

.adlaire-popover[data-placement="top"] {
  transform-origin: bottom center;
}

.adlaire-popover[data-placement="bottom"] {
  transform-origin: top center;
}

.adlaire-popover-title {
  color: var(--adlaire-surface-accent-strong);
  font-weight: 700;
}

.adlaire-popover-body {
  color: var(--adlaire-surface-text-muted);
  line-height: 1.7;
}

.adlaire-feedback-stack {
  display: grid;
  gap: 10px;
}

.adlaire-toast-viewport {
  position: fixed;
  right: var(--adlaire-layout-gutter);
  bottom: var(--adlaire-layout-gutter);
  z-index: var(--adlaire-layer-toast);
  display: grid;
  width: min(360px, calc(100vw - 32px));
  gap: 10px;
}

.adlaire-toast {
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: 10px;
  align-items: start;
  padding: 12px 14px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-left: 4px solid var(--adlaire-surface-accent);
  border-radius: var(--adlaire-radius-md);
  box-shadow: var(--adlaire-shadow-card);
  color: var(--adlaire-surface-text);
}

.adlaire-toast-success {
  border-left-color: var(--adlaire-status-success);
}

.adlaire-toast-warning {
  border-left-color: var(--adlaire-status-warning);
}

.adlaire-toast-danger {
  border-left-color: var(--adlaire-status-danger);
}

.adlaire-toast-title {
  color: var(--adlaire-surface-accent-strong);
  font-weight: 700;
}

.adlaire-toast-body {
  color: var(--adlaire-surface-text-muted);
  line-height: 1.6;
}

.adlaire-progress {
  display: grid;
  gap: 6px;
}

.adlaire-progress-track {
  width: 100%;
  height: 8px;
  overflow: hidden;
  background-color: var(--adlaire-surface-soft);
  border-radius: var(--adlaire-radius-round);
}

.adlaire-progress-value {
  display: block;
  width: var(--adlaire-progress-value, 0%);
  height: 100%;
  background-color: var(--adlaire-surface-accent);
}

.adlaire-skeleton {
  display: block;
  min-height: 1rem;
  background-color: var(--adlaire-surface-soft);
  border-radius: var(--adlaire-radius-sm);
}

.adlaire-data-table-state {
  display: grid;
  gap: 10px;
  padding: 16px;
  background-color: var(--adlaire-surface-soft);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-md);
  color: var(--adlaire-surface-text-muted);
}

.adlaire-bulk-feedback {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-items: center;
  justify-content: space-between;
  padding: 12px 14px;
  background-color: var(--adlaire-semantic-selected-bg);
  border: 1px solid var(--adlaire-semantic-selected-border);
  border-radius: var(--adlaire-radius-md);
  color: var(--adlaire-semantic-selected-text);
}

@media (max-width: 480px) {
  .adlaire-admin-mobile-stack,
  .adlaire-admin-mobile-card-list,
  .adlaire-admin-layout,
  .adlaire-admin-form-layout,
  .adlaire-admin-detail-layout,
  .adlaire-admin-bulk-action,
  .adlaire-admin-resource-header,
  .adlaire-admin-data-toolbar,
  .adlaire-admin-selection-summary,
  .adlaire-admin-section-header,
  .adlaire-admin-card-header,
  .adlaire-admin-action-bar,
  .adlaire-admin-state-row {
    display: grid;
    grid-template-columns: 1fr;
    gap: 10px;
  }

  .adlaire-admin-mobile-scroll,
  .adlaire-admin-permission-matrix,
  .adlaire-admin-log-stream {
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }

  .adlaire-admin-mobile-actions,
  .adlaire-admin-action-group,
  .adlaire-admin-card-actions,
  .adlaire-admin-resource-actions,
  .adlaire-admin-toolbar-actions,
  .adlaire-admin-selection-actions,
  .adlaire-admin-state-action {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    gap: 8px;
  }

  .adlaire-admin-mobile-collapse,
  .adlaire-admin-health-item,
  .adlaire-admin-api-key-item,
  .adlaire-admin-webhook-item,
  .adlaire-admin-observability-metric,
  .adlaire-admin-log-line,
  .adlaire-admin-alert-rule-item,
  .adlaire-admin-usage-row,
  .adlaire-admin-retention-rule,
  .adlaire-admin-compliance-item,
  .adlaire-admin-policy-rule,
  .adlaire-admin-session-item,
  .adlaire-admin-device-item,
  .adlaire-admin-access-request-item,
  .adlaire-admin-secret-item,
  .adlaire-admin-token-scope-item,
  .adlaire-admin-risk-signal-item {
    grid-template-columns: 1fr;
  }

  .adlaire-admin-empty-state,
  .adlaire-admin-error-state,
  .adlaire-admin-loading-state,
  .adlaire-admin-forbidden-state,
  .adlaire-admin-incomplete-state {
    padding: 16px;
  }

  .adlaire-admin-panel-grid,
  .adlaire-admin-dashboard-grid {
    grid-template-columns: 1fr;
  }

  .adlaire-modal,
  .adlaire-confirm-dialog,
  .adlaire-notice-dialog,
  .adlaire-drawer,
  .adlaire-dialog-stack {
    padding: 12px;
  }
}
`;
