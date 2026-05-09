document.getElementById('factBtn').addEventListener('click', async () => {
  try {
    const response = await fetch('https://catfact.ninja/fact');
    const data = await response.json();
    document.getElementById('fact').textContent = data.fact;
  } catch (e) {
    document.getElementById('fact').textContent = 'Cats have over 20 different sounds to communicate!';
  }
});