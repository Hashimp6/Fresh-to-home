var button = document.getElementById('log');

// Add an event listener to the button
button.addEventListener('click', function() {
  // Display an alert when the button is clicked
  alert('Successfully logged in!');
  button.innerHTML=('User logged in');
});