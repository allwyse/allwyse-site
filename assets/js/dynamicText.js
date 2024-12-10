// List of words to cycle through
const words = [
  "Life Coach",
  "Business Coach",
  "Wellness Coach",
  "Career Coach",
  "Executive Coach",
  "Leadership Coach",
  "Relationship Coach",
  "Financial Coach",
  "Spiritual Coach",
  "Mindset Coach",
  "Fitness Coach",
];
let index = 0;

function changeWord() {
  // Get the span where the word will appear
  const isDesktop = window.innerWidth > 900;
  const dynamicText = isDesktop
    ? document.getElementById("dynamicTextDesktop")
    : document.getElementById("dynamicText");
  // Set the current word
  dynamicText.textContent = `${words[index]}${isDesktop ? "ing" : "es"}`;
  // Increment the index and reset to 0 if we reach the end of the array
  index = (index + 1) % words.length;
}

// Change the word every 2 seconds
setInterval(changeWord, 2000);

window.document.addEventListener("DOMContentLoaded", function () {
  changeWord();
});
