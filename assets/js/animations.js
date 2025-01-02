document.addEventListener("DOMContentLoaded", () => {
  // COUNTDOWN
  function updateCountdown() {
    const targetDate = new Date("2025-01-31T23:59:59").getTime();

    const now = new Date().getTime();
    const difference = targetDate - now;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    document.getElementById(
      "countdown"
    ).innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  }

  // Update countdown every second
  updateCountdown();
  setInterval(updateCountdown, 1000);

  // ANIMATIONS
  const idsToObserve = [
    "animatedImageHero",
    "services-image",
    "calendar-image",
    "analytics-image"
  ];

  const scaleInIds = ["animatedImageHero", "analytics-image"];
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (scaleInIds.includes(entry.target.id)) {
            entry.target.classList.add("animate-scale-in");
          }
          if (entry.target.id === "services-image") {
            entry.target.classList.add("animate-slide-left");
          }
          if (entry.target.id === "calendar-image") {
            entry.target.classList.add("animate-slide-right");
          }
          entry.target.classList.remove("invisible");
        }
      });
    },
    { threshold: 0 }
  );

  idsToObserve.forEach((id) => {
    const element = document.getElementById(id);
    if (element) observer.observe(element);
  });
});
