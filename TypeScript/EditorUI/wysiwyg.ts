/// <reference lib="dom" />
/* Adlaire-Design WYSIWYG editor interactions */
(() => {
  "use strict";

  function targetElement(target: EventTarget | null): Element | null {
    return target instanceof Element ? target : null;
  }

  function eventSourceElement(event: Event): Element | null {
    const fallbackTarget = event.target;
    const path = typeof event.composedPath === "function" ? event.composedPath() : [];
    for (const target of path) {
      const element = targetElement(target);
      if (element) return element;
    }
    return targetElement(fallbackTarget);
  }

  function booleanState(active: boolean): "true" | "false" {
    return active ? "true" : "false";
  }

  function setBooleanAttribute(target: Element, attribute: string, active: boolean): void {
    target.setAttribute(attribute, booleanState(active));
  }

  function setOpenState(target: HTMLElement, open: boolean): void {
    target.hidden = !open;
    target.classList.toggle("is-open", open);
  }

  function isDisabledInteraction(target: Element): boolean {
    return target.hasAttribute("disabled") || target.getAttribute("aria-disabled") === "true";
  }

  function isWysiwygDisabled(target: Element): boolean {
    const root = editorRoot(target);
    return Boolean(root && (isDisabledInteraction(root) || root.getAttribute("aria-busy") === "true"));
  }

  function isNativeInteractive(target: Element): boolean {
    return target instanceof HTMLButtonElement ||
      target instanceof HTMLAnchorElement ||
      target instanceof HTMLInputElement ||
      target instanceof HTMLSelectElement ||
      target instanceof HTMLTextAreaElement;
  }

  function safeDocumentQuery(selector: string | null | undefined): HTMLElement | null {
    if (!selector) return null;
    try {
      return document.querySelector<HTMLElement>(selector);
    } catch {
      return null;
    }
  }

  function safeScopedQuery(root: ParentNode | null | undefined, selector: string | null | undefined): HTMLElement | null {
    if (!root || !selector) return null;
    try {
      return root.querySelector<HTMLElement>(selector);
    } catch {
      return null;
    }
  }

  function safeScopedQueryAll(root: ParentNode | null | undefined, selector: string | null | undefined): HTMLElement[] {
    if (!root || !selector) return [];
    try {
      return Array.from(root.querySelectorAll<HTMLElement>(selector));
    } catch {
      return [];
    }
  }

  interface WysiwygClickBinding {
    readonly selector: string;
    readonly handle: (trigger: Element) => void;
  }

  function hookSelector(attribute: string): string {
    return `[${attribute}]`;
  }

  function wysiwygClickBinding(attribute: string, handle: (trigger: Element) => void): WysiwygClickBinding {
    return {
      selector: hookSelector(attribute),
      handle,
    };
  }

  function closestBoundTrigger<T extends { readonly selector: string }>(source: Element | null, bindings: readonly T[]): [Element, T] | null {
    if (!source) return null;
    for (const binding of bindings) {
      const trigger = source.closest(binding.selector);
      if (trigger && !isDisabledInteraction(trigger) && !isWysiwygDisabled(trigger)) return [trigger, binding];
    }
    return null;
  }

  function editorRoot(element: Element): Element | null {
    return element.closest(".adlaire-wysiwyg");
  }

  function setMode(root: Element, mode: string): void {
    root.setAttribute("data-adlaire-wysiwyg-mode", mode);
    safeScopedQueryAll(root, "[data-adlaire-wysiwyg-mode]").forEach((trigger) => {
      const selected = trigger.getAttribute("data-adlaire-wysiwyg-mode") === mode;
      setBooleanAttribute(trigger, "aria-pressed", selected);
      if (trigger instanceof HTMLElement) trigger.setAttribute("tabindex", selected ? "0" : "-1");
      trigger.classList.toggle("is-selected", selected);
    });
  }

  function targetFor(trigger: Element): Element | null {
    const selector = trigger.getAttribute("data-adlaire-wysiwyg-target") ?? trigger.getAttribute("aria-controls");
    if (!selector) return null;
    if (selector.startsWith("#")) return document.getElementById(selector.slice(1));
    return document.getElementById(selector) ?? safeDocumentQuery(selector);
  }

  const wysiwygPrimaryClickBindings: readonly WysiwygClickBinding[] = [
    wysiwygClickBinding("data-adlaire-wysiwyg-mode", selectMode),
    wysiwygClickBinding("data-adlaire-wysiwyg-toggle", togglePanel),
    wysiwygClickBinding("data-adlaire-wysiwyg-toolbar-group", selectToolbarGroup),
  ] as const;

  const wysiwygSelectionClickBindings: readonly WysiwygClickBinding[] = [
    wysiwygClickBinding("data-adlaire-wysiwyg-select", selectBlock),
    wysiwygClickBinding("data-adlaire-wysiwyg-slash-item", selectMenuItem),
    wysiwygClickBinding("data-adlaire-wysiwyg-suggestion", selectSuggestion),
  ] as const;

  function handleFirstWysiwygClick(source: Element | null, bindings: readonly WysiwygClickBinding[]): boolean {
    const match = closestBoundTrigger(source, bindings);
    if (!match) return false;
    const [trigger, binding] = match;
    binding.handle(trigger);
    return true;
  }

  document.addEventListener("click", (event) => {
    const target = eventSourceElement(event);
    handleFirstWysiwygClick(target, wysiwygPrimaryClickBindings);
    handleFirstWysiwygClick(target, wysiwygSelectionClickBindings);
  });

  document.addEventListener("keydown", (event) => {
    if (closeWysiwygSurface(event)) return;
    if (moveCompositeSelection(event)) return;
    moveWysiwygControlSelection(event);
  });

  function selectMode(modeTrigger: Element): void {
    const root = editorRoot(modeTrigger);
    const mode = modeTrigger.getAttribute("data-adlaire-wysiwyg-mode");
    if (root && mode) setMode(root, mode);
  }

  function togglePanel(toggle: Element): void {
    const panel = targetFor(toggle);
    if (!panel) return;

    setPanelState(toggle, panel, toggle.getAttribute("aria-expanded") !== "true");
  }

  function setPanelState(toggle: Element, panel: Element, open: boolean): void {
    setBooleanAttribute(toggle, "aria-expanded", open);
    toggle.classList.toggle("is-selected", open);
    setOpenState(panel as HTMLElement, open);
    setBooleanAttribute(panel, "aria-hidden", !open);
    panel.setAttribute("data-adlaire-disclosure-state", open ? "open" : "closed");
  }

  function closeWysiwygSurface(event: KeyboardEvent): boolean {
    if (event.key !== "Escape") return false;
    const source = eventSourceElement(event);
    const root = source ? editorRoot(source) : null;
    if (!root) return false;
    let closed = false;
    safeScopedQueryAll(root, "[data-adlaire-wysiwyg-toggle][aria-expanded='true']").forEach((toggle) => {
      const panel = targetFor(toggle);
      if (!panel) return;
      setPanelState(toggle, panel, false);
      closed = true;
    });
    safeScopedQueryAll(root, ".adlaire-wysiwyg-slash-menu, .adlaire-wysiwyg-suggestion-card, .adlaire-wysiwyg-assist-panel").forEach((panel) => {
      if (panel.hidden) return;
      setOpenState(panel, false);
      setBooleanAttribute(panel, "aria-hidden", true);
      closed = true;
    });
    if (!closed) return false;
    event.preventDefault();
    if (source instanceof HTMLElement) source.focus();
    return true;
  }

  function selectToolbarGroup(trigger: Element): void {
    const root = trigger.closest(".adlaire-wysiwyg-toolbar") ?? editorRoot(trigger);
    if (!root) return;
    const group = trigger.getAttribute("data-adlaire-wysiwyg-toolbar-group") ?? "";
    safeScopedQueryAll(root, "[data-adlaire-wysiwyg-toolbar-group]").forEach((item) => {
      const selected = item === trigger;
      setBooleanAttribute(item, "aria-pressed", selected);
      item.setAttribute("tabindex", selected ? "0" : "-1");
      item.classList.toggle("is-selected", selected);
    });
    root.setAttribute("data-adlaire-toolbar-group", group);
  }

  function selectBlock(selectable: Element): void {
    const root = editorRoot(selectable);
    if (!root) return;

    safeScopedQueryAll(root, "[data-adlaire-wysiwyg-select], .adlaire-wysiwyg-block-selected").forEach((item) => {
      const selected = item === selectable;
      item.classList.toggle("adlaire-wysiwyg-block-selected", selected);
      setBooleanAttribute(item, "aria-selected", selected);
      if (item instanceof HTMLElement) item.setAttribute("tabindex", selected ? "0" : "-1");
    });
  }

  function selectMenuItem(item: Element): void {
    selectCompositeItem(item, ".adlaire-wysiwyg-slash-menu", "[data-adlaire-wysiwyg-slash-item], .adlaire-wysiwyg-slash-item");
  }

  function selectSuggestion(item: Element): void {
    selectCompositeItem(item, ".adlaire-wysiwyg-suggestion-card, .adlaire-wysiwyg-assist-panel", "[data-adlaire-wysiwyg-suggestion], .adlaire-wysiwyg-suggestion, .adlaire-wysiwyg-assist-suggestion");
  }

  function selectCompositeItem(item: Element, rootSelector: string, itemSelector: string, focusSelected = true): void {
    const root = item.closest(rootSelector) ?? editorRoot(item);
    if (!root) return;
    safeScopedQueryAll(root, itemSelector).forEach((option) => {
      const selected = option === item;
      setBooleanAttribute(option, "aria-selected", selected);
      option.setAttribute("tabindex", selected ? "0" : "-1");
      option.classList.toggle("is-selected", selected);
      if (focusSelected && selected && option instanceof HTMLElement) option.focus();
    });
  }

  function moveCompositeSelection(event: KeyboardEvent): boolean {
    const source = eventSourceElement(event);
    const item = source?.closest("[data-adlaire-wysiwyg-slash-item], [data-adlaire-wysiwyg-suggestion], .adlaire-wysiwyg-slash-item, .adlaire-wysiwyg-suggestion, .adlaire-wysiwyg-assist-suggestion");
    if (!(item instanceof HTMLElement)) return false;

    const root = item.closest(".adlaire-wysiwyg-slash-menu, .adlaire-wysiwyg-suggestion-card, .adlaire-wysiwyg-assist-panel");
    if (!root) return false;
    const items = safeScopedQueryAll(root, "[data-adlaire-wysiwyg-slash-item], [data-adlaire-wysiwyg-suggestion], .adlaire-wysiwyg-slash-item, .adlaire-wysiwyg-suggestion, .adlaire-wysiwyg-assist-suggestion")
      .filter((option) => !option.hidden && !isDisabledInteraction(option));
    const current = items.indexOf(item);
    if (current < 0) return false;

    let next = current;
    if (event.key === "ArrowDown") next = current >= items.length - 1 ? 0 : current + 1;
    if (event.key === "ArrowUp") next = current <= 0 ? items.length - 1 : current - 1;
    if (event.key === "Home") next = 0;
    if (event.key === "End") next = items.length - 1;
    if (event.key === "Enter" || event.key === " ") {
      if (isNativeInteractive(item)) return false;
      event.preventDefault();
      item.click();
      return true;
    }
    if (next === current) return false;
    event.preventDefault();
    selectCompositeItem(items[next], ".adlaire-wysiwyg-slash-menu, .adlaire-wysiwyg-suggestion-card, .adlaire-wysiwyg-assist-panel", "[data-adlaire-wysiwyg-slash-item], [data-adlaire-wysiwyg-suggestion], .adlaire-wysiwyg-slash-item, .adlaire-wysiwyg-suggestion, .adlaire-wysiwyg-assist-suggestion");
    return true;
  }

  function moveWysiwygControlSelection(event: KeyboardEvent): boolean {
    const source = eventSourceElement(event);
    const item = source?.closest("[data-adlaire-wysiwyg-mode], [data-adlaire-wysiwyg-toolbar-group], [data-adlaire-wysiwyg-select]");
    if (!(item instanceof HTMLElement) || isDisabledInteraction(item) || isWysiwygDisabled(item)) return false;
    if (event.key === "Enter" || event.key === " ") {
      if (isNativeInteractive(item)) return false;
      event.preventDefault();
      item.click();
      return true;
    }
    if (event.key !== "ArrowLeft" && event.key !== "ArrowRight" && event.key !== "ArrowUp" && event.key !== "ArrowDown" && event.key !== "Home" && event.key !== "End") return false;

    const selector = item.hasAttribute("data-adlaire-wysiwyg-mode")
      ? "[data-adlaire-wysiwyg-mode]"
      : item.hasAttribute("data-adlaire-wysiwyg-toolbar-group")
        ? "[data-adlaire-wysiwyg-toolbar-group]"
        : "[data-adlaire-wysiwyg-select]";
    const root = item.closest(".adlaire-wysiwyg-toolbar") ?? editorRoot(item);
    const items = safeScopedQueryAll(root, selector).filter((option) => !option.hidden && !isDisabledInteraction(option));
    const current = items.indexOf(item);
    if (current < 0) return false;

    let next = current;
    if (event.key === "Home") next = 0;
    if (event.key === "End") next = items.length - 1;
    if (event.key === "ArrowLeft" || event.key === "ArrowUp") next = current <= 0 ? items.length - 1 : current - 1;
    if (event.key === "ArrowRight" || event.key === "ArrowDown") next = current >= items.length - 1 ? 0 : current + 1;
    const target = items[next];
    if (!target) return false;

    event.preventDefault();
    if (target.hasAttribute("data-adlaire-wysiwyg-mode")) selectMode(target);
    if (target.hasAttribute("data-adlaire-wysiwyg-toolbar-group")) selectToolbarGroup(target);
    if (target.hasAttribute("data-adlaire-wysiwyg-select")) selectBlock(target);
    target.focus();
    return true;
  }

  function initializeCompositeState(rootSelector: string, itemSelector: string): void {
    safeScopedQueryAll(document, rootSelector).forEach((root) => {
      const items = safeScopedQueryAll(root, itemSelector).filter((item) => !item.hidden && !isDisabledInteraction(item));
      const selected = items.find((item) => item.getAttribute("aria-selected") === "true" || item.classList.contains("is-selected")) ?? items[0];
      if (selected) selectCompositeItem(selected, rootSelector, itemSelector, false);
    });
  }

  function initializeWysiwygState(): void {
    safeScopedQueryAll(document, ".adlaire-wysiwyg").forEach((root) => {
      const mode = root.getAttribute("data-adlaire-wysiwyg-mode");
      if (mode) setMode(root, mode);

      const selectedToolbarGroup = safeScopedQueryAll(root, "[data-adlaire-wysiwyg-toolbar-group]")
        .find((item) => item.getAttribute("aria-pressed") === "true" || item.classList.contains("is-selected"));
      if (selectedToolbarGroup) selectToolbarGroup(selectedToolbarGroup);

      const selectedBlock = safeScopedQuery(root, "[data-adlaire-wysiwyg-select][aria-selected='true'], .adlaire-wysiwyg-block-selected");
      if (selectedBlock) selectBlock(selectedBlock);
    });
  }

  initializeWysiwygState();
  initializeCompositeState(".adlaire-wysiwyg-slash-menu", "[data-adlaire-wysiwyg-slash-item], .adlaire-wysiwyg-slash-item");
  initializeCompositeState(".adlaire-wysiwyg-suggestion-card, .adlaire-wysiwyg-assist-panel", "[data-adlaire-wysiwyg-suggestion], .adlaire-wysiwyg-suggestion, .adlaire-wysiwyg-assist-suggestion");
  safeScopedQueryAll(document, "[data-adlaire-wysiwyg-toggle][aria-expanded]").forEach((toggle) => {
    const panel = targetFor(toggle);
    if (panel) setPanelState(toggle, panel, toggle.getAttribute("aria-expanded") === "true");
  });
})();
