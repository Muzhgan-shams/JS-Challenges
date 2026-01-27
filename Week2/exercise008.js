// Power of a number (without built-in function)
// Description: Compute a^b using repeated multiplication.

function getExponent(a, b) {
  let result = 1;
  for (let i = 1; i <= b; i++) {
    result *= a;
  }
  return result;
}
console.log(getExponent(2, 5));

// Find factorial of a number
// Description: Compute N! using iterative approach.
// Example:
// Input:
// 5
// Output:
// 120

function getFactorial(n) {
  if (n < 0) {
    return "Factorial is not defined for negative numbers";
  }
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}
console.log(getFactorial(5));
console.log(getFactorial(0));
console.log(getFactorial(-5));

// The factorial of a number is a mathematical operation that multiplies a positive integer by all the smaller positive integers down to 1.
// Formally, for a non-negative integer n:
// n!=n\cdot (n-1)\cdot (n-2)\cdot \dots \cdot 2\cdot 1
