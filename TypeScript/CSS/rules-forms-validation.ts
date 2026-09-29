import { FORMS_VALIDATION_FIELDS_CSS } from "./rules-forms-validation-fields.ts";
import { FORMS_VALIDATION_ADMIN_CSS } from "./rules-forms-validation-admin.ts";
import { FORMS_VALIDATION_STEPPER_CSS } from "./rules-forms-validation-stepper.ts";
import { FORMS_VALIDATION_BUILDER_CSS } from "./rules-forms-validation-builder.ts";
import { FORMS_VALIDATION_RESPONSIVE_CSS } from "./rules-forms-validation-responsive.ts";
import { FORMS_VALIDATION_ALIASES_CSS } from "./rules-forms-validation-aliases.ts";

export const FORMS_VALIDATION_CSS = [
  FORMS_VALIDATION_FIELDS_CSS,
  FORMS_VALIDATION_ADMIN_CSS,
  FORMS_VALIDATION_STEPPER_CSS,
  FORMS_VALIDATION_BUILDER_CSS,
  FORMS_VALIDATION_RESPONSIVE_CSS,
  FORMS_VALIDATION_ALIASES_CSS,
].join("");
