/// <reference lib="dom" />
/* Adlaire-Design component interactions */
(() => {
  "use strict";

  let lastFocus: HTMLElement | null = null;
  const overlaySelector =
    ".adlaire-modal, .adlaire-dialog, .adlaire-drawer, .adlaire-bottom-sheet";
  const openOverlaySelector =
    ".adlaire-modal.is-open, .adlaire-dialog.is-open, .adlaire-drawer.is-open, .adlaire-bottom-sheet.is-open";

  function targetElement(target: EventTarget | null): Element | null {
    return target instanceof Element ? target : null;
  }

  function eventSourceElement(event: Event): Element | null {
    const fallbackTarget = event.target;
    const path = typeof event.composedPath === "function"
      ? event.composedPath()
      : [];
    for (const target of path) {
      const element = targetElement(target);
      if (element) return element;
    }
    return targetElement(fallbackTarget);
  }

  function booleanState(active: boolean): "true" | "false" {
    return active ? "true" : "false";
  }

  function setBooleanAttribute(
    target: Element,
    attribute: string,
    active: boolean,
  ): void {
    target.setAttribute(attribute, booleanState(active));
  }

  function setOpenState(target: HTMLElement, open: boolean): void {
    target.hidden = !open;
    target.classList.toggle("is-open", open);
  }

  function safeDocumentQuery(
    selector: string | null | undefined,
  ): HTMLElement | null {
    if (!selector) return null;
    try {
      return document.querySelector<HTMLElement>(selector);
    } catch {
      return null;
    }
  }

  function safeScopedQuery(
    root: ParentNode | null | undefined,
    selector: string | null | undefined,
  ): HTMLElement | null {
    if (!root || !selector) return null;
    try {
      return root.querySelector(selector) as HTMLElement | null;
    } catch {
      return null;
    }
  }

  function safeScopedQueryAll(
    root: ParentNode | null | undefined,
    selector: string | null | undefined,
  ): HTMLElement[] {
    if (!root || !selector) return [];
    try {
      return Array.from(root.querySelectorAll<HTMLElement>(selector));
    } catch {
      return [];
    }
  }

  function safeDocumentQueryAll(
    selector: string | null | undefined,
  ): HTMLElement[] {
    return safeScopedQueryAll(document, selector);
  }

  function isDisabledInteraction(target: Element): boolean {
    return target.hasAttribute("disabled") ||
      target.getAttribute("aria-disabled") === "true";
  }

  function isNativeInteractive(target: Element): boolean {
    return target instanceof HTMLButtonElement ||
      target instanceof HTMLAnchorElement ||
      target instanceof HTMLInputElement ||
      target instanceof HTMLSelectElement ||
      target instanceof HTMLTextAreaElement;
  }

  function setOptionalText(target: HTMLElement | null, value: string): void {
    if (target) target.textContent = value;
  }

  function syncOverlayRootState(): void {
    const openOverlays = safeDocumentQueryAll(openOverlaySelector);
    const open = openOverlays.length > 0;
    document.documentElement.classList.toggle("adlaire-overlay-open", open);
    document.documentElement.toggleAttribute(
      "data-adlaire-overlay-inert",
      open,
    );
    if (open) {
      document.documentElement.setAttribute(
        "data-adlaire-overlay-depth",
        String(openOverlays.length),
      );
      document.body?.setAttribute("data-adlaire-inert-background", "true");
    } else {
      document.documentElement.removeAttribute("data-adlaire-overlay-depth");
      document.body?.removeAttribute("data-adlaire-inert-background");
    }
  }

  function writeClipboardText(text: string): boolean {
    const clipboard = navigator.clipboard;
    if (!clipboard?.writeText) return false;
    try {
      void clipboard.writeText(text).catch(() => undefined);
      return true;
    } catch {
      return false;
    }
  }

  function getTarget(trigger: Element): HTMLElement | null {
    const selector = trigger.getAttribute("data-adlaire-target") ??
      trigger.getAttribute("href");
    if (!selector || !selector.startsWith("#")) return null;
    return document.getElementById(selector.slice(1));
  }

  function queryReferencedTarget(
    trigger: Element,
    attribute: string,
  ): HTMLElement | null {
    const selector = trigger.getAttribute(attribute) ??
      trigger.getAttribute("data-adlaire-target") ??
      trigger.getAttribute("aria-controls");
    if (!selector) return null;
    if (selector.startsWith("#")) {
      return document.getElementById(selector.slice(1));
    }
    const byId = document.getElementById(selector);
    if (byId) return byId;
    return safeDocumentQuery(selector);
  }

  function setExpanded(
    trigger: Element,
    target: HTMLElement | null,
    expanded: boolean,
  ): void {
    setBooleanAttribute(trigger, "aria-expanded", expanded);
    if (trigger.hasAttribute("aria-pressed")) {
      setBooleanAttribute(trigger, "aria-pressed", expanded);
    }
    trigger.classList.toggle("is-selected", expanded);
    if (!target) return;
    setOpenState(target, expanded);
    setBooleanAttribute(target, "aria-hidden", !expanded);
    if (target.matches(overlaySelector)) syncOverlayRootState();
  }

  function markDismissReason(target: Element | null, reason: string): void {
    if (target) target.setAttribute("data-adlaire-dismiss-reason", reason);
  }

  function triggersForTarget(target: Element | null): Element[] {
    if (!target?.id) return [];
    const targetSelector = `#${target.id}`;
    const dataTriggers = safeDocumentQueryAll(
      "[data-adlaire-toggle][data-adlaire-target]",
    )
      .filter((trigger) =>
        trigger.getAttribute("data-adlaire-target") === targetSelector
      );
    const hrefTriggers = safeDocumentQueryAll("[data-adlaire-toggle][href]")
      .filter((trigger) => trigger.getAttribute("href") === targetSelector);
    return dataTriggers.concat(hrefTriggers);
  }

  function getFocusable(target: Element): HTMLElement[] {
    return safeScopedQueryAll(
      target,
      "button, [href], input, select, textarea, [tabindex]:not([tabindex='-1'])",
    )
      .filter((item) =>
        !item.hidden && !isDisabledInteraction(item) &&
        item.getAttribute("aria-hidden") !== "true"
      );
  }

  function focusFirst(target: Element): void {
    getFocusable(target)[0]?.focus();
  }

  function closeSiblings(trigger: Element, target: HTMLElement | null): void {
    const group = trigger.getAttribute("data-adlaire-group");
    if (!group) return;

    safeDocumentQueryAll("[data-adlaire-toggle][data-adlaire-group]").forEach(
      (item) => {
        if (
          item.getAttribute("data-adlaire-group") !== group || item === trigger
        ) return;
        setExpanded(item, getTarget(item), false);
      },
    );

    if (target?.getAttribute("role") === "tabpanel") {
      safeDocumentQueryAll('[role="tabpanel"][data-adlaire-group]').forEach(
        (panel) => {
          if (
            panel.getAttribute("data-adlaire-group") !== group ||
            panel === target
          ) return;
          panel.hidden = true;
          panel.classList.remove("is-open");
          panel.setAttribute("aria-hidden", "true");
        },
      );
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
    componentSelectorBinding(
      "[data-adlaire-carousel-action], [data-adlaire-carousel-index]:not([data-adlaire-carousel])",
      moveCarouselFromTrigger,
      true,
    ),
    componentBinding("data-adlaire-toggle", toggleTargetSurface, true),
  ] as const;

  document.addEventListener("click", (event) => {
    const source = eventSourceElement(event);
    handleFirstComponentClick(event, source, overlayClickBindings);
  });

  const componentKeyBindings: readonly ComponentKeyBinding[] = [
    componentKeyBinding("Tab", containActiveOverlayFocus),
    componentKeyBinding("Escape", closeOpenSurfaces),
    componentKeyBinding("Enter", activateKeyboardTrigger),
    componentKeyBinding(" ", activateKeyboardTrigger),
    componentKeyBinding("ArrowLeft", moveTabWithKeyboard),
    componentKeyBinding("ArrowRight", moveTabWithKeyboard),
    componentKeyBinding("Home", moveTabWithKeyboard),
    componentKeyBinding("End", moveTabWithKeyboard),
  ] as const;

  document.addEventListener("keydown", (event) => {
    handleFirstComponentKey(event, componentKeyBindings);
  });

  function dismissSurface(dismiss: Element): void {
    const dismissTarget = getTarget(dismiss) ??
      dismiss.closest<HTMLElement>(
        ".adlaire-modal, .adlaire-dialog, .adlaire-drawer, .adlaire-bottom-sheet, .adlaire-popover, .adlaire-dropdown-menu, .adlaire-toast",
      );
    if (dismissTarget) {
      markDismissReason(
        dismissTarget,
        dismiss.getAttribute("data-adlaire-dismiss-reason") ??
          "dismiss-control",
      );
      setOpenState(dismissTarget, false);
      setBooleanAttribute(dismissTarget, "aria-hidden", true);
      triggersForTarget(dismissTarget).forEach((item) =>
        setExpanded(item, dismissTarget, false)
      );
    }
    syncOverlayRootState();
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
    const activeOverlay = safeDocumentQuery(openOverlaySelector);
    if (!activeOverlay) return false;
    containFocus(event, activeOverlay);
    return true;
  }

  function closeOpenSurfaces(): boolean {
    safeDocumentQueryAll(
      `${openOverlaySelector}, .adlaire-popover.is-open, .adlaire-dropdown-menu.is-open, .adlaire-context-menu.is-open, .adlaire-overflow-toolbar-menu.is-open`,
    ).forEach((target) => {
      markDismissReason(target, "escape");
      setOpenState(target, false);
      setBooleanAttribute(target, "aria-hidden", true);
      triggersForTarget(target).forEach((trigger) =>
        setExpanded(trigger, target, false)
      );
    });
    safeDocumentQueryAll(
      "[data-adlaire-context-menu], [data-adlaire-split-button-toggle], [data-adlaire-overflow-toggle]",
    ).forEach((trigger) => {
      setBooleanAttribute(trigger, "aria-expanded", false);
      trigger.classList.remove("is-selected");
    });
    syncOverlayRootState();
    lastFocus?.focus();
    return true;
  }

  function activateKeyboardTrigger(event: KeyboardEvent): boolean {
    const source = eventSourceElement(event);
    if (source && isNativeInteractive(source)) return false;
    const trigger = source?.closest([
      "[data-adlaire-select]",
      "[data-adlaire-tab]",
      "[data-adlaire-workspace-tab]",
      "[data-adlaire-sidebar-toggle]",
      "[data-adlaire-tree-toggle]",
      "[data-adlaire-context-menu]",
      "[data-adlaire-split-button-toggle]",
      "[data-adlaire-overflow-toggle]",
      "[data-adlaire-dock-toggle]",
      "[data-adlaire-folder-toggle]",
      "[data-adlaire-policy-exception-toggle]",
      "[data-adlaire-column-toggle]",
      "[data-adlaire-page-select]",
      "[data-adlaire-saved-view-apply]",
      ...interactiveChoiceBindings.map((binding) => binding.selector),
      ...booleanStateBindings.map((binding) => binding.selector),
      ...currentStepBindings.map((binding) => binding.selector),
    ].join(", "));
    if (
      !(trigger instanceof HTMLElement) || isDisabledInteraction(trigger) ||
      isNativeInteractive(trigger)
    ) return false;
    event.preventDefault();
    trigger.click();
    return true;
  }

  function moveTabWithKeyboard(event: KeyboardEvent): boolean {
    const source = eventSourceElement(event);
    const tab = source?.closest(
      "[data-adlaire-tab], [data-adlaire-workspace-tab]",
    );
    if (!(tab instanceof HTMLElement)) return false;

    const attribute = tab.hasAttribute("data-adlaire-tab")
      ? "data-adlaire-tab"
      : "data-adlaire-workspace-tab";
    const root = tab.closest(".adlaire-tabs, .adlaire-tab-workspace") ??
      document;
    const group = tab.getAttribute("data-adlaire-group");
    const tabs = safeScopedQueryAll(root, hookSelector(attribute))
      .filter((item) =>
        !item.hidden && !isDisabledInteraction(item) &&
        (!group || item.getAttribute("data-adlaire-group") === group)
      );
    const currentIndex = tabs.indexOf(tab);
    if (currentIndex < 0) return false;

    let nextIndex = currentIndex;
    if (event.key === "ArrowLeft") {
      nextIndex = currentIndex <= 0 ? tabs.length - 1 : currentIndex - 1;
    }
    if (event.key === "ArrowRight") {
      nextIndex = currentIndex >= tabs.length - 1 ? 0 : currentIndex + 1;
    }
    if (event.key === "Home") nextIndex = 0;
    if (event.key === "End") nextIndex = tabs.length - 1;

    const next = tabs[nextIndex];
    event.preventDefault();
    next.focus();
    if (attribute === "data-adlaire-tab") {
      selectGenericTab(next);
    } else {
      selectWorkspaceTab(next);
    }
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

    const track = safeScopedQuery(root, ".adlaire-carousel-track");
    const slides = safeScopedQueryAll(root, ".adlaire-carousel-slide");
    if (!track || slides.length === 0) return;

    let current = Number(
      root.getAttribute("data-adlaire-carousel-index") || "0",
    );
    const requested = control?.getAttribute("data-adlaire-carousel-index");
    const action = control?.getAttribute("data-adlaire-carousel-action");
    let next = requested !== null && requested !== undefined
      ? Number(requested)
      : current + (action === "previous" ? -1 : 1);
    if (!Number.isFinite(next)) next = 0;
    if (next < 0) next = slides.length - 1;
    if (next >= slides.length) next = 0;
    current = next;

    root.setAttribute("data-adlaire-carousel-index", String(current));
    track.style.transform = `translateX(-${current * 100}%)`;
    slides.forEach((slide, index) => {
      const currentSlide = index === current;
      slide.classList.toggle("is-current", currentSlide);
      setBooleanAttribute(slide, "aria-hidden", !currentSlide);
      slide.setAttribute("tabindex", currentSlide ? "0" : "-1");
    });
    safeScopedQueryAll(root, "[data-adlaire-carousel-index]")
      .filter((indicator) => !indicator.hasAttribute("data-adlaire-carousel"))
      .forEach((indicator, index) => {
        const selected = index === current;
        indicator.classList.toggle("is-selected", selected);
        if (!isNativeInteractive(indicator)) {
          indicator.setAttribute("tabindex", selected ? "0" : "-1");
        }
        if (selected) {
          indicator.setAttribute("aria-current", "true");
        } else {
          indicator.removeAttribute("aria-current");
        }
      });
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

  function componentSelectorBinding(
    selector: string,
    handle: (trigger: Element, event: MouseEvent) => void,
    preventDefault = false,
  ): ComponentClickBinding {
    return {
      selector,
      preventDefault,
      handle,
    };
  }

  function componentBinding(
    attribute: string,
    handle: (trigger: Element, event: MouseEvent) => void,
    preventDefault = false,
  ): ComponentClickBinding {
    return componentSelectorBinding(
      hookSelector(attribute),
      handle,
      preventDefault,
    );
  }

  function componentInputBinding(
    attribute: string,
    handle: (trigger: HTMLInputElement) => void,
  ): ComponentInputBinding {
    return {
      selector: hookSelector(attribute),
      handle,
    };
  }

  function componentKeyBinding(
    key: string,
    handle: (event: KeyboardEvent) => boolean,
  ): ComponentKeyBinding {
    return {
      key,
      handle,
    };
  }

  function choiceBinding(
    attribute: string,
    rootSelector: string,
    selectedAttribute: string,
    itemAttribute = attribute,
  ): InteractiveChoiceBinding {
    return {
      selector: hookSelector(attribute),
      rootSelector,
      itemSelector: hookSelector(itemAttribute),
      selectedAttribute,
    };
  }

  function booleanBinding(
    attribute: string,
    stateAttribute: string,
  ): BooleanStateBinding {
    return {
      selector: hookSelector(attribute),
      stateAttribute,
    };
  }

  function stepBinding(
    attribute: string,
    rootSelector: string,
    itemAttribute = attribute,
  ): CurrentStepBinding {
    return {
      selector: hookSelector(attribute),
      rootSelector,
      itemSelector: hookSelector(itemAttribute),
    };
  }

  function queryInteractionRoot(
    trigger: Element,
    rootSelector: string,
  ): Element | null {
    return trigger.closest(rootSelector) ?? trigger.parentElement;
  }

  const interactiveChoiceBindings: readonly InteractiveChoiceBinding[] = [
    choiceBinding(
      "data-adlaire-time-slot",
      ".adlaire-time-slot-grid",
      "aria-selected",
    ),
    choiceBinding(
      "data-adlaire-floor-select",
      ".adlaire-floor-selector",
      "aria-pressed",
    ),
    choiceBinding(
      "data-adlaire-option-select",
      "[data-adlaire-option-group]",
      "aria-selected",
    ),
    choiceBinding(
      "data-adlaire-shift-select",
      ".adlaire-shift-roster",
      "aria-selected",
    ),
    choiceBinding(
      "data-adlaire-confidence-select",
      ".adlaire-confidence-indicator",
      "aria-pressed",
    ),
    choiceBinding(
      "data-adlaire-route-select",
      ".adlaire-delivery-route-board",
      "aria-selected",
    ),
    choiceBinding(
      "data-adlaire-evidence-select",
      ".adlaire-evidence-list",
      "aria-selected",
    ),
    choiceBinding(
      "data-adlaire-ticket-priority-select",
      ".adlaire-ticket-priority-board",
      "aria-selected",
    ),
    choiceBinding(
      "data-adlaire-report-parameter-select",
      ".adlaire-report-parameter-bar",
      "aria-pressed",
    ),
    choiceBinding(
      "data-adlaire-channel-select",
      ".adlaire-channel-list",
      "aria-selected",
    ),
    choiceBinding(
      "data-adlaire-editorial-gate-select",
      ".adlaire-review-gate-panel",
      "aria-selected",
    ),
    choiceBinding(
      "data-adlaire-locale-select",
      ".adlaire-locale-switcher-panel",
      "aria-selected",
    ),
    choiceBinding(
      "data-adlaire-moderation-decision",
      ".adlaire-moderation-queue",
      "aria-pressed",
    ),
    choiceBinding(
      "data-adlaire-device-select",
      ".adlaire-device-registry-table",
      "aria-selected",
    ),
    choiceBinding(
      "data-adlaire-deployment-ring-select",
      ".adlaire-deployment-ring-selector",
      "aria-selected",
    ),
    choiceBinding(
      "data-adlaire-fare-option-select",
      ".adlaire-booking-summary-panel",
      "aria-selected",
    ),
    choiceBinding(
      "data-adlaire-room-select",
      ".adlaire-room-inventory-board",
      "aria-selected",
    ),
    choiceBinding(
      "data-adlaire-permit-step-select",
      ".adlaire-document-requirement-list",
      "aria-selected",
    ),
    choiceBinding(
      "data-adlaire-volunteer-shift-select",
      ".adlaire-volunteer-shift-board",
      "aria-selected",
    ),
    choiceBinding(
      "data-adlaire-demand-response-select",
      ".adlaire-demand-response-panel",
      "aria-selected",
    ),
    choiceBinding(
      "data-adlaire-outage-report-select",
      ".adlaire-service-appointment-board",
      "aria-selected",
    ),
    choiceBinding(
      "data-adlaire-density-select",
      ".adlaire-density-switcher",
      "aria-pressed",
    ),
    choiceBinding(
      "data-adlaire-saved-view-select",
      ".adlaire-view-preset-switcher",
      "aria-pressed",
    ),
    choiceBinding(
      "data-adlaire-checkpoint-select",
      ".adlaire-execution-timeline",
      "aria-selected",
    ),
    choiceBinding(
      "data-adlaire-sdk-select",
      ".adlaire-sdk-selector",
      "aria-pressed",
    ),
    choiceBinding(
      "data-adlaire-environment-select",
      ".adlaire-api-explorer-panel",
      "aria-selected",
    ),
    choiceBinding(
      "data-adlaire-theme-select",
      ".adlaire-theme-workspace-panel",
      "aria-pressed",
    ),
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
    stepBinding(
      "data-adlaire-pipeline-stage-select",
      ".adlaire-pipeline-stage-rail",
    ),
    stepBinding("data-adlaire-milestone-select", ".adlaire-milestone-tracker"),
  ] as const;

  function closestBoundTrigger<T extends { readonly selector: string }>(
    source: Element | null,
    bindings: readonly T[],
    startIndex = 0,
  ): [Element, T, number] | null {
    if (!source) return null;
    for (let index = startIndex; index < bindings.length; index += 1) {
      const binding = bindings[index];
      const trigger = source.closest(binding.selector);
      if (trigger && !isDisabledInteraction(trigger)) {
        return [trigger, binding, index];
      }
    }
    return null;
  }

  function handleDeclarativeInteraction(
    event: MouseEvent,
    source: Element | null,
  ): boolean {
    const choice = closestBoundTrigger(source, interactiveChoiceBindings);
    if (choice) {
      const [trigger, binding] = choice;
      event.preventDefault();
      selectInteractiveChoice(
        trigger,
        binding.rootSelector,
        binding.itemSelector,
        binding.selectedAttribute,
      );
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

  function handleFirstComponentClick(
    event: MouseEvent,
    source: Element | null,
    bindings: readonly ComponentClickBinding[],
  ): boolean {
    const match = closestBoundTrigger(source, bindings);
    if (!match) return false;
    const [trigger, binding] = match;
    if (binding.preventDefault) event.preventDefault();
    binding.handle(trigger, event);
    return true;
  }

  function handleEveryComponentClick(
    event: MouseEvent,
    source: Element | null,
    bindings: readonly ComponentClickBinding[],
  ): boolean {
    let handled = false;
    let match = closestBoundTrigger(source, bindings);
    while (match) {
      const [trigger, binding, index] = match;
      if (binding.preventDefault) event.preventDefault();
      binding.handle(trigger, event);
      handled = true;
      match = closestBoundTrigger(source, bindings, index + 1);
    }
    return handled;
  }

  function handleEveryComponentInput(
    source: Element | null,
    bindings: readonly ComponentInputBinding[],
  ): boolean {
    let handled = false;
    let match = closestBoundTrigger(source, bindings);
    while (match) {
      const [trigger, binding, index] = match;
      if (trigger instanceof HTMLInputElement) {
        binding.handle(trigger);
        handled = true;
      }
      match = closestBoundTrigger(source, bindings, index + 1);
    }
    return handled;
  }

  function handleFirstComponentKey(
    event: KeyboardEvent,
    bindings: readonly ComponentKeyBinding[],
  ): boolean {
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
    componentBinding("data-adlaire-tab", selectGenericTab, true),
    componentBinding("data-adlaire-sidebar-toggle", toggleSidebar, true),
    componentBinding("data-adlaire-tree-toggle", toggleTree, true),
    componentBinding("data-adlaire-workspace-tab", selectWorkspaceTab, true),
    componentBinding(
      "data-adlaire-context-menu",
      (trigger) =>
        toggleDisclosureSurface(trigger, "data-adlaire-context-menu"),
      true,
    ),
    componentBinding(
      "data-adlaire-split-button-toggle",
      (trigger) =>
        toggleDisclosureSurface(
          trigger,
          "data-adlaire-split-button-toggle",
          ".adlaire-split-button",
          ".adlaire-context-menu, .adlaire-overflow-toolbar-menu",
        ),
      true,
    ),
    componentBinding(
      "data-adlaire-overflow-toggle",
      (trigger) =>
        toggleDisclosureSurface(
          trigger,
          "data-adlaire-overflow-toggle",
          ".adlaire-overflow-toolbar",
          ".adlaire-overflow-toolbar-menu",
        ),
      true,
    ),
    componentBinding("data-adlaire-dock-toggle", toggleDockPanel, true),
    componentBinding(
      "data-adlaire-column-toggle",
      toggleColumnVisibility,
      true,
    ),
    componentBinding("data-adlaire-page-select", selectPaginationPage, true),
    componentBinding("data-adlaire-saved-view-apply", applySavedView, true),
  ] as const;

  const deferredComponentClickBindings: readonly ComponentClickBinding[] = [
    componentBinding("data-adlaire-folder-toggle", toggleFolderBranch, true),
    componentBinding(
      "data-adlaire-policy-exception-toggle",
      (trigger) =>
        toggleDisclosureSurface(
          trigger,
          "data-adlaire-policy-exception-toggle",
          ".adlaire-policy-exception-panel",
          ".adlaire-policy-exception-body",
        ),
      true,
    ),
  ] as const;

  document.addEventListener("click", (event) => {
    const source = eventSourceElement(event);
    handleEveryComponentClick(event, source, componentClickBindings);
    if (handleDeclarativeInteraction(event, source)) return;
    handleEveryComponentClick(event, source, deferredComponentClickBindings);
  });

  function copyText(copy: Element): void {
    const copyTarget = getTarget(copy);
    const text = copyTarget?.textContent ??
      copy.getAttribute("data-adlaire-copy");
    if (text && writeClipboardText(text)) {
      copy.setAttribute("data-adlaire-copied", "true");
      copy.classList.add("is-selected");
      window.setTimeout(() => {
        copy.removeAttribute("data-adlaire-copied");
        copy.classList.remove("is-selected");
      }, 2000);
    }
  }

  function removeTarget(remove: Element): void {
    const removable = getTarget(remove) ??
      remove.closest(
        ".adlaire-toast, .adlaire-snackbar, .adlaire-upload-item, .adlaire-attachment-item",
      );
    const nextFocus = removable?.nextElementSibling ??
      removable?.previousElementSibling ??
      remove.closest<HTMLElement>(
        "[data-adlaire-selection-root], [data-adlaire-list]",
      );
    removable?.remove();
    if (nextFocus instanceof HTMLElement) nextFocus.focus();
  }

  function dismissToast(toastDismiss: Element): void {
    toastDismiss.closest(".adlaire-toast")?.remove();
  }

  function selectListItem(select: Element): void {
    const list = select.closest("[data-adlaire-select-list]");
    safeScopedQueryAll(list, "[data-adlaire-select]").forEach((item) => {
      const selected = item === select;
      setBooleanAttribute(item, "aria-selected", selected);
      item.classList.toggle("is-selected", selected);
      if (!isNativeInteractive(item)) {
        item.setAttribute("tabindex", selected ? "0" : "-1");
      }
    });
  }

  function selectGenericTab(trigger: Element): void {
    const root = trigger.closest(".adlaire-tabs") ?? document;
    const group = trigger.getAttribute("data-adlaire-group");
    const tabs = safeScopedQueryAll(root, "[data-adlaire-tab]")
      .filter((tab) =>
        !group || tab.getAttribute("data-adlaire-group") === group
      );

    tabs.forEach((tab) => {
      const selected = tab === trigger;
      setBooleanAttribute(tab, "aria-selected", selected);
      tab.setAttribute("tabindex", selected ? "0" : "-1");
      const panel = queryReferencedTarget(tab, "data-adlaire-tab");
      if (panel) {
        setOpenState(panel, selected);
        setBooleanAttribute(panel, "aria-hidden", !selected);
      }
    });
  }

  function toggleSidebar(trigger: Element): void {
    const shell = sidebarShellForTrigger(trigger);
    if (!shell) return;

    setSidebarState(
      trigger,
      shell,
      !shell.classList.contains("adlaire-sidebar-collapsed"),
    );
  }

  function sidebarShellForTrigger(trigger: Element): HTMLElement | null {
    const selector = trigger.getAttribute("data-adlaire-sidebar-toggle") ||
      trigger.getAttribute("data-adlaire-target");
    const controlled = trigger.getAttribute("aria-controls");
    return querySidebarShell(selector) ??
      (controlled
        ? document.getElementById(controlled)
        : trigger.closest<HTMLElement>(".adlaire-app-shell"));
  }

  function setSidebarState(
    trigger: Element,
    shell: HTMLElement,
    collapsed: boolean,
  ): void {
    shell.classList.toggle("adlaire-sidebar-collapsed", collapsed);
    if (shell.id && !trigger.getAttribute("aria-controls")) {
      trigger.setAttribute("aria-controls", shell.id);
    }
    setBooleanAttribute(trigger, "aria-expanded", !collapsed);
    setBooleanAttribute(trigger, "aria-pressed", collapsed);
  }

  function querySidebarShell(selector: string | null): HTMLElement | null {
    return safeDocumentQuery(selector);
  }

  function toggleTree(trigger: Element): void {
    setTreeBranchState(
      trigger,
      trigger.getAttribute("aria-expanded") !== "true",
    );
  }

  function setTreeBranchState(trigger: Element, expanded: boolean): void {
    const selector = trigger.getAttribute("data-adlaire-tree-toggle") ??
      trigger.getAttribute("aria-controls");
    const branch = queryTreeBranch(selector, trigger);
    if (!branch) return;

    setBooleanAttribute(trigger, "aria-expanded", expanded);
    setOpenState(branch, expanded);
  }

  function queryTreeBranch(
    selector: string | null,
    trigger: Element,
  ): HTMLElement | null {
    if (selector) {
      const normalized = selector.startsWith("#")
        ? selector.slice(1)
        : selector;
      const byId = document.getElementById(normalized);
      if (byId) return byId;
      return safeDocumentQuery(selector);
    }
    return safeScopedQuery(
      trigger.closest(".adlaire-tree-item"),
      ".adlaire-tree-branch",
    );
  }

  function selectWorkspaceTab(trigger: Element): void {
    const root = trigger.closest(".adlaire-tab-workspace") ?? document;
    const group = trigger.getAttribute("data-adlaire-group");
    const tabs = safeScopedQueryAll(root, "[data-adlaire-workspace-tab]")
      .filter((tab) =>
        !group || tab.getAttribute("data-adlaire-group") === group
      );

    tabs.forEach((tab) => {
      const selected = tab === trigger;
      setBooleanAttribute(tab, "aria-selected", selected);
      tab.setAttribute("tabindex", selected ? "0" : "-1");
      const panel = queryReferencedTarget(tab, "data-adlaire-workspace-tab");
      if (!panel) return;
      setOpenState(panel, selected);
      setBooleanAttribute(panel, "aria-hidden", !selected);
    });
  }

  function toggleDisclosureSurface(
    trigger: Element,
    attribute: string,
    rootSelector?: string,
    fallbackSelector?: string,
  ): void {
    setDisclosureSurfaceState(
      trigger,
      attribute,
      trigger.getAttribute("aria-expanded") !== "true",
      rootSelector,
      fallbackSelector,
    );
  }

  function setDisclosureSurfaceState(
    trigger: Element,
    attribute: string,
    expanded: boolean,
    rootSelector?: string,
    fallbackSelector?: string,
  ): void {
    const root = rootSelector ? trigger.closest(rootSelector) : null;
    const target = queryReferencedTarget(trigger, attribute) ??
      safeScopedQuery(root, fallbackSelector);
    if (!target) return;

    setBooleanAttribute(trigger, "aria-expanded", expanded);
    trigger.classList.toggle("is-selected", expanded);
    setOpenState(target, expanded);
    setBooleanAttribute(target, "aria-hidden", !expanded);
  }

  function toggleDockPanel(trigger: Element): void {
    const panel = queryReferencedTarget(trigger, "data-adlaire-dock-toggle") ??
      trigger.closest<HTMLElement>(".adlaire-dock-panel");
    if (!panel) return;

    setDockPanelState(
      trigger,
      panel,
      !panel.classList.contains("is-collapsed"),
    );
  }

  function setDockPanelState(
    trigger: Element,
    panel: HTMLElement,
    collapsed: boolean,
  ): void {
    panel.classList.toggle("is-collapsed", collapsed);
    panel.setAttribute("aria-hidden", booleanState(collapsed));
    setBooleanAttribute(trigger, "aria-expanded", !collapsed);
    setBooleanAttribute(trigger, "aria-pressed", collapsed);
    trigger.classList.toggle("is-selected", !collapsed);
  }

  function selectInteractiveChoice(
    trigger: Element,
    rootSelector: string,
    itemSelector: string,
    selectedAttribute: string,
  ): void {
    const root = queryInteractionRoot(trigger, rootSelector);
    if (!root) return;

    safeScopedQueryAll(root, itemSelector).forEach((item) => {
      const selected = item === trigger;
      setBooleanAttribute(item, selectedAttribute, selected);
      if (!isNativeInteractive(item)) {
        item.setAttribute("tabindex", selected ? "0" : "-1");
      }
      item.classList.toggle("is-selected", selected);
    });
    syncSelectionCounter(root);
  }

  function selectCurrentStep(
    trigger: Element,
    rootSelector: string,
    itemSelector: string,
  ): void {
    const root = queryInteractionRoot(trigger, rootSelector);
    if (!root) return;

    safeScopedQueryAll(root, itemSelector).forEach((item) => {
      const selected = item === trigger;
      if (selected) {
        item.setAttribute("aria-current", "step");
      } else {
        item.removeAttribute("aria-current");
      }
      if (!isNativeInteractive(item)) {
        item.setAttribute("tabindex", selected ? "0" : "-1");
      }
      item.classList.toggle("is-selected", selected);
    });
  }

  function toggleBooleanState(trigger: Element, stateAttribute: string): void {
    setBooleanState(
      trigger,
      stateAttribute,
      trigger.getAttribute(stateAttribute) !== "true",
    );
  }

  function setBooleanState(
    trigger: Element,
    stateAttribute: string,
    active: boolean,
  ): void {
    setBooleanAttribute(trigger, stateAttribute, active);
    if (
      stateAttribute !== "aria-pressed" && trigger.hasAttribute("aria-pressed")
    ) setBooleanAttribute(trigger, "aria-pressed", active);
    trigger.classList.toggle("is-selected", active);
    syncSelectionCounter(
      trigger.closest("[data-adlaire-selection-root]") ?? trigger.parentElement,
    );
  }

  function toggleColumnVisibility(trigger: Element): void {
    setColumnVisibility(
      trigger,
      trigger.getAttribute("aria-checked") !== "true",
    );
  }

  function setColumnVisibility(trigger: Element, visible: boolean): void {
    const column = trigger.getAttribute("data-adlaire-column-toggle");
    const root =
      safeDocumentQuery(trigger.getAttribute("data-adlaire-column-root")) ??
        trigger.closest("[data-adlaire-column-manager]") ?? document;
    if (!column) return;
    setBooleanAttribute(trigger, "aria-checked", visible);
    trigger.classList.toggle("is-selected", visible);
    safeScopedQueryAll(root, `[data-adlaire-column="${column}"]`).forEach(
      (cell) => {
        cell.hidden = !visible;
      },
    );
    setOptionalText(
      safeDocumentQuery(trigger.getAttribute("data-adlaire-column-status")),
      `${column} column ${visible ? "shown" : "hidden"}`,
    );
  }

  function selectPaginationPage(trigger: Element): void {
    const root = trigger.closest("[data-adlaire-pagination]");
    if (!root) return;
    const page = trigger.getAttribute("data-adlaire-page-select") ??
      trigger.textContent?.trim() ?? "";
    safeScopedQueryAll(root, "[data-adlaire-page-select]").forEach((item) => {
      const selected = item === trigger;
      if (selected) {
        item.setAttribute("aria-current", "page");
      } else {
        item.removeAttribute("aria-current");
      }
      if (!isNativeInteractive(item)) {
        item.setAttribute("tabindex", selected ? "0" : "-1");
      }
      item.classList.toggle("is-selected", selected);
      item.classList.toggle("adlaire-page-link-current", selected);
    });
    setOptionalText(
      safeDocumentQuery(root.getAttribute("data-adlaire-pagination-status")),
      page ? `Page ${page} selected` : "Page selected",
    );
  }

  function applySavedView(trigger: Element): void {
    const root = trigger.closest("[data-adlaire-saved-view-root]") ??
      trigger.closest(
        ".adlaire-view-preset-switcher, .adlaire-saved-view-bar",
      ) ?? trigger.parentElement;
    const view = trigger.getAttribute("data-adlaire-saved-view-apply") ??
      trigger.getAttribute("data-adlaire-saved-view-select") ??
      trigger.textContent?.trim() ?? "";
    if (root) {
      safeScopedQueryAll(
        root,
        "[data-adlaire-saved-view-apply], [data-adlaire-saved-view-select]",
      ).forEach((item) => {
        const selected = item === trigger;
        setBooleanAttribute(item, "aria-pressed", selected);
        if (selected) {
          item.setAttribute("aria-current", "true");
        } else {
          item.removeAttribute("aria-current");
        }
        item.setAttribute("tabindex", selected ? "0" : "-1");
        item.classList.toggle("is-selected", selected);
      });
    }
    setOptionalText(
      safeDocumentQuery(trigger.getAttribute("data-adlaire-saved-view-status")),
      view ? `${view} view applied` : "View applied",
    );
  }

  function syncSelectionCounter(root: Element | null): void {
    if (!root) return;
    const selected = new Set(safeScopedQueryAll(
      root,
      [
        "[data-adlaire-selection-item][aria-selected='true']",
        "[data-adlaire-selection-item][aria-checked='true']",
        "[data-adlaire-selection-item].is-selected",
        "[data-adlaire-record-row-toggle][aria-selected='true']",
        "[data-adlaire-record-row-toggle][aria-checked='true']",
        "[data-adlaire-record-row-toggle].is-selected",
        "[data-adlaire-bulk-selection-toggle][aria-selected='true']",
        "[data-adlaire-bulk-selection-toggle][aria-checked='true']",
        "[data-adlaire-bulk-selection-toggle].is-selected",
      ].join(", "),
    )).size;
    safeScopedQueryAll(root, "[data-adlaire-selection-counter]").forEach(
      (counter) => {
        counter.textContent = String(selected);
      },
    );
    safeScopedQueryAll(root, "[data-adlaire-bulk-action-tray]").forEach(
      (tray) => {
        setOpenState(tray, selected > 0);
        tray.setAttribute("data-adlaire-selected-count", String(selected));
      },
    );
  }

  function tabGroupHasSelected(tab: HTMLElement, attribute: string): boolean {
    const root = tab.closest(".adlaire-tabs, .adlaire-tab-workspace") ??
      tab.parentElement ?? document;
    const group = tab.getAttribute("data-adlaire-group");
    return safeScopedQueryAll(root, hookSelector(attribute))
      .some((item) =>
        item.getAttribute("aria-selected") === "true" &&
        (!group || item.getAttribute("data-adlaire-group") === group)
      );
  }

  function initializeTabState(attribute: string): void {
    safeDocumentQueryAll(hookSelector(attribute)).forEach((tab) => {
      const selected = tab.getAttribute("aria-selected") === "true";
      tab.setAttribute("tabindex", selected ? "0" : "-1");
      const panel = queryReferencedTarget(tab, attribute);
      if (panel && (selected || tabGroupHasSelected(tab, attribute))) {
        setOpenState(panel, selected);
        setBooleanAttribute(panel, "aria-hidden", !selected);
      }
    });
  }

  function initializeListState(): void {
    safeDocumentQueryAll("[data-adlaire-select-list]").forEach((list) => {
      const selected = safeScopedQuery(
        list,
        "[data-adlaire-select][aria-selected='true'], [data-adlaire-select].is-selected",
      );
      if (selected) selectListItem(selected);
    });
  }

  function initializeShellState(): void {
    safeDocumentQueryAll("[data-adlaire-sidebar-toggle]").forEach((trigger) => {
      const shell = sidebarShellForTrigger(trigger);
      if (!shell) return;
      const collapsed = trigger.getAttribute("aria-pressed") === "true" ||
        trigger.getAttribute("aria-expanded") === "false" ||
        shell.classList.contains("adlaire-sidebar-collapsed");
      setSidebarState(trigger, shell, collapsed);
    });
    safeDocumentQueryAll("[data-adlaire-dock-toggle]").forEach((trigger) => {
      const panel =
        queryReferencedTarget(trigger, "data-adlaire-dock-toggle") ??
          trigger.closest<HTMLElement>(".adlaire-dock-panel");
      if (!panel) return;
      const collapsed = trigger.getAttribute("aria-pressed") === "true" ||
        trigger.getAttribute("aria-expanded") === "false" ||
        panel.classList.contains("is-collapsed");
      setDockPanelState(trigger, panel, collapsed);
    });
  }

  function initializeToggleSurfaceState(): void {
    safeDocumentQueryAll("[data-adlaire-toggle][aria-expanded]").forEach(
      (trigger) => {
        setExpanded(
          trigger,
          getTarget(trigger),
          trigger.getAttribute("aria-expanded") === "true",
        );
      },
    );
    safeDocumentQueryAll("[data-adlaire-tree-toggle][aria-expanded]").forEach(
      (trigger) => {
        setTreeBranchState(
          trigger,
          trigger.getAttribute("aria-expanded") === "true",
        );
      },
    );
    safeDocumentQueryAll("[data-adlaire-folder-toggle][aria-expanded]").forEach(
      (trigger) => {
        setFolderBranchState(
          trigger,
          trigger.getAttribute("aria-expanded") === "true",
        );
      },
    );
    safeDocumentQueryAll("[data-adlaire-context-menu][aria-expanded]").forEach(
      (trigger) => {
        setDisclosureSurfaceState(
          trigger,
          "data-adlaire-context-menu",
          trigger.getAttribute("aria-expanded") === "true",
        );
      },
    );
    safeDocumentQueryAll("[data-adlaire-split-button-toggle][aria-expanded]")
      .forEach((trigger) => {
        setDisclosureSurfaceState(
          trigger,
          "data-adlaire-split-button-toggle",
          trigger.getAttribute("aria-expanded") === "true",
          ".adlaire-split-button",
          ".adlaire-context-menu, .adlaire-overflow-toolbar-menu",
        );
      });
    safeDocumentQueryAll("[data-adlaire-overflow-toggle][aria-expanded]")
      .forEach((trigger) => {
        setDisclosureSurfaceState(
          trigger,
          "data-adlaire-overflow-toggle",
          trigger.getAttribute("aria-expanded") === "true",
          ".adlaire-overflow-toolbar",
          ".adlaire-overflow-toolbar-menu",
        );
      });
    safeDocumentQueryAll(
      "[data-adlaire-policy-exception-toggle][aria-expanded]",
    ).forEach((trigger) => {
      setDisclosureSurfaceState(
        trigger,
        "data-adlaire-policy-exception-toggle",
        trigger.getAttribute("aria-expanded") === "true",
        ".adlaire-policy-exception-panel",
        ".adlaire-policy-exception-body",
      );
    });
  }

  function initializeDeclarativeState(): void {
    interactiveChoiceBindings.forEach((binding) => {
      safeDocumentQueryAll(binding.itemSelector)
        .filter((item) =>
          item.getAttribute(binding.selectedAttribute) === "true" ||
          item.classList.contains("is-selected")
        )
        .forEach((item) =>
          selectInteractiveChoice(
            item,
            binding.rootSelector,
            binding.itemSelector,
            binding.selectedAttribute,
          )
        );
    });
    booleanStateBindings.forEach((binding) => {
      safeDocumentQueryAll(binding.selector).forEach((item) => {
        setBooleanState(
          item,
          binding.stateAttribute,
          item.getAttribute(binding.stateAttribute) === "true" ||
            item.classList.contains("is-selected"),
        );
      });
    });
    currentStepBindings.forEach((binding) => {
      safeDocumentQueryAll(binding.itemSelector)
        .filter((item) =>
          item.getAttribute("aria-current") === "step" ||
          item.classList.contains("is-selected")
        )
        .forEach((item) =>
          selectCurrentStep(item, binding.rootSelector, binding.itemSelector)
        );
    });
  }

  function initializeSelectedComponentState(): void {
    initializeShellState();
    initializeListState();
    initializeToggleSurfaceState();
    initializeDeclarativeState();
    initializeTabState("data-adlaire-tab");
    initializeTabState("data-adlaire-workspace-tab");
    safeDocumentQueryAll("[data-adlaire-pagination]").forEach((root) => {
      const current = safeScopedQuery(
        root,
        "[data-adlaire-page-select][aria-current='page'], [data-adlaire-page-select][aria-current='true'], .adlaire-page-link-current",
      );
      if (current) selectPaginationPage(current);
    });
    safeDocumentQueryAll(
      "[data-adlaire-saved-view-root], .adlaire-view-preset-switcher, .adlaire-saved-view-bar",
    ).forEach((root) => {
      const selected = safeScopedQuery(
        root,
        "[data-adlaire-saved-view-apply][aria-pressed='true'], [data-adlaire-saved-view-select][aria-pressed='true'], .is-selected",
      );
      if (selected) applySavedView(selected);
    });
    safeDocumentQueryAll("[data-adlaire-carousel]").forEach(moveCarousel);
    safeDocumentQueryAll("[data-adlaire-column-toggle][aria-checked]").forEach(
      (trigger) => {
        setColumnVisibility(
          trigger,
          trigger.getAttribute("aria-checked") === "true",
        );
      },
    );
    safeDocumentQueryAll(
      "[data-adlaire-filter-input], [data-adlaire-search-input]",
    ).forEach((input) => {
      if (input instanceof HTMLInputElement) applyTextFilter(input);
    });
    safeDocumentQueryAll("[data-adlaire-preview-compare]").forEach((input) => {
      if (input instanceof HTMLInputElement) updatePreviewCompare(input);
    });
    safeDocumentQueryAll("[data-adlaire-selection-root]").forEach(
      syncSelectionCounter,
    );
    syncOverlayRootState();
  }

  function toggleFolderBranch(trigger: Element): void {
    setFolderBranchState(
      trigger,
      trigger.getAttribute("aria-expanded") !== "true",
    );
  }

  function setFolderBranchState(trigger: Element, expanded: boolean): void {
    const branch =
      queryReferencedTarget(trigger, "data-adlaire-folder-toggle") ??
        safeScopedQuery(
          trigger.closest(".adlaire-folder-item"),
          ".adlaire-folder-branch",
        );
    if (!branch) return;

    setBooleanAttribute(trigger, "aria-expanded", expanded);
    setOpenState(branch, expanded);
  }

  const componentInputBindings: readonly ComponentInputBinding[] = [
    componentInputBinding("data-adlaire-filter-input", applyTextFilter),
    componentInputBinding("data-adlaire-search-input", applyTextFilter),
    componentInputBinding("data-adlaire-preview-compare", updatePreviewCompare),
  ] as const;

  document.addEventListener("input", (event) => {
    handleEveryComponentInput(
      eventSourceElement(event),
      componentInputBindings,
    );
  });

  initializeSelectedComponentState();

  function applyTextFilter(input: HTMLInputElement): void {
    const selector = input.getAttribute("data-adlaire-filter-root") ??
      input.getAttribute("data-adlaire-search-root");
    const root = safeDocumentQuery(selector);
    const itemSelector = input.getAttribute("data-adlaire-filter-item") ??
      input.getAttribute("data-adlaire-search-item");
    if (!root || !itemSelector) return;

    const query = input.value.trim().toLowerCase();
    let visibleCount = 0;
    safeScopedQueryAll(root, itemSelector).forEach((item) => {
      const matched = (item.textContent ?? "").toLowerCase().includes(query);
      item.hidden = !matched;
      if (matched) visibleCount += 1;
    });

    const count = safeScopedQuery(
      root,
      "[data-adlaire-filter-count], [data-adlaire-search-count]",
    );
    const empty = safeScopedQuery(
      root,
      "[data-adlaire-filter-empty], [data-adlaire-search-empty]",
    );
    if (count) count.textContent = String(visibleCount);
    if (empty) setOpenState(empty, visibleCount === 0);
  }

  function updatePreviewCompare(input: HTMLInputElement): void {
    const compare =
      queryReferencedTarget(input, "data-adlaire-preview-compare") ??
        input.closest<HTMLElement>(".adlaire-preview-compare");
    if (!compare) return;

    const value = Number(input.value);
    if (!Number.isFinite(value)) return;
    compare.style.setProperty(
      "--adlaire-preview-compare-position",
      `${Math.max(0, Math.min(100, value))}%`,
    );
  }

  function numberAttribute(
    target: Element,
    attribute: string,
    fallback: number,
  ): number {
    const raw = target.getAttribute(attribute);
    if (raw === null) return fallback;
    const value = Number(raw);
    return Number.isFinite(value) ? value : fallback;
  }

  function clamp(value: number, min: number, max: number): number {
    return Math.min(max, Math.max(min, value));
  }

  function panelSize(
    root: Element,
    handle: Element,
    min: number,
    max: number,
  ): number {
    const raw = root.getAttribute("data-adlaire-panel-size") ??
      handle.getAttribute("aria-valuenow");
    if (raw === null) return clamp(320, min, max);
    const value = Number(raw);
    return Number.isFinite(value)
      ? clamp(value, min, max)
      : clamp(320, min, max);
  }

  function applyResizablePanelSize(
    root: HTMLElement,
    handle: HTMLElement,
    size: number,
  ): void {
    const min = numberAttribute(root, "data-adlaire-panel-min", 180);
    const max = numberAttribute(root, "data-adlaire-panel-max", 520);
    const next = Math.round(clamp(size, min, max));
    root.setAttribute("data-adlaire-panel-size", String(next));
    root.style.gridTemplateColumns =
      `minmax(${min}px, ${next}px) 8px minmax(0, 1fr)`;
    handle.setAttribute("aria-valuemin", String(min));
    handle.setAttribute("aria-valuemax", String(max));
    handle.setAttribute("aria-valuenow", String(next));
  }

  function resizePanelWithKeyboard(
    root: HTMLElement,
    handle: HTMLElement,
    event: KeyboardEvent,
  ): void {
    const min = numberAttribute(root, "data-adlaire-panel-min", 180);
    const max = numberAttribute(root, "data-adlaire-panel-max", 520);
    const step = numberAttribute(root, "data-adlaire-panel-step", 24);
    let next = panelSize(root, handle, min, max);
    if (event.key === "ArrowLeft") {
      next -= step;
    } else if (event.key === "ArrowRight") {
      next += step;
    } else if (event.key === "Home") {
      next = min;
    } else if (event.key === "End") {
      next = max;
    } else {
      return;
    }
    event.preventDefault();
    applyResizablePanelSize(root, handle, next);
  }

  function startResizablePanelDrag(
    root: HTMLElement,
    handle: HTMLElement,
    event: PointerEvent,
  ): void {
    if (event.button !== 0) return;
    const rect = root.getBoundingClientRect();
    const move = (moveEvent: PointerEvent): void => {
      applyResizablePanelSize(root, handle, moveEvent.clientX - rect.left);
    };
    const stop = (stopEvent: PointerEvent): void => {
      document.removeEventListener("pointermove", move);
      try {
        handle.releasePointerCapture(stopEvent.pointerId);
      } catch {
        return;
      }
    };
    event.preventDefault();
    try {
      handle.setPointerCapture(event.pointerId);
    } catch {
      return;
    }
    document.addEventListener("pointermove", move);
    document.addEventListener("pointerup", stop, { once: true });
    document.addEventListener("pointercancel", stop, { once: true });
  }

  safeDocumentQueryAll("[data-adlaire-resizable-panel]").forEach((root) => {
    const handle = safeScopedQuery(
      root,
      "[data-adlaire-resize-handle], .adlaire-resize-handle",
    );
    if (!handle) return;
    if (!handle.hasAttribute("tabindex")) handle.setAttribute("tabindex", "0");
    if (!handle.hasAttribute("role")) handle.setAttribute("role", "separator");
    handle.setAttribute("aria-orientation", "vertical");
    applyResizablePanelSize(
      root,
      handle,
      panelSize(
        root,
        handle,
        numberAttribute(root, "data-adlaire-panel-min", 180),
        numberAttribute(root, "data-adlaire-panel-max", 520),
      ),
    );
    handle.addEventListener(
      "keydown",
      (event) => resizePanelWithKeyboard(root, handle, event),
    );
    handle.addEventListener(
      "pointerdown",
      (event) => startResizablePanelDrag(root, handle, event),
    );
  });

  safeDocumentQueryAll("[data-adlaire-split-pane]").forEach((root) => {
    const handle = safeScopedQuery(root, ".adlaire-pane-resize-handle");
    const panes = safeScopedQueryAll(root, ".adlaire-pane");
    if (!handle || panes.length < 2) return;
    if (!handle.hasAttribute("tabindex")) handle.setAttribute("tabindex", "0");
    if (!handle.hasAttribute("role")) handle.setAttribute("role", "separator");
    handle.setAttribute("aria-orientation", "vertical");
    applySplitPaneRatio(
      root,
      handle,
      numberAttribute(root, "data-adlaire-pane-ratio", 50),
    );
    handle.addEventListener("keydown", (event) => {
      let current = Number(
        root.getAttribute("data-adlaire-pane-ratio") || "50",
      );
      if (event.key === "ArrowLeft") {
        current = Math.max(20, current - 5);
      } else if (event.key === "ArrowRight") {
        current = Math.min(80, current + 5);
      } else if (event.key === "Home") {
        current = 20;
      } else if (event.key === "End") {
        current = 80;
      } else {
        return;
      }
      event.preventDefault();
      applySplitPaneRatio(root, handle, current);
    });
  });

  function applySplitPaneRatio(
    root: HTMLElement,
    handle: HTMLElement,
    ratio: number,
  ): void {
    const current = Math.round(clamp(ratio, 20, 80));
    root.setAttribute("data-adlaire-pane-ratio", String(current));
    root.style.gridTemplateColumns = `${current}% 8px 1fr`;
    handle.setAttribute("aria-valuemin", "20");
    handle.setAttribute("aria-valuemax", "80");
    handle.setAttribute("aria-valuenow", String(current));
    handle.setAttribute("aria-valuetext", `${current}%`);
  }
})();
