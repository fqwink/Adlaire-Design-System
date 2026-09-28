/* Adlaire-Design form interactions */
(function () {
  "use strict";

  function normalize(value) {
    return String(value || "").trim().toLowerCase();
  }

  function applyFilter(root) {
    var queryInput = root.querySelector("[data-adlaire-filter-input]");
    var activeChip = root.querySelector("[data-adlaire-filter-chip][aria-pressed='true']");
    var count = root.querySelector("[data-adlaire-filter-count]");
    var empty = root.querySelector("[data-adlaire-filter-empty]");
    var query = normalize(queryInput ? queryInput.value : "");
    var filter = normalize(activeChip ? activeChip.getAttribute("data-adlaire-filter-chip") : "");
    if (filter === "all") {
      filter = "";
    }
    var visibleCount = 0;

    root.querySelectorAll("[data-adlaire-filter-item]").forEach(function (item) {
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
      empty.hidden = visibleCount !== 0;
      empty.classList.toggle("is-open", visibleCount === 0);
    }
  }

  document.addEventListener("input", function (event) {
    var input = event.target.closest("[data-adlaire-filter-input]");
    var comboboxInput = event.target.closest("[data-adlaire-combobox-input]");
    var root = input ? input.closest("[data-adlaire-filter]") : null;
    if (root) {
      applyFilter(root);
    }
    if (comboboxInput) {
      applyCombobox(comboboxInput);
    }
  });

  document.addEventListener("click", function (event) {
    var option = event.target.closest("[data-adlaire-combobox-option]");
    var multiOption = event.target.closest("[data-adlaire-multi-select-option]");
    var preset = event.target.closest("[data-adlaire-date-preset]");
    var chip = event.target.closest("[data-adlaire-filter-chip]");
    var root = chip ? chip.closest("[data-adlaire-filter]") : null;
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
    if (!root) {
      return;
    }

    root.querySelectorAll("[data-adlaire-filter-chip]").forEach(function (item) {
      item.setAttribute("aria-pressed", item === chip ? "true" : "false");
    });
    applyFilter(root);
  });

  document.addEventListener("change", function (event) {
    var fileInput = event.target.closest("[data-adlaire-file-input]");
    var toggleInput = event.target.closest("[data-adlaire-toggle-input]");

    if (fileInput) {
      var output = document.querySelector(fileInput.getAttribute("data-adlaire-file-output"));
      var emptyText = fileInput.getAttribute("data-adlaire-file-empty") || "No file selected";
      var names = Array.prototype.map.call(fileInput.files || [], function (file) {
        return file.name;
      });
      if (output) {
        output.textContent = names.length > 0 ? names.join(", ") : emptyText;
      }
    }

    if (toggleInput) {
      var toggle = document.querySelector(toggleInput.getAttribute("data-adlaire-toggle-input"));
      if (toggle) {
        toggle.setAttribute("aria-checked", toggleInput.checked ? "true" : "false");
      }
    }
  });

  document.addEventListener("input", function (event) {
    var field = event.target.closest("[data-adlaire-validate]");
    if (!field) {
      return;
    }

    var wrapper = field.closest(".adlaire-field");
    if (!wrapper) {
      return;
    }

    var invalid = field.hasAttribute("required") && normalize(field.value) === "";
    field.setAttribute("aria-invalid", invalid ? "true" : "false");
    wrapper.classList.toggle("adlaire-field-error", invalid);
    wrapper.classList.toggle("adlaire-field-success", !invalid);
    updateValidationSummary(field);
  });

  function updateValidationSummary(field) {
    var form = field.closest("form");
    var summary = form ? form.querySelector("[data-adlaire-validate-summary]") : null;
    if (!form || !summary) {
      return;
    }

    var invalidFields = Array.prototype.filter.call(form.querySelectorAll("[data-adlaire-validate]"), function (item) {
      return item.getAttribute("aria-invalid") === "true";
    });
    summary.hidden = invalidFields.length === 0;
    summary.classList.toggle("is-open", invalidFields.length > 0);
    summary.textContent = invalidFields.length === 0 ? "" : invalidFields.map(fieldLabel).join(", ");
  }

  function fieldLabel(field) {
    var label = field.closest("label");
    var labelText = label && label.textContent ? label.textContent.replace(field.value, "").trim() : "";
    return labelText || field.getAttribute("aria-label") || field.name || "Field";
  }

  function applyCombobox(input) {
    var root = input.closest("[data-adlaire-combobox]");
    var list = root ? root.querySelector("[role='listbox'], .adlaire-combobox-listbox") : null;
    if (!root || !list) {
      return;
    }

    var query = normalize(input.value);
    var visibleCount = 0;
    root.querySelectorAll("[data-adlaire-combobox-option]").forEach(function (option) {
      var visible = !query || normalize(option.textContent).indexOf(query) !== -1;
      option.hidden = !visible;
      if (visible) {
        visibleCount += 1;
      }
    });
    list.hidden = visibleCount === 0;
    input.setAttribute("aria-expanded", visibleCount > 0 ? "true" : "false");
  }

  function selectComboboxOption(option) {
    var root = option.closest("[data-adlaire-combobox]");
    var input = root ? root.querySelector("[data-adlaire-combobox-input]") : null;
    var list = root ? root.querySelector("[role='listbox'], .adlaire-combobox-listbox") : null;
    if (!root || !input) {
      return;
    }

    var value = option.getAttribute("data-adlaire-combobox-option") || option.textContent.trim() || "";
    input.value = value;
    input.setAttribute("aria-expanded", "false");
    root.querySelectorAll("[data-adlaire-combobox-option]").forEach(function (item) {
      item.setAttribute("aria-selected", item === option ? "true" : "false");
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
    option.setAttribute("aria-selected", selected ? "true" : "false");
    updateMultiSelectOutput(root);
  }

  function updateMultiSelectOutput(root) {
    var selector = root.getAttribute("data-adlaire-multi-select-output");
    var output = selector ? document.querySelector(selector) : null;
    if (!output) {
      return;
    }

    var selected = Array.prototype.map.call(root.querySelectorAll("[data-adlaire-multi-select-option][aria-selected='true']"), function (item) {
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

    root.querySelectorAll("[data-adlaire-date-preset]").forEach(function (item) {
      item.setAttribute("aria-pressed", item === preset ? "true" : "false");
    });
    setInputValue(root, preset.getAttribute("data-adlaire-date-start"), preset.getAttribute("data-adlaire-date-start-value"));
    setInputValue(root, preset.getAttribute("data-adlaire-date-end"), preset.getAttribute("data-adlaire-date-end-value"));
  }

  function setInputValue(root, selector, value) {
    if (!selector || value === null) {
      return;
    }
    try {
      var input = root.querySelector(selector);
      if (input) {
        input.value = value;
      }
    } catch (error) {
      return;
    }
  }
}());
