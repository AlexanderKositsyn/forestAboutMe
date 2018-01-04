import pageY from "../helpFunctions/pageY";

export default function(scrollIt) {
  // добавляем обработчик на скрол
  document.addEventListener("scroll", onScroll);

  // фукнция которая каждый раз проверяет где находится скролл
  function onScroll(event) {
    // находим скролл относительно всего документа
    var scrollPos = window.pageYOffset || document.documentElement.scrollTop;

    // если прокрутка дошла до меню, то делаем  меню фиксорованным
    let articlesNav = document.querySelector(".articles-nav__list"),
      asideMenu = document.querySelector(".articles-nav");
    if (pageY(asideMenu) - 100 <= scrollPos) {
      articlesNav.classList.add("articles-nav__list--fixed");
    } else {
      articlesNav.classList.remove("articles-nav__list--fixed");
    }
    // ищем все статьи
    let listItems = document.querySelectorAll(".article-list__item");

    // по каждому скроллу  проверяем позицию скролла относительно документа и положения самой статьи, если скролл по документу
    // превысил положения статьи то меняем активный класс у меню статей
    [].forEach.call(listItems, function(item, index, items) {
      var currArticle = item;
      var menuLinks = document.querySelectorAll(".articles-nav__item");

      if (
        pageY(currArticle) <= scrollPos &&
        pageY(currArticle) + currArticle.offsetHeight > scrollPos
      ) {
        [].forEach.call(menuLinks, function(item) {
          item.classList.remove("articles-nav__item--active");
        });
        menuLinks[index].classList.add("articles-nav__item--active");
      } else {
        menuLinks[index].classList.remove("articles-nav__item--active");
      }
    });
  }
}
