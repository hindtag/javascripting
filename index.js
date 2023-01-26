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

            // function chainToSwitch(val){
            //     var answer = "";

            // // Using Else IF Statement
            //     switch (val){
            //     case "bob":
            //         answer = "Marley"
            //         break;
            //     case 42:
            //         answer = "The Answer"
            //         break;
            //     case 1:
            //         answer = "The Answer is no #1"
            //         break;
            //     case 99:
            //         answer = "Missed me by this much!"
            //         break;
            //     case 7:
            //         answer = "Ate Nine!"
            //         break;
            //     }
            //     return answer
            // }

            // console.log(chainToSwitch(99));

    // Returning boolean Values from functions
    // -> To return a value with true or false value.
        // /*Example*/

        // // Simplifed
        // function isThisLess(a,b){
        //     return a < b;
        // }

        // console.log(isThisLess(10,15));

        // //Complex
        // function isLess(a,b){
        //     if (a < b){
        //         return true;
        //     } else {
        //         return false;
        //     }
        // }

        // console.log(isLess(20,15));

    // Returning Early Pattern from functions
        // /* Example */

        // function abTest(a,b){
        //     if ( a < 0 || b < 0 ){
        //         return undefined;
        //     }

        //     return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2))
        // }

        // console.log(abTest(-2,2));


    // -> This is an Coding Exercise - Counting Cards

        // var count = 0;
        // function cc(card){

        //     switch (card) {
        //         case 2:
        //         case 3:
        //         case 4:
        //         case 5:
        //         case 6:
        //             count++;
        //             break;
        //         case 10:
        //         case "J":
        //         case "Q":
        //         case "K":
        //         case "A":
        //             count --;
        //             break;
        //     }

        //     var holdBet = 'Hold'
        //     if (count > 0){
        //         holdBet = 'Bet'
        //     }

        //     return count + " " + holdBet;

        // }

        // cc(2); cc('K'); cc('k'); cc('K'); cc('A');
        // console.log(cc(4));

    // Build Javascript Objects
    // -> Objects are similar to array except that instead of using indexes to access data, it use properties.
    // -> Notable difference is using { } instead of [ ]
        // /* Example
        //     ourDog is the object
        //     name, legs, tails and friends are the properties
        //     and the values are camper, 4, 1 and ["Everything"]
        // */
        //     var ourDog = {
        //         "name": "Camper", // This is a key value pairs
        //         "legs": 4,
        //         "tails": 1,
        //         "friends": ["Everything"]
        //     };

        //     console.log(ourDog.friends);
        
        // // Another example
        //     var myDog = {
        //         "name": "Dog",
        //         "legs": 3,
        //         "tails": 2,
        //         "friends": ["No Friends"]
        //     };

        //     console.log(myDog.friends);
        
        // Accessing object properties with dot notation
            /* Example */

        //      var testObj = {
        //         "hat": "ballcap",
        //         "shirt": "jersey",
        //         "shoes": "cleats"
        //      };

        //      var hatValue = testObj.hat
        //      var shirtValue = testObj.shirt

        //      console.log(hatValue);
        //      console.log(shirtValue);

       
        // Access object Propperties with Bracket notation
            /* Example */

            // var testObj = {
            //     "an entree": "hamburger",
            //     "my side": "veggies",
            //     "the drink": "water"
            // };

            // var entreeValue = testObj;
            // var drinkValue = testObj;

            // console.log(entreeValue["an entree"]);
            // console.log(drinkValue['my side']);

        // Accessing Object Properties with Variables
            // // Example:    
            //     var testObj = {
            //         12: "Namath",
            //         16: "Montana",
            //         19: "Unitas",
            //     };

            //     var playerNumber = 16;
            //     var player = testObj[playerNumber]; // You can now use the playerNumber to look up for value property

            //     console.log(player);

        // Updating object properties using dot notation
            // // Example:
            //     var ourDog = {
            //         "name": "Camper",
            //         "legs": 4,
            //         "tails": 1,
            //         "friends": "[Everyone]"
            //     };

            //     ourDog.name = "Happy";
            //     ourDog.friends = ["Everything"]

            //     console.log(ourDog.name);
            //     console.log(ourDog.friends);

            // // Another example:
            //     var myDog = {
            //         "name": "Coder",
            //         "legs": "3",
            //         "tails": "1",
            //         "friends": ["Sirtag", "Mark"]
            //     };

            //     myDog.legs = 4;

            //     console.log(myDog.legs);

        // Adding a new properties to an object
            // You can add using dot or bracket notation
            // Example:

            //     var ourDog = {
            //         "name": "camper",
            //         "legs": "4",
            //         "tails": "1",
            //         "friends": ["Everything!"]
            //     };

            //     ourDog.Bark = "bow-wow";
            //     ourDog['Ears'] = 2;
            
            // // Another example:
            //     var myDog = {
            //         "name": "Happy Coder",
            //         "legs": "4",
            //         "tails": "1",
            //         "friends": ["Sirtag", "Mark"]
            //     };

            //     myDog.furr = "brown";
            //     myDog.eyes = 2;

            //     console.log(ourDog);
            //     console.log(myDog);

        // Deleting properties from an object
            // Example:
            //     var ourDog = {
            //         "name": "camper",
            //         "legs": "4",
            //         "tails": "1",
            //         "friends": ["Everything!"],
            //         "bark": "bow-wow"
            //     };

            //     delete ourDog.bark;

            //     console.log(ourDog.bark); // This is now undefined
            
            // // Another example:
            //     var myDog = {
            //         "name": "Happy Coder",
            //         "legs": "4",
            //         "tails": "1",
            //         "friends": ["Sirtag", "Mark"],
            //         "furr": "brown"
            //     };

            //     delete myDog.furr;
            //     console.log(myDog.furr);

        // Using objects for lookups
        // -> Objects can be thought of as a key value storage like a dictionary.
        // Example:
                // function phoneticLookup(val){
                //     var result = "";
            // Changing this switch statement using object
                //     switch (val) {
                //         case "alpha":
                //             result ="adams";
                //             break;
                //         case "bravo":
                //             result ="boston";
                //             break;
                //         case "charlie":
                //             result ="chicago";
                //             break;
                //         case "delta":
                //             result ="denver";
                //             break;
                //         case "echo":
                //             result ="easy";
                //             break;
                //         default:
                //             break;
                //     };
                //     return result;
                // };

            // This is the object used to replace and look into the switch statements
                // var lookup = { 
                //     "alpha": "Adams",
                //     "bravo": "boston",
                //     "charlie": "chicago",
                //     "delta": "denver",
                //     "echo": "easy"
                // };
                //     result = lookup[val];
                //     return result;
                // }

                // console.log(phoneticLookup("echo"));
            
            // Testing objects for properties
            // -> Using method
                // Function inside an object is called method.
                // Example using hasOwnProperty method:
                /* in
                    if (myObj.hasOwnProperty(checkProp)) {
                                return myObj[checkProp];
                            }
                    myObj is the object itself
                    .hasOwnPropert is the made up method
                    in short methodName.madeUpMethodName(parameters)
                    */                      

                    // var myObj = {
                    //     gift: "pony",
                    //     pet: "kitten",
                    //     bed: "sleigh",
                    // };

                    // function checkObj(checkProp) {

                    //     if (myObj.hasOwnProperty(checkProp)) { // .hasOwnProperty is a method.
                    //         return myObj[checkProp]; // use  dot . or bracket [] to access property.
                    //     } else {
                    //         return "not found";
                    //     }
                    // }

                    // console.log(checkObj("car"));

            // Manipulating complex objects
            // Example:
                // var myMusic = [
                //     { // Object 1 has 5 properties which is artists, title, release_year, formats and gold.
                //         "artists": "Billy Joel", 
                //         "title": "Piano Man",
                //         "release_year": 1973,
                //         "formats": [ // This is an array for formats property value.
                //             "CD",
                //             "8t",
                //             "LP",
                //         ],

                //         "gold" : true
                //     },
                //     { // Object 2 has only 4 property
                //         "artists": "Mark Vargas",
                //         "title": "Programmer",
                //         "release_year": 2023,
                //         "formats": [
                //             "Javascript",
                //             "Python",
                //             "React",
                //             "Vue",
                //             "Ruby on rails"
                //         ]

                //     }
                // ];

                // console.log(myMusic);

            // Accessing Nested Objects
                // // Example:
                //     var myStorage = {
                //         "car" : { // has 2 properties which are inside and outside
                //             "Inside": { //
                //                 "glove_box": "maps",
                //                 "passenger_seat": "crumbs",
                //             },
                //             "Outside": {
                //                 "trunk": "jack",
                //             }
                //         }
                //     };

                //     var gloveBoxContents = myStorage.car.Inside["glove_box"];
                //     console.log(gloveBoxContents);

            // Accessing nested arrays
                // // Example:
                //     var myPlants = [
                //         {
                //             type: "flowers",
                //             list: [
                //                 "rose",
                //                 "tulip",
                //                 "dandalion"
                //             ]
                //         },
                //         {
                //             type: "trees",
                //             list: [
                //                 "fir",
                //                 "pine",
                //                 "birch"
                //             ]
                //         }
                //     ]; 

                //     var secondTree = myPlants[1].list[1]; // Accessing pine
                //     var firstTree = myPlants[1].list[0]; // Accessing first tree
                //     var thirdFlower = myPlants[0].list[2]; // Accessing third flower
                    
                //     console.log(secondTree);
                //     console.log(firstTree);
                //     console.log(thirdFlower);


            // -> This is a coding challenge for record collection
            /* Where for example 24548 is the id, artist etc is the property and bon jovi is the value.
            */
            // var collection = {
            //     "24548": {
            //         "album": "slippery when wet",
            //         "artist": "bon jovi",
            //         "tracks": [
            //             "Let it rock",
            //             "Welcome to my life"
            //         ]
            //     },
            //     "2468": {
            //         "album": "1999",
            //         "artist": "prince",
            //         "tracks": [
            //             "1999",
            //             "little red corvette"
            //         ]
            //     },
            //     "1245": {
            //         "artist": "Robert Palmer",
            //         "tracks": []
            //     },
            //     "5439":  {
            //         "album": "ABBA Gold",
            //     }
            // };

            // var collectionCopy = JSON.parse(JSON.stringify(collection)); // To Copy

            // function updateRecords(id, prop, value){
            //     if (value === ""){
            //         delete collection [id][prop];
            //     } else if (prop === "tracks"){
            //         collection[id][prop] = collection[id][prop] || []; // If the tracks property is empty, create. thus, If it exists set it to equal itself. If it's not existing set it to equal an empty array. 
            //         collection[id][prop].push(value); // Push the value at the end of the array
            //     } else {
            //         collection[id][prop] = value; // Default condition for if the value is not blank and the property is not tracks then push the value onto the property.
            //     }
            //     return collection;
            // }
            // updateRecords(24548, "album", ""); // This delete album for 24548
            // updateRecords(2468, "tracks", "test"); // This add test in id property 2468 for tracks
            // updateRecords(5439, "tracks", "way aram"); // this add a new prop for id 5439
            // console.log(updateRecords(5439, "artists", "ABBA")); // this add in artist for 5439


    // Loops
        // Iterate with while loops
        /* Allow you to run codes multiple times while specified condition is true.
            And stops once it is no longer true.
        -> Using while ()
            steps:
                1. set the variable name with starting value, this time I used i
        */
            // // Example: 
            //     var myArray = [];
                
            //     var i = 0;  // i = variable name with 0 value at the starting.
            //     while (i < 5 ){
            //         myArray.push(i)
            //         i++;
            //     };

            //     console.log(myArray);

            // // Another example (count into 20):

            //     var thisArray = [];
            //     var countNum = 1;
            //     while (countNum < 21 ){
            //         thisArray.push(countNum)
            //         countNum++;
            //     }

            //     console.log(thisArray);
            
            // // Another example (count to 10)
            //     var countArray = [];

            //     var i = 0;
            //     while (i < 10 ){
            //         countArray.push(i);
            //         i++;
            //     }

            //     console.log(countArray);
        
        // Iterate with for loop
            // // Example

            // var ourArray = [];
            
            // for (var i = 0; i < 5; i++){ // Start with initialization, then the condition then the final expression.
            //     ourArray.push(i);
            // }

            // console.log(ourArray);

        // Iterate Odd Numbers with a For Loop
            // Example: 

            // var ourArray = [];

            // for (var countNum = 0; countNum < 10; countNum +=2){ // Incrementing by 2
            //     ourArray.push(countNum);
            // }

            // console.log(ourArray);

        // Count backwards with a for loop
            // Example:

            // var ourArray = [];

            // for (var countArray = 10; countArray > 0; countArray -= 2 ){ // Even numbers
            //     ourArray.push(countArray);
            // }

            // console.log(ourArray);

            // // Another Example:
            // var myArray = [];

            // for (var countArray = 9; countArray > 0; countArray -= 2 ){ // Odd numbers
            //     myArray.push(countArray);
            // }

            // console.log(myArray);

        // Iterate through an array with a for loop
            // // example:
            // var ourArr = [9, 10, 11, 12]; // Looking forward to have an answer of 42
            // var ourTotal = 0;

            // for (var i = 0; i < ourArr.length; i++){
            //     ourTotal += ourArr[i];
            // }

            // console.log(ourTotal);
            

            // // Another example:
            // var thisArr = [2, 3, 4, 5, 6]; // Looking forward to have an answer of 20
            // var thisTotal = 0;

            // for (var i = 0; i < thisArr.length; i++){
            //     thisTotal += thisArr[i];
            // }

            // console.log(thisTotal);

        
        // Nesting for loops used for nested array

        // function multiplyAll(arr){
        //     var product = 1;

        //     for (var i = 0; i < arr.length; i++){ // arr will start at 3, since the array has 3 elements.
        //         for (j = 0; j < arr[i].length; j++){
        //             product *= arr [i][j];
        //         }
        //     };

        //     return product;
        // }

        // var product = multiplyAll([[1,2],[3,4],[5,6,7]]);

        // console.log(product);
        
        // // Another example
        // function multiplyNum(arr){
        //     var product = 1;

        //     for (var i = 0; i < arr.length; i++){ // This will go to the outer array with 3 elements
        //         for (j = 0; j < arr[i].length; j++){ // This will go through each inner elements
        //             product *= arr [i][j]; // i reference the outer array, while j references the inner array.
        //         }
        //     };

        //     return product;
        // }

        // var product = multiplyNum([[1,2],[3,4],[5,6,7]]);

        // console.log(product);

       // This is a coding challenge to generate random whole numbers within a range
        // // Example:
        // function randomRange(min, max) {

        //     return Math.floor(Math.random() * (max - min + 1)) + min; // The maximum is inclusive and the minimum is inclusive
        //   }

        //   var randomInt = randomRange(10, 15);
        //   console.log(randomInt);

        // // Another Example:
        // function myRandomRange(myMin, myMax){

        //     return Math.floor(Math.random() * (myMax - myMin)) + myMin;
        // }

        // var thisRandomRange = myRandomRange(5, 20);
        // console.log(thisRandomRange);

        // Use the parseInt function -> Converting string to number
        // -> It takes a string and returns an integer
        // Example:
            // function convertToInteger(str){
                
            //     return parseInt(str);
            // }

            // console.log(convertToInteger("56"));
            
        // -> Parseint function with Radix. Radix specifies the base of the number in the string.
            // // Example:
            //     function convertToInteger(str){
            //         return parseInt(str, 2)
            //     }

            //     console.log(convertToInteger("10011"));
                
        // // Use the conditional ternary operator
        // // -> One line if else expression.
        // /* condition ? statement-if-true : statement-if-false;*/
        //     // Convert this:
        //             function checkEqual(a,b){
        //                 if (a === b){
        //                     return true;
        //                 } else{
        //                     return false;
        //                 }
        //             }

        //             console.log(checkEqual(1,1));
            
        //     // Example:
        //             function checkIsEqual(a,b){
        //                 return a === b ? true : false;
        //             }

        //             console.log(checkIsEqual(1,2));
            
        // Use multiple conditional ternary operators.
        // ->  More powerful if nested
            // // Example checking if it is positive or negative:
            //     function checkSign(num){
            //        return num > 0 ? "positive" : num < 0 ? "negative" :"zero"
            //     }
            //     console.log(checkSign(-1));

        
    // Difference between var and let keywords
        // -> var - can be daclare more than once, if declared outside it is global if inside the function it is local.
        // -> let - does not let your declare variable twice, the scope of let is limited to the block statement or expression that it was declared in.
        // -> const - Read-only variable and cannot be reassigned, near functionality of Let.
        // // Example:
        // let catName = "quincy";
        // let qoutes;

        // catName = "beau";

        // function catTalk(){
        //     "use strict";
        //     catName = "Oliver";
        //     qoutes = catName + " says Meow!";
        
        // }

        // console.log(catTalk);

            // Compare scopes of the var and let keywords
            // Example using var:
            //     function checkScope (){
            //         "use strict";
            //         var i = "function scope";
            //         if (true){
            //             i = "block scope";
            //             console.log("Block scope i is: ", i);
            //         }
            //             console.log("Function scope i is ", i);
            //         return i;
            //     }

            //     console.log(checkScope(1));
            
            // // Example using let:
            // function checkScope (){
            //     "use strict";
            //     let i = "function scope";
            //     if (true){
            //         let i = "block scope";
            //         console.log("Block scope i is: ", i);
            //     }
            //         console.log("Function scope i is ", i);
            //     return i;
            // }

            // console.log(checkScope(1));

            // Declaring a Read-Only vrable with the const keyword
            // // Example:
            //         function printManyTimes(str){
            //             "use strict";

            //         var sentence = str + " this is cool!";

            //         sentence = str + " is amazing!"

            //         for (var i = 0; i < str.lenght; i+=2){
            //             console.log(sentence);
            //         }

            //         }
            //         printManyTimes("Freecodecamp");
            //         console.log(printManyTimes());

            
            // mutate an array declared with const
            // -> you cant reassign a const variable, but you can mutate it instead.
                // // Example: 
                // const s = [5,7,2];

                // function editInPlace(){
                //     "use strict";

                //     // s = [2,5,7]; // using a const
                //     s[0] = 2;
                //     s[1] = 5;
                //     s[2] = 7;

                // }
                // editInPlace();

                // console.log(s);

            // Prevent Object Mutation
                // Example:
                // function freezeObj(){
                //     "use strict";

                //     const MATH_CONSTANTS = {
                //         PI: 3.14
                //     };
                //         Object.freeze(MATH_CONSTANTS)
                //     try { // this is a try catch block
                //         MATH_CONSTANTS.PI = 99;
                //     } catch( ex ) {
                //         console.log(ex);
                //     }
                //     return MATH_CONSTANTS.PI;
                // }

                // const PI = freezeObj();

                // console.log(PI);

            // Use arrow functions to write concise anonymous functions
                // // From:
                // let magic = function () => {
                //     return new Date();
                // };

                // // To

                // const myMagic = () => new Date();

                // console.log(magic);

            // Write arrow function with parameters
                // Example:
                // const myConcat = (arr1, arr2) =>  arr1.concat(arr2);

                // console.log(myConcat([1,2],[3,4,5]));
            
            // Write higher order arrow functions
            // -> Whenever one function takes another function as an argument, that's a good time for an arrow function.
                // Example:
                // const realNumberArray = [4,5.6, -9.8, 3.14, 42, 6, 8.34, -2];
                
                // const squareList = (arr) => {
                //     const squaredIntegers = arr.filter(num => Number.isInteger(num) && num > 0).map(x => x * x); // Filtering only whole numbers that is more than 0.
                //     return squaredIntegers;
                // }

                // const squaredIntegers = squareList(realNumberArray);
                // console.log(squaredIntegers);
            
            // -> Using default parameters, a default parameter kicks in when the argument is not specified or is undefined.
                // const increment = (function () {
                //     return function increment(number, value = 1){
                //         return number + value;
                //     };
                // })();

                // console.log(increment(10,2));
                // console.log(increment(10));

            // Use the rest operator with function parameters
            // -> using ... dots
            // -> REST operator allows you to create a function that takes a variable number of arguments.
                    // // Example from :
                    // const sum = (function(){
                    //     return function sum(x,y,z){
                    //         const args = [x,y,z];
                    //         return args.reduce((a,b) => a + b, );
                    //     };

                    // })();

                    // console.log(sum(1,2,3));


                    // // Example to
                    // const sum = (function(){
                    //     return function sum(...args){ // ... is the rest operator
                    //         return args.reduce((a,b) => a + b, );
                    //     };

                    // })();

                    // console.log(sum(1,2,3,4));

            // Use the spread operator to evaluate arrays in-place
            // -> It spreads out an array. 
            // Example:
                    // const arr1 = ['JAN','FEB','MAR','APR', 'MAY'];
                    // let arr2;
                    // (function () {
                    //     arr2 = [...arr1];
                    //     arr1[0] = 'potato'
                    // })();
                    // console.log(arr2);

            // Use desctructuring assignment to assign variables from objects
                // Example:
                    // let voxel = {x: 3.6, y: 7.4, z: 6.54};
                    
                    // /* destructuring this
                    // let x = voxel.x // x: 3.6
                    // let y = voxel.y // y: 7.4
                    // let z = voxel.z // z: 6.54
                    // */

                    // const {x:a, y:b, z:c} = voxel; // This is the desctructuring syntax a: 3.6, b: 7.4, c: 6.54 by copying the value of an object to a string

                    // const AVG_TEMPERATURES = {
                    //     today: 77.5,
                    //     tomorrow: 79
                    // };

                    // function getTempOfTomorrow(avgTemperatures){
                    //     "use strict";
                    // const {tomorrow : getTempOfTomorrow} = avgTemperatures; // get the tomorrow field from the AVG_TEMPERATURES object and assign it to tempOfTomorrow variable.

                    // return getTempOfTomorrow;
                    // }
                    
                    // function getTempOfToday(avgTemperatures){ // get the today field from the AVG_TEMPERATURES object and assign it to tempOfToday variable.
                    //     "use strict";
                    //     const {today : getTempOfToday} = avgTemperatures;
                    //     return getTempOfToday;
                    // }


                    // console.log(getTempOfToday(AVG_TEMPERATURES));
                    // console.log(getTempOfTomorrow(AVG_TEMPERATURES));

            
            // Destructuring assignment with nested objects
                // Example:
                    // const LOCAL_FORECAST = {
                    //     today: { min: 72, max: 83},
                    //     tomorrow: { min: 73, max: 84.6}
                    // };

                    // function getMaxOfTomorrow(forecast){
                    //     "use strict";

                    //     const {tomorrow : {max : maxOfTomorrow}} = forecast;
                    //     return maxOfTomorrow;
                    // }

                    // console.log(getMaxOfTomorrow(LOCAL_FORECAST));

            // Use destructuring assignment to assign variables from arrays.
            // The difference of destructuring an array from object is that you cannot specify which elemet from array to go into a variable.
                // Example: 
                    // const [z, x, , y] = [1,2,3,4,5,6];
                    // console.log(z,x,y);
                    
                    // let a = 8, b = 6;
                    // (()=> {
                    //     "use strict";
                    //     [a,b] = [b,a] // switching places
                    // })();

                    // console.log(a);
                    // console.log(b);

            // Use destructuring assignment with the rest operator
                // Example:
                    // const source = [1,2,3,4,5,6,7,8,9,10];
                    // function removeFirstTwo(list){
                    //     const [,,...arr] = list;// the comma says do nothing with the first and second element.
                    //     return arr;
                    // }

                    // const arr = removeFirstTwo(source);
                    // console.log(arr);
                    // console.log(source);

            // Use desctructuring assignment to pass an object as a function's Parameters
                // Example:
                    // const stats = {
                    //     max: 56.78,
                    //     standard_deviation: 4.34,
                    //     median: 34.54,
                    //     mode: 23.87,
                    //     min: -0.75,
                    //     average: 35.85
                    // };
                    // const half = (function(){
                    //     return function half({max, min}){
                    //         return (max + min) / 2.0;
                    //     };
                    // })();

                    // console.log(stats);
                    // console.log(half(stats));
                    
            // Create strings using template literals
            // -> using backtick ``
            // -> a special type of string that makes creating complex strings easier.
                // Example:
                // const person = {
                //     name: "Zodiac Hasbro",
                //     age: 56
                // };

                // const greeting = `Hello, my name is ${person.name}! I am ${person.age} years old.`;

                // console.log(greeting);

        // Coding challenge
                /* Create an output for this:
                makeList(result.failure) should return:
                [
                    `<li class="text-warning">no-var</li>`,
                    `<li class="text-warning">var-on-top</li>`,
                    `<li class="text-warning">linebreak</li>`]          
                ]
                */
                    // const result = {
                    //     success: ["max-length", "no-amd", "prefer-arrow-functions"],
                    //     failure: ["no-var", "var-on-top", "linebreak"],
                    //     skipped: ["id-blacklist", "no-dup-keys"],
                    // };

                    // function makeList(arr){
                    //     const resultDisplayArray = [];
                    //     for (let i = 0; i < arr.length; i++){
                    //         resultDisplayArray.push(`<li class="text-warning">${arr[i]}</li>`)
                    //     }

                    //     return resultDisplayArray;
                    // }

                    // const resultDisplayArray = makeList(result.failure);
                    
                    // console.log(resultDisplayArray);

            // Writing concise object literal declarations using simple fields.
                // From this example:
                // const createPerson = (name, age, gender) => {
                //     return {
                //         name: name,
                //         age: age,
                //         gender: gender,
                //     };
                // };

                // // To this example:
                // const createNewPerson = (name, age, gender) => ({name, age, gender})
                // console.log(createPerson("Zodiac Hasbro", 56, "male"));
                // console.log(createNewPerson("Zodiac Hasbro", 56, "male"));
            
            // Write concise declarative functions
                // From this example
                    // const bicycle = {
                    //     gear:2,
                    //     setGear: function(newGear){
                    //         "use strict";
                    //         this.gear = newGear;
                    //     } 
                    // };

                    // bicycle.setGear(3);
                    // console.log(bicycle.gear);

                // to this
                    // const myBicycle = {
                    //     gear:2,
                    //     setGear(newGear){
                    //         "use strict";
                    //         this.gear = newGear;
                    //     } 
                    // };

                    // myBicycle.setGear(3);
                    // console.log(myBicycle.gear);

            // Use class syntax to define a constructor function
                // Example:
                    // class SpaceShuttle {
                    //     constructor(targetPlanet){
                    //         this.targetPlanet = targetPlanet;
                    //     }
                    // } // this is a constructor function

                    // var zeus = new SpaceShuttle('Jupiter'); // instantiate a new SpaceShuttle object
                    // var poseidon = new SpaceShuttle('Juggernaut')
                    // console.log(zeus.targetPlanet);
                    // console.log(poseidon.targetPlanet);

                // Another example:
                    // function makeClass (){
                    //     class vegetable {
                    //     constructor(name){
                    //         this.namne = name;
                    //     }
                    //     }
                    //     return vegetable;
                    // }

                    // const vegetable = makeClass();
                    // const carrot = new makeClass('carrot');
                    // console.log(carrot.name);
            

// continue on "3:15:00"
// referenca:
// https://www.youtube.com/watch?v=PkZNo7MFNFg&t=367bd