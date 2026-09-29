import type { CssRuleFile } from "./rules-types.ts";
import { COMPONENTS_FOUNDATION_CSS } from "./rules-components-foundation.ts";
import { COMPONENTS_OPERATIONS_CSS } from "./rules-components-operations.ts";
import { COMPONENTS_OVERLAY_CSS } from "./rules-components-overlays.ts";
import { COMPONENTS_PLATFORM_CSS } from "./rules-components-platform.ts";

const COMPONENTS_CSS = [
  COMPONENTS_FOUNDATION_CSS,
  COMPONENTS_OVERLAY_CSS,
  COMPONENTS_OPERATIONS_CSS,
  COMPONENTS_PLATFORM_CSS,
].join("");

export const COMPONENTS_RULE_FILE: CssRuleFile = {
  path: "UI/components.css",
  css: COMPONENTS_CSS,
} as const;
