export const CONTENT_INTERACTIONS_SORTING_CSS = `
.adlaire-sortable-table {
  width: 100%;
  border-collapse: collapse;
}

.adlaire-sortable-table th {
  vertical-align: middle;
}

.adlaire-sort-button {
  display: inline-flex;
  min-height: 32px;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  width: 100%;
  padding: 4px 0;
  background-color: transparent;
  border: 0;
  color: inherit;
  cursor: pointer;
  font: inherit;
  font-weight: 700;
  text-align: left;
}

.adlaire-sort-button:hover,
.adlaire-sort-button:focus-visible {
  color: var(--adlaire-surface-accent);
  outline: 0;
}

.adlaire-sort-button::after {
  content: "";
  width: 0;
  height: 0;
  border-right: 4px solid transparent;
  border-left: 4px solid transparent;
  border-top: 6px solid var(--adlaire-status-gray-999);
}

[aria-sort="ascending"] .adlaire-sort-button::after {
  border-top: 0;
  border-bottom: 6px solid var(--adlaire-surface-accent);
}

[aria-sort="descending"] .adlaire-sort-button::after {
  border-top-color: var(--adlaire-surface-accent);
}

.adlaire-filter-results {
  display: grid;
  gap: 12px;
}

.adlaire-filter-empty {
  display: none;
  padding: 16px;
  background-color: var(--adlaire-surface-soft);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-md);
  color: var(--adlaire-surface-text-muted);
}

.adlaire-filter-empty.is-open {
  display: block;
}

`;
