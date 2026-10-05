export const COMPONENTS_OPERATIONS_BUSINESS_INDUSTRY_CSS =
  `.adlaire-shipment-tracker,
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

`;
