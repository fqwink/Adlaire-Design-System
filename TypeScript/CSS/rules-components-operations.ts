export const COMPONENTS_OPERATIONS_CSS = `
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

.adlaire-language-switcher,
.adlaire-language-current,
.adlaire-language-list,
.adlaire-language-option {
  display: flex;
  gap: 8px;
  align-items: center;
}

.adlaire-language-switcher {
  position: relative;
}

.adlaire-language-list {
  flex-direction: column;
  min-width: 180px;
  padding: 8px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-md);
  box-shadow: var(--adlaire-shadow-card-hover);
}

.adlaire-language-option {
  width: 100%;
  padding: 8px 10px;
  border-radius: var(--adlaire-radius-sm);
  color: var(--adlaire-surface-text);
}

.adlaire-language-option[aria-current="true"],
.adlaire-language-option:hover {
  background-color: var(--adlaire-surface-soft);
  color: var(--adlaire-surface-accent);
}

.adlaire-table-toolbar,
.adlaire-table-footer,
.adlaire-pagination,
.adlaire-page-list {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-items: center;
}

.adlaire-table-toolbar,
.adlaire-table-footer {
  justify-content: space-between;
  margin-bottom: 12px;
}

.adlaire-pagination {
  justify-content: center;
}

.adlaire-page-list {
  margin: 0;
  padding: 0;
  list-style: none;
}

.adlaire-page-link,
.adlaire-page-current {
  display: inline-flex;
  min-width: 36px;
  min-height: 36px;
  align-items: center;
  justify-content: center;
  padding: 8px 10px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-sm);
  color: var(--adlaire-surface-text);
  font-weight: 600;
}

.adlaire-page-current,
.adlaire-page-link[aria-current="page"] {
  background-color: var(--adlaire-surface-accent);
  border-color: var(--adlaire-surface-accent);
  color: var(--adlaire-surface-card);
}

.adlaire-modal,
.adlaire-confirm-dialog,
.adlaire-notice-dialog,
.adlaire-drawer {
  position: fixed;
  inset: 0;
  z-index: var(--adlaire-layer-modal);
  display: none;
  padding: 24px;
  background-color: var(--adlaire-overlay-black-48);
}

.adlaire-modal.is-open,
.adlaire-confirm-dialog.is-open,
.adlaire-notice-dialog.is-open,
.adlaire-drawer.is-open {
  display: grid;
  place-items: center;
}

.adlaire-modal-dialog,
.adlaire-confirm-dialog-panel,
.adlaire-notice-dialog-panel,
.adlaire-drawer-panel {
  width: min(100%, 640px);
  max-height: min(720px, 90vh);
  overflow: auto;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-lg);
  box-shadow: var(--adlaire-shadow-card-hover);
}

.adlaire-drawer {
  justify-items: end;
}

.adlaire-drawer-panel {
  height: 100%;
  border-radius: var(--adlaire-radius-lg) 0 0 var(--adlaire-radius-lg);
}

.adlaire-filter-panel,
.adlaire-filter-row,
.adlaire-saved-filter-list {
  display: grid;
  gap: 12px;
}

.adlaire-filter-panel {
  padding: 16px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-md);
}

.adlaire-filter-row {
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
}

.adlaire-saved-filter-item {
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: space-between;
  padding: 10px 12px;
  background-color: var(--adlaire-surface-soft);
  border-radius: var(--adlaire-radius-sm);
}

.adlaire-search-box,
.adlaire-search-results,
.adlaire-command-palette,
.adlaire-omnibar {
  display: grid;
  gap: 10px;
}

.adlaire-search-box,
.adlaire-command-palette,
.adlaire-omnibar {
  padding: 12px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-md);
}

.adlaire-search-input,
.adlaire-command-input,
.adlaire-omnibar-input {
  width: 100%;
  padding: 10px 12px;
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-sm);
}

.adlaire-command-item,
.adlaire-omnibar-result,
.adlaire-search-result {
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: space-between;
  padding: 10px 12px;
  border-radius: var(--adlaire-radius-sm);
  color: var(--adlaire-surface-text);
}

.adlaire-command-item[aria-selected="true"],
.adlaire-command-item:hover,
.adlaire-omnibar-result[aria-selected="true"],
.adlaire-omnibar-result:hover,
.adlaire-search-result:hover {
  background-color: var(--adlaire-surface-soft);
  color: var(--adlaire-surface-accent);
}

.adlaire-command-shortcut {
  color: var(--adlaire-surface-text-subtle);
  font-family: var(--adlaire-font-family-mono);
  font-size: 0.75rem;
}

.adlaire-omnibar-empty {
  padding: 12px;
  color: var(--adlaire-surface-text-subtle);
}

.adlaire-tree-view,
.adlaire-tree-list,
.adlaire-tree-branch {
  display: grid;
  gap: 6px;
}

.adlaire-tree-view {
  padding: 12px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-md);
}

.adlaire-tree-list,
.adlaire-tree-branch {
  margin: 0;
  padding: 0;
  list-style: none;
}

.adlaire-tree-branch {
  padding-left: 18px;
  border-left: 1px solid var(--adlaire-surface-border);
}

.adlaire-tree-branch[hidden] {
  display: none;
}

.adlaire-tree-item {
  display: grid;
  gap: 6px;
}

.adlaire-tree-row,
.adlaire-tree-toggle {
  display: flex;
  gap: 8px;
  align-items: center;
}

.adlaire-tree-row {
  min-height: 34px;
  padding: 6px 8px;
  border-radius: var(--adlaire-radius-sm);
  color: var(--adlaire-surface-text);
}

.adlaire-tree-row:hover,
.adlaire-tree-row[aria-current="true"] {
  background-color: var(--adlaire-surface-soft);
  color: var(--adlaire-surface-accent-strong);
}

.adlaire-tree-toggle {
  min-width: 28px;
  min-height: 28px;
  justify-content: center;
  padding: 0;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-sm);
  color: var(--adlaire-surface-text-muted);
  cursor: pointer;
}

.adlaire-tree-toggle:hover,
.adlaire-tree-toggle:focus-visible,
.adlaire-tree-toggle[aria-expanded="true"] {
  border-color: var(--adlaire-surface-accent);
  box-shadow: var(--adlaire-shadow-focus-ring);
  color: var(--adlaire-surface-accent);
  outline: 0;
}

.adlaire-data-grid,
.adlaire-column-manager,
.adlaire-saved-view-bar {
  display: grid;
  gap: 10px;
}

.adlaire-data-grid {
  overflow: hidden;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-md);
}

.adlaire-data-grid-toolbar,
.adlaire-data-grid-footer,
.adlaire-saved-view-bar {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
  justify-content: space-between;
  padding: 10px 12px;
  background-color: var(--adlaire-surface-soft);
  border-bottom: 1px solid var(--adlaire-surface-border);
}

.adlaire-data-grid-footer {
  border-top: 1px solid var(--adlaire-surface-border);
  border-bottom: 0;
}

.adlaire-data-grid-scroll {
  overflow: auto;
}

.adlaire-data-grid-table {
  width: 100%;
  border-collapse: collapse;
}

.adlaire-data-grid-table th,
.adlaire-data-grid-table td {
  padding: 10px 12px;
  border-bottom: 1px solid var(--adlaire-surface-border);
  color: var(--adlaire-surface-text);
  text-align: left;
  white-space: nowrap;
}

.adlaire-data-grid-table th {
  background-color: var(--adlaire-surface-soft);
  color: var(--adlaire-surface-accent-strong);
  font-size: 0.875rem;
  font-weight: 800;
}

.adlaire-data-grid-row-selected,
.adlaire-data-grid-table tr[aria-selected="true"] {
  background-color: var(--adlaire-semantic-selected-bg);
}

.adlaire-column-manager {
  padding: 12px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-md);
}

.adlaire-column-manager-item,
.adlaire-saved-view {
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: space-between;
  padding: 8px 10px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-sm);
}

.adlaire-property-inspector {
  display: grid;
  gap: 12px;
  padding: 14px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-md);
}

.adlaire-property-section {
  display: grid;
  gap: 8px;
}

.adlaire-property-row {
  display: grid;
  grid-template-columns: minmax(110px, 0.8fr) minmax(0, 1fr);
  gap: 10px;
  align-items: center;
  padding: 8px 0;
  border-bottom: 1px solid var(--adlaire-surface-border);
}

.adlaire-property-row:last-child {
  border-bottom: 0;
}

.adlaire-property-name {
  color: var(--adlaire-surface-text-subtle);
  font-size: 0.875rem;
  font-weight: 800;
}

.adlaire-property-value {
  color: var(--adlaire-surface-text);
}

.adlaire-token-swatch,
.adlaire-component-preview,
.adlaire-component-state-matrix,
.adlaire-anatomy-panel,
.adlaire-a11y-checklist,
.adlaire-keyboard-map {
  display: grid;
  gap: 10px;
  padding: 14px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-md);
}

.adlaire-token-swatch {
  grid-template-columns: auto minmax(0, 1fr);
  align-items: center;
}

.adlaire-token-swatch-color {
  width: 44px;
  height: 44px;
  background-color: var(--adlaire-token-swatch-color, var(--adlaire-surface-accent));
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-md);
  box-shadow: var(--adlaire-shadow-marker-ring);
}

.adlaire-token-swatch-meta,
.adlaire-component-preview-meta,
.adlaire-anatomy-panel-meta {
  color: var(--adlaire-surface-text-subtle);
  font-size: 0.875rem;
}

.adlaire-component-preview-frame {
  display: grid;
  min-height: 140px;
  place-items: center;
  padding: 18px;
  background-color: var(--adlaire-surface-soft);
  border: 1px dashed var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-md);
}

.adlaire-component-state-matrix {
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
}

.adlaire-component-state-cell,
.adlaire-a11y-checklist-item,
.adlaire-keyboard-map-row {
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: space-between;
  padding: 8px 10px;
  background-color: var(--adlaire-surface-soft);
  border-radius: var(--adlaire-radius-sm);
}

.adlaire-anatomy-panel-list,
.adlaire-a11y-checklist,
.adlaire-keyboard-map {
  margin: 0;
  list-style: none;
}

.adlaire-bottom-sheet {
  position: fixed;
  inset: 0;
  z-index: var(--adlaire-layer-modal);
  display: none;
  align-items: end;
  padding: 0;
  background-color: var(--adlaire-overlay-black-48);
}

.adlaire-bottom-sheet.is-open {
  display: grid;
}

.adlaire-bottom-sheet-panel {
  display: grid;
  width: 100%;
  max-height: min(720px, 82vh);
  grid-template-rows: auto minmax(0, 1fr) auto;
  overflow: auto;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-bottom: 0;
  border-radius: var(--adlaire-radius-lg) var(--adlaire-radius-lg) 0 0;
  box-shadow: var(--adlaire-shadow-card-hover);
}

.adlaire-bottom-sheet-header,
.adlaire-bottom-sheet-footer {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-items: center;
  justify-content: space-between;
  padding: 14px 16px;
  border-bottom: 1px solid var(--adlaire-surface-border);
}

.adlaire-bottom-sheet-footer {
  border-top: 1px solid var(--adlaire-surface-border);
  border-bottom: 0;
}

.adlaire-bottom-sheet-body {
  display: grid;
  gap: 12px;
  padding: 16px;
  color: var(--adlaire-surface-text-muted);
}

.adlaire-tab-workspace,
.adlaire-dock-panel,
.adlaire-context-menu,
.adlaire-quick-action-list,
.adlaire-kanban-board,
.adlaire-asset-browser,
.adlaire-document-outline,
.adlaire-comment-resolver,
.adlaire-publication-checklist {
  display: grid;
  gap: 12px;
  padding: 14px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-md);
  color: var(--adlaire-surface-text);
}

.adlaire-tab-workspace-list {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
  border-bottom: 1px solid var(--adlaire-surface-border);
}

.adlaire-tab-workspace-tab {
  padding: 8px 12px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-bottom: 0;
  border-radius: var(--adlaire-radius-sm) var(--adlaire-radius-sm) 0 0;
  color: var(--adlaire-surface-text-muted);
  cursor: pointer;
}

.adlaire-tab-workspace-tab[aria-selected="true"],
.adlaire-tab-workspace-tab:hover,
.adlaire-tab-workspace-tab:focus-visible {
  background-color: var(--adlaire-surface-soft);
  border-color: var(--adlaire-surface-accent);
  box-shadow: var(--adlaire-shadow-focus-ring);
  color: var(--adlaire-surface-accent-strong);
  outline: 0;
}

.adlaire-tab-workspace-panel {
  display: grid;
  gap: 10px;
  padding: 14px;
  background-color: var(--adlaire-surface-soft);
  border-radius: var(--adlaire-radius-sm);
}

.adlaire-tab-workspace-panel[hidden],
.adlaire-context-menu[hidden],
.adlaire-overflow-toolbar-menu[hidden] {
  display: none;
}

.adlaire-dock-panel {
  padding: 0;
  overflow: hidden;
}

.adlaire-dock-panel-header,
.adlaire-status-bar,
.adlaire-swimlane-header,
.adlaire-lane-summary {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
  justify-content: space-between;
  padding: 10px 12px;
  background-color: var(--adlaire-surface-soft);
  border-bottom: 1px solid var(--adlaire-surface-border);
}

.adlaire-dock-panel-body {
  display: grid;
  gap: 10px;
  padding: 12px;
}

.adlaire-dock-panel.is-collapsed .adlaire-dock-panel-body {
  display: none;
}

.adlaire-panel-rail {
  display: inline-flex;
  gap: 6px;
  align-items: center;
  padding: 6px;
  background-color: var(--adlaire-surface-soft);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-lg);
}

.adlaire-panel-rail-item {
  display: inline-flex;
  min-width: 36px;
  min-height: 36px;
  align-items: center;
  justify-content: center;
  padding: 0 10px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-md);
  color: var(--adlaire-surface-text-muted);
}

.adlaire-panel-rail-item[aria-current="true"],
.adlaire-panel-rail-item:hover,
.adlaire-panel-rail-item:focus-visible {
  border-color: var(--adlaire-surface-accent);
  box-shadow: var(--adlaire-shadow-focus-ring);
  color: var(--adlaire-surface-accent);
  outline: 0;
}

.adlaire-status-bar {
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-sm);
  color: var(--adlaire-surface-text-subtle);
  font-size: 0.875rem;
}

.adlaire-context-menu {
  gap: 4px;
  min-width: 220px;
  padding: 8px;
  box-shadow: var(--adlaire-shadow-card-hover);
}

.adlaire-context-menu-item,
.adlaire-quick-action-item {
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: space-between;
  padding: 8px 10px;
  background-color: var(--adlaire-surface-card);
  border: 0;
  border-radius: var(--adlaire-radius-sm);
  color: var(--adlaire-surface-text);
  cursor: pointer;
  text-align: left;
}

.adlaire-context-menu-item:hover,
.adlaire-context-menu-item:focus-visible,
.adlaire-quick-action-item:hover,
.adlaire-quick-action-item:focus-visible {
  background-color: var(--adlaire-surface-soft);
  color: var(--adlaire-surface-accent);
  outline: 0;
}

.adlaire-split-button,
.adlaire-overflow-toolbar {
  display: inline-flex;
  position: relative;
  flex-wrap: wrap;
  gap: 0;
  align-items: center;
}

.adlaire-split-button-primary,
.adlaire-split-button-toggle,
.adlaire-overflow-toolbar-button {
  min-height: 38px;
  padding: 8px 12px;
  background-color: var(--adlaire-surface-accent);
  border: 1px solid var(--adlaire-surface-accent);
  color: var(--adlaire-surface-card);
  cursor: pointer;
}

.adlaire-split-button-primary {
  border-radius: var(--adlaire-radius-sm) 0 0 var(--adlaire-radius-sm);
}

.adlaire-split-button-toggle {
  border-left-color: var(--adlaire-surface-card);
  border-radius: 0 var(--adlaire-radius-sm) var(--adlaire-radius-sm) 0;
}

.adlaire-overflow-toolbar {
  gap: 8px;
  padding: 8px;
  background-color: var(--adlaire-surface-soft);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-md);
}

.adlaire-overflow-toolbar-menu {
  display: grid;
  gap: 4px;
  padding: 8px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-sm);
  box-shadow: var(--adlaire-shadow-card);
}

.adlaire-quick-action-list {
  gap: 6px;
  padding: 8px;
}

.adlaire-kanban-board {
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  align-items: start;
}

.adlaire-swimlane {
  display: grid;
  gap: 10px;
  min-width: 0;
  padding: 10px;
  background-color: var(--adlaire-surface-soft);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-md);
}

.adlaire-swimlane-header,
.adlaire-lane-summary {
  padding: 0 0 8px;
  background-color: transparent;
}

.adlaire-lane-summary {
  border-top: 1px solid var(--adlaire-surface-border);
  border-bottom: 0;
  padding-top: 8px;
  color: var(--adlaire-surface-text-subtle);
  font-size: 0.875rem;
}

.adlaire-board-card {
  display: grid;
  gap: 8px;
  padding: 12px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-sm);
  box-shadow: var(--adlaire-shadow-card);
}

.adlaire-board-card-dragging {
  border-color: var(--adlaire-surface-accent);
  box-shadow: var(--adlaire-shadow-card-hover);
}

.adlaire-sparkline,
.adlaire-gauge,
.adlaire-heatmap,
.adlaire-distribution-bar,
.adlaire-status-meter {
  display: grid;
  gap: 8px;
  padding: 12px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-md);
}

.adlaire-sparkline svg {
  width: 100%;
  height: 48px;
  color: var(--adlaire-surface-accent);
}

.adlaire-gauge {
  place-items: center;
}

.adlaire-gauge-value {
  display: grid;
  width: 96px;
  height: 96px;
  place-items: center;
  background: conic-gradient(var(--adlaire-surface-accent) 0 70%, var(--adlaire-surface-soft) 70% 100%);
  border-radius: var(--adlaire-radius-round);
  color: var(--adlaire-surface-card);
  font-weight: 800;
}

.adlaire-heatmap {
  grid-template-columns: repeat(5, minmax(0, 1fr));
}

.adlaire-heatmap-cell {
  min-height: 36px;
  background-color: var(--adlaire-surface-soft);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-sm);
}

.adlaire-heatmap-cell[data-level="2"] {
  background-color: var(--adlaire-semantic-info-bg);
  border-color: var(--adlaire-semantic-info-border);
}

.adlaire-heatmap-cell[data-level="3"] {
  background-color: var(--adlaire-semantic-success-bg);
  border-color: var(--adlaire-semantic-success-border);
}

.adlaire-distribution-bar {
  display: flex;
  flex-direction: row;
  gap: 4px;
}

.adlaire-distribution-segment {
  min-height: 16px;
  flex: 1 1 0;
  background-color: var(--adlaire-surface-accent);
  border-radius: var(--adlaire-radius-sm);
}

.adlaire-distribution-segment:nth-child(2) {
  background-color: var(--adlaire-semantic-info-color);
}

.adlaire-distribution-segment:nth-child(3) {
  background-color: var(--adlaire-semantic-success-color);
}

.adlaire-status-meter-track {
  overflow: hidden;
  background-color: var(--adlaire-surface-soft);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-round);
}

.adlaire-status-meter-value {
  min-height: 12px;
  background-color: var(--adlaire-surface-accent);
  border-radius: var(--adlaire-radius-round);
}

.adlaire-asset-browser {
  grid-template-columns: minmax(0, 1.4fr) minmax(220px, 0.8fr);
}

.adlaire-thumbnail-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(96px, 1fr));
  gap: 10px;
}

.adlaire-thumbnail-item {
  display: grid;
  gap: 8px;
  min-width: 0;
  padding: 8px;
  background-color: var(--adlaire-surface-soft);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-sm);
  color: var(--adlaire-surface-text-muted);
}

.adlaire-thumbnail-item[aria-selected="true"] {
  border-color: var(--adlaire-surface-accent);
  box-shadow: var(--adlaire-shadow-focus-ring);
  color: var(--adlaire-surface-accent-strong);
}

.adlaire-thumbnail-preview {
  min-height: 72px;
  background-color: var(--adlaire-surface-card);
  border-radius: var(--adlaire-radius-sm);
}

.adlaire-media-metadata-panel {
  display: grid;
  gap: 8px;
  padding: 12px;
  background-color: var(--adlaire-surface-soft);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-sm);
}

.adlaire-preview-compare {
  display: grid;
  position: relative;
  min-height: 160px;
  overflow: hidden;
  background-color: var(--adlaire-surface-soft);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-md);
}

.adlaire-preview-compare-before,
.adlaire-preview-compare-after {
  display: grid;
  grid-area: 1 / 1;
  place-items: center;
  color: var(--adlaire-surface-card);
  font-weight: 800;
}

.adlaire-preview-compare-before {
  background-color: var(--adlaire-surface-accent-strong);
}

.adlaire-preview-compare-after {
  width: var(--adlaire-preview-compare-position, 50%);
  overflow: hidden;
  background-color: var(--adlaire-semantic-success-color);
}

.adlaire-document-outline {
  gap: 6px;
}

.adlaire-outline-item,
.adlaire-publication-checklist-item,
.adlaire-comment-resolver-item {
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: space-between;
  padding: 8px 10px;
  background-color: var(--adlaire-surface-soft);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-sm);
  color: var(--adlaire-surface-text-muted);
}

.adlaire-outline-item[aria-current="true"],
.adlaire-publication-checklist-item[aria-checked="true"],
.adlaire-comment-resolver-item[data-state="resolved"] {
  border-color: var(--adlaire-surface-accent);
  color: var(--adlaire-surface-accent-strong);
}

.adlaire-mini-map {
  display: grid;
  gap: 6px;
  min-height: 160px;
  padding: 10px;
  background-color: var(--adlaire-surface-soft);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-md);
}

.adlaire-mini-map-marker {
  min-height: 10px;
  background-color: var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-round);
}

.adlaire-mini-map-marker[aria-current="true"] {
  background-color: var(--adlaire-surface-accent);
}

.adlaire-agenda-view,
.adlaire-time-slot-grid,
.adlaire-resource-calendar,
.adlaire-availability-matrix,
.adlaire-location-card,
.adlaire-facility-map-panel,
.adlaire-area-status-grid,
.adlaire-comparison-matrix,
.adlaire-decision-scorecard,
.adlaire-document-library,
.adlaire-folder-tree,
.adlaire-download-queue,
.adlaire-session-list,
.adlaire-policy-exception-panel {
  display: grid;
  gap: 12px;
  padding: 14px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-md);
  color: var(--adlaire-surface-text);
}

.adlaire-agenda-row,
.adlaire-calendar-event,
.adlaire-booking-card,
.adlaire-location-card,
.adlaire-route-summary,
.adlaire-site-operating-hours,
.adlaire-option-card,
.adlaire-selection-summary,
.adlaire-file-version-card,
.adlaire-document-approval-state,
.adlaire-access-request-card,
.adlaire-device-trust-card,
.adlaire-security-event-row {
  display: grid;
  gap: 8px;
  padding: 12px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-sm);
  color: var(--adlaire-surface-text);
}

.adlaire-agenda-row,
.adlaire-calendar-event,
.adlaire-booking-card,
.adlaire-route-summary,
.adlaire-site-operating-hours,
.adlaire-file-version-card,
.adlaire-access-request-card,
.adlaire-device-trust-card,
.adlaire-security-event-row {
  grid-template-columns: minmax(72px, auto) minmax(0, 1fr) auto;
  align-items: center;
}

.adlaire-time-slot-grid,
.adlaire-availability-matrix,
.adlaire-area-status-grid {
  grid-template-columns: repeat(auto-fit, minmax(92px, 1fr));
}

.adlaire-time-slot {
  min-height: 44px;
  padding: 8px 10px;
  background-color: var(--adlaire-surface-soft);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-sm);
  color: var(--adlaire-surface-text-muted);
  cursor: pointer;
}

.adlaire-time-slot[aria-selected="true"],
.adlaire-time-slot:hover,
.adlaire-time-slot:focus-visible,
.adlaire-option-card[aria-selected="true"],
.adlaire-option-card:hover,
.adlaire-option-card:focus-visible {
  border-color: var(--adlaire-surface-accent);
  box-shadow: var(--adlaire-shadow-focus-ring);
  color: var(--adlaire-surface-accent-strong);
  outline: 0;
}

.adlaire-resource-calendar {
  grid-template-columns: minmax(160px, 0.8fr) minmax(0, 1.2fr);
}

.adlaire-availability-cell,
.adlaire-area-status-cell {
  min-height: 48px;
  padding: 8px;
  background-color: var(--adlaire-surface-soft);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-sm);
  color: var(--adlaire-surface-text-muted);
}

.adlaire-availability-cell[data-state="available"],
.adlaire-area-status-cell[data-state="open"] {
  background-color: var(--adlaire-semantic-success-bg);
  border-color: var(--adlaire-semantic-success-border);
  color: var(--adlaire-semantic-success-text);
}

.adlaire-availability-cell[data-state="busy"],
.adlaire-area-status-cell[data-state="busy"] {
  background-color: var(--adlaire-semantic-warning-bg);
  border-color: var(--adlaire-semantic-warning-border);
  color: var(--adlaire-semantic-warning-text);
}

.adlaire-facility-map-panel {
  min-height: 180px;
  place-items: center;
  background-color: var(--adlaire-surface-soft);
}

.adlaire-floor-selector {
  display: inline-flex;
  flex-wrap: wrap;
  gap: 6px;
  padding: 6px;
  background-color: var(--adlaire-surface-soft);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-lg);
}

.adlaire-floor-selector-button {
  min-width: 40px;
  min-height: 36px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-md);
  color: var(--adlaire-surface-text-muted);
  cursor: pointer;
}

.adlaire-floor-selector-button[aria-pressed="true"],
.adlaire-floor-selector-button:hover,
.adlaire-floor-selector-button:focus-visible {
  border-color: var(--adlaire-surface-accent);
  box-shadow: var(--adlaire-shadow-focus-ring);
  color: var(--adlaire-surface-accent);
  outline: 0;
}

.adlaire-comparison-matrix {
  overflow: auto;
}

.adlaire-comparison-matrix table {
  width: 100%;
  border-collapse: collapse;
}

.adlaire-comparison-matrix th,
.adlaire-comparison-matrix td {
  padding: 10px 12px;
  border-bottom: 1px solid var(--adlaire-surface-border);
  color: var(--adlaire-surface-text);
  text-align: left;
  white-space: nowrap;
}

.adlaire-option-card {
  cursor: pointer;
}

.adlaire-decision-scorecard {
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
}

.adlaire-decision-score {
  display: grid;
  gap: 4px;
  padding: 10px;
  background-color: var(--adlaire-surface-soft);
  border-radius: var(--adlaire-radius-sm);
  color: var(--adlaire-surface-text-muted);
}

.adlaire-tradeoff-list {
  display: grid;
  gap: 8px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.adlaire-tradeoff-item {
  padding: 10px 12px;
  background-color: var(--adlaire-surface-soft);
  border-left: 4px solid var(--adlaire-surface-accent);
  border-radius: var(--adlaire-radius-sm);
  color: var(--adlaire-surface-text-muted);
}

.adlaire-recommendation-banner {
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

.adlaire-document-library {
  grid-template-columns: minmax(180px, 0.8fr) minmax(0, 1.2fr);
}

.adlaire-folder-tree,
.adlaire-folder-list,
.adlaire-folder-branch {
  display: grid;
  gap: 6px;
}

.adlaire-folder-list,
.adlaire-folder-branch {
  margin: 0;
  padding: 0;
  list-style: none;
}

.adlaire-folder-branch {
  padding-left: 18px;
  border-left: 1px solid var(--adlaire-surface-border);
}

.adlaire-folder-branch[hidden] {
  display: none;
}

.adlaire-folder-row {
  display: flex;
  gap: 8px;
  align-items: center;
  padding: 8px 10px;
  background-color: var(--adlaire-surface-soft);
  border-radius: var(--adlaire-radius-sm);
  color: var(--adlaire-surface-text-muted);
}

.adlaire-folder-toggle {
  min-width: 28px;
  min-height: 28px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-sm);
  color: var(--adlaire-surface-text-muted);
  cursor: pointer;
}

.adlaire-folder-toggle[aria-expanded="true"],
.adlaire-folder-toggle:hover,
.adlaire-folder-toggle:focus-visible {
  border-color: var(--adlaire-surface-accent);
  box-shadow: var(--adlaire-shadow-focus-ring);
  color: var(--adlaire-surface-accent);
  outline: 0;
}

.adlaire-retention-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 4px 8px;
  background-color: var(--adlaire-semantic-muted-bg);
  border: 1px solid var(--adlaire-semantic-muted-border);
  border-radius: var(--adlaire-radius-round);
  color: var(--adlaire-semantic-muted-text);
  font-size: 0.75rem;
  font-weight: 800;
}

.adlaire-download-queue {
  gap: 6px;
}

.adlaire-download-queue-item,
.adlaire-permission-grant-row,
.adlaire-session-list-item {
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

.adlaire-policy-exception-header,
.adlaire-policy-exception-body {
  display: grid;
  gap: 8px;
}

.adlaire-policy-exception-body {
  padding-top: 10px;
  border-top: 1px solid var(--adlaire-surface-border);
}

.adlaire-policy-exception-body[hidden] {
  display: none;
}

.adlaire-budget-panel,
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

.adlaire-key-result-tracker,
.adlaire-initiative-map,
.adlaire-confidence-indicator,
.adlaire-review-cadence,
.adlaire-portfolio-overview,
.adlaire-milestone-tracker,
.adlaire-dependency-register,
.adlaire-risk-issue-log,
.adlaire-capacity-planner,
.adlaire-availability-forecast,
.adlaire-vendor-scorecard,
.adlaire-sla-tracker,
.adlaire-procurement-pipeline,
.adlaire-change-calendar-panel {
  display: grid;
  gap: 12px;
  padding: 14px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-md);
  color: var(--adlaire-surface-text);
}

.adlaire-objective-card,
.adlaire-alignment-summary,
.adlaire-program-card,
.adlaire-project-health-panel,
.adlaire-utilization-summary,
.adlaire-staffing-request-card,
.adlaire-allocation-conflict,
.adlaire-supplier-profile,
.adlaire-contract-renewal-card,
.adlaire-service-request-card,
.adlaire-license-assignment-card,
.adlaire-maintenance-window-card,
.adlaire-postmortem-summary {
  display: grid;
  gap: 8px;
  padding: 12px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-sm);
  color: var(--adlaire-surface-text);
}

.adlaire-key-result-row,
.adlaire-review-cadence-item,
.adlaire-portfolio-overview-item,
.adlaire-dependency-register-item,
.adlaire-risk-issue-item,
.adlaire-allocation-row,
.adlaire-availability-forecast-item,
.adlaire-vendor-scorecard-item,
.adlaire-sla-tracker-item,
.adlaire-change-calendar-item,
.adlaire-asset-inventory-row,
.adlaire-compliance-attestation-row {
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

.adlaire-objective-card {
  border-left: 4px solid var(--adlaire-surface-accent);
}

.adlaire-key-result-progress {
  overflow: hidden;
  width: min(160px, 100%);
  min-height: 10px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-round);
}

.adlaire-key-result-progress-value {
  min-height: 10px;
  background-color: var(--adlaire-surface-accent);
  border-radius: var(--adlaire-radius-round);
}

.adlaire-initiative-map,
.adlaire-portfolio-overview,
.adlaire-procurement-pipeline {
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
}

.adlaire-initiative-map-item,
.adlaire-milestone-step,
.adlaire-procurement-pipeline-step,
.adlaire-confidence-option {
  display: grid;
  gap: 4px;
  padding: 10px 12px;
  background-color: var(--adlaire-surface-soft);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-sm);
  color: var(--adlaire-surface-text-muted);
}

.adlaire-confidence-indicator {
  grid-template-columns: repeat(auto-fit, minmax(96px, 1fr));
}

.adlaire-confidence-option {
  cursor: pointer;
  text-align: left;
}

.adlaire-confidence-option[aria-pressed="true"],
.adlaire-milestone-step[aria-current="step"],
.adlaire-procurement-pipeline-step[aria-current="step"] {
  border-color: var(--adlaire-surface-accent);
  box-shadow: var(--adlaire-shadow-focus-ring);
  color: var(--adlaire-surface-accent-strong);
}

.adlaire-project-health-panel[data-state="at-risk"],
.adlaire-allocation-conflict,
.adlaire-sla-tracker-item[data-state="breached"],
.adlaire-service-request-card[data-priority="high"] {
  background-color: var(--adlaire-semantic-warning-bg);
  border-color: var(--adlaire-semantic-warning-border);
  color: var(--adlaire-semantic-warning-text);
}

.adlaire-capacity-planner {
  gap: 6px;
}

.adlaire-utilization-summary {
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
}

.adlaire-compliance-attestation-row[aria-pressed="true"] {
  border-color: var(--adlaire-semantic-success-border);
  color: var(--adlaire-semantic-success-text);
}

.adlaire-postmortem-summary {
  background-color: var(--adlaire-semantic-info-bg);
  border-color: var(--adlaire-semantic-info-border);
  color: var(--adlaire-semantic-info-text);
}

.adlaire-shipment-tracker,
.adlaire-delivery-route-board,
.adlaire-exception-queue,
.adlaire-quality-inspection-panel,
.adlaire-downtime-reason-list,
.adlaire-appointment-queue,
.adlaire-care-plan-checklist,
.adlaire-medication-schedule,
.adlaire-assignment-queue,
.adlaire-grading-rubric,
.adlaire-matter-timeline,
.adlaire-evidence-list,
.adlaire-counsel-task-list {
  display: grid;
  gap: 12px;
  padding: 14px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-md);
  color: var(--adlaire-surface-text);
}

.adlaire-warehouse-bin-card,
.adlaire-carrier-handoff-card,
.adlaire-production-order-card,
.adlaire-work-cell-status,
.adlaire-batch-trace-card,
.adlaire-patient-summary-card,
.adlaire-triage-status-panel,
.adlaire-course-card,
.adlaire-lesson-progress,
.adlaire-learner-profile,
.adlaire-certification-tracker,
.adlaire-case-file-card,
.adlaire-filing-deadline-tracker,
.adlaire-review-privilege-badge {
  display: grid;
  gap: 8px;
  padding: 12px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-sm);
  color: var(--adlaire-surface-text);
}

.adlaire-shipment-step,
.adlaire-inventory-movement-row,
.adlaire-delivery-route-item,
.adlaire-exception-queue-item,
.adlaire-defect-report-row,
.adlaire-downtime-reason-item,
.adlaire-appointment-queue-item,
.adlaire-care-plan-checklist-item,
.adlaire-medication-schedule-item,
.adlaire-assignment-queue-item,
.adlaire-grading-rubric-row,
.adlaire-matter-timeline-item,
.adlaire-evidence-list-item,
.adlaire-consent-record-row,
.adlaire-counsel-task-item {
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

.adlaire-shipment-tracker,
.adlaire-delivery-route-board,
.adlaire-grading-rubric {
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
}

.adlaire-shipment-step[aria-current="step"],
.adlaire-delivery-route-item[aria-selected="true"],
.adlaire-evidence-list-item[aria-selected="true"] {
  border-color: var(--adlaire-surface-accent);
  box-shadow: var(--adlaire-shadow-focus-ring);
  color: var(--adlaire-surface-accent-strong);
}

.adlaire-delivery-route-item,
.adlaire-care-plan-checklist-item,
.adlaire-evidence-list-item {
  cursor: pointer;
}

.adlaire-exception-queue-item[data-state="blocked"],
.adlaire-defect-report-row[data-severity="high"],
.adlaire-triage-status-panel[data-state="urgent"],
.adlaire-filing-deadline-tracker[data-state="due"] {
  background-color: var(--adlaire-semantic-warning-bg);
  border-color: var(--adlaire-semantic-warning-border);
  color: var(--adlaire-semantic-warning-text);
}

.adlaire-care-plan-checklist-item[aria-checked="true"],
.adlaire-consent-record-row[data-state="signed"],
.adlaire-certification-tracker[data-state="complete"] {
  border-color: var(--adlaire-semantic-success-border);
  color: var(--adlaire-semantic-success-text);
}

.adlaire-review-privilege-badge {
  width: fit-content;
  background-color: var(--adlaire-semantic-selected-bg);
  border-color: var(--adlaire-semantic-selected-border);
  color: var(--adlaire-semantic-selected-text);
  font-weight: 700;
}

.adlaire-support-inbox,
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

.adlaire-message-composer,
.adlaire-channel-list,
.adlaire-mention-picker,
.adlaire-notification-center,
.adlaire-digest-schedule,
.adlaire-announcement-composer,
.adlaire-audience-targeting-panel,
.adlaire-publish-queue,
.adlaire-acknowledgement-tracker,
.adlaire-inbox-triage-board,
.adlaire-canned-reply-panel,
.adlaire-topic-preference-list,
.adlaire-consent-channel-matrix,
.adlaire-unsubscribe-reason-panel {
  display: grid;
  gap: 12px;
  padding: 14px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-md);
  color: var(--adlaire-surface-text);
}

.adlaire-conversation-preview,
.adlaire-message-delivery-state,
.adlaire-unread-marker,
.adlaire-notification-rule-card,
.adlaire-notification-template-card,
.adlaire-quiet-hours-panel,
.adlaire-broadcast-banner,
.adlaire-delivery-report-card,
.adlaire-response-timer-card,
.adlaire-follow-up-reminder,
.adlaire-resolution-summary,
.adlaire-opt-in-card {
  display: grid;
  gap: 8px;
  padding: 12px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-sm);
  color: var(--adlaire-surface-text);
}

.adlaire-channel-list-item,
.adlaire-mention-picker-item,
.adlaire-notification-center-item,
.adlaire-delivery-channel-row,
.adlaire-digest-schedule-item,
.adlaire-audience-targeting-item,
.adlaire-publish-queue-item,
.adlaire-acknowledgement-tracker-item,
.adlaire-inbox-triage-item,
.adlaire-inbox-assignment-row,
.adlaire-canned-reply-item,
.adlaire-subscription-plan-row,
.adlaire-topic-preference-item,
.adlaire-consent-channel-row,
.adlaire-unsubscribe-reason-item,
.adlaire-preference-audit-row {
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

.adlaire-channel-list,
.adlaire-publish-queue,
.adlaire-inbox-triage-board,
.adlaire-consent-channel-matrix {
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
}

.adlaire-channel-list-item,
.adlaire-quiet-hours-panel,
.adlaire-topic-preference-item {
  cursor: pointer;
}

.adlaire-channel-list-item[aria-selected="true"],
.adlaire-quiet-hours-panel[aria-pressed="true"],
.adlaire-topic-preference-item[aria-checked="true"] {
  border-color: var(--adlaire-surface-accent);
  box-shadow: var(--adlaire-shadow-focus-ring);
  color: var(--adlaire-surface-accent-strong);
}

.adlaire-message-delivery-state[data-state="failed"],
.adlaire-notification-rule-card[data-state="paused"],
.adlaire-response-timer-card[data-state="due"],
.adlaire-unsubscribe-reason-item[data-state="risk"] {
  background-color: var(--adlaire-semantic-warning-bg);
  border-color: var(--adlaire-semantic-warning-border);
  color: var(--adlaire-semantic-warning-text);
}

.adlaire-delivery-report-card[data-state="delivered"],
.adlaire-acknowledgement-tracker[data-state="complete"],
.adlaire-opt-in-card[data-state="enabled"],
.adlaire-resolution-summary[data-state="resolved"] {
  border-color: var(--adlaire-semantic-success-border);
  color: var(--adlaire-semantic-success-text);
}

.adlaire-editorial-calendar,
.adlaire-draft-status-board,
.adlaire-review-gate-panel,
.adlaire-media-library-panel,
.adlaire-rendition-list,
.adlaire-asset-approval-queue,
.adlaire-locale-switcher-panel,
.adlaire-translation-queue,
.adlaire-locale-coverage-matrix,
.adlaire-missing-string-list,
.adlaire-seo-checklist,
.adlaire-keyword-cluster,
.adlaire-moderation-queue,
.adlaire-report-reason-panel {
  display: grid;
  gap: 12px;
  padding: 14px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-md);
  color: var(--adlaire-surface-text);
}

.adlaire-content-brief-card,
.adlaire-publish-readiness-card,
.adlaire-asset-rights-card,
.adlaire-usage-license-badge,
.adlaire-metadata-completeness-meter,
.adlaire-translation-memory-card,
.adlaire-glossary-term-card,
.adlaire-search-preview-card,
.adlaire-metadata-editor-panel,
.adlaire-canonical-url-card,
.adlaire-flagged-content-card,
.adlaire-user-trust-score,
.adlaire-appeal-status-tracker {
  display: grid;
  gap: 8px;
  padding: 12px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-sm);
  color: var(--adlaire-surface-text);
}

.adlaire-editorial-calendar-item,
.adlaire-draft-status-item,
.adlaire-editor-assignment-row,
.adlaire-review-gate-option,
.adlaire-media-library-item,
.adlaire-rendition-list-item,
.adlaire-asset-approval-item,
.adlaire-locale-switcher-option,
.adlaire-translation-queue-item,
.adlaire-locale-coverage-row,
.adlaire-missing-string-item,
.adlaire-seo-checklist-item,
.adlaire-keyword-cluster-item,
.adlaire-crawl-status-row,
.adlaire-moderation-queue-item,
.adlaire-moderation-decision-row,
.adlaire-report-reason-item {
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

.adlaire-draft-status-board,
.adlaire-review-gate-panel,
.adlaire-locale-switcher-panel,
.adlaire-locale-coverage-matrix,
.adlaire-seo-checklist,
.adlaire-moderation-queue {
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
}

.adlaire-review-gate-option,
.adlaire-locale-switcher-option,
.adlaire-moderation-decision-row {
  cursor: pointer;
}

.adlaire-review-gate-option[aria-selected="true"],
.adlaire-locale-switcher-option[aria-selected="true"],
.adlaire-moderation-decision-row[aria-pressed="true"] {
  border-color: var(--adlaire-surface-accent);
  box-shadow: var(--adlaire-shadow-focus-ring);
  color: var(--adlaire-surface-accent-strong);
}

.adlaire-publish-readiness-card[data-state="blocked"],
.adlaire-missing-string-list[data-state="incomplete"],
.adlaire-flagged-content-card[data-state="flagged"],
.adlaire-crawl-status-row[data-state="blocked"] {
  background-color: var(--adlaire-semantic-warning-bg);
  border-color: var(--adlaire-semantic-warning-border);
  color: var(--adlaire-semantic-warning-text);
}

.adlaire-asset-rights-card[data-state="cleared"],
.adlaire-metadata-completeness-meter[data-state="complete"],
.adlaire-translation-memory-card[data-state="matched"],
.adlaire-appeal-status-tracker[data-state="resolved"] {
  border-color: var(--adlaire-semantic-success-border);
  color: var(--adlaire-semantic-success-text);
}

.adlaire-device-registry-table,
.adlaire-remote-command-queue,
.adlaire-offline-queue,
.adlaire-deployment-ring-selector,
.adlaire-telemetry-stream,
.adlaire-alert-event-list,
.adlaire-kiosk-status-board,
.adlaire-store-device-map,
.adlaire-location-ping-timeline,
.adlaire-device-handoff-checklist {
  display: grid;
  gap: 12px;
  padding: 14px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-md);
  color: var(--adlaire-surface-text);
}

.adlaire-device-card,
.adlaire-enrollment-panel,
.adlaire-device-health-tile,
.adlaire-firmware-version-badge,
.adlaire-edge-node-card,
.adlaire-sync-status-panel,
.adlaire-bandwidth-usage-meter,
.adlaire-rollback-checkpoint-card,
.adlaire-sensor-reading-card,
.adlaire-threshold-rule-panel,
.adlaire-signal-quality-indicator,
.adlaire-terminal-session-card,
.adlaire-cash-drawer-status,
.adlaire-receipt-printer-panel,
.adlaire-mobile-device-assignment,
.adlaire-app-version-compliance,
.adlaire-lost-mode-banner {
  display: grid;
  gap: 8px;
  padding: 12px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-sm);
  color: var(--adlaire-surface-text);
}

.adlaire-device-registry-row,
.adlaire-remote-command-item,
.adlaire-offline-queue-item,
.adlaire-deployment-ring-option,
.adlaire-telemetry-stream-item,
.adlaire-alert-event-item,
.adlaire-calibration-record-row,
.adlaire-kiosk-status-item,
.adlaire-checkout-lane-row,
.adlaire-store-device-map-item,
.adlaire-battery-status-row,
.adlaire-location-ping-item,
.adlaire-device-handoff-item {
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

.adlaire-device-registry-table,
.adlaire-deployment-ring-selector,
.adlaire-kiosk-status-board,
.adlaire-store-device-map {
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
}

.adlaire-device-registry-row,
.adlaire-deployment-ring-option,
.adlaire-device-handoff-item {
  cursor: pointer;
}

.adlaire-device-registry-row[aria-selected="true"],
.adlaire-deployment-ring-option[aria-selected="true"],
.adlaire-device-handoff-item[aria-checked="true"] {
  border-color: var(--adlaire-surface-accent);
  box-shadow: var(--adlaire-shadow-focus-ring);
  color: var(--adlaire-surface-accent-strong);
}

.adlaire-device-health-tile[data-state="degraded"],
.adlaire-sync-status-panel[data-state="offline"],
.adlaire-alert-event-item[data-state="critical"],
.adlaire-lost-mode-banner[data-state="active"] {
  background-color: var(--adlaire-semantic-warning-bg);
  border-color: var(--adlaire-semantic-warning-border);
  color: var(--adlaire-semantic-warning-text);
}

.adlaire-enrollment-panel[data-state="complete"],
.adlaire-rollback-checkpoint-card[data-state="ready"],
.adlaire-signal-quality-indicator[data-state="good"],
.adlaire-app-version-compliance[data-state="compliant"] {
  border-color: var(--adlaire-semantic-success-border);
  color: var(--adlaire-semantic-success-text);
}

.adlaire-booking-summary-panel,
.adlaire-trip-status-timeline,
.adlaire-room-inventory-board,
.adlaire-amenity-request-queue,
.adlaire-event-schedule-board,
.adlaire-badge-print-queue,
.adlaire-venue-map-panel,
.adlaire-gate-status-board,
.adlaire-compensation-option-list,
.adlaire-recovery-task-board {
  display: grid;
  gap: 12px;
  padding: 14px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-md);
  color: var(--adlaire-surface-text);
}

.adlaire-itinerary-card,
.adlaire-fare-option-card,
.adlaire-disruption-alert-card,
.adlaire-reservation-card,
.adlaire-guest-folio-panel,
.adlaire-check-in-readiness-card,
.adlaire-session-card,
.adlaire-speaker-profile-card,
.adlaire-capacity-warning-panel,
.adlaire-seating-section-card,
.adlaire-access-pass-card,
.adlaire-crowd-flow-meter,
.adlaire-incident-guest-card,
.adlaire-service-note-panel,
.adlaire-satisfaction-follow-up-card {
  display: grid;
  gap: 8px;
  padding: 12px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-sm);
  color: var(--adlaire-surface-text);
}

.adlaire-traveler-profile-row,
.adlaire-trip-status-item,
.adlaire-room-inventory-item,
.adlaire-housekeeping-task-row,
.adlaire-amenity-request-item,
.adlaire-event-schedule-item,
.adlaire-attendee-check-in-row,
.adlaire-badge-print-item,
.adlaire-venue-map-item,
.adlaire-seat-hold-row,
.adlaire-gate-status-item,
.adlaire-compensation-option-item,
.adlaire-recovery-task-item,
.adlaire-refund-status-row {
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

.adlaire-room-inventory-board,
.adlaire-event-schedule-board,
.adlaire-gate-status-board,
.adlaire-compensation-option-list {
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
}

.adlaire-fare-option-card,
.adlaire-room-inventory-item,
.adlaire-recovery-task-item {
  cursor: pointer;
}

.adlaire-fare-option-card[aria-selected="true"],
.adlaire-room-inventory-item[aria-selected="true"],
.adlaire-recovery-task-item[aria-checked="true"] {
  border-color: var(--adlaire-surface-accent);
  box-shadow: var(--adlaire-shadow-focus-ring);
  color: var(--adlaire-surface-accent-strong);
}

.adlaire-disruption-alert-card[data-state="active"],
.adlaire-capacity-warning-panel[data-state="warning"],
.adlaire-incident-guest-card[data-state="open"] {
  background-color: var(--adlaire-semantic-warning-bg);
  border-color: var(--adlaire-semantic-warning-border);
  color: var(--adlaire-semantic-warning-text);
}

.adlaire-check-in-readiness-card[data-state="ready"],
.adlaire-access-pass-card[data-state="valid"],
.adlaire-satisfaction-follow-up-card[data-state="sent"] {
  border-color: var(--adlaire-semantic-success-border);
  color: var(--adlaire-semantic-success-text);
}

.adlaire-eligibility-checklist,
.adlaire-case-status-timeline,
.adlaire-service-counter-queue,
.adlaire-permit-application-panel,
.adlaire-document-requirement-list,
.adlaire-application-review-board,
.adlaire-volunteer-shift-board,
.adlaire-outreach-list,
.adlaire-incident-command-panel,
.adlaire-shelter-status-board,
.adlaire-response-team-roster {
  display: grid;
  gap: 12px;
  padding: 14px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-md);
  color: var(--adlaire-surface-text);
}

.adlaire-service-application-card,
.adlaire-public-notice-banner,
.adlaire-license-status-card,
.adlaire-compliance-finding-card,
.adlaire-renewal-reminder-panel,
.adlaire-grant-program-card,
.adlaire-aid-eligibility-summary,
.adlaire-disbursement-status-card,
.adlaire-beneficiary-profile-panel,
.adlaire-donation-campaign-card,
.adlaire-impact-metric-tile,
.adlaire-donor-acknowledgement-card,
.adlaire-resource-request-card,
.adlaire-recovery-milestone-card {
  display: grid;
  gap: 8px;
  padding: 12px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-sm);
  color: var(--adlaire-surface-text);
}

.adlaire-eligibility-check-item,
.adlaire-appointment-slot-row,
.adlaire-case-status-item,
.adlaire-service-counter-item,
.adlaire-document-requirement-item,
.adlaire-inspection-schedule-row,
.adlaire-application-review-item,
.adlaire-funding-allocation-row,
.adlaire-volunteer-shift-item,
.adlaire-pledge-tracker-row,
.adlaire-outreach-item,
.adlaire-shelter-status-item,
.adlaire-alert-broadcast-row,
.adlaire-response-team-item {
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

.adlaire-service-counter-queue,
.adlaire-document-requirement-list,
.adlaire-application-review-board,
.adlaire-volunteer-shift-board,
.adlaire-shelter-status-board {
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
}

.adlaire-eligibility-check-item,
.adlaire-document-requirement-item,
.adlaire-volunteer-shift-item {
  cursor: pointer;
}

.adlaire-eligibility-check-item[aria-checked="true"],
.adlaire-document-requirement-item[aria-selected="true"],
.adlaire-volunteer-shift-item[aria-selected="true"] {
  border-color: var(--adlaire-surface-accent);
  box-shadow: var(--adlaire-shadow-focus-ring);
  color: var(--adlaire-surface-accent-strong);
}

.adlaire-public-notice-banner[data-state="urgent"],
.adlaire-compliance-finding-card[data-state="open"],
.adlaire-resource-request-card[data-state="critical"] {
  background-color: var(--adlaire-semantic-warning-bg);
  border-color: var(--adlaire-semantic-warning-border);
  color: var(--adlaire-semantic-warning-text);
}

.adlaire-license-status-card[data-state="active"],
.adlaire-disbursement-status-card[data-state="paid"],
.adlaire-donor-acknowledgement-card[data-state="sent"],
.adlaire-recovery-milestone-card[data-state="complete"] {
  border-color: var(--adlaire-semantic-success-border);
  color: var(--adlaire-semantic-success-text);
}

.adlaire-demand-response-panel,
.adlaire-grid-event-timeline,
.adlaire-service-appointment-board,
.adlaire-waste-pickup-schedule,
.adlaire-compliance-sample-log,
.adlaire-sustainability-target-tracker,
.adlaire-disclosure-checklist,
.adlaire-sensor-threshold-board,
.adlaire-field-inspection-checklist,
.adlaire-remediation-task-list {
  display: grid;
  gap: 12px;
  padding: 14px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-md);
  color: var(--adlaire-surface-text);
}

.adlaire-energy-usage-card,
.adlaire-load-forecast-card,
.adlaire-generation-mix-card,
.adlaire-energy-contract-summary,
.adlaire-utility-account-card,
.adlaire-outage-report-card,
.adlaire-consumption-alert-banner,
.adlaire-payment-assistance-panel,
.adlaire-water-quality-panel,
.adlaire-leak-alert-card,
.adlaire-treatment-plant-status,
.adlaire-carbon-footprint-tile,
.adlaire-offset-portfolio-card,
.adlaire-audit-evidence-panel,
.adlaire-monitoring-station-card,
.adlaire-incident-map-panel {
  display: grid;
  gap: 8px;
  padding: 12px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-sm);
  color: var(--adlaire-surface-text);
}

.adlaire-demand-response-option,
.adlaire-grid-event-item,
.adlaire-meter-reading-row,
.adlaire-service-appointment-item,
.adlaire-maintenance-route-row,
.adlaire-waste-pickup-item,
.adlaire-compliance-sample-item,
.adlaire-emissions-ledger-row,
.adlaire-disclosure-check-item,
.adlaire-sensor-threshold-item,
.adlaire-field-inspection-item,
.adlaire-sample-collection-row,
.adlaire-remediation-task-item {
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

.adlaire-demand-response-panel,
.adlaire-service-appointment-board,
.adlaire-waste-pickup-schedule,
.adlaire-sensor-threshold-board,
.adlaire-remediation-task-list {
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
}

.adlaire-demand-response-option,
.adlaire-outage-report-card,
.adlaire-disclosure-check-item {
  cursor: pointer;
}

.adlaire-demand-response-option[aria-selected="true"],
.adlaire-outage-report-card[aria-selected="true"],
.adlaire-disclosure-check-item[aria-checked="true"] {
  border-color: var(--adlaire-surface-accent);
  box-shadow: var(--adlaire-shadow-focus-ring);
  color: var(--adlaire-surface-accent-strong);
}

.adlaire-consumption-alert-banner[data-state="high"],
.adlaire-leak-alert-card[data-state="active"],
.adlaire-incident-map-panel[data-state="open"] {
  background-color: var(--adlaire-semantic-warning-bg);
  border-color: var(--adlaire-semantic-warning-border);
  color: var(--adlaire-semantic-warning-text);
}

.adlaire-energy-contract-summary[data-state="active"],
.adlaire-treatment-plant-status[data-state="normal"],
.adlaire-sustainability-target-tracker[data-state="on-track"],
.adlaire-audit-evidence-panel[data-state="verified"] {
  border-color: var(--adlaire-semantic-success-border);
  color: var(--adlaire-semantic-success-text);
}

.adlaire-section-header,
.adlaire-section-action-bar,
.adlaire-content-group,
.adlaire-summary-rail,
.adlaire-inline-toolbar,
.adlaire-status-badge-group,
.adlaire-bulk-action-tray,
.adlaire-range-selection-panel,
.adlaire-batch-progress-list,
.adlaire-provenance-panel,
.adlaire-verification-checklist,
.adlaire-density-switcher,
.adlaire-responsive-stack-panel,
.adlaire-mobile-overflow-bar,
.adlaire-sticky-action-footer {
  display: grid;
  gap: 12px;
  padding: 14px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-md);
  color: var(--adlaire-surface-text);
}

.adlaire-detail-header,
.adlaire-validation-summary-card,
.adlaire-stale-data-banner,
.adlaire-retry-action-panel,
.adlaire-selection-counter-bar,
.adlaire-compare-selection-card,
.adlaire-confidence-score-card,
.adlaire-audit-trail-card,
.adlaire-viewport-notice,
.adlaire-print-layout-panel {
  display: grid;
  gap: 8px;
  padding: 12px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-sm);
  color: var(--adlaire-surface-text);
}

.adlaire-section-header,
.adlaire-section-action-bar,
.adlaire-detail-header,
.adlaire-inline-toolbar,
.adlaire-status-badge-item,
.adlaire-sync-indicator-row,
.adlaire-selectable-list-row,
.adlaire-batch-progress-item,
.adlaire-source-citation-row,
.adlaire-audit-trail-item,
.adlaire-verification-check-item,
.adlaire-density-option {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
  justify-content: space-between;
}

.adlaire-status-badge-item,
.adlaire-sync-indicator-row,
.adlaire-selectable-list-row,
.adlaire-batch-progress-item,
.adlaire-source-citation-row,
.adlaire-audit-trail-item,
.adlaire-verification-check-item,
.adlaire-density-option {
  padding: 10px 12px;
  background-color: var(--adlaire-surface-soft);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-sm);
  color: var(--adlaire-surface-text-muted);
}

.adlaire-section-action-bar,
.adlaire-inline-toolbar,
.adlaire-status-badge-group,
.adlaire-bulk-action-tray,
.adlaire-density-switcher,
.adlaire-mobile-overflow-bar {
  grid-template-columns: repeat(auto-fit, minmax(120px, max-content));
}

.adlaire-content-group,
.adlaire-responsive-stack-panel {
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
}

.adlaire-summary-rail {
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
}

.adlaire-severity-marker,
.adlaire-freshness-badge {
  display: inline-grid;
  width: fit-content;
  gap: 4px;
  align-items: center;
  padding: 6px 10px;
  background-color: var(--adlaire-surface-soft);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: 999px;
  color: var(--adlaire-surface-text-muted);
}

.adlaire-bulk-action-item,
.adlaire-density-option,
.adlaire-selectable-list-row,
.adlaire-verification-check-item {
  cursor: pointer;
}

.adlaire-density-option[aria-pressed="true"],
.adlaire-selectable-list-row[aria-selected="true"],
.adlaire-verification-check-item[aria-checked="true"] {
  border-color: var(--adlaire-surface-accent);
  box-shadow: var(--adlaire-shadow-focus-ring);
  color: var(--adlaire-surface-accent-strong);
}

.adlaire-severity-marker[data-severity="high"],
.adlaire-validation-summary-card[data-state="invalid"],
.adlaire-stale-data-banner[data-state="stale"],
.adlaire-viewport-notice[data-state="narrow"] {
  background-color: var(--adlaire-semantic-warning-bg);
  border-color: var(--adlaire-semantic-warning-border);
  color: var(--adlaire-semantic-warning-text);
}

.adlaire-sync-indicator-row[data-state="synced"],
.adlaire-confidence-score-card[data-state="high"],
.adlaire-freshness-badge[data-state="fresh"],
.adlaire-print-layout-panel[data-state="ready"] {
  border-color: var(--adlaire-semantic-success-border);
  color: var(--adlaire-semantic-success-text);
}

.adlaire-query-bar,
.adlaire-saved-filter-bar,
.adlaire-active-filter-chips,
.adlaire-facet-panel,
.adlaire-column-visibility-panel,
.adlaire-column-pin-rail,
.adlaire-record-list,
.adlaire-sync-queue-panel,
.adlaire-merge-suggestion-panel,
.adlaire-view-preset-switcher {
  display: grid;
  gap: 12px;
  padding: 14px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-md);
  color: var(--adlaire-surface-text);
}

.adlaire-sort-control,
.adlaire-row-action-menu,
.adlaire-record-detail-preview,
.adlaire-record-expansion-panel,
.adlaire-inline-edit-field,
.adlaire-edit-conflict-banner,
.adlaire-change-summary-card,
.adlaire-undo-action-banner,
.adlaire-import-job-card,
.adlaire-export-job-card,
.adlaire-data-quality-score,
.adlaire-duplicate-warning-card,
.adlaire-bulk-confirmation-panel,
.adlaire-bulk-result-summary,
.adlaire-selection-scope-notice,
.adlaire-table-footer-summary,
.adlaire-pagination-status,
.adlaire-saved-view-card,
.adlaire-record-audit-summary {
  display: grid;
  gap: 8px;
  padding: 12px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-sm);
  color: var(--adlaire-surface-text);
}

.adlaire-query-bar,
.adlaire-saved-filter-bar,
.adlaire-active-filter-chips,
.adlaire-column-pin-rail,
.adlaire-record-row,
.adlaire-row-action-menu,
.adlaire-inline-edit-field,
.adlaire-undo-action-banner,
.adlaire-sync-queue-item,
.adlaire-table-footer-summary,
.adlaire-pagination-status,
.adlaire-saved-view-card,
.adlaire-record-audit-summary {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
  justify-content: space-between;
}

.adlaire-query-bar,
.adlaire-saved-filter-bar,
.adlaire-active-filter-chips,
.adlaire-column-pin-rail,
.adlaire-view-preset-switcher {
  grid-template-columns: repeat(auto-fit, minmax(120px, max-content));
}

.adlaire-facet-panel,
.adlaire-column-visibility-panel,
.adlaire-record-list,
.adlaire-sync-queue-panel,
.adlaire-merge-suggestion-panel {
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
}

.adlaire-record-row,
.adlaire-sync-queue-item,
.adlaire-view-preset-option,
.adlaire-active-filter-chip,
.adlaire-facet-option,
.adlaire-column-option {
  padding: 10px 12px;
  background-color: var(--adlaire-surface-soft);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-sm);
  color: var(--adlaire-surface-text-muted);
}

.adlaire-sort-option,
.adlaire-column-pin-item,
.adlaire-view-preset-option,
.adlaire-record-row,
.adlaire-inline-edit-field,
.adlaire-bulk-confirmation-panel {
  cursor: pointer;
}

.adlaire-sort-option[aria-pressed="true"],
.adlaire-view-preset-option[aria-pressed="true"],
.adlaire-record-row[aria-selected="true"],
.adlaire-inline-edit-field[aria-pressed="true"],
.adlaire-bulk-confirmation-panel[aria-pressed="true"] {
  border-color: var(--adlaire-surface-accent);
  box-shadow: var(--adlaire-shadow-focus-ring);
  color: var(--adlaire-surface-accent-strong);
}

.adlaire-edit-conflict-banner[data-state="conflict"],
.adlaire-duplicate-warning-card[data-state="warning"],
.adlaire-selection-scope-notice[data-state="partial"] {
  background-color: var(--adlaire-semantic-warning-bg);
  border-color: var(--adlaire-semantic-warning-border);
  color: var(--adlaire-semantic-warning-text);
}

.adlaire-import-job-card[data-state="running"],
.adlaire-export-job-card[data-state="ready"],
.adlaire-data-quality-score[data-state="good"],
.adlaire-bulk-result-summary[data-state="complete"] {
  border-color: var(--adlaire-semantic-success-border);
  color: var(--adlaire-semantic-success-text);
}

.adlaire-agent-task-list,
.adlaire-run-status-rail,
.adlaire-execution-timeline,
.adlaire-context-attachment-tray,
.adlaire-context-source-list,
.adlaire-instruction-stack,
.adlaire-artifact-diff-panel,
.adlaire-recovery-action-list {
  display: grid;
  gap: 12px;
  padding: 14px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-md);
  color: var(--adlaire-surface-text);
}

.adlaire-agent-run-card,
.adlaire-automation-trigger-card,
.adlaire-tool-permission-card,
.adlaire-approval-gate-panel,
.adlaire-human-review-card,
.adlaire-checkpoint-card,
.adlaire-retry-checkpoint-panel,
.adlaire-handoff-card,
.adlaire-memory-note-card,
.adlaire-prompt-composer-panel,
.adlaire-model-setting-row,
.adlaire-reasoning-meter,
.adlaire-token-budget-meter,
.adlaire-artifact-preview-card,
.adlaire-output-validation-card,
.adlaire-guardrail-result-row,
.adlaire-failure-diagnosis-panel,
.adlaire-schedule-run-card,
.adlaire-recurring-automation-row,
.adlaire-notification-policy-card,
.adlaire-run-summary-panel {
  display: grid;
  gap: 8px;
  padding: 12px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-sm);
  color: var(--adlaire-surface-text);
}

.adlaire-agent-run-card,
.adlaire-automation-trigger-card,
.adlaire-tool-call-row,
.adlaire-tool-permission-card,
.adlaire-approval-gate-panel,
.adlaire-checkpoint-card,
.adlaire-handoff-card,
.adlaire-context-attachment-item,
.adlaire-context-source-item,
.adlaire-instruction-step,
.adlaire-model-setting-row,
.adlaire-guardrail-result-row,
.adlaire-recovery-action-item,
.adlaire-recurring-automation-row,
.adlaire-notification-policy-card,
.adlaire-run-summary-panel {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
  justify-content: space-between;
}

.adlaire-agent-task-list,
.adlaire-run-status-rail,
.adlaire-context-attachment-tray,
.adlaire-context-source-list,
.adlaire-recovery-action-list {
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
}

.adlaire-instruction-stack,
.adlaire-execution-timeline,
.adlaire-artifact-diff-panel {
  grid-template-columns: 1fr;
}

.adlaire-tool-call-row,
.adlaire-run-status-item,
.adlaire-execution-timeline-item,
.adlaire-context-attachment-item,
.adlaire-context-source-item,
.adlaire-instruction-step,
.adlaire-recovery-action-item {
  padding: 10px 12px;
  background-color: var(--adlaire-surface-soft);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-sm);
  color: var(--adlaire-surface-text-muted);
}

.adlaire-tool-permission-card,
.adlaire-approval-gate-panel,
.adlaire-checkpoint-card,
.adlaire-notification-policy-card {
  cursor: pointer;
}

.adlaire-tool-permission-card[aria-pressed="true"],
.adlaire-approval-gate-panel[aria-pressed="true"],
.adlaire-checkpoint-card[aria-selected="true"],
.adlaire-notification-policy-card[aria-pressed="true"] {
  border-color: var(--adlaire-surface-accent);
  box-shadow: var(--adlaire-shadow-focus-ring);
  color: var(--adlaire-surface-accent-strong);
}

.adlaire-token-budget-meter[data-state="high"],
.adlaire-guardrail-result-row[data-state="blocked"],
.adlaire-failure-diagnosis-panel[data-state="failed"] {
  background-color: var(--adlaire-semantic-warning-bg);
  border-color: var(--adlaire-semantic-warning-border);
  color: var(--adlaire-semantic-warning-text);
}

.adlaire-artifact-preview-card[data-state="ready"],
.adlaire-output-validation-card[data-state="valid"],
.adlaire-schedule-run-card[data-state="scheduled"],
.adlaire-run-summary-panel[data-state="complete"] {
  border-color: var(--adlaire-semantic-success-border);
  color: var(--adlaire-semantic-success-text);
}
`;
