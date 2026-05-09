function find() {
  const arr = document.getElementById('input').value.split(',').map(x => parseFloat(x.trim())).filter(x => !isNaN(x));
  const result = document.getElementById('result');
  
  if (arr.length === 0) {
    result.textContent = 'Enter valid numbers';
    return;
  }
  
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  result.innerHTML = `<div class="stat">Max: <span style="color:#4CAF50;">${max}</span></div><div class="stat">Min: <span style="color:#f44336;">${min}</span></div>`;
}