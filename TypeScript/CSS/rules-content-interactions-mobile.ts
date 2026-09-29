export const CONTENT_INTERACTIONS_MOBILE_CSS = `@media (max-width: 480px) {
  .card {
    padding: 25px 15px;
  }

  .section-title {
    font-size: 1.5rem;
  }

  .renewal-notice {
    padding: 20px 15px;
  }

  .renewal-title {
    margin-bottom: 12px;
    font-size: 1.1rem;
  }

  .renewal-description {
    font-size: 0.9rem;
  }

  .tab-labels {
    flex-direction: column;
    gap: 8px;
    border-bottom: none;
  }

  .tab-label {
    bottom: 0;
    padding: 12px 20px;
    border: 1px solid var(--adlaire-surface-border);
    border-radius: var(--adlaire-radius-md);
    font-size: 0.95rem;
  }

  #tab-all:checked ~ .tab-labels label[for="tab-all"],
  #tab-press:checked ~ .tab-labels label[for="tab-press"],
  #tab-maintenance:checked ~ .tab-labels label[for="tab-maintenance"] {
    border: 2px solid var(--adlaire-surface-accent);
  }

  .news-header {
    flex-direction: column;
    gap: 8px;
    align-items: flex-start;
  }

  .news-title {
    font-size: 1.1rem;
  }

  .adlaire-content-table th,
  .adlaire-content-table td,
  .content-table th,
  .content-table td {
    padding: 12px 14px;
  }

  .adlaire-note {
    padding: 14px 16px;
  }

  .timeline::before {
    left: 60px;
  }

  .timeline-date {
    width: 55px;
    padding-right: 5px;
    font-size: 0.85rem;
  }

  .timeline-content {
    padding-left: 25px;
  }

  .timeline-text {
    font-size: 0.95rem;
  }

  .timeline-marker {
    width: 12px;
    height: 12px;
    border-width: 2px;
  }

  .breadcrumb {
    padding: 10px 0;
    font-size: 0.8rem;
  }

  .breadcrumb-separator {
    margin: 0 6px;
  }
}
`;
