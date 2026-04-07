import "../css/global.css";
import "../css/components.css";

import { initBottomNavScroll, initGlobalUI } from "./global";

async function initKalenderPage(): Promise<void> {
  await initGlobalUI();
  initBottomNavScroll();
}

initKalenderPage();