let currentAdvice = '';

document.getElementById('adviceBtn').addEventListener('click', async () => {
  try {
    const response = await fetch('https://api.adviceslip.com/advice');
    const data = await response.json();
    currentAdvice = data.slip.advice;
    document.getElementById('advice').textContent = currentAdvice;
  } catch (e) {
    document.getElementById('advice').textContent = 'The best time to start is now.';
  }
});

document.getElementById('shareBtn').addEventListener('click', () => {
  navigator.clipboard.writeText(currentAdvice);
  alert('Advice copied!');
});