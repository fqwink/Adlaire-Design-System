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
  'Docs/Generic_Component_Catalog|.adlaire-mobile-stack' \
  'Docs/Generic_Component_Catalog|.adlaire-mobile-action-bar' \
  'Docs/Generic_Component_Catalog|.adlaire-filter' \
  'Docs/Generic_Component_Catalog|.adlaire-input-group' \
  'Docs/Generic_Component_Catalog|.adlaire-date-range' \
  'Docs/Generic_Component_Catalog|.adlaire-combobox' \
  'Docs/Generic_Component_Catalog|.adlaire-multi-select' \
  'Docs/Generic_Component_Catalog|.adlaire-token-input' \
  'Docs/Generic_Component_Catalog|.adlaire-date-picker' \
  'Docs/Generic_Component_Catalog|.adlaire-calendar' \
  'Docs/Generic_Component_Catalog|.adlaire-file-picker' \
  'Docs/Generic_Component_Catalog|.adlaire-dropzone' \
  'Docs/Generic_Component_Catalog|.adlaire-toggle' \
  'Docs/Generic_Component_Catalog|.adlaire-error-summary' \
  'Docs/Generic_Component_Catalog|.adlaire-validation-message' \
  'Docs/Generic_Component_Catalog|.adlaire-pagination' \
  'Docs/Generic_Component_Catalog|.adlaire-command-palette' \
  'Docs/Generic_Component_Catalog|.adlaire-tree-view' \
  'Docs/Generic_Component_Catalog|.adlaire-data-grid' \
  'Docs/Generic_Component_Catalog|.adlaire-column-manager' \
  'Docs/Generic_Component_Catalog|.adlaire-saved-view-bar' \
  'Docs/Generic_Component_Catalog|.adlaire-property-inspector' \
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
  'Docs/Generic_Component_Catalog|.adlaire-panel-rail' \
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
  'data-adlaire-toast-dismiss' \
  'adlaire-dialog.is-open' \
  'adlaire-bottom-sheet.is-open' \
  'adlaire-popover.is-open'; do
  require_text "TypeScript/UI/components.ts" "$js_hook" "Interaction readiness"
  require_text "UI/components.js" "$js_hook" "Interaction readiness"
done

for js_pair in \
  'TypeScript/UI/forms.ts|UI/forms.js|data-adlaire-filter-input' \
  'TypeScript/UI/forms.ts|UI/forms.js|data-adlaire-filter-chip' \
  'TypeScript/UI/forms.ts|UI/forms.js|data-adlaire-combobox-input' \
  'TypeScript/UI/forms.ts|UI/forms.js|data-adlaire-combobox-option' \
  'TypeScript/UI/forms.ts|UI/forms.js|data-adlaire-multi-select-option' \
  'TypeScript/UI/forms.ts|UI/forms.js|data-adlaire-date-preset' \
  'TypeScript/UI/forms.ts|UI/forms.js|data-adlaire-file-input' \
  'TypeScript/UI/forms.ts|UI/forms.js|data-adlaire-file-empty' \
  'TypeScript/UI/forms.ts|UI/forms.js|data-adlaire-toggle-input' \
  'TypeScript/UI/forms.ts|UI/forms.js|data-adlaire-validate' \
  'TypeScript/UI/forms.ts|UI/forms.js|data-adlaire-validate-summary' \
  'TypeScript/UI/content.ts|UI/content.js|data-adlaire-sort' \
  'TypeScript/UI/content.ts|UI/content.js|data-adlaire-code-copy' \
  'TypeScript/UI/content.ts|UI/content.js|data-adlaire-code-copy-status' \
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

exports = {
  "TypeScript/Editor/commands.ts" => ["export function applyCommand"],
  "TypeScript/Editor/core.ts" => ["export class HeadlessEditorController", "export function createEditor"],
  "TypeScript/Editor/document.ts" => ["export class ToolRegistry", "export class BlockRegistry", "function handlePaste", "export function normalizeDocument"],
  "TypeScript/Editor/events.ts" => ["export class EventBus", "export function editorError"],
  "TypeScript/Editor/history.ts" => ["export class History"],
  "TypeScript/Editor/selection.ts" => ["export function normalizeSelection", "export function sameSelection"],
  "TypeScript/Editor/types.ts" => ["export interface EditorDocument", "export interface EditorController"],
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
  'adlaire-content-table' \
  'adlaire-faq-list' \
  'adlaire-timeline' \
  'adlaire-markdown-body' \
  'adlaire-filter-builder' \
  'adlaire-combobox' \
  'data-adlaire-combobox-input' \
  'data-adlaire-combobox-option' \
  'adlaire-multi-select' \
  'data-adlaire-multi-select-option' \
  'adlaire-token-input' \
  'adlaire-date-picker' \
  'data-adlaire-date-preset' \
  'adlaire-calendar' \
  'adlaire-tree-view' \
  'data-adlaire-tree-toggle' \
  'adlaire-data-grid' \
  'adlaire-column-manager' \
  'adlaire-saved-view-bar' \
  'adlaire-property-inspector' \
  'adlaire-token-swatch' \
  'adlaire-component-preview' \
  'adlaire-component-state-matrix' \
  'adlaire-anatomy-panel' \
  'adlaire-a11y-checklist' \
  'adlaire-keyboard-map' \
  'adlaire-bottom-sheet' \
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
  'adlaire-git-ci-status' \
  'adlaire-git-merge-state' \
  'adlaire-git-diff-hunk' \
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
  'Advanced Input and Design-System UI' \
  'Workspace Command and Productivity UI' \
  'Business Operations UI' \
  'Enterprise Domain UI' \
  'Strategic Operations UI' \
  'Industry Operations UI' \
  'WYSIWYG Editor UI' \
  'Editor runtime' \
  'Representative Subcontracts' \
  'layout frame, public layout, master-detail layout' \
  'dialog, drawer, popover, toast' \
  'filter input, filter chip, file input' \
  'combobox, multi-select, token input' \
  'tab workspace, dock panel, status bar' \
  'agenda view, time slot grid, resource calendar' \
  'budget panel, expense card, purchase request' \
  'objective card, key result tracker, initiative map' \
  'shipment tracker, warehouse bin card, inventory movement row' \
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

for doc_term in \
  'Adlaire-Design-System' \
  'Deno TypeScript' \
  'npm packages' \
  'Component_Contract_Matrix' \
  'Samples are supporting' \
  'official 1520 SVG icons' \
  'startup synchronization' \
  'matching merged branch' \
  'local Git consistency baseline' \
  'merge commits only' \
  'stale merged branch' \
  'family-labelled diagnostics' \
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
