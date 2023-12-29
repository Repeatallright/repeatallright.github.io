let box = document.querySelector(".box");

let currentClass = "show-front";

function changeSide() {
  box.classList.remove(currentClass);
  box.classList.add(getSide(currentClass));
  currentClass = getSide(currentClass);
}
// set initial side

box.addEventListener("click", changeSide);

let cords = ["show-front", "show-right", "show-back", "show-left"];

function getSide(arg) {
  if (cords.indexOf(arg) + 1 == cords.length) return cords[0];
  else return cords[cords.indexOf(arg) + 1];
}
