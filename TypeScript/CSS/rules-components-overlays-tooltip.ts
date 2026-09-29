export const COMPONENTS_OVERLAY_TOOLTIP_CSS = `.adlaire-tooltip {
  position: relative;
  display: inline-flex;
}

.adlaire-tooltip-trigger {
  cursor: help;
}

.adlaire-tooltip-content {
  position: absolute;
  bottom: 100%;
  left: 50%;
  display: none;
  min-width: 180px;
  max-width: 280px;
  margin-bottom: 8px;
  padding: 8px 10px;
  background-color: var(--adlaire-status-dark);
  border-radius: var(--adlaire-radius-sm);
  color: var(--adlaire-surface-card);
  font-size: 0.875rem;
  line-height: 1.5;
  transform: translateX(-50%);
  z-index: var(--adlaire-z-sticky);
}

.adlaire-tooltip:hover .adlaire-tooltip-content,
.adlaire-tooltip:focus-within .adlaire-tooltip-content,
.adlaire-tooltip-content.is-open {
  display: block;
}

`;
