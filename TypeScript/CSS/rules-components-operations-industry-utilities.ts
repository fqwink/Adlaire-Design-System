export const COMPONENTS_OPERATIONS_INDUSTRY_UTILITIES_CSS = `.adlaire-demand-response-panel,
.adlaire-grid-event-timeline,
.adlaire-service-appointment-board,
.adlaire-waste-pickup-schedule,
.adlaire-compliance-sample-log,
.adlaire-sustainability-target-tracker,
.adlaire-disclosure-checklist,
.adlaire-sensor-threshold-board,
.adlaire-field-inspection-checklist,
.adlaire-remediation-task-list {
  display: grid;
  gap: 12px;
  padding: 14px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-md);
  color: var(--adlaire-surface-text);
}

.adlaire-energy-usage-card,
.adlaire-load-forecast-card,
.adlaire-generation-mix-card,
.adlaire-energy-contract-summary,
.adlaire-utility-account-card,
.adlaire-outage-report-card,
.adlaire-consumption-alert-banner,
.adlaire-payment-assistance-panel,
.adlaire-water-quality-panel,
.adlaire-leak-alert-card,
.adlaire-treatment-plant-status,
.adlaire-carbon-footprint-tile,
.adlaire-offset-portfolio-card,
.adlaire-audit-evidence-panel,
.adlaire-monitoring-station-card,
.adlaire-incident-map-panel {
  display: grid;
  gap: 8px;
  padding: 12px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-sm);
  color: var(--adlaire-surface-text);
}

.adlaire-demand-response-option,
.adlaire-grid-event-item,
.adlaire-meter-reading-row,
.adlaire-service-appointment-item,
.adlaire-maintenance-route-row,
.adlaire-waste-pickup-item,
.adlaire-compliance-sample-item,
.adlaire-emissions-ledger-row,
.adlaire-disclosure-check-item,
.adlaire-sensor-threshold-item,
.adlaire-field-inspection-item,
.adlaire-sample-collection-row,
.adlaire-remediation-task-item {
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

.adlaire-demand-response-panel,
.adlaire-service-appointment-board,
.adlaire-waste-pickup-schedule,
.adlaire-sensor-threshold-board,
.adlaire-remediation-task-list {
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
}

.adlaire-demand-response-option,
.adlaire-outage-report-card,
.adlaire-disclosure-check-item {
  cursor: pointer;
}

.adlaire-demand-response-option[aria-selected="true"],
.adlaire-outage-report-card[aria-selected="true"],
.adlaire-disclosure-check-item[aria-checked="true"] {
  border-color: var(--adlaire-surface-accent);
  box-shadow: var(--adlaire-shadow-focus-ring);
  color: var(--adlaire-surface-accent-strong);
}

.adlaire-consumption-alert-banner[data-state="high"],
.adlaire-leak-alert-card[data-state="active"],
.adlaire-incident-map-panel[data-state="open"] {
  background-color: var(--adlaire-semantic-warning-bg);
  border-color: var(--adlaire-semantic-warning-border);
  color: var(--adlaire-semantic-warning-text);
}

.adlaire-energy-contract-summary[data-state="active"],
.adlaire-treatment-plant-status[data-state="normal"],
.adlaire-sustainability-target-tracker[data-state="on-track"],
.adlaire-audit-evidence-panel[data-state="verified"] {
  border-color: var(--adlaire-semantic-success-border);
  color: var(--adlaire-semantic-success-text);
}

`;
