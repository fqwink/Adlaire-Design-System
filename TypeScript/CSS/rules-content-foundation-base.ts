export const CONTENT_FOUNDATION_BASE_CSS = `/* Adlaire-Design content components */
.adlaire-renewal-notice,
.renewal-notice {
  margin-bottom: 40px;
  padding: 30px 25px;
  background: linear-gradient(135deg, var(--adlaire-surface-accent) 0%, var(--adlaire-surface-accent-strong) 100%);
  border-radius: var(--adlaire-radius-lg);
  box-shadow: var(--adlaire-shadow-blue);
  color: var(--adlaire-surface-card);
  text-align: center;
}

.renewal-title {
  margin: 0 0 15px;
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: 0.5px;
}

.renewal-description {
  margin: 0;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.8;
  opacity: 0.95;
}

.content-section {
  margin-bottom: 40px;
}

.adlaire-card,
.card {
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-lg);
  box-shadow: var(--adlaire-shadow-card);
  transition: box-shadow var(--adlaire-transition-base);
}

.card {
  padding: 40px;
}

.adlaire-card:hover,
.card:hover {
  box-shadow: var(--adlaire-shadow-card-hover);
}

.card-header {
  padding: 1rem 1.5rem;
  background-color: var(--adlaire-status-gray-light);
  border-bottom: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-lg) var(--adlaire-radius-lg) 0 0;
}

.card-body {
  padding: 1.5rem;
}

.card-footer {
  padding: 1rem 1.5rem;
  background-color: var(--adlaire-status-gray-light);
  border-top: 1px solid var(--adlaire-surface-border);
  border-radius: 0 0 var(--adlaire-radius-lg) var(--adlaire-radius-lg);
}

.adlaire-section-title,
.section-title {
  margin-bottom: 25px;
  padding-bottom: 15px;
  border-bottom: 3px solid var(--adlaire-surface-accent);
  color: var(--adlaire-surface-accent);
  font-size: 2.2rem;
  font-weight: 700;
  letter-spacing: 0;
}

.section-content h3 {
  margin-top: 25px;
  margin-bottom: 12px;
  color: var(--adlaire-surface-accent-strong);
  font-size: 1.5rem;
  font-weight: 600;
}

.section-content p {
  margin-bottom: 15px;
  color: var(--adlaire-surface-text-muted);
  line-height: 1.8;
}

.section-content ul {
  margin: 15px 0 20px 25px;
  line-height: 1.9;
}

.section-content li {
  margin-bottom: 8px;
  color: var(--adlaire-surface-text-muted);
}

.adlaire-table-scroll {
  width: 100%;
  overflow-x: auto;
}

.adlaire-content-table,
.content-table {
  width: 100%;
  min-width: 640px;
  border-collapse: collapse;
  background-color: var(--adlaire-surface-card);
  color: var(--adlaire-surface-text);
}

.adlaire-content-table th,
.adlaire-content-table td,
.content-table th,
.content-table td {
  padding: 14px 16px;
  border: 1px solid var(--adlaire-surface-border);
  text-align: left;
  vertical-align: top;
}

.adlaire-content-table th,
.content-table th {
  background-color: var(--adlaire-surface-soft);
  color: var(--adlaire-surface-accent-strong);
  font-weight: 700;
}

.adlaire-content-table caption,
.content-table caption {
  margin-bottom: 10px;
  color: var(--adlaire-surface-text-subtle);
  font-size: 0.9rem;
  text-align: left;
}

.adlaire-meta-list {
  display: grid;
  gap: 0;
  margin: 0;
  padding: 0;
}

.adlaire-meta-row {
  display: grid;
  grid-template-columns: minmax(120px, 180px) 1fr;
  gap: 20px;
  padding: 16px 0;
  border-bottom: 1px solid var(--adlaire-surface-border);
}

.adlaire-meta-row:last-child {
  border-bottom: none;
}

.adlaire-meta-label {
  color: var(--adlaire-surface-accent);
  font-weight: 700;
}

.adlaire-meta-value {
  color: var(--adlaire-surface-text-muted);
  line-height: 1.8;
}

.adlaire-badge {
  display: inline-block;
  padding: 4px 10px;
  border-radius: var(--adlaire-radius-sm);
  font-size: 0.8rem;
  font-weight: 700;
  line-height: 1.4;
  vertical-align: middle;
}

.adlaire-badge-primary {
  background-color: var(--adlaire-surface-accent);
  color: var(--adlaire-surface-card);
}

.adlaire-badge-secondary {
  background-color: var(--adlaire-status-secondary);
  color: var(--adlaire-surface-card);
}

.adlaire-badge-success {
  background-color: var(--adlaire-status-success);
  color: var(--adlaire-surface-card);
}

.adlaire-badge-warning {
  background-color: var(--adlaire-status-warning);
  color: var(--adlaire-surface-text);
}

.adlaire-badge-danger {
  background-color: var(--adlaire-status-danger);
  color: var(--adlaire-surface-card);
}

.adlaire-note {
  padding: 16px 18px;
  background-color: var(--adlaire-surface-soft);
  border-left: 4px solid var(--adlaire-surface-accent);
  border-radius: var(--adlaire-radius-sm);
  color: var(--adlaire-surface-text-muted);
  line-height: 1.8;
}

.adlaire-note-info {
  background-color: var(--adlaire-alert-info-bg);
  border-left-color: var(--adlaire-alert-info-border);
  color: var(--adlaire-alert-info-text);
}

.adlaire-note-success {
  background-color: var(--adlaire-alert-success-bg);
  border-left-color: var(--adlaire-alert-success-border);
  color: var(--adlaire-alert-success-text);
}

.adlaire-note-warning {
  background-color: var(--adlaire-alert-warning-bg);
  border-left-color: var(--adlaire-alert-warning-border);
  color: var(--adlaire-alert-warning-text);
}

.adlaire-note-danger {
  background-color: var(--adlaire-alert-danger-bg);
  border-left-color: var(--adlaire-alert-danger-border);
  color: var(--adlaire-alert-danger-text);
}

`;
