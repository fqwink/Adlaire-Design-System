export const COMPONENTS_OPERATIONS_ADMIN_ACTIONS_CSS =
  `.adlaire-admin-action-bar,
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

`;
