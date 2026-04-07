import "../css/global.css";
import "../css/components.css";

import { initBottomNavScroll, initGlobalUI } from "./global";

async function initBarnprofilPage(): Promise<void> {
  await initGlobalUI();
  initBottomNavScroll();
}

initBarnprofilPage();