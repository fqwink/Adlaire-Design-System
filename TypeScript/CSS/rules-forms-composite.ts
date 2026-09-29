export const FORMS_COMPOSITE_CSS = `
.adlaire-filter {
  display: grid;
  gap: 16px;
}

.adlaire-filter-row {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  align-items: center;
}

.adlaire-filter-input {
  min-width: min(100%, 260px);
  flex: 1 1 260px;
}

.adlaire-filter-count {
  color: var(--adlaire-surface-text-subtle);
  font-size: 0.875rem;
}

.adlaire-filter-item[hidden] {
  display: none;
}

.adlaire-input-group,
.adlaire-composite-input {
  display: flex;
  width: 100%;
  align-items: stretch;
}

.adlaire-input-group .adlaire-form-control,
.adlaire-composite-input .adlaire-form-control {
  min-width: 0;
  flex: 1 1 auto;
  border-radius: 0;
}

.adlaire-input-prefix,
.adlaire-input-suffix {
  display: inline-flex;
  align-items: center;
  padding: 0 12px;
  background-color: var(--adlaire-surface-soft);
  border: 1px solid var(--adlaire-status-gray-ddd);
  color: var(--adlaire-surface-text-subtle);
  font-weight: 600;
}

.adlaire-input-prefix {
  border-right: 0;
  border-radius: var(--adlaire-radius-sm) 0 0 var(--adlaire-radius-sm);
}

.adlaire-input-suffix {
  border-left: 0;
  border-radius: 0 var(--adlaire-radius-sm) var(--adlaire-radius-sm) 0;
}

.adlaire-date-input,
.adlaire-time-input,
.adlaire-period-field {
  display: grid;
  gap: 8px;
}

.adlaire-date-range {
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto minmax(0, 1fr);
  gap: 10px;
  align-items: center;
}

.adlaire-combobox,
.adlaire-multi-select,
.adlaire-token-input,
.adlaire-date-picker,
.adlaire-calendar {
  display: grid;
  gap: 10px;
}

.adlaire-combobox {
  position: relative;
}

.adlaire-combobox-input {
  width: 100%;
}

.adlaire-combobox-listbox {
  display: grid;
  max-height: 220px;
  gap: 4px;
  overflow: auto;
  padding: 6px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-md);
  box-shadow: var(--adlaire-shadow-card);
}

.adlaire-combobox-listbox[hidden] {
  display: none;
}

.adlaire-combobox-option,
.adlaire-multi-select-option,
.adlaire-date-preset {
  display: flex;
  width: 100%;
  gap: 8px;
  align-items: center;
  justify-content: space-between;
  padding: 8px 10px;
  background-color: transparent;
  border: 0;
  border-radius: var(--adlaire-radius-sm);
  color: var(--adlaire-surface-text);
  cursor: pointer;
  text-align: left;
}

.adlaire-combobox-option:hover,
.adlaire-combobox-option:focus-visible,
.adlaire-combobox-option[aria-selected="true"],
.adlaire-multi-select-option:hover,
.adlaire-multi-select-option:focus-visible,
.adlaire-multi-select-option[aria-selected="true"],
.adlaire-date-preset:hover,
.adlaire-date-preset:focus-visible,
.adlaire-date-preset[aria-pressed="true"] {
  background-color: var(--adlaire-surface-soft);
  color: var(--adlaire-surface-accent-strong);
  outline: 0;
}

.adlaire-combobox-option[hidden],
.adlaire-multi-select-option[hidden] {
  display: none;
}

.adlaire-multi-select-list {
  display: grid;
  gap: 4px;
  padding: 6px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-md);
}

.adlaire-token-list {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  min-height: 34px;
  align-items: center;
}

.adlaire-token {
  display: inline-flex;
  gap: 6px;
  align-items: center;
  padding: 5px 8px;
  background-color: var(--adlaire-semantic-selected-bg);
  border: 1px solid var(--adlaire-semantic-selected-border);
  border-radius: var(--adlaire-radius-round);
  color: var(--adlaire-semantic-selected-text);
  font-size: 0.875rem;
  font-weight: 700;
}

.adlaire-token-remove {
  display: inline-flex;
  min-width: 20px;
  min-height: 20px;
  align-items: center;
  justify-content: center;
  padding: 0;
  background-color: transparent;
  border: 0;
  color: inherit;
  cursor: pointer;
}

.adlaire-date-picker {
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
