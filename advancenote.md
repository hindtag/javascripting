Data Types:
    To check the type of data use typeof
        Example:
            typeof "tag"
            the output is 'string'

| String:


    Use camelCase
        Example:
            let myName
            let thisVariableName

    || Using String Methods in javascript

    Use .length to return the number of characters in the string.
        Example:
            const myVariable = "Mathematics";

            console.log(myVariable.length); // Output is 11
            console.log("Every good boy does fine".length); // Output is 24
    
    Use .charAt() to returns the character at the position of set by the argument.
            Example:
            const myVariable = "Mathematics";

            console.log(myVariable.charAt(0)); // Output is M

    Use .indexOf() to look for the position of the first occurence.
            Example:
            const myVariable = "Mathematics";

            console.log(myVariable.indexOf("mat")); // Output is 5
    
    Use of .lastIndexOf() to look for the position of the last occurence.
            Example:
            const myVariable = "Mathematics";

            console.log(myVariable.lastIndexOf("ath")); // Output is 1

    Use of .slice(5,8) to return the characters from the start position to the ending position.
            Example:
            const myVariable = "Mathematics";

            console.log(myVariable.slice(5)); // Output matics

    Use of .toUpperCase to transform the string into uppercase
            Example:
            const myVariable = "Mathematics";

            console.log(myVariable.toLocaleUpperCase()); // Output is MATHEMATICS
    
    Use of .toLowerCase to transform the string into uppercase
        Example:
        const myVariable = "Mathematics";

        console.log(myVariable.toLowerCase()); // Output is mathematics

    Use of .includes returns boolean data
        Example:
        const myVariable = "Mathematics";

        console.log(myVariable.includes()); // Output is false

    Use of .split method splits the string wherever the character we provide occurs and returns the resulting multiple strings within an array.
        Example:
        const myVariable = "Mathematics";

        console.log("John, joe, doe".split(",")); // Output is ['John', ' joe', ' doe']

| Numbers
    Warning:
        NAN = Not a number
        On console when you see a 
            blue = number
            white = string
    Note:
        An integer is a whole number.
            Example: 42.

        A number with a decimal point is a float which references the floating point.
            Example: 42.

            More example:
            const myNumber = 42;
            const myFloat1 = 42.00;
            const myFloat2 = 42.01;
            const myString = "42"; //This is string data type

            console.log(myNumber === myFloat1); // Output is true

    || Number methods
    
    Use Number.isInteger() to determine wheter the passed value us an integer.
        Example:
        const myNumber = 42;
        const myFloat1 = 42.00;
        const myFloat2 = 42.01;
        const myString = "42";

        console.log(Number.isInteger(myString)); // False

    Use Number.parseFloat() parses an argument and returns a floating point number. if a number cannot be parsed from the argument, it returns NaN.

        Example:
        const myNumber = 42;
        const myFloat1 = 42.00;
        const myFloat2 = 42.01;
        const myString = "42";
        const myString1 = "42asde"; // alphanumeric

        console.log(Number.parseFloat(myString1)); // 42

    Use of toFixed to format a number according to many decimal points you provide as the paramter.
        Example:
        const myFloat1 = 42.00;
        const myString3 = "42.123abc";

        console.log(Number.parseFloat(myString3).toFixed(2)); // 42.12

    Use of .toString returns a string representing a number.
        Example:
        const myFloat1 = 42.00;
        const myString1 = "42asde";

        console.log(typeof Number.parseFloat(myString1)); // number

        // Chaining = Using several methods chained together
            console.log(Number.parseFloat("4.237abc").toFixed(2).toString()); // 4.24
        

    NaN determines wheter the passed value is NaN AND its type is Number.
        Example:
        console.log(Number.isNaN("dave")); // False

        ||| Global isNan determines wheter a value is NaN or not.
            
            console.log(isNaN("dave")); // True

    || Math Methods
    
    console.log(Math.PI); // Output is 3.141592653589793

    ||| Trunc
    console.log(Math.trunc(Math.PI)); // Output is 3
    
    ||| Round
    console.log(Math.round(3.4)); // Output is 3
    console.log(Math.round(3.5)); // Output is 4

    ||| Ceil
    console.log(Math.ceil(3.4)); // Output is 4 // Always round up

    ||| Floor
    console.log(Math.floor(3.4)); // Output is 3 // Always round down

    ||| Pow
    console.log(Math.pow(2, 4)); // Output is 16 // 2 to the power of 4

    ||| Min
    console.log(Math.min(2, 5)); // Output is 2 // Returns the smallest

    ||| Max
    console.log(Math.max(2, 5)); // Output is 5 // Returns the largest

    ||| Random
        // Choose math.floor() not Math.ceil() to generate random number
    console.log(Math.random()); // Output RANDOM floating numbers.
    console.log(Math.floor(Math.random() * 10) +1 ); // Output RANDOM whole numbers.


    // Write a code that will generate a random letter from your name
        console.log("Mark".charAt(Math.floor(Math.random() * 4)));

        // Create a code that will generate a random letter for any name.
        const anyName = "Jonathan"

        console.log("anyName".charAt(Math.floor(Math.random() * anyName.length)));

| Conditionals : If Statements
        
    || If Statements

        Note: Let you make decisions within your code based upon the current state of data.

        Syntax:
        if (condition) {
            // run some code if the condition is true, stop when false.
        } else { // with else you can execute difference code when the above condition is false.
        }

        // Example a decision tree for rock paper scissor!
        let playerOne = "paper";
        let computer = "rock";
        let result;

        if (playerOne === computer) {
            result = "tie game!";
        } else if (playerOne === "rock") {
            if (computer === "paper"){
                result = "Computer wins";
            } else {
                result = "Player One wins";
            }
        } else if (playerOne === "paper") {
            if (computer === "scissor"){
                result = "Computer wins";
            } else {
                result = "Player One wins";
            }
        } else {
            if (computer === "rock"){
                result = "Computer wins";
            } else {
                result = "Player One wins";
            }
        }
        console.log(result);

    || Switch statements
        Checks an expression or value and then takes a waterfall shape to check possible cases.
            Syntax: 
            switch (expression OR) {
                case choice1:
                    Run this code.
                    break;
                case choice2:
                    Run this different code.
                    break;
                add as many cases as needed.
                default:
                    break;
            }

            // Example using switch for rock paper scissor:

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

        || Ternary Operator
        // A shorthand for an if else statement, much concise.
        // Syntax
        // condition ? ifTrue : ifFalse;
        // the : is like the else
            Example: 
            let testScore = 40;
            let myGrade = testScore > 89 ? "Flat A" : testScore > 79 ? "Flat B" : testScore > 69 ? "Flat C" : testScore > 59 ? "Flat D" : "Flat F";

| User Input
        || Using Pop out
            alert()
            confirm()
            prompt()

<!-- Interactive Game -->
Rock paper scissor


| Loops
        || While loop

            let myNumber = 0;
            while (myNumber <50) {
            console.log(myNumber);
            myNumber = myNumber + 1;
            }

            is the same as 

            let myNumber = 0;
            while (myNumber <50) {
            console.log(myNumber);
            myNumber++;
            }

        || Do while loop - The only difference is it will execute atleast once.
            let myNumber = 50;
            do {
            myNumber += 2;
            console.log(myNumber); // Output is 52
            } while (myNumber < 50)

        || For Loop -  best for counting and indexing


| Functions
        
        || Note: Methods is a built in functions
            example:
                "Tag".toLocaleLowerCase();
                Math.random();

        // Function Declaration Syntax:
            function sum(num1, num2) {
            return num1 + num2;
            }
            console.log(sum(2, 2)); // output is 4


        // function sum(num1, num2) {
           if (num2 === undefined){
             return num1 + num1
           }
           return num1 + num2;
           }
           console.log(sum(2, 10)); // Output is 15

        // Reusable function
           function getUserNameFromEmail(email) {
             return email.slice(0, email.indexOf("@"));
           }
           console.log(getUserNameFromEmail("playerrandom@email.com")); // Output is playerrandom

        // Anonymous function
           const getUserNameFromEmail = function (email) {
             return email.slice(0, email.indexOf("@"));
           }
           console.log(getUserNameFromEmail("playerrandom@email.com")); // Output is playerrandom

        // Arrow functions
           const getUserNameFromEmail = (email) => {
             return email.slice(0, email.indexOf("@"));
           }
           console.log(getUserNameFromEmail("playerrandom@email.com")); // Output is playerrandom

| Scope  
    Tips:
    Global = Not in a function or block. Not desirable.
    Local = In a function or block. Not Global
    Var = instantiates function() scoped variables
    Let and const = intantiate block scoped variables.

    Avoid using var. Stick with const and let.
    Use const unless you need to reassign value.
    Use let if you know you will reassign value.
    
        var x = 1; // function scoped
        let y = 2; // block scoped
        const z = 3;

        console.log(`global: ${x}`);
        console.log(`global: ${y}`);
        console.log(`global: ${z}`);

        function myFunc(params) {
        console.log(`function: ${x}`);
        console.log(`function: ${y}`);
        console.log(`function: ${z}`);

        {
            console.log(`block: ${x}`);
            console.log(`block: ${y}`);
            console.log(`block: ${z}`);
        }
        }

| Array
        // Using method to manipulate
        .push = Add to the last.
        .pop = remove last.
        .unshift = adding to the beginning.
        .shift = removing the first from the beggining.
        .splice = used to delete or replace in the middle.
            (start, end, insert) ex. .splice(1,0, 32)
        .split = used to divide the string with a comma
            ex. "How are you today?" to ["How", "are", "you", "today?"]
        .slice = used to extract a section of a string and return it as a new string.
            ex. let str = "Hello, World!";
                let sliced = str.slice(7, 12);
                output is "World"
        .concat = used in joining two existing array
        ... aka spread operator using 
        [] Use bracket notation to access nested array.

| Objects
        // Inheritance
                Need note Log here.
        // Constructor
                Object.create used to create a new object with inheritance
        // Deleting
                Need note Log here.
        // Deconstructing
                Need note log here.
        For in loop is used in an object.

| Classes = Need note Log here
        // parent class | super class
        // child class
        // constructor
        // private and public
        // getters and setters

| JSON
    Used to send and recieved data not just javascript.
    A text format that is completely language independent.
        // Stringify = method used to format from object to JSON.
        // Parse = method used to format from JSON to an object.

| Errors and error handling
        reference error = common error such as variable not defined.
        syntax error = can't catch and fix.
        type error = common error example assigning/re:assigning a variable.
        
        .error method used to console a danger error
            // try
            // catch
            // throw
            // finally
        .warn used to console a warning error
        .table used to console a table error that are more detailed.

| DOM - Document Object Model
        You can navigate the DOM tree with this
        document.
                getElementById
                querySelector
                getElementsByClassName
                querySelectorAll
                getElementsByTagName
                parentElement
                nextSibling
                nextElementSibling
                previousSibling
                previousElementSibling

                //Chaining
                parentElement.children
                parentElement.childNodes
                parentElement.hasChildNodes
                parentElement.lastChild
                parentElement.lastElementChild
                nextElementSibling.nextElementSibling

// Event listener - Need to study
    used to interact with the browser
        Selecting, capturing, bubbling, propagation and delegation, target.

// Web storage API - Need to study this further
        // set method
        // retrieve by using get
        // remove item
        // clear
        // specify the  index position in local storage to get the key return

// Modules - Need to study this further

// Higher Order Functions - Need to study this further

// Promises / Fetch / Async & Await - Need to study this further

// Regular Expressions - Need to study this further

Continue on "7:20:00"

Note: Only log here the explanation, summary and atleast 1 example to trim down the note. (see main.js)

