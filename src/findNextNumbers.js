function findNextNumbers(inputNumber, numberArray) {
// Ensure that the input number is a number
inputNumber = Number(inputNumber);

// Sort the array in ascending order
numberArray.sort((a, b) => a - b);

// Find the index of the input number in the sorted array
const index = numberArray.indexOf(inputNumber);

// If the input number is not in the array, return undefined for both next highest and next lowest
if (index === -1) {
  return { nextHighest: undefined, nextLowest: undefined };
}

// If the input number is the first or last element of the array, return undefined for the corresponding next number
if (index === 0) {
  return { nextHighest: numberArray[1], nextLowest: 0 };
} else if (index === numberArray.length - 1) {
  return { nextHighest: 5000, nextLowest: numberArray[numberArray.length - 2] };
}

// Otherwise, return the next highest and next lowest numbers
return { nextHighest: numberArray[index + 1], nextLowest: numberArray[index - 1] };
  }
  
  export {findNextNumbers}