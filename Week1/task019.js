// Function to find the Greatest Common Divisor
function getGCD(a, b) {
  while (b !== 0) {
    let remainder = a % b; // Find the leftover
    a = b; // The smaller number moves to the 'A' spot
    b = remainder; // The leftover moves to the 'B' spot
  }
  return a;
}

// Function to find the Least Common Multiple
function getLCM(a, b) {
  // Logic: (Number A * Number B) / Their Shared Factor
  return (a * b) / getGCD(a, b);
}

console.log(getGCD(12, 18));
console.log(getGCD(5, 17));
console.log(getGCD(12, 18));
