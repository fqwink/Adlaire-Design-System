/// <reference lib="dom" />
/* Adlaire-Design form interactions */
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

  function normalize(value: unknown): string {
    return String(value || "").trim().toLowerCase();
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

  function safeScopedQuery<T extends Element = HTMLElement>(root: ParentNode | null | undefined, selector: string | null | undefined): T | null {
    if (!root || !selector) return null;
    try {
      return root.querySelector(selector) as T | null;
    } catch {
      return null;
    }
  }

  function safeScopedQueryAll<T extends Element = HTMLElement>(root: ParentNode | null | undefined, selector: string | null | undefined): T[] {
    if (!root || !selector) return [];
    try {
      return Array.from(root.querySelectorAll(selector)) as T[];
    } catch {
      return [];
    }
  }

  interface FormInteractionBinding {
    readonly selector: string;
    readonly handle: (trigger: Element) => void;
  }

  function hookSelector(attribute: string): string {
    return `[${attribute}]`;
  }

  function formBinding(attribute: string, handle: (trigger: Element) => void): FormInteractionBinding {
    return {
      selector: hookSelector(attribute),
      handle,
    };
  }

  function inputBinding(attribute: string, handle: (trigger: HTMLInputElement) => void): FormInteractionBinding {
    return formBinding(attribute, (trigger) => {
      if (trigger instanceof HTMLInputElement) handle(trigger);
    });
  }

  function fieldBinding(attribute: string, handle: (trigger: HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement) => void): FormInteractionBinding {
    return formBinding(attribute, (trigger) => {
      if (isSupportedField(trigger)) handle(trigger);
    });
  }

  function closestBoundTrigger<T extends { readonly selector: string }>(source: Element | null, bindings: readonly T[], startIndex = 0): [Element, T, number] | null {
    if (!source) return null;
    for (let index = startIndex; index < bindings.length; index += 1) {
      const binding = bindings[index];
      const trigger = source.closest(binding.selector);
      if (trigger) return [trigger, binding, index];
    }
    return null;
  }

  function isSupportedField(trigger: Element): trigger is HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement {
    return trigger instanceof HTMLInputElement || trigger instanceof HTMLTextAreaElement || trigger instanceof HTMLSelectElement;
  }

  function applyFilter(root: Element): void {
    const queryInput = safeScopedQuery<HTMLInputElement>(root, "[data-adlaire-filter-input]");
    const activeChip = safeScopedQuery(root, "[data-adlaire-filter-chip][aria-pressed='true']");
    const count = safeScopedQuery(root, "[data-adlaire-filter-count]");
    const empty = safeScopedQuery(root, "[data-adlaire-filter-empty]");
    const query = normalize(queryInput?.value ?? "");
    let filter = normalize(activeChip?.getAttribute("data-adlaire-filter-chip") ?? "");
    if (filter === "all") filter = "";
    let visibleCount = 0;

    safeScopedQueryAll(root, "[data-adlaire-filter-item]").forEach((item) => {
      const text = normalize(item.textContent);
      const group = normalize(item.getAttribute("data-adlaire-filter-item"));
      const groups = group ? group.split(/\s+/) : [];
      const visible = (!query || text.includes(query)) && (!filter || groups.includes(filter));
      item.hidden = !visible;
      if (visible) visibleCount += 1;
    });

    if (count) count.textContent = String(visibleCount);
    if (empty) {
      setOpenState(empty, visibleCount === 0);
    }
  }

  const formInputBindings: readonly FormInteractionBinding[] = [
    formBinding("data-adlaire-filter-input", handleFilterInput),
    inputBinding("data-adlaire-combobox-input", applyCombobox),
    fieldBinding("data-adlaire-validate", validateField),
  ] as const;

  const formClickBindings: readonly FormInteractionBinding[] = [
    formBinding("data-adlaire-combobox-option", selectComboboxOption),
    formBinding("data-adlaire-multi-select-option", toggleMultiSelectOption),
    formBinding("data-adlaire-date-preset", applyDatePreset),
    formBinding("data-adlaire-filter-chip", selectFilterChip),
  ] as const;

  const formChangeBindings: readonly FormInteractionBinding[] = [
    inputBinding("data-adlaire-file-input", updateFileInput),
    inputBinding("data-adlaire-toggle-input", syncToggleInput),
  ] as const;

  function handleEveryFormInteraction(source: Element | null, bindings: readonly FormInteractionBinding[]): void {
    let match = closestBoundTrigger(source, bindings);
    while (match) {
      const [trigger, binding, index] = match;
      binding.handle(trigger);
      match = closestBoundTrigger(source, bindings, index + 1);
    }
  }

  function handleFirstFormInteraction(source: Element | null, bindings: readonly FormInteractionBinding[]): boolean {
    const match = closestBoundTrigger(source, bindings);
    if (!match) return false;
    const [trigger, binding] = match;
    binding.handle(trigger);
    return true;
  }

  document.addEventListener("input", (event) => {
    handleEveryFormInteraction(eventSourceElement(event), formInputBindings);
  });

  document.addEventListener("click", (event) => {
    handleFirstFormInteraction(eventSourceElement(event), formClickBindings);
  });

  document.addEventListener("change", (event) => {
    handleEveryFormInteraction(eventSourceElement(event), formChangeBindings);
  });

  function handleFilterInput(trigger: Element): void {
    const root = trigger.closest("[data-adlaire-filter]");
    if (root) applyFilter(root);
  }

  function selectFilterChip(chip: Element): void {
    const root = chip.closest("[data-adlaire-filter]");
    if (!root) return;

    safeScopedQueryAll(root, "[data-adlaire-filter-chip]").forEach((item) => {
      setBooleanAttribute(item, "aria-pressed", item === chip);
    });
    applyFilter(root);
  }

  function updateFileInput(fileInput: HTMLInputElement): void {
    const selector = fileInput.getAttribute("data-adlaire-file-output");
    const output = safeDocumentQuery(selector);
    const emptyText = fileInput.getAttribute("data-adlaire-file-empty") ?? "No file selected";
    const names = Array.from(fileInput.files ?? []).map((file) => file.name);
    if (output) output.textContent = names.length > 0 ? names.join(", ") : emptyText;
  }

  function syncToggleInput(toggleInput: HTMLInputElement): void {
    const selector = toggleInput.getAttribute("data-adlaire-toggle-input");
    const toggle = safeDocumentQuery(selector);
    if (toggle) setBooleanAttribute(toggle, "aria-checked", toggleInput.checked);
  }

  function validateField(field: HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement): void {
    const wrapper = field?.closest(".adlaire-field");
    if (!field || !wrapper) return;

    const invalid = field.hasAttribute("required") && normalize(field.value) === "";
    setBooleanAttribute(field, "aria-invalid", invalid);
    wrapper.classList.toggle("adlaire-field-error", invalid);
    wrapper.classList.toggle("adlaire-field-success", !invalid);
    updateValidationSummary(field);
  }

  function updateValidationSummary(field: Element): void {
    const form = field.closest("form");
    const summary = safeScopedQuery(form, "[data-adlaire-validate-summary]");
    if (!form || !summary) return;

    const invalidFields = safeScopedQueryAll<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>(form, "[data-adlaire-validate]")
      .filter((item) => item.getAttribute("aria-invalid") === "true");
    setOpenState(summary, invalidFields.length > 0);
    summary.textContent = invalidFields.length === 0
      ? ""
      : invalidFields.map((item) => fieldLabel(item)).join(", ");
  }

  function fieldLabel(field: HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement): string {
    const label = field.closest("label");
    const labelText = label?.textContent?.replace(field.value, "").trim();
    return labelText || field.getAttribute("aria-label") || field.name || "Field";
  }

  function applyCombobox(input: HTMLInputElement): void {
    const root = input.closest("[data-adlaire-combobox]");
    const list = safeScopedQuery(root, "[role='listbox'], .adlaire-combobox-listbox");
    if (!root || !list) return;

    const query = normalize(input.value);
    let visibleCount = 0;
    safeScopedQueryAll(root, "[data-adlaire-combobox-option]").forEach((option) => {
      const visible = !query || normalize(option.textContent).includes(query);
      option.hidden = !visible;
      if (visible) visibleCount += 1;
    });
    list.hidden = visibleCount === 0;
    setBooleanAttribute(input, "aria-expanded", visibleCount > 0);
  }

  function selectComboboxOption(option: Element): void {
    const root = option.closest("[data-adlaire-combobox]");
    const input = safeScopedQuery<HTMLInputElement>(root, "[data-adlaire-combobox-input]");
    const list = safeScopedQuery(root, "[role='listbox'], .adlaire-combobox-listbox");
    if (!root || !input) return;

    const value = option.getAttribute("data-adlaire-combobox-option") ?? option.textContent?.trim() ?? "";
    input.value = value;
    setBooleanAttribute(input, "aria-expanded", false);
    safeScopedQueryAll(root, "[data-adlaire-combobox-option]").forEach((item) => {
      setBooleanAttribute(item, "aria-selected", item === option);
    });
    if (list) list.hidden = true;
  }

  function toggleMultiSelectOption(option: Element): void {
    const root = option.closest("[data-adlaire-multi-select]");
    if (!root) return;

    const selected = option.getAttribute("aria-selected") !== "true";
    setBooleanAttribute(option, "aria-selected", selected);
    updateMultiSelectOutput(root);
  }

  function updateMultiSelectOutput(root: Element): void {
    const selector = root.getAttribute("data-adlaire-multi-select-output");
    const output = safeDocumentQuery(selector);
    if (!output) return;

    const selected = safeScopedQueryAll(root, "[data-adlaire-multi-select-option][aria-selected='true']")
      .map((item) => item.getAttribute("data-adlaire-multi-select-option") ?? item.textContent?.trim() ?? "")
      .filter((value) => value !== "");
    output.textContent = selected.length > 0
      ? selected.join(", ")
      : root.getAttribute("data-adlaire-multi-select-empty") ?? "No options selected";
  }

  function applyDatePreset(preset: Element): void {
    const root = preset.closest("[data-adlaire-date-picker]");
    if (!root) return;

    safeScopedQueryAll(root, "[data-adlaire-date-preset]").forEach((item) => {
      setBooleanAttribute(item, "aria-pressed", item === preset);
    });
    setInputValue(root, preset.getAttribute("data-adlaire-date-start"), preset.getAttribute("data-adlaire-date-start-value"));
    setInputValue(root, preset.getAttribute("data-adlaire-date-end"), preset.getAttribute("data-adlaire-date-end-value"));
  }

  function setInputValue(root: Element, selector: string | null, value: string | null): void {
    if (!selector || value === null) return;
    const input = safeScopedQuery<HTMLInputElement>(root, selector);
    if (input) input.value = value;
  }
})();
