export const COMPONENTS_PLATFORM_CSS = `
.adlaire-api-explorer-panel,
.adlaire-request-builder,
.adlaire-schema-reference-panel,
.adlaire-sdk-selector,
.adlaire-webhook-delivery-log,
.adlaire-integration-setup-checklist,
.adlaire-production-readiness-checklist,
.adlaire-deprecation-timeline,
.adlaire-migration-step-list {
  display: grid;
  gap: 12px;
  padding: 14px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-md);
  color: var(--adlaire-surface-text);
}

.adlaire-endpoint-card,
.adlaire-response-preview,
.adlaire-code-sample-card,
.adlaire-webhook-endpoint-card,
.adlaire-oauth-consent-panel,
.adlaire-api-key-rotation-card,
.adlaire-secret-rotation-panel,
.adlaire-rate-limit-meter,
.adlaire-quota-usage-card,
.adlaire-sandbox-environment-card,
.adlaire-integration-health-panel,
.adlaire-connection-test-card,
.adlaire-payload-inspector,
.adlaire-event-replay-panel,
.adlaire-version-compatibility-badge,
.adlaire-breaking-change-notice,
.adlaire-developer-note-card,
.adlaire-changelog-entry-card,
.adlaire-support-escalation-card {
  display: grid;
  gap: 8px;
  padding: 12px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-sm);
  color: var(--adlaire-surface-text);
}

.adlaire-endpoint-card,
.adlaire-webhook-event-row,
.adlaire-dependency-status-row,
.adlaire-version-compatibility-badge,
.adlaire-changelog-entry-card,
.adlaire-support-escalation-card,
.adlaire-sdk-option,
.adlaire-environment-option,
.adlaire-integration-setup-item,
.adlaire-production-readiness-item,
.adlaire-migration-step-item,
.adlaire-deprecation-timeline-item {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
  justify-content: space-between;
}

.adlaire-sdk-selector,
.adlaire-integration-setup-checklist,
.adlaire-production-readiness-checklist,
.adlaire-migration-step-list {
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
}

.adlaire-webhook-event-row,
.adlaire-webhook-delivery-item,
.adlaire-dependency-status-row,
.adlaire-sdk-option,
.adlaire-environment-option,
.adlaire-integration-setup-item,
.adlaire-production-readiness-item,
.adlaire-migration-step-item,
.adlaire-deprecation-timeline-item {
  padding: 10px 12px;
  background-color: var(--adlaire-surface-soft);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-sm);
  color: var(--adlaire-surface-text-muted);
}

.adlaire-sdk-option,
.adlaire-sandbox-environment-card,
.adlaire-connection-test-card,
.adlaire-migration-step-item {
  cursor: pointer;
}

.adlaire-sdk-option[aria-pressed="true"],
.adlaire-sandbox-environment-card[aria-selected="true"],
.adlaire-connection-test-card[aria-pressed="true"],
.adlaire-migration-step-item[aria-checked="true"] {
  border-color: var(--adlaire-surface-accent);
  box-shadow: var(--adlaire-shadow-focus-ring);
  color: var(--adlaire-surface-accent-strong);
}

.adlaire-breaking-change-notice[data-state="breaking"],
.adlaire-rate-limit-meter[data-state="limited"],
.adlaire-quota-usage-card[data-state="near-limit"] {
  background-color: var(--adlaire-semantic-warning-bg);
  border-color: var(--adlaire-semantic-warning-border);
  color: var(--adlaire-semantic-warning-text);
}

.adlaire-connection-test-card[data-state="passed"],
.adlaire-integration-health-panel[data-state="healthy"],
.adlaire-version-compatibility-badge[data-state="compatible"],
.adlaire-production-readiness-checklist[data-state="ready"] {
  border-color: var(--adlaire-semantic-success-border);
  color: var(--adlaire-semantic-success-text);
}

.adlaire-theme-workspace-panel,
.adlaire-brand-kit-card,
.adlaire-palette-editor,
.adlaire-color-ramp-row,
.adlaire-semantic-color-mapping,
.adlaire-contrast-check-card,
.adlaire-typography-scale-panel,
.adlaire-font-pairing-card,
.adlaire-spacing-scale-preview,
.adlaire-radius-scale-preview,
.adlaire-shadow-elevation-panel,
.adlaire-motion-preset-card,
.adlaire-density-preset-card,
.adlaire-theme-preview-frame,
.adlaire-surface-preview-grid,
.adlaire-dark-mode-switcher,
.adlaire-high-contrast-preview,
.adlaire-brand-asset-usage-card,
.adlaire-logo-placement-guide,
.adlaire-icon-style-selector,
.adlaire-tone-of-voice-card,
.adlaire-copy-pattern-panel,
.adlaire-accessibility-score-card,
.adlaire-contrast-issue-row,
.adlaire-token-override-panel,
.adlaire-token-diff-card,
.adlaire-theme-export-panel,
.adlaire-theme-import-card,
.adlaire-brand-compliance-checklist,
.adlaire-theme-publish-summary {
  display: grid;
  gap: 10px;
  padding: 12px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-sm);
  color: var(--adlaire-surface-text);
}

.adlaire-theme-workspace-panel,
.adlaire-palette-editor,
.adlaire-semantic-color-mapping,
.adlaire-typography-scale-panel,
.adlaire-surface-preview-grid,
.adlaire-logo-placement-guide,
.adlaire-token-override-panel,
.adlaire-brand-compliance-checklist {
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
}

.adlaire-color-ramp-row,
.adlaire-font-pairing-card,
.adlaire-density-preset-card,
.adlaire-dark-mode-switcher,
.adlaire-icon-style-selector,
.adlaire-contrast-issue-row,
.adlaire-token-diff-card,
.adlaire-theme-publish-summary,
.adlaire-brand-check-item,
.adlaire-surface-preview-item,
.adlaire-token-override-item {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
  justify-content: space-between;
}

.adlaire-theme-option,
.adlaire-brand-check-item,
.adlaire-surface-preview-item,
.adlaire-token-override-item {
  padding: 10px 12px;
  background-color: var(--adlaire-surface-soft);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-sm);
  color: var(--adlaire-surface-text-muted);
}

.adlaire-color-swatch {
  width: 28px;
  height: 28px;
  background-color: var(--adlaire-surface-accent);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-round);
}

.adlaire-theme-option,
.adlaire-density-preset-card,
.adlaire-dark-mode-switcher,
.adlaire-high-contrast-preview,
.adlaire-token-override-item {
  cursor: pointer;
}

.adlaire-theme-option[aria-pressed="true"],
.adlaire-density-preset-card[aria-pressed="true"],
.adlaire-dark-mode-switcher[aria-pressed="true"],
.adlaire-high-contrast-preview[aria-pressed="true"],
.adlaire-token-override-item[aria-checked="true"] {
  border-color: var(--adlaire-surface-accent);
  box-shadow: var(--adlaire-shadow-focus-ring);
  color: var(--adlaire-surface-accent-strong);
}

.adlaire-contrast-check-card[data-state="warning"],
.adlaire-contrast-issue-row[data-state="issue"],
.adlaire-token-diff-card[data-state="changed"] {
  background-color: var(--adlaire-semantic-warning-bg);
  border-color: var(--adlaire-semantic-warning-border);
  color: var(--adlaire-semantic-warning-text);
}

.adlaire-accessibility-score-card[data-state="pass"],
.adlaire-brand-compliance-checklist[data-state="ready"],
.adlaire-theme-publish-summary[data-state="ready"] {
  border-color: var(--adlaire-semantic-success-border);
  color: var(--adlaire-semantic-success-text);
}

.adlaire-loading-state,
.adlaire-state,
.adlaire-state-empty,
.adlaire-state-error,
.adlaire-state-loading {
  display: grid;
  gap: 10px;
  place-items: center;
  padding: 28px;
  background-color: var(--adlaire-surface-soft);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-md);
  color: var(--adlaire-surface-text-muted);
  text-align: center;
}

.adlaire-state-error {
  background-color: var(--adlaire-alert-danger-bg);
  border-color: var(--adlaire-alert-danger-border);
  color: var(--adlaire-alert-danger-text);
}

.adlaire-state-loading::before,
.adlaire-loading-state::before {
  width: 22px;
  height: 22px;
  border: 3px solid var(--adlaire-surface-border);
  border-top-color: var(--adlaire-surface-accent);
  border-radius: var(--adlaire-radius-round);
  content: "";
  animation: adlaire-spin var(--adlaire-motion-duration-slow) var(--adlaire-motion-ease-standard) infinite;
}

@keyframes adlaire-spin {
  to {
    transform: rotate(360deg);
  }
}

.adlaire-data-card,
.adlaire-sync-status,
.adlaire-api-error {
  padding: 16px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-md);
}

.adlaire-api-error {
  background-color: var(--adlaire-alert-danger-bg);
  border-color: var(--adlaire-alert-danger-border);
  color: var(--adlaire-alert-danger-text);
}

.adlaire-chart-frame,
.adlaire-kpi-card,
.adlaire-metric-comparison {
  padding: 16px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-md);
}

.adlaire-chart-legend,
.adlaire-chart-label,
.adlaire-metric-delta,
.adlaire-metric-trend {
  display: inline-flex;
  gap: 6px;
  align-items: center;
  color: var(--adlaire-surface-text-subtle);
  font-size: 0.875rem;
}

.adlaire-chart-empty {
  padding: 24px;
  background-color: var(--adlaire-surface-soft);
  border-radius: var(--adlaire-radius-sm);
  color: var(--adlaire-surface-text-subtle);
  text-align: center;
}

.adlaire-kpi-card {
  display: grid;
  gap: 8px;
}

.adlaire-avatar,
.adlaire-presence-dot {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--adlaire-radius-round);
}

.adlaire-avatar {
  width: 40px;
  height: 40px;
  background-color: var(--adlaire-surface-soft);
  border: 1px solid var(--adlaire-surface-border);
  color: var(--adlaire-surface-accent-strong);
  font-weight: 700;
  overflow: hidden;
}

.adlaire-avatar-group {
  display: flex;
}

.adlaire-avatar-group .adlaire-avatar + .adlaire-avatar {
  margin-left: -8px;
}

.adlaire-presence {
  position: relative;
  display: inline-flex;
}

.adlaire-presence-dot {
  position: absolute;
  right: -1px;
  bottom: -1px;
  width: 12px;
  height: 12px;
  background-color: var(--adlaire-status-success);
  border: 2px solid var(--adlaire-surface-card);
}

.adlaire-gallery,
.adlaire-lightbox {
  display: grid;
  gap: 12px;
}

.adlaire-gallery {
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
}

.adlaire-gallery-item {
  overflow: hidden;
  background-color: var(--adlaire-surface-soft);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-md);
}

.adlaire-lightbox {
  padding: 16px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-md);
}

.adlaire-lightbox-caption {
  color: var(--adlaire-surface-text-subtle);
  font-size: 0.875rem;
}

.adlaire-toast-stack {
  position: fixed;
  right: 16px;
  bottom: 16px;
  z-index: var(--adlaire-layer-toast);
  display: grid;
  width: min(360px, calc(100vw - 32px));
  gap: 10px;
}

.adlaire-toast,
.adlaire-snackbar {
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: space-between;
  padding: 12px 14px;
  background-color: var(--adlaire-status-dark);
  border-radius: var(--adlaire-radius-sm);
  box-shadow: var(--adlaire-shadow-nav);
  color: var(--adlaire-surface-card);
}

.adlaire-toast-dismiss {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 32px;
  min-height: 32px;
  background: transparent;
  border: 0;
  color: inherit;
  cursor: pointer;
}

.adlaire-git-repo-list,
.adlaire-git-repo-card,
.adlaire-git-branch-switcher,
.adlaire-git-pr-list,
.adlaire-git-issue-list,
.adlaire-git-review-thread,
.adlaire-git-review-state,
.adlaire-git-check-status,
.adlaire-git-ci-status,
.adlaire-git-merge-state,
.adlaire-git-security-alert,
.adlaire-git-settings-panel,
.adlaire-git-web-ide-entry,
.adlaire-git-project-board,
.adlaire-git-diff-hunk,
.adlaire-git-notification-actions,
.adlaire-git-org-members,
.adlaire-git-mobile-nav {
  display: grid;
  gap: 12px;
}

.adlaire-git-repo-card,
.adlaire-git-settings-panel,
.adlaire-git-review-thread,
.adlaire-git-security-alert,
.adlaire-git-project-board,
.adlaire-git-diff-hunk {
  padding: 16px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-md);
}

.adlaire-git-branch-switcher,
.adlaire-git-notification-actions,
.adlaire-git-mobile-nav {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.adlaire-git-check-status {
  padding: 12px;
  background-color: var(--adlaire-surface-soft);
  border-left: 4px solid var(--adlaire-status-success);
  border-radius: var(--adlaire-radius-sm);
}

.adlaire-git-review-state,
.adlaire-git-ci-status,
.adlaire-git-merge-state {
  display: inline-flex;
  width: fit-content;
  gap: 6px;
  align-items: center;
  padding: 6px 10px;
  background-color: var(--adlaire-semantic-selected-bg);
  border: 1px solid var(--adlaire-semantic-selected-border);
  border-radius: var(--adlaire-radius-round);
  color: var(--adlaire-semantic-selected-text);
  font-size: 0.875rem;
  font-weight: 600;
}

.adlaire-git-ci-status[data-state="failed"],
.adlaire-git-merge-state[data-state="blocked"] {
  background-color: var(--adlaire-semantic-danger-bg);
  border-color: var(--adlaire-semantic-danger-border);
  color: var(--adlaire-semantic-danger-text);
}

.adlaire-git-diff-hunk {
  font-family: var(--adlaire-font-family-mono);
  font-size: 0.875rem;
}

.adlaire-git-security-alert {
  background-color: var(--adlaire-alert-warning-bg);
  border-color: var(--adlaire-alert-warning-border);
  color: var(--adlaire-alert-warning-text);
}

.adlaire-github-product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 12px;
}

.adlaire-github-product-card,
.adlaire-github-action-card,
.adlaire-github-copilot-card,
.adlaire-github-codespace-card,
.adlaire-github-package-card,
.adlaire-github-pages-card,
.adlaire-github-project-board-card,
.adlaire-github-discussion-card,
.adlaire-github-release-card,
.adlaire-github-marketplace-card {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  gap: 12px;
  align-items: center;
  padding: 14px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-md);
}

.adlaire-github-product-grid img,
.adlaire-github-integration-list img,
.adlaire-github-dependabot-alert img {
  width: 20px;
  height: 20px;
  flex: 0 0 auto;
}

.adlaire-github-product-card span,
.adlaire-github-action-card span,
.adlaire-github-copilot-card span,
.adlaire-github-codespace-card span,
.adlaire-github-package-card span,
.adlaire-github-pages-card span,
.adlaire-github-project-board-card span,
.adlaire-github-discussion-card span,
.adlaire-github-release-card span,
.adlaire-github-marketplace-card span {
  display: block;
  margin-top: 2px;
  color: var(--adlaire-surface-text-subtle);
  font-size: 0.875rem;
}

.adlaire-github-security-panel,
.adlaire-github-webhook-panel,
.adlaire-github-api-key-panel {
  display: grid;
  gap: 8px;
  padding: 14px;
  background-color: var(--adlaire-surface-soft);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-md);
}

.adlaire-github-security-panel > span,
.adlaire-github-webhook-panel > span,
.adlaire-github-api-key-panel > span {
  color: var(--adlaire-surface-accent-strong);
  font-weight: 700;
}

.adlaire-github-dependabot-alert,
.adlaire-github-integration-list li {
  display: flex;
  gap: 10px;
  align-items: center;
  min-width: 0;
  padding: 10px 12px;
  background-color: var(--adlaire-alert-warning-bg);
  border: 1px solid var(--adlaire-alert-warning-border);
  border-radius: var(--adlaire-radius-md);
  color: var(--adlaire-alert-warning-text);
}

.adlaire-github-integration-list {
  display: grid;
  gap: 10px;
  margin: 0;
  padding: 12px;
  background-color: var(--adlaire-surface-soft);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-md);
  list-style: none;
}

.adlaire-cloud-resource-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(190px, 1fr));
  gap: 12px;
}

.adlaire-cloud-service-card,
.adlaire-cloud-region-card,
.adlaire-cloud-environment-card,
.adlaire-cloud-deployment-target,
.adlaire-cloud-runtime-card,
.adlaire-cloud-database-card,
.adlaire-cloud-storage-card,
.adlaire-cloud-queue-card,
.adlaire-cloud-worker-card {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  gap: 12px;
  align-items: center;
  padding: 14px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-md);
}

.adlaire-cloud-resource-grid img {
  width: 20px;
  height: 20px;
  flex: 0 0 auto;
}

.adlaire-cloud-service-card span,
.adlaire-cloud-region-card span,
.adlaire-cloud-environment-card span,
.adlaire-cloud-deployment-target span,
.adlaire-cloud-runtime-card span,
.adlaire-cloud-database-card span,
.adlaire-cloud-storage-card span,
.adlaire-cloud-queue-card span,
.adlaire-cloud-worker-card span {
  display: block;
  margin-top: 2px;
  color: var(--adlaire-surface-text-subtle);
  font-size: 0.875rem;
}

.adlaire-cloud-topology-map,
.adlaire-cloud-domain-panel,
.adlaire-cloud-certificate-panel,
.adlaire-cloud-secret-vault,
.adlaire-cloud-quota-panel,
.adlaire-cloud-cost-summary {
  display: grid;
  gap: 8px;
  min-width: 0;
  padding: 14px;
  background-color: var(--adlaire-surface-soft);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-md);
}

.adlaire-cloud-topology-map {
  grid-column: span 2;
  grid-template-columns: auto minmax(0, 1fr);
  align-items: center;
}

.adlaire-cloud-topology-map > span,
.adlaire-cloud-domain-panel > span,
.adlaire-cloud-certificate-panel > span,
.adlaire-cloud-secret-vault > span,
.adlaire-cloud-quota-panel > span,
.adlaire-cloud-cost-summary > span {
  color: var(--adlaire-surface-accent-strong);
  font-weight: 700;
}

.adlaire-cloud-quota-panel {
  background-color: var(--adlaire-alert-warning-bg);
  border-color: var(--adlaire-alert-warning-border);
  color: var(--adlaire-alert-warning-text);
}

.adlaire-cloud-cost-summary {
  background-color: var(--adlaire-semantic-success-bg);
  border-color: var(--adlaire-semantic-success-border);
  color: var(--adlaire-semantic-success-text);
}

.adlaire-backdrop {
  position: fixed;
  inset: 0;
  z-index: var(--adlaire-layer-overlay);
  background-color: var(--adlaire-overlay-black-48);
}

.adlaire-dialog {
  display: grid;
  gap: 16px;
  max-width: min(560px, calc(100vw - 32px));
  padding: 20px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-lg);
  box-shadow: var(--adlaire-shadow-card-hover);
  color: var(--adlaire-surface-text);
}

.adlaire-dialog[aria-modal="true"],
.adlaire-dialog.is-open {
  position: relative;
  z-index: var(--adlaire-layer-modal);
}

.adlaire-dialog-stack {
  position: fixed;
  inset: 0;
  z-index: var(--adlaire-layer-modal);
  display: grid;
  place-items: center;
  padding: var(--adlaire-layout-gutter);
  pointer-events: none;
}

.adlaire-dialog-stack > .adlaire-dialog {
  pointer-events: auto;
}

.adlaire-dialog-header,
.adlaire-dialog-footer {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  align-items: center;
  justify-content: space-between;
}

.adlaire-dialog-title {
  margin: 0;
  color: var(--adlaire-surface-accent-strong);
  font-weight: 700;
}

.adlaire-dialog-body {
  color: var(--adlaire-surface-text-muted);
  line-height: 1.8;
}

.adlaire-dialog-close {
  display: inline-flex;
  min-width: 36px;
  min-height: 36px;
  align-items: center;
  justify-content: center;
  background-color: var(--adlaire-surface-soft);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-sm);
  color: var(--adlaire-surface-text);
}

.adlaire-dialog-close:hover,
.adlaire-dialog-close:focus-visible {
  border-color: var(--adlaire-surface-accent);
  box-shadow: var(--adlaire-shadow-focus-ring);
  color: var(--adlaire-surface-accent);
  outline: 0;
}

.adlaire-popover {
  display: grid;
  gap: 8px;
  max-width: 320px;
  padding: 12px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-md);
  box-shadow: var(--adlaire-shadow-card);
  color: var(--adlaire-surface-text);
}

.adlaire-popover[data-placement="top"] {
  transform-origin: bottom center;
}

.adlaire-popover[data-placement="bottom"] {
  transform-origin: top center;
}

.adlaire-popover-title {
  color: var(--adlaire-surface-accent-strong);
  font-weight: 700;
}

.adlaire-popover-body {
  color: var(--adlaire-surface-text-muted);
  line-height: 1.7;
}

.adlaire-feedback-stack {
  display: grid;
  gap: 10px;
}

.adlaire-toast-viewport {
  position: fixed;
  right: var(--adlaire-layout-gutter);
  bottom: var(--adlaire-layout-gutter);
  z-index: var(--adlaire-layer-toast);
  display: grid;
  width: min(360px, calc(100vw - 32px));
  gap: 10px;
}

.adlaire-toast {
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: 10px;
  align-items: start;
  padding: 12px 14px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-left: 4px solid var(--adlaire-surface-accent);
  border-radius: var(--adlaire-radius-md);
  box-shadow: var(--adlaire-shadow-card);
  color: var(--adlaire-surface-text);
}

.adlaire-toast-success {
  border-left-color: var(--adlaire-status-success);
}

.adlaire-toast-warning {
  border-left-color: var(--adlaire-status-warning);
}

.adlaire-toast-danger {
  border-left-color: var(--adlaire-status-danger);
}

.adlaire-toast-title {
  color: var(--adlaire-surface-accent-strong);
  font-weight: 700;
}

.adlaire-toast-body {
  color: var(--adlaire-surface-text-muted);
  line-height: 1.6;
}

.adlaire-progress {
  display: grid;
  gap: 6px;
}

.adlaire-progress-track {
  width: 100%;
  height: 8px;
  overflow: hidden;
  background-color: var(--adlaire-surface-soft);
  border-radius: var(--adlaire-radius-round);
}

.adlaire-progress-value {
  display: block;
  width: var(--adlaire-progress-value, 0%);
  height: 100%;
  background-color: var(--adlaire-surface-accent);
}

.adlaire-skeleton {
  display: block;
  min-height: 1rem;
  background-color: var(--adlaire-surface-soft);
  border-radius: var(--adlaire-radius-sm);
}

.adlaire-data-table-state {
  display: grid;
  gap: 10px;
  padding: 16px;
  background-color: var(--adlaire-surface-soft);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-md);
  color: var(--adlaire-surface-text-muted);
}

.adlaire-bulk-feedback {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-items: center;
  justify-content: space-between;
  padding: 12px 14px;
  background-color: var(--adlaire-semantic-selected-bg);
  border: 1px solid var(--adlaire-semantic-selected-border);
  border-radius: var(--adlaire-radius-md);
  color: var(--adlaire-semantic-selected-text);
}

@media (max-width: 480px) {
  .adlaire-admin-mobile-stack,
  .adlaire-admin-mobile-card-list,
  .adlaire-admin-layout,
  .adlaire-admin-form-layout,
  .adlaire-admin-detail-layout,
  .adlaire-admin-bulk-action,
  .adlaire-admin-resource-header,
  .adlaire-admin-data-toolbar,
  .adlaire-admin-selection-summary,
  .adlaire-admin-section-header,
  .adlaire-admin-card-header,
  .adlaire-admin-action-bar,
  .adlaire-admin-state-row {
    display: grid;
    grid-template-columns: 1fr;
    gap: 10px;
  }

  .adlaire-admin-mobile-scroll,
  .adlaire-admin-permission-matrix,
  .adlaire-admin-log-stream {
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }

  .adlaire-admin-mobile-actions,
  .adlaire-admin-action-group,
  .adlaire-admin-card-actions,
  .adlaire-admin-resource-actions,
  .adlaire-admin-toolbar-actions,
  .adlaire-admin-selection-actions,
  .adlaire-admin-state-action {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    gap: 8px;
  }

  .adlaire-admin-mobile-collapse,
  .adlaire-admin-health-item,
  .adlaire-admin-api-key-item,
  .adlaire-admin-webhook-item,
  .adlaire-admin-observability-metric,
  .adlaire-admin-log-line,
  .adlaire-admin-alert-rule-item,
  .adlaire-admin-usage-row,
  .adlaire-admin-retention-rule,
  .adlaire-admin-compliance-item,
  .adlaire-admin-policy-rule,
  .adlaire-admin-session-item,
  .adlaire-admin-device-item,
  .adlaire-admin-access-request-item,
  .adlaire-admin-secret-item,
  .adlaire-admin-token-scope-item,
  .adlaire-admin-risk-signal-item {
    grid-template-columns: 1fr;
  }

  .adlaire-admin-empty-state,
  .adlaire-admin-error-state,
  .adlaire-admin-loading-state,
  .adlaire-admin-forbidden-state,
  .adlaire-admin-incomplete-state {
    padding: 16px;
  }

  .adlaire-admin-panel-grid,
  .adlaire-admin-dashboard-grid {
    grid-template-columns: 1fr;
  }

  .adlaire-modal,
  .adlaire-confirm-dialog,
  .adlaire-notice-dialog,
  .adlaire-drawer,
  .adlaire-dialog-stack {
    padding: 12px;
  }
}
`;
