let filterBlur = document.getElementById("blur");
let filterContrast = document.getElementById("contrast");
let filterHue_rotate = document.getElementById("hue_rotate");
let filterSepia = document.getElementById("sepia");
let images = document.getElementById("choosen_image");
let upload_Button = document.getElementById("upload_input");

let noFlip = document.getElementById("no_flip");
let flip_x = document.getElementById("flip_x");
let flip_y = document.getElementById("flip_y");

let imageContainer = document.querySelector(".image_continer");

upload_Button.onchange = () => {
  resetFilter();
  imageContainer.style.display = "block";
  let reader = new FileReader();
  reader.readAsDataURL(upload_Button.files[0]);
  reader.onload = () => {
    images.src = reader.result;
  };
};

let slider = document.querySelectorAll(".filter input[type='range']");

slider.forEach((slider) => {
  slider.addEventListener("input", addFilter);
});

function addFilter() {
  images.style.filter = `blur(${filterBlur.value}px) contrast(${filterContrast.value}%) hue-rotate(${filterHue_rotate.value}deg) sepia(${filterSepia.value}%)`;
}

let flipButtons = document.querySelectorAll(".flip_option input[type='radio']");

flipButtons.forEach((flipButtons) => {
  flipButtons.addEventListener("click", addFlip);
});

function addFlip() {
  if (noFlip.checked) {
    images.style.transform = "scale(1,1)";
  } else if (flip_x.checked) {
    images.style.transform = "scaleX(-1)";
  } else if (flip_y.checked) {
    images.style.transform = "scaleY(-1)";
  }
}

function resetFilter() {
  filterBlur.value = 0;
  filterContrast.value = 100;
  filterHue_rotate.value = 0;
  filterSepia.value = 0;
  noFlip.checked = true;
  addFilter();
  addFlip();
}
