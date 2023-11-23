const background = document.getElementById("grid-container");
const box = document.querySelectorAll(".box");
const boxFont = document.querySelectorAll(".box-font");
const spacebarNote = document.getElementById("spacebar-note");
const bgChangeButton = document.getElementById("change-bg");


const backgroundChanger = () => {
  const hexCode = "0123456789ABCDEF";
  let hexCodeContainer = [];

  for (let i = 0; i < 9; i++) {
    hexCodeCompleted = "#";
    for (let j = 0; j < 6; j++) {
      const randomHexCode = hexCode[Math.floor(Math.random() * hexCode.length)];
      hexCodeCompleted += randomHexCode;
    }
    hexCodeContainer.push(hexCodeCompleted);
  }

  console.log(hexCodeContainer); // Outputs: an array with 9 random elements.
}

document.body.addEventListener("keypress", (e) => {
  backgroundChanger()
});
