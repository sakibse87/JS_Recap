const number = Number(prompt('Enter a positive integer:'));

let sum = 0;

for (let i = 1; i <= number; i++) {
  sum = sum + i;
}

const result = document.querySelector('#result');

result.innerHTML = `
  <p>Number: ${number}</p>
  <p>Sum: ${sum}</p>
`;