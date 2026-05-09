const questions = [
  { q: 'What is 2+2?', choices: ['3', '4', '5', '6'], answer: '4' },
  { q: 'Capital of France?', choices: ['London', 'Berlin', 'Paris', 'Rome'], answer: 'Paris' },
  { q: 'Largest planet?', choices: ['Saturn', 'Jupiter', 'Mars', 'Venus'], answer: 'Jupiter' },
  { q: '5 x 6?', choices: ['25', '30', '35', '40'], answer: '30' },
  { q: 'HTML stands for?', choices: ['Markup Language', 'HyperText Markup Language', 'High Tech', 'Home Tool'], answer: 'HyperText Markup Language' }
];

let currentQ = 0;
let score = 0;

function loadQuestion() {
  const q = questions[currentQ];
  document.getElementById('question').textContent = q.q;
  const choicesDiv = document.getElementById('choices');
  choicesDiv.innerHTML = '';
  q.choices.forEach(choice => {
    const btn = document.createElement('button');
    btn.textContent = choice;
    btn.onclick = () => checkAnswer(choice);
    choicesDiv.appendChild(btn);
  });
}

function checkAnswer(chosen) {
  if (chosen === questions[currentQ].answer) score++;
  currentQ++;
  document.getElementById('score').textContent = `Score: ${score}/${currentQ}`;
  if (currentQ < questions.length) loadQuestion();
  else document.getElementById('question').textContent = `Quiz Complete! Final Score: ${score}/${questions.length}`;
}

loadQuestion();