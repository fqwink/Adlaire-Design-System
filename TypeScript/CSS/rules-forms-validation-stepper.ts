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

`;
