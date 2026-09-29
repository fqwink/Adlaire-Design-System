export const COMPONENTS_OPERATIONS_ADMIN_CSS = `
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

.adlaire-admin-empty-state,
.adlaire-admin-error-state,
.adlaire-admin-loading-state,
.adlaire-admin-forbidden-state,
.adlaire-admin-incomplete-state {
  display: grid;
  justify-items: start;
  gap: 10px;
  padding: 20px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-md);
  color: var(--adlaire-surface-text-muted);
}

.adlaire-admin-empty-state {
  background-color: var(--adlaire-semantic-muted-bg);
  border-color: var(--adlaire-semantic-muted-border);
}

.adlaire-admin-error-state,
.adlaire-admin-forbidden-state {
  background-color: var(--adlaire-semantic-danger-bg);
  border-color: var(--adlaire-semantic-danger-border);
  color: var(--adlaire-semantic-danger-text);
}

.adlaire-admin-loading-state,
.adlaire-admin-incomplete-state {
  background-color: var(--adlaire-semantic-info-bg);
  border-color: var(--adlaire-semantic-info-border);
  color: var(--adlaire-semantic-info-text);
}

.adlaire-admin-state-title {
  margin: 0;
  color: inherit;
  font-size: 1rem;
  font-weight: 800;
  line-height: 1.25;
}

.adlaire-admin-state-text {
  margin: 0;
  max-width: 60ch;
  color: inherit;
  font-size: 0.875rem;
  line-height: 1.7;
}

.adlaire-admin-state-action {
  display: inline-flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
}

.adlaire-admin-action-bar,
.adlaire-admin-action-group {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-items: center;
}

.adlaire-admin-action-bar {
  justify-content: space-between;
  padding: 12px;
  background-color: var(--adlaire-surface-soft);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-sm);
}

.adlaire-admin-action-group {
  justify-content: flex-end;
}

.adlaire-admin-primary-action,
.adlaire-admin-secondary-action,
.adlaire-admin-danger-action,
.adlaire-admin-inline-action {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 34px;
  padding: 7px 12px;
  border: 1px solid transparent;
  border-radius: var(--adlaire-radius-sm);
  font-size: 0.875rem;
  font-weight: 800;
  line-height: 1.2;
  text-decoration: none;
}

.adlaire-admin-primary-action {
  background-color: var(--adlaire-surface-accent);
  border-color: var(--adlaire-surface-accent);
  color: var(--adlaire-surface-card);
}

.adlaire-admin-secondary-action {
  background-color: var(--adlaire-surface-card);
  border-color: var(--adlaire-surface-border);
  color: var(--adlaire-surface-text-muted);
}

.adlaire-admin-danger-action {
  background-color: var(--adlaire-semantic-danger-bg);
  border-color: var(--adlaire-semantic-danger-border);
  color: var(--adlaire-semantic-danger-text);
}

.adlaire-admin-inline-action {
  min-height: 28px;
  padding: 4px 0;
  background: transparent;
  border-color: transparent;
  color: var(--adlaire-surface-accent-strong);
}

.adlaire-admin-density-compact {
  gap: 8px;
  padding: 10px;
}

.adlaire-admin-density-comfortable {
  gap: 16px;
  padding: 18px;
}

.adlaire-admin-kpi-card,
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

.adlaire-admin-insight-panel,
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

.adlaire-admin-notification-center,
.adlaire-admin-broadcast-panel,
.adlaire-admin-maintenance-window,
.adlaire-admin-backup-panel,
.adlaire-admin-import-export,
.adlaire-admin-sync-status,
.adlaire-admin-env-switcher,
.adlaire-admin-feature-flag-list {
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-md);
}

.adlaire-admin-notification-center,
.adlaire-admin-backup-panel,
.adlaire-admin-import-export,
.adlaire-admin-sync-status,
.adlaire-admin-feature-flag-list {
  display: grid;
  gap: 10px;
  padding: 12px;
}

.adlaire-admin-notification-item,
.adlaire-admin-backup-item,
.adlaire-admin-import-export-job,
.adlaire-admin-feature-flag-item {
  display: grid;
  grid-template-columns: minmax(160px, 1fr) auto;
  gap: 12px;
  align-items: center;
  padding: 12px;
  background-color: var(--adlaire-surface-soft);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-sm);
}

.adlaire-admin-notification-badge,
.adlaire-admin-broadcast-scope,
.adlaire-admin-backup-status,
.adlaire-admin-import-export-status,
.adlaire-admin-sync-result,
.adlaire-admin-env-current,
.adlaire-admin-feature-flag-state {
  color: var(--adlaire-surface-accent-strong);
  font-size: 0.875rem;
  font-weight: 700;
}

.adlaire-admin-broadcast-panel,
.adlaire-admin-maintenance-window {
  display: grid;
  gap: 12px;
  padding: 16px;
}

.adlaire-admin-broadcast-message,
.adlaire-admin-maintenance-impact {
  color: var(--adlaire-surface-text-muted);
  line-height: 1.7;
}

.adlaire-admin-maintenance-time,
.adlaire-admin-sync-source {
  color: var(--adlaire-surface-text-subtle);
  font-family: var(--adlaire-font-family-mono);
  font-size: 0.875rem;
}

.adlaire-admin-env-switcher {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
  padding: 12px;
}

.adlaire-admin-env-option {
  display: inline-flex;
  align-items: center;
  padding: 7px 10px;
  background-color: var(--adlaire-surface-soft);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-sm);
  color: var(--adlaire-surface-text-muted);
}

.adlaire-admin-sync-status {
  border-left: 4px solid var(--adlaire-surface-accent);
}

.adlaire-admin-observability-panel,
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

.adlaire-admin-security-overview,
.adlaire-admin-session-list,
.adlaire-admin-device-list,
.adlaire-admin-access-request-list,
.adlaire-admin-secret-panel,
.adlaire-admin-token-scope-list,
.adlaire-admin-risk-signal,
.adlaire-admin-audit-filter {
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-md);
}

.adlaire-admin-security-overview,
.adlaire-admin-secret-panel,
.adlaire-admin-risk-signal,
.adlaire-admin-audit-filter {
  display: grid;
  gap: 12px;
  padding: 16px;
}

.adlaire-admin-session-list,
.adlaire-admin-device-list,
.adlaire-admin-access-request-list,
.adlaire-admin-token-scope-list {
  display: grid;
  gap: 10px;
  padding: 12px;
}

.adlaire-admin-session-item,
.adlaire-admin-device-item,
.adlaire-admin-access-request-item,
.adlaire-admin-secret-item,
.adlaire-admin-token-scope-item,
.adlaire-admin-risk-signal-item {
  display: grid;
  grid-template-columns: minmax(160px, 1fr) auto;
  gap: 12px;
  align-items: center;
  padding: 12px;
  background-color: var(--adlaire-surface-soft);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-sm);
}

.adlaire-admin-security-score {
  color: var(--adlaire-surface-accent-strong);
  font-size: 1.5rem;
  font-weight: 800;
  line-height: 1.1;
}

.adlaire-admin-security-state,
.adlaire-admin-session-state,
.adlaire-admin-device-trust,
.adlaire-admin-access-request-state,
.adlaire-admin-token-scope-level,
.adlaire-admin-risk-level {
  color: var(--adlaire-surface-accent-strong);
  font-size: 0.875rem;
  font-weight: 700;
}

.adlaire-admin-secret-expiry {
  color: var(--adlaire-surface-text-subtle);
  font-family: var(--adlaire-font-family-mono);
  font-size: 0.875rem;
}

.adlaire-admin-audit-filter-group {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
}

.adlaire-admin-audit-filter-chip {
  display: inline-flex;
  align-items: center;
  padding: 6px 10px;
  background-color: var(--adlaire-surface-soft);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-sm);
  color: var(--adlaire-surface-text-muted);
  font-size: 0.875rem;
  font-weight: 700;
}

`;
