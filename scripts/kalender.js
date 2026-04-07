// js/kalender.js

document.addEventListener('DOMContentLoaded', () => {
  // 1. Grab our elements
  const btnSickToday = document.getElementById('btn-sick-today');
  
  // For the mockup, let's pretend today is Wednesday (index 2 in our grid, since Mon=0, Tue=1, Wed=2)
  // In a real app, we'd use new Date().getDay() to find the real current day.
  const todayIndex = 2; 
  const dayRows = document.querySelectorAll('.day-row');

  // 2. Add the click event listener to the Sick button
  btnSickToday.addEventListener('click', () => {
    
    // A. Visual feedback on the button itself
    btnSickToday.textContent = '✔️ Sjukanmäld';
    btnSickToday.style.backgroundColor = '#5cb85c'; // Turn it a reassuring green
    btnSickToday.disabled = true; // Prevent double-clicking

    // B. Simulate the "Zero-Out" logic for the pedagogues
    // Find today's row in the grid
    const todayRow = dayRows[todayIndex];
    
    if (todayRow) {
      // Find the time inputs for today
      const inputs = todayRow.querySelectorAll('input[type="time"]');
      
      // Clear their values and disable them to show they are "zeroed out"
      inputs.forEach(input => {
        input.value = '';
        input.disabled = true;
      });

      // Add a little text tag to explain what happened
      const timeContainer = todayRow.querySelector('.time-inputs');
      const sickLabel = document.createElement('span');
      sickLabel.textContent = 'Sjuk (0 timmar)';
      sickLabel.style.color = '#d9534f';
      sickLabel.style.fontWeight = 'bold';
      sickLabel.style.fontSize = '0.9rem';
      
      // Append the label after clearing the inputs
      timeContainer.appendChild(sickLabel);
    }
  });
});