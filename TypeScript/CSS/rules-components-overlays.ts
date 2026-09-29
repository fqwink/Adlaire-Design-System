export const COMPONENTS_OVERLAY_CSS = `
.adlaire-modal,
.adlaire-drawer {
  position: fixed;
  inset: 0;
  display: none;
  background-color: var(--adlaire-overlay-white-80);
  z-index: var(--adlaire-z-page-top);
}

.adlaire-overlay-open {
  overflow: hidden;
}

.adlaire-modal.is-open,
.adlaire-drawer.is-open {
  display: grid;
}

.adlaire-modal {
  place-items: center;
  padding: 24px;
}

.adlaire-modal-dialog {
  display: grid;
  width: min(100%, 640px);
  max-height: 100%;
  overflow: auto;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-lg);
  box-shadow: var(--adlaire-shadow-card);
}

.adlaire-modal-header,
.adlaire-modal-footer,
.adlaire-drawer-header,
.adlaire-drawer-footer {
  display: flex;
  gap: 12px;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  border-bottom: 1px solid var(--adlaire-surface-border);
}

.adlaire-modal-footer,
.adlaire-drawer-footer {
  justify-content: flex-end;
  border-top: 1px solid var(--adlaire-surface-border);
  border-bottom: none;
}

.adlaire-modal-title,
.adlaire-drawer-title {
  margin: 0;
  color: var(--adlaire-surface-text);
  font-size: 1.125rem;
  line-height: 1.4;
}

.adlaire-modal-body,
.adlaire-drawer-body {
  padding: 16px;
  color: var(--adlaire-surface-text-muted);
  line-height: 1.7;
}

.adlaire-modal-close,
.adlaire-drawer-close {
  display: inline-flex;
  min-width: 36px;
  min-height: 36px;
  align-items: center;
  justify-content: center;
  padding: 0;
  background-color: transparent;
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-sm);
  color: var(--adlaire-surface-text-muted);
  cursor: pointer;
}

.adlaire-modal-close:hover,
.adlaire-modal-close:focus-visible,
.adlaire-drawer-close:hover,
.adlaire-drawer-close:focus-visible {
  border-color: var(--adlaire-surface-accent);
  box-shadow: var(--adlaire-shadow-focus-ring);
  color: var(--adlaire-surface-accent);
  outline: 0;
}

.adlaire-drawer {
  align-items: stretch;
  justify-content: end;
}

.adlaire-drawer-left {
  justify-content: start;
}

.adlaire-drawer-panel {
  display: grid;
  width: min(100%, 420px);
  grid-template-rows: auto 1fr auto;
  overflow: auto;
  background-color: var(--adlaire-surface-card);
  border-left: 1px solid var(--adlaire-surface-border);
  box-shadow: var(--adlaire-shadow-card);
}

.adlaire-drawer-left .adlaire-drawer-panel {
  border-right: 1px solid var(--adlaire-surface-border);
  border-left: none;
}

.adlaire-dropdown {
  position: relative;
  display: inline-block;
}

.adlaire-dropdown-trigger {
  display: inline-flex;
  min-height: 36px;
  align-items: center;
  justify-content: center;
  padding: 6px 12px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-sm);
  color: var(--adlaire-surface-text);
  cursor: pointer;
}

.adlaire-dropdown-menu {
  position: absolute;
  top: 100%;
  right: 0;
  display: none;
  min-width: 180px;
  margin-top: 6px;
  padding: 6px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-md);
  box-shadow: var(--adlaire-shadow-card);
  z-index: var(--adlaire-z-sticky);
}

.adlaire-dropdown-menu.is-open {
  display: grid;
  gap: 4px;
}

.adlaire-dropdown-item {
  display: block;
  width: 100%;
  padding: 8px 10px;
  background-color: transparent;
  border: 0;
  border-radius: var(--adlaire-radius-sm);
  color: var(--adlaire-surface-text-muted);
  cursor: pointer;
  text-align: left;
  text-decoration: none;
}

.adlaire-dropdown-item:hover,
.adlaire-dropdown-item:focus-visible,
.adlaire-dropdown-item[aria-current="true"] {
  background-color: var(--adlaire-surface-soft);
  color: var(--adlaire-surface-accent-strong);
  outline: 0;
}

.adlaire-carousel {
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

.adlaire-tooltip {
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

@media (max-width: 480px) {
  .adlaire-action-row,
  .adlaire-action-row-between {
    align-items: stretch;
    justify-content: flex-start;
  }

  .adlaire-button-group,
  .adlaire-toolbar,
  .adlaire-toolbar-section,
  .adlaire-cta-actions {
    display: flex;
    width: 100%;
  }

  .adlaire-toolbar {
    align-items: stretch;
    flex-direction: column;
  }

  .adlaire-definition-row,
  .adlaire-key-value-row {
    grid-template-columns: 1fr;
    gap: 6px;
  }

  .adlaire-media {
    flex-direction: column;
  }

  .adlaire-split-block {
    grid-template-columns: 1fr;
  }

  .adlaire-modal {
    padding: 12px;
  }

  .adlaire-modal-dialog,
  .adlaire-drawer-panel {
    width: 100%;
  }
}

/* Catalog completeness aliases */
.adlaire-affiliation-meta,
.adlaire-invite-status,
.adlaire-role-badge,
.adlaire-member-list,
.adlaire-team-list,
.adlaire-git-alert-status,
.adlaire-git-severity,
.adlaire-git-tag,
.adlaire-git-permission,
.adlaire-git-member-permission,
.adlaire-language-switcher-label,
.adlaire-pagination-count,
.adlaire-settings-label,
.adlaire-settings-help,
.adlaire-last-updated {
  color: var(--adlaire-surface-text-subtle);
  font-size: 0.875rem;
}

.adlaire-member-item,
.adlaire-team-item,
.adlaire-git-pr-item,
.adlaire-git-issue-item,
.adlaire-git-check-item,
.adlaire-git-board-card,
.adlaire-git-mobile-action,
.adlaire-search-suggest-item,
.adlaire-related-link,
.adlaire-page-prev,
.adlaire-page-next,
.adlaire-filter-clear,
.adlaire-git-star-action,
.adlaire-git-watch-action,
.adlaire-git-fork-action,
.adlaire-git-download-action,
.adlaire-git-edit-action {
  display: flex;
  gap: 8px;
  align-items: center;
  padding: 10px 12px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-sm);
}

.adlaire-git-check-list,
.adlaire-git-board-column,
.adlaire-git-code-search,
.adlaire-git-search-filter,
.adlaire-git-search-result,
.adlaire-git-activity,
.adlaire-git-insights,
.adlaire-git-contribution-graph,
.adlaire-git-org,
.adlaire-git-team-list {
  display: grid;
  gap: 10px;
}

.adlaire-git-pr-detail,
.adlaire-git-issue-detail,
.adlaire-git-danger-zone,
.adlaire-git-empty,
.adlaire-git-error,
.adlaire-git-loading {
  padding: 16px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-md);
}

.adlaire-git-danger-zone,
.adlaire-git-error {
  background-color: var(--adlaire-alert-danger-bg);
  border-color: var(--adlaire-alert-danger-border);
  color: var(--adlaire-alert-danger-text);
}

.adlaire-git-loading {
  background-color: var(--adlaire-surface-soft);
  color: var(--adlaire-surface-text-subtle);
}

.adlaire-git-edit-disabled {
  opacity: 0.6;
  pointer-events: none;
}

.adlaire-search-empty,
.adlaire-table-empty,
.adlaire-knowledge-empty {
  padding: 18px;
  background-color: var(--adlaire-surface-soft);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-sm);
  color: var(--adlaire-surface-text-subtle);
  text-align: center;
}

.adlaire-dialog-close,
.adlaire-language-option-current,
.adlaire-git-mobile-tab {
  display: inline-flex;
  gap: 6px;
  align-items: center;
  justify-content: center;
  padding: 8px 10px;
  border-radius: var(--adlaire-radius-sm);
}

.adlaire-language-option-current,
.adlaire-git-mobile-tab[aria-current="true"] {
  background-color: var(--adlaire-surface-soft);
  color: var(--adlaire-surface-accent);
}

.adlaire-git-settings {
  display: grid;
  gap: 12px;
  padding: 16px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-md);
}

/* Implemented extended UI patterns */`;
