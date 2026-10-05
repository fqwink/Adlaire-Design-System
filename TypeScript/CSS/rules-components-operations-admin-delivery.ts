export const COMPONENTS_OPERATIONS_ADMIN_DELIVERY_CSS =
  `.adlaire-admin-insight-panel,
.adlaire-admin-health-check,
.adlaire-admin-task-board,
.adlaire-admin-incident-panel,
.adlaire-admin-release-panel,
.adlaire-admin-quota-meter,
.adlaire-admin-api-key-list,
.adlaire-admin-webhook-list {
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-md);
}

.adlaire-admin-insight-panel,
.adlaire-admin-incident-panel,
.adlaire-admin-release-panel,
.adlaire-admin-quota-meter {
  display: grid;
  gap: 12px;
  padding: 16px;
}

.adlaire-admin-insight-title,
.adlaire-admin-release-version,
.adlaire-admin-incident-severity,
.adlaire-admin-health-status,
.adlaire-admin-webhook-status {
  color: var(--adlaire-surface-accent-strong);
  font-weight: 700;
}

.adlaire-admin-insight-body,
.adlaire-admin-incident-update,
.adlaire-admin-release-check {
  color: var(--adlaire-surface-text-muted);
  line-height: 1.7;
}

.adlaire-admin-health-check,
.adlaire-admin-api-key-list,
.adlaire-admin-webhook-list {
  display: grid;
  gap: 10px;
  padding: 12px;
}

.adlaire-admin-health-item,
.adlaire-admin-api-key-item,
.adlaire-admin-webhook-item {
  display: grid;
  grid-template-columns: minmax(140px, 1fr) auto;
  gap: 12px;
  align-items: center;
  padding: 12px;
  background-color: var(--adlaire-surface-soft);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-sm);
}

.adlaire-admin-task-board {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 12px;
  padding: 12px;
}

.adlaire-admin-task-column {
  display: grid;
  gap: 10px;
  align-content: start;
  padding: 12px;
  background-color: var(--adlaire-surface-soft);
  border-radius: var(--adlaire-radius-sm);
}

.adlaire-admin-task-card {
  padding: 12px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-sm);
}

.adlaire-admin-quota-bar {
  overflow: hidden;
  height: 10px;
  background-color: var(--adlaire-surface-soft);
  border-radius: var(--adlaire-radius-round);
}

.adlaire-admin-quota-bar::before {
  display: block;
  width: 66%;
  height: 100%;
  background-color: var(--adlaire-surface-accent);
  content: "";
}

.adlaire-admin-quota-value,
.adlaire-admin-api-key-token {
  color: var(--adlaire-surface-text-subtle);
  font-family: var(--adlaire-font-family-mono);
  font-size: 0.875rem;
}

`;
