// Reverse a string
const str = "Hello";
let reversed = "";

for (let i = str.length - 1; i >= 0; i--) {
  reversed += str[i]; /* += designed for math or string concatenation.  */
}
console.log(reversed);

// Reverse a list
const list = [1, 2, "Hi", true];
let result = [];
for (let i = list.length - 1; i >= 0; i--) {
  result.push(list[i]); /* To keep it array, use push instead of += */
}
console.log(result);

// Reverse a number
const num = 1000; // to keep it 0001, dont convert it to number
const numToStr = num.toString();
let tempReverseStr = "";
for (let i = numToStr.length - 1; i >= 0; i--) {
  tempReverseStr = tempReverseStr + numToStr[i];
}
const reversedNum = parseFloat(tempReverseStr);
console.log(reversedNum);

// Using reverse method
const reverseList = list.reverse();
console.log(reverseList);

const reverseStr = str.split("").reverse().join("");
console.log(reverseStr);

const reverseNum = num.toString().split("").reverse().join("");
console.log(reverseNum);
