const messageButton = document.getElementById('messageButton')
messageButton.addEventListener('click', function() {
  const pElement = document.getElementById('message')
  pElement.textContent = 'Hello! You clicked the button!'
})

const colors = ['darkslategrey', 'darkred', 'cadetblue', 'blanchedalmond', 'coral']
function changebackgroundcolor() {
  const bodyElement = document.body
  const randomColor = colors[Math.floor(Math.random() * colors.length)]
  bodyElement.style.backgroundColor = randomColor
}

const colorchangebutton = document.getElementById('colorchangebutton')
colorchangebutton.addEventListener('click', changeBackgroundColor)

function namegreeting() {
    let name = document.getElementById("nameentry").value
    let greetingMessage = "Hello, " + name + "!"
    document.getElementById("greeting").textContent = greetingMessage
}
