'use strict';

const celsius = parseFloat(prompt('Anna lämpötila Celsius-asteina:'));

const fahrenheit = (celsius * 9 / 5) + 32;
const kelvin = celsius + 273.15;

const targetElement = document.getElementById('target');

targetElement.innerHTML = `
  ${celsius} °C yhtä suuri kuin:<br>
  ${fahrenheit.toFixed(2)} °F<br>
  ${kelvin.toFixed(2)} K
`;
