### Lesson 1 - Variables and DOM

#### Variables

A variable is a symbolic name that represents or refers to a value. It serves as a storage location identified by a unique name, allowing developers to store and manipulate data within a program. Variables enable the dynamic handling of information by providing a means to store values of various types, such as numbers, strings, or objects.

There are three keywords used for variable declaration in JavaScript: var, let, and const. These keywords establish the scope and mutability of the variable.

**var**: Historically used for variable declaration, but it has fallen out of favor due to its function-scoping behavior.

**let**: Introduced in more recent versions of JavaScript, it allows block-scoping and is commonly employed when the variable may be reassigned.

**const**: Used to declare constants, ensuring that the assigned value remains unchanged throughout the program. It also has block-scoping like let.

to learn more about this. Visit *https://www.w3schools.com/js/js_variables.asp*

#### Document Object Model (DOM)

It represents the structure of an HTML document as a tree of objects, where each object corresponds to a part of the document, such as elements, attributes, and text. The DOM provides a way for programs to dynamically update the content, structure, and style of a document, allowing for interactive and dynamic web pages.

```javascript
// Syntax 
document.getElementsById('my-id');
document.getElementsByClassName('my-class');
```

to learn more about this. Visit *https://www.w3schools.com/jsref/dom_obj_all.asp*

#### Step by step

**Step 1** - Create and Link your javascript file.

```html
<script src="app.js"></script>
```

Create `app.js` and link it using the <script></script> in your HTML file, `index.html`.

**Step 2** - Declare a variable of an HTML document that you are willing to manipulate.

```javascript
const background = document.getElementById("grid-container");
const box = document.querySelectorAll(".box");
const boxFont = document.querySelectorAll(".box-font");
const spacebarNote = document.getElementById("spacebar-note");
const bgChangeButton = document.getElementById("change-bg");
```

I have declared the variables necessary to manipulate my HTML document.

**Step 3** - Add an addEventListener() method.

```javascript
document.body.addEventListener("keypress", (e) => {
console.log("Pressed", e.key);
});
```

I added an Event Listener that will display the pressed key in the console.
