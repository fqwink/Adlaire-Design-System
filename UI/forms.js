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
    return String(value || "").trim().toLowerCase();
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
      if (trigger) {
        return [trigger, binding, index];
      }
    }
    return null;
  }

  function isSupportedField(trigger) {
    return trigger instanceof HTMLInputElement || trigger instanceof HTMLTextAreaElement || trigger instanceof HTMLSelectElement;
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
    fieldBinding("data-adlaire-validate", validateField)
  ];

  var formClickBindings = [
    formBinding("data-adlaire-combobox-option", selectComboboxOption),
    formBinding("data-adlaire-multi-select-option", toggleMultiSelectOption),
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

    safeScopedQueryAll(root, "[data-adlaire-filter-chip]").forEach(function (item) {
      setBooleanAttribute(item, "aria-pressed", item === chip);
    });
    applyFilter(root);
  }

  function updateFileInput(fileInput) {
    var selector = fileInput.getAttribute("data-adlaire-file-output");
    var output = safeDocumentQuery(selector);
    var emptyText = fileInput.getAttribute("data-adlaire-file-empty") || "No file selected";
    var names = Array.prototype.map.call(fileInput.files || [], function (file) {
      return file.name;
    });
    if (output) {
      output.textContent = names.length > 0 ? names.join(", ") : emptyText;
    }
  }

  function syncToggleInput(toggleInput) {
    var selector = toggleInput.getAttribute("data-adlaire-toggle-input");
    var toggle = safeDocumentQuery(selector);
    if (toggle) {
      setBooleanAttribute(toggle, "aria-checked", toggleInput.checked);
    }
  }

  function validateField(field) {
    var wrapper = field.closest(".adlaire-field");
    if (!wrapper) {
      return;
    }

    var invalid = field.hasAttribute("required") && normalize(field.value) === "";
    setBooleanAttribute(field, "aria-invalid", invalid);
    wrapper.classList.toggle("adlaire-field-error", invalid);
    wrapper.classList.toggle("adlaire-field-success", !invalid);
    updateValidationSummary(field);
  }

  function updateValidationSummary(field) {
    var form = field.closest("form");
    var summary = safeScopedQuery(form, "[data-adlaire-validate-summary]");
    if (!form || !summary) {
      return;
    }

    var invalidFields = safeScopedQueryAll(form, "[data-adlaire-validate]").filter(function (item) {
      return item.getAttribute("aria-invalid") === "true";
    });
    setOpenState(summary, invalidFields.length > 0);
    summary.textContent = invalidFields.length === 0 ? "" : invalidFields.map(fieldLabel).join(", ");
  }

  function fieldLabel(field) {
    var label = field.closest("label");
    var labelText = label && label.textContent ? label.textContent.replace(field.value, "").trim() : "";
    return labelText || field.getAttribute("aria-label") || field.name || "Field";
  }

  function applyCombobox(input) {
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
    list.hidden = visibleCount === 0;
    setBooleanAttribute(input, "aria-expanded", visibleCount > 0);
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
    safeScopedQueryAll(root, "[data-adlaire-combobox-option]").forEach(function (item) {
      setBooleanAttribute(item, "aria-selected", item === option);
    });
    if (list) {
      list.hidden = true;
    }
  }

  function toggleMultiSelectOption(option) {
    var root = option.closest("[data-adlaire-multi-select]");
    if (!root) {
      return;
    }

    var selected = option.getAttribute("aria-selected") !== "true";
    setBooleanAttribute(option, "aria-selected", selected);
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
    output.textContent = selected.length > 0 ? selected.join(", ") : root.getAttribute("data-adlaire-multi-select-empty") || "No options selected";
  }

  function applyDatePreset(preset) {
    var root = preset.closest("[data-adlaire-date-picker]");
    if (!root) {
      return;
    }

    safeScopedQueryAll(root, "[data-adlaire-date-preset]").forEach(function (item) {
      setBooleanAttribute(item, "aria-pressed", item === preset);
    });
    setInputValue(root, preset.getAttribute("data-adlaire-date-start"), preset.getAttribute("data-adlaire-date-start-value"));
    setInputValue(root, preset.getAttribute("data-adlaire-date-end"), preset.getAttribute("data-adlaire-date-end-value"));
  }

  function setInputValue(root, selector, value) {
    if (!selector || value === null) {
      return;
    }
    var input = safeScopedQuery(root, selector);
    if (input) {
      input.value = value;
    }
  }
}());
