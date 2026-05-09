let board = Array(16).fill(0);
let score = 0;

function init() {
  addTile();
  addTile();
  render();
}

function addTile() {
  const empty = board.map((v, i) => v === 0 ? i : -1).filter(i => i !== -1);
  if (empty.length) board[empty[Math.floor(Math.random() * empty.length)]] = Math.random() < 0.9 ? 2 : 4;
}

function move(direction) {
  let moved = false;
  if (direction === 'left' || direction === 'right') {
    for (let i = 0; i < 4; i++) {
      const row = board.slice(i * 4, (i + 1) * 4);
      const moved_row = slideAndMerge(direction === 'right' ? row.reverse() : row);
      board.splice(i * 4, 4, ...(direction === 'right' ? moved_row.reverse() : moved_row));
    }
  }
  addTile();
  render();
}

function slideAndMerge(arr) {
  arr = arr.filter(v => v !== 0);
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] === arr[i + 1]) {
      arr[i] *= 2;
      score += arr[i];
      arr.splice(i + 1, 1);
    }
  }
  while (arr.length < 4) arr.push(0);
  return arr;
}

function render() {
  const gameBoard = document.getElementById('board');
  gameBoard.innerHTML = '';
  board.forEach(v => {
    const cell = document.createElement('div');
    cell.className = 'cell';
    cell.textContent = v || '';
    cell.setAttribute('data-value', v);
    gameBoard.appendChild(cell);
  });
  document.getElementById('score').textContent = score;
}

document.addEventListener('keydown', (e) => {
  if (['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'].includes(e.key)) move(e.key.replace('Arrow', '').toLowerCase());
});

init();