function count() {
  const text = document.getElementById('input').value.toLowerCase();
  const words = text.match(/\b\w+\b/g) || [];
  const freq = {};
  
  words.forEach(word => freq[word] = (freq[word] || 0) + 1);
  const sorted = Object.entries(freq).sort((a, b) => b[1] - a[1]).slice(0, 20);
  
  const html = sorted.map(([w, c]) => `<div class="word-item"><span class="word">${w}</span><span class="count">${c}x</span></div>`).join('');
  document.getElementById('result').innerHTML = html || 'No words found';
}