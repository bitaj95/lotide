/* CHALLENGE: Our map function will take in two arguments:

1. An array to map
2. A callback function */

//TEST functions: bring in assertArraysEqual 
const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
}

const assertArraysEqual = function(array1, array2) {
  let checker = eqArrays(array1, array2);
  if (checker) {
    console.log(`✅The two arrays are equal. ${array1} === ${array2}`);
  } else {
    console.log(`🚩The two arrays are not equal. ${array1} !== ${array2}`);
  }
};

//MAIN CODE
const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];

  for (const item of array) {
    results.push(callback(item));
  }

  return results;
}

//TEST code
const results1 = map(words, word => word[0]);
console.log(results1);

//TEST using assertArraysEqual function
const fruits = ["pomegrante", "orange", "grapes", "starfruit", "mango", "avocado"];
assertArraysEqual(map(fruits, fruit => fruit.length), [10,6,6,9,5,7]);
