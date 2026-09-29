export const WYSIWYG_SUPPORT_MOBILE_CSS = `@media (max-width: 480px) {
  .adlaire-wysiwyg-toolbar {
    align-items: stretch;
    flex-direction: column;
  }

  .adlaire-wysiwyg-toolbar-group {
    padding-right: 0;
    border-right: none;
  }

  .adlaire-wysiwyg-block {
    grid-template-columns: 1fr;
  }

  .adlaire-wysiwyg-mobile-bar {
    position: sticky;
    bottom: 0;
    z-index: var(--adlaire-z-sticky);
  }

  .adlaire-wysiwyg-mobile-sheet {
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
  }
}
`;
