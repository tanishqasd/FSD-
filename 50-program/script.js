document.getElementById('newsBtn').addEventListener('click', async () => {
  const category = document.getElementById('category').value;
  try {
    const response = await fetch(`https://newsapi.org/v2/top-headlines?category=${category}&apiKey=4d8fb5b97bcc48b5a38eae0404770409`);
    const data = await response.json();
    const html = data.articles.slice(0, 5).map(a => `
      <div class="article">
        <h3>${a.title}</h3>
        <p>${a.description || a.content}</p>
        <small>Source: ${a.source.name}</small>
      </div>
    `).join('');
    document.getElementById('news').innerHTML = html;
  } catch (e) {
    document.getElementById('news').textContent = 'Failed to load news';
  }
});