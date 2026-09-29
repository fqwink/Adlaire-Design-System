export const COMPONENTS_FOUNDATION_MEDIA_GOVERNANCE_CSS = `.adlaire-permission-matrix {
  display: grid;
  min-width: 0;
  overflow-x: auto;
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-md);
}

.adlaire-permission-matrix table {
  width: 100%;
  min-width: 520px;
  border-collapse: collapse;
}

.adlaire-permission-matrix th,
.adlaire-permission-matrix td {
  padding: 10px 12px;
  border-bottom: 1px solid var(--adlaire-surface-border);
  color: var(--adlaire-surface-text-muted);
  text-align: left;
}

.adlaire-permission-matrix th {
  background-color: var(--adlaire-surface-soft);
  color: var(--adlaire-surface-text);
  font-weight: 700;
}

.adlaire-status-timeline,
.adlaire-approval-flow,
.adlaire-review-checklist {
  display: grid;
  gap: 10px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.adlaire-status-timeline-item,
.adlaire-approval-flow-item,
.adlaire-review-checklist-item {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  gap: 12px;
  align-items: start;
  padding: 12px 14px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-md);
  color: var(--adlaire-surface-text-muted);
}

.adlaire-status-timeline-item::before,
.adlaire-approval-flow-item::before {
  width: 12px;
  height: 12px;
  margin-top: 6px;
  background-color: var(--adlaire-semantic-selected-border);
  border-radius: var(--adlaire-radius-round);
  content: "";
}

`;
