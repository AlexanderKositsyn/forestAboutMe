/*---images---*/
import "../../img/avatar_my.jpg";
import "../../icons/sprite/sprite.svg";
import "../../img/feeds_avatar1.png";
import "../../img/feeds_avatar2.png";
import "../../img/site1.png";
import "../../img/site2.png";
import "../../img/site3.png";

/*---styles---*/
import "normalize.css";
import "../../sass/base.scss";

/*---js---*/
import svg4everybody from "../../../node_modules/svg4everybody/dist/svg4everybody";
import Vue from "vue";
svg4everybody();

/*---vue components---*/
import Slider from "../../vue/slider/slider.vue";

/*---vue store---*/
import store from "../../store/store";

/*---js modules---*/
import initHamburger from "../../js_modules/hamburger";
import initBlur from "../../js_modules/blur";
import scrollIt from "../../js_modules/animation/scrollIt";
import preloader from "../../js_modules/preloader";

// запускаем скрипты только тогда, когда весь ДОМ уже готов к работе
document.addEventListener("DOMContentLoaded", function(event) {
  preloader(["images/water.jpg"]);

  // устанавливаем обработчик для стрелки
  document.querySelector(".bottom-arrow").addEventListener("click", () => {
    scrollIt(document.querySelector(".main"), 500, "easeOutQuad");
  });
  document.querySelector(".arrow-top").addEventListener("click", () => {
    scrollIt(document.querySelector(".wrapper"), 500, "easeOutQuad");
  });

  initHamburger();

  window.onload = () => {
    initBlur();
  };

  //вызываем модуль vue для слайдера
  window.vm = new Vue({
    el: "slider",
    store,
    render: h => h(Slider)
  });
});
