#!/bin/sh
set -eu

TOOL_DIR=$(CDPATH= cd -- "$(dirname -- "$0")" && pwd)
ROOT=$(CDPATH= cd -- "$TOOL_DIR/../.." && pwd)
TMP_DIR="${TMPDIR:-/tmp}/adlaire-design-check.$$"
RUN_RELEASE_CHECK=0

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
  TypeScript/CSS/rules-site.ts \
  TypeScript/CSS/rules-forms.ts \
  TypeScript/CSS/rules-content.ts \
  TypeScript/CSS/rules-utilities.ts \
  TypeScript/CSS/rules-compat-agws.ts \
  TypeScript/CSS/rules-wysiwyg.ts \
  TypeScript/CSS/targets.ts \
  TypeScript/CSS/emit.ts \
  TypeScript/CSS/manifest.ts \
  TypeScript/CSS/index.ts \
  TypeScript/UI/components.ts \
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

if [ -e "$ROOT/package.json" ] || [ -e "$ROOT/package-lock.json" ] || [ -e "$ROOT/node_modules" ]; then
  fail "Dependency policy" "npm and Node dependency files are prohibited."
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
  'Docs/Generic_Component_Catalog|.adlaire-badge' \
  'Docs/Generic_Component_Catalog|.adlaire-note' \
  'Docs/Generic_Component_Catalog|.adlaire-alert' \
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
  'Docs/Generic_Component_Catalog|.adlaire-filter' \
  'Docs/Generic_Component_Catalog|.adlaire-pagination' \
  'Docs/Generic_Component_Catalog|.adlaire-command-palette' \
  'Docs/Generic_Component_Catalog|.adlaire-dialog' \
  'Docs/Generic_Component_Catalog|.adlaire-drawer' \
  'Docs/Generic_Component_Catalog|.adlaire-popover' \
  'Docs/Generic_Component_Catalog|.adlaire-tooltip' \
  'Docs/Generic_Component_Catalog|.adlaire-toast' \
  'Docs/Generic_Component_Catalog|.adlaire-toast-viewport' \
  'Docs/Generic_Component_Catalog|.adlaire-backdrop' \
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
  'Docs/Admin_UI_Catalog|.adlaire-admin-release-panel' \
  'Docs/Admin_UI_Catalog|.adlaire-admin-security-overview' \
  'Docs/Admin_UI_Catalog|.adlaire-admin-state-badge' \
  'Docs/Admin_UI_Catalog|.adlaire-admin-empty-state' \
  'Docs/Admin_UI_Catalog|.adlaire-admin-mobile-stack' \
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
  'Docs/WYSIWYG_Editor_UI_Catalog|.adlaire-wysiwyg-a11y-panel' \
  'Docs/WYSIWYG_Editor_UI_Catalog|.adlaire-wysiwyg-slash-menu' \
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
  'data-adlaire-toast-dismiss' \
  'adlaire-dialog.is-open' \
  'adlaire-popover.is-open'; do
  require_text "TypeScript/UI/components.ts" "$js_hook" "Interaction readiness"
  require_text "UI/components.js" "$js_hook" "Interaction readiness"
done

for js_pair in \
  'TypeScript/UI/forms.ts|UI/forms.js|data-adlaire-filter-input' \
  'TypeScript/UI/forms.ts|UI/forms.js|data-adlaire-filter-chip' \
  'TypeScript/UI/forms.ts|UI/forms.js|data-adlaire-file-input' \
  'TypeScript/UI/forms.ts|UI/forms.js|data-adlaire-toggle-input' \
  'TypeScript/UI/forms.ts|UI/forms.js|data-adlaire-validate' \
  'TypeScript/UI/content.ts|UI/content.js|data-adlaire-sort' \
  'TypeScript/UI/content.ts|UI/content.js|data-adlaire-code-copy' \
  'TypeScript/UI/content.ts|UI/content.js|data-adlaire-code-line' \
  'TypeScript/EditorUI/wysiwyg.ts|EditorUI/wysiwyg.js|data-adlaire-wysiwyg-mode' \
  'TypeScript/EditorUI/wysiwyg.ts|EditorUI/wysiwyg.js|data-adlaire-wysiwyg-toggle' \
  'TypeScript/EditorUI/wysiwyg.ts|EditorUI/wysiwyg.js|data-adlaire-wysiwyg-target' \
  'TypeScript/EditorUI/wysiwyg.ts|EditorUI/wysiwyg.js|data-adlaire-wysiwyg-select' \
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
  'TypeScript/Editor/core.ts|command.readOnly' \
  'TypeScript/Editor/commands.ts|applyCommand' \
  'TypeScript/Editor/commands.ts|function failed' \
  'TypeScript/Editor/document.ts|ToolRegistry' \
  'TypeScript/Editor/document.ts|handlePaste' \
  'TypeScript/Editor/selection.ts|normalizeSelection' \
  'TypeScript/Editor/selection.ts|sameSelection' \
  'TypeScript/Editor/history.ts|class History' \
  'TypeScript/Editor/history.ts|cloneSnapshot' \
  'TypeScript/Editor/validation.ts|sanitizeDocument' \
  'TypeScript/Editor/validation.ts|validateDocumentAsync' \
  'TypeScript/Editor/events.ts|class EventBus' \
  'TypeScript/Editor/events.ts|editorError' \
  'TypeScript/Editor/types.ts|EditorDocument' \
  'TypeScript/Editor/types.ts|EditorController' \
  'EditorUI/editor.js|window.AdlaireEditor'; do
  file=${editor_contract%%|*}
  text=${editor_contract#*|}
  require_text "$file" "$text" "Editor runtime"
done

if grep -R -n -E 'from "\.\./|from "\./CSS|from "\./UI|from "\./EditorUI' "$ROOT/TypeScript/Editor" >/dev/null 2>&1; then
  fail "Editor runtime boundary" "TypeScript/Editor modules must stay inside the editor runtime boundary."
fi

for sample_class in \
  'adlaire-workbench-layout' \
  'adlaire-filter-builder' \
  'adlaire-stepper' \
  'adlaire-progress' \
  'adlaire-skeleton' \
  'adlaire-bulk-feedback' \
  'adlaire-wysiwyg-slash-menu' \
  'adlaire-wysiwyg-suggestion-card' \
  'adlaire-wysiwyg-save-banner' \
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
  'TypeScript/UI/components.ts|event.key !== "Escape"' \
  'TypeScript/UI/components.ts|data-adlaire-dismiss' \
  'TypeScript/UI/components.ts|aria-expanded' \
  'TypeScript/UI/components.ts|aria-pressed' \
  'UI/components.js|containFocus' \
  'UI/components.js|event.key !== "Escape"' \
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
  'WYSIWYG Editor UI' \
  'Editor runtime' \
  'Representative Subcontracts' \
  'layout frame, public layout, master-detail layout' \
  'dialog, drawer, popover, toast' \
  'filter input, filter chip, file input' \
  'slash menu, suggestion card, save banner' \
  'command, document, selection, history' \
  'color, typography, spacing, layout' \
  'generated token CSS' \
  'accessibility hooks' \
  'minimum review granularity' \
  'New component families require a matrix row'; do
  require_text "Docs/Component_Contract_Matrix" "$matrix_term" "Component Contract Matrix"
done

if grep -R -n -F '.adlaire-wysiwyg- {' "$ROOT/TypeScript/CSS" "$ROOT/EditorUI" >/dev/null 2>&1; then
  fail "WYSIWYG Editor UI" "WYSIWYG CSS must not contain incomplete class selector .adlaire-wysiwyg-."
fi

if command -v ruby >/dev/null 2>&1; then
  ROOT="$ROOT" ruby - <<'RUBY'
root = ENV.fetch("ROOT")

token_source = File.read(File.join(root, "TypeScript/CSS/tokens.ts"))
token_outputs = token_source.scan(/\{ path: "(Tokens\/[^"]+\.css)", category: "[^"]+", css: `(.*?)`\s*\}/m)
source_token_files = token_outputs.map(&:first).sort
actual_token_files = Dir.chdir(root) { Dir.glob("Tokens/*.css").sort }
token_file_delta = (source_token_files - actual_token_files) + (actual_token_files - source_token_files)
abort("[Token inventory] source/output file list mismatch: #{token_file_delta.join(", ")}") unless source_token_files == actual_token_files

token_outputs.each do |output, css|
  generated = File.read(File.join(root, output))
  abort("[Generated token CSS] differs from source: TypeScript/CSS/tokens.ts -> #{output}") unless css == generated
end

pairs = {
  "TypeScript/CSS/rules-adlaire.ts" => "UI/adlaire.css",
  "TypeScript/CSS/rules-base.ts" => "UI/base.css",
  "TypeScript/CSS/rules-grid.ts" => "UI/grid.css",
  "TypeScript/CSS/rules-layout.ts" => "UI/layout.css",
  "TypeScript/CSS/rules-components.ts" => "UI/components.css",
  "TypeScript/CSS/rules-site.ts" => "UI/site.css",
  "TypeScript/CSS/rules-forms.ts" => "UI/forms.css",
  "TypeScript/CSS/rules-content.ts" => "UI/content.css",
  "TypeScript/CSS/rules-utilities.ts" => "UI/utilities.css",
  "TypeScript/CSS/rules-compat-agws.ts" => "UI/compat-agws.css",
  "TypeScript/CSS/rules-wysiwyg.ts" => "EditorUI/wysiwyg.css",
}

pairs.each do |source, output|
  source_text = File.read(File.join(root, source))
  match = source_text.match(/css: `(.*)` \} as const;/m)
  abort("[Generated CSS source] missing css template in #{source}") unless match
  generated = File.read(File.join(root, output))
  abort("[Generated CSS] differs from source: #{source} -> #{output}") unless match[1] == generated
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
  "--adlaire-upload-progress" => true,
}
used_vars = Dir.glob(File.join(root, "{Tokens,UI,EditorUI,Samples/design}", "**", "*.css")).each_with_object({}) do |file, vars|
  File.read(file).scan(/var\((--adlaire-[a-z0-9-]+)/).flatten.each { |name| vars[name] = true }
end
missing = used_vars.keys.reject { |name| defined_vars[name] || allowed_component_vars[name] }.sort
abort("[Token usage contract] undefined CSS variables: #{missing.join(", ")}") unless missing.empty?
RUBY
fi

ICON_COUNT="$(find "$ROOT/Icons" -type f -name 'adlaire-icon-*.svg' | wc -l | tr -d ' ')"
if [ "$ICON_COUNT" -ne 500 ]; then
  fail "Icon inventory" "Icons/ must contain exactly 500 official SVG icons. Found: $ICON_COUNT"
fi

find "$ROOT/Icons" -type f ! -name 'adlaire-icon-*.svg' ! -name '.gitkeep' -print >"$TMP_DIR/unexpected-icons"
if [ -s "$TMP_DIR/unexpected-icons" ]; then
  echo "[Icon inventory] Icons/ contains unexpected files:" >&2
  cat "$TMP_DIR/unexpected-icons" >&2
  exit 1
fi

for asset in \
  Brand/adlaire-logo-primary.svg \
  Brand/adlaire-logo-mark.svg \
  Brand/adlaire-ogp-default.png \
  Brand/adlaire-image-brand-overview.webp; do
  require_path "$asset"
done

for doc_term in \
  'Adlaire-Design-System' \
  'Deno TypeScript' \
  'npm packages' \
  'Component_Contract_Matrix' \
  'Samples are supporting' \
  'official 500 SVG icons' \
  'startup synchronization' \
  'matching merged branch' \
  'family-labelled diagnostics' \
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

if command -v deno >/dev/null 2>&1; then
  (cd "$ROOT" && deno check --no-npm \
    TypeScript/CSS/index.ts \
    TypeScript/UI/components.ts \
    TypeScript/UI/forms.ts \
    TypeScript/UI/content.ts \
    TypeScript/EditorUI/wysiwyg.ts \
    TypeScript/Editor/index.ts)
  (cd "$ROOT" && deno run --allow-read TypeScript/CSS/index.ts check-generated-css)
fi

if [ "$RUN_RELEASE_CHECK" -eq 1 ]; then
  git -C "$ROOT" fetch backup --prune
  git -C "$ROOT" diff --check
  git -C "$ROOT" status --short --branch >"$TMP_DIR/git-status"
  if grep -E '^(M|A|D|R|C|U|\?\?)' "$TMP_DIR/git-status" >/dev/null 2>&1; then
    echo "[Release readiness] release check requires a clean git worktree:" >&2
    cat "$TMP_DIR/git-status" >&2
    exit 1
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
  current_branch="$(git -C "$ROOT" symbolic-ref --quiet --short HEAD || printf '%s' HEAD)"
  if [ "$current_branch" != "main" ]; then
    if git -C "$ROOT" rev-parse --verify "backup/$current_branch" >/dev/null 2>&1; then
      fail "Release readiness" "release check requires the matching merged branch to be deleted: backup/$current_branch"
    fi
    if git -C "$ROOT" cherry -v backup/main HEAD | grep -E '^\+' >/dev/null 2>&1; then
      echo "[Release readiness] release check requires no patches outside backup/main." >&2
      git -C "$ROOT" cherry -v backup/main HEAD >&2
      exit 1
    fi
  fi
  echo "adlaire-design-release-check-ok"
  exit 0
fi

echo "adlaire-design-check-ok"
