# Adlaire-Design Samples

`Samples/` contains supporting visual materials for checking the design system in context.

Samples are not specification sources. The authoritative sources are `Docs/Master_Spec`, the catalogs, `Tokens/`, `UI/`, `EditorUI/`, `Icons/`, and `Brand/`.

## Files

| Path | Role |
| --- | --- |
| `Samples/design/index.html` | Static showcase surface for the current design system. |
| `Samples/design/sample.css` | Sample-only layout support. |
| `Samples/design/sample.js` | Sample-only display and state-toggle support. |
| `Samples/sample-current.png` | Reference screenshot. |

## Coverage

| Area | Source | Sample coverage |
| --- | --- | --- |
| Generic UI | `Docs/Generic_Component_Catalog` | Cards, states, forms, content UI, Layout System v2, overlay/feedback UI, Git Provider UI. |
| Admin UI | `Docs/Admin_UI_Catalog` | Admin state, action priority, mobile support, layout, operational feedback. |
| WYSIWYG Editor UI | `Docs/WYSIWYG_Editor_UI_Catalog` | Editor surface, toolbar, mobile sheet, slash menu, save/lock/suggestion states. |
| Icon Set | `Docs/Icon_Set_Catalog`, `Icons/` | Official 500 SVG icons and category access. |
| Tokens / Brand | `Tokens/`, `Brand/`, `Docs/Brand_Asset_Catalog` | Token colors, surfaces, layout tokens, brand assets. |

The showcase groups the current system into Overview, Tokens, Components, Admin, WYSIWYG, Icons, Brand, and operational quality sections so visual review follows the same boundaries as the catalogs. The sample script may toggle representative states for review, but it does not define production behavior.

## Update Rules

- Samples may be updated only as supporting material.
- If a sample exposes a specification gap, update the authoritative document or catalog first.
- When Samples change, check whether `Docs/Master_Spec`, `Docs/Document_Index`, and `Tools/check/check-adlaire-design.sh` also need synchronization.
- Sample HTML, CSS, and JS must not introduce npm, bundling, minification, CSS preprocessors, or source-of-truth values.
- Sample state toggles must use `data-sample-*` attributes so they remain separate from production `data-adlaire-*` behavior.
- Sample interaction controls cover overlay visibility, progress value changes, and WYSIWYG readonly, locked, accessibility, and save states without becoming production behavior.
