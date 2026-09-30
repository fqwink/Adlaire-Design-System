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

  function safeDocumentQueryAll(selector) {
    return safeScopedQueryAll(document, selector);
  }

  function setBooleanAttribute(target, attribute, active) {
    target.setAttribute(attribute, active ? "true" : "false");
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
      if (trigger && !isDisabledInteraction(trigger)) {
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
    contentClickBinding("data-adlaire-code-line", selectCodeLine),
    contentClickBinding("data-adlaire-toc-link", selectTocLink)
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

  document.addEventListener("keydown", function (event) {
    if (event.key !== "Enter" && event.key !== " ") {
      return;
    }
    var source = eventSourceElement(event);
    if (source && isNativeInteractive(source)) {
      return;
    }
    var trigger = source && source.closest("[data-adlaire-sort], [data-adlaire-code-line], [data-adlaire-toc-link]");
    if (!(trigger instanceof HTMLElement) || isDisabledInteraction(trigger)) {
      return;
    }
    event.preventDefault();
    trigger.click();
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
    var multiSort = table.getAttribute("data-adlaire-sort-multi") === "true";

    if (!multiSort) {
      headers.forEach(function (item) {
        item.removeAttribute("aria-sort");
        item.removeAttribute("data-adlaire-sort-order");
        item.classList.remove("is-selected");
      });
    }

    columnHeader.setAttribute("aria-sort", direction === "asc" ? "ascending" : "descending");
    columnHeader.setAttribute("data-adlaire-sort-order", String(sortOrder(headers, columnHeader, multiSort)));
    columnHeader.classList.add("is-selected");
    Array.prototype.slice.call(body.rows).sort(compareRows(index, direction, type)).forEach(function (row) {
      body.appendChild(row);
    });
    table.setAttribute("data-adlaire-sort-state", index + ":" + direction + ":" + type);
    writeSortStatus(header, columnHeader, table, direction, multiSort);
  }

  function writeSortStatus(source, columnHeader, table, direction, multiSort) {
    var status = safeDocumentQuery(source.getAttribute("data-adlaire-sort-status") || table.getAttribute("data-adlaire-sort-status"));
    if (status) {
      if (!status.hasAttribute("aria-live")) {
        status.setAttribute("aria-live", "polite");
      }
      if (!status.hasAttribute("role")) {
        status.setAttribute("role", "status");
      }
      var order = columnHeader.getAttribute("data-adlaire-sort-order");
      status.textContent = (columnHeader.textContent ? columnHeader.textContent.trim() : "Column") + " sorted " + (direction === "asc" ? "ascending" : "descending") + (multiSort && order ? ", priority " + order : "");
    }
  }

  function sortOrder(headers, columnHeader, multiSort) {
    if (!multiSort) {
      return 1;
    }
    var current = Number(columnHeader.getAttribute("data-adlaire-sort-order") || "0");
    if (Number.isFinite(current) && current > 0) {
      return current;
    }
    return headers.filter(function (item) {
      return item.hasAttribute("data-adlaire-sort-order");
    }).length + 1;
  }

  function initializeSortState() {
    safeDocumentQueryAll("th[aria-sort], [data-adlaire-sort][aria-sort]").forEach(function (sortTarget) {
      var columnHeader = sortTarget.closest("th") || sortTarget;
      var table = columnHeader.closest("table");
      if (!(table instanceof HTMLTableElement) || !columnHeader.parentElement) {
        return;
      }

      var headers = Array.prototype.slice.call(columnHeader.parentElement.children);
      var index = headers.indexOf(columnHeader);
      if (index < 0) {
        return;
      }
      var direction = columnHeader.getAttribute("aria-sort") === "descending" ? "desc" : "asc";
      var type = sortTarget.getAttribute("data-adlaire-sort") || columnHeader.getAttribute("data-adlaire-sort") || "text";
      var multiSort = table.getAttribute("data-adlaire-sort-multi") === "true";
      if (!columnHeader.hasAttribute("data-adlaire-sort-order")) {
        columnHeader.setAttribute("data-adlaire-sort-order", String(sortOrder(headers, columnHeader, multiSort)));
      }
      columnHeader.classList.add("is-selected");
      table.setAttribute("data-adlaire-sort-state", index + ":" + direction + ":" + type);
      var body = table.tBodies[0] || null;
      if (body) {
        Array.prototype.slice.call(body.rows).sort(compareRows(index, direction, type)).forEach(function (row) {
          body.appendChild(row);
        });
      }
      writeSortStatus(sortTarget, columnHeader, table, direction, multiSort);
    });
  }

  function copyCodeBlock(copy) {
    var selector = copy.getAttribute("data-adlaire-code-copy");
    var statusSelector = copy.getAttribute("data-adlaire-code-copy-status");
    var target = selector ? safeDocumentQuery(selector) : copy.closest(".adlaire-code-block");
    var status = safeDocumentQuery(statusSelector);
    syncCopyStatus(status);
    if (target && writeClipboardText(target.textContent || "")) {
      copy.setAttribute("data-adlaire-copied", "true");
      copy.classList.add("is-selected");
      if (status) {
        status.textContent = "Copied";
      }
      window.setTimeout(function () {
        copy.removeAttribute("data-adlaire-copied");
        copy.classList.remove("is-selected");
        if (status && status.textContent === "Copied") {
          status.textContent = "";
        }
      }, 2000);
    } else if (status) {
      status.textContent = "Copy unavailable";
    }
  }

  function syncCopyStatus(status) {
    if (!status) {
      return;
    }
    if (!status.hasAttribute("aria-live")) {
      status.setAttribute("aria-live", "polite");
    }
    if (!status.hasAttribute("role")) {
      status.setAttribute("role", "status");
    }
  }

  function selectCodeLine(line) {
    var viewer = line.closest(".adlaire-git-code-view");
    if (!viewer) {
      return;
    }

    safeScopedQueryAll(viewer, "[data-adlaire-code-line], .adlaire-git-line-highlight").forEach(function (item) {
      if (item instanceof HTMLElement) {
        item.setAttribute("tabindex", item === line ? "0" : "-1");
      }
      item.classList.remove("adlaire-git-line-highlight");
      item.setAttribute("aria-selected", "false");
    });
    line.classList.add("adlaire-git-line-highlight");
    line.setAttribute("aria-selected", "true");
    if (line instanceof HTMLElement && document.activeElement !== line) {
      line.focus();
    }
  }

  function selectTocLink(link) {
    var root = link.closest("[data-adlaire-toc], .adlaire-toc, .legal-toc") || document;
    safeScopedQueryAll(root, "[data-adlaire-toc-link], .legal-toc-link").forEach(function (item) {
      if (item === link) {
        item.setAttribute("aria-current", "true");
      } else {
        item.removeAttribute("aria-current");
      }
      if (item instanceof HTMLElement) {
        item.setAttribute("tabindex", item === link ? "0" : "-1");
      }
      item.classList.toggle("is-selected", item === link);
    });
  }

  function initializeTocState() {
    safeDocumentQueryAll("[data-adlaire-toc], .adlaire-toc, .legal-toc").forEach(function (root) {
      var current = safeScopedQueryAll(root, "[data-adlaire-toc-link], .legal-toc-link").filter(function (item) {
        return item.getAttribute("aria-current") === "true" || item.classList.contains("is-selected");
      })[0];
      if (current) {
        selectTocLink(current);
      }
    });
  }

  function initializeCopyStatus() {
    safeDocumentQueryAll("[data-adlaire-code-copy][data-adlaire-code-copy-status]").forEach(function (copy) {
      syncCopyStatus(safeDocumentQuery(copy.getAttribute("data-adlaire-code-copy-status")));
    });
  }

  function initializeCodeLineState() {
    safeDocumentQueryAll("[data-adlaire-code-line]").forEach(function (line) {
      if (!line.hasAttribute("tabindex")) {
        line.setAttribute("tabindex", "0");
      }
      if (!line.hasAttribute("role")) {
        line.setAttribute("role", "option");
      }
      if (!line.hasAttribute("aria-selected")) {
        setBooleanAttribute(line, "aria-selected", false);
      }
    });
    safeDocumentQueryAll(".adlaire-git-code-view").forEach(function (viewer) {
      if (!viewer.hasAttribute("role")) {
        viewer.setAttribute("role", "listbox");
      }
      var selected = safeScopedQueryAll(viewer, "[data-adlaire-code-line], .adlaire-git-line-highlight").filter(function (line) {
        return line.getAttribute("aria-selected") === "true" || line.classList.contains("adlaire-git-line-highlight");
      })[0];
      if (selected) {
        selectCodeLine(selected);
      }
    });
  }

  initializeSortState();
  initializeCopyStatus();
  initializeTocState();
  initializeCodeLineState();
}());
