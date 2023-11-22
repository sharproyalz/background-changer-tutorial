## Lesson 1 - Function

### Function

A function is a block of code designed to perform a particular task. Functions are a fundamental building block of JavaScript programming, and they allow you to group code into reusable units. Functions can take parameters (inputs), execute a set of statements, and return a value.

Here's a basic syntax for defining a function in JavaScript:

```javascript
function functionName(parameter1, parameter2 /* ... */) {
    // code to be executed
    return result; // optional, used to return a value
}
```

**function**: This keyword is used to declare a function.
**functionName**: This is the name of the function. You can choose any valid identifier.
**(parameter1, parameter2, /_ ... _/)** : These are the parameters that the function can accept. Parameters are optional, and you can have none or multiple parameters.
**{ /_ code to be executed _/ }**: This is the body of the function, where you write the statements that make up the function's functionality.
**return result;**: This statement is optional. If present, it allows the function to return a value to the code that called the function.

```javascript
function addNumbers(a, b) {
    let sum = a + b; // store the results of 'parameter a' and 'parameter b' to variable sum
    return sum; // returned the value of sum
}

let result = addNumbers(5, 8); // passing an arguments '5' and '8' then store the returned value to variable sum.
console.log(result); // Output: 13
```

In this example, addNumbers is a function that takes two parameters (a and b), adds them together, and returns the result. The function is then called with the arguments 5 and 8, and the result is printed to the console.

### Arrow Function

An arrow function in JavaScript is a concise way to write anonymous functions. Arrow functions were introduced in ECMAScript 6 (ES6) and provide a more compact syntax compared to traditional function expressions. They are particularly useful for short, simple functions.

Here's the basic syntax of an arrow function:

```javascript
const functionName = (parameter1, parameter2 /* ... */) => {
    // code to be executed
    return result; // optional, used to return a value
};
```

And for single-expression arrow functions, you can omit the braces and the `return` keyword:

```javascript
const functionName = (parameter1, parameter2 /* ... */) => result;
```

Here is an example of converting traditional function to arrow function:

```javascript
// Traditional Function
function addNumbers(a, b) {
    return a + b;
}

console.log(addNumbers(5, 8)); // Output: 13

// Arrow Function
const addNumbers = (a, b) => a + b;

console.log(addNumbers(5, 8)); // Output: 13
```

Here are some notes to remember about arrow function:

-   **No `this` binding**: Arrow functions do not have their own this context; they inherit this from the enclosing scope. This can be beneficial in certain situations, especially when dealing with event handlers or callbacks.

**Shorter syntax**: Arrow functions are often more concise than traditional function expressions, which can make the code easier to read and write.

**No `arguments` object**: Arrow functions do not have their own arguments object. If you need access to the arguments, you can use the rest parameters (...).

to learn more about **function**. Visit *https://www.w3schools.com/js/js_functions.asp*.

### Step by step

**Step 1** - Declare a variable

```javascript
const hexCode = "0123456789ABCDEF";
let hexCodeContainer = [];
```

-   I declared in my 'hexCode' all the possible characters are there in an Hex Code. There are 16 characters which is number 0 to 9 and letter A to F.
-   I declared 'hexCodeContainer' as an array. I will store here my hex codes.

**Step 2** - Declare a variable

```javascript
hexCodeCompleted = "#"; // Storing a 6 hex code characters
for (let i = 0; i < 6; i++) {
    const randomHexCode = hexCode[Math.floor(Math.random() * hexCode.length)]; // Outputs a random hex code character.
    hexCodeCompleted += randomHexCode; // Adding a string intro hexCodeCompleted
}
```

-   Use for loop for getting the 6 hex code characters.
-   'randomHexCode' is my randomizer. It randomizes the indexes of my 'hexCode' variable. To learn more about _Math Object_. Visit *https://www.w3schools.com/js/js_math.asp*.
-   After getting the a random hex code character, I will add it to my variable 'hexCodeCompleted'.
-   It will loop until the 'i' is not less than 6. If the loop ends it will display "#" with 6 hex code characters.

**Step 3** - Nesting loop

```javascript
for (let i = 0; i < 9; i++) {
    hexCodeCompleted = "#"; // Storing a 6 hex code characters
    for (let j = 0; j < 6; i++) {
        const randomHexCode =
            hexCode[Math.floor(Math.random() * hexCode.length)]; // Outputs a random hex code character.
        hexCodeCompleted += randomHexCode; // Adding a string intro hexCodeCompleted
    }
    hexCodeContainer.push(hexCodeCompleted); // Adding a hex code to hex code container using array.push().
}
```

-   I changed the variable 'i' to 'j' in `for(let i = 0; i < 6; i++)` from the step 2.
-   I added a loop so that I can store not just one hex code, but as many as I want and inserted my previous loop. In this case we are going to get 9 color pallets.
-   For every iterate of the parent loop, all the completed Hex Code will be added to 'hexCodeContainer'.
