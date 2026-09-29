export const CONTENT_INTERACTIONS_TABLET_CSS = `@media (max-width: 768px) {
  .card {
    padding: 30px 20px;
  }

  .section-title {
    font-size: 1.8rem;
  }

  .section-content h3 {
    font-size: 1.3rem;
  }

  .sidebar {
    order: 2;
    width: 100%;
  }

  .adlaire-contact-info,
  .contact-info {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .renewal-notice {
    padding: 25px 20px;
  }

  .renewal-title {
    font-size: 1.3rem;
  }

  .renewal-description {
    font-size: 0.95rem;
  }

  .tab-labels {
    gap: 5px;
  }

  .tab-label {
    padding: 10px 16px;
    font-size: 0.9rem;
  }

  .news-item {
    padding: 20px 15px;
  }

  .news-title {
    font-size: 1.2rem;
  }

  .info-row {
    flex-direction: column;
    padding: 15px 0;
  }

  .info-label {
    width: 100%;
    margin-bottom: 8px;
  }

  .adlaire-meta-row {
    grid-template-columns: 1fr;
    gap: 8px;
    padding: 14px 0;
  }

  .timeline::before {
    left: 80px;
  }

  .timeline-date {
    width: 70px;
    padding-right: 10px;
    font-size: 0.95rem;
  }

  .timeline-content {
    padding-left: 30px;
  }

  .breadcrumb {
    padding: 12px 0;
    font-size: 0.85rem;
  }

  .breadcrumb-separator {
    margin: 0 8px;
  }

  .legal-toc-card {
    position: relative;
    top: 0;
  }

  .legal-toc {
    flex-direction: column;
    gap: 10px;
  }

  .legal-toc-link {
    width: 100%;
    text-align: center;
  }
}

`;
