const years = document.getElementById("years");
const month = document.getElementById("month");
const days = document.getElementById("days");
const age_claculate_button = document.getElementById("age_claculate_button");
let birthDate, birthYear, birthMonth;

age_claculate_button.addEventListener("click", agaCalculator);

function agaCalculator() {
  let today = new Date();
  let inputDate = new Date(document.getElementById("date_input").value);

  let birthDetail = {
    date: inputDate.getDate(),
    month: inputDate.getMonth() + 1,
    year: inputDate.getFullYear(),
  };

  let currentDate = today.getDate();
  let currentMonth = today.getMonth() + 1;
  let currentYear = today.getFullYear();

  if (
    birthDetail.year > currentYear ||
    (birthDetail.month > currentMonth && birthDetail.year == currentYear) ||
    (birthDetail.date > currentDate &&
      birthDetail.month == currentMonth &&
      birthDetail.year == currentYear)
  ) {
    alert("Not born Yet");
    displayResult("-", "-", "-");
    return;
  }

  birthYear = currentYear - birthDetail.year;
  if (currentMonth >= birthDetail.month) {
    birthMonth = currentMonth - birthDetail.month;
  } else {
    birthYear--;
    birthMonth = 12 + currentMonth - birthDetail.month;
  }
  if (currentDate >= birthDetail.date) {
    birthDate = currentDate - birthDetail.date;
  } else {
    birthMonth--;
    birthDate =
      getDaysInMonth(currentYear, currentMonth) +
      currentDate -
      birthDetail.date;
    if (birthMonth < 0) {
      birthMonth = 11;
      birthYear--;
    }
  }
  displayResult(birthYear, birthMonth, birthDate);
}

function getDaysInMonth(currentYear, currentMonth) {
  return new Date(currentYear, currentMonth, 0).getDate();
}

function displayResult(bYear, bMonth, bDate) {
  years.innerHTML = bYear;
  month.innerHTML = bMonth;
  days.innerHTML = bDate;
}
