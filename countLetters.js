// Checking function
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🚩Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(string) {
  let result = [];
  for (const letter of string) {
    if (result[letter]) {
      result[letter] += 1;
    } else {
      result[letter] = 1;
    }
  };
  delete result[" "];
  return result;
};

//Tests
const result1 = countLetters("Banana");
assertEqual(result1["B"],1);

module.exports = countLetters;