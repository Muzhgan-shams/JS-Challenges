// Find the largest and smallest of three numbers
// Description: Read three integers and print the largest and smallest.

function getSmallestAndLargest(num1, num2, num3) {
  let max = num1; /* Not 0, to work for negative numbers as well */
  let min = num1;
  // MAX LOGIC
  if (num1 >= num2) {
    if (num1 >= num3) {
      max = num1;
    } else {
      max = num3; // num1 beat num2, but num3 beat num1 (so num3 is the largest)
    }
  } else {
    if (num2 >= num3) {
      max = num2;
    } else {
      max = num3; // num2 beat num1, but num3 beat num2 (so num3 is the largest)
    }
  }

  // MIN LOGIC
  if (num1 <= num2) {
    if (num1 <= num3) {
      min = num1;
    } else {
      min = num3; // num1 was smaller than num2, but num3 is even smaller than num1
    }
  } else {
    if (num2 <= num3) {
      min = num2;
    } else {
      min = num3; // num2 was smaller than num1, but num3 is even smaller than num2
    }
  }
  return {
    max: max,
    min: min,
  }; /* In JavaScript, the comma operator evaluates everything but only returns the last item. To return both, use {} or [] */
}
console.log(getSmallestAndLargest(3, 40, -9));

// let numbers = [3, 9, 5];
// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] > largest) {
//     largest = numbers[i]; // 9
//   }
//   if (numbers[i] < smallest) { // 3
//     smallest = numbers[i];
//   }
// }
