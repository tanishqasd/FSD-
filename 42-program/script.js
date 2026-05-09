document.getElementById('jokeBtn').addEventListener('click', async () => {
  try {
    const response = await fetch('https://api.jokes.one/jokes/random');
    const data = await response.json();
    document.getElementById('joke').textContent = data.contents.joke;
  } catch (e) {
    document.getElementById('joke').textContent = 'Why did the API cross the road? To get to the other side... of the server! 😂';
  }
});