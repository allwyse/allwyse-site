document.getElementById("hamburger").addEventListener("click", function () {
  document.getElementById("mobileMenu").classList.remove("translate-x-full");

  document.getElementById("header").classList.add("display-none");
});

document.getElementById("closeMenu").addEventListener("click", function () {
  document.getElementById("mobileMenu").classList.add("translate-x-full");
  document.getElementById("header").classList.remove("display-none");
});
