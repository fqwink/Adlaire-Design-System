#!/bin/sh
set -eu

TOOL_DIR=$(CDPATH= cd -- "$(dirname -- "$0")" && pwd)
ROOT=$(CDPATH= cd -- "$TOOL_DIR/../.." && pwd)
TMP_DIR="${TMPDIR:-/tmp}/adlaire-design-check.$$"
RUN_RELEASE_CHECK=0
DENO_TYPECHECK_TARGETS='
TypeScript/CSS/index.ts
TypeScript/UI/components.ts
TypeScript/UI/component-contracts.ts
TypeScript/UI/interaction-contracts.ts
TypeScript/UI/forms.ts
TypeScript/UI/content.ts
TypeScript/EditorUI/wysiwyg.ts
TypeScript/Editor/index.ts
'

case "${1:-}" in
  "")
    ;;
  "--release-check")
    RUN_RELEASE_CHECK=1
    ;;
  *)
    echo "usage: sh Tools/check/check-adlaire-design.sh [--release-check]" >&2
    exit 1
    ;;
esac

mkdir -p "$TMP_DIR"
trap 'rm -rf "$TMP_DIR"' EXIT HUP INT TERM

fail() {
  family=$1
  message=$2
  echo "[$family] $message" >&2
  exit 1
}

require_path() {
  if [ ! -e "$ROOT/$1" ]; then
    fail "Repository structure" "missing required path: $1"
  fi
}

require_dir() {
  if [ ! -d "$ROOT/$1" ]; then
    fail "Repository structure" "required path must be a directory: $1"
  fi
}

require_text() {
  file=$1
  text=$2
  family=${3:-Contract text}
  if ! grep -F -- "$text" "$ROOT/$file" >/dev/null 2>&1; then
    fail "$family" "$file missing required text: $text"
  fi
}

require_local_git_config() {
  key=$1
  expected=$2
  actual=$(git -C "$ROOT" config --local --get "$key" 2>/dev/null || printf '%s' '<unset>')
  if [ "$actual" != "$expected" ]; then
    fail "Release readiness" "local Git config $key must be $expected; found $actual."
  fi
}

require_class_in_css() {
  class=$1
  if ! grep -R -F -- "$class" "$ROOT/UI" "$ROOT/EditorUI" >/dev/null 2>&1; then
    fail "Component CSS contract" "missing required implemented class: $class"
  fi
}

require_class_in_doc() {
  file=$1
  class=$2
  if ! grep -F -- "\`$class\`" "$ROOT/$file" >/dev/null 2>&1; then
    fail "Catalog contract" "$file missing required catalog class: $class"
  fi
}

for path in \
  AGENTS.md \
  README.md \
  LICENSE \
  Docs/Master_Spec \
  Docs/Editor_Master_Spec \
  Docs/Component_Contract_Matrix \
  Docs/Document_Index \
  Docs/Generic_Component_Catalog \
  Docs/Admin_UI_Catalog \
  Docs/WYSIWYG_Editor_UI_Catalog \
  Docs/Icon_Set_Catalog \
  Docs/Brand_Asset_Catalog \
  Docs/Pending_Tasks \
  Brand/README.md \
  Samples/README.md \
  Samples/design/index.html \
  Samples/design/sample.css \
  Samples/design/sample.js \
  Tokens/colors.css \
  Tokens/typography.css \
  Tokens/spacing.css \
  Tokens/layout.css \
  Tokens/motion.css \
  Tokens/layer.css \
  Tokens/breakpoints.css \
  Tokens/surface.css \
  Tokens/status.css \
  Tokens/effects.css \
  UI/adlaire.css \
  UI/base.css \
  UI/grid.css \
  UI/layout.css \
  UI/components.css \
  UI/components.js \
  UI/site.css \
  UI/forms.css \
  UI/forms.js \
  UI/content.css \
  UI/content.js \
  UI/utilities.css \
  UI/compat-agws.css \
  EditorUI/wysiwyg.css \
  EditorUI/wysiwyg.js \
  EditorUI/editor.js \
  TypeScript/CSS/tokens.ts \
  TypeScript/CSS/rules.ts \
  TypeScript/CSS/rules-types.ts \
  TypeScript/CSS/rules-adlaire.ts \
  TypeScript/CSS/rules-base.ts \
  TypeScript/CSS/rules-grid.ts \
  TypeScript/CSS/rules-layout.ts \
  TypeScript/CSS/rules-components.ts \
  TypeScript/CSS/rules-components-foundation.ts \
  TypeScript/CSS/rules-components-foundation-core.ts \
  TypeScript/CSS/rules-components-foundation-core-base.ts \
  TypeScript/CSS/rules-components-foundation-core-controls.ts \
  TypeScript/CSS/rules-components-foundation-core-status.ts \
  TypeScript/CSS/rules-components-foundation-core-data.ts \
  TypeScript/CSS/rules-components-foundation-core-announcements.ts \
  TypeScript/CSS/rules-components-foundation-core-flow.ts \
  TypeScript/CSS/rules-components-foundation-core-media.ts \
  TypeScript/CSS/rules-components-foundation-media.ts \
  TypeScript/CSS/rules-components-foundation-media-base.ts \
  TypeScript/CSS/rules-components-foundation-media-cards.ts \
  TypeScript/CSS/rules-components-foundation-media-governance.ts \
  TypeScript/CSS/rules-components-foundation-media-operations.ts \
  TypeScript/CSS/rules-components-foundation-media-app.ts \
  TypeScript/CSS/rules-components-foundation-domains.ts \
  TypeScript/CSS/rules-components-foundation-domains-product.ts \
  TypeScript/CSS/rules-components-foundation-domains-commerce.ts \
  TypeScript/CSS/rules-components-foundation-domains-data.ts \
  TypeScript/CSS/rules-components-foundation-domains-collaboration.ts \
  TypeScript/CSS/rules-components-foundation-domains-workflow.ts \
  TypeScript/CSS/rules-components-foundation-domains-observability.ts \
  TypeScript/CSS/rules-components-foundation-support.ts \
  TypeScript/CSS/rules-components-foundation-support-cards.ts \
  TypeScript/CSS/rules-components-foundation-support-panels.ts \
  TypeScript/CSS/rules-components-foundation-support-layout.ts \
  TypeScript/CSS/rules-components-foundation-support-pagination.ts \
  TypeScript/CSS/rules-components-foundation-support-filters.ts \
  TypeScript/CSS/rules-components-overlays.ts \
  TypeScript/CSS/rules-components-overlays-surfaces.ts \
  TypeScript/CSS/rules-components-overlays-carousel.ts \
  TypeScript/CSS/rules-components-overlays-tooltip.ts \
  TypeScript/CSS/rules-components-overlays-responsive.ts \
  TypeScript/CSS/rules-components-overlays-catalog.ts \
  TypeScript/CSS/rules-components-operations.ts \
  TypeScript/CSS/rules-components-operations-admin.ts \
  TypeScript/CSS/rules-components-operations-admin-layout.ts \
  TypeScript/CSS/rules-components-operations-admin-states.ts \
  TypeScript/CSS/rules-components-operations-admin-actions.ts \
  TypeScript/CSS/rules-components-operations-admin-governance.ts \
  TypeScript/CSS/rules-components-operations-admin-delivery.ts \
  TypeScript/CSS/rules-components-operations-admin-lifecycle.ts \
  TypeScript/CSS/rules-components-operations-admin-observability.ts \
  TypeScript/CSS/rules-components-operations-admin-security.ts \
  TypeScript/CSS/rules-components-operations-data.ts \
  TypeScript/CSS/rules-components-operations-data-navigation.ts \
  TypeScript/CSS/rules-components-operations-data-dialogs.ts \
  TypeScript/CSS/rules-components-operations-data-search.ts \
  TypeScript/CSS/rules-components-operations-data-tree.ts \
  TypeScript/CSS/rules-components-operations-data-grid.ts \
  TypeScript/CSS/rules-components-operations-data-inspection.ts \
  TypeScript/CSS/rules-components-operations-data-bottom-sheet.ts \
  TypeScript/CSS/rules-components-operations-workspace.ts \
  TypeScript/CSS/rules-components-operations-workspace-tabs.ts \
  TypeScript/CSS/rules-components-operations-workspace-menus.ts \
  TypeScript/CSS/rules-components-operations-workspace-boards.ts \
  TypeScript/CSS/rules-components-operations-workspace-metrics.ts \
  TypeScript/CSS/rules-components-operations-workspace-assets.ts \
  TypeScript/CSS/rules-components-operations-workspace-publishing.ts \
  TypeScript/CSS/rules-components-operations-business.ts \
  TypeScript/CSS/rules-components-operations-business-planning.ts \
  TypeScript/CSS/rules-components-operations-business-enterprise.ts \
  TypeScript/CSS/rules-components-operations-business-governance.ts \
  TypeScript/CSS/rules-components-operations-business-industry.ts \
  TypeScript/CSS/rules-components-operations-business-insights.ts \
  TypeScript/CSS/rules-components-operations-business-messaging.ts \
  TypeScript/CSS/rules-components-operations-industry.ts \
  TypeScript/CSS/rules-components-operations-industry-content.ts \
  TypeScript/CSS/rules-components-operations-industry-devices.ts \
  TypeScript/CSS/rules-components-operations-industry-hospitality.ts \
  TypeScript/CSS/rules-components-operations-industry-civic.ts \
  TypeScript/CSS/rules-components-operations-industry-utilities.ts \
  TypeScript/CSS/rules-components-operations-workflow.ts \
  TypeScript/CSS/rules-components-operations-workflow-layout.ts \
  TypeScript/CSS/rules-components-operations-workflow-records.ts \
  TypeScript/CSS/rules-components-operations-workflow-automation.ts \
  TypeScript/CSS/rules-components-platform.ts \
  TypeScript/CSS/rules-components-platform-developer.ts \
  TypeScript/CSS/rules-components-platform-theme.ts \
  TypeScript/CSS/rules-components-platform-states.ts \
  TypeScript/CSS/rules-components-platform-github.ts \
  TypeScript/CSS/rules-components-platform-cloud.ts \
  TypeScript/CSS/rules-components-platform-surfaces.ts \
  TypeScript/CSS/rules-site.ts \
  TypeScript/CSS/rules-forms.ts \
  TypeScript/CSS/rules-forms-foundation.ts \
  TypeScript/CSS/rules-forms-foundation-base.ts \
  TypeScript/CSS/rules-forms-foundation-controls.ts \
  TypeScript/CSS/rules-forms-foundation-checks.ts \
  TypeScript/CSS/rules-forms-foundation-buttons.ts \
  TypeScript/CSS/rules-forms-foundation-notices.ts \
  TypeScript/CSS/rules-forms-foundation-submit.ts \
  TypeScript/CSS/rules-forms-composite.ts \
  TypeScript/CSS/rules-forms-composite-filters.ts \
  TypeScript/CSS/rules-forms-composite-input-groups.ts \
  TypeScript/CSS/rules-forms-composite-date-time.ts \
  TypeScript/CSS/rules-forms-composite-selects.ts \
  TypeScript/CSS/rules-forms-composite-tokens.ts \
  TypeScript/CSS/rules-forms-composite-calendar.ts \
  TypeScript/CSS/rules-forms-upload.ts \
  TypeScript/CSS/rules-forms-upload-files.ts \
  TypeScript/CSS/rules-forms-upload-settings.ts \
  TypeScript/CSS/rules-forms-upload-toggles.ts \
  TypeScript/CSS/rules-forms-upload-danger.ts \
  TypeScript/CSS/rules-forms-validation.ts \
  TypeScript/CSS/rules-forms-validation-fields.ts \
  TypeScript/CSS/rules-forms-validation-admin.ts \
  TypeScript/CSS/rules-forms-validation-stepper.ts \
  TypeScript/CSS/rules-forms-validation-builder.ts \
  TypeScript/CSS/rules-forms-validation-responsive.ts \
  TypeScript/CSS/rules-forms-validation-aliases.ts \
  TypeScript/CSS/rules-content.ts \
  TypeScript/CSS/rules-content-foundation.ts \
  TypeScript/CSS/rules-content-foundation-base.ts \
  TypeScript/CSS/rules-content-foundation-patterns.ts \
  TypeScript/CSS/rules-content-foundation-organization.ts \
  TypeScript/CSS/rules-content-foundation-timeline.ts \
  TypeScript/CSS/rules-content-foundation-tabs.ts \
  TypeScript/CSS/rules-content-foundation-news.ts \
  TypeScript/CSS/rules-content-extended.ts \
  TypeScript/CSS/rules-content-extended-toc.ts \
  TypeScript/CSS/rules-content-extended-knowledge.ts \
  TypeScript/CSS/rules-content-extended-repository.ts \
  TypeScript/CSS/rules-content-extended-markdown.ts \
  TypeScript/CSS/rules-content-extended-activity.ts \
  TypeScript/CSS/rules-content-extended-responsive.ts \
  TypeScript/CSS/rules-content-catalog.ts \
  TypeScript/CSS/rules-content-catalog-aliases.ts \
  TypeScript/CSS/rules-content-catalog-news.ts \
  TypeScript/CSS/rules-content-catalog-sidebar.ts \
  TypeScript/CSS/rules-content-catalog-contact.ts \
  TypeScript/CSS/rules-content-catalog-legal.ts \
  TypeScript/CSS/rules-content-catalog-alerts.ts \
  TypeScript/CSS/rules-content-interactions.ts \
  TypeScript/CSS/rules-content-interactions-sorting.ts \
  TypeScript/CSS/rules-content-interactions-desktop.ts \
  TypeScript/CSS/rules-content-interactions-tablet.ts \
  TypeScript/CSS/rules-content-interactions-mobile.ts \
  TypeScript/CSS/rules-utilities.ts \
  TypeScript/CSS/rules-compat-agws.ts \
  TypeScript/CSS/rules-wysiwyg.ts \
  TypeScript/CSS/rules-wysiwyg-shell.ts \
  TypeScript/CSS/rules-wysiwyg-shell-frame.ts \
  TypeScript/CSS/rules-wysiwyg-shell-header.ts \
  TypeScript/CSS/rules-wysiwyg-toolbar.ts \
  TypeScript/CSS/rules-wysiwyg-toolbar-layout.ts \
  TypeScript/CSS/rules-wysiwyg-toolbar-tools.ts \
  TypeScript/CSS/rules-wysiwyg-toolbar-focus.ts \
  TypeScript/CSS/rules-wysiwyg-toolbar-disabled.ts \
  TypeScript/CSS/rules-wysiwyg-blocks.ts \
  TypeScript/CSS/rules-wysiwyg-blocks-core.ts \
  TypeScript/CSS/rules-wysiwyg-blocks-menus.ts \
  TypeScript/CSS/rules-wysiwyg-blocks-preview.ts \
  TypeScript/CSS/rules-wysiwyg-blocks-types.ts \
  TypeScript/CSS/rules-wysiwyg-blocks-states.ts \
  TypeScript/CSS/rules-wysiwyg-blocks-mobile.ts \
  TypeScript/CSS/rules-wysiwyg-support.ts \
  TypeScript/CSS/rules-wysiwyg-support-editing.ts \
  TypeScript/CSS/rules-wysiwyg-support-panels.ts \
  TypeScript/CSS/rules-wysiwyg-support-advanced.ts \
  TypeScript/CSS/rules-wysiwyg-support-motion.ts \
  TypeScript/CSS/rules-wysiwyg-support-tablet.ts \
  TypeScript/CSS/rules-wysiwyg-support-mobile.ts \
  TypeScript/CSS/rules-wysiwyg-extensions.ts \
  TypeScript/CSS/rules-wysiwyg-extensions-panels.ts \
  TypeScript/CSS/rules-wysiwyg-extensions-drag.ts \
  TypeScript/CSS/rules-wysiwyg-extensions-feedback.ts \
  TypeScript/CSS/rules-wysiwyg-extensions-blocks.ts \
  TypeScript/CSS/rules-wysiwyg-extensions-states.ts \
  TypeScript/CSS/rules-wysiwyg-extensions-collaboration.ts \
  TypeScript/CSS/rules-wysiwyg-extensions-banners.ts \
  TypeScript/CSS/targets.ts \
  TypeScript/CSS/emit.ts \
  TypeScript/CSS/manifest.ts \
  TypeScript/CSS/index.ts \
  TypeScript/UI/components.ts \
  TypeScript/UI/component-contracts.ts \
  TypeScript/UI/interaction-contracts.ts \
  TypeScript/UI/forms.ts \
  TypeScript/UI/content.ts \
  TypeScript/EditorUI/wysiwyg.ts \
  TypeScript/Editor/core.ts \
  TypeScript/Editor/document.ts \
  TypeScript/Editor/commands.ts \
  TypeScript/Editor/selection.ts \
  TypeScript/Editor/history.ts \
  TypeScript/Editor/validation.ts \
  TypeScript/Editor/events.ts \
  TypeScript/Editor/types.ts \
  TypeScript/Editor/index.ts; do
  require_path "$path"
done

for path in Docs Tokens UI EditorUI TypeScript TypeScript/CSS TypeScript/UI TypeScript/EditorUI TypeScript/Editor Icons Brand Samples Samples/design Tools/check; do
  require_dir "$path"
done

find "$ROOT" -mindepth 1 -maxdepth 1 \
  ! -name '.git' \
  ! -name '.gitignore' \
  ! -name '.DS_Store' \
  ! -name 'AGENTS.md' \
  ! -name 'README.md' \
  ! -name 'LICENSE' \
  ! -name 'Docs' \
  ! -name 'Tokens' \
  ! -name 'UI' \
  ! -name 'EditorUI' \
  ! -name 'TypeScript' \
  ! -name 'Icons' \
  ! -name 'Brand' \
  ! -name 'Samples' \
  ! -name 'Tools' \
  -print >"$TMP_DIR/unexpected-top-level"

if [ -s "$TMP_DIR/unexpected-top-level" ]; then
  echo "[Repository structure] unexpected top-level entries:" >&2
  cat "$TMP_DIR/unexpected-top-level" >&2
  exit 1
fi

find "$ROOT/Docs" -type f \
  ! -name 'Master_Spec' \
  ! -name 'Editor_Master_Spec' \
  ! -name 'Component_Contract_Matrix' \
  ! -name 'Document_Index' \
  ! -name 'Generic_Component_Catalog' \
  ! -name 'Admin_UI_Catalog' \
  ! -name 'WYSIWYG_Editor_UI_Catalog' \
  ! -name 'Icon_Set_Catalog' \
  ! -name 'Brand_Asset_Catalog' \
  ! -name 'Pending_Tasks' \
  -print >"$TMP_DIR/unexpected-docs"

if [ -s "$TMP_DIR/unexpected-docs" ]; then
  echo "[Documentation inventory] unexpected Docs files:" >&2
  cat "$TMP_DIR/unexpected-docs" >&2
  exit 1
fi

if find "$ROOT/TypeScript" -type f ! -name '*.ts' | grep . >/dev/null 2>&1; then
  fail "TypeScript source boundary" "TypeScript/ must contain only .ts files."
fi

if find "$ROOT/TypeScript/CSS" -mindepth 1 -type d | grep . >/dev/null 2>&1; then
  fail "TypeScript CSS boundary" "TypeScript/CSS must not contain nested directories."
fi

if find "$ROOT/TypeScript/Editor" -mindepth 1 -type d | grep . >/dev/null 2>&1; then
  fail "Editor runtime boundary" "TypeScript/Editor must stay flat."
fi

require_text "AGENTS.md" "構造化設定ファイルはJSONに統一" "Development configuration policy"
require_text "Docs/Master_Spec" "JSON is the only structured file format for development, build, generation, check, and release-check settings" "Development configuration policy"
require_text "Docs/Master_Spec" "The Development configuration contract forbids YAML as a technology selection for development, build, generation, check, and release-check configuration" "Development configuration policy"
require_text "Docs/Master_Spec" "The Generated output placement contract allows CSS and JavaScript files only at the explicit generated and sample-support paths listed in this specification" "Generated output placement contract"

find "$ROOT" \
  \( -path "$ROOT/.git" -o -path "$ROOT/.github" \) -prune -o \
  \( -name 'package.json' \
    -o -name 'package-lock.json' \
    -o -name 'npm-shrinkwrap.json' \
    -o -name 'node_modules' \
    -o -name '.npmrc' \
    -o -name 'yarn.lock' \
    -o -name '.yarnrc' \
    -o -name '.yarnrc.yml' \
    -o -name 'pnpm-lock.yaml' \
    -o -name 'pnpm-workspace.yaml' \
    -o -name 'bun.lock' \
    -o -name 'bun.lockb' \
    -o -name 'webpack.config.*' \
    -o -name 'vite.config.*' \
    -o -name 'rollup.config.*' \
    -o -name 'parcel.config.*' \
    -o -name 'postcss.config.*' \
    -o -name 'tailwind.config.*' \
    -o -name 'babel.config.*' \
    -o -name '.babelrc' \
    -o -name 'gulpfile.*' \
    -o -name 'gruntfile.*' \
    -o -name 'tsup.config.*' \
    -o -name 'esbuild.config.*' \) \
  -print >"$TMP_DIR/forbidden-node-build-files"

if [ -s "$TMP_DIR/forbidden-node-build-files" ]; then
  echo "[Dependency policy] npm, Node, and external frontend build configuration files are prohibited:" >&2
  cat "$TMP_DIR/forbidden-node-build-files" >&2
  exit 1
fi

find "$ROOT" -type f \( -name '*.yml' -o -name '*.yaml' \) \
  ! -path "$ROOT/.git/*" \
  ! -path "$ROOT/.github/*" \
  ! -path "$ROOT/Icons/*" \
  ! -path "$ROOT/Brand/*" \
  ! -path "$ROOT/Samples/*" \
  -print >"$TMP_DIR/development-yaml-files"

if [ -s "$TMP_DIR/development-yaml-files" ]; then
  echo "[Development configuration policy] development, build, generation, check, and release-check configuration must use JSON, not YAML:" >&2
  cat "$TMP_DIR/development-yaml-files" >&2
  exit 1
fi

find "$ROOT" \
  \( -path "$ROOT/.git" -o -path "$ROOT/.github" \) -prune -o \
  \( -type d \( -name 'Dist' -o -name 'dist' -o -name 'Build' -o -name 'build' \) \
    -o -type f \( -name '*.min.css' -o -name '*.min.js' -o -name '*.bundle.css' -o -name '*.bundle.js' \) \) \
  -print >"$TMP_DIR/forbidden-generated-output-artifacts"

if [ -s "$TMP_DIR/forbidden-generated-output-artifacts" ]; then
  echo "[Generated output placement contract] dist/build directories and minified or bundled CSS/JavaScript outputs are prohibited:" >&2
  cat "$TMP_DIR/forbidden-generated-output-artifacts" >&2
  exit 1
fi

cat >"$TMP_DIR/allowed-css-js-files" <<'LIST'
EditorUI/editor.js
EditorUI/wysiwyg.css
EditorUI/wysiwyg.js
Samples/design/sample.css
Samples/design/sample.js
Tokens/breakpoints.css
Tokens/colors.css
Tokens/effects.css
Tokens/layer.css
Tokens/layout.css
Tokens/motion.css
Tokens/spacing.css
Tokens/status.css
Tokens/surface.css
Tokens/typography.css
UI/adlaire.css
UI/base.css
UI/compat-agws.css
UI/components.css
UI/components.js
UI/content.css
UI/content.js
UI/forms.css
UI/forms.js
UI/grid.css
UI/layout.css
UI/site.css
UI/utilities.css
LIST

(cd "$ROOT" && find . -type f \( -name '*.css' -o -name '*.js' \) ! -path './.git/*' | sed 's#^\./##' | sort) >"$TMP_DIR/current-css-js-files"
sort "$TMP_DIR/allowed-css-js-files" >"$TMP_DIR/allowed-css-js-files-sorted"
comm -23 "$TMP_DIR/current-css-js-files" "$TMP_DIR/allowed-css-js-files-sorted" >"$TMP_DIR/unexpected-css-js-files"

if [ -s "$TMP_DIR/unexpected-css-js-files" ]; then
  echo "[Generated output placement contract] unexpected CSS or JavaScript files:" >&2
  cat "$TMP_DIR/unexpected-css-js-files" >&2
  exit 1
fi

for forbidden in '@import' '@charset'; do
  if grep -R -n "$forbidden" "$ROOT/Tokens" "$ROOT/UI" "$ROOT/EditorUI" --include='*.css' >/dev/null 2>&1; then
    fail "Generated CSS policy" "CSS must not contain $forbidden."
  fi
done

if grep -R -n '!important' "$ROOT/UI" "$ROOT/EditorUI" --include='*.css' >/dev/null 2>&1; then
  fail "Generated CSS policy" "UI and EditorUI CSS must not use !important."
fi

if grep -R -n -E '#[0-9a-fA-F]{3,8}|rgba?\(' "$ROOT/UI" "$ROOT/EditorUI" --include='*.css' >/dev/null 2>&1; then
  fail "Token usage contract" "UI and EditorUI CSS must not contain direct color literals."
fi

for first_line in \
  'Tokens/colors.css|/* Adlaire-Design color tokens */' \
  'Tokens/typography.css|/* Adlaire-Design typography tokens */' \
  'Tokens/spacing.css|/* Adlaire-Design spacing tokens */' \
  'Tokens/layout.css|/* Adlaire-Design layout tokens */' \
  'Tokens/motion.css|/* Adlaire-Design motion tokens */' \
  'Tokens/layer.css|/* Adlaire-Design layer tokens */' \
  'Tokens/breakpoints.css|/* Adlaire-Design breakpoint tokens */' \
  'Tokens/surface.css|/* Adlaire-Design surface tokens */' \
  'Tokens/status.css|/* Adlaire-Design status tokens */' \
  'Tokens/effects.css|/* Adlaire-Design effect tokens */' \
  'UI/adlaire.css|/* Adlaire-Design color utilities */' \
  'UI/base.css|/* Adlaire-Design base styles */' \
  'UI/grid.css|/* Adlaire-Design grid utilities */' \
  'UI/layout.css|/* Adlaire-Design public layout */' \
  'UI/components.css|/* Adlaire-Design public components */' \
  'UI/site.css|/* Adlaire-Design site chrome */' \
  'UI/forms.css|/* Adlaire-Design form components */' \
  'UI/content.css|/* Adlaire-Design content components */' \
  'UI/utilities.css|/* Adlaire-Design utility classes */' \
  'UI/compat-agws.css|/* Adlaire-Design specification layer */' \
  'EditorUI/wysiwyg.css|/* Adlaire-Design WYSIWYG editor */'; do
  file=${first_line%%|*}
  expected=${first_line#*|}
  if [ "$(sed -n '1p' "$ROOT/$file")" != "$expected" ]; then
    fail "Generated output identity" "$file has unexpected first line."
  fi
done

for token_file in "$ROOT"/Tokens/*.css; do
  if [ "$(grep -c '^:root {' "$token_file")" -ne 1 ]; then
    fail "Token output contract" "$token_file must contain exactly one :root block."
  fi
done

for token in \
  '--adlaire-color-primary' \
  '--adlaire-font-size-md' \
  '--adlaire-space-4' \
  '--adlaire-layout-container' \
  '--adlaire-motion-duration-base' \
  '--adlaire-layer-modal' \
  '--adlaire-breakpoint-md' \
  '--adlaire-surface-card' \
  '--adlaire-semantic-selected-bg' \
  '--adlaire-shadow-focus-ring'; do
  if ! grep -R -F -- "$token" "$ROOT/Tokens" >/dev/null 2>&1; then
    fail "Token inventory" "missing required token: $token"
  fi
done

for catalog_class in \
  'Docs/Generic_Component_Catalog|.adlaire-card' \
  'Docs/Generic_Component_Catalog|.adlaire-panel' \
  'Docs/Generic_Component_Catalog|.adlaire-action-row' \
  'Docs/Generic_Component_Catalog|.adlaire-toolbar' \
  'Docs/Generic_Component_Catalog|.adlaire-empty-state' \
  'Docs/Generic_Component_Catalog|.adlaire-tabs' \
  'Docs/Generic_Component_Catalog|.adlaire-tab-button' \
  'Docs/Generic_Component_Catalog|.adlaire-tab-panel' \
  'Docs/Generic_Component_Catalog|.adlaire-badge' \
  'Docs/Generic_Component_Catalog|.adlaire-note' \
  'Docs/Generic_Component_Catalog|.adlaire-alert' \
  'Docs/Generic_Component_Catalog|.adlaire-content-card' \
  'Docs/Generic_Component_Catalog|.adlaire-code-block' \
  'Docs/Generic_Component_Catalog|.adlaire-code-copy' \
  'Docs/Generic_Component_Catalog|.adlaire-content-table' \
  'Docs/Generic_Component_Catalog|.adlaire-faq-list' \
  'Docs/Generic_Component_Catalog|.adlaire-timeline' \
  'Docs/Generic_Component_Catalog|.adlaire-markdown-body' \
  'Docs/Generic_Component_Catalog|.adlaire-chip' \
  'Docs/Generic_Component_Catalog|.adlaire-status-pill' \
  'Docs/Generic_Component_Catalog|.adlaire-container' \
  'Docs/Generic_Component_Catalog|.adlaire-grid' \
  'Docs/Generic_Component_Catalog|.adlaire-dashboard-grid' \
  'Docs/Generic_Component_Catalog|.adlaire-resource-grid' \
  'Docs/Generic_Component_Catalog|.adlaire-editor-grid' \
  'Docs/Generic_Component_Catalog|.adlaire-public-layout' \
  'Docs/Generic_Component_Catalog|.adlaire-layout-frame' \
  'Docs/Generic_Component_Catalog|.adlaire-master-detail-layout' \
  'Docs/Generic_Component_Catalog|.adlaire-workbench-layout' \
  'Docs/Generic_Component_Catalog|.adlaire-app-shell' \
  'Docs/Generic_Component_Catalog|.adlaire-split-pane' \
  'Docs/Generic_Component_Catalog|.adlaire-split-pane-collapsed' \
  'Docs/Generic_Component_Catalog|.adlaire-resizable-panel' \
  'Docs/Generic_Component_Catalog|.adlaire-resize-handle' \
  'Docs/Generic_Component_Catalog|.adlaire-mobile-stack' \
  'Docs/Generic_Component_Catalog|.adlaire-mobile-action-bar' \
  'Docs/Generic_Component_Catalog|.adlaire-filter' \
  'Docs/Generic_Component_Catalog|.adlaire-form-grid' \
  'Docs/Generic_Component_Catalog|.adlaire-input-group' \
  'Docs/Generic_Component_Catalog|.adlaire-input-addon' \
  'Docs/Generic_Component_Catalog|.adlaire-field-hint' \
  'Docs/Generic_Component_Catalog|.adlaire-required-marker' \
  'Docs/Generic_Component_Catalog|.adlaire-date-range' \
  'Docs/Generic_Component_Catalog|.adlaire-combobox' \
  'Docs/Generic_Component_Catalog|.adlaire-multi-select' \
  'Docs/Generic_Component_Catalog|.adlaire-segmented-control' \
  'Docs/Generic_Component_Catalog|.adlaire-segmented-option' \
  'Docs/Generic_Component_Catalog|.adlaire-radio-card-group' \
  'Docs/Generic_Component_Catalog|.adlaire-radio-card' \
  'Docs/Generic_Component_Catalog|.adlaire-switch-group' \
  'Docs/Generic_Component_Catalog|.adlaire-switch-item' \
  'Docs/Generic_Component_Catalog|.adlaire-token-input' \
  'Docs/Generic_Component_Catalog|.adlaire-token-list' \
  'Docs/Generic_Component_Catalog|.adlaire-token-count' \
  'Docs/Generic_Component_Catalog|.adlaire-character-count' \
  'Docs/Generic_Component_Catalog|.adlaire-range-field' \
  'Docs/Generic_Component_Catalog|.adlaire-range-meter' \
  'Docs/Generic_Component_Catalog|.adlaire-date-picker' \
  'Docs/Generic_Component_Catalog|.adlaire-calendar' \
  'Docs/Generic_Component_Catalog|.adlaire-file-picker' \
  'Docs/Generic_Component_Catalog|.adlaire-dropzone' \
  'Docs/Generic_Component_Catalog|.adlaire-toggle' \
  'Docs/Generic_Component_Catalog|.adlaire-error-summary' \
  'Docs/Generic_Component_Catalog|.adlaire-validation-message' \
  'Docs/Generic_Component_Catalog|.adlaire-validation-list' \
  'Docs/Generic_Component_Catalog|.adlaire-stepper-control' \
  'Docs/Generic_Component_Catalog|.adlaire-stepper-action' \
  'Docs/Generic_Component_Catalog|.adlaire-pagination' \
  'Docs/Generic_Component_Catalog|.adlaire-command-palette' \
  'Docs/Generic_Component_Catalog|.adlaire-tree-view' \
  'Docs/Generic_Component_Catalog|.adlaire-data-grid' \
  'Docs/Generic_Component_Catalog|.adlaire-data-density-toolbar' \
  'Docs/Generic_Component_Catalog|.adlaire-row-selection-cell' \
  'Docs/Generic_Component_Catalog|.adlaire-data-grid-detail-row' \
  'Docs/Generic_Component_Catalog|.adlaire-data-grid-summary-row' \
  'Docs/Generic_Component_Catalog|.adlaire-column-resize-handle' \
  'Docs/Generic_Component_Catalog|.adlaire-cell-status' \
  'Docs/Generic_Component_Catalog|.adlaire-import-preview-table' \
  'Docs/Generic_Component_Catalog|.adlaire-column-manager' \
  'Docs/Generic_Component_Catalog|.adlaire-saved-view-bar' \
  'Docs/Generic_Component_Catalog|.adlaire-property-inspector' \
  'Docs/Generic_Component_Catalog|.adlaire-status-inspector' \
  'Docs/Generic_Component_Catalog|.adlaire-empty-recovery-panel' \
  'Docs/Generic_Component_Catalog|.adlaire-token-swatch' \
  'Docs/Generic_Component_Catalog|.adlaire-component-preview' \
  'Docs/Generic_Component_Catalog|.adlaire-component-state-matrix' \
  'Docs/Generic_Component_Catalog|.adlaire-anatomy-panel' \
  'Docs/Generic_Component_Catalog|.adlaire-a11y-checklist' \
  'Docs/Generic_Component_Catalog|.adlaire-keyboard-map' \
  'Docs/Generic_Component_Catalog|.adlaire-icon-button' \
  'Docs/Generic_Component_Catalog|.adlaire-icon-button-group' \
  'Docs/Generic_Component_Catalog|.adlaire-icon-tile' \
  'Docs/Generic_Component_Catalog|.adlaire-icon-list' \
  'Docs/Generic_Component_Catalog|.adlaire-icon-picker' \
  'Docs/Generic_Component_Catalog|.adlaire-feature-list' \
  'Docs/Generic_Component_Catalog|.adlaire-action-menu' \
  'Docs/Generic_Component_Catalog|.adlaire-stat-strip' \
  'Docs/Generic_Component_Catalog|.adlaire-avatar' \
  'Docs/Generic_Component_Catalog|.adlaire-avatar-group' \
  'Docs/Generic_Component_Catalog|.adlaire-notification-list' \
  'Docs/Generic_Component_Catalog|.adlaire-activity-feed' \
  'Docs/Generic_Component_Catalog|.adlaire-empty-action' \
  'Docs/Generic_Component_Catalog|.adlaire-shortcut-key' \
  'Docs/Generic_Component_Catalog|.adlaire-key-value-list' \
  'Docs/Generic_Component_Catalog|.adlaire-resource-card' \
  'Docs/Generic_Component_Catalog|.adlaire-pricing-card' \
  'Docs/Generic_Component_Catalog|.adlaire-permission-matrix' \
  'Docs/Generic_Component_Catalog|.adlaire-status-timeline' \
  'Docs/Generic_Component_Catalog|.adlaire-monitoring-card' \
  'Docs/Generic_Component_Catalog|.adlaire-deployment-card' \
  'Docs/Generic_Component_Catalog|.adlaire-release-notes' \
  'Docs/Generic_Component_Catalog|.adlaire-query-result' \
  'Docs/Generic_Component_Catalog|.adlaire-team-card' \
  'Docs/Generic_Component_Catalog|.adlaire-organization-switcher' \
  'Docs/Generic_Component_Catalog|.adlaire-approval-flow' \
  'Docs/Generic_Component_Catalog|.adlaire-review-checklist' \
  'Docs/Generic_Component_Catalog|.adlaire-responsive-preview' \
  'Docs/Generic_Component_Catalog|.adlaire-app-nav' \
  'Docs/Generic_Component_Catalog|.adlaire-sidebar-section' \
  'Docs/Generic_Component_Catalog|.adlaire-command-launcher' \
  'Docs/Generic_Component_Catalog|.adlaire-inbox-list' \
  'Docs/Generic_Component_Catalog|.adlaire-message-thread' \
  'Docs/Generic_Component_Catalog|.adlaire-file-card' \
  'Docs/Generic_Component_Catalog|.adlaire-upload-queue' \
  'Docs/Generic_Component_Catalog|.adlaire-agent-card' \
  'Docs/Generic_Component_Catalog|.adlaire-workspace-switcher' \
  'Docs/Generic_Component_Catalog|.adlaire-audit-log' \
  'Docs/Generic_Component_Catalog|.adlaire-tab-workspace' \
  'Docs/Generic_Component_Catalog|.adlaire-dock-panel' \
  'Docs/Generic_Component_Catalog|.adlaire-status-bar' \
  'Docs/Generic_Component_Catalog|.adlaire-workspace-breadcrumb' \
  'Docs/Generic_Component_Catalog|.adlaire-command-bar' \
  'Docs/Generic_Component_Catalog|.adlaire-command-bar-item' \
  'Docs/Generic_Component_Catalog|.adlaire-panel-stack' \
  'Docs/Generic_Component_Catalog|.adlaire-panel-stack-item' \
  'Docs/Generic_Component_Catalog|.adlaire-panel-rail' \
  'Docs/Generic_Component_Catalog|.adlaire-quick-switcher' \
  'Docs/Generic_Component_Catalog|.adlaire-shortcut-recorder' \
  'Docs/Generic_Component_Catalog|.adlaire-context-menu' \
  'Docs/Generic_Component_Catalog|.adlaire-split-button' \
  'Docs/Generic_Component_Catalog|.adlaire-overflow-toolbar' \
  'Docs/Generic_Component_Catalog|.adlaire-quick-action-list' \
  'Docs/Generic_Component_Catalog|.adlaire-kanban-board' \
  'Docs/Generic_Component_Catalog|.adlaire-swimlane' \
  'Docs/Generic_Component_Catalog|.adlaire-board-card' \
  'Docs/Generic_Component_Catalog|.adlaire-lane-summary' \
  'Docs/Generic_Component_Catalog|.adlaire-sparkline' \
  'Docs/Generic_Component_Catalog|.adlaire-gauge' \
  'Docs/Generic_Component_Catalog|.adlaire-heatmap' \
  'Docs/Generic_Component_Catalog|.adlaire-distribution-bar' \
  'Docs/Generic_Component_Catalog|.adlaire-status-meter' \
  'Docs/Generic_Component_Catalog|.adlaire-asset-browser' \
  'Docs/Generic_Component_Catalog|.adlaire-thumbnail-grid' \
  'Docs/Generic_Component_Catalog|.adlaire-media-metadata-panel' \
  'Docs/Generic_Component_Catalog|.adlaire-preview-compare' \
  'Docs/Generic_Component_Catalog|.adlaire-document-outline' \
  'Docs/Generic_Component_Catalog|.adlaire-mini-map' \
  'Docs/Generic_Component_Catalog|.adlaire-comment-resolver' \
  'Docs/Generic_Component_Catalog|.adlaire-publication-checklist' \
  'Docs/Generic_Component_Catalog|.adlaire-agenda-view' \
  'Docs/Generic_Component_Catalog|.adlaire-time-slot-grid' \
  'Docs/Generic_Component_Catalog|.adlaire-resource-calendar' \
  'Docs/Generic_Component_Catalog|.adlaire-availability-matrix' \
  'Docs/Generic_Component_Catalog|.adlaire-booking-card' \
  'Docs/Generic_Component_Catalog|.adlaire-calendar-event' \
  'Docs/Generic_Component_Catalog|.adlaire-location-card' \
  'Docs/Generic_Component_Catalog|.adlaire-facility-map-panel' \
  'Docs/Generic_Component_Catalog|.adlaire-floor-selector' \
  'Docs/Generic_Component_Catalog|.adlaire-area-status-grid' \
  'Docs/Generic_Component_Catalog|.adlaire-route-summary' \
  'Docs/Generic_Component_Catalog|.adlaire-site-operating-hours' \
  'Docs/Generic_Component_Catalog|.adlaire-comparison-matrix' \
  'Docs/Generic_Component_Catalog|.adlaire-option-card' \
  'Docs/Generic_Component_Catalog|.adlaire-decision-scorecard' \
  'Docs/Generic_Component_Catalog|.adlaire-tradeoff-list' \
  'Docs/Generic_Component_Catalog|.adlaire-recommendation-banner' \
  'Docs/Generic_Component_Catalog|.adlaire-selection-summary' \
  'Docs/Generic_Component_Catalog|.adlaire-document-library' \
  'Docs/Generic_Component_Catalog|.adlaire-folder-tree' \
  'Docs/Generic_Component_Catalog|.adlaire-file-version-card' \
  'Docs/Generic_Component_Catalog|.adlaire-document-approval-state' \
  'Docs/Generic_Component_Catalog|.adlaire-retention-badge' \
  'Docs/Generic_Component_Catalog|.adlaire-download-queue' \
  'Docs/Generic_Component_Catalog|.adlaire-access-request-card' \
  'Docs/Generic_Component_Catalog|.adlaire-permission-grant-row' \
  'Docs/Generic_Component_Catalog|.adlaire-session-list' \
  'Docs/Generic_Component_Catalog|.adlaire-device-trust-card' \
  'Docs/Generic_Component_Catalog|.adlaire-security-event-row' \
  'Docs/Generic_Component_Catalog|.adlaire-policy-exception-panel' \
  'Docs/Generic_Component_Catalog|.adlaire-budget-panel' \
  'Docs/Generic_Component_Catalog|.adlaire-expense-card' \
  'Docs/Generic_Component_Catalog|.adlaire-purchase-request' \
  'Docs/Generic_Component_Catalog|.adlaire-invoice-approval-row' \
  'Docs/Generic_Component_Catalog|.adlaire-payment-schedule' \
  'Docs/Generic_Component_Catalog|.adlaire-ledger-entry-row' \
  'Docs/Generic_Component_Catalog|.adlaire-employee-profile-card' \
  'Docs/Generic_Component_Catalog|.adlaire-shift-roster' \
  'Docs/Generic_Component_Catalog|.adlaire-attendance-summary' \
  'Docs/Generic_Component_Catalog|.adlaire-leave-request-card' \
  'Docs/Generic_Component_Catalog|.adlaire-skill-matrix' \
  'Docs/Generic_Component_Catalog|.adlaire-training-progress' \
  'Docs/Generic_Component_Catalog|.adlaire-customer-profile-panel' \
  'Docs/Generic_Component_Catalog|.adlaire-account-health-card' \
  'Docs/Generic_Component_Catalog|.adlaire-opportunity-card' \
  'Docs/Generic_Component_Catalog|.adlaire-pipeline-stage-rail' \
  'Docs/Generic_Component_Catalog|.adlaire-contact-timeline' \
  'Docs/Generic_Component_Catalog|.adlaire-next-action-panel' \
  'Docs/Generic_Component_Catalog|.adlaire-work-order-card' \
  'Docs/Generic_Component_Catalog|.adlaire-dispatch-board' \
  'Docs/Generic_Component_Catalog|.adlaire-technician-route-card' \
  'Docs/Generic_Component_Catalog|.adlaire-parts-list' \
  'Docs/Generic_Component_Catalog|.adlaire-service-checklist' \
  'Docs/Generic_Component_Catalog|.adlaire-completion-report' \
  'Docs/Generic_Component_Catalog|.adlaire-knowledge-article-card' \
  'Docs/Generic_Component_Catalog|.adlaire-collection-index' \
  'Docs/Generic_Component_Catalog|.adlaire-announcement-banner' \
  'Docs/Generic_Component_Catalog|.adlaire-policy-acknowledgement' \
  'Docs/Generic_Component_Catalog|.adlaire-quick-link-grid' \
  'Docs/Generic_Component_Catalog|.adlaire-internal-app-launcher' \
  'Docs/Generic_Component_Catalog|.adlaire-objective-card' \
  'Docs/Generic_Component_Catalog|.adlaire-key-result-tracker' \
  'Docs/Generic_Component_Catalog|.adlaire-initiative-map' \
  'Docs/Generic_Component_Catalog|.adlaire-confidence-indicator' \
  'Docs/Generic_Component_Catalog|.adlaire-review-cadence' \
  'Docs/Generic_Component_Catalog|.adlaire-alignment-summary' \
  'Docs/Generic_Component_Catalog|.adlaire-portfolio-overview' \
  'Docs/Generic_Component_Catalog|.adlaire-program-card' \
  'Docs/Generic_Component_Catalog|.adlaire-project-health-panel' \
  'Docs/Generic_Component_Catalog|.adlaire-milestone-tracker' \
  'Docs/Generic_Component_Catalog|.adlaire-dependency-register' \
  'Docs/Generic_Component_Catalog|.adlaire-risk-issue-log' \
  'Docs/Generic_Component_Catalog|.adlaire-capacity-planner' \
  'Docs/Generic_Component_Catalog|.adlaire-allocation-row' \
  'Docs/Generic_Component_Catalog|.adlaire-utilization-summary' \
  'Docs/Generic_Component_Catalog|.adlaire-staffing-request-card' \
  'Docs/Generic_Component_Catalog|.adlaire-allocation-conflict' \
  'Docs/Generic_Component_Catalog|.adlaire-availability-forecast' \
  'Docs/Generic_Component_Catalog|.adlaire-supplier-profile' \
  'Docs/Generic_Component_Catalog|.adlaire-vendor-scorecard' \
  'Docs/Generic_Component_Catalog|.adlaire-contract-renewal-card' \
  'Docs/Generic_Component_Catalog|.adlaire-sla-tracker' \
  'Docs/Generic_Component_Catalog|.adlaire-procurement-pipeline' \
  'Docs/Generic_Component_Catalog|.adlaire-compliance-attestation-row' \
  'Docs/Generic_Component_Catalog|.adlaire-service-request-card' \
  'Docs/Generic_Component_Catalog|.adlaire-change-calendar-panel' \
  'Docs/Generic_Component_Catalog|.adlaire-asset-inventory-row' \
  'Docs/Generic_Component_Catalog|.adlaire-license-assignment-card' \
  'Docs/Generic_Component_Catalog|.adlaire-maintenance-window-card' \
  'Docs/Generic_Component_Catalog|.adlaire-postmortem-summary' \
  'Docs/Generic_Component_Catalog|.adlaire-shipment-tracker' \
  'Docs/Generic_Component_Catalog|.adlaire-warehouse-bin-card' \
  'Docs/Generic_Component_Catalog|.adlaire-inventory-movement-row' \
  'Docs/Generic_Component_Catalog|.adlaire-carrier-handoff-card' \
  'Docs/Generic_Component_Catalog|.adlaire-delivery-route-board' \
  'Docs/Generic_Component_Catalog|.adlaire-exception-queue' \
  'Docs/Generic_Component_Catalog|.adlaire-production-order-card' \
  'Docs/Generic_Component_Catalog|.adlaire-work-cell-status' \
  'Docs/Generic_Component_Catalog|.adlaire-quality-inspection-panel' \
  'Docs/Generic_Component_Catalog|.adlaire-defect-report-row' \
  'Docs/Generic_Component_Catalog|.adlaire-batch-trace-card' \
  'Docs/Generic_Component_Catalog|.adlaire-downtime-reason-list' \
  'Docs/Generic_Component_Catalog|.adlaire-patient-summary-card' \
  'Docs/Generic_Component_Catalog|.adlaire-appointment-queue' \
  'Docs/Generic_Component_Catalog|.adlaire-care-plan-checklist' \
  'Docs/Generic_Component_Catalog|.adlaire-medication-schedule' \
  'Docs/Generic_Component_Catalog|.adlaire-triage-status-panel' \
  'Docs/Generic_Component_Catalog|.adlaire-consent-record-row' \
  'Docs/Generic_Component_Catalog|.adlaire-course-card' \
  'Docs/Generic_Component_Catalog|.adlaire-lesson-progress' \
  'Docs/Generic_Component_Catalog|.adlaire-assignment-queue' \
  'Docs/Generic_Component_Catalog|.adlaire-grading-rubric' \
  'Docs/Generic_Component_Catalog|.adlaire-learner-profile' \
  'Docs/Generic_Component_Catalog|.adlaire-certification-tracker' \
  'Docs/Generic_Component_Catalog|.adlaire-case-file-card' \
  'Docs/Generic_Component_Catalog|.adlaire-matter-timeline' \
  'Docs/Generic_Component_Catalog|.adlaire-evidence-list' \
  'Docs/Generic_Component_Catalog|.adlaire-filing-deadline-tracker' \
  'Docs/Generic_Component_Catalog|.adlaire-review-privilege-badge' \
  'Docs/Generic_Component_Catalog|.adlaire-counsel-task-list' \
  'Docs/Generic_Component_Catalog|.adlaire-support-inbox' \
  'Docs/Generic_Component_Catalog|.adlaire-ticket-priority-board' \
  'Docs/Generic_Component_Catalog|.adlaire-sla-breach-card' \
  'Docs/Generic_Component_Catalog|.adlaire-agent-status-panel' \
  'Docs/Generic_Component_Catalog|.adlaire-customer-sentiment-card' \
  'Docs/Generic_Component_Catalog|.adlaire-escalation-path' \
  'Docs/Generic_Component_Catalog|.adlaire-campaign-card' \
  'Docs/Generic_Component_Catalog|.adlaire-audience-segment-panel' \
  'Docs/Generic_Component_Catalog|.adlaire-content-calendar' \
  'Docs/Generic_Component_Catalog|.adlaire-experiment-card' \
  'Docs/Generic_Component_Catalog|.adlaire-funnel-stage-board' \
  'Docs/Generic_Component_Catalog|.adlaire-attribution-summary' \
  'Docs/Generic_Component_Catalog|.adlaire-health-score-panel' \
  'Docs/Generic_Component_Catalog|.adlaire-renewal-risk-card' \
  'Docs/Generic_Component_Catalog|.adlaire-onboarding-plan' \
  'Docs/Generic_Component_Catalog|.adlaire-success-playbook' \
  'Docs/Generic_Component_Catalog|.adlaire-qbr-summary' \
  'Docs/Generic_Component_Catalog|.adlaire-adoption-metric-grid' \
  'Docs/Generic_Component_Catalog|.adlaire-survey-result-card' \
  'Docs/Generic_Component_Catalog|.adlaire-feedback-inbox' \
  'Docs/Generic_Component_Catalog|.adlaire-insight-cluster' \
  'Docs/Generic_Component_Catalog|.adlaire-user-interview-note' \
  'Docs/Generic_Component_Catalog|.adlaire-feature-request-board' \
  'Docs/Generic_Component_Catalog|.adlaire-nps-trend' \
  'Docs/Generic_Component_Catalog|.adlaire-report-builder' \
  'Docs/Generic_Component_Catalog|.adlaire-dashboard-tile' \
  'Docs/Generic_Component_Catalog|.adlaire-report-parameter-bar' \
  'Docs/Generic_Component_Catalog|.adlaire-pivot-table' \
  'Docs/Generic_Component_Catalog|.adlaire-export-job-card' \
  'Docs/Generic_Component_Catalog|.adlaire-scheduled-report-list' \
  'Docs/Generic_Component_Catalog|.adlaire-message-composer' \
  'Docs/Generic_Component_Catalog|.adlaire-channel-list' \
  'Docs/Generic_Component_Catalog|.adlaire-conversation-preview' \
  'Docs/Generic_Component_Catalog|.adlaire-message-delivery-state' \
  'Docs/Generic_Component_Catalog|.adlaire-mention-picker' \
  'Docs/Generic_Component_Catalog|.adlaire-unread-marker' \
  'Docs/Generic_Component_Catalog|.adlaire-notification-center' \
  'Docs/Generic_Component_Catalog|.adlaire-notification-rule-card' \
  'Docs/Generic_Component_Catalog|.adlaire-delivery-channel-row' \
  'Docs/Generic_Component_Catalog|.adlaire-notification-template-card' \
  'Docs/Generic_Component_Catalog|.adlaire-quiet-hours-panel' \
  'Docs/Generic_Component_Catalog|.adlaire-digest-schedule' \
  'Docs/Generic_Component_Catalog|.adlaire-broadcast-banner' \
  'Docs/Generic_Component_Catalog|.adlaire-announcement-composer' \
  'Docs/Generic_Component_Catalog|.adlaire-audience-targeting-panel' \
  'Docs/Generic_Component_Catalog|.adlaire-publish-queue' \
  'Docs/Generic_Component_Catalog|.adlaire-delivery-report-card' \
  'Docs/Generic_Component_Catalog|.adlaire-acknowledgement-tracker' \
  'Docs/Generic_Component_Catalog|.adlaire-inbox-triage-board' \
  'Docs/Generic_Component_Catalog|.adlaire-inbox-assignment-row' \
  'Docs/Generic_Component_Catalog|.adlaire-response-timer-card' \
  'Docs/Generic_Component_Catalog|.adlaire-canned-reply-panel' \
  'Docs/Generic_Component_Catalog|.adlaire-follow-up-reminder' \
  'Docs/Generic_Component_Catalog|.adlaire-resolution-summary' \
  'Docs/Generic_Component_Catalog|.adlaire-subscription-plan-row' \
  'Docs/Generic_Component_Catalog|.adlaire-topic-preference-list' \
  'Docs/Generic_Component_Catalog|.adlaire-opt-in-card' \
  'Docs/Generic_Component_Catalog|.adlaire-consent-channel-matrix' \
  'Docs/Generic_Component_Catalog|.adlaire-unsubscribe-reason-panel' \
  'Docs/Generic_Component_Catalog|.adlaire-preference-audit-row' \
  'Docs/Generic_Component_Catalog|.adlaire-editorial-calendar' \
  'Docs/Generic_Component_Catalog|.adlaire-content-brief-card' \
  'Docs/Generic_Component_Catalog|.adlaire-draft-status-board' \
  'Docs/Generic_Component_Catalog|.adlaire-editor-assignment-row' \
  'Docs/Generic_Component_Catalog|.adlaire-review-gate-panel' \
  'Docs/Generic_Component_Catalog|.adlaire-publish-readiness-card' \
  'Docs/Generic_Component_Catalog|.adlaire-media-library-panel' \
  'Docs/Generic_Component_Catalog|.adlaire-asset-rights-card' \
  'Docs/Generic_Component_Catalog|.adlaire-usage-license-badge' \
  'Docs/Generic_Component_Catalog|.adlaire-rendition-list' \
  'Docs/Generic_Component_Catalog|.adlaire-asset-approval-queue' \
  'Docs/Generic_Component_Catalog|.adlaire-metadata-completeness-meter' \
  'Docs/Generic_Component_Catalog|.adlaire-locale-switcher-panel' \
  'Docs/Generic_Component_Catalog|.adlaire-translation-queue' \
  'Docs/Generic_Component_Catalog|.adlaire-translation-memory-card' \
  'Docs/Generic_Component_Catalog|.adlaire-locale-coverage-matrix' \
  'Docs/Generic_Component_Catalog|.adlaire-missing-string-list' \
  'Docs/Generic_Component_Catalog|.adlaire-glossary-term-card' \
  'Docs/Generic_Component_Catalog|.adlaire-seo-checklist' \
  'Docs/Generic_Component_Catalog|.adlaire-search-preview-card' \
  'Docs/Generic_Component_Catalog|.adlaire-metadata-editor-panel' \
  'Docs/Generic_Component_Catalog|.adlaire-keyword-cluster' \
  'Docs/Generic_Component_Catalog|.adlaire-canonical-url-card' \
  'Docs/Generic_Component_Catalog|.adlaire-crawl-status-row' \
  'Docs/Generic_Component_Catalog|.adlaire-moderation-queue' \
  'Docs/Generic_Component_Catalog|.adlaire-flagged-content-card' \
  'Docs/Generic_Component_Catalog|.adlaire-moderation-decision-row' \
  'Docs/Generic_Component_Catalog|.adlaire-report-reason-panel' \
  'Docs/Generic_Component_Catalog|.adlaire-user-trust-score' \
  'Docs/Generic_Component_Catalog|.adlaire-appeal-status-tracker' \
  'Docs/Generic_Component_Catalog|.adlaire-device-card' \
  'Docs/Generic_Component_Catalog|.adlaire-device-registry-table' \
  'Docs/Generic_Component_Catalog|.adlaire-enrollment-panel' \
  'Docs/Generic_Component_Catalog|.adlaire-device-health-tile' \
  'Docs/Generic_Component_Catalog|.adlaire-firmware-version-badge' \
  'Docs/Generic_Component_Catalog|.adlaire-remote-command-queue' \
  'Docs/Generic_Component_Catalog|.adlaire-edge-node-card' \
  'Docs/Generic_Component_Catalog|.adlaire-sync-status-panel' \
  'Docs/Generic_Component_Catalog|.adlaire-offline-queue' \
  'Docs/Generic_Component_Catalog|.adlaire-bandwidth-usage-meter' \
  'Docs/Generic_Component_Catalog|.adlaire-deployment-ring-selector' \
  'Docs/Generic_Component_Catalog|.adlaire-rollback-checkpoint-card' \
  'Docs/Generic_Component_Catalog|.adlaire-telemetry-stream' \
  'Docs/Generic_Component_Catalog|.adlaire-sensor-reading-card' \
  'Docs/Generic_Component_Catalog|.adlaire-threshold-rule-panel' \
  'Docs/Generic_Component_Catalog|.adlaire-alert-event-list' \
  'Docs/Generic_Component_Catalog|.adlaire-calibration-record-row' \
  'Docs/Generic_Component_Catalog|.adlaire-signal-quality-indicator' \
  'Docs/Generic_Component_Catalog|.adlaire-kiosk-status-board' \
  'Docs/Generic_Component_Catalog|.adlaire-terminal-session-card' \
  'Docs/Generic_Component_Catalog|.adlaire-cash-drawer-status' \
  'Docs/Generic_Component_Catalog|.adlaire-receipt-printer-panel' \
  'Docs/Generic_Component_Catalog|.adlaire-checkout-lane-row' \
  'Docs/Generic_Component_Catalog|.adlaire-store-device-map' \
  'Docs/Generic_Component_Catalog|.adlaire-mobile-device-assignment' \
  'Docs/Generic_Component_Catalog|.adlaire-app-version-compliance' \
  'Docs/Generic_Component_Catalog|.adlaire-battery-status-row' \
  'Docs/Generic_Component_Catalog|.adlaire-location-ping-timeline' \
  'Docs/Generic_Component_Catalog|.adlaire-lost-mode-banner' \
  'Docs/Generic_Component_Catalog|.adlaire-device-handoff-checklist' \
  'Docs/Generic_Component_Catalog|.adlaire-itinerary-card' \
  'Docs/Generic_Component_Catalog|.adlaire-traveler-profile-row' \
  'Docs/Generic_Component_Catalog|.adlaire-fare-option-card' \
  'Docs/Generic_Component_Catalog|.adlaire-booking-summary-panel' \
  'Docs/Generic_Component_Catalog|.adlaire-trip-status-timeline' \
  'Docs/Generic_Component_Catalog|.adlaire-disruption-alert-card' \
  'Docs/Generic_Component_Catalog|.adlaire-room-inventory-board' \
  'Docs/Generic_Component_Catalog|.adlaire-reservation-card' \
  'Docs/Generic_Component_Catalog|.adlaire-guest-folio-panel' \
  'Docs/Generic_Component_Catalog|.adlaire-housekeeping-task-row' \
  'Docs/Generic_Component_Catalog|.adlaire-amenity-request-queue' \
  'Docs/Generic_Component_Catalog|.adlaire-check-in-readiness-card' \
  'Docs/Generic_Component_Catalog|.adlaire-event-schedule-board' \
  'Docs/Generic_Component_Catalog|.adlaire-session-card' \
  'Docs/Generic_Component_Catalog|.adlaire-speaker-profile-card' \
  'Docs/Generic_Component_Catalog|.adlaire-attendee-check-in-row' \
  'Docs/Generic_Component_Catalog|.adlaire-badge-print-queue' \
  'Docs/Generic_Component_Catalog|.adlaire-capacity-warning-panel' \
  'Docs/Generic_Component_Catalog|.adlaire-venue-map-panel' \
  'Docs/Generic_Component_Catalog|.adlaire-seating-section-card' \
  'Docs/Generic_Component_Catalog|.adlaire-seat-hold-row' \
  'Docs/Generic_Component_Catalog|.adlaire-access-pass-card' \
  'Docs/Generic_Component_Catalog|.adlaire-gate-status-board' \
  'Docs/Generic_Component_Catalog|.adlaire-crowd-flow-meter' \
  'Docs/Generic_Component_Catalog|.adlaire-incident-guest-card' \
  'Docs/Generic_Component_Catalog|.adlaire-compensation-option-list' \
  'Docs/Generic_Component_Catalog|.adlaire-recovery-task-board' \
  'Docs/Generic_Component_Catalog|.adlaire-refund-status-row' \
  'Docs/Generic_Component_Catalog|.adlaire-service-note-panel' \
  'Docs/Generic_Component_Catalog|.adlaire-satisfaction-follow-up-card' \
  'Docs/Generic_Component_Catalog|.adlaire-service-application-card' \
  'Docs/Generic_Component_Catalog|.adlaire-eligibility-checklist' \
  'Docs/Generic_Component_Catalog|.adlaire-appointment-slot-row' \
  'Docs/Generic_Component_Catalog|.adlaire-case-status-timeline' \
  'Docs/Generic_Component_Catalog|.adlaire-public-notice-banner' \
  'Docs/Generic_Component_Catalog|.adlaire-service-counter-queue' \
  'Docs/Generic_Component_Catalog|.adlaire-permit-application-panel' \
  'Docs/Generic_Component_Catalog|.adlaire-license-status-card' \
  'Docs/Generic_Component_Catalog|.adlaire-document-requirement-list' \
  'Docs/Generic_Component_Catalog|.adlaire-inspection-schedule-row' \
  'Docs/Generic_Component_Catalog|.adlaire-compliance-finding-card' \
  'Docs/Generic_Component_Catalog|.adlaire-renewal-reminder-panel' \
  'Docs/Generic_Component_Catalog|.adlaire-grant-program-card' \
  'Docs/Generic_Component_Catalog|.adlaire-aid-eligibility-summary' \
  'Docs/Generic_Component_Catalog|.adlaire-application-review-board' \
  'Docs/Generic_Component_Catalog|.adlaire-funding-allocation-row' \
  'Docs/Generic_Component_Catalog|.adlaire-disbursement-status-card' \
  'Docs/Generic_Component_Catalog|.adlaire-beneficiary-profile-panel' \
  'Docs/Generic_Component_Catalog|.adlaire-donation-campaign-card' \
  'Docs/Generic_Component_Catalog|.adlaire-volunteer-shift-board' \
  'Docs/Generic_Component_Catalog|.adlaire-impact-metric-tile' \
  'Docs/Generic_Component_Catalog|.adlaire-pledge-tracker-row' \
  'Docs/Generic_Component_Catalog|.adlaire-outreach-list' \
  'Docs/Generic_Component_Catalog|.adlaire-donor-acknowledgement-card' \
  'Docs/Generic_Component_Catalog|.adlaire-incident-command-panel' \
  'Docs/Generic_Component_Catalog|.adlaire-resource-request-card' \
  'Docs/Generic_Component_Catalog|.adlaire-shelter-status-board' \
  'Docs/Generic_Component_Catalog|.adlaire-alert-broadcast-row' \
  'Docs/Generic_Component_Catalog|.adlaire-response-team-roster' \
  'Docs/Generic_Component_Catalog|.adlaire-recovery-milestone-card' \
  'Docs/Generic_Component_Catalog|.adlaire-energy-usage-card' \
  'Docs/Generic_Component_Catalog|.adlaire-demand-response-panel' \
  'Docs/Generic_Component_Catalog|.adlaire-load-forecast-card' \
  'Docs/Generic_Component_Catalog|.adlaire-grid-event-timeline' \
  'Docs/Generic_Component_Catalog|.adlaire-generation-mix-card' \
  'Docs/Generic_Component_Catalog|.adlaire-energy-contract-summary' \
  'Docs/Generic_Component_Catalog|.adlaire-utility-account-card' \
  'Docs/Generic_Component_Catalog|.adlaire-meter-reading-row' \
  'Docs/Generic_Component_Catalog|.adlaire-outage-report-card' \
  'Docs/Generic_Component_Catalog|.adlaire-service-appointment-board' \
  'Docs/Generic_Component_Catalog|.adlaire-consumption-alert-banner' \
  'Docs/Generic_Component_Catalog|.adlaire-payment-assistance-panel' \
  'Docs/Generic_Component_Catalog|.adlaire-water-quality-panel' \
  'Docs/Generic_Component_Catalog|.adlaire-leak-alert-card' \
  'Docs/Generic_Component_Catalog|.adlaire-maintenance-route-row' \
  'Docs/Generic_Component_Catalog|.adlaire-waste-pickup-schedule' \
  'Docs/Generic_Component_Catalog|.adlaire-treatment-plant-status' \
  'Docs/Generic_Component_Catalog|.adlaire-compliance-sample-log' \
  'Docs/Generic_Component_Catalog|.adlaire-carbon-footprint-tile' \
  'Docs/Generic_Component_Catalog|.adlaire-emissions-ledger-row' \
  'Docs/Generic_Component_Catalog|.adlaire-offset-portfolio-card' \
  'Docs/Generic_Component_Catalog|.adlaire-sustainability-target-tracker' \
  'Docs/Generic_Component_Catalog|.adlaire-disclosure-checklist' \
  'Docs/Generic_Component_Catalog|.adlaire-audit-evidence-panel' \
  'Docs/Generic_Component_Catalog|.adlaire-monitoring-station-card' \
  'Docs/Generic_Component_Catalog|.adlaire-sensor-threshold-board' \
  'Docs/Generic_Component_Catalog|.adlaire-field-inspection-checklist' \
  'Docs/Generic_Component_Catalog|.adlaire-sample-collection-row' \
  'Docs/Generic_Component_Catalog|.adlaire-incident-map-panel' \
  'Docs/Generic_Component_Catalog|.adlaire-remediation-task-list' \
  'Docs/Generic_Component_Catalog|.adlaire-section-header' \
  'Docs/Generic_Component_Catalog|.adlaire-section-action-bar' \
  'Docs/Generic_Component_Catalog|.adlaire-content-group' \
  'Docs/Generic_Component_Catalog|.adlaire-summary-rail' \
  'Docs/Generic_Component_Catalog|.adlaire-detail-header' \
  'Docs/Generic_Component_Catalog|.adlaire-inline-toolbar' \
  'Docs/Generic_Component_Catalog|.adlaire-status-badge-group' \
  'Docs/Generic_Component_Catalog|.adlaire-severity-marker' \
  'Docs/Generic_Component_Catalog|.adlaire-validation-summary-card' \
  'Docs/Generic_Component_Catalog|.adlaire-stale-data-banner' \
  'Docs/Generic_Component_Catalog|.adlaire-sync-indicator-row' \
  'Docs/Generic_Component_Catalog|.adlaire-retry-action-panel' \
  'Docs/Generic_Component_Catalog|.adlaire-selection-counter-bar' \
  'Docs/Generic_Component_Catalog|.adlaire-bulk-action-tray' \
  'Docs/Generic_Component_Catalog|.adlaire-selectable-list-row' \
  'Docs/Generic_Component_Catalog|.adlaire-compare-selection-card' \
  'Docs/Generic_Component_Catalog|.adlaire-range-selection-panel' \
  'Docs/Generic_Component_Catalog|.adlaire-batch-progress-list' \
  'Docs/Generic_Component_Catalog|.adlaire-source-citation-row' \
  'Docs/Generic_Component_Catalog|.adlaire-confidence-score-card' \
  'Docs/Generic_Component_Catalog|.adlaire-freshness-badge' \
  'Docs/Generic_Component_Catalog|.adlaire-audit-trail-card' \
  'Docs/Generic_Component_Catalog|.adlaire-provenance-panel' \
  'Docs/Generic_Component_Catalog|.adlaire-verification-checklist' \
  'Docs/Generic_Component_Catalog|.adlaire-density-switcher' \
  'Docs/Generic_Component_Catalog|.adlaire-responsive-stack-panel' \
  'Docs/Generic_Component_Catalog|.adlaire-mobile-overflow-bar' \
  'Docs/Generic_Component_Catalog|.adlaire-sticky-action-footer' \
  'Docs/Generic_Component_Catalog|.adlaire-viewport-notice' \
  'Docs/Generic_Component_Catalog|.adlaire-print-layout-panel' \
  'Docs/Generic_Component_Catalog|.adlaire-query-bar' \
  'Docs/Generic_Component_Catalog|.adlaire-saved-filter-bar' \
  'Docs/Generic_Component_Catalog|.adlaire-active-filter-chips' \
  'Docs/Generic_Component_Catalog|.adlaire-facet-panel' \
  'Docs/Generic_Component_Catalog|.adlaire-sort-control' \
  'Docs/Generic_Component_Catalog|.adlaire-column-visibility-panel' \
  'Docs/Generic_Component_Catalog|.adlaire-column-pin-rail' \
  'Docs/Generic_Component_Catalog|.adlaire-row-action-menu' \
  'Docs/Generic_Component_Catalog|.adlaire-record-list' \
  'Docs/Generic_Component_Catalog|.adlaire-record-row' \
  'Docs/Generic_Component_Catalog|.adlaire-record-detail-preview' \
  'Docs/Generic_Component_Catalog|.adlaire-record-expansion-panel' \
  'Docs/Generic_Component_Catalog|.adlaire-inline-edit-field' \
  'Docs/Generic_Component_Catalog|.adlaire-edit-conflict-banner' \
  'Docs/Generic_Component_Catalog|.adlaire-change-summary-card' \
  'Docs/Generic_Component_Catalog|.adlaire-undo-action-banner' \
  'Docs/Generic_Component_Catalog|.adlaire-import-job-card' \
  'Docs/Generic_Component_Catalog|.adlaire-export-job-card' \
  'Docs/Generic_Component_Catalog|.adlaire-sync-queue-panel' \
  'Docs/Generic_Component_Catalog|.adlaire-data-quality-score' \
  'Docs/Generic_Component_Catalog|.adlaire-duplicate-warning-card' \
  'Docs/Generic_Component_Catalog|.adlaire-merge-suggestion-panel' \
  'Docs/Generic_Component_Catalog|.adlaire-bulk-confirmation-panel' \
  'Docs/Generic_Component_Catalog|.adlaire-bulk-result-summary' \
  'Docs/Generic_Component_Catalog|.adlaire-selection-scope-notice' \
  'Docs/Generic_Component_Catalog|.adlaire-table-footer-summary' \
  'Docs/Generic_Component_Catalog|.adlaire-pagination-status' \
  'Docs/Generic_Component_Catalog|.adlaire-view-preset-switcher' \
  'Docs/Generic_Component_Catalog|.adlaire-saved-view-card' \
  'Docs/Generic_Component_Catalog|.adlaire-record-audit-summary' \
  'Docs/Generic_Component_Catalog|.adlaire-agent-run-card' \
  'Docs/Generic_Component_Catalog|.adlaire-agent-task-list' \
  'Docs/Generic_Component_Catalog|.adlaire-automation-trigger-card' \
  'Docs/Generic_Component_Catalog|.adlaire-run-status-rail' \
  'Docs/Generic_Component_Catalog|.adlaire-tool-call-row' \
  'Docs/Generic_Component_Catalog|.adlaire-tool-permission-card' \
  'Docs/Generic_Component_Catalog|.adlaire-approval-gate-panel' \
  'Docs/Generic_Component_Catalog|.adlaire-human-review-card' \
  'Docs/Generic_Component_Catalog|.adlaire-execution-timeline' \
  'Docs/Generic_Component_Catalog|.adlaire-checkpoint-card' \
  'Docs/Generic_Component_Catalog|.adlaire-retry-checkpoint-panel' \
  'Docs/Generic_Component_Catalog|.adlaire-handoff-card' \
  'Docs/Generic_Component_Catalog|.adlaire-context-attachment-tray' \
  'Docs/Generic_Component_Catalog|.adlaire-context-source-list' \
  'Docs/Generic_Component_Catalog|.adlaire-memory-note-card' \
  'Docs/Generic_Component_Catalog|.adlaire-instruction-stack' \
  'Docs/Generic_Component_Catalog|.adlaire-prompt-composer-panel' \
  'Docs/Generic_Component_Catalog|.adlaire-model-setting-row' \
  'Docs/Generic_Component_Catalog|.adlaire-reasoning-meter' \
  'Docs/Generic_Component_Catalog|.adlaire-token-budget-meter' \
  'Docs/Generic_Component_Catalog|.adlaire-artifact-preview-card' \
  'Docs/Generic_Component_Catalog|.adlaire-artifact-diff-panel' \
  'Docs/Generic_Component_Catalog|.adlaire-output-validation-card' \
  'Docs/Generic_Component_Catalog|.adlaire-guardrail-result-row' \
  'Docs/Generic_Component_Catalog|.adlaire-failure-diagnosis-panel' \
  'Docs/Generic_Component_Catalog|.adlaire-recovery-action-list' \
  'Docs/Generic_Component_Catalog|.adlaire-schedule-run-card' \
  'Docs/Generic_Component_Catalog|.adlaire-recurring-automation-row' \
  'Docs/Generic_Component_Catalog|.adlaire-notification-policy-card' \
  'Docs/Generic_Component_Catalog|.adlaire-run-summary-panel' \
  'Docs/Generic_Component_Catalog|.adlaire-api-explorer-panel' \
  'Docs/Generic_Component_Catalog|.adlaire-endpoint-card' \
  'Docs/Generic_Component_Catalog|.adlaire-request-builder' \
  'Docs/Generic_Component_Catalog|.adlaire-response-preview' \
  'Docs/Generic_Component_Catalog|.adlaire-schema-reference-panel' \
  'Docs/Generic_Component_Catalog|.adlaire-sdk-selector' \
  'Docs/Generic_Component_Catalog|.adlaire-code-sample-card' \
  'Docs/Generic_Component_Catalog|.adlaire-webhook-endpoint-card' \
  'Docs/Generic_Component_Catalog|.adlaire-webhook-event-row' \
  'Docs/Generic_Component_Catalog|.adlaire-webhook-delivery-log' \
  'Docs/Generic_Component_Catalog|.adlaire-integration-setup-checklist' \
  'Docs/Generic_Component_Catalog|.adlaire-oauth-consent-panel' \
  'Docs/Generic_Component_Catalog|.adlaire-api-key-rotation-card' \
  'Docs/Generic_Component_Catalog|.adlaire-secret-rotation-panel' \
  'Docs/Generic_Component_Catalog|.adlaire-rate-limit-meter' \
  'Docs/Generic_Component_Catalog|.adlaire-quota-usage-card' \
  'Docs/Generic_Component_Catalog|.adlaire-sandbox-environment-card' \
  'Docs/Generic_Component_Catalog|.adlaire-production-readiness-checklist' \
  'Docs/Generic_Component_Catalog|.adlaire-integration-health-panel' \
  'Docs/Generic_Component_Catalog|.adlaire-dependency-status-row' \
  'Docs/Generic_Component_Catalog|.adlaire-connection-test-card' \
  'Docs/Generic_Component_Catalog|.adlaire-payload-inspector' \
  'Docs/Generic_Component_Catalog|.adlaire-event-replay-panel' \
  'Docs/Generic_Component_Catalog|.adlaire-version-compatibility-badge' \
  'Docs/Generic_Component_Catalog|.adlaire-breaking-change-notice' \
  'Docs/Generic_Component_Catalog|.adlaire-deprecation-timeline' \
  'Docs/Generic_Component_Catalog|.adlaire-migration-step-list' \
  'Docs/Generic_Component_Catalog|.adlaire-developer-note-card' \
  'Docs/Generic_Component_Catalog|.adlaire-changelog-entry-card' \
  'Docs/Generic_Component_Catalog|.adlaire-support-escalation-card' \
  'Docs/Generic_Component_Catalog|.adlaire-theme-workspace-panel' \
  'Docs/Generic_Component_Catalog|.adlaire-brand-kit-card' \
  'Docs/Generic_Component_Catalog|.adlaire-palette-editor' \
  'Docs/Generic_Component_Catalog|.adlaire-color-ramp-row' \
  'Docs/Generic_Component_Catalog|.adlaire-semantic-color-mapping' \
  'Docs/Generic_Component_Catalog|.adlaire-contrast-check-card' \
  'Docs/Generic_Component_Catalog|.adlaire-typography-scale-panel' \
  'Docs/Generic_Component_Catalog|.adlaire-font-pairing-card' \
  'Docs/Generic_Component_Catalog|.adlaire-spacing-scale-preview' \
  'Docs/Generic_Component_Catalog|.adlaire-radius-scale-preview' \
  'Docs/Generic_Component_Catalog|.adlaire-shadow-elevation-panel' \
  'Docs/Generic_Component_Catalog|.adlaire-motion-preset-card' \
  'Docs/Generic_Component_Catalog|.adlaire-density-preset-card' \
  'Docs/Generic_Component_Catalog|.adlaire-theme-preview-frame' \
  'Docs/Generic_Component_Catalog|.adlaire-surface-preview-grid' \
  'Docs/Generic_Component_Catalog|.adlaire-dark-mode-switcher' \
  'Docs/Generic_Component_Catalog|.adlaire-high-contrast-preview' \
  'Docs/Generic_Component_Catalog|.adlaire-brand-asset-usage-card' \
  'Docs/Generic_Component_Catalog|.adlaire-logo-placement-guide' \
  'Docs/Generic_Component_Catalog|.adlaire-icon-style-selector' \
  'Docs/Generic_Component_Catalog|.adlaire-tone-of-voice-card' \
  'Docs/Generic_Component_Catalog|.adlaire-copy-pattern-panel' \
  'Docs/Generic_Component_Catalog|.adlaire-accessibility-score-card' \
  'Docs/Generic_Component_Catalog|.adlaire-contrast-issue-row' \
  'Docs/Generic_Component_Catalog|.adlaire-token-override-panel' \
  'Docs/Generic_Component_Catalog|.adlaire-token-diff-card' \
  'Docs/Generic_Component_Catalog|.adlaire-theme-export-panel' \
  'Docs/Generic_Component_Catalog|.adlaire-theme-import-card' \
  'Docs/Generic_Component_Catalog|.adlaire-brand-compliance-checklist' \
  'Docs/Generic_Component_Catalog|.adlaire-theme-publish-summary' \
  'Docs/Generic_Component_Catalog|.adlaire-product-card' \
  'Docs/Generic_Component_Catalog|.adlaire-plan-selector' \
  'Docs/Generic_Component_Catalog|.adlaire-billing-summary' \
  'Docs/Generic_Component_Catalog|.adlaire-invoice-list' \
  'Docs/Generic_Component_Catalog|.adlaire-account-profile' \
  'Docs/Generic_Component_Catalog|.adlaire-member-list' \
  'Docs/Generic_Component_Catalog|.adlaire-role-matrix' \
  'Docs/Generic_Component_Catalog|.adlaire-support-ticket' \
  'Docs/Generic_Component_Catalog|.adlaire-support-conversation' \
  'Docs/Generic_Component_Catalog|.adlaire-analytics-panel' \
  'Docs/Generic_Component_Catalog|.adlaire-report-card' \
  'Docs/Generic_Component_Catalog|.adlaire-workflow-builder' \
  'Docs/Generic_Component_Catalog|.adlaire-integration-card' \
  'Docs/Generic_Component_Catalog|.adlaire-api-key-list' \
  'Docs/Generic_Component_Catalog|.adlaire-trust-center' \
  'Docs/Generic_Component_Catalog|.adlaire-compliance-evidence' \
  'Docs/Generic_Component_Catalog|.adlaire-commerce-cart' \
  'Docs/Generic_Component_Catalog|.adlaire-checkout-summary' \
  'Docs/Generic_Component_Catalog|.adlaire-order-card' \
  'Docs/Generic_Component_Catalog|.adlaire-order-timeline' \
  'Docs/Generic_Component_Catalog|.adlaire-product-grid' \
  'Docs/Generic_Component_Catalog|.adlaire-product-tile' \
  'Docs/Generic_Component_Catalog|.adlaire-sku-list' \
  'Docs/Generic_Component_Catalog|.adlaire-inventory-panel' \
  'Docs/Generic_Component_Catalog|.adlaire-price-rule-card' \
  'Docs/Generic_Component_Catalog|.adlaire-coupon-list' \
  'Docs/Generic_Component_Catalog|.adlaire-marketplace-listing' \
  'Docs/Generic_Component_Catalog|.adlaire-seller-card' \
  'Docs/Generic_Component_Catalog|.adlaire-review-summary' \
  'Docs/Generic_Component_Catalog|.adlaire-shipping-tracker' \
  'Docs/Generic_Component_Catalog|.adlaire-return-request' \
  'Docs/Generic_Component_Catalog|.adlaire-dispute-panel' \
  'Docs/Generic_Component_Catalog|.adlaire-dataset-card' \
  'Docs/Generic_Component_Catalog|.adlaire-schema-table' \
  'Docs/Generic_Component_Catalog|.adlaire-query-console' \
  'Docs/Generic_Component_Catalog|.adlaire-pipeline-board' \
  'Docs/Generic_Component_Catalog|.adlaire-job-run-card' \
  'Docs/Generic_Component_Catalog|.adlaire-run-queue' \
  'Docs/Generic_Component_Catalog|.adlaire-worker-pool' \
  'Docs/Generic_Component_Catalog|.adlaire-model-card' \
  'Docs/Generic_Component_Catalog|.adlaire-prompt-panel' \
  'Docs/Generic_Component_Catalog|.adlaire-eval-summary' \
  'Docs/Generic_Component_Catalog|.adlaire-score-breakdown' \
  'Docs/Generic_Component_Catalog|.adlaire-vector-index' \
  'Docs/Generic_Component_Catalog|.adlaire-guardrail-panel' \
  'Docs/Generic_Component_Catalog|.adlaire-drift-monitor' \
  'Docs/Generic_Component_Catalog|.adlaire-anomaly-list' \
  'Docs/Generic_Component_Catalog|.adlaire-data-access-panel' \
  'Docs/Generic_Component_Catalog|.adlaire-collaborator-list' \
  'Docs/Generic_Component_Catalog|.adlaire-presence-stack' \
  'Docs/Generic_Component_Catalog|.adlaire-review-request-card' \
  'Docs/Generic_Component_Catalog|.adlaire-review-decision' \
  'Docs/Generic_Component_Catalog|.adlaire-change-request-list' \
  'Docs/Generic_Component_Catalog|.adlaire-comment-thread' \
  'Docs/Generic_Component_Catalog|.adlaire-annotation-card' \
  'Docs/Generic_Component_Catalog|.adlaire-suggestion-panel' \
  'Docs/Generic_Component_Catalog|.adlaire-version-history' \
  'Docs/Generic_Component_Catalog|.adlaire-diff-summary' \
  'Docs/Generic_Component_Catalog|.adlaire-task-board' \
  'Docs/Generic_Component_Catalog|.adlaire-checklist-panel' \
  'Docs/Generic_Component_Catalog|.adlaire-notification-digest' \
  'Docs/Generic_Component_Catalog|.adlaire-escalation-banner' \
  'Docs/Generic_Component_Catalog|.adlaire-meeting-notes' \
  'Docs/Generic_Component_Catalog|.adlaire-signoff-panel' \
  'Docs/Generic_Component_Catalog|.adlaire-workflow-runner' \
  'Docs/Generic_Component_Catalog|.adlaire-automation-rule-card' \
  'Docs/Generic_Component_Catalog|.adlaire-trigger-list' \
  'Docs/Generic_Component_Catalog|.adlaire-condition-builder' \
  'Docs/Generic_Component_Catalog|.adlaire-action-chain' \
  'Docs/Generic_Component_Catalog|.adlaire-schedule-panel' \
  'Docs/Generic_Component_Catalog|.adlaire-policy-card' \
  'Docs/Generic_Component_Catalog|.adlaire-compliance-checklist' \
  'Docs/Generic_Component_Catalog|.adlaire-evidence-locker' \
  'Docs/Generic_Component_Catalog|.adlaire-approval-route' \
  'Docs/Generic_Component_Catalog|.adlaire-access-review-panel' \
  'Docs/Generic_Component_Catalog|.adlaire-risk-banner' \
  'Docs/Generic_Component_Catalog|.adlaire-audit-event-stream' \
  'Docs/Generic_Component_Catalog|.adlaire-retention-policy-panel' \
  'Docs/Generic_Component_Catalog|.adlaire-incident-summary' \
  'Docs/Generic_Component_Catalog|.adlaire-control-status-grid' \
  'Docs/Generic_Component_Catalog|.adlaire-health-overview' \
  'Docs/Generic_Component_Catalog|.adlaire-service-status-card' \
  'Docs/Generic_Component_Catalog|.adlaire-uptime-panel' \
  'Docs/Generic_Component_Catalog|.adlaire-log-stream' \
  'Docs/Generic_Component_Catalog|.adlaire-log-event-row' \
  'Docs/Generic_Component_Catalog|.adlaire-trace-timeline' \
  'Docs/Generic_Component_Catalog|.adlaire-span-detail' \
  'Docs/Generic_Component_Catalog|.adlaire-metric-threshold-card' \
  'Docs/Generic_Component_Catalog|.adlaire-alert-rule-card' \
  'Docs/Generic_Component_Catalog|.adlaire-alert-incident-list' \
  'Docs/Generic_Component_Catalog|.adlaire-error-rate-panel' \
  'Docs/Generic_Component_Catalog|.adlaire-latency-distribution' \
  'Docs/Generic_Component_Catalog|.adlaire-dependency-map' \
  'Docs/Generic_Component_Catalog|.adlaire-slo-summary' \
  'Docs/Generic_Component_Catalog|.adlaire-diagnostic-run-card' \
  'Docs/Generic_Component_Catalog|.adlaire-remediation-panel' \
  'Docs/Generic_Component_Catalog|.adlaire-onboarding-flow' \
  'Docs/Generic_Component_Catalog|.adlaire-onboarding-step-card' \
  'Docs/Generic_Component_Catalog|.adlaire-tour-callout' \
  'Docs/Generic_Component_Catalog|.adlaire-guided-task-list' \
  'Docs/Generic_Component_Catalog|.adlaire-help-center-panel' \
  'Docs/Generic_Component_Catalog|.adlaire-help-article-card' \
  'Docs/Generic_Component_Catalog|.adlaire-search-result-list' \
  'Docs/Generic_Component_Catalog|.adlaire-search-result-item' \
  'Docs/Generic_Component_Catalog|.adlaire-recent-item-list' \
  'Docs/Generic_Component_Catalog|.adlaire-recommendation-panel' \
  'Docs/Generic_Component_Catalog|.adlaire-personalization-card' \
  'Docs/Generic_Component_Catalog|.adlaire-preference-panel' \
  'Docs/Generic_Component_Catalog|.adlaire-notification-preference-list' \
  'Docs/Generic_Component_Catalog|.adlaire-language-selector-panel' \
  'Docs/Generic_Component_Catalog|.adlaire-keyboard-shortcut-panel' \
  'Docs/Generic_Component_Catalog|.adlaire-release-highlight' \
  'Docs/Generic_Component_Catalog|.adlaire-dialog' \
  'Docs/Generic_Component_Catalog|.adlaire-drawer' \
  'Docs/Generic_Component_Catalog|.adlaire-bottom-sheet' \
  'Docs/Generic_Component_Catalog|.adlaire-popover' \
  'Docs/Generic_Component_Catalog|.adlaire-tooltip' \
  'Docs/Generic_Component_Catalog|.adlaire-toast' \
  'Docs/Generic_Component_Catalog|.adlaire-toast-queue' \
  'Docs/Generic_Component_Catalog|.adlaire-toast-viewport' \
  'Docs/Generic_Component_Catalog|.adlaire-backdrop' \
  'Docs/Generic_Component_Catalog|.adlaire-focus-sentry' \
  'Docs/Generic_Component_Catalog|.adlaire-touch-target' \
  'Docs/Generic_Component_Catalog|.adlaire-feedback-stack' \
  'Docs/Generic_Component_Catalog|.adlaire-progress' \
  'Docs/Generic_Component_Catalog|.adlaire-skeleton' \
  'Docs/Generic_Component_Catalog|.adlaire-data-table-state' \
  'Docs/Generic_Component_Catalog|.adlaire-bulk-feedback' \
  'Docs/Generic_Component_Catalog|.adlaire-stepper' \
  'Docs/Generic_Component_Catalog|.adlaire-filter-builder' \
  'Docs/Generic_Component_Catalog|.adlaire-git-repo-card' \
  'Docs/Generic_Component_Catalog|.adlaire-git-pr-detail' \
  'Docs/Generic_Component_Catalog|.adlaire-git-diff-viewer' \
  'Docs/Generic_Component_Catalog|.adlaire-git-review-state' \
  'Docs/Generic_Component_Catalog|.adlaire-git-ci-status' \
  'Docs/Generic_Component_Catalog|.adlaire-git-merge-state' \
  'Docs/Generic_Component_Catalog|.adlaire-git-diff-hunk' \
  'Docs/Generic_Component_Catalog|.adlaire-github-product-grid' \
  'Docs/Generic_Component_Catalog|.adlaire-github-product-card' \
  'Docs/Generic_Component_Catalog|.adlaire-github-action-card' \
  'Docs/Generic_Component_Catalog|.adlaire-github-copilot-card' \
  'Docs/Generic_Component_Catalog|.adlaire-github-security-panel' \
  'Docs/Generic_Component_Catalog|.adlaire-github-dependabot-alert' \
  'Docs/Generic_Component_Catalog|.adlaire-github-codespace-card' \
  'Docs/Generic_Component_Catalog|.adlaire-github-package-card' \
  'Docs/Generic_Component_Catalog|.adlaire-github-pages-card' \
  'Docs/Generic_Component_Catalog|.adlaire-github-project-board-card' \
  'Docs/Generic_Component_Catalog|.adlaire-github-discussion-card' \
  'Docs/Generic_Component_Catalog|.adlaire-github-release-card' \
  'Docs/Generic_Component_Catalog|.adlaire-github-marketplace-card' \
  'Docs/Generic_Component_Catalog|.adlaire-github-integration-list' \
  'Docs/Generic_Component_Catalog|.adlaire-github-webhook-panel' \
  'Docs/Generic_Component_Catalog|.adlaire-github-api-key-panel' \
  'Docs/Generic_Component_Catalog|.adlaire-github-pr-card' \
  'Docs/Generic_Component_Catalog|.adlaire-github-checks-panel' \
  'Docs/Generic_Component_Catalog|.adlaire-github-merge-readiness' \
  'Docs/Generic_Component_Catalog|.adlaire-github-branch-badge' \
  'Docs/Generic_Component_Catalog|.adlaire-github-commit-timeline' \
  'Docs/Generic_Component_Catalog|.adlaire-github-commit-item' \
  'Docs/Generic_Component_Catalog|.adlaire-cloud-service-card' \
  'Docs/Generic_Component_Catalog|.adlaire-cloud-region-card' \
  'Docs/Generic_Component_Catalog|.adlaire-cloud-environment-card' \
  'Docs/Generic_Component_Catalog|.adlaire-cloud-resource-grid' \
  'Docs/Generic_Component_Catalog|.adlaire-cloud-topology-map' \
  'Docs/Generic_Component_Catalog|.adlaire-cloud-deployment-target' \
  'Docs/Generic_Component_Catalog|.adlaire-cloud-runtime-card' \
  'Docs/Generic_Component_Catalog|.adlaire-cloud-database-card' \
  'Docs/Generic_Component_Catalog|.adlaire-cloud-storage-card' \
  'Docs/Generic_Component_Catalog|.adlaire-cloud-queue-card' \
  'Docs/Generic_Component_Catalog|.adlaire-cloud-worker-card' \
  'Docs/Generic_Component_Catalog|.adlaire-cloud-domain-panel' \
  'Docs/Generic_Component_Catalog|.adlaire-cloud-certificate-panel' \
  'Docs/Generic_Component_Catalog|.adlaire-cloud-secret-vault' \
  'Docs/Generic_Component_Catalog|.adlaire-cloud-quota-panel' \
  'Docs/Generic_Component_Catalog|.adlaire-cloud-cost-summary' \
  'Docs/Admin_UI_Catalog|.adlaire-admin-dashboard' \
  'Docs/Admin_UI_Catalog|.adlaire-admin-settings' \
  'Docs/Admin_UI_Catalog|.adlaire-admin-data-list' \
  'Docs/Admin_UI_Catalog|.adlaire-admin-bulk-action' \
  'Docs/Admin_UI_Catalog|.adlaire-admin-danger-zone' \
  'Docs/Admin_UI_Catalog|.adlaire-admin-kpi-card' \
  'Docs/Admin_UI_Catalog|.adlaire-admin-resource-header' \
  'Docs/Admin_UI_Catalog|.adlaire-admin-data-toolbar' \
  'Docs/Admin_UI_Catalog|.adlaire-admin-approval-panel' \
  'Docs/Admin_UI_Catalog|.adlaire-admin-health-check' \
  'Docs/Admin_UI_Catalog|.adlaire-admin-incident-panel' \
  'Docs/Admin_UI_Catalog|.adlaire-admin-maintenance-window' \
  'Docs/Admin_UI_Catalog|.adlaire-admin-release-panel' \
  'Docs/Admin_UI_Catalog|.adlaire-admin-security-overview' \
  'Docs/Admin_UI_Catalog|.adlaire-admin-secret-panel' \
  'Docs/Admin_UI_Catalog|.adlaire-admin-risk-signal' \
  'Docs/Admin_UI_Catalog|.adlaire-admin-state-badge' \
  'Docs/Admin_UI_Catalog|.adlaire-admin-empty-state' \
  'Docs/Admin_UI_Catalog|.adlaire-admin-mobile-stack' \
  'Docs/Admin_UI_Catalog|.adlaire-admin-mobile-scroll' \
  'Docs/Admin_UI_Catalog|.adlaire-admin-mobile-actions' \
  'Docs/Admin_UI_Catalog|.adlaire-admin-mobile-collapse' \
  'Docs/Admin_UI_Catalog|.adlaire-admin-action-bar' \
  'Docs/Admin_UI_Catalog|.adlaire-admin-layout' \
  'Docs/Admin_UI_Catalog|.adlaire-bulk-feedback' \
  'Docs/Admin_UI_Catalog|.adlaire-progress' \
  'Docs/Admin_UI_Catalog|.adlaire-data-table-state' \
  'Docs/Admin_UI_Catalog|.adlaire-skeleton' \
  'Docs/WYSIWYG_Editor_UI_Catalog|.adlaire-wysiwyg' \
  'Docs/WYSIWYG_Editor_UI_Catalog|.adlaire-wysiwyg-header' \
  'Docs/WYSIWYG_Editor_UI_Catalog|.adlaire-wysiwyg-toolbar' \
  'Docs/WYSIWYG_Editor_UI_Catalog|.adlaire-wysiwyg-canvas' \
  'Docs/WYSIWYG_Editor_UI_Catalog|.adlaire-wysiwyg-block' \
  'Docs/WYSIWYG_Editor_UI_Catalog|.adlaire-wysiwyg-block-selected' \
  'Docs/WYSIWYG_Editor_UI_Catalog|.adlaire-wysiwyg-inline-toolbar' \
  'Docs/WYSIWYG_Editor_UI_Catalog|.adlaire-wysiwyg-insert' \
  'Docs/WYSIWYG_Editor_UI_Catalog|.adlaire-wysiwyg-transform' \
  'Docs/WYSIWYG_Editor_UI_Catalog|.adlaire-wysiwyg-mobile-toolbar' \
  'Docs/WYSIWYG_Editor_UI_Catalog|.adlaire-wysiwyg-mobile-sheet' \
  'Docs/WYSIWYG_Editor_UI_Catalog|.adlaire-wysiwyg-command-item' \
  'Docs/WYSIWYG_Editor_UI_Catalog|.adlaire-wysiwyg-alert' \
  'Docs/WYSIWYG_Editor_UI_Catalog|.adlaire-wysiwyg-readonly' \
  'Docs/WYSIWYG_Editor_UI_Catalog|.adlaire-wysiwyg-disabled' \
  'Docs/WYSIWYG_Editor_UI_Catalog|.adlaire-wysiwyg-warning' \
  'Docs/WYSIWYG_Editor_UI_Catalog|.adlaire-wysiwyg-comment' \
  'Docs/WYSIWYG_Editor_UI_Catalog|.adlaire-wysiwyg-reorder' \
  'Docs/WYSIWYG_Editor_UI_Catalog|.adlaire-wysiwyg-publish-check' \
  'Docs/WYSIWYG_Editor_UI_Catalog|.adlaire-wysiwyg-a11y-panel' \
  'Docs/WYSIWYG_Editor_UI_Catalog|.adlaire-wysiwyg-slash-menu' \
  'Docs/WYSIWYG_Editor_UI_Catalog|.adlaire-wysiwyg-slash-item' \
  'Docs/WYSIWYG_Editor_UI_Catalog|.adlaire-wysiwyg-suggestion' \
  'Docs/WYSIWYG_Editor_UI_Catalog|.adlaire-wysiwyg-suggestion-card' \
  'Docs/WYSIWYG_Editor_UI_Catalog|.adlaire-wysiwyg-save-banner' \
  'Docs/WYSIWYG_Editor_UI_Catalog|.adlaire-wysiwyg-lock-banner'; do
  catalog_file=${catalog_class%%|*}
  class=${catalog_class#*|}
  require_class_in_doc "$catalog_file" "$class"
  require_class_in_css "$class"
done

for js_hook in \
  'data-adlaire-sidebar-toggle' \
  'data-adlaire-tree-toggle' \
  'data-adlaire-workspace-tab' \
  'data-adlaire-context-menu' \
  'data-adlaire-split-button-toggle' \
  'data-adlaire-overflow-toggle' \
  'data-adlaire-dock-toggle' \
  'data-adlaire-resizable-panel' \
  'data-adlaire-resize-handle' \
  'data-adlaire-preview-compare' \
  'data-adlaire-time-slot' \
  'data-adlaire-floor-select' \
  'data-adlaire-option-select' \
  'data-adlaire-folder-toggle' \
  'data-adlaire-policy-exception-toggle' \
  'data-adlaire-shift-select' \
  'data-adlaire-pipeline-stage-select' \
  'data-adlaire-service-check' \
  'data-adlaire-policy-acknowledgement' \
  'data-adlaire-confidence-select' \
  'data-adlaire-milestone-select' \
  'data-adlaire-attestation-toggle' \
  'data-adlaire-route-select' \
  'data-adlaire-care-plan-check' \
  'data-adlaire-evidence-select' \
  'data-adlaire-ticket-priority-select' \
  'data-adlaire-success-playbook-check' \
  'data-adlaire-report-parameter-select' \
  'data-adlaire-channel-select' \
  'data-adlaire-quiet-hours-toggle' \
  'data-adlaire-topic-preference-toggle' \
  'data-adlaire-editorial-gate-select' \
  'data-adlaire-locale-select' \
  'data-adlaire-moderation-decision' \
  'data-adlaire-device-select' \
  'data-adlaire-deployment-ring-select' \
  'data-adlaire-handoff-check' \
  'data-adlaire-fare-option-select' \
  'data-adlaire-room-select' \
  'data-adlaire-recovery-task-check' \
  'data-adlaire-eligibility-check' \
  'data-adlaire-permit-step-select' \
  'data-adlaire-volunteer-shift-select' \
  'data-adlaire-demand-response-select' \
  'data-adlaire-outage-report-select' \
  'data-adlaire-disclosure-check' \
  'data-adlaire-density-select' \
  'data-adlaire-bulk-selection-toggle' \
  'data-adlaire-verification-check' \
  'data-adlaire-saved-view-select' \
  'data-adlaire-record-row-toggle' \
  'data-adlaire-inline-edit-toggle' \
  'data-adlaire-bulk-confirm-toggle' \
  'data-adlaire-tool-permission-toggle' \
  'data-adlaire-approval-gate-toggle' \
  'data-adlaire-checkpoint-select' \
  'data-adlaire-notification-policy-toggle' \
  'data-adlaire-sdk-select' \
  'data-adlaire-environment-select' \
  'data-adlaire-connection-test-toggle' \
  'data-adlaire-migration-step-toggle' \
  'data-adlaire-theme-select' \
  'data-adlaire-dark-mode-toggle' \
  'data-adlaire-high-contrast-toggle' \
  'data-adlaire-token-override-toggle' \
  'data-adlaire-toast-dismiss' \
  'adlaire-dialog.is-open' \
  'adlaire-bottom-sheet.is-open' \
  'adlaire-popover.is-open'; do
  require_text "TypeScript/UI/components.ts" "$js_hook" "Interaction readiness"
  require_text "UI/components.js" "$js_hook" "Interaction readiness"
done

for ui_binding_term in \
  'hookSelector' \
  'componentSelectorBinding' \
  'componentBinding' \
  'componentInputBinding' \
  'componentKeyBinding' \
  'overlayClickBindings' \
  'componentClickBindings' \
  'deferredComponentClickBindings' \
  'componentInputBindings' \
  'componentKeyBindings' \
  'choiceBinding' \
  'booleanBinding' \
  'stepBinding' \
  'eventSourceElement' \
  'handleFirstComponentClick' \
  'handleEveryComponentClick' \
  'handleEveryComponentInput' \
  'handleFirstComponentKey' \
  'interactiveChoiceBindings' \
  'booleanStateBindings' \
  'currentStepBindings' \
  'closestBoundTrigger' \
  'handleDeclarativeInteraction' \
  'safeDocumentQuery' \
  'safeDocumentQueryAll' \
  'safeScopedQuery' \
  'safeScopedQueryAll' \
  'syncOverlayRootState' \
  'writeClipboardText' \
  'setBooleanAttribute' \
  'setOpenState'; do
  require_text "TypeScript/UI/components.ts" "$ui_binding_term" "Declarative UI interaction bindings"
  require_text "UI/components.js" "$ui_binding_term" "Declarative UI interaction bindings"
done

components_ts_hooks="$TMP_DIR/components-ts-hooks.txt"
components_js_hooks="$TMP_DIR/components-js-hooks.txt"
components_hook_diff="$TMP_DIR/components-hook-diff.txt"
grep -E -o 'data-adlaire-[A-Za-z0-9-]+' "$ROOT/TypeScript/UI/components.ts" | sort -u > "$components_ts_hooks"
grep -E -o 'data-adlaire-[A-Za-z0-9-]+' "$ROOT/UI/components.js" | sort -u > "$components_js_hooks"
if ! cmp -s "$components_ts_hooks" "$components_js_hooks"; then
  comm -3 "$components_ts_hooks" "$components_js_hooks" > "$components_hook_diff"
  fail "Declarative UI interaction bindings" "TypeScript/UI/components.ts and UI/components.js data-adlaire hook sets differ: $(tr '\n' ' ' < "$components_hook_diff")"
fi

if grep -n -E 'const (copy|remove|toastDismiss|select|sidebarToggle|treeToggle|workspaceTab|contextMenu|splitToggle|overflowToggle|dockToggle|folderToggle|policyExceptionToggle) = source\?\.closest' "$ROOT/TypeScript/UI/components.ts" >/dev/null 2>&1; then
  fail "Declarative UI interaction bindings" "TypeScript/UI/components.ts must keep component click routing in componentClickBindings."
fi

if grep -n -E 'var (copy|remove|toastDismiss|select|sidebarToggle|treeToggle|workspaceTab|contextMenu|splitToggle|overflowToggle|dockToggle|folderToggle|policyExceptionToggle) = event\.target\.closest' "$ROOT/UI/components.js" >/dev/null 2>&1; then
  fail "Declarative UI interaction bindings" "UI/components.js must keep component click routing in componentClickBindings."
fi

if grep -n -F 'event.target.closest("[data-adlaire-filter-input]")' "$ROOT/UI/components.js" >/dev/null 2>&1; then
  fail "Declarative UI interaction bindings" "UI/components.js must keep component input routing in componentInputBindings."
fi

if grep -n -F 'targetElement(event.target)' "$ROOT/TypeScript/UI/components.ts" "$ROOT/UI/components.js" >/dev/null 2>&1; then
  fail "Declarative UI interaction bindings" "UI components must route delegated events through eventSourceElement."
fi

require_text "TypeScript/UI/components.ts" 'closestBoundTrigger(source, bindings, index + 1)' "Declarative UI interaction bindings"
require_text "UI/components.js" 'closestBoundTrigger(source, bindings, index + 1)' "Declarative UI interaction bindings"
components_direct_dispatch_count=$(grep -h -F 'source.closest(binding.selector)' "$ROOT/TypeScript/UI/components.ts" "$ROOT/UI/components.js" | wc -l | tr -d ' ')
if [ "$components_direct_dispatch_count" != "2" ]; then
  fail "Declarative UI interaction bindings" "Component binding selector matching must stay centralized in closestBoundTrigger."
fi

if grep -n -F 'document.querySelector(input.getAttribute("data-adlaire-filter-root")' "$ROOT/UI/components.js" >/dev/null 2>&1; then
  fail "Safe UI DOM references" "UI/components.js must resolve filter roots through safeDocumentQuery."
fi

if grep -n -F 'root?.querySelector<HTMLElement>(fallbackSelector ?? "")' "$ROOT/TypeScript/UI/components.ts" >/dev/null 2>&1; then
  fail "Safe UI DOM references" "TypeScript/UI/components.ts must resolve optional fallback selectors through safeScopedQuery."
fi

if grep -n -F 'root && fallbackSelector ? root.querySelector(fallbackSelector)' "$ROOT/UI/components.js" >/dev/null 2>&1; then
  fail "Safe UI DOM references" "UI/components.js must resolve optional fallback selectors through safeScopedQuery."
fi

if grep -n -F 'document.querySelectorAll(' "$ROOT/UI/components.js" >/dev/null 2>&1; then
  fail "Safe UI DOM references" "UI/components.js must resolve document-wide query-all operations through safeDocumentQueryAll."
fi

if grep -n -F 'navigator.clipboard.writeText' "$ROOT/TypeScript/UI/components.ts" "$ROOT/UI/components.js" >/dev/null 2>&1; then
  fail "Safe UI DOM references" "UI component clipboard writes must go through writeClipboardText."
fi

for form_binding_term in \
  'hookSelector' \
  'formBinding' \
  'inputBinding' \
  'fieldBinding' \
  'formInputBindings' \
  'formClickBindings' \
  'formChangeBindings' \
  'eventSourceElement' \
  'closestBoundTrigger' \
  'handleEveryFormInteraction' \
  'handleFirstFormInteraction' \
  'activateFormKeyboardTrigger' \
  'isDisabledInteraction' \
  'isNativeInteractive' \
  'safeDocumentQuery' \
  'safeScopedQuery' \
  'safeScopedQueryAll' \
  'setOptionalText' \
  'setBooleanAttribute' \
  'setOpenState'; do
  require_text "TypeScript/UI/forms.ts" "$form_binding_term" "Declarative form interaction bindings"
  require_text "UI/forms.js" "$form_binding_term" "Declarative form interaction bindings"
done

if grep -n -F 'selector ? document.querySelector(selector)' "$ROOT/UI/forms.js" >/dev/null 2>&1; then
  fail "Safe form DOM references" "UI/forms.js must resolve data-driven selectors through safeDocumentQuery."
fi

if grep -n -F 'targetElement(event.target)' "$ROOT/TypeScript/UI/forms.ts" "$ROOT/UI/forms.js" >/dev/null 2>&1; then
  fail "Declarative form interaction bindings" "Form interactions must route delegated events through eventSourceElement."
fi

if grep -n -F 'root.querySelector<HTMLInputElement>(selector)' "$ROOT/TypeScript/UI/forms.ts" >/dev/null 2>&1; then
  fail "Safe form DOM references" "TypeScript/UI/forms.ts must resolve scoped data-driven selectors through safeScopedQuery."
fi

if grep -n -E '(root|form)\.querySelectorAll\("\[data-adlaire-' "$ROOT/UI/forms.js" >/dev/null 2>&1; then
  fail "Safe form DOM references" "UI/forms.js must resolve scoped query-all operations through safeScopedQueryAll."
fi

forms_ts_hooks="$TMP_DIR/forms-ts-hooks.txt"
forms_js_hooks="$TMP_DIR/forms-js-hooks.txt"
forms_hook_diff="$TMP_DIR/forms-hook-diff.txt"
grep -E -o 'data-adlaire-[A-Za-z0-9-]+' "$ROOT/TypeScript/UI/forms.ts" | sort -u > "$forms_ts_hooks"
grep -E -o 'data-adlaire-[A-Za-z0-9-]+' "$ROOT/UI/forms.js" | sort -u > "$forms_js_hooks"
if ! cmp -s "$forms_ts_hooks" "$forms_js_hooks"; then
  comm -3 "$forms_ts_hooks" "$forms_js_hooks" > "$forms_hook_diff"
  fail "Declarative form interaction bindings" "TypeScript/UI/forms.ts and UI/forms.js data-adlaire hook sets differ: $(tr '\n' ' ' < "$forms_hook_diff")"
fi

for content_binding_term in \
  'hookSelector' \
  'contentClickBinding' \
  'contentClickBindings' \
  'eventSourceElement' \
  'closestBoundTrigger' \
  'handleEveryContentClick' \
  'safeDocumentQuery' \
  'safeDocumentQueryAll' \
  'safeScopedQueryAll' \
  'setBooleanAttribute' \
  'writeClipboardText'; do
  require_text "TypeScript/UI/content.ts" "$content_binding_term" "Declarative content interaction bindings"
  require_text "UI/content.js" "$content_binding_term" "Declarative content interaction bindings"
done

if grep -n -F 'selector ? document.querySelector(selector)' "$ROOT/UI/content.js" >/dev/null 2>&1; then
  fail "Safe content DOM references" "UI/content.js must resolve code copy selectors through safeDocumentQuery."
fi

if grep -n -F 'targetElement(event.target)' "$ROOT/TypeScript/UI/content.ts" "$ROOT/UI/content.js" >/dev/null 2>&1; then
  fail "Declarative content interaction bindings" "Content interactions must route delegated events through eventSourceElement."
fi

if grep -n -F 'statusSelector ? document.querySelector(statusSelector)' "$ROOT/UI/content.js" >/dev/null 2>&1; then
  fail "Safe content DOM references" "UI/content.js must resolve code copy status selectors through safeDocumentQuery."
fi

if grep -n -F 'navigator.clipboard.writeText' "$ROOT/TypeScript/UI/content.ts" "$ROOT/UI/content.js" >/dev/null 2>&1; then
  fail "Safe content DOM references" "Content clipboard writes must go through writeClipboardText."
fi

if grep -n -F 'viewer.querySelectorAll(' "$ROOT/UI/content.js" >/dev/null 2>&1; then
  fail "Safe content DOM references" "UI/content.js must resolve scoped query-all operations through safeScopedQueryAll."
fi

content_ts_hooks="$TMP_DIR/content-ts-hooks.txt"
content_js_hooks="$TMP_DIR/content-js-hooks.txt"
content_hook_diff="$TMP_DIR/content-hook-diff.txt"
grep -E -o 'data-adlaire-[A-Za-z0-9-]+' "$ROOT/TypeScript/UI/content.ts" | sort -u > "$content_ts_hooks"
grep -E -o 'data-adlaire-[A-Za-z0-9-]+' "$ROOT/UI/content.js" | sort -u > "$content_js_hooks"
if ! cmp -s "$content_ts_hooks" "$content_js_hooks"; then
  comm -3 "$content_ts_hooks" "$content_js_hooks" > "$content_hook_diff"
  fail "Declarative content interaction bindings" "TypeScript/UI/content.ts and UI/content.js data-adlaire hook sets differ: $(tr '\n' ' ' < "$content_hook_diff")"
fi

for wysiwyg_binding_term in \
  'hookSelector' \
  'wysiwygClickBinding' \
  'wysiwygPrimaryClickBindings' \
  'wysiwygSelectionClickBindings' \
  'eventSourceElement' \
  'closestBoundTrigger' \
  'handleFirstWysiwygClick' \
  'moveCompositeSelection' \
  'selectCompositeItem' \
  'safeDocumentQuery' \
  'safeScopedQueryAll' \
  'setBooleanAttribute' \
  'setOpenState'; do
  require_text "TypeScript/EditorUI/wysiwyg.ts" "$wysiwyg_binding_term" "Declarative WYSIWYG interaction bindings"
  require_text "EditorUI/wysiwyg.js" "$wysiwyg_binding_term" "Declarative WYSIWYG interaction bindings"
done

if grep -n -F 'return selector ? document.querySelector(selector) : null' "$ROOT/EditorUI/wysiwyg.js" >/dev/null 2>&1; then
  fail "Safe WYSIWYG DOM references" "EditorUI/wysiwyg.js must resolve editor target selectors through safeDocumentQuery."
fi

if grep -n -F 'targetElement(event.target)' "$ROOT/TypeScript/EditorUI/wysiwyg.ts" "$ROOT/EditorUI/wysiwyg.js" >/dev/null 2>&1; then
  fail "Declarative WYSIWYG interaction bindings" "WYSIWYG interactions must route delegated events through eventSourceElement."
fi

if grep -n -E 'root\.querySelectorAll\("(\\.adlaire-wysiwyg|\[data-adlaire-wysiwyg)' "$ROOT/EditorUI/wysiwyg.js" >/dev/null 2>&1; then
  fail "Safe WYSIWYG DOM references" "EditorUI/wysiwyg.js must resolve scoped query-all operations through safeScopedQueryAll."
fi

wysiwyg_ts_hooks="$TMP_DIR/wysiwyg-ts-hooks.txt"
wysiwyg_js_hooks="$TMP_DIR/wysiwyg-js-hooks.txt"
wysiwyg_hook_diff="$TMP_DIR/wysiwyg-hook-diff.txt"
grep -E -o 'data-adlaire-[A-Za-z0-9-]+' "$ROOT/TypeScript/EditorUI/wysiwyg.ts" | sort -u > "$wysiwyg_ts_hooks"
grep -E -o 'data-adlaire-[A-Za-z0-9-]+' "$ROOT/EditorUI/wysiwyg.js" | sort -u > "$wysiwyg_js_hooks"
if ! cmp -s "$wysiwyg_ts_hooks" "$wysiwyg_js_hooks"; then
  comm -3 "$wysiwyg_ts_hooks" "$wysiwyg_js_hooks" > "$wysiwyg_hook_diff"
  fail "Declarative WYSIWYG interaction bindings" "TypeScript/EditorUI/wysiwyg.ts and EditorUI/wysiwyg.js data-adlaire hook sets differ: $(tr '\n' ' ' < "$wysiwyg_hook_diff")"
fi

for js_pair in \
  'TypeScript/UI/components.ts|UI/components.js|data-adlaire-tab' \
  'TypeScript/UI/forms.ts|UI/forms.js|data-adlaire-filter-input' \
  'TypeScript/UI/forms.ts|UI/forms.js|data-adlaire-filter-chip' \
  'TypeScript/UI/forms.ts|UI/forms.js|data-adlaire-combobox-input' \
  'TypeScript/UI/forms.ts|UI/forms.js|data-adlaire-combobox-option' \
  'TypeScript/UI/forms.ts|UI/forms.js|data-adlaire-multi-select-option' \
  'TypeScript/UI/forms.ts|UI/forms.js|data-adlaire-segmented-option' \
  'TypeScript/UI/forms.ts|UI/forms.js|data-adlaire-segmented-output' \
  'TypeScript/UI/forms.ts|UI/forms.js|data-adlaire-radio-card' \
  'TypeScript/UI/forms.ts|UI/forms.js|data-adlaire-radio-card-output' \
  'TypeScript/UI/forms.ts|UI/forms.js|data-adlaire-switch-item' \
  'TypeScript/UI/forms.ts|UI/forms.js|data-adlaire-switch-output' \
  'TypeScript/UI/forms.ts|UI/forms.js|data-adlaire-range-input' \
  'TypeScript/UI/forms.ts|UI/forms.js|data-adlaire-range-output' \
  'TypeScript/UI/forms.ts|UI/forms.js|data-adlaire-range-value' \
  'TypeScript/UI/forms.ts|UI/forms.js|data-adlaire-stepper-action' \
  'TypeScript/UI/forms.ts|UI/forms.js|data-adlaire-stepper-output' \
  'TypeScript/UI/forms.ts|UI/forms.js|data-adlaire-token-add' \
  'TypeScript/UI/forms.ts|UI/forms.js|data-adlaire-token-remove' \
  'TypeScript/UI/forms.ts|UI/forms.js|data-adlaire-token-count' \
  'TypeScript/UI/forms.ts|UI/forms.js|data-adlaire-character-count' \
  'TypeScript/UI/forms.ts|UI/forms.js|data-adlaire-validation-message' \
  'TypeScript/UI/forms.ts|UI/forms.js|data-adlaire-date-preset' \
  'TypeScript/UI/forms.ts|UI/forms.js|data-adlaire-file-input' \
  'TypeScript/UI/forms.ts|UI/forms.js|data-adlaire-file-empty' \
  'TypeScript/UI/forms.ts|UI/forms.js|data-adlaire-toggle-input' \
  'TypeScript/UI/forms.ts|UI/forms.js|data-adlaire-validate' \
  'TypeScript/UI/forms.ts|UI/forms.js|data-adlaire-validate-summary' \
  'TypeScript/UI/content.ts|UI/content.js|data-adlaire-sort' \
  'TypeScript/UI/content.ts|UI/content.js|data-adlaire-sort-status' \
  'TypeScript/UI/content.ts|UI/content.js|data-adlaire-sort-state' \
  'TypeScript/UI/content.ts|UI/content.js|data-adlaire-sort-order' \
  'TypeScript/UI/content.ts|UI/content.js|data-adlaire-code-copy' \
  'TypeScript/UI/content.ts|UI/content.js|data-adlaire-code-copy-status' \
  'TypeScript/UI/content.ts|UI/content.js|data-adlaire-code-line' \
  'TypeScript/UI/content.ts|UI/content.js|data-adlaire-toc-link' \
  'TypeScript/UI/components.ts|UI/components.js|data-adlaire-column-toggle' \
  'TypeScript/UI/components.ts|UI/components.js|data-adlaire-page-select' \
  'TypeScript/UI/components.ts|UI/components.js|data-adlaire-saved-view-apply' \
  'TypeScript/UI/components.ts|UI/components.js|data-adlaire-selection-counter' \
  'TypeScript/UI/components.ts|UI/components.js|data-adlaire-bulk-action-tray' \
  'TypeScript/EditorUI/wysiwyg.ts|EditorUI/wysiwyg.js|data-adlaire-wysiwyg-mode' \
  'TypeScript/EditorUI/wysiwyg.ts|EditorUI/wysiwyg.js|data-adlaire-wysiwyg-toggle' \
  'TypeScript/EditorUI/wysiwyg.ts|EditorUI/wysiwyg.js|data-adlaire-wysiwyg-target' \
  'TypeScript/EditorUI/wysiwyg.ts|EditorUI/wysiwyg.js|data-adlaire-wysiwyg-select' \
  'TypeScript/EditorUI/wysiwyg.ts|EditorUI/wysiwyg.js|data-adlaire-wysiwyg-toolbar-group' \
  'TypeScript/EditorUI/wysiwyg.ts|EditorUI/wysiwyg.js|data-adlaire-wysiwyg-slash-item' \
  'TypeScript/EditorUI/wysiwyg.ts|EditorUI/wysiwyg.js|data-adlaire-wysiwyg-suggestion' \
  'TypeScript/EditorUI/wysiwyg.ts|EditorUI/wysiwyg.js|adlaire-wysiwyg-block-selected'; do
  source_file=${js_pair%%|*}
  rest=${js_pair#*|}
  output_file=${rest%%|*}
  hook=${rest#*|}
  require_text "$source_file" "$hook" "JavaScript hook contract"
  require_text "$output_file" "$hook" "JavaScript hook contract"
done

for editor_contract in \
  'Docs/Editor_Master_Spec|Runtime Contract' \
  'Docs/Editor_Master_Spec|Command boundary' \
  'Docs/Editor_Master_Spec|Document boundary' \
  'Docs/Editor_Master_Spec|Selection boundary' \
  'Docs/Editor_Master_Spec|History boundary' \
  'Docs/Editor_Master_Spec|save state snapshot' \
  'Docs/Editor_Master_Spec|publish state snapshot' \
  'Docs/Editor_Master_Spec|validation summary' \
  'Docs/Editor_Master_Spec|readOnly transition' \
  'Docs/Editor_Master_Spec|checkpoint labels' \
  'Docs/Editor_Master_Spec|save completion' \
  'Docs/Editor_Master_Spec|save failure' \
  'Docs/Editor_Master_Spec|publish completion' \
  'Docs/Editor_Master_Spec|publish failure' \
  'Docs/Editor_Master_Spec|completeSave controller contract' \
  'Docs/Editor_Master_Spec|failSave controller contract' \
  'Docs/Editor_Master_Spec|completePublish controller contract' \
  'Docs/Editor_Master_Spec|failPublish controller contract' \
  'Docs/Editor_Master_Spec|history reset' \
  'Docs/Editor_Master_Spec|Validation boundary' \
  'Docs/Editor_Master_Spec|Event boundary' \
  'Docs/Editor_Master_Spec|Type boundary' \
  'Docs/Editor_Master_Spec|Output boundary' \
  'Docs/Editor_Master_Spec|Runtime Responsibility Checkpoints' \
  'Docs/Editor_Master_Spec|HeadlessEditorController' \
  'Docs/Editor_Master_Spec|non-mutating failure results' \
  'Docs/Editor_Master_Spec|ToolRegistry' \
  'Docs/Editor_Master_Spec|selection equality' \
  'Docs/Editor_Master_Spec|snapshot cloning' \
  'Docs/Editor_Master_Spec|validateDocumentAsync' \
  'Docs/Editor_Master_Spec|editorError construction' \
  'Docs/Editor_Master_Spec|public controller types' \
  'TypeScript/Editor/index.ts|export * from "./types.ts"' \
  'TypeScript/Editor/index.ts|export * from "./document.ts"' \
  'TypeScript/Editor/index.ts|export * from "./selection.ts"' \
  'TypeScript/Editor/index.ts|export * from "./history.ts"' \
  'TypeScript/Editor/index.ts|export * from "./events.ts"' \
  'TypeScript/Editor/index.ts|export * from "./validation.ts"' \
  'TypeScript/Editor/index.ts|export * from "./commands.ts"' \
  'TypeScript/Editor/index.ts|export * from "./core.ts"' \
  'TypeScript/Editor/index.ts|window.AdlaireEditor' \
  'TypeScript/Editor/core.ts|HeadlessEditorController' \
  'TypeScript/Editor/core.ts|dispatchBatch' \
  'TypeScript/Editor/core.ts|getSaveState' \
  'TypeScript/Editor/core.ts|getPublishState' \
  'TypeScript/Editor/core.ts|getValidationSummary' \
  'TypeScript/Editor/core.ts|setReadOnly' \
  'TypeScript/Editor/core.ts|checkpoint' \
  'TypeScript/Editor/core.ts|completeSave' \
  'TypeScript/Editor/core.ts|failSave' \
  'TypeScript/Editor/core.ts|completePublish' \
  'TypeScript/Editor/core.ts|failPublish' \
  'TypeScript/Editor/core.ts|this.#history.clear()' \
  'TypeScript/Editor/core.ts|type DispatchValidationMode' \
  'TypeScript/Editor/core.ts|function validateDispatchCommand' \
  'TypeScript/Editor/core.ts|validateDispatchCommand(command, this.#readOnly, "single")' \
  'TypeScript/Editor/core.ts|validateDispatchCommand(command, this.#readOnly, "batch")' \
  'TypeScript/Editor/core.ts|#fail(error: EditorError)' \
  'TypeScript/Editor/core.ts|command.readOnly' \
  'TypeScript/Editor/core.ts|function commandSelection' \
  'TypeScript/Editor/core.ts|function commandContext' \
  'TypeScript/Editor/commands.ts|applyCommand' \
  'TypeScript/Editor/commands.ts|documentCommandHandlers' \
  'TypeScript/Editor/commands.ts|function commandPayload' \
  'TypeScript/Editor/commands.ts|function childBoundaryError' \
  'TypeScript/Editor/commands.ts|function insertChildBlock' \
  'TypeScript/Editor/commands.ts|function failed' \
  'TypeScript/Editor/document.ts|ToolRegistry' \
  'TypeScript/Editor/document.ts|handlePaste' \
  'TypeScript/Editor/document.ts|export function isSafeHref' \
  'TypeScript/Editor/selection.ts|normalizeSelection' \
  'TypeScript/Editor/selection.ts|sameSelection' \
  'TypeScript/Editor/history.ts|class History' \
  'TypeScript/Editor/history.ts|clear(): void' \
  'TypeScript/Editor/history.ts|cloneSnapshot' \
  'TypeScript/Editor/validation.ts|sanitizeDocument' \
  'TypeScript/Editor/validation.ts|validateDocumentAsync' \
  'TypeScript/Editor/events.ts|class EventBus' \
  'TypeScript/Editor/events.ts|editorError' \
  'TypeScript/Editor/types.ts|EditorDocument' \
  'TypeScript/Editor/types.ts|EditorController' \
  'TypeScript/Editor/types.ts|getSaveState(): SaveState' \
  'TypeScript/Editor/types.ts|getPublishState(): PublishState' \
  'TypeScript/Editor/types.ts|getValidationSummary(): ValidationSummary' \
  'TypeScript/Editor/types.ts|setReadOnly(readOnly: boolean): void' \
  'TypeScript/Editor/types.ts|checkpoint(label: string): HistoryCheckpoint' \
  'TypeScript/Editor/types.ts|completeSave(state?: Partial<SaveState>): SaveState' \
  'TypeScript/Editor/types.ts|failSave(error: string): SaveState' \
  'TypeScript/Editor/types.ts|completePublish(state?: Partial<PublishState>): PublishState' \
  'TypeScript/Editor/types.ts|failPublish(error: string): PublishState' \
  'EditorUI/editor.js|window.AdlaireEditor' \
  'EditorUI/editor.js|function validateDispatchCommand' \
  'EditorUI/editor.js|validateDispatchCommand(command, this.readOnly, "single")' \
  'EditorUI/editor.js|validateDispatchCommand(command, this.readOnly, "batch")' \
  'EditorUI/editor.js|HeadlessEditorController.prototype.getSaveState' \
  'EditorUI/editor.js|HeadlessEditorController.prototype.getPublishState' \
  'EditorUI/editor.js|HeadlessEditorController.prototype.getValidationSummary' \
  'EditorUI/editor.js|HeadlessEditorController.prototype.setReadOnly' \
  'EditorUI/editor.js|HeadlessEditorController.prototype.checkpoint' \
  'EditorUI/editor.js|HeadlessEditorController.prototype.completeSave' \
  'EditorUI/editor.js|HeadlessEditorController.prototype.failSave' \
  'EditorUI/editor.js|HeadlessEditorController.prototype.completePublish' \
  'EditorUI/editor.js|HeadlessEditorController.prototype.failPublish' \
  'EditorUI/editor.js|History.prototype.clear' \
  'EditorUI/editor.js|failValidation' \
  'EditorUI/editor.js|documentCommandHandlers' \
  'EditorUI/editor.js|function childBoundaryError' \
  'EditorUI/editor.js|function insertChildBlock' \
  'EditorUI/editor.js|function failed(document, error)' \
  'EditorUI/editor.js|failed(document, editorError(' \
  'EditorUI/editor.js|function commandPayload' \
  'EditorUI/editor.js|function commandSelection'; do
  file=${editor_contract%%|*}
  text=${editor_contract#*|}
  require_text "$file" "$text" "Editor runtime"
done

if grep -n -F 'if (!knownCommands.has(command.type)) return this.#error' "$ROOT/TypeScript/Editor/core.ts" >/dev/null 2>&1; then
  fail "Editor runtime" "Editor dispatch command validation must stay centralized in validateDispatchCommand."
fi

if grep -n -F 'if (!isKnownCommand(command.type)) return this.fail' "$ROOT/EditorUI/editor.js" >/dev/null 2>&1; then
  fail "Editor runtime" "Generated editor dispatch command validation must stay centralized in validateDispatchCommand."
fi

if grep -n -F 'errors.push(editorError("command.unknown"' "$ROOT/EditorUI/editor.js" >/dev/null 2>&1; then
  fail "Editor runtime" "Generated batch command validation must use validateDispatchCommand."
fi

if grep -n -F 'children: insertAt(target.children || []' "$ROOT/EditorUI/editor.js" >/dev/null 2>&1; then
  fail "Editor runtime" "Generated nested block insertion must use insertChildBlock."
fi

editor_js_child_boundary_count=$(grep -c -F 'var parentTool = registry && registry.get(parent.type);' "$ROOT/EditorUI/editor.js" 2>/dev/null || printf '%s' 0)
if [ "$editor_js_child_boundary_count" != "1" ]; then
  fail "Editor runtime" "Generated nested child boundary checks must stay centralized in childBoundaryError."
fi

if grep -n -F 'failedWithError' "$ROOT/EditorUI/editor.js" >/dev/null 2>&1; then
  fail "Editor runtime" "Generated command failures must use failed(document, editorError(...)) or pass an existing EditorError to failed."
fi

if grep -n -F 'failed(document, "' "$ROOT/EditorUI/editor.js" >/dev/null 2>&1; then
  fail "Editor runtime" "Generated command failures must pass EditorError objects to failed."
fi

if grep -n -F 'command.payload as' "$ROOT/TypeScript/Editor/core.ts" "$ROOT/TypeScript/Editor/commands.ts" >/dev/null 2>&1; then
  fail "Editor runtime" "Editor command payload casts must stay centralized in command payload helpers."
fi

if grep -n -F 'command.payload || {}' "$ROOT/EditorUI/editor.js" >/dev/null 2>&1; then
  fail "Editor runtime" "Editor generated runtime must use commandPayload helpers for command payload access."
fi

if grep -R -n -E 'from "\.\./|from "\./CSS|from "\./UI|from "\./EditorUI' "$ROOT/TypeScript/Editor" >/dev/null 2>&1; then
  fail "Editor runtime boundary" "TypeScript/Editor modules must stay inside the editor runtime boundary."
fi

ROOT="$ROOT" ruby <<'RUBY'
root = ENV.fetch("ROOT")
expected_files = %w[
  TypeScript/Editor/commands.ts
  TypeScript/Editor/core.ts
  TypeScript/Editor/document.ts
  TypeScript/Editor/events.ts
  TypeScript/Editor/history.ts
  TypeScript/Editor/index.ts
  TypeScript/Editor/selection.ts
  TypeScript/Editor/types.ts
  TypeScript/Editor/validation.ts
].sort
actual_files = Dir.chdir(root) { Dir.glob("TypeScript/Editor/*.ts").sort }
unless actual_files == expected_files
  delta = ((expected_files - actual_files) + (actual_files - expected_files)).join(", ")
  abort("[Editor runtime structural check] TypeScript/Editor file set mismatch: #{delta}")
end

module_registry_docs = %w[
  README.md
  Docs/Master_Spec
  Docs/Document_Index
  Docs/Component_Contract_Matrix
  Docs/Editor_Master_Spec
]
module_registry_docs.each do |doc|
  text = File.read(File.join(root, doc))
  abort("[Editor runtime module registry contract] #{doc} missing contract term") unless text.include?("Editor runtime module registry contract")
end

editor_spec = File.read(File.join(root, "Docs/Editor_Master_Spec"))
expected_module_rows = {
  "core.ts" => "Editor creation and runtime coordination.",
  "document.ts" => "Structured document data and block operations.",
  "commands.ts" => "Command definitions and command execution.",
  "selection.ts" => "Selection model.",
  "history.ts" => "Undo and redo history, including history reset for document replacement.",
  "validation.ts" => "Document, command, and selection validation.",
  "events.ts" => "Runtime events.",
  "types.ts" => "Shared editor types.",
  "index.ts" => "Public TypeScript entry point.",
}
expected_module_rows.each do |module_name, responsibility|
  row = "| `#{module_name}` | #{responsibility} |"
  abort("[Editor runtime module registry contract] Docs/Editor_Master_Spec missing module row: #{module_name}") unless editor_spec.include?(row)
end

exports = {
  "TypeScript/Editor/commands.ts" => ["export function applyCommand"],
  "TypeScript/Editor/core.ts" => ["export class HeadlessEditorController", "export function createEditor"],
  "TypeScript/Editor/document.ts" => ["export class ToolRegistry", "export class BlockRegistry", "function handlePaste", "export function normalizeDocument", "export function isSafeHref"],
  "TypeScript/Editor/events.ts" => ["export class EventBus", "export function editorError"],
  "TypeScript/Editor/history.ts" => ["export class History", "clear(): void"],
  "TypeScript/Editor/selection.ts" => ["export function normalizeSelection", "export function sameSelection"],
  "TypeScript/Editor/types.ts" => ["export interface EditorDocument", "export interface EditorController", "getSaveState(): SaveState", "getPublishState(): PublishState", "getValidationSummary(): ValidationSummary", "setReadOnly(readOnly: boolean): void", "checkpoint(label: string): HistoryCheckpoint", "completeSave(state?: Partial<SaveState>): SaveState", "failSave(error: string): SaveState", "completePublish(state?: Partial<PublishState>): PublishState", "failPublish(error: string): PublishState"],
  "TypeScript/Editor/validation.ts" => ["export function validateDocument", "export async function validateDocumentAsync"],
}

exports.each do |file, markers|
  text = File.read(File.join(root, file))
  markers.each do |marker|
    abort("[Editor runtime structural check] missing #{marker} in #{file}") unless text.include?(marker)
  end
end

index_text = File.read(File.join(root, "TypeScript/Editor/index.ts"))
%w[commands core document events history selection types validation].each do |name|
  abort("[Editor runtime structural check] index.ts must re-export #{name}.ts") unless index_text.include?(%Q(export * from "./#{name}.ts"))
end
RUBY

for sample_class in \
  'adlaire-workbench-layout' \
  'adlaire-mobile-stack' \
  'adlaire-mobile-action-bar' \
  'adlaire-split-pane-collapsed' \
  'adlaire-content-card' \
  'adlaire-code-block' \
  'adlaire-code-copy' \
  'data-adlaire-sort-status' \
  'adlaire-tabs' \
  'data-adlaire-tab' \
  'adlaire-content-table' \
  'adlaire-faq-list' \
  'adlaire-timeline' \
  'adlaire-markdown-body' \
  'adlaire-filter-builder' \
  'adlaire-form-grid' \
  'adlaire-input-addon' \
  'adlaire-field-hint' \
  'adlaire-validation-list' \
  'adlaire-combobox' \
  'data-adlaire-combobox-input' \
  'data-adlaire-combobox-option' \
  'adlaire-multi-select' \
  'data-adlaire-multi-select-option' \
  'adlaire-segmented-control' \
  'data-adlaire-segmented-option' \
  'adlaire-radio-card-group' \
  'data-adlaire-radio-card' \
  'adlaire-switch-group' \
  'data-adlaire-switch-item' \
  'adlaire-token-input' \
  'adlaire-date-picker' \
  'data-adlaire-date-preset' \
  'adlaire-calendar' \
  'adlaire-tree-view' \
  'data-adlaire-tree-toggle' \
  'adlaire-data-grid' \
  'adlaire-data-density-toolbar' \
  'adlaire-row-selection-cell' \
  'adlaire-data-grid-detail-row' \
  'adlaire-data-grid-summary-row' \
  'adlaire-column-resize-handle' \
  'adlaire-cell-status' \
  'adlaire-import-preview-table' \
  'adlaire-column-manager' \
  'adlaire-saved-view-bar' \
  'adlaire-property-inspector' \
  'adlaire-status-inspector' \
  'adlaire-empty-recovery-panel' \
  'adlaire-token-swatch' \
  'adlaire-component-preview' \
  'adlaire-component-state-matrix' \
  'adlaire-anatomy-panel' \
  'adlaire-a11y-checklist' \
  'adlaire-keyboard-map' \
  'adlaire-bottom-sheet' \
  'adlaire-toast-queue' \
  'adlaire-focus-sentry' \
  'adlaire-touch-target' \
  'adlaire-stepper' \
  'adlaire-progress' \
  'adlaire-skeleton' \
  'adlaire-bulk-feedback' \
  'adlaire-date-range' \
  'adlaire-file-picker' \
  'adlaire-dropzone' \
  'adlaire-toggle' \
  'data-adlaire-validate-summary' \
  'data-adlaire-file-empty' \
  'adlaire-git-review-state' \
  'adlaire-resizable-panel' \
  'data-adlaire-resizable-panel' \
  'data-adlaire-resize-handle' \
  'adlaire-workspace-breadcrumb' \
  'adlaire-command-bar' \
  'adlaire-panel-stack' \
  'adlaire-quick-switcher' \
  'adlaire-shortcut-recorder' \
  'adlaire-git-ci-status' \
  'adlaire-git-merge-state' \
  'adlaire-git-diff-hunk' \
  'adlaire-github-pr-card' \
  'adlaire-github-checks-panel' \
  'adlaire-github-merge-readiness' \
  'adlaire-github-branch-badge' \
  'adlaire-github-commit-timeline' \
  'adlaire-github-product-grid' \
  'adlaire-github-product-card' \
  'adlaire-github-action-card' \
  'adlaire-github-copilot-card' \
  'adlaire-github-security-panel' \
  'adlaire-github-dependabot-alert' \
  'adlaire-github-codespace-card' \
  'adlaire-github-package-card' \
  'adlaire-github-pages-card' \
  'adlaire-github-project-board-card' \
  'adlaire-github-discussion-card' \
  'adlaire-github-release-card' \
  'adlaire-github-marketplace-card' \
  'adlaire-github-integration-list' \
  'adlaire-github-webhook-panel' \
  'adlaire-github-api-key-panel' \
  'adlaire-cloud-service-card' \
  'adlaire-cloud-region-card' \
  'adlaire-cloud-environment-card' \
  'adlaire-cloud-resource-grid' \
  'adlaire-cloud-topology-map' \
  'adlaire-cloud-deployment-target' \
  'adlaire-cloud-runtime-card' \
  'adlaire-cloud-database-card' \
  'adlaire-cloud-storage-card' \
  'adlaire-cloud-queue-card' \
  'adlaire-cloud-worker-card' \
  'adlaire-cloud-domain-panel' \
  'adlaire-cloud-certificate-panel' \
  'adlaire-cloud-secret-vault' \
  'adlaire-cloud-quota-panel' \
  'adlaire-cloud-cost-summary' \
  'adlaire-icon-button' \
  'adlaire-icon-button-group' \
  'adlaire-icon-tile' \
  'adlaire-icon-list' \
  'adlaire-icon-picker' \
  'adlaire-feature-list' \
  'adlaire-action-menu' \
  'adlaire-stat-strip' \
  'adlaire-avatar' \
  'adlaire-avatar-group' \
  'adlaire-notification-list' \
  'adlaire-activity-feed' \
  'adlaire-empty-action' \
  'adlaire-shortcut-key' \
  'adlaire-key-value-list' \
  'adlaire-resource-card' \
  'adlaire-pricing-card' \
  'adlaire-permission-matrix' \
  'adlaire-status-timeline' \
  'adlaire-monitoring-card' \
  'adlaire-deployment-card' \
  'adlaire-release-notes' \
  'adlaire-query-result' \
  'adlaire-team-card' \
  'adlaire-organization-switcher' \
  'adlaire-approval-flow' \
  'adlaire-review-checklist' \
  'adlaire-responsive-preview' \
  'adlaire-app-nav' \
  'adlaire-sidebar-section' \
  'adlaire-command-launcher' \
  'adlaire-inbox-list' \
  'adlaire-message-thread' \
  'adlaire-file-card' \
  'adlaire-upload-queue' \
  'adlaire-agent-card' \
  'adlaire-workspace-switcher' \
  'adlaire-audit-log' \
  'adlaire-tab-workspace' \
  'data-adlaire-workspace-tab' \
  'adlaire-dock-panel' \
  'data-adlaire-dock-toggle' \
  'adlaire-status-bar' \
  'adlaire-panel-rail' \
  'adlaire-context-menu' \
  'data-adlaire-context-menu' \
  'adlaire-split-button' \
  'data-adlaire-split-button-toggle' \
  'adlaire-overflow-toolbar' \
  'data-adlaire-overflow-toggle' \
  'adlaire-quick-action-list' \
  'adlaire-kanban-board' \
  'adlaire-swimlane' \
  'adlaire-board-card' \
  'adlaire-lane-summary' \
  'adlaire-sparkline' \
  'adlaire-gauge' \
  'adlaire-heatmap' \
  'adlaire-distribution-bar' \
  'adlaire-status-meter' \
  'adlaire-asset-browser' \
  'adlaire-thumbnail-grid' \
  'adlaire-media-metadata-panel' \
  'adlaire-preview-compare' \
  'data-adlaire-preview-compare' \
  'adlaire-document-outline' \
  'adlaire-mini-map' \
  'adlaire-comment-resolver' \
  'adlaire-publication-checklist' \
  'adlaire-agenda-view' \
  'adlaire-time-slot-grid' \
  'data-adlaire-time-slot' \
  'adlaire-resource-calendar' \
  'adlaire-availability-matrix' \
  'adlaire-booking-card' \
  'adlaire-calendar-event' \
  'adlaire-location-card' \
  'adlaire-facility-map-panel' \
  'adlaire-floor-selector' \
  'data-adlaire-floor-select' \
  'adlaire-area-status-grid' \
  'adlaire-route-summary' \
  'adlaire-site-operating-hours' \
  'adlaire-comparison-matrix' \
  'adlaire-option-card' \
  'data-adlaire-option-select' \
  'adlaire-decision-scorecard' \
  'adlaire-tradeoff-list' \
  'adlaire-recommendation-banner' \
  'adlaire-selection-summary' \
  'adlaire-document-library' \
  'adlaire-folder-tree' \
  'data-adlaire-folder-toggle' \
  'adlaire-file-version-card' \
  'adlaire-document-approval-state' \
  'adlaire-retention-badge' \
  'adlaire-download-queue' \
  'adlaire-access-request-card' \
  'adlaire-permission-grant-row' \
  'adlaire-session-list' \
  'adlaire-device-trust-card' \
  'adlaire-security-event-row' \
  'adlaire-policy-exception-panel' \
  'data-adlaire-policy-exception-toggle' \
  'adlaire-budget-panel' \
  'adlaire-expense-card' \
  'adlaire-purchase-request' \
  'adlaire-invoice-approval-row' \
  'adlaire-payment-schedule' \
  'adlaire-ledger-entry-row' \
  'adlaire-employee-profile-card' \
  'adlaire-shift-roster' \
  'data-adlaire-shift-select' \
  'adlaire-attendance-summary' \
  'adlaire-leave-request-card' \
  'adlaire-skill-matrix' \
  'adlaire-training-progress' \
  'adlaire-customer-profile-panel' \
  'adlaire-account-health-card' \
  'adlaire-opportunity-card' \
  'adlaire-pipeline-stage-rail' \
  'data-adlaire-pipeline-stage-select' \
  'adlaire-contact-timeline' \
  'adlaire-next-action-panel' \
  'adlaire-work-order-card' \
  'adlaire-dispatch-board' \
  'adlaire-technician-route-card' \
  'adlaire-parts-list' \
  'adlaire-service-checklist' \
  'data-adlaire-service-check' \
  'adlaire-completion-report' \
  'adlaire-knowledge-article-card' \
  'adlaire-collection-index' \
  'adlaire-announcement-banner' \
  'adlaire-policy-acknowledgement' \
  'data-adlaire-policy-acknowledgement' \
  'adlaire-quick-link-grid' \
  'adlaire-internal-app-launcher' \
  'adlaire-objective-card' \
  'adlaire-key-result-tracker' \
  'adlaire-initiative-map' \
  'adlaire-confidence-indicator' \
  'data-adlaire-confidence-select' \
  'adlaire-review-cadence' \
  'adlaire-alignment-summary' \
  'adlaire-portfolio-overview' \
  'adlaire-program-card' \
  'adlaire-project-health-panel' \
  'adlaire-milestone-tracker' \
  'data-adlaire-milestone-select' \
  'adlaire-dependency-register' \
  'adlaire-risk-issue-log' \
  'adlaire-capacity-planner' \
  'adlaire-allocation-row' \
  'adlaire-utilization-summary' \
  'adlaire-staffing-request-card' \
  'adlaire-allocation-conflict' \
  'adlaire-availability-forecast' \
  'adlaire-supplier-profile' \
  'adlaire-vendor-scorecard' \
  'adlaire-contract-renewal-card' \
  'adlaire-sla-tracker' \
  'adlaire-procurement-pipeline' \
  'adlaire-compliance-attestation-row' \
  'data-adlaire-attestation-toggle' \
  'adlaire-service-request-card' \
  'adlaire-change-calendar-panel' \
  'adlaire-asset-inventory-row' \
  'adlaire-license-assignment-card' \
  'adlaire-maintenance-window-card' \
  'adlaire-postmortem-summary' \
  'adlaire-shipment-tracker' \
  'adlaire-warehouse-bin-card' \
  'adlaire-inventory-movement-row' \
  'adlaire-carrier-handoff-card' \
  'adlaire-delivery-route-board' \
  'data-adlaire-route-select' \
  'adlaire-exception-queue' \
  'adlaire-production-order-card' \
  'adlaire-work-cell-status' \
  'adlaire-quality-inspection-panel' \
  'adlaire-defect-report-row' \
  'adlaire-batch-trace-card' \
  'adlaire-downtime-reason-list' \
  'adlaire-patient-summary-card' \
  'adlaire-appointment-queue' \
  'adlaire-care-plan-checklist' \
  'data-adlaire-care-plan-check' \
  'adlaire-medication-schedule' \
  'adlaire-triage-status-panel' \
  'adlaire-consent-record-row' \
  'adlaire-course-card' \
  'adlaire-lesson-progress' \
  'adlaire-assignment-queue' \
  'adlaire-grading-rubric' \
  'adlaire-learner-profile' \
  'adlaire-certification-tracker' \
  'adlaire-case-file-card' \
  'adlaire-matter-timeline' \
  'adlaire-evidence-list' \
  'data-adlaire-evidence-select' \
  'adlaire-filing-deadline-tracker' \
  'adlaire-review-privilege-badge' \
  'adlaire-counsel-task-list' \
  'adlaire-support-inbox' \
  'adlaire-ticket-priority-board' \
  'data-adlaire-ticket-priority-select' \
  'adlaire-sla-breach-card' \
  'adlaire-agent-status-panel' \
  'adlaire-customer-sentiment-card' \
  'adlaire-escalation-path' \
  'adlaire-campaign-card' \
  'adlaire-audience-segment-panel' \
  'adlaire-content-calendar' \
  'adlaire-experiment-card' \
  'adlaire-funnel-stage-board' \
  'adlaire-attribution-summary' \
  'adlaire-health-score-panel' \
  'adlaire-renewal-risk-card' \
  'adlaire-onboarding-plan' \
  'adlaire-success-playbook' \
  'data-adlaire-success-playbook-check' \
  'adlaire-qbr-summary' \
  'adlaire-adoption-metric-grid' \
  'adlaire-survey-result-card' \
  'adlaire-feedback-inbox' \
  'adlaire-insight-cluster' \
  'adlaire-user-interview-note' \
  'adlaire-feature-request-board' \
  'adlaire-nps-trend' \
  'adlaire-report-builder' \
  'adlaire-dashboard-tile' \
  'adlaire-report-parameter-bar' \
  'data-adlaire-report-parameter-select' \
  'adlaire-pivot-table' \
  'adlaire-export-job-card' \
  'adlaire-scheduled-report-list' \
  'adlaire-message-composer' \
  'adlaire-channel-list' \
  'data-adlaire-channel-select' \
  'adlaire-conversation-preview' \
  'adlaire-message-delivery-state' \
  'adlaire-mention-picker' \
  'adlaire-unread-marker' \
  'adlaire-notification-center' \
  'adlaire-notification-rule-card' \
  'adlaire-delivery-channel-row' \
  'adlaire-notification-template-card' \
  'adlaire-quiet-hours-panel' \
  'data-adlaire-quiet-hours-toggle' \
  'adlaire-digest-schedule' \
  'adlaire-broadcast-banner' \
  'adlaire-announcement-composer' \
  'adlaire-audience-targeting-panel' \
  'adlaire-publish-queue' \
  'adlaire-delivery-report-card' \
  'adlaire-acknowledgement-tracker' \
  'adlaire-inbox-triage-board' \
  'adlaire-inbox-assignment-row' \
  'adlaire-response-timer-card' \
  'adlaire-canned-reply-panel' \
  'adlaire-follow-up-reminder' \
  'adlaire-resolution-summary' \
  'adlaire-subscription-plan-row' \
  'adlaire-topic-preference-list' \
  'data-adlaire-topic-preference-toggle' \
  'adlaire-opt-in-card' \
  'adlaire-consent-channel-matrix' \
  'adlaire-unsubscribe-reason-panel' \
  'adlaire-preference-audit-row' \
  'adlaire-editorial-calendar' \
  'adlaire-content-brief-card' \
  'adlaire-draft-status-board' \
  'adlaire-editor-assignment-row' \
  'adlaire-review-gate-panel' \
  'data-adlaire-editorial-gate-select' \
  'adlaire-publish-readiness-card' \
  'adlaire-media-library-panel' \
  'adlaire-asset-rights-card' \
  'adlaire-usage-license-badge' \
  'adlaire-rendition-list' \
  'adlaire-asset-approval-queue' \
  'adlaire-metadata-completeness-meter' \
  'adlaire-locale-switcher-panel' \
  'data-adlaire-locale-select' \
  'adlaire-translation-queue' \
  'adlaire-translation-memory-card' \
  'adlaire-locale-coverage-matrix' \
  'adlaire-missing-string-list' \
  'adlaire-glossary-term-card' \
  'adlaire-seo-checklist' \
  'adlaire-search-preview-card' \
  'adlaire-metadata-editor-panel' \
  'adlaire-keyword-cluster' \
  'adlaire-canonical-url-card' \
  'adlaire-crawl-status-row' \
  'adlaire-moderation-queue' \
  'adlaire-flagged-content-card' \
  'adlaire-moderation-decision-row' \
  'data-adlaire-moderation-decision' \
  'adlaire-report-reason-panel' \
  'adlaire-user-trust-score' \
  'adlaire-appeal-status-tracker' \
  'adlaire-device-card' \
  'adlaire-device-registry-table' \
  'data-adlaire-device-select' \
  'adlaire-enrollment-panel' \
  'adlaire-device-health-tile' \
  'adlaire-firmware-version-badge' \
  'adlaire-remote-command-queue' \
  'adlaire-edge-node-card' \
  'adlaire-sync-status-panel' \
  'adlaire-offline-queue' \
  'adlaire-bandwidth-usage-meter' \
  'adlaire-deployment-ring-selector' \
  'data-adlaire-deployment-ring-select' \
  'adlaire-rollback-checkpoint-card' \
  'adlaire-telemetry-stream' \
  'adlaire-sensor-reading-card' \
  'adlaire-threshold-rule-panel' \
  'adlaire-alert-event-list' \
  'adlaire-calibration-record-row' \
  'adlaire-signal-quality-indicator' \
  'adlaire-kiosk-status-board' \
  'adlaire-terminal-session-card' \
  'adlaire-cash-drawer-status' \
  'adlaire-receipt-printer-panel' \
  'adlaire-checkout-lane-row' \
  'adlaire-store-device-map' \
  'adlaire-mobile-device-assignment' \
  'adlaire-app-version-compliance' \
  'adlaire-battery-status-row' \
  'adlaire-location-ping-timeline' \
  'adlaire-lost-mode-banner' \
  'adlaire-device-handoff-checklist' \
  'data-adlaire-handoff-check' \
  'adlaire-itinerary-card' \
  'adlaire-traveler-profile-row' \
  'adlaire-fare-option-card' \
  'data-adlaire-fare-option-select' \
  'adlaire-booking-summary-panel' \
  'adlaire-trip-status-timeline' \
  'adlaire-disruption-alert-card' \
  'adlaire-room-inventory-board' \
  'data-adlaire-room-select' \
  'adlaire-reservation-card' \
  'adlaire-guest-folio-panel' \
  'adlaire-housekeeping-task-row' \
  'adlaire-amenity-request-queue' \
  'adlaire-check-in-readiness-card' \
  'adlaire-event-schedule-board' \
  'adlaire-session-card' \
  'adlaire-speaker-profile-card' \
  'adlaire-attendee-check-in-row' \
  'adlaire-badge-print-queue' \
  'adlaire-capacity-warning-panel' \
  'adlaire-venue-map-panel' \
  'adlaire-seating-section-card' \
  'adlaire-seat-hold-row' \
  'adlaire-access-pass-card' \
  'adlaire-gate-status-board' \
  'adlaire-crowd-flow-meter' \
  'adlaire-incident-guest-card' \
  'adlaire-compensation-option-list' \
  'adlaire-recovery-task-board' \
  'data-adlaire-recovery-task-check' \
  'adlaire-refund-status-row' \
  'adlaire-service-note-panel' \
  'adlaire-satisfaction-follow-up-card' \
  'adlaire-service-application-card' \
  'adlaire-eligibility-checklist' \
  'data-adlaire-eligibility-check' \
  'adlaire-appointment-slot-row' \
  'adlaire-case-status-timeline' \
  'adlaire-public-notice-banner' \
  'adlaire-service-counter-queue' \
  'adlaire-permit-application-panel' \
  'adlaire-license-status-card' \
  'adlaire-document-requirement-list' \
  'data-adlaire-permit-step-select' \
  'adlaire-inspection-schedule-row' \
  'adlaire-compliance-finding-card' \
  'adlaire-renewal-reminder-panel' \
  'adlaire-grant-program-card' \
  'adlaire-aid-eligibility-summary' \
  'adlaire-application-review-board' \
  'adlaire-funding-allocation-row' \
  'adlaire-disbursement-status-card' \
  'adlaire-beneficiary-profile-panel' \
  'adlaire-donation-campaign-card' \
  'adlaire-volunteer-shift-board' \
  'data-adlaire-volunteer-shift-select' \
  'adlaire-impact-metric-tile' \
  'adlaire-pledge-tracker-row' \
  'adlaire-outreach-list' \
  'adlaire-donor-acknowledgement-card' \
  'adlaire-incident-command-panel' \
  'adlaire-resource-request-card' \
  'adlaire-shelter-status-board' \
  'adlaire-alert-broadcast-row' \
  'adlaire-response-team-roster' \
  'adlaire-recovery-milestone-card' \
  'adlaire-energy-usage-card' \
  'adlaire-demand-response-panel' \
  'data-adlaire-demand-response-select' \
  'adlaire-load-forecast-card' \
  'adlaire-grid-event-timeline' \
  'adlaire-generation-mix-card' \
  'adlaire-energy-contract-summary' \
  'adlaire-utility-account-card' \
  'adlaire-meter-reading-row' \
  'adlaire-outage-report-card' \
  'data-adlaire-outage-report-select' \
  'adlaire-service-appointment-board' \
  'adlaire-consumption-alert-banner' \
  'adlaire-payment-assistance-panel' \
  'adlaire-water-quality-panel' \
  'adlaire-leak-alert-card' \
  'adlaire-maintenance-route-row' \
  'adlaire-waste-pickup-schedule' \
  'adlaire-treatment-plant-status' \
  'adlaire-compliance-sample-log' \
  'adlaire-carbon-footprint-tile' \
  'adlaire-emissions-ledger-row' \
  'adlaire-offset-portfolio-card' \
  'adlaire-sustainability-target-tracker' \
  'adlaire-disclosure-checklist' \
  'data-adlaire-disclosure-check' \
  'adlaire-audit-evidence-panel' \
  'adlaire-monitoring-station-card' \
  'adlaire-sensor-threshold-board' \
  'adlaire-field-inspection-checklist' \
  'adlaire-sample-collection-row' \
  'adlaire-incident-map-panel' \
  'adlaire-remediation-task-list' \
  'adlaire-section-header' \
  'adlaire-section-action-bar' \
  'adlaire-content-group' \
  'adlaire-summary-rail' \
  'adlaire-detail-header' \
  'adlaire-inline-toolbar' \
  'adlaire-status-badge-group' \
  'adlaire-severity-marker' \
  'adlaire-validation-summary-card' \
  'adlaire-stale-data-banner' \
  'adlaire-sync-indicator-row' \
  'adlaire-retry-action-panel' \
  'adlaire-selection-counter-bar' \
  'adlaire-bulk-action-tray' \
  'adlaire-selectable-list-row' \
  'data-adlaire-bulk-selection-toggle' \
  'adlaire-compare-selection-card' \
  'adlaire-range-selection-panel' \
  'adlaire-batch-progress-list' \
  'adlaire-source-citation-row' \
  'adlaire-confidence-score-card' \
  'adlaire-freshness-badge' \
  'adlaire-audit-trail-card' \
  'adlaire-provenance-panel' \
  'adlaire-verification-checklist' \
  'data-adlaire-verification-check' \
  'adlaire-density-switcher' \
  'data-adlaire-density-select' \
  'adlaire-responsive-stack-panel' \
  'adlaire-mobile-overflow-bar' \
  'adlaire-sticky-action-footer' \
  'adlaire-viewport-notice' \
  'adlaire-print-layout-panel' \
  'adlaire-query-bar' \
  'adlaire-saved-filter-bar' \
  'adlaire-active-filter-chips' \
  'adlaire-facet-panel' \
  'adlaire-sort-control' \
  'adlaire-column-visibility-panel' \
  'adlaire-column-pin-rail' \
  'adlaire-row-action-menu' \
  'adlaire-record-list' \
  'adlaire-record-row' \
  'data-adlaire-record-row-toggle' \
  'adlaire-record-detail-preview' \
  'adlaire-record-expansion-panel' \
  'adlaire-inline-edit-field' \
  'data-adlaire-inline-edit-toggle' \
  'adlaire-edit-conflict-banner' \
  'adlaire-change-summary-card' \
  'adlaire-undo-action-banner' \
  'adlaire-import-job-card' \
  'adlaire-export-job-card' \
  'adlaire-sync-queue-panel' \
  'adlaire-data-quality-score' \
  'adlaire-duplicate-warning-card' \
  'adlaire-merge-suggestion-panel' \
  'adlaire-bulk-confirmation-panel' \
  'data-adlaire-bulk-confirm-toggle' \
  'adlaire-bulk-result-summary' \
  'adlaire-selection-scope-notice' \
  'adlaire-table-footer-summary' \
  'adlaire-pagination-status' \
  'adlaire-view-preset-switcher' \
  'data-adlaire-saved-view-select' \
  'adlaire-saved-view-card' \
  'adlaire-record-audit-summary' \
  'adlaire-agent-run-card' \
  'adlaire-agent-task-list' \
  'adlaire-automation-trigger-card' \
  'adlaire-run-status-rail' \
  'adlaire-tool-call-row' \
  'adlaire-tool-permission-card' \
  'data-adlaire-tool-permission-toggle' \
  'adlaire-approval-gate-panel' \
  'data-adlaire-approval-gate-toggle' \
  'adlaire-human-review-card' \
  'adlaire-execution-timeline' \
  'adlaire-checkpoint-card' \
  'data-adlaire-checkpoint-select' \
  'adlaire-retry-checkpoint-panel' \
  'adlaire-handoff-card' \
  'adlaire-context-attachment-tray' \
  'adlaire-context-source-list' \
  'adlaire-memory-note-card' \
  'adlaire-instruction-stack' \
  'adlaire-prompt-composer-panel' \
  'adlaire-model-setting-row' \
  'adlaire-reasoning-meter' \
  'adlaire-token-budget-meter' \
  'adlaire-artifact-preview-card' \
  'adlaire-artifact-diff-panel' \
  'adlaire-output-validation-card' \
  'adlaire-guardrail-result-row' \
  'adlaire-failure-diagnosis-panel' \
  'adlaire-recovery-action-list' \
  'adlaire-schedule-run-card' \
  'adlaire-recurring-automation-row' \
  'adlaire-notification-policy-card' \
  'data-adlaire-notification-policy-toggle' \
  'adlaire-run-summary-panel' \
  'adlaire-api-explorer-panel' \
  'adlaire-endpoint-card' \
  'adlaire-request-builder' \
  'adlaire-response-preview' \
  'adlaire-schema-reference-panel' \
  'adlaire-sdk-selector' \
  'data-adlaire-sdk-select' \
  'adlaire-code-sample-card' \
  'adlaire-webhook-endpoint-card' \
  'adlaire-webhook-event-row' \
  'adlaire-webhook-delivery-log' \
  'adlaire-integration-setup-checklist' \
  'adlaire-oauth-consent-panel' \
  'adlaire-api-key-rotation-card' \
  'adlaire-secret-rotation-panel' \
  'adlaire-rate-limit-meter' \
  'adlaire-quota-usage-card' \
  'adlaire-sandbox-environment-card' \
  'data-adlaire-environment-select' \
  'adlaire-production-readiness-checklist' \
  'adlaire-integration-health-panel' \
  'adlaire-dependency-status-row' \
  'adlaire-connection-test-card' \
  'data-adlaire-connection-test-toggle' \
  'adlaire-payload-inspector' \
  'adlaire-event-replay-panel' \
  'adlaire-version-compatibility-badge' \
  'adlaire-breaking-change-notice' \
  'adlaire-deprecation-timeline' \
  'adlaire-migration-step-list' \
  'data-adlaire-migration-step-toggle' \
  'adlaire-developer-note-card' \
  'adlaire-changelog-entry-card' \
  'adlaire-support-escalation-card' \
  'adlaire-theme-workspace-panel' \
  'data-adlaire-theme-select' \
  'adlaire-brand-kit-card' \
  'adlaire-palette-editor' \
  'adlaire-color-ramp-row' \
  'adlaire-semantic-color-mapping' \
  'adlaire-contrast-check-card' \
  'adlaire-typography-scale-panel' \
  'adlaire-font-pairing-card' \
  'adlaire-spacing-scale-preview' \
  'adlaire-radius-scale-preview' \
  'adlaire-shadow-elevation-panel' \
  'adlaire-motion-preset-card' \
  'adlaire-density-preset-card' \
  'adlaire-theme-preview-frame' \
  'adlaire-surface-preview-grid' \
  'adlaire-dark-mode-switcher' \
  'data-adlaire-dark-mode-toggle' \
  'adlaire-high-contrast-preview' \
  'data-adlaire-high-contrast-toggle' \
  'adlaire-brand-asset-usage-card' \
  'adlaire-logo-placement-guide' \
  'adlaire-icon-style-selector' \
  'adlaire-tone-of-voice-card' \
  'adlaire-copy-pattern-panel' \
  'adlaire-accessibility-score-card' \
  'adlaire-contrast-issue-row' \
  'adlaire-token-override-panel' \
  'data-adlaire-token-override-toggle' \
  'adlaire-token-diff-card' \
  'adlaire-theme-export-panel' \
  'adlaire-theme-import-card' \
  'adlaire-brand-compliance-checklist' \
  'adlaire-theme-publish-summary' \
  'adlaire-product-card' \
  'adlaire-plan-selector' \
  'adlaire-billing-summary' \
  'adlaire-invoice-list' \
  'adlaire-account-profile' \
  'adlaire-member-list' \
  'adlaire-role-matrix' \
  'adlaire-support-ticket' \
  'adlaire-support-conversation' \
  'adlaire-analytics-panel' \
  'adlaire-report-card' \
  'adlaire-workflow-builder' \
  'adlaire-integration-card' \
  'adlaire-api-key-list' \
  'adlaire-trust-center' \
  'adlaire-compliance-evidence' \
  'adlaire-commerce-cart' \
  'adlaire-checkout-summary' \
  'adlaire-order-card' \
  'adlaire-order-timeline' \
  'adlaire-product-grid' \
  'adlaire-product-tile' \
  'adlaire-sku-list' \
  'adlaire-inventory-panel' \
  'adlaire-price-rule-card' \
  'adlaire-coupon-list' \
  'adlaire-marketplace-listing' \
  'adlaire-seller-card' \
  'adlaire-review-summary' \
  'adlaire-shipping-tracker' \
  'adlaire-return-request' \
  'adlaire-dispute-panel' \
  'adlaire-dataset-card' \
  'adlaire-schema-table' \
  'adlaire-query-console' \
  'adlaire-pipeline-board' \
  'adlaire-job-run-card' \
  'adlaire-run-queue' \
  'adlaire-worker-pool' \
  'adlaire-model-card' \
  'adlaire-prompt-panel' \
  'adlaire-eval-summary' \
  'adlaire-score-breakdown' \
  'adlaire-vector-index' \
  'adlaire-guardrail-panel' \
  'adlaire-drift-monitor' \
  'adlaire-anomaly-list' \
  'adlaire-data-access-panel' \
  'adlaire-collaborator-list' \
  'adlaire-presence-stack' \
  'adlaire-review-request-card' \
  'adlaire-review-decision' \
  'adlaire-change-request-list' \
  'adlaire-comment-thread' \
  'adlaire-annotation-card' \
  'adlaire-suggestion-panel' \
  'adlaire-version-history' \
  'adlaire-diff-summary' \
  'adlaire-task-board' \
  'adlaire-checklist-panel' \
  'adlaire-notification-digest' \
  'adlaire-escalation-banner' \
  'adlaire-meeting-notes' \
  'adlaire-signoff-panel' \
  'adlaire-workflow-runner' \
  'adlaire-automation-rule-card' \
  'adlaire-trigger-list' \
  'adlaire-condition-builder' \
  'adlaire-action-chain' \
  'adlaire-schedule-panel' \
  'adlaire-policy-card' \
  'adlaire-compliance-checklist' \
  'adlaire-evidence-locker' \
  'adlaire-approval-route' \
  'adlaire-access-review-panel' \
  'adlaire-risk-banner' \
  'adlaire-audit-event-stream' \
  'adlaire-retention-policy-panel' \
  'adlaire-incident-summary' \
  'adlaire-control-status-grid' \
  'adlaire-health-overview' \
  'adlaire-service-status-card' \
  'adlaire-uptime-panel' \
  'adlaire-log-stream' \
  'adlaire-log-event-row' \
  'adlaire-trace-timeline' \
  'adlaire-span-detail' \
  'adlaire-metric-threshold-card' \
  'adlaire-alert-rule-card' \
  'adlaire-alert-incident-list' \
  'adlaire-error-rate-panel' \
  'adlaire-latency-distribution' \
  'adlaire-dependency-map' \
  'adlaire-slo-summary' \
  'adlaire-diagnostic-run-card' \
  'adlaire-remediation-panel' \
  'adlaire-onboarding-flow' \
  'adlaire-onboarding-step-card' \
  'adlaire-tour-callout' \
  'adlaire-guided-task-list' \
  'adlaire-help-center-panel' \
  'adlaire-help-article-card' \
  'adlaire-search-result-list' \
  'adlaire-search-result-item' \
  'adlaire-recent-item-list' \
  'adlaire-recommendation-panel' \
  'adlaire-personalization-card' \
  'adlaire-preference-panel' \
  'adlaire-notification-preference-list' \
  'adlaire-language-selector-panel' \
  'adlaire-keyboard-shortcut-panel' \
  'adlaire-release-highlight' \
  'adlaire-admin-incident-panel' \
  'adlaire-admin-maintenance-window' \
  'adlaire-admin-secret-panel' \
  'adlaire-admin-risk-signal' \
  'adlaire-admin-mobile-scroll' \
  'adlaire-admin-mobile-actions' \
  'adlaire-admin-mobile-collapse' \
  'adlaire-wysiwyg-slash-menu' \
  'adlaire-wysiwyg-suggestion-card' \
  'adlaire-wysiwyg-save-banner' \
  'adlaire-wysiwyg-disabled' \
  'adlaire-wysiwyg-warning' \
  'adlaire-wysiwyg-comment' \
  'adlaire-wysiwyg-reorder' \
  'adlaire-wysiwyg-publish-check' \
  'adlaire-wysiwyg-lock-banner' \
  'data-adlaire-toast-dismiss' \
  'data-sample-toggle-hidden' \
  'data-sample-toggle-class' \
  'data-sample-cycle-text' \
  'data-sample-state-output' \
  'data-sample-cycle-progress' \
  'data-sample-progress-meter' \
  'role="dialog"' \
  'aria-modal='; do
  require_text "Samples/design/index.html" "$sample_class" "Sample coverage"
done

for a11y_contract in \
  'Samples/design/index.html|aria-labelledby="sample-dialog-title"' \
  'Samples/design/index.html|aria-label="Close dialog"' \
  'Samples/design/index.html|aria-label="Close drawer"' \
  'Samples/design/index.html|aria-label="Popover sample"' \
  'Samples/design/index.html|aria-hidden="true"' \
  'Samples/design/index.html|aria-current="step"' \
  'Samples/design/index.html|adlaire-wysiwyg-readonly' \
  'Samples/design/index.html|adlaire-wysiwyg-locked' \
  'Samples/design/index.html|adlaire-wysiwyg-a11y-panel' \
  'TypeScript/UI/components.ts|containFocus' \
  'TypeScript/UI/components.ts|componentKeyBinding("Escape", closeOpenSurfaces)' \
  'TypeScript/UI/components.ts|closeOpenSurfaces' \
  'TypeScript/UI/components.ts|data-adlaire-dismiss' \
  'TypeScript/UI/components.ts|aria-expanded' \
  'TypeScript/UI/components.ts|aria-pressed' \
  'UI/components.js|containFocus' \
  'UI/components.js|componentKeyBinding("Escape", closeOpenSurfaces)' \
  'UI/components.js|closeOpenSurfaces' \
  'UI/components.js|data-adlaire-dismiss' \
  'UI/components.js|aria-expanded' \
  'UI/components.js|aria-pressed'; do
  file=${a11y_contract%%|*}
  text=${a11y_contract#*|}
  require_text "$file" "$text" "Accessibility contract"
done

for sample_term in \
  'Layout System v2' \
  'operational feedback' \
  'slash menu' \
  'overlay visibility' \
  'progress value changes' \
  'save/lock/suggestion states'; do
  require_text "Samples/README.md" "$sample_term" "Sample governance"
done

for matrix_term in \
  'Layout System v2' \
  'Interaction readiness' \
  'Form and data UI' \
  'Advanced Input and Design-System UI' \
  'Workspace Command and Productivity UI' \
  'Business Operations UI' \
  'Enterprise Domain UI' \
  'Strategic Operations UI' \
  'Industry Operations UI' \
  'Customer Growth / Support Operations UI' \
  'Communication / Notification Operations UI' \
  'Content Publishing / Localization Operations UI' \
  'Device / Fleet / Edge Operations UI' \
  'Travel / Hospitality / Event Operations UI' \
  'Public / Civic / Nonprofit Operations UI' \
  'Energy / Utilities / Sustainability Operations UI' \
  'Component Quality / Composition UI' \
  'Data Workbench / Record Operations UI' \
  'Agent / Automation Workbench UI' \
  'Developer Platform / Integration Operations UI' \
  'Theme / Brand Customization UI' \
  'WYSIWYG Editor UI' \
  'Editor runtime' \
  'Representative Subcontracts' \
  'layout frame, public layout, master-detail layout' \
  'dialog, drawer, popover, toast' \
  'filter input, filter chip, file input' \
  'combobox, multi-select, segmented control, radio card group, switch group, token input' \
  'tab workspace, dock panel, status bar' \
  'agenda view, time slot grid, resource calendar' \
  'budget panel, expense card, purchase request' \
  'objective card, key result tracker, initiative map' \
  'shipment tracker, warehouse bin card, inventory movement row' \
  'support inbox, ticket priority board, SLA breach card' \
  'message composer, channel list, conversation preview' \
  'editorial calendar, content brief card, draft status board' \
  'device card, device registry table, enrollment panel' \
  'itinerary card, traveler profile row, fare option card' \
  'service application card, eligibility checklist, appointment slot row' \
  'energy usage card, demand response panel, load forecast card' \
  'section header, section action bar, content group' \
  'query bar, saved filter bar, active filter chips' \
  'agent run card, agent task list, automation trigger card' \
  'api explorer panel, endpoint card, request builder' \
  'theme workspace panel, brand kit card, palette editor' \
  'slash menu, suggestion card, save banner' \
  'command, document, selection, history' \
  'color, typography, spacing, layout' \
  'generated token CSS' \
  'accessibility hooks' \
  'minimum review granularity' \
  'New component families require a matrix row'; do
  require_text "Docs/Component_Contract_Matrix" "$matrix_term" "Component Contract Matrix"
done

for component_contract_term in \
  'export interface ComponentContract' \
  'export type ComponentContractReviewSurface' \
  'export type ComponentContractReviewTier' \
  'export interface ComponentContractCoverageGap' \
  'export const COMPONENT_CONTRACT_REQUIRED_COVERAGE' \
  'export const COMPONENT_CONTRACTS' \
  'generatedCss' \
  'generatedBehavior' \
  'ariaRequirements' \
  'stateAttributes' \
  'requiredIcons' \
  'sampleSection' \
  'responsiveModes' \
  'layout-system-core' \
  'content-interaction-core' \
  'admin-operations-core' \
  'data-workbench-core' \
  'business-operations-core' \
  'enterprise-domain-core' \
  'strategic-operations-core' \
  'industry-operations-core' \
  'customer-growth-support-core' \
  'communication-notification-core' \
  'content-publishing-localization-core' \
  'device-fleet-edge-core' \
  'travel-hospitality-event-core' \
  'public-civic-nonprofit-core' \
  'energy-utilities-sustainability-core' \
  'component-quality-composition-core' \
  'agent-automation-workbench-core' \
  'data-ai-operations-core' \
  'experience-guidance-core' \
  'workspace-command-core' \
  'form-input-core' \
  'overlay-feedback-core' \
  'github-platform-core' \
  'developer-platform-core' \
  'theme-brand-core' \
  'cloud-infrastructure-core' \
  'collaboration-review-core' \
  'product-commerce-core' \
  'observability-diagnostics-core' \
  'workflow-governance-core' \
  'wysiwyg-editor-ui-core' \
  'export type ComponentContractOwner' \
  'export type ComponentContractDepth' \
  'export type ComponentContractRisk' \
  'export type ComponentContractLifecycle' \
  'export interface ComponentContractGovernanceRecord' \
  'export interface ComponentContractAccessibilityRecord' \
  'componentContractIds' \
  'componentContractsByArea' \
  'componentContractReviewSurface' \
  'componentContractReviewTier' \
  'componentContractOwner' \
  'componentContractDepth' \
  'componentContractRisk' \
  'componentContractLifecycle' \
  'componentContractCoverageGaps' \
  'componentContractsRequiringBehavior' \
  'componentContractGovernanceRecords' \
  'componentContractPlatformSupport' \
  'componentContractAccessibilityRecords' \
  'componentContractRequiredClasses' \
  'componentContractHooks' \
  'componentContractAriaRequirements' \
  'componentContractStateAttributes' \
  'componentContractRequiredIcons' \
  'componentContractSampleSections' \
  'componentContractResponsiveModes'; do
  require_text "TypeScript/UI/component-contracts.ts" "$component_contract_term" "UI component contract metadata"
done

for component_contract_matrix_term in \
  'TypeScript/UI/component-contracts.ts' \
  'UI component contract metadata' \
  'layout-system-core' \
  'content-interaction-core' \
  'admin-operations-core' \
  'data-workbench-core' \
  'business-operations-core' \
  'enterprise-domain-core' \
  'strategic-operations-core' \
  'industry-operations-core' \
  'customer-growth-support-core' \
  'communication-notification-core' \
  'content-publishing-localization-core' \
  'device-fleet-edge-core' \
  'travel-hospitality-event-core' \
  'public-civic-nonprofit-core' \
  'energy-utilities-sustainability-core' \
  'component-quality-composition-core' \
  'agent-automation-workbench-core' \
  'data-ai-operations-core' \
  'experience-guidance-core' \
  'workspace-command-core' \
  'form-input-core' \
  'overlay-feedback-core' \
  'github-platform-core' \
  'developer-platform-core' \
  'theme-brand-core' \
  'cloud-infrastructure-core' \
  'collaboration-review-core' \
  'product-commerce-core' \
  'observability-diagnostics-core' \
  'workflow-governance-core' \
  'wysiwyg-editor-ui-core' \
  'TypeScript/UI/interaction-contracts.ts' \
  'UI interaction contract metadata' \
  'review surface' \
  'review tier' \
  'contract owner' \
  'contract depth' \
  'contract risk' \
  'contract lifecycle' \
  'platform support' \
  'accessibility records' \
  'behavior-required contracts' \
  'required coverage gaps' \
  'generated parity' \
  'input modality' \
  'audit records' \
  'fallback policies' \
  'state scopes' \
  'queryInteractionRoot'; do
  require_text "Docs/Component_Contract_Matrix" "$component_contract_matrix_term" "UI component contract metadata"
done

require_text "Docs/Document_Index" "TypeScript/UI/component-contracts.ts" "UI component contract metadata"
require_text "Docs/Document_Index" "TypeScript/UI/interaction-contracts.ts" "UI interaction contract metadata"

for interaction_contract_term in \
  'export type UIInteractionSamplePolicy' \
  'export type UIInteractionFallbackPolicy' \
  'export type UIInteractionStateScope' \
  'export type UIInteractionInputModality' \
  'export interface UIInteractionContract' \
  'export interface UIInteractionAuditRecord' \
  'export const UI_INTERACTION_PRIMITIVES' \
  'export const UI_INTERACTION_CONTRACTS' \
  'uiInteractionHooks' \
  'uiInteractionContractsByEvent' \
  'uiInteractionHooksBySurface' \
  'uiInteractionSampleRequiredHooks' \
  'uiInteractionGeneratedTargets' \
  'uiInteractionStateAttributes' \
  'uiInteractionFallbackPolicy' \
  'uiInteractionStateScope' \
  'uiInteractionInputModality' \
  'uiInteractionFallbackPolicies' \
  'uiInteractionStateScopes' \
  'uiInteractionInputModalities' \
  'uiInteractionAuditRecords' \
  'data-adlaire-toggle' \
  'data-adlaire-dismiss' \
  'data-adlaire-tab' \
  'data-adlaire-sidebar-toggle' \
  'data-adlaire-pipeline-stage-select' \
  'data-adlaire-filter-input' \
  'data-adlaire-segmented-option' \
  'data-adlaire-radio-card' \
  'data-adlaire-switch-item' \
  'data-adlaire-range-input' \
  'data-adlaire-stepper-action' \
  'data-adlaire-token-add' \
  'data-adlaire-token-remove' \
  'data-adlaire-column-toggle' \
  'data-adlaire-page-select' \
  'data-adlaire-saved-view-apply' \
  'data-adlaire-code-copy' \
  'data-adlaire-toc-link' \
  'data-adlaire-wysiwyg-mode' \
  'data-adlaire-wysiwyg-toolbar-group' \
  'data-adlaire-wysiwyg-slash-item' \
  'data-adlaire-wysiwyg-suggestion' \
  'eventSourceElement' \
  'hookSelector' \
  'closestBoundTrigger' \
  'queryInteractionRoot' \
  'isDisabledInteraction' \
  'isNativeInteractive' \
  'setBooleanAttribute' \
  'setOpenState' \
  'setOptionalText' \
  'safeDocumentQuery' \
  'safeDocumentQueryAll' \
  'safeScopedQuery' \
  'safeScopedQueryAll' \
  'writeClipboardText'; do
  require_text "TypeScript/UI/interaction-contracts.ts" "$interaction_contract_term" "UI interaction contract metadata"
done

ROOT="$ROOT" ruby <<'RUBY'
root = ENV.fetch("ROOT")
source = File.read(File.join(root, "TypeScript/UI/component-contracts.ts"))

matrix = File.read(File.join(root, "Docs/Component_Contract_Matrix"))

def read_contract_file(root, path, context)
  full_path = File.join(root, path)
  abort("[UI component contract metadata] #{context} missing file: #{path}") unless File.file?(full_path)
  File.read(full_path)
end

def decode_contract_string_literal(value)
  value.gsub(/\\(["\\])/) { Regexp.last_match(1) }
end

def contract_string(body, field)
  match = body.match(/^\s*#{Regexp.escape(field)}: "([^"]+)",?$/)
  abort("[UI component contract metadata] contract missing #{field}") unless match
  decode_contract_string_literal(match[1])
end

def contract_array(body, field)
  match = body.match(/^\s*#{Regexp.escape(field)}: \[(.*?)\],/m)
  abort("[UI component contract metadata] contract missing #{field}") unless match
  match[1].scan(/"((?:\\.|[^"\\])*)"/).flatten.map { |value| decode_contract_string_literal(value) }
end

allowed_responsive_modes = %w[desktop tablet mobile reduced-motion print touch]
contract_blocks = source.scan(/^  \{\n(.*?)^  \},?/m).flatten
abort("[UI component contract metadata] COMPONENT_CONTRACTS must contain representative contracts.") if contract_blocks.empty?

contracts = contract_blocks.map do |body|
  {
    id: contract_string(body, "id"),
    catalog: contract_string(body, "catalog"),
    css_sources: contract_array(body, "cssSources"),
    generated_css: contract_array(body, "generatedCss"),
    behavior_sources: contract_array(body, "behaviorSources"),
    generated_behavior: contract_array(body, "generatedBehavior"),
    sample: contract_string(body, "sample"),
    required_classes: contract_array(body, "requiredClasses"),
    hooks: contract_array(body, "hooks"),
    aria_requirements: contract_array(body, "ariaRequirements"),
    state_attributes: contract_array(body, "stateAttributes"),
    required_icons: contract_array(body, "requiredIcons"),
    sample_section: contract_string(body, "sampleSection"),
    responsive_modes: contract_array(body, "responsiveModes"),
    check_coverage: contract_array(body, "checkCoverage"),
  }
end

required_coverage_match = source.match(/COMPONENT_CONTRACT_REQUIRED_COVERAGE:[^\[]+\[(.*?)\]\s+as const;/m)
abort("[UI component contract metadata] COMPONENT_CONTRACT_REQUIRED_COVERAGE missing.") unless required_coverage_match
required_coverage = required_coverage_match[1].scan(/"([^"]+)"/).flatten
abort("[UI component contract metadata] COMPONENT_CONTRACT_REQUIRED_COVERAGE must include catalog and sample.") unless (required_coverage & %w[catalog sample]).sort == %w[catalog sample]

contract_counts = Hash.new(0)
contracts.each { |contract| contract_counts[contract.fetch(:id)] += 1 }
duplicate_contract_ids = contract_counts.select { |_id, count| count > 1 }.keys
abort("[UI component contract metadata] duplicate contract ids: #{duplicate_contract_ids.join(", ")}") unless duplicate_contract_ids.empty?

contracts.each do |contract|
  id = contract.fetch(:id)
  abort("[UI component contract metadata] Component_Contract_Matrix missing #{id}") unless matrix.include?(id)
  abort("[UI component contract metadata] #{id} must define check coverage.") if contract.fetch(:check_coverage).empty?
  missing_required_coverage = required_coverage.reject { |coverage| contract.fetch(:check_coverage).include?(coverage) }
  abort("[UI component contract metadata] #{id} missing required coverage: #{missing_required_coverage.join(", ")}") unless missing_required_coverage.empty?

  catalog = read_contract_file(root, contract.fetch(:catalog), "#{id} catalog")
  sample = read_contract_file(root, contract.fetch(:sample), "#{id} sample")
  contract.fetch(:css_sources).each { |path| read_contract_file(root, path, "#{id} CSS source") }
  contract.fetch(:behavior_sources).each { |path| read_contract_file(root, path, "#{id} behavior source") }

  css_outputs = contract.fetch(:generated_css).map do |path|
    [path, read_contract_file(root, path, "#{id} generated CSS")]
  end
  behavior_sources = contract.fetch(:behavior_sources).map do |path|
    [path, read_contract_file(root, path, "#{id} behavior source")]
  end
  behavior_outputs = contract.fetch(:generated_behavior).map do |path|
    [path, read_contract_file(root, path, "#{id} generated behavior")]
  end
  contract_texts = [sample] + css_outputs.map { |_path, text| text } + behavior_sources.map { |_path, text| text } + behavior_outputs.map { |_path, text| text }

  missing_catalog = contract.fetch(:required_classes).reject { |klass| catalog.include?("`#{klass}`") }
  abort("[UI component contract metadata] #{id} catalog missing classes: #{missing_catalog.join(", ")}") unless missing_catalog.empty?

  missing_css = contract.fetch(:required_classes).reject do |klass|
    css_outputs.any? { |_path, text| text.include?(klass) }
  end
  abort("[UI component contract metadata] #{id} generated CSS missing classes: #{missing_css.join(", ")}") unless missing_css.empty?

  missing_sample = contract.fetch(:required_classes).reject { |klass| sample.include?(klass.delete_prefix(".")) }
  abort("[UI component contract metadata] #{id} sample missing classes: #{missing_sample.join(", ")}") unless missing_sample.empty?

  sample_section = contract.fetch(:sample_section)
  abort("[UI component contract metadata] #{id} sampleSection must not be empty.") if sample_section.empty?
  abort("[UI component contract metadata] #{id} sample missing section id: #{sample_section}") unless sample.include?(%Q(id="#{sample_section}"))

  aria_requirements = contract.fetch(:aria_requirements)
  abort("[UI component contract metadata] #{id} must define aria requirements.") if aria_requirements.empty?
  missing_aria = aria_requirements.reject { |snippet| sample.include?(snippet) }
  abort("[UI component contract metadata] #{id} sample missing aria requirements: #{missing_aria.join(", ")}") unless missing_aria.empty?

  state_attributes = contract.fetch(:state_attributes)
  abort("[UI component contract metadata] #{id} must define state attributes.") if state_attributes.empty?
  missing_state = state_attributes.reject { |snippet| contract_texts.any? { |text| text.include?(snippet) } }
  abort("[UI component contract metadata] #{id} missing state attributes: #{missing_state.join(", ")}") unless missing_state.empty?

  required_icons = contract.fetch(:required_icons)
  abort("[UI component contract metadata] #{id} icon-inventory coverage requires requiredIcons.") if contract.fetch(:check_coverage).include?("icon-inventory") && required_icons.empty?
  missing_icons = required_icons.reject { |path| File.file?(File.join(root, path)) }
  abort("[UI component contract metadata] #{id} missing required icons: #{missing_icons.join(", ")}") unless missing_icons.empty?
  missing_sample_icons = required_icons.reject { |path| sample.include?(File.basename(path)) }
  abort("[UI component contract metadata] #{id} sample missing required icons: #{missing_sample_icons.join(", ")}") unless missing_sample_icons.empty?

  responsive_modes = contract.fetch(:responsive_modes)
  abort("[UI component contract metadata] #{id} must define responsive modes.") if responsive_modes.empty?
  invalid_modes = responsive_modes - allowed_responsive_modes
  abort("[UI component contract metadata] #{id} uses invalid responsive modes: #{invalid_modes.join(", ")}") unless invalid_modes.empty?
  if (responsive_modes & %w[tablet mobile]).any?
    abort("[UI component contract metadata] #{id} responsive CSS missing @media coverage.") unless css_outputs.any? { |_path, text| text.include?("@media") }
  end
  if responsive_modes.include?("reduced-motion")
    abort("[UI component contract metadata] #{id} responsive CSS missing reduced-motion coverage.") unless css_outputs.any? { |_path, text| text.include?("prefers-reduced-motion") }
  end

  hooks = contract.fetch(:hooks)
  next if hooks.empty?

  abort("[UI component contract metadata] #{id} defines hooks without behavior sources.") if behavior_sources.empty?
  abort("[UI component contract metadata] #{id} defines hooks without generated behavior.") if behavior_outputs.empty?

  missing_source_hooks = hooks.reject do |hook|
    behavior_sources.any? { |_path, text| text.include?(hook) }
  end
  abort("[UI component contract metadata] #{id} behavior source missing hooks: #{missing_source_hooks.join(", ")}") unless missing_source_hooks.empty?

  missing_output_hooks = hooks.reject do |hook|
    behavior_outputs.any? { |_path, text| text.include?(hook) }
  end
  abort("[UI component contract metadata] #{id} generated behavior missing hooks: #{missing_output_hooks.join(", ")}") unless missing_output_hooks.empty?

  missing_sample_hooks = hooks.reject { |hook| sample.include?(hook) }
  abort("[UI component contract metadata] #{id} sample missing hooks: #{missing_sample_hooks.join(", ")}") unless missing_sample_hooks.empty?
end
RUBY

ROOT="$ROOT" ruby <<'RUBY'
root = ENV.fetch("ROOT")
source = File.read(File.join(root, "TypeScript/UI/interaction-contracts.ts"))
matrix = File.read(File.join(root, "Docs/Component_Contract_Matrix"))
sample = File.read(File.join(root, "Samples/design/index.html"))

def decode_interaction_string_literal(value)
  value.gsub(/\\(["\\])/) { Regexp.last_match(1) }
end

def contains_exact_token?(text, token)
  pattern = /(^|[^A-Za-z0-9-])#{Regexp.escape(token)}([^A-Za-z0-9-]|$)/
  text.match?(pattern)
end

paths = source.scan(/^const\s+(\w+)\s+=\s+"([^"]+)";$/).to_h
primitive_match = source.match(/UI_INTERACTION_PRIMITIVES:[^\[]+\[(.*?)\]\s+as const;/m)
abort("[UI interaction contract metadata] UI_INTERACTION_PRIMITIVES missing.") unless primitive_match
primitives = primitive_match[1].scan(/"([^"]+)"/).flatten
abort("[UI interaction contract metadata] UI_INTERACTION_PRIMITIVES must list shared helpers.") if primitives.empty?

runtime_texts = %w[
  TypeScript/UI/components.ts
  TypeScript/UI/forms.ts
  TypeScript/UI/content.ts
  TypeScript/EditorUI/wysiwyg.ts
  UI/components.js
  UI/forms.js
  UI/content.js
  EditorUI/wysiwyg.js
].map { |path| File.read(File.join(root, path)) }

missing_primitives = primitives.reject do |primitive|
  runtime_texts.any? { |text| text.include?(primitive) }
end
abort("[UI interaction contract metadata] primitives missing from runtime source/output: #{missing_primitives.join(", ")}") unless missing_primitives.empty?

contract_lines = source.lines.grep(/^\s*\{ surface: /)
abort("[UI interaction contract metadata] UI_INTERACTION_CONTRACTS must contain contracts.") if contract_lines.empty?

allowed_surfaces = %w[components forms content wysiwyg]
allowed_events = %w[click input change keydown]
hooks = []

contract_lines.each do |line|
  match = line.match(/\{\s*surface: "([^"]+)",\s*hook: "((?:\\.|[^"\\])*)",\s*event: "([^"]+)",\s*source: (\w+),\s*generated: (\w+),\s*sampleRequired: (true|false)(?:,\s*stateAttribute: "((?:\\.|[^"\\])*)")?\s*\},/)
  abort("[UI interaction contract metadata] malformed contract line: #{line.strip}") unless match

  surface, hook, event, source_key, generated_key, sample_required, state_attribute = match.captures
  hook = decode_interaction_string_literal(hook)
  state_attribute = decode_interaction_string_literal(state_attribute) if state_attribute
  abort("[UI interaction contract metadata] invalid surface for #{hook}: #{surface}") unless allowed_surfaces.include?(surface)
  abort("[UI interaction contract metadata] invalid event for #{hook}: #{event}") unless allowed_events.include?(event)

  source_path = paths.fetch(source_key) { abort("[UI interaction contract metadata] #{hook} unknown source alias: #{source_key}") }
  generated_path = paths.fetch(generated_key) { abort("[UI interaction contract metadata] #{hook} unknown generated alias: #{generated_key}") }
  source_pathname = File.join(root, source_path)
  generated_pathname = File.join(root, generated_path)
  abort("[UI interaction contract metadata] #{hook} missing source file: #{source_path}") unless File.file?(source_pathname)
  abort("[UI interaction contract metadata] #{hook} missing generated file: #{generated_path}") unless File.file?(generated_pathname)

  source_text = File.read(source_pathname)
  generated_text = File.read(generated_pathname)
  abort("[UI interaction contract metadata] source missing hook #{hook}: #{source_path}") unless contains_exact_token?(source_text, hook)
  abort("[UI interaction contract metadata] generated output missing hook #{hook}: #{generated_path}") unless contains_exact_token?(generated_text, hook)
  if sample_required == "true"
    abort("[UI interaction contract metadata] sample missing required hook #{hook}") unless contains_exact_token?(sample, hook)
  end
  if state_attribute && ![source_text, generated_text, sample].any? { |text| contains_exact_token?(text, state_attribute) }
    abort("[UI interaction contract metadata] #{hook} missing state attribute #{state_attribute}")
  end
  hooks << hook
end

hook_counts = Hash.new(0)
hooks.each { |hook| hook_counts[hook] += 1 }
duplicates = hook_counts.select { |_hook, count| count > 1 }.keys
abort("[UI interaction contract metadata] duplicate hook contracts: #{duplicates.join(", ")}") unless duplicates.empty?
abort("[UI interaction contract metadata] Component_Contract_Matrix missing interaction-contracts.ts") unless matrix.include?("TypeScript/UI/interaction-contracts.ts")
RUBY

ROOT="$ROOT" ruby <<'RUBY'
root = ENV.fetch("ROOT")

pairs = [
  {
    label: "public component interactions",
    source: "TypeScript/UI/components.ts",
    generated: "UI/components.js",
    header: "/* Adlaire-Design component interactions */",
  },
  {
    label: "form interactions",
    source: "TypeScript/UI/forms.ts",
    generated: "UI/forms.js",
    header: "/* Adlaire-Design form interactions */",
  },
  {
    label: "content interactions",
    source: "TypeScript/UI/content.ts",
    generated: "UI/content.js",
    header: "/* Adlaire-Design content interactions */",
  },
  {
    label: "WYSIWYG editor interactions",
    source: "TypeScript/EditorUI/wysiwyg.ts",
    generated: "EditorUI/wysiwyg.js",
    header: "/* Adlaire-Design WYSIWYG editor interactions */",
  },
  {
    label: "structured editor runtime",
    source: "TypeScript/Editor/index.ts",
    generated: "EditorUI/editor.js",
    header: "/* Adlaire-Design editor core */",
  },
]

coverage_docs = %w[
  README.md
  Docs/Master_Spec
  Docs/Document_Index
  Docs/Component_Contract_Matrix
]

pairs.each do |pair|
  source_path = File.join(root, pair.fetch(:source))
  generated_path = File.join(root, pair.fetch(:generated))
  abort("[Generated JavaScript pair contract] #{pair.fetch(:label)} missing source: #{pair.fetch(:source)}") unless File.file?(source_path)
  abort("[Generated JavaScript pair contract] #{pair.fetch(:label)} missing generated output: #{pair.fetch(:generated)}") unless File.file?(generated_path)

  first_line = File.open(generated_path, &:gets)&.chomp
  abort("[Generated JavaScript pair contract] #{pair.fetch(:generated)} first line must be #{pair.fetch(:header)}") unless first_line == pair.fetch(:header)

  coverage_docs.each do |doc|
    text = File.read(File.join(root, doc))
    unless text.include?(pair.fetch(:source)) && text.include?(pair.fetch(:generated))
      abort("[Generated JavaScript pair contract] #{doc} missing #{pair.fetch(:source)} -> #{pair.fetch(:generated)}")
    end
  end
end
RUBY

ROOT="$ROOT" ruby <<'RUBY'
root = ENV.fetch("ROOT")
sample = File.join(root, "Samples/design/index.html")
html = File.read(sample)
sample_dir = File.dirname(sample)

expected_styles = %w[
  ../../Tokens/colors.css
  ../../Tokens/typography.css
  ../../Tokens/spacing.css
  ../../Tokens/layout.css
  ../../Tokens/motion.css
  ../../Tokens/layer.css
  ../../Tokens/breakpoints.css
  ../../Tokens/surface.css
  ../../Tokens/status.css
  ../../Tokens/effects.css
  ../../UI/adlaire.css
  ../../UI/base.css
  ../../UI/grid.css
  ../../UI/layout.css
  ../../UI/components.css
  ../../UI/site.css
  ../../UI/forms.css
  ../../UI/content.css
  ../../UI/utilities.css
  ../../UI/compat-agws.css
  ../../EditorUI/wysiwyg.css
  ./sample.css
]

expected_scripts = %w[
  ../../UI/components.js
  ../../UI/forms.js
  ../../UI/content.js
  ../../EditorUI/editor.js
  ../../EditorUI/wysiwyg.js
  ./sample.js
]

styles = html.scan(/<link rel="stylesheet" href="([^"]+)">/).flatten
abort("[Sample asset/load contract] Samples/design/index.html stylesheet order mismatch: #{styles.join(", ")}") unless styles == expected_styles

scripts = html.scan(/<script src="([^"]+)"([^>]*)><\/script>/)
script_sources = scripts.map(&:first)
abort("[Sample asset/load contract] Samples/design/index.html script order mismatch: #{script_sources.join(", ")}") unless script_sources == expected_scripts
missing_defer = scripts.reject { |_source, attributes| attributes.include?("defer") }.map(&:first)
abort("[Sample asset/load contract] sample scripts must all use defer: #{missing_defer.join(", ")}") unless missing_defer.empty?

(styles + script_sources).each do |relative|
  resolved = File.expand_path(relative, sample_dir)
  unless resolved.start_with?(root + File::SEPARATOR) && File.file?(resolved)
    abort("[Sample asset/load contract] sample references missing repository file: #{relative}")
  end
end

public_surface_markers = {
  "UI/components.js" => [
    'document.addEventListener("click"',
    'document.addEventListener("keydown"',
    'document.addEventListener("input"',
    'safeDocumentQueryAll("[data-adlaire-resizable-panel]")',
  ],
  "UI/forms.js" => [
    'document.addEventListener("input"',
    'document.addEventListener("click"',
    'document.addEventListener("change"',
    'document.addEventListener("keydown"',
    'document.addEventListener("reset"',
    "initializeFormState();",
  ],
  "UI/content.js" => [
    'document.addEventListener("click"',
    'document.addEventListener("keydown"',
    "initializeSortState();",
    "initializeCopyStatus();",
    "initializeTocState();",
    "initializeCodeLineState();",
  ],
  "EditorUI/wysiwyg.js" => [
    'document.addEventListener("click"',
    'document.addEventListener("keydown"',
    "initializeWysiwygState();",
    'safeScopedQueryAll(document, "[data-adlaire-wysiwyg-toggle][aria-expanded]")',
  ],
  "EditorUI/editor.js" => [
    "window.AdlaireEditor = {",
    "HeadlessEditorController: HeadlessEditorController",
    "createEditor: function (config)",
    "validateDocumentAsync: validateDocumentAsync",
  ],
}

public_surface_markers.each do |file, markers|
  text = File.read(File.join(root, file))
  markers.each do |marker|
    abort("[JavaScript public surface contract] #{file} missing public marker: #{marker}") unless text.include?(marker)
  end
end

editor_source = File.read(File.join(root, "TypeScript/Editor/index.ts"))
%w[
  export\ const\ AdlaireEditor
  browserGlobal.window.AdlaireEditor\ =\ AdlaireEditor
  validateDocumentAsync
].each do |escaped_marker|
  marker = escaped_marker.gsub("\\ ", " ")
  abort("[JavaScript public surface contract] TypeScript/Editor/index.ts missing public marker: #{marker}") unless editor_source.include?(marker)
end
RUBY

if grep -R -n -F '.adlaire-wysiwyg- {' "$ROOT/TypeScript/CSS" "$ROOT/EditorUI" >/dev/null 2>&1; then
  fail "WYSIWYG Editor UI" "WYSIWYG CSS must not contain incomplete class selector .adlaire-wysiwyg-."
fi

for css_compiler_term in \
  'TypeScript/CSS/manifest.ts|export function cssTargetPaths' \
  'TypeScript/CSS/manifest.ts|export function cssCompilerSourceModules' \
  'TypeScript/CSS/index.ts|sourceModules: cssCompilerSourceModules()' \
  'TypeScript/CSS/index.ts|targets: cssTargetPaths()' \
  'TypeScript/CSS/emit.ts|function assertCssFirstLine'; do
  file=${css_compiler_term%%|*}
  text=${css_compiler_term#*|}
  require_text "$file" "$text" "CSS compiler registry"
done

if command -v ruby >/dev/null 2>&1; then
  ROOT="$ROOT" ruby - <<'RUBY'
root = ENV.fetch("ROOT")

token_source = File.read(File.join(root, "TypeScript/CSS/tokens.ts"))
expected_token_categories = {
  "Tokens/colors.css" => "color",
  "Tokens/typography.css" => "typography",
  "Tokens/spacing.css" => "spacing",
  "Tokens/layout.css" => "layout",
  "Tokens/motion.css" => "motion",
  "Tokens/layer.css" => "layer",
  "Tokens/breakpoints.css" => "breakpoint",
  "Tokens/surface.css" => "surface",
  "Tokens/status.css" => "status",
  "Tokens/effects.css" => "effects",
}

token_outputs = token_source.scan(/\{ path: "(Tokens\/[^"]+\.css)", category: "([^"]+)", css: `(.*?)`\s*\}/m)
source_token_files = token_outputs.map { |output, _category, _css| output }.sort
actual_token_files = Dir.chdir(root) { Dir.glob("Tokens/*.css").sort }
token_file_delta = (source_token_files - actual_token_files) + (actual_token_files - source_token_files)
abort("[Token inventory] source/output file list mismatch: #{token_file_delta.join(", ")}") unless source_token_files == actual_token_files
abort("[Token category boundary] token source/output file list must match category map") unless source_token_files == expected_token_categories.keys.sort

token_outputs.each do |output, category, css|
  expected_category = expected_token_categories.fetch(output)
  abort("[Token category boundary] #{output} uses category #{category}, expected #{expected_category}") unless category == expected_category
  generated = File.read(File.join(root, output))
  abort("[Generated token CSS] differs from source: TypeScript/CSS/tokens.ts -> #{output}") unless css == generated
end

manifest = File.read(File.join(root, "TypeScript/CSS/manifest.ts"))
required_block = manifest.match(/export const CSS_COMPILER_REQUIRED_FILES: readonly string\[\] = \[(.*?)\] as const;/m)
abort("[CSS compiler registry] missing CSS_COMPILER_REQUIRED_FILES in TypeScript/CSS/manifest.ts") unless required_block
required_files = required_block[1].scan(/"([^"]+)"/).flatten.sort

target_entries = manifest.scan(/\{ path: "([^"]+)", kind: "([^"]+)", firstLine: "([^"]+)", sourceModules: \[([^\]]*)\], migrated: (true|false) \}/)
abort("[CSS compiler registry] missing CSS_TARGETS entries in TypeScript/CSS/manifest.ts") if target_entries.empty?

expected_css_targets = [
  ["Tokens/colors.css", "token", "/* Adlaire-Design color tokens */"],
  ["Tokens/typography.css", "token", "/* Adlaire-Design typography tokens */"],
  ["Tokens/spacing.css", "token", "/* Adlaire-Design spacing tokens */"],
  ["Tokens/layout.css", "token", "/* Adlaire-Design layout tokens */"],
  ["Tokens/motion.css", "token", "/* Adlaire-Design motion tokens */"],
  ["Tokens/layer.css", "token", "/* Adlaire-Design layer tokens */"],
  ["Tokens/breakpoints.css", "token", "/* Adlaire-Design breakpoint tokens */"],
  ["Tokens/surface.css", "token", "/* Adlaire-Design surface tokens */"],
  ["Tokens/status.css", "token", "/* Adlaire-Design status tokens */"],
  ["Tokens/effects.css", "token", "/* Adlaire-Design effect tokens */"],
  ["UI/adlaire.css", "ui", "/* Adlaire-Design color utilities */"],
  ["UI/base.css", "ui", "/* Adlaire-Design base styles */"],
  ["UI/grid.css", "ui", "/* Adlaire-Design grid utilities */"],
  ["UI/layout.css", "ui", "/* Adlaire-Design public layout */"],
  ["UI/components.css", "ui", "/* Adlaire-Design public components */"],
  ["UI/site.css", "ui", "/* Adlaire-Design site chrome */"],
  ["UI/forms.css", "ui", "/* Adlaire-Design form components */"],
  ["UI/content.css", "ui", "/* Adlaire-Design content components */"],
  ["UI/utilities.css", "ui", "/* Adlaire-Design utility classes */"],
  ["UI/compat-agws.css", "ui", "/* Adlaire-Design specification layer */"],
  ["EditorUI/wysiwyg.css", "editor-ui", "/* Adlaire-Design WYSIWYG editor */"],
]

actual_css_targets = target_entries.map { |path, kind, first_line, _modules_text, migrated| [path, kind, first_line, migrated] }
expected_css_targets_with_migration = expected_css_targets.map { |row| row + ["true"] }
unless actual_css_targets == expected_css_targets_with_migration
  actual_paths = actual_css_targets.map(&:first).join(", ")
  abort("[CSS target manifest contract] CSS_TARGETS order or metadata mismatch: #{actual_paths}")
end

expected_css_targets.each do |path, _kind, first_line|
  output_path = File.join(root, path)
  abort("[CSS target manifest contract] missing generated CSS target: #{path}") unless File.file?(output_path)
  actual_first_line = File.open(output_path, &:gets)&.chomp
  abort("[CSS target manifest contract] #{path} first line must be #{first_line}") unless actual_first_line == first_line
end

generated_css_outputs = Dir.chdir(root) do
  (Dir.glob("Tokens/*.css") + Dir.glob("UI/*.css") + Dir.glob("EditorUI/*.css")).sort
end
expected_css_output_set = expected_css_targets.map(&:first).sort
unless generated_css_outputs == expected_css_output_set
  delta = ((expected_css_output_set - generated_css_outputs) + (generated_css_outputs - expected_css_output_set)).join(", ")
  abort("[CSS target manifest contract] generated CSS output set mismatch: #{delta}")
end

css_target_docs = %w[
  README.md
  Docs/Master_Spec
  Docs/Document_Index
  Docs/Component_Contract_Matrix
]
css_target_docs.each do |doc|
  text = File.read(File.join(root, doc))
  abort("[CSS target manifest contract] #{doc} missing contract term") unless text.include?("CSS target manifest contract")
end
master_spec = File.read(File.join(root, "Docs/Master_Spec"))
expected_css_targets.each do |path, _kind, _first_line|
  abort("[CSS target manifest contract] Docs/Master_Spec missing CSS target #{path}") unless master_spec.include?(path)
end

compiler_source_modules = target_entries.flat_map do |_output, _kind, _first_line, modules_text, _migrated|
  modules_text.scan(/"([^"]+)"/).flatten.map { |source| "TypeScript/CSS/#{source}" }
end.uniq.sort
missing_required_modules = compiler_source_modules - required_files
abort("[CSS compiler registry] sourceModules missing from CSS_COMPILER_REQUIRED_FILES: #{missing_required_modules.join(", ")}") unless missing_required_modules.empty?

actual_rule_sources = Dir.chdir(root) { Dir.glob("TypeScript/CSS/rules*.ts").sort }
missing_required_rules = actual_rule_sources - required_files
abort("[CSS compiler registry] rules source files missing from CSS_COMPILER_REQUIRED_FILES: #{missing_required_rules.join(", ")}") unless missing_required_rules.empty?

allowed_registry_helpers = [
  "TypeScript/CSS/rules-types.ts",
]
unregistered_rule_sources = actual_rule_sources - compiler_source_modules - allowed_registry_helpers
abort("[CSS compiler registry] rules source files missing from CSS_TARGETS sourceModules: #{unregistered_rule_sources.join(", ")}") unless unregistered_rule_sources.empty?

def source_css_parts(root, source)
  source_text = File.read(File.join(root, source))
  direct = source_text.match(/css: `(.*)` \} as const;/m)
  return [direct[1]] if direct
  source_text.scan(/export const [A-Z_]+ = `(.*?)`;/m).flatten
end

target_entries.each do |output, kind, _first_line, modules_text, _migrated|
  next if kind == "token"

  sources = modules_text.scan(/"([^"]+)"/).flatten.map { |source| "TypeScript/CSS/#{source}" }
  css_parts = sources.reject { |source| source == "TypeScript/CSS/rules.ts" }.flat_map { |source| source_css_parts(root, source) }
  abort("[Generated CSS source] missing css template fragments for #{output}: #{sources.join(", ")}") if css_parts.empty?

  generated = File.read(File.join(root, output))
  abort("[Generated CSS] differs from manifest sourceModules: #{sources.join(", ")} -> #{output}") unless css_parts.join == generated
end

defined_vars = {}
duplicate_vars = []
Dir.glob(File.join(root, "Tokens", "*.css")).each do |file|
  File.read(file).scan(/(--adlaire-[a-z0-9-]+)\s*:/).flatten.each do |name|
    duplicate_vars << name if defined_vars[name] && defined_vars[name] != file
    defined_vars[name] = file
  end
end
abort("[Token inventory] duplicate CSS token definitions: #{duplicate_vars.uniq.sort.join(", ")}") unless duplicate_vars.empty?
allowed_component_vars = {
  "--adlaire-progress-value" => true,
  "--adlaire-range-value" => true,
  "--adlaire-upload-progress" => true,
  "--adlaire-token-swatch-color" => true,
  "--adlaire-preview-compare-position" => true,
}
used_vars = Dir.glob(File.join(root, "{Tokens,UI,EditorUI,Samples/design}", "**", "*.css")).each_with_object({}) do |file, vars|
  File.read(file).scan(/var\((--adlaire-[a-z0-9-]+)/).flatten.each { |name| vars[name] = true }
end
missing = used_vars.keys.reject { |name| defined_vars[name] || allowed_component_vars[name] }.sort
abort("[Token usage contract] undefined CSS variables: #{missing.join(", ")}") unless missing.empty?

generated_css = Dir.glob(File.join(root, "{UI,EditorUI}", "**", "*.css")).map { |file| File.read(file) }.join("\n")
required_token_families = {
  "spacing" => "--adlaire-space-",
  "layout" => "--adlaire-layout-",
  "surface" => "--adlaire-surface-",
  "semantic" => "--adlaire-semantic-",
  "radius" => "--adlaire-radius-",
  "shadow" => "--adlaire-shadow-",
  "motion" => "--adlaire-motion-",
  "transition" => "--adlaire-transition-",
}
missing_families = required_token_families.reject { |_family, prefix| generated_css.include?(prefix) }.keys
abort("[Token family usage discipline] generated UI CSS missing token families: #{missing_families.join(", ")}") unless missing_families.empty?
RUBY
fi

ICON_COUNT="$(find "$ROOT/Icons" -type f -name 'adlaire-icon-*.svg' | wc -l | tr -d ' ')"
if [ "$ICON_COUNT" -ne 1520 ]; then
  fail "Icon inventory" "Icons/ must contain exactly 1520 official SVG icons. Found: $ICON_COUNT"
fi

find "$ROOT/Icons" -type f ! -name 'adlaire-icon-*.svg' ! -name '.gitkeep' -print >"$TMP_DIR/unexpected-icons"
if [ -s "$TMP_DIR/unexpected-icons" ]; then
  echo "[Icon inventory] Icons/ contains unexpected files:" >&2
  cat "$TMP_DIR/unexpected-icons" >&2
  exit 1
fi

find "$ROOT/Icons" -type f -name 'adlaire-icon-*.svg' | while IFS= read -r icon_file; do
  icon_name=$(basename "$icon_file")
  case "$icon_name" in
    adlaire-icon-navigation-*.svg|adlaire-icon-action-*.svg|adlaire-icon-status-*.svg|adlaire-icon-content-*.svg|adlaire-icon-editor-*.svg|adlaire-icon-media-*.svg|adlaire-icon-form-*.svg)
      ;;
    *)
      fail "Icon inventory" "icon filename must use an approved category: $icon_name"
      ;;
  esac
done

for asset in \
  Brand/adlaire-logo-primary.svg \
  Brand/adlaire-logo-mark.svg \
  Brand/adlaire-ogp-default.png \
  Brand/adlaire-image-brand-overview.webp; do
  require_path "$asset"
done

require_path "Samples/sample-current.png"

find "$ROOT/Brand" -maxdepth 1 -type f ! -name '.gitkeep' ! -name 'README.md' | while IFS= read -r brand_file; do
  brand_name=$(basename "$brand_file")
  case "$brand_name" in
    adlaire-logo-*.svg|adlaire-image-*.png|adlaire-image-*.webp|adlaire-ogp-*.png|adlaire-ogp-*.webp|adlaire-icon-*.svg|adlaire-brand-*.svg|adlaire-brand-*.png|adlaire-brand-*.webp)
      ;;
    *)
      fail "Brand asset inventory" "brand asset has an unsupported name or extension: $brand_name"
      ;;
  esac
done

ROOT="$ROOT" DENO_TYPECHECK_TARGETS="$DENO_TYPECHECK_TARGETS" ruby <<'RUBY'
root = ENV.fetch("ROOT")
deno_targets = ENV.fetch("DENO_TYPECHECK_TARGETS").split
expected_targets = %w[
  TypeScript/CSS/index.ts
  TypeScript/UI/components.ts
  TypeScript/UI/component-contracts.ts
  TypeScript/UI/interaction-contracts.ts
  TypeScript/UI/forms.ts
  TypeScript/UI/content.ts
  TypeScript/EditorUI/wysiwyg.ts
  TypeScript/Editor/index.ts
]

counts = Hash.new(0)
deno_targets.each { |target| counts[target] += 1 }
duplicates = counts.select { |_target, count| count > 1 }.keys
missing = expected_targets - deno_targets
extra = deno_targets - expected_targets
missing_files = deno_targets.reject { |target| File.file?(File.join(root, target)) }

abort("[Deno type-check target coverage] duplicate targets: #{duplicates.join(", ")}") unless duplicates.empty?
abort("[Deno type-check target coverage] missing targets: #{missing.join(", ")}") unless missing.empty?
abort("[Deno type-check target coverage] unexpected targets: #{extra.join(", ")}") unless extra.empty?
abort("[Deno type-check target coverage] targets missing files: #{missing_files.join(", ")}") unless missing_files.empty?
RUBY

for doc_term in \
  'Adlaire-Design-System' \
  'Deno TypeScript' \
  'npm packages' \
  'Component_Contract_Matrix' \
  'TypeScript/UI/component-contracts.ts' \
  'TypeScript/UI/interaction-contracts.ts' \
  'Representative UI component contract metadata' \
  'Samples are supporting' \
  'official 1520 SVG icons' \
  'startup synchronization' \
  'matching merged branch' \
  'local Git consistency baseline' \
  'merge commits only' \
  'stale merged branch' \
  'family-labelled diagnostics' \
  'Deno-backed generated CSS parity check' \
  'Deno type-check target coverage' \
  'Generated JavaScript pair contract' \
  'JavaScript public surface contract' \
  'Sample asset/load contract' \
  'CSS target manifest contract' \
  'Editor runtime module registry contract' \
  'Development configuration contract' \
  'Generated output placement contract' \
  'Token category boundaries' \
  'Token family usage discipline' \
  'Category naming' \
  'Brand asset inventory is checked' \
  'Visual Baseline' \
  'Reference screenshot changes require' \
  'output file unit' \
  'check-covered contract' \
  'Catalog Governance' \
  'Pending Tasks'; do
  if ! grep -R -F -- "$doc_term" "$ROOT/README.md" "$ROOT/Docs" "$ROOT/Samples/README.md" "$ROOT/Brand/README.md" >/dev/null 2>&1; then
    fail "Documentation governance" "documentation missing required governance term: $doc_term"
  fi
done

if grep -R -n -E 'TODO|FIXME|未修正|未完了タスク|保留' "$ROOT/README.md" "$ROOT/Docs" "$ROOT/Samples/README.md" "$ROOT/Brand/README.md" >/dev/null 2>&1; then
  fail "Documentation governance" "documentation must not contain unresolved task markers."
fi

DENO_BIN=$(command -v deno 2>/dev/null || true)
if [ -n "$DENO_BIN" ]; then
  (cd "$ROOT" && "$DENO_BIN" check --no-npm $DENO_TYPECHECK_TARGETS)
  (cd "$ROOT" && "$DENO_BIN" run --allow-read TypeScript/CSS/index.ts check-generated-css)
else
  echo "[Deno validation] deno command not found; skipped Deno type check and Deno-backed generated CSS parity check." >&2
fi

if [ "$RUN_RELEASE_CHECK" -eq 1 ]; then
  git -C "$ROOT" fetch backup --prune
  require_local_git_config "fetch.prune" "true"
  require_local_git_config "pull.ff" "only"
  require_local_git_config "remote.pushDefault" "backup"
  require_local_git_config "push.default" "current"
  require_local_git_config "push.autoSetupRemote" "true"
  require_local_git_config "branch.main.remote" "backup"
  require_local_git_config "branch.main.merge" "refs/heads/main"
  git -C "$ROOT" diff --check
  git -C "$ROOT" status --short --branch >"$TMP_DIR/git-status"
  grep -v -E '^## ' "$TMP_DIR/git-status" >"$TMP_DIR/git-worktree-status" || true
  if [ -s "$TMP_DIR/git-worktree-status" ]; then
    echo "[Release readiness] release check requires a clean git worktree:" >&2
    cat "$TMP_DIR/git-worktree-status" >&2
    exit 1
  fi
  current_branch="$(git -C "$ROOT" symbolic-ref --quiet --short HEAD || printf '%s' HEAD)"
  if [ "$current_branch" != "main" ]; then
    fail "Release readiness" "release check must run on local main; current branch is $current_branch."
  fi
  if ! git -C "$ROOT" rev-parse --verify backup/main >/dev/null 2>&1; then
    fail "Release readiness" "release check requires backup/main."
  fi
  if ! git -C "$ROOT" rev-parse --verify main >/dev/null 2>&1; then
    fail "Release readiness" "release check requires local main."
  fi
  if [ "$(git -C "$ROOT" rev-parse main)" != "$(git -C "$ROOT" rev-parse backup/main)" ]; then
    fail "Release readiness" "release check requires local main to match backup/main."
  fi
  git -C "$ROOT" for-each-ref --merged=backup/main --format='%(refname:short)' refs/heads >"$TMP_DIR/merged-local-branches"
  grep -v -E '^main$' "$TMP_DIR/merged-local-branches" >"$TMP_DIR/stale-local-branches" || true
  if [ -s "$TMP_DIR/stale-local-branches" ]; then
    echo "[Release readiness] release check found stale merged local branches:" >&2
    cat "$TMP_DIR/stale-local-branches" >&2
    exit 1
  fi
  git -C "$ROOT" for-each-ref --merged=backup/main --format='%(refname:short)' refs/remotes/backup >"$TMP_DIR/merged-backup-branches"
  grep -v -E '^backup$|^backup/(HEAD|main)$' "$TMP_DIR/merged-backup-branches" >"$TMP_DIR/stale-backup-branches" || true
  if [ -s "$TMP_DIR/stale-backup-branches" ]; then
    echo "[Release readiness] release check found stale merged backup remote-tracking branches:" >&2
    cat "$TMP_DIR/stale-backup-branches" >&2
    exit 1
  fi
  echo "adlaire-design-release-check-ok"
  exit 0
fi

echo "adlaire-design-check-ok"
