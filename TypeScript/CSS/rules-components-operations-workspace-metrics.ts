export const COMPONENTS_OPERATIONS_WORKSPACE_METRICS_CSS = `.adlaire-sparkline,
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

`;
