# Adlaire-Design-System

Adlaire-Design-System is the formal system name. `Adlaire-Design` is the current repository name.

Adlaire-Design-System は正式なシステム名です。`Adlaire-Design` は当面のリポジトリ名です。

## Language / 言語

| Language | Document |
| --- | --- |
| English | [Docs/README.en.md](Docs/README.en.md) |
| 日本語 | [Docs/README.ja.md](Docs/README.ja.md) |

## Contract Anchor / 契約アンカー

This root README is the language gateway. The full English and Japanese README documents above describe the repository in detail.

このルートREADMEは言語選択の入口です。詳細なREADME本文は上記の英語版・日本語版に分離しています。

The language README documents are reader guides. The governing specification remains `Docs/Master_Spec`, and the repository index remains `Docs/Document_Index`.

言語別READMEは読者向けガイドです。仕様正本は `Docs/Master_Spec`、リポジトリ索引は `Docs/Document_Index` です。

Authority remains:

| Area | Source |
| --- | --- |
| Overall specification / 全体仕様 | `Docs/Master_Spec` |
| Repository index / リポジトリ索引 | `Docs/Document_Index` |
| Editor specification / Editor仕様 | `Docs/Editor_Master_Spec` |
| Check contract manifest / 検査契約マニフェスト | `Tools/check/adlaire-design-contracts.json` |

The README language split must preserve these checked contracts: Source/output/sample boundary contract, CSS target manifest contract, Editor runtime module registry contract, Deno unit test target coverage, and Visual Baseline.

READMEの言語分離後も、Source/output/sample boundary contract、CSS target manifest contract、Editor runtime module registry contract、Deno unit test target coverage、Visual Baseline は維持します。

## Generated JavaScript Pair Anchor / 生成JavaScriptペアアンカー

| Source | Generated output |
| --- | --- |
| `TypeScript/UI/components.ts` | `UI/components.js` |
| `TypeScript/UI/forms.ts` | `UI/forms.js` |
| `TypeScript/UI/content.ts` | `UI/content.js` |
| `TypeScript/EditorUI/wysiwyg.ts` | `EditorUI/wysiwyg.js` |
| `TypeScript/Editor/index.ts` | `EditorUI/editor.js` |

`Samples/sample-current.png` is the Visual Baseline reference screenshot.
Reference screenshot changes require the related source or contract change in the same review unit.
The Visual Baseline hash, byte size, and Visual Baseline dimensions are listed in `Tools/check/adlaire-design-contracts.json`.
