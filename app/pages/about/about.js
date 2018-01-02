/*---styles---*/
import "normalize.css";
require("../../sass/base.scss");

/*---js---*/
import svg4everybody from "../../../node_modules/svg4everybody/dist/svg4everybody";

svg4everybody();
/*---js modules---*/
import initMap from "../../js_modules/map";
import initHamburger from "../../js_modules/hamburger";
import scrollIt from "../../js_modules/animation/scrollIt";
import preloader from "../../js_modules/preloader";
// устанавливаем обработчик для стрелки

// запускаем скрипты только тогда, когда весь ДОМ уже готов к работе
document.addEventListener("DOMContentLoaded", function(event) {
  preloader(["images/water.jpg"]);
  console.log("dom ready");

  document.querySelector(".bottom-arrow").addEventListener("click", () => {
    scrollIt(document.querySelector(".main"), 500, "easeOutQuad");
  });
  initHamburger();
  initMap();
});
