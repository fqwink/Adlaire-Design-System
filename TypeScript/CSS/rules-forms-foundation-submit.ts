export const FORMS_FOUNDATION_SUBMIT_CSS = `.adlaire-button-submit,
.btn-submit {
  padding: 15px 40px;
  background: linear-gradient(135deg, var(--adlaire-surface-accent) 0%, var(--adlaire-surface-accent-strong) 100%);
  border: none;
  border-radius: var(--adlaire-radius-sm);
  box-shadow: var(--adlaire-shadow-blue);
  color: var(--adlaire-surface-card);
  cursor: pointer;
  font-size: 1.1rem;
  font-weight: 600;
  transition: box-shadow var(--adlaire-transition-base), transform var(--adlaire-transition-base);
}

.adlaire-button-submit:hover,
.btn-submit:hover {
  box-shadow: var(--adlaire-shadow-blue-hover);
  transform: translateY(-2px);
}

.adlaire-button-disabled,
.adlaire-button-submit:disabled,
.btn-submit:disabled {
  background: linear-gradient(135deg, var(--adlaire-status-gray-ccc) 0%, var(--adlaire-status-gray-999) 100%);
  box-shadow: none;
  cursor: not-allowed;
  transform: none;
}
`;
