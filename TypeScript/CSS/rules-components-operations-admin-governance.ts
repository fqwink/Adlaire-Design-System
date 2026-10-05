export const COMPONENTS_OPERATIONS_ADMIN_GOVERNANCE_CSS =
  `.adlaire-admin-kpi-card,
.adlaire-admin-resource-header,
.adlaire-admin-data-toolbar,
.adlaire-admin-selection-summary,
.adlaire-admin-approval-panel,
.adlaire-admin-permission-matrix,
.adlaire-admin-review-queue,
.adlaire-admin-status-board {
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-md);
}

.adlaire-admin-kpi-card {
  display: grid;
  gap: 8px;
  padding: 18px;
}

.adlaire-admin-kpi-value {
  color: var(--adlaire-surface-accent-strong);
  font-size: 1.75rem;
  font-weight: 800;
  line-height: 1.1;
}

.adlaire-admin-kpi-label,
.adlaire-admin-resource-meta,
.adlaire-admin-kpi-trend {
  color: var(--adlaire-surface-text-subtle);
  font-size: 0.875rem;
}

.adlaire-admin-kpi-trend {
  font-weight: 700;
}

.adlaire-admin-resource-header,
.adlaire-admin-data-toolbar,
.adlaire-admin-selection-summary {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
}

.adlaire-admin-resource-meta,
.adlaire-admin-resource-actions,
.adlaire-admin-toolbar-filter,
.adlaire-admin-toolbar-actions,
.adlaire-admin-selection-actions {
  display: inline-flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
}

.adlaire-admin-selection-summary {
  background-color: var(--adlaire-surface-soft);
}

.adlaire-admin-selection-count,
.adlaire-admin-review-priority {
  color: var(--adlaire-surface-accent-strong);
  font-weight: 700;
}

.adlaire-admin-approval-panel,
.adlaire-admin-review-queue {
  display: grid;
  gap: 12px;
  padding: 16px;
}

.adlaire-admin-approval-step,
.adlaire-admin-review-item,
.adlaire-admin-status-card {
  padding: 12px;
  background-color: var(--adlaire-surface-soft);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-sm);
}

.adlaire-admin-approval-current {
  border-color: var(--adlaire-surface-accent);
  box-shadow: var(--adlaire-shadow-focus-ring);
}

.adlaire-admin-permission-matrix {
  display: grid;
  overflow: auto;
}

.adlaire-admin-permission-row {
  display: grid;
  grid-template-columns: minmax(160px, 1.5fr) repeat(3, minmax(120px, 1fr));
  min-width: 560px;
  border-bottom: 1px solid var(--adlaire-surface-border);
}

.adlaire-admin-permission-cell {
  padding: 10px 12px;
  color: var(--adlaire-surface-text-muted);
}

.adlaire-admin-status-board {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 12px;
  padding: 12px;
}

.adlaire-admin-status-column {
  display: grid;
  gap: 10px;
  align-content: start;
  padding: 12px;
  background-color: var(--adlaire-surface-soft);
  border-radius: var(--adlaire-radius-sm);
}

`;
