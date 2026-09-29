export const CONTENT_INTERACTIONS_CSS = `
.adlaire-sortable-table {
  width: 100%;
  border-collapse: collapse;
}

.adlaire-sortable-table th {
  vertical-align: middle;
}

.adlaire-sort-button {
  display: inline-flex;
  min-height: 32px;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  width: 100%;
  padding: 4px 0;
  background-color: transparent;
  border: 0;
  color: inherit;
  cursor: pointer;
  font: inherit;
  font-weight: 700;
  text-align: left;
}

.adlaire-sort-button:hover,
.adlaire-sort-button:focus-visible {
  color: var(--adlaire-surface-accent);
  outline: 0;
}

.adlaire-sort-button::after {
  content: "";
  width: 0;
  height: 0;
  border-right: 4px solid transparent;
  border-left: 4px solid transparent;
  border-top: 6px solid var(--adlaire-status-gray-999);
}

[aria-sort="ascending"] .adlaire-sort-button::after {
  border-top: 0;
  border-bottom: 6px solid var(--adlaire-surface-accent);
}

[aria-sort="descending"] .adlaire-sort-button::after {
  border-top-color: var(--adlaire-surface-accent);
}

.adlaire-filter-results {
  display: grid;
  gap: 12px;
}

.adlaire-filter-empty {
  display: none;
  padding: 16px;
  background-color: var(--adlaire-surface-soft);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-md);
  color: var(--adlaire-surface-text-muted);
}

.adlaire-filter-empty.is-open {
  display: block;
}

@media (max-width: 1024px) {
  .sidebar {
    width: 250px;
  }

  .sidebar-section {
    padding: 20px;
  }
}

@media (max-width: 768px) {
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

@media (max-width: 480px) {
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
