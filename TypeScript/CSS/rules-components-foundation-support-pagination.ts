export const COMPONENTS_FOUNDATION_SUPPORT_PAGINATION_CSS =
  `.adlaire-pagination {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
  margin: 0;
  padding: 0;
  list-style: none;
}

.adlaire-page-link {
  display: inline-flex;
  min-width: 36px;
  min-height: 36px;
  align-items: center;
  justify-content: center;
  padding: 6px 10px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-sm);
  color: var(--adlaire-surface-text-muted);
  text-decoration: none;
}

.adlaire-page-link:hover,
.adlaire-page-link:focus-visible {
  border-color: var(--adlaire-surface-accent);
  box-shadow: var(--adlaire-shadow-focus-ring);
  color: var(--adlaire-surface-accent);
  outline: 0;
}

.adlaire-page-link-current,
.adlaire-page-link[aria-current="page"] {
  background-color: var(--adlaire-surface-accent);
  border-color: var(--adlaire-surface-accent);
  color: var(--adlaire-surface-card);
  font-weight: 700;
}

.adlaire-page-link-disabled,
.adlaire-page-link[aria-disabled="true"] {
  background-color: var(--adlaire-status-gray-light);
  color: var(--adlaire-status-gray-999);
  cursor: not-allowed;
  pointer-events: none;
}

`;
