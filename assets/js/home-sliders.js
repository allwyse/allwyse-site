const swiper = new Swiper(".swiper", {
    direction: "horizontal",
    loop: !0,
    autoHeight: !0,
    autoplay: { delay: 5e3 },
    breakpoints: {
      320: { slidesPerView: 1, spaceBetween: 20 },
      480: { slidesPerView: 3, spaceBetween: 30 },
      640: { slidesPerView: 4, spaceBetween: 40 },
    },
    pagination: { el: ".swiper-pagination" },
  }),
  swiper2 = new Swiper(".swiper2", {
    direction: "horizontal",
    loop: !0,
    autoHeight: !0,
    autoplay: { delay: 5e3 },
    breakpoints: {
      320: { slidesPerView: 1, spaceBetween: 20 },
      480: { slidesPerView: 1, spaceBetween: 30 },
      640: { slidesPerView: 1, spaceBetween: 40 },
    },
    pagination: { el: ".swiper-pagination" },
  });

document
  .getElementById("toggle-switch")
  .addEventListener("change", function (e) {
    const isAnnual = e.target.checked;
    const costs = document.querySelectorAll(".cost");
    const totalCostElement = document.getElementById("total-cost");
    const billingType = document.getElementById("billing-type");

    const monthlyCosts = [20, 15, 10, 12, 20]; // Example: ChatGPT, Zoom, etc.
    const annualCosts = monthlyCosts.map((cost) => cost * 12);

    const activeCosts = isAnnual ? annualCosts : monthlyCosts;

    costs.forEach((costElement, index) => {
      costElement.textContent = `$${activeCosts[index].toFixed(2)}`;
    });

    const totalCost = activeCosts.reduce((sum, cost) => sum + cost, 0);
    totalCostElement.textContent = `$${totalCost.toFixed(2)}`;
    billingType.textContent = isAnnual ? "Annual" : "Monthly";
  });
