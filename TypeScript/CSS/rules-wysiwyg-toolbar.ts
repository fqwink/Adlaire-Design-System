import { WYSIWYG_TOOLBAR_LAYOUT_CSS } from "./rules-wysiwyg-toolbar-layout.ts";
import { WYSIWYG_TOOLBAR_TOOLS_CSS } from "./rules-wysiwyg-toolbar-tools.ts";
import { WYSIWYG_TOOLBAR_FOCUS_CSS } from "./rules-wysiwyg-toolbar-focus.ts";
import { WYSIWYG_TOOLBAR_DISABLED_CSS } from "./rules-wysiwyg-toolbar-disabled.ts";

export const WYSIWYG_TOOLBAR_CSS = [
  WYSIWYG_TOOLBAR_LAYOUT_CSS,
  WYSIWYG_TOOLBAR_TOOLS_CSS,
  WYSIWYG_TOOLBAR_FOCUS_CSS,
  WYSIWYG_TOOLBAR_DISABLED_CSS,
].join("");
