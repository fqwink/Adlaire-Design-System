export const FORMS_VALIDATION_STEPPER_CSS = `.adlaire-stepper {
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

.adlaire-stepper-control {
  display: inline-grid;
  grid-template-columns: auto minmax(64px, 1fr) auto;
  gap: 6px;
  align-items: center;
  max-width: 220px;
}

.adlaire-stepper-action {
  display: inline-flex;
  min-width: 34px;
  min-height: 34px;
  align-items: center;
  justify-content: center;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-sm);
  color: var(--adlaire-surface-accent-strong);
  cursor: pointer;
  font-weight: 800;
}

.adlaire-stepper-action:hover,
.adlaire-stepper-action:focus-visible {
  background-color: var(--adlaire-surface-soft);
  outline: 0;
}

`;
