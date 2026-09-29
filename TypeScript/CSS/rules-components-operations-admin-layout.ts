export const COMPONENTS_OPERATIONS_ADMIN_LAYOUT_CSS = `
.adlaire-admin-layout {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(220px, 320px);
  gap: 24px;
  align-items: start;
}

.adlaire-admin-main,
.adlaire-admin-aside {
  min-width: 0;
}

.adlaire-admin-aside {
  display: grid;
  gap: 12px;
  align-content: start;
}

.adlaire-admin-panel-grid,
.adlaire-admin-dashboard-grid {
  display: grid;
  gap: 16px;
}

.adlaire-admin-panel-grid {
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
}

.adlaire-admin-dashboard-grid {
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
}

.adlaire-admin-form-layout,
.adlaire-admin-detail-layout {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(220px, 300px);
  gap: 20px;
  align-items: start;
}

.adlaire-admin-dashboard,
.adlaire-admin-settings,
.adlaire-admin-data-list,
.adlaire-admin-bulk-action {
  display: grid;
  gap: 16px;
}

.adlaire-admin-dashboard {
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
}

.adlaire-admin-settings,
.adlaire-admin-data-list {
  padding: 18px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-md);
}

.adlaire-admin-bulk-action {
  grid-template-columns: minmax(0, 1fr) auto;
  align-items: center;
  padding: 12px 14px;
  background-color: var(--adlaire-surface-soft);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-sm);
}

.adlaire-admin-role,
.adlaire-permission,
.adlaire-role,
.adlaire-scope {
  display: inline-flex;
  gap: 6px;
  align-items: center;
  padding: 5px 9px;
  background-color: var(--adlaire-surface-soft);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-sm);
  color: var(--adlaire-surface-accent-strong);
  font-size: 0.875rem;
  font-weight: 700;
}

.adlaire-admin-section {
  display: grid;
  gap: 16px;
}

.adlaire-admin-section-header,
.adlaire-admin-card-header,
.adlaire-admin-state-row {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-items: center;
  justify-content: space-between;
}

.adlaire-admin-section-header {
  padding-bottom: 10px;
  border-bottom: 1px solid var(--adlaire-surface-border);
}

.adlaire-admin-section-title,
.adlaire-admin-card-title {
  margin: 0;
  color: var(--adlaire-surface-text);
  font-weight: 800;
  line-height: 1.2;
}

.adlaire-admin-section-title {
  font-size: 1.125rem;
}

.adlaire-admin-card-title {
  font-size: 1rem;
}

.adlaire-admin-section-text,
.adlaire-admin-card-meta,
.adlaire-admin-state-label {
  color: var(--adlaire-surface-text-subtle);
  font-size: 0.875rem;
}

.adlaire-admin-card-header {
  min-height: 32px;
}

.adlaire-admin-card-actions {
  display: inline-flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
}

.adlaire-admin-state-row {
  padding: 10px 0;
  border-bottom: 1px solid var(--adlaire-surface-border);
}

.adlaire-admin-state-row:last-child {
  border-bottom: 0;
}

.adlaire-admin-state-value {
  color: var(--adlaire-surface-accent-strong);
  font-size: 0.875rem;
  font-weight: 800;
}

.adlaire-admin-state-badge {
  display: inline-flex;
  gap: 6px;
  align-items: center;
  justify-content: center;
  min-height: 28px;
  padding: 5px 9px;
  border: 1px solid var(--adlaire-semantic-muted-border);
  border-radius: var(--adlaire-radius-sm);
  background-color: var(--adlaire-semantic-muted-bg);
  color: var(--adlaire-semantic-muted-text);
  font-size: 0.8125rem;
  font-weight: 800;
  line-height: 1.2;
}

.adlaire-admin-state-success {
  background-color: var(--adlaire-semantic-success-bg);
  border-color: var(--adlaire-semantic-success-border);
  color: var(--adlaire-semantic-success-text);
}

.adlaire-admin-state-warning {
  background-color: var(--adlaire-semantic-warning-bg);
  border-color: var(--adlaire-semantic-warning-border);
  color: var(--adlaire-semantic-warning-text);
}

.adlaire-admin-state-danger {
  background-color: var(--adlaire-semantic-danger-bg);
  border-color: var(--adlaire-semantic-danger-border);
  color: var(--adlaire-semantic-danger-text);
}

.adlaire-admin-state-info {
  background-color: var(--adlaire-semantic-info-bg);
  border-color: var(--adlaire-semantic-info-border);
  color: var(--adlaire-semantic-info-text);
}

.adlaire-admin-state-neutral {
  background-color: var(--adlaire-semantic-muted-bg);
  border-color: var(--adlaire-semantic-muted-border);
  color: var(--adlaire-semantic-muted-text);
}

`;
