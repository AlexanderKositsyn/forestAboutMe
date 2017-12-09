export default function authorizationButtonInit() {
  let button = document.querySelector(".authorization-button");
  button.addEventListener("click", function(e) {
    e.preventDefault();
    e.currentTarget.classList.toggle("authorization-button--hidden");
    document.querySelector(".welcome").classList.toggle("welcome--hidden");
    document
      .querySelector(".authorization")
      .classList.toggle("authorization--visible");
  });
}
