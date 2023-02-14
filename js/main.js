// /* // String
// const myVariable = "Mathematics";

// // The length property
// console.log(myVariable.length);
// console.log("Every good boy does fine".length);

// // String Methods
// console.log(myVariable.slice(5,8));
// console.log(myVariable.slice(5));
// console.log(myVariable.toLocaleUpperCase());
// console.log(myVariable.toLowerCase());
// console.log(myVariable.includes(""));
// console.log(myVariable.includes("the"));
// console.log(myVariable.includes("div"));
// console.log(myVariable.split("e"));
// console.log(myVariable.split(""));
// console.log("John, joe, doe".split(""));
// console.log("John, joe, doe".split(","));
// console.log("Every good boy does fine".split(" "));

// End of String */

// /* 
// // Numbers
// const myNumber = 42;
// const myFloat1 = 42.00;
// const myFloat2 = 42.01;
// const myString = "42";
// const myString1 = "42asde";
// const myString3 = "42.123abc";

// // console.log(myNumber == myFloat1);
// // console.log(myNumber == myFloat2);
// // console.log(myNumber == myString);
// // console.log(myString + 3);
// // console.log(Number(myString));
// // console.log(Number(myString) === myNumber);
// // console.log(Number(false));
// // console.log(Number(true));

// // console.log(Number.isInteger(myNumber)); // True
// // console.log(Number.isInteger(myFloat1)); // True
// // console.log(Number.isInteger(myFloat2)); // False
// // console.log(Number.isInteger(myString)); // False

// console.log(Number.parseFloat(myNumber)); // 42
// console.log(Number.parseFloat(myFloat1)); // 42
// console.log(Number.parseFloat(myFloat2)); // 42.1
// console.log(Number.parseFloat(myString)); // 42
// console.log(Number.parseFloat(myString1)); // 42
// console.log(Number.parseFloat(myString3).toFixed(2)); // 42.12
// console.log(myFloat2.toFixed(2)); // 42.01

// console.log(myFloat1.toString()); // "42"
// console.log(typeof myFloat1.toString()); // true
// console.log(typeof Number.parseFloat(myString1)); // number

// // || Chaining

// console.log(Number.parseFloat("4.237abc").toFixed(2).toString()); // 4.24

// // NAN

// console.log(Number.isNaN("dave")); // False
// console.log(isNaN("dave")); // True 

// More example:

// console.log(Math.PI); // Output is 3.141592653589793
// console.log(Math.trunc(Math.PI)); // Output is 3
// console.log(Math.round(3.4)); // Output is 3
// console.log(Math.round(3.5)); // Output is 4
// console.log(Math.ceil(3.4)); // Output is 4 // Always round up
// console.log(Math.floor(3.4)); // Output is 3 // Always round down
// console.log(Math.pow(2, 4)); // Output is 16 // 2 to the power of 4

// console.log(Math.min(2, 5)); // Output is 2 // Returns the smallest
// console.log(Math.max(2, 5)); // Output is 5 // Returns the largest
// console.log(Math.random()); // Output RANDOM numbers.

// // Generating a random numbers from 1- 10
// console.log(Math.floor(Math.random() * 10) +1 );

// End of Math methods*/

// /* // Write a code that will generate a random letter from your name
// console.log("Mark".charAt(Math.floor(Math.random() * 4)));
// console.log("Mark".charAt(Math.floor(Math.random() * 4)));
// console.log("Mark".charAt(Math.floor(Math.random() * 4)));
// console.log("Mark".charAt(Math.floor(Math.random() * 4)));

// // Create a code that will generate a random letter for any name.

// const anyName = "Jonathan"

// console.log("anyName".charAt(Math.floor(Math.random() * anyName.length)));
// console.log("anyName".charAt(Math.floor(Math.random() * anyName.length)));
// console.log("anyName".charAt(Math.floor(Math.random() * anyName.length)));
// console.log("anyName".charAt(Math.floor(Math.random() * anyName.length)));
// console.log("anyName".charAt(Math.floor(Math.random() * anyName.length)));
// console.log("anyName".charAt(Math.floor(Math.random() * anyName.length)));
// console.log("anyName".charAt(Math.floor(Math.random() * anyName.length)));

// End of coding challenge*/

// // Conditionals: If Statements
// /* || Syntax
//     if (condition) {
//         // run some code if the condition is true, stop when false.
//     } else { // with else you can execute difference code when the above condition is false.
//     }
//     */
// // Example using order:

// // let customerIsBanned = false;
// // let soup = "chicken noodle soup";
// // let crackers = true;
// // let reply;

// // if (customerIsBanned) {
// //     reply = `No soup for you!`
// // }else if (soup && crackers) {
// //     reply = `her's your order of ${soup} & crackers`
// // }else if (soup) {
// //     reply = `here's your order of ${soup}`
// // }else{
// //     reply = `Sorry, we're out of soup.`
// // };

// // console.log(reply); // here's your order of chicken noodle soup & crackers

// // Another Example using test score:
// // let testScore = 59;
// // let collegeStudent = true;
// // let grade;

// // if (testScore >= 90) {
// //     grade = "A";
// // } else if (testScore >= 80) {
// //     grade = "B";
// // } else if (testScore >= 70) {
// //     grade = "C";
// // } else if (testScore >= 60) {
// //     grade = "D";
// // } else {
// //     if (collegeStudent){
// //         grade = "U"
// //     } else {
// //         grade = "F"
// //     }
// // };
// // console.log(grade); // Output is U

// // Decision tree!
// // let playerOne = "paper";
// // let computer = "rock";
// // let result;

// // if (playerOne === computer) {
// //     result = "tie game!";
// // } else if (playerOne === "rock") {
// //     if (computer === "paper"){
// //         result = "Computer wins";
// //     } else {
// //         result = "Player One wins";
// //     }
// // } else if (playerOne === "paper") {
// //     if (computer === "scissor"){
// //         result = "Computer wins";
// //     } else {
// //         result = "Player One wins";
// //     }
// // } else {
// //     if (computer === "rock"){
// //         result = "Computer wins";
// //     } else {
// //         result = "Player One wins";
// //     }
// // }
// // console.log(result);

// // || Switch Statements
// // Checks an expression or value and then takes a waterfall shape to check possible cases.
// /* Syntax
//         switch (expression OR) {
//             case choice1:
//                 // Run this code.
//                 break;
//             case choice2:
//                 // Run this different code.
//                 break;
//             // add as many cases as needed.
//             default:
//                 break;
//         } */

// // // Example
// // switch (2) {
// //     case 1:
// //         console.log(1);
// //         break;
// //     case 2:
// //         console.log(2);
// //         break;
// //     case 3:
// //         console.log(3);
// //         break;

// //     default:
// //         console.log(`No match`);
// // } // Output is 2

// // // Another example:
// // switch (Math.floor(Math.random()* 3 + 1 )) {
// //     case 1:
// //         console.log(1);
// //         break;
// //     case 2:
// //         console.log(2);
// //         break;
// //     case 3:
// //         console.log(3);
// //         break;

// //     default:
// //         console.log(`No match`);
// // }

// // // Another example using switch for rock paper scissor:

// // let playerOne = "rock";
// // let computer = "paper"

// // switch (playerOne) {
// //     case computer:
// //         console.log(`Tie game`);
// //         break;
// //     case "rock":
// //         if (computer === "paper") {
// //             console.log(`Computer wins`);
// //         } else {
// //             console.log(`Player One wins`);
// //         }
// //         break
// //     case "paper":
// //         if (computer === "scissor") {
// //             console.log(`Computer wins`);
// //         } else {
// //             console.log(`Player One wins`);
// //         }
// //         break
// //     default:
// //         if (computer === "rock") {
// //             console.log(`computer wins`);
// //         } else {
// //             console.log(`Player one wins`);
// //         }
// // }

// // || Ternary Operator
// // Example:
// // let soup = "Chicken soup"
// // let isCustomerBanned = false;
// // let response = soup ? "yes, we have soup" : "Sorry, no soup today";
// // console.log(response); // Output is Sorry, no soup today since there has no value inside the variable soup // else, put a value on variable soup.

// // let soupAccess = isCustomerBanned ? "Sorry, no soup for you!" : soup ? `Yes we have ${soup} today.` : "sorry, no soup today";
// // console.log(soupAccess); //If isCustomerBanned is true the output is Sorry, no soup for you!

// // // Another example:
// // let testScore = 40;
// // let myGrade = testScore > 89 ? "Flat A" : testScore > 79 ? "Flat B" : testScore > 69 ? "Flat C" : testScore > 59 ? "Flat D" : "Flat F";

// // console.log(`My test grade is a ${myGrade}`);

// // // Another example:
// // let playerOne = "paper";
// // let computer = "scissor";
// // let result = playerOne === computer ? "Tie game" : playerOne === "rock" && computer === "paper" ? "Computer wins" : playerOne === "paper" && computer === "scissor" ? "Computer wins" : playerOne === "scissor" && computer === "rock" ? "Computer wins" : "player one wins!"

// // console.log(result);

// // || User Input
// // Pop out
// //alert("Hello world"); // Pop up dialog box with Hello world

// // let myBoolean = confirm("ok === True\nCancel === False");
// // console.log(myBoolean); // Log data on console for the myBoolean value.

// /* let myName = prompt("Please enter your name.");
// if (myName) {
//     console.log(name.length);
//     console.log(name.trim().length);
//     console.log(name.trim());
// console.log(myName);
// } else {
// console.log("You didnt enter your name.");
// } */

// // Interactive game
// /* let playGame = confirm("Shall we play game called - rock, paper, or scissor?");
// if (playGame) {
//   //play
//   let playerChoice = prompt("Please enter rock, paper or scissor");
//   if (playerChoice) {
//     let playerOne = playerChoice.trim().toLowerCase();
//     if (
//       playerOne === "rock" ||
//       playerOne === "paper" ||
//       playerOne === "scissor"
//     ) {
//       let computerChoice = Math.floor(Math.random() * 3 + 1);
//       let computer =
//         computerChoice === 1
//           ? "rock"
//           : computerChoice === 2
//           ? "paper"
//           : "scissor";

//       let result =
//         playerOne === computer
//           ? "Tie game!"
//           : playerOne === "rock" && computer === "paper"
//           ? `playerOne: ${playerOne}\nComputer: ${computer}\nComputer wins!`
//           : playerOne === "paper" && computer === "scissor"
//           ? `playerOne: ${playerOne}\nComputer: ${computer}\nComputer wins!`
//           : playerOne === "scissor" && computer === "rock"
//           ? `playerOne: ${playerOne}\nComputer: ${computer}\nComputer wins!`
//           : "player one wins!";
//       alert(result);
//       let playAgain = confirm("Play Again?");
//       playAgain ? location.reload() : alert("okay, thanks for playing");
//     } else {
//       alert("Invalid input");
//     }
//   } else {
//     alert("I guess you changed your mind. Maybe next time.");
//   }
// } else {
//   alert("Okay, maybe next time.");
// }

// END OF INTERACTIVE GAME*/

// // | Loops

// // || While loop
// // let myNumber = 0;
// // while (myNumber < 50) {
// //   myNumber += 2;
// //   console.log(myNumber);
// // }

// // || Do while
// // let myNumber = 50;
// // do {
// //   myNumber += 2;
// //   console.log(myNumber);
// // } while (myNumber < 50)
// // let name = "Tag";
// // let counter = 0;
// // let myLetter;
// // while (counter <=3) {
// //   myLetter = name[counter];
// //   console.log(myLetter);
// //   if (counter === 1){
// //     counter += 2;
// //     continue;
// //   }
// //   if (myLetter === "a") break;
// //   counter++;
// // };
// // console.log(counter);

// // || for loops
// // for (i=0; i <= 10 ; i++){
// //   console.log(i);
// // }

// // Example of loop
// // let name = "tag"
// // for (i=0; i <= name.length ; i++){
// //   console.log(name.charAt(i));
// // }

// // | Functions
// // || Methods

// // Function Declaration Syntax:

// // function sum(num1, num2) {
// //   if (num2 === undefined){
// //     return num1 + num1
// //   }
// //   return num1 + num2;
// // }
// // console.log(sum(2, 10)); // Output is 15

// // // Reusable function
// // function getUserNameFromEmail(email) {
// //   return email.slice(0, email.indexOf("@"));
// // }
// // console.log(getUserNameFromEmail("playerrandom@email.com")); // Output is playerrandom

// // Anonymous function
// // const getUserNameFromEmail = function (email) {
// //   return email.slice(0, email.indexOf("@"));
// // }
// // console.log(getUserNameFromEmail("playerrandom@email.com")); // Output is playerrandom

// // Arrow functions

// // const getUserNameFromEmail = (email) => {
// //   return email.slice(0, email.indexOf("@"));
// // }
// // console.log(getUserNameFromEmail("playerrandom@email.com")); // Output is playerrandom

// // const toProperCase = (name) => {
// //   return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase(); // This is the declaration.
// // }

// // console.log(toProperCase("BiRoN")); // By using chartAt and slice the Output is Biron.


// // global scope
// // var x = 1; // function scoped
// // let y = 2; // block scoped
// // const z = 3;

// // console.log(`global: ${x}`);
// // console.log(`global: ${y}`);
// // console.log(`global: ${z}`);

// // function myFunc(params) {
// //   var x = 10;
// //   const z = 5;
// //   console.log(`function: ${x}`);
// //   console.log(`function: ${y}`);
// //   console.log(`function: ${z}`);

// //   {

// //     var x =11;
// //     const z = 6;
// //     console.log(`block: ${x}`);
// //     console.log(`block: ${y}`);
// //     console.log(`block: ${z}`);
// //   }
// // }

// // console.log(myFunc());


// // Arrays
// const myArray = [];

// // Add elements to an array
// myArray[0] = "Tag";
// myArray[1] = 0905;
// myArray[2] = false;

// // myArray.push("School")

// // // Refer to an array
// // console.log(myArray);
// // console.log(myArray.length);

// // // The last element in an array
// // console.log(myArray[myArray.length - 2]);
// // console.log(myArray[1]);

// // const lastItem = myArray.pop();
// // console.log(lastItem);

// // const firstItem = myArray.shift();

// // console.log(firstItem);
// console.log(myArray);

// // Removing in the middle of the array

// const itemMid = myArray.splice(1, 1, 1,);
// console.log(itemMid);

// const myArray = ["A","B","C","D","E","F"];

// // const newArray = myArray.slice(2,5); // Output is "C","D","E"
// // console.log(newArray);

// // myArray.reverse();
// // console.log(myArray); // Output is "F","E","D","C","B","A"
// const newString = myArray.join(); // Output is A,B,C,D,E,F // adding comma to the array

// const newArray = newString.split(",");
// console.log(newString);
// console.log(newArray);

// Joining two existing array
// const myArrayA = ["A","B","C"];
// const myArrayB = ["D","E","F"];
// const newArray = myArrayA.concat(myArrayB); // value is ['A', 'B', 'C', 'D', 'E', 'F'] by adding two array
// const newArrayToo = [...myArrayA, ...myArrayB]; // value is ['A', 'B', 'C', 'D', 'E', 'F'] by creating a new array that has 6 elements

// console.log(newArray); // Output is ['A', 'B', 'C', 'D', 'E', 'F'] 
// console.log(newArrayToo); // Output is ['A', 'B', 'C', 'D', 'E', 'F']

/*
// Rock, Paper, Scissors: Refactored with Functions
const initGame = () => {
  const startGame = confirm("Shall we play rock, paper, or scissors?");
  startGame ? playGame() : alert("Ok, maybe next time.");
};

// Game flow function
const playGame = () => {
  while (true) {
    let playerChoice = getPlayerChoice();
    playerChoice = formatPlayerChoice(playerChoice);
    if (playerChoice === "") {
      invalidChoice();
      continue;
    }
    if (!playerChoice) {
      decidedNotToPlay();
      break;
    }
    playerChoice = evaluatePlayerChoice(playerChoice);
    if (!playerChoice) {
      invalidChoice();
      continue;
    }
    const computerChoice = getComputerChoice();
    const result = determineWinner(playerChoice, computerChoice);
    displayResult(result);
    if (askToPlayAgain()) {
      continue;
    } else {
      thanksForPlaying();
      break;
    }
  }
};

const getPlayerChoice = () => {
  return prompt("Please enter rock, paper, or scissors.");
};

const formatPlayerChoice = (playerChoice) => {
  if (playerChoice || playerChoice === "") {
    return playerChoice.trim().toLowerCase();
  } else {
    return false;
  }
};

const decidedNotToPlay = () => {
  alert("I guess you changed your mind. Maybe next time.");
};

const evaluatePlayerChoice = (playerChoice) => {
  if (
    playerChoice === "rock" ||
    playerChoice === "paper" ||
    playerChoice === "scissors"
  ) {
    return playerChoice;
  } else {
    return false;
  }
};

const invalidChoice = () => {
  alert("You didn't enter rock, paper, or scissors.");
};

const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  const rpsArray = ["rock", "paper", "scissors"];
  return rpsArray[randomNumber];
};

const determineWinner = (player, computer) => {
  const winner =
    player === computer
      ? "Tie game!"
      : player === "rock" && computer === "paper"
      ? `playerOne: ${player}\nComputer: ${computer}\nComputer wins!`
      : player === "paper" && computer === "scissors"
      ? `playerOne: ${player}\nComputer: ${computer}\nComputer wins!`
      : player === "scissors" && computer === "rock"
      ? `playerOne: ${player}\nComputer: ${computer}\nComputer wins!`
      : `playerOne: ${player}\nComputer: ${computer}\nplayerOne wins!`;

  return winner;
};

const displayResult = (result) => {
  alert(result);
};

const askToPlayAgain = () => {
  return confirm("Play Again?");
};

const thanksForPlaying = () => {
  alert("Ok, thanks for playing.");
};

initGame();
End of rock paper function refactor */

// Objects
// key-value pairs in curly braces

//Example:
// const myObj = { name: "tag"};

// const anotherObj = {
//   alive: true,
//   answer: 33,
//   hobbies: ["eat", "sleep", "code"],
//   beverages: {
//     morning: "coffee",
//     afternoon: "iced tea"
//   },
//   action: function (){
//     return `Time for ${this.beverages.morning}` // Output is Time for coffee
//   }
// };
// console.log(anotherObj.beverages.morning); // Output is coffee
// console.log(anotherObj.action()); // Return the anonymous method function named action

// Another example:
// const vehicle = {
//   wheels: 4,
//   engine: function(){
//     return "vrooooom!, Vroom!";
//   }
// };

// const truck = Object.create(vehicle); // Constructor with inheritance.
// truck.doors = 2;
// console.log(truck);
// console.log(truck.wheels); // Inheritance
// console.log(truck.engine());

// const car = Object.create(vehicle);
// car.doors = 4; // Adding key value pair
// car.engine = function (){
//   return "Whoosh";
// }
// console.log(car.engine()); // Output is Whoosh

// Another example
// const band = {
//   vocals: "Robert Plant",
//   guitar: "Jimmy page",
//   bass: "Jon Paul Jones",
//   drums: "John Bonham"
// };

// Deleting
// delete band.drums; // Delete pair value key "drums: "John Bonham"
// console.log(band.hasOwnProperty("drums")); // Will return boolean.

// console.log(Object.keys(band)); // Output ['vocals', 'guitar', 'bass', 'drums']
// console.log(Object.values(band)); // Output ['Robert Plant', 'Jimmy page', 'Jon Paul Jones', 'John Bonham']

// for (let job in band){
//   console.log(`On ${job}, it's ${band[job]}`); // Will output key value pairs.
// };

/*Output are:
On vocals, it's Robert Plant
main.js:667 On guitar, it's Jimmy page
main.js:667 On bass, it's Jon Paul Jones
main.js:667 On drums, it's John Bonham
*/

// destructuring object for this object
// const band = {
//   vocals: "Robert Plant",
//   guitar: "Jimmy page",
//   bass: "Jon Paul Jones",
//   drums: "John Bonham"
// };

// This is the correct destructuting
// const {vocals, guitar, bass, drums} = band; // creating a 4 new variable with inheritance.
// console.log(vocals); // Output is Robert Plant
// console.log(guitar); // Output is Jimmy page
// console.log(bass); // Output is Jon Paul Jones

// This is much cooler in destructuring with function.
// function sings({ vocals }) {return `${vocals} sings!`}; // Creating a function for the object.
// console.log(sings(band)); // Output is Robert Plant sings!

/*
Explanation:
line 695 (inside) tells for {vocals} after the object "I expect a value from vocals coming out of an object".
line 695 second part {} tells fron this function return this.
*/

// javascript classes
// class Pizza {
//   constructor(pizzaType, pizzaSize, pizzaCrust){
//     this.type = pizzaType;
//     this.size = pizzaSize;
//     this.crust = pizzaCrust;
//   }
//   bake(){
//     console.log(`Baking a ${this.size} ${this.type} ${this.crust} crust pizza.`);
//   }
// }

// const myPizza = new Pizza("peperoni", "small", "thin");
// myPizza.bake()
// console.log(myPizza.type); // Current output is peperoni

// // Changing values of a property through .notation. (This is not the proper way)
// myPizza.type = "supreme"; // Changing from peperoni to supreme.
// console.log(myPizza.type); // Updated output is supreme


// The proper way to change a value is using a getters and setters
// Creating a class Using the example above (version 1)
// class Pizza {
//   constructor(pizzaType, pizzaSize, pizzaCrust,){
//     this.type = pizzaType;
//     this.size = pizzaSize;
//     this.crust = pizzaCrust;
//     this.toppings = [];
//   }
//   getCrust(){ // This is creating a method for crust
//     return this.crust;
  
//   }
//   setCrust(pizzaCrust){ // Setting the crust with parameter (pizzaCrust)
//     this.crust = pizzaCrust;
//   }
//   getToppings(){
//     return this.toppings;
//   }
//   setToppings(topping){
//     this.toppings.push(topping);
//   }
//   bake(){
//     console.log(`Baking a ${this.size} ${this.type} ${this.crust} crust pizza.`);
//   }
// }

// const myPizza = new Pizza("peperoni", "small", "thin");
// myPizza.setCrust("thicc"); // This is setting the value passed by the getter and setter
// myPizza.bake()
// myPizza.setToppings("sausage");
// myPizza.setToppings("olives");
// console.log(myPizza.getToppings()); // Returning the updated pizzaCrust value for "Thick" using method again - Much cleaner

// // Creating a parent class (version 2)
// class Pizza { // This is the super class / parent class and used this as a blue print.
//   constructor(pizzaSize){ // This constructor expects size (code below)
//     this._size = pizzaSize; // Intended as private and should not be modified outside the class.
//     this._crust = "original"; // Intended as private and should not be modified outside the class.
//   }
//   getCrust(){ 
//     return this._crust;
  
//   }
//   setCrust(pizzaCrust){ 
//     this._crust = pizzaCrust;
//   }
// }

// class mediumSpecialtyPizza extends Pizza { // This is a child class using extends
//   constructor(pizzaSize){
//     super(pizzaSize) // calling the constructor of the parent class above,
//     this.type = "The Works";
//   }
//   slice(){ // Call the property of the parent class with slice method.
//     console.log(`Our ${this.type} ${this.size} pizza has 8 slices`);
//   }
// }

// class largeSpecialtyPizza extends Pizza { // This is a child class using extends
//   constructor(pizzaSize){
//     super(pizzaSize) // calling the constructor of the parent class above,
//     this.type = "The Works";
//   }
//   slice(){ // Call the property of the parent class with slice method.
//     console.log(`Our ${this.type} ${this.size} pizza has 12 slices`);
//   }
// }

// const myMediumSpecialtyPizza = new mediumSpecialtyPizza("medium"); // Output Our The Works medium pizza has 8 slices
// myMediumSpecialtyPizza.slice();
// const myLargeSpecialtyPizza = new largeSpecialtyPizza("large"); // Output Our The Works medium pizza has 12 slices
// myLargeSpecialtyPizza.slice();


// This is the es6 practice for creating a class by creating a factory faction (version 3)
/* function pizzaFactory(pizzaSize) {
  const crust = "original";
  const size = pizzaSize;
  return {
    bake: () => console.log(`Baking a ${size} ${crust} crust pizza.`)
  }
}

const myPizza = pizzaFactory("small");
myPizza.bake(); */


// This is the updated practice that support the public and private field.
// class Pizza { // parent class as blue print.
//   crust = "original"; // this is a public field.
//   #sauce = "traditional";  // this is a private field using a hash.
//   #size; 
//   constructor(pizzaSize){ // pizzaSize as the parameter.
//     this.#size = pizzaSize;  // #size was referred here inside the class.
//   }
//   getCrust(){ 
//     return this.crust;
//   }
//   setCrust(pizzaCrust){ 
//     this.crust = pizzaCrust;
//   }
//   hereYouGo(){
//     console.log(`Here's your ${this.crust} ${this.#sauce} sauce ${this.#size} pizza.`);
//   }
// }

// const myPizza = new Pizza("large") // Define myPizza again as an argument to the parameter.
// myPizza.hereYouGo(); //call the hereYouGo method.

// // Note, You can still access the public field
// console.log(myPizza.getCrust());

/*
// || JSON
const myObj = {
  name: "Dave",
  hobbies: ["eat", "sleep", "code"],
  hello: function (){
    console.log("Hello!");
  }
};

console.log(myObj); // whole object
console.log(myObj.name); // Output is Dave
myObj.hello(); // Calling just the hello method with function string value of "Hello!"
console.log(typeof myObj); // Output is object

// FORMATTING AN OBJECT [SENDING]
const sendJSON = JSON.stringify(myObj) //Stringify is a method to send the object as a JSON FORMAT and passing myObj as parameter.
console.log(sendJSON); // Output is now JSON format {"name":"Dave","hobbies":["eat","sleep","code"]}
console.log(typeof sendJSON); // This is now string

// FORMATTING AN OBJECT [RECIEVING]
const recieveJSON = JSON.parse(sendJSON); // Parse is a method to deconstruct a JSON format
console.log(recieveJSON); // Output is Object format {name: 'Dave', hobbies: Array(3)}
console.log(typeof recieveJSON); // This is object again
*/

// | Errors and Error handling
"use strict"; // use to enforce some of javascript rules.

// const makeError = () => {
//   try {
//     const name = "Dave";
//     name = "Joe";
//   } catch (err) {
//     console.error(err); // Used to log the real error
//     console.log(err.name); // Type error only
//     console.log(err.message); // message only.
//     console.error(err.stack); // detailed
//     logTheError(err.stack);
//   }
// };
// makeError();

// // Creating a custom error
// const iHaveError = () => {
//   let i=1;
//   while (i <=5 ) {
//     try {
//       if (i % 2 !== 0) {
//         throw new Error("Odd number!");
//       }
//       console.log("Even number!");
//     } catch (err) {
//       console.error(err.stack);
//     } finally {
//       console.log("...finally");
//       i++;
//     }
//   }
// };
// iHaveError();

// /* | This is a custom error
// function customError(message){
//   this.message = message;
//   this.name = "customError";
//   this.stack = `${this.name}: ${this.message}`;
// } end of custom error*/


// | DOM

// By ID
// const view1 = document.getElementById("view1");
// console.log(view1);
// const view2 = document.querySelector("#view2");
// console.log(view2);
// view1.style.display = "flex";
// view2.style.display = "none";

// // By Classname
// const views = document.getElementsByClassName("view");
// console.log(views);
// const sameViews = document.querySelectorAll('.view');
// console.log(sameViews);

// // All divs
// const divs = view1.querySelectorAll("div");
// console.log(divs);
// const sameDivs = view1.getElementsByTagName("div");
// console.log(sameDivs);

// // Specific selectors | even divs (2,4,6,8,10,12)
// const evenDivs = view1.querySelectorAll("div:nth-of-type(2n)");
// console.log(evenDivs);

// // Manipulating / Altering the UI styles
// for (let i = 0; i < evenDivs.length; i++){
//   evenDivs[i].style.backgroundColor = "darkblue"
//   // evenDivs[i].style.width = "200px";
//   // evenDivs[i].style.height = "200px";
// // }

// // // Altering the text
// const navText = document.querySelector("nav h1");
// console.log(navText);
// navText.textContent = "Hello world!"
// const navbar = document.querySelector("nav");
// navbar.innerHTML = `<h1>Hello</h1> <p>This should align right</p>`;
// console.log(navbar);
// navbar.style.justifyContent = "space-between";

// // // Navigating the DOM tree
// // console.log(evenDivs[0]); // 2
// // console.log(evenDivs[0].parentElement); // Whole page
// // console.log(evenDivs[0].parentElement.children); // All div "1-12"
// // console.log(evenDivs[0].parentElement.childNodes); // In this example the output is all text + all div
// // console.log(evenDivs[0].parentElement.hasChildNodes()); // true
// // console.log(evenDivs[0].parentElement.lastChild); // text
// // console.log(evenDivs[0].parentElement.lastElementChild); // 12
// // console.log(evenDivs[0].nextSibling); // #text 3
// // console.log(evenDivs[0].nextElementSibling); // div "3"
// // console.log(evenDivs[0].previousSibling); // #text 1
// // console.log(evenDivs[0].previousElementSibling); // div "1"
// // console.log(evenDivs[0].nextElementSibling.nextElementSibling); // Chaining that has output of div 1 and 4

// // Adding and removing
// view1.style.display = "none";
// view2.style.display = "flex";
// view2.style.flexDirection = "row";
// view2.style.flexWrap = "wrap";
// view2.style.margin = "10px";

// while (view2.lastChild) { // removing
//   view2.lastChild.remove();
// }

// const createDivs = (parent, iter) => { // Altering
//   const newDiv = document.createElement("div");
//   newDiv.textContent = iter;
//   newDiv.style.backgroundColor = "#000";
//   newDiv.style.width = "100px";
//   newDiv.style.height = "100px";
//   newDiv.style.margin = "10px";
//   newDiv.style.display = "flex";
//   newDiv.style.justifyContent = "center";
//   newDiv.style.alignItems = "center";
//   parent.append(newDiv);
// }

// createDivs(view2, "My 2nd view");
// // for (let i = 0; i <= 12; i++) { // Creating new divs using loop
// //   createDivs(view2, i);
  
// // }


view1.style.display = "none";
view2.style.display = "flex";

const view = document.querySelector("#view2");
console.log(view);