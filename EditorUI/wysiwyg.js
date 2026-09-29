/* Adlaire-Design WYSIWYG editor interactions */
(function () {
  "use strict";

  function targetElement(target) {
    return target instanceof Element ? target : null;
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

  function editorRoot(element) {
    return element.closest(".adlaire-wysiwyg");
  }

  function setMode(root, mode) {
    root.setAttribute("data-adlaire-wysiwyg-mode", mode);
    root.querySelectorAll("[data-adlaire-wysiwyg-mode]").forEach(function (trigger) {
      trigger.setAttribute("aria-pressed", trigger.getAttribute("data-adlaire-wysiwyg-mode") === mode ? "true" : "false");
    });
  }

  function targetFor(trigger) {
    var selector = trigger.getAttribute("data-adlaire-wysiwyg-target");
    return selector ? document.querySelector(selector) : null;
  }

  var wysiwygPrimaryClickBindings = [
    wysiwygClickBinding("data-adlaire-wysiwyg-mode", selectMode),
    wysiwygClickBinding("data-adlaire-wysiwyg-toggle", togglePanel)
  ];

  var wysiwygSelectionClickBindings = [
    wysiwygClickBinding("data-adlaire-wysiwyg-select", selectBlock)
  ];

  function handleFirstWysiwygClick(source, bindings) {
    if (!source) {
      return false;
    }
    for (var index = 0; index < bindings.length; index += 1) {
      var binding = bindings[index];
      var trigger = source.closest(binding.selector);
      if (!trigger) {
        continue;
      }
      binding.handle(trigger);
      return true;
    }
    return false;
  }

  document.addEventListener("click", function (event) {
    var target = targetElement(event.target);
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
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    panel.hidden = !open;
    panel.classList.toggle("is-open", open);
  }

  function selectBlock(selectable) {
    var root = editorRoot(selectable);
    if (!root) {
      return;
    }

    root.querySelectorAll(".adlaire-wysiwyg-block-selected, [data-adlaire-wysiwyg-select][aria-selected='true']").forEach(function (item) {
      item.classList.remove("adlaire-wysiwyg-block-selected");
      item.setAttribute("aria-selected", "false");
    });
    selectable.classList.add("adlaire-wysiwyg-block-selected");
    selectable.setAttribute("aria-selected", "true");
  }
}());
