/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/js/main.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/components/brand-mini-card.js":
/*!**********************************************!*\
  !*** ./src/js/components/brand-mini-card.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

document.addEventListener('DOMContentLoaded', function () {
  var words = ['товар', 'товара', 'товаров'];
  var counts = document.querySelectorAll('.brand-mini-card__count p');
  counts.forEach(function (count) {
    var value = Math.abs(Number(count.innerHTML)) % 100;
    var num = value % 10;
    if (value > 10 && value < 20) {
      count.innerHTML = count.innerHTML + " " + words[2];
    } else if (num > 1 && num < 5) {
      count.innerHTML = count.innerHTML + " " + words[1];
    } else if (num === 1) {
      count.innerHTML = count.innerHTML + " " + words[0];
    } else {
      count.innerHTML = count.innerHTML + " " + words[2];
    }
  });
});

/***/ }),

/***/ "./src/js/components/catalog-button.js":
/*!*********************************************!*\
  !*** ./src/js/components/catalog-button.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

document.addEventListener('DOMContentLoaded', function () {
  var button = document.querySelector('.catalog-button');
  button.addEventListener('click', function (event) {
    event.preventDefault();
    button.classList.toggle('active');
  });
});

/***/ }),

/***/ "./src/js/components/categories.js":
/*!*****************************************!*\
  !*** ./src/js/components/categories.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

document.addEventListener('DOMContentLoaded', function () {
  var catsBtns = document.querySelectorAll('.categories__title');
  catsBtns.forEach(function (catsBtn) {
    catsBtn.addEventListener('click', function () {
      var catsList = catsBtn.parentNode.children[1];
      catsBtn.classList.toggle('opened');
      if (catsBtn.classList.contains("opened")) {
        catsList.style.maxHeight = "".concat(catsList.children[0].clientHeight, "px");
      } else {
        catsList.style.maxHeight = "0px";
      }
    });
  });
});

/***/ }),

/***/ "./src/js/components/filter.js":
/*!*************************************!*\
  !*** ./src/js/components/filter.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

document.addEventListener('DOMContentLoaded', function () {
  var filterCategories = document.querySelectorAll('.filter__category-header');
  filterCategories.forEach(function (filterCategory) {
    var filterCategoryList = filterCategory.nextElementSibling;
    filterCategory.addEventListener('click', function () {
      filterCategory.classList.toggle('opened');
      if (filterCategory.classList.contains('opened')) {
        filterCategoryList.classList.add('show');
        var filterCategoryListHeight = 0;
        for (var i = 0; i < filterCategoryList.children.length; i++) {
          filterCategoryListHeight += filterCategoryList.children[i].clientHeight;
        }
        filterCategoryList.style.maxHeight = "".concat(filterCategoryListHeight, "px");
      } else {
        filterCategoryList.classList.remove('show');
        filterCategoryList.style.maxHeight = "0px";
      }
    });
  });
});

/***/ }),

/***/ "./src/js/components/header.js":
/*!*************************************!*\
  !*** ./src/js/components/header.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/js/components/left-bar.js":
/*!***************************************!*\
  !*** ./src/js/components/left-bar.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

document.addEventListener('DOMContentLoaded', function () {});

/***/ }),

/***/ "./src/js/components/mobile-filter-btn.js":
/*!************************************************!*\
  !*** ./src/js/components/mobile-filter-btn.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

document.addEventListener('DOMContentLoaded', function () {
  var mobileFilterBtns = document.querySelectorAll('.mobile-filter-btn__left');
  var filter = document.querySelector('.modal-filter');
  var filterClose = document.querySelector('.modal-filter__close');
  var bg = document.querySelector('.modal-bg');
  mobileFilterBtns.forEach(function (mobileFilterBtn) {
    mobileFilterBtn.addEventListener('click', function () {
      document.body.classList.add('noscroll');
      filter.classList.add('opened');
      bg.classList.add('active');
    });
  });
  bg.addEventListener('click', function (e) {
    document.body.classList.remove('noscroll');
    filter.classList.remove('opened');
    bg.classList.remove('active');
  });
  filterClose.addEventListener('click', function (e) {
    document.body.classList.remove('noscroll');
    filter.classList.remove('opened');
    bg.classList.remove('active');
  });
});

/***/ }),

/***/ "./src/js/components/range-slider.js":
/*!*******************************************!*\
  !*** ./src/js/components/range-slider.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

document.addEventListener('DOMContentLoaded', function () {
  var rangeInput = document.querySelectorAll(".range-slider__rangeInput input"),
    priceInput = document.querySelectorAll(".range-slider__field input"),
    range = document.querySelector(".range-slider__slider-progress");
  var priceGap = 1000;
  priceInput.forEach(function (input) {
    input.addEventListener("input", function (e) {
      var minPrice = parseInt(priceInput[0].value),
        maxPrice = parseInt(priceInput[1].value);
      if (maxPrice - minPrice >= priceGap && maxPrice <= rangeInput[1].max) {
        console.log(e.target.className);
        if (e.target.className === "range-slider__field-minInput") {
          rangeInput[0].value = minPrice;
          range.style.left = minPrice / rangeInput[0].max * 100 + "%";
        } else {
          rangeInput[1].value = maxPrice;
          range.style.right = 100 - maxPrice / rangeInput[1].max * 100 + "%";
        }
      }
    });
  });
  rangeInput.forEach(function (input) {
    input.addEventListener("input", function (e) {
      var minVal = parseInt(rangeInput[0].value),
        maxVal = parseInt(rangeInput[1].value);
      if (maxVal - minVal < priceGap) {
        if (e.target.className === "range-slider__rangeInput-minRange") {
          rangeInput[0].value = maxVal - priceGap;
        } else {
          rangeInput[1].value = minVal + priceGap;
        }
      } else {
        priceInput[0].value = minVal;
        priceInput[1].value = maxVal;
        range.style.left = minVal / rangeInput[0].max * 100 + "%";
        range.style.right = 100 - maxVal / rangeInput[1].max * 100 + "%";
      }
    });
  });
});

/***/ }),

/***/ "./src/js/components/select.js":
/*!*************************************!*\
  !*** ./src/js/components/select.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var slim_select__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! slim-select */ "./node_modules/slim-select/dist/slimselect.umd.js");
/* harmony import */ var slim_select__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(slim_select__WEBPACK_IMPORTED_MODULE_0__);

document.addEventListener('DOMContentLoaded', function () {
  var selectList = document.querySelectorAll('.select');
  if (!selectList.length) return;
  selectList.forEach(function (select) {
    var selectEl = new slim_select__WEBPACK_IMPORTED_MODULE_0___default.a({
      select: select,
      settings: {
        showSearch: false
      },
      events: {
        afterChange: function afterChange(newVal) {
          var form = select.closest('form');
          if (form && !form.classList.contains('reset')) {
            var event = new Event('change');
            form.dispatchEvent(event);
          }
        }
      }
    });
  });
});

/***/ }),

/***/ "./src/js/components/social.js":
/*!*************************************!*\
  !*** ./src/js/components/social.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var ninelines_sharing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ninelines-sharing */ "./node_modules/ninelines-sharing/dist/ninelines-sharing.js");
/* harmony import */ var ninelines_sharing__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ninelines_sharing__WEBPACK_IMPORTED_MODULE_0__);

if (document.querySelector('[data-social]')) {
  var list = document.querySelectorAll('[data-social]');
  Array.prototype.forEach.call(list, function (item) {
    item.addEventListener('click', function (e) {
      var social = e.currentTarget.dataset.social;
      var url = location.origin + location.pathname;
      ninelines_sharing__WEBPACK_IMPORTED_MODULE_0___default.a[social](url);
    });
  });
}

/***/ }),

/***/ "./src/js/helpers.js":
/*!***************************!*\
  !*** ./src/js/helpers.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(setImmediate) {/* harmony import */ var body_scroll_lock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! body-scroll-lock */ "./node_modules/body-scroll-lock/lib/bodyScrollLock.esm.js");

var vars = {};
vars.$document = $(document);
vars.$window = $(window);
vars.$body = $(document.body);
vars.$html = $(document.documentElement);
vars.isMobile = function () {
  return innerWidth <= 1024;
};
vars.isIE = function () {
  return vars.$html.hasClass('is-browser-ie');
};
vars.isIOS = function () {
  return vars.$html.hasClass('is-os-ios');
};
vars.winWidth = window.innerWidth;

/**
* Очистить текст от спецсимволов
* @param {string} text Обязательное, строка для очистки
* @returns {string} Очищенная строка
*/
vars.clearText = function (text) {
  return text.trim().replace(/\s+/g, ' ');
};

/**
* Создать куки запись
* @param {string} name Обязательное, название записи
* @param {string} value Обязательное, значение записи
* @param {string} days Обязательное, время для жизни
*/
vars.setCookie = function (name, value, days) {
  var expires = '';
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=".concat(date.toUTCString());
  }
  document.cookie = "".concat(name, "=").concat(value || '').concat(expires, "; path=/");
};

/**
* Получить куки запись
* @param {string} name Обязательное, название записи
*/
vars.getCookie = function (name) {
  var nameEQ = "".concat(name, "=");
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) === ' ') {
      c = c.substring(1, c.length);
    }
    if (c.indexOf(nameEQ) === 0) {
      return c.substring(nameEQ.length, c.length);
    }
  }
  return null;
};

/**
* Удалить куки запись
* @param {string} name Обязательное, название записи
*/
vars.eraseCookie = function (name) {
  document.cookie = "".concat(name, "=; Max-Age=-99999999;");
};
var dataScrollLocks;
/**
* Блокирует скролл страницы
* Необходим для использования модальных окон
* @param {boolean} state Обязательное
* @param {string} element Обязательное, элемент которому нужно разрешить скролл
* @param {string} name Необязательное, ключ,
* чтобы была возможность открывать окно поверх другого окна
*/
vars.lockScroll = function (state, $element, name) {
  var element = $element.get(0) ? $element.get(0) : $element;
  if (typeof dataScrollLocks === 'undefined') {
    dataScrollLocks = new Set();
  }
  var scrollLocks = dataScrollLocks;
  if (state) {
    if (typeof name === 'string') {
      scrollLocks.add(name);
    }
    body_scroll_lock__WEBPACK_IMPORTED_MODULE_0__["disableBodyScroll"](element, {
      reserveScrollBarGap: true
    });
    setImmediate(function () {
      vars.$html.addClass('is-lock-scroll');
    });
  } else {
    if (typeof name === 'string') {
      scrollLocks["delete"](name);
    }
    body_scroll_lock__WEBPACK_IMPORTED_MODULE_0__["enableBodyScroll"](element);
    if (!scrollLocks.size) {
      body_scroll_lock__WEBPACK_IMPORTED_MODULE_0__["clearAllBodyScrollLocks"]();
      vars.$html.removeClass('is-lock-scroll');
    }
  }
};

/**
* Скролл до элемента
* @param {string} $container Обязательное, элемент к которому нужно скроллить
* @param {string|number} time Необязательное, время скролла
* @param {string|number} offset Необязательное, смещение скролла может быть + или -
*/
vars.scrollTo = function ($container) {
  var time = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;
  var offset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  vars.$html.css('scroll-behavior', 'initial');
  $('html, body').stop().animate({
    scrollTop: "".concat($container.offset().top + parseInt(offset, 10))
  }, parseInt(time, 10));
  setTimeout(function () {
    vars.$html.css('scroll-behavior', '');
  }, parseInt(time, 10) + 100);
};
var scrollDiv;

/**
* Получить размер скроллбара если он есть
* @returns {number} размер скроллбара
*/
vars.getScrollbarWidth = function () {
  var width = window.innerWidth - vars.$html.get(0).clientWidth;
  if (width || document.documentElement.clientHeight >= document.documentElement.offsetHeight) {
    return width;
  }

  // Document doesn't have a scrollbar, possibly because there is not enough content so browser doesn't show it
  if (!scrollDiv) {
    scrollDiv = document.createElement('div');
    scrollDiv.style.cssText = 'width:100px;height:100px;overflow:scroll !important;position:absolute;top:-9999px';
    document.body.appendChild(scrollDiv);
  }
  return scrollDiv.offsetWidth - scrollDiv.clientWidth;
};

/**
* Узнать есть доступен ли ховер
* @returns {boolean}
*/
function hasHoverSupport() {
  var hoverSupport;
  if (vars.isIE && vars.getScrollbarWidth()) {
    // On touch devices scrollbar width is usually 0
    hoverSupport = true;
  } else if (vars.isMobile()) {
    hoverSupport = false;
  } else if (window.matchMedia('(any-hover: hover)').matches || window.matchMedia('(hover: hover)').matches) {
    hoverSupport = true;
  } else if (window.matchMedia('(hover: none)').matches) {
    hoverSupport = false;
  } else {
    hoverSupport = typeof vars.$html.ontouchstart === 'undefined';
  }
  return hoverSupport;
}
if (!hasHoverSupport()) {
  vars.$html.removeClass('has-hover').addClass('no-hover');
} else {
  vars.$html.removeClass('no-hover').addClass('has-hover');
}

/**
* Переопределение доступности ховера
*/
function resize() {
  setTimeout(function () {
    if (vars.winWidth !== window.innerWidth) {
      if (!hasHoverSupport()) {
        vars.$html.removeClass('has-hover').addClass('no-hover');
      } else {
        vars.$html.removeClass('no-hover').addClass('has-hover');
      }
      vars.winWidth = window.innerWidth;
    }
  }, 300);
}
vars.$window.on('resize', resize);
/* harmony default export */ __webpack_exports__["default"] = (vars);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/timers-browserify/main.js */ "./node_modules/timers-browserify/main.js").setImmediate))

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vendor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vendor */ "./src/js/vendor.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers */ "./src/js/helpers.js");
/* harmony import */ var _sliders__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sliders */ "./src/js/sliders.js");
/* harmony import */ var _components_social__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/social */ "./src/js/components/social.js");
/* harmony import */ var _components_catalog_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/catalog-button */ "./src/js/components/catalog-button.js");
/* harmony import */ var _components_catalog_button__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_components_catalog_button__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_left_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/left-bar */ "./src/js/components/left-bar.js");
/* harmony import */ var _components_left_bar__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_components_left_bar__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_brand_mini_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/brand-mini-card */ "./src/js/components/brand-mini-card.js");
/* harmony import */ var _components_brand_mini_card__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_components_brand_mini_card__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_categories__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/categories */ "./src/js/components/categories.js");
/* harmony import */ var _components_categories__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_components_categories__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/select */ "./src/js/components/select.js");
/* harmony import */ var _components_filter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/filter */ "./src/js/components/filter.js");
/* harmony import */ var _components_filter__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_components_filter__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_range_slider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/range-slider */ "./src/js/components/range-slider.js");
/* harmony import */ var _components_range_slider__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_components_range_slider__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_mobile_filter_btn__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/mobile-filter-btn */ "./src/js/components/mobile-filter-btn.js");
/* harmony import */ var _components_mobile_filter_btn__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_components_mobile_filter_btn__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _modules_lazyLoading__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./modules/lazyLoading */ "./src/js/modules/lazyLoading.js");
/* harmony import */ var _modules_scrollToAnchor__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./modules/scrollToAnchor */ "./src/js/modules/scrollToAnchor.js");














_modules_scrollToAnchor__WEBPACK_IMPORTED_MODULE_13__["default"].init();
_modules_lazyLoading__WEBPACK_IMPORTED_MODULE_12__["default"].init();

/***/ }),

/***/ "./src/js/modules/lazyLoading.js":
/*!***************************************!*\
  !*** ./src/js/modules/lazyLoading.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lozad__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lozad */ "./node_modules/lozad/dist/lozad.min.js");
/* harmony import */ var lozad__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lozad__WEBPACK_IMPORTED_MODULE_0__);

var observer;

/**
* Модуль "Отложенная загрузка изображений"
* https://github.com/ApoorvSaxena/lozad.js
*/
var init = function init() {
  observer = lozad__WEBPACK_IMPORTED_MODULE_0___default()('.js-lazy', {
    rootMargin: '10px 0px',
    // syntax similar to that of CSS Margin
    threshold: 0.1,
    // ratio of element convergence
    enableAutoReload: true,
    // it will reload the new image when validating attributes changes
    loaded: function loaded(el) {
      el.classList.add('is-loaded');
    }
  });
  observer.observe();
};

/**
* Тригер для загрузки изображений до того, как оно появится в наблюдателе области просмотра
* @param {string} img Обязательное, элемент img
*/
var trigger = function trigger(img) {
  observer.triggerLoad(img);
};
/* harmony default export */ __webpack_exports__["default"] = ({
  init: init,
  trigger: trigger
});

/***/ }),

/***/ "./src/js/modules/scrollToAnchor.js":
/*!******************************************!*\
  !*** ./src/js/modules/scrollToAnchor.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/header */ "./src/js/components/header.js");
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_components_header__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers */ "./src/js/helpers.js");



/**
* Модуль "Плавный переход к якорю"
*/
var init = function init() {
  _helpers__WEBPACK_IMPORTED_MODULE_1__["default"].$document.on('click.anchor', '.js-to-anchor', function (e) {
    e.preventDefault();
    e.stopPropagation();
    var id = $(e.currentTarget).attr('href');
    var speed = $(e.currentTarget).data('speed') || 500;
    var offset = _helpers__WEBPACK_IMPORTED_MODULE_1__["default"].$header.css('position') === 'fixed' || _helpers__WEBPACK_IMPORTED_MODULE_1__["default"].$header.css('position') === 'absolute' ? -_helpers__WEBPACK_IMPORTED_MODULE_1__["default"].$header.outerHeight(true) : 0;
    _components_header__WEBPACK_IMPORTED_MODULE_0___default.a.closeMenu().then(function () {
      $('.js-burger').removeClass('is-active');
      _helpers__WEBPACK_IMPORTED_MODULE_1__["default"].scrollTo($(id), speed, offset);
    });
  });
};
var destroy = function destroy() {
  _helpers__WEBPACK_IMPORTED_MODULE_1__["default"].$document.off('.anchor');
};
/* harmony default export */ __webpack_exports__["default"] = ({
  init: init,
  destroy: destroy
});

/***/ }),

/***/ "./src/js/sliders.js":
/*!***************************!*\
  !*** ./src/js/sliders.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.mjs");
/* harmony import */ var swiper_modules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper/modules */ "./node_modules/swiper/modules/index.mjs");


new swiper__WEBPACK_IMPORTED_MODULE_0__["Swiper"]('.popular__slider', {
  modules: [swiper_modules__WEBPACK_IMPORTED_MODULE_1__["Navigation"], swiper_modules__WEBPACK_IMPORTED_MODULE_1__["Pagination"], swiper_modules__WEBPACK_IMPORTED_MODULE_1__["Scrollbar"]],
  // slidesPerView: 5,
  // Optional parameters
  direction: 'horizontal',
  loop: false,
  // If we need pagination
  pagination: {
    enabled: false
  },
  // Navigation arrows
  navigation: {
    enabled: false
  },
  // And if we need scrollbar
  scrollbar: {
    enabled: false,
    hide: true
  },
  breakpoints: {
    320: {
      slidesPerView: 1.05,
      spaceBetween: 8
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 24
    },
    1600: {
      slidesPerView: 5,
      spaceBetween: 24
    }
  }
});
new swiper__WEBPACK_IMPORTED_MODULE_0__["Swiper"]('.stocks__slider', {
  modules: [swiper_modules__WEBPACK_IMPORTED_MODULE_1__["Navigation"], swiper_modules__WEBPACK_IMPORTED_MODULE_1__["Pagination"], swiper_modules__WEBPACK_IMPORTED_MODULE_1__["Scrollbar"]],
  slidesPerView: 4,
  // Optional parameters
  direction: 'horizontal',
  loop: false,
  // If we need pagination
  pagination: {
    enabled: false
  },
  // Navigation arrows
  navigation: {
    enabled: false
  },
  // And if we need scrollbar
  scrollbar: {
    enabled: false,
    hide: true
  },
  breakpoints: {
    320: {
      slidesPerView: 1.05,
      spaceBetween: 8
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 24
    },
    1600: {
      slidesPerView: 4,
      spaceBetween: 24
    }
  }
});
new swiper__WEBPACK_IMPORTED_MODULE_0__["Swiper"]('.main-page__banner-slider', {
  modules: [swiper_modules__WEBPACK_IMPORTED_MODULE_1__["Navigation"], swiper_modules__WEBPACK_IMPORTED_MODULE_1__["Pagination"], swiper_modules__WEBPACK_IMPORTED_MODULE_1__["Scrollbar"]],
  slidesPerView: 1,
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  // And if we need scrollbar
  scrollbar: {
    enabled: false,
    hide: true
  }
});
new swiper__WEBPACK_IMPORTED_MODULE_0__["Swiper"]('.products__slider', {
  modules: [swiper_modules__WEBPACK_IMPORTED_MODULE_1__["Navigation"], swiper_modules__WEBPACK_IMPORTED_MODULE_1__["Pagination"], swiper_modules__WEBPACK_IMPORTED_MODULE_1__["Scrollbar"]],
  // slidesPerView: 4,
  // spaceBetween: 40,
  // Optional parameters
  direction: 'horizontal',
  loop: false,
  // If we need pagination
  pagination: {
    enabled: false
  },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  // And if we need scrollbar
  scrollbar: {
    enabled: false,
    hide: true
  },
  breakpoints: {
    320: {
      slidesPerView: 1.2,
      spaceBetween: 10
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    1025: {
      slidesPerView: 3,
      spaceBetween: 20
    },
    1600: {
      slidesPerView: 4,
      spaceBetween: 40
    }
  }
});

/***/ }),

/***/ "./src/js/vendor.js":
/*!**************************!*\
  !*** ./src/js/vendor.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_stable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/stable */ "./node_modules/core-js/stable/index.js");
/* harmony import */ var core_js_stable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_stable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! regenerator-runtime/runtime */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var svg4everybody__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! svg4everybody */ "./node_modules/svg4everybody/dist/svg4everybody.js");
/* harmony import */ var svg4everybody__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(svg4everybody__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var object_fit_images__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! object-fit-images */ "./node_modules/object-fit-images/dist/ofi.common-js.js");
/* harmony import */ var object_fit_images__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(object_fit_images__WEBPACK_IMPORTED_MODULE_4__);





// import objectFitVideos from 'object-fit-videos';

svg4everybody__WEBPACK_IMPORTED_MODULE_2___default()();
object_fit_images__WEBPACK_IMPORTED_MODULE_4___default()();
// objectFitVideos();

window.$ = jquery__WEBPACK_IMPORTED_MODULE_3___default.a;
window.jQuery = jquery__WEBPACK_IMPORTED_MODULE_3___default.a;
window.objectFitImages = object_fit_images__WEBPACK_IMPORTED_MODULE_4___default.a;
// window.objectFitVideos = objectFitVideos;

__webpack_require__(/*! ninelines-ua-parser */ "./node_modules/ninelines-ua-parser/dist/ninelines-ua-parser.js");

/***/ })

/******/ });
//# sourceMappingURL=main.js.map