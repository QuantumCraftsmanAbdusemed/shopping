let secondValue = 0;
let miliSecondVAlue = 0;
let intervalId;

let second = document.getElementById("second");
let miliSecond = document.getElementById("miliSecond");

let start_button = document.querySelector(".start_button");
let resume_button = document.querySelector(".resume_button");
let reset_button = document.querySelector(".reset_button");

start_button.addEventListener("click", () => {
  intervalId = setInterval(startTimer, 10);
});

resume_button.addEventListener("click", () => {
  clearInterval(intervalId);
});

reset_button.addEventListener("click", () => {
  clearInterval(intervalId);
  secondValue = 0;
  miliSecondVAlue = 0;
  second.innerHTML = "00";
  miliSecond.innerHTML = "00";
});

function startTimer() {
  miliSecondVAlue++;
  if (miliSecondVAlue <= 9) {
    miliSecond.innerHTML = "0" + miliSecondVAlue;
  }
  if (miliSecondVAlue > 9) {
    miliSecond.innerHTML = miliSecondVAlue;
  }
  if (miliSecondVAlue > 59) {
    secondValue++;
    second.innerHTML = "0" + secondValue;
    miliSecondVAlue = 0;
    miliSecond.innerHTML = "0" + 0;
  }
  if (secondValue > 9) {
    second.innerHTML = secondValue;
  }
}
