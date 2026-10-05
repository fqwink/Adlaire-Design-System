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
| Check contract manifest | `Tools/check/adlaire-design-contracts.json` |

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
- npm packages, `package.json`, npm-compatible lockfiles, `node_modules`, Node.js-dependent tooling, external frontend frameworks, external frontend build configuration files, CSS preprocessors, minified bundles, and generated `dist` or `build` outputs are not used.
- JSON is the only structured file format for development, build, generation, check, and release-check settings. YAML is not used for those scopes.
- CSS and JavaScript are not mixed in the same file.
- Generated CSS remains in `Tokens/`, `UI/`, and `EditorUI/`.
- Generated JavaScript remains in `UI/` and `EditorUI/`.

## Generated Output Placement

The Generated output placement contract keeps repository CSS and JavaScript files limited to the JSON generated output inventory and sample-support files. Generated CSS is limited to `Tokens/*.css`, `UI/*.css`, and `EditorUI/wysiwyg.css`. Generated JavaScript is limited to `UI/components.js`, `UI/forms.js`, `UI/content.js`, `EditorUI/wysiwyg.js`, and `EditorUI/editor.js`.

`Samples/design/sample.css` and `Samples/design/sample.js` are sample-support files only. They are not generated design-system outputs and must not become source-of-truth files.

## Source Boundaries

The TypeScript source inventory contract keeps every `TypeScript/**/*.ts` source file listed in the JSON source inventory and check-covered by the CSS compiler registry, JavaScript behavior contracts, interaction metadata, or editor runtime registry.

The Source/output/sample boundary contract keeps `TypeScript/` as source, `Tokens/`, `UI/`, and `EditorUI/` as generated outputs, and `Samples/` as non-authoritative confirmation material.

## Generated JavaScript Pairs

The Generated JavaScript pair contract keeps each TypeScript source, generated JavaScript output, generated file header, and documentation row synchronized.

`Tools/check/adlaire-design-contracts.json` records the check-side contract manifest for Deno validation targets, the Local Docker Deno validation image and digest, the Deno complete validation gate, Deno required failure message, the bug-fix-zero validation principle, Generated JavaScript parity contract terms, minimum component and interaction contract coverage, grouped repositoryInventory, TypeScript source inventory, generated CSS/JavaScript inventory, CSS target metadata, `tokenCategories`, `editorRuntimeModules`, `assetInventory`, `documentationGovernance`, Sample asset/load order, and the Visual Baseline hash and byte size. It is JSON because development, build, generation, check, and release-check configuration is JSON-only.

| Source | Generated output |
| --- | --- |
| `TypeScript/UI/components.ts` | `UI/components.js` |
| `TypeScript/UI/forms.ts` | `UI/forms.js` |
| `TypeScript/UI/content.ts` | `UI/content.js` |
| `TypeScript/EditorUI/wysiwyg.ts` | `EditorUI/wysiwyg.js` |
| `TypeScript/Editor/index.ts` | `EditorUI/editor.js` |

## Sample And JavaScript Surface

The Sample asset/load contract keeps `Samples/design/index.html` aligned with the JSON sample load order for public CSS, WYSIWYG CSS, generated JavaScript, and sample-only support files.

The JavaScript public surface contract keeps `UI/components.js`, `UI/forms.js`, `UI/content.js`, `EditorUI/editor.js`, and `EditorUI/wysiwyg.js` loadable without bundling. The structured editor runtime exposes `window.AdlaireEditor`.

## CSS And Editor Registries

The CSS target manifest contract keeps `TypeScript/CSS/manifest.ts` `CSS_TARGETS`, generated CSS outputs, CSS target metadata, first-line headers, public CSS order, sample loading, and documentation synchronized. `tokenCategories` keeps token output paths and token categories check-covered.

The Editor runtime module registry contract keeps `Docs/Editor_Master_Spec`, `editorRuntimeModules`, the flat `TypeScript/Editor/*.ts` file set, `TypeScript/Editor/index.ts` re-exports, generated `EditorUI/editor.js`, and checks synchronized. `assetInventory` governs the official icon count, icon filename categories, and required brand assets.

## Checks

Repository work starts with `AGENTS.md`, `git fetch backup --prune`, and a local/remote consistency check. The local Git consistency baseline uses automatic pruning, fast-forward-only pulls, `backup` as the default push remote, the current branch as the default push target, and automatic upstream setup. GitHub accepts merge commits only, requires PRs for `main`, automatically deletes merged head branches, and blocks force pushes and deletion of `main`.

The Validation mode contract separates normal repository validation from release readiness validation. Normal validation proves repository, document, manifest, generated output, sample load, Local Docker Deno validation, TypeScript type checking, and generated CSS parity. Release readiness validation additionally proves local `main`, `backup/main`, local Git configuration, ignored local artifact policy, and stale merged branch state after PR cleanup.

Run the normal repository check:

```sh
sh Tools/check/check-adlaire-design.sh
```

The normal check verifies the Development configuration contract, Generated output placement contract, TypeScript source inventory contract, Source/output/sample boundary contract, Generated JavaScript pair contract, JavaScript public surface contract, Sample asset/load contract, CSS target manifest contract, Editor runtime module registry contract, `documentationGovernance`, and Deno type-check target coverage. The check always runs Deno through local Docker, fixed to `denoland/deno:2.1.4@sha256:3bf75873714baa410dcf7fabaf76d806d20f0ac8a7579df11577b4ed97416e34`, then executes Deno type checking and the Deno-backed generated CSS parity check through `TypeScript/CSS/index.ts check-generated-css`. Host `deno` is not used, and missing Docker or Docker Deno failure is a failed validation, not a skip.

The same check reads `Tools/check/adlaire-design-contracts.json` for Deno type-check targets, Docker Deno image and digest, the Deno required failure message, the bug-fix-zero validation principle, Generated JavaScript parity contract terms, minimum component and interaction contract counts, grouped repositoryInventory, TypeScript source inventory synchronized with `TypeScript/**/*.ts`, generated CSS inventory and CSS target metadata synchronized with `TypeScript/CSS/manifest.ts`, generated JavaScript inventory synchronized with pair contracts, Sample asset/load order, `tokenCategories`, `editorRuntimeModules`, `assetInventory`, `documentationGovernance`, and Visual Baseline documentation requirements.

The bug-fix-zero validation principle means work is not complete while there are known check failures, known generated-output drifts, or unresolved bugs found by validation. Fixes must continue until the reported state has zero known check failures and zero unresolved bugs.

Run the release check only from local `main`, after PR merge, remote pruning, merged branch cleanup, and local `main` synchronization. It also rejects local Git configuration drift, unexpected ignored local artifacts under the Ignored local artifact policy, and stale merged local or `backup/*` remote-tracking branches. Complete Deno-backed release evidence is provided by the same Local Docker Deno validation path:

```sh
sh Tools/check/check-adlaire-design.sh --release-check
```

## Samples

`Samples/design/index.html` is a confirmation surface for Generic UI, Advanced Input and Design-System UI, Admin UI, WYSIWYG Editor UI, Git Provider UI, Cloud / Infrastructure UI, Brand, Tokens, and the official 1520 SVG icons. Samples are supporting materials, not specification sources.

The Product adoption surface at the top of the sample shows how the same contracts can support a realistic operations dashboard before the catalog-by-catalog confirmation sections begin. It remains sample-support material and does not become a source of truth.

## Visual Baseline

`Samples/sample-current.png` is the Visual Baseline reference screenshot. Reference screenshot changes require the related source or contract change in the same review unit, and the Visual Baseline hash and byte size are listed in `Tools/check/adlaire-design-contracts.json`.
