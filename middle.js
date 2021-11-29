//ChHALLENGE: Implement middle which will take in an array and return the middle-most element(s) of the given array.

//TEST FUNCTION: Bringing over eqArray function, will use in assertArrayEqual function below
const eqArrays = function(array1, array2) {
  let state = true;
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      state = false;
    }
  }
  return state;
}

//TEST FUNCTION: Bringing over assertArrayEqual function from previous activity... will use to test main function.
const assertArraysEqual = function(array1, array2) {
  let checker = eqArrays(array1, array2);
  if (checker) {
    console.log(`✅The two arrays are equal. ${array1} === ${array2}`);
  } else {
    console.log(`🚩The two arrays are not equal. ${array1} !== ${array2}`);
  }
};

const middle = function(array) {

  //if array has 2 or less elements, return blank array.
  if (array.length <= 2) {
    return [];
  }

  //return 2 middle elements if array.length is even
  if (array.length % 2 === 0) {
    let center = array.length/2 - 1;
    let middleElements = [array[center], array[center + 1]];
    return middleElements;

  } else {        //else if array.length is odd, return the 1 middle element
    let center = Math.ceil(array.length/2) - 1;
    let middleElements = [array[center]];
    return middleElements;
  }

}

//Test

//test code exported to middleTest.js: assertArraysEqual(middle([1,2,3,4,5,6]),[3,4]);

module.exports = middle;