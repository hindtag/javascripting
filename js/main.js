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


// Conditionals: If Statements
    /* || Syntax
    if (condition) {
        // run some code if the condition is true, stop when false.
    } else { // with else you can execute difference code when the above condition is false.
    }
    */
    // Example using order:

    // let customerIsBanned = false;
    // let soup = "chicken noodle soup";
    // let crackers = true;
    // let reply;

    // if (customerIsBanned) {
    //     reply = `No soup for you!`
    // }else if (soup && crackers) {
    //     reply = `her's your order of ${soup} & crackers`
    // }else if (soup) {
    //     reply = `here's your order of ${soup}`
    // }else{
    //     reply = `Sorry, we're out of soup.`
    // };

    // console.log(reply); // here's your order of chicken noodle soup & crackers

    // Another Example using test score:
    // let testScore = 59;
    // let collegeStudent = true;
    // let grade;

    // if (testScore >= 90) {
    //     grade = "A";
    // } else if (testScore >= 80) {
    //     grade = "B";
    // } else if (testScore >= 70) {
    //     grade = "C";
    // } else if (testScore >= 60) {
    //     grade = "D";
    // } else {
    //     if (collegeStudent){
    //         grade = "U"
    //     } else {
    //         grade = "F"
    //     }
    // };
    // console.log(grade); // Output is U

    // Decision tree!
    // let playerOne = "paper";
    // let computer = "rock";
    // let result;

    // if (playerOne === computer) {
    //     result = "tie game!";
    // } else if (playerOne === "rock") {
    //     if (computer === "paper"){
    //         result = "Computer wins";
    //     } else {
    //         result = "Player One wins";
    //     }
    // } else if (playerOne === "paper") {
    //     if (computer === "scissor"){
    //         result = "Computer wins";
    //     } else {
    //         result = "Player One wins";
    //     }
    // } else {
    //     if (computer === "rock"){
    //         result = "Computer wins";
    //     } else {
    //         result = "Player One wins";
    //     }
    // }
    // console.log(result);


    // || Switch Statements
    // Checks an expression or value and then takes a waterfall shape to check possible cases.
        /* Syntax
        switch (expression OR) {
            case choice1:
                // Run this code.
                break;
            case choice2:
                // Run this different code.
                break;
            // add as many cases as needed.
            default:
                break;
        } */

        // Example
        switch (2) {
            case 1:
                console.log(1);
                break;
            case 2:
                console.log(2);
                break;
            case 3:
                console.log(3);
                break;
        
            default:
                console.log(`No match`);
        } // Output is 2

        // Another example:
        switch (Math.floor(Math.random()* 3 + 1 )) {
            case 1:
                console.log(1);
                break;
            case 2:
                console.log(2);
                break;
            case 3:
                console.log(3);
                break;
        
            default:
                console.log(`No match`);
        }

        // Another example using switch for rock paper scissor:

        let playerOne = "rock";
        let computer = "paper"

        switch (playerOne) {
            case computer:
                console.log(`Tie game`);
                break;
            case "rock":
                if (computer === "paper") {
                    console.log(`Computer wins`);
                } else {
                    console.log(`Player One wins`);
                }
                break
            case "paper":
                if (computer === "scissor") {
                    console.log(`Computer wins`);
                } else {
                    console.log(`Player One wins`);
                }
                break
            default:
                if (computer === "rock") {
                    console.log(`computer wins`);
                } else {
                    console.log(`Player one wins`);
                }
        }