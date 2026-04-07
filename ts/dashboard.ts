import "../css/global.css";
import "../css/components.css";

import { initBottomNavScroll, initGlobalUI } from "./global";

async function initDashboardPage(): Promise<void> {
  await initGlobalUI();
  initBottomNavScroll();
}

initDashboardPage();