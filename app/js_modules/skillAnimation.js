export default (function() {
  // добавляем обработчик на скрол
  document.addEventListener("scroll", skillAnimation);
  // Определение координаты элемента по вертикали от начала документа
  function pageY(elem) {
    return elem.offsetParent
      ? elem.offsetTop + pageY(elem.offsetParent)
      : elem.offsetTop;
  }

  // фукнция которая каждый раз проверяет где находится скролл
  function skillAnimation() {
    // находим скролл относительно всего документа
    let scrollPos = window.pageYOffset || document.documentElement.scrollTop,
      // массив svg колец у которых есть стайл dasharray
      svgCircles = [...document.querySelectorAll(".about-me__outer-circle")],
      aboutMe = document.querySelector(".about-me");
    // если прокрутка дошла до необходимого элемента запускаем анимацию на svg
    if (pageY(aboutMe) - 100 <= scrollPos) {
      // снимаем обработчик на скрол
      document.removeEventListener("scroll", skillAnimation);
      // И ставим всем элементам анимацию
      svgCircles.forEach(function(item, index) {
        setTimeout(function() {
          let requiredNumber = item.getAttribute("data-percent"),
            // +item.style.strokeDasharray.match(/\d+/)[0],
            startNumber = 0,
            // постивим повтяряющуюся функцию чтобы она прибавляла значение каждый промежуток времени
            intervalCountSvg = setInterval(setTime, 10);

          function setTime() {
            if (startNumber >= requiredNumber) {
              // если сравнялись числа то сбрасываем интревал
              clearInterval(intervalCountSvg);
            } else {
              // если нет, то прибавляем еще единицу
              ++startNumber;
              item.style.strokeDasharray = `${startNumber}, 185`;
            }
          }
        }, 40 * index);
      });
    }
  }
})();
