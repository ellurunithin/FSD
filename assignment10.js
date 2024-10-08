// 1. A VECTOR TYPE
// Write a class Vec that represents a vector in two-dimensional space. It takes x and y parameters (numbers),
// that it saves to properties of the same name.
// Give the Vec prototype two methods, plus and minus, that take another vector as a parameter and return a
// new vector that has the sum or difference of the two vectors’ (this and the parameter) x and y values.
// Add a getter property length to the prototype that computes the length of the vector—that is, the distance of
// the point (x, y) from the origin (0, 0).
// Sample Inputs and Outputs
// console.log(new Vec(1, 2).plus(new Vec(2, 3)));
// // → Vec{x: 3, y: 5}
// console.log(new Vec(1, 2).minus(new Vec(2, 3)));
// // → Vec{x: -1, y: -1}
// console.log(new Vec(3, 4).length);
// // → 5




class Vec {
    constructor(x, y) {
      this.x = x;
      this.y = y;
    }
  
    plus(other) {
      return new Vec(this.x + other.x, this.y + other.y);
    }
  
    minus(other) {
      return new Vec(this.x - other.x, this.y - other.y);
    }
  
    get length() {
      return Math.sqrt(this.x ** 2 + this.y ** 2);
    }
  }
  
  // Sample Inputs and Outputs
  console.log(new Vec(1, 2).plus(new Vec(2, 3)));
  // → Vec { x: 3, y: 5 }
  
  console.log(new Vec(1, 2).minus(new Vec(2, 3)));
  // → Vec { x: -1, y: -1 }
  
  console.log(new Vec(3, 4).length);
  // → 5


//   2. GROUPS
// The standard JavaScript environment provides another data structure called Set. Like an instance of Map, a
// set holds a collection of values. Unlike Map, it does not associate other values with those—it just tracks which
// values are part of the set. A value can be part of a set only once—adding it again doesn’t have any effect.
// Write a class called Group (since Set is already taken). Like Set, it has add, delete, and has methods. Its
// constructor creates an empty group, add adds a value to the group (but only if it isn’t already a member),
// delete removes its argument from the group (if it was a member), and has returns a Boolean value indicating
// whether its argument is a member of the group.
// Use the === operator, or something equivalent such as indexOf, to determine whether two values are the
// same.
// Give the class a static from method that takes an iterable object as its argument and creates a group that
// contains all the values produced by iterating over it.
// class Group {
// // Your code here.
// }
// let group = Group.from([10, 20]);
// console.log(group.has(10));
// // → true
// console.log(group.has(30));
// // → false
// group.add(10);
// group.delete(10);
// console.log(group.has(10));
// // → false

class Group {
    constructor() {
      // Initialize an empty array to store the group's members
      this.members = [];
    }
  
    add(value) {
      // Add the value to the group if it's not already there
      if (!this.has(value)) {
        this.members.push(value);
      }
    }
  
    delete(value) {
      // Find the index of the value in the members array
      const index = this.members.indexOf(value);
      // If the value is found, remove it
      if (index !== -1) {
        this.members.splice(index, 1);
      }
    }
  
    has(value) {
      // Check if the value is in the members array
      return this.members.indexOf(value) !== -1;
    }
  
    static from(iterable) {
      // Create a new Group
      let group = new Group();
      // Add each value from the iterable to the group
      for (let value of iterable) {
        group.add(value);
      }
      return group;
    }
  }
  
  // Example usage
  let group = Group.from([10, 20]);
  console.log(group.has(10)); // → true (10 is in the group)
  console.log(group.has(30)); // → false (30 is not in the group)
  group.add(10);              // Try to add 10 again (no effect since 10 is already in the group)
  group.delete(10);           // Remove 10 from the group
  console.log(group.has(10)); // → false (10 has been removed from the group)
  