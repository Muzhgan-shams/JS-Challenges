// 1. Count vowels in a string
// Description: Count the number of vowels (a, e, i, o, u) in a given string.

function getVowels(str) {
  let temStr = str.toLowerCase();
  let sum = 0;
  const vowel = "aeiou";
  for (let i = 0; i < temStr.length; i++) {
    if (vowel.includes(temStr[i])) {
      sum += 1;
    }
  }
  return sum;
}
console.log(getVowels("Hello Muzhgan")); // output 4
