// Animate button on click
const animateButton = document.getElementById('animateButton');
animateButton.addEventListener('click', () => {
  animateButton.classList.add('animate');

  // Remove the animation class after animation ends (so it can re-trigger)
  setTimeout(() => {
    animateButton.classList.remove('animate');
  }, 500);
});

// Save username to localStorage
const saveButton = document.getElementById('saveButton');
const usernameInput = document.getElementById('username');

saveButton.addEventListener('click', () => {
  const username = usernameInput.value;
  if (username) {
    localStorage.setItem('savedUsername', username);
    alert(`Hello, ${username}! Your name has been saved.`);
  } else {
    alert('Please enter a name.');
  }
});

// Display saved username if it exists
window.addEventListener('load', () => {
  const savedName = localStorage.getItem('savedUsername');
  if (savedName) {
    document.getElementById('welcome').textContent = `Welcome back, ${savedName}!`;
  }
});
