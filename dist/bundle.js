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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Animated.js":
/*!*************************!*\
  !*** ./src/Animated.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Animated =\n/*#__PURE__*/\nfunction () {\n  function Animated(value, duration) {\n    _classCallCheck(this, Animated);\n\n    this.fromValue = value;\n    this.toValue = value;\n    this.value = value;\n    this.startTime = 0;\n    this.duration = duration;\n    this.delay = 0;\n  }\n\n  _createClass(Animated, [{\n    key: \"animate\",\n    value: function animate(toValue) {\n      this.startTime = time;\n      this.toValue = toValue;\n      this.fromValue = this.value;\n    }\n  }, {\n    key: \"updateAnimation\",\n    value: function updateAnimation() {\n      if (this.value === this.toValue) return false;\n      var progress = (time - this.startTime - this.delay) / this.duration;\n      if (progress < 0) progress = 0;\n      if (progress > 1) progress = 1;\n      var ease = -progress * (progress - 2);\n      this.value = this.fromValue + (this.toValue - this.fromValue) * ease;\n      return true;\n    }\n  }]);\n\n  return Animated;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Animated);\n\n//# sourceURL=webpack:///./src/Animated.js?");

/***/ }),

/***/ "./src/Drawers/Controls.js":
/*!*********************************!*\
  !*** ./src/Drawers/Controls.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ControlsDrawer; });\nfunction ControlsDrawer(ctx, control, drawLine, ys) {\n  return function drawControl(x, y, width, height) {\n    for (var i = 0; i < ys.length; i++) {\n      drawLine(ys[i], x + 7, y + 3, width - 14, height - 6);\n    }\n\n    var xs = x + width * control.range[0];\n    var xe = x + width * control.range[1];\n    var ww = width * (control.range[1] - control.range[0]);\n    ctx.save();\n    ctx.fillStyle = \"#C4D6EA\";\n    ctx.beginPath();\n    var controlWidth = 14;\n    var controlWidth2 = controlWidth * 2;\n    var controlPipaWidth = (controlWidth - 2) / 2;\n    ctx.rect(xs + controlWidth, y, ww - controlWidth2, 1);\n    ctx.rect(xs + controlWidth, y + height - 1, ww - controlWidth2, 1);\n    ctx.fill();\n    ctx.beginPath();\n    ctx.moveTo(xs + controlWidth, y);\n    ctx.lineTo(xs + controlWidth, y + height);\n    ctx.arcTo(xs, y + height, xs, y + height - controlWidth, controlWidth / 2);\n    ctx.arcTo(xs, y, xs + controlWidth, y, controlWidth / 2);\n    ctx.lineTo(xs, y);\n    ctx.closePath();\n    ctx.fill();\n    ctx.beginPath();\n    ctx.moveTo(xe - controlWidth, y);\n    ctx.lineTo(xe - controlWidth, y + height);\n    ctx.arcTo(xe, y + height, xe, y + height - controlWidth, controlWidth / 2);\n    ctx.arcTo(xe, y, xe - controlWidth, y, controlWidth / 2);\n    ctx.closePath();\n    ctx.fill();\n    ctx.restore();\n    ctx.save();\n    ctx.beginPath();\n    ctx.fillStyle = '#FFFFFF';\n    ctx.rect(xs + controlPipaWidth, y + 15, 2, height - 30);\n    ctx.rect(xe - controlPipaWidth, y + 15, -2, height - 30);\n    ctx.fill();\n    ctx.restore();\n  };\n}\n\n//# sourceURL=webpack:///./src/Drawers/Controls.js?");

/***/ }),

/***/ "./src/Drawers/Line.js":
/*!*****************************!*\
  !*** ./src/Drawers/Line.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Line; });\nfunction _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\nfunction Line(ctx, normX, normY, colors) {\n  return function drawLine(data, x, y, width, height) {\n    var _data = _toArray(data),\n        key = _data[0],\n        items = _data.slice(1);\n\n    ctx.beginPath();\n    ctx.moveTo(x + 0, y + height - normY(items[0]) * height);\n\n    for (var i = 1; i < items.length; i++) {\n      ctx.lineTo(x + normX(i) * width, y + height - normY(items[i]) * height);\n    }\n\n    ctx.lineWidth = 2;\n    ctx.strokeStyle = colors[key];\n    ctx.stroke();\n  };\n}\n\n//# sourceURL=webpack:///./src/Drawers/Line.js?");

/***/ }),

/***/ "./src/Drawers/LineChart.js":
/*!**********************************!*\
  !*** ./src/Drawers/LineChart.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return LineChartDrawer; });\nfunction LineChartDrawer(ctx, control, drawLine, ys) {\n  console.log(\"Asdasdas\");\n  return function drawChart(x, y, width, height) {\n    for (var i = 0; i < ys.length; i++) {\n      drawLine(ys[i], x, y, width, height);\n    }\n  };\n}\n\n//# sourceURL=webpack:///./src/Drawers/LineChart.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Animated__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Animated */ \"./src/Animated.js\");\n/* harmony import */ var _Drawers_Controls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Drawers/Controls */ \"./src/Drawers/Controls.js\");\n/* harmony import */ var _Drawers_Line__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Drawers/Line */ \"./src/Drawers/Line.js\");\n/* harmony import */ var _Drawers_LineChart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Drawers/LineChart */ \"./src/Drawers/LineChart.js\");\nfunction _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\nvar time = Date.now();\n\nfunction normalize(min, max) {\n  var delta = max - min;\n  var memo = {};\n  return function (val) {\n    if (!memo[val]) {\n      memo[val] = (val - min) / delta;\n    }\n\n    return memo[val];\n  };\n}\n\nvar flatMax = function flatMax(arr) {\n  return Math.max.apply(null, arr.map(function (set) {\n    return Math.max.apply(null, set.slice(1));\n  }));\n};\n\nvar flatMin = function flatMin(arr) {\n  return Math.min.apply(null, arr.map(function (set) {\n    return Math.min.apply(null, set.slice(1));\n  }));\n};\n\nfunction Chart(data) {\n  // Init canvas\n  var bounds, w, h;\n  var canvas = document.createElement('canvas');\n  document.body.appendChild(canvas);\n  var ctx = canvas.getContext('2d');\n  ctx.lineJoin = 'bevel';\n  ctx.lineCap = 'butt'; // Init data\n\n  var colors = data.colors;\n  var names = data.names;\n  var types = data.types;\n\n  var _data$columns = _toArray(data.columns),\n      _data$columns$ = _toArray(_data$columns[0]),\n      xkey = _data$columns$[0],\n      xs = _data$columns$.slice(1),\n      ys = _data$columns.slice(1);\n\n  var maxHeight = flatMax(ys);\n  var minHeight = flatMin(ys);\n  var normY = normalize(minHeight, maxHeight);\n  var normX = normalize(0, xs.length - 1);\n  var control = {\n    range: [0.3, 1]\n  };\n\n  function updateCanvasSize() {\n    bounds = canvas.getBoundingClientRect();\n    w = canvas.width = bounds.width;\n    h = canvas.height = 450;\n  }\n\n  var drawLine = Object(_Drawers_Line__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(ctx, normX, normY, colors);\n  var drawControl = Object(_Drawers_Controls__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(ctx, control, drawLine, ys);\n  var drawChart = Object(_Drawers_LineChart__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(ctx, control, drawLineRange, ys);\n\n  function drawLineRange(data, x, y, width, height) {\n    var scale = control.range[1] - control.range[0];\n    var xs = width * control.range[0];\n    var xNew = x - xs / scale;\n    var widthNew = width / scale;\n    drawLine(data, xNew, y, widthNew, height);\n  }\n\n  function render() {\n    updateCanvasSize();\n    drawChart(0, 0, w, 390);\n    drawControl(0, 400, w, 50);\n  }\n\n  window.addEventListener('resize', render);\n  render();\n}\n\nfetch('assets/chart_data.json').then(function (res) {\n  return res.json();\n}).then(function (ChartsData) {\n  var chart = Chart(ChartsData[1]); // (function loop() {\n  // \trequestAnimationFrame(loop);\n  // })();\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });