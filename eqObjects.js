// Checking function
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🚩Assertion Failed: ${actual} !== ${expected}`);
  }
};

//Bring over eqArrays function: use when need to check if two arrays equal
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

//MAIN function
const eqObjects = function(object1, object2) {
  let isEqual = true;
  
  let keysObj1 = Object.keys(object1);
  let keysObj2 = Object.keys(object2);

  if (keysObj1.length !== keysObj2.length) {
    isEqual = false;
  }

  for (const key of keysObj1) {
    //if the values of this key are arrays, compare the arrays through eqArrays() to see if equal;
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
     isEqual = eqArrays(object1[key], object2[key]);
    } else if (object1[key] !== object2[key]) {
      isEqual = false;
    }
  }
  return isEqual;
};


/* const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true); // => true

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false); // => false */

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false