// Q1. THE SUM OF RANGE
// Write a range function that takes two arguments, start and end, and returns an array containing all the
// numbers from start up to and including end.
// Next, write a sum function that takes an array of numbers and returns the sum of these numbers. Run the
// example program and see whether it does indeed return 55.
// As a bonus assignment, modify your range function to take an optional third argument that indicates the
// “step” value used when building the array. If no step is given, the elements should go up by increments of one,
// corresponding to the old behavior. The function call range(1, 10, 2) should return [1, 3, 5, 7, 9]. Make sure this
// also works with negative step values so that range(5, 2, -1) produces [5, 4, 3, 2].
// Sample Input and Outputs:
// console.log(range(1, 10));
// // → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// console.log(range(5, 2, -1));
// // → [5, 4, 3, 2]
// console.log(sum(range(1, 10)));
// // → 55

// Function to create a range of numbers
function range(start, end, step = 1) {
    let array = [];

    // If step is positive
    if (step > 0) {
        for (let i = start; i <= end; i += step) {
            array.push(i);
        }
    }
    // If step is negative
    else {
        for (let i = start; i >= end; i += step) {
            array.push(i);
        }
    }

    return array;
}

// Function to calculate the sum of numbers in an array
function sum(numbers) {
    let total = 0;
    for (let number of numbers) {
        total += number;
    }
    return total;
}

console.log(range(1,10))
console.log(sum(range(5, 2, -1)));
console.log(sum(range(1, 10)));


// Q2. REVERSING AN ARRAY
// Arrays have a reverse method that changes the array by inverting the order in which its elements appear. For
// this exercise, write two functions, reverseArray and reverseArrayInPlace. The first, reverseArray, should take an
// array as its argument and produce a new array that has the same elements in the inverse order. The second,
// reverseArrayInPlace, should do what the reverse method does: modify the array given as its argument by
// reversing its elements. Neither may use the standard reverse method.


// Function to create a new array with elements in reverse order
function reverseArray(array) {
    let newArray = [];
    for (let i = array.length - 1; i >= 0; i--) {
        newArray.push(array[i]);
    }
    return newArray;
}

// Function to reverse the elements of the array in place
function reverseArrayInPlace(array) {
    let left = 0;
    let right = array.length - 1;

    while (left < right) {
        // Swap the elements at the left and right indices
        let temp = array[left];
        array[left] = array[right];
        array[right] = temp;

        // Move the pointers towards the center
        left++;
        right--;
    }

    return array; // Returning the modified array is optional since it's modified in place
}

// Example usage
console.log(reverseArray([1, 2, 3, 4, 5]));
// → [5, 4, 3, 2, 1]

let array = [1, 2, 3, 4, 5];
reverseArrayInPlace(array);
console.log(array);
// → [5, 4, 3, 2, 1]
