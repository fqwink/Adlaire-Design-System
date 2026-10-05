export const COMPONENTS_FOUNDATION_DOMAINS_COMMERCE_CSS =
  `.adlaire-commerce-cart,
.adlaire-checkout-summary,
.adlaire-inventory-panel,
.adlaire-review-summary,
.adlaire-shipping-tracker {
  display: grid;
  gap: 10px;
  padding: 16px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-lg);
}

.adlaire-order-card,
.adlaire-price-rule-card,
.adlaire-marketplace-listing,
.adlaire-seller-card,
.adlaire-return-request,
.adlaire-dispute-panel {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  gap: 12px;
  align-items: center;
  padding: 14px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-lg);
}

.adlaire-order-card img,
.adlaire-order-timeline img,
.adlaire-product-tile img,
.adlaire-sku-list img,
.adlaire-price-rule-card img,
.adlaire-coupon-list img,
.adlaire-marketplace-listing img,
.adlaire-seller-card img,
.adlaire-return-request img,
.adlaire-dispute-panel img,
.adlaire-commerce-cart img {
  width: 20px;
  height: 20px;
  flex: 0 0 auto;
}

.adlaire-order-card span,
.adlaire-price-rule-card span,
.adlaire-marketplace-listing span,
.adlaire-seller-card span,
.adlaire-return-request span,
.adlaire-dispute-panel span {
  display: block;
  margin-top: 2px;
  color: var(--adlaire-surface-text-subtle);
  font-size: 0.875rem;
}

.adlaire-commerce-cart-item,
.adlaire-order-timeline-item,
.adlaire-sku-list-item,
.adlaire-coupon-list-item {
  display: flex;
  gap: 10px;
  align-items: center;
  min-width: 0;
  padding: 10px 12px;
  background-color: var(--adlaire-surface-soft);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-md);
  color: var(--adlaire-surface-text-muted);
}

.adlaire-checkout-summary > span,
.adlaire-inventory-panel > span,
.adlaire-review-summary > span,
.adlaire-shipping-tracker > span {
  color: var(--adlaire-surface-accent-strong);
  font-size: 1.25rem;
  font-weight: 800;
  line-height: 1.1;
}

.adlaire-order-timeline,
.adlaire-sku-list,
.adlaire-coupon-list {
  display: grid;
  gap: 10px;
  margin: 0;
  padding: 12px;
  background-color: var(--adlaire-surface-soft);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-md);
  list-style: none;
}

.adlaire-product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 12px;
}

.adlaire-product-tile {
  display: grid;
  gap: 8px;
  min-width: 0;
  padding: 14px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-lg);
}

.adlaire-product-tile span {
  color: var(--adlaire-surface-text-subtle);
  font-size: 0.875rem;
}

`;
