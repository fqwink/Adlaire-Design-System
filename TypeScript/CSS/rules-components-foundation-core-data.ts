export const COMPONENTS_FOUNDATION_CORE_DATA_CSS = `.adlaire-definition-list,
.adlaire-key-value {
  display: grid;
  gap: 0;
  margin: 0;
}

.adlaire-key-value-list {
  display: grid;
  gap: 0;
  margin: 0;
  padding: 0;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-md);
  list-style: none;
  overflow: hidden;
}

.adlaire-key-value-list .adlaire-key-value-row {
  padding: 14px 16px;
}

.adlaire-definition-row,
.adlaire-key-value-row {
  display: grid;
  grid-template-columns: minmax(120px, 180px) 1fr;
  gap: 16px;
  padding: 14px 0;
  border-bottom: 1px solid var(--adlaire-surface-border);
}

.adlaire-definition-row:last-child,
.adlaire-key-value-row:last-child {
  border-bottom: none;
}

.adlaire-definition-term,
.adlaire-key-value-key {
  color: var(--adlaire-surface-accent);
  font-weight: 700;
}

.adlaire-definition-description,
.adlaire-key-value-value {
  color: var(--adlaire-surface-text-muted);
  line-height: 1.8;
}

.adlaire-link-list {
  display: grid;
  gap: 0;
  margin: 0;
  padding: 0;
  list-style: none;
}

.adlaire-link-list-item {
  border-bottom: 1px solid var(--adlaire-surface-border);
}

.adlaire-link-list-item:last-child {
  border-bottom: none;
}

.adlaire-link-list-link {
  display: flex;
  gap: 12px;
  align-items: center;
  justify-content: space-between;
  padding: 14px 0;
  color: var(--adlaire-surface-text);
  font-weight: 500;
  text-decoration: none;
  transition: color var(--adlaire-transition-base), padding-left var(--adlaire-transition-base);
}

.adlaire-link-list-link:hover {
  padding-left: 6px;
  color: var(--adlaire-surface-accent);
}

.adlaire-related-links {
  padding: 20px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-lg);
}

.adlaire-surface-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 16px;
}

.adlaire-surface-item {
  padding: 16px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-md);
  color: var(--adlaire-surface-text-muted);
  line-height: 1.8;
}

.adlaire-media {
  display: flex;
  gap: 16px;
  align-items: flex-start;
}

.adlaire-media-figure {
  flex: 0 0 auto;
}

.adlaire-media-body {
  flex: 1 1 auto;
  min-width: 0;
  color: var(--adlaire-surface-text-muted);
  line-height: 1.8;
}

.adlaire-media-title {
  margin: 0 0 6px;
  color: var(--adlaire-surface-text);
  font-weight: 700;
}

.adlaire-cta {
  padding: 28px 24px;
  background-color: var(--adlaire-surface-accent);
  border-radius: var(--adlaire-radius-lg);
  color: var(--adlaire-surface-card);
}

.adlaire-cta-title {
  margin: 0 0 8px;
  color: var(--adlaire-surface-card);
  font-weight: 700;
}

.adlaire-cta-text {
  margin: 0;
  color: var(--adlaire-surface-card);
  line-height: 1.8;
}

.adlaire-cta-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 18px;
}

.adlaire-caption {
  margin-top: 8px;
  color: var(--adlaire-surface-text-subtle);
  font-size: 0.9rem;
  line-height: 1.6;
}

.adlaire-helper-text {
  color: var(--adlaire-surface-text-subtle);
  font-size: 0.9rem;
  line-height: 1.6;
}

.adlaire-page-heading {
  display: grid;
  gap: 10px;
  margin-bottom: 28px;
}

.adlaire-page-heading-title {
  margin: 0;
  color: var(--adlaire-surface-accent-strong);
  font-size: 2rem;
  font-weight: 700;
  line-height: 1.3;
}

.adlaire-page-heading-text {
  margin: 0;
  color: var(--adlaire-surface-text-muted);
  line-height: 1.8;
}

.adlaire-heading-group {
  display: grid;
  gap: 6px;
}

.adlaire-heading-eyebrow {
  color: var(--adlaire-surface-accent);
  font-size: 0.85rem;
  font-weight: 700;
}

.adlaire-section-lead {
  color: var(--adlaire-surface-text-muted);
  font-size: 1.05rem;
  line-height: 1.9;
}

`;
