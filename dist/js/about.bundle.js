webpackJsonp([2],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/sprite.svg";

/***/ }),
/* 6 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!function(root, factory) {
     true ? // AMD. Register as an anonymous module unless amdModuleId is set
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
        return root.svg4everybody = factory();
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : "object" == typeof module && module.exports ? // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory() : root.svg4everybody = factory();
}(this, function() {
    /*! svg4everybody v2.1.9 | github.com/jonathantneal/svg4everybody */
    function embed(parent, svg, target) {
        // if the target exists
        if (target) {
            // create a document fragment to hold the contents of the target
            var fragment = document.createDocumentFragment(), viewBox = !svg.hasAttribute("viewBox") && target.getAttribute("viewBox");
            // conditionally set the viewBox on the svg
            viewBox && svg.setAttribute("viewBox", viewBox);
            // copy the contents of the clone into the fragment
            for (// clone the target
            var clone = target.cloneNode(!0); clone.childNodes.length; ) {
                fragment.appendChild(clone.firstChild);
            }
            // append the fragment into the svg
            parent.appendChild(fragment);
        }
    }
    function loadreadystatechange(xhr) {
        // listen to changes in the request
        xhr.onreadystatechange = function() {
            // if the request is ready
            if (4 === xhr.readyState) {
                // get the cached html document
                var cachedDocument = xhr._cachedDocument;
                // ensure the cached html document based on the xhr response
                cachedDocument || (cachedDocument = xhr._cachedDocument = document.implementation.createHTMLDocument(""), 
                cachedDocument.body.innerHTML = xhr.responseText, xhr._cachedTarget = {}), // clear the xhr embeds list and embed each item
                xhr._embeds.splice(0).map(function(item) {
                    // get the cached target
                    var target = xhr._cachedTarget[item.id];
                    // ensure the cached target
                    target || (target = xhr._cachedTarget[item.id] = cachedDocument.getElementById(item.id)), 
                    // embed the target into the svg
                    embed(item.parent, item.svg, target);
                });
            }
        }, // test the ready state change immediately
        xhr.onreadystatechange();
    }
    function svg4everybody(rawopts) {
        function oninterval() {
            // while the index exists in the live <use> collection
            for (// get the cached <use> index
            var index = 0; index < uses.length; ) {
                // get the current <use>
                var use = uses[index], parent = use.parentNode, svg = getSVGAncestor(parent), src = use.getAttribute("xlink:href") || use.getAttribute("href");
                if (!src && opts.attributeName && (src = use.getAttribute(opts.attributeName)), 
                svg && src) {
                    if (polyfill) {
                        if (!opts.validate || opts.validate(src, svg, use)) {
                            // remove the <use> element
                            parent.removeChild(use);
                            // parse the src and get the url and id
                            var srcSplit = src.split("#"), url = srcSplit.shift(), id = srcSplit.join("#");
                            // if the link is external
                            if (url.length) {
                                // get the cached xhr request
                                var xhr = requests[url];
                                // ensure the xhr request exists
                                xhr || (xhr = requests[url] = new XMLHttpRequest(), xhr.open("GET", url), xhr.send(), 
                                xhr._embeds = []), // add the svg and id as an item to the xhr embeds list
                                xhr._embeds.push({
                                    parent: parent,
                                    svg: svg,
                                    id: id
                                }), // prepare the xhr ready state change event
                                loadreadystatechange(xhr);
                            } else {
                                // embed the local id into the svg
                                embed(parent, svg, document.getElementById(id));
                            }
                        } else {
                            // increase the index when the previous value was not "valid"
                            ++index, ++numberOfSvgUseElementsToBypass;
                        }
                    }
                } else {
                    // increase the index when the previous value was not "valid"
                    ++index;
                }
            }
            // continue the interval
            (!uses.length || uses.length - numberOfSvgUseElementsToBypass > 0) && requestAnimationFrame(oninterval, 67);
        }
        var polyfill, opts = Object(rawopts), newerIEUA = /\bTrident\/[567]\b|\bMSIE (?:9|10)\.0\b/, webkitUA = /\bAppleWebKit\/(\d+)\b/, olderEdgeUA = /\bEdge\/12\.(\d+)\b/, edgeUA = /\bEdge\/.(\d+)\b/, inIframe = window.top !== window.self;
        polyfill = "polyfill" in opts ? opts.polyfill : newerIEUA.test(navigator.userAgent) || (navigator.userAgent.match(olderEdgeUA) || [])[1] < 10547 || (navigator.userAgent.match(webkitUA) || [])[1] < 537 || edgeUA.test(navigator.userAgent) && inIframe;
        // create xhr requests object
        var requests = {}, requestAnimationFrame = window.requestAnimationFrame || setTimeout, uses = document.getElementsByTagName("use"), numberOfSvgUseElementsToBypass = 0;
        // conditionally start the interval if the polyfill is active
        polyfill && oninterval();
    }
    function getSVGAncestor(node) {
        for (var svg = node; "svg" !== svg.nodeName.toLowerCase() && (svg = svg.parentNode); ) {}
        return svg;
    }
    return svg4everybody;
});

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__preloadImages__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__animation_countUp__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__animation_countUp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__animation_countUp__);

 // принимает url бэкграуднов чтобы они тоже отслеживались

/* harmony default export */ __webpack_exports__["a"] = (function (urlBgImages = []) {
  const preloader = document.querySelector(".preloader"),
        preloaderText = document.querySelector(".preloader__text"),
        wrapper = document.querySelector(".wrapper");
  let implicitImages = [...document.images],
      //массив картинок которые на странице в виде тегов img
  implicitImagesCount = implicitImages.length,
      //длинна массива картинок
  imagesLoaded = 0; // переменная процентов

  let percent = Math.round(imagesLoaded / (urlBgImages.length + implicitImagesCount) * 100);
  preloaderText.innerHTML = percent; // заведем переменную старых процентов до прибавления новых

  let oldPercent = 0; // функция колбек на загрузку одной из картинок, когда картинка (одна) загрузится эта функция вополнится

  function procentCount() {
    imagesLoaded++; //запомним старое состояние percent

    oldPercent = percent; // и найдем новое значение precent

    percent = Math.round(imagesLoaded / (urlBgImages.length + implicitImagesCount) * 100); // countIt(oldPercent, percent, preloaderText, 2000000000, "linear");

    let numAnim = new __WEBPACK_IMPORTED_MODULE_1__animation_countUp___default.a("preloader__text", oldPercent, percent, 0, 3);

    if (!numAnim.error) {
      numAnim.start();
    } else {
      console.error(numAnim.error);
    }
  } //передаем этой функции массив картинок явных в разметке, и массив bg картинок
  // она их собререт и поставит обработчкики на картинки


  Object(__WEBPACK_IMPORTED_MODULE_0__preloadImages__["a" /* default */])(implicitImages, urlBgImages, procentCount); // // убираем прелоадер когда страница загрузилась
  // window.addEventListener("load", function() {
  //////////////////////////////
  // если прошло 3 сек то снимаем прелодаер

  setTimeout(function () {
    wrapper.classList.add("wrapper--loaded");
    preloader.classList.add("preloader--hidden"); // анимация для плашки страницы index

    let flipper = document.querySelector(".flipper__wrapper");

    if (flipper) {
      flipper.classList.add("flipper__wrapper--zoomTop");
    }
  }, 3000); ////////////////////////
  // });
});

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = preloadImages;
//функция для прелоада картинок
// собирает все картиник со страницы, явные и бг и ставит им src и ставит обработчкики на функции
// implicitImages - картинки на странице
// arrayUrl - бэкграунд или какие то другие картинки
function preloadImages(implicitImages, arrayUrl, imageHandler) {
  // создаем новый массив элементов img
  let bgImageArray = [],
      allImagesOnPage = [],
      implicitImagesCount = implicitImages.length; //длинна массива картинок

  for (let i = 0; i < arrayUrl.length; i++) {
    bgImageArray.push(new Image());
  } // // ставим обработчки на  элементы  которые bg общего массива картинок


  allImagesOnPage = implicitImages.concat(bgImageArray);
  allImagesOnPage.forEach(function (item) {
    // console.log(item);
    item.addEventListener("load", imageHandler);
  }); // ставим src для картинок которые бэкграунд (src берем из массва который был передан как аргумент )

  for (let i = implicitImagesCount; i < allImagesOnPage.length; i++) {
    allImagesOnPage[i].src = arrayUrl[i - implicitImagesCount];
  }
}

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports === "object") {
    module.exports = factory(require, exports, module);
  } else {
    root.CountUp = factory();
  }
})(this, function (require, exports, module) {
  /*
  
      countUp.js
      by @inorganik
  
  */
  // target = id of html element or var of previously selected html element where counting occurs
  // startVal = the value you want to begin at
  // endVal = the value you want to arrive at
  // decimals = number of decimal places, default 0
  // duration = duration of animation in seconds, default 2
  // options = optional object of options (see below)
  var CountUp = function (target, startVal, endVal, decimals, duration, options) {
    var self = this;

    self.version = function () {
      return "1.9.3";
    }; // default options


    self.options = {
      useEasing: true,
      // toggle easing
      useGrouping: true,
      // 1,000,000 vs 1000000
      separator: ",",
      // character to use as a separator
      decimal: ".",
      // character to use as a decimal
      easingFn: easeOutExpo,
      // optional custom easing function, default is Robert Penner's easeOutExpo
      formattingFn: formatNumber,
      // optional custom formatting function, default is formatNumber above
      prefix: "",
      // optional text before the result
      suffix: "",
      // optional text after the result
      numerals: [] // optionally pass an array of custom numerals for 0-9

    }; // extend default options with passed options object

    if (options && typeof options === "object") {
      for (var key in self.options) {
        if (options.hasOwnProperty(key) && options[key] !== null) {
          self.options[key] = options[key];
        }
      }
    }

    if (self.options.separator === "") {
      self.options.useGrouping = false;
    } else {
      // ensure the separator is a string (formatNumber assumes this)
      self.options.separator = "" + self.options.separator;
    } // make sure requestAnimationFrame and cancelAnimationFrame are defined
    // polyfill for browsers without native support
    // by Opera engineer Erik Möller


    var lastTime = 0;
    var vendors = ["webkit", "moz", "ms", "o"];

    for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
      window.requestAnimationFrame = window[vendors[x] + "RequestAnimationFrame"];
      window.cancelAnimationFrame = window[vendors[x] + "CancelAnimationFrame"] || window[vendors[x] + "CancelRequestAnimationFrame"];
    }

    if (!window.requestAnimationFrame) {
      window.requestAnimationFrame = function (callback, element) {
        var currTime = new Date().getTime();
        var timeToCall = Math.max(0, 16 - (currTime - lastTime));
        var id = window.setTimeout(function () {
          callback(currTime + timeToCall);
        }, timeToCall);
        lastTime = currTime + timeToCall;
        return id;
      };
    }

    if (!window.cancelAnimationFrame) {
      window.cancelAnimationFrame = function (id) {
        clearTimeout(id);
      };
    }

    function formatNumber(num) {
      var neg = num < 0,
          x,
          x1,
          x2,
          x3,
          i,
          len;
      num = Math.abs(num).toFixed(self.decimals);
      num += "";
      x = num.split(".");
      x1 = x[0];
      x2 = x.length > 1 ? self.options.decimal + x[1] : "";

      if (self.options.useGrouping) {
        x3 = "";

        for (i = 0, len = x1.length; i < len; ++i) {
          if (i !== 0 && i % 3 === 0) {
            x3 = self.options.separator + x3;
          }

          x3 = x1[len - i - 1] + x3;
        }

        x1 = x3;
      } // optional numeral substitution


      if (self.options.numerals.length) {
        x1 = x1.replace(/[0-9]/g, function (w) {
          return self.options.numerals[+w];
        });
        x2 = x2.replace(/[0-9]/g, function (w) {
          return self.options.numerals[+w];
        });
      }

      return (neg ? "-" : "") + self.options.prefix + x1 + x2 + self.options.suffix;
    } // Robert Penner's easeOutExpo


    function easeOutExpo(t, b, c, d) {
      return c * (-Math.pow(2, -10 * t / d) + 1) * 1024 / 1023 + b;
    }

    function ensureNumber(n) {
      return typeof n === "number" && !isNaN(n);
    }

    self.initialize = function () {
      if (self.initialized) return true;
      self.error = "";
      self.d = typeof target === "string" ? document.getElementById(target) : target;

      if (!self.d) {
        self.error = "[CountUp] target is null or undefined";
        return false;
      }

      self.startVal = Number(startVal);
      self.endVal = Number(endVal); // error checks

      if (ensureNumber(self.startVal) && ensureNumber(self.endVal)) {
        self.decimals = Math.max(0, decimals || 0);
        self.dec = Math.pow(10, self.decimals);
        self.duration = Number(duration) * 1000 || 2000;
        self.countDown = self.startVal > self.endVal;
        self.frameVal = self.startVal;
        self.initialized = true;
        return true;
      } else {
        self.error = "[CountUp] startVal (" + startVal + ") or endVal (" + endVal + ") is not a number";
        return false;
      }
    }; // Print value to target


    self.printValue = function (value) {
      var result = self.options.formattingFn(value);

      if (self.d.tagName === "INPUT") {
        this.d.value = result;
      } else if (self.d.tagName === "text" || self.d.tagName === "tspan") {
        this.d.textContent = result;
      } else {
        this.d.innerHTML = result;
      }
    };

    self.count = function (timestamp) {
      if (!self.startTime) {
        self.startTime = timestamp;
      }

      self.timestamp = timestamp;
      var progress = timestamp - self.startTime;
      self.remaining = self.duration - progress; // to ease or not to ease

      if (self.options.useEasing) {
        if (self.countDown) {
          self.frameVal = self.startVal - self.options.easingFn(progress, 0, self.startVal - self.endVal, self.duration);
        } else {
          self.frameVal = self.options.easingFn(progress, self.startVal, self.endVal - self.startVal, self.duration);
        }
      } else {
        if (self.countDown) {
          self.frameVal = self.startVal - (self.startVal - self.endVal) * (progress / self.duration);
        } else {
          self.frameVal = self.startVal + (self.endVal - self.startVal) * (progress / self.duration);
        }
      } // don't go past endVal since progress can exceed duration in the last frame


      if (self.countDown) {
        self.frameVal = self.frameVal < self.endVal ? self.endVal : self.frameVal;
      } else {
        self.frameVal = self.frameVal > self.endVal ? self.endVal : self.frameVal;
      } // decimal


      self.frameVal = Math.round(self.frameVal * self.dec) / self.dec; // format and print value

      self.printValue(self.frameVal); // whether to continue

      if (progress < self.duration) {
        self.rAF = requestAnimationFrame(self.count);
      } else {
        if (self.callback) self.callback();
      }
    }; // start your animation


    self.start = function (callback) {
      if (!self.initialize()) return;
      self.callback = callback;
      self.rAF = requestAnimationFrame(self.count);
    }; // toggles pause/resume animation


    self.pauseResume = function () {
      if (!self.paused) {
        self.paused = true;
        cancelAnimationFrame(self.rAF);
      } else {
        self.paused = false;
        delete self.startTime;
        self.duration = self.remaining;
        self.startVal = self.frameVal;
        requestAnimationFrame(self.count);
      }
    }; // reset to startVal so animation can be run again


    self.reset = function () {
      self.paused = false;
      delete self.startTime;
      self.initialized = false;

      if (self.initialize()) {
        cancelAnimationFrame(self.rAF);
        self.printValue(self.startVal);
      }
    }; // pass a new endVal and start animation


    self.update = function (newEndVal) {
      if (!self.initialize()) return;
      newEndVal = Number(newEndVal);

      if (!ensureNumber(newEndVal)) {
        self.error = "[CountUp] update() - new endVal is not a number: " + newEndVal;
        return;
      }

      self.error = "";
      if (newEndVal === self.frameVal) return;
      cancelAnimationFrame(self.rAF);
      self.paused = false;
      delete self.startTime;
      self.startVal = self.frameVal;
      self.endVal = newEndVal;
      self.countDown = self.startVal > self.endVal;
      self.rAF = requestAnimationFrame(self.count);
    }; // format startVal on initialization


    if (self.initialize()) self.printValue(self.startVal);
  };

  return CountUp;
});

/***/ }),
/* 11 */,
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/avatar_my.jpg";

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = animate_Text;
function animate_Text(elem, delay) {
  elem.parentElement.style.display = "none";
  setTimeout(() => {
    //найдем текс внутри элемента
    let text = elem.innerText; // заменить каждую букву на новую разметку

    elem.parentElement.style.display = "block";
    elem.innerHTML = text.replace(/./g, '<span class="new">$&</span>'); // найти все элементы в контексте  и поставить на них settimeout

    elem.querySelectorAll("span.new").forEach(function (item, index) {
      setTimeout(function () {
        item.classList.add("div_opacity");
      }, 40 * index);
    });
  }, delay);
}

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = scrollIt;
// функция скролла
function scrollIt(destination, duration = 200, easing = "linear", callback) {
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

  }; // Определение координаты элемента по вертикали от начала документа

  function pageY(elem) {
    return elem.offsetParent ? elem.offsetTop + pageY(elem.offsetParent) : elem.offsetTop;
  }

  const start = window.pageYOffset;
  const startTime = "now" in window.performance ? performance.now() : new Date().getTime();
  const documentHeight = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight);
  const windowHeight = window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName("body")[0].clientHeight;
  const destinationOffset = typeof destination === "number" ? destination : pageY(destination);
  const destinationOffsetToScroll = Math.round(documentHeight - destinationOffset < windowHeight ? documentHeight - windowHeight : destinationOffset);

  if ("requestAnimationFrame" in window === false) {
    window.scroll(0, destinationOffsetToScroll);

    if (callback) {
      callback();
    }

    return;
  }

  function scroll() {
    const now = "now" in window.performance ? performance.now() : new Date().getTime();
    const time = Math.min(1, (now - startTime) / duration);
    const timeFunction = easings[easing](time); // эта функция скролит по чуть чуть

    window.scroll(0, Math.ceil(timeFunction * (destinationOffsetToScroll - start) + start)); //усоловие если время истекло, то поставь в конечную точку анимации

    if (duration <= now - startTime) {
      return;
    } // это условие проверяет условие кончилась ли аницация. в данном случае проверяет дошли ли до точки назначения


    if (window.pageYOffset === destinationOffsetToScroll) {
      if (callback) {
        callback();
      }

      return;
    } // эта функция запускает следующую итерацию анимации


    requestAnimationFrame(scroll);
  }

  scroll();
}

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = initHamburger;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__js_modules_animation_textShowAnimation__ = __webpack_require__(13);

function initHamburger() {
  let hamburgerLink = document.querySelector(".hamburger"),
      pagesLinks = [...document.querySelectorAll(".pages-list__link")];

  if (hamburgerLink) {
    hamburgerLink.addEventListener("click", e => {
      e.preventDefault(); // добавляем класс или убириаем активный класс у hamburger

      hamburgerLink.classList.toggle("hamburger--plus");

      if (hamburgerLink.classList.contains("hamburger--plus")) {
        pagesLinks.forEach(item => {
          Object(__WEBPACK_IMPORTED_MODULE_0__js_modules_animation_textShowAnimation__["a" /* default */])(item, 1000);
        });
      } // расставляем активные классы на другие связанные элементы


      document.querySelector(".header__pages-wrapper").classList.toggle("header__pages-wrapper--visible");
      document.querySelector(".header__hamburger-menu").classList.toggle("header__hamburger-menu--z-indexed");
      document.querySelector("body").classList.toggle("body--overflow-hidden");
    });
  }
}

/***/ }),
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = initMap;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__resizeHandler__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pointers__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mapStyle__ = __webpack_require__(44);



function initMap() {
  // координаты центра карты
  var center = {
    lat: 55.829757698210756,
    lng: 37.30013966560364
  }; // instanse карты с его настройками

  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: center,
    // стили импортируем из другого модуля
    styles: __WEBPACK_IMPORTED_MODULE_2__mapStyle__["a" /* default */]
  }); //запускаем установку маркеров и передаем instance карты в которую устанавливать

  Object(__WEBPACK_IMPORTED_MODULE_1__pointers__["a" /* default */])(map);
}

/***/ }),
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__img_avatar_my_jpg__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__img_avatar_my_jpg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__img_avatar_my_jpg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__icons_sprite_sprite_svg__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__icons_sprite_sprite_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__icons_sprite_sprite_svg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_normalize_css__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_normalize_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_normalize_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__node_modules_svg4everybody_dist_svg4everybody__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__node_modules_svg4everybody_dist_svg4everybody___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__node_modules_svg4everybody_dist_svg4everybody__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__js_modules_map___ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__js_modules_hamburger__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__js_modules_animation_scrollIt__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__js_modules_preloader__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__js_modules_skillAnimation__ = __webpack_require__(45);
/*---images and svg---*/


/*---styles---*/



__webpack_require__(6);
/*---js---*/



__WEBPACK_IMPORTED_MODULE_3__node_modules_svg4everybody_dist_svg4everybody___default()();
/*---js modules---*/





 // запускаем скрипты только тогда, когда весь ДОМ уже готов к работе

document.addEventListener("DOMContentLoaded", function (event) {
  Object(__WEBPACK_IMPORTED_MODULE_7__js_modules_preloader__["a" /* default */])(["images/water.jpg"]); // console.log("dom ready");
  // устанавливаем обработчик для стрелки

  document.querySelector(".bottom-arrow").addEventListener("click", () => {
    Object(__WEBPACK_IMPORTED_MODULE_6__js_modules_animation_scrollIt__["a" /* default */])(document.querySelector(".main"), 500, "easeOutQuad");
  });
  Object(__WEBPACK_IMPORTED_MODULE_5__js_modules_hamburger__["a" /* default */])(); // выведем в глобальную область функцию initMap

  window.initMap = __WEBPACK_IMPORTED_MODULE_4__js_modules_map___["a" /* default */];
});

/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(24);
 //по ресайзу окна заново запустить функцию initMap

(function () {
  window.addEventListener("resize", resizeThrottler, false);
  var resizeTimeout;

  function resizeThrottler() {
    // ignore resize events as long as an actualResizeHandler execution is in the queue
    if (!resizeTimeout) {
      resizeTimeout = setTimeout(function () {
        resizeTimeout = null;
        actualResizeHandler(); // The actualResizeHandler will execute at a rate of 15fps
      }, 66);
    }
  }

  function actualResizeHandler() {
    Object(__WEBPACK_IMPORTED_MODULE_0__index__["a" /* default */])();
  }
})();

/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__icons_i_map_marker_svg__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__icons_i_map_marker_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__icons_i_map_marker_svg__);

/* harmony default export */ __webpack_exports__["a"] = (function (map) {
  let pointer = {
    lat: 55.83918707426455,
    lng: 37.29892194271088
  },
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
  marker.addListener("click", function () {
    infowindow.open(map, marker);
  });
});

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/map_marker.svg";

/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ([{
  featureType: "administrative",
  elementType: "labels.text.fill",
  stylers: [{
    color: "#444444"
  }]
}, {
  featureType: "landscape",
  elementType: "all",
  stylers: [{
    color: "#f2f2f2"
  }]
}, {
  featureType: "poi",
  elementType: "all",
  stylers: [{
    visibility: "off"
  }]
}, {
  featureType: "road",
  elementType: "all",
  stylers: [{
    saturation: "-100"
  }, {
    lightness: "1"
  }, {
    gamma: "1.44"
  }, {
    weight: "2.70"
  }]
}, {
  featureType: "road.highway",
  elementType: "all",
  stylers: [{
    visibility: "simplified"
  }]
}, {
  featureType: "road.arterial",
  elementType: "labels.icon",
  stylers: [{
    visibility: "off"
  }]
}, {
  featureType: "transit",
  elementType: "all",
  stylers: [{
    visibility: "off"
  }]
}, {
  featureType: "water",
  elementType: "all",
  stylers: [{
    color: "#86a77a"
  }, {
    visibility: "on"
  }]
}]);

/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony default export */ var _unused_webpack_default_export = ((function () {
  // добавляем обработчик на скрол
  document.addEventListener("scroll", skillAnimation); // Определение координаты элемента по вертикали от начала документа

  function pageY(elem) {
    return elem.offsetParent ? elem.offsetTop + pageY(elem.offsetParent) : elem.offsetTop;
  } // фукнция которая каждый раз проверяет где находится скролл


  function skillAnimation() {
    // находим скролл относительно всего документа
    let scrollPos = window.pageYOffset || document.documentElement.scrollTop,
        // массив svg колец у которых есть стайл dasharray
    svgCircles = [...document.querySelectorAll(".about-me__outer-circle")],
        aboutMe = document.querySelector(".about-me"); // если прокрутка дошла до необходимого элемента запускаем анимацию на svg

    if (pageY(aboutMe) - 100 <= scrollPos) {
      // снимаем обработчик на скрол
      document.removeEventListener("scroll", skillAnimation); // И ставим всем элементам анимацию

      svgCircles.forEach(function (item, index) {
        setTimeout(function () {
          let requiredNumber = item.getAttribute("data-percent"),
              // +item.style.strokeDasharray.match(/\d+/)[0],
          startNumber = 0,
              // постивим повтяряющуюся функцию чтобы она прибавляла значение каждый промежуток времени
          intervalCountSvg = setInterval(setTime, 10);

          function setTime() {
            if (startNumber >= requiredNumber) {
              // если сравнялись числа то сбрасываем интревал
              clearInterval(intervalCountSvg);
            } else {
              // если нет, то прибавляем еще единицу
              ++startNumber;
              item.style.strokeDasharray = `${startNumber}, 185`;
            }
          }
        }, 40 * index);
      });
    }
  }
})());

/***/ })
],[40]);