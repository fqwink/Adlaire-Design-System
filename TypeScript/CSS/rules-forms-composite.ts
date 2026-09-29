import { FORMS_COMPOSITE_FILTERS_CSS } from "./rules-forms-composite-filters.ts";
import { FORMS_COMPOSITE_INPUT_GROUPS_CSS } from "./rules-forms-composite-input-groups.ts";
import { FORMS_COMPOSITE_DATE_TIME_CSS } from "./rules-forms-composite-date-time.ts";
import { FORMS_COMPOSITE_SELECTS_CSS } from "./rules-forms-composite-selects.ts";
import { FORMS_COMPOSITE_TOKENS_CSS } from "./rules-forms-composite-tokens.ts";
import { FORMS_COMPOSITE_CALENDAR_CSS } from "./rules-forms-composite-calendar.ts";

export const FORMS_COMPOSITE_CSS = [
  FORMS_COMPOSITE_FILTERS_CSS,
  FORMS_COMPOSITE_INPUT_GROUPS_CSS,
  FORMS_COMPOSITE_DATE_TIME_CSS,
  FORMS_COMPOSITE_SELECTS_CSS,
  FORMS_COMPOSITE_TOKENS_CSS,
  FORMS_COMPOSITE_CALENDAR_CSS,
].join("");
