const sliderItems = document.querySelectorAll(".slider-items li");
const sliderDots = document.querySelectorAll(".slider-dots li");
const navPrev = document.querySelectorAll(".slider-nav.prev");
const navNext = document.querySelectorAll(".slider-nav.next");

let selected_item = JSON.parse(localStorage.getItem("index")) || 0;

const storedIndex = JSON.parse(localStorage.getItem("index"));
if (storedIndex !== null) {
  selected_item = storedIndex;
  setItemSlider(selected_item);
}

function setItemSlider(index) {
  selected_item = index;
  console.log(typeof index);
  sliderItems.forEach((item, idxIndex) => {
    let offset = idxIndex - selected_item;
    if (offset < 0) offset += sliderItems.length;
    for (let i = 0; i < sliderItems.length + 1; i++) {
      item.classList.remove(`item-${i}`);
      item.classList.add(`item-${offset + 1}`);
    }
  });

  sliderDots.forEach((dot, dotIndex) => {
    if (dotIndex === selected_item) {
      dot.classList.add("active");
    } else {
      dot.classList.remove("active");
    }
  });

  localStorage.setItem("index", selected_item);
}

sliderItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    setItemSlider(index);
  });
});

sliderDots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    setItemSlider(index);
  });
});

navNext.forEach((button) => {
  button.addEventListener("click", () => {
    const newIndex =
      selected_item < sliderItems.length - 1 ? selected_item + 1 : 0;
    // No need to update selected_item here
    setItemSlider(newIndex);
  });
});

navPrev.forEach((button) => {
  button.addEventListener("click", () => {
    const newIndex =
      selected_item > 0 ? selected_item - 1 : sliderItems.length - 1;
    // No need to update selected_item here
    setItemSlider(newIndex);
  });
});

function searchByIndex() {
  const searchInput = document.getElementById("index-search-input");
  const index = parseInt(searchInput.value, 10);

  if (isNaN(index) || index < 1 || index > sliderItems.length) {
    const errorMessage = document.getElementById("error-message");
    errorMessage.textContent = "Invalid index!";
    return;
  }

  const newIndex = index - 1;
  setItemSlider(newIndex);
  searchInput.value = "";
}

const searchButton = document.getElementById("index-search-button");
searchButton.addEventListener("click", searchByIndex);
