import "../css/global.css";
import "../css/components.css";
import "../css/loggbok.css";

import { initBottomNavScroll, initGlobalUI } from "./global";

function injectResponseTemplate(): void {
  const template = document.querySelector<HTMLTemplateElement>("#response-template");
  const logEntries = document.querySelectorAll<HTMLElement>(".log-entry");

  if (!template) return;

  logEntries.forEach((entry) => {
    if (entry.dataset.noResponse === "true") return;

    const clone = template.content.cloneNode(true);
    entry.appendChild(clone);
  });
}

function setupResponseButtons(): void {
  const responseGroups = document.querySelectorAll<HTMLElement>(".response-actions");

  responseGroups.forEach((group) => {
    const buttons = group.querySelectorAll<HTMLButtonElement>(".response-btn");

    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        const isAlreadyActive = button.classList.contains("active");

        buttons.forEach((btn) => btn.classList.remove("active"));

        if (!isAlreadyActive) {
          button.classList.add("active");
        }
      });
    });
  });
}

function setupPreviousDaysToggle(): void {
  const toggleButton = document.querySelector<HTMLButtonElement>("#toggle-previous-days");
  const previousDaysSection = document.querySelector<HTMLElement>("#previous-days");

  if (!toggleButton || !previousDaysSection) return;

  toggleButton.addEventListener("click", () => {
    previousDaysSection.classList.toggle("hidden");

    const isHidden = previousDaysSection.classList.contains("hidden");
    toggleButton.textContent = isHidden ? "Visa tidigare dagar" : "Dölj tidigare dagar";
  });
}

async function initLoggbokPage(): Promise<void> {
  await initGlobalUI();
  injectResponseTemplate();
  setupResponseButtons();
  setupPreviousDaysToggle();
  initBottomNavScroll();
}

initLoggbokPage();