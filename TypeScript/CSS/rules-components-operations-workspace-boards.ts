export const COMPONENTS_OPERATIONS_WORKSPACE_BOARDS_CSS = `.adlaire-kanban-board {
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

`;
