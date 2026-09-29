export const FORMS_COMPOSITE_CALENDAR_CSS = `.adlaire-date-picker {
  padding: 14px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-md);
}

.adlaire-date-preset-list {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.adlaire-calendar-header,
.adlaire-calendar-weekdays,
.adlaire-calendar-grid {
  display: grid;
  grid-template-columns: repeat(7, minmax(32px, 1fr));
  gap: 6px;
}

.adlaire-calendar-header {
  grid-template-columns: auto minmax(0, 1fr) auto;
  align-items: center;
}

.adlaire-calendar-title {
  color: var(--adlaire-surface-accent-strong);
  font-weight: 800;
  text-align: center;
}

.adlaire-calendar-weekday,
.adlaire-calendar-day {
  display: inline-flex;
  min-height: 34px;
  align-items: center;
  justify-content: center;
  padding: 6px;
  border-radius: var(--adlaire-radius-sm);
}

.adlaire-calendar-weekday {
  color: var(--adlaire-surface-text-subtle);
  font-size: 0.75rem;
  font-weight: 800;
  text-transform: uppercase;
}

.adlaire-calendar-day {
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  color: var(--adlaire-surface-text);
}

.adlaire-calendar-day:hover,
.adlaire-calendar-day:focus-visible,
.adlaire-calendar-day[aria-selected="true"] {
  background-color: var(--adlaire-semantic-selected-bg);
  border-color: var(--adlaire-semantic-selected-border);
  color: var(--adlaire-semantic-selected-text);
  outline: 0;
}

.adlaire-calendar-day[aria-disabled="true"] {
  background-color: var(--adlaire-surface-soft);
  color: var(--adlaire-surface-text-subtle);
  cursor: not-allowed;
}
`;
