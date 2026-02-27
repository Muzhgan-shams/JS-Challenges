// 3. Rotate Array K Times to the Right
// Description: Rotate elements of an array K times to the right.
// Example:
// Input: [1, 2, 3, 4, 5], K = 2
// Output: [4, 5, 1, 2, 3]

function getRightKRotated(arr, k) {
  const rotation = k % arr.length;
  const head = arr.slice(0, arr.length - rotation);
  const tail = arr.slice(-rotation);
  return [...tail, ...head];
}
console.log(getRightKRotated([1, 2, 3, 4, 5], 2));

// Rotates an array to the right by K positions.
// Uses modulo to handle K > array length and ES6 spread/slice
// to maintain immutability and O(N) time complexity.
