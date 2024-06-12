const result = document.getElementById("result");
const angram_button = document.getElementById("angram_checker");

angram_button.addEventListener("click", angram);

function angram() {
  const word1Input = document.getElementById("input1").value;
  const word2Input = document.getElementById("input2").value;
  if (word1Input === "" || word2Input === "") {
    result.innerHTML = "Insert a Word";
    result.classList.add("error");
    result.classList.remove("success");
    return;
  }
  const word1 = word1Input
    .toLowerCase()
    .replace(/\s/g, "")
    .split("")
    .sort()
    .join("");
  const word2 = word2Input
    .toLowerCase()
    .replace(/\s/g, "")
    .split("")
    .sort()
    .join("");

  if (word1 === word2) {
    result.innerHTML = "The words are anagrams";
    result.classList.remove("error");
    result.classList.add("success");
  }
  if (word1 !== word2) {
    result.innerHTML = "The words are not anagrams";
    result.classList.add("error");
    result.classList.remove("success");
  }
}
