// Check whether a number is even or odd
// Description: Determine if a number is divisible by 2.
function checkEvenOdd(value) {
  if (value % 2 === 0) {
    return `${value} is even`;
  } else {
    return `${value} is odd`;
  }
}
console.log(checkEvenOdd(3));

// Next Challenge
// 8. Determine if a number is positive, negative, or zero
// Description: Use if-else statements to categorize a number.
function categorizeNumber(number) {
  if (number > 0) {
    return `${number} is positive`;
  } else if (number === 0) {
    return "The number is zero";
  } else {
    return `${number} is negative`;
  }
}
console.log(categorizeNumber(-1));
