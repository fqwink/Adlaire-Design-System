export const COMPONENTS_OPERATIONS_BUSINESS_CSS = `.adlaire-agenda-view,
.adlaire-time-slot-grid,
.adlaire-resource-calendar,
.adlaire-availability-matrix,
.adlaire-location-card,
.adlaire-facility-map-panel,
.adlaire-area-status-grid,
.adlaire-comparison-matrix,
.adlaire-decision-scorecard,
.adlaire-document-library,
.adlaire-folder-tree,
.adlaire-download-queue,
.adlaire-session-list,
.adlaire-policy-exception-panel {
  display: grid;
  gap: 12px;
  padding: 14px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-md);
  color: var(--adlaire-surface-text);
}

.adlaire-agenda-row,
.adlaire-calendar-event,
.adlaire-booking-card,
.adlaire-location-card,
.adlaire-route-summary,
.adlaire-site-operating-hours,
.adlaire-option-card,
.adlaire-selection-summary,
.adlaire-file-version-card,
.adlaire-document-approval-state,
.adlaire-access-request-card,
.adlaire-device-trust-card,
.adlaire-security-event-row {
  display: grid;
  gap: 8px;
  padding: 12px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-sm);
  color: var(--adlaire-surface-text);
}

.adlaire-agenda-row,
.adlaire-calendar-event,
.adlaire-booking-card,
.adlaire-route-summary,
.adlaire-site-operating-hours,
.adlaire-file-version-card,
.adlaire-access-request-card,
.adlaire-device-trust-card,
.adlaire-security-event-row {
  grid-template-columns: minmax(72px, auto) minmax(0, 1fr) auto;
  align-items: center;
}

.adlaire-time-slot-grid,
.adlaire-availability-matrix,
.adlaire-area-status-grid {
  grid-template-columns: repeat(auto-fit, minmax(92px, 1fr));
}

.adlaire-time-slot {
  min-height: 44px;
  padding: 8px 10px;
  background-color: var(--adlaire-surface-soft);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-sm);
  color: var(--adlaire-surface-text-muted);
  cursor: pointer;
}

.adlaire-time-slot[aria-selected="true"],
.adlaire-time-slot:hover,
.adlaire-time-slot:focus-visible,
.adlaire-option-card[aria-selected="true"],
.adlaire-option-card:hover,
.adlaire-option-card:focus-visible {
  border-color: var(--adlaire-surface-accent);
  box-shadow: var(--adlaire-shadow-focus-ring);
  color: var(--adlaire-surface-accent-strong);
  outline: 0;
}

.adlaire-resource-calendar {
  grid-template-columns: minmax(160px, 0.8fr) minmax(0, 1.2fr);
}

.adlaire-availability-cell,
.adlaire-area-status-cell {
  min-height: 48px;
  padding: 8px;
  background-color: var(--adlaire-surface-soft);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-sm);
  color: var(--adlaire-surface-text-muted);
}

.adlaire-availability-cell[data-state="available"],
.adlaire-area-status-cell[data-state="open"] {
  background-color: var(--adlaire-semantic-success-bg);
  border-color: var(--adlaire-semantic-success-border);
  color: var(--adlaire-semantic-success-text);
}

.adlaire-availability-cell[data-state="busy"],
.adlaire-area-status-cell[data-state="busy"] {
  background-color: var(--adlaire-semantic-warning-bg);
  border-color: var(--adlaire-semantic-warning-border);
  color: var(--adlaire-semantic-warning-text);
}

.adlaire-facility-map-panel {
  min-height: 180px;
  place-items: center;
  background-color: var(--adlaire-surface-soft);
}

.adlaire-floor-selector {
  display: inline-flex;
  flex-wrap: wrap;
  gap: 6px;
  padding: 6px;
  background-color: var(--adlaire-surface-soft);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-lg);
}

.adlaire-floor-selector-button {
  min-width: 40px;
  min-height: 36px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-md);
  color: var(--adlaire-surface-text-muted);
  cursor: pointer;
}

.adlaire-floor-selector-button[aria-pressed="true"],
.adlaire-floor-selector-button:hover,
.adlaire-floor-selector-button:focus-visible {
  border-color: var(--adlaire-surface-accent);
  box-shadow: var(--adlaire-shadow-focus-ring);
  color: var(--adlaire-surface-accent);
  outline: 0;
}

.adlaire-comparison-matrix {
  overflow: auto;
}

.adlaire-comparison-matrix table {
  width: 100%;
  border-collapse: collapse;
}

.adlaire-comparison-matrix th,
.adlaire-comparison-matrix td {
  padding: 10px 12px;
  border-bottom: 1px solid var(--adlaire-surface-border);
  color: var(--adlaire-surface-text);
  text-align: left;
  white-space: nowrap;
}

.adlaire-option-card {
  cursor: pointer;
}

.adlaire-decision-scorecard {
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
}

.adlaire-decision-score {
  display: grid;
  gap: 4px;
  padding: 10px;
  background-color: var(--adlaire-surface-soft);
  border-radius: var(--adlaire-radius-sm);
  color: var(--adlaire-surface-text-muted);
}

.adlaire-tradeoff-list {
  display: grid;
  gap: 8px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.adlaire-tradeoff-item {
  padding: 10px 12px;
  background-color: var(--adlaire-surface-soft);
  border-left: 4px solid var(--adlaire-surface-accent);
  border-radius: var(--adlaire-radius-sm);
  color: var(--adlaire-surface-text-muted);
}

.adlaire-recommendation-banner {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-items: center;
  justify-content: space-between;
  padding: 12px 14px;
  background-color: var(--adlaire-semantic-info-bg);
  border: 1px solid var(--adlaire-semantic-info-border);
  border-radius: var(--adlaire-radius-md);
  color: var(--adlaire-semantic-info-text);
}

.adlaire-document-library {
  grid-template-columns: minmax(180px, 0.8fr) minmax(0, 1.2fr);
}

.adlaire-folder-tree,
.adlaire-folder-list,
.adlaire-folder-branch {
  display: grid;
  gap: 6px;
}

.adlaire-folder-list,
.adlaire-folder-branch {
  margin: 0;
  padding: 0;
  list-style: none;
}

.adlaire-folder-branch {
  padding-left: 18px;
  border-left: 1px solid var(--adlaire-surface-border);
}

.adlaire-folder-branch[hidden] {
  display: none;
}

.adlaire-folder-row {
  display: flex;
  gap: 8px;
  align-items: center;
  padding: 8px 10px;
  background-color: var(--adlaire-surface-soft);
  border-radius: var(--adlaire-radius-sm);
  color: var(--adlaire-surface-text-muted);
}

.adlaire-folder-toggle {
  min-width: 28px;
  min-height: 28px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-sm);
  color: var(--adlaire-surface-text-muted);
  cursor: pointer;
}

.adlaire-folder-toggle[aria-expanded="true"],
.adlaire-folder-toggle:hover,
.adlaire-folder-toggle:focus-visible {
  border-color: var(--adlaire-surface-accent);
  box-shadow: var(--adlaire-shadow-focus-ring);
  color: var(--adlaire-surface-accent);
  outline: 0;
}

.adlaire-retention-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 4px 8px;
  background-color: var(--adlaire-semantic-muted-bg);
  border: 1px solid var(--adlaire-semantic-muted-border);
  border-radius: var(--adlaire-radius-round);
  color: var(--adlaire-semantic-muted-text);
  font-size: 0.75rem;
  font-weight: 800;
}

.adlaire-download-queue {
  gap: 6px;
}

.adlaire-download-queue-item,
.adlaire-permission-grant-row,
.adlaire-session-list-item {
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

.adlaire-policy-exception-header,
.adlaire-policy-exception-body {
  display: grid;
  gap: 8px;
}

.adlaire-policy-exception-body {
  padding-top: 10px;
  border-top: 1px solid var(--adlaire-surface-border);
}

.adlaire-policy-exception-body[hidden] {
  display: none;
}

.adlaire-budget-panel,
.adlaire-payment-schedule,
.adlaire-shift-roster,
.adlaire-skill-matrix,
.adlaire-customer-profile-panel,
.adlaire-pipeline-stage-rail,
.adlaire-contact-timeline,
.adlaire-dispatch-board,
.adlaire-parts-list,
.adlaire-service-checklist,
.adlaire-collection-index,
.adlaire-quick-link-grid,
.adlaire-internal-app-launcher {
  display: grid;
  gap: 12px;
  padding: 14px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-md);
  color: var(--adlaire-surface-text);
}

.adlaire-expense-card,
.adlaire-purchase-request,
.adlaire-invoice-approval-row,
.adlaire-ledger-entry-row,
.adlaire-employee-profile-card,
.adlaire-attendance-summary,
.adlaire-leave-request-card,
.adlaire-training-progress,
.adlaire-account-health-card,
.adlaire-opportunity-card,
.adlaire-next-action-panel,
.adlaire-work-order-card,
.adlaire-technician-route-card,
.adlaire-completion-report,
.adlaire-knowledge-article-card,
.adlaire-policy-acknowledgement {
  display: grid;
  gap: 8px;
  padding: 12px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-sm);
  color: var(--adlaire-surface-text);
}

.adlaire-invoice-approval-row,
.adlaire-ledger-entry-row,
.adlaire-shift-roster-row,
.adlaire-contact-timeline-item,
.adlaire-parts-list-item,
.adlaire-service-checklist-item,
.adlaire-collection-index-item,
.adlaire-quick-link-grid-item,
.adlaire-internal-app-launcher-item {
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

.adlaire-budget-panel {
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
}

.adlaire-budget-metric,
.adlaire-attendance-metric,
.adlaire-skill-cell {
  display: grid;
  gap: 4px;
  padding: 10px;
  background-color: var(--adlaire-surface-soft);
  border-radius: var(--adlaire-radius-sm);
  color: var(--adlaire-surface-text-muted);
}

.adlaire-payment-schedule {
  gap: 6px;
}

.adlaire-payment-schedule-step {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  gap: 8px;
  align-items: center;
  padding: 10px 12px;
  background-color: var(--adlaire-surface-soft);
  border-radius: var(--adlaire-radius-sm);
}

.adlaire-payment-schedule-step[aria-current="step"],
.adlaire-pipeline-stage[aria-current="step"] {
  border: 1px solid var(--adlaire-surface-accent);
  box-shadow: var(--adlaire-shadow-focus-ring);
  color: var(--adlaire-surface-accent-strong);
}

.adlaire-employee-profile-card {
  grid-template-columns: auto minmax(0, 1fr);
  align-items: center;
}

.adlaire-employee-avatar,
.adlaire-customer-avatar {
  display: grid;
  width: 48px;
  height: 48px;
  place-items: center;
  background-color: var(--adlaire-surface-soft);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-round);
  color: var(--adlaire-surface-accent);
  font-weight: 800;
}

.adlaire-shift-roster {
  gap: 6px;
}

.adlaire-shift-roster-row[aria-selected="true"],
.adlaire-shift-roster-row:hover,
.adlaire-shift-roster-row:focus-visible {
  border-color: var(--adlaire-surface-accent);
  box-shadow: var(--adlaire-shadow-focus-ring);
  color: var(--adlaire-surface-accent-strong);
  outline: 0;
}

.adlaire-skill-matrix {
  grid-template-columns: repeat(auto-fit, minmax(96px, 1fr));
}

.adlaire-training-progress-bar {
  overflow: hidden;
  background-color: var(--adlaire-surface-soft);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-round);
}

.adlaire-training-progress-value {
  min-height: 12px;
  background-color: var(--adlaire-surface-accent);
  border-radius: var(--adlaire-radius-round);
}

.adlaire-customer-profile-panel {
  grid-template-columns: auto minmax(0, 1fr);
  align-items: center;
}

.adlaire-account-health-card[data-state="healthy"] {
  background-color: var(--adlaire-semantic-success-bg);
  border-color: var(--adlaire-semantic-success-border);
  color: var(--adlaire-semantic-success-text);
}

.adlaire-pipeline-stage-rail {
  display: flex;
  flex-wrap: wrap;
}

.adlaire-pipeline-stage {
  flex: 1 1 120px;
  padding: 10px 12px;
  background-color: var(--adlaire-surface-soft);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-sm);
  color: var(--adlaire-surface-text-muted);
  cursor: pointer;
}

.adlaire-contact-timeline {
  gap: 6px;
}

.adlaire-dispatch-board {
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
}

.adlaire-work-order-card[data-priority="high"] {
  border-color: var(--adlaire-semantic-warning-border);
  background-color: var(--adlaire-semantic-warning-bg);
  color: var(--adlaire-semantic-warning-text);
}

.adlaire-technician-route-card {
  grid-template-columns: minmax(0, 1fr) auto;
  align-items: center;
}

.adlaire-service-checklist-item[aria-checked="true"],
.adlaire-policy-acknowledgement[aria-pressed="true"] {
  border-color: var(--adlaire-semantic-success-border);
  color: var(--adlaire-semantic-success-text);
}

.adlaire-announcement-banner {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-items: center;
  justify-content: space-between;
  padding: 12px 14px;
  background-color: var(--adlaire-semantic-info-bg);
  border: 1px solid var(--adlaire-semantic-info-border);
  border-radius: var(--adlaire-radius-md);
  color: var(--adlaire-semantic-info-text);
}

.adlaire-quick-link-grid,
.adlaire-internal-app-launcher {
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
}

.adlaire-quick-link-grid-item,
.adlaire-internal-app-launcher-item {
  justify-content: center;
  min-height: 56px;
  text-align: center;
}

.adlaire-key-result-tracker,
.adlaire-initiative-map,
.adlaire-confidence-indicator,
.adlaire-review-cadence,
.adlaire-portfolio-overview,
.adlaire-milestone-tracker,
.adlaire-dependency-register,
.adlaire-risk-issue-log,
.adlaire-capacity-planner,
.adlaire-availability-forecast,
.adlaire-vendor-scorecard,
.adlaire-sla-tracker,
.adlaire-procurement-pipeline,
.adlaire-change-calendar-panel {
  display: grid;
  gap: 12px;
  padding: 14px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-md);
  color: var(--adlaire-surface-text);
}

.adlaire-objective-card,
.adlaire-alignment-summary,
.adlaire-program-card,
.adlaire-project-health-panel,
.adlaire-utilization-summary,
.adlaire-staffing-request-card,
.adlaire-allocation-conflict,
.adlaire-supplier-profile,
.adlaire-contract-renewal-card,
.adlaire-service-request-card,
.adlaire-license-assignment-card,
.adlaire-maintenance-window-card,
.adlaire-postmortem-summary {
  display: grid;
  gap: 8px;
  padding: 12px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-sm);
  color: var(--adlaire-surface-text);
}

.adlaire-key-result-row,
.adlaire-review-cadence-item,
.adlaire-portfolio-overview-item,
.adlaire-dependency-register-item,
.adlaire-risk-issue-item,
.adlaire-allocation-row,
.adlaire-availability-forecast-item,
.adlaire-vendor-scorecard-item,
.adlaire-sla-tracker-item,
.adlaire-change-calendar-item,
.adlaire-asset-inventory-row,
.adlaire-compliance-attestation-row {
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

.adlaire-objective-card {
  border-left: 4px solid var(--adlaire-surface-accent);
}

.adlaire-key-result-progress {
  overflow: hidden;
  width: min(160px, 100%);
  min-height: 10px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-round);
}

.adlaire-key-result-progress-value {
  min-height: 10px;
  background-color: var(--adlaire-surface-accent);
  border-radius: var(--adlaire-radius-round);
}

.adlaire-initiative-map,
.adlaire-portfolio-overview,
.adlaire-procurement-pipeline {
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
}

.adlaire-initiative-map-item,
.adlaire-milestone-step,
.adlaire-procurement-pipeline-step,
.adlaire-confidence-option {
  display: grid;
  gap: 4px;
  padding: 10px 12px;
  background-color: var(--adlaire-surface-soft);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-sm);
  color: var(--adlaire-surface-text-muted);
}

.adlaire-confidence-indicator {
  grid-template-columns: repeat(auto-fit, minmax(96px, 1fr));
}

.adlaire-confidence-option {
  cursor: pointer;
  text-align: left;
}

.adlaire-confidence-option[aria-pressed="true"],
.adlaire-milestone-step[aria-current="step"],
.adlaire-procurement-pipeline-step[aria-current="step"] {
  border-color: var(--adlaire-surface-accent);
  box-shadow: var(--adlaire-shadow-focus-ring);
  color: var(--adlaire-surface-accent-strong);
}

.adlaire-project-health-panel[data-state="at-risk"],
.adlaire-allocation-conflict,
.adlaire-sla-tracker-item[data-state="breached"],
.adlaire-service-request-card[data-priority="high"] {
  background-color: var(--adlaire-semantic-warning-bg);
  border-color: var(--adlaire-semantic-warning-border);
  color: var(--adlaire-semantic-warning-text);
}

.adlaire-capacity-planner {
  gap: 6px;
}

.adlaire-utilization-summary {
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
}

.adlaire-compliance-attestation-row[aria-pressed="true"] {
  border-color: var(--adlaire-semantic-success-border);
  color: var(--adlaire-semantic-success-text);
}

.adlaire-postmortem-summary {
  background-color: var(--adlaire-semantic-info-bg);
  border-color: var(--adlaire-semantic-info-border);
  color: var(--adlaire-semantic-info-text);
}

.adlaire-shipment-tracker,
.adlaire-delivery-route-board,
.adlaire-exception-queue,
.adlaire-quality-inspection-panel,
.adlaire-downtime-reason-list,
.adlaire-appointment-queue,
.adlaire-care-plan-checklist,
.adlaire-medication-schedule,
.adlaire-assignment-queue,
.adlaire-grading-rubric,
.adlaire-matter-timeline,
.adlaire-evidence-list,
.adlaire-counsel-task-list {
  display: grid;
  gap: 12px;
  padding: 14px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-md);
  color: var(--adlaire-surface-text);
}

.adlaire-warehouse-bin-card,
.adlaire-carrier-handoff-card,
.adlaire-production-order-card,
.adlaire-work-cell-status,
.adlaire-batch-trace-card,
.adlaire-patient-summary-card,
.adlaire-triage-status-panel,
.adlaire-course-card,
.adlaire-lesson-progress,
.adlaire-learner-profile,
.adlaire-certification-tracker,
.adlaire-case-file-card,
.adlaire-filing-deadline-tracker,
.adlaire-review-privilege-badge {
  display: grid;
  gap: 8px;
  padding: 12px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-sm);
  color: var(--adlaire-surface-text);
}

.adlaire-shipment-step,
.adlaire-inventory-movement-row,
.adlaire-delivery-route-item,
.adlaire-exception-queue-item,
.adlaire-defect-report-row,
.adlaire-downtime-reason-item,
.adlaire-appointment-queue-item,
.adlaire-care-plan-checklist-item,
.adlaire-medication-schedule-item,
.adlaire-assignment-queue-item,
.adlaire-grading-rubric-row,
.adlaire-matter-timeline-item,
.adlaire-evidence-list-item,
.adlaire-consent-record-row,
.adlaire-counsel-task-item {
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

.adlaire-shipment-tracker,
.adlaire-delivery-route-board,
.adlaire-grading-rubric {
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
}

.adlaire-shipment-step[aria-current="step"],
.adlaire-delivery-route-item[aria-selected="true"],
.adlaire-evidence-list-item[aria-selected="true"] {
  border-color: var(--adlaire-surface-accent);
  box-shadow: var(--adlaire-shadow-focus-ring);
  color: var(--adlaire-surface-accent-strong);
}

.adlaire-delivery-route-item,
.adlaire-care-plan-checklist-item,
.adlaire-evidence-list-item {
  cursor: pointer;
}

.adlaire-exception-queue-item[data-state="blocked"],
.adlaire-defect-report-row[data-severity="high"],
.adlaire-triage-status-panel[data-state="urgent"],
.adlaire-filing-deadline-tracker[data-state="due"] {
  background-color: var(--adlaire-semantic-warning-bg);
  border-color: var(--adlaire-semantic-warning-border);
  color: var(--adlaire-semantic-warning-text);
}

.adlaire-care-plan-checklist-item[aria-checked="true"],
.adlaire-consent-record-row[data-state="signed"],
.adlaire-certification-tracker[data-state="complete"] {
  border-color: var(--adlaire-semantic-success-border);
  color: var(--adlaire-semantic-success-text);
}

.adlaire-review-privilege-badge {
  width: fit-content;
  background-color: var(--adlaire-semantic-selected-bg);
  border-color: var(--adlaire-semantic-selected-border);
  color: var(--adlaire-semantic-selected-text);
  font-weight: 700;
}

.adlaire-support-inbox,
.adlaire-ticket-priority-board,
.adlaire-escalation-path,
.adlaire-content-calendar,
.adlaire-funnel-stage-board,
.adlaire-onboarding-plan,
.adlaire-success-playbook,
.adlaire-adoption-metric-grid,
.adlaire-feedback-inbox,
.adlaire-insight-cluster,
.adlaire-feature-request-board,
.adlaire-nps-trend,
.adlaire-report-builder,
.adlaire-report-parameter-bar,
.adlaire-pivot-table,
.adlaire-scheduled-report-list {
  display: grid;
  gap: 12px;
  padding: 14px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-md);
  color: var(--adlaire-surface-text);
}

.adlaire-sla-breach-card,
.adlaire-agent-status-panel,
.adlaire-customer-sentiment-card,
.adlaire-campaign-card,
.adlaire-audience-segment-panel,
.adlaire-experiment-card,
.adlaire-attribution-summary,
.adlaire-health-score-panel,
.adlaire-renewal-risk-card,
.adlaire-qbr-summary,
.adlaire-survey-result-card,
.adlaire-user-interview-note,
.adlaire-dashboard-tile,
.adlaire-export-job-card {
  display: grid;
  gap: 8px;
  padding: 12px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-sm);
  color: var(--adlaire-surface-text);
}

.adlaire-support-inbox-item,
.adlaire-ticket-priority-item,
.adlaire-escalation-path-item,
.adlaire-content-calendar-item,
.adlaire-funnel-stage-item,
.adlaire-onboarding-plan-item,
.adlaire-success-playbook-item,
.adlaire-adoption-metric,
.adlaire-feedback-inbox-item,
.adlaire-insight-cluster-item,
.adlaire-feature-request-item,
.adlaire-nps-trend-point,
.adlaire-report-builder-section,
.adlaire-report-parameter-option,
.adlaire-pivot-table-row,
.adlaire-scheduled-report-item {
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

.adlaire-ticket-priority-board,
.adlaire-funnel-stage-board,
.adlaire-adoption-metric-grid,
.adlaire-report-parameter-bar {
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
}

.adlaire-ticket-priority-item,
.adlaire-success-playbook-item,
.adlaire-report-parameter-option {
  cursor: pointer;
}

.adlaire-ticket-priority-item[aria-selected="true"],
.adlaire-funnel-stage-item[aria-current="step"],
.adlaire-report-parameter-option[aria-pressed="true"] {
  border-color: var(--adlaire-surface-accent);
  box-shadow: var(--adlaire-shadow-focus-ring);
  color: var(--adlaire-surface-accent-strong);
}

.adlaire-sla-breach-card[data-state="breached"],
.adlaire-renewal-risk-card[data-state="risk"],
.adlaire-feature-request-item[data-state="blocked"] {
  background-color: var(--adlaire-semantic-warning-bg);
  border-color: var(--adlaire-semantic-warning-border);
  color: var(--adlaire-semantic-warning-text);
}

.adlaire-customer-sentiment-card[data-sentiment="positive"],
.adlaire-health-score-panel[data-state="healthy"],
.adlaire-success-playbook-item[aria-checked="true"],
.adlaire-export-job-card[data-state="complete"] {
  border-color: var(--adlaire-semantic-success-border);
  color: var(--adlaire-semantic-success-text);
}

.adlaire-message-composer,
.adlaire-channel-list,
.adlaire-mention-picker,
.adlaire-notification-center,
.adlaire-digest-schedule,
.adlaire-announcement-composer,
.adlaire-audience-targeting-panel,
.adlaire-publish-queue,
.adlaire-acknowledgement-tracker,
.adlaire-inbox-triage-board,
.adlaire-canned-reply-panel,
.adlaire-topic-preference-list,
.adlaire-consent-channel-matrix,
.adlaire-unsubscribe-reason-panel {
  display: grid;
  gap: 12px;
  padding: 14px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-md);
  color: var(--adlaire-surface-text);
}

.adlaire-conversation-preview,
.adlaire-message-delivery-state,
.adlaire-unread-marker,
.adlaire-notification-rule-card,
.adlaire-notification-template-card,
.adlaire-quiet-hours-panel,
.adlaire-broadcast-banner,
.adlaire-delivery-report-card,
.adlaire-response-timer-card,
.adlaire-follow-up-reminder,
.adlaire-resolution-summary,
.adlaire-opt-in-card {
  display: grid;
  gap: 8px;
  padding: 12px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-sm);
  color: var(--adlaire-surface-text);
}

.adlaire-channel-list-item,
.adlaire-mention-picker-item,
.adlaire-notification-center-item,
.adlaire-delivery-channel-row,
.adlaire-digest-schedule-item,
.adlaire-audience-targeting-item,
.adlaire-publish-queue-item,
.adlaire-acknowledgement-tracker-item,
.adlaire-inbox-triage-item,
.adlaire-inbox-assignment-row,
.adlaire-canned-reply-item,
.adlaire-subscription-plan-row,
.adlaire-topic-preference-item,
.adlaire-consent-channel-row,
.adlaire-unsubscribe-reason-item,
.adlaire-preference-audit-row {
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

.adlaire-channel-list,
.adlaire-publish-queue,
.adlaire-inbox-triage-board,
.adlaire-consent-channel-matrix {
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
}

.adlaire-channel-list-item,
.adlaire-quiet-hours-panel,
.adlaire-topic-preference-item {
  cursor: pointer;
}

.adlaire-channel-list-item[aria-selected="true"],
.adlaire-quiet-hours-panel[aria-pressed="true"],
.adlaire-topic-preference-item[aria-checked="true"] {
  border-color: var(--adlaire-surface-accent);
  box-shadow: var(--adlaire-shadow-focus-ring);
  color: var(--adlaire-surface-accent-strong);
}

.adlaire-message-delivery-state[data-state="failed"],
.adlaire-notification-rule-card[data-state="paused"],
.adlaire-response-timer-card[data-state="due"],
.adlaire-unsubscribe-reason-item[data-state="risk"] {
  background-color: var(--adlaire-semantic-warning-bg);
  border-color: var(--adlaire-semantic-warning-border);
  color: var(--adlaire-semantic-warning-text);
}

.adlaire-delivery-report-card[data-state="delivered"],
.adlaire-acknowledgement-tracker[data-state="complete"],
.adlaire-opt-in-card[data-state="enabled"],
.adlaire-resolution-summary[data-state="resolved"] {
  border-color: var(--adlaire-semantic-success-border);
  color: var(--adlaire-semantic-success-text);
}

`;
