/* Adlaire-Design form interactions */
(function () {
  "use strict";

  function targetElement(target) {
    return target instanceof Element ? target : null;
  }

  function eventSourceElement(event) {
    var fallbackTarget = event.target;
    var path = typeof event.composedPath === "function" ? event.composedPath() : [];
    for (var index = 0; index < path.length; index += 1) {
      var element = targetElement(path[index]);
      if (element) {
        return element;
      }
    }
    return targetElement(fallbackTarget);
  }

  function normalize(value) {
    return String(value === null || value === undefined ? "" : value).trim().toLowerCase();
  }

  function booleanState(active) {
    return active ? "true" : "false";
  }

  function setBooleanAttribute(target, attribute, active) {
    target.setAttribute(attribute, booleanState(active));
  }

  function setOpenState(target, open) {
    target.hidden = !open;
    target.classList.toggle("is-open", open);
  }

  function isDisabledInteraction(target) {
    return target.hasAttribute("disabled") || target.getAttribute("aria-disabled") === "true";
  }

  function isNativeInteractive(target) {
    return target instanceof HTMLButtonElement ||
      target instanceof HTMLAnchorElement ||
      target instanceof HTMLInputElement ||
      target instanceof HTMLSelectElement ||
      target instanceof HTMLTextAreaElement;
  }

  function setOptionalText(target, value) {
    if (target) {
      target.textContent = value;
    }
  }

  function syncStatusTarget(target) {
    if (!target) {
      return;
    }
    if (!target.hasAttribute("aria-live")) {
      target.setAttribute("aria-live", "polite");
    }
    if (!target.hasAttribute("role")) {
      target.setAttribute("role", "status");
    }
  }

  function finiteNumber(value, fallback) {
    var parsed = Number(value);
    return Number.isFinite(parsed) ? parsed : fallback;
  }

  function safeDocumentQuery(selector) {
    if (!selector) {
      return null;
    }
    try {
      return document.querySelector(selector);
    } catch (error) {
      return null;
    }
  }

  function safeScopedQuery(root, selector) {
    if (!root || !selector) {
      return null;
    }
    try {
      return root.querySelector(selector);
    } catch (error) {
      return null;
    }
  }

  function safeScopedQueryAll(root, selector) {
    if (!root || !selector) {
      return [];
    }
    try {
      return Array.prototype.slice.call(root.querySelectorAll(selector));
    } catch (error) {
      return [];
    }
  }

  function hookSelector(attribute) {
    return "[" + attribute + "]";
  }

  function formBinding(attribute, handle) {
    return {
      selector: hookSelector(attribute),
      handle: handle
    };
  }

  function inputBinding(attribute, handle) {
    return formBinding(attribute, function (trigger) {
      if (trigger instanceof HTMLInputElement) {
        handle(trigger);
      }
    });
  }

  function fieldBinding(attribute, handle) {
    return formBinding(attribute, function (trigger) {
      if (isSupportedField(trigger)) {
        handle(trigger);
      }
    });
  }

  function closestBoundTrigger(source, bindings, startIndex) {
    if (startIndex === undefined) {
      startIndex = 0;
    }
    if (!source) {
      return null;
    }
    for (var index = startIndex; index < bindings.length; index += 1) {
      var binding = bindings[index];
      var trigger = source.closest(binding.selector);
      if (trigger && !isDisabledInteraction(trigger)) {
        return [trigger, binding, index];
      }
    }
    return null;
  }

  function isSupportedField(trigger) {
    return trigger instanceof HTMLInputElement || trigger instanceof HTMLTextAreaElement || trigger instanceof HTMLSelectElement;
  }

  function isReadOnlyField(field) {
    return (field instanceof HTMLInputElement || field instanceof HTMLTextAreaElement) && field.readOnly;
  }

  function applyFilter(root) {
    var queryInput = safeScopedQuery(root, "[data-adlaire-filter-input]");
    var activeChip = safeScopedQuery(root, "[data-adlaire-filter-chip][aria-pressed='true']");
    var count = safeScopedQuery(root, "[data-adlaire-filter-count]");
    var empty = safeScopedQuery(root, "[data-adlaire-filter-empty]");
    var query = normalize(queryInput ? queryInput.value : "");
    var filter = normalize(activeChip ? activeChip.getAttribute("data-adlaire-filter-chip") : "");
    if (filter === "all") {
      filter = "";
    }
    var visibleCount = 0;

    safeScopedQueryAll(root, "[data-adlaire-filter-item]").forEach(function (item) {
      var text = normalize(item.textContent);
      var group = normalize(item.getAttribute("data-adlaire-filter-item"));
      var groups = group ? group.split(/\s+/) : [];
      var matchesQuery = !query || text.indexOf(query) !== -1;
      var matchesFilter = !filter || groups.indexOf(filter) !== -1;
      var visible = matchesQuery && matchesFilter;
      item.hidden = !visible;
      if (visible) {
        visibleCount += 1;
      }
    });

    if (count) {
      count.textContent = String(visibleCount);
    }
    if (empty) {
      setOpenState(empty, visibleCount === 0);
    }
  }

  var formInputBindings = [
    formBinding("data-adlaire-filter-input", handleFilterInput),
    inputBinding("data-adlaire-combobox-input", applyCombobox),
    inputBinding("data-adlaire-range-input", syncRangeInput),
    fieldBinding("data-adlaire-character-count", updateCharacterCount),
    fieldBinding("data-adlaire-validate", validateField)
  ];

  var formClickBindings = [
    formBinding("data-adlaire-combobox-option", selectComboboxOption),
    formBinding("data-adlaire-multi-select-option", toggleMultiSelectOption),
    formBinding("data-adlaire-segmented-option", selectSegmentedOption),
    formBinding("data-adlaire-radio-card", selectRadioCard),
    formBinding("data-adlaire-switch-item", toggleSwitchItem),
    formBinding("data-adlaire-stepper-action", applyStepperAction),
    formBinding("data-adlaire-token-add", addTokenFromTrigger),
    formBinding("data-adlaire-token-remove", removeToken),
    formBinding("data-adlaire-date-preset", applyDatePreset),
    formBinding("data-adlaire-filter-chip", selectFilterChip)
  ];

  var formChangeBindings = [
    inputBinding("data-adlaire-file-input", updateFileInput),
    inputBinding("data-adlaire-toggle-input", syncToggleInput)
  ];

  function handleEveryFormInteraction(source, bindings) {
    var match = closestBoundTrigger(source, bindings);
    while (match) {
      var trigger = match[0];
      var binding = match[1];
      var index = match[2];
      binding.handle(trigger);
      match = closestBoundTrigger(source, bindings, index + 1);
    }
  }

  function handleFirstFormInteraction(source, bindings) {
    var match = closestBoundTrigger(source, bindings);
    if (!match) {
      return false;
    }
    var trigger = match[0];
    var binding = match[1];
    binding.handle(trigger);
    return true;
  }

  document.addEventListener("input", function (event) {
    handleEveryFormInteraction(eventSourceElement(event), formInputBindings);
  });

  document.addEventListener("click", function (event) {
    handleFirstFormInteraction(eventSourceElement(event), formClickBindings);
  });

  document.addEventListener("change", function (event) {
    handleEveryFormInteraction(eventSourceElement(event), formChangeBindings);
  });

  document.addEventListener("keydown", function (event) {
    if (closeFormPopup(event)) {
      return;
    }
    if (moveFormCompositeSelection(event)) {
      return;
    }
    activateFormKeyboardTrigger(event);
  });

  document.addEventListener("reset", function () {
    window.setTimeout(initializeFormState, 0);
  });

  function closeFormPopup(event) {
    if (event.key !== "Escape") return false;
    var source = eventSourceElement(event);
    var root = source && source.closest("[data-adlaire-combobox]");
    if (!root) return false;
    var input = safeScopedQuery(root, "[data-adlaire-combobox-input]");
    var list = safeScopedQuery(root, "[role='listbox'], .adlaire-combobox-listbox");
    if (!input || !list || list.hidden) return false;
    event.preventDefault();
    list.hidden = true;
    input.removeAttribute("aria-activedescendant");
    setBooleanAttribute(input, "aria-expanded", false);
    input.focus();
    return true;
  }

  function formRovingKeys(event) {
    return event.key === "ArrowLeft" ||
      event.key === "ArrowRight" ||
      event.key === "ArrowUp" ||
      event.key === "ArrowDown" ||
      event.key === "Home" ||
      event.key === "End";
  }

  function formRovingItems(root, selector) {
    return safeScopedQueryAll(root, selector).filter(function (item) {
      return !item.hidden && !isDisabledInteraction(item);
    });
  }

  function syncRovingTabIndex(root, selector, selectedItem) {
    var items = formRovingItems(root, selector);
    var selected = selectedItem instanceof HTMLElement ? selectedItem : items.filter(function (item) {
      return item.getAttribute("aria-selected") === "true" ||
        item.getAttribute("aria-checked") === "true" ||
        item.getAttribute("aria-pressed") === "true" ||
        item.classList.contains("is-selected");
    })[0] || items[0];
    items.forEach(function (item) {
      if (!isNativeInteractive(item)) {
        item.setAttribute("tabindex", item === selected ? "0" : "-1");
      }
    });
  }

  function rovingIndex(event, currentIndex, total) {
    if (event.key === "Home") return 0;
    if (event.key === "End") return total - 1;
    if (event.key === "ArrowLeft" || event.key === "ArrowUp") return currentIndex <= 0 ? total - 1 : currentIndex - 1;
    if (event.key === "ArrowRight" || event.key === "ArrowDown") return currentIndex >= total - 1 ? 0 : currentIndex + 1;
    return currentIndex;
  }

  function moveFormCompositeSelection(event) {
    if (!formRovingKeys(event)) return false;
    var source = eventSourceElement(event);
    var item = source && source.closest("[data-adlaire-combobox-option], [data-adlaire-multi-select-option], [data-adlaire-segmented-option], [data-adlaire-radio-card], [data-adlaire-switch-item], [data-adlaire-filter-chip]");
    if (!(item instanceof HTMLElement)) return false;
    var config = formCompositeConfig(item);
    if (!config) return false;
    var items = formRovingItems(config.root, config.selector);
    var current = items.indexOf(item);
    if (current < 0) return false;
    var next = items[rovingIndex(event, current, items.length)];
    if (!next) return false;
    event.preventDefault();
    syncRovingTabIndex(config.root, config.selector, next);
    if (config.root && config.selector === "[data-adlaire-combobox-option]") {
      syncComboboxActiveDescendant(config.root, next);
    }
    next.focus();
    if (config.select) config.select(next);
    return true;
  }

  function formCompositeConfig(item) {
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

  function activateFormKeyboardTrigger(event) {
    if (event.key !== "Enter" && event.key !== " ") {
      return false;
    }
    var source = eventSourceElement(event);
    if (source && isNativeInteractive(source)) {
      return false;
    }
    var trigger = source && source.closest(formClickBindings.map(function (binding) {
      return binding.selector;
    }).join(", "));
    if (!(trigger instanceof HTMLElement) || isDisabledInteraction(trigger) || isNativeInteractive(trigger)) {
      return false;
    }
    event.preventDefault();
    trigger.click();
    return true;
  }

  function handleFilterInput(trigger) {
    var root = trigger.closest("[data-adlaire-filter]");
    if (root) {
      applyFilter(root);
    }
  }

  function selectFilterChip(chip) {
    var root = chip.closest("[data-adlaire-filter]");
    if (!root) {
      return;
    }

    syncFilterChipState(root, chip);
    applyFilter(root);
  }

  function syncFilterChipState(root, selectedChip) {
    safeScopedQueryAll(root, "[data-adlaire-filter-chip]").forEach(function (item) {
      var selected = selectedChip ? item === selectedChip : item.getAttribute("aria-pressed") === "true" || item.classList.contains("is-selected");
      setBooleanAttribute(item, "aria-pressed", selected);
      item.classList.toggle("is-selected", selected);
    });
    syncRovingTabIndex(root, "[data-adlaire-filter-chip]", selectedChip);
  }

  function updateFileInput(fileInput) {
    var selector = fileInput.getAttribute("data-adlaire-file-output");
    var output = safeDocumentQuery(selector);
    var emptyText = fileInput.getAttribute("data-adlaire-file-empty") || "No file selected";
    var names = Array.prototype.map.call(fileInput.files || [], function (file) {
      return file.name;
    });
    fileInput.setAttribute("data-adlaire-file-count", String(names.length));
    if (output) {
      output.textContent = names.length > 0 ? names.join(", ") : emptyText;
    }
    syncStatusTarget(output);
  }

  function syncToggleInput(toggleInput) {
    var selector = toggleInput.getAttribute("data-adlaire-toggle-input");
    var toggle = safeDocumentQuery(selector);
    if (!toggle) {
      return;
    }
    setBooleanAttribute(toggle, "aria-checked", toggleInput.checked);
    if (toggle.hasAttribute("aria-pressed")) {
      setBooleanAttribute(toggle, "aria-pressed", toggleInput.checked);
    }
    toggle.classList.toggle("is-selected", toggleInput.checked);
  }

  function validateField(field) {
    var wrapper = field.closest(".adlaire-field");
    if (!wrapper) {
      return;
    }

    syncValidationState(field, true);
  }

  function syncValidationState(field, markInteraction) {
    var wrapper = field.closest(".adlaire-field");
    if (!wrapper) {
      return;
    }

    if (markInteraction) {
      markFieldInteraction(field);
    }
    var neutral = field.disabled || isReadOnlyField(field);
    var invalid = !neutral && !field.validity.valid;
    setBooleanAttribute(field, "aria-invalid", invalid);
    wrapper.classList.toggle("adlaire-field-error", invalid);
    wrapper.classList.toggle("adlaire-field-success", !neutral && !invalid);
    var message = field.validity.valueMissing ? fieldLabel(field) + " is required" : field.validationMessage || fieldLabel(field) + " is invalid";
    setOptionalText(safeDocumentQuery(field.getAttribute("data-adlaire-validation-message")), invalid ? message : "");
    updateValidationSummary(field);
  }

  function markFieldInteraction(field) {
    var wrapper = field.closest(".adlaire-field");
    if (!wrapper) {
      return;
    }
    wrapper.setAttribute("data-adlaire-field-touched", "true");
    wrapper.setAttribute("data-adlaire-field-dirty", normalize(fieldStateValue(field)) !== normalize(defaultFieldValue(field)));
  }

  function fieldStateValue(field) {
    if (field instanceof HTMLInputElement && (field.type === "checkbox" || field.type === "radio")) {
      return field.checked ? field.value || "on" : "";
    }
    return field.value;
  }

  function defaultFieldValue(field) {
    if (field instanceof HTMLSelectElement) {
      var selected = Array.prototype.filter.call(field.options, function (option) {
        return option.defaultSelected;
      })[0];
      return selected ? selected.value : "";
    }
    if (field instanceof HTMLInputElement && (field.type === "checkbox" || field.type === "radio")) {
      return field.defaultChecked ? field.value || "on" : "";
    }
    return field.defaultValue;
  }

  function updateValidationSummary(field) {
    var form = field.closest("form");
    var summary = safeScopedQuery(form, "[data-adlaire-validate-summary]");
    if (!form || !summary) {
      return;
    }

    if (!summary.hasAttribute("aria-live")) {
      summary.setAttribute("aria-live", "polite");
    }
    if (!summary.hasAttribute("role")) {
      summary.setAttribute("role", "alert");
    }
    var invalidFields = safeScopedQueryAll(form, "[data-adlaire-validate]").filter(function (item) {
      return item.getAttribute("aria-invalid") === "true";
    });
    setOpenState(summary, invalidFields.length > 0);
    summary.textContent = invalidFields.length === 0 ? "" : invalidFields.map(fieldLabel).join(", ");
  }

  function fieldLabel(field) {
    var label = field.closest("label");
    var labelText = label ? Array.prototype.filter.call(label.childNodes, function (node) {
      return node.nodeType === Node.TEXT_NODE;
    }).map(function (node) {
      return node.textContent ? node.textContent.trim() : "";
    }).filter(function (text) {
      return text !== "";
    }).join(" ") : "";
    return labelText || field.getAttribute("aria-label") || field.name || "Field";
  }

  function applyCombobox(input) {
    syncComboboxState(input, true);
  }

  function syncComboboxState(input, allowEmptyQuery) {
    var root = input.closest("[data-adlaire-combobox]");
    var list = safeScopedQuery(root, "[role='listbox'], .adlaire-combobox-listbox");
    if (!root || !list) {
      return;
    }

    var query = normalize(input.value);
    var visibleCount = 0;
    safeScopedQueryAll(root, "[data-adlaire-combobox-option]").forEach(function (option) {
      var visible = !query || normalize(option.textContent).indexOf(query) !== -1;
      option.hidden = !visible;
      if (visible) {
        visibleCount += 1;
      }
    });
    syncComboboxOptionState(root, input.value);
    var expanded = visibleCount > 0 && (allowEmptyQuery || query !== "");
    list.hidden = !expanded;
    setBooleanAttribute(input, "aria-expanded", expanded);
    if (!expanded) {
      input.removeAttribute("aria-activedescendant");
    } else {
      syncComboboxActiveDescendant(root);
    }
  }

  function syncComboboxOptionState(root, value) {
    var selectedValue = normalize(value);
    safeScopedQueryAll(root, "[data-adlaire-combobox-option]").forEach(function (option) {
      var optionValue = option.getAttribute("data-adlaire-combobox-option") || option.textContent.trim() || "";
      var selected = selectedValue !== "" && normalize(optionValue) === selectedValue;
      setBooleanAttribute(option, "aria-selected", selected);
      option.classList.toggle("is-selected", selected);
    });
    syncRovingTabIndex(root, "[data-adlaire-combobox-option]");
  }

  function syncComboboxActiveDescendant(root, activeOption) {
    var input = safeScopedQuery(root, "[data-adlaire-combobox-input]");
    if (!input) return;
    var active = activeOption ||
      safeScopedQuery(root, "[data-adlaire-combobox-option][aria-selected='true']:not([hidden]), [data-adlaire-combobox-option].is-selected:not([hidden])") ||
      formRovingItems(root, "[data-adlaire-combobox-option]")[0];
    if (active && active.id) {
      input.setAttribute("aria-activedescendant", active.id);
    } else {
      input.removeAttribute("aria-activedescendant");
    }
  }

  function selectComboboxOption(option) {
    var root = option.closest("[data-adlaire-combobox]");
    var input = safeScopedQuery(root, "[data-adlaire-combobox-input]");
    var list = safeScopedQuery(root, "[role='listbox'], .adlaire-combobox-listbox");
    if (!root || !input) {
      return;
    }

    var value = option.getAttribute("data-adlaire-combobox-option") || option.textContent.trim() || "";
    input.value = value;
    setBooleanAttribute(input, "aria-expanded", false);
    input.removeAttribute("aria-activedescendant");
    syncComboboxOptionState(root, value);
    if (list) {
      list.hidden = true;
    }
    input.dispatchEvent(new Event("input", { bubbles: true }));
    input.dispatchEvent(new Event("change", { bubbles: true }));
  }

  function toggleMultiSelectOption(option) {
    var root = option.closest("[data-adlaire-multi-select]");
    if (!root) {
      return;
    }

    var selected = option.getAttribute("aria-selected") !== "true";
    setBooleanAttribute(option, "aria-selected", selected);
    option.classList.toggle("is-selected", selected);
    updateMultiSelectOutput(root);
  }

  function syncMultiSelectState(root) {
    safeScopedQueryAll(root, "[data-adlaire-multi-select-option]").forEach(function (item) {
      var selected = item.getAttribute("aria-selected") === "true" || item.classList.contains("is-selected");
      setBooleanAttribute(item, "aria-selected", selected);
      item.classList.toggle("is-selected", selected);
    });
    syncRovingTabIndex(root, "[data-adlaire-multi-select-option]");
    updateMultiSelectOutput(root);
  }

  function updateMultiSelectOutput(root) {
    var selector = root.getAttribute("data-adlaire-multi-select-output");
    var output = safeDocumentQuery(selector);
    if (!output) {
      return;
    }

    var selected = safeScopedQueryAll(root, "[data-adlaire-multi-select-option][aria-selected='true']").map(function (item) {
      return item.getAttribute("data-adlaire-multi-select-option") || item.textContent.trim() || "";
    }).filter(function (value) {
      return value !== "";
    });
    syncStatusTarget(output);
    output.textContent = selected.length > 0 ? selected.join(", ") : root.getAttribute("data-adlaire-multi-select-empty") || "No options selected";
  }

  function selectSegmentedOption(option) {
    var root = option.closest("[data-adlaire-segmented-control]");
    if (!root) {
      return;
    }

    var value = option.getAttribute("data-adlaire-segmented-option") || option.textContent.trim() || "";
    safeScopedQueryAll(root, "[data-adlaire-segmented-option]").forEach(function (item) {
      var selected = item === option;
      setBooleanAttribute(item, "aria-pressed", selected);
      item.setAttribute("aria-selected", booleanState(selected));
      item.setAttribute("tabindex", selected ? "0" : "-1");
      item.classList.toggle("is-selected", selected);
    });

    var output = safeDocumentQuery(root.getAttribute("data-adlaire-segmented-output"));
    if (output && value) {
      output.textContent = value;
    }
  }

  function selectRadioCard(card) {
    var root = card.closest("[data-adlaire-radio-card-group]");
    if (!root) {
      return;
    }

    var value = card.getAttribute("data-adlaire-radio-card") || card.textContent.trim() || "";
    safeScopedQueryAll(root, "[data-adlaire-radio-card]").forEach(function (item) {
      var selected = item === card;
      setBooleanAttribute(item, "aria-checked", selected);
      item.setAttribute("tabindex", selected ? "0" : "-1");
      item.classList.toggle("is-selected", selected);
    });

    var output = safeDocumentQuery(root.getAttribute("data-adlaire-radio-card-output"));
    if (output && value) {
      output.textContent = value;
    }
  }

  function toggleSwitchItem(item) {
    var root = item.closest("[data-adlaire-switch-group]");
    var active = item.getAttribute("aria-checked") !== "true";
    setSwitchItemState(item, active);
    updateSwitchGroupOutput(root);
  }

  function setSwitchItemState(item, active) {
    setBooleanAttribute(item, "aria-checked", active);
    setBooleanAttribute(item, "aria-pressed", active);
    item.classList.toggle("is-selected", active);
  }

  function updateSwitchGroupOutput(root) {
    if (!root) {
      return;
    }

    var output = safeDocumentQuery(root.getAttribute("data-adlaire-switch-output"));
    if (!output) {
      return;
    }

    var activeItems = safeScopedQueryAll(root, "[data-adlaire-switch-item][aria-checked='true']").map(function (item) {
      return item.getAttribute("data-adlaire-switch-item") || item.textContent.trim() || "";
    }).filter(function (value) {
      return value !== "";
    });
    syncStatusTarget(output);
    output.textContent = activeItems.length > 0 ? activeItems.join(", ") : root.getAttribute("data-adlaire-switch-empty") || "None";
  }

  function syncRangeInput(input) {
    var min = finiteNumber(input.min, 0);
    var max = finiteNumber(input.max, 100);
    var value = Math.max(min, Math.min(max, finiteNumber(input.value, min)));
    var denominator = max > min ? max - min : 1;
    var percent = Math.max(0, Math.min(100, ((value - min) / denominator) * 100));
    var root = input.closest("[data-adlaire-range], .adlaire-range-field");
    if (String(value) !== input.value && !input.matches(":focus")) {
      input.value = String(value);
    }
    input.setAttribute("data-adlaire-range-value", String(value));
    input.setAttribute("aria-valuenow", String(value));
    input.setAttribute("aria-valuetext", formatRangeValue(input, value));
    if (root) {
      root.style.setProperty("--adlaire-range-value", percent + "%");
    }
    setOptionalText(safeDocumentQuery(input.getAttribute("data-adlaire-range-output")), formatRangeValue(input, value));
  }

  function formatRangeValue(input, value) {
    var prefix = input.getAttribute("data-adlaire-range-prefix") || "";
    var suffix = input.getAttribute("data-adlaire-range-suffix") || "";
    return prefix + (Number.isFinite(value) ? value : input.value) + suffix;
  }

  function applyStepperAction(trigger) {
    var root = trigger.closest("[data-adlaire-stepper], .adlaire-stepper-control, .adlaire-stepper");
    var input = safeScopedQuery(root, trigger.getAttribute("data-adlaire-stepper-input") || "input[type='number']");
    if (!input || input.disabled || input.readOnly) {
      return;
    }
    var min = input.min === "" ? Number.NEGATIVE_INFINITY : finiteNumber(input.min, Number.NEGATIVE_INFINITY);
    var max = input.max === "" ? Number.POSITIVE_INFINITY : finiteNumber(input.max, Number.POSITIVE_INFINITY);
    var parsedStep = finiteNumber(input.step, 1);
    var step = parsedStep > 0 ? parsedStep : 1;
    var direction = trigger.getAttribute("data-adlaire-stepper-action");
    var current = finiteNumber(input.value, Number.isFinite(min) ? min : 0);
    var delta = direction === "decrement" ? -step : step;
    var next = Math.min(max, Math.max(min, current + delta));
    input.value = String(Number.isFinite(next) ? next : current);
    syncStepperOutput(input, root);
    input.dispatchEvent(new Event("input", { bubbles: true }));
    input.dispatchEvent(new Event("change", { bubbles: true }));
  }

  function syncStepperOutput(input, root) {
    var output = safeDocumentQuery(input.getAttribute("data-adlaire-stepper-output")) || safeScopedQuery(root, "[data-adlaire-stepper-output]");
    input.setAttribute("aria-valuenow", input.value);
    input.setAttribute("aria-valuetext", input.value);
    syncStatusTarget(output);
    setOptionalText(output, input.value);
  }

  function addTokenFromTrigger(trigger) {
    var root = trigger.closest("[data-adlaire-token-input], .adlaire-token-input");
    var input = safeScopedQuery(root, trigger.getAttribute("data-adlaire-token-input") || "input");
    var list = safeScopedQuery(root, trigger.getAttribute("data-adlaire-token-list") || ".adlaire-token-list");
    var value = input && input.value ? input.value.trim() : "";
    if (!root || !input || !list || input.disabled || input.readOnly || value === "") {
      return;
    }
    var duplicate = safeScopedQueryAll(list, "[data-adlaire-token-remove], .adlaire-token").filter(function (item) {
      return normalize(item.getAttribute("data-adlaire-token-remove") || item.textContent) === normalize(value);
    })[0];
    if (duplicate instanceof HTMLElement) {
      duplicate.focus();
      input.value = "";
      updateTokenCount(root);
      return;
    }
    var token = document.createElement("button");
    token.type = "button";
    token.className = "adlaire-token";
    token.setAttribute("data-adlaire-token-remove", value);
    token.setAttribute("aria-label", "Remove " + value);
    token.textContent = value;
    list.appendChild(token);
    input.value = "";
    updateTokenCount(root);
    input.dispatchEvent(new Event("input", { bubbles: true }));
    input.dispatchEvent(new Event("change", { bubbles: true }));
    input.focus();
  }

  function removeToken(trigger) {
    var root = trigger.closest("[data-adlaire-token-input], .adlaire-token-input");
    var removable = trigger.matches(".adlaire-token") ? trigger : trigger.closest(".adlaire-token") || trigger;
    var nextFocus = removable.nextElementSibling || removable.previousElementSibling || safeScopedQuery(root, "input");
    removable.remove();
    updateTokenCount(root);
    if (nextFocus instanceof HTMLElement) {
      nextFocus.focus();
    }
  }

  function updateTokenCount(root) {
    if (!root) {
      return;
    }
    var count = new Set(safeScopedQueryAll(root, "[data-adlaire-token-remove], .adlaire-token")).size;
    root.setAttribute("data-adlaire-token-count-value", String(count));
    setOptionalText(safeDocumentQuery(root.getAttribute("data-adlaire-token-count")), String(count));
  }

  function syncCharacterCount(field, markInteraction) {
    if (markInteraction) {
      markFieldInteraction(field);
    }
    var output = safeDocumentQuery(field.getAttribute("data-adlaire-character-count"));
    var limit = field instanceof HTMLInputElement || field instanceof HTMLTextAreaElement ? field.maxLength : -1;
    var length = field.value.length;
    syncStatusTarget(output);
    setOptionalText(output, limit > 0 ? length + "/" + limit : String(length));
  }

  function updateCharacterCount(field) {
    syncCharacterCount(field, true);
  }

  function applyDatePreset(preset) {
    syncDatePreset(preset, true);
  }

  function syncDatePreset(preset, dispatchEvents) {
    var root = preset.closest("[data-adlaire-date-picker]");
    if (!root) {
      return;
    }

    safeScopedQueryAll(root, "[data-adlaire-date-preset]").forEach(function (item) {
      var selected = item === preset;
      setBooleanAttribute(item, "aria-pressed", selected);
      item.classList.toggle("is-selected", selected);
    });
    setInputValue(root, preset.getAttribute("data-adlaire-date-start"), preset.getAttribute("data-adlaire-date-start-value"), dispatchEvents);
    setInputValue(root, preset.getAttribute("data-adlaire-date-end"), preset.getAttribute("data-adlaire-date-end-value"), dispatchEvents);
  }

  function setInputValue(root, selector, value, dispatchEvents) {
    if (!selector || value === null) {
      return;
    }
    var input = safeScopedQuery(root, selector);
    if (!input || input.disabled || input.readOnly) {
      return;
    }
    input.value = value;
    if (!dispatchEvents) {
      return;
    }
    input.dispatchEvent(new Event("input", { bubbles: true }));
    input.dispatchEvent(new Event("change", { bubbles: true }));
  }

  function initializeFormState() {
    safeScopedQueryAll(document, "[data-adlaire-filter]").forEach(function (root) {
      var selected = safeScopedQuery(root, "[data-adlaire-filter-chip][aria-pressed='true'], [data-adlaire-filter-chip].is-selected");
      syncFilterChipState(root, selected);
      applyFilter(root);
    });
    safeScopedQueryAll(document, "[data-adlaire-combobox-input]").forEach(function (input) {
      syncComboboxState(input, false);
    });
    safeScopedQueryAll(document, "[data-adlaire-multi-select]").forEach(syncMultiSelectState);
    safeScopedQueryAll(document, "[data-adlaire-segmented-control]").forEach(function (root) {
      var selected = safeScopedQuery(root, "[data-adlaire-segmented-option][aria-pressed='true'], [data-adlaire-segmented-option][aria-selected='true'], [data-adlaire-segmented-option].is-selected");
      if (selected) {
        selectSegmentedOption(selected);
      }
    });
    safeScopedQueryAll(document, "[data-adlaire-radio-card-group]").forEach(function (root) {
      var selected = safeScopedQuery(root, "[data-adlaire-radio-card][aria-checked='true'], [data-adlaire-radio-card].is-selected");
      if (selected) {
        selectRadioCard(selected);
      }
    });
    safeScopedQueryAll(document, "[data-adlaire-switch-group]").forEach(function (root) {
      safeScopedQueryAll(root, "[data-adlaire-switch-item]").forEach(function (item) {
        setSwitchItemState(item, item.getAttribute("aria-checked") === "true" || item.getAttribute("aria-pressed") === "true" || item.classList.contains("is-selected"));
      });
      updateSwitchGroupOutput(root);
    });
    safeScopedQueryAll(document, "[data-adlaire-date-picker]").forEach(function (root) {
      var selected = safeScopedQuery(root, "[data-adlaire-date-preset][aria-pressed='true'], [data-adlaire-date-preset].is-selected");
      if (selected) {
        syncDatePreset(selected, false);
      }
    });
    safeScopedQueryAll(document, "[data-adlaire-file-input]").forEach(updateFileInput);
    safeScopedQueryAll(document, "[data-adlaire-toggle-input]").forEach(syncToggleInput);
    safeScopedQueryAll(document, "[data-adlaire-range-input]").forEach(syncRangeInput);
    safeScopedQueryAll(document, "[data-adlaire-stepper] input[type='number'], .adlaire-stepper-control input[type='number'], .adlaire-stepper input[type='number']").forEach(function (input) {
      syncStepperOutput(input, input.closest("[data-adlaire-stepper], .adlaire-stepper-control, .adlaire-stepper"));
    });
    safeScopedQueryAll(document, "[data-adlaire-token-input], .adlaire-token-input").forEach(updateTokenCount);
    safeScopedQueryAll(document, "[data-adlaire-character-count]").forEach(function (field) {
      syncCharacterCount(field, false);
    });
    safeScopedQueryAll(document, "[data-adlaire-validate]").forEach(function (field) {
      syncValidationState(field, false);
    });
  }

  initializeFormState();
}());
