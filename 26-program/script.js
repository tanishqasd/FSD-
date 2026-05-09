function checkAnagram() {
  const w1 = document.getElementById('word1').value.toLowerCase().replace(/[^a-z]/g, '').split('').sort().join('');
  const w2 = document.getElementById('word2').value.toLowerCase().replace(/[^a-z]/g, '').split('').sort().join('');
  const result = document.getElementById('result');
  
  if (w1 === w2 && w1.length > 0) {
    result.textContent = '✓ These are anagrams!';
    result.className = 'result yes';
  } else {
    result.textContent = '✗ Not anagrams';
    result.className = 'result no';
  }
}