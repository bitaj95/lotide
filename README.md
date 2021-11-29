# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @bita-janzadeh/lotide`

**Require it:**

`const _ = require('@bita-janzadeh/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head`: a function that returns the first element from an array
* `tail`: a function that returns all elements except for first element from an array
* `middle`: a function that returns the middle element(s) of an array
* `assertArraysEqual`: a function that asserts if two arrays are equal
* `assertEqual`: a function that asserts if two values are equal
* `assertObjectsEqual`: a function that asserts if two objects are equal
* `countLetters`: a function that counts the number of letters in a string
* `countOnly`: a function that takes in an array and object, and returns an object containing a count for the items specified
* `eqObjects`: afunction that compares two objects
* `findKey`: a function that takes in an two parameters: an object and callback. It will scan the object and return the first key for which the callback returns a truthy value.
* `findKeyByValue`: a function that takes in an two parameters: an object and callback. It will scan the object and return the first key that contains the callback value.
* `letterPositions`: a function that takes in two parameters: a string and letter. It will return the indices where each character is found
* `map`: a function that creates a new array with the results of a callback function executed on each element in the  array
* `takeUntil`: a function which will keep collecting items from a provided array until the callback provided returns a truthy value.
* `without`: a function that takes in a source array and removeArray, then returns a new array with only those elements from source that are not present in the remove array.
