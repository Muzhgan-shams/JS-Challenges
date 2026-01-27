function getAllPrimes(n) {
  let result = [];
  for (let i = 2; i <= n; i++) {
    // Outer loop: Pick every number up to N
    let isPrime = true;
    for (let j = 2; j < i; j++) {
      // Inner loop: Try to "break" the number i
      if (i % j === 0) {
        isPrime = false; // Found a factor, not prime!
        break;
      }
    }
    if (isPrime) result.push(i); // If no factors found, add to list
  }
  return result;
}

// Single Responsibility.
// Helper function: Just does one thing (Check if 1 number is prime)
function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

// Main function: Collects the primes
function getAllPrimes(limit) {
  let primes = [];
  for (let i = 2; i <= limit; i++) {
    if (isPrime(i)) primes.push(i);
  }
  return primes;
}

// Optimized
function isPrimeOptimized(num) {
  if (num < 2) return false;
  // Optimization: stop at Math.sqrt(num)
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}
