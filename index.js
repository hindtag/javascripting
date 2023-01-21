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

// Word blanks or mad libs passsing different words
    // Example:
    function wordBlanks(myNoun, myAdjective, myVerb, myAdverb){
        // Your code below this line
            var result = "";
            result += "The " + myAdjective + " " + myNoun + " " + myVerb + " to the store " + myAdverb + ".";

        // Your code above this line
            return result;
        }
         
        // Change the words here to test your function
        console.log(wordBlanks("dog", "small", "ran", "quickly")); 
        console.log(wordBlanks("cat", "black", "climb", "quickly")); 


// Store multiple values with arrays
    // Arrays allow you to store several pieces of data in one place.

    // Example
        var ourArray = ["John", 23];

    // Only change code below this line.
        var myArray = ["Biron", 33];
        


    // continue on "40:44"
    // reference:
    // https://www.youtube.com/watch?v=PkZNo7MFNFg&t=3678s