// Find the largest number in a collection
const collection = [1, 5, 6, 20, 90, 45];
let max = collection[0];
for (let i = 0; i < collection.length; i++) {
  if (collection[i] > max) max = collection[i];
}
console.log(max);
// Using Math.max(1,2,3)
const maximumNum = Math.max(...collection);
console.log(maximumNum);

/* "Is i < collection.length true?"

If YES: Run the code inside the {} brackets.

If NO: Stop the loop immediately and move on. */
