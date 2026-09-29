export const COMPONENTS_PLATFORM_THEME_CSS = `.adlaire-theme-workspace-panel,
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

`;
