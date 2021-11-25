// Checking function
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🚩Assertion Failed: ${actual} !== ${expected}`);
  }
};

//Bring over eqArrays function: checks if two arrays equal
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

//Bring over: checks if two objects are equal
const eqObjects = function(object1, object2) {
  
  let keysObj1 = Object.keys(object1);
  let keysObj2 = Object.keys(object2);

  if (keysObj1.length !== keysObj2.length) {
    return false;
  }

  for (const key of keysObj1) {
    //if the values of this key are arrays, compare the arrays through eqArrays() to see if equal;
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      };
    } else if (object1[key] !== object2[key]) {
      return false;
    };
  };
  return true;
};


// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  let checker = eqObjects(actual, expected);
  if (checker) {
    console.log(`✅The two ojects are equal. ${actual} === ${expected}`);
  } else {
    console.log(`🚩The two objects are not equal. ${actual} !== ${expected}`);
  }
};

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "5" };

assertObjectsEqual(cd,dc);