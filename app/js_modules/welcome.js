export default function() {
  let flipper = document.querySelector(".flipper");
  let authorizationButton = document.querySelector(".authorization-button");

  // обработчик чтобы вернуть на плашку приветсвия
  document.addEventListener("click", e => {
    if (flipper.classList.contains("flipped")) {
      flipper.classList.remove("flipped");
      authorizationButton.classList.remove("authorization-button--hidden");
    }
  });

  // отанавливаем распростарнение, если нажали внутри флипера
  flipper.addEventListener("click", e => {
    e.stopPropagation();
  });
}
