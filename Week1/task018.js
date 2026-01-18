// Print even numbers in a range
// Description: Input start and end values, print all even numbers between them.

function printEvenInRange(start, end) {
  let result = "";

  for (let i = start; i <= end; i++) {
    if (i % 2 === 0) {
      result += i + " ";
    }
  }

  return result;
}
console.log(printEvenInRange(1, 10));
console.log(printEvenInRange(2, 20));

// Mathematically, Fibonacci is a sequence of integers where each number is the sum of the two preceding ones.
// Fibonacci series up to N terms
// Description: Generate the Fibonacci sequence (0, 1, 1, 2, 3, 5, 8...) up to N terms.
// next = parent + grandparent -

function getFibonacci(n) {
  // 1. The Seeds: Start with the first two terms
  let n1 = 0;
  let n2 = 1;
  let next;

  // Start the string with our seeds
  let result = n1 + ", " + n2;

  // 2. The Loop: Start from 3 because we already have terms 1 and 2
  for (let i = 3; i <= n; i++) {
    next = n1 + n2; // Calculate the "Baby"
    result += ", " + next; // Add to our list

    // 3. The "Variable Shift" (The Hand-off)
    n1 = n2; // The Parent becomes the Grandparent
    n2 = next; // The Baby becomes the Parent
  }

  return result;
}

console.log(getFibonacci(7));
// Output: 0, 1, 1, 2, 3, 5, 8
