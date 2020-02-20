/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.html":
/*!********************!*\
  !*** ./index.html ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = "<!DOCTYPE html>\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n    <meta name=\"description\" content=\"My current work\">\n    <title> VHW | Portfolio </title>\n    <link rel=\"stylesheet\" href=\"https://use.fontawesome.com/releases/v5.0.10/css/all.css\">\n    <link href=\"https://fonts.googleapis.com/css?family=Heebo:100,300,400&display=swap\" rel=\"stylesheet\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n  <link rel=\"shortcut icon\" href=\"favicon.ico\"></head>\n\n  <body>\n    <div class=\"navbar-layout\">\n      <ul class=\"navbar\">\n        <li id=\"home\">Home</li>\n        <li id=\"projects\">Projects</li>\n        <li id=\"courses\">Education</li>\n        <li id=\"contact\">Contact</li>\n      </ul>\n    </div>\n    <div class=\"container\">\n      <div class=\"wrapper-left\">\n        <div class=\"content\">\n          <h1>Veronica Wajda</h1>\n          <p>An Engineer turned programmer. <br><br>\n             Up and away from Calgary I ventured to Barcelona Spain in the last few months to attend Le Wagon's coding bootcamp.\n             There I learned so much from the fundamentals of programming to creating an app from scratch within a week. Working\n             in teams of four we prototyped and designed each element. The back end, completed in Ruby using authentication,\n             geocoding, and so much more. Each web application was executed in Ruby on Rails with interactive components using JavaScript.\n              <br><br>\n             Today I continue to hone these skill as well as grow them. Currently learning React & Redux as well as node.js. Take\n             a look around and browse my work. Let's meet over coffee if you have any interesting collaborations or work opportunities.\n          </p>\n        </div>\n      </div>\n      <div class=\"wrapper-right\">\n        <canvas></canvas>\n        <div class='slider' style='display: none'>\n          <div class='slide current'></div>\n          <div class='slide'></div>\n          <div class='slide'></div>\n          <div class='slide'></div>\n          <div class='slide'></div>\n          <div class='slide'></div>\n          <div class='slide'></div>\n          <div class='slide'></div>\n          <button id='prev'><i class='fas fa-angle-left'></i></button>\n          <button id='next'><i class='fas fa-angle-right'></i></button>\n        </div>\n        <div id=\"certificate\" style='display: none'>\n          <img src=\"" + __webpack_require__(/*! ./src/images/fullstack-certificate-Veronica.png */ "./src/images/fullstack-certificate-Veronica.png") + "\" alt=\"Le Wagon Certificate\">\n        </div>\n      </div>\n    </div>\n  </body>\n</html>\n\n\n\n\n\n\n\n\n\n\n\n";

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/stylesheets/components/carousel.css":
/*!***************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/stylesheets/components/carousel.css ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! ../../images/cnd-ice-main-desktop-Macbook.png */ "./src/images/cnd-ice-main-desktop-Macbook.png");
var ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(/*! ../../images/cnd-ice-main-iPhone.png */ "./src/images/cnd-ice-main-iPhone.png");
var ___CSS_LOADER_URL_IMPORT_2___ = __webpack_require__(/*! ../../images/cnd-ice-sunshine-iPhone.png */ "./src/images/cnd-ice-sunshine-iPhone.png");
var ___CSS_LOADER_URL_IMPORT_3___ = __webpack_require__(/*! ../../images/cnd-ice-update-desc-iPhone.png */ "./src/images/cnd-ice-update-desc-iPhone.png");
var ___CSS_LOADER_URL_IMPORT_4___ = __webpack_require__(/*! ../../images/uproot.herokuapp.com-iPad.png */ "./src/images/uproot.herokuapp.com-iPad.png");
var ___CSS_LOADER_URL_IMPORT_5___ = __webpack_require__(/*! ../../images/uproot.herokuapp.com_question_1.png */ "./src/images/uproot.herokuapp.com_question_1.png");
var ___CSS_LOADER_URL_IMPORT_6___ = __webpack_require__(/*! ../../images/airpet-u2v22-Macbook.png */ "./src/images/airpet-u2v22-Macbook.png");
var ___CSS_LOADER_URL_IMPORT_7___ = __webpack_require__(/*! ../../images/airpet-u2v22.herokuapp.com1-Macbook.png */ "./src/images/airpet-u2v22.herokuapp.com1-Macbook.png");
exports = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_5___);
var ___CSS_LOADER_URL_REPLACEMENT_6___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_6___);
var ___CSS_LOADER_URL_REPLACEMENT_7___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_7___);
// Module
exports.push([module.i, ".slider {\n  position: relative;\n  overflow: hidden;\n  height: 600px;/*calc(100vh - 55px);*/\n  width: 45vw;\n  justify-content: space-between;\n  vertical-align: middle;\n}\n\n.slide {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  opacity: 0;\n  transition: opacity 0.7s ease-in-out;\n}\n\n.slide.current {\n  opacity: 1;\n}\n\n.slide:nth-child(1) {\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") no-repeat center center/contain;\n}\n\n.slide:nth-child(2) {\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") no-repeat center top/contain;\n}\n\n.slide:nth-child(3) {\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") no-repeat center center/contain;\n}\n\n.slide:nth-child(4) {\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") no-repeat center center/contain;\n}\n\n.slide:nth-child(5) {\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ") no-repeat center center/contain;\n}\n.slide:nth-child(6) {\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ") no-repeat center center/contain;\n}\n.slide:nth-child(7) {\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_6___ + ") no-repeat center center/contain;\n}\n.slide:nth-child(8) {\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_7___ + ") no-repeat center center/contain;\n}\n\nbutton {\n  position: relative;\n  height: 20px;\n  top: 300px; /*navbar & half image*/\n  background-color: transparent;\n  cursor: pointer;\n  outline: none;\n  border: none;\n  font-size: 22px;\n}\n\n#prev {\n  left: 35px;\n}\n\n#next {\n  right: 35px;\n}\n\n@media(max-width: 768px) {\n  .slider {\n    width: 100%;\n  }\n}\n\n@media(max-width: 668px) { /*587*/\n  #next {\n    padding-right: 20px;\n  }\n  #prev {\n    padding-left: 20px;\n  }\n}\n\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/stylesheets/components/certificate.css":
/*!******************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/stylesheets/components/certificate.css ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "#certificate {\n  justify-content: flex-end;\n  width: 45vw;\n  position: relative;\n  padding-right: 20px;\n}\n\n#certificate > img {\n  display: block;\n  position: absolute;\n  width: 100%;\n  object-fit: contain;\n  top: 10%;\n}\n\n\n@media(max-width: 768px) {\n  #certificate {\n    width: 100%;\n    padding: 0 10px;\n  }\n}\n\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/stylesheets/components/fonts.css":
/*!************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/stylesheets/components/fonts.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "body {\n  margin: 0;\n  font-family: 'Heebo';\n  font-weight: 300;\n}\n\nh1 {\n  font-weight: 300;\n}\n\nh2 {\n  font-weight: 300;\n}\n\nh3 {\n  font-weight: 300;\n}\n\nh3:hover {\n  cursor: pointer;\n}\n\np {\n  font-size: 14px;\n  font-weight: 300;\n  text-align: justify;\n}\n\na {\n  text-decoration: none;\n  color: black;\n}\n\ni {\n  font-size: 14px;\n}\n\nul {\n  padding: 0 20px;\n}\n\nli {\n  list-style: none;\n  text-decoration: none;\n}\n\n#highlight {\n  text-decoration: underline;\n  color: rgb(116,152,140);\n}\n\n@media(max-width: 668px) {\n  p {\n    font-size: 12px;\n  }\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/stylesheets/components/footer.css":
/*!*************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/stylesheets/components/footer.css ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "/*footer {\n  justify-content: center;\n  margin-bottom: 10px;\n  margin-top: 10px;\n}\n\nfooter > div {\n  text-align: center;\n}\n\nfooter > div > a {\n  padding: 0 10px;\n  text-align: center;\n}\n\n@media(max-width: 768px) {\n  flex-direction: column;\n}\n*/\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/stylesheets/components/layout.css":
/*!*************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/stylesheets/components/layout.css ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".container {\n  width: 100vw;\n  height: 100%;\n  display: flex;\n}\n\n.wrapper-left {\n  width: 55vw;\n}\n\n.wrapper-right {\n  display: flex;\n}\n\n.content {\n  padding: 0 60px;\n}\n\ncanvas {\n  justify-content: flex-end;\n  width: 45vw;\n}\n\n.navbar-layout {\n  display: flex;\n  justify-content: flex-end;\n}\n\n@media(max-width: 768px) {\n  .container {\n    flex-direction: column;\n  }\n  .wrapper-left {\n    width: 100%;\n  }\n  .wrapper-right {\n    width: 100%;\n  }\n  canvas {\n    width: 100vw;\n  }\n}\n\n@media(max-width: 480px) {\n  .content {\n    padding: 0 20px;\n  }\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/stylesheets/components/navbar.css":
/*!*************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/stylesheets/components/navbar.css ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".navbar {\n  display: flex;\n  width: 30%;\n  justify-content: space-around;\n}\n\n.navbar li {\n  list-style: none;\n  text-decoration: none;\n  font-size: 14px;\n}\n\n.navbar li:hover {\n  cursor: pointer;\n}\n\n@media(max-width: 1600px) {\n  .navbar {\n    width: 35%;\n    font-size: 14px;\n  }\n}\n\n@media(max-width: 992px) {\n  .navbar {\n    width: 55%;\n    font-size: 14px;\n  }\n}\n\n@media(max-width: 668px) {\n  .navbar {\n    width: 75%;\n    font-size: 14px;\n  }\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/stylesheets/style.css":
/*!*************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/stylesheets/style.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_AT_RULE_IMPORT_0___ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./components/navbar.css */ "./node_modules/css-loader/dist/cjs.js!./src/stylesheets/components/navbar.css");
var ___CSS_LOADER_AT_RULE_IMPORT_1___ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./components/layout.css */ "./node_modules/css-loader/dist/cjs.js!./src/stylesheets/components/layout.css");
var ___CSS_LOADER_AT_RULE_IMPORT_2___ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./components/fonts.css */ "./node_modules/css-loader/dist/cjs.js!./src/stylesheets/components/fonts.css");
var ___CSS_LOADER_AT_RULE_IMPORT_3___ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./components/carousel.css */ "./node_modules/css-loader/dist/cjs.js!./src/stylesheets/components/carousel.css");
var ___CSS_LOADER_AT_RULE_IMPORT_4___ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./components/footer.css */ "./node_modules/css-loader/dist/cjs.js!./src/stylesheets/components/footer.css");
var ___CSS_LOADER_AT_RULE_IMPORT_5___ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./components/certificate.css */ "./node_modules/css-loader/dist/cjs.js!./src/stylesheets/components/certificate.css");
exports = ___CSS_LOADER_API_IMPORT___(false);
exports.i(___CSS_LOADER_AT_RULE_IMPORT_0___);
exports.i(___CSS_LOADER_AT_RULE_IMPORT_1___);
exports.i(___CSS_LOADER_AT_RULE_IMPORT_2___);
exports.i(___CSS_LOADER_AT_RULE_IMPORT_3___);
exports.i(___CSS_LOADER_AT_RULE_IMPORT_4___);
exports.i(___CSS_LOADER_AT_RULE_IMPORT_5___);
// Module
exports.push([module.i, "canvas {\n  overflow-y: hidden;\n}\n\n* {\n  box-sizing: border-box;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, '\\n'), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/images/airpet-u2v22-Macbook.png":
/*!*********************************************!*\
  !*** ./src/images/airpet-u2v22-Macbook.png ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/airpet-u2v22-Macbook.png";

/***/ }),

/***/ "./src/images/airpet-u2v22.herokuapp.com1-Macbook.png":
/*!************************************************************!*\
  !*** ./src/images/airpet-u2v22.herokuapp.com1-Macbook.png ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/airpet-u2v22.herokuapp.com1-Macbook.png";

/***/ }),

/***/ "./src/images/cnd-ice-main-desktop-Macbook.png":
/*!*****************************************************!*\
  !*** ./src/images/cnd-ice-main-desktop-Macbook.png ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/cnd-ice-main-desktop-Macbook.png";

/***/ }),

/***/ "./src/images/cnd-ice-main-iPhone.png":
/*!********************************************!*\
  !*** ./src/images/cnd-ice-main-iPhone.png ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/cnd-ice-main-iPhone.png";

/***/ }),

/***/ "./src/images/cnd-ice-sunshine-iPhone.png":
/*!************************************************!*\
  !*** ./src/images/cnd-ice-sunshine-iPhone.png ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/cnd-ice-sunshine-iPhone.png";

/***/ }),

/***/ "./src/images/cnd-ice-update-desc-iPhone.png":
/*!***************************************************!*\
  !*** ./src/images/cnd-ice-update-desc-iPhone.png ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/cnd-ice-update-desc-iPhone.png";

/***/ }),

/***/ "./src/images/fullstack-certificate-Veronica.png":
/*!*******************************************************!*\
  !*** ./src/images/fullstack-certificate-Veronica.png ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/fullstack-certificate-Veronica.png";

/***/ }),

/***/ "./src/images/uproot.herokuapp.com-iPad.png":
/*!**************************************************!*\
  !*** ./src/images/uproot.herokuapp.com-iPad.png ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/uproot.herokuapp.com-iPad.png";

/***/ }),

/***/ "./src/images/uproot.herokuapp.com_question_1.png":
/*!********************************************************!*\
  !*** ./src/images/uproot.herokuapp.com_question_1.png ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/uproot.herokuapp.com_question_1.png";

/***/ }),

/***/ "./src/js/canvas.js":
/*!**************************!*\
  !*** ./src/js/canvas.js ***!
  \**************************/
/*! exports provided: Particle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Particle", function() { return Particle; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/js/utils.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_utils__WEBPACK_IMPORTED_MODULE_0__);

var navBar = document.querySelector('.navbar-layout');
var leftSideWrapper = document.querySelector('.wrapper-left');
var rightSideWrapper = document.querySelector('.wrapper-right');
var home = document.getElementById('home');
var contact = document.getElementById('contact');
var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');
var gravity = 1;
var friction = 0.8;
canvas.width = canvas.clientWidth;

if (innerWidth <= 768) {
  canvas.height = innerHeight - navBar.clientHeight - leftSideWrapper.offsetHeight;
  console.log(canvas.height);
} else {
  canvas.height = innerHeight - navBar.clientHeight;
} // Event Listeners


addEventListener('resize', function () {
  canvas.width = leftSideWrapper.clientWidth;

  if (innerWidth <= 768) {
    canvas.height = innerHeight - navBar.clientHeight - leftSideWrapper.clientHeight;
  } else {
    canvas.height = innerHeight - navBar.clientHeight;
  }

  console.log("canvas height: ".concat(canvas.height));
  init();
}); // addEventListener('click', () => {
//   canvas.width = leftSideWrapper.clientWidth;
//   if(innerWidth <= 768){
//     canvas.height = innerHeight - navBar.clientHeight - leftSideWrapper.clientHeight;
//   } else {
//     canvas.height = innerHeight - navBar.clientHeight;
//   }
//   init()
// });
// Utility functions

function randomIntFromRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomColor(colors) {
  return colors[Math.floor(Math.random() * colors.length)];
}

function distance(x1, y1, x2, y2) {
  var xDist = x2 - x1;
  var yDist = y2 - y1;
  return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2));
}
/**
 * Rotates coordinate system for velocities
 *
 * Takes velocities and alters them as if the coordinate system they're on was rotated
 *
 * @param  Object | velocity | The velocity of an individual particle
 * @param  Float  | angle    | The angle of collision between two objects in radians
 * @return Object | The altered x and y velocities after the coordinate system has been rotated
 */


function rotate(velocity, angle) {
  var rotatedVelocities = {
    x: velocity.x * Math.cos(angle) - velocity.y * Math.sin(angle),
    y: velocity.x * Math.sin(angle) + velocity.y * Math.cos(angle)
  };
  return rotatedVelocities;
}
/**
 * Swaps out two colliding particles' x and y velocities after running through
 * an elastic collision reaction equation
 *
 * @param  Object | particle      | A particle object with x and y coordinates, plus velocity
 * @param  Object | otherParticle | A particle object with x and y coordinates, plus velocity
 * @return Null | Does not return a value
 */


function resolveCollision(particle, otherParticle) {
  var xVelocityDiff = particle.velocity.x - otherParticle.velocity.x;
  var yVelocityDiff = particle.velocity.y - otherParticle.velocity.y;
  var xDist = otherParticle.x - particle.x;
  var yDist = otherParticle.y - particle.y; // Prevent accidental overlap of particles

  if (xVelocityDiff * xDist + yVelocityDiff * yDist >= 0) {
    // Grab angle between the two colliding particles
    var angle = -Math.atan2(otherParticle.y - particle.y, otherParticle.x - particle.x); // Store mass in var for better readability in collision equation

    var m1 = particle.mass;
    var m2 = otherParticle.mass; // Velocity before equation

    var u1 = rotate(particle.velocity, angle);
    var u2 = rotate(otherParticle.velocity, angle); // Velocity after 1d collision equation

    var v1 = {
      x: u1.x * (m1 - m2) / (m1 + m2) + u2.x * 2 * m2 / (m1 + m2),
      y: u1.y
    };
    var v2 = {
      x: u2.x * (m1 - m2) / (m1 + m2) + u1.x * 2 * m2 / (m1 + m2),
      y: u2.y
    }; // Final velocity after rotating axis back to original location

    var vFinal1 = rotate(v1, -angle);
    var vFinal2 = rotate(v2, -angle); // Swap particle velocities for realistic bounce effect

    particle.velocity.x = vFinal1.x * friction;
    particle.velocity.y = vFinal1.y * friction;
    otherParticle.velocity.x = vFinal2.x * friction;
    otherParticle.velocity.y = vFinal2.y * friction;
  }
} // Objects


var particles;
function Particle(x, y, radius, color) {
  var _this = this;

  this.x = x;
  this.y = y; // this.dy = dy

  this.velocity = {
    x: Math.random() - 0.5 * 3,
    y: Math.random() - 0.5 * 3
  };
  this.radius = radius;
  this.color = color;
  this.mass = 1; //Math.random()

  this.update = function (particles) {
    _this.draw();

    for (var i = 0; i < particles.length; i++) {
      if (_this === particles[i]) continue;

      if (distance(_this.x, _this.y, particles[i].x, particles[i].y) - _this.radius - particles[i].radius < 0) {
        resolveCollision(_this, particles[i]);
      }
    } // Ensuring the balls don't excape from the sides


    if (_this.x - _this.radius <= 0 || _this.x + _this.radius >= canvas.width) {
      _this.velocity.x = -_this.velocity.x;
    } // Ensuring the balls don't excape from the top and bottom


    if (_this.y - _this.radius <= 0) {
      _this.velocity.y = -(_this.velocity.y - 5); //-this.dy;
    } else if (_this.y + _this.radius >= canvas.height) {
      _this.velocity.y = -_this.velocity.y * friction; //-this.dy;
    }

    _this.x += _this.velocity.x;
    _this.y += _this.velocity.y;
  };

  this.draw = function () {
    c.beginPath();
    c.arc(_this.x, _this.y, _this.radius, 0, Math.PI * 2, false);
    c.font = "20px Georgia";
    c.fillStyle = _this.color;
    c.fill();
    c.closePath();
  };
} // Implementation

function init() {
  particles = [];
  var colors = ['rgb(235, 82, 71)', 'rgb(114, 201, 194)', 'rgb(134, 167, 158)', 'rgb(183, 85, 74)'];
  var ballsSmallScreen = 6;
  var ballsMediumScreen = 8;
  var ballsLargeScreen = 12;
  var radius;
  var ballsQuantity = ballsSmallScreen;

  if (canvas.height <= 300) {
    ballsQuantity = ballsSmallScreen;
    console.log('small balls');
  } else if (innerWidth <= 578) {
    ballsQuantity = ballsMediumScreen;
    console.log('med balls');
  } else if (innerWidth <= 768 && innerWidth > 578) {
    ballsQuantity = ballsLargeScreen;
    console.log('lg balls');
  } else {
    ballsQuantity = ballsLargeScreen;
    console.log('lg balls else');
  }

  for (var i = 0; i < ballsQuantity; i++) {
    if (innerWidth <= 578 && innerHeight <= 300) {
      radius = randomIntFromRange(12, 24);
    } else if (innerWidth <= 578) {
      radius = randomIntFromRange(20, 40);
    } else if (innerWidth <= 768 && innerWidth > 578) {
      radius = randomIntFromRange(20, 50);
    } else {
      radius = randomIntFromRange(20, 60);
    }

    var color = randomColor(colors);
    var x = randomIntFromRange(radius, canvas.width - radius);
    var y = randomIntFromRange(radius, canvas.height - radius);

    if (i !== 0) {
      for (var j = 0; j < particles.length; j++) {
        if (distance(x, y, particles[j].x, particles[j].y) - radius - particles[j].radius < 0) {
          x = randomIntFromRange(radius, canvas.width - radius);
          y = randomIntFromRange(radius, canvas.height - radius);
          j = -1;
        }
      }
    }

    particles.push(new Particle(x, y, radius, color));
  }
} // Animation Loop


function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach(function (particle) {
    particle.update(particles);
  });
}

init();
animate();

/***/ }),

/***/ "./src/js/carousel.js":
/*!****************************!*\
  !*** ./src/js/carousel.js ***!
  \****************************/
/*! exports provided: autoStart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "autoStart", function() { return autoStart; });
function autoStart() {
  var slides = document.querySelectorAll('.slide');
  var prev = document.getElementById('prev');
  var next = document.getElementById('next');
  var auto = true;
  var intervalTime = 2000;
  var slideInterval;

  if (slides) {
    console.log('has slides');

    var nextSlide = function nextSlide() {
      var current = document.querySelector('.current'); // current.classList.remove('current');

      if (current.nextElementSibling && current.nextElementSibling.nodeName != "BUTTON") {
        current.nextElementSibling.classList.add('current');
      } else {
        slides[0].classList.add('current');
      }

      setTimeout(function () {
        return current.classList.remove('current');
      });
    };

    var prevSlide = function prevSlide() {
      var current = document.querySelector('.current');
      current.classList.remove('current');

      if (current.previousElementSibling && current.previousElementSibling.nodeName != "BUTTON") {
        current.previousElementSibling.classList.add('current');
      } else {
        slides[slides.length - 1].classList.add('current');
      }

      setTimeout(function () {
        return current.classList.remove('current');
      });
    };

    prev.addEventListener('click', function (event) {
      prevSlide();

      if (auto) {
        clearInterval(slideInterval);
        slideInterval = setInterval(prevSlide, intervalTime);
      }
    });
    next.addEventListener('click', function (event) {
      nextSlide();

      if (auto) {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, intervalTime);
      }
    });

    if (auto) {
      slideInterval = setInterval(nextSlide, intervalTime);
    }
  }
}

/***/ }),

/***/ "./src/js/contact.js":
/*!***************************!*\
  !*** ./src/js/contact.js ***!
  \***************************/
/*! exports provided: insertContact */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "insertContact", function() { return insertContact; });
function insertContact() {
  var leftSideWrapper = document.querySelector('.content');
  leftSideWrapper.innerHTML = "";
  leftSideWrapper.insertAdjacentHTML("beforeend", " \
    <h1>Hello</h1> \
    <p>Shoot me an email at <a id='highlight' href='mailto:veronica.wajda@gmail.com'>veronica.wajda@gmail.com</a> if you have any interesting projects or would like to discuss any work opportunities.</p> \
    <img src='https://simplemaps.com/static/svg/ca/ca.svg' style='width:200px; display: block; display: relative; margin:0 auto; '> \
    <p> \
    Located in Calgary, Ab, Canada. <br><br> \
    Find my work on: \
    <a id='highlight' href='https://github.com/u2v22' target='_blank'><i class='fab fa-github'></i> Github</a>. <br><br>\
    Discover out what I'm all about on my: \
    <a id='highlight' href='https://www.instagram.com/veronica_hw/' target='_blank'><i class='fab fa-instagram'></i> Instagram</a><br> \
    ...or check out this and more of my experience on \
    <a id='highlight' href='https://www.linkedin.com/in/veronicahwajda/' target='_blank'><i class='fab fa-linkedin'></i> LinkedIn</a>.</p> \
    ");
}

/***/ }),

/***/ "./src/js/courses.js":
/*!***************************!*\
  !*** ./src/js/courses.js ***!
  \***************************/
/*! exports provided: insertCourses */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "insertCourses", function() { return insertCourses; });
function insertCourses() {
  var leftSideWrapper = document.querySelector('.content');
  leftSideWrapper.innerHTML = "";
  leftSideWrapper.insertAdjacentHTML("beforeend", "\
    <h1>Courses</h1> \
    <h3>React and Redux - current WIP </h3> \
    <p>App: Constructor, Render, Props, States | Action creator as callback | React and Redux logger Redux promises | Routing and form Testing with Jest \
    </p> \
    <h3>Full Stack Dev</h3> \
    <p> \
    Web 101: how the web works | Terminal basic commands | Git basic commands | HTML / CSS foundations | Javascript foundations | Core concepts of programming | Ruby doc for built-in classes | Algorithms & data structures (Array, Hash) | Text pattern detection with Regular Expressions | Parse and store data from standardized files (JSON, CSV, XML) | Web scraping with Nokogiri | Request and parse data from RESTful JSON APIs | Core concepts of Object-Oriented programming | Classes, objects and instance variables | Instance and class methods, Inheritance | Public vs. Private Interfaces | Routing users' requests | Simulating a database with CSV files | In-depth understanding of MVC (Model View Controller) | Database Schema Design & SQL | One-to-many, many-to-many relations and join table | CRUD in SQL (Create, Read, Update, Delete) | Advanced JOIN queries | Connecting your DB to ruby with an ORM (Object Relational Mapping) | Active Record Basics: migrations & naming convention | Active Record Advanced: associations & validation | Product Design, UX & UI principles | HTML basics | CSS (selectors, properties, stylesheets' organization) | Atomic design principles | CSS techniques with flexbox & CSS grid | Bootstrap basics & Responsive Grid System | JavaScript fundamentals | ES6 and differences to ES5 | JavaScript Tooling (Babel, Webpack, yarn) | DOM Events & AJAX | MVC in Rails: Routing, Controllers, Params & Views | Models & CRUD in Rails | Adding gems to your project | ERB: Layouts, Partials and Helpers | Nested Resources and Namespaces | Refactoring an app with Services | Defining a Rails API | Collaborating on a Rails app with Git and Github | Testing in Rails with Rspec | Authentication with Devise | Omniauth and 3rd services' login | Users' authorization | Search in Rails | Payment, Mailing, Geocoding and Maps | Background Jobs with Sidekiq | Image upload with Cloudinary & Continuous Deployment with Heroku \
    </p> \
    <h3>B.A.Sc. Mechanical Engineering</h3> \
    <p> \
    Engineering Design | Principles of Chemistry | Engineering Mechanics | Fundamentals of Engineering Computation | Calculus I | Technical Report Writing | Calculus II | Introduction to Linear Algebra | Introduction to Mechanical Engineering | Fundamentals of Physics II | Introduction to Product Development for Engineers and Computer Scientists | Calculus III for Engineers | Ordinary Differential Equations and Numerical Methods | Mechanics II | Thermodynamics I | Engineering Materials I | Mechanics of Materials | Electric Circuits and Machines for Mechanical Engineering | Probability and Statistics for Engineers | Introduction to Design | Thermodynamics II | Engineering Materials II | Electronics for Mechanical Engineers | Mathematics for Engineers | Advanced Strength of Materials | System Dynamics | Fluid Mechanics I | Engineering Law | Heat Transfer | Dynamics of Machinery | Machine Design | Control Systems | Fluid Mechanics II | Computer-Aided Design | Manufacturing | Technology, Society and Environment since 1800 | Mechanical Vibration Analysis | Mechanical Engineering Laboratory \
    </p>");
}

/***/ }),

/***/ "./src/js/home.js":
/*!************************!*\
  !*** ./src/js/home.js ***!
  \************************/
/*! exports provided: insertHome */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "insertHome", function() { return insertHome; });
function insertHome() {
  var leftSideWrapper = document.querySelector('.content');
  leftSideWrapper.innerHTML = "";
  leftSideWrapper.insertAdjacentHTML("beforeend", "<h1>Veronica Wajda</h1><p>An Engineer turned programmer. <br><br>Up and away from Calgary I ventured to Barcelona Spain in the last few months to attend Le Wagon's coding bootcamp.There I learned so much from the fundamentals of programming to creating an app from scratch within a week. Working in teams of four we prototyped and designed each element. The back end, completed in Ruby using authentication, geocoding, and so much more. Each web application was executed in Ruby on Rails with interactive components using JavaScript.<br><br>Today I continue to hone these skill as well as grow them. Currently learning React & Redux as well as node.js. Take a look around and browse my work. Let's meet over coffee if you have any interesting collaborations or work opportunities.</p>");
}

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ "./src/js/home.js");
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects */ "./src/js/projects.js");
/* harmony import */ var _courses__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./courses */ "./src/js/courses.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact */ "./src/js/contact.js");
/* harmony import */ var _carousel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./carousel */ "./src/js/carousel.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils */ "./src/js/utils.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_utils__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _stylesheets_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../stylesheets/style.css */ "./src/stylesheets/style.css");
/* harmony import */ var _stylesheets_style_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_stylesheets_style_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../index.html */ "./index.html");
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_index_html__WEBPACK_IMPORTED_MODULE_7__);
// NAV JS PAGES - LHS




 // MEDIA - RHS

__webpack_require__(/*! ./canvas */ "./src/js/canvas.js"); // import { init, animate } from './canvas';



 // STYLE SHEETS and HTML


 // VARIABLES

var home = document.getElementById('home');
var projects = document.getElementById('projects');
var courses = document.getElementById('courses');
var contact = document.getElementById('contact');
var cert = document.getElementById('certificate');
var canvas = document.querySelector('canvas');
var slider = document.querySelector('.slider');
var navBar = document.querySelector('.navbar-layout');
var leftSideWrapper = document.querySelector('.wrapper-left'); // EVENT LISTENERS

home.onclick = function () {
  Object(_home__WEBPACK_IMPORTED_MODULE_0__["insertHome"])();
  canvas.style.display = 'flex';
  slider.style.display = 'none';
  cert.style.display = 'none';
  canvas.width = canvas.clientWidth;

  if (innerWidth <= 768) {
    canvas.height = innerHeight - navBar.clientHeight - leftSideWrapper.offsetHeight;
  } else {
    canvas.height = innerHeight - navBar.clientHeight;
  }
};

projects.addEventListener('click', function (event) {
  canvas.style.display = 'none';
  slider.style.display = 'flex';
  cert.style.display = 'none';
  Object(_projects__WEBPACK_IMPORTED_MODULE_1__["insertProjects"])();
  Object(_carousel__WEBPACK_IMPORTED_MODULE_4__["autoStart"])();
});
courses.addEventListener('click', function (event) {
  Object(_courses__WEBPACK_IMPORTED_MODULE_2__["insertCourses"])();
  cert.style.display = 'flex';
  canvas.style.display = 'none';
  slider.style.display = 'none';
});
contact.addEventListener('click', function (event) {
  Object(_contact__WEBPACK_IMPORTED_MODULE_3__["insertContact"])();
  canvas.style.display = 'flex';
  slider.style.display = 'none';
  cert.style.display = 'none'; // canvas.width = leftSideWrapper.clientWidth;
  // if(innerWidth <= 768){
  //   canvas.height = innerHeight - navBar.clientHeight - leftSideWrapper.clientHeight;
  // } else {
  //   canvas.height = innerHeight - navBar.clientHeight;
  // }
});

/***/ }),

/***/ "./src/js/projects.js":
/*!****************************!*\
  !*** ./src/js/projects.js ***!
  \****************************/
/*! exports provided: insertProjects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "insertProjects", function() { return insertProjects; });
function insertProjects() {
  var leftSideWrapper = document.querySelector('.content');
  leftSideWrapper.innerHTML = "";
  leftSideWrapper.insertAdjacentHTML("beforeend", " \
    <h3><a href='http://cnd-rockies-ice-climbs.herokuapp.com' target='_blank'>Cnd-Rockies-Ice-Climbs</a></h3> \
    <p>Ever wanted to find ice conditions on a specific climb? Or filter out ice climbs that are formed? What about having a community where anyone can update a trip description as routes change (anchors, approaches)? Canadian Rockies Ice Climbs is a website dedicated to those adventurous individuals that want to keep track of, and share beta about ice climbs specific to the Canadian rocky mountains.</p> \
    <h3><a href='http://www.uproot.live' target='_blank'>Uproot</a></h3> \
    <p>As we were all preparing to leave Barcelona everyone wondered where they would end up. France, Monaco, USA? It's a problem most of us were faced with: do we go back home or make somewhere new our home? Uproot is a mobile first web application designed to help you decide just that. Unlike typical information first websites Uproot uses a fun interactive quiz to help you decide where to relocate. You can manage your results if you do multiple quizzes. If you're not convinced then you can use the city lookup function to compare stats about the cities where you might consider living. </p> \
    <h3><a href='http://airpet-u2v22@herokuapp.com' target='_blank'> Airpet </a></h3> \
    <p>A fun little Airbnb inspired replicate. Shelters can list available pets so people can have furry companions on a short term basis. Great for listing your pets while you're on vacation too!</p> \
    ");
}

/***/ }),

/***/ "./src/js/utils.js":
/*!*************************!*\
  !*** ./src/js/utils.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

function randomIntFromRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomColor(colors) {
  return colors[Math.floor(Math.random() * colors.length)];
}

function distance(x1, y1, x2, y2) {
  var xDist = x2 - x1;
  var yDist = y2 - y1;
  return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2));
}

module.exports = {
  randomIntFromRange: randomIntFromRange,
  randomColor: randomColor,
  distance: distance
};

/***/ }),

/***/ "./src/stylesheets/style.css":
/*!***********************************!*\
  !*** ./src/stylesheets/style.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/stylesheets/style.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ })

/******/ });
//# sourceMappingURL=bundle.f4823146cea7e84e67c1.js.map