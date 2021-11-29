//const assertEqual = require ('../assertEqual');
const assert = require('chai').assert;
const tail = require('../tail');
const result = tail(["hey", "Lighthouse", "Labs"]);
const words = ["Yo Yo", "Lighthouse", "Labs"];

describe("tail", () => {
  it ("should return a string length of 2", () => {
    assert.strictEqual(result.length, 2);
  })
  it ("should return last two elements: ['Lighthouse', 'Labs']", () => {
    assert.deepEqual(result, ['Lighthouse', 'Labs']);
  })
  it ("should return element at index 0: 'Lighthouse']", () => {
    assert.strictEqual(result[0], 'Lighthouse');
  })
  it ("should return [2,3,4,5] for [1,2,3,4,5]", () => {
    assert.deepEqual(tail([1,2,3,4,5]), [2,3,4,5]);
  })
  it ("should return length of 3 for original array 'words' ", () => {
    tail(words);
    assert.strictEqual(words.length, 3);
  });
});

/* const result = ["hey", "Lighthouse", "Labs"];
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"

// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!  */