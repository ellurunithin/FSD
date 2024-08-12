// numbers
console.log(30)
console.log(3.14)
console.log(-150)
console.log(0XFF)
console.log(10/3)

// special numbers
    // infinity
console.log("------------------------------")   
console.log(1000/0)
console.log(1e1000)
console.log(Infinity * 2)
console.log(Math.pow(10, 308) * 10)
console.log(Infinity + 100)
    // -infinity
console.log("------------------------------")
console.log(-1000/0)
console.log(-1e1000)
console.log(-Infinity * 2)
console.log(-Math.pow(10, 308) * 10)
console.log(-Infinity + 100)

    // NaN
console.log("------------------------------")
console.log(0/0)
console.log("hello"*3)
console.log(21-"hello")
console.log(0*Infinity)
console.log("hello"/3)

//strings
console.log("------------------------------")
console.log("Hello, World!")
console.log('Single quotes')
console.log(`Template literal`)
console.log("hello".toUpperCase())
console.log("Hello" + " " + "World")

// boolean
console.log("------------------------------")
console.log(5 > 3)
console.log(5 < 3)
console.log(true && false)
console.log(true || false)
console.log("hello"==0)

// Empty Values
console.log("------------------------------")
let value = null;
console.log(value)

console.log(null)

let data
console.log(data)

let obj = { key: undefined }
console.log(obj.key)

// Arthematic operators
console.log("----------------------------")
console.log(5 + 3)
console.log(5 - 3)
console.log(5 * 3)
console.log(5 / 3)
console.log(5 % 3)

// uniary operator
console.log("----------------------------")
console.log(+('5'))
console.log(-('5'))

let a = 10
console.log(++a)
let b = 5
console.log(--b)
console.log(!true)

// logical operators
console.log("----------------------------")
console.log(1 && 2)
console.log(0 || 3)
console.log(!true)
console.log(!33)
console.log(true && true)

// tunary operators
console.log("----------------------------")
let age = 18
console.log(age >= 18 ? 'Adult' : 'Minor')
let score = 85;
console.log(score >= 90 ? 'A' : score >= 80 ? 'B' :'D')
let s = true ? 'Welcome back!' : 'Please log in';
console.log(s)
console.log(5 > 3 ? 'Yes' : 'No')
let number = 10
console.log(number % 2 === 0 ? 'Even' : 'Odd')


