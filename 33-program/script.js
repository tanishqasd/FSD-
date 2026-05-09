const emojis = ['🍎', '🍌', '🍇', '🍓', '🍊', '🍋', '🍉', '🍒'];
let cards = [...emojis, ...emojis].sort(() => Math.random() - 0.5);
let flipped = [];
let matched = [];

const board = document.getElementById('board');
cards.forEach((emoji, i) => {
  const card = document.createElement('button');
  card.className = 'card';
  card.textContent = '?';
  card.onclick = () => flipCard(card, i);
  board.appendChild(card);
});

function flipCard(card, index) {
  if (flipped.length === 2 || flipped.includes(index) || matched.includes(index)) return;
  
  card.textContent = cards[index];
  flipped.push(index);
  
  if (flipped.length === 2) {
    setTimeout(() => {
      if (cards[flipped[0]] === cards[flipped[1]]) {
        matched.push(...flipped);
        document.querySelectorAll('.card')[flipped[0]].classList.add('matched');
        document.querySelectorAll('.card')[flipped[1]].classList.add('matched');
      } else {
        document.querySelectorAll('.card')[flipped[0]].textContent = '?';
        document.querySelectorAll('.card')[flipped[1]].textContent = '?';
      }
      flipped = [];
    }, 500);
  }
}