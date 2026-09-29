export const CONTENT_CATALOG_CSS = `
/* Catalog completeness aliases */
.adlaire-content-card-header,
.adlaire-content-card-body,
.adlaire-content-card-footer,
.adlaire-code-title,
.adlaire-code-body,
.adlaire-related-meta,
.adlaire-data-card-title,
.adlaire-data-card-value,
.adlaire-toc-title,
.adlaire-knowledge-search-nav,
.adlaire-knowledge-list,
.adlaire-git-readme,
.adlaire-git-readme-meta,
.adlaire-git-docs-nav,
.adlaire-git-docs-page,
.adlaire-git-wiki,
.adlaire-git-artifact-list,
.adlaire-repo-save-status,
.adlaire-repo-change-badge {
  display: block;
}

.adlaire-content-card-header,
.adlaire-code-title,
.adlaire-data-card-title,
.adlaire-toc-title {
  color: var(--adlaire-surface-accent-strong);
  font-weight: 700;
}

.adlaire-content-card-body,
.adlaire-content-card-footer,
.adlaire-related-meta,
.adlaire-git-readme-meta,
.adlaire-repo-save-status {
  color: var(--adlaire-surface-text-subtle);
  line-height: 1.7;
}

.adlaire-data-card-value {
  color: var(--adlaire-surface-text);
  font-size: 1.5rem;
  font-weight: 700;
}

.adlaire-code-body {
  overflow: auto;
  font-family: var(--adlaire-font-family-mono);
}

.adlaire-comparison-table,
.adlaire-data-table,
.adlaire-table {
  width: 100%;
  border-collapse: collapse;
}

.adlaire-comparison-table th,
.adlaire-comparison-table td,
.adlaire-data-table th,
.adlaire-data-table td,
.adlaire-table th,
.adlaire-table td {
  padding: 12px 14px;
  border: 1px solid var(--adlaire-surface-border);
  text-align: left;
}

.adlaire-table-row-selected {
  background-color: var(--adlaire-surface-soft);
}

.adlaire-table-cell-muted {
  color: var(--adlaire-surface-text-subtle);
}

.adlaire-toc-sticky {
  position: sticky;
  top: 16px;
}

.adlaire-toc-link-current {
  color: var(--adlaire-surface-accent);
  font-weight: 700;
}

.adlaire-repo-file-row,
.adlaire-repo-directory-row,
.adlaire-git-file-row,
.adlaire-git-file-header,
.adlaire-git-file-empty,
.adlaire-git-ref-switcher,
.adlaire-git-ref-current,
.adlaire-git-ref-menu {
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
}

.adlaire-repo-diff-added,
.adlaire-git-diff-added {
  background-color: var(--adlaire-alert-success-bg);
}

.adlaire-repo-diff-removed,
.adlaire-git-diff-removed {
  background-color: var(--adlaire-alert-danger-bg);
}

.adlaire-git-review-comment,
.adlaire-git-review-resolved {
  padding: 10px 12px;
  background-color: var(--adlaire-surface-soft);
  border-left: 4px solid var(--adlaire-surface-accent);
  border-radius: var(--adlaire-radius-sm);
}

.adlaire-git-review-resolved {
  opacity: 0.72;
}

.adlaire-search-result-item,
.adlaire-search-suggest {
  display: grid;
  gap: 8px;
}

.adlaire-git-repo-meta,
.adlaire-git-repo-summary,
.adlaire-repo-settings,
.adlaire-repo-settings-row,
.adlaire-repo-settings-section {
  display: grid;
  gap: 8px;
}

.adlaire-git-repo-meta,
.adlaire-git-repo-summary {
  color: var(--adlaire-surface-text-subtle);
  line-height: 1.7;
}

.adlaire-repo-settings-section {
  padding: 14px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-sm);
}

.news-title {
  margin-bottom: 15px;
  color: var(--adlaire-surface-accent);
  font-size: 1.4rem;
  font-weight: 700;
  line-height: 1.4;
}

.news-content {
  color: var(--adlaire-surface-text-muted);
  line-height: 1.8;
}

.news-content p {
  margin-bottom: 12px;
}

.news-content p:last-child {
  margin-bottom: 0;
}

.sidebar {
  width: 300px;
  flex-shrink: 0;
}

.sidebar-section {
  margin-bottom: 25px;
  padding: 25px;
  background-color: var(--adlaire-surface-card);
  border-radius: var(--adlaire-radius-lg);
  box-shadow: var(--adlaire-shadow-card);
  transition: box-shadow var(--adlaire-transition-base);
}

.sidebar-section:hover {
  box-shadow: var(--adlaire-shadow-card-hover);
}

.sidebar-title {
  margin: 0 0 15px;
  padding-bottom: 10px;
  border-bottom: 2px solid var(--adlaire-surface-accent);
  color: var(--adlaire-surface-accent);
  font-size: 1.2rem;
  font-weight: 700;
}

.sidebar-content {
  font-size: 0.95rem;
  line-height: 1.6;
}

.coming-soon-small {
  margin: 0;
  padding: 20px 10px;
  background-color: var(--adlaire-surface-soft);
  border: 1px dashed var(--adlaire-surface-accent);
  border-radius: var(--adlaire-radius-sm);
  color: var(--adlaire-surface-accent);
  font-size: 1rem;
  font-weight: 500;
  text-align: center;
}

.sidebar-link-list,
.adlaire-sidebar-links,
.sidebar-links {
  margin: 0;
  padding: 0;
  list-style: none;
}

.sidebar-link-list li {
  margin-bottom: 12px;
}

.sidebar-link-list li:last-child {
  margin-bottom: 0;
}

.sidebar-link {
  display: block;
  padding: 10px 15px;
  background-color: var(--adlaire-status-gray-soft);
  border-left: 3px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-sm);
  color: var(--adlaire-surface-text);
  font-weight: 500;
  text-decoration: none;
  transition: background-color var(--adlaire-transition-base), border-left-color var(--adlaire-transition-base), color var(--adlaire-transition-base), transform var(--adlaire-transition-base);
}

.sidebar-link:hover {
  background-color: var(--adlaire-surface-soft-strong);
  border-left-color: var(--adlaire-surface-accent);
  color: var(--adlaire-surface-accent);
  text-decoration: none;
  transform: translateX(5px);
}

.sidebar-link.active,
.active.sidebar-link {
  background-color: var(--adlaire-surface-accent);
  border-left-color: var(--adlaire-surface-accent-strong);
  color: var(--adlaire-surface-card);
}

.adlaire-sidebar-links li,
.sidebar-links li {
  position: relative;
  margin-bottom: 12px;
  padding-left: 20px;
}

.adlaire-sidebar-links li::before,
.sidebar-links li::before {
  position: absolute;
  left: 0;
  color: var(--adlaire-surface-accent);
  content: "\\25b8";
  font-weight: 700;
}

.adlaire-sidebar-links a,
.sidebar-links a {
  display: inline-block;
  color: var(--adlaire-surface-text);
  text-decoration: none;
  transition: color var(--adlaire-transition-base), padding-left var(--adlaire-transition-base);
}

.adlaire-sidebar-links a:hover,
.sidebar-links a:hover {
  padding-left: 5px;
  color: var(--adlaire-surface-accent);
}

.adlaire-contact-info,
.contact-info {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
  margin-top: 30px;
}

.adlaire-contact-item,
.contact-item {
  padding: 20px;
  background-color: var(--adlaire-status-gray-soft);
  border-left: 4px solid var(--adlaire-surface-accent);
  border-radius: var(--adlaire-radius-md);
}

.adlaire-contact-item h3,
.contact-item h3 {
  margin-bottom: 10px;
  color: var(--adlaire-surface-accent);
  font-size: 1.2rem;
  font-weight: 600;
}

.adlaire-contact-item p,
.contact-item p {
  margin-bottom: 0;
  color: var(--adlaire-surface-text-muted);
}

.adlaire-contact-item a,
.contact-item a {
  color: var(--adlaire-surface-accent);
  text-decoration: none;
  transition: color var(--adlaire-transition-base);
}

.adlaire-contact-item a:hover,
.contact-item a:hover {
  color: var(--adlaire-surface-accent-strong);
  text-decoration: underline;
}

.adlaire-breadcrumb,
.breadcrumb {
  margin-bottom: 20px;
  padding: 15px 0;
  color: var(--adlaire-surface-text-subtle);
  font-size: 0.9rem;
}

.breadcrumb-link {
  color: var(--adlaire-surface-accent);
  font-weight: 500;
  text-decoration: none;
  transition: color var(--adlaire-transition-base);
}

.breadcrumb-link:hover {
  color: var(--adlaire-surface-accent-strong);
  text-decoration: underline;
}

.breadcrumb-separator {
  margin: 0 10px;
  color: var(--adlaire-status-gray-999);
}

.breadcrumb-current {
  color: var(--adlaire-surface-text-subtle);
  font-weight: 600;
}

.info-note {
  color: var(--adlaire-status-gray-777);
  font-size: 0.9rem;
}

.mt-30 {
  margin-top: 30px;
}

.last-updated {
  padding: 20px 0 0;
  color: var(--adlaire-surface-text-subtle);
  font-size: 0.9rem;
  text-align: right;
}

.last-updated p {
  margin: 0;
}

.adlaire-legal-toc,
.legal-toc {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  padding: 10px 0;
}

.legal-toc-card {
  position: sticky;
  top: 20px;
  z-index: var(--adlaire-z-sticky);
  background-color: var(--adlaire-surface-soft);
  border-left: 4px solid var(--adlaire-surface-accent);
  box-shadow: var(--adlaire-shadow-blue-sticky);
}

.adlaire-legal-toc-link,
.legal-toc-link {
  display: inline-block;
  padding: 10px 20px;
  background-color: var(--adlaire-surface-card);
  border: 2px solid var(--adlaire-surface-accent);
  border-radius: var(--adlaire-radius-sm);
  color: var(--adlaire-surface-accent);
  font-weight: 500;
  text-decoration: none;
  transition: background-color var(--adlaire-transition-base), box-shadow var(--adlaire-transition-base), color var(--adlaire-transition-base), transform var(--adlaire-transition-base);
}

.adlaire-legal-toc-link:hover,
.legal-toc-link:hover {
  background-color: var(--adlaire-surface-accent);
  box-shadow: var(--adlaire-shadow-blue-nav-hover);
  color: var(--adlaire-surface-card);
  text-decoration: none;
  transform: translateY(-2px);
}

.adlaire-alert,
.alert {
  padding: 0.75rem 1rem;
  border: 1px solid transparent;
  border-radius: var(--adlaire-radius-sm);
}

.adlaire-alert-info,
.alert-info {
  background-color: var(--adlaire-semantic-info-bg);
  border-color: var(--adlaire-semantic-info-border);
  color: var(--adlaire-semantic-info-text);
}

.adlaire-alert-success,
.alert-success {
  background-color: var(--adlaire-semantic-success-bg);
  border-color: var(--adlaire-semantic-success-border);
  color: var(--adlaire-semantic-success-text);
}

.adlaire-alert-warning,
.alert-warning {
  background-color: var(--adlaire-semantic-warning-bg);
  border-color: var(--adlaire-semantic-warning-border);
  color: var(--adlaire-semantic-warning-text);
}

.adlaire-alert-danger,
.alert-danger {
  background-color: var(--adlaire-semantic-danger-bg);
  border-color: var(--adlaire-semantic-danger-border);
  color: var(--adlaire-semantic-danger-text);
}
`;
