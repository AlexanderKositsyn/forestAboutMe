export default function(scrollIt) {
  let listTitleArticles = document.querySelector(".articles-nav__list");
  let itemTitleArticles = document.querySelector(".articles-nav__item");
  let navArticle = document.querySelector(".articles-nav");
  listTitleArticles.addEventListener("click", function(e) {
    if (e.target.tagName == "LI") {
      // возьмем аттрибут в навигационного меню
      let numberItem = e.target.getAttribute("data-scroll-to");

      // найдем в DOm коллекции тот элемент на который хотим перейти
      let articleItem = document.querySelectorAll(".article-list__item")[
        numberItem
      ];
      // убираем меню
      navArticle.classList.remove("articles-nav--swiped");
      // и перейдем к нему
      scrollIt(articleItem, 200, "linear", function() {});
    }
  });
}
