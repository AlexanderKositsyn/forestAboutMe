/*--images---*/
import "../../img/water.jpg";
import "../../img/water-maps.jpg";
import "../../icons/sprite/sprite.svg";

/*---styles---*/
import "normalize.css";
import "../../sass/base.scss";

/*---js---*/
import svg4everybody from "../../../node_modules/svg4everybody/dist/svg4everybody";

/*---js modules---*/
import preloader from "../../js_modules/preloader";
import authorizationButtonInit from "../../js_modules/authorization-button";
import welcome from "../../js_modules/welcome";
import formValidation from "../../js_modules/formValidator";

// запускаем скрипты только тогда, когда весь ДОМ уже готов к работе
document.addEventListener("DOMContentLoaded", function(event) {
  preloader(["images/water.jpg", "images/water-maps.jpg"]);
  welcome();
  authorizationButtonInit();
  svg4everybody();
  formValidation();
});
