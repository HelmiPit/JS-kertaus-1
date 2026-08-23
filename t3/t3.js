const a = parseFloat(prompt('Sivu 1:'));
const b = parseFloat(prompt('Sivu 2:'));
const c = parseFloat(prompt('Sivu 3:'));

const targetElement = document.getElementById('target');

  let result = '';

  if (a === b && b === c) {
    result = 'Tasasivuinen kolmio';
  }

  else if (a === b || b === c || a === c) {
    result = 'Tasakylkinen kolmio';
  }

  else if (!(a === b || b === c || a === c)) {
    result = 'Ei tasakylkinen kolmio';
  }

  targetElement.textContent = `Sivut: ${a}, ${b}, ${c} : ${result}`;
