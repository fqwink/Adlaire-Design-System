export const COMPONENTS_FOUNDATION_CORE_MEDIA_CSS = `.adlaire-card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 18px;
}

.adlaire-card-media {
  display: grid;
  gap: 12px;
}

.adlaire-card-media-figure {
  overflow: hidden;
  border-radius: var(--adlaire-radius-md);
}

.adlaire-card-media-figure img,
.adlaire-image-frame img {
  display: block;
  width: 100%;
  height: auto;
}

.adlaire-card-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-items: center;
  margin-top: 16px;
}

.adlaire-simple-list,
.adlaire-bordered-list,
.adlaire-compact-list {
  display: grid;
  gap: 0;
  margin: 0;
  padding: 0;
  list-style: none;
}

.adlaire-simple-list-item,
.adlaire-bordered-list-item,
.adlaire-compact-list-item {
  color: var(--adlaire-surface-text-muted);
  line-height: 1.7;
}

.adlaire-simple-list-item {
  padding: 8px 0;
}

.adlaire-bordered-list-item {
  padding: 12px 0;
  border-bottom: 1px solid var(--adlaire-surface-border);
}

.adlaire-bordered-list-item:last-child {
  border-bottom: none;
}

.adlaire-compact-list-item {
  padding: 4px 0;
}

.adlaire-contact-panel,
.adlaire-inquiry-cta {
  padding: 24px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-lg);
  color: var(--adlaire-surface-text-muted);
}

.adlaire-inquiry-cta {
  background-color: var(--adlaire-surface-accent);
  color: var(--adlaire-surface-card);
}

.adlaire-inquiry-cta a {
  color: inherit;
}

.adlaire-external-link-row {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  align-items: center;
  justify-content: space-between;
  padding: 14px 0;
  border-bottom: 1px solid var(--adlaire-surface-border);
  color: var(--adlaire-surface-text);
  text-decoration: none;
}

.adlaire-external-link-row:hover {
  color: var(--adlaire-surface-accent);
}

.adlaire-progress {
  width: 100%;
  height: 10px;
  overflow: hidden;
  background-color: var(--adlaire-surface-soft);
  border-radius: var(--adlaire-radius-sm);
}

.adlaire-progress-bar {
  display: block;
  width: 0;
  max-width: 100%;
  height: 100%;
  background-color: var(--adlaire-surface-accent);
}

.adlaire-step-indicator {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-items: center;
}

.adlaire-step-indicator-item {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 32px;
  min-height: 32px;
  padding: 0 10px;
  background-color: var(--adlaire-surface-soft);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-sm);
  color: var(--adlaire-surface-text-muted);
  font-weight: 700;
}

.adlaire-step-indicator-item-current {
  background-color: var(--adlaire-surface-accent);
  border-color: var(--adlaire-surface-accent);
  color: var(--adlaire-surface-card);
}

.adlaire-tag-list {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.adlaire-tooltip-note,
.adlaire-popover-note {
  display: inline-block;
  max-width: 320px;
  padding: 10px 12px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-sm);
  box-shadow: var(--adlaire-shadow-card);
  color: var(--adlaire-surface-text-muted);
  font-size: 0.9rem;
  line-height: 1.6;
}

.adlaire-popover-note {
  display: block;
  max-width: 420px;
  padding: 16px;
}

`;
