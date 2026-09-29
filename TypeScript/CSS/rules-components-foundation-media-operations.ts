export const COMPONENTS_FOUNDATION_MEDIA_OPERATIONS_CSS = `.adlaire-monitoring-card,
.adlaire-deployment-card,
.adlaire-team-card {
  display: grid;
  gap: 12px;
  padding: 18px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-lg);
  box-shadow: var(--adlaire-shadow-card);
  color: var(--adlaire-surface-text-muted);
}

.adlaire-monitoring-card-header,
.adlaire-deployment-card-header,
.adlaire-team-card-header {
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: space-between;
  color: var(--adlaire-surface-text);
  font-weight: 700;
}

.adlaire-monitoring-card-metric {
  color: var(--adlaire-surface-accent-strong);
  font-size: 1.6rem;
  font-weight: 700;
}

.adlaire-release-notes {
  display: grid;
  gap: 12px;
  padding: 18px;
  background-color: var(--adlaire-surface-soft);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-lg);
}

.adlaire-release-note-item {
  display: grid;
  gap: 4px;
  padding-bottom: 10px;
  border-bottom: 1px solid var(--adlaire-surface-border);
  color: var(--adlaire-surface-text-muted);
}

.adlaire-release-note-item:last-child {
  padding-bottom: 0;
  border-bottom: 0;
}

.adlaire-query-result {
  display: grid;
  min-width: 0;
  overflow-x: auto;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-md);
}

.adlaire-query-result table {
  width: 100%;
  min-width: 560px;
  border-collapse: collapse;
}

.adlaire-query-result th,
.adlaire-query-result td {
  padding: 10px 12px;
  border-bottom: 1px solid var(--adlaire-surface-border);
  color: var(--adlaire-surface-text-muted);
  text-align: left;
}

.adlaire-query-result th {
  background-color: var(--adlaire-surface-soft);
  color: var(--adlaire-surface-text);
}

.adlaire-organization-switcher {
  display: inline-flex;
  gap: 10px;
  align-items: center;
  padding: 10px 12px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-md);
  color: var(--adlaire-surface-text);
}

.adlaire-responsive-preview {
  display: grid;
  gap: 10px;
  padding: 14px;
  background-color: var(--adlaire-surface-soft);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-lg);
}

.adlaire-responsive-preview-frame {
  min-height: 120px;
  padding: 16px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-md);
}

`;
