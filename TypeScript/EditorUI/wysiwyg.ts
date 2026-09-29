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
      if (trigger) return [trigger, binding];
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
  ] as const;

  const wysiwygSelectionClickBindings: readonly WysiwygClickBinding[] = [
    wysiwygClickBinding("data-adlaire-wysiwyg-select", selectBlock),
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
})();
