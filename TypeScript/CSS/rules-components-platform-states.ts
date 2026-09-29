export const COMPONENTS_PLATFORM_STATES_CSS = `.adlaire-loading-state,
.adlaire-state,
.adlaire-state-empty,
.adlaire-state-error,
.adlaire-state-loading {
  display: grid;
  gap: 10px;
  place-items: center;
  padding: 28px;
  background-color: var(--adlaire-surface-soft);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-md);
  color: var(--adlaire-surface-text-muted);
  text-align: center;
}

.adlaire-state-error {
  background-color: var(--adlaire-alert-danger-bg);
  border-color: var(--adlaire-alert-danger-border);
  color: var(--adlaire-alert-danger-text);
}

.adlaire-state-loading::before,
.adlaire-loading-state::before {
  width: 22px;
  height: 22px;
  border: 3px solid var(--adlaire-surface-border);
  border-top-color: var(--adlaire-surface-accent);
  border-radius: var(--adlaire-radius-round);
  content: "";
  animation: adlaire-spin var(--adlaire-motion-duration-slow) var(--adlaire-motion-ease-standard) infinite;
}

@keyframes adlaire-spin {
  to {
    transform: rotate(360deg);
  }
}

.adlaire-data-card,
.adlaire-sync-status,
.adlaire-api-error {
  padding: 16px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-md);
}

.adlaire-api-error {
  background-color: var(--adlaire-alert-danger-bg);
  border-color: var(--adlaire-alert-danger-border);
  color: var(--adlaire-alert-danger-text);
}

.adlaire-chart-frame,
.adlaire-kpi-card,
.adlaire-metric-comparison {
  padding: 16px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-md);
}

.adlaire-chart-legend,
.adlaire-chart-label,
.adlaire-metric-delta,
.adlaire-metric-trend {
  display: inline-flex;
  gap: 6px;
  align-items: center;
  color: var(--adlaire-surface-text-subtle);
  font-size: 0.875rem;
}

.adlaire-chart-empty {
  padding: 24px;
  background-color: var(--adlaire-surface-soft);
  border-radius: var(--adlaire-radius-sm);
  color: var(--adlaire-surface-text-subtle);
  text-align: center;
}

.adlaire-kpi-card {
  display: grid;
  gap: 8px;
}

.adlaire-avatar,
.adlaire-presence-dot {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--adlaire-radius-round);
}

.adlaire-avatar {
  width: 40px;
  height: 40px;
  background-color: var(--adlaire-surface-soft);
  border: 1px solid var(--adlaire-surface-border);
  color: var(--adlaire-surface-accent-strong);
  font-weight: 700;
  overflow: hidden;
}

.adlaire-avatar-group {
  display: flex;
}

.adlaire-avatar-group .adlaire-avatar + .adlaire-avatar {
  margin-left: -8px;
}

.adlaire-presence {
  position: relative;
  display: inline-flex;
}

.adlaire-presence-dot {
  position: absolute;
  right: -1px;
  bottom: -1px;
  width: 12px;
  height: 12px;
  background-color: var(--adlaire-status-success);
  border: 2px solid var(--adlaire-surface-card);
}

.adlaire-gallery,
.adlaire-lightbox {
  display: grid;
  gap: 12px;
}

.adlaire-gallery {
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
}

.adlaire-gallery-item {
  overflow: hidden;
  background-color: var(--adlaire-surface-soft);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-md);
}

.adlaire-lightbox {
  padding: 16px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-md);
}

.adlaire-lightbox-caption {
  color: var(--adlaire-surface-text-subtle);
  font-size: 0.875rem;
}

.adlaire-toast-stack {
  position: fixed;
  right: 16px;
  bottom: 16px;
  z-index: var(--adlaire-layer-toast);
  display: grid;
  width: min(360px, calc(100vw - 32px));
  gap: 10px;
}

.adlaire-toast,
.adlaire-snackbar {
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: space-between;
  padding: 12px 14px;
  background-color: var(--adlaire-status-dark);
  border-radius: var(--adlaire-radius-sm);
  box-shadow: var(--adlaire-shadow-nav);
  color: var(--adlaire-surface-card);
}

.adlaire-toast-dismiss {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 32px;
  min-height: 32px;
  background: transparent;
  border: 0;
  color: inherit;
  cursor: pointer;
}

`;
