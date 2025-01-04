document.addEventListener("DOMContentLoaded", () => {
  if (window.localStorage.getItem("subscribed")) {
    return;
  }
  // Show modal after 20 seconds
  setTimeout(() => {
    document.getElementById("popup-modal").classList.remove("invisible");
    document.getElementById("popup-modal").classList.add("animate-slide-up");
  }, 3000);

  document
    .getElementById("popup-modal")
    .addEventListener("click", function (event) {
      // If the click is on the modal overlay (background) and not the modal content
      if (event.target === this) {
        closePopUpModal();
      }
    });
});

// Close modal function
function closePopUpModal() {
  document.getElementById("popup-modal").classList.add("hidden");
}
