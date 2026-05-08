const quotes = [
  { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
  { text: "Innovation distinguishes between a leader and a follower.", author: "Steve Jobs" },
  { text: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
  { text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
  { text: "It is during our darkest moments that we must focus to see the light.", author: "Aristotle" },
  { text: "The only impossible journey is the one you never begin.", author: "Tony Robbins" },
  { text: "Success is not final, failure is not fatal.", author: "Winston Churchill" },
  { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" }
];

const newQuoteBtn = document.getElementById('newQuoteBtn');
const copyBtn = document.getElementById('copyBtn');
const quoteText = document.getElementById('quoteText');
const quoteAuthor = document.getElementById('quoteAuthor');

function displayRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[randomIndex];
  
  quoteText.textContent = `"${quote.text}"`;
  quoteAuthor.textContent = `- ${quote.author}`;
}

newQuoteBtn.addEventListener('click', displayRandomQuote);

copyBtn.addEventListener('click', () => {
  const text = `${quoteText.textContent} ${quoteAuthor.textContent}`;
  navigator.clipboard.writeText(text).then(() => {
    alert('Quote copied to clipboard!');
  });
});

// Display a quote on page load
displayRandomQuote();