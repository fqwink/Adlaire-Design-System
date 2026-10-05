# Adlaire-Design-System

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
| `Icons/` | Official 1520 SVG icons. |
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

## Generated JavaScript Pairs

The Generated JavaScript pair contract keeps each TypeScript source, generated JavaScript output, generated file header, and documentation row synchronized.

| Source | Generated output |
| --- | --- |
| `TypeScript/UI/components.ts` | `UI/components.js` |
| `TypeScript/UI/forms.ts` | `UI/forms.js` |
| `TypeScript/UI/content.ts` | `UI/content.js` |
| `TypeScript/EditorUI/wysiwyg.ts` | `EditorUI/wysiwyg.js` |
| `TypeScript/Editor/index.ts` | `EditorUI/editor.js` |

## Checks

Repository work starts with `AGENTS.md`, `git fetch backup --prune`, and a local/remote consistency check. The local Git consistency baseline uses automatic pruning, fast-forward-only pulls, `backup` as the default push remote, the current branch as the default push target, and automatic upstream setup. GitHub accepts merge commits only, requires PRs for `main`, automatically deletes merged head branches, and blocks force pushes and deletion of `main`.

Run the normal repository check:

```sh
sh Tools/check/check-adlaire-design.sh
```

The normal check verifies the Generated JavaScript pair contract and Deno type-check target coverage. When `deno` is available, the normal check runs Deno type checking and the Deno-backed generated CSS parity check through `TypeScript/CSS/index.ts check-generated-css`. When `deno` is unavailable, the check emits a skip message and Deno-backed verification must not be claimed for that environment.

Run the release check only after PR merge, remote pruning, merged branch cleanup, and local `main` synchronization. It also rejects local Git configuration drift and stale merged local or `backup/*` remote-tracking branches:

```sh
sh Tools/check/check-adlaire-design.sh --release-check
```

## Samples

`Samples/design/index.html` is a confirmation surface for Generic UI, Advanced Input and Design-System UI, Admin UI, WYSIWYG Editor UI, Git Provider UI, Cloud / Infrastructure UI, Brand, Tokens, and the official 1520 SVG icons. Samples are supporting materials, not specification sources.
