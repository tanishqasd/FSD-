let currentQuote = '';

async function getQuote() {
  try {
    const response = await fetch('https://api.quotable.io/random');
    const data = await response.json();
    currentQuote = `"${data.content}" - ${data.author}`;
    document.getElementById('quote').textContent = currentQuote;
  } catch (e) {
    document.getElementById('quote').textContent = '"The only way to do great work is to love what you do." - Steve Jobs';
  }
}

document.getElementById('newQuoteBtn').addEventListener('click', getQuote);
document.getElementById('shareBtn').addEventListener('click', () => {
  navigator.clipboard.writeText(currentQuote);
  alert('Quote copied!');
});

getQuote();