// 2. Display all factors of a number
// Description: Print all numbers that divide the given number exactly.
// A factor is a whole number that fits into another number exactly, with no leftover pieces. divide x by y x/y => 12/3 = 4, y is a factor of x/ 3 is a factor of 12

function getAllFactors(num) {
  let result = "";
  for (let i = 1; i <= num; i++) {
    if (i % 2 === 0) {
      result += i + " ";
    }
  }
  return result;
}
console.log(getAllFactors(12));
