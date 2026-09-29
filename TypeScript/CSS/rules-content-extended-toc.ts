export const CONTENT_EXTENDED_TOC_CSS = `
/* Implemented extended content UI patterns */
.adlaire-toc,
.adlaire-toc-list,
.adlaire-toc-item {
  display: grid;
  gap: 8px;
}

.adlaire-toc {
  padding: 16px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-md);
}

.adlaire-toc-list {
  margin: 0;
  padding: 0;
  list-style: none;
}

.adlaire-toc-link {
  color: var(--adlaire-surface-text);
  text-decoration: none;
}

.adlaire-toc-link:hover,
.adlaire-toc-link[aria-current="true"] {
  color: var(--adlaire-surface-accent);
  text-decoration: underline;
}

`;
