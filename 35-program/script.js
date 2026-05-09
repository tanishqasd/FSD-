let rolls = [];

function rollDice() {
  const result = Math.floor(Math.random() * 6) + 1;
  const emojis = ['⚀', '⚁', '⚂', '⚃', '⚄', '⚅'];
  document.getElementById('result').textContent = emojis[result - 1];
  
  rolls.unshift(result);
  if (rolls.length > 10) rolls.pop();
  
  document.getElementById('history').innerHTML = '<strong>Last 10:</strong> ' + rolls.join(', ');
}