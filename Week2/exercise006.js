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
