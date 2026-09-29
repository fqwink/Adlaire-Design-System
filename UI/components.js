/* Adlaire-Design component interactions */
(function () {
  "use strict";

  var lastFocus = null;
  var overlaySelector = ".adlaire-modal, .adlaire-dialog, .adlaire-drawer, .adlaire-bottom-sheet";
  var openOverlaySelector = ".adlaire-modal.is-open, .adlaire-dialog.is-open, .adlaire-drawer.is-open, .adlaire-bottom-sheet.is-open";

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

  function safeDocumentQueryAll(selector) {
    return safeScopedQueryAll(document, selector);
  }

  function syncOverlayRootState() {
    document.documentElement.classList.toggle("adlaire-overlay-open", Boolean(safeDocumentQuery(openOverlaySelector)));
  }

  function writeClipboardText(text) {
    var clipboard = navigator.clipboard;
    if (!clipboard || !clipboard.writeText) {
      return false;
    }
    try {
      void clipboard.writeText(text).catch(function () {
        return undefined;
      });
      return true;
    } catch (error) {
      return false;
    }
  }

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
    return safeDocumentQuery(selector);
  }

  function setExpanded(trigger, target, expanded) {
    setBooleanAttribute(trigger, "aria-expanded", expanded);
    if (target) {
      setOpenState(target, expanded);
      if (expanded && target.matches(overlaySelector)) {
        document.documentElement.classList.add("adlaire-overlay-open");
      }
      if (!expanded) {
        syncOverlayRootState();
      }
    }
  }

  function triggersForTarget(target) {
    if (!target || !target.id) {
      return [];
    }

    return safeDocumentQueryAll("[data-adlaire-toggle][data-adlaire-target]").filter(function (trigger) {
      return trigger.getAttribute("data-adlaire-target") === "#" + target.id;
    }).concat(safeDocumentQueryAll("[data-adlaire-toggle][href]").filter(function (trigger) {
      return trigger.getAttribute("href") === "#" + target.id;
    }));
  }

  function getFocusable(target) {
    return safeScopedQueryAll(target, "button, [href], input, select, textarea, [tabindex]:not([tabindex='-1'])").filter(function (item) {
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

    safeDocumentQueryAll("[data-adlaire-toggle][data-adlaire-group]").forEach(function (item) {
      if (item.getAttribute("data-adlaire-group") !== group) {
        return;
      }
      if (item === trigger) {
        return;
      }
      setExpanded(item, getTarget(item), false);
    });

    if (target && target.getAttribute("role") === "tabpanel") {
      safeDocumentQueryAll('[role="tabpanel"][data-adlaire-group]').forEach(function (panel) {
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

  var overlayClickBindings = [
    componentSelectorBinding("[data-adlaire-dismiss]", dismissSurface),
    componentSelectorBinding("[data-adlaire-carousel-action], [data-adlaire-carousel-index]:not([data-adlaire-carousel])", moveCarouselFromTrigger, true),
    componentBinding("data-adlaire-toggle", toggleTargetSurface, true)
  ];

  document.addEventListener("click", function (event) {
    handleFirstComponentClick(event, eventSourceElement(event), overlayClickBindings);
  });

  var componentKeyBindings = [
    componentKeyBinding("Tab", containActiveOverlayFocus),
    componentKeyBinding("Escape", closeOpenSurfaces)
  ];

  document.addEventListener("keydown", function (event) {
    handleFirstComponentKey(event, componentKeyBindings);
  });

  function dismissSurface(dismiss) {
    var dismissTarget = getTarget(dismiss) || dismiss.closest(".adlaire-modal, .adlaire-dialog, .adlaire-drawer, .adlaire-bottom-sheet, .adlaire-popover, .adlaire-dropdown-menu, .adlaire-toast");
    if (dismissTarget) {
      setOpenState(dismissTarget, false);
      triggersForTarget(dismissTarget).forEach(function (item) {
        setBooleanAttribute(item, "aria-expanded", false);
      });
    }
    syncOverlayRootState();
    if (lastFocus && typeof lastFocus.focus === "function") {
      lastFocus.focus();
    }
  }

  function moveCarouselFromTrigger(trigger) {
    moveCarousel(trigger);
  }

  function toggleTargetSurface(trigger) {
    var target = getTarget(trigger);
    if (!target) {
      return;
    }

    var isExpanded = trigger.getAttribute("aria-expanded") === "true";
    lastFocus = trigger;
    closeSiblings(trigger, target);
    setExpanded(trigger, target, !isExpanded);
    if (!isExpanded && target.matches(overlaySelector)) {
      focusFirst(target);
    }
  }

  function containActiveOverlayFocus(event) {
    var activeOverlay = safeDocumentQuery(openOverlaySelector);
    if (!activeOverlay) {
      return false;
    }
    containFocus(event, activeOverlay);
    return true;
  }

  function closeOpenSurfaces() {
    safeDocumentQueryAll(openOverlaySelector + ", .adlaire-popover.is-open, .adlaire-dropdown-menu.is-open, .adlaire-context-menu.is-open, .adlaire-overflow-toolbar-menu.is-open").forEach(function (target) {
      setOpenState(target, false);
      triggersForTarget(target).forEach(function (trigger) {
        setBooleanAttribute(trigger, "aria-expanded", false);
      });
    });
    safeDocumentQueryAll("[data-adlaire-context-menu], [data-adlaire-split-button-toggle], [data-adlaire-overflow-toggle]").forEach(function (trigger) {
      setBooleanAttribute(trigger, "aria-expanded", false);
    });
    document.documentElement.classList.remove("adlaire-overlay-open");
    if (lastFocus && typeof lastFocus.focus === "function") {
      lastFocus.focus();
    }
    return true;
  }

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

    var track = safeScopedQuery(root, ".adlaire-carousel-track");
    var slides = safeScopedQueryAll(root, ".adlaire-carousel-slide");
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
      setBooleanAttribute(slide, "aria-hidden", !currentSlide);
    });
    safeScopedQueryAll(root, "[data-adlaire-carousel-index]").filter(function (indicator) {
      return !indicator.hasAttribute("data-adlaire-carousel");
    }).forEach(function (indicator, index) {
      setBooleanAttribute(indicator, "aria-current", index === next);
    });
  }

  function hookSelector(attribute) {
    return "[" + attribute + "]";
  }

  function componentSelectorBinding(selector, handle, preventDefault) {
    return {
      selector: selector,
      preventDefault: Boolean(preventDefault),
      handle: handle
    };
  }

  function componentBinding(attribute, handle, preventDefault) {
    return componentSelectorBinding(hookSelector(attribute), handle, preventDefault);
  }

  function componentInputBinding(attribute, handle) {
    return {
      selector: hookSelector(attribute),
      handle: handle
    };
  }

  function componentKeyBinding(key, handle) {
    return {
      key: key,
      handle: handle
    };
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

  function queryInteractionRoot(trigger, rootSelector) {
    return trigger.closest(rootSelector) || trigger.parentElement;
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

  function closestBoundTrigger(source, bindings, startIndex) {
    if (!source) {
      return null;
    }
    for (var index = startIndex || 0; index < bindings.length; index += 1) {
      var binding = bindings[index];
      var trigger = source.closest(binding.selector);
      if (trigger) {
        return [trigger, binding, index];
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

  function handleFirstComponentClick(event, source, bindings) {
    var match = closestBoundTrigger(source, bindings);
    if (!match) {
      return false;
    }
    if (match[1].preventDefault) {
      event.preventDefault();
    }
    match[1].handle(match[0], event);
    return true;
  }

  function handleEveryComponentClick(event, source, bindings) {
    var handled = false;
    var match = closestBoundTrigger(source, bindings);
    while (match) {
      var trigger = match[0];
      var binding = match[1];
      var index = match[2];
      if (binding.preventDefault) {
        event.preventDefault();
      }
      binding.handle(trigger, event);
      handled = true;
      match = closestBoundTrigger(source, bindings, index + 1);
    }
    return handled;
  }

  function handleEveryComponentInput(source, bindings) {
    var handled = false;
    var match = closestBoundTrigger(source, bindings);
    while (match) {
      var trigger = match[0];
      var binding = match[1];
      var index = match[2];
      if (trigger instanceof HTMLInputElement) {
        binding.handle(trigger);
        handled = true;
      }
      match = closestBoundTrigger(source, bindings, index + 1);
    }
    return handled;
  }

  function handleFirstComponentKey(event, bindings) {
    for (var index = 0; index < bindings.length; index += 1) {
      var binding = bindings[index];
      if (event.key !== binding.key) {
        continue;
      }
      if (binding.handle(event)) {
        return true;
      }
    }
    return false;
  }

  var componentClickBindings = [
    componentBinding("data-adlaire-copy", copyText),
    componentBinding("data-adlaire-remove", removeTarget),
    componentBinding("data-adlaire-toast-dismiss", dismissToast),
    componentBinding("data-adlaire-select", selectListItem),
    componentBinding("data-adlaire-sidebar-toggle", toggleSidebar, true),
    componentBinding("data-adlaire-tree-toggle", toggleTree, true),
    componentBinding("data-adlaire-workspace-tab", selectWorkspaceTab, true),
    componentBinding("data-adlaire-context-menu", function (trigger) { toggleDisclosureSurface(trigger, "data-adlaire-context-menu"); }, true),
    componentBinding("data-adlaire-split-button-toggle", function (trigger) { toggleDisclosureSurface(trigger, "data-adlaire-split-button-toggle", ".adlaire-split-button", ".adlaire-context-menu, .adlaire-overflow-toolbar-menu"); }, true),
    componentBinding("data-adlaire-overflow-toggle", function (trigger) { toggleDisclosureSurface(trigger, "data-adlaire-overflow-toggle", ".adlaire-overflow-toolbar", ".adlaire-overflow-toolbar-menu"); }, true),
    componentBinding("data-adlaire-dock-toggle", toggleDockPanel, true)
  ];

  var deferredComponentClickBindings = [
    componentBinding("data-adlaire-folder-toggle", toggleFolderBranch, true),
    componentBinding("data-adlaire-policy-exception-toggle", function (trigger) { toggleDisclosureSurface(trigger, "data-adlaire-policy-exception-toggle", ".adlaire-policy-exception-panel", ".adlaire-policy-exception-body"); }, true)
  ];

  document.addEventListener("click", function (event) {
    var source = eventSourceElement(event);
    handleEveryComponentClick(event, source, componentClickBindings);
    if (handleDeclarativeInteraction(event, source)) {
      return;
    }
    handleEveryComponentClick(event, source, deferredComponentClickBindings);
  });

  function copyText(copy) {
    var copyTarget = getTarget(copy);
    var text = copyTarget ? copyTarget.textContent : copy.getAttribute("data-adlaire-copy");
    if (text && writeClipboardText(text)) {
      copy.setAttribute("data-adlaire-copied", "true");
    }
  }

  function removeTarget(remove) {
    var removable = getTarget(remove) || remove.closest(".adlaire-toast, .adlaire-snackbar, .adlaire-upload-item, .adlaire-attachment-item");
    if (removable) {
      removable.remove();
    }
  }

  function dismissToast(toastDismiss) {
    var toast = toastDismiss.closest(".adlaire-toast");
    if (toast) {
      toast.remove();
    }
  }

  function selectListItem(select) {
    var list = select.closest("[data-adlaire-select-list]");
    if (!list) {
      return;
    }
    safeScopedQueryAll(list, "[data-adlaire-select]").forEach(function (item) {
      setBooleanAttribute(item, "aria-selected", item === select);
    });
  }

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
    setBooleanAttribute(trigger, "aria-expanded", !collapsed);
    setBooleanAttribute(trigger, "aria-pressed", collapsed);
  }

  function querySidebarShell(selector) {
    return safeDocumentQuery(selector);
  }

  function toggleTree(trigger) {
    var selector = trigger.getAttribute("data-adlaire-tree-toggle") || trigger.getAttribute("aria-controls");
    var branch = queryTreeBranch(selector, trigger);
    if (!branch) {
      return;
    }

    var expanded = trigger.getAttribute("aria-expanded") !== "true";
    setBooleanAttribute(trigger, "aria-expanded", expanded);
    setOpenState(branch, expanded);
  }

  function queryTreeBranch(selector, trigger) {
    if (selector) {
      var normalized = selector.charAt(0) === "#" ? selector.slice(1) : selector;
      var byId = document.getElementById(normalized);
      if (byId) {
        return byId;
      }
      return safeDocumentQuery(selector);
    }
    return safeScopedQuery(trigger.closest(".adlaire-tree-item"), ".adlaire-tree-branch");
  }

  function selectWorkspaceTab(trigger) {
    var root = trigger.closest(".adlaire-tab-workspace") || document;
    var group = trigger.getAttribute("data-adlaire-group");
    var tabs = safeScopedQueryAll(root, "[data-adlaire-workspace-tab]").filter(function (tab) {
      return !group || tab.getAttribute("data-adlaire-group") === group;
    });

    tabs.forEach(function (tab) {
      var selected = tab === trigger;
      setBooleanAttribute(tab, "aria-selected", selected);
      tab.setAttribute("tabindex", selected ? "0" : "-1");
      var panel = queryReferencedTarget(tab, "data-adlaire-workspace-tab");
      if (panel) {
        setOpenState(panel, selected);
      }
    });
  }

  function toggleDisclosureSurface(trigger, attribute, rootSelector, fallbackSelector) {
    var root = rootSelector ? trigger.closest(rootSelector) : null;
    var target = queryReferencedTarget(trigger, attribute) || safeScopedQuery(root, fallbackSelector);
    if (!target) {
      return;
    }

    var expanded = trigger.getAttribute("aria-expanded") !== "true";
    setBooleanAttribute(trigger, "aria-expanded", expanded);
    setOpenState(target, expanded);
  }

  function toggleDockPanel(trigger) {
    var panel = queryReferencedTarget(trigger, "data-adlaire-dock-toggle") || trigger.closest(".adlaire-dock-panel");
    if (!panel) {
      return;
    }

    var collapsed = !panel.classList.contains("is-collapsed");
    panel.classList.toggle("is-collapsed", collapsed);
    setBooleanAttribute(trigger, "aria-expanded", !collapsed);
    setBooleanAttribute(trigger, "aria-pressed", collapsed);
  }

  function selectInteractiveChoice(trigger, rootSelector, itemSelector, selectedAttribute) {
    var root = queryInteractionRoot(trigger, rootSelector);
    if (!root) {
      return;
    }

    safeScopedQueryAll(root, itemSelector).forEach(function (item) {
      var selected = item === trigger;
      setBooleanAttribute(item, selectedAttribute, selected);
      item.classList.toggle("is-selected", selected);
    });
  }

  function selectCurrentStep(trigger, rootSelector, itemSelector) {
    var root = queryInteractionRoot(trigger, rootSelector);
    if (!root) {
      return;
    }

    safeScopedQueryAll(root, itemSelector).forEach(function (item) {
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
    setBooleanAttribute(trigger, stateAttribute, active);
    trigger.classList.toggle("is-selected", active);
  }

  function toggleFolderBranch(trigger) {
    var branch = queryReferencedTarget(trigger, "data-adlaire-folder-toggle") || safeScopedQuery(trigger.closest(".adlaire-folder-item"), ".adlaire-folder-branch");
    if (!branch) {
      return;
    }

    var expanded = trigger.getAttribute("aria-expanded") !== "true";
    setBooleanAttribute(trigger, "aria-expanded", expanded);
    setOpenState(branch, expanded);
  }

  var componentInputBindings = [
    componentInputBinding("data-adlaire-filter-input", applyTextFilter),
    componentInputBinding("data-adlaire-search-input", applyTextFilter),
    componentInputBinding("data-adlaire-preview-compare", updatePreviewCompare)
  ];

  document.addEventListener("input", function (event) {
    handleEveryComponentInput(eventSourceElement(event), componentInputBindings);
  });

  function applyTextFilter(input) {
    var root = safeDocumentQuery(input.getAttribute("data-adlaire-filter-root") || input.getAttribute("data-adlaire-search-root"));
    var itemSelector = input.getAttribute("data-adlaire-filter-item") || input.getAttribute("data-adlaire-search-item");
    if (!root || !itemSelector) {
      return;
    }

    var query = input.value.trim().toLowerCase();
    safeScopedQueryAll(root, itemSelector).forEach(function (item) {
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

  function numberAttribute(target, attribute, fallback) {
    var raw = target.getAttribute(attribute);
    if (raw === null) {
      return fallback;
    }
    var value = Number(raw);
    return Number.isFinite(value) ? value : fallback;
  }

  function clamp(value, min, max) {
    return Math.min(max, Math.max(min, value));
  }

  function panelSize(root, handle, min, max) {
    var raw = root.getAttribute("data-adlaire-panel-size");
    if (raw === null) {
      raw = handle.getAttribute("aria-valuenow");
    }
    if (raw === null) {
      return clamp(320, min, max);
    }
    var value = Number(raw);
    return Number.isFinite(value) ? clamp(value, min, max) : clamp(320, min, max);
  }

  function applyResizablePanelSize(root, handle, size) {
    var min = numberAttribute(root, "data-adlaire-panel-min", 180);
    var max = numberAttribute(root, "data-adlaire-panel-max", 520);
    var next = Math.round(clamp(size, min, max));
    root.setAttribute("data-adlaire-panel-size", String(next));
    root.style.gridTemplateColumns = "minmax(" + min + "px, " + next + "px) 8px minmax(0, 1fr)";
    handle.setAttribute("aria-valuemin", String(min));
    handle.setAttribute("aria-valuemax", String(max));
    handle.setAttribute("aria-valuenow", String(next));
  }

  function resizePanelWithKeyboard(root, handle, event) {
    var min = numberAttribute(root, "data-adlaire-panel-min", 180);
    var max = numberAttribute(root, "data-adlaire-panel-max", 520);
    var step = numberAttribute(root, "data-adlaire-panel-step", 24);
    var next = panelSize(root, handle, min, max);
    if (event.key === "ArrowLeft") {
      next -= step;
    } else if (event.key === "ArrowRight") {
      next += step;
    } else if (event.key === "Home") {
      next = min;
    } else if (event.key === "End") {
      next = max;
    } else {
      return;
    }
    event.preventDefault();
    applyResizablePanelSize(root, handle, next);
  }

  function startResizablePanelDrag(root, handle, event) {
    if (event.button !== 0) {
      return;
    }
    var rect = root.getBoundingClientRect();
    var move = function (moveEvent) {
      applyResizablePanelSize(root, handle, moveEvent.clientX - rect.left);
    };
    var stop = function (stopEvent) {
      document.removeEventListener("pointermove", move);
      try {
        handle.releasePointerCapture(stopEvent.pointerId);
      } catch (error) {
        return;
      }
    };
    event.preventDefault();
    try {
      handle.setPointerCapture(event.pointerId);
    } catch (error) {
      return;
    }
    document.addEventListener("pointermove", move);
    document.addEventListener("pointerup", stop, { once: true });
    document.addEventListener("pointercancel", stop, { once: true });
  }

  safeDocumentQueryAll("[data-adlaire-resizable-panel]").forEach(function (root) {
    var handle = safeScopedQuery(root, "[data-adlaire-resize-handle], .adlaire-resize-handle");
    if (!handle) {
      return;
    }
    if (!handle.hasAttribute("tabindex")) {
      handle.setAttribute("tabindex", "0");
    }
    if (!handle.hasAttribute("role")) {
      handle.setAttribute("role", "separator");
    }
    handle.setAttribute("aria-orientation", "vertical");
    applyResizablePanelSize(root, handle, panelSize(root, handle, numberAttribute(root, "data-adlaire-panel-min", 180), numberAttribute(root, "data-adlaire-panel-max", 520)));
    handle.addEventListener("keydown", function (event) {
      resizePanelWithKeyboard(root, handle, event);
    });
    handle.addEventListener("pointerdown", function (event) {
      startResizablePanelDrag(root, handle, event);
    });
  });

  safeDocumentQueryAll("[data-adlaire-split-pane]").forEach(function (root) {
    var handle = safeScopedQuery(root, ".adlaire-pane-resize-handle");
    var panes = safeScopedQueryAll(root, ".adlaire-pane");
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
