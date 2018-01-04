import "./resizeHandler";
import pointers from "./pointers";
import mapStyle from "./mapStyle";

export default function initMap() {
  // координаты центра карты
  var center = { lat: 55.829757698210756, lng: 37.30013966560364 };

  // instanse карты с его настройками
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: center,
    // стили импортируем из другого модуля
    styles: mapStyle
  });
  //запускаем установку маркеров и передаем instance карты в которую устанавливать
  pointers(map);
}
