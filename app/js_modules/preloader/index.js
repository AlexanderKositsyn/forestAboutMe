import preloadImages from "./preloadImages";
import CountUp from "../animation/countUp";
// принимает url бэкграуднов чтобы они тоже отслеживались
export default function(urlBgImages = []) {
  const preloader = document.querySelector(".preloader"),
    preloaderText = document.querySelector(".preloader__text"),
    wrapper = document.querySelector(".wrapper");
  let implicitImages = [...document.images], //массив картинок которые на странице в виде тегов img
    implicitImagesCount = implicitImages.length, //длинна массива картинок
    imagesLoaded = 0;

  // переменная процентов
  let percent = Math.round(
    imagesLoaded / (urlBgImages.length + implicitImagesCount) * 100
  );
  preloaderText.innerHTML = percent;
  // заведем переменную старых процентов до прибавления новых
  let oldPercent = 0;

  // функция колбек на загрузку одной из картинок, когда картинка (одна) загрузится эта функция вополнится
  function procentCount() {
    imagesLoaded++;

    //запомним старое состояние percent
    oldPercent = percent;
    // и найдем новое значение precent
    percent = Math.round(
      imagesLoaded / (urlBgImages.length + implicitImagesCount) * 100
    );
    // countIt(oldPercent, percent, preloaderText, 2000000000, "linear");

    let numAnim = new CountUp("preloader__text", oldPercent, percent, 0, 3);
    if (!numAnim.error) {
      numAnim.start();
    } else {
      console.error(numAnim.error);
    }
  }
  //передаем этой функции массив картинок явных в разметке, и массив bg картинок
  // она их собререт и поставит обработчкики на картинки
  preloadImages(implicitImages, urlBgImages, procentCount);

  // // убираем прелоадер когда страница загрузилась
  // window.addEventListener("load", function() {
  //////////////////////////////

  // если прошло 3 сек то снимаем прелодаер
  setTimeout(function() {
    wrapper.classList.add("wrapper--loaded");
    preloader.classList.add("preloader--hidden");
    // анимация для плашки страницы index
    let flipper = document.querySelector(".flipper__wrapper");
    if (flipper) {
      flipper.classList.add("flipper__wrapper--zoomTop");
    }
  }, 3000);

  ////////////////////////
  // });
}
