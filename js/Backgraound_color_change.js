const color_change_button = document.getElementById("color_change_button");

color_change_button.addEventListener("click", changeColor);

function randomNumber() {
  return Math.floor(Math.random() * 256);
}

function changeColor() {
  let randomColor = `rgb(${randomNumber()},${randomNumber()},${randomNumber()})`;
  console.log(randomColor);
  document.body.style.backgroundColor = randomColor;
}
