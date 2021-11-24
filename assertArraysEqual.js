const eqArrays = function(array1, array2) {
  let state = true;
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      state = false;
    }
  }
  return state;
}


const assertArraysEqual = function(array1, array2) {
  let checker = eqArrays(array1, array2);
  if (checker) {
    console.log(`✅The two arrays are equal. ${array1} === ${array2}`);
  } else {
    console.log(`🚩The two arrays are not equal. ${array1} !== ${array2}`);
  }
};


//test eqArrays through assertEqual function to make sure it is working properly
/* assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3])); 
assertArraysEqual(eqArrays([1, 2, 3], [3, 2, 1])); 
 */
assertArraysEqual([2,2,2],[2,3,2]);
assertArraysEqual([2,2,2],[2,2,2]);