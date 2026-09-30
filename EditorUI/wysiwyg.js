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

  function isWysiwygDisabled(target) {
    var root = editorRoot(target);
    return Boolean(root && (isDisabledInteraction(root) || root.getAttribute("aria-busy") === "true"));
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
      if (trigger && !isDisabledInteraction(trigger) && !isWysiwygDisabled(trigger)) {
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
      var selected = trigger.getAttribute("data-adlaire-wysiwyg-mode") === mode;
      setBooleanAttribute(trigger, "aria-pressed", selected);
      if (trigger instanceof HTMLElement) {
        trigger.setAttribute("tabindex", selected ? "0" : "-1");
      }
      trigger.classList.toggle("is-selected", selected);
    });
  }

  function targetFor(trigger) {
    var selector = trigger.getAttribute("data-adlaire-wysiwyg-target") || trigger.getAttribute("aria-controls");
    if (!selector) {
      return null;
    }
    if (selector.charAt(0) === "#") {
      return document.getElementById(selector.slice(1));
    }
    return document.getElementById(selector) || safeDocumentQuery(selector);
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
    if (closeWysiwygSurface(event)) {
      return;
    }
    if (moveCompositeSelection(event)) {
      return;
    }
    moveWysiwygControlSelection(event);
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

    setPanelState(toggle, panel, toggle.getAttribute("aria-expanded") !== "true");
  }

  function setPanelState(toggle, panel, open) {
    setBooleanAttribute(toggle, "aria-expanded", open);
    toggle.classList.toggle("is-selected", open);
    setOpenState(panel, open);
    setBooleanAttribute(panel, "aria-hidden", !open);
    panel.setAttribute("data-adlaire-disclosure-state", open ? "open" : "closed");
  }

  function closeWysiwygSurface(event) {
    if (event.key !== "Escape") return false;
    var source = eventSourceElement(event);
    var root = source ? editorRoot(source) : null;
    if (!root) return false;
    var closed = false;
    safeScopedQueryAll(root, "[data-adlaire-wysiwyg-toggle][aria-expanded='true']").forEach(function (toggle) {
      var panel = targetFor(toggle);
      if (!panel) return;
      setPanelState(toggle, panel, false);
      closed = true;
    });
    safeScopedQueryAll(root, ".adlaire-wysiwyg-slash-menu, .adlaire-wysiwyg-suggestion-card, .adlaire-wysiwyg-assist-panel").forEach(function (panel) {
      if (panel.hidden) return;
      setOpenState(panel, false);
      setBooleanAttribute(panel, "aria-hidden", true);
      closed = true;
    });
    if (!closed) return false;
    event.preventDefault();
    if (source instanceof HTMLElement) source.focus();
    return true;
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
      item.setAttribute("tabindex", selected ? "0" : "-1");
      item.classList.toggle("is-selected", selected);
    });
    root.setAttribute("data-adlaire-toolbar-group", group);
  }

  function selectBlock(selectable) {
    var root = editorRoot(selectable);
    if (!root) {
      return;
    }

    safeScopedQueryAll(root, "[data-adlaire-wysiwyg-select], .adlaire-wysiwyg-block-selected").forEach(function (item) {
      var selected = item === selectable;
      item.classList.toggle("adlaire-wysiwyg-block-selected", selected);
      setBooleanAttribute(item, "aria-selected", selected);
      if (item instanceof HTMLElement) {
        item.setAttribute("tabindex", selected ? "0" : "-1");
      }
    });
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

  function moveWysiwygControlSelection(event) {
    var source = eventSourceElement(event);
    var item = source && source.closest("[data-adlaire-wysiwyg-mode], [data-adlaire-wysiwyg-toolbar-group], [data-adlaire-wysiwyg-select]");
    if (!(item instanceof HTMLElement) || isDisabledInteraction(item) || isWysiwygDisabled(item)) {
      return false;
    }
    if (event.key === "Enter" || event.key === " ") {
      if (isNativeInteractive(item)) {
        return false;
      }
      event.preventDefault();
      item.click();
      return true;
    }
    if (event.key !== "ArrowLeft" && event.key !== "ArrowRight" && event.key !== "ArrowUp" && event.key !== "ArrowDown" && event.key !== "Home" && event.key !== "End") {
      return false;
    }
    var selector = item.hasAttribute("data-adlaire-wysiwyg-mode")
      ? "[data-adlaire-wysiwyg-mode]"
      : item.hasAttribute("data-adlaire-wysiwyg-toolbar-group")
        ? "[data-adlaire-wysiwyg-toolbar-group]"
        : "[data-adlaire-wysiwyg-select]";
    var root = item.closest(".adlaire-wysiwyg-toolbar") || editorRoot(item);
    var items = safeScopedQueryAll(root, selector).filter(function (option) {
      return !option.hidden && !isDisabledInteraction(option);
    });
    var current = items.indexOf(item);
    if (current < 0) {
      return false;
    }
    var next = current;
    if (event.key === "Home") next = 0;
    if (event.key === "End") next = items.length - 1;
    if (event.key === "ArrowLeft" || event.key === "ArrowUp") next = current <= 0 ? items.length - 1 : current - 1;
    if (event.key === "ArrowRight" || event.key === "ArrowDown") next = current >= items.length - 1 ? 0 : current + 1;
    var target = items[next];
    if (!target) {
      return false;
    }
    event.preventDefault();
    if (target.hasAttribute("data-adlaire-wysiwyg-mode")) selectMode(target);
    if (target.hasAttribute("data-adlaire-wysiwyg-toolbar-group")) selectToolbarGroup(target);
    if (target.hasAttribute("data-adlaire-wysiwyg-select")) selectBlock(target);
    target.focus();
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

  function initializeWysiwygState() {
    safeScopedQueryAll(document, ".adlaire-wysiwyg").forEach(function (root) {
      var mode = root.getAttribute("data-adlaire-wysiwyg-mode");
      if (mode) {
        setMode(root, mode);
      }

      var selectedToolbarGroup = safeScopedQueryAll(root, "[data-adlaire-wysiwyg-toolbar-group]").filter(function (item) {
        return item.getAttribute("aria-pressed") === "true" || item.classList.contains("is-selected");
      })[0];
      if (selectedToolbarGroup) {
        selectToolbarGroup(selectedToolbarGroup);
      }

      var selectedBlock = safeScopedQuery(root, "[data-adlaire-wysiwyg-select][aria-selected='true'], .adlaire-wysiwyg-block-selected");
      if (selectedBlock) {
        selectBlock(selectedBlock);
      }
    });
  }

  initializeWysiwygState();
  initializeCompositeState(".adlaire-wysiwyg-slash-menu", "[data-adlaire-wysiwyg-slash-item], .adlaire-wysiwyg-slash-item");
  initializeCompositeState(".adlaire-wysiwyg-suggestion-card, .adlaire-wysiwyg-assist-panel", "[data-adlaire-wysiwyg-suggestion], .adlaire-wysiwyg-suggestion, .adlaire-wysiwyg-assist-suggestion");
  safeScopedQueryAll(document, "[data-adlaire-wysiwyg-toggle][aria-expanded]").forEach(function (toggle) {
    var panel = targetFor(toggle);
    if (panel) {
      setPanelState(toggle, panel, toggle.getAttribute("aria-expanded") === "true");
    }
  });
}());
