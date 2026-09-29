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
      if (trigger && !isDisabledInteraction(trigger)) return [trigger, binding];
    }
    return null;
  }

  function editorRoot(element: Element): Element | null {
    return element.closest(".adlaire-wysiwyg");
  }

  function setMode(root: Element, mode: string): void {
    root.setAttribute("data-adlaire-wysiwyg-mode", mode);
    safeScopedQueryAll(root, "[data-adlaire-wysiwyg-mode]").forEach((trigger) => {
      setBooleanAttribute(trigger, "aria-pressed", trigger.getAttribute("data-adlaire-wysiwyg-mode") === mode);
    });
  }

  function targetFor(trigger: Element): Element | null {
    const selector = trigger.getAttribute("data-adlaire-wysiwyg-target");
    return safeDocumentQuery(selector);
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
    moveCompositeSelection(event);
  });

  function selectMode(modeTrigger: Element): void {
    const root = editorRoot(modeTrigger);
    const mode = modeTrigger.getAttribute("data-adlaire-wysiwyg-mode");
    if (root && mode) setMode(root, mode);
  }

  function togglePanel(toggle: Element): void {
    const panel = targetFor(toggle);
    if (!panel) return;

    const open = toggle.getAttribute("aria-expanded") !== "true";
    setBooleanAttribute(toggle, "aria-expanded", open);
    setOpenState(panel as HTMLElement, open);
    panel.setAttribute("data-adlaire-disclosure-state", open ? "open" : "closed");
  }

  function selectToolbarGroup(trigger: Element): void {
    const root = trigger.closest(".adlaire-wysiwyg-toolbar") ?? editorRoot(trigger);
    if (!root) return;
    const group = trigger.getAttribute("data-adlaire-wysiwyg-toolbar-group") ?? "";
    safeScopedQueryAll(root, "[data-adlaire-wysiwyg-toolbar-group]").forEach((item) => {
      const selected = item === trigger;
      setBooleanAttribute(item, "aria-pressed", selected);
      item.classList.toggle("is-selected", selected);
    });
    root.setAttribute("data-adlaire-toolbar-group", group);
  }

  function selectBlock(selectable: Element): void {
    const root = editorRoot(selectable);
    if (!root) return;

    safeScopedQueryAll(root, ".adlaire-wysiwyg-block-selected, [data-adlaire-wysiwyg-select][aria-selected='true']").forEach((item) => {
      item.classList.remove("adlaire-wysiwyg-block-selected");
      setBooleanAttribute(item, "aria-selected", false);
    });
    selectable.classList.add("adlaire-wysiwyg-block-selected");
    setBooleanAttribute(selectable, "aria-selected", true);
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

  function initializeCompositeState(rootSelector: string, itemSelector: string): void {
    safeScopedQueryAll(document, rootSelector).forEach((root) => {
      const items = safeScopedQueryAll(root, itemSelector).filter((item) => !item.hidden && !isDisabledInteraction(item));
      const selected = items.find((item) => item.getAttribute("aria-selected") === "true" || item.classList.contains("is-selected")) ?? items[0];
      if (selected) selectCompositeItem(selected, rootSelector, itemSelector, false);
    });
  }

  initializeCompositeState(".adlaire-wysiwyg-slash-menu", "[data-adlaire-wysiwyg-slash-item], .adlaire-wysiwyg-slash-item");
  initializeCompositeState(".adlaire-wysiwyg-suggestion-card, .adlaire-wysiwyg-assist-panel", "[data-adlaire-wysiwyg-suggestion], .adlaire-wysiwyg-suggestion, .adlaire-wysiwyg-assist-suggestion");
  safeScopedQueryAll(document, "[data-adlaire-wysiwyg-toggle][aria-expanded]").forEach((toggle) => {
    const panel = targetFor(toggle);
    if (panel) panel.setAttribute("data-adlaire-disclosure-state", toggle.getAttribute("aria-expanded") === "true" ? "open" : "closed");
  });
})();
