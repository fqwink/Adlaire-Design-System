export const CONTENT_CATALOG_SIDEBAR_CSS = `.sidebar {
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

`;
