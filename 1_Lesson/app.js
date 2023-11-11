const background = document.getElementById("grid-container");
const box = document.querySelectorAll(".box");
const boxFont = document.querySelectorAll(".box-font");
const spacebarNote = document.getElementById("spacebar-note");
const bgChangeButton = document.getElementById("change-bg");

document.body.addEventListener("keypress", (e) => {
  console.log("Pressed", e.key);
});
