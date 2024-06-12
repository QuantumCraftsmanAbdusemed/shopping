const calculateButton = document.getElementById("calculate_buttons");
const result = document.getElementById("result");
const comment = document.getElementById("comment");

calculateButton.addEventListener("click", bmiCalculator);
function bmiCalculator() {
  result.style.display = "block";
  let weightValue = document.getElementById("weight").value;
  let heightValue = document.getElementById("height").value;

  heightValue = heightValue / 100;

  const bmi = (weightValue / (heightValue * heightValue)).toFixed(2);
  result.innerHTML = bmi;

  if (bmi <= 18.5) {
    comment.textContent = "Underweight";
    comment.style.color = "red";
  }
  if (bmi > 18.5 && bmi <= 24.9) {
    comment.textContent = "Normal weight";
    comment.style.color = "#61d945";
  }
  if (bmi > 24.9 && bmi <= 29.9) {
    comment.textContent = "Overweight";
    comment.style.color = "orange";
  }
  if (bmi > 30) {
    comment.textContent = "Obesity";
    comment.style.color = "red";
  }
}
