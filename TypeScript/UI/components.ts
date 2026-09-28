/// <reference lib="dom" />
/* Adlaire-Design component interactions */
(() => {
  "use strict";

  let lastFocus: HTMLElement | null = null;
  const overlaySelector = ".adlaire-modal, .adlaire-dialog, .adlaire-drawer, .adlaire-bottom-sheet";
  const openOverlaySelector = ".adlaire-modal.is-open, .adlaire-dialog.is-open, .adlaire-drawer.is-open, .adlaire-bottom-sheet.is-open";

  function targetElement(target: EventTarget | null): Element | null {
    return target instanceof Element ? target : null;
  }

  function getTarget(trigger: Element): HTMLElement | null {
    const selector = trigger.getAttribute("data-adlaire-target") ?? trigger.getAttribute("href");
    if (!selector || !selector.startsWith("#")) return null;
    return document.getElementById(selector.slice(1));
  }

  function queryReferencedTarget(trigger: Element, attribute: string): HTMLElement | null {
    const selector = trigger.getAttribute(attribute) ?? trigger.getAttribute("data-adlaire-target") ?? trigger.getAttribute("aria-controls");
    if (!selector) return null;
    if (selector.startsWith("#")) return document.getElementById(selector.slice(1));
    const byId = document.getElementById(selector);
    if (byId) return byId;
    try {
      return document.querySelector<HTMLElement>(selector);
    } catch {
      return null;
    }
  }

  function setExpanded(trigger: Element, target: HTMLElement | null, expanded: boolean): void {
    trigger.setAttribute("aria-expanded", expanded ? "true" : "false");
    if (!target) return;
    target.hidden = !expanded;
    target.classList.toggle("is-open", expanded);
    if (expanded && target.matches(overlaySelector)) {
      document.documentElement.classList.add("adlaire-overlay-open");
    }
    if (!expanded && !document.querySelector(openOverlaySelector)) {
      document.documentElement.classList.remove("adlaire-overlay-open");
    }
  }

  function triggersForTarget(target: Element | null): Element[] {
    if (!target?.id) return [];
    const targetSelector = `#${target.id}`;
    const dataTriggers = Array.from(document.querySelectorAll("[data-adlaire-toggle][data-adlaire-target]"))
      .filter((trigger) => trigger.getAttribute("data-adlaire-target") === targetSelector);
    const hrefTriggers = Array.from(document.querySelectorAll("[data-adlaire-toggle][href]"))
      .filter((trigger) => trigger.getAttribute("href") === targetSelector);
    return dataTriggers.concat(hrefTriggers);
  }

  function getFocusable(target: Element): HTMLElement[] {
    return Array.from(target.querySelectorAll<HTMLElement>("button, [href], input, select, textarea, [tabindex]:not([tabindex='-1'])"))
      .filter((item) => !item.hidden && !item.hasAttribute("disabled") && item.getAttribute("aria-hidden") !== "true");
  }

  function focusFirst(target: Element): void {
    getFocusable(target)[0]?.focus();
  }

  function closeSiblings(trigger: Element, target: HTMLElement | null): void {
    const group = trigger.getAttribute("data-adlaire-group");
    if (!group) return;

    document.querySelectorAll("[data-adlaire-toggle][data-adlaire-group]").forEach((item) => {
      if (item.getAttribute("data-adlaire-group") !== group || item === trigger) return;
      setExpanded(item, getTarget(item), false);
    });

    if (target?.getAttribute("role") === "tabpanel") {
      document.querySelectorAll<HTMLElement>('[role="tabpanel"][data-adlaire-group]').forEach((panel) => {
        if (panel.getAttribute("data-adlaire-group") !== group || panel === target) return;
        panel.hidden = true;
        panel.classList.remove("is-open");
      });
    }
  }

  document.addEventListener("click", (event) => {
    const source = targetElement(event.target);
    const trigger = source?.closest("[data-adlaire-toggle]");
    const dismiss = source?.closest("[data-adlaire-dismiss]");
    const carouselControl = source?.closest("[data-adlaire-carousel-action]");
    let carouselIndicator = source?.closest("[data-adlaire-carousel-index]");
    if (carouselIndicator?.hasAttribute("data-adlaire-carousel")) carouselIndicator = null;

    if (dismiss) {
      const dismissTarget = getTarget(dismiss) ?? dismiss.closest<HTMLElement>(".adlaire-modal, .adlaire-dialog, .adlaire-drawer, .adlaire-bottom-sheet, .adlaire-popover, .adlaire-dropdown-menu, .adlaire-toast");
      if (dismissTarget) {
        dismissTarget.hidden = true;
        dismissTarget.classList.remove("is-open");
        triggersForTarget(dismissTarget).forEach((item) => item.setAttribute("aria-expanded", "false"));
      }
      if (!document.querySelector(openOverlaySelector)) {
        document.documentElement.classList.remove("adlaire-overlay-open");
      }
      lastFocus?.focus();
      return;
    }

    if (carouselControl || carouselIndicator) {
      event.preventDefault();
      moveCarousel(carouselControl ?? carouselIndicator ?? null);
      return;
    }

    if (!trigger) return;
    const target = getTarget(trigger);
    if (!target) return;

    event.preventDefault();
    const isExpanded = trigger.getAttribute("aria-expanded") === "true";
    lastFocus = trigger instanceof HTMLElement ? trigger : null;
    closeSiblings(trigger, target);
    setExpanded(trigger, target, !isExpanded);
    if (!isExpanded && target.matches(overlaySelector)) focusFirst(target);
  });

  document.addEventListener("keydown", (event) => {
    const activeOverlay = document.querySelector<HTMLElement>(openOverlaySelector);
    if (event.key === "Tab" && activeOverlay) {
      containFocus(event, activeOverlay);
      return;
    }
    if (event.key !== "Escape") return;

    document.querySelectorAll<HTMLElement>(`${openOverlaySelector}, .adlaire-popover.is-open, .adlaire-dropdown-menu.is-open, .adlaire-context-menu.is-open, .adlaire-overflow-toolbar-menu.is-open`).forEach((target) => {
      target.hidden = true;
      target.classList.remove("is-open");
      triggersForTarget(target).forEach((trigger) => trigger.setAttribute("aria-expanded", "false"));
    });
    document.querySelectorAll("[data-adlaire-context-menu], [data-adlaire-split-button-toggle], [data-adlaire-overflow-toggle]").forEach((trigger) => {
      trigger.setAttribute("aria-expanded", "false");
    });
    document.documentElement.classList.remove("adlaire-overlay-open");
    lastFocus?.focus();
  });

  function containFocus(event: KeyboardEvent, target: Element): void {
    const focusable = getFocusable(target);
    if (focusable.length === 0) {
      event.preventDefault();
      return;
    }

    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (!target.contains(document.activeElement)) {
      event.preventDefault();
      first.focus();
    } else if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }

  function moveCarousel(control: Element | null): void {
    const root = control?.closest<HTMLElement>("[data-adlaire-carousel]");
    if (!root) return;

    const track = root.querySelector<HTMLElement>(".adlaire-carousel-track");
    const slides = Array.from(root.querySelectorAll<HTMLElement>(".adlaire-carousel-slide"));
    if (!track || slides.length === 0) return;

    let current = Number(root.getAttribute("data-adlaire-carousel-index") || "0");
    const requested = control?.getAttribute("data-adlaire-carousel-index");
    const action = control?.getAttribute("data-adlaire-carousel-action");
    let next = requested !== null && requested !== undefined ? Number(requested) : current + (action === "previous" ? -1 : 1);
    if (!Number.isFinite(next)) next = 0;
    if (next < 0) next = slides.length - 1;
    if (next >= slides.length) next = 0;
    current = next;

    root.setAttribute("data-adlaire-carousel-index", String(current));
    track.style.transform = `translateX(-${current * 100}%)`;
    slides.forEach((slide, index) => {
      const currentSlide = index === current;
      slide.classList.toggle("is-current", currentSlide);
      slide.setAttribute("aria-hidden", currentSlide ? "false" : "true");
    });
    Array.from(root.querySelectorAll("[data-adlaire-carousel-index]"))
      .filter((indicator) => !indicator.hasAttribute("data-adlaire-carousel"))
      .forEach((indicator, index) => indicator.setAttribute("aria-current", index === current ? "true" : "false"));
  }

  document.addEventListener("click", (event) => {
    const source = targetElement(event.target);
    const copy = source?.closest("[data-adlaire-copy]");
    const remove = source?.closest("[data-adlaire-remove]");
    const toastDismiss = source?.closest("[data-adlaire-toast-dismiss]");
    const select = source?.closest("[data-adlaire-select]");
    const sidebarToggle = source?.closest("[data-adlaire-sidebar-toggle]");
    const treeToggle = source?.closest("[data-adlaire-tree-toggle]");
    const workspaceTab = source?.closest("[data-adlaire-workspace-tab]");
    const contextMenu = source?.closest("[data-adlaire-context-menu]");
    const splitToggle = source?.closest("[data-adlaire-split-button-toggle]");
    const overflowToggle = source?.closest("[data-adlaire-overflow-toggle]");
    const dockToggle = source?.closest("[data-adlaire-dock-toggle]");
    const timeSlot = source?.closest("[data-adlaire-time-slot]");
    const floorSelect = source?.closest("[data-adlaire-floor-select]");
    const optionSelect = source?.closest("[data-adlaire-option-select]");
    const folderToggle = source?.closest("[data-adlaire-folder-toggle]");
    const policyExceptionToggle = source?.closest("[data-adlaire-policy-exception-toggle]");
    const shiftSelect = source?.closest("[data-adlaire-shift-select]");
    const pipelineStageSelect = source?.closest("[data-adlaire-pipeline-stage-select]");
    const serviceCheck = source?.closest("[data-adlaire-service-check]");
    const policyAcknowledgement = source?.closest("[data-adlaire-policy-acknowledgement]");
    const confidenceSelect = source?.closest("[data-adlaire-confidence-select]");
    const milestoneSelect = source?.closest("[data-adlaire-milestone-select]");
    const attestationToggle = source?.closest("[data-adlaire-attestation-toggle]");
    const routeSelect = source?.closest("[data-adlaire-route-select]");
    const carePlanCheck = source?.closest("[data-adlaire-care-plan-check]");
    const evidenceSelect = source?.closest("[data-adlaire-evidence-select]");
    const ticketPrioritySelect = source?.closest("[data-adlaire-ticket-priority-select]");
    const successPlaybookCheck = source?.closest("[data-adlaire-success-playbook-check]");
    const reportParameterSelect = source?.closest("[data-adlaire-report-parameter-select]");
    const channelSelect = source?.closest("[data-adlaire-channel-select]");
    const quietHoursToggle = source?.closest("[data-adlaire-quiet-hours-toggle]");
    const topicPreferenceToggle = source?.closest("[data-adlaire-topic-preference-toggle]");
    const editorialGateSelect = source?.closest("[data-adlaire-editorial-gate-select]");
    const localeSelect = source?.closest("[data-adlaire-locale-select]");
    const moderationDecision = source?.closest("[data-adlaire-moderation-decision]");
    const deviceSelect = source?.closest("[data-adlaire-device-select]");
    const deploymentRingSelect = source?.closest("[data-adlaire-deployment-ring-select]");
    const handoffCheck = source?.closest("[data-adlaire-handoff-check]");
    const fareOptionSelect = source?.closest("[data-adlaire-fare-option-select]");
    const roomSelect = source?.closest("[data-adlaire-room-select]");
    const recoveryTaskCheck = source?.closest("[data-adlaire-recovery-task-check]");
    const eligibilityCheck = source?.closest("[data-adlaire-eligibility-check]");
    const permitStepSelect = source?.closest("[data-adlaire-permit-step-select]");
    const volunteerShiftSelect = source?.closest("[data-adlaire-volunteer-shift-select]");
    const demandResponseSelect = source?.closest("[data-adlaire-demand-response-select]");
    const outageReportSelect = source?.closest("[data-adlaire-outage-report-select]");
    const disclosureCheck = source?.closest("[data-adlaire-disclosure-check]");

    if (copy) {
      const copyTarget = getTarget(copy);
      const text = copyTarget?.textContent ?? copy.getAttribute("data-adlaire-copy");
      if (text && navigator.clipboard) {
        navigator.clipboard.writeText(text);
        copy.setAttribute("data-adlaire-copied", "true");
      }
    }

    if (remove) {
      const removable = getTarget(remove) ?? remove.closest(".adlaire-toast, .adlaire-snackbar, .adlaire-upload-item, .adlaire-attachment-item");
      removable?.remove();
    }

    if (toastDismiss) {
      toastDismiss.closest(".adlaire-toast")?.remove();
    }

    if (select) {
      const list = select.closest("[data-adlaire-select-list]");
      list?.querySelectorAll("[data-adlaire-select]").forEach((item) => {
        item.setAttribute("aria-selected", item === select ? "true" : "false");
      });
    }

    if (sidebarToggle) {
      event.preventDefault();
      toggleSidebar(sidebarToggle);
    }

    if (treeToggle) {
      event.preventDefault();
      toggleTree(treeToggle);
    }

    if (workspaceTab) {
      event.preventDefault();
      selectWorkspaceTab(workspaceTab);
    }

    if (contextMenu) {
      event.preventDefault();
      toggleDisclosureSurface(contextMenu, "data-adlaire-context-menu");
    }

    if (splitToggle) {
      event.preventDefault();
      toggleDisclosureSurface(splitToggle, "data-adlaire-split-button-toggle", ".adlaire-split-button", ".adlaire-context-menu, .adlaire-overflow-toolbar-menu");
    }

    if (overflowToggle) {
      event.preventDefault();
      toggleDisclosureSurface(overflowToggle, "data-adlaire-overflow-toggle", ".adlaire-overflow-toolbar", ".adlaire-overflow-toolbar-menu");
    }

    if (dockToggle) {
      event.preventDefault();
      toggleDockPanel(dockToggle);
    }

    if (timeSlot) {
      event.preventDefault();
      selectInteractiveChoice(timeSlot, ".adlaire-time-slot-grid", "[data-adlaire-time-slot]", "aria-selected");
    }

    if (floorSelect) {
      event.preventDefault();
      selectInteractiveChoice(floorSelect, ".adlaire-floor-selector", "[data-adlaire-floor-select]", "aria-pressed");
    }

    if (optionSelect) {
      event.preventDefault();
      selectInteractiveChoice(optionSelect, "[data-adlaire-option-group]", "[data-adlaire-option-select]", "aria-selected");
    }

    if (folderToggle) {
      event.preventDefault();
      toggleFolderBranch(folderToggle);
    }

    if (policyExceptionToggle) {
      event.preventDefault();
      toggleDisclosureSurface(policyExceptionToggle, "data-adlaire-policy-exception-toggle", ".adlaire-policy-exception-panel", ".adlaire-policy-exception-body");
    }

    if (shiftSelect) {
      event.preventDefault();
      selectInteractiveChoice(shiftSelect, ".adlaire-shift-roster", "[data-adlaire-shift-select]", "aria-selected");
    }

    if (pipelineStageSelect) {
      event.preventDefault();
      selectCurrentStep(pipelineStageSelect, ".adlaire-pipeline-stage-rail", "[data-adlaire-pipeline-stage-select]");
    }

    if (serviceCheck) {
      event.preventDefault();
      toggleBooleanState(serviceCheck, "aria-checked");
    }

    if (policyAcknowledgement) {
      event.preventDefault();
      toggleBooleanState(policyAcknowledgement, "aria-pressed");
    }

    if (confidenceSelect) {
      event.preventDefault();
      selectInteractiveChoice(confidenceSelect, ".adlaire-confidence-indicator", "[data-adlaire-confidence-select]", "aria-pressed");
    }

    if (milestoneSelect) {
      event.preventDefault();
      selectCurrentStep(milestoneSelect, ".adlaire-milestone-tracker", "[data-adlaire-milestone-select]");
    }

    if (attestationToggle) {
      event.preventDefault();
      toggleBooleanState(attestationToggle, "aria-pressed");
    }

    if (routeSelect) {
      event.preventDefault();
      selectInteractiveChoice(routeSelect, ".adlaire-delivery-route-board", "[data-adlaire-route-select]", "aria-selected");
    }

    if (carePlanCheck) {
      event.preventDefault();
      toggleBooleanState(carePlanCheck, "aria-checked");
    }

    if (evidenceSelect) {
      event.preventDefault();
      selectInteractiveChoice(evidenceSelect, ".adlaire-evidence-list", "[data-adlaire-evidence-select]", "aria-selected");
    }

    if (ticketPrioritySelect) {
      event.preventDefault();
      selectInteractiveChoice(ticketPrioritySelect, ".adlaire-ticket-priority-board", "[data-adlaire-ticket-priority-select]", "aria-selected");
    }

    if (successPlaybookCheck) {
      event.preventDefault();
      toggleBooleanState(successPlaybookCheck, "aria-checked");
    }

    if (reportParameterSelect) {
      event.preventDefault();
      selectInteractiveChoice(reportParameterSelect, ".adlaire-report-parameter-bar", "[data-adlaire-report-parameter-select]", "aria-pressed");
    }

    if (channelSelect) {
      event.preventDefault();
      selectInteractiveChoice(channelSelect, ".adlaire-channel-list", "[data-adlaire-channel-select]", "aria-selected");
    }

    if (quietHoursToggle) {
      event.preventDefault();
      toggleBooleanState(quietHoursToggle, "aria-pressed");
    }

    if (topicPreferenceToggle) {
      event.preventDefault();
      toggleBooleanState(topicPreferenceToggle, "aria-checked");
    }

    if (editorialGateSelect) {
      event.preventDefault();
      selectInteractiveChoice(editorialGateSelect, ".adlaire-review-gate-panel", "[data-adlaire-editorial-gate-select]", "aria-selected");
    }

    if (localeSelect) {
      event.preventDefault();
      selectInteractiveChoice(localeSelect, ".adlaire-locale-switcher-panel", "[data-adlaire-locale-select]", "aria-selected");
    }

    if (moderationDecision) {
      event.preventDefault();
      selectInteractiveChoice(moderationDecision, ".adlaire-moderation-queue", "[data-adlaire-moderation-decision]", "aria-pressed");
    }

    if (deviceSelect) {
      event.preventDefault();
      selectInteractiveChoice(deviceSelect, ".adlaire-device-registry-table", "[data-adlaire-device-select]", "aria-selected");
    }

    if (deploymentRingSelect) {
      event.preventDefault();
      selectInteractiveChoice(deploymentRingSelect, ".adlaire-deployment-ring-selector", "[data-adlaire-deployment-ring-select]", "aria-selected");
    }

    if (handoffCheck) {
      event.preventDefault();
      toggleBooleanState(handoffCheck, "aria-checked");
    }

    if (fareOptionSelect) {
      event.preventDefault();
      selectInteractiveChoice(fareOptionSelect, ".adlaire-booking-summary-panel", "[data-adlaire-fare-option-select]", "aria-selected");
    }

    if (roomSelect) {
      event.preventDefault();
      selectInteractiveChoice(roomSelect, ".adlaire-room-inventory-board", "[data-adlaire-room-select]", "aria-selected");
    }

    if (recoveryTaskCheck) {
      event.preventDefault();
      toggleBooleanState(recoveryTaskCheck, "aria-checked");
    }

    if (eligibilityCheck) {
      event.preventDefault();
      toggleBooleanState(eligibilityCheck, "aria-checked");
    }

    if (permitStepSelect) {
      event.preventDefault();
      selectInteractiveChoice(permitStepSelect, ".adlaire-document-requirement-list", "[data-adlaire-permit-step-select]", "aria-selected");
    }

    if (volunteerShiftSelect) {
      event.preventDefault();
      selectInteractiveChoice(volunteerShiftSelect, ".adlaire-volunteer-shift-board", "[data-adlaire-volunteer-shift-select]", "aria-selected");
    }

    if (demandResponseSelect) {
      event.preventDefault();
      selectInteractiveChoice(demandResponseSelect, ".adlaire-demand-response-panel", "[data-adlaire-demand-response-select]", "aria-selected");
    }

    if (outageReportSelect) {
      event.preventDefault();
      selectInteractiveChoice(outageReportSelect, ".adlaire-service-appointment-board", "[data-adlaire-outage-report-select]", "aria-selected");
    }

    if (disclosureCheck) {
      event.preventDefault();
      toggleBooleanState(disclosureCheck, "aria-checked");
    }
  });

  function toggleSidebar(trigger: Element): void {
    const selector = trigger.getAttribute("data-adlaire-sidebar-toggle") || trigger.getAttribute("data-adlaire-target");
    const controlled = trigger.getAttribute("aria-controls");
    const shell = querySidebarShell(selector) ?? (controlled ? document.getElementById(controlled) : trigger.closest<HTMLElement>(".adlaire-app-shell"));
    if (!shell) return;

    const collapsed = !shell.classList.contains("adlaire-sidebar-collapsed");
    shell.classList.toggle("adlaire-sidebar-collapsed", collapsed);
    if (shell.id && !trigger.getAttribute("aria-controls")) trigger.setAttribute("aria-controls", shell.id);
    trigger.setAttribute("aria-expanded", collapsed ? "false" : "true");
    trigger.setAttribute("aria-pressed", collapsed ? "true" : "false");
  }

  function querySidebarShell(selector: string | null): HTMLElement | null {
    if (!selector) return null;
    try {
      return document.querySelector<HTMLElement>(selector);
    } catch {
      return null;
    }
  }

  function toggleTree(trigger: Element): void {
    const selector = trigger.getAttribute("data-adlaire-tree-toggle") ?? trigger.getAttribute("aria-controls");
    const branch = queryTreeBranch(selector, trigger);
    if (!branch) return;

    const expanded = trigger.getAttribute("aria-expanded") !== "true";
    trigger.setAttribute("aria-expanded", expanded ? "true" : "false");
    branch.hidden = !expanded;
    branch.classList.toggle("is-open", expanded);
  }

  function queryTreeBranch(selector: string | null, trigger: Element): HTMLElement | null {
    if (selector) {
      const normalized = selector.startsWith("#") ? selector.slice(1) : selector;
      const byId = document.getElementById(normalized);
      if (byId) return byId;
      try {
        const queried = document.querySelector<HTMLElement>(selector);
        if (queried) return queried;
      } catch {
        return null;
      }
    }
    return trigger.closest(".adlaire-tree-item")?.querySelector<HTMLElement>(".adlaire-tree-branch") ?? null;
  }

  function selectWorkspaceTab(trigger: Element): void {
    const root = trigger.closest(".adlaire-tab-workspace") ?? document;
    const group = trigger.getAttribute("data-adlaire-group");
    const tabs = Array.from(root.querySelectorAll<HTMLElement>("[data-adlaire-workspace-tab]"))
      .filter((tab) => !group || tab.getAttribute("data-adlaire-group") === group);

    tabs.forEach((tab) => {
      const selected = tab === trigger;
      tab.setAttribute("aria-selected", selected ? "true" : "false");
      tab.setAttribute("tabindex", selected ? "0" : "-1");
      const panel = queryReferencedTarget(tab, "data-adlaire-workspace-tab");
      if (!panel) return;
      panel.hidden = !selected;
      panel.classList.toggle("is-open", selected);
    });
  }

  function toggleDisclosureSurface(trigger: Element, attribute: string, rootSelector?: string, fallbackSelector?: string): void {
    const root = rootSelector ? trigger.closest(rootSelector) : null;
    const target = queryReferencedTarget(trigger, attribute) ?? root?.querySelector<HTMLElement>(fallbackSelector ?? "");
    if (!target) return;

    const expanded = trigger.getAttribute("aria-expanded") !== "true";
    trigger.setAttribute("aria-expanded", expanded ? "true" : "false");
    target.hidden = !expanded;
    target.classList.toggle("is-open", expanded);
  }

  function toggleDockPanel(trigger: Element): void {
    const panel = queryReferencedTarget(trigger, "data-adlaire-dock-toggle") ?? trigger.closest<HTMLElement>(".adlaire-dock-panel");
    if (!panel) return;

    const collapsed = !panel.classList.contains("is-collapsed");
    panel.classList.toggle("is-collapsed", collapsed);
    trigger.setAttribute("aria-expanded", collapsed ? "false" : "true");
    trigger.setAttribute("aria-pressed", collapsed ? "true" : "false");
  }

  function selectInteractiveChoice(trigger: Element, rootSelector: string, itemSelector: string, selectedAttribute: string): void {
    const root = trigger.closest(rootSelector);
    if (!root) return;

    root.querySelectorAll<HTMLElement>(itemSelector).forEach((item) => {
      const selected = item === trigger;
      item.setAttribute(selectedAttribute, selected ? "true" : "false");
      item.classList.toggle("is-selected", selected);
    });
  }

  function selectCurrentStep(trigger: Element, rootSelector: string, itemSelector: string): void {
    const root = trigger.closest(rootSelector);
    if (!root) return;

    root.querySelectorAll<HTMLElement>(itemSelector).forEach((item) => {
      const selected = item === trigger;
      if (selected) {
        item.setAttribute("aria-current", "step");
      } else {
        item.removeAttribute("aria-current");
      }
      item.classList.toggle("is-selected", selected);
    });
  }

  function toggleBooleanState(trigger: Element, stateAttribute: string): void {
    const active = trigger.getAttribute(stateAttribute) !== "true";
    trigger.setAttribute(stateAttribute, active ? "true" : "false");
    trigger.classList.toggle("is-selected", active);
  }

  function toggleFolderBranch(trigger: Element): void {
    const branch = queryReferencedTarget(trigger, "data-adlaire-folder-toggle") ?? trigger.closest(".adlaire-folder-item")?.querySelector<HTMLElement>(".adlaire-folder-branch");
    if (!branch) return;

    const expanded = trigger.getAttribute("aria-expanded") !== "true";
    trigger.setAttribute("aria-expanded", expanded ? "true" : "false");
    branch.hidden = !expanded;
    branch.classList.toggle("is-open", expanded);
  }

  document.addEventListener("input", (event) => {
    const source = targetElement(event.target);
    const filter = source?.closest<HTMLInputElement>("[data-adlaire-filter-input]");
    const search = source?.closest<HTMLInputElement>("[data-adlaire-search-input]");
    const previewCompare = source?.closest<HTMLInputElement>("[data-adlaire-preview-compare]");
    if (filter) applyTextFilter(filter);
    if (search) applyTextFilter(search);
    if (previewCompare) updatePreviewCompare(previewCompare);
  });

  function applyTextFilter(input: HTMLInputElement): void {
    const selector = input.getAttribute("data-adlaire-filter-root") ?? input.getAttribute("data-adlaire-search-root");
    const root = selector ? document.querySelector(selector) : null;
    const itemSelector = input.getAttribute("data-adlaire-filter-item") ?? input.getAttribute("data-adlaire-search-item");
    if (!root || !itemSelector) return;

    const query = input.value.trim().toLowerCase();
    root.querySelectorAll<HTMLElement>(itemSelector).forEach((item) => {
      const matched = (item.textContent ?? "").toLowerCase().includes(query);
      item.hidden = !matched;
    });
  }

  function updatePreviewCompare(input: HTMLInputElement): void {
    const compare = queryReferencedTarget(input, "data-adlaire-preview-compare") ?? input.closest<HTMLElement>(".adlaire-preview-compare");
    if (!compare) return;

    const value = Number(input.value);
    if (!Number.isFinite(value)) return;
    compare.style.setProperty("--adlaire-preview-compare-position", `${Math.max(0, Math.min(100, value))}%`);
  }

  document.querySelectorAll<HTMLElement>("[data-adlaire-split-pane]").forEach((root) => {
    const handle = root.querySelector<HTMLElement>(".adlaire-pane-resize-handle");
    const panes = root.querySelectorAll(".adlaire-pane");
    if (!handle || panes.length < 2) return;
    handle.addEventListener("keydown", (event) => {
      let current = Number(root.getAttribute("data-adlaire-pane-ratio") || "50");
      if (event.key === "ArrowLeft") {
        current = Math.max(20, current - 5);
      } else if (event.key === "ArrowRight") {
        current = Math.min(80, current + 5);
      } else {
        return;
      }
      event.preventDefault();
      root.setAttribute("data-adlaire-pane-ratio", String(current));
      root.style.gridTemplateColumns = `${current}% 8px 1fr`;
    });
  });
})();
