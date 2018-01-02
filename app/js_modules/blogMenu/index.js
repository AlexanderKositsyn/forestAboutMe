import articleClickScroll from "./articleClickScroll";
import scrollMenu from "./scrollMenu";
import swipeMenuClick from "./swipeMenuClick";
import scrollIt from "../animation/scrollIt";

export default function() {
  swipeMenuClick();
  articleClickScroll(scrollIt);
  scrollMenu(scrollIt);
}
