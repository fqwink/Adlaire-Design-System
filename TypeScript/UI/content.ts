/// <reference lib="dom" />
/* Adlaire-Design content interactions */
(() => {
  "use strict";

  function targetElement(target: EventTarget | null): Element | null {
    return target instanceof Element ? target : null;
  }

  function eventSourceElement(event: Event): Element | null {
    const fallbackTarget = event.target;
    const path = typeof event.composedPath === "function" ? event.composedPath() : [];
    for (const target of path) {
      const element = targetElement(target);
      if (element) return element;
    }
    return targetElement(fallbackTarget);
  }

  function safeDocumentQuery(selector: string | null | undefined): HTMLElement | null {
    if (!selector) return null;
    try {
      return document.querySelector<HTMLElement>(selector);
    } catch {
      return null;
    }
  }

  function safeScopedQueryAll(root: ParentNode | null | undefined, selector: string | null | undefined): HTMLElement[] {
    if (!root || !selector) return [];
    try {
      return Array.from(root.querySelectorAll<HTMLElement>(selector));
    } catch {
      return [];
    }
  }

  function writeClipboardText(text: string): boolean {
    const clipboard = navigator.clipboard;
    if (!clipboard?.writeText) return false;
    try {
      void clipboard.writeText(text).catch(() => undefined);
      return true;
    } catch {
      return false;
    }
  }

  interface ContentClickBinding {
    readonly selector: string;
    readonly handle: (trigger: Element) => void;
  }

  function hookSelector(attribute: string): string {
    return `[${attribute}]`;
  }

  function contentClickBinding(attribute: string, handle: (trigger: Element) => void): ContentClickBinding {
    return {
      selector: hookSelector(attribute),
      handle,
    };
  }

  function closestBoundTrigger<T extends { readonly selector: string }>(source: Element | null, bindings: readonly T[], startIndex = 0): [Element, T, number] | null {
    if (!source) return null;
    for (let index = startIndex; index < bindings.length; index += 1) {
      const binding = bindings[index];
      const trigger = source.closest(binding.selector);
      if (trigger) return [trigger, binding, index];
    }
    return null;
  }

  function cellText(row: HTMLTableRowElement, index: number): string {
    const cell = row.children[index];
    return cell?.textContent?.trim() ?? "";
  }

  function compareRows(index: number, direction: string, type: string) {
    return (left: HTMLTableRowElement, right: HTMLTableRowElement): number => {
      const leftText = cellText(left, index);
      const rightText = cellText(right, index);
      const leftNumber = Number(leftText.replace(/,/g, ""));
      const rightNumber = Number(rightText.replace(/,/g, ""));
      const leftDate = Date.parse(leftText);
      const rightDate = Date.parse(rightText);
      const leftHasValue = leftText !== "";
      const rightHasValue = rightText !== "";
      let result: number;

      if (type === "number") {
        if (!leftHasValue && !rightHasValue) return 0;
        if (!leftHasValue || Number.isNaN(leftNumber)) return 1;
        if (!rightHasValue || Number.isNaN(rightNumber)) return -1;
        result = leftNumber - rightNumber;
      } else if (leftHasValue && rightHasValue && !Number.isNaN(leftNumber) && !Number.isNaN(rightNumber)) {
        result = leftNumber - rightNumber;
      } else if (type === "date") {
        if (!leftHasValue && !rightHasValue) return 0;
        if (!leftHasValue || Number.isNaN(leftDate)) return 1;
        if (!rightHasValue || Number.isNaN(rightDate)) return -1;
        result = leftDate - rightDate;
      } else if (leftHasValue && rightHasValue && !Number.isNaN(leftDate) && !Number.isNaN(rightDate)) {
        result = leftDate - rightDate;
      } else {
        result = leftText.localeCompare(rightText);
      }

      return direction === "desc" ? -result : result;
    };
  }

  const contentClickBindings: readonly ContentClickBinding[] = [
    contentClickBinding("data-adlaire-sort", sortTable),
    contentClickBinding("data-adlaire-code-copy", copyCodeBlock),
    contentClickBinding("data-adlaire-code-line", selectCodeLine),
  ] as const;

  function handleEveryContentClick(source: Element | null): void {
    let match = closestBoundTrigger(source, contentClickBindings);
    while (match) {
      const [trigger, binding, index] = match;
      binding.handle(trigger);
      match = closestBoundTrigger(source, contentClickBindings, index + 1);
    }
  }

  document.addEventListener("click", (event) => {
    handleEveryContentClick(eventSourceElement(event));
  });

  function sortTable(header: Element): void {
    const columnHeader = header.closest("th") ?? header;
    const table = columnHeader.closest("table");
    const body = table?.tBodies[0] ?? null;
    if (!body || !columnHeader.parentElement) return;

    const headers = Array.from(columnHeader.parentElement.children);
    const index = headers.indexOf(columnHeader);
    const direction = columnHeader.getAttribute("aria-sort") === "ascending" ? "desc" : "asc";
    const type = header.getAttribute("data-adlaire-sort") ?? columnHeader.getAttribute("data-adlaire-sort") ?? "text";

    headers.forEach((item) => item.removeAttribute("aria-sort"));
    columnHeader.setAttribute("aria-sort", direction === "asc" ? "ascending" : "descending");
    Array.from(body.rows).sort(compareRows(index, direction, type)).forEach((row) => body.appendChild(row));
  }

  function copyCodeBlock(copy: Element): void {
    const selector = copy.getAttribute("data-adlaire-code-copy");
    const statusSelector = copy.getAttribute("data-adlaire-code-copy-status");
    const target = selector ? safeDocumentQuery(selector) : copy.closest(".adlaire-code-block");
    if (target && writeClipboardText(target.textContent ?? "")) {
      copy.setAttribute("data-adlaire-copied", "true");
      const status = safeDocumentQuery(statusSelector);
      if (status) {
        status.textContent = "Copied";
      }
    }
  }

  function selectCodeLine(line: Element): void {
    const viewer = line.closest(".adlaire-git-code-view");
    if (!viewer) return;
    safeScopedQueryAll(viewer, ".adlaire-git-line-highlight").forEach((item) => item.classList.remove("adlaire-git-line-highlight"));
    line.classList.add("adlaire-git-line-highlight");
  }
})();
