export const COMPONENTS_OPERATIONS_WORKSPACE_PUBLISHING_CSS = `.adlaire-document-outline {
  gap: 6px;
}

.adlaire-outline-item,
.adlaire-publication-checklist-item,
.adlaire-comment-resolver-item {
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: space-between;
  padding: 8px 10px;
  background-color: var(--adlaire-surface-soft);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-sm);
  color: var(--adlaire-surface-text-muted);
}

.adlaire-outline-item[aria-current="true"],
.adlaire-publication-checklist-item[aria-checked="true"],
.adlaire-comment-resolver-item[data-state="resolved"] {
  border-color: var(--adlaire-surface-accent);
  color: var(--adlaire-surface-accent-strong);
}

.adlaire-mini-map {
  display: grid;
  gap: 6px;
  min-height: 160px;
  padding: 10px;
  background-color: var(--adlaire-surface-soft);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-md);
}

.adlaire-mini-map-marker {
  min-height: 10px;
  background-color: var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-round);
}

.adlaire-mini-map-marker[aria-current="true"] {
  background-color: var(--adlaire-surface-accent);
}

`;
