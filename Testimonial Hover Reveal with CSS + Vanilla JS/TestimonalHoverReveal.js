document.addEventListener("DOMContentLoaded", function () {

  let activeHover = null; // Track currently hovered element

  function showElement(el) {
    if (el) el.classList.add("kazukiyan-show");
  }

  function hideElement(el) {
    if (el) el.classList.remove("kazukiyan-show");
  }

  function setupHover(elementHoverId, elementShowId) {
    const elementHover = document.getElementById(elementHoverId);
    const elementShow = document.getElementById(elementShowId);

    if (elementHover && elementShow) {
      elementHover.addEventListener("mouseenter", function () {
        // Hide all testimonial boxes
        document.querySelectorAll(".kazukiyan-fade").forEach(el => hideElement(el));
        showElement(elementShow);

        // Remove shadow from the previous hovered element
        if (activeHover && activeHover !== elementHover) {
          activeHover.classList.remove("shadowperson");
        }

        // Add shadow to current hovered name
        elementHover.classList.add("shadowperson");
        activeHover = elementHover; // Update active hover
      });
    }
  }

  // Default + numbered hover pairs
  setupHover("elementHover", "defaultElementShow");

  let i = 1;
  while (true) {
    const hoverId = "elementHover" + i;
    const showId = "elementShow" + i;
    if (!document.getElementById(hoverId) || !document.getElementById(showId)) break;
    setupHover(hoverId, showId);
    i++;
  }

  // Show default testimonial on load
  const defaultEl = document.getElementById("defaultElementShow");
  if (defaultEl) showElement(defaultEl);

});
