# Adlaire-Design Samples

`Samples/` は、Adlaire-Designの理解補助と利用イメージ共有のための資料置き場である。

サンプルデザインとスクリーンショットは仕様正本ではない。正本は `Docs/Master_Spec`、各カタログ、`Tokens/`、`UI/`、`EditorUI/`、`Icons/`、`Brand/` とする。

## 配置ルール

- `Samples/design/`: サンプルデザインのHTML、CSS、JS、SVG、PNG、WebPを配置する。
- `Samples/`: PNGまたはWebPのスクリーンショットを配置する。
- JPG/JPEGは使用しない。
- ビルド、minify、bundle、npm依存は使用しない。

## 確認対象

Samplesでは、以下の領域を同じサンプルから確認できる状態で管理する。

| 分類 | 参照カタログまたは正本 | 確認対象 |
| --- | --- | --- |
| Generic UI | `Docs/Generic_Component_Catalog` | 汎用UI、本文UI、フォームUI、Git Provider UI |
| Admin UI | `Docs/Admin_UI_Catalog` | 管理画面専用UI、状態、操作優先度、管理レイアウト |
| WYSIWYG Editor UI | `Docs/WYSIWYG_Editor_UI_Catalog` | Editor UI、モバイルEditor UI、状態表示 |
| Icon Set | `Docs/Icon_Set_Catalog`、`Icons/` | 公式500アイコン、カテゴリ、用途、代替テキスト方針 |
| Tokens / Brand | `Tokens/`、`Brand/`、`Docs/Brand_Asset_Catalog` | token参照、ブランド資産、表示確認 |

サンプルは、仕様正本ではなく確認導線である。サンプルで見つかった差分は、該当する正本または補助正本へ反映してから実装へ進む。

## 現時点のサンプル

- `Samples/design/index.html`: 汎用UI、Admin UI、公式アイコン、WYSIWYG Editor UI、Git Provider UIをまとめた静的サンプル。ブランド資産、公式500アイコン、カタログ参照導線の表示確認も含める。
- `Samples/design/sample.css`: サンプル表示のための配置補助CSS。
- `Samples/design/sample.js`: サンプル内の軽い表示補助JavaScript。
- `Samples/sample-current.png`: 参考用のPNGスクリーンショット。

## 更新ルール

- Samplesを更新する場合は、対象カタログ、`Docs/Master_Spec`、`Docs/Document_Index`、`Tools/check/check-adlaire-design.sh` の同期要否を確認する。
- 公式アイコンの確認導線は、500件固定の `Docs/Icon_Set_Catalog` と `Icons/` 実体を参照する。
- サンプル内のHTML、CSS、JSは理解補助に限定し、仕様値の正本にはしない。

## ブランドサンプル

`Brand/` の実装済みブランド資産は、Adlaire-Designの見た目を確認しやすくするためのサンプル資料でも使用できる。

| ファイル | サンプル用途 |
| --- | --- |
| `Brand/adlaire-logo-primary.svg` | 標準ロゴ表示、ヘッダー、資料表紙の確認 |
| `Brand/adlaire-logo-mark.svg` | 小型表示、アイコン的表示、狭い領域での識別確認 |
| `Brand/adlaire-ogp-default.png` | SNS共有、リンクプレビュー、リポジトリ紹介画像の確認 |
| `Brand/adlaire-image-brand-overview.webp` | ブランド概要、構成説明、導入資料での表示確認 |

ブランド資産そのものの管理ルールは `Brand/README.md` と `Docs/Brand_Asset_Catalog` を参照する。
