//CHALLENGE: Implement takeUntil which will keep collecting items from a provided array until the callback provided returns a truthy value.

//TEST FUNCTIONS:
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

//MAIN FUNCTION:
const takeUntil = function(array, callback) {
  let result = [];
  for (let item of array) {
    if (callback(item)) {
      return result;
    }
    result.push(item);
  }
  return result;
}


//Use to TEST
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const data3 = ["I", "want", "to", "go", "to", "sleep", "!", "ha", "ha"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

//TEST with assertArraysEqual
assertArraysEqual(takeUntil(data3, x => x === '!'), ["I", "want", "to", "go", "to", "sleep"]);

module.exports = takeUntil;