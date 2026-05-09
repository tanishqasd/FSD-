function convert(type) {
  const input = document.getElementById('input').value;
  const output = document.getElementById('output');
  let result = '';
  
  switch(type) {
    case 'upper': result = input.toUpperCase(); break;
    case 'lower': result = input.toLowerCase(); break;
    case 'title': result = input.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join(' '); break;
    case 'sentence': result = input.charAt(0).toUpperCase() + input.slice(1).toLowerCase(); break;
    case 'toggle': result = input.split('').map(c => c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase()).join(''); break;
  }
  output.textContent = result || 'Enter text to convert';
}