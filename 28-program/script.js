function find() {
  const items = document.getElementById('items').value.split(',').map(x => x.trim());
  const search = document.getElementById('search').value.trim();
  const result = document.getElementById('result');
  const index = items.indexOf(search);
  
  if (index !== -1) {
    result.innerHTML = `<p class="found">✓ Found at index: ${index}</p>`;
  } else {
    result.innerHTML = `<p class="notfound">✗ Not found</p>`;
  }
}