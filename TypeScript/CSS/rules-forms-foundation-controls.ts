export const FORMS_FOUNDATION_CONTROLS_CSS = `.adlaire-form-control,
.form-control {
  display: block;
  width: 100%;
  padding: 0.75rem 1rem;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-status-gray-ddd);
  border-radius: var(--adlaire-radius-sm);
  color: var(--adlaire-surface-text);
  font-size: 1rem;
  line-height: 1.5;
  transition: border-color var(--adlaire-transition-fast), box-shadow var(--adlaire-transition-fast);
}

.adlaire-form-control:focus,
.form-control:focus {
  border-color: var(--adlaire-semantic-focus-color);
  box-shadow: var(--adlaire-semantic-focus-ring);
  outline: 0;
}

textarea.adlaire-form-control,
textarea.form-control {
  min-height: 120px;
  resize: vertical;
}

select.adlaire-form-control,
select.form-control {
  cursor: pointer;
}

`;
