# Adlaire-Design Samples

`Samples/` contains supporting visual materials for checking the design system in context.

Samples are not specification sources. The authoritative sources are `Docs/Master_Spec`, the catalogs, `Tokens/`, `UI/`, `EditorUI/`, `Icons/`, and `Brand/`.

## Files

| Path | Role |
| --- | --- |
| `Samples/design/index.html` | Static confirmation surface for the current design system. |
| `Samples/design/sample.css` | Sample-only layout support. |
| `Samples/design/sample.js` | Sample-only display support. |
| `Samples/sample-current.png` | Reference screenshot. |

## Coverage

| Area | Source | Sample coverage |
| --- | --- | --- |
| Generic UI | `Docs/Generic_Component_Catalog` | Cards, states, forms, content UI, Git Provider UI. |
| Admin UI | `Docs/Admin_UI_Catalog` | Admin state, action priority, mobile support, layout. |
| WYSIWYG Editor UI | `Docs/WYSIWYG_Editor_UI_Catalog` | Editor surface, toolbar, mobile sheet, readonly/error states. |
| Icon Set | `Docs/Icon_Set_Catalog`, `Icons/` | Official 500 icons and category access. |
| Tokens / Brand | `Tokens/`, `Brand/`, `Docs/Brand_Asset_Catalog` | Token colors, surfaces, layout tokens, brand assets. |

## Update Rules

- Samples may be updated only as supporting material.
- If a sample exposes a specification gap, update the authoritative document or catalog first.
- When Samples change, check whether `Docs/Master_Spec`, `Docs/Document_Index`, and `Tools/check/check-adlaire-design.sh` also need synchronization.
- Sample HTML, CSS, and JS must not introduce npm, bundling, minification, CSS preprocessors, or source-of-truth values.
