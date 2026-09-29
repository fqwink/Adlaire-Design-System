export const CONTENT_CATALOG_LEGAL_CSS = `.adlaire-legal-toc,
.legal-toc {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  padding: 10px 0;
}

.legal-toc-card {
  position: sticky;
  top: 20px;
  z-index: var(--adlaire-z-sticky);
  background-color: var(--adlaire-surface-soft);
  border-left: 4px solid var(--adlaire-surface-accent);
  box-shadow: var(--adlaire-shadow-blue-sticky);
}

.adlaire-legal-toc-link,
.legal-toc-link {
  display: inline-block;
  padding: 10px 20px;
  background-color: var(--adlaire-surface-card);
  border: 2px solid var(--adlaire-surface-accent);
  border-radius: var(--adlaire-radius-sm);
  color: var(--adlaire-surface-accent);
  font-weight: 500;
  text-decoration: none;
  transition: background-color var(--adlaire-transition-base), box-shadow var(--adlaire-transition-base), color var(--adlaire-transition-base), transform var(--adlaire-transition-base);
}

.adlaire-legal-toc-link:hover,
.legal-toc-link:hover {
  background-color: var(--adlaire-surface-accent);
  box-shadow: var(--adlaire-shadow-blue-nav-hover);
  color: var(--adlaire-surface-card);
  text-decoration: none;
  transform: translateY(-2px);
}

`;
