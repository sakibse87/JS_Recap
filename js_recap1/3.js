const side1 = Number(prompt('Enter the first side:'));
const side2 = Number(prompt('Enter the second side:'));
const side3 = Number(prompt('Enter the third side:'));

let type;

if (side1 === side2 && side2 === side3) {
  type = 'Equilateral triangle';
} else if (side1 === side2 || side1 === side3 || side2 === side3) {
  type = 'Isosceles triangle';
} else {
  type = 'Scalene triangle';
}

const result = document.querySelector('#result');

result.innerHTML = `<p>${type}</p>`;