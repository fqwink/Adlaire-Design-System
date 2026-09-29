export const FORMS_UPLOAD_CSS = `
.adlaire-file-picker,
.adlaire-dropzone,
.adlaire-upload-progress,
.adlaire-upload-list,
.adlaire-attachment-list,
.adlaire-file-output {
  display: grid;
  gap: 10px;
}

.adlaire-dropzone {
  padding: 24px;
  background-color: var(--adlaire-surface-soft);
  border: 2px dashed var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-md);
  color: var(--adlaire-surface-text-muted);
  text-align: center;
}

.adlaire-dropzone.is-dragover,
.adlaire-dropzone:focus-within {
  border-color: var(--adlaire-surface-accent);
  box-shadow: var(--adlaire-shadow-focus-ring);
}

.adlaire-upload-progress-bar {
  width: 100%;
  height: 8px;
  overflow: hidden;
  background-color: var(--adlaire-surface-soft);
  border-radius: var(--adlaire-radius-round);
}

.adlaire-upload-progress-value {
  display: block;
  width: var(--adlaire-upload-progress);
  height: 100%;
  background-color: var(--adlaire-surface-accent);
}

.adlaire-upload-item,
.adlaire-attachment-item {
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: space-between;
  padding: 10px 12px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-sm);
}

.adlaire-file-output {
  color: var(--adlaire-surface-text-muted);
  font-size: 0.875rem;
}

.adlaire-settings-form,
.adlaire-settings-group,
.adlaire-settings-row {
  display: grid;
  gap: 12px;
}

.adlaire-settings-group {
  padding: 16px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-md);
}

.adlaire-settings-row {
  grid-template-columns: minmax(160px, 1fr) auto;
  align-items: center;
}

.adlaire-toggle {
  position: relative;
  display: inline-flex;
  width: 44px;
  height: 24px;
  align-items: center;
  padding: 2px;
  background-color: var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-round);
}

.adlaire-toggle::after {
  width: 20px;
  height: 20px;
  background-color: var(--adlaire-surface-card);
  border-radius: var(--adlaire-radius-round);
  content: "";
  transition: transform var(--adlaire-transition-fast);
}

.adlaire-toggle[aria-checked="true"] {
  background-color: var(--adlaire-surface-accent);
}

.adlaire-toggle[aria-checked="true"]::after {
  transform: translateX(20px);
}

.adlaire-danger-zone {
  padding: 16px;
  background-color: var(--adlaire-alert-danger-bg);
  border: 1px solid var(--adlaire-alert-danger-border);
  border-radius: var(--adlaire-radius-md);
  color: var(--adlaire-alert-danger-text);
}
`;
