const button = document.getElementById('messageButton')
button.addEventListener('click', function() {
  const pElement = document.getElementById('message')
  pElement.textContent = 'Hello! You clicked the button!'})
const colors = ['red', 'blue', 'green', 'yellow', 'purple'];
    function changeBackgroundColor() {
    const bodyElement = document.body
    const randomColor = colors[Math.floor(Math.random() * colors.length)]
      bodyElement.style.backgroundColor = randomColor}
const button = document.getElementById('colorchangebutton')
button.addEventListener('click', changeBackgroundColor)
