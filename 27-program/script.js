function sort(order) {
  const input = document.getElementById('input').value;
  const arr = input.split(',').map(x => parseFloat(x.trim())).filter(x => !isNaN(x));
  
  if (order === 'asc') arr.sort((a, b) => a - b);
  else arr.sort((a, b) => b - a);
  
  document.getElementById('result').textContent = '[' + arr.join(', ') + ']' || 'Enter valid numbers';
}