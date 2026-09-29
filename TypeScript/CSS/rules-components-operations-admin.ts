import { COMPONENTS_OPERATIONS_ADMIN_LAYOUT_CSS } from "./rules-components-operations-admin-layout.ts";
import { COMPONENTS_OPERATIONS_ADMIN_STATES_CSS } from "./rules-components-operations-admin-states.ts";
import { COMPONENTS_OPERATIONS_ADMIN_ACTIONS_CSS } from "./rules-components-operations-admin-actions.ts";
import { COMPONENTS_OPERATIONS_ADMIN_GOVERNANCE_CSS } from "./rules-components-operations-admin-governance.ts";
import { COMPONENTS_OPERATIONS_ADMIN_DELIVERY_CSS } from "./rules-components-operations-admin-delivery.ts";
import { COMPONENTS_OPERATIONS_ADMIN_LIFECYCLE_CSS } from "./rules-components-operations-admin-lifecycle.ts";
import { COMPONENTS_OPERATIONS_ADMIN_OBSERVABILITY_CSS } from "./rules-components-operations-admin-observability.ts";
import { COMPONENTS_OPERATIONS_ADMIN_SECURITY_CSS } from "./rules-components-operations-admin-security.ts";

export const COMPONENTS_OPERATIONS_ADMIN_CSS = [
  COMPONENTS_OPERATIONS_ADMIN_LAYOUT_CSS,
  COMPONENTS_OPERATIONS_ADMIN_STATES_CSS,
  COMPONENTS_OPERATIONS_ADMIN_ACTIONS_CSS,
  COMPONENTS_OPERATIONS_ADMIN_GOVERNANCE_CSS,
  COMPONENTS_OPERATIONS_ADMIN_DELIVERY_CSS,
  COMPONENTS_OPERATIONS_ADMIN_LIFECYCLE_CSS,
  COMPONENTS_OPERATIONS_ADMIN_OBSERVABILITY_CSS,
  COMPONENTS_OPERATIONS_ADMIN_SECURITY_CSS,
].join("");
