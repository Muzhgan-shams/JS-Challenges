// Sum of first N natural numbers
// Description: Calculate and print the sum using a loop.

function getSumOfNumbers(num) {
  let sum = 1;
  for (let i = 1; i <= num; i++) {
    sum += i;
  }
  return sum;
}
console.log(getSumOfNumbers(6));

// Multiplication table of a number
// Description: Print the multiplication table for a given number (up to 10 or N).
function multiplyTable(num) {
  let result = "";
  for (let i = 1; i <= 10; i++) {
    result += `${i} x ${num} = ${num * i}\n`;
  }
  return result;
}
console.log(multiplyTable(3));

// - Natural → 1, 2, 3, …
// - Whole → 0, 1, 2, 3, …
// - Integers → … −2, −1, 0, 1, 2 …
// - Fractions → ½, ¾, −2/5
// - Decimals → 0.5, 3.14, −7.25
// - Floats (coding) → computer’s way of handling decimals (like 3.14159).
