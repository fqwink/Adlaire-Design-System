# Adlaire-Design-System Samples

`Samples/` contains supporting visual materials for checking Adlaire-Design-System in context.

The current repository name is `Adlaire-Design`. The formal system name is `Adlaire-Design-System`.

Samples are not specification sources. The authoritative sources are `Docs/Master_Spec`, the catalogs, `Tokens/`, `UI/`, `EditorUI/`, `Icons/`, and `Brand/`.

## Files

| Path | Role |
| --- | --- |
| `Samples/design/index.html` | Static showcase surface for the current design system, including the Product adoption surface. |
| `Samples/design/sample.css` | Sample-only layout support. |
| `Samples/design/sample.js` | Sample-only display and state-toggle support. |
| `Samples/sample-current.png` | Reference screenshot. |

`Samples/design/sample.css` and `Samples/design/sample.js` are the only sample-support CSS and JavaScript files allowed by the Generated output placement contract. They must remain sample-only support files and must not become generated design-system outputs or source-of-truth files.

The Source/output/sample boundary contract keeps Samples as non-authoritative confirmation material. Samples can demonstrate contracts, but they do not own TypeScript source, generated CSS, generated JavaScript, tokens, catalogs, or brand asset rules.

## Visual Baseline

`Samples/sample-current.png` is the current reference screenshot for human visual review. It is not a generated source of truth and must not override catalogs, tokens, generated CSS, generated JavaScript, or checks.

Update the screenshot only when the rendered showcase intentionally changes. A screenshot update must be reviewed together with the matching sample, catalog, token, CSS, JavaScript, or check change that caused the visual change.

The Visual Baseline contract is recorded in `Tools/check/adlaire-design-contracts.json` so the reference screenshot hash, byte size, sample surface, and required review wording stay check-covered. Reference screenshot changes require the related source or contract change in the same review unit.

## Coverage

| Area | Source | Sample coverage |
| --- | --- | --- |
| Generic UI | `Docs/Generic_Component_Catalog` | Cards, states, forms, advanced input UI, design-system operations UI, content UI, Layout System v2, overlay/feedback UI, Git Provider UI, Cloud / Infrastructure UI. |
| Admin UI | `Docs/Admin_UI_Catalog` | Admin state, action priority, mobile support, layout, operational feedback. |
| WYSIWYG Editor UI | `Docs/WYSIWYG_Editor_UI_Catalog` | Editor surface, toolbar, mobile sheet, slash menu, save/lock/suggestion states. |
| Icon Set | `Docs/Icon_Set_Catalog`, `Icons/` | Official 1520 SVG icons and category access. |
| Tokens / Brand | `Tokens/`, `Brand/`, `Docs/Brand_Asset_Catalog` | Token colors, surfaces, layout tokens, brand assets. |

The showcase starts with a Product adoption surface that presents the design system as an applied operations dashboard. It then groups the current system into Overview, Tokens, Components, Advanced Input and Design-System UI, Admin, WYSIWYG, Icons, Brand, and operational quality sections so visual review follows the same boundaries as the catalogs. The sample script may toggle representative states for review, but it does not define production behavior.

## Load Contract

The Sample asset/load contract keeps `Samples/design/index.html` aligned with the public CSS load order from `Docs/Master_Spec`, then `EditorUI/wysiwyg.css`, `Samples/design/sample.css`, generated JavaScript, and `Samples/design/sample.js`.

The JavaScript public surface contract keeps `UI/components.js`, `UI/forms.js`, `UI/content.js`, `EditorUI/editor.js`, and `EditorUI/wysiwyg.js` loadable without bundling. `EditorUI/editor.js` exposes `window.AdlaireEditor` for structured editor runtime confirmation.

## Update Rules

- Samples may be updated only as supporting material.
- If a sample exposes a specification gap, update the authoritative document or catalog first.
- When Samples change, check whether `Docs/Master_Spec`, `Docs/Document_Index`, and `Tools/check/check-adlaire-design.sh` also need synchronization.
- Sample HTML, CSS, and JS must not introduce npm, bundling, minification, CSS preprocessors, or source-of-truth values.
- Sample CSS and JS must stay limited to `Samples/design/sample.css` and `Samples/design/sample.js`.
- Sample state toggles must use `data-sample-*` attributes so they remain separate from production `data-adlaire-*` behavior.
- Sample interaction controls cover overlay visibility, progress value changes, and WYSIWYG readonly, locked, accessibility, and save states without becoming production behavior.
- Product adoption surface markup must remain sample-only and must not introduce new generated CSS/JavaScript outputs or production data contracts.
- Reference screenshot changes require the related source or contract change in the same review unit.
