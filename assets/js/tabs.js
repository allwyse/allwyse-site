function setState(state) {
  // Handle content visibility
  const tabContents = document.querySelectorAll(".tab-content");
  tabContents.forEach((content) => {
    if (content.dataset.state === state) {
      content.classList.remove("hidden");
      content.classList.add("active");
    } else {
      content.classList.add("hidden");
      content.classList.remove("active");
    }
  });

  // Handle tab styling
  const tabButtons = document.querySelectorAll(".tab-button");
  tabButtons.forEach((btn) => {
    const isActive = btn.dataset.tab === state;
    btn.classList.toggle("active", isActive);
    btn.classList.toggle("text-gray-900", isActive);
    btn.classList.toggle("text-gray-500", !isActive);

    const indicator = btn.querySelector("span");
    if (indicator) indicator.remove();

    if (isActive) {
      btn.appendChild(createIndicator());
    }
  });
}

function createIndicator() {
  const indicator = document.createElement("span");
  indicator.className = "absolute -bottom-px left-0 w-full h-0.5 bg-gray-900";
  return indicator;
}

// Initial state
setState("clients");

document.querySelectorAll(".tab-button").forEach((btn) => {
  btn.addEventListener("click", () => setState(btn.dataset.tab));
});
