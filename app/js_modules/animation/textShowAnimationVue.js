export default function animate_Text(elem, delay, text) {
  elem.parentElement.style.display = "none";
  setTimeout(() => {
    //найдем текс внутри элемента

    // заменить каждую букву на новую разметку
    elem.parentElement.style.display = "block";
    elem.innerHTML = text.replace(/./g, '<span class="new">$&</span>');
    // найти все элементы в контексте  и поставить на них settimeout
    elem.querySelectorAll("span.new").forEach(function(item, index) {
      setTimeout(function() {
        item.classList.add("div_opacity");
      }, 40 * index);
    });
  }, delay);
}
