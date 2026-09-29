export const COMPONENTS_FOUNDATION_CSS = `/* Adlaire-Design public components */
.adlaire-card {
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-lg);
  box-shadow: var(--adlaire-shadow-card);
  overflow: hidden;
}

.adlaire-card-header {
  padding: 16px 20px;
  background-color: var(--adlaire-surface-soft);
  border-bottom: 1px solid var(--adlaire-surface-border);
  color: var(--adlaire-surface-accent);
}

.adlaire-card-body {
  padding: 20px;
  color: var(--adlaire-surface-text);
}

.adlaire-section-title {
  margin-top: 0;
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 3px solid var(--adlaire-surface-accent);
  color: var(--adlaire-surface-accent);
}

.adlaire-breadcrumb {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 20px;
  color: var(--adlaire-surface-text-subtle);
}

.adlaire-sidebar-list {
  display: grid;
  gap: 12px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.adlaire-notice {
  padding: 16px 20px;
  background-color: var(--adlaire-surface-soft);
  border-left: 4px solid var(--adlaire-surface-accent);
  border-radius: var(--adlaire-radius-sm);
  color: var(--adlaire-surface-text);
}

.adlaire-notice-warning {
  background-color: var(--adlaire-surface-notice-soft);
  border-left-color: var(--adlaire-surface-notice);
  color: var(--adlaire-surface-notice-text);
}

.adlaire-tabs {
  display: grid;
  gap: 16px;
}

.adlaire-tab-list {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  border-bottom: 1px solid var(--adlaire-surface-border);
}

.adlaire-tab-panel {
  padding: 20px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-sm);
  color: var(--adlaire-surface-text);
}

.adlaire-timeline {
  display: grid;
  gap: 16px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.adlaire-timeline-item {
  padding-left: 16px;
  border-left: 4px solid var(--adlaire-surface-accent);
  color: var(--adlaire-surface-text-muted);
}

.adlaire-page-top {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 10px 16px;
  background-color: var(--adlaire-surface-accent);
  border-radius: var(--adlaire-radius-sm);
  color: var(--adlaire-surface-card);
  text-decoration: none;
}

.adlaire-panel {
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-lg);
}

.adlaire-panel-header {
  padding: 16px 20px;
  border-bottom: 1px solid var(--adlaire-surface-border);
  color: var(--adlaire-surface-accent-strong);
  font-weight: 700;
}

.adlaire-panel-body {
  padding: 20px;
  color: var(--adlaire-surface-text-muted);
  line-height: 1.8;
}

.adlaire-panel-footer {
  padding: 16px 20px;
  background-color: var(--adlaire-surface-soft);
  border-top: 1px solid var(--adlaire-surface-border);
  border-radius: 0 0 var(--adlaire-radius-lg) var(--adlaire-radius-lg);
  color: var(--adlaire-surface-text-subtle);
}

.adlaire-well {
  padding: 20px;
  background-color: var(--adlaire-surface-soft);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-md);
  color: var(--adlaire-surface-text-muted);
  line-height: 1.8;
}

.adlaire-button-group {
  display: inline-flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
}

.adlaire-icon-button {
  display: inline-flex;
  width: 40px;
  height: 40px;
  align-items: center;
  justify-content: center;
  padding: 0;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-md);
  color: var(--adlaire-surface-text);
  cursor: pointer;
  transition: background-color var(--adlaire-transition-fast), border-color var(--adlaire-transition-fast), color var(--adlaire-transition-fast);
}

.adlaire-icon-button:hover,
.adlaire-icon-button:focus-visible,
.adlaire-icon-button[aria-pressed="true"] {
  background-color: var(--adlaire-surface-soft);
  border-color: var(--adlaire-surface-accent);
  color: var(--adlaire-surface-accent);
}

.adlaire-icon-button:focus-visible {
  box-shadow: var(--adlaire-shadow-focus-ring);
  outline: 0;
}

.adlaire-icon-button img,
.adlaire-icon-button svg {
  width: 20px;
  height: 20px;
}

.adlaire-icon-button-group {
  display: inline-flex;
  gap: 6px;
  align-items: center;
  padding: 4px;
  background-color: var(--adlaire-surface-soft);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-lg);
}

.adlaire-toolbar {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-md);
}

.adlaire-toolbar-section {
  display: inline-flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
}

.adlaire-action-row {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  align-items: center;
  justify-content: flex-end;
}

.adlaire-action-row-start {
  justify-content: flex-start;
}

.adlaire-action-row-between {
  justify-content: space-between;
}

.adlaire-divider {
  height: 1px;
  margin: 24px 0;
  background-color: var(--adlaire-surface-border);
  border: 0;
}

.adlaire-stack {
  display: grid;
  gap: 16px;
}

.adlaire-stack-sm {
  gap: 8px;
}

.adlaire-stack-lg {
  gap: 24px;
}

.adlaire-inline {
  display: inline-flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
}

.adlaire-empty-state {
  padding: 32px 24px;
  background-color: var(--adlaire-surface-soft);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-lg);
  color: var(--adlaire-surface-text-muted);
  text-align: center;
}

.adlaire-empty-state-title {
  margin: 0 0 8px;
  color: var(--adlaire-surface-accent-strong);
  font-weight: 700;
}

.adlaire-empty-state-text {
  margin: 0;
  line-height: 1.8;
}

.adlaire-feature-list,
.adlaire-check-list {
  display: grid;
  gap: 12px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.adlaire-feature-item,
.adlaire-check-item {
  padding: 14px 16px;
  background-color: var(--adlaire-surface-card);
  border-left: 4px solid var(--adlaire-surface-accent);
  border-radius: var(--adlaire-radius-sm);
  color: var(--adlaire-surface-text-muted);
  line-height: 1.7;
}

.adlaire-check-item {
  background-color: var(--adlaire-surface-soft);
}

.adlaire-chip-list {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.adlaire-chip {
  display: inline-flex;
  gap: 6px;
  align-items: center;
  padding: 6px 10px;
  background-color: var(--adlaire-surface-soft);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-sm);
  color: var(--adlaire-surface-text);
  font-size: 0.9rem;
  font-weight: 600;
}

.adlaire-chip-primary {
  background-color: var(--adlaire-surface-accent);
  border-color: var(--adlaire-surface-accent);
  color: var(--adlaire-surface-card);
}

.adlaire-chip-muted {
  color: var(--adlaire-surface-text-subtle);
}

.adlaire-status-pill {
  display: inline-flex;
  gap: 6px;
  align-items: center;
  padding: 6px 10px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-sm);
  color: var(--adlaire-surface-text-muted);
  font-size: 0.9rem;
  font-weight: 600;
}

.adlaire-status-dot {
  width: 8px;
  height: 8px;
  flex: 0 0 auto;
  background-color: var(--adlaire-surface-accent);
  border-radius: var(--adlaire-radius-round);
}

.adlaire-definition-list,
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

.adlaire-announcement-bar,
.adlaire-update-notice,
.adlaire-maintenance-notice {
  padding: 12px 16px;
  background-color: var(--adlaire-surface-soft);
  border: 1px solid var(--adlaire-surface-border);
  border-left: 4px solid var(--adlaire-surface-accent);
  border-radius: var(--adlaire-radius-sm);
  color: var(--adlaire-surface-text-muted);
  line-height: 1.7;
}

.adlaire-update-notice {
  background-color: var(--adlaire-alert-info-bg);
  border-left-color: var(--adlaire-alert-info-border);
  color: var(--adlaire-alert-info-text);
}

.adlaire-maintenance-notice {
  background-color: var(--adlaire-alert-warning-bg);
  border-left-color: var(--adlaire-alert-warning-border);
  color: var(--adlaire-alert-warning-text);
}

.adlaire-maintenance-screen {
  display: grid;
  min-height: 60vh;
  place-items: center;
  padding: 48px 24px;
  background-color: var(--adlaire-surface-soft);
  color: var(--adlaire-surface-text-muted);
  text-align: center;
}

.adlaire-maintenance-screen-inner {
  display: grid;
  width: 100%;
  max-width: 640px;
  gap: 16px;
  padding: 32px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-lg);
  box-shadow: var(--adlaire-shadow-card);
}

.adlaire-maintenance-screen-title {
  margin: 0;
  color: var(--adlaire-surface-accent-strong);
  font-size: 1.6rem;
  font-weight: 700;
  line-height: 1.4;
}

.adlaire-maintenance-screen-text {
  margin: 0;
  line-height: 1.8;
}

.adlaire-error-page {
  display: grid;
  min-height: 60vh;
  place-items: center;
  padding: 48px 24px;
  background-color: var(--adlaire-surface-soft);
  color: var(--adlaire-surface-text-muted);
  text-align: center;
}

.adlaire-error-page-inner {
  display: grid;
  width: 100%;
  max-width: 640px;
  gap: 16px;
  padding: 32px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-lg);
  box-shadow: var(--adlaire-shadow-card);
}

.adlaire-error-page-server .adlaire-error-page-inner {
  background-color: var(--adlaire-alert-danger-bg);
  border-color: var(--adlaire-alert-danger-border);
}

.adlaire-error-page-400 .adlaire-error-page-inner,
.adlaire-error-page-401 .adlaire-error-page-inner,
.adlaire-error-page-403 .adlaire-error-page-inner,
.adlaire-error-page-404 .adlaire-error-page-inner {
  background-color: var(--adlaire-alert-warning-bg);
  border-color: var(--adlaire-alert-warning-border);
}

.adlaire-error-page-500 .adlaire-error-page-inner,
.adlaire-error-page-510 .adlaire-error-page-inner {
  background-color: var(--adlaire-alert-danger-bg);
  border-color: var(--adlaire-alert-danger-border);
}

.adlaire-error-page-code {
  margin: 0;
  color: var(--adlaire-alert-danger-text);
  font-size: 2.4rem;
  font-weight: 700;
  line-height: 1.2;
}

.adlaire-error-page-400 .adlaire-error-page-code,
.adlaire-error-page-401 .adlaire-error-page-code,
.adlaire-error-page-403 .adlaire-error-page-code,
.adlaire-error-page-404 .adlaire-error-page-code {
  color: var(--adlaire-alert-warning-text);
}

.adlaire-error-page-title {
  margin: 0;
  color: var(--adlaire-surface-accent-strong);
  font-size: 1.6rem;
  font-weight: 700;
  line-height: 1.4;
}

.adlaire-error-page-text {
  margin: 0;
  line-height: 1.8;
}

.adlaire-error-page-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  justify-content: center;
}

.adlaire-step-list,
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

.adlaire-card-grid {
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

.adlaire-hero-panel,
.adlaire-visual-banner,
.adlaire-image-frame {
  overflow: hidden;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-lg);
}

.adlaire-hero-panel,
.adlaire-visual-banner {
  padding: 32px 24px;
  background-color: var(--adlaire-surface-soft);
  color: var(--adlaire-surface-text-muted);
}

.adlaire-image-frame {
  display: block;
  padding: 8px;
}

.adlaire-logo-list,
.adlaire-partner-list,
.adlaire-icon-tile-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 14px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.adlaire-logo-list-item,
.adlaire-partner-list-item,
.adlaire-icon-tile {
  display: grid;
  min-height: 88px;
  place-items: center;
  padding: 16px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-md);
  color: var(--adlaire-surface-text-muted);
  text-align: center;
}

.adlaire-icon-tile img,
.adlaire-icon-tile svg {
  width: 28px;
  height: 28px;
  color: var(--adlaire-surface-accent);
}

.adlaire-icon-list,
.adlaire-icon-picker,
.adlaire-action-menu,
.adlaire-stat-strip {
  display: grid;
  gap: 10px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.adlaire-icon-list {
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
}

.adlaire-icon-list-item,
.adlaire-action-menu-item,
.adlaire-stat-strip-item {
  display: flex;
  gap: 10px;
  align-items: center;
  padding: 12px 14px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-md);
  color: var(--adlaire-surface-text-muted);
}

.adlaire-icon-list-item img,
.adlaire-icon-list-item svg,
.adlaire-action-menu-item img,
.adlaire-action-menu-item svg {
  width: 18px;
  height: 18px;
  color: var(--adlaire-surface-accent);
  flex: 0 0 auto;
}

.adlaire-icon-picker {
  grid-template-columns: repeat(auto-fit, minmax(44px, 1fr));
}

.adlaire-icon-picker .adlaire-icon-button {
  width: 100%;
}

.adlaire-action-menu {
  min-width: min(100%, 260px);
}

.adlaire-action-menu-item {
  width: 100%;
  justify-content: flex-start;
  cursor: pointer;
}

.adlaire-action-menu-item:hover,
.adlaire-action-menu-item:focus-visible {
  background-color: var(--adlaire-surface-soft);
  border-color: var(--adlaire-surface-accent);
  color: var(--adlaire-surface-accent);
}

.adlaire-stat-strip {
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
}

.adlaire-stat-strip-item {
  display: grid;
  gap: 4px;
}

.adlaire-stat-strip-value {
  color: var(--adlaire-surface-accent-strong);
  font-size: 1.4rem;
  font-weight: 700;
}

.adlaire-notification-list,
.adlaire-activity-feed {
  display: grid;
  gap: 10px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.adlaire-notification-item,
.adlaire-activity-feed-item {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  gap: 12px;
  align-items: start;
  padding: 14px 16px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-md);
  color: var(--adlaire-surface-text-muted);
}

.adlaire-notification-item[aria-current="true"] {
  background-color: var(--adlaire-semantic-selected-bg);
  border-color: var(--adlaire-semantic-selected-border);
}

.adlaire-activity-feed-item::before {
  width: 10px;
  height: 10px;
  margin-top: 7px;
  background-color: var(--adlaire-surface-accent);
  border-radius: var(--adlaire-radius-round);
  content: "";
}

.adlaire-empty-action {
  display: grid;
  gap: 12px;
  justify-items: center;
  padding: 28px 20px;
  background-color: var(--adlaire-surface-soft);
  border: 1px dashed var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-lg);
  color: var(--adlaire-surface-text-muted);
  text-align: center;
}

.adlaire-shortcut-key {
  display: inline-flex;
  min-width: 28px;
  min-height: 28px;
  align-items: center;
  justify-content: center;
  padding: 3px 8px;
  background-color: var(--adlaire-surface-soft);
  border: 1px solid var(--adlaire-surface-border);
  border-bottom-width: 2px;
  border-radius: var(--adlaire-radius-sm);
  color: var(--adlaire-surface-text);
  font-family: var(--adlaire-font-family-mono);
  font-size: 0.78rem;
  font-weight: 700;
}

.adlaire-resource-card,
.adlaire-pricing-card {
  display: grid;
  gap: 12px;
  padding: 18px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-lg);
  box-shadow: var(--adlaire-shadow-card);
  color: var(--adlaire-surface-text-muted);
}

.adlaire-resource-card-header,
.adlaire-pricing-card-header {
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: space-between;
  color: var(--adlaire-surface-text);
  font-weight: 700;
}

.adlaire-pricing-card-price {
  color: var(--adlaire-surface-accent-strong);
  font-size: 1.7rem;
  font-weight: 700;
}

.adlaire-permission-matrix {
  display: grid;
  min-width: 0;
  overflow-x: auto;
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-md);
}

.adlaire-permission-matrix table {
  width: 100%;
  min-width: 520px;
  border-collapse: collapse;
}

.adlaire-permission-matrix th,
.adlaire-permission-matrix td {
  padding: 10px 12px;
  border-bottom: 1px solid var(--adlaire-surface-border);
  color: var(--adlaire-surface-text-muted);
  text-align: left;
}

.adlaire-permission-matrix th {
  background-color: var(--adlaire-surface-soft);
  color: var(--adlaire-surface-text);
  font-weight: 700;
}

.adlaire-status-timeline,
.adlaire-approval-flow,
.adlaire-review-checklist {
  display: grid;
  gap: 10px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.adlaire-status-timeline-item,
.adlaire-approval-flow-item,
.adlaire-review-checklist-item {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  gap: 12px;
  align-items: start;
  padding: 12px 14px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-md);
  color: var(--adlaire-surface-text-muted);
}

.adlaire-status-timeline-item::before,
.adlaire-approval-flow-item::before {
  width: 12px;
  height: 12px;
  margin-top: 6px;
  background-color: var(--adlaire-semantic-selected-border);
  border-radius: var(--adlaire-radius-round);
  content: "";
}

.adlaire-monitoring-card,
.adlaire-deployment-card,
.adlaire-team-card {
  display: grid;
  gap: 12px;
  padding: 18px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-lg);
  box-shadow: var(--adlaire-shadow-card);
  color: var(--adlaire-surface-text-muted);
}

.adlaire-monitoring-card-header,
.adlaire-deployment-card-header,
.adlaire-team-card-header {
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: space-between;
  color: var(--adlaire-surface-text);
  font-weight: 700;
}

.adlaire-monitoring-card-metric {
  color: var(--adlaire-surface-accent-strong);
  font-size: 1.6rem;
  font-weight: 700;
}

.adlaire-release-notes {
  display: grid;
  gap: 12px;
  padding: 18px;
  background-color: var(--adlaire-surface-soft);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-lg);
}

.adlaire-release-note-item {
  display: grid;
  gap: 4px;
  padding-bottom: 10px;
  border-bottom: 1px solid var(--adlaire-surface-border);
  color: var(--adlaire-surface-text-muted);
}

.adlaire-release-note-item:last-child {
  padding-bottom: 0;
  border-bottom: 0;
}

.adlaire-query-result {
  display: grid;
  min-width: 0;
  overflow-x: auto;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-md);
}

.adlaire-query-result table {
  width: 100%;
  min-width: 560px;
  border-collapse: collapse;
}

.adlaire-query-result th,
.adlaire-query-result td {
  padding: 10px 12px;
  border-bottom: 1px solid var(--adlaire-surface-border);
  color: var(--adlaire-surface-text-muted);
  text-align: left;
}

.adlaire-query-result th {
  background-color: var(--adlaire-surface-soft);
  color: var(--adlaire-surface-text);
}

.adlaire-organization-switcher {
  display: inline-flex;
  gap: 10px;
  align-items: center;
  padding: 10px 12px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-md);
  color: var(--adlaire-surface-text);
}

.adlaire-responsive-preview {
  display: grid;
  gap: 10px;
  padding: 14px;
  background-color: var(--adlaire-surface-soft);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-lg);
}

.adlaire-responsive-preview-frame {
  min-height: 120px;
  padding: 16px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-md);
}

.adlaire-app-nav,
.adlaire-sidebar-section,
.adlaire-command-launcher,
.adlaire-inbox-list,
.adlaire-message-thread,
.adlaire-upload-queue,
.adlaire-audit-log {
  display: grid;
  gap: 10px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.adlaire-app-nav,
.adlaire-command-launcher,
.adlaire-message-thread,
.adlaire-file-card,
.adlaire-agent-card {
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-lg);
}

.adlaire-app-nav {
  padding: 10px;
}

.adlaire-app-nav-item,
.adlaire-sidebar-section-item,
.adlaire-command-launcher-item,
.adlaire-inbox-list-item,
.adlaire-upload-queue-item,
.adlaire-audit-log-item,
.adlaire-workspace-switcher {
  display: flex;
  gap: 10px;
  align-items: center;
  min-width: 0;
  padding: 10px 12px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-md);
  color: var(--adlaire-surface-text-muted);
  text-decoration: none;
}

.adlaire-app-nav-item[aria-current="page"],
.adlaire-inbox-list-item[aria-current="true"] {
  background-color: var(--adlaire-semantic-selected-bg);
  border-color: var(--adlaire-semantic-selected-border);
  color: var(--adlaire-surface-accent-strong);
}

.adlaire-app-nav img,
.adlaire-sidebar-section img,
.adlaire-command-launcher img,
.adlaire-inbox-list img,
.adlaire-file-card img,
.adlaire-upload-queue img,
.adlaire-agent-card img,
.adlaire-workspace-switcher img,
.adlaire-audit-log img {
  width: 20px;
  height: 20px;
  flex: 0 0 auto;
}

.adlaire-sidebar-section {
  padding: 12px;
  background-color: var(--adlaire-surface-soft);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-md);
}

.adlaire-sidebar-section-title {
  color: var(--adlaire-surface-text);
  font-size: 0.78rem;
  font-weight: 700;
  text-transform: uppercase;
}

.adlaire-command-launcher {
  padding: 14px;
  box-shadow: var(--adlaire-shadow-card);
}

.adlaire-command-launcher-input {
  width: 100%;
  box-sizing: border-box;
  padding: 10px 12px;
  background-color: var(--adlaire-surface-soft);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-md);
  color: var(--adlaire-surface-text);
}

.adlaire-command-launcher-item {
  text-align: left;
  cursor: pointer;
}

.adlaire-message-thread {
  padding: 14px;
  background-color: var(--adlaire-surface-soft);
}

.adlaire-message-bubble {
  max-width: min(100%, 560px);
  padding: 12px 14px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-lg);
  color: var(--adlaire-surface-text-muted);
}

.adlaire-message-bubble-self {
  justify-self: end;
  background-color: var(--adlaire-semantic-selected-bg);
  border-color: var(--adlaire-semantic-selected-border);
}

.adlaire-file-card,
.adlaire-agent-card {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  gap: 12px;
  align-items: center;
  padding: 14px;
}

.adlaire-file-card span,
.adlaire-agent-card span {
  display: block;
  margin-top: 2px;
  color: var(--adlaire-surface-text-subtle);
  font-size: 0.875rem;
}

.adlaire-upload-queue {
  padding: 12px;
  background-color: var(--adlaire-surface-soft);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-md);
}

.adlaire-upload-queue-state {
  margin-left: auto;
  color: var(--adlaire-surface-accent-strong);
  font-family: var(--adlaire-font-family-mono);
  font-size: 0.875rem;
  font-weight: 700;
}

.adlaire-workspace-switcher {
  display: inline-flex;
  cursor: pointer;
}

.adlaire-audit-log {
  padding: 12px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-md);
}

.adlaire-product-card,
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

.adlaire-commerce-cart,
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

.adlaire-dataset-card,
.adlaire-job-run-card,
.adlaire-model-card,
.adlaire-vector-index {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  gap: 12px;
  align-items: center;
  padding: 14px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-lg);
}

.adlaire-dataset-card img,
.adlaire-pipeline-board img,
.adlaire-job-run-card img,
.adlaire-run-queue img,
.adlaire-model-card img,
.adlaire-vector-index img,
.adlaire-anomaly-list img {
  width: 20px;
  height: 20px;
  flex: 0 0 auto;
}

.adlaire-dataset-card span,
.adlaire-job-run-card span,
.adlaire-model-card span,
.adlaire-vector-index span {
  display: block;
  margin-top: 2px;
  color: var(--adlaire-surface-text-subtle);
  font-size: 0.875rem;
}

.adlaire-query-console,
.adlaire-worker-pool,
.adlaire-prompt-panel,
.adlaire-eval-summary,
.adlaire-guardrail-panel,
.adlaire-drift-monitor,
.adlaire-data-access-panel {
  display: grid;
  gap: 10px;
  padding: 16px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-lg);
}

.adlaire-query-console code,
.adlaire-prompt-panel code {
  min-width: 0;
  overflow-x: auto;
  padding: 10px 12px;
  background-color: var(--adlaire-surface-soft);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-md);
  color: var(--adlaire-surface-text-muted);
  font-family: var(--adlaire-font-family-mono);
}

.adlaire-schema-table,
.adlaire-score-breakdown {
  display: grid;
  overflow: hidden;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-md);
}

.adlaire-schema-row,
.adlaire-score-row {
  display: grid;
  grid-template-columns: minmax(140px, 1fr) auto;
  gap: 12px;
  align-items: center;
  padding: 12px;
  border-bottom: 1px solid var(--adlaire-surface-border);
  color: var(--adlaire-surface-text-muted);
}

.adlaire-schema-row:last-child,
.adlaire-score-row:last-child {
  border-bottom: 0;
}

.adlaire-pipeline-board,
.adlaire-run-queue,
.adlaire-anomaly-list {
  display: grid;
  gap: 10px;
  margin: 0;
  padding: 12px;
  background-color: var(--adlaire-surface-soft);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-md);
  list-style: none;
}

.adlaire-pipeline-stage,
.adlaire-run-queue-item,
.adlaire-anomaly-item {
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

.adlaire-worker-pool > span,
.adlaire-eval-summary > span,
.adlaire-drift-monitor > span,
.adlaire-data-access-panel > span,
.adlaire-score-row strong {
  color: var(--adlaire-surface-accent-strong);
  font-size: 1.25rem;
  font-weight: 800;
  line-height: 1.1;
}

.adlaire-review-request-card,
.adlaire-annotation-card,
.adlaire-meeting-notes {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  gap: 12px;
  align-items: center;
  padding: 14px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-lg);
}

.adlaire-collaborator-list img,
.adlaire-review-request-card img,
.adlaire-change-request-list img,
.adlaire-annotation-card img,
.adlaire-version-history img,
.adlaire-task-board img,
.adlaire-escalation-banner img,
.adlaire-meeting-notes img {
  width: 20px;
  height: 20px;
  flex: 0 0 auto;
}

.adlaire-review-request-card span,
.adlaire-annotation-card span,
.adlaire-meeting-notes span {
  display: block;
  margin-top: 2px;
  color: var(--adlaire-surface-text-subtle);
  font-size: 0.875rem;
}

.adlaire-collaborator-list,
.adlaire-change-request-list,
.adlaire-version-history {
  display: grid;
  gap: 10px;
  margin: 0;
  padding: 12px;
  background-color: var(--adlaire-surface-soft);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-md);
  list-style: none;
}

.adlaire-collaborator-item,
.adlaire-change-request-item,
.adlaire-version-history-item,
.adlaire-task-card,
.adlaire-escalation-banner {
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

.adlaire-presence-stack {
  display: flex;
  align-items: center;
  padding: 8px;
}

.adlaire-presence-avatar {
  display: inline-flex;
  width: 32px;
  height: 32px;
  align-items: center;
  justify-content: center;
  margin-left: -6px;
  background-color: var(--adlaire-surface-accent);
  border: 2px solid var(--adlaire-surface-card);
  border-radius: var(--adlaire-radius-round);
  color: var(--adlaire-surface-card);
  font-size: 0.75rem;
  font-weight: 800;
}

.adlaire-presence-avatar:first-child {
  margin-left: 0;
}

.adlaire-review-decision,
.adlaire-suggestion-panel,
.adlaire-diff-summary,
.adlaire-checklist-panel,
.adlaire-notification-digest,
.adlaire-signoff-panel {
  display: grid;
  gap: 10px;
  padding: 16px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-lg);
}

.adlaire-review-decision > span,
.adlaire-diff-summary > span,
.adlaire-notification-digest > span,
.adlaire-signoff-panel > span {
  color: var(--adlaire-surface-accent-strong);
  font-size: 1.25rem;
  font-weight: 800;
  line-height: 1.1;
}

.adlaire-comment-thread {
  display: grid;
  gap: 10px;
  padding: 14px;
  background-color: var(--adlaire-surface-soft);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-lg);
}

.adlaire-task-board {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 12px;
  padding: 12px;
  background-color: var(--adlaire-surface-soft);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-md);
}

.adlaire-workflow-runner,
.adlaire-automation-rule-card,
.adlaire-policy-card,
.adlaire-evidence-locker,
.adlaire-incident-summary {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  gap: 12px;
  align-items: center;
  padding: 14px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-lg);
}

.adlaire-workflow-runner img,
.adlaire-automation-rule-card img,
.adlaire-trigger-list img,
.adlaire-action-chain img,
.adlaire-policy-card img,
.adlaire-evidence-locker img,
.adlaire-risk-banner img,
.adlaire-audit-event-stream img,
.adlaire-incident-summary img {
  width: 20px;
  height: 20px;
  flex: 0 0 auto;
}

.adlaire-workflow-runner span,
.adlaire-automation-rule-card span,
.adlaire-policy-card span,
.adlaire-evidence-locker span,
.adlaire-incident-summary span {
  display: block;
  margin-top: 2px;
  color: var(--adlaire-surface-text-subtle);
  font-size: 0.875rem;
}

.adlaire-trigger-list,
.adlaire-action-chain,
.adlaire-approval-route,
.adlaire-audit-event-stream {
  display: grid;
  gap: 10px;
  margin: 0;
  padding: 12px;
  background-color: var(--adlaire-surface-soft);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-md);
  list-style: none;
}

.adlaire-trigger-item,
.adlaire-action-chain-item,
.adlaire-approval-route-item,
.adlaire-audit-event-item,
.adlaire-risk-banner {
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

.adlaire-condition-builder,
.adlaire-schedule-panel,
.adlaire-compliance-checklist,
.adlaire-access-review-panel,
.adlaire-retention-policy-panel {
  display: grid;
  gap: 10px;
  padding: 16px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-lg);
}

.adlaire-condition-builder > span,
.adlaire-schedule-panel > span,
.adlaire-access-review-panel > span,
.adlaire-retention-policy-panel > span {
  color: var(--adlaire-surface-accent-strong);
  font-size: 1.25rem;
  font-weight: 800;
  line-height: 1.1;
}

.adlaire-control-status-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 12px;
  padding: 12px;
  background-color: var(--adlaire-surface-soft);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-md);
}

.adlaire-control-status-grid > div {
  display: grid;
  gap: 4px;
  padding: 12px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-md);
}

.adlaire-control-status-grid strong {
  color: var(--adlaire-surface-accent-strong);
  font-size: 1.25rem;
  line-height: 1.1;
}

.adlaire-control-status-grid span {
  color: var(--adlaire-surface-text-subtle);
  font-size: 0.875rem;
}

.adlaire-service-status-card,
.adlaire-span-detail,
.adlaire-metric-threshold-card,
.adlaire-alert-rule-card,
.adlaire-diagnostic-run-card {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  gap: 12px;
  align-items: center;
  padding: 14px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-lg);
}

.adlaire-service-status-card img,
.adlaire-log-stream img,
.adlaire-trace-timeline img,
.adlaire-span-detail img,
.adlaire-metric-threshold-card img,
.adlaire-alert-rule-card img,
.adlaire-alert-incident-list img,
.adlaire-diagnostic-run-card img {
  width: 20px;
  height: 20px;
  flex: 0 0 auto;
}

.adlaire-service-status-card span,
.adlaire-span-detail span,
.adlaire-metric-threshold-card span,
.adlaire-alert-rule-card span,
.adlaire-diagnostic-run-card span {
  display: block;
  margin-top: 2px;
  color: var(--adlaire-surface-text-subtle);
  font-size: 0.875rem;
}

.adlaire-log-stream,
.adlaire-trace-timeline,
.adlaire-alert-incident-list {
  display: grid;
  gap: 10px;
  margin: 0;
  padding: 12px;
  background-color: var(--adlaire-surface-soft);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-md);
  list-style: none;
}

.adlaire-log-event-row,
.adlaire-trace-step,
.adlaire-alert-incident-item {
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

.adlaire-health-overview,
.adlaire-uptime-panel,
.adlaire-error-rate-panel,
.adlaire-latency-distribution,
.adlaire-slo-summary,
.adlaire-remediation-panel {
  display: grid;
  gap: 10px;
  padding: 16px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-lg);
}

.adlaire-health-overview > span,
.adlaire-uptime-panel > span,
.adlaire-error-rate-panel > span,
.adlaire-latency-distribution > span,
.adlaire-slo-summary > span,
.adlaire-remediation-panel > span {
  color: var(--adlaire-surface-accent-strong);
  font-size: 1.25rem;
  font-weight: 800;
  line-height: 1.1;
}

.adlaire-dependency-map {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 12px;
  padding: 12px;
  background-color: var(--adlaire-surface-soft);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-md);
}

.adlaire-dependency-map > div {
  display: grid;
  min-height: 52px;
  place-items: center;
  padding: 12px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-md);
  color: var(--adlaire-surface-text-muted);
  font-weight: 700;
}

.adlaire-help-article-card,
.adlaire-personalization-card,
.adlaire-release-highlight {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  gap: 12px;
  align-items: center;
  padding: 14px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-lg);
}

.adlaire-onboarding-flow img,
.adlaire-tour-callout img,
.adlaire-guided-task-list img,
.adlaire-help-article-card img,
.adlaire-search-result-list img,
.adlaire-recent-item-list img,
.adlaire-personalization-card img,
.adlaire-notification-preference-list img,
.adlaire-release-highlight img {
  width: 20px;
  height: 20px;
  flex: 0 0 auto;
}

.adlaire-help-article-card span,
.adlaire-personalization-card span,
.adlaire-release-highlight span {
  display: block;
  margin-top: 2px;
  color: var(--adlaire-surface-text-subtle);
  font-size: 0.875rem;
}

.adlaire-onboarding-flow,
.adlaire-guided-task-list,
.adlaire-search-result-list,
.adlaire-recent-item-list,
.adlaire-notification-preference-list {
  display: grid;
  gap: 10px;
  margin: 0;
  padding: 12px;
  background-color: var(--adlaire-surface-soft);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-md);
  list-style: none;
}

.adlaire-onboarding-step-card,
.adlaire-guided-task-item,
.adlaire-search-result-item,
.adlaire-recent-item,
.adlaire-notification-preference-item,
.adlaire-tour-callout {
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

.adlaire-help-center-panel,
.adlaire-recommendation-panel,
.adlaire-preference-panel,
.adlaire-language-selector-panel,
.adlaire-keyboard-shortcut-panel {
  display: grid;
  gap: 10px;
  padding: 16px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-lg);
}

.adlaire-help-center-panel > span,
.adlaire-recommendation-panel > span,
.adlaire-preference-panel > span,
.adlaire-language-selector-panel > span,
.adlaire-keyboard-shortcut-panel > span {
  color: var(--adlaire-surface-accent-strong);
  font-size: 1.25rem;
  font-weight: 800;
  line-height: 1.1;
}

.adlaire-split-block {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  gap: 24px;
  align-items: center;
}

.adlaire-stacked-feature {
  display: grid;
  gap: 16px;
}

.adlaire-pagination {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
  margin: 0;
  padding: 0;
  list-style: none;
}

.adlaire-page-link {
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
  text-decoration: none;
}

.adlaire-page-link:hover,
.adlaire-page-link:focus-visible {
  border-color: var(--adlaire-surface-accent);
  box-shadow: var(--adlaire-shadow-focus-ring);
  color: var(--adlaire-surface-accent);
  outline: 0;
}

.adlaire-page-link-current,
.adlaire-page-link[aria-current="page"] {
  background-color: var(--adlaire-surface-accent);
  border-color: var(--adlaire-surface-accent);
  color: var(--adlaire-surface-card);
  font-weight: 700;
}

.adlaire-page-link-disabled,
.adlaire-page-link[aria-disabled="true"] {
  background-color: var(--adlaire-status-gray-light);
  color: var(--adlaire-status-gray-999);
  cursor: not-allowed;
  pointer-events: none;
}

.adlaire-filter-chip-list {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.adlaire-filter-chip {
  display: inline-flex;
  min-height: 36px;
  align-items: center;
  justify-content: center;
  padding: 6px 12px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-sm);
  color: var(--adlaire-surface-text-muted);
  cursor: pointer;
}

.adlaire-filter-chip:hover,
.adlaire-filter-chip:focus-visible,
.adlaire-filter-chip[aria-pressed="true"] {
  background-color: var(--adlaire-surface-soft);
  border-color: var(--adlaire-surface-accent);
  color: var(--adlaire-surface-accent-strong);
  outline: 0;
}
`;
