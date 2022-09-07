let colour = "black";
let press = true;

function board(size) {
  let grid = document.querySelector(".board");
  let box = grid.querySelectorAll("div");
  box.forEach((div) => div.remove());
  grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;
  grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;

  let amount = size * size;
  for (let i = 0; i < amount; i++) {
    let box = document.createElement("div");
    box.addEventListener("mouseover", colourBox);
    grid.insertAdjacentElement("beforeend", box);
  }
}

board(16);

function changeSize(input) {
  if (input >= 1 && input <= 100) {
    board(input);
  } else {
    console.log("Not between 1 and 100 squares");
  }
}

function colourBox() {
  if (press) {
    if (colour === "Random") {
      this.style.background = `hsl(${Math.random() * 360}, 100%, 50%)`;
    } else {
      this.style.background = colour;
    }
  }
}

function changeColour(colourChoice) {
  colour = colourChoice;
}

function resetGrid() {
  let board = document.querySelector(".board");
  let boxes = board.querySelectorAll("div");
  boxes.forEach((div) => (div.style.backgroundColor = "white"));
}

document.querySelector("body").addEventListener("click", (e) => {
  if (e.target.tagName != `BUTTON`) {
    press = !press;
  }
});
