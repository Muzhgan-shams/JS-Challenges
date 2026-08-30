// Destructuring
const product = {
  name: "Laptop",
  price: 1200,
  inStock: true,
};

function getProductInfo({ name, price, inStock }) {
  return `${name} costs $${price} - ${inStock ? "In Stock" : "Not In Stock"}`;
}
console.log(getProductInfo(product));

// Array Destructuring
const numbers = [10, 20, 30];
const [first, second, third] = numbers;
console.log(first, second, third); // 10 20 30

//Skip Elements
const [a, , c] = numbers;
console.log(a, c); // 10 30

// Default values
const person = { name: "Sara" };
const { name, age = 25 } = person;
console.log(name, age); // Sara 25

//Renaming Variables
const user = { id: 1, username: "muzhgan" };
const { username: fName } = user;
console.log(fName); // muzhgan

// Nested Destructuring
const student = {
  name: "Ali",
  scores: { math: 90, english: 85 },
};

const {
  scores: { math, english },
} = student;
console.log(math, english); // 90 85
