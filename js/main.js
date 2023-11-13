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

document.addEventListener('DOMContentLoaded', function () {});

/***/ }),

/***/ "./src/js/components/categories-cloud.js":
/*!***********************************************!*\
  !*** ./src/js/components/categories-cloud.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

document.addEventListener('DOMContentLoaded', function () {
  var showAllCategories = document.querySelectorAll('.categories-cloud__item-all');
  showAllCategories.forEach(function (btn) {
    var list = btn.closest('.categories-cloud__items');
    btn.addEventListener('click', function () {
      btn.classList.toggle('active');
      if (btn.classList.contains('active')) {
        btn.children[0].innerHTML = 'Свернуть';
        for (var i = 0; i < list.children.length; i++) {
          if (list.children.item(i).classList.contains('hidden')) {
            list.children.item(i).classList.remove('hidden');
          }
        }
      } else {
        btn.children[0].innerHTML = 'Все категории';
        for (var _i = 0; _i < list.children.length; _i++) {
          if (_i >= 14 && _i !== list.children.length - 1) {
            list.children.item(_i).classList.add('hidden');
          }
        }
      }
    });
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

document.addEventListener('DOMContentLoaded', function () {
  var menuButton = document.querySelector('.catalog-button');
  var menuBlock = document.querySelector('.header__menu');
  var menuTopMoreButton = document.querySelector('.header__menu-top-more');
  var menuTopMore = document.querySelector('.menu__more');
  var menuMobileCLose = document.querySelector('.header__menu-header-close');
  var menuMoreCLose = document.querySelector('.menu__more-close');
  var headerMore = document.querySelector('.header-button-more');
  var modalHeaderMore = document.querySelector('.modal-header-more');
  var menuListMore = document.querySelectorAll('.header__menu-category-item-more');
  var headerSelectCity = document.querySelector('.header__city');
  var headerSelectPhone = document.querySelector('.header__phone-arrow');
  var modalHeaderMoreButtons = document.querySelectorAll('.modal-header-more__footer-about-header');
  var modalHeaderMoreCitySelect = document.querySelector('.city--select');
  menuListMore.forEach(function (btn) {
    btn.addEventListener('click', function () {
      btn.classList.toggle('active');
      btn.parentNode.children.forEach(function (li, index) {
        if (btn.classList.contains('active') && li.classList.contains('hidden')) {
          li.classList.remove('hidden');
          li.classList.add('show');
        } else {
          if (li.classList.contains('show')) {
            li.classList.remove('show');
            li.classList.add('hidden');
          }
        }
      });
    });
  });
  headerSelectCity.addEventListener('click', function () {
    var cityTitle = headerSelectCity.children[0];
    var cityListBlock = headerSelectCity.children[2];
    var cityList = cityListBlock.children[0].children;
    headerSelectCity.classList.toggle('active');
    if (headerSelectCity.classList.contains('active')) {
      cityListBlock.classList.add('show');
      cityList.forEach(function (item) {
        item.addEventListener('click', function (e) {
          e.stopPropagation();
          cityList.forEach(function (li) {
            li.classList.remove('active');
          });
          item.classList.add('active');
          cityTitle.innerHTML = item.innerHTML;
          headerSelectCity.classList.remove('active');
          cityListBlock.classList.remove('show');
        });
      });
    } else {
      cityListBlock.classList.remove('show');
    }
  });
  headerSelectPhone.addEventListener('click', function () {
    var phoneListBlock = headerSelectPhone.parentNode.children[2];
    headerSelectPhone.classList.toggle('active');
    if (headerSelectPhone.classList.contains('active')) {
      phoneListBlock.classList.add('show');
    } else {
      phoneListBlock.classList.remove('show');
    }
  });
  menuButton.addEventListener('click', function (e) {
    e.preventDefault();
    menuButton.classList.toggle('active');
    if (menuButton.classList.contains('active')) {
      menuBlock.classList.add('active');
      document.documentElement.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "auto";
      menuBlock.classList.remove('active');
      menuTopMoreButton.classList.remove('active');
      menuTopMore.classList.remove('active');
    }
  });
  menuMobileCLose.addEventListener('click', function () {
    menuButton.classList.remove('active');
    menuTopMore.classList.remove('active');
    menuBlock.classList.remove('active');
    menuTopMoreButton.classList.remove('active');
    document.documentElement.style.overflow = "auto";
  });
  menuTopMoreButton.addEventListener('click', function (e) {
    e.preventDefault();
    menuTopMoreButton.classList.toggle('active');
    if (menuTopMoreButton.classList.contains('active')) {
      menuTopMore.classList.add('active');
    } else {
      menuTopMore.classList.remove('active');
    }
  });
  menuMoreCLose.addEventListener('click', function () {
    menuTopMore.classList.remove('active');
    menuTopMoreButton.classList.remove('active');
  });
  headerMore.addEventListener('click', function () {
    modalHeaderMore.classList.add('active');
    document.documentElement.style.overflow = "hidden";
  });
  modalHeaderMoreButtons.forEach(function (btn) {
    var bottomBlock = btn.parentNode.children[1];
    var list = btn.parentNode.children[1].children[0];
    btn.addEventListener('click', function (e) {
      btn.classList.toggle('active');
      if (btn.classList.contains('active')) {
        bottomBlock.style.maxHeight = "".concat(list.clientHeight, "px");
      } else {
        bottomBlock.style.maxHeight = 0;
      }
      if (btn.classList.contains('active') && btn.classList.contains('city--select')) {
        var cityList = btn.parentNode.children[1].children[0];
        var _loop = function _loop() {
          var city = cityList.children[i].children[0];
          var titleBtn = btn.children[0].children[0];
          city.addEventListener('click', function (e) {
            e.preventDefault();
            cityList.children.forEach(function (li) {
              li.classList.remove('active');
            });
            city.parentNode.classList.add('active');
            titleBtn.innerHTML = city.innerHTML;
          });
        };
        for (var i = 0; i < cityList.children.length; i++) {
          _loop();
        }
      }
    });
  });
});

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
  var filter = document.querySelector('.filter');
  var filterCLose = document.querySelector('.filter__close');
  var bg = document.querySelector('.modal-bg');
  if (filter && filterCLose) {
    mobileFilterBtns.forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        filter.classList.add('active');
        document.documentElement.style.overflowY = "hidden";
        // filter.classList.add('active');
        bg.classList.add('active');
      });
    });
    filterCLose.addEventListener('click', function (e) {
      filter.classList.remove('active');
      bg.classList.remove('active');
      document.documentElement.style.overflowY = "auto";
    });
    bg.addEventListener('click', function (e) {
      filter.classList.remove('active');
      bg.classList.remove('active');
      document.documentElement.style.overflowY = "auto";
    });
  }
});

/***/ }),

/***/ "./src/js/components/modals.js":
/*!*************************************!*\
  !*** ./src/js/components/modals.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

document.addEventListener('DOMContentLoaded', function () {
  var modalCloseButtons = document.querySelectorAll('.modal__close');
  var bg = document.querySelector('.modal-bg');
  modalCloseButtons.forEach(function (btn) {
    var modalBody = btn.parentNode.parentNode.parentNode;
    btn.addEventListener('click', function () {
      if (modalBody.classList.contains('active')) {
        modalBody.classList.remove('active');
        document.documentElement.style.overflow = "auto";
        if (bg.classList.contains('active')) {
          bg.classList.remove('active');
        }
      }
    });
    // modalCloseButton.addEventListener('click', (e) => {
    // 	modalCloseButton.closest('.modal').classList.remove('opened')
    // 	document.documentElement.style.overflowY = "auto";
    // 	bg.classList.remove('active');
    // })
    //
    bg.addEventListener('click', function (e) {
      if (bg.classList.contains('active')) {
        document.documentElement.style.overflowY = "auto";
        btn.closest('.modal').classList.remove('active');
        bg.classList.remove('active');
      }
    });
  });
});

/***/ }),

/***/ "./src/js/components/product-card.js":
/*!*******************************************!*\
  !*** ./src/js/components/product-card.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

document.addEventListener('DOMContentLoaded', function () {
  var descriptionButtons = document.querySelectorAll('.product-card__info-about-button');
  descriptionButtons.forEach(function (btn) {
    var listBlock = btn.previousElementSibling;
    var list = btn.previousElementSibling.children[0];
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      btn.classList.toggle('active');
      if (btn.classList.contains('active')) {
        listBlock.style.maxHeight = "".concat(list.clientHeight, "px");
      } else {
        listBlock.style.maxHeight = 0;
      }
    });
  });
});

/***/ }),

/***/ "./src/js/components/product-characteristics.js":
/*!******************************************************!*\
  !*** ./src/js/components/product-characteristics.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

document.addEventListener('DOMContentLoaded', function () {
  var attributs = document.querySelectorAll('.product-characteristics__item');
  attributs.forEach(function (attribut) {
    attribut.addEventListener('click', function () {
      var attributsList = attribut.parentNode.children;
      attributsList.forEach(function (item) {
        item.classList.remove('active');
        item.children[0].checked = false;
      });
      attribut.classList.add('active');
      attribut.children[0].checked = true;
    });
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
  var rangeInput = document.querySelectorAll(".range-slider__rangeInput input");
  var priceInput = document.querySelectorAll(".range-slider__field input");
  var ranges = document.querySelectorAll(".range-slider__slider-progress");
  var priceGap = 1000;
  priceInput.forEach(function (input) {
    input.addEventListener("input", function (e) {
      ranges.forEach(function (range) {
        var minPrice = parseInt(priceInput[0].value);
        var maxPrice = parseInt(priceInput[1].value);
        if (maxPrice - minPrice >= priceGap && maxPrice <= rangeInput[1].max) {
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
  });
  rangeInput.forEach(function (input) {
    input.addEventListener("input", function (e) {
      ranges.forEach(function (range) {
        var minVal = parseInt(rangeInput[0].value);
        var maxVal = parseInt(rangeInput[1].value);
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

/***/ "./src/js/components/switch-buttons.js":
/*!*********************************************!*\
  !*** ./src/js/components/switch-buttons.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

document.addEventListener('DOMContentLoaded', function () {
  var switchButtons = document.querySelectorAll('.switch-buttons__button');
  var catalogs = document.querySelectorAll('.catalog--grid');
  switchButtons.forEach(function (switchButton, index) {
    window.addEventListener('resize', function (e) {
      var windowWidth = e.currentTarget.innerWidth;
      if (windowWidth <= 1200) {
        switchButtons[0].classList.add('active');
        switchButtons[1].classList.remove('active');
        catalogs.forEach(function (catalog) {
          if (catalog.classList.contains('row--view')) {
            catalog.classList.remove('row--view');
            catalog.classList.add('default--view');
          }
        });
      }
    });
    switchButton.addEventListener('click', function (e) {
      if (e.target.getAttribute('data-view') === 'default--view') {
        e.target.classList.add('active');
        var otherButton = switchButtons[(index + 1) % switchButtons.length];
        otherButton.classList.remove('active');
        catalogs.forEach(function (catalog) {
          if (catalog.classList.contains('row--view')) {
            catalog.classList.remove('row--view');
            catalog.classList.add('default--view');
          }
        });
      }
      if (e.target.getAttribute('data-view') === 'row--view') {
        e.target.classList.add('active');
        var _otherButton = switchButtons[(index + 1) % switchButtons.length];
        _otherButton.classList.remove('active');
        catalogs.forEach(function (catalog) {
          if (catalog.classList.contains('default--view')) {
            catalog.classList.remove('default--view');
            catalog.classList.add('row--view');
          }
        });
      }
    });
  });
});

/***/ }),

/***/ "./src/js/general.js":
/*!***************************!*\
  !*** ./src/js/general.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lightgallery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lightgallery */ "./node_modules/lightgallery/lightgallery.es5.js");
/* harmony import */ var lightgallery_plugins_thumbnail__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lightgallery/plugins/thumbnail */ "./node_modules/lightgallery/plugins/thumbnail/lg-thumbnail.es5.js");
/* harmony import */ var lightgallery_plugins_zoom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lightgallery/plugins/zoom */ "./node_modules/lightgallery/plugins/zoom/lg-zoom.es5.js");


// Plugins


document.addEventListener('DOMContentLoaded', function () {
  var showBtns = document.querySelectorAll('.text__block-btn');
  showBtns.forEach(function (showBtn) {
    var texts = showBtn.parentNode.querySelectorAll('p');
    var textsLength = 0;
    texts.forEach(function (text) {
      textsLength += text.innerHTML.length;
    });
    if (textsLength > 500 && window.outerWidth >= 564) {
      showBtn.classList.remove('hidden');
      texts.forEach(function (text, index) {
        if (index > 0) {
          text.classList.add('active');
        }
      });
    } else if (textsLength < 500 && window.outerWidth >= 564) {
      showBtn.classList.add('hidden');
      texts.forEach(function (text, index) {
        text.classList.remove('active');
      });
    } else if (textsLength < 500 && window.outerWidth <= 564) {
      showBtn.classList.remove('hidden');
      texts.forEach(function (text, index) {
        if (index > 0) {
          text.classList.add('active');
        }
      });
    }
    showBtn.addEventListener('click', function (e) {
      e.preventDefault();
      showBtn.classList.toggle('active');
      texts.forEach(function (text, index) {
        if (showBtn.classList.contains('active')) {
          showBtn.children[0].innerHTML = 'Скрыть текст';
          text.classList.remove('active');
        } else {
          showBtn.children[0].innerHTML = 'Подробнее';
          if (index > 0) {
            text.classList.add('active');
          }
        }
      });
    });
  });
  var productAboutButtons = document.querySelectorAll('.product__about-button');
  productAboutButtons.forEach(function (btn, index) {
    var text = btn.parentNode.parentNode.children[1].children;
    btn.addEventListener('click', function () {
      btn.classList.add('active');
      var otherButton = productAboutButtons[(index + 1) % productAboutButtons.length];
      otherButton.classList.remove('active');
      if (index === 0) {
        text[0].classList.remove('hidden');
        text[1].classList.add('hidden');
      } else {
        text[1].classList.remove('hidden');
        text[0].classList.add('hidden');
      }
    });
  });
  var productGallery = document.querySelector('#productGallery');
  var productAboutMobile = document.querySelectorAll('.product__about-mobile-row');
  productAboutMobile.forEach(function (btn) {
    var textBlock = btn.children[1];
    var textInner = btn.children[1].children[0];
    btn.addEventListener('click', function () {
      btn.classList.toggle('active');
      if (btn.classList.contains('active')) {
        textBlock.style.maxHeight = "".concat(textInner.clientHeight, "px");
      } else {
        textBlock.style.maxHeight = 0;
      }
    });
  });
  var productDisclaimer = document.querySelector('.product__info-price-discount span');
  var productDisclaimerNote = document.querySelector('.product__info-price-discount-note');
  var productDisclaimerClose = document.querySelector('.product__info-price-discount-note-close');
  if (productDisclaimer) {
    if (window.innerWidth <= 1200) {
      // Обработчик для клика
      productDisclaimer.addEventListener('click', function () {
        toggleDisclaimer();
      });
    } else {
      // Обработчик для наведения
      productDisclaimer.addEventListener('mouseenter', function () {
        toggleDisclaimer(true);
      });

      // Обработчик для ухода с элемента
      productDisclaimer.addEventListener('mouseleave', function () {
        toggleDisclaimer(false);
      });
    }
    document.addEventListener('click', function (event) {
      var isClickInsideDisclaimer = productDisclaimer.contains(event.target);
      if (!isClickInsideDisclaimer) {
        closeDisclaimer();
      }
    });
    productDisclaimerClose.addEventListener('click', function () {
      closeDisclaimer();
    });
  }
  function toggleDisclaimer(showNote) {
    productDisclaimer.classList.toggle('active');
    if (productDisclaimer.classList.contains('active')) {
      productDisclaimerNote.classList.add('active');
      if (window.innerWidth <= 564) {
        document.documentElement.style.overflowY = "hidden";
      }
    } else {
      if (!showNote) {
        productDisclaimerNote.classList.remove('active');
        document.documentElement.style.overflowY = "auto";
      }
    }
  }
  function closeDisclaimer() {
    productDisclaimer.classList.remove('active');
    productDisclaimerNote.classList.remove('active');
    document.documentElement.style.overflowY = "auto";
  }
  Object(lightgallery__WEBPACK_IMPORTED_MODULE_0__["default"])(productGallery, {
    plugins: [lightgallery_plugins_zoom__WEBPACK_IMPORTED_MODULE_2__["default"], lightgallery_plugins_thumbnail__WEBPACK_IMPORTED_MODULE_1__["default"]],
    licenseKey: 'your_license_key',
    speed: 300
  });
});

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
/* harmony import */ var _general__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./general */ "./src/js/general.js");
/* harmony import */ var _components_social__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/social */ "./src/js/components/social.js");
/* harmony import */ var _components_catalog_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/catalog-button */ "./src/js/components/catalog-button.js");
/* harmony import */ var _components_catalog_button__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_components_catalog_button__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_left_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/left-bar */ "./src/js/components/left-bar.js");
/* harmony import */ var _components_left_bar__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_components_left_bar__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_brand_mini_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/brand-mini-card */ "./src/js/components/brand-mini-card.js");
/* harmony import */ var _components_brand_mini_card__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_components_brand_mini_card__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_categories__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/categories */ "./src/js/components/categories.js");
/* harmony import */ var _components_categories__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_components_categories__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/select */ "./src/js/components/select.js");
/* harmony import */ var _components_filter__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/filter */ "./src/js/components/filter.js");
/* harmony import */ var _components_filter__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_components_filter__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_range_slider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/range-slider */ "./src/js/components/range-slider.js");
/* harmony import */ var _components_range_slider__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_components_range_slider__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _components_modals__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/modals */ "./src/js/components/modals.js");
/* harmony import */ var _components_modals__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_components_modals__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _components_mobile_filter_btn__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/mobile-filter-btn */ "./src/js/components/mobile-filter-btn.js");
/* harmony import */ var _components_mobile_filter_btn__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_components_mobile_filter_btn__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _components_categories_cloud__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/categories-cloud */ "./src/js/components/categories-cloud.js");
/* harmony import */ var _components_categories_cloud__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_components_categories_cloud__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _components_switch_buttons__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/switch-buttons */ "./src/js/components/switch-buttons.js");
/* harmony import */ var _components_switch_buttons__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_components_switch_buttons__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _components_product_characteristics__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/product-characteristics */ "./src/js/components/product-characteristics.js");
/* harmony import */ var _components_product_characteristics__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_components_product_characteristics__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _components_product_card__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/product-card */ "./src/js/components/product-card.js");
/* harmony import */ var _components_product_card__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_components_product_card__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _modules_lazyLoading__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./modules/lazyLoading */ "./src/js/modules/lazyLoading.js");
/* harmony import */ var _modules_scrollToAnchor__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./modules/scrollToAnchor */ "./src/js/modules/scrollToAnchor.js");




















_modules_scrollToAnchor__WEBPACK_IMPORTED_MODULE_19__["default"].init();
_modules_lazyLoading__WEBPACK_IMPORTED_MODULE_18__["default"].init();

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
    nextEl: '.main-page__banner-arrow-next',
    prevEl: '.main-page__banner-arrow-prev'
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
    nextEl: '.products__slider-arrow-next',
    prevEl: '.products__slider-arrow-prev'
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
new swiper__WEBPACK_IMPORTED_MODULE_0__["Swiper"]('.product__compare-slider', {
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
    nextEl: '.product__compare-slider-arrow-next',
    prevEl: '.product__compare-slider-arrow-prev'
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
new swiper__WEBPACK_IMPORTED_MODULE_0__["Swiper"]('.product__viewed-slider', {
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
    nextEl: '.product__viewed-slider-arrow-next',
    prevEl: '.product__viewed-slider-arrow-prev'
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
var productGalleryThumbs = new swiper__WEBPACK_IMPORTED_MODULE_0__["Swiper"]('.product__gallery-thumbs', {
  slidesPerView: '4',
  spaceBetween: "16",
  freeMode: "true",
  watchSlidesProgress: true
});
var productGallery = new swiper__WEBPACK_IMPORTED_MODULE_0__["Swiper"]('.product__gallery-slider', {
  modules: [swiper_modules__WEBPACK_IMPORTED_MODULE_1__["Navigation"], swiper_modules__WEBPACK_IMPORTED_MODULE_1__["Pagination"], swiper_modules__WEBPACK_IMPORTED_MODULE_1__["Scrollbar"], swiper_modules__WEBPACK_IMPORTED_MODULE_1__["Thumbs"]],
  slidesPerView: 'auto',
  // spaceBetween: 40,
  // Optional parameters
  direction: 'horizontal',
  autoHeight: true,
  loop: false,
  thumbs: {
    swiper: productGalleryThumbs
  },
  // If we need pagination

  navigation: true,
  // Navigation arrows
  // navigation: {
  // 	nextEl: '.product__viewed-slider-arrow-next',
  // 	prevEl: '.product__viewed-slider-arrow-prev',
  // },
  scrollbar: {
    enabled: false,
    hide: true
  },
  breakpoints: {
    320: {
      pagination: {
        enabled: true,
        el: '.swiper-pagination',
        clickable: true
      }
    },
    564: {
      pagination: {
        enabled: false
      }
    }
  }
});

// document.addEventListener('DOMContentLoaded', () => {
// 	const mainBanner = document.querySelector('.swiper-container');
//
// 	swiperContainer.addEventListener('mouseenter', function () {
// 		swiperContainer.classList.add('darken'); // Добавляем класс при наведении
// 	});
//
// 	swiperContainer.addEventListener('mouseleave', function () {
// 		swiperContainer.classList.remove('darken'); // Удаляем класс при снятии наведения
// 	});
// })

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