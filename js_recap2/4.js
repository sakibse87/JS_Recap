function sortArray(numbers) {

  const sortedNumbers = [...numbers];

  sortedNumbers.sort((a, b) => a - b);

  return sortedNumbers;
}


const numbers = [5, 2, 8, 1, 9];

const sortedNumbers = sortArray(numbers);

console.log("Original Array:", numbers);

console.log("Sorted Array:", sortedNumbers);