// Triangle validity and type
// Description: Given three sides, determine if they form a valid triangle and if it’s equilateral,
// isosceles, or scalene.
// Rule: Sum of any two sides > third side.
// The Concept: The two shorter sides together must be "stronger" (longer) than the longest side.The Simple Rule: a + b > c (and this must work for every combination of sides)

function checkTriangle(sideA, sideB, sideC) {
  let triangle = "Enter valid values";
  if (sideA + sideB > sideC && sideA + sideC > sideB && sideB + sideC > sideA) {
    if (sideA === sideB && sideA === sideC) {
      triangle = "It is a valid triangle, and equilateral";
    } else if (sideA !== sideB && sideA !== sideC && sideB !== sideC) {
      triangle = "It is a valid triangle, and scalene";
    } else {
      triangle = "It is a valid triangle, and Isosceles";
    }
  } else {
    return "It is not a triangle";
  }
  return triangle;
}
console.log(checkTriangle(3, 4, 5));
console.log(checkTriangle(4, 3, 3));
console.log(checkTriangle(4, 3, 16));
console.log(checkTriangle(2, 2, 10));

// Print numbers from 1 to 100
// Description: Use a loop to print num\bers sequentially.
let numbers = "";
for (let index = 1; index <= 100; index++) {
  numbers += index + " ";
}
console.log(numbers.trim());

// Initialization (let index = 1): "Where do I start?"
// Condition (index <= 100): "When do I stop?"
// Iteration (index++): "How do I get to the next one?"
