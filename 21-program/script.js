const arrayInput = document.getElementById('arrayInput');
const reverseBtn = document.getElementById('reverseBtn');
const result = document.getElementById('result');
reverseBtn.addEventListener('click', () => {
  const arr = arrayInput.value.split(',').map(x => x.trim());
  const reversed = arr.reverse();
  result.innerHTML = '<strong>Original:</strong> [' + arr.reverse().join(', ') + ']<br><strong>Reversed:</strong> [' + reversed.join(', ') + ']';
});
