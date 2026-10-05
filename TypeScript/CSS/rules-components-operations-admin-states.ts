export const COMPONENTS_OPERATIONS_ADMIN_STATES_CSS =
  `.adlaire-admin-empty-state,
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

`;
