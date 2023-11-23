## Lesson 3 - Conditional Statement

### Conditional Statement

A conditional statement is a programming construct that allows you to execute different blocks of code based on whether a specified condition evaluates to true or false. In JavaScript and many other programming languages, the `if` statement is a common form of a conditional statement.

Here's a basic syntax for conditional statement:

**if else statement**

```javascript
if (condition) {
    // code to be executed if the condition is true
} else {
    // code to be executed if the condition is false
}
```

-   `condition` is an expression that is evaluated. If the result of the evaluation is `true`, the code inside the first block (after the `if`) will be executed. If the result is `false`, the code inside the second block (after the `else`) will be executed.

**nested if statement**

```javascript
if (condition1) {
    // code to be executed if condition1 is true
} else if (condition2) {
    // code to be executed if condition2 is true
} else {
    // code to be executed if none of the conditions are true
}
```

-   You can also have more complex conditions using `else if` to check multiple conditions in sequence.

Here's an example of `nested if` statement:

```javascript
const device = "laptop";

if (device == "computer") {
    // this code will not be executed because 'device' is not 'laptop'
    console.log("I am playing on computer");
} else if (device == "laptop") {
    // this code will be executed because the 'device' is 'laptop'
    console.log("I am playing on laptop");
} else {
    // this code will not be executed because it stops to the previous conditional statement
    console.log("I am playing on other device");
}
```

-   In the example above, the code inside the first block will not be executed because 'device' is not 'computer'. However the second block, 'device' is equals to 'laptop' and it will be executed. The third block will not be executed anymore as the second block has executed first.

to learn more about **conditional statement**. Visit *https://www.w3schools.com/js/js_if_else.asp*. There are also other conditional statement which is **switch** and **ternary operator**. I recommend to visit this *https://www.w3schools.com/js/js_switch.asp* for **switch** and *https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_operator* for **ternary operator**.

### Step by step

**Step 1** - Add a condition for statement.

```javascript
document.body.addEventListener("keypress", (e) => {
    if (e.key == " ") {
        backgroundChanger();
    }
});
```

-   Lets add a conditional statement so that it will only trigger a certain key. In this case, I want a spacebar key because it is easy to access. You can also change the `" "` with the keys you want e.g `"a"` or `"j"`.
