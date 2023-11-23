##

Now that we have all javascript syntax that we need. Lets now complete all the missing logic to complete our background changer.

### Step by step

**Step 1** - Add a text

```html
<div id="spacebar-note">Press "SPACEBAR" to change the background!</div>
```

```css
#spacebar-note {
    position: absolute;
    color: white;
    left: 0;
    right: 0;
    top: 0;
    margin: 0 auto;
    width: fit-content;
}
```

-   Add a note so that the user will know how to use it and design it.

**Step 2** - Style of the box

```javascript
const backgroundChanger = () => {
    // the rest of the code

    // Added a loop for changing each box
    box.forEach((box, i) => {
        box.style.backgroundColor = hexCodeContainer[i]; // Changing each styles of a box
        boxFont[i].textContent = hexCodeContainer[i]; // Adding a text inside a box
    });
};
```

-   Added a loop for changing the background color of each box and also added a text to determine the hexcode of the background color.

**Congratulations!** You have successfully created a javascript project on your own. Best of luck on your future projects.

If you learned in this tutorial please give it a star.

You can also visit and follow me in my instagram *https://www.instagram.com/sharproyalz/*.
