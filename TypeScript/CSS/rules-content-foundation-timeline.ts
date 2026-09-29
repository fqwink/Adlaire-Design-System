export const CONTENT_FOUNDATION_TIMELINE_CSS = `.adlaire-timeline,
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

`;
