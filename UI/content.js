/* Adlaire-Design content interactions */
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

  function hookSelector(attribute) {
    return "[" + attribute + "]";
  }

  function contentClickBinding(attribute, handle) {
    return {
      selector: hookSelector(attribute),
      handle: handle
    };
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

  function cellText(row, index) {
    var cell = row.children[index];
    return cell ? cell.textContent.trim() : "";
  }

  function compareRows(index, direction, type) {
    return function (left, right) {
      var leftText = cellText(left, index);
      var rightText = cellText(right, index);
      var leftNumber = Number(leftText.replace(/,/g, ""));
      var rightNumber = Number(rightText.replace(/,/g, ""));
      var leftDate = Date.parse(leftText);
      var rightDate = Date.parse(rightText);
      var leftHasValue = leftText !== "";
      var rightHasValue = rightText !== "";
      var result;

      if (type === "number") {
        if (!leftHasValue && !rightHasValue) {
          return 0;
        }
        if (!leftHasValue || Number.isNaN(leftNumber)) {
          return 1;
        }
        if (!rightHasValue || Number.isNaN(rightNumber)) {
          return -1;
        }
        result = leftNumber - rightNumber;
      } else if (leftHasValue && rightHasValue && !Number.isNaN(leftNumber) && !Number.isNaN(rightNumber)) {
        result = leftNumber - rightNumber;
      } else if (type === "date") {
        if (!leftHasValue && !rightHasValue) {
          return 0;
        }
        if (!leftHasValue || Number.isNaN(leftDate)) {
          return 1;
        }
        if (!rightHasValue || Number.isNaN(rightDate)) {
          return -1;
        }
        result = leftDate - rightDate;
      } else if (leftHasValue && rightHasValue && !Number.isNaN(leftDate) && !Number.isNaN(rightDate)) {
        result = leftDate - rightDate;
      } else {
        result = leftText.localeCompare(rightText);
      }

      return direction === "desc" ? -result : result;
    };
  }

  var contentClickBindings = [
    contentClickBinding("data-adlaire-sort", sortTable),
    contentClickBinding("data-adlaire-code-copy", copyCodeBlock),
    contentClickBinding("data-adlaire-code-line", selectCodeLine)
  ];

  function handleEveryContentClick(source) {
    var match = closestBoundTrigger(source, contentClickBindings);
    while (match) {
      var trigger = match[0];
      var binding = match[1];
      var index = match[2];
      binding.handle(trigger);
      match = closestBoundTrigger(source, contentClickBindings, index + 1);
    }
  }

  document.addEventListener("click", function (event) {
    handleEveryContentClick(eventSourceElement(event));
  });

  function sortTable(header) {
    var columnHeader = header.closest("th") || header;
    var table = columnHeader.closest("table");
    var body = table ? table.tBodies[0] : null;
    if (!body || !columnHeader.parentElement) {
      return;
    }

    var headers = Array.prototype.slice.call(columnHeader.parentElement.children);
    var index = headers.indexOf(columnHeader);
    var direction = columnHeader.getAttribute("aria-sort") === "ascending" ? "desc" : "asc";
    var type = header.getAttribute("data-adlaire-sort") || columnHeader.getAttribute("data-adlaire-sort") || "text";

    headers.forEach(function (item) {
      item.removeAttribute("aria-sort");
    });

    columnHeader.setAttribute("aria-sort", direction === "asc" ? "ascending" : "descending");
    Array.prototype.slice.call(body.rows).sort(compareRows(index, direction, type)).forEach(function (row) {
      body.appendChild(row);
    });
  }

  function copyCodeBlock(copy) {
    var selector = copy.getAttribute("data-adlaire-code-copy");
    var statusSelector = copy.getAttribute("data-adlaire-code-copy-status");
    var target = selector ? safeDocumentQuery(selector) : copy.closest(".adlaire-code-block");
    if (target && writeClipboardText(target.textContent || "")) {
      copy.setAttribute("data-adlaire-copied", "true");
      var status = safeDocumentQuery(statusSelector);
      if (status) {
        status.textContent = "Copied";
      }
    }
  }

  function selectCodeLine(line) {
    var viewer = line.closest(".adlaire-git-code-view");
    if (!viewer) {
      return;
    }

    safeScopedQueryAll(viewer, "[data-adlaire-code-line], .adlaire-git-line-highlight").forEach(function (item) {
      item.classList.remove("adlaire-git-line-highlight");
      item.setAttribute("aria-selected", "false");
    });
    line.classList.add("adlaire-git-line-highlight");
    line.setAttribute("aria-selected", "true");
  }
}());
