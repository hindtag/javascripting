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
            console.log(myVariable.indexOf("tics")); // Output is 7
            console.log(myVariable.indexOf("at")); // Output is 1
    
    Use of .lastIndexOf() to look for the position of the last occurence.
            Example:
            const myVariable = "Mathematics";

            console.log(myVariable.lastIndexOf("at")); // Output is 6
            console.log(myVariable.lastIndexOf("ath")); // Output is 1

    Use of .slice(5,8) to return the characters from the start position to the ending position.
            Example:
            const myVariable = "Mathematics";

            console.log(myVariable.slice(5,8)); // Output mat
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
        console.log(myVariable.includes("div")); // Output is false
        console.log(myVariable.includes("")); // Output is true
        console.log(myVariable.includes("the")); // Output is true

    Use of .split method splits the string wherever the character we provide occurs and returns the resulting multiple strings within an array.
        Example:
        const myVariable = "Mathematics";

        console.log(myVariable.split("e")); // Output is  ['Math', 'matics']
        console.log(myVariable.split("")); // Output is ['M', 'a', 't', 'h', 'e', 'm', 'a', 't', 'i', 'c', 's']

        Another example:
        console.log("John, joe, doe".split("")); // Output is ['J', 'o', 'h', 'n', ',', ' ', 'j', 'o', 'e', ',', ' ', 'd', 'o', 'e']
        console.log("John, joe, doe".split(",")); // Output is ['John', ' joe', ' doe']
        console.log("Every good boy does fine".split(" ")); Output is  ['Every', 'good', 'boy', 'does', 'fine']


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
            console.log(myNumber === myFloat2); // Output is false
            console.log(myNumber == myString); // Output is false

            console.log(myString + 3); // Output is 423
            console.log(Number(myString)); // Converting string to number, this output 42
            console.log(Number(myString) === myNumber); // Output is true

            console.log(Number(false)); // Output is 0
            console.log(Number(true)); // Output is 1
            console.log(Number("FirstName")); // NaN
            console.log(Number(undefined)); // NaN


    || Number methods
    
    Use Number.isInteger() to determine wheter the passed value us an integer.
        Example:
        const myNumber = 42;
        const myFloat1 = 42.00;
        const myFloat2 = 42.01;
        const myString = "42";

        console.log(Number.isInteger(myNumber)); // True
        console.log(Number.isInteger(myFloat1)); // True
        console.log(Number.isInteger(myFloat2)); // False
        console.log(Number.isInteger(myString)); // False

    Use Number.parseFloat() parses an argument and returns a floating point number. if a number cannot be parsed from the argument, it returns NaN.

        Example:
        const myNumber = 42;
        const myFloat1 = 42.00;
        const myFloat2 = 42.01;
        const myString = "42";
        const myString1 = "42asde"; // alphanumeric

        console.log(Number.parseFloat(myNumber)); // 42
        console.log(Number.parseFloat(myFloat1)); // 42
        console.log(Number.parseFloat(myFloat2)); // 42.1
        console.log(Number.parseFloat(myString)); // 42
        console.log(Number.parseFloat(myString1)); // 42

    Use of toFixed to format a number according to many decimal points you provide as the paramter.
        Example:
        const myFloat1 = 42.00;
        const myString3 = "42.123abc";

        console.log(Number.parseFloat(myString3).toFixed(2)); // 42.12
        console.log(myFloat2.toFixed(2)); // 42.01

    Use of .toString returns a string representing a number.
        Example:
        const myFloat1 = 42.00;
        const myString1 = "42asde";

        console.log(myFloat1.toString()); // "42"
        console.log(typeof myFloat1.toString()); // true
        console.log(typeof Number.parseFloat(myString1)); // number


        // Chaining = Using several methods chained together
            console.log(Number.parseFloat("4.237abc").toFixed(2).toString()); // 4.24
        

    NaN determines wheter the passed value is NaN AND its type is Number.
        Example:
        console.log(Number.isNaN("dave")); // False

        || Flobal isNan determines wheter a value is NaN or not.
            
            console.log(isNaN("dave")); // True

Continue on "27:00"


Resources:
    String methods
        https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String