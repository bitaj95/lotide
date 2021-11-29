/*CHALLENGE: Implement the function findKey which takes in an object and a callback.
 It should scan the object and return the first key for which the callback returns a truthy value. 
 If no key is found, then it should return undefined. */

 //TEST function: 
 const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🚩Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKey = function(object, callback) {
  let objectKeys = Object.keys(object);
  for (let key of objectKeys) {
    if (callback(object[key])){
      return key;
    }
  }
}





//USE TO TEST

console.log(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2)) // => "noma"

module.exports = findKey;
