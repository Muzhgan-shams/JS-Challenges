// 5. Write a function to find the largest element in an array
// Description: Given an array of numbers, return the largest value.

function getLargestNum(arr) {
  let max = arr[0];
  for (const el of arr) {
    if (max < el) {
      max = el;
    }
  }
  return max;
}
console.log(getLargestNum([24, 68, 90, 23, 10]));

// 6. Write a function to find the smallest element in an array
// Description: Find and return the smallest number in an array.

function getSmallestNum(arr) {
  let min = arr[0];
  for (const el of arr) {
    if (min > el) {
      min = el;
    }
  }
  return min;
}
console.log(getSmallestNum([24, 68, 90, 23, 10]));

// Note: - Functions like Math.max() and Math.min() expect separate arguments, not an array.
