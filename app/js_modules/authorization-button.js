export default function authorizationButtonInit() {
  let button = document.querySelector(".authorization-button");
  button.addEventListener("click", e => {
    e.preventDefault();
    // меняем класс на flipper - элемент который самый родительский для флипера
    document.querySelector(".flipper").classList.toggle("flipped");
    e.currentTarget.classList.toggle("authorization-button--hidden");
  });
}
