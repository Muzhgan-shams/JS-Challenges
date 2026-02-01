// 29. Check if Two Arrays Are Equal
// Description: Compare two arrays and determine if they contain the same elements in the same order.
function checkEquality(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return "Not equal";
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return "Not Equal";
    }
  }
  return "Equal";
}
console.log(checkEquality([1, 2, 3], [1, 2, 3]));
console.log(checkEquality([1, 2, 4], [1, 2, 3]));

// 30. Find Missing Number in Array (1 to N)
// Description: Given numbers from 1 to N with one missing, find the missing number.
// expectedSum - actualSum = missingNum
function findMissing(arr) {
  let expectedSum = 0;
  for (const el of arr) {
    actualSum += el;
  }
  let actualSum = 0;
  for (let i = 0; i <= arr.length + 1; i++) {
    expectedSum += i;
  }
  return expectedSum - actualSum;
}
console.log(findMissing([1, 2, 4, 5]));
