import type { CssRuleFile } from "./rules-types.ts";
import { WYSIWYG_SHELL_CSS } from "./rules-wysiwyg-shell.ts";
import { WYSIWYG_TOOLBAR_CSS } from "./rules-wysiwyg-toolbar.ts";
import { WYSIWYG_BLOCKS_CSS } from "./rules-wysiwyg-blocks.ts";
import { WYSIWYG_SUPPORT_CSS } from "./rules-wysiwyg-support.ts";
import { WYSIWYG_EXTENSIONS_CSS } from "./rules-wysiwyg-extensions.ts";

const WYSIWYG_CSS = [
  WYSIWYG_SHELL_CSS,
  WYSIWYG_TOOLBAR_CSS,
  WYSIWYG_BLOCKS_CSS,
  WYSIWYG_SUPPORT_CSS,
  WYSIWYG_EXTENSIONS_CSS,
].join("");

export const WYSIWYG_RULE_FILE: CssRuleFile = {
  path: "EditorUI/wysiwyg.css",
  css: WYSIWYG_CSS,
} as const;
