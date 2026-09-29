export const FORMS_COMPOSITE_INPUT_GROUPS_CSS = `.adlaire-input-group,
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

`;
