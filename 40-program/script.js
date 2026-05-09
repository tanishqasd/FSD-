const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const size = 20;
let snake = [{x: 10, y: 10}];
let food = {x: Math.floor(Math.random() * 20), y: Math.floor(Math.random() * 20)};
let dir = {x: 1, y: 0};
let score = 0;

document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowUp' && dir.y === 0) dir = {x: 0, y: -1};
  if (e.key === 'ArrowDown' && dir.y === 0) dir = {x: 0, y: 1};
  if (e.key === 'ArrowLeft' && dir.x === 0) dir = {x: -1, y: 0};
  if (e.key === 'ArrowRight' && dir.x === 0) dir = {x: 1, y: 0};
});

function update() {
  const head = {x: snake[0].x + dir.x, y: snake[0].y + dir.y};
  if (head.x === food.x && head.y === food.y) {
    snake.unshift(head);
    score++;
    food = {x: Math.floor(Math.random() * 20), y: Math.floor(Math.random() * 20)};
  } else {
    snake.unshift(head);
    snake.pop();
  }
  
  if (head.x < 0 || head.x >= 20 || head.y < 0 || head.y >= 20 || snake.slice(1).some(s => s.x === head.x && s.y === head.y)) {
    document.getElementById('score').textContent = `Game Over! Score: ${score}`;
    return false;
  }
  return true;
}

function draw() {
  ctx.fillStyle = '#f5f5f5';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  
  ctx.fillStyle = '#4CAF50';
  snake.forEach(segment => ctx.fillRect(segment.x * size, segment.y * size, size, size));
  
  ctx.fillStyle = '#f44336';
  ctx.fillRect(food.x * size, food.y * size, size, size);
}

function gameLoop() {
  if (update()) {
    draw();
    document.getElementById('score').textContent = `Score: ${score}`;
    setTimeout(gameLoop, 100);
  }
}

draw();
gameLoop();