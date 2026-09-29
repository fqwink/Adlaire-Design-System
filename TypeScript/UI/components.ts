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

  interface ComponentClickBinding {
    readonly selector: string;
    readonly preventDefault?: boolean;
    readonly handle: (trigger: Element, event: MouseEvent) => void;
  }

  interface ComponentInputBinding {
    readonly selector: string;
    readonly handle: (trigger: HTMLInputElement) => void;
  }

  interface ComponentKeyBinding {
    readonly key: string;
    readonly handle: (event: KeyboardEvent) => boolean;
  }

  const overlayClickBindings: readonly ComponentClickBinding[] = [
    componentSelectorBinding("[data-adlaire-dismiss]", dismissSurface),
    componentSelectorBinding("[data-adlaire-carousel-action], [data-adlaire-carousel-index]:not([data-adlaire-carousel])", moveCarouselFromTrigger, true),
    componentBinding("data-adlaire-toggle", toggleTargetSurface, true),
  ] as const;

  document.addEventListener("click", (event) => {
    const source = targetElement(event.target);
    handleFirstComponentClick(event, source, overlayClickBindings);
  });

  const componentKeyBindings: readonly ComponentKeyBinding[] = [
    componentKeyBinding("Tab", containActiveOverlayFocus),
    componentKeyBinding("Escape", closeOpenSurfaces),
  ] as const;

  document.addEventListener("keydown", (event) => {
    handleFirstComponentKey(event, componentKeyBindings);
  });

  function dismissSurface(dismiss: Element): void {
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
  }

  function moveCarouselFromTrigger(trigger: Element): void {
    moveCarousel(trigger);
  }

  function toggleTargetSurface(trigger: Element): void {
    const target = getTarget(trigger);
    if (!target) return;

    const isExpanded = trigger.getAttribute("aria-expanded") === "true";
    lastFocus = trigger instanceof HTMLElement ? trigger : null;
    closeSiblings(trigger, target);
    setExpanded(trigger, target, !isExpanded);
    if (!isExpanded && target.matches(overlaySelector)) focusFirst(target);
  }

  function containActiveOverlayFocus(event: KeyboardEvent): boolean {
    const activeOverlay = document.querySelector<HTMLElement>(openOverlaySelector);
    if (!activeOverlay) return false;
    containFocus(event, activeOverlay);
    return true;
  }

  function closeOpenSurfaces(): boolean {
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
    return true;
  }

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

  interface InteractiveChoiceBinding {
    readonly selector: string;
    readonly rootSelector: string;
    readonly itemSelector: string;
    readonly selectedAttribute: string;
  }

  interface BooleanStateBinding {
    readonly selector: string;
    readonly stateAttribute: string;
  }

  interface CurrentStepBinding {
    readonly selector: string;
    readonly rootSelector: string;
    readonly itemSelector: string;
  }

  function hookSelector(attribute: string): string {
    return `[${attribute}]`;
  }

  function componentSelectorBinding(selector: string, handle: (trigger: Element, event: MouseEvent) => void, preventDefault = false): ComponentClickBinding {
    return {
      selector,
      preventDefault,
      handle,
    };
  }

  function componentBinding(attribute: string, handle: (trigger: Element, event: MouseEvent) => void, preventDefault = false): ComponentClickBinding {
    return componentSelectorBinding(hookSelector(attribute), handle, preventDefault);
  }

  function componentInputBinding(attribute: string, handle: (trigger: HTMLInputElement) => void): ComponentInputBinding {
    return {
      selector: hookSelector(attribute),
      handle,
    };
  }

  function componentKeyBinding(key: string, handle: (event: KeyboardEvent) => boolean): ComponentKeyBinding {
    return {
      key,
      handle,
    };
  }

  function choiceBinding(attribute: string, rootSelector: string, selectedAttribute: string, itemAttribute = attribute): InteractiveChoiceBinding {
    return {
      selector: hookSelector(attribute),
      rootSelector,
      itemSelector: hookSelector(itemAttribute),
      selectedAttribute,
    };
  }

  function booleanBinding(attribute: string, stateAttribute: string): BooleanStateBinding {
    return {
      selector: hookSelector(attribute),
      stateAttribute,
    };
  }

  function stepBinding(attribute: string, rootSelector: string, itemAttribute = attribute): CurrentStepBinding {
    return {
      selector: hookSelector(attribute),
      rootSelector,
      itemSelector: hookSelector(itemAttribute),
    };
  }

  const interactiveChoiceBindings: readonly InteractiveChoiceBinding[] = [
    choiceBinding("data-adlaire-time-slot", ".adlaire-time-slot-grid", "aria-selected"),
    choiceBinding("data-adlaire-floor-select", ".adlaire-floor-selector", "aria-pressed"),
    choiceBinding("data-adlaire-option-select", "[data-adlaire-option-group]", "aria-selected"),
    choiceBinding("data-adlaire-shift-select", ".adlaire-shift-roster", "aria-selected"),
    choiceBinding("data-adlaire-confidence-select", ".adlaire-confidence-indicator", "aria-pressed"),
    choiceBinding("data-adlaire-route-select", ".adlaire-delivery-route-board", "aria-selected"),
    choiceBinding("data-adlaire-evidence-select", ".adlaire-evidence-list", "aria-selected"),
    choiceBinding("data-adlaire-ticket-priority-select", ".adlaire-ticket-priority-board", "aria-selected"),
    choiceBinding("data-adlaire-report-parameter-select", ".adlaire-report-parameter-bar", "aria-pressed"),
    choiceBinding("data-adlaire-channel-select", ".adlaire-channel-list", "aria-selected"),
    choiceBinding("data-adlaire-editorial-gate-select", ".adlaire-review-gate-panel", "aria-selected"),
    choiceBinding("data-adlaire-locale-select", ".adlaire-locale-switcher-panel", "aria-selected"),
    choiceBinding("data-adlaire-moderation-decision", ".adlaire-moderation-queue", "aria-pressed"),
    choiceBinding("data-adlaire-device-select", ".adlaire-device-registry-table", "aria-selected"),
    choiceBinding("data-adlaire-deployment-ring-select", ".adlaire-deployment-ring-selector", "aria-selected"),
    choiceBinding("data-adlaire-fare-option-select", ".adlaire-booking-summary-panel", "aria-selected"),
    choiceBinding("data-adlaire-room-select", ".adlaire-room-inventory-board", "aria-selected"),
    choiceBinding("data-adlaire-permit-step-select", ".adlaire-document-requirement-list", "aria-selected"),
    choiceBinding("data-adlaire-volunteer-shift-select", ".adlaire-volunteer-shift-board", "aria-selected"),
    choiceBinding("data-adlaire-demand-response-select", ".adlaire-demand-response-panel", "aria-selected"),
    choiceBinding("data-adlaire-outage-report-select", ".adlaire-service-appointment-board", "aria-selected"),
    choiceBinding("data-adlaire-density-select", ".adlaire-density-switcher", "aria-pressed"),
    choiceBinding("data-adlaire-saved-view-select", ".adlaire-view-preset-switcher", "aria-pressed"),
    choiceBinding("data-adlaire-checkpoint-select", ".adlaire-execution-timeline", "aria-selected"),
    choiceBinding("data-adlaire-sdk-select", ".adlaire-sdk-selector", "aria-pressed"),
    choiceBinding("data-adlaire-environment-select", ".adlaire-api-explorer-panel", "aria-selected"),
    choiceBinding("data-adlaire-theme-select", ".adlaire-theme-workspace-panel", "aria-pressed"),
  ] as const;

  const booleanStateBindings: readonly BooleanStateBinding[] = [
    booleanBinding("data-adlaire-service-check", "aria-checked"),
    booleanBinding("data-adlaire-policy-acknowledgement", "aria-pressed"),
    booleanBinding("data-adlaire-attestation-toggle", "aria-pressed"),
    booleanBinding("data-adlaire-care-plan-check", "aria-checked"),
    booleanBinding("data-adlaire-success-playbook-check", "aria-checked"),
    booleanBinding("data-adlaire-quiet-hours-toggle", "aria-pressed"),
    booleanBinding("data-adlaire-topic-preference-toggle", "aria-checked"),
    booleanBinding("data-adlaire-handoff-check", "aria-checked"),
    booleanBinding("data-adlaire-recovery-task-check", "aria-checked"),
    booleanBinding("data-adlaire-eligibility-check", "aria-checked"),
    booleanBinding("data-adlaire-disclosure-check", "aria-checked"),
    booleanBinding("data-adlaire-bulk-selection-toggle", "aria-selected"),
    booleanBinding("data-adlaire-verification-check", "aria-checked"),
    booleanBinding("data-adlaire-record-row-toggle", "aria-selected"),
    booleanBinding("data-adlaire-inline-edit-toggle", "aria-pressed"),
    booleanBinding("data-adlaire-bulk-confirm-toggle", "aria-pressed"),
    booleanBinding("data-adlaire-tool-permission-toggle", "aria-pressed"),
    booleanBinding("data-adlaire-approval-gate-toggle", "aria-pressed"),
    booleanBinding("data-adlaire-notification-policy-toggle", "aria-pressed"),
    booleanBinding("data-adlaire-connection-test-toggle", "aria-pressed"),
    booleanBinding("data-adlaire-migration-step-toggle", "aria-checked"),
    booleanBinding("data-adlaire-dark-mode-toggle", "aria-pressed"),
    booleanBinding("data-adlaire-high-contrast-toggle", "aria-pressed"),
    booleanBinding("data-adlaire-token-override-toggle", "aria-checked"),
  ] as const;

  const currentStepBindings: readonly CurrentStepBinding[] = [
    stepBinding("data-adlaire-pipeline-stage-select", ".adlaire-pipeline-stage-rail"),
    stepBinding("data-adlaire-milestone-select", ".adlaire-milestone-tracker"),
  ] as const;

  function closestBoundTrigger<T extends { readonly selector: string }>(source: Element | null, bindings: readonly T[]): [Element, T] | null {
    if (!source) return null;
    for (const binding of bindings) {
      const trigger = source.closest(binding.selector);
      if (trigger) return [trigger, binding];
    }
    return null;
  }

  function handleDeclarativeInteraction(event: MouseEvent, source: Element | null): boolean {
    const choice = closestBoundTrigger(source, interactiveChoiceBindings);
    if (choice) {
      const [trigger, binding] = choice;
      event.preventDefault();
      selectInteractiveChoice(trigger, binding.rootSelector, binding.itemSelector, binding.selectedAttribute);
      return true;
    }

    const toggle = closestBoundTrigger(source, booleanStateBindings);
    if (toggle) {
      const [trigger, binding] = toggle;
      event.preventDefault();
      toggleBooleanState(trigger, binding.stateAttribute);
      return true;
    }

    const currentStep = closestBoundTrigger(source, currentStepBindings);
    if (currentStep) {
      const [trigger, binding] = currentStep;
      event.preventDefault();
      selectCurrentStep(trigger, binding.rootSelector, binding.itemSelector);
      return true;
    }

    return false;
  }

  function handleFirstComponentClick(event: MouseEvent, source: Element | null, bindings: readonly ComponentClickBinding[]): boolean {
    if (!source) return false;
    for (const binding of bindings) {
      const trigger = source.closest(binding.selector);
      if (!trigger) continue;
      if (binding.preventDefault) event.preventDefault();
      binding.handle(trigger, event);
      return true;
    }
    return false;
  }

  function handleEveryComponentClick(event: MouseEvent, source: Element | null, bindings: readonly ComponentClickBinding[]): boolean {
    if (!source) return false;
    let handled = false;
    for (const binding of bindings) {
      const trigger = source.closest(binding.selector);
      if (!trigger) continue;
      if (binding.preventDefault) event.preventDefault();
      binding.handle(trigger, event);
      handled = true;
    }
    return handled;
  }

  function handleEveryComponentInput(source: Element | null, bindings: readonly ComponentInputBinding[]): boolean {
    if (!source) return false;
    let handled = false;
    for (const binding of bindings) {
      const trigger = source.closest<HTMLInputElement>(binding.selector);
      if (!trigger) continue;
      binding.handle(trigger);
      handled = true;
    }
    return handled;
  }

  function handleFirstComponentKey(event: KeyboardEvent, bindings: readonly ComponentKeyBinding[]): boolean {
    for (const binding of bindings) {
      if (event.key !== binding.key) continue;
      if (binding.handle(event)) return true;
    }
    return false;
  }

  const componentClickBindings: readonly ComponentClickBinding[] = [
    componentBinding("data-adlaire-copy", copyText),
    componentBinding("data-adlaire-remove", removeTarget),
    componentBinding("data-adlaire-toast-dismiss", dismissToast),
    componentBinding("data-adlaire-select", selectListItem),
    componentBinding("data-adlaire-sidebar-toggle", toggleSidebar, true),
    componentBinding("data-adlaire-tree-toggle", toggleTree, true),
    componentBinding("data-adlaire-workspace-tab", selectWorkspaceTab, true),
    componentBinding("data-adlaire-context-menu", (trigger) => toggleDisclosureSurface(trigger, "data-adlaire-context-menu"), true),
    componentBinding("data-adlaire-split-button-toggle", (trigger) => toggleDisclosureSurface(trigger, "data-adlaire-split-button-toggle", ".adlaire-split-button", ".adlaire-context-menu, .adlaire-overflow-toolbar-menu"), true),
    componentBinding("data-adlaire-overflow-toggle", (trigger) => toggleDisclosureSurface(trigger, "data-adlaire-overflow-toggle", ".adlaire-overflow-toolbar", ".adlaire-overflow-toolbar-menu"), true),
    componentBinding("data-adlaire-dock-toggle", toggleDockPanel, true),
  ] as const;

  const deferredComponentClickBindings: readonly ComponentClickBinding[] = [
    componentBinding("data-adlaire-folder-toggle", toggleFolderBranch, true),
    componentBinding("data-adlaire-policy-exception-toggle", (trigger) => toggleDisclosureSurface(trigger, "data-adlaire-policy-exception-toggle", ".adlaire-policy-exception-panel", ".adlaire-policy-exception-body"), true),
  ] as const;

  document.addEventListener("click", (event) => {
    const source = targetElement(event.target);
    handleEveryComponentClick(event, source, componentClickBindings);
    if (handleDeclarativeInteraction(event, source)) return;
    handleEveryComponentClick(event, source, deferredComponentClickBindings);
  });

  function copyText(copy: Element): void {
    const copyTarget = getTarget(copy);
    const text = copyTarget?.textContent ?? copy.getAttribute("data-adlaire-copy");
    if (text && navigator.clipboard) {
      navigator.clipboard.writeText(text);
      copy.setAttribute("data-adlaire-copied", "true");
    }
  }

  function removeTarget(remove: Element): void {
    const removable = getTarget(remove) ?? remove.closest(".adlaire-toast, .adlaire-snackbar, .adlaire-upload-item, .adlaire-attachment-item");
    removable?.remove();
  }

  function dismissToast(toastDismiss: Element): void {
    toastDismiss.closest(".adlaire-toast")?.remove();
  }

  function selectListItem(select: Element): void {
    const list = select.closest("[data-adlaire-select-list]");
    list?.querySelectorAll("[data-adlaire-select]").forEach((item) => {
      item.setAttribute("aria-selected", item === select ? "true" : "false");
    });
  }

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

  const componentInputBindings: readonly ComponentInputBinding[] = [
    componentInputBinding("data-adlaire-filter-input", applyTextFilter),
    componentInputBinding("data-adlaire-search-input", applyTextFilter),
    componentInputBinding("data-adlaire-preview-compare", updatePreviewCompare),
  ] as const;

  document.addEventListener("input", (event) => {
    handleEveryComponentInput(targetElement(event.target), componentInputBindings);
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
