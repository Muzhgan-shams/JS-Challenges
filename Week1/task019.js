// Function to find the Greatest Common Divisor
// also known as the Greatest Common Factor—is the largest positive integer that divides two (or more) numbers without leaving a remainder.
/* function getGCD(a, b) {
  while (b !== 0) {
    let remainder = a % b; // Find the leftover
    a = b; // The smaller number moves to the 'A' spot
    b = remainder; // The leftover moves to the 'B' spot
  }
  return a;
} */
function getGCD(a, b) {
  let smaller = a < b ? a : b;
  for (let i = smaller; i >= 1; i--) {
    if (a % i === 0 && b % i === 0) {
      return i;
    }
  }
  return "Invalid Input";
}
console.log(getGCD(12, 18));
console.log(getGCD(5, 17));
console.log(getGCD(18, 12));

// Function to find the Least Common Multiple
// The LCM is the smallest positive integer that is a perfect multiple of two (or more) numbers.
function getLCM(n1, n2) {
  if (n1 === 0 || n2 === 0) return 0;
  // Logic: (Number A * Number B) / Their Shared Factor
  return (n1 * n2) / getGCD(n1, n2);
}

console.log(getLCM(12, 18));
