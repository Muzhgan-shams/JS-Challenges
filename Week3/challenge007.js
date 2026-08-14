// Factorial using loop
function factorialIterative(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}

console.log(factorialIterative(5)); // 120

// Factorial using resursion
function factorialRecursive(n) {
  if (n === 0) return 1; // Base case
  return n * factorialRecursive(n - 1); // Recursive step
}

console.log(factorialRecursive(5)); // 120
