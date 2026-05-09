document.getElementById('searchBtn').addEventListener('click', async () => {
  const city = document.getElementById('city').value;
  try {
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=1b4c16e2b4e84e5a8e6a4c6e8a0b7c9d2f3e4a5b&q=${city}`);
    const data = await response.json();
    document.getElementById('weather').innerHTML = `
      <h2>${data.location.name}, ${data.location.country}</h2>
      <p>🌡️ Temperature: ${data.current.temp_c}°C</p>
      <p>💨 Wind: ${data.current.wind_kph} kph</p>
      <p>💧 Humidity: ${data.current.humidity}%</p>
      <p>Condition: ${data.current.condition.text}</p>
    `;
  } catch (e) {
    document.getElementById('weather').textContent = 'City not found';
  }
});