/// <reference lib="dom" />
/* Adlaire-Design WYSIWYG editor interactions */
(() => {
  "use strict";

  function targetElement(target: EventTarget | null): Element | null {
    return target instanceof Element ? target : null;
  }

  interface WysiwygInteractionBinding {
    readonly selector: string;
    readonly handle: (trigger: Element) => void;
  }

  function hookSelector(attribute: string): string {
    return `[${attribute}]`;
  }

  function wysiwygBinding(attribute: string, handle: (trigger: Element) => void): WysiwygInteractionBinding {
    return {
      selector: hookSelector(attribute),
      handle,
    };
  }

  function editorRoot(element: Element): Element | null {
    return element.closest(".adlaire-wysiwyg");
  }

  function setMode(root: Element, mode: string): void {
    root.setAttribute("data-adlaire-wysiwyg-mode", mode);
    root.querySelectorAll("[data-adlaire-wysiwyg-mode]").forEach((trigger) => {
      trigger.setAttribute("aria-pressed", trigger.getAttribute("data-adlaire-wysiwyg-mode") === mode ? "true" : "false");
    });
  }

  function targetFor(trigger: Element): Element | null {
    const selector = trigger.getAttribute("data-adlaire-wysiwyg-target");
    return selector ? document.querySelector(selector) : null;
  }

  const wysiwygPrimaryClickBindings: readonly WysiwygInteractionBinding[] = [
    wysiwygBinding("data-adlaire-wysiwyg-mode", selectMode),
    wysiwygBinding("data-adlaire-wysiwyg-toggle", togglePanel),
  ] as const;

  const wysiwygSelectionClickBindings: readonly WysiwygInteractionBinding[] = [
    wysiwygBinding("data-adlaire-wysiwyg-select", selectBlock),
  ] as const;

  function handleFirstWysiwygBinding(source: Element | null, bindings: readonly WysiwygInteractionBinding[]): boolean {
    if (!source) return false;
    for (const binding of bindings) {
      const trigger = source.closest(binding.selector);
      if (!trigger) continue;
      binding.handle(trigger);
      return true;
    }
    return false;
  }

  document.addEventListener("click", (event) => {
    const target = targetElement(event.target);
    handleFirstWysiwygBinding(target, wysiwygPrimaryClickBindings);
    handleFirstWysiwygBinding(target, wysiwygSelectionClickBindings);
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
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    (panel as HTMLElement).hidden = !open;
    panel.classList.toggle("is-open", open);
  }

  function selectBlock(selectable: Element): void {
    const root = editorRoot(selectable);
    if (!root) return;

    root.querySelectorAll(".adlaire-wysiwyg-block-selected, [data-adlaire-wysiwyg-select][aria-selected='true']").forEach((item) => {
      item.classList.remove("adlaire-wysiwyg-block-selected");
      item.setAttribute("aria-selected", "false");
    });
    selectable.classList.add("adlaire-wysiwyg-block-selected");
    selectable.setAttribute("aria-selected", "true");
  }
})();
