// Check character type
// Description: Input a character and determine if it’s a vowel, consonant, digit, or special symbol.

function checkCharacterType(char) {
  // 1. Guard Clause: char.length < 0 is impossible, so just > 1 is enough
  if (!char || char.length !== 1) return "Invalid input";

  const cleanedChar = char.toLowerCase(); // No need to trim if we check length === 1
  const vowels = "aeiou";

  // We use && because the character MUST satisfy BOTH conditions to be a letter.
  // It must be AFTER 'a' AND BEFORE 'z' at the same time.
  if (cleanedChar >= "a" && cleanedChar <= "z") {
    if (vowels.includes(cleanedChar)) {
      return "Vowel";
    } else {
      return "Consonant";
    }
  }

  // Same logic here: it must be between '0' and '9'.
  else if (cleanedChar >= "0" && cleanedChar <= "9") {
    return "Digit";
  } else {
    return "Symbol";
  }
}
console.log(checkCharacterType("b"));
console.log(checkCharacterType("a"));
console.log(checkCharacterType("6"));
console.log(checkCharacterType("*"));
