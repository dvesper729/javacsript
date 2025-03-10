const button = document.getElementById('messageButton')
button.addEventListener('click', function() {
  const pElement = document.getElementById('message')
  pElement.textContent = 'Hello! You clicked the button!'
});
