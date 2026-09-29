import { CONTENT_INTERACTIONS_SORTING_CSS } from "./rules-content-interactions-sorting.ts";
import { CONTENT_INTERACTIONS_DESKTOP_CSS } from "./rules-content-interactions-desktop.ts";
import { CONTENT_INTERACTIONS_TABLET_CSS } from "./rules-content-interactions-tablet.ts";
import { CONTENT_INTERACTIONS_MOBILE_CSS } from "./rules-content-interactions-mobile.ts";

export const CONTENT_INTERACTIONS_CSS = [
  CONTENT_INTERACTIONS_SORTING_CSS,
  CONTENT_INTERACTIONS_DESKTOP_CSS,
  CONTENT_INTERACTIONS_TABLET_CSS,
  CONTENT_INTERACTIONS_MOBILE_CSS,
].join("");
