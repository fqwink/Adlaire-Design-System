export const FORMS_COMPOSITE_SELECTS_CSS = `.adlaire-combobox,
.adlaire-multi-select,
.adlaire-token-input,
.adlaire-segmented-control,
.adlaire-radio-card-group,
.adlaire-switch-group,
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
.adlaire-segmented-option,
.adlaire-radio-card,
.adlaire-switch-item,
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
.adlaire-segmented-option:hover,
.adlaire-segmented-option:focus-visible,
.adlaire-segmented-option[aria-pressed="true"],
.adlaire-radio-card:hover,
.adlaire-radio-card:focus-visible,
.adlaire-radio-card[aria-checked="true"],
.adlaire-switch-item:hover,
.adlaire-switch-item:focus-visible,
.adlaire-switch-item[aria-checked="true"],
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

.adlaire-segmented-control {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  padding: 4px;
  background-color: var(--adlaire-surface-soft);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-md);
}

.adlaire-segmented-option {
  width: auto;
  flex: 1 1 0;
  justify-content: center;
  min-width: 88px;
}

.adlaire-radio-card-group {
  grid-template-columns: repeat(auto-fit, minmax(128px, 1fr));
}

.adlaire-radio-card {
  min-height: 72px;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  border: 1px solid var(--adlaire-surface-border);
}

.adlaire-switch-group {
  gap: 6px;
}

.adlaire-switch-item {
  justify-content: space-between;
}

`;
