export const COMPONENTS_FOUNDATION_DOMAINS_PRODUCT_CSS = `.adlaire-product-card,
.adlaire-account-profile,
.adlaire-support-ticket,
.adlaire-report-card,
.adlaire-integration-card,
.adlaire-compliance-evidence {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  gap: 12px;
  align-items: center;
  padding: 14px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-lg);
}

.adlaire-product-card img,
.adlaire-account-profile img,
.adlaire-member-list img,
.adlaire-support-ticket img,
.adlaire-report-card img,
.adlaire-workflow-builder img,
.adlaire-integration-card img,
.adlaire-api-key-list img,
.adlaire-compliance-evidence img {
  width: 20px;
  height: 20px;
  flex: 0 0 auto;
}

.adlaire-product-card span,
.adlaire-account-profile span,
.adlaire-support-ticket span,
.adlaire-report-card span,
.adlaire-integration-card span,
.adlaire-compliance-evidence span {
  display: block;
  margin-top: 2px;
  color: var(--adlaire-surface-text-subtle);
  font-size: 0.875rem;
}

.adlaire-plan-selector,
.adlaire-invoice-list,
.adlaire-member-list,
.adlaire-api-key-list,
.adlaire-workflow-builder {
  display: grid;
  gap: 10px;
  margin: 0;
  padding: 12px;
  background-color: var(--adlaire-surface-soft);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-md);
  list-style: none;
}

.adlaire-plan-option,
.adlaire-invoice-list-item,
.adlaire-member-item,
.adlaire-api-key-item,
.adlaire-workflow-step {
  display: flex;
  gap: 10px;
  align-items: center;
  min-width: 0;
  padding: 10px 12px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-md);
  color: var(--adlaire-surface-text-muted);
}

.adlaire-plan-option[aria-checked="true"] {
  background-color: var(--adlaire-semantic-selected-bg);
  border-color: var(--adlaire-semantic-selected-border);
  color: var(--adlaire-surface-accent-strong);
}

.adlaire-billing-summary,
.adlaire-analytics-panel,
.adlaire-trust-center {
  display: grid;
  gap: 10px;
  padding: 16px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-lg);
}

.adlaire-billing-summary > span,
.adlaire-analytics-metric strong {
  color: var(--adlaire-surface-accent-strong);
  font-size: 1.5rem;
  font-weight: 800;
  line-height: 1.1;
}

.adlaire-role-matrix {
  display: grid;
  overflow: hidden;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-md);
}

.adlaire-role-matrix-row,
.adlaire-analytics-metric {
  display: grid;
  grid-template-columns: minmax(140px, 1fr) auto;
  gap: 12px;
  align-items: center;
  padding: 12px;
  border-bottom: 1px solid var(--adlaire-surface-border);
  color: var(--adlaire-surface-text-muted);
}

.adlaire-role-matrix-row:last-child,
.adlaire-analytics-metric:last-child {
  border-bottom: 0;
}

.adlaire-support-conversation {
  display: grid;
  gap: 10px;
  padding: 14px;
  background-color: var(--adlaire-surface-soft);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-lg);
}

`;
