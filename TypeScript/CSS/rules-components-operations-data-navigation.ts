export const COMPONENTS_OPERATIONS_DATA_NAVIGATION_CSS = `.adlaire-language-switcher,
.adlaire-language-current,
.adlaire-language-list,
.adlaire-language-option {
  display: flex;
  gap: 8px;
  align-items: center;
}

.adlaire-language-switcher {
  position: relative;
}

.adlaire-language-list {
  flex-direction: column;
  min-width: 180px;
  padding: 8px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-md);
  box-shadow: var(--adlaire-shadow-card-hover);
}

.adlaire-language-option {
  width: 100%;
  padding: 8px 10px;
  border-radius: var(--adlaire-radius-sm);
  color: var(--adlaire-surface-text);
}

.adlaire-language-option[aria-current="true"],
.adlaire-language-option:hover {
  background-color: var(--adlaire-surface-soft);
  color: var(--adlaire-surface-accent);
}

.adlaire-table-toolbar,
.adlaire-table-footer,
.adlaire-pagination,
.adlaire-page-list {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-items: center;
}

.adlaire-table-toolbar,
.adlaire-table-footer {
  justify-content: space-between;
  margin-bottom: 12px;
}

.adlaire-pagination {
  justify-content: center;
}

.adlaire-page-list {
  margin: 0;
  padding: 0;
  list-style: none;
}

.adlaire-page-link,
.adlaire-page-current {
  display: inline-flex;
  min-width: 36px;
  min-height: 36px;
  align-items: center;
  justify-content: center;
  padding: 8px 10px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-sm);
  color: var(--adlaire-surface-text);
  font-weight: 600;
}

.adlaire-page-current,
.adlaire-page-link[aria-current="page"] {
  background-color: var(--adlaire-surface-accent);
  border-color: var(--adlaire-surface-accent);
  color: var(--adlaire-surface-card);
}

`;
