// Q1. FLATTENING
// Use the reduce method in combination with the concat method to “flatten” an array of arrays into a
// single array that has all the elements of the original arrays.
// let arrays = [[1, 2, 3], [4, 5], [6]];
// Result: [1, 2, 3, 4, 5, 6]

let arrays = [[1, 2, 3], [4, 5], [6],[33,45]]; // The array of arrays to flatten
let flattenedArray = arrays.reduce((acc, curr) => {
    // Accumulate the current sub-array into the accumulator using concat
    return acc.concat(curr);
}, []); // Start with an empty array as the initial value of the accumulator

console.log(flattenedArray); // Output the final flattened array: [1, 2, 3, 4, 5, 6]

// Q2. YOUR OWN LOOP
// Write a higher-order function loop that provides something like a for loop statement. It should take a
// value, a test function, an update function, and a body function. Each iteration, it should first run the
// test function on the current loop value and stop if that returns false. It should then call the body
// function, giving it the current value, and finally call the update function to create a new value and
// start over from the beginning.
// When defining the function, you can use a regular loop to do the actual looping.
// loop(3, n => n > 0, n => n - 1, console.log);
// // → 3
// // → 2
// // → 1

function loop(value, test, update, body) {
    // Use a regular loop to implement the higher-order loop function
    while (test(value)) {    // Continue looping as long as test(value) is true
        body(value);         // Execute the body function with the current value
        value = update(value); // Update the value for the next iteration
    }
}

// Example usage:
loop(3, n => n > 0, n => n - 1, console.log);

// Expected output:
// → 3
// → 2
// → 1
