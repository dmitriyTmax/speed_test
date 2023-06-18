// Get reference to the span elements
const startBtn = document.querySelector('.start-btn');
const measuringBtn = document.querySelector('.measuring-btn');

// Function to add the hide class to start-btn span and remove it from measuring-btn span
function hideStartBtn() {
  startBtn.classList.add('hide');
  measuringBtn.classList.remove('hide');
}

// Function to revert the changes
function revertChanges() {
  startBtn.classList.remove('hide');
  measuringBtn.classList.add('hide');
}

// Add event listener to start-btn span
startBtn.addEventListener('click', () => {
  // Call the hideStartBtn function when start-btn span is pressed
  hideStartBtn();
  
  // Wait for 20 seconds and revert the changes
  setTimeout(revertChanges, 20000);
});
