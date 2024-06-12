// Open the popup
document.getElementById("openPopupBtn").addEventListener("click", function () {
  document.getElementById("popup").style.display = "block";
});

// Close the popup
document.querySelector(".close").addEventListener("click", function () {
  document.getElementById("popup").style.display = "none";
});

// Handle form submission
document.getElementById("popupForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Get the form values
  const title = document.getElementById("title").value;
  const description = document.getElementById("description").value;
  const image = document.getElementById("image").value;

  // Log the form values (you can modify this part to perform any desired actions)
  console.log("Title:", title);
  console.log("Description:", description);
  console.log("Image URL:", image);

  // Clear the form
  document.getElementById("title").value = "";
  document.getElementById("description").value = "";
  document.getElementById("image").value = "";

  // Close the popup
  document.getElementById("popup").style.display = "none";
});
