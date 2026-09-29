import { COMPONENTS_FOUNDATION_CORE_CSS } from "./rules-components-foundation-core.ts";
import { COMPONENTS_FOUNDATION_MEDIA_CSS } from "./rules-components-foundation-media.ts";
import { COMPONENTS_FOUNDATION_DOMAINS_CSS } from "./rules-components-foundation-domains.ts";
import { COMPONENTS_FOUNDATION_SUPPORT_CSS } from "./rules-components-foundation-support.ts";

export const COMPONENTS_FOUNDATION_CSS = [
  COMPONENTS_FOUNDATION_CORE_CSS,
  COMPONENTS_FOUNDATION_MEDIA_CSS,
  COMPONENTS_FOUNDATION_DOMAINS_CSS,
  COMPONENTS_FOUNDATION_SUPPORT_CSS,
].join("");
