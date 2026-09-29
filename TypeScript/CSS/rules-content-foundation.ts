import { CONTENT_FOUNDATION_BASE_CSS } from "./rules-content-foundation-base.ts";
import { CONTENT_FOUNDATION_PATTERNS_CSS } from "./rules-content-foundation-patterns.ts";
import { CONTENT_FOUNDATION_ORGANIZATION_CSS } from "./rules-content-foundation-organization.ts";
import { CONTENT_FOUNDATION_TIMELINE_CSS } from "./rules-content-foundation-timeline.ts";
import { CONTENT_FOUNDATION_TABS_CSS } from "./rules-content-foundation-tabs.ts";
import { CONTENT_FOUNDATION_NEWS_CSS } from "./rules-content-foundation-news.ts";

export const CONTENT_FOUNDATION_CSS = [
  CONTENT_FOUNDATION_BASE_CSS,
  CONTENT_FOUNDATION_PATTERNS_CSS,
  CONTENT_FOUNDATION_ORGANIZATION_CSS,
  CONTENT_FOUNDATION_TIMELINE_CSS,
  CONTENT_FOUNDATION_TABS_CSS,
  CONTENT_FOUNDATION_NEWS_CSS,
].join("");
