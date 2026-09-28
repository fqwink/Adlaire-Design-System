/// <reference lib="dom" />
/* Adlaire-Design form interactions */
(() => {
  "use strict";

  function targetElement(target: EventTarget | null): Element | null {
    return target instanceof Element ? target : null;
  }

  function normalize(value: unknown): string {
    return String(value || "").trim().toLowerCase();
  }

  function applyFilter(root: Element): void {
    const queryInput = root.querySelector<HTMLInputElement>("[data-adlaire-filter-input]");
    const activeChip = root.querySelector("[data-adlaire-filter-chip][aria-pressed='true']");
    const count = root.querySelector("[data-adlaire-filter-count]");
    const empty = root.querySelector<HTMLElement>("[data-adlaire-filter-empty]");
    const query = normalize(queryInput?.value ?? "");
    let filter = normalize(activeChip?.getAttribute("data-adlaire-filter-chip") ?? "");
    if (filter === "all") filter = "";
    let visibleCount = 0;

    root.querySelectorAll<HTMLElement>("[data-adlaire-filter-item]").forEach((item) => {
      const text = normalize(item.textContent);
      const group = normalize(item.getAttribute("data-adlaire-filter-item"));
      const groups = group ? group.split(/\s+/) : [];
      const visible = (!query || text.includes(query)) && (!filter || groups.includes(filter));
      item.hidden = !visible;
      if (visible) visibleCount += 1;
    });

    if (count) count.textContent = String(visibleCount);
    if (empty) {
      empty.hidden = visibleCount !== 0;
      empty.classList.toggle("is-open", visibleCount === 0);
    }
  }

  document.addEventListener("input", (event) => {
    const input = targetElement(event.target)?.closest("[data-adlaire-filter-input]");
    const comboboxInput = targetElement(event.target)?.closest<HTMLInputElement>("[data-adlaire-combobox-input]");
    const root = input?.closest("[data-adlaire-filter]");
    if (root) applyFilter(root);
    if (comboboxInput) applyCombobox(comboboxInput);
  });

  document.addEventListener("click", (event) => {
    const source = targetElement(event.target);
    const option = source?.closest("[data-adlaire-combobox-option]");
    const multiOption = source?.closest("[data-adlaire-multi-select-option]");
    const preset = source?.closest("[data-adlaire-date-preset]");
    const chip = source?.closest("[data-adlaire-filter-chip]");
    const root = chip?.closest("[data-adlaire-filter]");

    if (option) {
      selectComboboxOption(option);
      return;
    }

    if (multiOption) {
      toggleMultiSelectOption(multiOption);
      return;
    }

    if (preset) {
      applyDatePreset(preset);
      return;
    }

    if (!chip || !root) return;

    root.querySelectorAll("[data-adlaire-filter-chip]").forEach((item) => {
      item.setAttribute("aria-pressed", item === chip ? "true" : "false");
    });
    applyFilter(root);
  });

  document.addEventListener("change", (event) => {
    const target = targetElement(event.target);
    const fileInput = target?.closest<HTMLInputElement>("[data-adlaire-file-input]");
    const toggleInput = target?.closest<HTMLInputElement>("[data-adlaire-toggle-input]");

    if (fileInput) {
      const selector = fileInput.getAttribute("data-adlaire-file-output");
      const output = selector ? document.querySelector(selector) : null;
      const emptyText = fileInput.getAttribute("data-adlaire-file-empty") ?? "No file selected";
      const names = Array.from(fileInput.files ?? []).map((file) => file.name);
      if (output) output.textContent = names.length > 0 ? names.join(", ") : emptyText;
    }

    if (toggleInput) {
      const selector = toggleInput.getAttribute("data-adlaire-toggle-input");
      const toggle = selector ? document.querySelector(selector) : null;
      if (toggle) toggle.setAttribute("aria-checked", toggleInput.checked ? "true" : "false");
    }
  });

  document.addEventListener("input", (event) => {
    const field = targetElement(event.target)?.closest<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>("[data-adlaire-validate]");
    const wrapper = field?.closest(".adlaire-field");
    if (!field || !wrapper) return;

    const invalid = field.hasAttribute("required") && normalize(field.value) === "";
    field.setAttribute("aria-invalid", invalid ? "true" : "false");
    wrapper.classList.toggle("adlaire-field-error", invalid);
    wrapper.classList.toggle("adlaire-field-success", !invalid);
    updateValidationSummary(field);
  });

  function updateValidationSummary(field: Element): void {
    const form = field.closest("form");
    const summary = form?.querySelector<HTMLElement>("[data-adlaire-validate-summary]");
    if (!form || !summary) return;

    const invalidFields = Array.from(form.querySelectorAll<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>("[data-adlaire-validate]"))
      .filter((item) => item.getAttribute("aria-invalid") === "true");
    summary.hidden = invalidFields.length === 0;
    summary.classList.toggle("is-open", invalidFields.length > 0);
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
    const list = root?.querySelector<HTMLElement>("[role='listbox'], .adlaire-combobox-listbox");
    if (!root || !list) return;

    const query = normalize(input.value);
    let visibleCount = 0;
    root.querySelectorAll<HTMLElement>("[data-adlaire-combobox-option]").forEach((option) => {
      const visible = !query || normalize(option.textContent).includes(query);
      option.hidden = !visible;
      if (visible) visibleCount += 1;
    });
    list.hidden = visibleCount === 0;
    input.setAttribute("aria-expanded", visibleCount > 0 ? "true" : "false");
  }

  function selectComboboxOption(option: Element): void {
    const root = option.closest("[data-adlaire-combobox]");
    const input = root?.querySelector<HTMLInputElement>("[data-adlaire-combobox-input]");
    const list = root?.querySelector<HTMLElement>("[role='listbox'], .adlaire-combobox-listbox");
    if (!root || !input) return;

    const value = option.getAttribute("data-adlaire-combobox-option") ?? option.textContent?.trim() ?? "";
    input.value = value;
    input.setAttribute("aria-expanded", "false");
    root.querySelectorAll("[data-adlaire-combobox-option]").forEach((item) => {
      item.setAttribute("aria-selected", item === option ? "true" : "false");
    });
    if (list) list.hidden = true;
  }

  function toggleMultiSelectOption(option: Element): void {
    const root = option.closest("[data-adlaire-multi-select]");
    if (!root) return;

    const selected = option.getAttribute("aria-selected") !== "true";
    option.setAttribute("aria-selected", selected ? "true" : "false");
    updateMultiSelectOutput(root);
  }

  function updateMultiSelectOutput(root: Element): void {
    const selector = root.getAttribute("data-adlaire-multi-select-output");
    const output = selector ? document.querySelector<HTMLElement>(selector) : null;
    if (!output) return;

    const selected = Array.from(root.querySelectorAll("[data-adlaire-multi-select-option][aria-selected='true']"))
      .map((item) => item.getAttribute("data-adlaire-multi-select-option") ?? item.textContent?.trim() ?? "")
      .filter((value) => value !== "");
    output.textContent = selected.length > 0
      ? selected.join(", ")
      : root.getAttribute("data-adlaire-multi-select-empty") ?? "No options selected";
  }

  function applyDatePreset(preset: Element): void {
    const root = preset.closest("[data-adlaire-date-picker]");
    if (!root) return;

    root.querySelectorAll("[data-adlaire-date-preset]").forEach((item) => {
      item.setAttribute("aria-pressed", item === preset ? "true" : "false");
    });
    setInputValue(root, preset.getAttribute("data-adlaire-date-start"), preset.getAttribute("data-adlaire-date-start-value"));
    setInputValue(root, preset.getAttribute("data-adlaire-date-end"), preset.getAttribute("data-adlaire-date-end-value"));
  }

  function setInputValue(root: Element, selector: string | null, value: string | null): void {
    if (!selector || value === null) return;
    try {
      const input = root.querySelector<HTMLInputElement>(selector);
      if (input) input.value = value;
    } catch {
      return;
    }
  }
})();
