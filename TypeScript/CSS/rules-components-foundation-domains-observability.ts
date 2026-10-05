export const COMPONENTS_FOUNDATION_DOMAINS_OBSERVABILITY_CSS =
  `.adlaire-service-status-card,
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
