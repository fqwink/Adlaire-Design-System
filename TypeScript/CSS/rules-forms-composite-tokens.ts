export const FORMS_COMPOSITE_TOKENS_CSS = `.adlaire-multi-select-list {
  display: grid;
  gap: 4px;
  padding: 6px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-md);
}

.adlaire-token-list {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  min-height: 34px;
  align-items: center;
}

.adlaire-token {
  display: inline-flex;
  gap: 6px;
  align-items: center;
  padding: 5px 8px;
  background-color: var(--adlaire-semantic-selected-bg);
  border: 1px solid var(--adlaire-semantic-selected-border);
  border-radius: var(--adlaire-radius-round);
  color: var(--adlaire-semantic-selected-text);
  font-size: 0.875rem;
  font-weight: 700;
}

.adlaire-token-remove {
  display: inline-flex;
  min-width: 20px;
  min-height: 20px;
  align-items: center;
  justify-content: center;
  padding: 0;
  background-color: transparent;
  border: 0;
  color: inherit;
  cursor: pointer;
}

.adlaire-token-count,
.adlaire-character-count {
  color: var(--adlaire-surface-text-subtle);
  font-size: 0.8125rem;
  font-weight: 700;
}

.adlaire-range-field {
  --adlaire-range-value: 0%;
  display: grid;
  gap: 8px;
}

.adlaire-range-meter {
  overflow: hidden;
  height: 6px;
  background-color: var(--adlaire-surface-soft);
  border-radius: var(--adlaire-radius-round);
}

.adlaire-range-meter::before {
  display: block;
  width: var(--adlaire-range-value, 0%);
  height: 100%;
  background-color: var(--adlaire-surface-accent);
  content: "";
}

`;
