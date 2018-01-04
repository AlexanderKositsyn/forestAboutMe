import "../../icons/i/map_marker.svg";
export default function(map) {
  let pointer = { lat: 55.83918707426455, lng: 37.29892194271088 },
    image = "images/map_marker.svg";
  let contentString = `<p>Тут нахожусь я! Будем знакомы</p><br>
  Мой адресс: МО, город Красногорск, ул. Карбышева, д23 к2`;
  let infowindow = new google.maps.InfoWindow({
    content: contentString
  });

  var marker = new google.maps.Marker({
    position: pointer,
    map: map,
    icon: image,
    title: "Привет :) тут я"
  });

  marker.addListener("click", function() {
    infowindow.open(map, marker);
  });
}
