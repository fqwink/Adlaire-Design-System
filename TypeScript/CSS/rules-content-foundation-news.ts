export const CONTENT_FOUNDATION_NEWS_CSS = `.adlaire-news-item,
.news-item {
  margin-bottom: 20px;
  padding: 25px;
  background-color: var(--adlaire-surface-card);
  border-left: 4px solid var(--adlaire-surface-accent);
  border-radius: var(--adlaire-radius-sm);
  transition: box-shadow var(--adlaire-transition-base), transform var(--adlaire-transition-base);
}

.adlaire-news-item:hover,
.news-item:hover {
  box-shadow: var(--adlaire-shadow-blue-soft);
  transform: translateX(5px);
}

.news-header {
  display: flex;
  gap: 12px;
  align-items: center;
  margin-bottom: 15px;
}

.news-date {
  color: var(--adlaire-surface-text-subtle);
  font-family: "Courier New", monospace;
  font-size: 0.95rem;
  font-weight: 600;
}

.adlaire-news-badge,
.news-badge {
  display: inline-block;
  padding: 4px 12px;
  border-radius: var(--adlaire-radius-sm);
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.5px;
  text-transform: uppercase;
}

.news-badge-press {
  background-color: var(--adlaire-surface-accent);
  color: var(--adlaire-surface-card);
}

.news-badge-maintenance {
  background-color: var(--adlaire-surface-notice);
  color: var(--adlaire-surface-card);
}
`;
