export const FORMS_FOUNDATION_BASE_CSS = `/* Adlaire-Design form components */
.contact-form {
  width: 100%;
}

.adlaire-form-group,
.form-group {
  margin-bottom: 1.5rem;
}

.adlaire-form-label,
.form-label {
  display: block;
  margin-bottom: 0.5rem;
  color: var(--adlaire-surface-text);
  font-weight: 500;
}

.adlaire-form-label.required::after,
.form-label.required::after {
  color: var(--adlaire-semantic-danger-color);
  content: " *";
}

.adlaire-form-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 12px;
}

.adlaire-field-hint {
  display: block;
  margin-top: 4px;
  color: var(--adlaire-surface-text-subtle);
  font-size: 0.875rem;
}

.adlaire-required-marker {
  color: var(--adlaire-semantic-danger-color);
  font-weight: 800;
}

.adlaire-input-addon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0 10px;
  background-color: var(--adlaire-surface-soft);
  border: 1px solid var(--adlaire-status-gray-ddd);
  color: var(--adlaire-surface-text-subtle);
  font-weight: 700;
}

.adlaire-validation-list {
  display: grid;
  gap: 6px;
  margin: 8px 0 0;
  padding-left: 18px;
  color: var(--adlaire-semantic-danger-text);
}

`;
