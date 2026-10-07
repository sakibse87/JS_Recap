const celsius = Number(prompt('Enter temperature in Celsius:'));

const fahrenheit = (celsius * 9 / 5) + 32;
const kelvin = celsius + 273.15;

const result = document.querySelector('#result');

result.innerHTML = `
  <p>Celsius: ${celsius} °C</p>
  <p>Fahrenheit: ${fahrenheit} °F</p>
  <p>Kelvin: ${kelvin} K</p>
`;