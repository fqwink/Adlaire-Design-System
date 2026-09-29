export const COMPONENTS_PLATFORM_CLOUD_CSS = `.adlaire-cloud-resource-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(190px, 1fr));
  gap: 12px;
}

.adlaire-cloud-service-card,
.adlaire-cloud-region-card,
.adlaire-cloud-environment-card,
.adlaire-cloud-deployment-target,
.adlaire-cloud-runtime-card,
.adlaire-cloud-database-card,
.adlaire-cloud-storage-card,
.adlaire-cloud-queue-card,
.adlaire-cloud-worker-card {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  gap: 12px;
  align-items: center;
  padding: 14px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-md);
}

.adlaire-cloud-resource-grid img {
  width: 20px;
  height: 20px;
  flex: 0 0 auto;
}

.adlaire-cloud-service-card span,
.adlaire-cloud-region-card span,
.adlaire-cloud-environment-card span,
.adlaire-cloud-deployment-target span,
.adlaire-cloud-runtime-card span,
.adlaire-cloud-database-card span,
.adlaire-cloud-storage-card span,
.adlaire-cloud-queue-card span,
.adlaire-cloud-worker-card span {
  display: block;
  margin-top: 2px;
  color: var(--adlaire-surface-text-subtle);
  font-size: 0.875rem;
}

.adlaire-cloud-topology-map,
.adlaire-cloud-domain-panel,
.adlaire-cloud-certificate-panel,
.adlaire-cloud-secret-vault,
.adlaire-cloud-quota-panel,
.adlaire-cloud-cost-summary {
  display: grid;
  gap: 8px;
  min-width: 0;
  padding: 14px;
  background-color: var(--adlaire-surface-soft);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-md);
}

.adlaire-cloud-topology-map {
  grid-column: span 2;
  grid-template-columns: auto minmax(0, 1fr);
  align-items: center;
}

.adlaire-cloud-topology-map > span,
.adlaire-cloud-domain-panel > span,
.adlaire-cloud-certificate-panel > span,
.adlaire-cloud-secret-vault > span,
.adlaire-cloud-quota-panel > span,
.adlaire-cloud-cost-summary > span {
  color: var(--adlaire-surface-accent-strong);
  font-weight: 700;
}

.adlaire-cloud-quota-panel {
  background-color: var(--adlaire-alert-warning-bg);
  border-color: var(--adlaire-alert-warning-border);
  color: var(--adlaire-alert-warning-text);
}

.adlaire-cloud-cost-summary {
  background-color: var(--adlaire-semantic-success-bg);
  border-color: var(--adlaire-semantic-success-border);
  color: var(--adlaire-semantic-success-text);
}

`;
