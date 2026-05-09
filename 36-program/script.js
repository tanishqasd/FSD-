let heads = 0, tails = 0;

function flip() {
  const result = Math.random() < 0.5 ? 'Heads' : 'Tails';
  if (result === 'Heads') heads++;
  else tails++;
  
  document.getElementById('result').textContent = result === 'Heads' ? '🪙 Heads' : '🪙 Tails';
  document.getElementById('stats').textContent = `Heads: ${heads} | Tails: ${tails}`;
}