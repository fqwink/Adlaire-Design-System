export const COMPONENTS_OPERATIONS_ADMIN_LIFECYCLE_CSS =
  `.adlaire-admin-notification-center,
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

`;
