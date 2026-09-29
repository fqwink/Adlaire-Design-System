export const CONTENT_FOUNDATION_TABS_CSS = `.tab-container {
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

`;
