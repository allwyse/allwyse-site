const tabObject = {
  Sessions: "Sessions",
  Integrations: "integrations",
  Agenda: "Agenda",
  Analytics: "Analytics",
  Services: "Services",
  Chat: "Chat",
};

const validParams = [
  "Sessions",
  "Integrations",
  "Agenda",
  "Analytics",
  "Services",
  "Chat",
];

const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  autoHeight: true,
  breakpoints: {
    320: { slidesPerView: 2, spaceBetween: 20 },
    480: { slidesPerView: 3, spaceBetween: 30 },
    640: { slidesPerView: 3, spaceBetween: 40 },
    1024: { slidesPerView: 4, spaceBetween: 40 },
    1025: { slidesPerView: 6, spaceBetween: 40 },
  },
  pagination: { el: ".swiper-pagination" },
});

function showDiv(divId, buttonClicked) {
  console.log(divId, buttonClicked);
  let contents = document.querySelectorAll(".content");

  // Hide all contents and remove active animation class
  contents.forEach((content) => {
    content.classList.add("hidden");
    content.classList.remove("slide-up-active");
  });

  // Show the selected content and add active animation class
  let selectedContent = document.getElementById(divId);
  selectedContent.classList.remove("hidden");
  setTimeout(() => {
    selectedContent.classList.add("slide-up-active");
  }, 10);

  // Update the active tab button
  let tabButtons = document.querySelectorAll(".tab-button");
  tabButtons.forEach((button) => button.classList.remove("active-tab"));
  if (buttonClicked) {
    buttonClicked.classList.add("active-tab");
  }
}

// Set the initial active tab and content
const queryParam = new URLSearchParams(window.location.search);
const initialSelected = queryParam.get("selected");
let initialButton = document.querySelectorAll(".tab-button")[0];
if (
  initialSelected &&
  initialSelected !== "Sessions" &&
  validParams.includes(initialSelected)
) {
  initialButton =
    Array.from(document.querySelectorAll(".tab-button")).find((button) => {
      console.log(
        button.innerText,
        initialSelected,
        button.innerText === initialSelected
      );
      return button.innerText === initialSelected;
    }) || document.querySelectorAll(".tab-button")[0];

  document.querySelectorAll(".tab-button")[0].classList.remove("active-tab");
  showDiv(tabObject[initialSelected]);
}

initialButton.classList.add("active-tab");
