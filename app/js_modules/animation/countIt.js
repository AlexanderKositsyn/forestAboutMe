// функция скролла
export default function countIt(
  startNumber,
  endNumber,
  textElement,
  duration = 200,
  easing = "linear",
  callback
) {
  const easings = {
    linear(t) {
      return t;
    },
    easeInQuad(t) {
      return t * t;
    },
    easeOutQuad(t) {
      return t * (2 - t);
    },
    easeInOutQuad(t) {
      return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    },
    easeInCubic(t) {
      return t * t * t;
    },
    easeOutCubic(t) {
      return --t * t * t + 1;
    },
    easeInOutCubic(t) {
      return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
    },
    easeInQuart(t) {
      return t * t * t * t;
    },
    easeOutQuart(t) {
      return 1 - --t * t * t * t;
    },
    easeInOutQuart(t) {
      return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t;
    },
    easeInQuint(t) {
      return t * t * t * t * t;
    },
    easeOutQuint(t) {
      return 1 + --t * t * t * t * t;
    },
    easeInOutQuint(t) {
      return t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t;
    }
  };

  const startTime =
    "now" in window.performance ? performance.now() : new Date().getTime();

  function count() {
    const now =
      "now" in window.performance ? performance.now() : new Date().getTime();
    const time = Math.min(1, (now - startTime) / duration);
    const timeFunction = easings[easing](time);
    // эта функция прибавляет по единице к стартовому числу
    // ++startNumber;
    console.log(startNumber);
    startNumber = Math.ceil(
      timeFunction * (endNumber - startNumber) + startNumber
    );
    console.log(startNumber);

    //усоловие если время истекло, то поставь в конечную точку анимации
    if (duration <= now - startTime) {
      startNumber = endNumber;
      return;
    }
    //присвоим элементу в котором отображается число новое значение
    textElement.innerHTML = startNumber;
    // это условие проверяет условие кончилась ли аницация. в данном случае равна ли конечное число начальному
    if (startNumber === endNumber) {
      if (callback) {
        callback();
      }
      return;
    }
    // эта функция запускает следующую итерацию анимации
    requestAnimationFrame(count);
  }

  count(startNumber);
}
