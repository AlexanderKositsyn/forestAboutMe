/*---styles---*/
import "normalize.css";
require("../../sass/base.scss");

/*---js---*/
import svg4everybody from "../../../node_modules/svg4everybody/dist/svg4everybody";

svg4everybody();

/*---js modules---*/
import preloader from "../../js_modules/preloader";
import initHamburger from "../../js_modules/hamburger";
import scrollIt from "../../js_modules/animation/scrollIt";

import initBlog from "../../js_modules/blogMenu";

// запускаем скрипты только тогда, когда весь ДОМ уже готов к работе
document.addEventListener("DOMContentLoaded", function(event) {
  preloader(["images/water.jpg"]);
  // устанавливаем обработчик для стрелки
  document.querySelector(".bottom-arrow").addEventListener("click", () => {
    scrollIt(document.querySelector(".main"), 500, "easeOutQuad");
  });

  initHamburger();
  initBlog();
});
