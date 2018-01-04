// Определение координаты элемента по вертикали от начала документа
export default function pageY(elem) {
  return elem.offsetParent
    ? elem.offsetTop + pageY(elem.offsetParent)
    : elem.offsetTop;
}
