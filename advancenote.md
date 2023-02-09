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

Continue on "22:17"

Resources:
    String methods
        https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String