function parse() {
  const csv = document.getElementById('csv').value;
  const lines = csv.trim().split('\n');
  const result = document.getElementById('result');
  
  if (lines.length === 0) {
    result.textContent = 'Enter CSV data';
    return;
  }
  
  const headers = lines[0].split(',').map(x => x.trim());
  let html = '<table><tr><th>' + headers.join('</th><th>') + '</th></tr>';
  
  for (let i = 1; i < lines.length; i++) {
    const cols = lines[i].split(',').map(x => x.trim());
    html += '<tr><td>' + cols.join('</td><td>') + '</td></tr>';
  }
  
  html += '</table>';
  result.innerHTML = html;
}