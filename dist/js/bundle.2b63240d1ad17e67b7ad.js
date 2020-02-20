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

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /Users/veronica/code/u2v22/canvas-boilerplate/src/js/main.js: Unexpected token, expected \"(\" (17:25)\n\n\u001b[0m \u001b[90m 15 | \u001b[39m\u001b[90m// STYLE SHEETS and HTML\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 16 | \u001b[39mrequire(\u001b[32m'./navbar'\u001b[39m)\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 17 | \u001b[39m\u001b[36mconst\u001b[39m highlight \u001b[33m=\u001b[39m \u001b[36mimport\u001b[39m highlight from \u001b[32m'./colours'\u001b[39m\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m    | \u001b[39m                         \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 18 | \u001b[39m\u001b[36mimport\u001b[39m \u001b[32m\"../stylesheets/style.css\"\u001b[39m\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 19 | \u001b[39m\u001b[36mimport\u001b[39m html from \u001b[32m'../../index.html'\u001b[39m\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 20 | \u001b[39m\u001b[0m\n    at Parser.raise (/Users/veronica/code/u2v22/canvas-boilerplate/node_modules/@babel/parser/lib/index.js:6420:17)\n    at Parser.unexpected (/Users/veronica/code/u2v22/canvas-boilerplate/node_modules/@babel/parser/lib/index.js:7773:16)\n    at Parser.parseExprAtom (/Users/veronica/code/u2v22/canvas-boilerplate/node_modules/@babel/parser/lib/index.js:8842:16)\n    at Parser.parseExprSubscripts (/Users/veronica/code/u2v22/canvas-boilerplate/node_modules/@babel/parser/lib/index.js:8556:23)\n    at Parser.parseMaybeUnary (/Users/veronica/code/u2v22/canvas-boilerplate/node_modules/@babel/parser/lib/index.js:8536:21)\n    at Parser.parseExprOps (/Users/veronica/code/u2v22/canvas-boilerplate/node_modules/@babel/parser/lib/index.js:8402:23)\n    at Parser.parseMaybeConditional (/Users/veronica/code/u2v22/canvas-boilerplate/node_modules/@babel/parser/lib/index.js:8375:23)\n    at Parser.parseMaybeAssign (/Users/veronica/code/u2v22/canvas-boilerplate/node_modules/@babel/parser/lib/index.js:8325:21)\n    at Parser.parseVar (/Users/veronica/code/u2v22/canvas-boilerplate/node_modules/@babel/parser/lib/index.js:10660:26)\n    at Parser.parseVarStatement (/Users/veronica/code/u2v22/canvas-boilerplate/node_modules/@babel/parser/lib/index.js:10479:10)\n    at Parser.parseStatementContent (/Users/veronica/code/u2v22/canvas-boilerplate/node_modules/@babel/parser/lib/index.js:10076:21)\n    at Parser.parseStatement (/Users/veronica/code/u2v22/canvas-boilerplate/node_modules/@babel/parser/lib/index.js:10009:17)\n    at Parser.parseBlockOrModuleBlockBody (/Users/veronica/code/u2v22/canvas-boilerplate/node_modules/@babel/parser/lib/index.js:10585:25)\n    at Parser.parseBlockBody (/Users/veronica/code/u2v22/canvas-boilerplate/node_modules/@babel/parser/lib/index.js:10572:10)\n    at Parser.parseTopLevel (/Users/veronica/code/u2v22/canvas-boilerplate/node_modules/@babel/parser/lib/index.js:9940:10)\n    at Parser.parse (/Users/veronica/code/u2v22/canvas-boilerplate/node_modules/@babel/parser/lib/index.js:11447:17)\n    at parse (/Users/veronica/code/u2v22/canvas-boilerplate/node_modules/@babel/parser/lib/index.js:11483:38)\n    at parser (/Users/veronica/code/u2v22/canvas-boilerplate/node_modules/@babel/core/lib/transformation/normalize-file.js:168:34)\n    at normalizeFile (/Users/veronica/code/u2v22/canvas-boilerplate/node_modules/@babel/core/lib/transformation/normalize-file.js:102:11)\n    at runSync (/Users/veronica/code/u2v22/canvas-boilerplate/node_modules/@babel/core/lib/transformation/index.js:44:43)\n    at runAsync (/Users/veronica/code/u2v22/canvas-boilerplate/node_modules/@babel/core/lib/transformation/index.js:35:14)\n    at process.nextTick (/Users/veronica/code/u2v22/canvas-boilerplate/node_modules/@babel/core/lib/transform.js:34:34)\n    at process._tickCallback (internal/process/next_tick.js:61:11)");

/***/ })

/******/ });
//# sourceMappingURL=bundle.2b63240d1ad17e67b7ad.js.map