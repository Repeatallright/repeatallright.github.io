let box = document.querySelector(".box");
let deg = 0;

box.addEventListener("click", () => {
  deg -= 90;
  box.style.transform = `rotateY(${deg}deg)`;
  console.log(box);
  if (deg % 180 == 0 && deg % 360 != 0)
    box.style.boxShadow = "-5px 5px 5px -4px rgba(0,0,0,0.5)";
  if (deg % 360 == 0)
    box.style.boxShadow = "5px 5px 5px -4px rgba(0,0,0,0.5)";
});
