import textAnimation from "../js_modules/animation/textShowAnimation";

export default function initHamburger() {
  let hamburgerLink = document.querySelector(".hamburger"),
    pagesLinks = [...document.querySelectorAll(".pages-list__link")];
  if (hamburgerLink) {
    hamburgerLink.addEventListener("click", e => {
      e.preventDefault();
      // добавляем класс или убириаем активный класс у hamburger
      hamburgerLink.classList.toggle("hamburger--plus");

      if (hamburgerLink.classList.contains("hamburger--plus")) {
        pagesLinks.forEach(item => {
          textAnimation(item, 1000);
        });
      }

      // расставляем активные классы на другие связанные элементы
      document
        .querySelector(".header__pages-wrapper")
        .classList.toggle("header__pages-wrapper--visible");
      document
        .querySelector(".header__hamburger-menu")
        .classList.toggle("header__hamburger-menu--z-indexed");
      document.querySelector("body").classList.toggle("body--overflow-hidden");
    });
  }
}
