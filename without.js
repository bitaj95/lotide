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

//This function takes in a source array and removeArray, then returns a new array with only those elements from source that are not present in the remove array.
const without = function (originalArray, removeArray) {
  result = originalArray;
  for (let i = 0; i < removeArray.length; i++) {
    let index = result.indexOf(removeArray[i]);

    if (index !== -1) {
      result.splice(index,1);
    }
  }
  return result;
}

//check without function to see if it works
console.log(assertArraysEqual(without([0,1,2,3,4,5,6,7,8,9,10],[1,3,5,7,9]),[0,2,4,6,8,10]));

