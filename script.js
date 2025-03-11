const messageButton = document.getElementById('messageButton');
messageButton.addEventListener('click', function() {
  const pElement = document.getElementById('message');
  pElement.textContent = 'Hello! You clicked the button!';
});

const colors = ['darkslategrey', 'darkred', 'cadetblue', 'blanchedalmond', 'coral'];
function changeBackgroundColor() {
  const bodyElement = document.body;
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  bodyElement.style.backgroundColor = randomColor;
}

const colorchangebutton = document.getElementById('colorchangebutton');
colorchangebutton.addEventListener('click', changeBackgroundColor);

function displayGreeting() {
    let name = document.getElementById("name").value;
    let greetingMessage = "Hello, " + name + "!";
    document.getElementById("greeting").textContent = greetingMessage;
}

const nameentrybutton = document.getElementById('nameentrybutton');
nameentrybutton.addEventListener("click", displayGreeting);

document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();
    displayGreeting();
});
