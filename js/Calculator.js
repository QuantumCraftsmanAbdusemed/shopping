const display = document.querySelector(".display");
const buttons = document.querySelectorAll(".buttons button");
const specialCharacter = ["*", "-", "+", "%", "AC", "DEL", "=", "/"];
let outPut = "";

buttons.forEach((buttons) => {
  buttons.addEventListener("click", (e) => calculate(e.target.dataset.value));
});

const calculate = (buttonValue) => {
  if (buttonValue === "=" && outPut !== "") {
    outPut = eval(outPut.replace("%", "/100"));
  } else if (buttonValue === "AC") {
    outPut = "";
  } else if (buttonValue === "DEL") {
    outPut = outPut.toString().slice(0, -1);
  } else {
    if (outPut === "" && specialCharacter.includes(buttonValue)) return;
    outPut += buttonValue;
  }
  display.value = outPut;
};
