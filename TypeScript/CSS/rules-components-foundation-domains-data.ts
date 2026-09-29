export const COMPONENTS_FOUNDATION_DOMAINS_DATA_CSS = `.adlaire-dataset-card,
.adlaire-job-run-card,
.adlaire-model-card,
.adlaire-vector-index {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  gap: 12px;
  align-items: center;
  padding: 14px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-lg);
}

.adlaire-dataset-card img,
.adlaire-pipeline-board img,
.adlaire-job-run-card img,
.adlaire-run-queue img,
.adlaire-model-card img,
.adlaire-vector-index img,
.adlaire-anomaly-list img {
  width: 20px;
  height: 20px;
  flex: 0 0 auto;
}

.adlaire-dataset-card span,
.adlaire-job-run-card span,
.adlaire-model-card span,
.adlaire-vector-index span {
  display: block;
  margin-top: 2px;
  color: var(--adlaire-surface-text-subtle);
  font-size: 0.875rem;
}

.adlaire-query-console,
.adlaire-worker-pool,
.adlaire-prompt-panel,
.adlaire-eval-summary,
.adlaire-guardrail-panel,
.adlaire-drift-monitor,
.adlaire-data-access-panel {
  display: grid;
  gap: 10px;
  padding: 16px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-lg);
}

.adlaire-query-console code,
.adlaire-prompt-panel code {
  min-width: 0;
  overflow-x: auto;
  padding: 10px 12px;
  background-color: var(--adlaire-surface-soft);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-md);
  color: var(--adlaire-surface-text-muted);
  font-family: var(--adlaire-font-family-mono);
}

.adlaire-schema-table,
.adlaire-score-breakdown {
  display: grid;
  overflow: hidden;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-md);
}

.adlaire-schema-row,
.adlaire-score-row {
  display: grid;
  grid-template-columns: minmax(140px, 1fr) auto;
  gap: 12px;
  align-items: center;
  padding: 12px;
  border-bottom: 1px solid var(--adlaire-surface-border);
  color: var(--adlaire-surface-text-muted);
}

.adlaire-schema-row:last-child,
.adlaire-score-row:last-child {
  border-bottom: 0;
}

.adlaire-pipeline-board,
.adlaire-run-queue,
.adlaire-anomaly-list {
  display: grid;
  gap: 10px;
  margin: 0;
  padding: 12px;
  background-color: var(--adlaire-surface-soft);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-md);
  list-style: none;
}

.adlaire-pipeline-stage,
.adlaire-run-queue-item,
.adlaire-anomaly-item {
  display: flex;
  gap: 10px;
  align-items: center;
  min-width: 0;
  padding: 10px 12px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-md);
  color: var(--adlaire-surface-text-muted);
}

.adlaire-worker-pool > span,
.adlaire-eval-summary > span,
.adlaire-drift-monitor > span,
.adlaire-data-access-panel > span,
.adlaire-score-row strong {
  color: var(--adlaire-surface-accent-strong);
  font-size: 1.25rem;
  font-weight: 800;
  line-height: 1.1;
}

`;
