let userScore = 0, computerScore = 0;

function play(userChoice) {
  const choices = ['rock', 'paper', 'scissors'];
  const computerChoice = choices[Math.floor(Math.random() * 3)];
  const emoji = { rock: '✊', paper: '📄', scissors: '✂️' };
  
  let outcome = '';
  if (userChoice === computerChoice) {
    outcome = 'draw';
  } else if (
    (userChoice === 'rock' && computerChoice === 'scissors') ||
    (userChoice === 'paper' && computerChoice === 'rock') ||
    (userChoice === 'scissors' && computerChoice === 'paper')
  ) {
    outcome = 'win';
    userScore++;
  } else {
    outcome = 'lose';
    computerScore++;
  }
  
  const result = document.getElementById('result');
  const resultText = `${emoji[userChoice]} vs ${emoji[computerChoice]}<br>`;
  result.innerHTML = resultText + (outcome === 'win' ? '🎉 You won!' : outcome === 'lose' ? '😢 You lost!' : '🤝 Draw!');
  result.className = 'result ' + outcome;
  
  document.getElementById('score').textContent = `You: ${userScore} | Computer: ${computerScore}`;
}