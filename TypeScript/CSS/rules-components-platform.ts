import { COMPONENTS_PLATFORM_DEVELOPER_CSS } from "./rules-components-platform-developer.ts";
import { COMPONENTS_PLATFORM_THEME_CSS } from "./rules-components-platform-theme.ts";
import { COMPONENTS_PLATFORM_STATES_CSS } from "./rules-components-platform-states.ts";
import { COMPONENTS_PLATFORM_GITHUB_CSS } from "./rules-components-platform-github.ts";
import { COMPONENTS_PLATFORM_CLOUD_CSS } from "./rules-components-platform-cloud.ts";
import { COMPONENTS_PLATFORM_SURFACES_CSS } from "./rules-components-platform-surfaces.ts";

export const COMPONENTS_PLATFORM_CSS = [
  COMPONENTS_PLATFORM_DEVELOPER_CSS,
  COMPONENTS_PLATFORM_THEME_CSS,
  COMPONENTS_PLATFORM_STATES_CSS,
  COMPONENTS_PLATFORM_GITHUB_CSS,
  COMPONENTS_PLATFORM_CLOUD_CSS,
  COMPONENTS_PLATFORM_SURFACES_CSS,
].join("");
