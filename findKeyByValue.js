//Bringing over TEST FUNCTION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🚩Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKeyByValue = function(collection, show) {

  let genres = Object.keys(collection);
  
  for (const genre of genres) {
    if (collection[genre] === show) {
      return genre;
    }
  }
  

//Another Way To Do This: 

  /* for (let genre in collection) {
    if (collection[genre] === show) {
      return genre;
    }
  } */
}

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

module.exports = findKeyByValue;
