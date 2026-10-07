const fruits = ["apple", "banana", "orange", " grape", "kiwi"];

console.log("Fruits:", fruits);

console.log("Length of Fruits:", fruits.length);

console.log("Element at Index 2:", fruits[2]);

console.log("Last Element of Fruits:", fruits[fruits.length - 1]);


const vegetables = [];

const vegetable1 = prompt("Enter the first vegetable:");
vegetables.push(vegetable1);

const vegetable2 = prompt("Enter the second vegetable:");
vegetables.push(vegetable2);

const vegetable3 = prompt("Enter the third vegetable:");
vegetables.push(vegetable3);

console.log("Vegetables:", vegetables);

console.log("Length of Vegetables:", vegetables.length);


const result = document.querySelector("#result");

result.innerHTML = `
  <p>Fruits: ${fruits.join(", ")}</p>
  <p>Length of Fruits: ${fruits.length}</p>
  <p>Element at Index 2: ${fruits[2]}</p>
  <p>Last Element of Fruits: ${fruits[fruits.length - 1]}</p>
  <p>Vegetables: ${vegetables.join(", ")}</p>
  <p>Length of Vegetables: ${vegetables.length}</p>
`;