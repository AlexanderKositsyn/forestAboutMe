const axios = require("axios");
import getAllCookiesToObject from "./cookieToObject";

export default function authorizationButtonInit() {
  let button = document.querySelector(".authorization-button");
  button.addEventListener("click", e => {
    e.preventDefault();
    e.stopPropagation();
    // найдем все куки
    let allCookie = getAllCookiesToObject();
    // проверим есть ли куки админа(это не куки сесии)
    if (allCookie.hasOwnProperty("admin")) {
      window.location = "/admin.html";
      return;
    }
    // если не прошла проверка по куки, то открой блок авторизации
    // меняем класс на flipper - элемент который самый родительский для флипера
    document.querySelector(".flipper").classList.toggle("flipped");
    e.currentTarget.classList.toggle("authorization-button--hidden");
  });
}
