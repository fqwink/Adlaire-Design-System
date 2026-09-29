export const COMPONENTS_OVERLAY_CAROUSEL_CSS = `.adlaire-carousel {
  display: grid;
  gap: 12px;
}

.adlaire-carousel-viewport {
  overflow: hidden;
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-lg);
}

.adlaire-carousel-track {
  display: flex;
  transition: transform var(--adlaire-transition-base);
}

.adlaire-carousel-slide {
  min-width: 100%;
  padding: 24px;
  background-color: var(--adlaire-surface-card);
  color: var(--adlaire-surface-text-muted);
}

.adlaire-carousel-controls,
.adlaire-carousel-indicators {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
  justify-content: center;
}

.adlaire-carousel-control,
.adlaire-carousel-indicator {
  display: inline-flex;
  min-width: 36px;
  min-height: 36px;
  align-items: center;
  justify-content: center;
  padding: 6px 10px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-sm);
  color: var(--adlaire-surface-text-muted);
  cursor: pointer;
}

.adlaire-carousel-indicator {
  min-width: 12px;
  min-height: 12px;
  padding: 0;
  border-radius: var(--adlaire-radius-round);
}

.adlaire-carousel-control:hover,
.adlaire-carousel-control:focus-visible,
.adlaire-carousel-indicator:hover,
.adlaire-carousel-indicator:focus-visible,
.adlaire-carousel-indicator[aria-current="true"] {
  background-color: var(--adlaire-surface-soft);
  border-color: var(--adlaire-surface-accent);
  color: var(--adlaire-surface-accent-strong);
  outline: 0;
}

`;
