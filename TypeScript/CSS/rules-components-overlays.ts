import { COMPONENTS_OVERLAY_SURFACES_CSS } from "./rules-components-overlays-surfaces.ts";
import { COMPONENTS_OVERLAY_CAROUSEL_CSS } from "./rules-components-overlays-carousel.ts";
import { COMPONENTS_OVERLAY_TOOLTIP_CSS } from "./rules-components-overlays-tooltip.ts";
import { COMPONENTS_OVERLAY_RESPONSIVE_CSS } from "./rules-components-overlays-responsive.ts";
import { COMPONENTS_OVERLAY_CATALOG_CSS } from "./rules-components-overlays-catalog.ts";

export const COMPONENTS_OVERLAY_CSS = [
  COMPONENTS_OVERLAY_SURFACES_CSS,
  COMPONENTS_OVERLAY_CAROUSEL_CSS,
  COMPONENTS_OVERLAY_TOOLTIP_CSS,
  COMPONENTS_OVERLAY_RESPONSIVE_CSS,
  COMPONENTS_OVERLAY_CATALOG_CSS,
].join("");
