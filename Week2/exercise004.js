// 7. Write a function to find the sum of all elements in an array
// Description: Calculate the total sum of all array elements.

const getSum = function (arr) {
  let sum = 0;
  for (const el of arr) {
    sum += el;
  }
  return sum;
};
console.log(getSum([1, 2, 3, 4, 5]));

// 8. Write a function to check if an array contains a specific element
// Description: Determine if a given element exists in the array.
// Example:

const checkElement = function (el) {
  const array = [3, 4, 5, 6];

  for (let i = 0; i < array.length; i++) {
    if (array[i] === el) {
      // other ways are to use includes or indexOf
      return el + " Was found";
    }
  }
  return "Not found";
};

console.log(checkElement("3"));
console.log(checkElement(3));

// We can check if a value is NOT a number using isNaN() or by strict type checks (typeof + Number.isNaN)

// We can check if a value IS a number by negating isNaN(), or ensuring typeof is "number"

// We can check if a value is a string using typeof for primitives, or instanceof String for String objects
