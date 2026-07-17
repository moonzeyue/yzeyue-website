const menuToggle = document.querySelector(".menu-toggle");
const mainNavigation = document.querySelector(".main-nav");

menuToggle.addEventListener("click", () => {
  const isOpen = mainNavigation.classList.toggle("is-open");

  menuToggle.setAttribute("aria-expanded", isOpen);
});