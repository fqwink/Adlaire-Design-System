export const COMPONENTS_OPERATIONS_ADMIN_OBSERVABILITY_CSS =
  `.adlaire-admin-observability-panel,
.adlaire-admin-log-stream,
.adlaire-admin-alert-rule-list,
.adlaire-admin-cost-summary,
.adlaire-admin-usage-breakdown,
.adlaire-admin-retention-panel,
.adlaire-admin-compliance-checklist,
.adlaire-admin-policy-panel {
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-md);
}

.adlaire-admin-observability-panel,
.adlaire-admin-cost-summary,
.adlaire-admin-retention-panel,
.adlaire-admin-policy-panel {
  display: grid;
  gap: 12px;
  padding: 16px;
}

.adlaire-admin-log-stream,
.adlaire-admin-alert-rule-list,
.adlaire-admin-usage-breakdown,
.adlaire-admin-compliance-checklist {
  display: grid;
  gap: 10px;
  padding: 12px;
}

.adlaire-admin-observability-metric,
.adlaire-admin-log-line,
.adlaire-admin-alert-rule-item,
.adlaire-admin-usage-row,
.adlaire-admin-retention-rule,
.adlaire-admin-compliance-item,
.adlaire-admin-policy-rule {
  display: grid;
  grid-template-columns: minmax(160px, 1fr) auto;
  gap: 12px;
  align-items: center;
  padding: 12px;
  background-color: var(--adlaire-surface-soft);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-sm);
}

.adlaire-admin-observability-state,
.adlaire-admin-alert-rule-state,
.adlaire-admin-cost-delta,
.adlaire-admin-compliance-state,
.adlaire-admin-policy-state {
  color: var(--adlaire-surface-accent-strong);
  font-size: 0.875rem;
  font-weight: 700;
}

.adlaire-admin-log-level,
.adlaire-admin-usage-value,
.adlaire-admin-retention-period {
  color: var(--adlaire-surface-text-subtle);
  font-family: var(--adlaire-font-family-mono);
  font-size: 0.875rem;
}

.adlaire-admin-cost-value {
  color: var(--adlaire-surface-accent-strong);
  font-size: 1.5rem;
  font-weight: 800;
  line-height: 1.1;
}

.adlaire-admin-log-stream {
  overflow: auto;
  max-height: 320px;
}

`;
