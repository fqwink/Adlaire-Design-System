/* Adlaire-Design component interactions */
(function () {
  "use strict";

  var lastFocus = null;
  var overlaySelector = ".adlaire-modal, .adlaire-dialog, .adlaire-drawer, .adlaire-bottom-sheet";
  var openOverlaySelector = ".adlaire-modal.is-open, .adlaire-dialog.is-open, .adlaire-drawer.is-open, .adlaire-bottom-sheet.is-open";

  function getTarget(trigger) {
    var selector = trigger.getAttribute("data-adlaire-target") || trigger.getAttribute("href");
    if (!selector || selector.charAt(0) !== "#") {
      return null;
    }
    return document.getElementById(selector.slice(1));
  }

  function queryReferencedTarget(trigger, attribute) {
    var selector = trigger.getAttribute(attribute) || trigger.getAttribute("data-adlaire-target") || trigger.getAttribute("aria-controls");
    if (!selector) {
      return null;
    }
    if (selector.charAt(0) === "#") {
      return document.getElementById(selector.slice(1));
    }
    var byId = document.getElementById(selector);
    if (byId) {
      return byId;
    }
    try {
      return document.querySelector(selector);
    } catch (error) {
      return null;
    }
  }

  function setExpanded(trigger, target, expanded) {
    trigger.setAttribute("aria-expanded", expanded ? "true" : "false");
    if (target) {
      target.hidden = !expanded;
      target.classList.toggle("is-open", expanded);
      if (expanded && target.matches(overlaySelector)) {
        document.documentElement.classList.add("adlaire-overlay-open");
      }
      if (!expanded && !document.querySelector(openOverlaySelector)) {
        document.documentElement.classList.remove("adlaire-overlay-open");
      }
    }
  }

  function triggersForTarget(target) {
    if (!target || !target.id) {
      return [];
    }

    return Array.prototype.filter.call(document.querySelectorAll("[data-adlaire-toggle][data-adlaire-target]"), function (trigger) {
      return trigger.getAttribute("data-adlaire-target") === "#" + target.id;
    }).concat(Array.prototype.filter.call(document.querySelectorAll("[data-adlaire-toggle][href]"), function (trigger) {
      return trigger.getAttribute("href") === "#" + target.id;
    }));
  }

  function getFocusable(target) {
    return Array.prototype.filter.call(target.querySelectorAll("button, [href], input, select, textarea, [tabindex]:not([tabindex='-1'])"), function (item) {
      return !item.hidden && !item.disabled && item.getAttribute("aria-hidden") !== "true";
    });
  }

  function focusFirst(target) {
    var focusable = getFocusable(target)[0];
    if (focusable) {
      focusable.focus();
    }
  }

  function closeSiblings(trigger, target) {
    var group = trigger.getAttribute("data-adlaire-group");
    if (!group) {
      return;
    }

    document.querySelectorAll("[data-adlaire-toggle][data-adlaire-group]").forEach(function (item) {
      if (item.getAttribute("data-adlaire-group") !== group) {
        return;
      }
      if (item === trigger) {
        return;
      }
      setExpanded(item, getTarget(item), false);
    });

    if (target && target.getAttribute("role") === "tabpanel") {
      document.querySelectorAll('[role="tabpanel"][data-adlaire-group]').forEach(function (panel) {
        if (panel.getAttribute("data-adlaire-group") !== group) {
          return;
        }
        if (panel !== target) {
          panel.hidden = true;
          panel.classList.remove("is-open");
        }
      });
    }
  }

  document.addEventListener("click", function (event) {
    var trigger = event.target.closest("[data-adlaire-toggle]");
    var dismiss = event.target.closest("[data-adlaire-dismiss]");
    var carouselControl = event.target.closest("[data-adlaire-carousel-action]");
    var carouselIndicator = event.target.closest("[data-adlaire-carousel-index]");
    if (carouselIndicator && carouselIndicator.hasAttribute("data-adlaire-carousel")) {
      carouselIndicator = null;
    }

    if (dismiss) {
      var dismissTarget = getTarget(dismiss) || dismiss.closest(".adlaire-modal, .adlaire-dialog, .adlaire-drawer, .adlaire-bottom-sheet, .adlaire-popover, .adlaire-dropdown-menu, .adlaire-toast");
      if (dismissTarget) {
        dismissTarget.hidden = true;
        dismissTarget.classList.remove("is-open");
        triggersForTarget(dismissTarget).forEach(function (item) {
          item.setAttribute("aria-expanded", "false");
        });
      }
      if (!document.querySelector(openOverlaySelector)) {
        document.documentElement.classList.remove("adlaire-overlay-open");
      }
      if (lastFocus && typeof lastFocus.focus === "function") {
        lastFocus.focus();
      }
      return;
    }

    if (carouselControl || carouselIndicator) {
      event.preventDefault();
      moveCarousel(carouselControl || carouselIndicator);
      return;
    }

    if (trigger) {
      var target = getTarget(trigger);
      if (!target) {
        return;
      }

      event.preventDefault();
      var isExpanded = trigger.getAttribute("aria-expanded") === "true";
      lastFocus = trigger;
      closeSiblings(trigger, target);
      setExpanded(trigger, target, !isExpanded);
      if (!isExpanded && target.matches(overlaySelector)) {
        focusFirst(target);
      }
    }
  });

  document.addEventListener("keydown", function (event) {
    var activeOverlay = document.querySelector(openOverlaySelector);
    if (event.key === "Tab" && activeOverlay) {
      containFocus(event, activeOverlay);
      return;
    }

    if (event.key !== "Escape") {
      return;
    }

    document.querySelectorAll(openOverlaySelector + ", .adlaire-popover.is-open, .adlaire-dropdown-menu.is-open, .adlaire-context-menu.is-open, .adlaire-overflow-toolbar-menu.is-open").forEach(function (target) {
      target.hidden = true;
      target.classList.remove("is-open");
      triggersForTarget(target).forEach(function (trigger) {
        trigger.setAttribute("aria-expanded", "false");
      });
    });
    document.querySelectorAll("[data-adlaire-context-menu], [data-adlaire-split-button-toggle], [data-adlaire-overflow-toggle]").forEach(function (trigger) {
      trigger.setAttribute("aria-expanded", "false");
    });
    document.documentElement.classList.remove("adlaire-overlay-open");
    if (lastFocus && typeof lastFocus.focus === "function") {
      lastFocus.focus();
    }
  });

  function containFocus(event, target) {
    var focusable = getFocusable(target);
    if (focusable.length === 0) {
      event.preventDefault();
      return;
    }

    var first = focusable[0];
    var last = focusable[focusable.length - 1];
    if (!target.contains(document.activeElement)) {
      event.preventDefault();
      first.focus();
    } else if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }

  function moveCarousel(control) {
    var root = control.closest("[data-adlaire-carousel]");
    if (!root) {
      return;
    }

    var track = root.querySelector(".adlaire-carousel-track");
    var slides = Array.prototype.slice.call(root.querySelectorAll(".adlaire-carousel-slide"));
    if (!track || slides.length === 0) {
      return;
    }

    var current = Number(root.getAttribute("data-adlaire-carousel-index") || "0");
    var requested = control.getAttribute("data-adlaire-carousel-index");
    var action = control.getAttribute("data-adlaire-carousel-action");
    var next = requested !== null ? Number(requested) : current + (action === "previous" ? -1 : 1);
    if (!Number.isFinite(next)) {
      next = 0;
    }

    if (next < 0) {
      next = slides.length - 1;
    }
    if (next >= slides.length) {
      next = 0;
    }

    root.setAttribute("data-adlaire-carousel-index", String(next));
    track.style.transform = "translateX(-" + (next * 100) + "%)";
    slides.forEach(function (slide, index) {
      var currentSlide = index === next;
      slide.classList.toggle("is-current", currentSlide);
      slide.setAttribute("aria-hidden", currentSlide ? "false" : "true");
    });
    Array.prototype.filter.call(root.querySelectorAll("[data-adlaire-carousel-index]"), function (indicator) {
      return !indicator.hasAttribute("data-adlaire-carousel");
    }).forEach(function (indicator, index) {
      indicator.setAttribute("aria-current", index === next ? "true" : "false");
    });
  }

  function hookSelector(attribute) {
    return "[" + attribute + "]";
  }

  function choiceBinding(attribute, rootSelector, selectedAttribute, itemAttribute) {
    var item = itemAttribute || attribute;
    return {
      selector: hookSelector(attribute),
      rootSelector: rootSelector,
      itemSelector: hookSelector(item),
      selectedAttribute: selectedAttribute
    };
  }

  function booleanBinding(attribute, stateAttribute) {
    return {
      selector: hookSelector(attribute),
      stateAttribute: stateAttribute
    };
  }

  function stepBinding(attribute, rootSelector, itemAttribute) {
    var item = itemAttribute || attribute;
    return {
      selector: hookSelector(attribute),
      rootSelector: rootSelector,
      itemSelector: hookSelector(item)
    };
  }

  var interactiveChoiceBindings = [
    choiceBinding("data-adlaire-time-slot", ".adlaire-time-slot-grid", "aria-selected"),
    choiceBinding("data-adlaire-floor-select", ".adlaire-floor-selector", "aria-pressed"),
    choiceBinding("data-adlaire-option-select", "[data-adlaire-option-group]", "aria-selected"),
    choiceBinding("data-adlaire-shift-select", ".adlaire-shift-roster", "aria-selected"),
    choiceBinding("data-adlaire-confidence-select", ".adlaire-confidence-indicator", "aria-pressed"),
    choiceBinding("data-adlaire-route-select", ".adlaire-delivery-route-board", "aria-selected"),
    choiceBinding("data-adlaire-evidence-select", ".adlaire-evidence-list", "aria-selected"),
    choiceBinding("data-adlaire-ticket-priority-select", ".adlaire-ticket-priority-board", "aria-selected"),
    choiceBinding("data-adlaire-report-parameter-select", ".adlaire-report-parameter-bar", "aria-pressed"),
    choiceBinding("data-adlaire-channel-select", ".adlaire-channel-list", "aria-selected"),
    choiceBinding("data-adlaire-editorial-gate-select", ".adlaire-review-gate-panel", "aria-selected"),
    choiceBinding("data-adlaire-locale-select", ".adlaire-locale-switcher-panel", "aria-selected"),
    choiceBinding("data-adlaire-moderation-decision", ".adlaire-moderation-queue", "aria-pressed"),
    choiceBinding("data-adlaire-device-select", ".adlaire-device-registry-table", "aria-selected"),
    choiceBinding("data-adlaire-deployment-ring-select", ".adlaire-deployment-ring-selector", "aria-selected"),
    choiceBinding("data-adlaire-fare-option-select", ".adlaire-booking-summary-panel", "aria-selected"),
    choiceBinding("data-adlaire-room-select", ".adlaire-room-inventory-board", "aria-selected"),
    choiceBinding("data-adlaire-permit-step-select", ".adlaire-document-requirement-list", "aria-selected"),
    choiceBinding("data-adlaire-volunteer-shift-select", ".adlaire-volunteer-shift-board", "aria-selected"),
    choiceBinding("data-adlaire-demand-response-select", ".adlaire-demand-response-panel", "aria-selected"),
    choiceBinding("data-adlaire-outage-report-select", ".adlaire-service-appointment-board", "aria-selected"),
    choiceBinding("data-adlaire-density-select", ".adlaire-density-switcher", "aria-pressed"),
    choiceBinding("data-adlaire-saved-view-select", ".adlaire-view-preset-switcher", "aria-pressed"),
    choiceBinding("data-adlaire-checkpoint-select", ".adlaire-execution-timeline", "aria-selected"),
    choiceBinding("data-adlaire-sdk-select", ".adlaire-sdk-selector", "aria-pressed"),
    choiceBinding("data-adlaire-environment-select", ".adlaire-api-explorer-panel", "aria-selected"),
    choiceBinding("data-adlaire-theme-select", ".adlaire-theme-workspace-panel", "aria-pressed")
  ];

  var booleanStateBindings = [
    booleanBinding("data-adlaire-service-check", "aria-checked"),
    booleanBinding("data-adlaire-policy-acknowledgement", "aria-pressed"),
    booleanBinding("data-adlaire-attestation-toggle", "aria-pressed"),
    booleanBinding("data-adlaire-care-plan-check", "aria-checked"),
    booleanBinding("data-adlaire-success-playbook-check", "aria-checked"),
    booleanBinding("data-adlaire-quiet-hours-toggle", "aria-pressed"),
    booleanBinding("data-adlaire-topic-preference-toggle", "aria-checked"),
    booleanBinding("data-adlaire-handoff-check", "aria-checked"),
    booleanBinding("data-adlaire-recovery-task-check", "aria-checked"),
    booleanBinding("data-adlaire-eligibility-check", "aria-checked"),
    booleanBinding("data-adlaire-disclosure-check", "aria-checked"),
    booleanBinding("data-adlaire-bulk-selection-toggle", "aria-selected"),
    booleanBinding("data-adlaire-verification-check", "aria-checked"),
    booleanBinding("data-adlaire-record-row-toggle", "aria-selected"),
    booleanBinding("data-adlaire-inline-edit-toggle", "aria-pressed"),
    booleanBinding("data-adlaire-bulk-confirm-toggle", "aria-pressed"),
    booleanBinding("data-adlaire-tool-permission-toggle", "aria-pressed"),
    booleanBinding("data-adlaire-approval-gate-toggle", "aria-pressed"),
    booleanBinding("data-adlaire-notification-policy-toggle", "aria-pressed"),
    booleanBinding("data-adlaire-connection-test-toggle", "aria-pressed"),
    booleanBinding("data-adlaire-migration-step-toggle", "aria-checked"),
    booleanBinding("data-adlaire-dark-mode-toggle", "aria-pressed"),
    booleanBinding("data-adlaire-high-contrast-toggle", "aria-pressed"),
    booleanBinding("data-adlaire-token-override-toggle", "aria-checked")
  ];

  var currentStepBindings = [
    stepBinding("data-adlaire-pipeline-stage-select", ".adlaire-pipeline-stage-rail"),
    stepBinding("data-adlaire-milestone-select", ".adlaire-milestone-tracker")
  ];

  function closestBoundTrigger(source, bindings) {
    if (!source) {
      return null;
    }
    for (var index = 0; index < bindings.length; index += 1) {
      var binding = bindings[index];
      var trigger = source.closest(binding.selector);
      if (trigger) {
        return [trigger, binding];
      }
    }
    return null;
  }

  function handleDeclarativeInteraction(event, source) {
    var choice = closestBoundTrigger(source, interactiveChoiceBindings);
    if (choice) {
      event.preventDefault();
      selectInteractiveChoice(choice[0], choice[1].rootSelector, choice[1].itemSelector, choice[1].selectedAttribute);
      return true;
    }

    var toggle = closestBoundTrigger(source, booleanStateBindings);
    if (toggle) {
      event.preventDefault();
      toggleBooleanState(toggle[0], toggle[1].stateAttribute);
      return true;
    }

    var currentStep = closestBoundTrigger(source, currentStepBindings);
    if (currentStep) {
      event.preventDefault();
      selectCurrentStep(currentStep[0], currentStep[1].rootSelector, currentStep[1].itemSelector);
      return true;
    }

    return false;
  }

  document.addEventListener("click", function (event) {
    var copy = event.target.closest("[data-adlaire-copy]");
    var remove = event.target.closest("[data-adlaire-remove]");
    var toastDismiss = event.target.closest("[data-adlaire-toast-dismiss]");
    var select = event.target.closest("[data-adlaire-select]");
    var sidebarToggle = event.target.closest("[data-adlaire-sidebar-toggle]");
    var treeToggle = event.target.closest("[data-adlaire-tree-toggle]");
    var workspaceTab = event.target.closest("[data-adlaire-workspace-tab]");
    var contextMenu = event.target.closest("[data-adlaire-context-menu]");
    var splitToggle = event.target.closest("[data-adlaire-split-button-toggle]");
    var overflowToggle = event.target.closest("[data-adlaire-overflow-toggle]");
    var dockToggle = event.target.closest("[data-adlaire-dock-toggle]");
    var folderToggle = event.target.closest("[data-adlaire-folder-toggle]");
    var policyExceptionToggle = event.target.closest("[data-adlaire-policy-exception-toggle]");

    if (copy) {
      var copyTarget = getTarget(copy);
      var text = copyTarget ? copyTarget.textContent : copy.getAttribute("data-adlaire-copy");
      if (text && navigator.clipboard) {
        navigator.clipboard.writeText(text);
        copy.setAttribute("data-adlaire-copied", "true");
      }
    }

    if (remove) {
      var removable = getTarget(remove) || remove.closest(".adlaire-toast, .adlaire-snackbar, .adlaire-upload-item, .adlaire-attachment-item");
      if (removable) {
        removable.remove();
      }
    }

    if (toastDismiss) {
      var toast = toastDismiss.closest(".adlaire-toast");
      if (toast) {
        toast.remove();
      }
    }

    if (select) {
      var list = select.closest("[data-adlaire-select-list]");
      if (list) {
        list.querySelectorAll("[data-adlaire-select]").forEach(function (item) {
          item.setAttribute("aria-selected", item === select ? "true" : "false");
        });
      }
    }

    if (sidebarToggle) {
      event.preventDefault();
      toggleSidebar(sidebarToggle);
    }

    if (treeToggle) {
      event.preventDefault();
      toggleTree(treeToggle);
    }

    if (workspaceTab) {
      event.preventDefault();
      selectWorkspaceTab(workspaceTab);
    }

    if (contextMenu) {
      event.preventDefault();
      toggleDisclosureSurface(contextMenu, "data-adlaire-context-menu");
    }

    if (splitToggle) {
      event.preventDefault();
      toggleDisclosureSurface(splitToggle, "data-adlaire-split-button-toggle", ".adlaire-split-button", ".adlaire-context-menu, .adlaire-overflow-toolbar-menu");
    }

    if (overflowToggle) {
      event.preventDefault();
      toggleDisclosureSurface(overflowToggle, "data-adlaire-overflow-toggle", ".adlaire-overflow-toolbar", ".adlaire-overflow-toolbar-menu");
    }

    if (dockToggle) {
      event.preventDefault();
      toggleDockPanel(dockToggle);
    }

    if (handleDeclarativeInteraction(event, event.target)) {
      return;
    }

    if (folderToggle) {
      event.preventDefault();
      toggleFolderBranch(folderToggle);
    }

    if (policyExceptionToggle) {
      event.preventDefault();
      toggleDisclosureSurface(policyExceptionToggle, "data-adlaire-policy-exception-toggle", ".adlaire-policy-exception-panel", ".adlaire-policy-exception-body");
    }
  });

  function toggleSidebar(trigger) {
    var selector = trigger.getAttribute("data-adlaire-sidebar-toggle") || trigger.getAttribute("data-adlaire-target");
    var controlled = trigger.getAttribute("aria-controls");
    var shell = querySidebarShell(selector) || (controlled ? document.getElementById(controlled) : trigger.closest(".adlaire-app-shell"));
    if (!shell) {
      return;
    }

    var collapsed = !shell.classList.contains("adlaire-sidebar-collapsed");
    shell.classList.toggle("adlaire-sidebar-collapsed", collapsed);
    if (shell.id && !trigger.getAttribute("aria-controls")) {
      trigger.setAttribute("aria-controls", shell.id);
    }
    trigger.setAttribute("aria-expanded", collapsed ? "false" : "true");
    trigger.setAttribute("aria-pressed", collapsed ? "true" : "false");
  }

  function querySidebarShell(selector) {
    if (!selector) {
      return null;
    }
    try {
      return document.querySelector(selector);
    } catch (error) {
      return null;
    }
  }

  function toggleTree(trigger) {
    var selector = trigger.getAttribute("data-adlaire-tree-toggle") || trigger.getAttribute("aria-controls");
    var branch = queryTreeBranch(selector, trigger);
    if (!branch) {
      return;
    }

    var expanded = trigger.getAttribute("aria-expanded") !== "true";
    trigger.setAttribute("aria-expanded", expanded ? "true" : "false");
    branch.hidden = !expanded;
    branch.classList.toggle("is-open", expanded);
  }

  function queryTreeBranch(selector, trigger) {
    if (selector) {
      var normalized = selector.charAt(0) === "#" ? selector.slice(1) : selector;
      var byId = document.getElementById(normalized);
      if (byId) {
        return byId;
      }
      try {
        var queried = document.querySelector(selector);
        if (queried) {
          return queried;
        }
      } catch (error) {
        return null;
      }
    }
    var item = trigger.closest(".adlaire-tree-item");
    return item ? item.querySelector(".adlaire-tree-branch") : null;
  }

  function selectWorkspaceTab(trigger) {
    var root = trigger.closest(".adlaire-tab-workspace") || document;
    var group = trigger.getAttribute("data-adlaire-group");
    var tabs = Array.prototype.filter.call(root.querySelectorAll("[data-adlaire-workspace-tab]"), function (tab) {
      return !group || tab.getAttribute("data-adlaire-group") === group;
    });

    tabs.forEach(function (tab) {
      var selected = tab === trigger;
      tab.setAttribute("aria-selected", selected ? "true" : "false");
      tab.setAttribute("tabindex", selected ? "0" : "-1");
      var panel = queryReferencedTarget(tab, "data-adlaire-workspace-tab");
      if (panel) {
        panel.hidden = !selected;
        panel.classList.toggle("is-open", selected);
      }
    });
  }

  function toggleDisclosureSurface(trigger, attribute, rootSelector, fallbackSelector) {
    var root = rootSelector ? trigger.closest(rootSelector) : null;
    var target = queryReferencedTarget(trigger, attribute) || (root && fallbackSelector ? root.querySelector(fallbackSelector) : null);
    if (!target) {
      return;
    }

    var expanded = trigger.getAttribute("aria-expanded") !== "true";
    trigger.setAttribute("aria-expanded", expanded ? "true" : "false");
    target.hidden = !expanded;
    target.classList.toggle("is-open", expanded);
  }

  function toggleDockPanel(trigger) {
    var panel = queryReferencedTarget(trigger, "data-adlaire-dock-toggle") || trigger.closest(".adlaire-dock-panel");
    if (!panel) {
      return;
    }

    var collapsed = !panel.classList.contains("is-collapsed");
    panel.classList.toggle("is-collapsed", collapsed);
    trigger.setAttribute("aria-expanded", collapsed ? "false" : "true");
    trigger.setAttribute("aria-pressed", collapsed ? "true" : "false");
  }

  function selectInteractiveChoice(trigger, rootSelector, itemSelector, selectedAttribute) {
    var root = trigger.closest(rootSelector);
    if (!root) {
      return;
    }

    root.querySelectorAll(itemSelector).forEach(function (item) {
      var selected = item === trigger;
      item.setAttribute(selectedAttribute, selected ? "true" : "false");
      item.classList.toggle("is-selected", selected);
    });
  }

  function selectCurrentStep(trigger, rootSelector, itemSelector) {
    var root = trigger.closest(rootSelector);
    if (!root) {
      return;
    }

    root.querySelectorAll(itemSelector).forEach(function (item) {
      var selected = item === trigger;
      if (selected) {
        item.setAttribute("aria-current", "step");
      } else {
        item.removeAttribute("aria-current");
      }
      item.classList.toggle("is-selected", selected);
    });
  }

  function toggleBooleanState(trigger, stateAttribute) {
    var active = trigger.getAttribute(stateAttribute) !== "true";
    trigger.setAttribute(stateAttribute, active ? "true" : "false");
    trigger.classList.toggle("is-selected", active);
  }

  function toggleFolderBranch(trigger) {
    var item = trigger.closest(".adlaire-folder-item");
    var branch = queryReferencedTarget(trigger, "data-adlaire-folder-toggle") || (item ? item.querySelector(".adlaire-folder-branch") : null);
    if (!branch) {
      return;
    }

    var expanded = trigger.getAttribute("aria-expanded") !== "true";
    trigger.setAttribute("aria-expanded", expanded ? "true" : "false");
    branch.hidden = !expanded;
    branch.classList.toggle("is-open", expanded);
  }

  document.addEventListener("input", function (event) {
    var filter = event.target.closest("[data-adlaire-filter-input]");
    var search = event.target.closest("[data-adlaire-search-input]");
    var previewCompare = event.target.closest("[data-adlaire-preview-compare]");
    if (filter) {
      applyTextFilter(filter);
    }
    if (search) {
      applyTextFilter(search);
    }
    if (previewCompare) {
      updatePreviewCompare(previewCompare);
    }
  });

  function applyTextFilter(input) {
    var root = document.querySelector(input.getAttribute("data-adlaire-filter-root") || input.getAttribute("data-adlaire-search-root"));
    var itemSelector = input.getAttribute("data-adlaire-filter-item") || input.getAttribute("data-adlaire-search-item");
    if (!root || !itemSelector) {
      return;
    }

    var query = input.value.trim().toLowerCase();
    root.querySelectorAll(itemSelector).forEach(function (item) {
      var matched = item.textContent.toLowerCase().indexOf(query) !== -1;
      item.hidden = !matched;
    });
  }

  function updatePreviewCompare(input) {
    var compare = queryReferencedTarget(input, "data-adlaire-preview-compare") || input.closest(".adlaire-preview-compare");
    if (!compare) {
      return;
    }

    var value = Number(input.value);
    if (!Number.isFinite(value)) {
      return;
    }
    compare.style.setProperty("--adlaire-preview-compare-position", Math.max(0, Math.min(100, value)) + "%");
  }

  document.querySelectorAll("[data-adlaire-split-pane]").forEach(function (root) {
    var handle = root.querySelector(".adlaire-pane-resize-handle");
    var panes = root.querySelectorAll(".adlaire-pane");
    if (!handle || panes.length < 2) {
      return;
    }
    handle.addEventListener("keydown", function (event) {
      var current = Number(root.getAttribute("data-adlaire-pane-ratio") || "50");
      if (event.key === "ArrowLeft") {
        current = Math.max(20, current - 5);
      } else if (event.key === "ArrowRight") {
        current = Math.min(80, current + 5);
      } else {
        return;
      }
      event.preventDefault();
      root.setAttribute("data-adlaire-pane-ratio", String(current));
      root.style.gridTemplateColumns = current + "% 8px 1fr";
    });
  });
}());
