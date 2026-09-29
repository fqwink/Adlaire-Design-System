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

`;
