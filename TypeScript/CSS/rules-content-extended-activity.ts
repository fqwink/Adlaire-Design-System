export const CONTENT_EXTENDED_ACTIVITY_CSS = `.adlaire-audit-trail,
.adlaire-activity-log,
.adlaire-admin-audit-log {
  display: grid;
  gap: 10px;
}

.adlaire-activity-item,
.adlaire-audit-item {
  display: grid;
  grid-template-columns: minmax(120px, auto) minmax(0, 1fr) auto;
  gap: 12px;
  align-items: start;
  padding: 12px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-sm);
}

.adlaire-activity-actor {
  color: var(--adlaire-surface-accent-strong);
  font-weight: 700;
}

.adlaire-activity-time {
  color: var(--adlaire-surface-text-subtle);
  font-family: var(--adlaire-font-family-mono);
  font-size: 0.875rem;
}

`;
