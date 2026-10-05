export const COMPONENTS_FOUNDATION_CORE_BASE_CSS =
  `/* Adlaire-Design public components */
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

.adlaire-tab-button {
  display: inline-flex;
  min-height: 40px;
  align-items: center;
  justify-content: center;
  padding: 8px 12px;
  background-color: transparent;
  border: 0;
  border-bottom: 3px solid transparent;
  color: var(--adlaire-surface-text-muted);
  cursor: pointer;
  font-weight: 700;
}

.adlaire-tab-button:hover,
.adlaire-tab-button:focus-visible,
.adlaire-tab-button[aria-selected="true"] {
  border-bottom-color: var(--adlaire-surface-accent);
  color: var(--adlaire-surface-accent-strong);
  outline: 0;
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

`;
