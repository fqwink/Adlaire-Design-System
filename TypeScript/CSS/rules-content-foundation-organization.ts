export const CONTENT_FOUNDATION_ORGANIZATION_CSS = `.organization-info {
  margin-top: 20px;
}

.adlaire-info-row,
.info-row {
  display: flex;
  padding: 20px 0;
  border-bottom: 1px solid var(--adlaire-surface-border);
}

.info-row:first-child {
  padding-top: 0;
}

.info-row:last-child {
  border-bottom: none;
}

.adlaire-info-label,
.info-label {
  width: 180px;
  flex-shrink: 0;
  color: var(--adlaire-surface-accent);
  font-size: 1rem;
  font-weight: 700;
}

.adlaire-info-value,
.info-value {
  flex: 1;
  color: var(--adlaire-surface-text-muted);
  line-height: 1.8;
}

.business-list {
  margin: 0;
  padding: 0;
  list-style: none;
}

.business-list li {
  margin-bottom: 15px;
  padding-left: 0;
  color: var(--adlaire-surface-text);
  font-weight: 600;
}

.business-list li:last-child {
  margin-bottom: 0;
}

.business-detail {
  display: block;
  margin-top: 5px;
  padding-left: 15px;
  color: var(--adlaire-surface-text-muted);
  font-size: 0.95rem;
  font-weight: 400;
}

.adlaire-content-link,
.contact-link,
.privacy-link,
.text-link {
  color: var(--adlaire-surface-accent);
  font-weight: 500;
  text-decoration: none;
  transition: border-bottom-color var(--adlaire-transition-base), color var(--adlaire-transition-base), transform var(--adlaire-transition-base);
}

.contact-link {
  display: inline-block;
  margin-top: 8px;
  border-bottom: 1px solid transparent;
}

.contact-link:hover {
  border-bottom-color: var(--adlaire-surface-accent-strong);
  color: var(--adlaire-surface-accent-strong);
  transform: translateX(3px);
}

.adlaire-content-link:hover,
.privacy-link:hover,
.text-link:hover {
  color: var(--adlaire-surface-accent-strong);
  text-decoration: underline;
}

`;
