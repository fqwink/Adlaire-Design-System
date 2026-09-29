export const FORMS_VALIDATION_CSS = `
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

.adlaire-admin-form {
  display: grid;
  gap: 18px;
}

.adlaire-admin-danger-zone {
  padding: 18px;
  background-color: var(--adlaire-semantic-danger-bg);
  border: 1px solid var(--adlaire-semantic-danger-border);
  border-radius: var(--adlaire-radius-md);
  color: var(--adlaire-semantic-danger-text);
}

.adlaire-scope,
.adlaire-restricted {
  display: inline-flex;
  gap: 6px;
  align-items: center;
  padding: 5px 9px;
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-sm);
  font-size: 0.875rem;
  font-weight: 600;
}

.adlaire-restricted {
  background-color: var(--adlaire-semantic-danger-bg);
  border-color: var(--adlaire-semantic-danger-border);
  color: var(--adlaire-semantic-danger-text);
}

.adlaire-stepper {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-items: center;
}

.adlaire-step {
  display: inline-flex;
  gap: 8px;
  align-items: center;
  padding: 8px 10px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-round);
  color: var(--adlaire-surface-text-muted);
}

.adlaire-step[aria-current="step"],
.adlaire-step-complete {
  border-color: var(--adlaire-surface-accent);
  color: var(--adlaire-surface-accent-strong);
}

.adlaire-filter-builder,
.adlaire-filter-rule {
  display: grid;
  gap: 10px;
}

.adlaire-filter-rule {
  grid-template-columns: minmax(140px, 1fr) minmax(120px, 0.8fr) minmax(160px, 1fr) auto;
  align-items: end;
  padding: 12px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-md);
}

@media (max-width: 480px) {
  .adlaire-date-range,
  .adlaire-settings-row,
  .adlaire-filter-rule {
    grid-template-columns: 1fr;
  }
}

.adlaire-filter-condition,
.adlaire-field-warning,
.adlaire-upload-error,
.adlaire-error-summary-item {
  display: block;
}

.adlaire-field-warning,
.adlaire-upload-error {
  color: var(--adlaire-alert-warning-text);
}

.adlaire-error-summary-item {
  color: var(--adlaire-alert-danger-text);
}
`;
