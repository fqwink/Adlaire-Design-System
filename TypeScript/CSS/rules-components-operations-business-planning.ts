export const COMPONENTS_OPERATIONS_BUSINESS_PLANNING_CSS =
  `.adlaire-agenda-view,
.adlaire-time-slot-grid,
.adlaire-resource-calendar,
.adlaire-availability-matrix,
.adlaire-location-card,
.adlaire-facility-map-panel,
.adlaire-area-status-grid,
.adlaire-comparison-matrix,
.adlaire-decision-scorecard,
.adlaire-document-library,
.adlaire-folder-tree,
.adlaire-download-queue,
.adlaire-session-list,
.adlaire-policy-exception-panel {
  display: grid;
  gap: 12px;
  padding: 14px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-md);
  color: var(--adlaire-surface-text);
}

.adlaire-agenda-row,
.adlaire-calendar-event,
.adlaire-booking-card,
.adlaire-location-card,
.adlaire-route-summary,
.adlaire-site-operating-hours,
.adlaire-option-card,
.adlaire-selection-summary,
.adlaire-file-version-card,
.adlaire-document-approval-state,
.adlaire-access-request-card,
.adlaire-device-trust-card,
.adlaire-security-event-row {
  display: grid;
  gap: 8px;
  padding: 12px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-sm);
  color: var(--adlaire-surface-text);
}

.adlaire-agenda-row,
.adlaire-calendar-event,
.adlaire-booking-card,
.adlaire-route-summary,
.adlaire-site-operating-hours,
.adlaire-file-version-card,
.adlaire-access-request-card,
.adlaire-device-trust-card,
.adlaire-security-event-row {
  grid-template-columns: minmax(72px, auto) minmax(0, 1fr) auto;
  align-items: center;
}

.adlaire-time-slot-grid,
.adlaire-availability-matrix,
.adlaire-area-status-grid {
  grid-template-columns: repeat(auto-fit, minmax(92px, 1fr));
}

.adlaire-time-slot {
  min-height: 44px;
  padding: 8px 10px;
  background-color: var(--adlaire-surface-soft);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-sm);
  color: var(--adlaire-surface-text-muted);
  cursor: pointer;
}

.adlaire-time-slot[aria-selected="true"],
.adlaire-time-slot:hover,
.adlaire-time-slot:focus-visible,
.adlaire-option-card[aria-selected="true"],
.adlaire-option-card:hover,
.adlaire-option-card:focus-visible {
  border-color: var(--adlaire-surface-accent);
  box-shadow: var(--adlaire-shadow-focus-ring);
  color: var(--adlaire-surface-accent-strong);
  outline: 0;
}

.adlaire-resource-calendar {
  grid-template-columns: minmax(160px, 0.8fr) minmax(0, 1.2fr);
}

.adlaire-availability-cell,
.adlaire-area-status-cell {
  min-height: 48px;
  padding: 8px;
  background-color: var(--adlaire-surface-soft);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-sm);
  color: var(--adlaire-surface-text-muted);
}

.adlaire-availability-cell[data-state="available"],
.adlaire-area-status-cell[data-state="open"] {
  background-color: var(--adlaire-semantic-success-bg);
  border-color: var(--adlaire-semantic-success-border);
  color: var(--adlaire-semantic-success-text);
}

.adlaire-availability-cell[data-state="busy"],
.adlaire-area-status-cell[data-state="busy"] {
  background-color: var(--adlaire-semantic-warning-bg);
  border-color: var(--adlaire-semantic-warning-border);
  color: var(--adlaire-semantic-warning-text);
}

.adlaire-facility-map-panel {
  min-height: 180px;
  place-items: center;
  background-color: var(--adlaire-surface-soft);
}

.adlaire-floor-selector {
  display: inline-flex;
  flex-wrap: wrap;
  gap: 6px;
  padding: 6px;
  background-color: var(--adlaire-surface-soft);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-lg);
}

.adlaire-floor-selector-button {
  min-width: 40px;
  min-height: 36px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-md);
  color: var(--adlaire-surface-text-muted);
  cursor: pointer;
}

.adlaire-floor-selector-button[aria-pressed="true"],
.adlaire-floor-selector-button:hover,
.adlaire-floor-selector-button:focus-visible {
  border-color: var(--adlaire-surface-accent);
  box-shadow: var(--adlaire-shadow-focus-ring);
  color: var(--adlaire-surface-accent);
  outline: 0;
}

.adlaire-comparison-matrix {
  overflow: auto;
}

.adlaire-comparison-matrix table {
  width: 100%;
  border-collapse: collapse;
}

.adlaire-comparison-matrix th,
.adlaire-comparison-matrix td {
  padding: 10px 12px;
  border-bottom: 1px solid var(--adlaire-surface-border);
  color: var(--adlaire-surface-text);
  text-align: left;
  white-space: nowrap;
}

.adlaire-option-card {
  cursor: pointer;
}

.adlaire-decision-scorecard {
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
}

.adlaire-decision-score {
  display: grid;
  gap: 4px;
  padding: 10px;
  background-color: var(--adlaire-surface-soft);
  border-radius: var(--adlaire-radius-sm);
  color: var(--adlaire-surface-text-muted);
}

.adlaire-tradeoff-list {
  display: grid;
  gap: 8px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.adlaire-tradeoff-item {
  padding: 10px 12px;
  background-color: var(--adlaire-surface-soft);
  border-left: 4px solid var(--adlaire-surface-accent);
  border-radius: var(--adlaire-radius-sm);
  color: var(--adlaire-surface-text-muted);
}

.adlaire-recommendation-banner {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-items: center;
  justify-content: space-between;
  padding: 12px 14px;
  background-color: var(--adlaire-semantic-info-bg);
  border: 1px solid var(--adlaire-semantic-info-border);
  border-radius: var(--adlaire-radius-md);
  color: var(--adlaire-semantic-info-text);
}

.adlaire-document-library {
  grid-template-columns: minmax(180px, 0.8fr) minmax(0, 1.2fr);
}

.adlaire-folder-tree,
.adlaire-folder-list,
.adlaire-folder-branch {
  display: grid;
  gap: 6px;
}

.adlaire-folder-list,
.adlaire-folder-branch {
  margin: 0;
  padding: 0;
  list-style: none;
}

.adlaire-folder-branch {
  padding-left: 18px;
  border-left: 1px solid var(--adlaire-surface-border);
}

.adlaire-folder-branch[hidden] {
  display: none;
}

.adlaire-folder-row {
  display: flex;
  gap: 8px;
  align-items: center;
  padding: 8px 10px;
  background-color: var(--adlaire-surface-soft);
  border-radius: var(--adlaire-radius-sm);
  color: var(--adlaire-surface-text-muted);
}

.adlaire-folder-toggle {
  min-width: 28px;
  min-height: 28px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-sm);
  color: var(--adlaire-surface-text-muted);
  cursor: pointer;
}

.adlaire-folder-toggle[aria-expanded="true"],
.adlaire-folder-toggle:hover,
.adlaire-folder-toggle:focus-visible {
  border-color: var(--adlaire-surface-accent);
  box-shadow: var(--adlaire-shadow-focus-ring);
  color: var(--adlaire-surface-accent);
  outline: 0;
}

.adlaire-retention-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 4px 8px;
  background-color: var(--adlaire-semantic-muted-bg);
  border: 1px solid var(--adlaire-semantic-muted-border);
  border-radius: var(--adlaire-radius-round);
  color: var(--adlaire-semantic-muted-text);
  font-size: 0.75rem;
  font-weight: 800;
}

.adlaire-download-queue {
  gap: 6px;
}

.adlaire-download-queue-item,
.adlaire-permission-grant-row,
.adlaire-session-list-item {
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

.adlaire-policy-exception-header,
.adlaire-policy-exception-body {
  display: grid;
  gap: 8px;
}

.adlaire-policy-exception-body {
  padding-top: 10px;
  border-top: 1px solid var(--adlaire-surface-border);
}

.adlaire-policy-exception-body[hidden] {
  display: none;
}

`;
