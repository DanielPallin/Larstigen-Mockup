import { initGlobalUI } from "./global";
import "/css/global.css";
import "/css/components.css";
import "/css/kalender.css";
import "../css/global.css";
import "../css/components.css";
import "../css/kalender.css";

function setupViewToggles(): void {
  // 1. Grab all the buttons and all the view sections
  const viewButtons = document.querySelectorAll<HTMLButtonElement>(".view-btn");
  const viewSections = document.querySelectorAll<HTMLElement>(".view-section");

  // 2. Loop through each button and listen for a click
  viewButtons.forEach((button) => {
    button.addEventListener("click", () => {
      
      // Step A: Reset all buttons (remove the green background)
      viewButtons.forEach((btn) => btn.classList.remove("active"));
      
      // Step B: Make the clicked button active
      button.classList.add("active");

      // Step C: Find out which view this button is supposed to open
      const targetId = button.getAttribute("data-target");

      // Step D: Loop through all sections. Show the target one, hide the rest!
      viewSections.forEach((section) => {
        if (section.id === targetId) {
          section.style.display = "block"; // Show it
        } else {
          section.style.display = "none";  // Hide it
        }
      });
      
    });
  });
}

function generateMonthView(year: number, month: number): void {
  const grid = document.getElementById("month-grid");
  if (!grid) return;

  // Step 1: The Math
  // JS Date months are 0-indexed (0 = Jan, 3 = April).
  // Getting day 0 of the *next* month magically gives us the total days of *this* month!
  const daysInMonth = new Date(year, month + 1, 0).getDate(); 
  
  // Get the weekday of the 1st of the month. JS says Sunday = 0, Monday = 1.
  const firstDay = new Date(year, month, 1).getDay(); 
  
  // Swedish weeks start on Monday! So we convert the JS math: 
  // If it's Sunday (0), make it index 6. Otherwise, shift it back by 1.
  const emptyBlocksToStart = firstDay === 0 ? 6 : firstDay - 1;

  // Step 2: The Painting (Injecting into HTML)
  // First, inject the empty blocks for the offset
  for (let i = 0; i < emptyBlocksToStart; i++) {
    const emptyDiv = document.createElement("div");
    emptyDiv.className = "month-day empty";
    grid.appendChild(emptyDiv);
  }

  // Next, loop through the actual days and create the squares
  for (let day = 1; day <= daysInMonth; day++) {
    const dayDiv = document.createElement("div");
    dayDiv.className = "month-day";
    dayDiv.textContent = day.toString();

    // --- MOCKUP DATA ---
    // Let's pretend today is April 7th, 2026, and Alice has a schedule these days:
    if (day === 7) {
      dayDiv.classList.add("is-today");
    }
    
    if ([2, 3, 6, 8, 9, 10].includes(day)) {
      dayDiv.classList.add("has-schedule");
    }
    
    // Quick math to check if this day falls on a weekend
    const currentWeekday = (emptyBlocksToStart + day - 1) % 7;
    if (currentWeekday === 5 || currentWeekday === 6) { // 5=Sat, 6=Sun
      dayDiv.classList.add("weekend");
    }

    grid.appendChild(dayDiv);
  }
}

async function initPage(): Promise<void> {
  await initGlobalUI();
  setupViewToggles();
  
  // Generate April 2026!
  generateMonthView(2026, 3); 

async function initPage(): Promise<void> {
  await initGlobalUI(); // Loads bottom nav scrolling, etc.
  
  // Get the weekday of the 1st of the month. JS says Sunday = 0, Monday = 1.
  const firstDay = new Date(year, month, 1).getDay(); 
  
  // Swedish weeks start on Monday! So we convert the JS math: 
  // If it's Sunday (0), make it index 6. Otherwise, shift it back by 1.
  const emptyBlocksToStart = firstDay === 0 ? 6 : firstDay - 1;

  // Step 2: The Painting (Injecting into HTML)
  // First, inject the empty blocks for the offset
  for (let i = 0; i < emptyBlocksToStart; i++) {
    const emptyDiv = document.createElement("div");
    emptyDiv.className = "month-day empty";
    grid.appendChild(emptyDiv);
  }

  // Next, loop through the actual days and create the squares
  for (let day = 1; day <= daysInMonth; day++) {
    const dayDiv = document.createElement("div");
    dayDiv.className = "month-day";
    dayDiv.textContent = day.toString();

    // --- MOCKUP DATA ---
    // Let's pretend today is April 7th, 2026, and Alice has a schedule these days:
    if (day === 7) {
      dayDiv.classList.add("is-today");
    }
    
    if ([2, 3, 6, 8, 9, 10].includes(day)) {
      dayDiv.classList.add("has-schedule");
    }
    
    // Quick math to check if this day falls on a weekend
    const currentWeekday = (emptyBlocksToStart + day - 1) % 7;
    if (currentWeekday === 5 || currentWeekday === 6) { // 5=Sat, 6=Sun
      dayDiv.classList.add("weekend");
    }

    grid.appendChild(dayDiv);
  }
}

async function initPage(): Promise<void> {
  await initGlobalUI();
  setupViewToggles();
  
  // Generate April 2026!
  generateMonthView(2026, 3); 
}

initPage();