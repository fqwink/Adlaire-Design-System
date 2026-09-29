export const COMPONENTS_FOUNDATION_CORE_FLOW_CSS = `.adlaire-step-list,
.adlaire-process-list,
.adlaire-numbered-flow {
  display: grid;
  gap: 14px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.adlaire-step-item,
.adlaire-process-item,
.adlaire-numbered-flow-item {
  padding: 16px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-left: 4px solid var(--adlaire-surface-accent);
  border-radius: var(--adlaire-radius-md);
  color: var(--adlaire-surface-text-muted);
  line-height: 1.8;
}

.adlaire-highlight-box,
.adlaire-summary-box,
.adlaire-stat-block {
  padding: 20px;
  background-color: var(--adlaire-surface-soft);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-md);
  color: var(--adlaire-surface-text-muted);
}

.adlaire-summary-box {
  background-color: var(--adlaire-surface-card);
  box-shadow: var(--adlaire-shadow-card);
}

.adlaire-stat-block {
  display: grid;
  gap: 6px;
  text-align: center;
}

.adlaire-stat-value {
  color: var(--adlaire-surface-accent-strong);
  font-size: 2rem;
  font-weight: 700;
  line-height: 1.2;
}

.adlaire-stat-label {
  color: var(--adlaire-surface-text-subtle);
  font-size: 0.9rem;
}

.adlaire-anchor-nav,
.adlaire-subnav,
.adlaire-sibling-nav {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-items: center;
}

.adlaire-anchor-nav-link,
.adlaire-subnav-link,
.adlaire-sibling-nav-link {
  display: inline-flex;
  align-items: center;
  padding: 8px 12px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-sm);
  color: var(--adlaire-surface-text);
  font-weight: 600;
  text-decoration: none;
}

.adlaire-anchor-nav-link:hover,
.adlaire-subnav-link:hover,
.adlaire-sibling-nav-link:hover {
  border-color: var(--adlaire-surface-accent);
  color: var(--adlaire-surface-accent);
}

`;
