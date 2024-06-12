const addAlarmButton = document.getElementById("add_alarm");
const alarmList = document.getElementById("alarm_list");

let alarm = [];

addAlarmButton.addEventListener("click", setAlarm);

function displayAlarm() {
  let alarmListHtml = "";
  alarm.forEach((value, index) => {
    const dateValue = formatTime(value.time);
    const html = `<div>${dateValue}</div>
     <button onclick="alarm.splice(${index},1);displayAlarm();" id="delete_button">Delete</button> `;
    alarmListHtml += html;
  });
  document.getElementById("alarm_list").innerHTML = alarmListHtml;
}

function setAlarm() {
  const timeInput = document.getElementById("time_input").value;
  const alarmTime = new Date();
  const currentTime = new Date();
  alarmTime.setHours(timeInput.split(":")[0]);
  alarmTime.setMinutes(timeInput.split(":")[1]);
  alarmTime.setSeconds(0);

  const timeDifference = alarmTime - currentTime;

  const alarmObject = {
    time: alarmTime,
    timeOutId: setTimeout(function () {
      if (alarmTime.getTime() === currentTime.getTime()) {
        alert("Alarm");
      }
    }),
  };

  alarm.push(alarmObject);
  displayAlarm();
}

function formatTime(date) {
  let hours = date.getHours();
  let minutes = date.getMinutes();

  if (hours < 10) hours = "0" + hours;
  if (minutes < 10) minutes = "0" + minutes;

  return hours + ":" + minutes;
}
