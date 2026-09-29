export const COMPONENTS_OPERATIONS_BUSINESS_ENTERPRISE_CSS = `.adlaire-budget-panel,
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

`;
