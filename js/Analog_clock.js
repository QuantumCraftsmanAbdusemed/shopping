const hr = document.getElementById("hr");
const mn = document.getElementById("mn");
const sec = document.getElementById("sec");

const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const amPmElement = document.getElementById("ampm");

setInterval(() => {
  let date_now = new Date();

  let hh = date_now.getHours();
  let mm = date_now.getMinutes();
  let ss = date_now.getSeconds();

  let calc_hours = hh * 30 + mm / 2;
  let calc_minutes = mm * 6 + ss / 10;
  let calc_seconds = ss * 6;

  hr.style.transform = `rotate(${calc_hours}deg)`;
  mn.style.transform = `rotate(${calc_minutes}deg)`;
  sec.style.transform = `rotate(${calc_seconds}deg)`;

  let getHours = date_now.getHours();
  let getMinutes = date_now.getMinutes();
  let getSeconds = date_now.getSeconds();

  if (getHours > 12) {
    getHours = getHours - 12;
  } else if (getHours === 0) {
    getHours = 12;
  }

  let amPmValue = getHours >= 12 ? "AM" : "PM";
  console.log(amPmValue);

  getHours = getHours < 10 ? "0" + getHours : getHours;
  getMinutes = getMinutes < 10 ? "0" + getMinutes : getMinutes;
  getSeconds = getSeconds < 10 ? "0" + getSeconds : getSeconds;

  hours.innerHTML = getHours;
  minutes.innerHTML = getMinutes;
  seconds.innerHTML = getSeconds;
  amPmElement.innerHTML = amPmValue;
});
