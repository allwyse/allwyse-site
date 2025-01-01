document.addEventListener("DOMContentLoaded", () => {
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
