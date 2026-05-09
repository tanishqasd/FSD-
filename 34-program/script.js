let board = Array(9).fill('');
let currentPlayer = 'X';
const status = document.getElementById('status');
const gameBoard = document.getElementById('board');

const winCombos = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

for (let i = 0; i < 9; i++) {
  const cell = document.createElement('div');
  cell.className = 'cell';
  cell.onclick = () => makeMove(i, cell);
  gameBoard.appendChild(cell);
}

function makeMove(index, cell) {
  if (board[index] || checkWinner()) return;
  
  board[index] = currentPlayer;
  cell.textContent = currentPlayer;
  
  const winner = checkWinner();
  if (winner) {
    status.textContent = `🎉 Player ${winner} wins!`;
  } else if (board.every(x => x)) {
    status.textContent = 'Draw!';
  } else {
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    status.textContent = `Player ${currentPlayer}'s Turn`;
  }
}

function checkWinner() {
  for (let combo of winCombos) {
    if (board[combo[0]] && board[combo[0]] === board[combo[1]] && board[combo[1]] === board[combo[2]]) {
      return board[combo[0]];
    }
  }
  return null;
}