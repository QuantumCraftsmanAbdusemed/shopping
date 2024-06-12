const quoteName = document.querySelector(".quotes");
const authorName = document.querySelector(".author .name");
const volume = document.querySelector(".volume");
const copy = document.querySelector(".copy");
const twitter = document.querySelector(".twitter");
const quoteBtn = document.querySelector("button");
const favoriteIcon = document.querySelector(".favorite i");
const favoriteBtn = document.querySelector(".favorite-btn");
const favoriteList = document.querySelector(".favorite-list");
const filters = document.querySelectorAll(".filters span");

let quotesList = {
  religious: [
    {
      quotes: "Verily, with hardship, there is relief.",
      author: "Allah (Quran 94:5)",
    },
    {
      quotes:
        "The best among you are those who have the best manners and character.",
      author: "Prophet Muhammad (peace be upon him)",
    },
    {
      quotes: "Allah does not burden a soul beyond that it can bear.",
      author: "Allah (Quran 2:286)",
    },
    {
      quotes:
        "Whoever believes in Allah and the Last Day, let him speak good or remain silent.",
      author: "Prophet Muhammad (peace be upon him)",
    },
    {
      quotes: "Call upon Me; I will respond to you.",
      author: "Allah (Quran 40:60)",
    },
  ],
  motivation: [
    {
      quotes: "Believe you can, and you're halfway there.",
      author: "Theodore Roosevelt",
    },
    {
      quotes:
        "Success is not final, failure is not fatal: It is the courage to continue that counts.",
      author: "Winston Churchill",
    },
    {
      quotes: "The only way to do great work is to love what you do.",
      author: "Steve Jobs",
    },
    {
      quotes:
        "Your time is limited, don't waste it living someone else's life.",
      author: "Steve Jobs",
    },
    {
      quotes:
        "The future belongs to those who believe in the beauty of their dreams.",
      author: "Eleanor Roosevelt",
    },
  ],
};

quoteBtn.addEventListener("click", getRandomQuote);

let randomQuote = JSON.parse(localStorage.getItem("randomQuote"));

if (!randomQuote) {
  getRandomQuote();
} else {
  displayRabdomQoutes(randomQuote);
}

function getRandomQuote() {
  const category = Object.keys(quotesList);
  const randomCategory = category[Math.floor(Math.random() * category.length)];
  const categoryQoutes = quotesList[randomCategory];
  const randomQuote =
    categoryQoutes[Math.floor(Math.random() * category.length)];
  displayRabdomQoutes(randomQuote);
  saveRandomQuote(randomQuote);
}

function displayRabdomQoutes(randomQuote) {
  quoteName.textContent = randomQuote.quotes;
  authorName.textContent = randomQuote.author;
}

function saveRandomQuote(randomQuote) {
  localStorage.setItem("randomQuote", JSON.stringify(randomQuote));
}
volume.addEventListener("click", () => {
  let soundText = new SpeechSynthesisUtterance(
    `${quoteName.innerHTML} by ${authorName.innerHTML}`
  );
  speechSynthesis.speak(soundText);
});

copy.addEventListener("click", () => {
  navigator.clipboard.writeText(quoteName.innerHTML);
});

filters.forEach((span) => {
  span.addEventListener("click", () => {
    document.querySelector("span.active").classList.remove("active");
    span.classList.add("active");
  });
});
