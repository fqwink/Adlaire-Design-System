import type { CssRuleFile } from "./rules-types.ts";
import { FORMS_FOUNDATION_CSS } from "./rules-forms-foundation.ts";
import { FORMS_COMPOSITE_CSS } from "./rules-forms-composite.ts";
import { FORMS_UPLOAD_CSS } from "./rules-forms-upload.ts";
import { FORMS_VALIDATION_CSS } from "./rules-forms-validation.ts";

const FORMS_CSS = [
  FORMS_FOUNDATION_CSS,
  FORMS_COMPOSITE_CSS,
  FORMS_UPLOAD_CSS,
  FORMS_VALIDATION_CSS,
].join("");

export const FORMS_RULE_FILE: CssRuleFile = {
  path: "UI/forms.css",
  css: FORMS_CSS,
} as const;
