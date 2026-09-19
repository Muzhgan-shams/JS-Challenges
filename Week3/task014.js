// Generators in JS
// Generators in JavaScript are special functions (declared with function*) that can pause execution using yield and resume later, making them ideal for handling sequences, lazy evaluation, and complex iteration patterns.

function* countToThree() {
  yield 1;
  yield 2;
  yield 3;
}

const counter = countToThree();
console.log(counter.next());
console.log(counter.next());
console.log(counter.next());
console.log(counter.next());

//  Lazy Evaluation
// Generate values only when needed (useful for large or infinite sequences):

function* infiniteNumbers() {
  let n = 0;
  while (true) yield n++;
}

const nums = infiniteNumbers();
console.log(nums.next().value);
console.log(nums.next().value);
