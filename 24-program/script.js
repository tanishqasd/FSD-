function removeDuplicates() {
  const input = document.getElementById('input').value;
  const items = input.split(',').map(x => x.trim()).filter(x => x);
  const unique = [...new Set(items)];
  const result = document.getElementById('result');
  
  result.innerHTML = `
    <div class="stats">Original: ${items.length} items | Unique: ${unique.length} items | Removed: ${items.length - unique.length}</div>
    <div class="items"><strong>Unique items:</strong><br>${unique.join(', ')}</div>
  `;
}