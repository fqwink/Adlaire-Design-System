export const COMPONENTS_OPERATIONS_BUSINESS_MESSAGING_CSS =
  `.adlaire-message-composer,
.adlaire-channel-list,
.adlaire-mention-picker,
.adlaire-notification-center,
.adlaire-digest-schedule,
.adlaire-announcement-composer,
.adlaire-audience-targeting-panel,
.adlaire-publish-queue,
.adlaire-acknowledgement-tracker,
.adlaire-inbox-triage-board,
.adlaire-canned-reply-panel,
.adlaire-topic-preference-list,
.adlaire-consent-channel-matrix,
.adlaire-unsubscribe-reason-panel {
  display: grid;
  gap: 12px;
  padding: 14px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-md);
  color: var(--adlaire-surface-text);
}

.adlaire-conversation-preview,
.adlaire-message-delivery-state,
.adlaire-unread-marker,
.adlaire-notification-rule-card,
.adlaire-notification-template-card,
.adlaire-quiet-hours-panel,
.adlaire-broadcast-banner,
.adlaire-delivery-report-card,
.adlaire-response-timer-card,
.adlaire-follow-up-reminder,
.adlaire-resolution-summary,
.adlaire-opt-in-card {
  display: grid;
  gap: 8px;
  padding: 12px;
  background-color: var(--adlaire-surface-card);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-sm);
  color: var(--adlaire-surface-text);
}

.adlaire-channel-list-item,
.adlaire-mention-picker-item,
.adlaire-notification-center-item,
.adlaire-delivery-channel-row,
.adlaire-digest-schedule-item,
.adlaire-audience-targeting-item,
.adlaire-publish-queue-item,
.adlaire-acknowledgement-tracker-item,
.adlaire-inbox-triage-item,
.adlaire-inbox-assignment-row,
.adlaire-canned-reply-item,
.adlaire-subscription-plan-row,
.adlaire-topic-preference-item,
.adlaire-consent-channel-row,
.adlaire-unsubscribe-reason-item,
.adlaire-preference-audit-row {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
  justify-content: space-between;
  padding: 10px 12px;
  background-color: var(--adlaire-surface-soft);
  border: 1px solid var(--adlaire-surface-border);
  border-radius: var(--adlaire-radius-sm);
  color: var(--adlaire-surface-text-muted);
}

.adlaire-channel-list,
.adlaire-publish-queue,
.adlaire-inbox-triage-board,
.adlaire-consent-channel-matrix {
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
}

.adlaire-channel-list-item,
.adlaire-quiet-hours-panel,
.adlaire-topic-preference-item {
  cursor: pointer;
}

.adlaire-channel-list-item[aria-selected="true"],
.adlaire-quiet-hours-panel[aria-pressed="true"],
.adlaire-topic-preference-item[aria-checked="true"] {
  border-color: var(--adlaire-surface-accent);
  box-shadow: var(--adlaire-shadow-focus-ring);
  color: var(--adlaire-surface-accent-strong);
}

.adlaire-message-delivery-state[data-state="failed"],
.adlaire-notification-rule-card[data-state="paused"],
.adlaire-response-timer-card[data-state="due"],
.adlaire-unsubscribe-reason-item[data-state="risk"] {
  background-color: var(--adlaire-semantic-warning-bg);
  border-color: var(--adlaire-semantic-warning-border);
  color: var(--adlaire-semantic-warning-text);
}

.adlaire-delivery-report-card[data-state="delivered"],
.adlaire-acknowledgement-tracker[data-state="complete"],
.adlaire-opt-in-card[data-state="enabled"],
.adlaire-resolution-summary[data-state="resolved"] {
  border-color: var(--adlaire-semantic-success-border);
  color: var(--adlaire-semantic-success-text);
}

`;
