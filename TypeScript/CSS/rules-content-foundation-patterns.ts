export const CONTENT_FOUNDATION_PATTERNS_CSS = `.adlaire-faq-list {
  display: grid;
  gap: 12px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.adlaire-faq-item {
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-md);
  color: var(--adlaire-surface-text-muted);
}

.adlaire-faq-question,
.adlaire-faq-item summary {
  padding: 16px 18px;
  color: var(--adlaire-surface-accent-strong);
  font-weight: 700;
}

.adlaire-faq-item summary {
  cursor: pointer;
}

.adlaire-faq-answer,
details.adlaire-faq-item > :not(summary),
.adlaire-faq-item details > :not(summary) {
  padding: 0 18px 18px;
  line-height: 1.8;
}

.adlaire-comparison-block {
  display: grid;
  gap: 16px;
  padding: 20px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-lg);
}

.adlaire-pros-cons-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 16px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.adlaire-pros-cons-item {
  padding: 16px;
  background-color: var(--adlaire-surface-soft);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-md);
  color: var(--adlaire-surface-text-muted);
  line-height: 1.8;
}

.adlaire-status-timeline {
  display: grid;
  gap: 14px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.adlaire-status-timeline-item {
  padding: 16px;
  background-color: var(--adlaire-surface-card);
  border-left: 4px solid var(--adlaire-surface-accent);
  border-radius: var(--adlaire-radius-sm);
  color: var(--adlaire-surface-text-muted);
  line-height: 1.8;
}

.adlaire-comparison-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 16px;
}

.adlaire-comparison-grid-item {
  padding: 16px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-md);
  color: var(--adlaire-surface-text-muted);
  line-height: 1.8;
}

.coming-soon {
  padding: 40px 20px;
  background-color: var(--adlaire-surface-soft);
  border: 2px dashed var(--adlaire-surface-accent);
  border-radius: var(--adlaire-radius-md);
  color: var(--adlaire-surface-accent);
  font-size: 1.5rem;
  font-weight: 500;
  text-align: center;
}

`;
