import "../css/global.css";
import "../css/components.css";

import { initBottomNavScroll, initGlobalUI } from "./global";

async function initInformationPage(): Promise<void> {
  await initGlobalUI();
  initBottomNavScroll();
}

initInformationPage();