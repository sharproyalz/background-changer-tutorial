## Lesson 2 - Loop

### Loop

A loop is a programming construct that allows you to repeatedly execute a block of code as long as a certain condition is true. Loops are used to automate repetitive tasks, making it more efficient and concise to perform iterations over a set of data or execute a block of code multiple times.
There are three keywords used for variable declaration in JavaScript: var, let, and const. These keywords establish the scope and mutability of the variable.

There are several types of loops in JavaScript, but the two most common ones are the **for** loop and the **while** loop.

**for** loop is used when you know the number of times you want to execute a block of code. It consists of three parts: initialization, condition, and iteration expression.

```javascript
for (let i = 1; i < 5; i++) {
    console.log("Number: ", i);
}
// Output
// Number: 1
// Number: 2
// Number: 3
// Number: 4
```

-   Initialization (let i = 1): Initializes a counter variable.
-   Condition (i < 5): Specifies the condition for the loop to continue.
-   Iteration (i++): Updates the counter variable after each iteration.

**while** loop is used when the number of iterations is not known in advance and is based on a certain condition.

```javascript
let i = 0; // initialization
while (i < 5) {
    console.log("Number: ", i);
    i++; // iteration
}
```

-   Condition (i < 5): Specifies the condition for the loop to continue.

to learn more about **loop**. Visit *https://www.w3schools.com/js/js_loop_for.asp* and *https://www.w3schools.com/js/js_loop_while.asp*.

### Array

An array in JavaScript is a data structure that allows you to store and organize multiple values within a single variable. These values can be of any data type, such as numbers, strings, objects, or other arrays. Arrays provide a way to group related data under a single name, making it easier to manage and manipulate collections of values in your code.

**Declaration**

```javascript
// Declaring an array.
let fruits = ["apple", "banana", "orange"];
let grades = [87, 90, 85, 91];
let cart = [
    { name: "laptop", price: "40199" },
    { name: "desktop", price: "51199" },
];
```

Declaring an array are using open and close brackets "[]".

**Indexing**

```javascript
let fruits = ["apple", "banana", "orange"];

console.log(fruits[0]); // Outputs: apple
console.log(fruits[1]); // Outputs: banana
```

Elements in an array are accessed by their index, which starts from 0. For example, in the array fruits, fruits[0] refers to the first element ("apple"), numbers[1] refers to the second element ("banana"), and so on.

**Length**

```javascript
let fruits = ["apple", "banana", "orange"];

console.log(fruits.length); // Outputs: 3
```

You can find the number of elements in an array using `length` property.

**Length**

```javascript
let fruits = ["apple", "banana", "orange"];

fruits.push("grapes"); // Added a new element "grapes" to the end of an array.
console.log(fruits); // Outputs: ["apple", "banana", "orange", "grapes"]

fruits.pop();
console.log(fruits); // Outputs: ["apple", "banana", "orange"]
```

Arrays come with a variety of built-in methods for manipulation and iteration. Some common methods include push, pop, shift, unshift, splice, slice, forEach, and more.

to learn more about **array**. Visit *https://www.w3schools.com/js/js_arrays.asp*.

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
