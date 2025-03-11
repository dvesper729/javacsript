const messageButton = document.getElementById('messageButton');
messageButton.addEventListener('click', function() {
  const pElement = document.getElementById('message');
  pElement.textContent = 'Hello! You clicked the button!';
});

const colors = ['red', 'blue', 'green', 'yellow', 'purple'];
function changeBackgroundColor() {
  const bodyElement = document.body;
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  bodyElement.style.backgroundColor = randomColor;
}

const colorChangeButton = document.getElementById('colorchangebutton');
colorChangeButton.addEventListener('click', changeBackgroundColor);
