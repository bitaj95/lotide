const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🚩Assertion Failed: ${actual} !== ${expected}`);
  }
};

//MAIN FUNCTION
const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) { 
      //if not considered equal, check to see if array1[i] and array2[i] are arrays
      if (Array.isArray(array1[i]) && Array.isArray(array2[i])) {
        //if both arrays, return false if they are not identical array
        if (!eqArrays(array1[i], array2[i])){
          return false;
        } else {
          continue;
        }
      }
      return false;
    }
  }
  return true;
}

module.exports = eqArrays;
//exported to eqArraysTest

/* assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); 
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); 
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); 
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); 

assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]), true) // => true
assertEqual(eqArrays([[2, 3], [4], [3,4,5,[3]]], [[2, 3], [4], [3,4,5,[3]]]), true) // => true
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]), false) // => false
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], 4]), false)// => false
assertEqual(eqArrays([[2, 3, [1,2,3]], [4]], [[2, 3], 4]), false)// => false */

