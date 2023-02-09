/* // String
const myVariable = "Mathematics";

// The length property
console.log(myVariable.length);
console.log("Every good boy does fine".length);

// String Methods
console.log(myVariable.slice(5,8));
console.log(myVariable.slice(5));
console.log(myVariable.toLocaleUpperCase());
console.log(myVariable.toLowerCase());
console.log(myVariable.includes(""));
console.log(myVariable.includes("the"));
console.log(myVariable.includes("div"));
console.log(myVariable.split("e"));
console.log(myVariable.split(""));
console.log("John, joe, doe".split(""));
console.log("John, joe, doe".split(","));
console.log("Every good boy does fine".split(" "));

End of String */

/* 
// Numbers
const myNumber = 42;
const myFloat1 = 42.00;
const myFloat2 = 42.01;
const myString = "42";
const myString1 = "42asde";
const myString3 = "42.123abc";

// console.log(myNumber == myFloat1);
// console.log(myNumber == myFloat2);
// console.log(myNumber == myString);
// console.log(myString + 3);
// console.log(Number(myString));
// console.log(Number(myString) === myNumber);
// console.log(Number(false));
// console.log(Number(true));

// console.log(Number.isInteger(myNumber)); // True
// console.log(Number.isInteger(myFloat1)); // True
// console.log(Number.isInteger(myFloat2)); // False
// console.log(Number.isInteger(myString)); // False

console.log(Number.parseFloat(myNumber)); // 42
console.log(Number.parseFloat(myFloat1)); // 42
console.log(Number.parseFloat(myFloat2)); // 42.1
console.log(Number.parseFloat(myString)); // 42
console.log(Number.parseFloat(myString1)); // 42
console.log(Number.parseFloat(myString3).toFixed(2)); // 42.12
console.log(myFloat2.toFixed(2)); // 42.01

console.log(myFloat1.toString()); // "42"
console.log(typeof myFloat1.toString()); // true
console.log(typeof Number.parseFloat(myString1)); // number

// || Chaining

console.log(Number.parseFloat("4.237abc").toFixed(2).toString()); // 4.24

// NAN

console.log(Number.isNaN("dave")); // False
console.log(isNaN("dave")); // True 

More example:

console.log(Math.PI); // Output is 3.141592653589793
console.log(Math.trunc(Math.PI)); // Output is 3
console.log(Math.round(3.4)); // Output is 3
console.log(Math.round(3.5)); // Output is 4
console.log(Math.ceil(3.4)); // Output is 4 // Always round up
console.log(Math.floor(3.4)); // Output is 3 // Always round down
console.log(Math.pow(2, 4)); // Output is 16 // 2 to the power of 4

console.log(Math.min(2, 5)); // Output is 2 // Returns the smallest
console.log(Math.max(2, 5)); // Output is 5 // Returns the largest
console.log(Math.random()); // Output RANDOM numbers.

// Generating a random numbers from 1- 10
console.log(Math.floor(Math.random() * 10) +1 );

End of Math methods*/

/* // Write a code that will generate a random letter from your name
console.log("Mark".charAt(Math.floor(Math.random() * 4)));
console.log("Mark".charAt(Math.floor(Math.random() * 4)));
console.log("Mark".charAt(Math.floor(Math.random() * 4)));
console.log("Mark".charAt(Math.floor(Math.random() * 4)));

// Create a code that will generate a random letter for any name.

const anyName = "Jonathan"

console.log("anyName".charAt(Math.floor(Math.random() * anyName.length)));
console.log("anyName".charAt(Math.floor(Math.random() * anyName.length)));
console.log("anyName".charAt(Math.floor(Math.random() * anyName.length)));
console.log("anyName".charAt(Math.floor(Math.random() * anyName.length)));
console.log("anyName".charAt(Math.floor(Math.random() * anyName.length)));
console.log("anyName".charAt(Math.floor(Math.random() * anyName.length)));
console.log("anyName".charAt(Math.floor(Math.random() * anyName.length)));

End of coding challenge*/


