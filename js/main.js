const menuToggle = document.querySelector(".menu-toggle");
const mainNavigation = document.querySelector(".main-nav");

if (menuToggle && mainNavigation) {
  const desktopNavigation = window.matchMedia(
    "(min-width: 900px) and (hover: hover) and (pointer: fine)"
  );

  const closeMenu = () => {
    mainNavigation.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation menu");
  };

  const openMenu = () => {
    mainNavigation.classList.add("is-open");
    menuToggle.setAttribute("aria-expanded", "true");
    menuToggle.setAttribute("aria-label", "Close navigation menu");
  };

  menuToggle.addEventListener("click", () => {
    const isOpen = mainNavigation.classList.contains("is-open");

    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  document.addEventListener("click", (event) => {
    const clickedInsideMenu = mainNavigation.contains(event.target);
    const clickedToggle = menuToggle.contains(event.target);

    if (!clickedInsideMenu && !clickedToggle) {
      closeMenu();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenu();
      menuToggle.focus();
    }
  });

  desktopNavigation.addEventListener("change", (event) => {
    if (event.matches) {
      closeMenu();
    }
  });
}