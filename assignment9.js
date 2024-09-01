// Q1. Explain the .map() function in 
// JavaScript and provide three examples with detailed explanations.
// The .map() function in JavaScript is like a conveyor belt in a factory. 
// Imagine you have a row of objects, and you want to transform each one into something new.
//  You put each object on the conveyor belt, and as it moves along, 
//  a machine (the .map() function) modifies it. 
//  The result is a new row of objects that have been changed in some way.

const squaredNumbers = numbers.map(function(number) {
    return number * number;
  });


// Example: Doubling Numbers
// Imagine you have a list of numbers [1, 2, 3, 4], and you want to double each number. 
// Using .map(), you get a new list [2, 4, 6, 8]. The original list stays the same; 
// the new list has the doubled values.


// Q2. Explain the .reduce() function in JavaScript and 
// provide three examples with detailed explanations.
// The .reduce() function is like a snowball rolling down a hill, gathering more snow as it goes. 
// It starts with an initial value (the snowball), then adds to it with each step until it reaches the bottom of the hill. 
// This function is great for turning a list of items into a single result.

// Original array of numbers
const numbers = [1, 2, 3, 4, 5];

// Using .reduce() to sum all numbers in the array
const sum = numbers.reduce(function(accumulator, currentValue) {
  return accumulator + currentValue;
}, 0);

// Example : Adding Numbers Together
// If you have a list of numbers [1, 2, 3, 4], and you want to add them all together, 
// .reduce() will give you 10 as the result.


// Q3. Explain the .filter() function in JavaScript and 
// provide three examples with detailed explanations.

// The .filter() function works like a sieve. It takes a list of items and filters out the ones 
// that don’t meet certain criteria, 
// leaving you with a new list of just the items you want.

// Original array of numbers
const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Using .filter() to select only even numbers
const evenNumbers = numbers.filter(function(number) {
  return number % 2 === 0;
});

// Output the new array
console.log(evenNumbers); // [2, 4, 6, 8, 10]

// Example : Finding Even Numbers
// If you have a list of numbers [1, 2, 3, 4, 5, 6], and you only want the even ones, 
// .filter() will give you [2, 4, 6].
