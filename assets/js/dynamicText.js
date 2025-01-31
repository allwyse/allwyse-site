// List of words to cycle through
const words = [
  "Client Managment",
  "Lead Tracking",
  "Session Scheduling",
  "Optimized Landing Pages",
  "Booking System",
  "Auto Lead Generation",
  "Business Analytics"
];
let index = 0;

function changeWord() {
  // Get the span where the word will appear
  const isDesktop = window.innerWidth > 900;
  const dynamicText = isDesktop
    ? document.getElementById("dynamicTextDesktop")
    : document.getElementById("dynamicText");
  // Set the current word
  dynamicText.textContent = `${words[index]}`;
  // Increment the index and reset to 0 if we reach the end of the array
  index = (index + 1) % words.length;
}

// Change the word every 2 seconds
setInterval(changeWord, 2000);

window.document.addEventListener("DOMContentLoaded", function () {
  changeWord();
});
