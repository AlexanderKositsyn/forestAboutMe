export default function() {
  let swipeButton = document.querySelector(".articles-nav__swipe");
  let navArticle = document.querySelector(".articles-nav");

  document.addEventListener("click", e => {
    if (navArticle.classList.contains("articles-nav--swiped")) {
      navArticle.classList.remove("articles-nav--swiped");
    }
  });

  navArticle.addEventListener("click", e => {
    e.stopPropagation();
  });

  swipeButton.addEventListener("click", e => {
    e.preventDefault();
    e.stopPropagation();
    navArticle.classList.toggle("articles-nav--swiped");
  });
}
