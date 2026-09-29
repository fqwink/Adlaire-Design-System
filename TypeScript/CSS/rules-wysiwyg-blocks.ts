import { WYSIWYG_BLOCKS_CORE_CSS } from "./rules-wysiwyg-blocks-core.ts";
import { WYSIWYG_BLOCKS_MENUS_CSS } from "./rules-wysiwyg-blocks-menus.ts";
import { WYSIWYG_BLOCKS_PREVIEW_CSS } from "./rules-wysiwyg-blocks-preview.ts";
import { WYSIWYG_BLOCKS_TYPES_CSS } from "./rules-wysiwyg-blocks-types.ts";
import { WYSIWYG_BLOCKS_STATES_CSS } from "./rules-wysiwyg-blocks-states.ts";
import { WYSIWYG_BLOCKS_MOBILE_CSS } from "./rules-wysiwyg-blocks-mobile.ts";

export const WYSIWYG_BLOCKS_CSS = [
  WYSIWYG_BLOCKS_CORE_CSS,
  WYSIWYG_BLOCKS_MENUS_CSS,
  WYSIWYG_BLOCKS_PREVIEW_CSS,
  WYSIWYG_BLOCKS_TYPES_CSS,
  WYSIWYG_BLOCKS_STATES_CSS,
  WYSIWYG_BLOCKS_MOBILE_CSS,
].join("");
