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


// Q4. [1 Point] Predict the output of the following expressions and explain your reasoning:

console.log(0==false)
// output: true
// 0 and false are considered equal in value, so the result is true.

console.log(0===false)
// output: false
// 0 is a number and false is a boolean, so the result is false.

console.log(''==0)
// output: true
// Both '' (empty string) and 0 are treated as falsy values, so the result is true.

console.log(''===0)
// output: false
// '' is a string and 0 is a number, so the result is false.


// Q5. [1 Point] Given the following code, what will be the output and why?
console.log(0 || 1 && 2 || 3)
// output: 2
// 1 && 2 is 2, and 0 || 2 || 3 evaluates to 2 (first truthy value).

console.log(false || (true && false) || true)
// output: true
// (true && false) is false, and false || false || true gives true.

console.log(0 && 1 || 2 && 3)
// output: 3
// 0 && 1 is 0, then 2 && 3 is 3, so the result is 3.


// Q6. [1 Point] Predict the output of the following expressions and explain your reasoning:

let a = 10, b = 20, c = 30
console.log(a + b * c)
// output: 610
// b * c is 600, then a + 600 gives 610.

console.log((a + b) * c)
// output: 900
// a + b is 30, then 30 * c gives 900.

console.log(a + b > c ? a : b)
// output: 20
// a + b is 30, which is equal to c, so it picks b, which is 20.

console.log((a > b) && (b > c) || (a > c))
// output: false
// None of these conditions are true, so the result is false.


// Q7. [2 Points] Analyze and explain the output of the following code snippets:
console.log([] + {})
// output: "[object Object]" 
// The array is converted to an empty string, and the object is converted to "[object Object]", then they're concatenated.
console.log({} + [])
// output: "[object Object]" 
// Similar to the first case, treated as string concatenation.
console.log([] == ![])
// output: true 
//  [] becomes an empty string "", and ![] is false, which also converts to "", so they are equal.
console.log('' == [])
// output: true 
// Both '' and [] are converted to empty strings, making them equal.



// Q8. [2 Points] What will be the output of the following code, and why?
console.log(+"")
// output: 0
// The + operator attempts to convert the empty string "" to a number, which results in 0.

console.log(+true)
// output: 1
// true is converted to the number 1 when using the + operator.
console.log(+false)
// output: 0
// false is converted to the number 0 when using the + operator.

console.log(+null)
// output: 0
// null is converted to 0 when using the + operator.

console.log(+undefined)
// output: NaN
// undefined cannot be converted to a number, so it results in NaN (Not a Number).