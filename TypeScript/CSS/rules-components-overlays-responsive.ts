export const COMPONENTS_OVERLAY_RESPONSIVE_CSS = `@media (max-width: 480px) {
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

`;
