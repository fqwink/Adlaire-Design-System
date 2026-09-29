export const COMPONENTS_FOUNDATION_CORE_ANNOUNCEMENTS_CSS = `.adlaire-announcement-bar,
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

`;
