export const FORMS_UPLOAD_TOGGLES_CSS = `.adlaire-toggle {
  position: relative;
  display: inline-flex;
  width: 44px;
  height: 24px;
  align-items: center;
  padding: 2px;
  background-color: var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-round);
}

.adlaire-toggle::after {
  width: 20px;
  height: 20px;
  background-color: var(--adlaire-surface-card);
  border-radius: var(--adlaire-radius-round);
  content: "";
  transition: transform var(--adlaire-transition-fast);
}

.adlaire-toggle[aria-checked="true"] {
  background-color: var(--adlaire-surface-accent);
}

.adlaire-toggle[aria-checked="true"]::after {
  transform: translateX(20px);
}

`;
