document.getElementById('generateBtn').addEventListener('click', async () => {
  try {
    const response = await fetch('https://randomuser.me/api/');
    const data = await response.json();
    const user = data.results[0];
    
    document.getElementById('result').innerHTML = `
      <img src="${user.picture.large}">
      <div class="user-info">
        <p><strong>${user.name.first} ${user.name.last}</strong></p>
        <p>📧 ${user.email}</p>
        <p>📱 ${user.phone}</p>
        <p>🌍 ${user.location.city}, ${user.location.country}</p>
      </div>
    `;
  } catch (e) {
    document.getElementById('result').textContent = 'Error loading user';
  }
});