// Q1. [1 Point] Explain the difference between null and undefined in JavaScript.


// undefined is what you get when you create a variable but don’t give it a value.
// ex:  let x;
// console.log(x);

// null is used when you want to show that a variable has no value on purpose.
// ex: let obj = { name: "John", age: null };
// console.log(obj.age);

// Q2. [1 Point] What will be the output of the following code snippet, and why?

console.log('10'+5)
// output:  105
// The string '10' and the number 5 are combined, resulting in '105' (string concatenation).

console.log('10'-5)
// output: 5
// The string '10' is converted to the number 10, then 10 - 5 gives 5.

console.log(true+2)
// output: 3
// true is treated as 1, so 1 + 2 gives 3.

console.log(false+undefined)
// output: Not a Number
// false is 0, but undefined can't be used in math, so the result is NaN (Not a Number).


// Q3. [1 Point] What is the difference between == and === in JavaScript? Provide examples.

// == compares values after type conversion if necessary (e.g., 2 == '2' is true).
// === compares both value and type without conversion (e.g., 2 === '2' is false because one is a number and the other is a string).
