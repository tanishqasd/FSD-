function check() {
  const input = document.getElementById('input').value.toLowerCase().replace(/[^a-z0-9]/g, '');
  const reversed = input.split('').reverse().join('');
  const result = document.getElementById('result');
  
  if (input === reversed && input.length > 0) {
    result.innerHTML = `✓ "${document.getElementById('input').value}" is a palindrome!`;
    result.className = 'result palindrome';
  } else {
    result.innerHTML = `✗ "${document.getElementById('input').value}" is not a palindrome.`;
    result.className = 'result not';
  }
}