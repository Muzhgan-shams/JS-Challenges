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

// Custom Iteration
// Generators let you define how objects are iterated:

const obj = {
  *[Symbol.iterator]() {
    yield "A";
    yield "B";
    yield "C";
  },
};

for (const val of obj) {
  console.log(val);
}

// Two-Way Communication
// You can pass values back into a generator

function* echo() {
  const first = yield "Send me a value";
  const second = yield `You sent: ${first}`;
  return `Final: ${first}, ${second}`;
}

const iter = echo();
console.log(iter.next().value);
console.log(iter.next("Hello").value);
console.log(iter.next("World").value);

// Factory Functions
// Factory functions in JavaScript are simply functions that create and return objects
// without using the class keyword or the new operator. They’re a flexible alternative to classes and constructors

function createUser(name, age) {
  return {
    name,
    age,
    greet() {
      console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
    },
  };
}

const user1 = createUser("Muzhgan", 5);
user1.greet();

// Private Data with Closure

function createCounter() {
  let count = 0;

  return {
    increment() {
      count++;
    },
    getCount() {
      return count;
    },
  };
}

const counter1 = createCounter();
counter1.increment();
console.log(counter1.getCount());

// Multiple Instnces
// Each call creates a new independent counter
const c1 = createCounter();
const c2 = createCounter();

c1.increment();
console.log(c1.getCount());
console.log(c2.getCount());
