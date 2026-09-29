export const FORMS_COMPOSITE_SELECTS_CSS = `.adlaire-combobox,
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

`;
