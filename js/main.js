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

