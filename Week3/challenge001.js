// 1. Find Second Largest Number in an Array
// Description: Find the second largest number without sorting the array.
function getSecondLargest(arr) {
  let max = -Infinity; // a number smaller than any other number.
  let secondMax = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      secondMax = max;
      max = arr[i];
    } else if (arr[i] > secondMax && arr[i] !== max) {
      // when the num is bigger than secondMax and not equal to max
      secondMax = arr[i];
    }
  }
  return secondMax;
}
console.log(getSecondLargest([10, 20, 4, 45, 99]));
console.log(getSecondLargest([99, 45, 20]));
console.log(getSecondLargest([10, 99, 99, 20]));
