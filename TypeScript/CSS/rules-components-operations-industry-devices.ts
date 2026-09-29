export const COMPONENTS_OPERATIONS_INDUSTRY_DEVICES_CSS = `.adlaire-device-registry-table,
.adlaire-remote-command-queue,
.adlaire-offline-queue,
.adlaire-deployment-ring-selector,
.adlaire-telemetry-stream,
.adlaire-alert-event-list,
.adlaire-kiosk-status-board,
.adlaire-store-device-map,
.adlaire-location-ping-timeline,
.adlaire-device-handoff-checklist {
  display: grid;
  gap: 12px;
  padding: 14px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-md);
  color: var(--adlaire-surface-text);
}

.adlaire-device-card,
.adlaire-enrollment-panel,
.adlaire-device-health-tile,
.adlaire-firmware-version-badge,
.adlaire-edge-node-card,
.adlaire-sync-status-panel,
.adlaire-bandwidth-usage-meter,
.adlaire-rollback-checkpoint-card,
.adlaire-sensor-reading-card,
.adlaire-threshold-rule-panel,
.adlaire-signal-quality-indicator,
.adlaire-terminal-session-card,
.adlaire-cash-drawer-status,
.adlaire-receipt-printer-panel,
.adlaire-mobile-device-assignment,
.adlaire-app-version-compliance,
.adlaire-lost-mode-banner {
  display: grid;
  gap: 8px;
  padding: 12px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-sm);
  color: var(--adlaire-surface-text);
}

.adlaire-device-registry-row,
.adlaire-remote-command-item,
.adlaire-offline-queue-item,
.adlaire-deployment-ring-option,
.adlaire-telemetry-stream-item,
.adlaire-alert-event-item,
.adlaire-calibration-record-row,
.adlaire-kiosk-status-item,
.adlaire-checkout-lane-row,
.adlaire-store-device-map-item,
.adlaire-battery-status-row,
.adlaire-location-ping-item,
.adlaire-device-handoff-item {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
  justify-content: space-between;
  padding: 10px 12px;
  background-color: var(--adlaire-surface-soft);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-sm);
  color: var(--adlaire-surface-text-muted);
}

.adlaire-device-registry-table,
.adlaire-deployment-ring-selector,
.adlaire-kiosk-status-board,
.adlaire-store-device-map {
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
}

.adlaire-device-registry-row,
.adlaire-deployment-ring-option,
.adlaire-device-handoff-item {
  cursor: pointer;
}

.adlaire-device-registry-row[aria-selected="true"],
.adlaire-deployment-ring-option[aria-selected="true"],
.adlaire-device-handoff-item[aria-checked="true"] {
  border-color: var(--adlaire-surface-accent);
  box-shadow: var(--adlaire-shadow-focus-ring);
  color: var(--adlaire-surface-accent-strong);
}

.adlaire-device-health-tile[data-state="degraded"],
.adlaire-sync-status-panel[data-state="offline"],
.adlaire-alert-event-item[data-state="critical"],
.adlaire-lost-mode-banner[data-state="active"] {
  background-color: var(--adlaire-semantic-warning-bg);
  border-color: var(--adlaire-semantic-warning-border);
  color: var(--adlaire-semantic-warning-text);
}

.adlaire-enrollment-panel[data-state="complete"],
.adlaire-rollback-checkpoint-card[data-state="ready"],
.adlaire-signal-quality-indicator[data-state="good"],
.adlaire-app-version-compliance[data-state="compliant"] {
  border-color: var(--adlaire-semantic-success-border);
  color: var(--adlaire-semantic-success-text);
}

`;
