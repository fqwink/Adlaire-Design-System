export const COMPONENTS_OPERATIONS_INDUSTRY_CSS = `.adlaire-editorial-calendar,
.adlaire-draft-status-board,
.adlaire-review-gate-panel,
.adlaire-media-library-panel,
.adlaire-rendition-list,
.adlaire-asset-approval-queue,
.adlaire-locale-switcher-panel,
.adlaire-translation-queue,
.adlaire-locale-coverage-matrix,
.adlaire-missing-string-list,
.adlaire-seo-checklist,
.adlaire-keyword-cluster,
.adlaire-moderation-queue,
.adlaire-report-reason-panel {
  display: grid;
  gap: 12px;
  padding: 14px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-md);
  color: var(--adlaire-surface-text);
}

.adlaire-content-brief-card,
.adlaire-publish-readiness-card,
.adlaire-asset-rights-card,
.adlaire-usage-license-badge,
.adlaire-metadata-completeness-meter,
.adlaire-translation-memory-card,
.adlaire-glossary-term-card,
.adlaire-search-preview-card,
.adlaire-metadata-editor-panel,
.adlaire-canonical-url-card,
.adlaire-flagged-content-card,
.adlaire-user-trust-score,
.adlaire-appeal-status-tracker {
  display: grid;
  gap: 8px;
  padding: 12px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-sm);
  color: var(--adlaire-surface-text);
}

.adlaire-editorial-calendar-item,
.adlaire-draft-status-item,
.adlaire-editor-assignment-row,
.adlaire-review-gate-option,
.adlaire-media-library-item,
.adlaire-rendition-list-item,
.adlaire-asset-approval-item,
.adlaire-locale-switcher-option,
.adlaire-translation-queue-item,
.adlaire-locale-coverage-row,
.adlaire-missing-string-item,
.adlaire-seo-checklist-item,
.adlaire-keyword-cluster-item,
.adlaire-crawl-status-row,
.adlaire-moderation-queue-item,
.adlaire-moderation-decision-row,
.adlaire-report-reason-item {
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

.adlaire-draft-status-board,
.adlaire-review-gate-panel,
.adlaire-locale-switcher-panel,
.adlaire-locale-coverage-matrix,
.adlaire-seo-checklist,
.adlaire-moderation-queue {
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
}

.adlaire-review-gate-option,
.adlaire-locale-switcher-option,
.adlaire-moderation-decision-row {
  cursor: pointer;
}

.adlaire-review-gate-option[aria-selected="true"],
.adlaire-locale-switcher-option[aria-selected="true"],
.adlaire-moderation-decision-row[aria-pressed="true"] {
  border-color: var(--adlaire-surface-accent);
  box-shadow: var(--adlaire-shadow-focus-ring);
  color: var(--adlaire-surface-accent-strong);
}

.adlaire-publish-readiness-card[data-state="blocked"],
.adlaire-missing-string-list[data-state="incomplete"],
.adlaire-flagged-content-card[data-state="flagged"],
.adlaire-crawl-status-row[data-state="blocked"] {
  background-color: var(--adlaire-semantic-warning-bg);
  border-color: var(--adlaire-semantic-warning-border);
  color: var(--adlaire-semantic-warning-text);
}

.adlaire-asset-rights-card[data-state="cleared"],
.adlaire-metadata-completeness-meter[data-state="complete"],
.adlaire-translation-memory-card[data-state="matched"],
.adlaire-appeal-status-tracker[data-state="resolved"] {
  border-color: var(--adlaire-semantic-success-border);
  color: var(--adlaire-semantic-success-text);
}

.adlaire-device-registry-table,
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

.adlaire-booking-summary-panel,
.adlaire-trip-status-timeline,
.adlaire-room-inventory-board,
.adlaire-amenity-request-queue,
.adlaire-event-schedule-board,
.adlaire-badge-print-queue,
.adlaire-venue-map-panel,
.adlaire-gate-status-board,
.adlaire-compensation-option-list,
.adlaire-recovery-task-board {
  display: grid;
  gap: 12px;
  padding: 14px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-md);
  color: var(--adlaire-surface-text);
}

.adlaire-itinerary-card,
.adlaire-fare-option-card,
.adlaire-disruption-alert-card,
.adlaire-reservation-card,
.adlaire-guest-folio-panel,
.adlaire-check-in-readiness-card,
.adlaire-session-card,
.adlaire-speaker-profile-card,
.adlaire-capacity-warning-panel,
.adlaire-seating-section-card,
.adlaire-access-pass-card,
.adlaire-crowd-flow-meter,
.adlaire-incident-guest-card,
.adlaire-service-note-panel,
.adlaire-satisfaction-follow-up-card {
  display: grid;
  gap: 8px;
  padding: 12px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-sm);
  color: var(--adlaire-surface-text);
}

.adlaire-traveler-profile-row,
.adlaire-trip-status-item,
.adlaire-room-inventory-item,
.adlaire-housekeeping-task-row,
.adlaire-amenity-request-item,
.adlaire-event-schedule-item,
.adlaire-attendee-check-in-row,
.adlaire-badge-print-item,
.adlaire-venue-map-item,
.adlaire-seat-hold-row,
.adlaire-gate-status-item,
.adlaire-compensation-option-item,
.adlaire-recovery-task-item,
.adlaire-refund-status-row {
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

.adlaire-room-inventory-board,
.adlaire-event-schedule-board,
.adlaire-gate-status-board,
.adlaire-compensation-option-list {
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
}

.adlaire-fare-option-card,
.adlaire-room-inventory-item,
.adlaire-recovery-task-item {
  cursor: pointer;
}

.adlaire-fare-option-card[aria-selected="true"],
.adlaire-room-inventory-item[aria-selected="true"],
.adlaire-recovery-task-item[aria-checked="true"] {
  border-color: var(--adlaire-surface-accent);
  box-shadow: var(--adlaire-shadow-focus-ring);
  color: var(--adlaire-surface-accent-strong);
}

.adlaire-disruption-alert-card[data-state="active"],
.adlaire-capacity-warning-panel[data-state="warning"],
.adlaire-incident-guest-card[data-state="open"] {
  background-color: var(--adlaire-semantic-warning-bg);
  border-color: var(--adlaire-semantic-warning-border);
  color: var(--adlaire-semantic-warning-text);
}

.adlaire-check-in-readiness-card[data-state="ready"],
.adlaire-access-pass-card[data-state="valid"],
.adlaire-satisfaction-follow-up-card[data-state="sent"] {
  border-color: var(--adlaire-semantic-success-border);
  color: var(--adlaire-semantic-success-text);
}

.adlaire-eligibility-checklist,
.adlaire-case-status-timeline,
.adlaire-service-counter-queue,
.adlaire-permit-application-panel,
.adlaire-document-requirement-list,
.adlaire-application-review-board,
.adlaire-volunteer-shift-board,
.adlaire-outreach-list,
.adlaire-incident-command-panel,
.adlaire-shelter-status-board,
.adlaire-response-team-roster {
  display: grid;
  gap: 12px;
  padding: 14px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-md);
  color: var(--adlaire-surface-text);
}

.adlaire-service-application-card,
.adlaire-public-notice-banner,
.adlaire-license-status-card,
.adlaire-compliance-finding-card,
.adlaire-renewal-reminder-panel,
.adlaire-grant-program-card,
.adlaire-aid-eligibility-summary,
.adlaire-disbursement-status-card,
.adlaire-beneficiary-profile-panel,
.adlaire-donation-campaign-card,
.adlaire-impact-metric-tile,
.adlaire-donor-acknowledgement-card,
.adlaire-resource-request-card,
.adlaire-recovery-milestone-card {
  display: grid;
  gap: 8px;
  padding: 12px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-sm);
  color: var(--adlaire-surface-text);
}

.adlaire-eligibility-check-item,
.adlaire-appointment-slot-row,
.adlaire-case-status-item,
.adlaire-service-counter-item,
.adlaire-document-requirement-item,
.adlaire-inspection-schedule-row,
.adlaire-application-review-item,
.adlaire-funding-allocation-row,
.adlaire-volunteer-shift-item,
.adlaire-pledge-tracker-row,
.adlaire-outreach-item,
.adlaire-shelter-status-item,
.adlaire-alert-broadcast-row,
.adlaire-response-team-item {
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

.adlaire-service-counter-queue,
.adlaire-document-requirement-list,
.adlaire-application-review-board,
.adlaire-volunteer-shift-board,
.adlaire-shelter-status-board {
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
}

.adlaire-eligibility-check-item,
.adlaire-document-requirement-item,
.adlaire-volunteer-shift-item {
  cursor: pointer;
}

.adlaire-eligibility-check-item[aria-checked="true"],
.adlaire-document-requirement-item[aria-selected="true"],
.adlaire-volunteer-shift-item[aria-selected="true"] {
  border-color: var(--adlaire-surface-accent);
  box-shadow: var(--adlaire-shadow-focus-ring);
  color: var(--adlaire-surface-accent-strong);
}

.adlaire-public-notice-banner[data-state="urgent"],
.adlaire-compliance-finding-card[data-state="open"],
.adlaire-resource-request-card[data-state="critical"] {
  background-color: var(--adlaire-semantic-warning-bg);
  border-color: var(--adlaire-semantic-warning-border);
  color: var(--adlaire-semantic-warning-text);
}

.adlaire-license-status-card[data-state="active"],
.adlaire-disbursement-status-card[data-state="paid"],
.adlaire-donor-acknowledgement-card[data-state="sent"],
.adlaire-recovery-milestone-card[data-state="complete"] {
  border-color: var(--adlaire-semantic-success-border);
  color: var(--adlaire-semantic-success-text);
}

.adlaire-demand-response-panel,
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
