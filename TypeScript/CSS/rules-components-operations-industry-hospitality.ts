export const COMPONENTS_OPERATIONS_INDUSTRY_HOSPITALITY_CSS = `.adlaire-booking-summary-panel,
.adlaire-trip-status-timeline,
.adlaire-room-inventory-board,
.adlaire-amenity-request-queue,
.adlaire-event-schedule-board,
.adlaire-badge-print-queue,
.adlaire-venue-map-panel,
.adlaire-gate-status-board,
.adlaire-compensation-option-list,
.adlaire-recovery-task-board {
  display: grid;
  gap: 12px;
  padding: 14px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-md);
  color: var(--adlaire-surface-text);
}

.adlaire-itinerary-card,
.adlaire-fare-option-card,
.adlaire-disruption-alert-card,
.adlaire-reservation-card,
.adlaire-guest-folio-panel,
.adlaire-check-in-readiness-card,
.adlaire-session-card,
.adlaire-speaker-profile-card,
.adlaire-capacity-warning-panel,
.adlaire-seating-section-card,
.adlaire-access-pass-card,
.adlaire-crowd-flow-meter,
.adlaire-incident-guest-card,
.adlaire-service-note-panel,
.adlaire-satisfaction-follow-up-card {
  display: grid;
  gap: 8px;
  padding: 12px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-sm);
  color: var(--adlaire-surface-text);
}

.adlaire-traveler-profile-row,
.adlaire-trip-status-item,
.adlaire-room-inventory-item,
.adlaire-housekeeping-task-row,
.adlaire-amenity-request-item,
.adlaire-event-schedule-item,
.adlaire-attendee-check-in-row,
.adlaire-badge-print-item,
.adlaire-venue-map-item,
.adlaire-seat-hold-row,
.adlaire-gate-status-item,
.adlaire-compensation-option-item,
.adlaire-recovery-task-item,
.adlaire-refund-status-row {
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

.adlaire-room-inventory-board,
.adlaire-event-schedule-board,
.adlaire-gate-status-board,
.adlaire-compensation-option-list {
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
}

.adlaire-fare-option-card,
.adlaire-room-inventory-item,
.adlaire-recovery-task-item {
  cursor: pointer;
}

.adlaire-fare-option-card[aria-selected="true"],
.adlaire-room-inventory-item[aria-selected="true"],
.adlaire-recovery-task-item[aria-checked="true"] {
  border-color: var(--adlaire-surface-accent);
  box-shadow: var(--adlaire-shadow-focus-ring);
  color: var(--adlaire-surface-accent-strong);
}

.adlaire-disruption-alert-card[data-state="active"],
.adlaire-capacity-warning-panel[data-state="warning"],
.adlaire-incident-guest-card[data-state="open"] {
  background-color: var(--adlaire-semantic-warning-bg);
  border-color: var(--adlaire-semantic-warning-border);
  color: var(--adlaire-semantic-warning-text);
}

.adlaire-check-in-readiness-card[data-state="ready"],
.adlaire-access-pass-card[data-state="valid"],
.adlaire-satisfaction-follow-up-card[data-state="sent"] {
  border-color: var(--adlaire-semantic-success-border);
  color: var(--adlaire-semantic-success-text);
}

`;
