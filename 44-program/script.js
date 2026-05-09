document.getElementById('searchBtn').addEventListener('click', async () => {
  const pokemon = document.getElementById('pokemonInput').value.toLowerCase();
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    const data = await response.json();
    document.getElementById('result').innerHTML = `
      <h2>${data.name}</h2>
      <img src="${data.sprites.front_default}">
      <p>Height: ${data.height / 10}m | Weight: ${data.weight / 10}kg</p>
    `;
  } catch (e) {
    document.getElementById('result').textContent = 'Pokemon not found!';
  }
});