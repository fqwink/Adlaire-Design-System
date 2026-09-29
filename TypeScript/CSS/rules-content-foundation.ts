export const CONTENT_FOUNDATION_CSS = `/* Adlaire-Design content components */
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

.adlaire-faq-list {
  display: grid;
  gap: 12px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.adlaire-faq-item {
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-md);
  color: var(--adlaire-surface-text-muted);
}

.adlaire-faq-question,
.adlaire-faq-item summary {
  padding: 16px 18px;
  color: var(--adlaire-surface-accent-strong);
  font-weight: 700;
}

.adlaire-faq-item summary {
  cursor: pointer;
}

.adlaire-faq-answer,
details.adlaire-faq-item > :not(summary),
.adlaire-faq-item details > :not(summary) {
  padding: 0 18px 18px;
  line-height: 1.8;
}

.adlaire-comparison-block {
  display: grid;
  gap: 16px;
  padding: 20px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-lg);
}

.adlaire-pros-cons-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 16px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.adlaire-pros-cons-item {
  padding: 16px;
  background-color: var(--adlaire-surface-soft);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-md);
  color: var(--adlaire-surface-text-muted);
  line-height: 1.8;
}

.adlaire-status-timeline {
  display: grid;
  gap: 14px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.adlaire-status-timeline-item {
  padding: 16px;
  background-color: var(--adlaire-surface-card);
  border-left: 4px solid var(--adlaire-surface-accent);
  border-radius: var(--adlaire-radius-sm);
  color: var(--adlaire-surface-text-muted);
  line-height: 1.8;
}

.adlaire-comparison-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 16px;
}

.adlaire-comparison-grid-item {
  padding: 16px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-md);
  color: var(--adlaire-surface-text-muted);
  line-height: 1.8;
}

.coming-soon {
  padding: 40px 20px;
  background-color: var(--adlaire-surface-soft);
  border: 2px dashed var(--adlaire-surface-accent);
  border-radius: var(--adlaire-radius-md);
  color: var(--adlaire-surface-accent);
  font-size: 1.5rem;
  font-weight: 500;
  text-align: center;
}

.organization-info {
  margin-top: 20px;
}

.adlaire-info-row,
.info-row {
  display: flex;
  padding: 20px 0;
  border-bottom: 1px solid var(--adlaire-surface-border);
}

.info-row:first-child {
  padding-top: 0;
}

.info-row:last-child {
  border-bottom: none;
}

.adlaire-info-label,
.info-label {
  width: 180px;
  flex-shrink: 0;
  color: var(--adlaire-surface-accent);
  font-size: 1rem;
  font-weight: 700;
}

.adlaire-info-value,
.info-value {
  flex: 1;
  color: var(--adlaire-surface-text-muted);
  line-height: 1.8;
}

.business-list {
  margin: 0;
  padding: 0;
  list-style: none;
}

.business-list li {
  margin-bottom: 15px;
  padding-left: 0;
  color: var(--adlaire-surface-text);
  font-weight: 600;
}

.business-list li:last-child {
  margin-bottom: 0;
}

.business-detail {
  display: block;
  margin-top: 5px;
  padding-left: 15px;
  color: var(--adlaire-surface-text-muted);
  font-size: 0.95rem;
  font-weight: 400;
}

.adlaire-content-link,
.contact-link,
.privacy-link,
.text-link {
  color: var(--adlaire-surface-accent);
  font-weight: 500;
  text-decoration: none;
  transition: border-bottom-color var(--adlaire-transition-base), color var(--adlaire-transition-base), transform var(--adlaire-transition-base);
}

.contact-link {
  display: inline-block;
  margin-top: 8px;
  border-bottom: 1px solid transparent;
}

.contact-link:hover {
  border-bottom-color: var(--adlaire-surface-accent-strong);
  color: var(--adlaire-surface-accent-strong);
  transform: translateX(3px);
}

.adlaire-content-link:hover,
.privacy-link:hover,
.text-link:hover {
  color: var(--adlaire-surface-accent-strong);
  text-decoration: underline;
}

.adlaire-timeline,
.timeline {
  position: relative;
  padding: 20px 0;
}

.timeline::before {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 120px;
  width: 2px;
  background: linear-gradient(to bottom, var(--adlaire-surface-accent) 0%, var(--adlaire-surface-accent-strong) 100%);
  content: "";
}

.adlaire-timeline-item,
.timeline-item {
  position: relative;
  display: flex;
  margin-bottom: 30px;
}

.timeline-item:last-child {
  margin-bottom: 0;
}

.timeline-date {
  width: 100px;
  flex-shrink: 0;
  padding-right: 20px;
  color: var(--adlaire-surface-accent);
  font-family: "Courier New", monospace;
  font-size: 1.1rem;
  font-weight: 700;
  text-align: right;
}

.timeline-content {
  position: relative;
  flex: 1;
  padding-top: 2px;
  padding-left: 40px;
}

.timeline-marker {
  position: absolute;
  top: 8px;
  left: 0;
  z-index: var(--adlaire-z-timeline-marker);
  width: 14px;
  height: 14px;
  background-color: var(--adlaire-surface-accent);
  border: 3px solid var(--adlaire-surface-card);
  border-radius: var(--adlaire-radius-round);
  box-shadow: var(--adlaire-shadow-marker-ring);
}

.timeline-text {
  color: var(--adlaire-surface-text-muted);
  font-size: 1rem;
  line-height: 1.8;
}

.tab-container {
  margin-top: 20px;
}

.adlaire-tab-input,
.tab-input {
  display: none;
}

.tab-labels {
  display: flex;
  gap: 10px;
  margin-bottom: 25px;
  border-bottom: 2px solid var(--adlaire-surface-border);
}

.adlaire-tab-label,
.tab-label {
  position: relative;
  bottom: -2px;
  padding: 12px 24px;
  background-color: var(--adlaire-surface-page);
  border: 1px solid var(--adlaire-surface-border);
  border-bottom: none;
  border-radius: var(--adlaire-radius-md) var(--adlaire-radius-md) 0 0;
  color: var(--adlaire-surface-text-subtle);
  cursor: pointer;
  font-weight: 500;
  transition: background-color var(--adlaire-transition-base), border-color var(--adlaire-transition-base), box-shadow var(--adlaire-transition-base), color var(--adlaire-transition-base);
}

.adlaire-tab-label:hover,
.tab-label:hover {
  background-color: var(--adlaire-surface-soft-strong);
  color: var(--adlaire-surface-accent);
}

#tab-all:checked ~ .tab-labels label[for="tab-all"],
#tab-press:checked ~ .tab-labels label[for="tab-press"],
#tab-maintenance:checked ~ .tab-labels label[for="tab-maintenance"] {
  background-color: var(--adlaire-surface-card);
  border-color: var(--adlaire-surface-accent);
  border-bottom: 2px solid var(--adlaire-surface-card);
  box-shadow: var(--adlaire-shadow-tab-active);
  color: var(--adlaire-surface-accent);
  font-weight: 600;
}

.adlaire-tab-content,
.tab-content {
  display: none;
}

#tab-all:checked ~ #content-all,
#tab-press:checked ~ #content-press,
#tab-maintenance:checked ~ #content-maintenance {
  display: block;
}

.tab-pane {
  animation: var(--adlaire-animation-fade-in);
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.adlaire-news-item,
.news-item {
  margin-bottom: 20px;
  padding: 25px;
  background-color: var(--adlaire-surface-card);
  border-left: 4px solid var(--adlaire-surface-accent);
  border-radius: var(--adlaire-radius-sm);
  transition: box-shadow var(--adlaire-transition-base), transform var(--adlaire-transition-base);
}

.adlaire-news-item:hover,
.news-item:hover {
  box-shadow: var(--adlaire-shadow-blue-soft);
  transform: translateX(5px);
}

.news-header {
  display: flex;
  gap: 12px;
  align-items: center;
  margin-bottom: 15px;
}

.news-date {
  color: var(--adlaire-surface-text-subtle);
  font-family: "Courier New", monospace;
  font-size: 0.95rem;
  font-weight: 600;
}

.adlaire-news-badge,
.news-badge {
  display: inline-block;
  padding: 4px 12px;
  border-radius: var(--adlaire-radius-sm);
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.5px;
  text-transform: uppercase;
}

.news-badge-press {
  background-color: var(--adlaire-surface-accent);
  color: var(--adlaire-surface-card);
}

.news-badge-maintenance {
  background-color: var(--adlaire-surface-notice);
  color: var(--adlaire-surface-card);
}
`;
