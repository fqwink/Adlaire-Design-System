export const COMPONENTS_FOUNDATION_DOMAINS_CSS = `.adlaire-product-card,
.adlaire-account-profile,
.adlaire-support-ticket,
.adlaire-report-card,
.adlaire-integration-card,
.adlaire-compliance-evidence {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  gap: 12px;
  align-items: center;
  padding: 14px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-lg);
}

.adlaire-product-card img,
.adlaire-account-profile img,
.adlaire-member-list img,
.adlaire-support-ticket img,
.adlaire-report-card img,
.adlaire-workflow-builder img,
.adlaire-integration-card img,
.adlaire-api-key-list img,
.adlaire-compliance-evidence img {
  width: 20px;
  height: 20px;
  flex: 0 0 auto;
}

.adlaire-product-card span,
.adlaire-account-profile span,
.adlaire-support-ticket span,
.adlaire-report-card span,
.adlaire-integration-card span,
.adlaire-compliance-evidence span {
  display: block;
  margin-top: 2px;
  color: var(--adlaire-surface-text-subtle);
  font-size: 0.875rem;
}

.adlaire-plan-selector,
.adlaire-invoice-list,
.adlaire-member-list,
.adlaire-api-key-list,
.adlaire-workflow-builder {
  display: grid;
  gap: 10px;
  margin: 0;
  padding: 12px;
  background-color: var(--adlaire-surface-soft);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-md);
  list-style: none;
}

.adlaire-plan-option,
.adlaire-invoice-list-item,
.adlaire-member-item,
.adlaire-api-key-item,
.adlaire-workflow-step {
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

.adlaire-plan-option[aria-checked="true"] {
  background-color: var(--adlaire-semantic-selected-bg);
  border-color: var(--adlaire-semantic-selected-border);
  color: var(--adlaire-surface-accent-strong);
}

.adlaire-billing-summary,
.adlaire-analytics-panel,
.adlaire-trust-center {
  display: grid;
  gap: 10px;
  padding: 16px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-lg);
}

.adlaire-billing-summary > span,
.adlaire-analytics-metric strong {
  color: var(--adlaire-surface-accent-strong);
  font-size: 1.5rem;
  font-weight: 800;
  line-height: 1.1;
}

.adlaire-role-matrix {
  display: grid;
  overflow: hidden;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-md);
}

.adlaire-role-matrix-row,
.adlaire-analytics-metric {
  display: grid;
  grid-template-columns: minmax(140px, 1fr) auto;
  gap: 12px;
  align-items: center;
  padding: 12px;
  border-bottom: 1px solid var(--adlaire-surface-border);
  color: var(--adlaire-surface-text-muted);
}

.adlaire-role-matrix-row:last-child,
.adlaire-analytics-metric:last-child {
  border-bottom: 0;
}

.adlaire-support-conversation {
  display: grid;
  gap: 10px;
  padding: 14px;
  background-color: var(--adlaire-surface-soft);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-lg);
}

.adlaire-commerce-cart,
.adlaire-checkout-summary,
.adlaire-inventory-panel,
.adlaire-review-summary,
.adlaire-shipping-tracker {
  display: grid;
  gap: 10px;
  padding: 16px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-lg);
}

.adlaire-order-card,
.adlaire-price-rule-card,
.adlaire-marketplace-listing,
.adlaire-seller-card,
.adlaire-return-request,
.adlaire-dispute-panel {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  gap: 12px;
  align-items: center;
  padding: 14px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-lg);
}

.adlaire-order-card img,
.adlaire-order-timeline img,
.adlaire-product-tile img,
.adlaire-sku-list img,
.adlaire-price-rule-card img,
.adlaire-coupon-list img,
.adlaire-marketplace-listing img,
.adlaire-seller-card img,
.adlaire-return-request img,
.adlaire-dispute-panel img,
.adlaire-commerce-cart img {
  width: 20px;
  height: 20px;
  flex: 0 0 auto;
}

.adlaire-order-card span,
.adlaire-price-rule-card span,
.adlaire-marketplace-listing span,
.adlaire-seller-card span,
.adlaire-return-request span,
.adlaire-dispute-panel span {
  display: block;
  margin-top: 2px;
  color: var(--adlaire-surface-text-subtle);
  font-size: 0.875rem;
}

.adlaire-commerce-cart-item,
.adlaire-order-timeline-item,
.adlaire-sku-list-item,
.adlaire-coupon-list-item {
  display: flex;
  gap: 10px;
  align-items: center;
  min-width: 0;
  padding: 10px 12px;
  background-color: var(--adlaire-surface-soft);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-md);
  color: var(--adlaire-surface-text-muted);
}

.adlaire-checkout-summary > span,
.adlaire-inventory-panel > span,
.adlaire-review-summary > span,
.adlaire-shipping-tracker > span {
  color: var(--adlaire-surface-accent-strong);
  font-size: 1.25rem;
  font-weight: 800;
  line-height: 1.1;
}

.adlaire-order-timeline,
.adlaire-sku-list,
.adlaire-coupon-list {
  display: grid;
  gap: 10px;
  margin: 0;
  padding: 12px;
  background-color: var(--adlaire-surface-soft);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-md);
  list-style: none;
}

.adlaire-product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 12px;
}

.adlaire-product-tile {
  display: grid;
  gap: 8px;
  min-width: 0;
  padding: 14px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-lg);
}

.adlaire-product-tile span {
  color: var(--adlaire-surface-text-subtle);
  font-size: 0.875rem;
}

.adlaire-dataset-card,
.adlaire-job-run-card,
.adlaire-model-card,
.adlaire-vector-index {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  gap: 12px;
  align-items: center;
  padding: 14px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-lg);
}

.adlaire-dataset-card img,
.adlaire-pipeline-board img,
.adlaire-job-run-card img,
.adlaire-run-queue img,
.adlaire-model-card img,
.adlaire-vector-index img,
.adlaire-anomaly-list img {
  width: 20px;
  height: 20px;
  flex: 0 0 auto;
}

.adlaire-dataset-card span,
.adlaire-job-run-card span,
.adlaire-model-card span,
.adlaire-vector-index span {
  display: block;
  margin-top: 2px;
  color: var(--adlaire-surface-text-subtle);
  font-size: 0.875rem;
}

.adlaire-query-console,
.adlaire-worker-pool,
.adlaire-prompt-panel,
.adlaire-eval-summary,
.adlaire-guardrail-panel,
.adlaire-drift-monitor,
.adlaire-data-access-panel {
  display: grid;
  gap: 10px;
  padding: 16px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-lg);
}

.adlaire-query-console code,
.adlaire-prompt-panel code {
  min-width: 0;
  overflow-x: auto;
  padding: 10px 12px;
  background-color: var(--adlaire-surface-soft);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-md);
  color: var(--adlaire-surface-text-muted);
  font-family: var(--adlaire-font-family-mono);
}

.adlaire-schema-table,
.adlaire-score-breakdown {
  display: grid;
  overflow: hidden;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-md);
}

.adlaire-schema-row,
.adlaire-score-row {
  display: grid;
  grid-template-columns: minmax(140px, 1fr) auto;
  gap: 12px;
  align-items: center;
  padding: 12px;
  border-bottom: 1px solid var(--adlaire-surface-border);
  color: var(--adlaire-surface-text-muted);
}

.adlaire-schema-row:last-child,
.adlaire-score-row:last-child {
  border-bottom: 0;
}

.adlaire-pipeline-board,
.adlaire-run-queue,
.adlaire-anomaly-list {
  display: grid;
  gap: 10px;
  margin: 0;
  padding: 12px;
  background-color: var(--adlaire-surface-soft);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-md);
  list-style: none;
}

.adlaire-pipeline-stage,
.adlaire-run-queue-item,
.adlaire-anomaly-item {
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

.adlaire-worker-pool > span,
.adlaire-eval-summary > span,
.adlaire-drift-monitor > span,
.adlaire-data-access-panel > span,
.adlaire-score-row strong {
  color: var(--adlaire-surface-accent-strong);
  font-size: 1.25rem;
  font-weight: 800;
  line-height: 1.1;
}

.adlaire-review-request-card,
.adlaire-annotation-card,
.adlaire-meeting-notes {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  gap: 12px;
  align-items: center;
  padding: 14px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-lg);
}

.adlaire-collaborator-list img,
.adlaire-review-request-card img,
.adlaire-change-request-list img,
.adlaire-annotation-card img,
.adlaire-version-history img,
.adlaire-task-board img,
.adlaire-escalation-banner img,
.adlaire-meeting-notes img {
  width: 20px;
  height: 20px;
  flex: 0 0 auto;
}

.adlaire-review-request-card span,
.adlaire-annotation-card span,
.adlaire-meeting-notes span {
  display: block;
  margin-top: 2px;
  color: var(--adlaire-surface-text-subtle);
  font-size: 0.875rem;
}

.adlaire-collaborator-list,
.adlaire-change-request-list,
.adlaire-version-history {
  display: grid;
  gap: 10px;
  margin: 0;
  padding: 12px;
  background-color: var(--adlaire-surface-soft);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-md);
  list-style: none;
}

.adlaire-collaborator-item,
.adlaire-change-request-item,
.adlaire-version-history-item,
.adlaire-task-card,
.adlaire-escalation-banner {
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

.adlaire-presence-stack {
  display: flex;
  align-items: center;
  padding: 8px;
}

.adlaire-presence-avatar {
  display: inline-flex;
  width: 32px;
  height: 32px;
  align-items: center;
  justify-content: center;
  margin-left: -6px;
  background-color: var(--adlaire-surface-accent);
  border: 2px solid var(--adlaire-surface-card);
  border-radius: var(--adlaire-radius-round);
  color: var(--adlaire-surface-card);
  font-size: 0.75rem;
  font-weight: 800;
}

.adlaire-presence-avatar:first-child {
  margin-left: 0;
}

.adlaire-review-decision,
.adlaire-suggestion-panel,
.adlaire-diff-summary,
.adlaire-checklist-panel,
.adlaire-notification-digest,
.adlaire-signoff-panel {
  display: grid;
  gap: 10px;
  padding: 16px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-lg);
}

.adlaire-review-decision > span,
.adlaire-diff-summary > span,
.adlaire-notification-digest > span,
.adlaire-signoff-panel > span {
  color: var(--adlaire-surface-accent-strong);
  font-size: 1.25rem;
  font-weight: 800;
  line-height: 1.1;
}

.adlaire-comment-thread {
  display: grid;
  gap: 10px;
  padding: 14px;
  background-color: var(--adlaire-surface-soft);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-lg);
}

.adlaire-task-board {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 12px;
  padding: 12px;
  background-color: var(--adlaire-surface-soft);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-md);
}

.adlaire-workflow-runner,
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

.adlaire-service-status-card,
.adlaire-span-detail,
.adlaire-metric-threshold-card,
.adlaire-alert-rule-card,
.adlaire-diagnostic-run-card {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  gap: 12px;
  align-items: center;
  padding: 14px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-lg);
}

.adlaire-service-status-card img,
.adlaire-log-stream img,
.adlaire-trace-timeline img,
.adlaire-span-detail img,
.adlaire-metric-threshold-card img,
.adlaire-alert-rule-card img,
.adlaire-alert-incident-list img,
.adlaire-diagnostic-run-card img {
  width: 20px;
  height: 20px;
  flex: 0 0 auto;
}

.adlaire-service-status-card span,
.adlaire-span-detail span,
.adlaire-metric-threshold-card span,
.adlaire-alert-rule-card span,
.adlaire-diagnostic-run-card span {
  display: block;
  margin-top: 2px;
  color: var(--adlaire-surface-text-subtle);
  font-size: 0.875rem;
}

.adlaire-log-stream,
.adlaire-trace-timeline,
.adlaire-alert-incident-list {
  display: grid;
  gap: 10px;
  margin: 0;
  padding: 12px;
  background-color: var(--adlaire-surface-soft);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-md);
  list-style: none;
}

.adlaire-log-event-row,
.adlaire-trace-step,
.adlaire-alert-incident-item {
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

.adlaire-health-overview,
.adlaire-uptime-panel,
.adlaire-error-rate-panel,
.adlaire-latency-distribution,
.adlaire-slo-summary,
.adlaire-remediation-panel {
  display: grid;
  gap: 10px;
  padding: 16px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-lg);
}

.adlaire-health-overview > span,
.adlaire-uptime-panel > span,
.adlaire-error-rate-panel > span,
.adlaire-latency-distribution > span,
.adlaire-slo-summary > span,
.adlaire-remediation-panel > span {
  color: var(--adlaire-surface-accent-strong);
  font-size: 1.25rem;
  font-weight: 800;
  line-height: 1.1;
}

.adlaire-dependency-map {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 12px;
  padding: 12px;
  background-color: var(--adlaire-surface-soft);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-md);
}

.adlaire-dependency-map > div {
  display: grid;
  min-height: 52px;
  place-items: center;
  padding: 12px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-md);
  color: var(--adlaire-surface-text-muted);
  font-weight: 700;
}

`;
