export const COMPONENTS_FOUNDATION_SUPPORT_FILTERS_CSS = `.adlaire-filter-chip-list {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.adlaire-filter-chip {
  display: inline-flex;
  min-height: 36px;
  align-items: center;
  justify-content: center;
  padding: 6px 12px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-sm);
  color: var(--adlaire-surface-text-muted);
  cursor: pointer;
}

.adlaire-filter-chip:hover,
.adlaire-filter-chip:focus-visible,
.adlaire-filter-chip[aria-pressed="true"] {
  background-color: var(--adlaire-surface-soft);
  border-color: var(--adlaire-surface-accent);
  color: var(--adlaire-surface-accent-strong);
  outline: 0;
}
`;
