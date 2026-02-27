// 2. Merge Two Sorted Arrays
// Description: Merge two sorted arrays into a single sorted array.
// function mergeTwoArrays(arr1, arr2) {
//   const mergedArray = [...arr1, ...arr2];
//   const sorted = mergedArray.sort((a, b) => a - b);
//   return sorted;
// }
// console.log(mergeTwoArrays([1, 3, 5], [2, 4, 6]));
// console.log(mergeTwoArrays(["apple", "banana"], ["cherry", "date"]));

function mergeTwoSortedArrays(arr1, arr2) {
  let i = 0; // pointer for arr1
  let j = 0; // pointer for arr2
  const result = [];

  // Compare elements from both arrays and push the smaller one
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }

  // Add remaining elements from arr1 (if any)
  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }

  // Add remaining elements from arr2 (if any)
  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
  }

  return result;
}

// Example usage:
console.log(mergeTwoSortedArrays([1, 3, 5], [2, 4, 6]));
// Output: [1, 2, 3, 4, 5, 6]
