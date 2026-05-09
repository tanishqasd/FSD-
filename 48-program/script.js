document.getElementById('searchBtn').addEventListener('click', async () => {
  const movie = document.getElementById('movieInput').value;
  try {
    const response = await fetch(`https://www.omdbapi.com/?s=${movie}&apikey=fbc6e881`);
    const data = await response.json();
    const html = data.Search.slice(0, 5).map(m => `
      <div class="movie">
        <h3>${m.Title}</h3>
        <p>Year: ${m.Year} | Type: ${m.Type}</p>
      </div>
    `).join('');
    document.getElementById('results').innerHTML = html || 'No movies found';
  } catch (e) {
    document.getElementById('results').textContent = 'Search failed';
  }
});