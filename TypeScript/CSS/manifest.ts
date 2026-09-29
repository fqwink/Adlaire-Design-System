export type CssTargetKind = "token" | "ui" | "editor-ui";

export interface CssTarget {
  readonly path: string;
  readonly kind: CssTargetKind;
  readonly firstLine: string;
  readonly sourceModules: readonly string[];
  readonly migrated: boolean;
}

export const CSS_TARGETS: readonly CssTarget[] = [
  { path: "Tokens/colors.css", kind: "token", firstLine: "/* Adlaire-Design color tokens */", sourceModules: ["tokens.ts"], migrated: true },
  { path: "Tokens/typography.css", kind: "token", firstLine: "/* Adlaire-Design typography tokens */", sourceModules: ["tokens.ts"], migrated: true },
  { path: "Tokens/spacing.css", kind: "token", firstLine: "/* Adlaire-Design spacing tokens */", sourceModules: ["tokens.ts"], migrated: true },
  { path: "Tokens/layout.css", kind: "token", firstLine: "/* Adlaire-Design layout tokens */", sourceModules: ["tokens.ts"], migrated: true },
  { path: "Tokens/motion.css", kind: "token", firstLine: "/* Adlaire-Design motion tokens */", sourceModules: ["tokens.ts"], migrated: true },
  { path: "Tokens/layer.css", kind: "token", firstLine: "/* Adlaire-Design layer tokens */", sourceModules: ["tokens.ts"], migrated: true },
  { path: "Tokens/breakpoints.css", kind: "token", firstLine: "/* Adlaire-Design breakpoint tokens */", sourceModules: ["tokens.ts"], migrated: true },
  { path: "Tokens/surface.css", kind: "token", firstLine: "/* Adlaire-Design surface tokens */", sourceModules: ["tokens.ts"], migrated: true },
  { path: "Tokens/status.css", kind: "token", firstLine: "/* Adlaire-Design status tokens */", sourceModules: ["tokens.ts"], migrated: true },
  { path: "Tokens/effects.css", kind: "token", firstLine: "/* Adlaire-Design effect tokens */", sourceModules: ["tokens.ts"], migrated: true },
  { path: "UI/adlaire.css", kind: "ui", firstLine: "/* Adlaire-Design color utilities */", sourceModules: ["rules.ts", "rules-adlaire.ts"], migrated: true },
  { path: "UI/base.css", kind: "ui", firstLine: "/* Adlaire-Design base styles */", sourceModules: ["rules.ts", "rules-base.ts"], migrated: true },
  { path: "UI/grid.css", kind: "ui", firstLine: "/* Adlaire-Design grid utilities */", sourceModules: ["rules.ts", "rules-grid.ts"], migrated: true },
  { path: "UI/layout.css", kind: "ui", firstLine: "/* Adlaire-Design public layout */", sourceModules: ["rules.ts", "rules-layout.ts"], migrated: true },
  { path: "UI/components.css", kind: "ui", firstLine: "/* Adlaire-Design public components */", sourceModules: ["rules.ts", "rules-components.ts", "rules-components-foundation.ts", "rules-components-overlays.ts", "rules-components-operations.ts", "rules-components-platform.ts"], migrated: true },
  { path: "UI/site.css", kind: "ui", firstLine: "/* Adlaire-Design site chrome */", sourceModules: ["rules.ts", "rules-site.ts"], migrated: true },
  { path: "UI/forms.css", kind: "ui", firstLine: "/* Adlaire-Design form components */", sourceModules: ["rules.ts", "rules-forms.ts", "rules-forms-foundation.ts", "rules-forms-composite.ts", "rules-forms-upload.ts", "rules-forms-validation.ts"], migrated: true },
  { path: "UI/content.css", kind: "ui", firstLine: "/* Adlaire-Design content components */", sourceModules: ["rules.ts", "rules-content.ts", "rules-content-foundation.ts", "rules-content-extended.ts", "rules-content-catalog.ts", "rules-content-interactions.ts"], migrated: true },
  { path: "UI/utilities.css", kind: "ui", firstLine: "/* Adlaire-Design utility classes */", sourceModules: ["rules.ts", "rules-utilities.ts"], migrated: true },
  { path: "UI/compat-agws.css", kind: "ui", firstLine: "/* Adlaire-Design specification layer */", sourceModules: ["rules.ts", "rules-compat-agws.ts"], migrated: true },
  { path: "EditorUI/wysiwyg.css", kind: "editor-ui", firstLine: "/* Adlaire-Design WYSIWYG editor */", sourceModules: ["rules.ts", "rules-wysiwyg.ts", "rules-wysiwyg-shell.ts", "rules-wysiwyg-toolbar.ts", "rules-wysiwyg-blocks.ts", "rules-wysiwyg-support.ts", "rules-wysiwyg-extensions.ts"], migrated: true },
] as const;

export const FORBIDDEN_CSS_COMPILER_PATHS: readonly string[] = [
  "TypeScript/CSS/components/",
  "TypeScript/CSS/tokens/",
  "TypeScript/CSS/themes/",
  "TypeScript/CSS/plugins/",
  "TypeScript/CSS/adapters/",
] as const;

export const CSS_COMPILER_REQUIRED_FILES: readonly string[] = [
  "TypeScript/CSS/tokens.ts",
  "TypeScript/CSS/rules.ts",
  "TypeScript/CSS/rules-types.ts",
  "TypeScript/CSS/rules-adlaire.ts",
  "TypeScript/CSS/rules-base.ts",
  "TypeScript/CSS/rules-grid.ts",
  "TypeScript/CSS/rules-layout.ts",
  "TypeScript/CSS/rules-components.ts",
  "TypeScript/CSS/rules-components-foundation.ts",
  "TypeScript/CSS/rules-components-overlays.ts",
  "TypeScript/CSS/rules-components-operations.ts",
  "TypeScript/CSS/rules-components-platform.ts",
  "TypeScript/CSS/rules-site.ts",
  "TypeScript/CSS/rules-forms.ts",
  "TypeScript/CSS/rules-forms-foundation.ts",
  "TypeScript/CSS/rules-forms-composite.ts",
  "TypeScript/CSS/rules-forms-upload.ts",
  "TypeScript/CSS/rules-forms-validation.ts",
  "TypeScript/CSS/rules-content.ts",
  "TypeScript/CSS/rules-content-foundation.ts",
  "TypeScript/CSS/rules-content-extended.ts",
  "TypeScript/CSS/rules-content-catalog.ts",
  "TypeScript/CSS/rules-content-interactions.ts",
  "TypeScript/CSS/rules-utilities.ts",
  "TypeScript/CSS/rules-compat-agws.ts",
  "TypeScript/CSS/rules-wysiwyg.ts",
  "TypeScript/CSS/rules-wysiwyg-shell.ts",
  "TypeScript/CSS/rules-wysiwyg-toolbar.ts",
  "TypeScript/CSS/rules-wysiwyg-blocks.ts",
  "TypeScript/CSS/rules-wysiwyg-support.ts",
  "TypeScript/CSS/rules-wysiwyg-extensions.ts",
  "TypeScript/CSS/targets.ts",
  "TypeScript/CSS/emit.ts",
  "TypeScript/CSS/manifest.ts",
  "TypeScript/CSS/index.ts",
] as const;
