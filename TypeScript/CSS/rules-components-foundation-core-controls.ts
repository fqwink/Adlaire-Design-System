export const COMPONENTS_FOUNDATION_CORE_CONTROLS_CSS = `.adlaire-button-group {
  display: inline-flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
}

.adlaire-icon-button {
  display: inline-flex;
  width: 40px;
  height: 40px;
  align-items: center;
  justify-content: center;
  padding: 0;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-md);
  color: var(--adlaire-surface-text);
  cursor: pointer;
  transition: background-color var(--adlaire-transition-fast), border-color var(--adlaire-transition-fast), color var(--adlaire-transition-fast);
}

.adlaire-icon-button:hover,
.adlaire-icon-button:focus-visible,
.adlaire-icon-button[aria-pressed="true"] {
  background-color: var(--adlaire-surface-soft);
  border-color: var(--adlaire-surface-accent);
  color: var(--adlaire-surface-accent);
}

.adlaire-icon-button:focus-visible {
  box-shadow: var(--adlaire-shadow-focus-ring);
  outline: 0;
}

.adlaire-icon-button img,
.adlaire-icon-button svg {
  width: 20px;
  height: 20px;
}

.adlaire-icon-button-group {
  display: inline-flex;
  gap: 6px;
  align-items: center;
  padding: 4px;
  background-color: var(--adlaire-surface-soft);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-lg);
}

.adlaire-toolbar {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-md);
}

.adlaire-toolbar-section {
  display: inline-flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
}

.adlaire-action-row {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  align-items: center;
  justify-content: flex-end;
}

.adlaire-action-row-start {
  justify-content: flex-start;
}

.adlaire-action-row-between {
  justify-content: space-between;
}

.adlaire-divider {
  height: 1px;
  margin: 24px 0;
  background-color: var(--adlaire-surface-border);
  border: 0;
}

.adlaire-stack {
  display: grid;
  gap: 16px;
}

.adlaire-stack-sm {
  gap: 8px;
}

.adlaire-stack-lg {
  gap: 24px;
}

.adlaire-inline {
  display: inline-flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
}

`;
