document.getElementById('convertBtn').addEventListener('click', async () => {
  const amount = document.getElementById('amount').value;
  const from = document.getElementById('from').value;
  const to = document.getElementById('to').value;
  
  try {
    const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${from}`);
    const data = await response.json();
    const rate = data.rates[to];
    const result = (amount * rate).toFixed(2);
    document.getElementById('result').textContent = `${amount} ${from} = ${result} ${to}`;
  } catch (e) {
    document.getElementById('result').textContent = 'Conversion failed';
  }
});