const words = ['javascript', 'programming', 'hangman', 'computer', 'algorithm'];
const word = words[Math.floor(Math.random() * words.length)].split('');
let guessed = [];
let wrong = [];

function displayWord() {
  const display = word.map(l => guessed.includes(l) ? l : '_').join(' ');
  document.getElementById('word').textContent = display;
}

function guessLetter() {
  const letter = document.getElementById('guess').value.toLowerCase();
  document.getElementById('guess').value = '';
  
  if (!letter || guessed.includes(letter) || wrong.includes(letter)) return;
  
  if (word.includes(letter)) {
    guessed.push(letter);
  } else {
    wrong.push(letter);
  }
  
  displayWord();
  document.getElementById('guessed').textContent = `Guessed: ${guessed.join(', ')} | Wrong: ${wrong.join(', ')}`;
  
  if (word.every(l => guessed.includes(l))) {
    document.getElementById('message').textContent = '🎉 You won!';
    document.getElementById('message').className = 'message win';
  } else if (wrong.length >= 6) {
    document.getElementById('message').textContent = '😢 You lost! Word: ' + word.join('');
    document.getElementById('message').className = 'message lose';
  }
}

displayWord();