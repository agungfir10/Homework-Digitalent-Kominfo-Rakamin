/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/convert-temp.js":
/*!********************************!*\
  !*** ./src/js/convert-temp.js ***!
  \********************************/
/***/ ((module) => {

eval("const r = \"reamur\",\r\n  f = \"fahrenheit\",\r\n  c = \"celcius\",\r\n  k = \"kelvin\";\r\n\r\nlet convert = (from, to, temp) => {\r\n  if (from === r) {\r\n    if (to === f) {\r\n      temp = temp * 2.25 + 32;\r\n    } else if (to === c) {\r\n      temp = temp * 1.25;\r\n    } else if (to === k) {\r\n      temp = temp * 1.25 + 273 / 15;\r\n    } else {\r\n      temp = temp;\r\n    }\r\n  } else if (from === f) {\r\n    if (to === r) {\r\n      temp = (temp - 32) / 2.25;\r\n    } else if (to === c) {\r\n      temp = ((temp - 32) * 5) / 9;\r\n    } else if (to === k) {\r\n      temp = ((temp - 32) * 5) / 9 + 273.15;\r\n    } else {\r\n      temp = temp;\r\n    }\r\n  } else if (from === c) {\r\n    if (to === f) {\r\n      temp = (temp * 9) / 5 + 32;\r\n    } else if (to === r) {\r\n      temp = (temp * 4) / 5;\r\n    } else if (to === k) {\r\n      temp = temp + 273.15;\r\n    } else {\r\n      temp = temp;\r\n    }\r\n  } else if (from === k) {\r\n    if (to === f) {\r\n      temp = ((temp - 273.15) * 9) / 5 + 32;\r\n    } else if (to === c) {\r\n      temp = temp - 273.15;\r\n    } else if (to === r) {\r\n      temp = (temp - 273.15) * 0.8;\r\n    } else {\r\n      temp = temp;\r\n    }\r\n  }\r\n  let result =\r\n    temp % 1 != 0 ? Math.round((temp + Number.EPSILON) * 100) / 100 : temp;\r\n  return result;\r\n};\r\n\r\nmodule.exports = convert;\r\n\n\n//# sourceURL=webpack://homework-javascript-1/./src/js/convert-temp.js?");

/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const convert = __webpack_require__(/*! ./convert-temp */ \"./src/js/convert-temp.js\");\r\n\r\nconst selectsFromTemp = document.getElementById(\"from-temp\");\r\nconst selectsToTemp = document.getElementById(\"to-temp\");\r\nconst inputToConvertTemp = document.getElementById(\"input-to-convert\");\r\nconst convertResult = document.getElementById(\"convert-result\");\r\nconst inputBgColor = document.querySelector(\"#input-bg-color\");\r\n\r\ninputToConvertTemp.addEventListener(\"input\", (e) => {\r\n  let result = convert(\r\n    selectsFromTemp.value,\r\n    selectsToTemp.value,\r\n    inputToConvertTemp.value\r\n  );\r\n  convertResult.value = result;\r\n});\r\n\r\nselectsFromTemp.addEventListener(\"change\", (e) => {\r\n  let result = convert(\r\n    selectsFromTemp.value,\r\n    selectsToTemp.value,\r\n    inputToConvertTemp.value\r\n  );\r\n  convertResult.value = result;\r\n});\r\n\r\nselectsToTemp.addEventListener(\"change\", (e) => {\r\n  let result = convert(\r\n    selectsFromTemp.value,\r\n    selectsToTemp.value,\r\n    inputToConvertTemp.value\r\n  );\r\n  convertResult.value = result;\r\n});\r\n\r\ndocument.querySelector(\"#submit-bg-color\").addEventListener(\"click\", (e) => {\r\n  document.body.style.backgroundColor = inputBgColor.value;\r\n});\r\n\r\ninputBgColor.addEventListener(\"keyup\", (e) => {\r\n  if (e.keyCode === 13) {\r\n    e.preventDefault();\r\n    document.body.style.backgroundColor = e.value;\r\n    document.querySelector(\"#submit-bg-color\").click();\r\n  }\r\n});\r\n\n\n//# sourceURL=webpack://homework-javascript-1/./src/js/script.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/script.js");
/******/ 	
/******/ })()
;