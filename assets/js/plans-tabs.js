function initTabs() {
  let tabs = document.querySelectorAll('#default-tab [role="tab"]');
  let panels = document.querySelectorAll(
    '#default-tab-content [role="tabpanel"]'
  );

  // Set the first tab as active and make the first panel visible
  tabs[0].classList.add("active-plan");
  panels[0].classList.remove("hidden");

  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
      // Remove active state and hide all panels
      tabs.forEach((t) => t.classList.remove("active-plan"));
      panels.forEach((panel) => panel.classList.add("hidden"));

      // Activate clicked tab and show corresponding panel
      tab.classList.add("active-plan");
      panels[index].classList.remove("hidden");
    });
  });
}

document.addEventListener("DOMContentLoaded", initTabs);
