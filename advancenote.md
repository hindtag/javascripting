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




Continue on "1:20:00"

Note: Only log here the explanation, summary and atleast 1 example to trim down the note.

Resources:
    String methods
        https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

    Math methods
        https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math