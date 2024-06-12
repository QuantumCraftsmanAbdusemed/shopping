const title = document.getElementById("title");
const input_name = document.getElementById("input_name");
const option_Account = document.getElementById("option_Account");
const submit_form = document.getElementById("submit_form");

option_Account.addEventListener("click", () => {
  if (option_Account.textContent === "Sign in") {
    option_Account.textContent = "Create account";
    input_name.style.display = "none";
    title.textContent = "Sign In";
  } else if (option_Account.textContent === "Create account") {
    option_Account.textContent = "Sign in";
    input_name.style.display = "block";
    title.textContent = "Register";
  }
});
