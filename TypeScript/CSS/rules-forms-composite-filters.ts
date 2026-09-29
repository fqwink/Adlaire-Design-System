export const FORMS_COMPOSITE_FILTERS_CSS = `
.adlaire-filter {
  display: grid;
  gap: 16px;
}

.adlaire-filter-row {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  align-items: center;
}

.adlaire-filter-input {
  min-width: min(100%, 260px);
  flex: 1 1 260px;
}

.adlaire-filter-count {
  color: var(--adlaire-surface-text-subtle);
  font-size: 0.875rem;
}

.adlaire-filter-item[hidden] {
  display: none;
}

`;
