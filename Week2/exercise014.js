// 27. Find Unique Elements in an Array
// Description: Return an array with only unique elements from the input array.
function getUnique(arr) {
  let uniqueArr = new Set(arr);
  const uniqueVal = [...uniqueArr];
  return uniqueVal;
}
console.log(getUnique([1, 2, 2, 3, 4, 4, 5])); // [1, 2, 3, 4, 5]

// 28. Remove Duplicates from an Array
// Description: Remove duplicate elements efficiently from an array.
function getUniqueVal(arr) {
  //   return arr.filter((v, i) => arr.indexOf(v) === i);
  let uniqueList = [];
  for (let i = 0; i < arr.length; i++) {
    let value = arr[i];
    if (!uniqueList.includes(value)) {
      uniqueList.push(value);
    }
  }
  return uniqueList;
}
console.log(getUniqueVal([3, 1, 3, 5, 1])); // [3, 1, 5]
