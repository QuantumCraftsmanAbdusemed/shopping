let intervalId;
let timer_list = JSON.parse(localStorage.getItem("timerList")) || [];

let endTime = "04/23/2024";
let days = document.getElementById("days");
let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");

const close = document.getElementById("close");
const open = document.getElementById("0pen_pop");
const itemCard = document.getElementById("popup");
const title = document.getElementById("title");
const submit = document.getElementById("submit");
const alarmSet = document.querySelector(".timer_list");

let dd = document.getElementById("dd");
let hh = document.getElementById("hh");
let mm = document.getElementById("mm");
let ss = document.getElementById("ss");

let days_dots = document.querySelector(".days_dots");
let hours_dots = document.querySelector(".hours_dots");
let minutes_dots = document.querySelector(".minutes_dots");
let seconds_dots = document.querySelector(".seconds_dots");

let mainTitle = document.getElementById("main_title");
let add_Timer = document.getElementById("add_time");

open.addEventListener("click", function () {
  itemCard.style.display = "block";
});
close.addEventListener("click", function () {
  itemCard.style.display = "none";
});

rendorTodoTime();
function rendorTodoTime() {
  let timerListHtml = "";
  for (let i = 0; i < timer_list.length; i++) {
    const timerObject = timer_list[i];
    const { name, time } = timerObject;
    const html = `<div class="items">${name} <br>${time}</div>`;
    timerListHtml += html;
  }
  alarmSet.innerHTML = timerListHtml;
}

submit.addEventListener("click", function (e) {
  e.preventDefault();
  const titleValue = title.value;
  const add_TimerValue = add_Timer.value;
  mainTitle.innerHTML = titleValue;
  endTime = add_TimerValue;
  title.value = "";
  add_Timer.value = "";
  itemCard.style.display = "none";
  const name = titleValue;
  const time = add_TimerValue;
  startCountDown();
  timer_list.push({
    name,
    time,
  });
  rendorTodoTime();
  localStorage.setItem("timerList", JSON.stringify(timer_list));

  clearInterval(intervalId);
  localStorage.setItem("countDowntTitle", titleValue);
});

startCountDown();

function startCountDown() {
  intervalId = setInterval(function () {
    let now = new Date().getTime();
    let countDown = new Date(endTime).getTime();

    let difference = countDown - now;

    let d = Math.floor(difference / (1000 * 60 * 60 * 24));
    let h = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    let s = Math.floor((difference % (1000 * 60)) / 1000);

    days.innerHTML = d + "<br><span>days</span>";
    hours.innerHTML = h + "<br><span>hours</span>";
    minutes.innerHTML = m + "<br><span>minutes</span>";
    seconds.innerHTML = s + "<br><span>seconds</span>";

    dd.style.strokeDashoffset = 440 - (440 * d) / 365;
    hh.style.strokeDashoffset = 440 - (440 * h) / 24;
    mm.style.strokeDashoffset = 440 - (440 * m) / 60;
    ss.style.strokeDashoffset = 440 - (440 * s) / 60;

    days_dots.style.transform = `rotateZ(${d * 0.986}deg)`;
    hours_dots.style.transform = `rotateZ(${h * 15}deg)`;
    minutes_dots.style.transform = `rotateZ(${m * 6}deg)`;
    seconds_dots.style.transform = `rotateZ(${s * 6}deg)`;

    if (difference <= 0) {
      clearInterval(intervalId);
      document.querySelector(".content").style.display = "none";
    }
    localStorage.setItem("countdownTime", JSON.stringify(difference));
  }, 1000);
}

const savedCountdownTime = localStorage.getItem("countdownTime");
const savedCountdownTitle = localStorage.getItem("countDowntTitle");

if (savedCountdownTime) {
  const parsedCountdownTime = JSON.parse(savedCountdownTime);
  if (parsedCountdownTime >= 0) {
    endTime = new Date().getTime() + parsedCountdownTime;
    startCountDown();
  }
}

if (savedCountdownTitle) {
  mainTitle.innerHTML = savedCountdownTitle;
}

let timerListHtmls = JSON.parse(localStorage.getItem("timerList"));
if (timerListHtmls) {
  const timerListHtml = timerListHtmls
    .map((timerObject) => {
      const { name, time } = timerObject;
      return `<div class="items">${name} <br>${time}</div>`;
    })
    .join("");
  alarmSet.innerHTML = timerListHtml;
}

function handleTimerItemClick(event) {
  const clickedItem = event.target;
  const timerIndex = Array.from(clickedItem.parentNode.children).indexOf(
    clickedItem
  );
  const timerObject = timer_list[timerIndex];
  const { name, time } = timerObject;

  endTime = time;
  mainTitle.innerHTML = name;

  startCountDown();
}

alarmSet.addEventListener("click", handleTimerItemClick);
