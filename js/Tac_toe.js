const boxes = document.querySelectorAll(".box");
const result = document.querySelector(".result");
const turnBg = document.querySelector(".bg");
const scoreResult = document.querySelector(".score");

const reset_Button = document.getElementById("reset_button");
const playAgainButton = document.getElementById("play_again");

let isGameOver = false;
let turn = "X";

let score = JSON.parse(localStorage.getItem("score")) || {
  Xwin: 0,
  Owin: 0,
  draw: 0,
};

displayResult();

boxes.forEach((e) => {
  e.innerHTML = "";
  e.addEventListener("click", () => {
    if (!isGameOver && e.innerHTML === "") {
      e.innerHTML = turn;
      checkWin();
      checkDraw();
      checkTurn();
      displayResult();
      localStorage.setItem("score", JSON.stringify(score));
    }
  });
});

function displayResult() {
  scoreResult.innerHTML = `<span id="scoreForm">X : </span>${score.Xwin} <span id="scoreForm">O : </span>${score.Owin}<span id="scoreForm">Draw : </span>${score.draw}`;
}

function checkTurn() {
  if (turn === "X") {
    turn = "O";
    turnBg.style.left = "85px";
  } else {
    turn = "X";
    turnBg.style.left = "0";
  }
}

function checkWin() {
  let winCondition = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < winCondition.length; i++) {
    let v0 = boxes[winCondition[i][0]].innerHTML;
    let v1 = boxes[winCondition[i][1]].innerHTML;
    let v2 = boxes[winCondition[i][2]].innerHTML;

    if (v0 != "" && v0 === v1 && v0 === v2) {
      isGameOver = true;
      if (turn === "X") {
        score.Xwin++;
      }
      if (turn === "O") {
        score.Owin++;
      }
      result.innerHTML = `${turn} <span id="resultForm">Win</span>`;
      playAgainButton.style.display = "inline";

      for (j = 0; j < 3; j++) {
        boxes[winCondition[i][j]].style.backgroundColor = "#08d9d6";
        boxes[winCondition[i][j]].style.color = "#000000";
      }
    }
  }
}

function checkDraw() {
  if (!isGameOver) {
    let isDraw = true;
    boxes.forEach((e) => {
      if (e.innerHTML === "") isDraw = false;
    });
    if (isDraw) {
      isGameOver = true;
      score.draw++;
      result.innerHTML = '<span id="resultForm">Draw</span>';
      playAgainButton.style.display = "inline";
    }
  }
}

playAgainButton.addEventListener("click", () => {
  isGameOver = false;
  turn = "X";
  turnBg.style.left = "0";
  result.innerHTML = "";
  playAgainButton.style.display = "none";

  boxes.forEach((e) => {
    e.innerHTML = "";
    e.style.removeProperty("background-color");
    e.style.color = "#fff";
  });
});

reset_Button.addEventListener("click", () => {
  score = {
    Xwin: 0,
    Owin: 0,
    draw: 0,
  };
  displayResult();
  localStorage.removeItem("score");
});
