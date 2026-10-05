# Adlaire-Design-System README

これは Adlaire-Design-System の日本語読者向けガイドです。

ルートの `README.md` は言語選択の入口として小さく保ち、このファイルでリポジトリの読み方を説明します。このファイルは独立した正本ではありません。

当面のリポジトリ名は `Adlaire-Design` です。正式なシステム名は `Adlaire-Design-System` です。

## 正本

| 領域 | 正本 |
| --- | --- |
| 全体仕様 | `Docs/Master_Spec` |
| Editor / WYSIWYG 詳細 | `Docs/Editor_Master_Spec` |
| リポジトリ索引 | `Docs/Document_Index` |
| コンポーネント同期マトリクス | `Docs/Component_Contract_Matrix` |
| カタログ正本 | `Docs/Generic_Component_Catalog`、`Docs/Admin_UI_Catalog`、`Docs/WYSIWYG_Editor_UI_Catalog`、`Docs/Icon_Set_Catalog`、`Docs/Brand_Asset_Catalog` |
| タスク正本 | `Docs/Pending_Tasks` |
| 検査契約マニフェスト | `Tools/check/adlaire-design-contracts.json` |

読者向けガイドは上記文書を要約できますが、上書きはできません。

## リポジトリ責務

| 領域 | 責務 |
| --- | --- |
| `TypeScript/` | CSS生成、公開UI JavaScript、WYSIWYG Editor UI JavaScript、構造化Editor出力の Deno TypeScript 正本。 |
| `Tokens/`、`UI/`、`EditorUI/` | リポジトリ内で管理する生成CSSと生成JavaScript。 |
| `Icons/` | アイコンカタログと `assetInventory` が管理する official 1520 SVG icons。 |
| `Brand/` | ブランドカタログと `assetInventory` が管理するブランド資産。 |
| `Samples/` | Product adoption surface と Visual Baseline を含む確認資料。仕様正本ではありません。 |
| `Tools/check/` | リポジトリ検査、documentationGovernance、local Git consistency、生成物parity、release readinessの検査。 |

## 開発ルール

- 生成CSSと生成JavaScriptの実装正本は Deno TypeScript です。
- 検証時のDeno実行は Local Docker Deno validation に固定し、ホストの `deno` は使用しません。
- `npm packages`、`package.json`、npm互換lockfile、`node_modules`、Node.js依存ツール、外部フロントエンドフレームワークは使用しません。
- 外部フロントエンドビルド設定、CSSプリプロセッサ、minify bundle、`dist/`、`build/` も使用しません。
- 開発、ビルド、生成、検査、release-check の構造化設定はJSON-onlyです。これらの範囲でYAMLは技術選定しません。
- CSSとJavaScriptは別々の出力として管理します。

## 契約ナビゲーション

契約定義の全文は `Docs/Master_Spec`、リポジトリインベントリは `Docs/Document_Index`、ファミリー単位の同期関係は `Docs/Component_Contract_Matrix` で管理します。

| 文書 | 読む目的 |
| --- | --- |
| `Docs/Master_Spec` | 契約定義と検査方針。 |
| `Docs/Document_Index` | リポジトリインベントリ、出力位置、検査対象ガバナンス表。 |
| `Docs/Component_Contract_Matrix` | ファミリー単位のカタログ、ソース、生成物、サンプル、検査同期。 |
| `Tools/check/adlaire-design-contracts.json` | JSON check contract manifest として、path、terms、Deno gate、parity term、inventory、baseline hash を管理。 |

`Docs/Master_Spec` の主要契約:

- Development configuration contract、Generated output placement contract、TypeScript source inventory contract、Source/output/sample boundary contract。
- CSS target manifest contract、Generated JavaScript pair contract、Generated JavaScript parity contract、JavaScript public surface contract。
- Sample asset/load contract、Editor runtime module registry contract、Interaction audit contract、Validation mode contract。

## 生成JavaScriptペア

| ソース | 生成出力 |
| --- | --- |
| `TypeScript/UI/components.ts` | `UI/components.js` |
| `TypeScript/UI/forms.ts` | `UI/forms.js` |
| `TypeScript/UI/content.ts` | `UI/content.js` |
| `TypeScript/EditorUI/wysiwyg.ts` | `EditorUI/wysiwyg.js` |
| `TypeScript/Editor/index.ts` | `EditorUI/editor.js` |

## 検査

通常検査:

```sh
sh Tools/check/check-adlaire-design.sh
```

PRマージ後のcleanup後に実行するrelease検査:

```sh
sh Tools/check/check-adlaire-design.sh --release-check
```

リポジトリ作業は startup synchronization から開始します。

- `AGENTS.md` を読む。
- worktree status と remotes を確認する。
- `git fetch backup --prune` を実行する。
- `HEAD`、local `main`、`backup/main` を比較する。

local Git consistency baseline は次のとおりです。

- 自動prune。
- fast-forward-only pull。
- 既定push remote `backup`。
- current branch push。
- upstream自動設定。

GitHub側は `main` へのPR、merge commits only、head branch自動削除、matching merged branch cleanup、stale merged branch reporting を前提にします。

検査失敗は family-labelled diagnostics で表示します。作業完了は zero known check failures と zero unresolved bugs の状態でのみ報告します。

Complete Deno release evidence には、Local Docker Deno validation、Deno-backed generated CSS parity check、Deno type-check target coverage が必要です。

## サンプルとVisual Baseline

`Samples/design/index.html` は Product adoption surface をカタログ確認セクションの前に表示します。

Generic UI、Advanced Input and Design-System UI、Admin UI、WYSIWYG Editor UI、Git Provider UI、Cloud / Infrastructure UI、Tokens、Brand、公式1520個のSVGアイコンを示せます。

サンプルは補助資料であり、正本にはなりません。

`Samples/sample-current.png` は Visual Baseline の参照スクリーンショットです。参照スクリーンショットの変更は、原因となるソースまたは契約変更と同じレビュー単位で扱います。

検査済みの Visual Baseline hash とbyte sizeは `Tools/check/adlaire-design-contracts.json` に保持します。
