import { WYSIWYG_SUPPORT_EDITING_CSS } from "./rules-wysiwyg-support-editing.ts";
import { WYSIWYG_SUPPORT_PANELS_CSS } from "./rules-wysiwyg-support-panels.ts";
import { WYSIWYG_SUPPORT_ADVANCED_CSS } from "./rules-wysiwyg-support-advanced.ts";
import { WYSIWYG_SUPPORT_MOTION_CSS } from "./rules-wysiwyg-support-motion.ts";
import { WYSIWYG_SUPPORT_TABLET_CSS } from "./rules-wysiwyg-support-tablet.ts";
import { WYSIWYG_SUPPORT_MOBILE_CSS } from "./rules-wysiwyg-support-mobile.ts";

export const WYSIWYG_SUPPORT_CSS = [
  WYSIWYG_SUPPORT_EDITING_CSS,
  WYSIWYG_SUPPORT_PANELS_CSS,
  WYSIWYG_SUPPORT_ADVANCED_CSS,
  WYSIWYG_SUPPORT_MOTION_CSS,
  WYSIWYG_SUPPORT_TABLET_CSS,
  WYSIWYG_SUPPORT_MOBILE_CSS,
].join("");
