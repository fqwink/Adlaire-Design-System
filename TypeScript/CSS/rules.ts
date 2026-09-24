export type { CssDeclaration, CssDeclarationValue, CssRule, CssRuleFile } from "./rules-types.ts";

import { ADLAIRE_RULE_FILE } from "./rules-adlaire.ts";
import { BASE_RULE_FILE } from "./rules-base.ts";
import { GRID_RULE_FILE } from "./rules-grid.ts";
import { LAYOUT_RULE_FILE } from "./rules-layout.ts";
import { COMPONENTS_RULE_FILE } from "./rules-components.ts";
import { SITE_RULE_FILE } from "./rules-site.ts";
import { FORMS_RULE_FILE } from "./rules-forms.ts";
import { CONTENT_RULE_FILE } from "./rules-content.ts";
import { UTILITIES_RULE_FILE } from "./rules-utilities.ts";
import { COMPAT_AGWS_RULE_FILE } from "./rules-compat-agws.ts";
import { WYSIWYG_RULE_FILE } from "./rules-wysiwyg.ts";

export const RULE_FILES = [
  ADLAIRE_RULE_FILE,
  BASE_RULE_FILE,
  GRID_RULE_FILE,
  LAYOUT_RULE_FILE,
  COMPONENTS_RULE_FILE,
  SITE_RULE_FILE,
  FORMS_RULE_FILE,
  CONTENT_RULE_FILE,
  UTILITIES_RULE_FILE,
  COMPAT_AGWS_RULE_FILE,
  WYSIWYG_RULE_FILE,
] as const;

export function ruleCssForPath(path: string): string | undefined {
  return RULE_FILES.find((file) => file.path === path)?.css;
}
