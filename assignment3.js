//1. History of JavaScript
// In the early days of the internet, Microsoft offered a free web browser, 
// which attracted users because Netscape's browser was not free. In 1990, Mosaic was a popular browser,
//  but it also wasn't free. The creators of Mosaic later developed Netscape, which was renamed Netscape Navigator.

// JavaScript was created in 1995 by Brendan Eich at Netscape to compete with Microsoft.
//  It was first called Mocha, then LiveScript, and finally JavaScript. 
// Microsoft made a similar version called JScript.

// In 1997, JavaScript became a standard through the European Computer Manufacturers Association (ECMA). 
// Since then, JavaScript has been improved with new features, following ECMAScript standards, 
// and it gets updates every year since 2016. JavaScript is very important for web development, 
// used both on the front end and back end (with Node.js), and it works on both mobile and desktop applications.




//2. Data Types in JavaScript - Part 1
// Data types are essential for storing and manipulating data in progelluruming.
// there are two main categories: Primitive and Object types.
// Primitive data types include Numbers, Strings, Boolean, Null, Undefined, and Symbol.
// Numbers represent both integer and floating-point values, and you can use different base number systems.
console.log("-----------------------------------------------------")
console.log(4503599627370495 + 4503599627370495);
console.log(Number.MAX_VALUE * 2);
console.log(Number.MAX_SAFE_INTEGER - 1);
console.log(1.797631486324357e+322);
console.log(999999999999999999999999999999);
console.log(999999999999999999999999999999n);
let user = 14;
console.log(user);
console.log(typeof user);
console.log(0b1101);
console.log(0o17);
console.log(2000n + 4n);


//3. Data Types in JavaScript - Part 2
// Strings are sequences of characters enclosed in single quotes, double quotes, or backticks.
console.log("-----------------------------------------------------")
console.log("Hello, world!");
let a = "nithin";
let b = "elluru";
console.log(a + b);
console.log("nithin \n elluru");
console.log("nithin\t\telluru\vnani\vn\bne\bed");
console.log('nithin"elluru"');

console.log("-----------------------------------------------------")
// Boolean represents logical values: true or false.
console.log(5 > 3);
console.log(15 < (3 ^ 3));
console.log("Cd" < "cd");
console.log(undefined, typeof undefined);

console.log("-----------------------------------------------------")
// Undefined means a variable has been declared but not assigned a value.
let c;
console.log(c);
let d;
console.log(d);

console.log("-----------------------------------------------------")
// Null indicates that a variable has no value.
let shoppingCart = ["Apple", "", "Banana", null, "Orange"];
console.log( shoppingCart[3]);


// NaN stands for "Not-a-Number".
console.log(0 / 0);
console.log(1 / "hello");
console.log(parseInt("hello"));



//4. Type Conversion and Coercion
// Type Conversion is the process of converting one data type to another, 
// also known as type casting.
console.log("-----------------------------------------------------")
let r = "1234";
console.log(Number(r), typeof Number(r)); // Converts the string "1234" to a number

let z = 42;
console.log(String(z), typeof String(z)); // Converts the number 42 to a string

let s = 5 > 3;
console.log(String(s), typeof String(s)); // Converts the boolean value true to a string


// Coercion
// Coercion is an implicit conversion where JavaScript automatically converts operands to 
// the same data type to perform an operation.
console.log("-----------------------------------------------------")
let kk = 15 - "7";
console.log(kk, typeof kk); // Subtracting a string from a number results in a number
kk = +kk + 5;
console.log(kk); // Adding 5 to the result of the previous operation

let jj = "8" * 3;
console.log(jj, typeof jj); // Multiplying a string containing a number by another number

console.log(Boolean(0)); // Converting 0 to a boolean value, which is false

console.log(parseInt("456 example")); // Parsing a string with a number followed by text
console.log(Number("456 example")); // Converting a string with text to a number, results in NaN
console.log(parseInt("text 789")); // Parsing a string with text before a number
console.log(Boolean("Hello")); // Converting a non-empty string to a boolean value, which is true
console.log(Boolean(undefined)); // Converting undefined to a boolean value, which is false

//5. Arithmetic Operators
// These are mathematical symbols used to calculate values, such as addition(+), 
// subtraction(-), multiplication(*), and division(/).
console.log("-----------------------------------------------------")
let x = 22;
let y = 60;
console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);
console.log(++x);
console.log(true + true);
console.log(false - false);
console.log(x++);
console.log(y ** x);
console.log(y % x);

//6. Relational Operators
// These operators are used to compare two values.
console.log("-----------------------------------------------------")
let e = "Hello";
let f = "hello";
console.log(e < f);
console.log(e > f);
console.log(e == f);
console.log(e === f);
console.log("2" < 2);

//7. Logical Operators
// These are used to combine multiple boolean expressions or values and return a boolean result.
// The main types are AND (&&), OR (||), and NOT (!).
console.log("-----------------------------------------------------")
// AND
console.log(true && true);
console.log(true && false);
console.log(false && false);
// OR
console.log(true || false);
console.log(true || true);
console.log(false || false);
// NOT
console.log(!true);
console.log(!false);

console.log(7 > 5 || 3 > 4 && 2 < 6 || 10 < 8 || !0);


//8. Ternary Operators
// This is a shorthand way of performing conditional evaluations. 
// the ternary operator ('? :') allows you to execute one of two expressions based on a condition.
console.log("-----------------------------------------------------")
console.log(45 % 2 === 0 ? "even" : "odd"); // Checks if 45 is even or odd
console.log("Python" == "Python" ? "match" : "mismatch"); // Compares two identical strings
console.log("abc" < "xyz" ? "true" : "false"); // Compares strings ascii values
console.log("HTML" === "html" ? "match" : "mismatch"); // Compares strings with different cases


//9. Template Literals
// Template literals are a feature in JavaScript that allows you to create strings with embedded expressions, 
// multi-line text, and improved readability. They are enclosed by backticks (`) instead of single or double quotes.
let num1 = 25;
let num2 = 38;
let result = num2 / num1;
let result1 = num1 - num2;
console.log(`The addition of ${num1} and ${num2} is ${result}`);
console.log(`The substraction of ${num1} and ${num2} is ${result1}`);