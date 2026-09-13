# Adlaire Design System

Adlaire-Design-System is the source repository for Adlaire Group's design system and frontend foundation.

The current repository name is `Adlaire-Design`. The formal system name is `Adlaire-Design-System`.

This repository owns design tokens, generated CSS, generated JavaScript, WYSIWYG Editor UI, structured editor runtime output, brand assets, the official icon set, samples, and governance documents.

## Source of Truth

| Area | Source |
| --- | --- |
| Overall specification | `Docs/Master_Spec` |
| Editor and WYSIWYG details | `Docs/Editor_Master_Spec` |
| Repository index | `Docs/Document_Index` |
| Generic UI catalog | `Docs/Generic_Component_Catalog` |
| Admin UI catalog | `Docs/Admin_UI_Catalog` |
| WYSIWYG Editor UI catalog | `Docs/WYSIWYG_Editor_UI_Catalog` |
| Icon catalog | `Docs/Icon_Set_Catalog` |
| Brand asset catalog | `Docs/Brand_Asset_Catalog` |
| Open tasks | `Docs/Pending_Tasks` |

## Repository Areas

| Path | Role |
| --- | --- |
| `Tokens/` | Generated CSS custom properties. |
| `UI/` | Generated public UI CSS and JavaScript. |
| `EditorUI/` | Generated WYSIWYG Editor UI CSS and JavaScript, plus editor runtime output. |
| `TypeScript/` | Deno TypeScript sources for generated CSS and JavaScript. |
| `Icons/` | Official 500-icon SVG set. |
| `Brand/` | Brand assets and brand asset rules. |
| `Samples/` | Non-authoritative visual confirmation materials. |
| `Tools/check/` | Repository checks. |

## Technical Rules

- Deno TypeScript is the implementation source for generated CSS and JavaScript.
- Standard libraries are limited to Deno standard libraries when needed.
- npm packages, `package.json`, `node_modules`, Node.js-dependent tooling, external frontend frameworks, CSS preprocessors, minified bundles, and generated `dist` or `build` outputs are not used.
- CSS and JavaScript are not mixed in the same file.
- Generated CSS remains in `Tokens/`, `UI/`, and `EditorUI/`.
- Generated JavaScript remains in `UI/` and `EditorUI/`.

## Checks

Run the normal repository check:

```sh
sh Tools/check/check-adlaire-design.sh
```

Run the release check only after PR merge, branch pruning, and local `main` synchronization:

```sh
sh Tools/check/check-adlaire-design.sh --release-check
```

## Samples

`Samples/design/index.html` is a confirmation surface for Generic UI, Admin UI, WYSIWYG Editor UI, Git Provider UI, Brand, Tokens, and the official 500 icon set. Samples are supporting materials, not specification sources.
