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
/******/ 	__webpack_require__.p = "dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Chart.js":
/*!**********************!*\
  !*** ./src/Chart.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\n/* harmony import */ var _Utils_Mouse__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Utils/Mouse */ \"./src/Utils/Mouse.js\");\n/* harmony import */ var _Utils_Animated__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Utils/Animated */ \"./src/Utils/Animated.js\");\n/* harmony import */ var _Drawers_Controls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Drawers/Controls */ \"./src/Drawers/Controls.js\");\n/* harmony import */ var _Drawers_LineChart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Drawers/LineChart */ \"./src/Drawers/LineChart.js\");\n/* harmony import */ var _Popup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Popup */ \"./src/Popup.js\");\n/* harmony import */ var _Globals__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Globals */ \"./src/Globals.js\");\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\n\n\n\n\n\nfunction dateString(timestamp) {\n  var date = new Date(timestamp);\n  return {\n    dayString: \"\".concat(_Globals__WEBPACK_IMPORTED_MODULE_6__[\"MONTH_NAMES\"][date.getMonth()], \" \").concat(date.getDate()),\n    dateString: \"\".concat(_Globals__WEBPACK_IMPORTED_MODULE_6__[\"DAY_NAMES\"][date.getDay()], \", \").concat(date.getDate(), \" \").concat(_Globals__WEBPACK_IMPORTED_MODULE_6__[\"MONTH_NAMES\"][date.getMonth()], \" \").concat(date.getFullYear()),\n    date: date,\n    timestamp: timestamp\n  };\n}\n\n;\n\nfunction Chart(data, index) {\n  // Init canvas\n  var bounds = {\n    left: 0,\n    top: 0\n  },\n      w,\n      h,\n      normCanvas;\n  var container = Object(_Popup__WEBPACK_IMPORTED_MODULE_5__[\"createElement\"])(document.body, 'div', 'chart');\n  var title = Object(_Popup__WEBPACK_IMPORTED_MODULE_5__[\"createElement\"])(container, 'h2', 'chart__title');\n  title.textContent = \"Chart #\".concat(index + 1);\n  var canvas = Object(_Popup__WEBPACK_IMPORTED_MODULE_5__[\"createElement\"])(container, 'canvas', 'chart__canvas');\n  var ctx = canvas.getContext('2d');\n  var config = {\n    index: index,\n    shouldChartUpdate: true,\n    shouldControlUpdate: true,\n    animator: Object(_Utils_Animated__WEBPACK_IMPORTED_MODULE_2__[\"createAnimator\"])(),\n    mouse: Object(_Utils_Mouse__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n      config: config,\n      canvas: canvas,\n      canvasBounds: bounds\n    }),\n    maxHeight: 0,\n    minHeight: 0\n  }; // Init data\n\n  var colors = data.colors;\n  var names = data.names;\n  var types = data.types;\n  data.columns[0] = data.columns[0].map(function (el) {\n    return el.length ? el : dateString(el);\n  });\n\n  var _data$columns = _toArray(data.columns),\n      _data$columns$ = _toArray(_data$columns[0]),\n      xkey = _data$columns$[0],\n      xs = _data$columns$.slice(1),\n      ys = _data$columns.slice(1);\n\n  config.maxHeight = Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"flatMax\"])(ys);\n  config.minHeight = Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"flatMin\"])(ys);\n  config.popup = Object(_Popup__WEBPACK_IMPORTED_MODULE_5__[\"createPopup\"])(container, data, ys);\n  var norm = {\n    X: Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"normalizeMemo\"])(0, xs.length - 1),\n    Y: Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"normalizeAnimated\"])(config.animator, config.minHeight, config.maxHeight)\n  };\n  var controlNorm = {\n    X: Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"normalizeMemo\"])(0, xs.length - 1),\n    Y: Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"normalizeMemo\"])(config.minHeight, config.maxHeight)\n  };\n\n  function updateNorms() {\n    var rStart = control.range[0];\n    var rEnd = control.range[1];\n    var startIndexRaw = rStart * xs.length - 2 * _Globals__WEBPACK_IMPORTED_MODULE_6__[\"PIXEL_RATIO\"];\n    var startIndex = startIndexRaw < 0 ? 0 : Math.floor(startIndexRaw);\n    var endIndexRaw = rEnd * xs.length + 3 * _Globals__WEBPACK_IMPORTED_MODULE_6__[\"PIXEL_RATIO\"];\n    var endIndex = endIndexRaw > xs.length ? xs.length : Math.round(endIndexRaw);\n    config.minHeight = Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"flatMinRange\"])(ys, startIndex, endIndex - 1 * _Globals__WEBPACK_IMPORTED_MODULE_6__[\"PIXEL_RATIO\"]);\n    config.maxHeight = Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"flatMaxRange\"])(ys, startIndex, endIndex - 1 * _Globals__WEBPACK_IMPORTED_MODULE_6__[\"PIXEL_RATIO\"]);\n    norm.Y.updateDelta(config.minHeight, config.maxHeight);\n    config.startIndex = startIndex;\n    config.endIndex = endIndex;\n  }\n\n  ;\n  var control = {\n    range: [0.1, 0.9],\n    updateRange: function updateRange(index, value) {\n      var secIndex = index === 0 ? 1 : 0;\n\n      if (index === 0 && value < control.range[1] - 0.1) {\n        control.range[index] = value;\n      } else if (index === 1 && value > control.range[0] + 0.1) {\n        control.range[index] = value;\n      }\n\n      updateNorms();\n    },\n    updateFullRange: function updateFullRange(start, end) {\n      control.range[0] = start;\n      control.range[1] = end;\n      updateNorms();\n    },\n    normalizeForCanvas: function normalizeForCanvas(xPos) {\n      return normCanvas(xPos);\n    }\n  };\n\n  function updateBounds() {\n    var newBounds = canvas.getBoundingClientRect();\n    var newWidth = newBounds.width * _Globals__WEBPACK_IMPORTED_MODULE_6__[\"PIXEL_RATIO\"];\n    var newHeight = newBounds.height * _Globals__WEBPACK_IMPORTED_MODULE_6__[\"PIXEL_RATIO\"];\n    bounds.width = newWidth;\n    bounds.height = _Globals__WEBPACK_IMPORTED_MODULE_6__[\"CANVAS_HEIGHT\"];\n    bounds.left = newBounds.left;\n    bounds.right = newBounds.right;\n    bounds.top = newBounds.top;\n    bounds.bottom = newBounds.bottom;\n    bounds.x = newBounds.x;\n    bounds.y = newBounds.y;\n\n    if (w !== newWidth || h !== newHeight) {\n      config.shouldChartUpdate = true;\n      config.shouldControlUpdate = true;\n      normCanvas = Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"normalizeMemo\"])(_Globals__WEBPACK_IMPORTED_MODULE_6__[\"SIDES_PADDING2\"], bounds.width - _Globals__WEBPACK_IMPORTED_MODULE_6__[\"SIDES_PADDING2\"]);\n      w = canvas.width = bounds.width;\n      h = canvas.height = _Globals__WEBPACK_IMPORTED_MODULE_6__[\"CANVAS_HEIGHT\"];\n    }\n  }\n\n  var drawersArgs = {\n    config: config,\n    control: control,\n    ctx: ctx,\n    norm: norm,\n    colors: colors,\n    ys: ys,\n    xs: xs,\n    canvasBounds: bounds\n  };\n  var drawChart = Object(_Drawers_LineChart__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(drawersArgs);\n  var drawControl = Object(_Drawers_Controls__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_objectSpread({}, drawersArgs, {\n    norm: controlNorm\n  }));\n\n  function render(force) {\n    updateBounds();\n    var isActiveAnimations = config.animator.updateAnimations();\n    if (isActiveAnimations) config.shouldChartUpdate = true;\n\n    if (config.shouldChartUpdate) {\n      config.shouldChartUpdate = false;\n      ctx.clearRect(0, 0, w, _Globals__WEBPACK_IMPORTED_MODULE_6__[\"CANVAS_HEIGHT\"] - _Globals__WEBPACK_IMPORTED_MODULE_6__[\"CONTROL_HEIGHT\"]);\n      drawChart(_Globals__WEBPACK_IMPORTED_MODULE_6__[\"SIDES_PADDING\"], 0, w - _Globals__WEBPACK_IMPORTED_MODULE_6__[\"SIDES_PADDING2\"], _Globals__WEBPACK_IMPORTED_MODULE_6__[\"CANVAS_HEIGHT\"] - _Globals__WEBPACK_IMPORTED_MODULE_6__[\"CONTROL_HEIGHT\"]);\n    }\n\n    if (config.shouldControlUpdate) {\n      config.shouldControlUpdate = false;\n      ctx.clearRect(0, _Globals__WEBPACK_IMPORTED_MODULE_6__[\"CANVAS_HEIGHT\"] - _Globals__WEBPACK_IMPORTED_MODULE_6__[\"CONTROL_HEIGHT\"], w, _Globals__WEBPACK_IMPORTED_MODULE_6__[\"CONTROL_HEIGHT\"]);\n      drawControl(_Globals__WEBPACK_IMPORTED_MODULE_6__[\"SIDES_PADDING\"], _Globals__WEBPACK_IMPORTED_MODULE_6__[\"CANVAS_HEIGHT\"] - _Globals__WEBPACK_IMPORTED_MODULE_6__[\"CONTROL_HEIGHT\"], w - _Globals__WEBPACK_IMPORTED_MODULE_6__[\"SIDES_PADDING2\"], _Globals__WEBPACK_IMPORTED_MODULE_6__[\"CONTROL_HEIGHT\"]);\n    }\n  }\n\n  window.addEventListener('resize', updateBounds);\n  updateBounds();\n  updateNorms();\n  render();\n  return {\n    updateRange: control.updateRange,\n    render: render,\n    control: control\n  };\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Chart);\n\n//# sourceURL=webpack:///./src/Chart.js?");

/***/ }),

/***/ "./src/Drawers/Controls.js":
/*!*********************************!*\
  !*** ./src/Drawers/Controls.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ControlsDrawer; });\n/* harmony import */ var _Layers_Line__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Layers/Line */ \"./src/Drawers/Layers/Line.js\");\n/* harmony import */ var _Globals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Globals */ \"./src/Globals.js\");\n\n\nvar NONE = 0;\nvar DRAG_START = 1;\nvar DRAG_END = 2;\nvar DRAG_ALL = 3;\nfunction ControlsDrawer(drawersArgs) {\n  var ctx = drawersArgs.ctx,\n      config = drawersArgs.config,\n      canvasBounds = drawersArgs.canvasBounds,\n      control = drawersArgs.control,\n      ys = drawersArgs.ys;\n  var drawLineLayer = Object(_Layers_Line__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(drawersArgs, {\n    lineWidth: 1\n  });\n  var xs = 0;\n  var xe = 0;\n  var ww = xe - xs;\n  var pipaH = 36 * _Globals__WEBPACK_IMPORTED_MODULE_1__[\"PIXEL_RATIO\"];\n  var pipaH2 = pipaH / 2;\n  var controlWidth = 14 * _Globals__WEBPACK_IMPORTED_MODULE_1__[\"PIXEL_RATIO\"];\n  var controlWidthMul2 = controlWidth * 2;\n  var controlWidthDiv2 = controlWidth / 2;\n  var controlPipaWidth = 2 * _Globals__WEBPACK_IMPORTED_MODULE_1__[\"PIXEL_RATIO\"];\n  var controlPipaPos = (controlWidth - controlPipaWidth) / 2;\n  var mouseMode = NONE;\n  var clickRangeBase = 14 * _Globals__WEBPACK_IMPORTED_MODULE_1__[\"PIXEL_RATIO\"];\n  var oldRange = [control.range[0], control.range[1]];\n  var controlsBounds = {\n    start: {\n      x: 0,\n      y: 0,\n      width: 0,\n      height: 0\n    },\n    end: {\n      x: 0,\n      y: 0,\n      width: 0,\n      height: 0\n    }\n  };\n\n  function mouseMove(mouse) {\n    if (mouseMode === NONE) return;\n    console.log('MOVE');\n    config.shouldChartUpdate = true;\n    config.shouldControlUpdate = true;\n    var norm = control.normalizeForCanvas(mouse.newX);\n\n    if (mouseMode === DRAG_START) {\n      if (norm >= 0) {\n        control.updateRange(0, norm);\n      } else {\n        control.updateRange(0, 0);\n      }\n    } else if (mouseMode === DRAG_END) {\n      if (norm <= 1) {\n        control.updateRange(1, norm);\n      } else {\n        control.updateRange(1, 1);\n      }\n    } else {\n      var normOld = control.normalizeForCanvas(mouse.x);\n      var diff = norm - normOld;\n\n      if (oldRange[0] + diff >= 0 && oldRange[1] + diff <= 1) {\n        control.updateFullRange(oldRange[0] + diff, oldRange[1] + diff);\n      } else {\n        if (diff + oldRange[1] > 1) {\n          var _diff = 1 - oldRange[1];\n\n          control.updateFullRange(oldRange[0] + _diff, oldRange[1] + _diff);\n        } else if (diff + oldRange[0] < 0) {\n          var _diff2 = 0 - oldRange[0];\n\n          control.updateFullRange(oldRange[0] + _diff2, oldRange[1] + _diff2);\n        }\n      }\n    }\n  }\n\n  function mouseDown(mouse) {\n    var clickRange = clickRangeBase;\n    var clickRangeStart = clickRangeBase;\n    var clickRangeEnd = clickRangeBase;\n    console.log('DOWN');\n    config.shouldChartUpdate = true;\n    config.shouldControlUpdate = true;\n    var boundsStart = controlsBounds.start;\n    var boundsEnd = controlsBounds.end;\n    var inControl = mouse.y > boundsStart.y && mouse.y < boundsStart.y + boundsStart.height;\n    if (!inControl) return; // console.log('DOWN', config.index);\n\n    oldRange = [control.range[0], control.range[1]];\n\n    if (mouse.newX > boundsStart.x - clickRangeStart && mouse.newX < boundsStart.x + boundsStart.width && mouse.newY > boundsStart.y - clickRangeStart && mouse.newY < boundsStart.y + boundsStart.height + clickRangeStart) {\n      mouseMode = DRAG_START;\n    } else if (mouse.newX > boundsEnd.x && mouse.newX < boundsEnd.x + boundsEnd.width + clickRangeEnd && mouse.newY > boundsEnd.y - clickRangeEnd && mouse.newY < boundsEnd.y + boundsEnd.height + clickRangeEnd) {\n      mouseMode = DRAG_END;\n    } else if (mouse.newX > boundsStart.x + boundsStart.width && mouse.newX < boundsEnd.x && mouse.newY > boundsEnd.y - clickRangeBase && mouse.newY < boundsEnd.y + boundsEnd.height + clickRangeBase) {\n      mouseMode = DRAG_ALL;\n    }\n  }\n\n  function mouseUp(mouse) {\n    mouseMode = NONE;\n  }\n\n  config.mouse.addListener('move', mouseMove);\n  config.mouse.addListener('down', mouseDown);\n  config.mouse.addListener('up', mouseUp);\n  return function drawControl(x, y, width, height) {\n    // ctx.save();\n    // ctx.fillStyle = 'green';\n    // ctx.fillRect(x, y, width, height);\n    // ctx.restore();\n    var oldWidth = width;\n    var oldX = x;\n    width = width - controlWidthMul2;\n    x = x + controlWidth;\n\n    for (var i = 0; i < ys.length; i++) {\n      drawLineLayer(ys[i], x, y + 3, width, height - 6);\n    }\n\n    xs = x + width * control.range[0];\n    xe = x + width * control.range[1];\n    ww = xe - xs;\n    controlsBounds.start.x = xs - controlWidth;\n    controlsBounds.start.y = y;\n    controlsBounds.start.width = controlWidth;\n    controlsBounds.start.height = height;\n    controlsBounds.end.x = xe;\n    controlsBounds.end.y = y;\n    controlsBounds.end.width = controlWidth;\n    controlsBounds.end.height = height; // Fill unactive part\n\n    ctx.save();\n    ctx.globalAlpha = 0.6;\n    ctx.fillStyle = \"red\";\n    ctx.fillStyle = \"#E2EEF9\";\n    ctx.beginPath();\n    ctx.moveTo(xs - 1, y);\n    ctx.lineTo(xs - 1, y + height);\n    ctx.arcTo(oldX, y + height, oldX, y + height - controlWidth, controlWidth / 2);\n    ctx.arcTo(oldX, y, xs - 1, y, controlWidth / 2);\n    ctx.closePath();\n    ctx.fill();\n    ctx.beginPath();\n    ctx.moveTo(xe + 1, y);\n    ctx.lineTo(xe + 1, y + height);\n    ctx.arcTo(oldX + oldWidth, y + height, oldX + oldWidth, y + height - controlWidth, controlWidth / 2);\n    ctx.arcTo(oldX + oldWidth, y, xe, y, controlWidth / 2);\n    ctx.closePath();\n    ctx.fill();\n    ctx.restore(); // End fill unactive part\n    // Range body\n\n    ctx.save();\n    ctx.fillStyle = \"#C0D1E1\";\n    ctx.beginPath();\n    ctx.rect(xs, y, ww, 1);\n    ctx.rect(xs, y + height - 1, ww, 1);\n    ctx.fill(); // Start range\n\n    ctx.beginPath();\n    var xxxs = xs;\n    ctx.moveTo(xxxs, y);\n    ctx.lineTo(xxxs, y + height);\n    ctx.arcTo(xxxs - controlWidth, y + height, xxxs - controlWidth, y + height - controlWidth, controlWidth / 2);\n    ctx.arcTo(xxxs - controlWidth, y, xxxs, y, controlWidth / 2);\n    ctx.closePath();\n    ctx.fill(); // End range\n\n    ctx.beginPath();\n    ctx.moveTo(xe, y);\n    ctx.lineTo(xe, y + height);\n    ctx.arcTo(xe + controlWidth, y + height, xe + controlWidth, y + height - controlWidth, controlWidth / 2);\n    ctx.arcTo(xe + controlWidth, y, xe, y, controlWidth / 2);\n    ctx.closePath();\n    ctx.fill();\n    ctx.restore();\n    ctx.save();\n    ctx.beginPath();\n    ctx.fillStyle = \"#FFFFFF\";\n    ctx.rect(xs - controlPipaPos, y + pipaH2, -controlPipaWidth, height - pipaH);\n    ctx.rect(xe + controlPipaPos, y + pipaH2, controlPipaWidth, height - pipaH);\n    ctx.fill();\n    ctx.restore();\n  };\n}\n\n//# sourceURL=webpack:///./src/Drawers/Controls.js?");

/***/ }),

/***/ "./src/Drawers/Layers/Dots.js":
/*!************************************!*\
  !*** ./src/Drawers/Layers/Dots.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Dots; });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils */ \"./src/utils.js\");\n/* harmony import */ var _Globals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Globals */ \"./src/Globals.js\");\nfunction _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\nfunction Dots(_ref) {\n  var config = _ref.config,\n      ctx = _ref.ctx,\n      norm = _ref.norm,\n      colors = _ref.colors;\n  var mouse = config.mouse.mouse;\n  var dotRadius = 4 * _Globals__WEBPACK_IMPORTED_MODULE_1__[\"PIXEL_RATIO\"];\n  var lineWidth = 2 * _Globals__WEBPACK_IMPORTED_MODULE_1__[\"PIXEL_RATIO\"];\n  var currentWidth = 0;\n  var currentHeight = 0;\n  var currentX = 0;\n  var currentY = 0;\n  var count = 0;\n  var chunkSize = norm.X(1) * currentWidth;\n  var currentIndexOld = -1;\n  var currentIndex = -1;\n  var onCanvasOld = false;\n  var onCanvas = false;\n  var popup = config.popup;\n\n  var handleOver = function handleOver(mouse, e) {\n    // Check if mouse on canvas\n    onCanvasOld = onCanvas;\n    onCanvas = ctx.canvas.parentNode.contains(e.target);\n    if (e.target !== ctx.canvas && onCanvas) return;\n\n    if (onCanvas || onCanvasOld === true && onCanvas === false) {\n      currentIndexOld = currentIndex;\n\n      if (mouse.newY > currentY && mouse.newY < currentY + currentHeight) {\n        currentIndex = count - Math.round((currentWidth + currentX - mouse.newX) / chunkSize + 1); // popup.style.opacity = 1;\n        // popup.style.visibility = 'visible';\n\n        popup.show(currentIndex);\n      } else {\n        currentIndex = -1; // popup.style.opacity = 0;\n        // popup.style.visibility = 'hidden';\n\n        popup.hide();\n      }\n    }\n\n    if (currentIndexOld !== currentIndex) {\n      config.shouldChartUpdate = true;\n\n      if (currentIndex !== -1) {\n        var popupBounds = popup.element.getBoundingClientRect();\n        popup.element.style.left = \"\".concat(mouse.newX / _Globals__WEBPACK_IMPORTED_MODULE_1__[\"PIXEL_RATIO\"] - popupBounds.width / 2, \"px\");\n      }\n    }\n  };\n\n  config.mouse.addListener('move', handleOver);\n  config.mouse.addListener('down', handleOver);\n  return function drawDots(data, x, y, width, height) {\n    currentWidth = width;\n    currentHeight = height;\n    currentX = x;\n    currentY = y;\n\n    var _data = _toArray(data),\n        key = _data[0],\n        items = _data.slice(1);\n\n    count = items.length;\n    chunkSize = norm.X(1) * width;\n    var chunkSizeDiv2 = chunkSize / 2;\n\n    if (currentIndex > -1 && currentIndex < count) {\n      var X = x + norm.X(currentIndex) * width;\n      ctx.save();\n      ctx.strokeStyle = '#182D3B';\n      ctx.lineWidth = 1;\n      ctx.globalAlpha = 0.1;\n      ctx.beginPath();\n      ctx.moveTo(X, y);\n      ctx.lineTo(X, y + height);\n      ctx.stroke();\n      ctx.restore();\n      ctx.save();\n      ctx.beginPath();\n      ctx.arc(X, y + height - norm.Y(items[currentIndex]) * height, dotRadius, 0, _Globals__WEBPACK_IMPORTED_MODULE_1__[\"PI2\"]);\n      ctx.lineWidth = lineWidth;\n      ctx.strokeStyle = colors[key];\n      ctx.fillStyle = '#FFF';\n      ctx.fill();\n      ctx.stroke();\n      ctx.restore();\n    }\n  };\n}\n\n//# sourceURL=webpack:///./src/Drawers/Layers/Dots.js?");

/***/ }),

/***/ "./src/Drawers/Layers/Line.js":
/*!************************************!*\
  !*** ./src/Drawers/Layers/Line.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Line; });\n/* harmony import */ var _Globals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Globals */ \"./src/Globals.js\");\nfunction _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\nfunction Line(_ref) {\n  var config = _ref.config,\n      control = _ref.control,\n      ctx = _ref.ctx,\n      norm = _ref.norm,\n      colors = _ref.colors;\n  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n  var lineWidth = (opts.lineWidth || 2) * _Globals__WEBPACK_IMPORTED_MODULE_0__[\"PIXEL_RATIO\"];\n  return function drawLine(data, x, y, width, height) {\n    var _data = _toArray(data),\n        key = _data[0],\n        items = _data.slice(1);\n\n    ctx.save();\n    ctx.beginPath();\n    ctx.moveTo(x + 0, y + height - norm.Y(items[0]) * height);\n\n    for (var i = 1; i < items.length; i++) {\n      var X = x + norm.X(i) * width;\n      var Y = y + height - norm.Y(items[i]) * height;\n      ctx.lineTo(X, Y);\n    }\n\n    ctx.lineWidth = lineWidth;\n    ctx.strokeStyle = colors[key];\n    ctx.lineJoin = 'round';\n    ctx.stroke();\n    ctx.restore();\n  };\n}\n\n//# sourceURL=webpack:///./src/Drawers/Layers/Line.js?");

/***/ }),

/***/ "./src/Drawers/Layers/LineRange.js":
/*!*****************************************!*\
  !*** ./src/Drawers/Layers/LineRange.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return LineRange; });\n/* harmony import */ var _Globals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Globals */ \"./src/Globals.js\");\nfunction _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\nfunction LineRange(_ref) {\n  var config = _ref.config,\n      control = _ref.control,\n      ctx = _ref.ctx,\n      norm = _ref.norm,\n      colors = _ref.colors;\n  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n  var lineWidth = (opts.lineWidth || 2) * _Globals__WEBPACK_IMPORTED_MODULE_0__[\"PIXEL_RATIO\"];\n  return function drawLineRange(data, x, y, width, height, withRange) {\n    var _data = _toArray(data),\n        key = _data[0],\n        items = _data.slice(1);\n\n    var S = config.startIndex;\n    var E = config.endIndex;\n    ctx.save();\n    ctx.beginPath();\n    ctx.moveTo(x + S, y + height - norm.Y(items[S]) * height);\n\n    for (var i = S; i < E; i++) {\n      var X = x + norm.X(i) * width;\n      var Y = y + height - norm.Y(items[i]) * height;\n      ctx.lineTo(X, Y);\n    }\n\n    ctx.lineWidth = lineWidth;\n    ctx.strokeStyle = colors[key];\n    ctx.lineJoin = 'round';\n    ctx.stroke();\n    ctx.restore();\n  };\n}\n\n//# sourceURL=webpack:///./src/Drawers/Layers/LineRange.js?");

/***/ }),

/***/ "./src/Drawers/Layers/XAxis.js":
/*!*************************************!*\
  !*** ./src/Drawers/Layers/XAxis.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return XAxis; });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils */ \"./src/utils.js\");\n/* harmony import */ var _Globals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Globals */ \"./src/Globals.js\");\n\n\nfunction XAxis(_ref) {\n  var config = _ref.config,\n      control = _ref.control,\n      ctx = _ref.ctx,\n      norm = _ref.norm,\n      colors = _ref.colors;\n  return function drawXAxis(items, x, y, width, height) {\n    var count = items.length;\n    var S = config.startIndex;\n    var E = config.endIndex;\n    ctx.save();\n    ctx.fillStyle = '#182D3B';\n    ctx.font = _Globals__WEBPACK_IMPORTED_MODULE_1__[\"FONT\"];\n    ctx.textAlign = 'center';\n    ctx.textBaseline = 'top';\n    ctx.globalAlpha = 0.5;\n\n    for (var i = S; i < E; i++) {\n      ctx.fillText(items[i].dayString, x + norm.X(i) * width, y);\n    }\n\n    ctx.restore();\n  };\n}\n\n//# sourceURL=webpack:///./src/Drawers/Layers/XAxis.js?");

/***/ }),

/***/ "./src/Drawers/Layers/YAxis.js":
/*!*************************************!*\
  !*** ./src/Drawers/Layers/YAxis.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return YAxis; });\n/* harmony import */ var _Globals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Globals */ \"./src/Globals.js\");\n\nfunction YAxis(_ref) {\n  var control = _ref.control,\n      ctx = _ref.ctx,\n      normX = _ref.normX,\n      normY = _ref.normY,\n      colors = _ref.colors;\n  var partsCount = 7;\n  return function drawYAxis(min, max, x, y, width, height) {\n    var part = height / partsCount;\n    var partNumber = Math.round((max - min) / partsCount);\n    ctx.save();\n    ctx.beginPath();\n    ctx.fillStyle = '#182D3B';\n    ctx.globalAlpha = 0.5;\n    ctx.font = _Globals__WEBPACK_IMPORTED_MODULE_0__[\"FONT\"];\n\n    for (var i = 0; i < partsCount; i++) {\n      ctx.moveTo(x, y + height - i * part);\n      ctx.lineTo(x + width, y + height - i * part);\n      ctx.fillText(min + partNumber * i, x + 3, y + height - i * part - 5);\n    }\n\n    ctx.lineWidth = 1 * _Globals__WEBPACK_IMPORTED_MODULE_0__[\"PIXEL_RATIO\"];\n    ctx.globalAlpha = 0.1;\n    ctx.strokeStyle = '#182D3B';\n    ctx.stroke();\n    ctx.restore();\n  };\n}\n\n//# sourceURL=webpack:///./src/Drawers/Layers/YAxis.js?");

/***/ }),

/***/ "./src/Drawers/LineChart.js":
/*!**********************************!*\
  !*** ./src/Drawers/LineChart.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return LineChartDrawer; });\n/* harmony import */ var _Globals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Globals */ \"./src/Globals.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ \"./src/utils.js\");\n/* harmony import */ var _Layers_Line__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Layers/Line */ \"./src/Drawers/Layers/Line.js\");\n/* harmony import */ var _Layers_LineRange__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Layers/LineRange */ \"./src/Drawers/Layers/LineRange.js\");\n/* harmony import */ var _Layers_Dots__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Layers/Dots */ \"./src/Drawers/Layers/Dots.js\");\n/* harmony import */ var _Layers_YAxis__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Layers/YAxis */ \"./src/Drawers/Layers/YAxis.js\");\n/* harmony import */ var _Layers_XAxis__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Layers/XAxis */ \"./src/Drawers/Layers/XAxis.js\");\n\n\n\n\n\n\n\nfunction LineChartDrawer(drawersArgs) {\n  var ctx = drawersArgs.ctx,\n      config = drawersArgs.config,\n      control = drawersArgs.control,\n      ys = drawersArgs.ys,\n      xs = drawersArgs.xs;\n  var chartPadding = 6 * _Globals__WEBPACK_IMPORTED_MODULE_0__[\"PIXEL_RATIO\"];\n  var chartPadding2 = chartPadding * 2;\n  var XAxisSize = 10 * _Globals__WEBPACK_IMPORTED_MODULE_0__[\"PIXEL_RATIO\"];\n  var drawYAxisLayer = Object(_Layers_YAxis__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(drawersArgs);\n  var drawXAxisLayer = Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"drawingWithRange\"])(control.range, Object(_Layers_XAxis__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(drawersArgs));\n  var drawLineLayer = Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"drawingWithRange\"])(control.range, Object(_Layers_LineRange__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(drawersArgs));\n  var drawDotsLayer = Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"drawingWithRange\"])(control.range, Object(_Layers_Dots__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(drawersArgs));\n  return function drawChart(x, y, width, height) {\n    // ctx.save();\n    // ctx.fillStyle = 'green';\n    // ctx.fillRect(x, y, width, height);\n    // ctx.restore();\n    var HEIGHT = height - _Globals__WEBPACK_IMPORTED_MODULE_0__[\"BOTTOM_PADDING\"];\n    var Y = y + chartPadding; // Draw layers\n\n    drawXAxisLayer(xs, x, y + HEIGHT - XAxisSize, width, XAxisSize);\n    drawYAxisLayer(config.minHeight, config.maxHeight, x, Y, width, HEIGHT - XAxisSize - chartPadding2);\n\n    for (var i = 0; i < ys.length; i++) {\n      drawLineLayer(ys[i], x, Y, width, HEIGHT - XAxisSize - chartPadding2);\n      drawDotsLayer(ys[i], x, Y, width, HEIGHT - XAxisSize - chartPadding2);\n    }\n  };\n}\n\n//# sourceURL=webpack:///./src/Drawers/LineChart.js?");

/***/ }),

/***/ "./src/Globals.js":
/*!************************!*\
  !*** ./src/Globals.js ***!
  \************************/
/*! exports provided: MONTH_NAMES, DAY_NAMES, PIXEL_RATIO, CANVAS_HEIGHT, BOTTOM_PADDING, SIDES_PADDING, SIDES_PADDING2, CONTROL_HEIGHT, CHART_HEIGHT, FONT, PI2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MONTH_NAMES\", function() { return MONTH_NAMES; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DAY_NAMES\", function() { return DAY_NAMES; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PIXEL_RATIO\", function() { return PIXEL_RATIO; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CANVAS_HEIGHT\", function() { return CANVAS_HEIGHT; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BOTTOM_PADDING\", function() { return BOTTOM_PADDING; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SIDES_PADDING\", function() { return SIDES_PADDING; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SIDES_PADDING2\", function() { return SIDES_PADDING2; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CONTROL_HEIGHT\", function() { return CONTROL_HEIGHT; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CHART_HEIGHT\", function() { return CHART_HEIGHT; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FONT\", function() { return FONT; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PI2\", function() { return PI2; });\nvar MONTH_NAMES = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];\nvar DAY_NAMES = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];\nvar PIXEL_RATIO = window.devicePixelRatio;\nvar CANVAS_HEIGHT = 350 * PIXEL_RATIO;\nvar BOTTOM_PADDING = 4 * PIXEL_RATIO;\nvar SIDES_PADDING = 16 * PIXEL_RATIO;\nvar SIDES_PADDING2 = SIDES_PADDING * 2;\nvar CONTROL_HEIGHT = 50 * PIXEL_RATIO;\nvar CHART_HEIGHT = CANVAS_HEIGHT - CONTROL_HEIGHT;\nvar FONT = \"\".concat(10 * PIXEL_RATIO, \"px Arial\");\nvar PI2 = Math.PI * 2;\n\n//# sourceURL=webpack:///./src/Globals.js?");

/***/ }),

/***/ "./src/Popup.js":
/*!**********************!*\
  !*** ./src/Popup.js ***!
  \**********************/
/*! exports provided: createElement, createPopupHeader, createPopupItem, createPopup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createElement\", function() { return createElement; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createPopupHeader\", function() { return createPopupHeader; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createPopupItem\", function() { return createPopupItem; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createPopup\", function() { return createPopup; });\n/* harmony import */ var _arrow_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrow.svg */ \"./src/arrow.svg\");\n/* harmony import */ var _arrow_svg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_arrow_svg__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction createElement(parent, elementTag, className) {\n  var element = document.createElement(elementTag);\n  element.className = className;\n\n  if (parent) {\n    parent.appendChild(element);\n  }\n\n  return element;\n}\nfunction createPopupHeader(title) {\n  return \"\\n\\t\\t<strong class=\\\"chart__popup-header\\\">\\n\\t\\t\\t<span class=\\\"chart__popup-header-title\\\">\".concat(title, \"</span>\\n\\t\\t\\t<span class=\\\"chart__popup-header-icon\\\"><img src=\\\"\").concat(_arrow_svg__WEBPACK_IMPORTED_MODULE_0___default.a, \"\\\" /></span>\\n\\t\\t</strong>\\n\\t\");\n}\nfunction createPopupItem(color, title, value) {\n  return \"\\n\\t\\t<span class=\\\"chart__popup-item\\\" style=\\\"color: \".concat(color, \"\\\">\\n\\t\\t\\t<span class=\\\"chart__popup-item-title\\\">\").concat(title, \"</span>\\n\\t\\t\\t<span class=\\\"chart__popup-item-value\\\">\").concat(value, \"</span>\\n\\t\\t</span>\\n\\t\");\n}\nfunction createPopup(container, data, ys) {\n  var popup = createElement(container, 'div', 'chart__popup');\n  var publicInterface = {\n    element: popup,\n    update: function update(index) {\n      popup.innerHMTL = \"\\n\\t\\t\\t\\t\".concat(createPopupHeader(), \"\\n\\t\\t\\t\\t\").concat(createPopupItem('hello', '10000'), \"\\n\\t\\t\\t\");\n    },\n    show: function show(index) {\n      var curr = ys.map(function (y) {\n        return createPopupItem(data.colors[y[0]], data.names[y[0]], y[index + 1]);\n      });\n      popup.innerHTML = \"\\n\\t\\t\\t\\t\".concat(createPopupHeader(data.columns[0][index + 1].dateString), \"\\n\\t\\t\\t\\t\").concat(curr.join(''), \"\\n\\t\\t\\t\");\n      popup.style.opacity = 1;\n      popup.style.visibility = 'visible';\n    },\n    hide: function hide() {\n      popup.style.opacity = 0;\n      popup.style.visibility = 'hidden';\n    }\n  };\n  return publicInterface;\n}\n\n//# sourceURL=webpack:///./src/Popup.js?");

/***/ }),

/***/ "./src/Utils/Animated.js":
/*!*******************************!*\
  !*** ./src/Utils/Animated.js ***!
  \*******************************/
/*! exports provided: default, createAnimator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Animated; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createAnimator\", function() { return createAnimator; });\n/* harmony import */ var _AnimationLoop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AnimationLoop */ \"./src/Utils/AnimationLoop.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar Animated =\n/*#__PURE__*/\nfunction () {\n  function Animated(value) {\n    var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 300;\n\n    _classCallCheck(this, Animated);\n\n    this.fromValue = value;\n    this.toValue = value;\n    this.value = value;\n    this.startTime = 0;\n    this.duration = duration;\n    this.delay = 0;\n  }\n\n  _createClass(Animated, [{\n    key: \"playFrom\",\n    value: function playFrom(fromValue, toValue) {\n      this.value = fromValue;\n      this.play(toValue);\n    }\n  }, {\n    key: \"play\",\n    value: function play(toValue) {\n      this.startTime = _AnimationLoop__WEBPACK_IMPORTED_MODULE_0__[\"default\"].time;\n      this.toValue = toValue;\n      this.fromValue = this.value;\n    }\n  }, {\n    key: \"_update\",\n    value: function _update() {\n      if (this.value === this.toValue) return false;\n      var progress = (_AnimationLoop__WEBPACK_IMPORTED_MODULE_0__[\"default\"].time - this.startTime - this.delay) / this.duration;\n      if (progress < 0) progress = 0;\n      if (progress > 1) progress = 1;\n      var ease = -progress * (progress - 2);\n      this.value = this.fromValue + (this.toValue - this.fromValue) * ease;\n      return true;\n    }\n  }]);\n\n  return Animated;\n}();\n\n\nfunction createAnimator() {\n  var animations = [];\n  var opts = {\n    active: false\n  };\n\n  function createAnimation(value, duration) {\n    var animation = new Animated(value, duration);\n    animations.push(animation);\n    return animation;\n  }\n\n  function removeAnimation(animation) {\n    var index = animations.indexOf(animation);\n\n    if (index > -1) {\n      animations.splice(index, 1);\n    }\n  }\n\n  function updateAnimations() {\n    var count = animations.length;\n    var isActive = false;\n\n    for (var i = 0; i < count; i++) {\n      if (animations[i]._update()) {\n        isActive = true;\n      }\n    }\n\n    opts.active = isActive;\n    return isActive;\n  }\n\n  return {\n    opts: opts,\n    createAnimation: createAnimation,\n    removeAnimation: removeAnimation,\n    updateAnimations: updateAnimations\n  };\n}\n\n//# sourceURL=webpack:///./src/Utils/Animated.js?");

/***/ }),

/***/ "./src/Utils/AnimationLoop.js":
/*!************************************!*\
  !*** ./src/Utils/AnimationLoop.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Globals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Globals */ \"./src/Globals.js\");\n\n\nfunction createAnimationLoop() {\n  var animationHandlers = [];\n  var publicInterface = {\n    time: 0,\n    add: function add(handler) {\n      animationHandlers.push(handler);\n    },\n    remove: function remove(handler) {\n      var index = animationHandlers.indexOf(handler);\n\n      if (index > -1) {\n        animationHandlers.splice(index, 1);\n      }\n    }\n  };\n\n  function loop(loopTime) {\n    publicInterface.time = loopTime;\n\n    for (var i = 0; i < animationHandlers.length; i++) {\n      animationHandlers[i](loopTime);\n    }\n\n    requestAnimationFrame(loop);\n  }\n\n  ;\n  requestAnimationFrame(loop);\n  return publicInterface;\n}\n\nvar animationLoop = createAnimationLoop();\n/* harmony default export */ __webpack_exports__[\"default\"] = (animationLoop);\n\n//# sourceURL=webpack:///./src/Utils/AnimationLoop.js?");

/***/ }),

/***/ "./src/Utils/Mouse.js":
/*!****************************!*\
  !*** ./src/Utils/Mouse.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return mouseForChart; });\n/* harmony import */ var _Globals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Globals */ \"./src/Globals.js\");\n // let lastEntered = null;\n\nfunction createDispatcher(types) {\n  var handlers = {};\n  var dispatchers = {};\n  var mouse = {\n    x: 0,\n    y: 0,\n    xRaw: 0,\n    yRaw: 0,\n    newX: 0,\n    newY: 0,\n    newXRaw: 0,\n    newYRaw: 0,\n    isHolding: false\n  };\n  types.forEach(function (type) {\n    handlers[type] = [];\n\n    dispatchers[type] = function (mouse, event) {\n      for (var i = 0; i < handlers[type].length; i++) {\n        handlers[type][i](mouse, event);\n      }\n    };\n  });\n  return {\n    mouse: mouse,\n    addListener: function addListener(type, handler) {\n      handlers[type].push(handler);\n    },\n    dispatch: function dispatch(type, event) {\n      if (dispatchers[type]) {\n        dispatchers[type](mouse, event);\n      } else {\n        throw Error(\"Unknown event\");\n      }\n    }\n  };\n}\n\nfunction mouseForChart(_ref) {\n  var canvas = _ref.canvas,\n      canvasBounds = _ref.canvasBounds;\n  var dispatcher = createDispatcher(['move', 'enter', 'leave', 'down', 'up']);\n  var mouse = dispatcher.mouse;\n\n  function onMouseDown(e) {\n    mouse.xRaw = e.clientX - canvasBounds.left;\n    mouse.yRaw = e.clientY - canvasBounds.top;\n    mouse.x = mouse.xRaw * _Globals__WEBPACK_IMPORTED_MODULE_0__[\"PIXEL_RATIO\"];\n    mouse.y = mouse.yRaw * _Globals__WEBPACK_IMPORTED_MODULE_0__[\"PIXEL_RATIO\"];\n    mouse.newXRaw = mouse.xRaw;\n    mouse.newYRaw = mouse.yRaw;\n    mouse.newX = mouse.x;\n    mouse.newY = mouse.y;\n    dispatcher.dispatch('down', e);\n  }\n\n  function onMouseMove(e) {\n    mouse.newXRaw = e.clientX - canvasBounds.left;\n    mouse.newYRaw = e.clientY - canvasBounds.top;\n    mouse.newX = mouse.newXRaw * _Globals__WEBPACK_IMPORTED_MODULE_0__[\"PIXEL_RATIO\"];\n    mouse.newY = mouse.newYRaw * _Globals__WEBPACK_IMPORTED_MODULE_0__[\"PIXEL_RATIO\"];\n    dispatcher.dispatch('move', e);\n  }\n\n  function onMouseEnter(e) {\n    dispatcher.dispatch('enter', e);\n  }\n\n  function onMouseUp(e) {\n    mouse.isHolding = false;\n    dispatcher.dispatch('up', e);\n  }\n\n  function onTouchDown(e) {\n    onMouseDown(e.touches[0]);\n  }\n\n  function onTouchMove(e) {\n    onMouseMove(e.touches[0]);\n  }\n\n  document.addEventListener('mousedown', onMouseDown);\n  document.addEventListener('mousemove', onMouseMove);\n  document.addEventListener('mouseup', onMouseUp);\n  document.addEventListener('touchstart', onTouchDown);\n  document.addEventListener('touchmove', onTouchMove, {\n    passive: false\n  });\n  document.addEventListener('touchend', onMouseUp);\n  document.addEventListener('touchcancel', onMouseUp);\n  document.addEventListener('selectstart', function (e) {\n    return false;\n  });\n  return {\n    mouse: mouse,\n    addListener: dispatcher.addListener\n  };\n}\n\n//# sourceURL=webpack:///./src/Utils/Mouse.js?");

/***/ }),

/***/ "./src/arrow.svg":
/*!***********************!*\
  !*** ./src/arrow.svg ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"arrow.svg\";\n\n//# sourceURL=webpack:///./src/arrow.svg?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Utils_AnimationLoop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Utils/AnimationLoop */ \"./src/Utils/AnimationLoop.js\");\n/* harmony import */ var _Chart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Chart */ \"./src/Chart.js\");\n\n\nvar item = 3;\nfetch('assets/chart_data.json').then(function (res) {\n  return res.json();\n}).then(function (ChartsData) {\n  // fetch('assets/stage_2_data/2/overview.json').then(res => res.json()).then(ChartsData => {\n  // const charts = [ChartsData].map((data, index) => {\n  var charts = ChartsData.slice(item, item + 1).map(function (data, index) {\n    // const charts = ChartsData.map((data, index) => {\n    var chart = Object(_Chart__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(data, index);\n    return chart;\n  });\n  charts.forEach(function (chart) {\n    _Utils_AnimationLoop__WEBPACK_IMPORTED_MODULE_0__[\"default\"].add(function () {\n      chart.render();\n    });\n  });\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! exports provided: normalizeMemo, normalize, normalizeAnimated, flatMax, flatMin, flatMaxRange, flatMinRange, debounce, throttle, memo, drawingWithRange */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"normalizeMemo\", function() { return normalizeMemo; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"normalize\", function() { return normalize; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"normalizeAnimated\", function() { return normalizeAnimated; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"flatMax\", function() { return flatMax; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"flatMin\", function() { return flatMin; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"flatMaxRange\", function() { return flatMaxRange; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"flatMinRange\", function() { return flatMinRange; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"debounce\", function() { return debounce; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"throttle\", function() { return throttle; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"memo\", function() { return memo; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"drawingWithRange\", function() { return drawingWithRange; });\n/* harmony import */ var _Utils_Animated__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Utils/Animated */ \"./src/Utils/Animated.js\");\n\nfunction normalizeMemo(min, max) {\n  var delta = max - min;\n  var memo = {};\n\n  function norm(val) {\n    if (!memo[val]) {\n      memo[val] = (val - min) / delta;\n    }\n\n    return memo[val];\n  }\n\n  norm.de = function denorm(val) {\n    return val * delta + min;\n  };\n\n  norm.data = {\n    delta: delta,\n    min: min,\n    max: max\n  };\n  return norm;\n}\nfunction normalize(min, max) {\n  var delta = max - min;\n\n  function norm(val) {\n    return (val - min) / delta;\n  }\n\n  ;\n\n  norm.de = function denorm(val) {\n    return val * delta + min;\n  };\n\n  return norm;\n}\nfunction normalizeAnimated(animator, min, max) {\n  var newMax = min;\n  var newMin = animator.createAnimation(min, 300);\n  var delta = animator.createAnimation(max - min, 300);\n\n  function norm(val) {\n    return (val - newMin.value) / delta.value;\n  }\n\n  ;\n\n  norm.updateDelta = function (min, max) {\n    newMax = max;\n    newMin.play(min);\n    delta.play(max - min);\n  };\n\n  return norm;\n}\nvar flatMax = function flatMax(arr) {\n  return Math.max.apply(null, arr.map(function (set) {\n    return Math.max.apply(null, set.slice(1));\n  }));\n};\nvar flatMin = function flatMin(arr) {\n  return Math.min.apply(null, arr.map(function (set) {\n    return Math.min.apply(null, set.slice(1));\n  }));\n};\nvar flatMaxRange = function flatMaxRange(arr, start, end) {\n  return Math.max.apply(null, arr.map(function (set) {\n    return Math.max.apply(null, set.slice(1 + start, end));\n  }));\n};\nvar flatMinRange = function flatMinRange(arr, start, end) {\n  return Math.min.apply(null, arr.map(function (set) {\n    return Math.min.apply(null, set.slice(1 + start, end));\n  }));\n};\nvar debounce = function debounce(func, delay) {\n  var inDebounce;\n  return function () {\n    var context = this;\n    var args = arguments;\n    clearTimeout(inDebounce);\n    inDebounce = setTimeout(function () {\n      return func.apply(context, args);\n    }, delay);\n  };\n};\nvar throttle = function throttle(func, limit) {\n  var inThrottle;\n  return function () {\n    var args = arguments;\n    var context = this;\n\n    if (!inThrottle) {\n      func.apply(context, args);\n      inThrottle = true;\n      setTimeout(function () {\n        return inThrottle = false;\n      }, limit);\n    }\n  };\n};\nfunction memo(fun) {\n  var memos = {};\n  return function memoized(arg) {\n    if (!memos[arg]) {\n      memos[arg] = fun(arg);\n    }\n\n    return memos[arg];\n  };\n}\nfunction drawingWithRange(range, draw) {\n  return function drawRange(data, x, y, width, height) {\n    var scale = range[1] - range[0];\n    var xs = width * range[0];\n    var xNew = x - xs / scale;\n    var widthNew = width / scale;\n    draw(data, xNew, y, widthNew, height);\n  };\n}\n\n//# sourceURL=webpack:///./src/utils.js?");

/***/ })

/******/ });