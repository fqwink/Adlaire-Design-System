export const COMPONENTS_OPERATIONS_INDUSTRY_CIVIC_CSS =
  `.adlaire-eligibility-checklist,
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

`;
