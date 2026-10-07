const numbers = [];

let input;

while (true) {

  input = prompt("Enter a number (or 'done' to finish):");

  if (input.toLowerCase() === "done") {
    break;
  }

  const number = Number(input);

  numbers.push(number);
}


const evenNumbers = [];

for (const number of numbers) {

  if (number % 2 === 0) {
    evenNumbers.push(number);
  }
}


const result = document.querySelector("#result");

if (evenNumbers.length > 0) {

  result.innerHTML = `
    <p>Even Numbers: ${evenNumbers.join(", ")}</p>
    <p>End of the program.</p>
  `;

} else {

  result.innerHTML = `
    <p>Even Numbers: None</p>
    <p>End of the program.</p>
  `;
}