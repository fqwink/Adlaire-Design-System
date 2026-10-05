# Adlaire-Design-System README

This is the English reader guide for Adlaire-Design-System. The root `README.md` stays small as the language gateway, while this file explains how to navigate the repository without becoming a separate source of truth.

The current repository name is `Adlaire-Design`. The formal system name is `Adlaire-Design-System`.

## Authority

| Area | Source |
| --- | --- |
| Overall specification | `Docs/Master_Spec` |
| Editor and WYSIWYG details | `Docs/Editor_Master_Spec` |
| Repository index | `Docs/Document_Index` |
| Component synchronization matrix | `Docs/Component_Contract_Matrix` |
| Catalog sources | `Docs/Generic_Component_Catalog`, `Docs/Admin_UI_Catalog`, `Docs/WYSIWYG_Editor_UI_Catalog`, `Docs/Icon_Set_Catalog`, `Docs/Brand_Asset_Catalog` |
| Task source | `Docs/Pending_Tasks` |
| Check contract manifest | `Tools/check/adlaire-design-contracts.json` |

Reader guides may summarize these documents, but they do not override them.

## Repository Responsibilities

| Area | Responsibility |
| --- | --- |
| `TypeScript/` | Deno TypeScript source for CSS generation, public UI JavaScript, WYSIWYG Editor UI JavaScript, and structured editor output. |
| `Tokens/`, `UI/`, `EditorUI/` | Generated CSS and generated JavaScript outputs kept in the repository. |
| `Icons/` | Official 1520 SVG icons governed by the icon catalog and `assetInventory`. |
| `Brand/` | Brand assets governed by the brand catalog and `assetInventory`. |
| `Samples/` | Supporting confirmation material, including the Product adoption surface and Visual Baseline. Samples are supporting materials, not specification sources. |
| `Tools/check/` | Repository validation, documentation governance, local Git consistency, generated output parity, and release readiness checks. |

## Development Rules

- Deno TypeScript is the implementation source for generated CSS and generated JavaScript.
- Deno execution for validation is fixed to Local Docker Deno validation, not host `deno`.
- The repository does not use `npm packages`, `package.json`, npm-compatible lockfiles, `node_modules`, Node.js-dependent tooling, or external frontend frameworks.
- It also does not use external frontend build configuration files, CSS preprocessors, minified bundles, `dist/`, or `build/`.
- Development, build, generation, check, and release-check structured configuration is JSON-only. YAML is not a technology selection for those scopes.
- CSS and JavaScript remain separate outputs.

## Contract Navigation

The full contract definitions live in `Docs/Master_Spec`; the repository inventory lives in `Docs/Document_Index`; family-level synchronization lives in `Docs/Component_Contract_Matrix`.

| Document | Read for |
| --- | --- |
| `Docs/Master_Spec` | Contract definitions and validation policy. |
| `Docs/Document_Index` | Repository inventory, output locations, and checked governance maps. |
| `Docs/Component_Contract_Matrix` | Family-level catalog, source, output, sample, and check synchronization. |
| `Tools/check/adlaire-design-contracts.json` | JSON check contract manifest for paths, terms, Deno gates, Deno test targets, parity terms, inventories, and baseline hashes. |

Primary contracts in `Docs/Master_Spec` include:

- Development configuration contract; Generated output placement contract; TypeScript source inventory contract; Source/output/sample boundary contract.
- CSS target manifest contract; Generated JavaScript pair contract; Generated JavaScript parity contract; JavaScript public surface contract.
- Sample asset/load contract; Editor runtime module registry contract; Interaction audit contract; Deno unit test target coverage; Validation mode contract.

## Generated JavaScript Pairs

| Source | Generated output |
| --- | --- |
| `TypeScript/UI/components.ts` | `UI/components.js` |
| `TypeScript/UI/forms.ts` | `UI/forms.js` |
| `TypeScript/UI/content.ts` | `UI/content.js` |
| `TypeScript/EditorUI/wysiwyg.ts` | `EditorUI/wysiwyg.js` |
| `TypeScript/Editor/index.ts` | `EditorUI/editor.js` |

## Checks

Normal validation:

```sh
sh Tools/check/check-adlaire-design.sh
```

Release validation after PR merge cleanup:

```sh
sh Tools/check/check-adlaire-design.sh --release-check
```

Repository work starts with startup synchronization:

- Read `AGENTS.md`.
- Check worktree status and remotes.
- Run `git fetch backup --prune`.
- Compare `HEAD`, local `main`, and `backup/main`.

The local Git consistency baseline is:

- Automatic pruning.
- Fast-forward-only pulls.
- `backup` as the default push remote.
- Current branch push behavior.
- Automatic upstream setup.

GitHub uses PRs to `main`, merge commits only, automatic head-branch deletion, matching merged branch cleanup, and stale merged branch reporting.

Checks use family-labelled diagnostics. Work is complete only when validation reaches zero known check failures and zero unresolved bugs.

Complete Deno release evidence requires Local Docker Deno validation, including the Deno-backed generated CSS parity check, Deno type-check target coverage, and Deno unit test execution.

## Samples And Visual Baseline

`Samples/design/index.html` demonstrates the Product adoption surface before catalog confirmation sections.

It may show Generic UI, Advanced Input and Design-System UI, Admin UI, WYSIWYG Editor UI, Git Provider UI, Cloud / Infrastructure UI, Tokens, Brand, and the official 1520 SVG icons.

Samples remain sample-support material.

`Samples/sample-current.png` is the Visual Baseline reference screenshot.
Reference screenshot changes require the related source or contract change in the same review unit.
The checked Visual Baseline hash, byte size, and Visual Baseline dimensions stay in `Tools/check/adlaire-design-contracts.json`.
