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
      if (trigger) {
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
    wysiwygClickBinding("data-adlaire-wysiwyg-toggle", togglePanel)
  ];

  var wysiwygSelectionClickBindings = [
    wysiwygClickBinding("data-adlaire-wysiwyg-select", selectBlock)
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
}());
