const numbers = [];

const number1 = Number(prompt("Enter Number 1:"));
numbers.push(number1);

const number2 = Number(prompt("Enter Number 2:"));
numbers.push(number2);

const number3 = Number(prompt("Enter Number 3:"));
numbers.push(number3);

const number4 = Number(prompt("Enter Number 4:"));
numbers.push(number4);

const number5 = Number(prompt("Enter Number 5:"));
numbers.push(number5);

console.log("Numbers:", numbers);


const searchNumber = Number(prompt("Enter a Number to Search:"));

let searchMessage;

if (numbers.includes(searchNumber)) {
  searchMessage = `Number ${searchNumber} is found in the array.`;
} else {
  searchMessage = `Number ${searchNumber} is not found in the array.`;
}


numbers.pop();

console.log("Updated Numbers:", numbers);


numbers.sort((a, b) => a - b);

console.log("Sorted Numbers:", numbers);


const result = document.querySelector("#result");

result.innerHTML = `
  <p>Numbers: ${numbers}</p>
  <p>${searchMessage}</p>
  <p>Updated Numbers: ${numbers}</p>
  <p>Sorted Numbers: ${numbers}</p>
`;