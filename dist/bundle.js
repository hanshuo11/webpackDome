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
/******/ 	__webpack_require__.p = "./";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _comm_domReady__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./comm/domReady */ \"./src/comm/domReady.js\");\n\nObject(_comm_domReady__WEBPACK_IMPORTED_MODULE_0__[\"$\"])(function () {\n    setTimeout(() => {\n        document.getElementById(\"app\").innerHTML = \"Hello\";\n    }, 3000)\n})\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/comm/domReady.js":
/*!******************************!*\
  !*** ./src/comm/domReady.js ***!
  \******************************/
/*! exports provided: $ */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"$\", function() { return $; });\nfunction $(fn) {\n    //判断如果支持addEc=ventListener（非IE--IE支持的是attachEvent）则绑定DOMContentLoaded事件\n    if (document.addEventListener) {\n        document.addEventListener(\"DOMContentLoaded\", fn, false);\n    } else {\n        IEContenLoaded(fn);\n    }\n\n    //IE下模拟DOMContentLoaded\n    function IEContenLoaded(fn) {\n        let done = false;\n        //只执行一次用户的回调函数init\n        let init = function () {\n            if (!done) {\n                done = true;\n                fn();\n            }\n        }\n\n            (function () {\n                try {\n                    //DOM树未创建完之前调用doScroll会抛出错误\n                    window.document.documentElement.doScroll(\"left\");\n                } catch (error) {\n                    //延迟再执行，arguments.callee调用自己\n                    setTimeout(argument.callee, 1);\n                    return;\n                }\n                //没有错误表示DOM树创建完毕，执行用户回调\n                init();\n            })();\n\n        //监听document的加载状态\n        window.document.onreadystatechange = function () {\n            //如果用户是在DOMReady之后调用的函数立即执行用户回调\n            if (window.document.readyState == 'complete') {\n                window.document.onreadystatechange = null;\n                init();\n            }\n        }\n    }\n}\n\n//# sourceURL=webpack:///./src/comm/domReady.js?");

/***/ })

/******/ });