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
      // if value of key not array, check to see if they are objects
        if (typeof object1[key] === "object" && typeof object2[key] === "object") {
          //check if two objects are the same, if not return false
          if (!eqObjects(object1[key], object2[key])) {
            return false;
          } else {
            continue;
          }
        }
        //keys are not array or objects, so check if they are equal
        return false;
    };
  };
  return true;
};


assertEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true) 
assertEqual(eqObjects( {a: 2, b: { z: 1 }}, { a: { z: 1 }, b: 2 }), false) 
assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), false) 
assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), false); // => false
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true); // => true

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false); // => false 

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false 
