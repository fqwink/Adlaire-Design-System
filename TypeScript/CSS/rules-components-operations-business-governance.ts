export const COMPONENTS_OPERATIONS_BUSINESS_GOVERNANCE_CSS =
  `.adlaire-key-result-tracker,
.adlaire-initiative-map,
.adlaire-confidence-indicator,
.adlaire-review-cadence,
.adlaire-portfolio-overview,
.adlaire-milestone-tracker,
.adlaire-dependency-register,
.adlaire-risk-issue-log,
.adlaire-capacity-planner,
.adlaire-availability-forecast,
.adlaire-vendor-scorecard,
.adlaire-sla-tracker,
.adlaire-procurement-pipeline,
.adlaire-change-calendar-panel {
  display: grid;
  gap: 12px;
  padding: 14px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-md);
  color: var(--adlaire-surface-text);
}

.adlaire-objective-card,
.adlaire-alignment-summary,
.adlaire-program-card,
.adlaire-project-health-panel,
.adlaire-utilization-summary,
.adlaire-staffing-request-card,
.adlaire-allocation-conflict,
.adlaire-supplier-profile,
.adlaire-contract-renewal-card,
.adlaire-service-request-card,
.adlaire-license-assignment-card,
.adlaire-maintenance-window-card,
.adlaire-postmortem-summary {
  display: grid;
  gap: 8px;
  padding: 12px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-sm);
  color: var(--adlaire-surface-text);
}

.adlaire-key-result-row,
.adlaire-review-cadence-item,
.adlaire-portfolio-overview-item,
.adlaire-dependency-register-item,
.adlaire-risk-issue-item,
.adlaire-allocation-row,
.adlaire-availability-forecast-item,
.adlaire-vendor-scorecard-item,
.adlaire-sla-tracker-item,
.adlaire-change-calendar-item,
.adlaire-asset-inventory-row,
.adlaire-compliance-attestation-row {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
  justify-content: space-between;
  padding: 10px 12px;
  background-color: var(--adlaire-surface-soft);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-sm);
  color: var(--adlaire-surface-text-muted);
}

.adlaire-objective-card {
  border-left: 4px solid var(--adlaire-surface-accent);
}

.adlaire-key-result-progress {
  overflow: hidden;
  width: min(160px, 100%);
  min-height: 10px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-round);
}

.adlaire-key-result-progress-value {
  min-height: 10px;
  background-color: var(--adlaire-surface-accent);
  border-radius: var(--adlaire-radius-round);
}

.adlaire-initiative-map,
.adlaire-portfolio-overview,
.adlaire-procurement-pipeline {
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
}

.adlaire-initiative-map-item,
.adlaire-milestone-step,
.adlaire-procurement-pipeline-step,
.adlaire-confidence-option {
  display: grid;
  gap: 4px;
  padding: 10px 12px;
  background-color: var(--adlaire-surface-soft);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-sm);
  color: var(--adlaire-surface-text-muted);
}

.adlaire-confidence-indicator {
  grid-template-columns: repeat(auto-fit, minmax(96px, 1fr));
}

.adlaire-confidence-option {
  cursor: pointer;
  text-align: left;
}

.adlaire-confidence-option[aria-pressed="true"],
.adlaire-milestone-step[aria-current="step"],
.adlaire-procurement-pipeline-step[aria-current="step"] {
  border-color: var(--adlaire-surface-accent);
  box-shadow: var(--adlaire-shadow-focus-ring);
  color: var(--adlaire-surface-accent-strong);
}

.adlaire-project-health-panel[data-state="at-risk"],
.adlaire-allocation-conflict,
.adlaire-sla-tracker-item[data-state="breached"],
.adlaire-service-request-card[data-priority="high"] {
  background-color: var(--adlaire-semantic-warning-bg);
  border-color: var(--adlaire-semantic-warning-border);
  color: var(--adlaire-semantic-warning-text);
}

.adlaire-capacity-planner {
  gap: 6px;
}

.adlaire-utilization-summary {
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
}

.adlaire-compliance-attestation-row[aria-pressed="true"] {
  border-color: var(--adlaire-semantic-success-border);
  color: var(--adlaire-semantic-success-text);
}

.adlaire-postmortem-summary {
  background-color: var(--adlaire-semantic-info-bg);
  border-color: var(--adlaire-semantic-info-border);
  color: var(--adlaire-semantic-info-text);
}

`;
