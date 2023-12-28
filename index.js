let box = document.querySelector(".box");

let currentClass = "show-front";

function changeSide() {
  if (currentClass == "show-front") {
    box.classList.remove(currentClass);
    box.classList.add("show-back");
    currentClass = "show-back";
  } else {
    box.classList.remove(currentClass);
    box.classList.add("show-front");
    currentClass = "show-front";
  }
}
// set initial side

box.addEventListener("click", changeSide);
