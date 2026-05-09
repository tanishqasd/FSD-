let secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
  const guess = parseInt(document.getElementById('guess').value);
  const message = document.getElementById('message');
  attempts++;
  
  if (isNaN(guess) || guess < 1 || guess > 100) {
    message.textContent = 'Enter a valid number!';
    return;
  }
  
  if (guess === secretNumber) {
    message.textContent = `🎉 Correct! Found in ${attempts} attempts!`;
    message.className = 'message correct';
    document.getElementById('guess').disabled = true;
    document.querySelector('.btn').disabled = true;
  } else if (guess > secretNumber) {
    message.textContent = `📉 Too high! Try again.`;
    message.className = 'message toohigh';
  } else {
    message.textContent = `📈 Too low! Try again.`;
    message.className = 'message toolow';
  }
  
  document.getElementById('stats').textContent = `Attempts: ${attempts}`;
}