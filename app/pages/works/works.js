/*---styles---*/
import "normalize.css";
import "../../sass/base.scss";

/*---js---*/
import svg4everybody from "../../../node_modules/svg4everybody/dist/svg4everybody";

svg4everybody();

/*---js modules---*/
import initHamburger from "../../js_modules/hamburger";
import initBlur from "../../js_modules/blur";
import scrollIt from "../../js_modules/animation/scrollIt";

// устанавливаем обработчик для стрелки
document.querySelector(".bottom-arrow").addEventListener("click", () => {
  scrollIt(document.querySelector(".main"), 500, "easeOutQuad");
});

initHamburger();

window.onload = () => {
  initBlur();
};
