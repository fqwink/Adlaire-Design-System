export interface GeneratedJavaScriptTarget {
  readonly label: string;
  readonly source: string;
  readonly generated: string;
  readonly header: string;
  readonly bytes: number;
  readonly sha256: string;
  readonly parityTerms: readonly string[];
}

export const GENERATED_JAVASCRIPT_TARGETS:
  readonly GeneratedJavaScriptTarget[] = [
    {
      label: "public component interactions",
      source: "TypeScript/UI/components.ts",
      generated: "UI/components.js",
      header: "/* Adlaire-Design component interactions */",
      bytes: 52834,
      sha256:
        "31fbb1cc9bf92b37810681e2e69584d2bbcd817269ca07c712949d6dacd0a268",
      parityTerms: [
        "data-adlaire-toggle",
        "data-adlaire-dismiss",
        "data-adlaire-tab",
        "data-adlaire-sidebar-toggle",
        "data-adlaire-column-toggle",
        "data-adlaire-page-select",
        "data-adlaire-saved-view-apply",
        "adlaire-overlay-open",
        "writeClipboardText",
      ],
    },
    {
      label: "form interactions",
      source: "TypeScript/UI/forms.ts",
      generated: "UI/forms.js",
      header: "/* Adlaire-Design form interactions */",
      bytes: 34519,
      sha256:
        "94fc7bb67f61856285cbe6ab6dbe415f85d8638e695f3468dad2884ff79e9ac7",
      parityTerms: [
        "data-adlaire-filter-input",
        "data-adlaire-combobox-input",
        "data-adlaire-range-input",
        "data-adlaire-character-count",
        "data-adlaire-validate",
        "data-adlaire-token-add",
        "data-adlaire-token-remove",
        "data-adlaire-field-dirty",
        "data-adlaire-field-touched",
      ],
    },
    {
      label: "content interactions",
      source: "TypeScript/UI/content.ts",
      generated: "UI/content.js",
      header: "/* Adlaire-Design content interactions */",
      bytes: 13864,
      sha256:
        "4e3039f30f9c1fbed737250e991b405d86bccc2ac8dc71a0f29e3d7820785721",
      parityTerms: [
        "data-adlaire-sort",
        "data-adlaire-code-copy",
        "data-adlaire-code-line",
        "data-adlaire-toc-link",
        "data-adlaire-sort-state",
        "data-adlaire-copied",
        "writeClipboardText",
      ],
    },
    {
      label: "WYSIWYG editor interactions",
      source: "TypeScript/EditorUI/wysiwyg.ts",
      generated: "EditorUI/wysiwyg.js",
      header: "/* Adlaire-Design WYSIWYG editor interactions */",
      bytes: 14706,
      sha256:
        "499e4d58d8ab067f1b930862342225789ca497ea57bdaa5378234fb61f13b0a3",
      parityTerms: [
        "data-adlaire-wysiwyg-mode",
        "data-adlaire-wysiwyg-toggle",
        "data-adlaire-wysiwyg-toolbar-group",
        "data-adlaire-wysiwyg-select",
        "data-adlaire-wysiwyg-slash-item",
        "data-adlaire-wysiwyg-suggestion",
        "data-adlaire-toolbar-group",
        "data-adlaire-disclosure-state",
      ],
    },
    {
      label: "structured editor runtime",
      source: "TypeScript/Editor/index.ts",
      generated: "EditorUI/editor.js",
      header: "/* Adlaire-Design editor core */",
      bytes: 52596,
      sha256:
        "4764721f79afbc627e198330d1ff9990e1c8f097d185f98a3ef610beaf635d15",
      parityTerms: [
        "AdlaireEditor",
        "HeadlessEditorController",
        "createEditor",
        "createDefaultBlockRegistry",
        "createDefaultToolRegistry",
        "validateDocument",
        "validateDocumentAsync",
        "window.AdlaireEditor",
      ],
    },
  ] as const;

export function generatedJavaScriptTargetPaths(): readonly string[] {
  return GENERATED_JAVASCRIPT_TARGETS.map((target) => target.generated);
}

export function generatedJavaScriptSourcePaths(): readonly string[] {
  return GENERATED_JAVASCRIPT_TARGETS.map((target) => target.source);
}
