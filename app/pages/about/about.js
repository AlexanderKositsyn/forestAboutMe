/*---styles---*/
import "normalize.css";
require("../../sass/base.scss");

/*---js---*/
import svg4everybody from "../../../node_modules/svg4everybody/dist/svg4everybody";

svg4everybody();
/*---js modules---*/
import initMap from "../../js_modules/map";
import initHamburger from "../../js_modules/hamburger";
initHamburger();
initMap();