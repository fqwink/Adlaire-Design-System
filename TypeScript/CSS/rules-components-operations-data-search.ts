export const COMPONENTS_OPERATIONS_DATA_SEARCH_CSS = `.adlaire-search-box,
.adlaire-search-results,
.adlaire-command-palette,
.adlaire-omnibar {
  display: grid;
  gap: 10px;
}

.adlaire-search-box,
.adlaire-command-palette,
.adlaire-omnibar {
  padding: 12px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-md);
}

.adlaire-search-input,
.adlaire-command-input,
.adlaire-omnibar-input {
  width: 100%;
  padding: 10px 12px;
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-sm);
}

.adlaire-command-item,
.adlaire-omnibar-result,
.adlaire-search-result {
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: space-between;
  padding: 10px 12px;
  border-radius: var(--adlaire-radius-sm);
  color: var(--adlaire-surface-text);
}

.adlaire-command-item[aria-selected="true"],
.adlaire-command-item:hover,
.adlaire-omnibar-result[aria-selected="true"],
.adlaire-omnibar-result:hover,
.adlaire-search-result:hover {
  background-color: var(--adlaire-surface-soft);
  color: var(--adlaire-surface-accent);
}

.adlaire-command-shortcut {
  color: var(--adlaire-surface-text-subtle);
  font-family: var(--adlaire-font-family-mono);
  font-size: 0.75rem;
}

.adlaire-omnibar-empty {
  padding: 12px;
  color: var(--adlaire-surface-text-subtle);
}

`;
