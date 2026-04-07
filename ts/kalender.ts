import { initGlobalUI } from "./global";
import "../css/global.css"
import "../css/components.css";
import "../css/kalender.css"

async function initPage(): Promise<void> {
  await initGlobalUI();

  // din extra dashboard-logik här
}

initPage();