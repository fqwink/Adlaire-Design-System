export const FORMS_VALIDATION_FIELDS_CSS = `
.adlaire-field,
.adlaire-field-error,
.adlaire-field-success,
.adlaire-error-summary,
.adlaire-error-summary-list,
.adlaire-validation-message {
  display: grid;
  gap: 8px;
}

.adlaire-field-error .adlaire-form-control,
.adlaire-form-control[aria-invalid="true"] {
  border-color: var(--adlaire-semantic-danger-color);
}

.adlaire-field-success .adlaire-form-control {
  border-color: var(--adlaire-semantic-success-color);
}

.adlaire-field[data-adlaire-field-dirty="true"] .adlaire-input-hint,
.adlaire-field[data-adlaire-field-touched="true"] .adlaire-character-count {
  color: var(--adlaire-surface-accent-strong);
}

.adlaire-error-summary {
  padding: 14px 16px;
  background-color: var(--adlaire-semantic-danger-bg);
  border: 1px solid var(--adlaire-semantic-danger-border);
  border-radius: var(--adlaire-radius-sm);
  color: var(--adlaire-semantic-danger-text);
}

.adlaire-input-hint {
  color: var(--adlaire-surface-text-subtle);
  font-size: 0.875rem;
  line-height: 1.5;
}

.adlaire-validation-message {
  color: var(--adlaire-semantic-danger-text);
  font-size: 0.875rem;
}

.adlaire-field-success .adlaire-validation-message {
  color: var(--adlaire-semantic-success-color);
}

`;
