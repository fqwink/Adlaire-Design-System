export const COMPONENTS_FOUNDATION_DOMAINS_WORKFLOW_CSS =
  `.adlaire-workflow-runner,
.adlaire-automation-rule-card,
.adlaire-policy-card,
.adlaire-evidence-locker,
.adlaire-incident-summary {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  gap: 12px;
  align-items: center;
  padding: 14px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-lg);
}

.adlaire-workflow-runner img,
.adlaire-automation-rule-card img,
.adlaire-trigger-list img,
.adlaire-action-chain img,
.adlaire-policy-card img,
.adlaire-evidence-locker img,
.adlaire-risk-banner img,
.adlaire-audit-event-stream img,
.adlaire-incident-summary img {
  width: 20px;
  height: 20px;
  flex: 0 0 auto;
}

.adlaire-workflow-runner span,
.adlaire-automation-rule-card span,
.adlaire-policy-card span,
.adlaire-evidence-locker span,
.adlaire-incident-summary span {
  display: block;
  margin-top: 2px;
  color: var(--adlaire-surface-text-subtle);
  font-size: 0.875rem;
}

.adlaire-trigger-list,
.adlaire-action-chain,
.adlaire-approval-route,
.adlaire-audit-event-stream {
  display: grid;
  gap: 10px;
  margin: 0;
  padding: 12px;
  background-color: var(--adlaire-surface-soft);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-md);
  list-style: none;
}

.adlaire-trigger-item,
.adlaire-action-chain-item,
.adlaire-approval-route-item,
.adlaire-audit-event-item,
.adlaire-risk-banner {
  display: flex;
  gap: 10px;
  align-items: center;
  min-width: 0;
  padding: 10px 12px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-md);
  color: var(--adlaire-surface-text-muted);
}

.adlaire-condition-builder,
.adlaire-schedule-panel,
.adlaire-compliance-checklist,
.adlaire-access-review-panel,
.adlaire-retention-policy-panel {
  display: grid;
  gap: 10px;
  padding: 16px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-lg);
}

.adlaire-condition-builder > span,
.adlaire-schedule-panel > span,
.adlaire-access-review-panel > span,
.adlaire-retention-policy-panel > span {
  color: var(--adlaire-surface-accent-strong);
  font-size: 1.25rem;
  font-weight: 800;
  line-height: 1.1;
}

.adlaire-control-status-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 12px;
  padding: 12px;
  background-color: var(--adlaire-surface-soft);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-md);
}

.adlaire-control-status-grid > div {
  display: grid;
  gap: 4px;
  padding: 12px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-md);
}

.adlaire-control-status-grid strong {
  color: var(--adlaire-surface-accent-strong);
  font-size: 1.25rem;
  line-height: 1.1;
}

.adlaire-control-status-grid span {
  color: var(--adlaire-surface-text-subtle);
  font-size: 0.875rem;
}

`;
