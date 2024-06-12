const cube = document.querySelector(".image_cube");
const btnLeft = document.getElementById("left");
const btnRight = document.getElementById("right");
const btnUp = document.getElementById("up");
const btnDown = document.getElementById("down");

let roatateXValue = 0;
let roatateYValue = 0;

btnRight.addEventListener("click", () => {
  roatateYValue -= 90;
  cube.style.transform = `rotateY(${roatateYValue}deg) rotateX(${roatateXValue}deg)`;
});
btnLeft.addEventListener("click", () => {
  roatateYValue += 90;
  cube.style.transform = `rotateY(${roatateYValue}deg) rotateX(${roatateXValue}deg)`;
});
btnUp.addEventListener("click", () => {
  roatateXValue += 90;
  cube.style.transform = `rotateY(${roatateYValue}deg) rotateX(${roatateXValue}deg)`;
});
btnDown.addEventListener("click", () => {
  roatateXValue -= 90;
  cube.style.transform = `rotateY(${roatateYValue}deg) rotateX(${roatateXValue}deg)`;
});
