//Brining over eqArray function, will use in assertArrayEqual function below
const eqArrays = function(array1, array2) {
  let state = true;
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      state = false;
    }
  }
  return state;
}
//Bringing over assertArrayEqual function from previous activity... will use to test "without" function
const assertArraysEqual = function(array1, array2) {
  let checker = eqArrays(array1, array2);
  if (checker) {
    console.log(`✅The two arrays are equal. ${array1} === ${array2}`);
  } else {
    console.log(`🚩The two arrays are not equal. ${array1} !== ${array2}`);
  }
};

const letterPositions = function(sentence) {
  const result = {};
  string = sentence.split(" ").join("");

  for (let i = 0; i < string.length; i++) {
    if (result[string[i]]) {
      result[string[i]].push(i);
    } else {
      result[string[i]] = [i];
    }
  }
  return result;
};

let result1 = letterPositions("hey there");
assertArraysEqual(result1["h"],[0,4]);

module.exports = letterPositions;