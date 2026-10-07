const number = Number(prompt('Enter a positive integer:'));

let table = '<table border="1">';

for (let row = 1; row <= number; row++) {

  table += '<tr>';

  for (let column = 1; column <= number; column++) {

    const product = row * column;

    table += `<td>${product}</td>`;
  }

  table += '</tr>';
}

table += '</table>';

const result = document.querySelector('#result');

result.innerHTML = table;