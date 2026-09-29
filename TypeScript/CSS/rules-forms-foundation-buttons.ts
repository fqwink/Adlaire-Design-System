export const FORMS_FOUNDATION_BUTTONS_CSS = `.adlaire-button,
.btn {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  border: 1px solid transparent;
  border-radius: var(--adlaire-radius-sm);
  cursor: pointer;
  font-size: 1rem;
  font-weight: 500;
  text-align: center;
  text-decoration: none;
  transition: background-color var(--adlaire-transition-button), border-color var(--adlaire-transition-button), box-shadow var(--adlaire-transition-button), color var(--adlaire-transition-button), transform var(--adlaire-transition-button);
}

.adlaire-button:hover,
.btn:hover {
  box-shadow: var(--adlaire-shadow-button);
  text-decoration: none;
  transform: translateY(-1px);
}

.adlaire-button-primary,
.btn-primary {
  background-color: var(--adlaire-surface-accent);
  border-color: var(--adlaire-surface-accent);
  color: var(--adlaire-surface-card);
}

.adlaire-button-primary:hover,
.btn-primary:hover {
  background-color: var(--adlaire-surface-accent-mid);
  border-color: var(--adlaire-surface-accent-mid);
}

.adlaire-button-secondary,
.btn-secondary {
  background-color: var(--adlaire-status-secondary);
  border-color: var(--adlaire-status-secondary);
  color: var(--adlaire-surface-card);
}

.adlaire-button-secondary:hover,
.btn-secondary:hover {
  background-color: var(--adlaire-status-secondary-strong);
  border-color: var(--adlaire-status-secondary-strong);
}

.adlaire-button-outline,
.btn-outline-primary {
  background-color: transparent;
  border-color: var(--adlaire-surface-accent);
  color: var(--adlaire-surface-accent);
}

.adlaire-button-outline:hover,
.btn-outline-primary:hover {
  background-color: var(--adlaire-surface-accent);
  color: var(--adlaire-surface-card);
}

.btn-block {
  display: block;
  width: 100%;
}

.btn-lg {
  padding: 1rem 2rem;
  font-size: 1.125rem;
}

.btn-sm {
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
}

`;
