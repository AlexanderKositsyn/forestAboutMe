/*---styles---*/
import "normalize.css";
require("../../sass/base.scss");

/*---js---*/
import svg4everybody from "../../../node_modules/svg4everybody/dist/svg4everybody";

svg4everybody();

/*---js modules---*/
import initHamburger from "../../js_modules/hamburger";
import scrollIt from "../../js_modules/animation/scrollIt";

import "../../js_modules/blogMenu";

// устанавливаем обработчик для стрелки
document.querySelector(".bottom-arrow").addEventListener("click", () => {
  scrollIt(document.querySelector(".main"), 500, "easeOutQuad");
});
initHamburger();
