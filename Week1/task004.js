// Swap two variables
// 1 - without temp variable(Arithmetic swap)
let a = 10;
let b = 20;
a = a + b;
b = a - b;
a = a - b;
console.log(a, b);

// 2 - Using temporary variable(standard)
let a1 = 10;
let b1 = 20;
let temp = a1;
a1 = b1;
b1 = temp;
console.log(a1, b1);

// 3 - Destructuring(Modern JS)
let a2 = 10;
let b2 = 20;
[a2, b2] = [b2, a2];
console.log(a2, b2);
