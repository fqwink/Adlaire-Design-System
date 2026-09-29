export const COMPONENTS_OPERATIONS_BUSINESS_INSIGHTS_CSS = `.adlaire-support-inbox,
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

`;
