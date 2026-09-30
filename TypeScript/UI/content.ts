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

  function safeDocumentQueryAll(selector: string | null | undefined): HTMLElement[] {
    return safeScopedQueryAll(document, selector);
  }

  function setBooleanAttribute(target: Element, attribute: string, active: boolean): void {
    target.setAttribute(attribute, active ? "true" : "false");
  }

  function isDisabledInteraction(target: Element): boolean {
    return target.hasAttribute("disabled") || target.getAttribute("aria-disabled") === "true";
  }

  function isNativeInteractive(target: Element): boolean {
    return target instanceof HTMLButtonElement ||
      target instanceof HTMLAnchorElement ||
      target instanceof HTMLInputElement ||
      target instanceof HTMLSelectElement ||
      target instanceof HTMLTextAreaElement;
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
      if (trigger && !isDisabledInteraction(trigger)) return [trigger, binding, index];
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
    contentClickBinding("data-adlaire-toc-link", selectTocLink),
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

  document.addEventListener("keydown", (event) => {
    if (event.key !== "Enter" && event.key !== " ") return;
    const source = eventSourceElement(event);
    if (source && isNativeInteractive(source)) return;
    const trigger = source?.closest("[data-adlaire-sort], [data-adlaire-code-line], [data-adlaire-toc-link]");
    if (!(trigger instanceof HTMLElement) || isDisabledInteraction(trigger)) return;
    event.preventDefault();
    trigger.click();
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
    const multiSort = table.getAttribute("data-adlaire-sort-multi") === "true";

    if (!multiSort) headers.forEach((item) => {
      item.removeAttribute("aria-sort");
      item.removeAttribute("data-adlaire-sort-order");
      item.classList.remove("is-selected");
    });
    columnHeader.setAttribute("aria-sort", direction === "asc" ? "ascending" : "descending");
    columnHeader.setAttribute("data-adlaire-sort-order", String(sortOrder(headers, columnHeader, multiSort)));
    columnHeader.classList.add("is-selected");
    Array.from(body.rows).sort(compareRows(index, direction, type)).forEach((row) => body.appendChild(row));
    table.setAttribute("data-adlaire-sort-state", `${index}:${direction}:${type}`);
    writeSortStatus(header, columnHeader, table, direction, multiSort);
  }

  function writeSortStatus(source: Element, columnHeader: Element, table: HTMLTableElement, direction: string, multiSort: boolean): void {
    const status = safeDocumentQuery(source.getAttribute("data-adlaire-sort-status") ?? table.getAttribute("data-adlaire-sort-status"));
    if (status) {
      if (!status.hasAttribute("aria-live")) status.setAttribute("aria-live", "polite");
      if (!status.hasAttribute("role")) status.setAttribute("role", "status");
      const order = columnHeader.getAttribute("data-adlaire-sort-order");
      status.textContent = `${columnHeader.textContent?.trim() ?? "Column"} sorted ${direction === "asc" ? "ascending" : "descending"}${multiSort && order ? `, priority ${order}` : ""}`;
    }
  }

  function sortOrder(headers: Element[], columnHeader: Element, multiSort: boolean): number {
    if (!multiSort) return 1;
    const current = Number(columnHeader.getAttribute("data-adlaire-sort-order") ?? "0");
    if (Number.isFinite(current) && current > 0) return current;
    return headers.filter((item) => item.hasAttribute("data-adlaire-sort-order")).length + 1;
  }

  function initializeSortState(): void {
    safeDocumentQueryAll("th[aria-sort], [data-adlaire-sort][aria-sort]").forEach((sortTarget) => {
      const columnHeader = sortTarget.closest("th") ?? sortTarget;
      const table = columnHeader.closest("table");
      if (!(table instanceof HTMLTableElement) || !columnHeader.parentElement) return;

      const headers = Array.from(columnHeader.parentElement.children);
      const index = headers.indexOf(columnHeader);
      if (index < 0) return;
      const direction = columnHeader.getAttribute("aria-sort") === "descending" ? "desc" : "asc";
      const type = sortTarget.getAttribute("data-adlaire-sort") ?? columnHeader.getAttribute("data-adlaire-sort") ?? "text";
      const multiSort = table.getAttribute("data-adlaire-sort-multi") === "true";
      if (!columnHeader.hasAttribute("data-adlaire-sort-order")) {
        columnHeader.setAttribute("data-adlaire-sort-order", String(sortOrder(headers, columnHeader, multiSort)));
      }
      columnHeader.classList.add("is-selected");
      table.setAttribute("data-adlaire-sort-state", `${index}:${direction}:${type}`);
      const body = table.tBodies[0] ?? null;
      if (body) Array.from(body.rows).sort(compareRows(index, direction, type)).forEach((row) => body.appendChild(row));
      writeSortStatus(sortTarget, columnHeader, table, direction, multiSort);
    });
  }

  function copyCodeBlock(copy: Element): void {
    const selector = copy.getAttribute("data-adlaire-code-copy");
    const statusSelector = copy.getAttribute("data-adlaire-code-copy-status");
    const target = selector ? safeDocumentQuery(selector) : copy.closest(".adlaire-code-block");
    const status = safeDocumentQuery(statusSelector);
    syncCopyStatus(status);
    if (target && writeClipboardText(target.textContent ?? "")) {
      copy.setAttribute("data-adlaire-copied", "true");
      copy.classList.add("is-selected");
      if (status) {
        status.textContent = "Copied";
      }
      window.setTimeout(() => {
        copy.removeAttribute("data-adlaire-copied");
        copy.classList.remove("is-selected");
        if (status?.textContent === "Copied") status.textContent = "";
      }, 2000);
    } else if (status) {
      status.textContent = "Copy unavailable";
    }
  }

  function syncCopyStatus(status: HTMLElement | null): void {
    if (!status) return;
    if (!status.hasAttribute("aria-live")) status.setAttribute("aria-live", "polite");
    if (!status.hasAttribute("role")) status.setAttribute("role", "status");
  }

  function selectCodeLine(line: Element): void {
    const viewer = line.closest(".adlaire-git-code-view");
    if (!viewer) return;
    safeScopedQueryAll(viewer, "[data-adlaire-code-line], .adlaire-git-line-highlight").forEach((item) => {
      if (item instanceof HTMLElement) item.setAttribute("tabindex", item === line ? "0" : "-1");
      item.classList.remove("adlaire-git-line-highlight");
      item.setAttribute("aria-selected", "false");
    });
    line.classList.add("adlaire-git-line-highlight");
    line.setAttribute("aria-selected", "true");
    if (line instanceof HTMLElement && document.activeElement !== line) line.focus();
  }

  function selectTocLink(link: Element): void {
    const root = link.closest("[data-adlaire-toc], .adlaire-toc, .legal-toc") ?? document;
    safeScopedQueryAll(root, "[data-adlaire-toc-link], .legal-toc-link").forEach((item) => {
      if (item === link) {
        item.setAttribute("aria-current", "true");
      } else {
        item.removeAttribute("aria-current");
      }
      if (item instanceof HTMLElement) item.setAttribute("tabindex", item === link ? "0" : "-1");
      item.classList.toggle("is-selected", item === link);
    });
  }

  function initializeTocState(): void {
    safeDocumentQueryAll("[data-adlaire-toc], .adlaire-toc, .legal-toc").forEach((root) => {
      const current = safeScopedQueryAll(root, "[data-adlaire-toc-link], .legal-toc-link")
        .find((item) => item.getAttribute("aria-current") === "true" || item.classList.contains("is-selected"));
      if (current) selectTocLink(current);
    });
  }

  function initializeCopyStatus(): void {
    safeDocumentQueryAll("[data-adlaire-code-copy][data-adlaire-code-copy-status]").forEach((copy) => {
      syncCopyStatus(safeDocumentQuery(copy.getAttribute("data-adlaire-code-copy-status")));
    });
  }

  function initializeCodeLineState(): void {
    safeDocumentQueryAll("[data-adlaire-code-line]").forEach((line) => {
      if (!line.hasAttribute("tabindex")) line.setAttribute("tabindex", "0");
      if (!line.hasAttribute("role")) line.setAttribute("role", "option");
      if (!line.hasAttribute("aria-selected")) setBooleanAttribute(line, "aria-selected", false);
    });
    safeDocumentQueryAll(".adlaire-git-code-view").forEach((viewer) => {
      if (!viewer.hasAttribute("role")) viewer.setAttribute("role", "listbox");
      const selected = safeScopedQueryAll(viewer, "[data-adlaire-code-line], .adlaire-git-line-highlight")
        .find((line) => line.getAttribute("aria-selected") === "true" || line.classList.contains("adlaire-git-line-highlight"));
      if (selected) selectCodeLine(selected);
    });
  }

  initializeSortState();
  initializeCopyStatus();
  initializeTocState();
  initializeCodeLineState();
})();
