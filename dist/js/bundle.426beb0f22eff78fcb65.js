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
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n    <meta name=\"description\" content=\"My current work\">\n    <title> VHW | Portfolio </title>\n    <link rel=\"stylesheet\" href=\"https://use.fontawesome.com/releases/v5.0.10/css/all.css\">\n    <link href=\"https://fonts.googleapis.com/css?family=Heebo:100,300,400&display=swap\" rel=\"stylesheet\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n  <link rel=\"shortcut icon\" href=\"favicon.ico\"></head>\n\n  <body>\n    <div class=\"navbar-layout\">\n      <ul class=\"navbar\">\n        <li id=\"home\">Home</li>\n        <li id=\"projects\">Projects</li>\n        <li id=\"courses\">Courses</li>\n        <li id=\"contact\">Contact</li>\n        <li>\n          <a href=\"https://www.instagram.com/veronica_hw/\" target=\"_blank\">\n            <i class=\"fab fa-instagram\"></i>\n          </a>\n        </li>\n        <li>\n          <a href=\"https://www.linkedin.com/in/veronicahwajda/\" target=\"_blank\">\n            <i class=\"fab fa-linkedin-in\"></i>\n          </a>\n        </li>\n        <li>\n          <a href=\"https://github.com/u2v22\" target=\"_blank\">\n            <i class=\"fab fa-github\"></i>\n          </a>\n        </li>\n      </ul>\n    </div>\n    <div class=\"container\">\n      <div class=\"content-wrapper\">\n        <div class=\"content\">\n        <h1>Veronica Wajda</h1>\n        <p>An Engineer turned programmer. <br><br>\n           Up and away from Calgary I ventured to Barcelona Spain in the last few months to attend Le Wagon's coding bootcamp.\n           There I learned so much from the fundamentals of programming to creating an app from scratch within a week. Working\n           in teams of four we prototyped and designed each element. The back end, completed in Ruby using authentication,\n           geocoding, and so much more. Each web application was executed in Ruby on Rails with interactive components using JavaScript.\n            <br><br>\n           Today I continue to hone these skill as well as grow them. Currently learning React & Redux as well as node.js. Take\n           a look around and browse my work. Let's meet over coffee if you have any interesting collaborations or work opportunities.\n        </p>\n        </div>\n      </div>\n      <div class=\"wrapper-carousel\">\n        <!-- <canvas></canvas> -->\n        <div class=\"current\"></div>\n        <div></div>\n        <div></div>\n        <div></div>\n      </div>\n      <div class=\"buttons\">\n        <button id=\"prev\"><i class=\"fas fa-angle-left\"></i></button>\n        <button id=\"next\"><i class=\"fas fa-angle-right\"></i></button>\n      </div>\n    </div>\n  </body>\n</html>\n";

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
exports = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_3___);
// Module
exports.push([module.i, ".wrapper-carousel {\n  overflow: hidden;\n  height: calc(100vh-55px);\n  position: relative;\n  width: 45vw;\n  opacity: 0;\n  transition: opacity 0.4s ease-in-out;\n}\n\n/*.carousel {\n  position: absolute;\n  height: 600px;\n  width: 300px;\n}*/\n\n.current{\n  opacity: 1;\n}\n\n.wrapper-carousel:first-child {\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") no-repeat center top/cover;\n}\n\n.wrapper-carousel:nth-child(2) {\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") no-repeat center top/cover;\n}\n\n.wrapper-carousel:nth-child(3) {\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") no-repeat center top/cover;\n}\n\n.wrapper-carousel:nth-child(4) {\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") no-repeat center top/cover;\n}\n\n.buttons button{\n  border: solid 2px white;\n  background-color: pink; /*transparent*/\n  color: white;\n  cursor: pointer;\n  border-radius: 50%;\n  outline: none;\n  font-size: 14px;\n}\n\n.buttons button:hover {\n  background-color: white;\n  color: black;\n}\n\n.buttons button#prev {\n  position: absolute;\n  bottom: calc((100vh - 55px)/2);\n  left: calc(55vw + 15px);\n  padding: 6px 10px 6px 8px;\n}\n\n.buttons button#next {\n  position: absolute;\n  bottom: calc((100vh - 55px)/2);\n  padding: 6px 8px 6px 10px;\n  right: 15px;\n}\n", ""]);
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
exports.push([module.i, "h1 {\n  font-weight: 300;\n}\n\nh2 {\n  font-weight: 300;\n}\n\nh3 {\n  font-weight: 300;\n}\n\nh3:hover {\n  cursor: pointer;\n}\n\nh4 {\n  font-weight: 300;\n}\n\nh5 {\n  font-weight: 300;\n}\n\nh6 {\n  font-weight: 300;\n}\n\np {\n  font-size: 12px;\n  font-weight: 300;\n  text-align: justify;\n}\n\na {\n  text-decoration: none;\n  color: black;\n}\n", ""]);
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
exports.push([module.i, "body {\n  margin: 0;\n  font-family: 'Heebo';\n  font-weight: 300;\n}\n\nli {\n  list-style: none;\n  text-decoration: none;\n}\n\n.container {\n  display: flex;\n}\n\n.content-wrapper {\n  width: 55vw;\n}\n\n.content {\n  margin: 0 auto;\n  width: 40vw;\n}\n\ncanvas {\n  justify-content: flex-end;\n  width: 60vw;\n}\n\n.navbar-layout {\n  display: flex;\n  justify-content: flex-end;\n}\n\n\n", ""]);
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
exports.push([module.i, ".navbar {\n  display: flex;\n  width: 40%;\n  justify-content: space-around;\n}\n\n.navbar li {\n  list-style: none;\n  text-decoration: none;\n}\n\n.navbar li:hover {\n  cursor: pointer;\n}\n\n\n@media(max-width: 668px) { /*587*/\n  .navbar {\n    width: 100%;\n    font-size: 14px;\n  }\n}\n", ""]);
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
exports = ___CSS_LOADER_API_IMPORT___(false);
exports.i(___CSS_LOADER_AT_RULE_IMPORT_0___);
exports.i(___CSS_LOADER_AT_RULE_IMPORT_1___);
exports.i(___CSS_LOADER_AT_RULE_IMPORT_2___);
exports.i(___CSS_LOADER_AT_RULE_IMPORT_3___);
// Module
exports.push([module.i, "canvas {\n  overflow-y: hidden;\n}\n", ""]);
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

/***/ "./src/images/cnd-ice-main-desktop-Macbook.png":
/*!*****************************************************!*\
  !*** ./src/images/cnd-ice-main-desktop-Macbook.png ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "images/cnd-ice-main-desktop-Macbook.png");

/***/ }),

/***/ "./src/images/cnd-ice-main-iPhone.png":
/*!********************************************!*\
  !*** ./src/images/cnd-ice-main-iPhone.png ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "images/cnd-ice-main-iPhone.png");

/***/ }),

/***/ "./src/images/cnd-ice-sunshine-iPhone.png":
/*!************************************************!*\
  !*** ./src/images/cnd-ice-sunshine-iPhone.png ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "images/cnd-ice-sunshine-iPhone.png");

/***/ }),

/***/ "./src/images/cnd-ice-update-desc-iPhone.png":
/*!***************************************************!*\
  !*** ./src/images/cnd-ice-update-desc-iPhone.png ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "images/cnd-ice-update-desc-iPhone.png");

/***/ }),

/***/ "./src/js/canvas.js":
/*!**************************!*\
  !*** ./src/js/canvas.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/js/utils.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_utils__WEBPACK_IMPORTED_MODULE_0__);

var navBar = document.querySelector('.navbar-layout');
var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');
canvas.width = canvas.clientWidth;
canvas.height = innerHeight - navBar.clientHeight;
console.log(innerWidth);
var gravity = 1;
var friction = 0.6;
var mouse = {
  x: innerWidth / 2,
  y: innerHeight / 2
};
var colors = ['rgb(235, 82, 71)', 'rgb(114, 201, 194', 'rgb(134, 167, 158', 'rgb(183, 85, 74)']; // Event Listeners

addEventListener('mousemove', function (event) {
  mouse.x = event.clientX;
  mouse.y = event.clientY;
});
addEventListener('resize', function () {
  canvas.width = canvas.clientWidth;
  canvas.height = canvas.clientHeight;
  init();
}); // Utility functions

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
    }

    if (_this.y - _this.radius <= 0) {
      _this.velocity.y = -(_this.velocity.y - 5); //-this.dy;
    } else if (_this.y + _this.radius >= innerHeight - navBar.clientHeight) {
      _this.velocity.y = -_this.velocity.y * friction; //-this.dy;
    }

    _this.x += _this.velocity.x;
    _this.y += _this.velocity.y;
  };

  this.draw = function () {
    c.beginPath();
    c.arc(_this.x, _this.y, _this.radius, 0, Math.PI * 2, false);
    c.font = "20px Georgia";
    c.fillStyle = _this.color; // was strokeStyle
    // c.fillStyle = pattern(<img src="https://img.icons8.com/color/48/000000/ruby-programming-language.png">, 0);

    c.fill(); // was c.stroke()
    // <img src="https://img.icons8.com/color/48/000000/ruby-programming-language.png">

    c.closePath();
  };
} // Implementation


var particles;

function init() {
  particles = [];

  for (var i = 0; i < 12; i++) {
    var radius = void 0;

    if (innerWidth <= 578) {
      radius = randomIntFromRange(15, 40);
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
  } // console.log(particles);

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

document.getElementById('home').onClick = function () {
  init();
  animate();
};

/***/ }),

/***/ "./src/js/carousel.js":
/*!****************************!*\
  !*** ./src/js/carousel.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /Users/veronica/code/u2v22/canvas-boilerplate/src/js/carousel.js: Support for the experimental syntax 'exportDefaultFrom' isn't currently enabled (32:8):\n\n\u001b[0m \u001b[90m 30 | \u001b[39m}\u001b[0m\n\u001b[0m \u001b[90m 31 | \u001b[39m\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 32 | \u001b[39m\u001b[36mexport\u001b[39m prev\u001b[33m.\u001b[39maddEventListener(\u001b[32m'click'\u001b[39m\u001b[33m,\u001b[39m (event) \u001b[33m=>\u001b[39m {\u001b[0m\n\u001b[0m \u001b[90m    | \u001b[39m       \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 33 | \u001b[39m  prevSlide()\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 34 | \u001b[39m  console\u001b[33m.\u001b[39mlog(\u001b[32m'running previous button'\u001b[39m)\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 35 | \u001b[39m})\u001b[0m\n\nAdd @babel/plugin-proposal-export-default-from (https://git.io/vb4yH) to the 'plugins' section of your Babel config to enable transformation.\n    at Parser.raise (/Users/veronica/code/u2v22/canvas-boilerplate/node_modules/@babel/parser/lib/index.js:7017:17)\n    at Parser.expectPlugin (/Users/veronica/code/u2v22/canvas-boilerplate/node_modules/@babel/parser/lib/index.js:8400:18)\n    at Parser.maybeParseExportDefaultSpecifier (/Users/veronica/code/u2v22/canvas-boilerplate/node_modules/@babel/parser/lib/index.js:11782:12)\n    at Parser.parseExport (/Users/veronica/code/u2v22/canvas-boilerplate/node_modules/@babel/parser/lib/index.js:11734:29)\n    at Parser.parseStatementContent (/Users/veronica/code/u2v22/canvas-boilerplate/node_modules/@babel/parser/lib/index.js:10794:27)\n    at Parser.parseStatement (/Users/veronica/code/u2v22/canvas-boilerplate/node_modules/@babel/parser/lib/index.js:10690:17)\n    at Parser.parseBlockOrModuleBlockBody (/Users/veronica/code/u2v22/canvas-boilerplate/node_modules/@babel/parser/lib/index.js:11264:25)\n    at Parser.parseBlockBody (/Users/veronica/code/u2v22/canvas-boilerplate/node_modules/@babel/parser/lib/index.js:11251:10)\n    at Parser.parseTopLevel (/Users/veronica/code/u2v22/canvas-boilerplate/node_modules/@babel/parser/lib/index.js:10621:10)\n    at Parser.parse (/Users/veronica/code/u2v22/canvas-boilerplate/node_modules/@babel/parser/lib/index.js:12222:10)\n    at parse (/Users/veronica/code/u2v22/canvas-boilerplate/node_modules/@babel/parser/lib/index.js:12273:38)\n    at parser (/Users/veronica/code/u2v22/canvas-boilerplate/node_modules/@babel/core/lib/transformation/normalize-file.js:168:34)\n    at normalizeFile (/Users/veronica/code/u2v22/canvas-boilerplate/node_modules/@babel/core/lib/transformation/normalize-file.js:102:11)\n    at runSync (/Users/veronica/code/u2v22/canvas-boilerplate/node_modules/@babel/core/lib/transformation/index.js:44:43)\n    at runAsync (/Users/veronica/code/u2v22/canvas-boilerplate/node_modules/@babel/core/lib/transformation/index.js:35:14)\n    at process.nextTick (/Users/veronica/code/u2v22/canvas-boilerplate/node_modules/@babel/core/lib/transform.js:34:34)\n    at process._tickCallback (internal/process/next_tick.js:61:11)");

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/js/utils.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_utils__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _stylesheets_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../stylesheets/style.css */ "./src/stylesheets/style.css");
/* harmony import */ var _stylesheets_style_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_stylesheets_style_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../index.html */ "./index.html");
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_html__WEBPACK_IMPORTED_MODULE_2__);
__webpack_require__(/*! ./pages */ "./src/js/pages.js");

__webpack_require__(/*! ./carousel */ "./src/js/carousel.js");

__webpack_require__(/*! ./canvas */ "./src/js/canvas.js");

 // import {nextSlide, prevSlide} from './carousel';




/***/ }),

/***/ "./src/js/pages.js":
/*!*************************!*\
  !*** ./src/js/pages.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

var projects = document.getElementById('projects');
var home = document.getElementById('home');
var contact = document.getElementById('contact');
var courses = document.getElementById('courses');
var wrapper = document.querySelector('.content');
var projectImages = document.querySelector('.project-images');
home.addEventListener('click', function (event) {
  console.log('clicked');
  wrapper.innerHTML = "";
  wrapper.insertAdjacentHTML("beforeend", "<h1>Veronica Wajda</h1><p>An Engineer turned programmer. <br><br>Up and away from Calgary I ventured to Barcelona Spain in the last few months to attend Le Wagon's coding bootcamp.There I learned so much from the fundamentals of programming to creating an app from scratch within a week. Working in teams of four we prototyped and designed each element. The back end, completed in Ruby using authentication, geocoding, and so much more. Each web application was executed in Ruby on Rails with interactive components using JavaScript.<br><br>Today I continue to hone these skill as well as grow them. Currently learning React & Redux as well as node.js. Take a look around and browse my work. Let's meet over coffee if you have any interesting collaborations or work opportunities.</p>");
  wrapper.appendElement;
});
projects.addEventListener('click', function (event) {
  console.log('projects');
  wrapper.innerHTML = "";
  wrapper.insertAdjacentHTML("beforeend", " \
    <h3>Cnd-Rockies-Ice-Climbs</h3> \
    <p>Ever wanted to find ice conditions on a specific climb? Or filter out ice climbs that are formed? What about having a community where anyone can update a trip description as routes change (anchors, approaches)? Canadian Rockies Ice Climbs is a website dedicated to those adventurous individuals that want to keep track of, and share beta about ice climbs specific to the Canadian rocky mountains.</p> \
    <h3>Uproot</h3> \
    <p>As we were all preparing to leave Barcelona everyone wondered where they would end up. France, Monaco, USA? It's a problem most of us were faced with: do we go back home or make somewhere new our home? Uproot is a mobile first web application designed to help you decide just that. Unlike typical information first websites Uproot uses a fun interactive quiz to help you decide where to relocate. You can manage your results if you do multiple quizzes. If you're not convinced then you can use the city lookup function to compare stats about the cities where you might consider living. </p> \
    <h3> Airpet </h3> \
    <p>A fun little Airbnb inspired replicate. Shelters can list available pets so people can have furry companions on a short term basis. Great for listing your pets while you're on vacation too!</p> \
    ");
  wrapper.insertAdjacentHTML("beforeend", "");
});
courses.addEventListener('click', function (event) {
  console.log('courses');
  wrapper.innerHTML = "";
  wrapper.insertAdjacentHTML("beforeend", " \
    <h1>Courses</h1> \
    <h3>Full Stack Dev</h3> \
    <ul> \
    <li> <i class='far fa-check-square'></i> JavaScript: ES5 & Babel </li> \
    <li> <i class='far fa-check-square'></i> Ruby on Rails </li> \
    <li> <i class='far fa-check-square'></i> Programming Fundementals </li> \
    </ul> \
    <h3>React and Redux </h3> \
    <h3>BASc Mechanical Engineering</h3>");
});
contact.addEventListener('click', function (event) {
  console.log('contact');
  wrapper.innerHTML = "";
  wrapper.insertAdjacentHTML("beforeend", " \
    <h1>Hello</h1> \
    <p>Shoot me an email at veronica.wajda@gmail.com if you have any interesting projects or would like to discuss any work opportunities.</p>");
});

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
//# sourceMappingURL=bundle.426beb0f22eff78fcb65.js.map