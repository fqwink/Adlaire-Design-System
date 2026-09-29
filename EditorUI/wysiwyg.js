/* Adlaire-Design WYSIWYG editor interactions */
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

  function wysiwygClickBinding(attribute, handle) {
    return {
      selector: hookSelector(attribute),
      handle: handle
    };
  }

  function closestBoundTrigger(source, bindings) {
    if (!source) {
      return null;
    }
    for (var index = 0; index < bindings.length; index += 1) {
      var binding = bindings[index];
      var trigger = source.closest(binding.selector);
      if (trigger && !isDisabledInteraction(trigger)) {
        return [trigger, binding];
      }
    }
    return null;
  }

  function editorRoot(element) {
    return element.closest(".adlaire-wysiwyg");
  }

  function setMode(root, mode) {
    root.setAttribute("data-adlaire-wysiwyg-mode", mode);
    safeScopedQueryAll(root, "[data-adlaire-wysiwyg-mode]").forEach(function (trigger) {
      setBooleanAttribute(trigger, "aria-pressed", trigger.getAttribute("data-adlaire-wysiwyg-mode") === mode);
    });
  }

  function targetFor(trigger) {
    var selector = trigger.getAttribute("data-adlaire-wysiwyg-target");
    return safeDocumentQuery(selector);
  }

  var wysiwygPrimaryClickBindings = [
    wysiwygClickBinding("data-adlaire-wysiwyg-mode", selectMode),
    wysiwygClickBinding("data-adlaire-wysiwyg-toggle", togglePanel),
    wysiwygClickBinding("data-adlaire-wysiwyg-toolbar-group", selectToolbarGroup)
  ];

  var wysiwygSelectionClickBindings = [
    wysiwygClickBinding("data-adlaire-wysiwyg-select", selectBlock),
    wysiwygClickBinding("data-adlaire-wysiwyg-slash-item", selectMenuItem),
    wysiwygClickBinding("data-adlaire-wysiwyg-suggestion", selectSuggestion)
  ];

  function handleFirstWysiwygClick(source, bindings) {
    var match = closestBoundTrigger(source, bindings);
    if (!match) {
      return false;
    }
    var trigger = match[0];
    var binding = match[1];
    binding.handle(trigger);
    return true;
  }

  document.addEventListener("click", function (event) {
    var target = eventSourceElement(event);
    handleFirstWysiwygClick(target, wysiwygPrimaryClickBindings);
    handleFirstWysiwygClick(target, wysiwygSelectionClickBindings);
  });

  document.addEventListener("keydown", function (event) {
    moveCompositeSelection(event);
  });

  function selectMode(modeTrigger) {
    var root = editorRoot(modeTrigger);
    var mode = modeTrigger.getAttribute("data-adlaire-wysiwyg-mode");
    if (root && mode) {
      setMode(root, mode);
    }
  }

  function togglePanel(toggle) {
    var panel = targetFor(toggle);
    if (!panel) {
      return;
    }

    var open = toggle.getAttribute("aria-expanded") !== "true";
    setBooleanAttribute(toggle, "aria-expanded", open);
    setOpenState(panel, open);
    panel.setAttribute("data-adlaire-disclosure-state", open ? "open" : "closed");
  }

  function selectToolbarGroup(trigger) {
    var root = trigger.closest(".adlaire-wysiwyg-toolbar") || editorRoot(trigger);
    if (!root) {
      return;
    }
    var group = trigger.getAttribute("data-adlaire-wysiwyg-toolbar-group") || "";
    safeScopedQueryAll(root, "[data-adlaire-wysiwyg-toolbar-group]").forEach(function (item) {
      var selected = item === trigger;
      setBooleanAttribute(item, "aria-pressed", selected);
      item.classList.toggle("is-selected", selected);
    });
    root.setAttribute("data-adlaire-toolbar-group", group);
  }

  function selectBlock(selectable) {
    var root = editorRoot(selectable);
    if (!root) {
      return;
    }

    safeScopedQueryAll(root, ".adlaire-wysiwyg-block-selected, [data-adlaire-wysiwyg-select][aria-selected='true']").forEach(function (item) {
      item.classList.remove("adlaire-wysiwyg-block-selected");
      setBooleanAttribute(item, "aria-selected", false);
    });
    selectable.classList.add("adlaire-wysiwyg-block-selected");
    setBooleanAttribute(selectable, "aria-selected", true);
  }

  function selectMenuItem(item) {
    selectCompositeItem(item, ".adlaire-wysiwyg-slash-menu", "[data-adlaire-wysiwyg-slash-item], .adlaire-wysiwyg-slash-item");
  }

  function selectSuggestion(item) {
    selectCompositeItem(item, ".adlaire-wysiwyg-suggestion-card, .adlaire-wysiwyg-assist-panel", "[data-adlaire-wysiwyg-suggestion], .adlaire-wysiwyg-suggestion, .adlaire-wysiwyg-assist-suggestion");
  }

  function selectCompositeItem(item, rootSelector, itemSelector, focusSelected) {
    if (focusSelected === undefined) focusSelected = true;
    var root = item.closest(rootSelector) || editorRoot(item);
    if (!root) {
      return;
    }
    safeScopedQueryAll(root, itemSelector).forEach(function (option) {
      var selected = option === item;
      setBooleanAttribute(option, "aria-selected", selected);
      option.setAttribute("tabindex", selected ? "0" : "-1");
      option.classList.toggle("is-selected", selected);
      if (focusSelected && selected && option instanceof HTMLElement) {
        option.focus();
      }
    });
  }

  function moveCompositeSelection(event) {
    var source = eventSourceElement(event);
    var item = source && source.closest("[data-adlaire-wysiwyg-slash-item], [data-adlaire-wysiwyg-suggestion], .adlaire-wysiwyg-slash-item, .adlaire-wysiwyg-suggestion, .adlaire-wysiwyg-assist-suggestion");
    if (!(item instanceof HTMLElement)) {
      return false;
    }
    var root = item.closest(".adlaire-wysiwyg-slash-menu, .adlaire-wysiwyg-suggestion-card, .adlaire-wysiwyg-assist-panel");
    if (!root) {
      return false;
    }
    var items = safeScopedQueryAll(root, "[data-adlaire-wysiwyg-slash-item], [data-adlaire-wysiwyg-suggestion], .adlaire-wysiwyg-slash-item, .adlaire-wysiwyg-suggestion, .adlaire-wysiwyg-assist-suggestion").filter(function (option) {
      return !option.hidden && !isDisabledInteraction(option);
    });
    var current = items.indexOf(item);
    if (current < 0) {
      return false;
    }
    var next = current;
    if (event.key === "ArrowDown") next = current >= items.length - 1 ? 0 : current + 1;
    if (event.key === "ArrowUp") next = current <= 0 ? items.length - 1 : current - 1;
    if (event.key === "Home") next = 0;
    if (event.key === "End") next = items.length - 1;
    if (event.key === "Enter" || event.key === " ") {
      if (isNativeInteractive(item)) {
        return false;
      }
      event.preventDefault();
      item.click();
      return true;
    }
    if (next === current) {
      return false;
    }
    event.preventDefault();
    selectCompositeItem(items[next], ".adlaire-wysiwyg-slash-menu, .adlaire-wysiwyg-suggestion-card, .adlaire-wysiwyg-assist-panel", "[data-adlaire-wysiwyg-slash-item], [data-adlaire-wysiwyg-suggestion], .adlaire-wysiwyg-slash-item, .adlaire-wysiwyg-suggestion, .adlaire-wysiwyg-assist-suggestion");
    return true;
  }

  function initializeCompositeState(rootSelector, itemSelector) {
    safeScopedQueryAll(document, rootSelector).forEach(function (root) {
      var items = safeScopedQueryAll(root, itemSelector).filter(function (item) {
        return !item.hidden && !isDisabledInteraction(item);
      });
      var selected = items.filter(function (item) {
        return item.getAttribute("aria-selected") === "true" || item.classList.contains("is-selected");
      })[0] || items[0];
      if (selected) {
        selectCompositeItem(selected, rootSelector, itemSelector, false);
      }
    });
  }

  initializeCompositeState(".adlaire-wysiwyg-slash-menu", "[data-adlaire-wysiwyg-slash-item], .adlaire-wysiwyg-slash-item");
  initializeCompositeState(".adlaire-wysiwyg-suggestion-card, .adlaire-wysiwyg-assist-panel", "[data-adlaire-wysiwyg-suggestion], .adlaire-wysiwyg-suggestion, .adlaire-wysiwyg-assist-suggestion");
  safeScopedQueryAll(document, "[data-adlaire-wysiwyg-toggle][aria-expanded]").forEach(function (toggle) {
    var panel = targetFor(toggle);
    if (panel) {
      panel.setAttribute("data-adlaire-disclosure-state", toggle.getAttribute("aria-expanded") === "true" ? "open" : "closed");
    }
  });
}());
