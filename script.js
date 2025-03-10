<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Change Message Example</title>
  <script>
    function changeMessage() {
      const pElement = document.getElementById('message');
      pElement.textContent = 'Hello! You clicked the button!';}
  </script>
</head>
<body>
  <p id="message">Click the button to see a message.</p>
  <button onclick="changeMessage()">Click Me!</button>
</body>
</html>
