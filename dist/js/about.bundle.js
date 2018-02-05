webpackJsonp([3],[
/* 0 */,
/* 1 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/sprite.svg";

/***/ }),
/* 16 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 17 */
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
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__preloadImages__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__animation_countUp__ = __webpack_require__(20);
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
/* 19 */
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
/* 20 */
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
/* 21 */
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
/* 22 */,
/* 23 */,
/* 24 */,
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
/* 40 */,
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/avatar_my.jpg";

/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = initHamburger;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__js_modules_animation_textShowAnimation__ = __webpack_require__(43);

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
/* 43 */
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
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, window, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, window, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(window, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(45);
exports.setImmediate = setImmediate;
exports.clearImmediate = clearImmediate;


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(14), __webpack_require__(1)))

/***/ }),
/* 46 */,
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var asap = __webpack_require__(48)

module.exports = Promise;
function Promise(fn) {
  if (typeof this !== 'object') throw new TypeError('Promises must be constructed via new')
  if (typeof fn !== 'function') throw new TypeError('not a function')
  var state = null
  var value = null
  var deferreds = []
  var self = this

  this.then = function(onFulfilled, onRejected) {
    return new self.constructor(function(resolve, reject) {
      handle(new Handler(onFulfilled, onRejected, resolve, reject))
    })
  }

  function handle(deferred) {
    if (state === null) {
      deferreds.push(deferred)
      return
    }
    asap(function() {
      var cb = state ? deferred.onFulfilled : deferred.onRejected
      if (cb === null) {
        (state ? deferred.resolve : deferred.reject)(value)
        return
      }
      var ret
      try {
        ret = cb(value)
      }
      catch (e) {
        deferred.reject(e)
        return
      }
      deferred.resolve(ret)
    })
  }

  function resolve(newValue) {
    try { //Promise Resolution Procedure: https://github.com/promises-aplus/promises-spec#the-promise-resolution-procedure
      if (newValue === self) throw new TypeError('A promise cannot be resolved with itself.')
      if (newValue && (typeof newValue === 'object' || typeof newValue === 'function')) {
        var then = newValue.then
        if (typeof then === 'function') {
          doResolve(then.bind(newValue), resolve, reject)
          return
        }
      }
      state = true
      value = newValue
      finale()
    } catch (e) { reject(e) }
  }

  function reject(newValue) {
    state = false
    value = newValue
    finale()
  }

  function finale() {
    for (var i = 0, len = deferreds.length; i < len; i++)
      handle(deferreds[i])
    deferreds = null
  }

  doResolve(fn, resolve, reject)
}


function Handler(onFulfilled, onRejected, resolve, reject){
  this.onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : null
  this.onRejected = typeof onRejected === 'function' ? onRejected : null
  this.resolve = resolve
  this.reject = reject
}

/**
 * Take a potentially misbehaving resolver function and make sure
 * onFulfilled and onRejected are only called once.
 *
 * Makes no guarantees about asynchrony.
 */
function doResolve(fn, onFulfilled, onRejected) {
  var done = false;
  try {
    fn(function (value) {
      if (done) return
      done = true
      onFulfilled(value)
    }, function (reason) {
      if (done) return
      done = true
      onRejected(reason)
    })
  } catch (ex) {
    if (done) return
    done = true
    onRejected(ex)
  }
}


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process, setImmediate) {
// Use the fastest possible means to execute a task in a future turn
// of the event loop.

// linked list of tasks (single, with head node)
var head = {task: void 0, next: null};
var tail = head;
var flushing = false;
var requestFlush = void 0;
var isNodeJS = false;

function flush() {
    /* jshint loopfunc: true */

    while (head.next) {
        head = head.next;
        var task = head.task;
        head.task = void 0;
        var domain = head.domain;

        if (domain) {
            head.domain = void 0;
            domain.enter();
        }

        try {
            task();

        } catch (e) {
            if (isNodeJS) {
                // In node, uncaught exceptions are considered fatal errors.
                // Re-throw them synchronously to interrupt flushing!

                // Ensure continuation if the uncaught exception is suppressed
                // listening "uncaughtException" events (as domains does).
                // Continue in next event to avoid tick recursion.
                if (domain) {
                    domain.exit();
                }
                setTimeout(flush, 0);
                if (domain) {
                    domain.enter();
                }

                throw e;

            } else {
                // In browsers, uncaught exceptions are not fatal.
                // Re-throw them asynchronously to avoid slow-downs.
                setTimeout(function() {
                   throw e;
                }, 0);
            }
        }

        if (domain) {
            domain.exit();
        }
    }

    flushing = false;
}

if (typeof process !== "undefined" && process.nextTick) {
    // Node.js before 0.9. Note that some fake-Node environments, like the
    // Mocha test runner, introduce a `process` global without a `nextTick`.
    isNodeJS = true;

    requestFlush = function () {
        process.nextTick(flush);
    };

} else if (typeof setImmediate === "function") {
    // In IE10, Node.js 0.9+, or https://github.com/NobleJS/setImmediate
    if (typeof window !== "undefined") {
        requestFlush = setImmediate.bind(window, flush);
    } else {
        requestFlush = function () {
            setImmediate(flush);
        };
    }

} else if (typeof MessageChannel !== "undefined") {
    // modern browsers
    // http://www.nonblocking.io/2011/06/windownexttick.html
    var channel = new MessageChannel();
    channel.port1.onmessage = flush;
    requestFlush = function () {
        channel.port2.postMessage(0);
    };

} else {
    // old browsers
    requestFlush = function () {
        setTimeout(flush, 0);
    };
}

function asap(task) {
    tail = tail.next = {
        task: task,
        domain: isNodeJS && process.domain,
        next: null
    };

    if (!flushing) {
        flushing = true;
        requestFlush();
    }
};

module.exports = asap;


/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1), __webpack_require__(44).setImmediate))

/***/ }),
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = initMap;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__resizeHandler__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pointers__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mapStyle__ = __webpack_require__(78);



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
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__img_avatar_my_jpg__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__img_avatar_my_jpg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__img_avatar_my_jpg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__icons_sprite_sprite_svg__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__icons_sprite_sprite_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__icons_sprite_sprite_svg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_normalize_css__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_normalize_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_normalize_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__node_modules_svg4everybody_dist_svg4everybody__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__node_modules_svg4everybody_dist_svg4everybody___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__node_modules_svg4everybody_dist_svg4everybody__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__js_modules_map___ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__js_modules_hamburger__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__js_modules_animation_scrollIt__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__js_modules_preloader__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__js_modules_skillAnimation__ = __webpack_require__(79);
/*---images and svg---*/


/*---styles---*/



__webpack_require__(16);
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
/* 75 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(54);
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
/* 76 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__icons_i_map_marker_svg__ = __webpack_require__(77);
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
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/map_marker.svg";

/***/ }),
/* 78 */
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
/* 79 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const waterfall = __webpack_require__(80);

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
      document.removeEventListener("scroll", skillAnimation); // превращаем массив из элементов в массив из функций, которые будут возвращать промисы и забиндены на определнный item skill

      svgCircles = svgCircles.map(item => {
        // создадим новую функцию и забиндим ей текущий item
        let skillAnimationFunction = function (skillItem) {
          return new Promise(function (res, rej) {
            setTimeout(function () {
              let requiredNumber = skillItem.getAttribute("data-percent"),
                  // +item.style.strokeDasharray.match(/\d+/)[0],
              startNumber = 0,
                  // постивим повтяряющуюся функцию чтобы она прибавляла значение каждый промежуток времени
              intervalCountSvg = setInterval(setTime, 10);

              function setTime() {
                if (startNumber >= requiredNumber) {
                  // если сравнялись числа то сбрасываем интревал
                  clearInterval(intervalCountSvg); // если анимация закончилась, то вызываем resolve

                  res();
                } else {
                  // если нет, то прибавляем еще единицу
                  ++startNumber;
                  skillItem.style.strokeDasharray = `${startNumber}, 185`;
                }
              }
            }, 40);
          });
        }.bind(null, item);

        return skillAnimationFunction;
      }); // вызывает по порядку все promise

      waterfall(svgCircles) // the promiseSequence will executes sequentially
      // just like func1().then(func2).then(func3)
      .then(function (res) {}).catch(function (err) {
        console.log(err);
      });
    }
  }
})());

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

var Promise = __webpack_require__(81);

function isPromise(obj) {
  return obj && typeof obj.then === 'function';
}

// return a rejected promise when error occurs
function reject(err) {
  return new Promise(function(resolve, reject){
    return reject(new Error("promise-waterfall: " + err));
  });
}

// if argument function doesn't return a promise
// return a promise resolving the return value
function resolve(val) {
  return new Promise(function(resolve, reject){
    return resolve(val);
  });
}

function waterfall(list) {
  // malformed argument
  list = Array.prototype.slice.call(list);
  if (!Array.isArray(list)                    // not an array
      || typeof list.reduce !== "function"    // update your javascript engine
      || list.length < 1                      // empty array
     ) {
    return reject("Array with reduce function is needed.");
  }

  if (list.length == 1) {
    if (typeof list[0] != "function")
      return reject("First element of the array should be a function, got " + typeof list[0]);
    return resolve(list[0]());
  }

  return list.reduce(function(l, r){
    // first round
    // execute function and return promise
    var isFirst = (l == list[0]);
    if (isFirst) {
      if (typeof l != "function")
        return reject("List elements should be function to call.");

      var lret = l();
      if (!isPromise(lret))
        return reject("Function return value should be a promise.");
      else
        return lret.then(r);
    }

    // other rounds
    // l is a promise now
    // priviousPromiseList.then(nextFunction)
    else {
      if (!isPromise(l))
        reject("Function return value should be a promise.");
      else 
        return l.then(r);
    }
  });
}

module.exports = waterfall;


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(47)
__webpack_require__(82)
__webpack_require__(83)
__webpack_require__(84)

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Promise = __webpack_require__(47)
var asap = __webpack_require__(48)

module.exports = Promise
Promise.prototype.done = function (onFulfilled, onRejected) {
  var self = arguments.length ? this.then.apply(this, arguments) : this
  self.then(null, function (err) {
    asap(function () {
      throw err
    })
  })
}

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//This file contains the ES6 extensions to the core Promises/A+ API

var Promise = __webpack_require__(47)
var asap = __webpack_require__(48)

module.exports = Promise

/* Static Functions */

function ValuePromise(value) {
  this.then = function (onFulfilled) {
    if (typeof onFulfilled !== 'function') return this
    return new Promise(function (resolve, reject) {
      asap(function () {
        try {
          resolve(onFulfilled(value))
        } catch (ex) {
          reject(ex);
        }
      })
    })
  }
}
ValuePromise.prototype = Promise.prototype

var TRUE = new ValuePromise(true)
var FALSE = new ValuePromise(false)
var NULL = new ValuePromise(null)
var UNDEFINED = new ValuePromise(undefined)
var ZERO = new ValuePromise(0)
var EMPTYSTRING = new ValuePromise('')

Promise.resolve = function (value) {
  if (value instanceof Promise) return value

  if (value === null) return NULL
  if (value === undefined) return UNDEFINED
  if (value === true) return TRUE
  if (value === false) return FALSE
  if (value === 0) return ZERO
  if (value === '') return EMPTYSTRING

  if (typeof value === 'object' || typeof value === 'function') {
    try {
      var then = value.then
      if (typeof then === 'function') {
        return new Promise(then.bind(value))
      }
    } catch (ex) {
      return new Promise(function (resolve, reject) {
        reject(ex)
      })
    }
  }

  return new ValuePromise(value)
}

Promise.all = function (arr) {
  var args = Array.prototype.slice.call(arr)

  return new Promise(function (resolve, reject) {
    if (args.length === 0) return resolve([])
    var remaining = args.length
    function res(i, val) {
      try {
        if (val && (typeof val === 'object' || typeof val === 'function')) {
          var then = val.then
          if (typeof then === 'function') {
            then.call(val, function (val) { res(i, val) }, reject)
            return
          }
        }
        args[i] = val
        if (--remaining === 0) {
          resolve(args);
        }
      } catch (ex) {
        reject(ex)
      }
    }
    for (var i = 0; i < args.length; i++) {
      res(i, args[i])
    }
  })
}

Promise.reject = function (value) {
  return new Promise(function (resolve, reject) { 
    reject(value);
  });
}

Promise.race = function (values) {
  return new Promise(function (resolve, reject) { 
    values.forEach(function(value){
      Promise.resolve(value).then(resolve, reject);
    })
  });
}

/* Prototype Methods */

Promise.prototype['catch'] = function (onRejected) {
  return this.then(null, onRejected);
}


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//This file contains then/promise specific extensions that are only useful for node.js interop

var Promise = __webpack_require__(47)
var asap = __webpack_require__(48)

module.exports = Promise

/* Static Functions */

Promise.denodeify = function (fn, argumentCount) {
  argumentCount = argumentCount || Infinity
  return function () {
    var self = this
    var args = Array.prototype.slice.call(arguments)
    return new Promise(function (resolve, reject) {
      while (args.length && args.length > argumentCount) {
        args.pop()
      }
      args.push(function (err, res) {
        if (err) reject(err)
        else resolve(res)
      })
      fn.apply(self, args)
    })
  }
}
Promise.nodeify = function (fn) {
  return function () {
    var args = Array.prototype.slice.call(arguments)
    var callback = typeof args[args.length - 1] === 'function' ? args.pop() : null
    var ctx = this
    try {
      return fn.apply(this, arguments).nodeify(callback, ctx)
    } catch (ex) {
      if (callback === null || typeof callback == 'undefined') {
        return new Promise(function (resolve, reject) { reject(ex) })
      } else {
        asap(function () {
          callback.call(ctx, ex)
        })
      }
    }
  }
}

Promise.prototype.nodeify = function (callback, ctx) {
  if (typeof callback != 'function') return this

  this.then(function (value) {
    asap(function () {
      callback.call(ctx, null, value)
    })
  }, function (err) {
    asap(function () {
      callback.call(ctx, err)
    })
  })
}


/***/ })
],[74]);