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
    return String(value ?? "").trim().toLowerCase();
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

  function setOptionalText(target: HTMLElement | null, value: string): void {
    if (target) target.textContent = value;
  }

  function syncStatusTarget(target: HTMLElement | null): void {
    if (!target) return;
    if (!target.hasAttribute("aria-live")) target.setAttribute("aria-live", "polite");
    if (!target.hasAttribute("role")) target.setAttribute("role", "status");
  }

  function finiteNumber(value: string | number | null | undefined, fallback: number): number {
    const parsed = Number(value);
    return Number.isFinite(parsed) ? parsed : fallback;
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
      if (trigger && !isDisabledInteraction(trigger)) return [trigger, binding, index];
    }
    return null;
  }

  function isSupportedField(trigger: Element): trigger is HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement {
    return trigger instanceof HTMLInputElement || trigger instanceof HTMLTextAreaElement || trigger instanceof HTMLSelectElement;
  }

  function isReadOnlyField(field: HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement): boolean {
    return (field instanceof HTMLInputElement || field instanceof HTMLTextAreaElement) && field.readOnly;
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
    inputBinding("data-adlaire-range-input", syncRangeInput),
    fieldBinding("data-adlaire-character-count", updateCharacterCount),
    fieldBinding("data-adlaire-validate", validateField),
  ] as const;

  const formClickBindings: readonly FormInteractionBinding[] = [
    formBinding("data-adlaire-combobox-option", selectComboboxOption),
    formBinding("data-adlaire-multi-select-option", toggleMultiSelectOption),
    formBinding("data-adlaire-segmented-option", selectSegmentedOption),
    formBinding("data-adlaire-radio-card", selectRadioCard),
    formBinding("data-adlaire-switch-item", toggleSwitchItem),
    formBinding("data-adlaire-stepper-action", applyStepperAction),
    formBinding("data-adlaire-token-add", addTokenFromTrigger),
    formBinding("data-adlaire-token-remove", removeToken),
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

  document.addEventListener("keydown", (event) => {
    if (closeFormPopup(event)) return;
    if (moveFormCompositeSelection(event)) return;
    activateFormKeyboardTrigger(event);
  });

  document.addEventListener("reset", () => {
    window.setTimeout(initializeFormState, 0);
  });

  function closeFormPopup(event: KeyboardEvent): boolean {
    if (event.key !== "Escape") return false;
    const source = eventSourceElement(event);
    const root = source?.closest("[data-adlaire-combobox]");
    if (!root) return false;
    const input = safeScopedQuery<HTMLInputElement>(root, "[data-adlaire-combobox-input]");
    const list = safeScopedQuery(root, "[role='listbox'], .adlaire-combobox-listbox");
    if (!input || !list || list.hidden) return false;
    event.preventDefault();
    list.hidden = true;
    input.removeAttribute("aria-activedescendant");
    setBooleanAttribute(input, "aria-expanded", false);
    input.focus();
    return true;
  }

  function formRovingKeys(event: KeyboardEvent): boolean {
    return event.key === "ArrowLeft" ||
      event.key === "ArrowRight" ||
      event.key === "ArrowUp" ||
      event.key === "ArrowDown" ||
      event.key === "Home" ||
      event.key === "End";
  }

  function formRovingItems(root: ParentNode | null | undefined, selector: string): HTMLElement[] {
    return safeScopedQueryAll<HTMLElement>(root, selector).filter((item) => !item.hidden && !isDisabledInteraction(item));
  }

  function syncRovingTabIndex(root: ParentNode | null | undefined, selector: string, selectedItem?: Element | null): void {
    const items = formRovingItems(root, selector);
    const selected = selectedItem instanceof HTMLElement
      ? selectedItem
      : items.find((item) => item.getAttribute("aria-selected") === "true" || item.getAttribute("aria-checked") === "true" || item.getAttribute("aria-pressed") === "true" || item.classList.contains("is-selected")) ?? items[0];
    items.forEach((item) => {
      if (!isNativeInteractive(item)) item.setAttribute("tabindex", item === selected ? "0" : "-1");
    });
  }

  function rovingIndex(event: KeyboardEvent, currentIndex: number, total: number): number {
    if (event.key === "Home") return 0;
    if (event.key === "End") return total - 1;
    if (event.key === "ArrowLeft" || event.key === "ArrowUp") return currentIndex <= 0 ? total - 1 : currentIndex - 1;
    if (event.key === "ArrowRight" || event.key === "ArrowDown") return currentIndex >= total - 1 ? 0 : currentIndex + 1;
    return currentIndex;
  }

  function moveFormCompositeSelection(event: KeyboardEvent): boolean {
    if (!formRovingKeys(event)) return false;
    const source = eventSourceElement(event);
    const item = source?.closest("[data-adlaire-combobox-option], [data-adlaire-multi-select-option], [data-adlaire-segmented-option], [data-adlaire-radio-card], [data-adlaire-switch-item], [data-adlaire-filter-chip]");
    if (!(item instanceof HTMLElement)) return false;

    const config = formCompositeConfig(item);
    if (!config) return false;
    const items = formRovingItems(config.root, config.selector);
    const current = items.indexOf(item);
    if (current < 0) return false;
    const next = items[rovingIndex(event, current, items.length)];
    if (!next) return false;

    event.preventDefault();
    syncRovingTabIndex(config.root, config.selector, next);
    if (config.root && config.selector === "[data-adlaire-combobox-option]") syncComboboxActiveDescendant(config.root, next);
    next.focus();
    config.select?.(next);
    return true;
  }

  function formCompositeConfig(item: Element): { readonly root: Element | null; readonly selector: string; readonly select?: (next: Element) => void } | null {
    if (item.matches("[data-adlaire-combobox-option]")) {
      return { root: item.closest("[data-adlaire-combobox]"), selector: "[data-adlaire-combobox-option]" };
    }
    if (item.matches("[data-adlaire-multi-select-option]")) {
      return { root: item.closest("[data-adlaire-multi-select]"), selector: "[data-adlaire-multi-select-option]" };
    }
    if (item.matches("[data-adlaire-segmented-option]")) {
      return { root: item.closest("[data-adlaire-segmented-control]"), selector: "[data-adlaire-segmented-option]", select: selectSegmentedOption };
    }
    if (item.matches("[data-adlaire-radio-card]")) {
      return { root: item.closest("[data-adlaire-radio-card-group]"), selector: "[data-adlaire-radio-card]", select: selectRadioCard };
    }
    if (item.matches("[data-adlaire-switch-item]")) {
      return { root: item.closest("[data-adlaire-switch-group]"), selector: "[data-adlaire-switch-item]" };
    }
    if (item.matches("[data-adlaire-filter-chip]")) {
      return { root: item.closest("[data-adlaire-filter]"), selector: "[data-adlaire-filter-chip]", select: selectFilterChip };
    }
    return null;
  }

  function activateFormKeyboardTrigger(event: KeyboardEvent): boolean {
    if (event.key !== "Enter" && event.key !== " ") return false;
    const source = eventSourceElement(event);
    if (source && isNativeInteractive(source)) return false;
    const trigger = source?.closest(formClickBindings.map((binding) => binding.selector).join(", "));
    if (!(trigger instanceof HTMLElement) || isDisabledInteraction(trigger) || isNativeInteractive(trigger)) return false;
    event.preventDefault();
    trigger.click();
    return true;
  }

  function handleFilterInput(trigger: Element): void {
    const root = trigger.closest("[data-adlaire-filter]");
    if (root) applyFilter(root);
  }

  function selectFilterChip(chip: Element): void {
    const root = chip.closest("[data-adlaire-filter]");
    if (!root) return;

    syncFilterChipState(root, chip);
    applyFilter(root);
  }

  function syncFilterChipState(root: Element, selectedChip: Element | null): void {
    safeScopedQueryAll(root, "[data-adlaire-filter-chip]").forEach((item) => {
      const selected = selectedChip ? item === selectedChip : item.getAttribute("aria-pressed") === "true" || item.classList.contains("is-selected");
      setBooleanAttribute(item, "aria-pressed", selected);
      item.classList.toggle("is-selected", selected);
    });
    syncRovingTabIndex(root, "[data-adlaire-filter-chip]", selectedChip);
  }

  function updateFileInput(fileInput: HTMLInputElement): void {
    const selector = fileInput.getAttribute("data-adlaire-file-output");
    const output = safeDocumentQuery(selector);
    const emptyText = fileInput.getAttribute("data-adlaire-file-empty") ?? "No file selected";
    const names = Array.from(fileInput.files ?? []).map((file) => file.name);
    fileInput.setAttribute("data-adlaire-file-count", String(names.length));
    if (output) output.textContent = names.length > 0 ? names.join(", ") : emptyText;
    syncStatusTarget(output);
  }

  function syncToggleInput(toggleInput: HTMLInputElement): void {
    const selector = toggleInput.getAttribute("data-adlaire-toggle-input");
    const toggle = safeDocumentQuery(selector);
    if (!toggle) return;
    setBooleanAttribute(toggle, "aria-checked", toggleInput.checked);
    if (toggle.hasAttribute("aria-pressed")) setBooleanAttribute(toggle, "aria-pressed", toggleInput.checked);
    toggle.classList.toggle("is-selected", toggleInput.checked);
  }

  function validateField(field: HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement): void {
    const wrapper = field?.closest(".adlaire-field");
    if (!field || !wrapper) return;

    syncValidationState(field, true);
  }

  function syncValidationState(field: HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement, markInteraction: boolean): void {
    const wrapper = field.closest(".adlaire-field");
    if (!wrapper) return;

    if (markInteraction) markFieldInteraction(field);
    const neutral = field.disabled || isReadOnlyField(field);
    const invalid = !neutral && !field.validity.valid;
    setBooleanAttribute(field, "aria-invalid", invalid);
    wrapper.classList.toggle("adlaire-field-error", invalid);
    wrapper.classList.toggle("adlaire-field-success", !neutral && !invalid);
    const message = field.validity.valueMissing ? `${fieldLabel(field)} is required` : field.validationMessage || `${fieldLabel(field)} is invalid`;
    setOptionalText(safeDocumentQuery(field.getAttribute("data-adlaire-validation-message")), invalid ? message : "");
    updateValidationSummary(field);
  }

  function markFieldInteraction(field: HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement): void {
    const wrapper = field.closest(".adlaire-field");
    if (!wrapper) return;
    wrapper.setAttribute("data-adlaire-field-touched", "true");
    wrapper.setAttribute("data-adlaire-field-dirty", normalize(fieldStateValue(field)) !== normalize(defaultFieldValue(field)));
  }

  function fieldStateValue(field: HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement): string {
    if (field instanceof HTMLInputElement && (field.type === "checkbox" || field.type === "radio")) {
      return field.checked ? field.value || "on" : "";
    }
    return field.value;
  }

  function defaultFieldValue(field: HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement): string {
    if (field instanceof HTMLSelectElement) {
      return Array.from(field.options).find((option) => option.defaultSelected)?.value ?? "";
    }
    if (field instanceof HTMLInputElement && (field.type === "checkbox" || field.type === "radio")) {
      return field.defaultChecked ? field.value || "on" : "";
    }
    return field.defaultValue;
  }

  function updateValidationSummary(field: Element): void {
    const form = field.closest("form");
    const summary = safeScopedQuery(form, "[data-adlaire-validate-summary]");
    if (!form || !summary) return;

    if (!summary.hasAttribute("aria-live")) summary.setAttribute("aria-live", "polite");
    if (!summary.hasAttribute("role")) summary.setAttribute("role", "alert");
    const invalidFields = safeScopedQueryAll<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>(form, "[data-adlaire-validate]")
      .filter((item) => item.getAttribute("aria-invalid") === "true");
    setOpenState(summary, invalidFields.length > 0);
    summary.textContent = invalidFields.length === 0
      ? ""
      : invalidFields.map((item) => fieldLabel(item)).join(", ");
  }

  function fieldLabel(field: HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement): string {
    const label = field.closest("label");
    const labelText = label
      ? Array.from(label.childNodes)
        .filter((node) => node.nodeType === Node.TEXT_NODE)
        .map((node) => node.textContent?.trim() ?? "")
        .filter((text) => text !== "")
        .join(" ")
      : "";
    return labelText || field.getAttribute("aria-label") || field.name || "Field";
  }

  function applyCombobox(input: HTMLInputElement): void {
    syncComboboxState(input, true);
  }

  function syncComboboxState(input: HTMLInputElement, allowEmptyQuery: boolean): void {
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
    syncComboboxOptionState(root, input.value);
    const expanded = visibleCount > 0 && (allowEmptyQuery || query !== "");
    list.hidden = !expanded;
    setBooleanAttribute(input, "aria-expanded", expanded);
    if (!expanded) {
      input.removeAttribute("aria-activedescendant");
    } else {
      syncComboboxActiveDescendant(root);
    }
  }

  function syncComboboxOptionState(root: Element, value: string): void {
    const selectedValue = normalize(value);
    safeScopedQueryAll(root, "[data-adlaire-combobox-option]").forEach((option) => {
      const optionValue = option.getAttribute("data-adlaire-combobox-option") ?? option.textContent?.trim() ?? "";
      const selected = selectedValue !== "" && normalize(optionValue) === selectedValue;
      setBooleanAttribute(option, "aria-selected", selected);
      option.classList.toggle("is-selected", selected);
    });
    syncRovingTabIndex(root, "[data-adlaire-combobox-option]");
  }

  function syncComboboxActiveDescendant(root: Element, activeOption?: Element | null): void {
    const input = safeScopedQuery<HTMLInputElement>(root, "[data-adlaire-combobox-input]");
    if (!input) return;
    const active = activeOption ?? safeScopedQuery(root, "[data-adlaire-combobox-option][aria-selected='true']:not([hidden]), [data-adlaire-combobox-option].is-selected:not([hidden])") ?? formRovingItems(root, "[data-adlaire-combobox-option]")[0];
    if (active?.id) {
      input.setAttribute("aria-activedescendant", active.id);
    } else {
      input.removeAttribute("aria-activedescendant");
    }
  }

  function selectComboboxOption(option: Element): void {
    const root = option.closest("[data-adlaire-combobox]");
    const input = safeScopedQuery<HTMLInputElement>(root, "[data-adlaire-combobox-input]");
    const list = safeScopedQuery(root, "[role='listbox'], .adlaire-combobox-listbox");
    if (!root || !input) return;

    const value = option.getAttribute("data-adlaire-combobox-option") ?? option.textContent?.trim() ?? "";
    input.value = value;
    setBooleanAttribute(input, "aria-expanded", false);
    input.removeAttribute("aria-activedescendant");
    syncComboboxOptionState(root, value);
    if (list) list.hidden = true;
    input.dispatchEvent(new Event("input", { bubbles: true }));
    input.dispatchEvent(new Event("change", { bubbles: true }));
  }

  function toggleMultiSelectOption(option: Element): void {
    const root = option.closest("[data-adlaire-multi-select]");
    if (!root) return;

    const selected = option.getAttribute("aria-selected") !== "true";
    setBooleanAttribute(option, "aria-selected", selected);
    option.classList.toggle("is-selected", selected);
    updateMultiSelectOutput(root);
  }

  function syncMultiSelectState(root: Element): void {
    safeScopedQueryAll(root, "[data-adlaire-multi-select-option]").forEach((item) => {
      const selected = item.getAttribute("aria-selected") === "true" || item.classList.contains("is-selected");
      setBooleanAttribute(item, "aria-selected", selected);
      item.classList.toggle("is-selected", selected);
    });
    syncRovingTabIndex(root, "[data-adlaire-multi-select-option]");
    updateMultiSelectOutput(root);
  }

  function updateMultiSelectOutput(root: Element): void {
    const selector = root.getAttribute("data-adlaire-multi-select-output");
    const output = safeDocumentQuery(selector);
    if (!output) return;

    const selected = safeScopedQueryAll(root, "[data-adlaire-multi-select-option][aria-selected='true']")
      .map((item) => item.getAttribute("data-adlaire-multi-select-option") ?? item.textContent?.trim() ?? "")
      .filter((value) => value !== "");
    syncStatusTarget(output);
    output.textContent = selected.length > 0
      ? selected.join(", ")
      : root.getAttribute("data-adlaire-multi-select-empty") ?? "No options selected";
  }

  function selectSegmentedOption(option: Element): void {
    const root = option.closest("[data-adlaire-segmented-control]");
    if (!root) return;

    const value = option.getAttribute("data-adlaire-segmented-option") ?? option.textContent?.trim() ?? "";
    safeScopedQueryAll(root, "[data-adlaire-segmented-option]").forEach((item) => {
      const selected = item === option;
      setBooleanAttribute(item, "aria-pressed", selected);
      item.setAttribute("aria-selected", booleanState(selected));
      item.setAttribute("tabindex", selected ? "0" : "-1");
      item.classList.toggle("is-selected", selected);
    });

    const output = safeDocumentQuery(root.getAttribute("data-adlaire-segmented-output"));
    if (output && value) output.textContent = value;
  }

  function selectRadioCard(card: Element): void {
    const root = card.closest("[data-adlaire-radio-card-group]");
    if (!root) return;

    const value = card.getAttribute("data-adlaire-radio-card") ?? card.textContent?.trim() ?? "";
    safeScopedQueryAll(root, "[data-adlaire-radio-card]").forEach((item) => {
      const selected = item === card;
      setBooleanAttribute(item, "aria-checked", selected);
      item.setAttribute("tabindex", selected ? "0" : "-1");
      item.classList.toggle("is-selected", selected);
    });

    const output = safeDocumentQuery(root.getAttribute("data-adlaire-radio-card-output"));
    if (output && value) output.textContent = value;
  }

  function toggleSwitchItem(item: Element): void {
    const root = item.closest("[data-adlaire-switch-group]");
    const active = item.getAttribute("aria-checked") !== "true";
    setSwitchItemState(item, active);
    updateSwitchGroupOutput(root);
  }

  function setSwitchItemState(item: Element, active: boolean): void {
    setBooleanAttribute(item, "aria-checked", active);
    setBooleanAttribute(item, "aria-pressed", active);
    item.classList.toggle("is-selected", active);
  }

  function updateSwitchGroupOutput(root: Element | null): void {
    if (!root) return;

    const output = safeDocumentQuery(root.getAttribute("data-adlaire-switch-output"));
    if (!output) return;

    const activeItems = safeScopedQueryAll(root, "[data-adlaire-switch-item][aria-checked='true']")
      .map((item) => item.getAttribute("data-adlaire-switch-item") ?? item.textContent?.trim() ?? "")
      .filter((value) => value !== "");
    syncStatusTarget(output);
    output.textContent = activeItems.length > 0 ? activeItems.join(", ") : root.getAttribute("data-adlaire-switch-empty") ?? "None";
  }

  function syncRangeInput(input: HTMLInputElement): void {
    const min = finiteNumber(input.min, 0);
    const max = finiteNumber(input.max, 100);
    const value = Math.max(min, Math.min(max, finiteNumber(input.value, min)));
    const denominator = max > min ? max - min : 1;
    const percent = Math.max(0, Math.min(100, ((value - min) / denominator) * 100));
    const root = input.closest<HTMLElement>("[data-adlaire-range], .adlaire-range-field");
    if (String(value) !== input.value && !input.matches(":focus")) input.value = String(value);
    input.setAttribute("data-adlaire-range-value", String(value));
    input.setAttribute("aria-valuenow", String(value));
    input.setAttribute("aria-valuetext", formatRangeValue(input, value));
    if (root) root.style.setProperty("--adlaire-range-value", `${percent}%`);
    setOptionalText(safeDocumentQuery(input.getAttribute("data-adlaire-range-output")), formatRangeValue(input, value));
  }

  function formatRangeValue(input: HTMLInputElement, value: number): string {
    const prefix = input.getAttribute("data-adlaire-range-prefix") ?? "";
    const suffix = input.getAttribute("data-adlaire-range-suffix") ?? "";
    return `${prefix}${Number.isFinite(value) ? value : input.value}${suffix}`;
  }

  function applyStepperAction(trigger: Element): void {
    const root = trigger.closest("[data-adlaire-stepper], .adlaire-stepper-control, .adlaire-stepper");
    const input = safeScopedQuery<HTMLInputElement>(root, trigger.getAttribute("data-adlaire-stepper-input") ?? "input[type='number']");
    if (!input || input.disabled || input.readOnly) return;

    const min = input.min === "" ? Number.NEGATIVE_INFINITY : finiteNumber(input.min, Number.NEGATIVE_INFINITY);
    const max = input.max === "" ? Number.POSITIVE_INFINITY : finiteNumber(input.max, Number.POSITIVE_INFINITY);
    const parsedStep = finiteNumber(input.step, 1);
    const step = parsedStep > 0 ? parsedStep : 1;
    const direction = trigger.getAttribute("data-adlaire-stepper-action");
    const current = finiteNumber(input.value, Number.isFinite(min) ? min : 0);
    const delta = direction === "decrement" ? -step : step;
    const next = Math.min(max, Math.max(min, current + delta));
    input.value = String(Number.isFinite(next) ? next : current);
    syncStepperOutput(input, root);
    input.dispatchEvent(new Event("input", { bubbles: true }));
    input.dispatchEvent(new Event("change", { bubbles: true }));
  }

  function syncStepperOutput(input: HTMLInputElement, root: Element | null): void {
    const output = safeDocumentQuery(input.getAttribute("data-adlaire-stepper-output")) ?? safeScopedQuery(root, "[data-adlaire-stepper-output]");
    input.setAttribute("aria-valuenow", input.value);
    input.setAttribute("aria-valuetext", input.value);
    syncStatusTarget(output);
    setOptionalText(output, input.value);
  }

  function addTokenFromTrigger(trigger: Element): void {
    const root = trigger.closest("[data-adlaire-token-input], .adlaire-token-input");
    const input = safeScopedQuery<HTMLInputElement>(root, trigger.getAttribute("data-adlaire-token-input") ?? "input");
    const list = safeScopedQuery(root, trigger.getAttribute("data-adlaire-token-list") ?? ".adlaire-token-list");
    const value = input?.value.trim() ?? "";
    if (!root || !input || !list || input.disabled || input.readOnly || value === "") return;
    const duplicate = safeScopedQueryAll(list, "[data-adlaire-token-remove], .adlaire-token")
      .find((item) => normalize(item.getAttribute("data-adlaire-token-remove") ?? item.textContent) === normalize(value));
    if (duplicate instanceof HTMLElement) {
      duplicate.focus();
      input.value = "";
      updateTokenCount(root);
      return;
    }

    const token = document.createElement("button");
    token.type = "button";
    token.className = "adlaire-token";
    token.setAttribute("data-adlaire-token-remove", value);
    token.setAttribute("aria-label", `Remove ${value}`);
    token.textContent = value;
    list.appendChild(token);
    input.value = "";
    updateTokenCount(root);
    input.dispatchEvent(new Event("input", { bubbles: true }));
    input.dispatchEvent(new Event("change", { bubbles: true }));
    input.focus();
  }

  function removeToken(trigger: Element): void {
    const root = trigger.closest("[data-adlaire-token-input], .adlaire-token-input");
    const removable = trigger.matches(".adlaire-token") ? trigger : trigger.closest(".adlaire-token") ?? trigger;
    const nextFocus = removable.nextElementSibling ?? removable.previousElementSibling ?? safeScopedQuery(root, "input");
    removable.remove();
    updateTokenCount(root);
    if (nextFocus instanceof HTMLElement) nextFocus.focus();
  }

  function updateTokenCount(root: Element | null): void {
    if (!root) return;
    const count = new Set(safeScopedQueryAll(root, "[data-adlaire-token-remove], .adlaire-token")).size;
    root.setAttribute("data-adlaire-token-count-value", String(count));
    setOptionalText(safeDocumentQuery(root.getAttribute("data-adlaire-token-count")), String(count));
  }

  function syncCharacterCount(field: HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement, markInteraction: boolean): void {
    if (markInteraction) markFieldInteraction(field);
    const output = safeDocumentQuery(field.getAttribute("data-adlaire-character-count"));
    const limit = field instanceof HTMLInputElement || field instanceof HTMLTextAreaElement ? field.maxLength : -1;
    const length = field.value.length;
    const value = limit > 0 ? `${length}/${limit}` : String(length);
    syncStatusTarget(output);
    setOptionalText(output, value);
  }

  function updateCharacterCount(field: HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement): void {
    syncCharacterCount(field, true);
  }

  function applyDatePreset(preset: Element): void {
    syncDatePreset(preset, true);
  }

  function syncDatePreset(preset: Element, dispatchEvents: boolean): void {
    const root = preset.closest("[data-adlaire-date-picker]");
    if (!root) return;

    safeScopedQueryAll(root, "[data-adlaire-date-preset]").forEach((item) => {
      const selected = item === preset;
      setBooleanAttribute(item, "aria-pressed", selected);
      item.classList.toggle("is-selected", selected);
    });
    setInputValue(root, preset.getAttribute("data-adlaire-date-start"), preset.getAttribute("data-adlaire-date-start-value"), dispatchEvents);
    setInputValue(root, preset.getAttribute("data-adlaire-date-end"), preset.getAttribute("data-adlaire-date-end-value"), dispatchEvents);
  }

  function setInputValue(root: Element, selector: string | null, value: string | null, dispatchEvents: boolean): void {
    if (!selector || value === null) return;
    const input = safeScopedQuery<HTMLInputElement>(root, selector);
    if (!input || input.disabled || input.readOnly) return;
    input.value = value;
    if (!dispatchEvents) return;
    input.dispatchEvent(new Event("input", { bubbles: true }));
    input.dispatchEvent(new Event("change", { bubbles: true }));
  }

  function initializeFormState(): void {
    safeScopedQueryAll(document, "[data-adlaire-filter]").forEach((root) => {
      const selected = safeScopedQuery(root, "[data-adlaire-filter-chip][aria-pressed='true'], [data-adlaire-filter-chip].is-selected");
      syncFilterChipState(root, selected);
      applyFilter(root);
    });
    safeScopedQueryAll<HTMLInputElement>(document, "[data-adlaire-combobox-input]").forEach((input) => {
      syncComboboxState(input, false);
    });
    safeScopedQueryAll(document, "[data-adlaire-multi-select]").forEach(syncMultiSelectState);
    safeScopedQueryAll(document, "[data-adlaire-segmented-control]").forEach((root) => {
      const selected = safeScopedQuery(root, "[data-adlaire-segmented-option][aria-pressed='true'], [data-adlaire-segmented-option][aria-selected='true'], [data-adlaire-segmented-option].is-selected");
      if (selected) selectSegmentedOption(selected);
    });
    safeScopedQueryAll(document, "[data-adlaire-radio-card-group]").forEach((root) => {
      const selected = safeScopedQuery(root, "[data-adlaire-radio-card][aria-checked='true'], [data-adlaire-radio-card].is-selected");
      if (selected) selectRadioCard(selected);
    });
    safeScopedQueryAll(document, "[data-adlaire-switch-group]").forEach((root) => {
      safeScopedQueryAll(root, "[data-adlaire-switch-item]").forEach((item) => {
        setSwitchItemState(item, item.getAttribute("aria-checked") === "true" || item.getAttribute("aria-pressed") === "true" || item.classList.contains("is-selected"));
      });
      updateSwitchGroupOutput(root);
    });
    safeScopedQueryAll(document, "[data-adlaire-date-picker]").forEach((root) => {
      const selected = safeScopedQuery(root, "[data-adlaire-date-preset][aria-pressed='true'], [data-adlaire-date-preset].is-selected");
      if (selected) syncDatePreset(selected, false);
    });
    safeScopedQueryAll<HTMLInputElement>(document, "[data-adlaire-file-input]").forEach(updateFileInput);
    safeScopedQueryAll<HTMLInputElement>(document, "[data-adlaire-toggle-input]").forEach(syncToggleInput);
    safeScopedQueryAll<HTMLInputElement>(document, "[data-adlaire-range-input]").forEach(syncRangeInput);
    safeScopedQueryAll<HTMLInputElement>(document, "[data-adlaire-stepper] input[type='number'], .adlaire-stepper-control input[type='number'], .adlaire-stepper input[type='number']").forEach((input) => {
      syncStepperOutput(input, input.closest("[data-adlaire-stepper], .adlaire-stepper-control, .adlaire-stepper"));
    });
    safeScopedQueryAll(document, "[data-adlaire-token-input], .adlaire-token-input").forEach(updateTokenCount);
    safeScopedQueryAll<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>(document, "[data-adlaire-character-count]").forEach((field) => {
      syncCharacterCount(field, false);
    });
    safeScopedQueryAll<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>(document, "[data-adlaire-validate]").forEach((field) => {
      syncValidationState(field, false);
    });
  }

  initializeFormState();
})();
