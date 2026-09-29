export const CONTENT_CATALOG_CONTACT_CSS = `.adlaire-contact-info,
.contact-info {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
  margin-top: 30px;
}

.adlaire-contact-item,
.contact-item {
  padding: 20px;
  background-color: var(--adlaire-status-gray-soft);
  border-left: 4px solid var(--adlaire-surface-accent);
  border-radius: var(--adlaire-radius-md);
}

.adlaire-contact-item h3,
.contact-item h3 {
  margin-bottom: 10px;
  color: var(--adlaire-surface-accent);
  font-size: 1.2rem;
  font-weight: 600;
}

.adlaire-contact-item p,
.contact-item p {
  margin-bottom: 0;
  color: var(--adlaire-surface-text-muted);
}

.adlaire-contact-item a,
.contact-item a {
  color: var(--adlaire-surface-accent);
  text-decoration: none;
  transition: color var(--adlaire-transition-base);
}

.adlaire-contact-item a:hover,
.contact-item a:hover {
  color: var(--adlaire-surface-accent-strong);
  text-decoration: underline;
}

.adlaire-breadcrumb,
.breadcrumb {
  margin-bottom: 20px;
  padding: 15px 0;
  color: var(--adlaire-surface-text-subtle);
  font-size: 0.9rem;
}

.breadcrumb-link {
  color: var(--adlaire-surface-accent);
  font-weight: 500;
  text-decoration: none;
  transition: color var(--adlaire-transition-base);
}

.breadcrumb-link:hover {
  color: var(--adlaire-surface-accent-strong);
  text-decoration: underline;
}

.breadcrumb-separator {
  margin: 0 10px;
  color: var(--adlaire-status-gray-999);
}

.breadcrumb-current {
  color: var(--adlaire-surface-text-subtle);
  font-weight: 600;
}

.info-note {
  color: var(--adlaire-status-gray-777);
  font-size: 0.9rem;
}

.mt-30 {
  margin-top: 30px;
}

.last-updated {
  padding: 20px 0 0;
  color: var(--adlaire-surface-text-subtle);
  font-size: 0.9rem;
  text-align: right;
}

.last-updated p {
  margin: 0;
}

`;
