// Write a function to count occurrences of an element in an array
// Description: Count how many times a given number appears in the array.

function countOccurrences(el) {
  const array = [1, 2, 4, 5, 6, 7, 3, 4, 5, 6, 3, 2, 4, 5, 6, 4, 1, 1, 2, 2];
  let result = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === el) {
      result += 1;
    }
  }
  return result;
}
console.log(countOccurrences(2));
console.log(countOccurrences(1));
console.log(countOccurrences(10));

// 10. Check whether a number is prime
// Description: Determine if a number is divisible only by 1 and itself.

function checkPrime(num) {
  if (num <= 1) return "Should be greater than 1";
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return "Not prime";
    }
  }
  return "Prime ";
}
console.log(checkPrime(17));
console.log(checkPrime(20));
console.log(checkPrime(2));
console.log(checkPrime(9));
// A Prime Number is a "lonely" whole number greater than 1.
// It has NO divisors except for 1 and itself.
// If any other number (from 2 up to num-1) can divide it perfectly,
// it is NOT prime.
