// Write a loop that makes seven calls to console.log to output the following triangle:

// #
// ##
// ###
// ####
// #####
// ######
// #######

// It may be useful to know that you can find the length of a string by writing .length after
// it.
// let abc = "abc";
// console.log(abc.length);
// // → 3


let triangle = '';

for (let i = 1; i <= 7; i++) {
  triangle += '#';         // Add one '#' to the triangle string
  console.log(triangle);    // Output the current state of the triangle
}


for (let index = 1; index <= 7; index++) {
  console.log("#" .repeat(index));
  
}