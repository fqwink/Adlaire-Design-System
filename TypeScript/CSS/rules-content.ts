import type { CssRuleFile } from "./rules-types.ts";
import { CONTENT_FOUNDATION_CSS } from "./rules-content-foundation.ts";
import { CONTENT_EXTENDED_CSS } from "./rules-content-extended.ts";
import { CONTENT_CATALOG_CSS } from "./rules-content-catalog.ts";
import { CONTENT_INTERACTIONS_CSS } from "./rules-content-interactions.ts";

const CONTENT_CSS = [
  CONTENT_FOUNDATION_CSS,
  CONTENT_EXTENDED_CSS,
  CONTENT_CATALOG_CSS,
  CONTENT_INTERACTIONS_CSS,
].join("");

export const CONTENT_RULE_FILE: CssRuleFile = {
  path: "UI/content.css",
  css: CONTENT_CSS,
} as const;
