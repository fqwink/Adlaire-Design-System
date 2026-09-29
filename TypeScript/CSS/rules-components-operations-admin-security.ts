export const COMPONENTS_OPERATIONS_ADMIN_SECURITY_CSS = `.adlaire-admin-security-overview,
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
