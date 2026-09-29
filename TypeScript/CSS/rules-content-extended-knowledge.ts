export const CONTENT_EXTENDED_KNOWLEDGE_CSS = `.adlaire-content-card,
.adlaire-code-block,
.adlaire-related-articles,
.adlaire-knowledge-search,
.adlaire-knowledge-category-nav,
.adlaire-knowledge-updates {
  display: grid;
  gap: 12px;
  padding: 16px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-md);
}

.adlaire-code-block {
  overflow: auto;
  background-color: var(--adlaire-status-dark);
  color: var(--adlaire-surface-card);
  font-family: var(--adlaire-font-family-mono);
  line-height: 1.7;
}

.adlaire-code-header {
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: space-between;
  color: var(--adlaire-surface-card);
  font-size: 0.875rem;
}

.adlaire-code-copy {
  cursor: pointer;
}

.adlaire-related-list,
.adlaire-knowledge-category-list,
.adlaire-knowledge-update-list {
  display: grid;
  gap: 10px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.adlaire-related-item,
.adlaire-knowledge-category-item,
.adlaire-knowledge-update-item {
  padding: 10px 0;
  border-bottom: 1px solid var(--adlaire-surface-border);
}

.adlaire-related-item:last-child,
.adlaire-knowledge-category-item:last-child,
.adlaire-knowledge-update-item:last-child {
  border-bottom: 0;
}

`;
