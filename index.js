// var a;
// var b = 2;
// console.log(a);

// var a = 7;
// b = a;

// console.log(a);


// Initalize these three variable
    // var a;
    // var b;
    // var c;

// Initializing
    // var a = 5;
    // var b = 10;
    // var c = "I am a string";

    // and

    // a = a + 1; //this is equals to 6
    // b = b + 5; //this is equals to 15
    
// Using proper naming convention
    // properCamelCase
    // myName

// Using arithmetic operators
        // +
        // -
        // *
        // /
        // % -> remainder

// Augmented arithmetic operators
        // +=
        // -=
        // *=
        // /=

// Incrementing numbers
    // myVar++
    // myAge++

// Decrementing numbers
    // myVar--
    // myAge--

    // * String

// // Declaring String Variable
//     var firstName = "Mark";
//     var lastName = "Biron";
//     var myFirstName = "Tag";

    // Escaping a qoutes
    //     Example:
        //     var myStr = "I am a \"double qouted\" string inside a \"double qoutes\"";
        // console.log(myStr);
        //     var singleQoute = 'I am a "double qouted" string inside a "double qoutes"';
        //     console.log(singleQoute);
        //     var backticks = `I am a "double qouted" string inside a "double qoutes"`;
        //     console.log(backticks);


// # Concatinating an string
    // Using +
    //     var ourStr = "I come first. " + "I come second.";
    //     var myStr = "This is the start " + "This is the end";
    //     console.log(myStr);

    // Using +=
    //     var thisStr = "I come first. ";
    //     yourStr += "I come second.";
    //     console.log();

        // var hisStr = "This is the start ";
        // hisStr += "This is the end";
        // console.log(hisStr);

// Constructing strings with variables
    // Example: 
        // var ourName = "sirtag";
        // var ourStr = "Hello, our name is " + ourName + ", how are you?";
        // console.log(ourStr);

        // var myName = "Mark";
        // var myStr = "My name is " + myName + " and I am well";
        // console.log(myStr);

// Appending variables to string
    // Example:
        // var anAdjective = "awesome!";
        // var ourStr = "sirtag.io is ";
        // ourStr += anAdjective;
        // console.log(ourStr);

        // var someAdjective = "worthwhile";
        // var myStr = "Learning to code is ";
        // myStr += someAdjective;
        // console.log(myStr);

// Find the length of String / Count the character
    // Example:
        // var firstNameLength = 0;
        // var firstName = "Ada";

        // firstNameLength = firstName.length;
        // console.log(firstNameLength);

        // var lastNameLength = 0;
        // var lastName = "Lovelace";

        // lastNameLength= lastName.length;

        // console.log(lastNameLength);

// Find the first character using bracket notation
    // Example: 
    // var firstLetterOfFirstName = "";
    // var firstName = "Ada";

    // firstLetterOfFirstName = firstName[0]; // Way to get a character at a specific index

    // Example set up:
    // var firstLetterOfLastName = "";
    // var lastName = "Lovelace";

    // firstLetterOfLastName = lastName[0]; // Way to get the "L" character at the beginning of the word "Lovelace"
    // console.log(firstLetterOfLastName);

// String immutability or they cannot be altered once created.
    // // Example:
    // var myStr = "Jelly World";
    // // Example set up
    // myStr[0] = "H"; // This will not have an effect
    // myStr = "Hello world"; // This will have an effect
    // console.log(myStr);

// // Bracket notation to find the Nth character
//     // Example:
//     var firstName = "Ada";
//     var secondLetterOfFirstName = firstName[1];

//     // Set up
//     var lastName = "Lovelace";

//     // Only change code below this line.
//     var thirdLetterOfLastName = lastName;
    
// // Bracket notation to find the last character in String
//     // Example:
//     var firstName = "Adidas";
//     var lastLetterOfFirstName = firstName[firstName.length -1]; // This will have an output of "s"
//     console.log(lastLetterOfFirstName);

//     // Set up
//     var lastName = "Lovelace";

//     // Only change code below this line.
//     var lastLetterOfLastName = lastName[lastName.length -1];
//     console.log(lastLetterOfLastName);

// // Bracket notation to find the Nth-to-last character in String
//     // Example:
//     var firstName = "Adidas";
//     var thirdToLastLetterOfFirstName = firstName[firstName.length -3]; // This will have an output of "d"
//     console.log(thirdToLastLetterOfFirstName);

//     // Set up
//     var lastName = "Lovelace";

//     // Only change code below this line.
//     var thirdToLastLetterOfLastName = lastName[lastName.length -3];
//     console.log(thirdToLastLetterOfLastName);

// // Word blanks or mad libs passsing different words
//     // Example:
//     function wordBlanks(myNoun, myAdjective, myVerb, myAdverb){
//         // Your code below this line
//             var result = "";
//             result += "The " + myAdjective + " " + myNoun + " " + myVerb + " to the store " + myAdverb + ".";

//         // Your code above this line
//             return result;
//         }
         
//         // Change the words here to test your function
//         console.log(wordBlanks("dog", "small", "ran", "quickly")); 
//         console.log(wordBlanks("cat", "black", "climb", "quickly")); 

// // Store multiple values with arrays
//     // Arrays allow you to store several pieces of data in one place.

//     // Example
//         var ourArray = ["John", 23];

//     // Only change code below this line.
//         var myArray = ["Biron", 33];

// // Nested array
//     // When one of the elements in an array is another array.
    
//     // Example
//     var ourArray = [["The universe", 33], ["Everything", 101010], ["Philippines", 57]];

//     // Only change code below this line.        
//     var myArray = [["Mark", 33], ["sirtag", 1]];

// // Access Array data with indexes
    
//     // Example
//     var ourArray = [50,60,70];
//     var ourData = ourArray[0]; // equals 50
//     console.log(ourData);

// // Modify array data with indexes
//     // Example:
//         var ourArray = [11,65,79];
//         ourArray[1] = 45; // ourArray now equals [11,45,99]
//         console.log(ourArray);

//     // Another example:
//         var myBirthday = [11,16,1988];
//         myBirthday[2] = 1989;
//         console.log(myBirthday); // myBirthday is now [11,16,1989]

// // Access nested array with indexes
//     // Example:
    //     var myArray = [[1,2,3], [4,5,6], [7,8,9], [10,11,12], 13, 14];
    //     var myData = myArray[1][2]; // This is 6
    //     console.log(myData);

//     // Another Example
    //     var ourArray = [[11,12,13], [14,15,16], [17,18,19], [20,21,22], 23, 24];
    //     var ourData = ourArray[1][2]; // This is 16
    //     console.log(ourData);

// Manipulate arrays with push()
    // // Example:
    //     var ourArray = ["Stimpson", "J", "Cat"];
    //     ourArray.push(["happy", "joy"]);
    //     // ourArray now equals ["Stimpson", "J", "Cat", ["happy", "joy"]]
    //     console.log(ourArray);

    // // Another Example
    //     var myArray = ["Mark", "Biron", "Vargas"];
    //     myArray.push(["Tag"]);
    //     // myArray now equals ["Mark", "Biron", "Vargas", ["Tag"])]
    //     console.log(myArray);

// Manipulate arrays with pop()
    // This will remove the last element
    // /* Example: */
    //     var ourArray = [1,2,3];
    //     var removedFromOurArray = ourArray.pop();
    //     // removedFromOurArray now equals 3, ourArray equals [1,2]
    //     console.log(ourArray);

    // /* Another Example: */
    //     var myArray = [["Johny", 23], ["Bravo", ]];
    //     var removedFromMyArray = myArray.pop();
    //     // removedFromMyArray now equals 3, myArray equals ["Johny", 23]
    //     console.log(myArray);

    // /* Another Example: */
    //     var thisArray = [[16, "sirtag"], ["Biron", "vargas"]];
    //     var removedFromthisArray = thisArray.pop();
    //     // removedFromthisArray now equals "Biron", "vargas", thisArray equals [16, "sirtag"]
    //     console.log(thisArray);

// // Manipulate arrays with shift()
//     // This will remove the first element
//     /* Example: */
//     var myArray = ["Mark", "V", ["sirtag"]];
//     var removedFromMyArray = myArray.shift();
//     // removedFromMyArray now equals "Mark", myArray equals ["V", ["sirtag"]]
//     console.log(myArray);

//     /* Another Example: */
//     var thisArray = [[16, "sirtag"], "Biron", [33]];
//     var removedFromthisArray = thisArray.shift();
//     // removedFromthisArray now equals [16, "sirtag"], thisArray equals "Biron", [33]
//     console.log(thisArray);
//     console.log(removedFromthisArray);

// // Manipulate arrays with unshift() 
//     // This is similar to the push function but add at the beginning
//     /* Example: */
//     var myArray = ["Mark", "V", "sirtag"];
//     myArray.shift(); // myArray equals ["V", "sirtag"]
//     myArray.unshift("Happy Biron");
//     console.log(myArray); // ["Happy Biron", "V", "sirtag"];

//     /* Another Example: */
//     var thisArray = ["Gray", "Blue", "black"];
//     thisArray.shift(); // thisArray equals ["is", "black"]
//     thisArray.unshift("Keyboard is");
//     console.log(thisArray); // ["Gray is", "blue", "black"];

// Shopping List
    /* Example */
        // var myList = [["cereal", 3], ["milk", 2], ["bananas", 3], ["juice", 2], ["eggs", 12]];

//Function -> Allows us to create reusable code
    
    /* Setup: */
            // function ourReusableFunction(){
            //     console.log("Heyya, World"); // Iside the {curly bracket is run and invoked}
            // }

            // ourReusableFunction();

            // / * Another example: */

            // function functionName(){
            //     console.log("Hello, dude");
            // }

            // functionName();

    // # Passing values to functions with arguments
    // Parameters are variables that act as place holders for values that are to be input to a function when it is called.
    
        // /* Example: a and b are*/
        //     function ourFunctionName(a,b){
        //         console.log(a-b);
        //     }

        //     ourFunctionName(10,5); // Output is 5

        // /* Another Example: */
        //     function thisFunctionName(quantiry,boxes){
        //         console.log(quantiry + boxes);
        //     }

        //     thisFunctionName(1,3); // Output is 4

    // # Global Scope and functions
        // -> Scope refers to the visibility of the variables
        // -> Variables that are defined outside of a function block have global Scope

        // /* Example using global without var on function */
        // var myGlobal = 10; // Declare the variable here for global variable
        
        // function fun1(){ // assign parameteres inside ()
        //     oopsGlobal = 5; // Declare function statements inside for local/function variable {}
        // }

        // // Only change code above this line
        // function fun2(){
        //     var output ="";
        //     if (typeof myGlobal != "undefined"){
        //         output += "myGlobal: " + myGlobal;
        //     }
        //     if (typeof oopsGlobal != "undefined"){
        //         output += " " + "oopsGlobal " + oopsGlobal;
        //     }
        //     console.log(output);
        // }

        // fun1();
        // fun2();

        // /* Example using local with var */
        // var thisGlobal = 10; // Declare the variable here for global variable
        
        // function fun3(){ // assign parameteres inside ()
        //     var beLocal = 5; // Declare function statements inside for local/function variable {}
        // }

        // function fun4(){
        //     var output ="";
        //     if (typeof thisGlobal != "undefined"){
        //         output += "myGlobal: " + thisGlobal;
        //     }
        //     if (typeof beLocal != "undefined"){
        //         output += " " + "beLocal " + beLocal;
        //     }
        //     console.log(output);
        // }

        // fun3();
        // fun4();
        
    // Local Scope and function
        // Variables which are declared within a function
        
        // /* Example: */

        // function myLocalScope(){
        //     var myVar = 5; // Example declaring variable here makes it visible inside the function only
        //     console.log(myVar); 
        // }

        // myLocalScope(); // this will spit the variable equals to 5
        // console.log(myVar); // this is glocal and can't access myVar, since it is local function.

    /* Note: It is posible to have both local and global variables with the same name. */
        // // Example:
        //  var outerWear = "T-Shirt"; // Assign/Declare variable
         
        //  function myOutfit(){ // Create function
        //     var outerWear = "Sweeter" // This is local
        //     return outerWear; // This is global
        //  }

        //  console.log(myOutfit()); // Equals Sweater
        //  console.log(outerWear); // Equals T-shirt

    // Return a value from a function with Return
        /* Example: */

        // function minusSeven(num){
        //     return num - 7;
        // }

        // console.log(minusSeven(10)); // Equals 3

        // /* Another example */

        // function functionName(number){
        //     return number + 2;
        // }

        // console.log(functionName(2)); // Equals 4

    // Understanding undefined value returned from a function
        // -> Functions does not always have a return statements
        // /* Example: */
        //     var sum = 0;

        //     function addThree(){
        //         sum = sum + 3;
        //     }

        // // Another Example:
        //     function addFive(){
        //         sum += 5;
        //     }
        //     console.log(addThree);
        //     console.log(addFive);

    // Assignment with a returned value
        // /* Example: */
        //     var changed = 0;

        //     function change(num){
        //         return (num + 5) /3;
        //     }

        //     changed = change(10);

        // // Another example
        //     var processed = 0;

        //     function processArg(num){
        //         return (num + 3) /5;
        //     }

        //     processed = processArg(50);
        //     console.log(changed);
        //     console.log(processed);

    // Stand in line
        // -> Que is an abstract data structure that items are kept in order.
        // -> New items can be added to the back of the cue and old items are taken off from the front of the cue.
        
        // /* Example: */
        //     function nextInLine(arr, item){
        //         arr.push(item); // to add the 6 on the end of the array
        //         return arr.shift(item); // shift removes the first item and returns the first item
        //     }

        //     var testArr = [1,2,3,4,5];

        //     console.log("Before: " + JSON.stringify(testArr)); // stringify is used to change an array into a string.
        //     console.log("First in que is " + nextInLine(testArr, 6));
        //     console.log("After: " + JSON.stringify(testArr));

    // Boolean Values
        // -> There are only two values which are true or false.

        // /* Example */

        //     function welcomeToBooleans(){

        //         return false;
        //     }

    // Use Conditional logic with If statements
        // -> Use to make decisions in code using keyword if.
        // /* Example: */

        //     function ourTrueOrFalse(isItTrue){
        //         if (isItTrue){
        //             return "Yes, it's true";
        //         }
        //             return "No, it's false";               
        //     }
                
        //     function TrueOrFalse(wasThatTrue){
        //         if (wasThatTrue){
        //             return "True, that was true";
        //         }
        //             return "False, that was false";

        //     }

        //     console.log(ourTrueOrFalse(false));
        //     console.log(TrueOrFalse(true));

    // Comparision with equality operator
        // -> Using == to check if the condition is met.
        // /* Example: We want to check if the val is equal to 12*/

        // function testEqual(val){
        //     if (val == 12){
        //         return "Equal";
        //     }
        //         return "Not equal";
        // }

        // console.log(testEqual(10));
        // console.log(testEqual(12));

    // Comparison with the strict equality operator
        // -> Using === to evaluate if it is true or false.
        // /* Example: 
        // 3 === 3
        // 3 === '3'
        // */

        // function testStrict(val){
        //     if (val === 12){
        //         return "Equal";
        //     }
        //         return "Not equal";
        // }

        // console.log(testStrict(10));
        // console.log(testStrict(12));
        // console.log(testStrict("tag"));
        // console.log(testStrict("12"));

        // // Another example:
        // function strictEquality(a,b){
        //     if (a === b){
        //         return "Equal";
        //     }
        //         return "Not equal";
        // }

        // console.log("The answer is " + " " + strictEquality(10, "10"));
        // console.log("The answer is " + " " + strictEquality(10, 10));

    // Comparison with not equal operator
        // Using !=
        // /* Example */
        // function testNotEqual(val){
        //     if (val != 99){
        //         return "Not equal";
        //     }
        //         return "equal";
        // }

        // console.log(testNotEqual(10));

     // Comparison with the strict inequality operator
        // -> Using !== to evaluate if it is true or false.
        // /* Example: */

        // function testStrict(val){
        //     if (val !== 12){
        //         return "Not equal";
        //     }
        //         return "qual";
        // }

        // console.log(testStrict(10));
        // console.log(testStrict(12));
        // console.log(testStrict("tag"));
        // console.log(testStrict("12"));

        // // Another example:
        // function strictEquality(a,b){
        //     if (a !== b){
        //         return "Not Equal";
        //     }
        //         return "equal";
        // }

        // console.log("The answer is " + " " + strictEquality(10, "10"));
        // console.log("The answer is " + " " + strictEquality(10, 10));

    // Comparison with the logical and operator
        // -> Using !== to evaluate if it is true or false.
        // /* Example: */

        //     function testGreaterThan(val){
        //         if (val > 100){
        //             return "Over 100";
        //         }

        //         if (val > 10 ){
        //             return "Over 10";
        //         }

        //         return "10 or under";
        //     }

        //     console.log(testGreaterThan(200));
        //     console.log(testGreaterThan(30));
        //     console.log(testGreaterThan(10));

    // Comparison with greater than or equal to
        // -> Using >= symbols
        // /* Example: */

        // function testGreaterThan(val){
        //     if (val >= 100){
        //         return "20 over";
        //     }

        //     if (val >= 10 ){
        //         return "10 or over ";
        //     }

        //     return "Less than 10";
        // }

        // console.log(testGreaterThan(200));
        // console.log(testGreaterThan(30));
        // console.log(testGreaterThan(9));

        // Comparison with less than to
        // -> Using <= symbols
        // /* Example: */

        // function testLessThan(val){
        //     if (val < 25){
        //         return "Under 25";
        //     }

        //     if (val < 55 ){
        //         return "under 55 ";
        //     }

        //     return "55 or over";
        //     }

        // console.log(testLessThan(40));

    // Comparison with less than or equal to
        // -> Using <= symbols
        // /* Example: */

        // function testLessOrEqual(val){
        //     if (val <= 12){
        //         return "Smaller Than or Equal to 12";
        //     }

        //     if (val <= 24 ){
        //         return "Smaller than or equal to 24";
        //     }

        //     return "More than 24";
        //     }

        // console.log(testLessOrEqual(10));

        // Comparisons with the logical and operator
        // -> Using && to check if two things are true at the same time.
            // /* Example: */

            // function testLogicalAnd(val){
            //     if (val <= 50 && val >= 25){
            //         return "yes";
            //     }
            //         return "No";
            // }

            // console.log(testLogicalAnd(10));
        
    // Comparisons with the logical Or operator
        // -> Using || to check.
            // // /* Example: */

            // function testLogicalOr(val){
            //     if (val < 10 || val > 20){
            //         return "Outside";
            //     }
            //         return "Inside";
            // }

            // console.log(testLogicalOr(15));

        // Else statements
        /* -> When an if statement is true, normally the block of code right after
             the if statement will be evaluated and if it is not true, nothing happens.
           -> With an else statement, an alternate block of code can be executed when
             it's not true.
        */
        //    /* Example: */
        
        //    function testElse(val){
        //     var result = "";

        //     if ( val > 5){
        //         result = "Bigger than 5";
        //     } else {
        //         result = "5 or smaller";
        //     }
        //     return result;

        //    }

        //    console.log(testElse(4));

        // Else if statements
        // -> For multiple conditions that need to be addressed.
        // /* Example */
            
        //     function testElseIf(val){
        //         if (val > 10){
        //             return "Greater than 10";
        //         } else if (val < 5){
        //             return "Smaller than 5";
        //         } else {
        //             return "Between 5 and 10";
        //         }
        //     }

        //     console.log(testElseIf(100));
        

        // Logical order in if else statements
        // -> Making sure that your logic is in the correct chronological order
            // /* Example: */

            // function orderMyLogic (val){
            //     if (val < 10){
            //         return "Less than 10"; // This is in wrong order
            //     } else if (val < 5){
            //         return "Less than 5"; // This is in wrong order
            //     } else {
            //         return "Greater than or equal to 10";
            //     }
            // }

            // console.log(orderMyLogic(1));

            // // Correcting

            // function orderMyLogic (val){
            //     if (val < 5){
            //         return "Less than 5"; // This is the correct order
            //     } else if (val < 10){
            //         return "Less than 10"; // This is the correct order
            //     } else {
            //         return "Greater than or equal to 10";
            //     }
            // }

            // console.log(orderMyLogic(1));

        
        // Chaining If else statements
        // -> This is a coding challenge
            /*
            num < 5 - return "tiny"
            num < 10 - return "Small"
            num < 15 - return "Medium"
            num < 20 - return "Large"
            num >- return "Huge"
            */
            // /* Example: */

            // function testSize(num){
            // if (num < 5){
            //         return "Tiny"
            //     } else if (num < 10){
            //         return "Small"
            //     } else if (num < 15){
            //         return "Medium"
            //     } else if (num < 20){
            //         return "Large"
            //     } else{
            //         return "Huge"
            //     }
            // }

            // console.log(testSize(19));

        //-> This is a coding challenge Golf Code
            /*
            Strokes   Return
            1           "Hole-in-one!" 
            <= par -2   "Eagle"
            par - 1     "Birdie"
            par         "Par"
            par + 1     "Bogey"
            par + 2     "Double Bogey"
            >= par + 3  "Go Home!"
            */

            // var names = ["Hole-in-one!","Eagle","Birdie","Par","Bogey","Double Bogey","Go Home!"];
            // function goldScore(par, strokes){
            //     if (strokes == 1){
            //         return names[0]
            //     } else if (strokes <= par - 2 ){
            //         return names[1]
            //     } else if (strokes == par - 1){
            //         return names[2]
            //     } else if (strokes == par ){
            //         return names[3]
            //     } else if (strokes == par + 1){
            //         return names[4]
            //     } else if (strokes == par + 2 ){
            //         return names[5]
            //     } else if (strokes >= par + 3 ){
            //     return names[6]
            //     }
            // return "Change me";
            // }

            // console.log(goldScore(5,4));

    
    // Switch statements
        /* -> Tests a value and can have many case statements which define various possible values.
            -> Use this instead of chained else if
            -> Switch functions starts with the word switch and use case instead of if.
            -> don't forget to use break to end the case statements.
            -> Notable difference is not using ; after the ""
                Example answer = "tag";
        */
            // /* Example
            // Write a switch statement which tests val and sets answer for the following conditions:
            // 1 - "alpha"
            // 2 - "beta"
            // 3 - "gamma"
            // 4 - "delta"
            // */

            //     function caseInSwitch(val){
            //     var answer = "";
                
            //     switch(val){
            //         case 1:
            //             answer = "alpha"
            //             break;
            //         case 2:
            //             answer = "beta"
            //             break;
            //         case 3:
            //             answer = "gamma"
            //             break;
            //         case 4:
            //             answer = "delta"
            //             break;
            //     }
            //     return answer;
            //     }    

            //     console.log(caseInSwitch(4));

        // Using default option
        // // Example
        //     function switchOfStuf(val){
        //     var answer = "";
            
        //     switch(val){
        //         case "a":
        //             answer = "apple"
        //             break;
        //         case "b":
        //             answer = "bird"
        //             break;
        //         case "c":
        //             answer = "cat"
        //             break;
        //         default: // like an else statement
        //             answer = "stuff"
        //             break;
        //     }
        //     return answer;
        //     }    

        //     console.log(switchOfStuf("c"));
        

        // Multi Identical Options in switch statements
        // -> Multiple inputs that give the same outputs
            // /* Example: */
            // function sequentialSize(val){
            //     var answer = "";

            //     switch (val) {
            //         case 1:
            //         case 2:
            //         case 3:   
            //             answer = "Low"
            //             break;
            //         case 4:
            //         case 5:
            //         case 6:   
            //             answer = "Medium"
            //             break;
            //         case 7:
            //         case 8:
            //         case 9:   
            //             answer = "High"
            //             break;
            //         default:
            //             answer = "Retry"
            //             break;
            //     }
            //     return answer;
            // }

            // console.log(sequentialSize(8));


        // Replacing If else chains with switch
        // -> Much better than chain of else statements
            // /* Example */

            function chainToSwitch(val){
                var answer = "";

            // Using Else IF Statement
                switch (val){
                case "bob":
                    answer = "Marley"
                    break;
                case 42:
                    answer = "The Answer"
                    break;
                case 1:
                    answer = "The Answer is no #1"
                    break;
                case 99:
                    answer = "Missed me by this much!"
                    break;
                case 7:
                    answer = "Ate Nine!"
                    break;
                }
                return answer
            }

            console.log(chainToSwitch(99));



    // continue on "1:19:00"
    // referenca:
    // https://www.youtube.com/watch?v=PkZNo7MFNFg&t=367bd