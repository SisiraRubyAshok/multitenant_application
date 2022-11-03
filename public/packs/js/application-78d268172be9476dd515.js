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
/******/ 	__webpack_require__.p = "/packs/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/javascript/packs/application.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/javascript/channels sync recursive _channel\\.js$":
/*!****************************************************!*\
  !*** ./app/javascript/channels sync _channel\.js$ ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "./app/javascript/channels sync recursive _channel\\.js$";

/***/ }),

/***/ "./app/javascript/channels/index.js":
/*!******************************************!*\
  !*** ./app/javascript/channels/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Load all the channels within this directory and all subdirectories.
// Channel files must be named *_channel.js.
var channels = __webpack_require__("./app/javascript/channels sync recursive _channel\\.js$");

channels.keys().forEach(channels);

/***/ }),

/***/ "./app/javascript/packs/application.js":
/*!*********************************************!*\
  !*** ./app/javascript/packs/application.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _rails_ujs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @rails/ujs */ "./node_modules/@rails/ujs/lib/assets/compiled/rails-ujs.js");
/* harmony import */ var _rails_ujs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_rails_ujs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var turbolinks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! turbolinks */ "./node_modules/turbolinks/dist/turbolinks.js");
/* harmony import */ var turbolinks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(turbolinks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _rails_activestorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @rails/activestorage */ "./node_modules/@rails/activestorage/app/assets/javascripts/activestorage.js");
/* harmony import */ var _rails_activestorage__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_rails_activestorage__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var channels__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! channels */ "./app/javascript/channels/index.js");
/* harmony import */ var channels__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(channels__WEBPACK_IMPORTED_MODULE_3__);
// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.




window.Highcharts = Highcharts; //require("@rails/ujs").start()
//require("turbolinks").start()
//require("@rails/activestorage").start()
//require("channels")
//require("jquery")

_rails_ujs__WEBPACK_IMPORTED_MODULE_0___default.a.start();
turbolinks__WEBPACK_IMPORTED_MODULE_1___default.a.start();
_rails_activestorage__WEBPACK_IMPORTED_MODULE_2__["start"]();

__webpack_require__(/*! packs/client */ "./app/javascript/packs/client.js");

__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module 'easy-autocomplete'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

/***/ }),

/***/ "./app/javascript/packs/client.js":
/*!****************************************!*\
  !*** ./app/javascript/packs/client.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! highcharts */ "./node_modules/highcharts/highcharts.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_0__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


alert("hello");
$(function () {
  var _Highcharts$Chart;

  // Create the chart
  chart = new highcharts__WEBPACK_IMPORTED_MODULE_0___default.a.Chart((_Highcharts$Chart = {
    chart: {
      renderTo: 'chart-container1',
      type: 'pie'
    },
    plotOptions: {
      pie: {
        shadow: true
      }
    }
  }, _defineProperty(_Highcharts$Chart, "plotOptions", {
    solidgauge: {
      borderColor: '#009CE8',
      borderWidth: 40,
      radius: 90,
      innerRadius: '90%',
      dataLabels: {
        y: 5,
        borderWidth: 0,
        format: '{y}%',
        useHTML: true
      }
    }
  }), _defineProperty(_Highcharts$Chart, "title", {
    text: '60',
    align: 'center',
    verticalAlign: 'middle',
    color: 'black'
  }), _defineProperty(_Highcharts$Chart, "pane", {
    size: '100%',
    center: ['50%', '60%'],
    startAngle: -130,
    endAngle: 130,
    background: {
      borderWidth: 20,
      backgroundColor: '#DBDBDB',
      shape: 'arc',
      borderColor: '#DBDBDB',
      outerRadius: '90%',
      innerRadius: '90%'
    }
  }), _defineProperty(_Highcharts$Chart, "colors", ['#00ff00']), _defineProperty(_Highcharts$Chart, "series", [{
    name: 'Projects',
    data: [["Total", 60]],
    size: '100%',
    y: 60,
    innerSize: '85%',
    format: '{y}%',
    showInLegend: false,
    dataLabels: {
      enabled: false
    }
  }]), _Highcharts$Chart));
});
$(function () {
  var _Highcharts$Chart2;

  // Create the chart
  chart = new highcharts__WEBPACK_IMPORTED_MODULE_0___default.a.Chart((_Highcharts$Chart2 = {
    chart: {
      renderTo: 'chart-container2',
      type: 'pie'
    },
    title: {
      text: ''
    },
    plotOptions: {
      pie: {
        shadow: true
      }
    }
  }, _defineProperty(_Highcharts$Chart2, "plotOptions", {
    solidgauge: {
      borderColor: '#009CE8',
      borderWidth: 40,
      radius: 90,
      innerRadius: '90%',
      dataLabels: {
        y: 5,
        borderWidth: 0,
        useHTML: true
      }
    }
  }), _defineProperty(_Highcharts$Chart2, "title", {
    text: '20',
    align: 'center',
    verticalAlign: 'middle',
    color: 'black'
  }), _defineProperty(_Highcharts$Chart2, "pane", {
    size: '100%',
    center: ['50%', '60%'],
    startAngle: -130,
    endAngle: 130,
    background: {
      borderWidth: 20,
      backgroundColor: '#DBDBDB',
      shape: 'arc',
      borderColor: '#DBDBDB',
      outerRadius: '90%',
      innerRadius: '90%'
    }
  }), _defineProperty(_Highcharts$Chart2, "colors", ['#3366ff']), _defineProperty(_Highcharts$Chart2, "series", [{
    name: 'Clients',
    data: [["Total", 100]],
    size: '100%',
    innerSize: '85%',
    showInLegend: false,
    dataLabels: {
      enabled: false
    }
  }]), _Highcharts$Chart2));
});
$(function () {
  var _Highcharts$Chart3;

  // Create the chart
  chart = new highcharts__WEBPACK_IMPORTED_MODULE_0___default.a.Chart((_Highcharts$Chart3 = {
    chart: {
      renderTo: 'chart-container3',
      type: 'pie'
    },
    title: {
      text: ''
    },
    plotOptions: {
      pie: {
        shadow: true
      }
    }
  }, _defineProperty(_Highcharts$Chart3, "plotOptions", {
    solidgauge: {
      borderColor: '#009CE8',
      borderWidth: 40,
      radius: 90,
      innerRadius: '90%',
      dataLabels: {
        y: 5,
        borderWidth: 0,
        useHTML: true
      }
    }
  }), _defineProperty(_Highcharts$Chart3, "title", {
    text: '100',
    align: 'center',
    verticalAlign: 'middle',
    color: 'black'
  }), _defineProperty(_Highcharts$Chart3, "pane", {
    size: '100%',
    center: ['50%', '60%'],
    startAngle: -130,
    endAngle: 130,
    background: {
      borderWidth: 20,
      backgroundColor: '#DBDBDB',
      shape: 'arc',
      borderColor: '#DBDBDB',
      outerRadius: '90%',
      innerRadius: '90%'
    }
  }), _defineProperty(_Highcharts$Chart3, "colors", ['red']), _defineProperty(_Highcharts$Chart3, "series", [{
    name: 'Invoice Generated',
    data: [["Total", 100]],
    size: '100%',
    innerSize: '85%',
    showInLegend: false,
    dataLabels: {
      enabled: false
    }
  }]), _Highcharts$Chart3));
});
highcharts__WEBPACK_IMPORTED_MODULE_0___default.a.chart('monthly_billable', {
  title: {
    text: 'Monthly Billable Projects'
  },
  colors: ['#ff1a75'],
  series: [{
    name: 'Monthly Billable Projects',
    type: 'column',
    data: [1100],
    pointWidth: 30
  }]
});
highcharts__WEBPACK_IMPORTED_MODULE_0___default.a.chart('weekly_billable', {
  title: {
    text: 'Weekly Billable Projects'
  },
  colors: ['#ff1a75'],
  series: [{
    name: 'Weekly Billable Projects',
    type: 'column',
    data: [1500],
    pointWidth: 30
  }]
});
highcharts__WEBPACK_IMPORTED_MODULE_0___default.a.chart('yearly_billable', {
  title: {
    text: 'Yearly Billable Projects'
  },
  colors: ['#ff1a75'],
  series: [{
    name: 'Yearly Billable Projects',
    type: 'column',
    data: [1900],
    pointWidth: 30
  }]
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./node_modules/@rails/activestorage/app/assets/javascripts/activestorage.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@rails/activestorage/app/assets/javascripts/activestorage.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

(function (global, factory) {
  ( false ? undefined : _typeof(exports)) === "object" && typeof module !== "undefined" ? factory(exports) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
})(this, function (exports) {
  "use strict";

  function createCommonjsModule(fn, module) {
    return module = {
      exports: {}
    }, fn(module, module.exports), module.exports;
  }

  var sparkMd5 = createCommonjsModule(function (module, exports) {
    (function (factory) {
      {
        module.exports = factory();
      }
    })(function (undefined) {
      var hex_chr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];

      function md5cycle(x, k) {
        var a = x[0],
            b = x[1],
            c = x[2],
            d = x[3];
        a += (b & c | ~b & d) + k[0] - 680876936 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[1] - 389564586 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[2] + 606105819 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[3] - 1044525330 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & c | ~b & d) + k[4] - 176418897 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[5] + 1200080426 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[6] - 1473231341 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[7] - 45705983 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & c | ~b & d) + k[8] + 1770035416 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[9] - 1958414417 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[10] - 42063 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[11] - 1990404162 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & c | ~b & d) + k[12] + 1804603682 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[13] - 40341101 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[14] - 1502002290 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[15] + 1236535329 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & d | c & ~d) + k[1] - 165796510 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[6] - 1069501632 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[11] + 643717713 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[0] - 373897302 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b & d | c & ~d) + k[5] - 701558691 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[10] + 38016083 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[15] - 660478335 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[4] - 405537848 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b & d | c & ~d) + k[9] + 568446438 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[14] - 1019803690 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[3] - 187363961 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[8] + 1163531501 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b & d | c & ~d) + k[13] - 1444681467 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[2] - 51403784 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[7] + 1735328473 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[12] - 1926607734 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b ^ c ^ d) + k[5] - 378558 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[8] - 2022574463 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[11] + 1839030562 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[14] - 35309556 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (b ^ c ^ d) + k[1] - 1530992060 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[4] + 1272893353 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[7] - 155497632 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[10] - 1094730640 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (b ^ c ^ d) + k[13] + 681279174 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[0] - 358537222 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[3] - 722521979 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[6] + 76029189 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (b ^ c ^ d) + k[9] - 640364487 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[12] - 421815835 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[15] + 530742520 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[2] - 995338651 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (c ^ (b | ~d)) + k[0] - 198630844 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[7] + 1126891415 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[14] - 1416354905 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[5] - 57434055 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        a += (c ^ (b | ~d)) + k[12] + 1700485571 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[3] - 1894986606 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[10] - 1051523 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[1] - 2054922799 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        a += (c ^ (b | ~d)) + k[8] + 1873313359 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[15] - 30611744 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[6] - 1560198380 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[13] + 1309151649 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        a += (c ^ (b | ~d)) + k[4] - 145523070 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[11] - 1120210379 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[2] + 718787259 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[9] - 343485551 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        x[0] = a + x[0] | 0;
        x[1] = b + x[1] | 0;
        x[2] = c + x[2] | 0;
        x[3] = d + x[3] | 0;
      }

      function md5blk(s) {
        var md5blks = [],
            i;

        for (i = 0; i < 64; i += 4) {
          md5blks[i >> 2] = s.charCodeAt(i) + (s.charCodeAt(i + 1) << 8) + (s.charCodeAt(i + 2) << 16) + (s.charCodeAt(i + 3) << 24);
        }

        return md5blks;
      }

      function md5blk_array(a) {
        var md5blks = [],
            i;

        for (i = 0; i < 64; i += 4) {
          md5blks[i >> 2] = a[i] + (a[i + 1] << 8) + (a[i + 2] << 16) + (a[i + 3] << 24);
        }

        return md5blks;
      }

      function md51(s) {
        var n = s.length,
            state = [1732584193, -271733879, -1732584194, 271733878],
            i,
            length,
            tail,
            tmp,
            lo,
            hi;

        for (i = 64; i <= n; i += 64) {
          md5cycle(state, md5blk(s.substring(i - 64, i)));
        }

        s = s.substring(i - 64);
        length = s.length;
        tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

        for (i = 0; i < length; i += 1) {
          tail[i >> 2] |= s.charCodeAt(i) << (i % 4 << 3);
        }

        tail[i >> 2] |= 128 << (i % 4 << 3);

        if (i > 55) {
          md5cycle(state, tail);

          for (i = 0; i < 16; i += 1) {
            tail[i] = 0;
          }
        }

        tmp = n * 8;
        tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
        lo = parseInt(tmp[2], 16);
        hi = parseInt(tmp[1], 16) || 0;
        tail[14] = lo;
        tail[15] = hi;
        md5cycle(state, tail);
        return state;
      }

      function md51_array(a) {
        var n = a.length,
            state = [1732584193, -271733879, -1732584194, 271733878],
            i,
            length,
            tail,
            tmp,
            lo,
            hi;

        for (i = 64; i <= n; i += 64) {
          md5cycle(state, md5blk_array(a.subarray(i - 64, i)));
        }

        a = i - 64 < n ? a.subarray(i - 64) : new Uint8Array(0);
        length = a.length;
        tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

        for (i = 0; i < length; i += 1) {
          tail[i >> 2] |= a[i] << (i % 4 << 3);
        }

        tail[i >> 2] |= 128 << (i % 4 << 3);

        if (i > 55) {
          md5cycle(state, tail);

          for (i = 0; i < 16; i += 1) {
            tail[i] = 0;
          }
        }

        tmp = n * 8;
        tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
        lo = parseInt(tmp[2], 16);
        hi = parseInt(tmp[1], 16) || 0;
        tail[14] = lo;
        tail[15] = hi;
        md5cycle(state, tail);
        return state;
      }

      function rhex(n) {
        var s = "",
            j;

        for (j = 0; j < 4; j += 1) {
          s += hex_chr[n >> j * 8 + 4 & 15] + hex_chr[n >> j * 8 & 15];
        }

        return s;
      }

      function hex(x) {
        var i;

        for (i = 0; i < x.length; i += 1) {
          x[i] = rhex(x[i]);
        }

        return x.join("");
      }

      if (hex(md51("hello")) !== "5d41402abc4b2a76b9719d911017c592") ;

      if (typeof ArrayBuffer !== "undefined" && !ArrayBuffer.prototype.slice) {
        (function () {
          function clamp(val, length) {
            val = val | 0 || 0;

            if (val < 0) {
              return Math.max(val + length, 0);
            }

            return Math.min(val, length);
          }

          ArrayBuffer.prototype.slice = function (from, to) {
            var length = this.byteLength,
                begin = clamp(from, length),
                end = length,
                num,
                target,
                targetArray,
                sourceArray;

            if (to !== undefined) {
              end = clamp(to, length);
            }

            if (begin > end) {
              return new ArrayBuffer(0);
            }

            num = end - begin;
            target = new ArrayBuffer(num);
            targetArray = new Uint8Array(target);
            sourceArray = new Uint8Array(this, begin, num);
            targetArray.set(sourceArray);
            return target;
          };
        })();
      }

      function toUtf8(str) {
        if (/[\u0080-\uFFFF]/.test(str)) {
          str = unescape(encodeURIComponent(str));
        }

        return str;
      }

      function utf8Str2ArrayBuffer(str, returnUInt8Array) {
        var length = str.length,
            buff = new ArrayBuffer(length),
            arr = new Uint8Array(buff),
            i;

        for (i = 0; i < length; i += 1) {
          arr[i] = str.charCodeAt(i);
        }

        return returnUInt8Array ? arr : buff;
      }

      function arrayBuffer2Utf8Str(buff) {
        return String.fromCharCode.apply(null, new Uint8Array(buff));
      }

      function concatenateArrayBuffers(first, second, returnUInt8Array) {
        var result = new Uint8Array(first.byteLength + second.byteLength);
        result.set(new Uint8Array(first));
        result.set(new Uint8Array(second), first.byteLength);
        return returnUInt8Array ? result : result.buffer;
      }

      function hexToBinaryString(hex) {
        var bytes = [],
            length = hex.length,
            x;

        for (x = 0; x < length - 1; x += 2) {
          bytes.push(parseInt(hex.substr(x, 2), 16));
        }

        return String.fromCharCode.apply(String, bytes);
      }

      function SparkMD5() {
        this.reset();
      }

      SparkMD5.prototype.append = function (str) {
        this.appendBinary(toUtf8(str));
        return this;
      };

      SparkMD5.prototype.appendBinary = function (contents) {
        this._buff += contents;
        this._length += contents.length;
        var length = this._buff.length,
            i;

        for (i = 64; i <= length; i += 64) {
          md5cycle(this._hash, md5blk(this._buff.substring(i - 64, i)));
        }

        this._buff = this._buff.substring(i - 64);
        return this;
      };

      SparkMD5.prototype.end = function (raw) {
        var buff = this._buff,
            length = buff.length,
            i,
            tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            ret;

        for (i = 0; i < length; i += 1) {
          tail[i >> 2] |= buff.charCodeAt(i) << (i % 4 << 3);
        }

        this._finish(tail, length);

        ret = hex(this._hash);

        if (raw) {
          ret = hexToBinaryString(ret);
        }

        this.reset();
        return ret;
      };

      SparkMD5.prototype.reset = function () {
        this._buff = "";
        this._length = 0;
        this._hash = [1732584193, -271733879, -1732584194, 271733878];
        return this;
      };

      SparkMD5.prototype.getState = function () {
        return {
          buff: this._buff,
          length: this._length,
          hash: this._hash
        };
      };

      SparkMD5.prototype.setState = function (state) {
        this._buff = state.buff;
        this._length = state.length;
        this._hash = state.hash;
        return this;
      };

      SparkMD5.prototype.destroy = function () {
        delete this._hash;
        delete this._buff;
        delete this._length;
      };

      SparkMD5.prototype._finish = function (tail, length) {
        var i = length,
            tmp,
            lo,
            hi;
        tail[i >> 2] |= 128 << (i % 4 << 3);

        if (i > 55) {
          md5cycle(this._hash, tail);

          for (i = 0; i < 16; i += 1) {
            tail[i] = 0;
          }
        }

        tmp = this._length * 8;
        tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
        lo = parseInt(tmp[2], 16);
        hi = parseInt(tmp[1], 16) || 0;
        tail[14] = lo;
        tail[15] = hi;
        md5cycle(this._hash, tail);
      };

      SparkMD5.hash = function (str, raw) {
        return SparkMD5.hashBinary(toUtf8(str), raw);
      };

      SparkMD5.hashBinary = function (content, raw) {
        var hash = md51(content),
            ret = hex(hash);
        return raw ? hexToBinaryString(ret) : ret;
      };

      SparkMD5.ArrayBuffer = function () {
        this.reset();
      };

      SparkMD5.ArrayBuffer.prototype.append = function (arr) {
        var buff = concatenateArrayBuffers(this._buff.buffer, arr, true),
            length = buff.length,
            i;
        this._length += arr.byteLength;

        for (i = 64; i <= length; i += 64) {
          md5cycle(this._hash, md5blk_array(buff.subarray(i - 64, i)));
        }

        this._buff = i - 64 < length ? new Uint8Array(buff.buffer.slice(i - 64)) : new Uint8Array(0);
        return this;
      };

      SparkMD5.ArrayBuffer.prototype.end = function (raw) {
        var buff = this._buff,
            length = buff.length,
            tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            i,
            ret;

        for (i = 0; i < length; i += 1) {
          tail[i >> 2] |= buff[i] << (i % 4 << 3);
        }

        this._finish(tail, length);

        ret = hex(this._hash);

        if (raw) {
          ret = hexToBinaryString(ret);
        }

        this.reset();
        return ret;
      };

      SparkMD5.ArrayBuffer.prototype.reset = function () {
        this._buff = new Uint8Array(0);
        this._length = 0;
        this._hash = [1732584193, -271733879, -1732584194, 271733878];
        return this;
      };

      SparkMD5.ArrayBuffer.prototype.getState = function () {
        var state = SparkMD5.prototype.getState.call(this);
        state.buff = arrayBuffer2Utf8Str(state.buff);
        return state;
      };

      SparkMD5.ArrayBuffer.prototype.setState = function (state) {
        state.buff = utf8Str2ArrayBuffer(state.buff, true);
        return SparkMD5.prototype.setState.call(this, state);
      };

      SparkMD5.ArrayBuffer.prototype.destroy = SparkMD5.prototype.destroy;
      SparkMD5.ArrayBuffer.prototype._finish = SparkMD5.prototype._finish;

      SparkMD5.ArrayBuffer.hash = function (arr, raw) {
        var hash = md51_array(new Uint8Array(arr)),
            ret = hex(hash);
        return raw ? hexToBinaryString(ret) : ret;
      };

      return SparkMD5;
    });
  });

  var classCallCheck = function classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var fileSlice = File.prototype.slice || File.prototype.mozSlice || File.prototype.webkitSlice;

  var FileChecksum = function () {
    createClass(FileChecksum, null, [{
      key: "create",
      value: function create(file, callback) {
        var instance = new FileChecksum(file);
        instance.create(callback);
      }
    }]);

    function FileChecksum(file) {
      classCallCheck(this, FileChecksum);
      this.file = file;
      this.chunkSize = 2097152;
      this.chunkCount = Math.ceil(this.file.size / this.chunkSize);
      this.chunkIndex = 0;
    }

    createClass(FileChecksum, [{
      key: "create",
      value: function create(callback) {
        var _this = this;

        this.callback = callback;
        this.md5Buffer = new sparkMd5.ArrayBuffer();
        this.fileReader = new FileReader();
        this.fileReader.addEventListener("load", function (event) {
          return _this.fileReaderDidLoad(event);
        });
        this.fileReader.addEventListener("error", function (event) {
          return _this.fileReaderDidError(event);
        });
        this.readNextChunk();
      }
    }, {
      key: "fileReaderDidLoad",
      value: function fileReaderDidLoad(event) {
        this.md5Buffer.append(event.target.result);

        if (!this.readNextChunk()) {
          var binaryDigest = this.md5Buffer.end(true);
          var base64digest = btoa(binaryDigest);
          this.callback(null, base64digest);
        }
      }
    }, {
      key: "fileReaderDidError",
      value: function fileReaderDidError(event) {
        this.callback("Error reading " + this.file.name);
      }
    }, {
      key: "readNextChunk",
      value: function readNextChunk() {
        if (this.chunkIndex < this.chunkCount || this.chunkIndex == 0 && this.chunkCount == 0) {
          var start = this.chunkIndex * this.chunkSize;
          var end = Math.min(start + this.chunkSize, this.file.size);
          var bytes = fileSlice.call(this.file, start, end);
          this.fileReader.readAsArrayBuffer(bytes);
          this.chunkIndex++;
          return true;
        } else {
          return false;
        }
      }
    }]);
    return FileChecksum;
  }();

  function getMetaValue(name) {
    var element = findElement(document.head, 'meta[name="' + name + '"]');

    if (element) {
      return element.getAttribute("content");
    }
  }

  function findElements(root, selector) {
    if (typeof root == "string") {
      selector = root;
      root = document;
    }

    var elements = root.querySelectorAll(selector);
    return toArray$1(elements);
  }

  function findElement(root, selector) {
    if (typeof root == "string") {
      selector = root;
      root = document;
    }

    return root.querySelector(selector);
  }

  function dispatchEvent(element, type) {
    var eventInit = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var disabled = element.disabled;
    var bubbles = eventInit.bubbles,
        cancelable = eventInit.cancelable,
        detail = eventInit.detail;
    var event = document.createEvent("Event");
    event.initEvent(type, bubbles || true, cancelable || true);
    event.detail = detail || {};

    try {
      element.disabled = false;
      element.dispatchEvent(event);
    } finally {
      element.disabled = disabled;
    }

    return event;
  }

  function toArray$1(value) {
    if (Array.isArray(value)) {
      return value;
    } else if (Array.from) {
      return Array.from(value);
    } else {
      return [].slice.call(value);
    }
  }

  var BlobRecord = function () {
    function BlobRecord(file, checksum, url) {
      var _this = this;

      classCallCheck(this, BlobRecord);
      this.file = file;
      this.attributes = {
        filename: file.name,
        content_type: file.type || "application/octet-stream",
        byte_size: file.size,
        checksum: checksum
      };
      this.xhr = new XMLHttpRequest();
      this.xhr.open("POST", url, true);
      this.xhr.responseType = "json";
      this.xhr.setRequestHeader("Content-Type", "application/json");
      this.xhr.setRequestHeader("Accept", "application/json");
      this.xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
      var csrfToken = getMetaValue("csrf-token");

      if (csrfToken != undefined) {
        this.xhr.setRequestHeader("X-CSRF-Token", csrfToken);
      }

      this.xhr.addEventListener("load", function (event) {
        return _this.requestDidLoad(event);
      });
      this.xhr.addEventListener("error", function (event) {
        return _this.requestDidError(event);
      });
    }

    createClass(BlobRecord, [{
      key: "create",
      value: function create(callback) {
        this.callback = callback;
        this.xhr.send(JSON.stringify({
          blob: this.attributes
        }));
      }
    }, {
      key: "requestDidLoad",
      value: function requestDidLoad(event) {
        if (this.status >= 200 && this.status < 300) {
          var response = this.response;
          var direct_upload = response.direct_upload;
          delete response.direct_upload;
          this.attributes = response;
          this.directUploadData = direct_upload;
          this.callback(null, this.toJSON());
        } else {
          this.requestDidError(event);
        }
      }
    }, {
      key: "requestDidError",
      value: function requestDidError(event) {
        this.callback('Error creating Blob for "' + this.file.name + '". Status: ' + this.status);
      }
    }, {
      key: "toJSON",
      value: function toJSON() {
        var result = {};

        for (var key in this.attributes) {
          result[key] = this.attributes[key];
        }

        return result;
      }
    }, {
      key: "status",
      get: function get$$1() {
        return this.xhr.status;
      }
    }, {
      key: "response",
      get: function get$$1() {
        var _xhr = this.xhr,
            responseType = _xhr.responseType,
            response = _xhr.response;

        if (responseType == "json") {
          return response;
        } else {
          return JSON.parse(response);
        }
      }
    }]);
    return BlobRecord;
  }();

  var BlobUpload = function () {
    function BlobUpload(blob) {
      var _this = this;

      classCallCheck(this, BlobUpload);
      this.blob = blob;
      this.file = blob.file;
      var _blob$directUploadDat = blob.directUploadData,
          url = _blob$directUploadDat.url,
          headers = _blob$directUploadDat.headers;
      this.xhr = new XMLHttpRequest();
      this.xhr.open("PUT", url, true);
      this.xhr.responseType = "text";

      for (var key in headers) {
        this.xhr.setRequestHeader(key, headers[key]);
      }

      this.xhr.addEventListener("load", function (event) {
        return _this.requestDidLoad(event);
      });
      this.xhr.addEventListener("error", function (event) {
        return _this.requestDidError(event);
      });
    }

    createClass(BlobUpload, [{
      key: "create",
      value: function create(callback) {
        this.callback = callback;
        this.xhr.send(this.file.slice());
      }
    }, {
      key: "requestDidLoad",
      value: function requestDidLoad(event) {
        var _xhr = this.xhr,
            status = _xhr.status,
            response = _xhr.response;

        if (status >= 200 && status < 300) {
          this.callback(null, response);
        } else {
          this.requestDidError(event);
        }
      }
    }, {
      key: "requestDidError",
      value: function requestDidError(event) {
        this.callback('Error storing "' + this.file.name + '". Status: ' + this.xhr.status);
      }
    }]);
    return BlobUpload;
  }();

  var id = 0;

  var DirectUpload = function () {
    function DirectUpload(file, url, delegate) {
      classCallCheck(this, DirectUpload);
      this.id = ++id;
      this.file = file;
      this.url = url;
      this.delegate = delegate;
    }

    createClass(DirectUpload, [{
      key: "create",
      value: function create(callback) {
        var _this = this;

        FileChecksum.create(this.file, function (error, checksum) {
          if (error) {
            callback(error);
            return;
          }

          var blob = new BlobRecord(_this.file, checksum, _this.url);
          notify(_this.delegate, "directUploadWillCreateBlobWithXHR", blob.xhr);
          blob.create(function (error) {
            if (error) {
              callback(error);
            } else {
              var upload = new BlobUpload(blob);
              notify(_this.delegate, "directUploadWillStoreFileWithXHR", upload.xhr);
              upload.create(function (error) {
                if (error) {
                  callback(error);
                } else {
                  callback(null, blob.toJSON());
                }
              });
            }
          });
        });
      }
    }]);
    return DirectUpload;
  }();

  function notify(object, methodName) {
    if (object && typeof object[methodName] == "function") {
      for (var _len = arguments.length, messages = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        messages[_key - 2] = arguments[_key];
      }

      return object[methodName].apply(object, messages);
    }
  }

  var DirectUploadController = function () {
    function DirectUploadController(input, file) {
      classCallCheck(this, DirectUploadController);
      this.input = input;
      this.file = file;
      this.directUpload = new DirectUpload(this.file, this.url, this);
      this.dispatch("initialize");
    }

    createClass(DirectUploadController, [{
      key: "start",
      value: function start(callback) {
        var _this = this;

        var hiddenInput = document.createElement("input");
        hiddenInput.type = "hidden";
        hiddenInput.name = this.input.name;
        this.input.insertAdjacentElement("beforebegin", hiddenInput);
        this.dispatch("start");
        this.directUpload.create(function (error, attributes) {
          if (error) {
            hiddenInput.parentNode.removeChild(hiddenInput);

            _this.dispatchError(error);
          } else {
            hiddenInput.value = attributes.signed_id;
          }

          _this.dispatch("end");

          callback(error);
        });
      }
    }, {
      key: "uploadRequestDidProgress",
      value: function uploadRequestDidProgress(event) {
        var progress = event.loaded / event.total * 100;

        if (progress) {
          this.dispatch("progress", {
            progress: progress
          });
        }
      }
    }, {
      key: "dispatch",
      value: function dispatch(name) {
        var detail = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        detail.file = this.file;
        detail.id = this.directUpload.id;
        return dispatchEvent(this.input, "direct-upload:" + name, {
          detail: detail
        });
      }
    }, {
      key: "dispatchError",
      value: function dispatchError(error) {
        var event = this.dispatch("error", {
          error: error
        });

        if (!event.defaultPrevented) {
          alert(error);
        }
      }
    }, {
      key: "directUploadWillCreateBlobWithXHR",
      value: function directUploadWillCreateBlobWithXHR(xhr) {
        this.dispatch("before-blob-request", {
          xhr: xhr
        });
      }
    }, {
      key: "directUploadWillStoreFileWithXHR",
      value: function directUploadWillStoreFileWithXHR(xhr) {
        var _this2 = this;

        this.dispatch("before-storage-request", {
          xhr: xhr
        });
        xhr.upload.addEventListener("progress", function (event) {
          return _this2.uploadRequestDidProgress(event);
        });
      }
    }, {
      key: "url",
      get: function get$$1() {
        return this.input.getAttribute("data-direct-upload-url");
      }
    }]);
    return DirectUploadController;
  }();

  var inputSelector = "input[type=file][data-direct-upload-url]:not([disabled])";

  var DirectUploadsController = function () {
    function DirectUploadsController(form) {
      classCallCheck(this, DirectUploadsController);
      this.form = form;
      this.inputs = findElements(form, inputSelector).filter(function (input) {
        return input.files.length;
      });
    }

    createClass(DirectUploadsController, [{
      key: "start",
      value: function start(callback) {
        var _this = this;

        var controllers = this.createDirectUploadControllers();

        var startNextController = function startNextController() {
          var controller = controllers.shift();

          if (controller) {
            controller.start(function (error) {
              if (error) {
                callback(error);

                _this.dispatch("end");
              } else {
                startNextController();
              }
            });
          } else {
            callback();

            _this.dispatch("end");
          }
        };

        this.dispatch("start");
        startNextController();
      }
    }, {
      key: "createDirectUploadControllers",
      value: function createDirectUploadControllers() {
        var controllers = [];
        this.inputs.forEach(function (input) {
          toArray$1(input.files).forEach(function (file) {
            var controller = new DirectUploadController(input, file);
            controllers.push(controller);
          });
        });
        return controllers;
      }
    }, {
      key: "dispatch",
      value: function dispatch(name) {
        var detail = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        return dispatchEvent(this.form, "direct-uploads:" + name, {
          detail: detail
        });
      }
    }]);
    return DirectUploadsController;
  }();

  var processingAttribute = "data-direct-uploads-processing";
  var submitButtonsByForm = new WeakMap();
  var started = false;

  function start() {
    if (!started) {
      started = true;
      document.addEventListener("click", didClick, true);
      document.addEventListener("submit", didSubmitForm);
      document.addEventListener("ajax:before", didSubmitRemoteElement);
    }
  }

  function didClick(event) {
    var target = event.target;

    if ((target.tagName == "INPUT" || target.tagName == "BUTTON") && target.type == "submit" && target.form) {
      submitButtonsByForm.set(target.form, target);
    }
  }

  function didSubmitForm(event) {
    handleFormSubmissionEvent(event);
  }

  function didSubmitRemoteElement(event) {
    if (event.target.tagName == "FORM") {
      handleFormSubmissionEvent(event);
    }
  }

  function handleFormSubmissionEvent(event) {
    var form = event.target;

    if (form.hasAttribute(processingAttribute)) {
      event.preventDefault();
      return;
    }

    var controller = new DirectUploadsController(form);
    var inputs = controller.inputs;

    if (inputs.length) {
      event.preventDefault();
      form.setAttribute(processingAttribute, "");
      inputs.forEach(disable);
      controller.start(function (error) {
        form.removeAttribute(processingAttribute);

        if (error) {
          inputs.forEach(enable);
        } else {
          submitForm(form);
        }
      });
    }
  }

  function submitForm(form) {
    var button = submitButtonsByForm.get(form) || findElement(form, "input[type=submit], button[type=submit]");

    if (button) {
      var _button = button,
          disabled = _button.disabled;
      button.disabled = false;
      button.focus();
      button.click();
      button.disabled = disabled;
    } else {
      button = document.createElement("input");
      button.type = "submit";
      button.style.display = "none";
      form.appendChild(button);
      button.click();
      form.removeChild(button);
    }

    submitButtonsByForm["delete"](form);
  }

  function disable(input) {
    input.disabled = true;
  }

  function enable(input) {
    input.disabled = false;
  }

  function autostart() {
    if (window.ActiveStorage) {
      start();
    }
  }

  setTimeout(autostart, 1);
  exports.start = start;
  exports.DirectUpload = DirectUpload;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
});

/***/ }),

/***/ "./node_modules/@rails/ujs/lib/assets/compiled/rails-ujs.js":
/*!******************************************************************!*\
  !*** ./node_modules/@rails/ujs/lib/assets/compiled/rails-ujs.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery, module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*
Unobtrusive JavaScript
https://github.com/rails/rails/blob/main/actionview/app/assets/javascripts
Released under the MIT license
 */
;
(function () {
  var context = this;
  (function () {
    (function () {
      this.Rails = {
        linkClickSelector: 'a[data-confirm], a[data-method], a[data-remote]:not([disabled]), a[data-disable-with], a[data-disable]',
        buttonClickSelector: {
          selector: 'button[data-remote]:not([form]), button[data-confirm]:not([form])',
          exclude: 'form button'
        },
        inputChangeSelector: 'select[data-remote], input[data-remote], textarea[data-remote]',
        formSubmitSelector: 'form',
        formInputClickSelector: 'form input[type=submit], form input[type=image], form button[type=submit], form button:not([type]), input[type=submit][form], input[type=image][form], button[type=submit][form], button[form]:not([type])',
        formDisableSelector: 'input[data-disable-with]:enabled, button[data-disable-with]:enabled, textarea[data-disable-with]:enabled, input[data-disable]:enabled, button[data-disable]:enabled, textarea[data-disable]:enabled',
        formEnableSelector: 'input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled, input[data-disable]:disabled, button[data-disable]:disabled, textarea[data-disable]:disabled',
        fileInputSelector: 'input[name][type=file]:not([disabled])',
        linkDisableSelector: 'a[data-disable-with], a[data-disable]',
        buttonDisableSelector: 'button[data-remote][data-disable-with], button[data-remote][data-disable]'
      };
    }).call(this);
  }).call(context);
  var Rails = context.Rails;
  (function () {
    (function () {
      var nonce;
      nonce = null;

      Rails.loadCSPNonce = function () {
        var ref;
        return nonce = (ref = document.querySelector("meta[name=csp-nonce]")) != null ? ref.content : void 0;
      };

      Rails.cspNonce = function () {
        return nonce != null ? nonce : Rails.loadCSPNonce();
      };
    }).call(this);
    (function () {
      var expando, m;
      m = Element.prototype.matches || Element.prototype.matchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.webkitMatchesSelector;

      Rails.matches = function (element, selector) {
        if (selector.exclude != null) {
          return m.call(element, selector.selector) && !m.call(element, selector.exclude);
        } else {
          return m.call(element, selector);
        }
      };

      expando = '_ujsData';

      Rails.getData = function (element, key) {
        var ref;
        return (ref = element[expando]) != null ? ref[key] : void 0;
      };

      Rails.setData = function (element, key, value) {
        if (element[expando] == null) {
          element[expando] = {};
        }

        return element[expando][key] = value;
      };

      Rails.$ = function (selector) {
        return Array.prototype.slice.call(document.querySelectorAll(selector));
      };
    }).call(this);
    (function () {
      var $, csrfParam, csrfToken;
      $ = Rails.$;

      csrfToken = Rails.csrfToken = function () {
        var meta;
        meta = document.querySelector('meta[name=csrf-token]');
        return meta && meta.content;
      };

      csrfParam = Rails.csrfParam = function () {
        var meta;
        meta = document.querySelector('meta[name=csrf-param]');
        return meta && meta.content;
      };

      Rails.CSRFProtection = function (xhr) {
        var token;
        token = csrfToken();

        if (token != null) {
          return xhr.setRequestHeader('X-CSRF-Token', token);
        }
      };

      Rails.refreshCSRFTokens = function () {
        var param, token;
        token = csrfToken();
        param = csrfParam();

        if (token != null && param != null) {
          return $('form input[name="' + param + '"]').forEach(function (input) {
            return input.value = token;
          });
        }
      };
    }).call(this);
    (function () {
      var CustomEvent, fire, matches, preventDefault;
      matches = Rails.matches;
      CustomEvent = window.CustomEvent;

      if (typeof CustomEvent !== 'function') {
        CustomEvent = function CustomEvent(event, params) {
          var evt;
          evt = document.createEvent('CustomEvent');
          evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
          return evt;
        };

        CustomEvent.prototype = window.Event.prototype;
        preventDefault = CustomEvent.prototype.preventDefault;

        CustomEvent.prototype.preventDefault = function () {
          var result;
          result = preventDefault.call(this);

          if (this.cancelable && !this.defaultPrevented) {
            Object.defineProperty(this, 'defaultPrevented', {
              get: function get() {
                return true;
              }
            });
          }

          return result;
        };
      }

      fire = Rails.fire = function (obj, name, data) {
        var event;
        event = new CustomEvent(name, {
          bubbles: true,
          cancelable: true,
          detail: data
        });
        obj.dispatchEvent(event);
        return !event.defaultPrevented;
      };

      Rails.stopEverything = function (e) {
        fire(e.target, 'ujs:everythingStopped');
        e.preventDefault();
        e.stopPropagation();
        return e.stopImmediatePropagation();
      };

      Rails.delegate = function (element, selector, eventType, handler) {
        return element.addEventListener(eventType, function (e) {
          var target;
          target = e.target;

          while (!(!(target instanceof Element) || matches(target, selector))) {
            target = target.parentNode;
          }

          if (target instanceof Element && handler.call(target, e) === false) {
            e.preventDefault();
            return e.stopPropagation();
          }
        });
      };
    }).call(this);
    (function () {
      var AcceptHeaders, CSRFProtection, createXHR, cspNonce, fire, prepareOptions, processResponse;
      cspNonce = Rails.cspNonce, CSRFProtection = Rails.CSRFProtection, fire = Rails.fire;
      AcceptHeaders = {
        '*': '*/*',
        text: 'text/plain',
        html: 'text/html',
        xml: 'application/xml, text/xml',
        json: 'application/json, text/javascript',
        script: 'text/javascript, application/javascript, application/ecmascript, application/x-ecmascript'
      };

      Rails.ajax = function (options) {
        var xhr;
        options = prepareOptions(options);
        xhr = createXHR(options, function () {
          var ref, response;
          response = processResponse((ref = xhr.response) != null ? ref : xhr.responseText, xhr.getResponseHeader('Content-Type'));

          if (Math.floor(xhr.status / 100) === 2) {
            if (typeof options.success === "function") {
              options.success(response, xhr.statusText, xhr);
            }
          } else {
            if (typeof options.error === "function") {
              options.error(response, xhr.statusText, xhr);
            }
          }

          return typeof options.complete === "function" ? options.complete(xhr, xhr.statusText) : void 0;
        });

        if (options.beforeSend != null && !options.beforeSend(xhr, options)) {
          return false;
        }

        if (xhr.readyState === XMLHttpRequest.OPENED) {
          return xhr.send(options.data);
        }
      };

      prepareOptions = function prepareOptions(options) {
        options.url = options.url || location.href;
        options.type = options.type.toUpperCase();

        if (options.type === 'GET' && options.data) {
          if (options.url.indexOf('?') < 0) {
            options.url += '?' + options.data;
          } else {
            options.url += '&' + options.data;
          }
        }

        if (AcceptHeaders[options.dataType] == null) {
          options.dataType = '*';
        }

        options.accept = AcceptHeaders[options.dataType];

        if (options.dataType !== '*') {
          options.accept += ', */*; q=0.01';
        }

        return options;
      };

      createXHR = function createXHR(options, done) {
        var xhr;
        xhr = new XMLHttpRequest();
        xhr.open(options.type, options.url, true);
        xhr.setRequestHeader('Accept', options.accept);

        if (typeof options.data === 'string') {
          xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
        }

        if (!options.crossDomain) {
          xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
          CSRFProtection(xhr);
        }

        xhr.withCredentials = !!options.withCredentials;

        xhr.onreadystatechange = function () {
          if (xhr.readyState === XMLHttpRequest.DONE) {
            return done(xhr);
          }
        };

        return xhr;
      };

      processResponse = function processResponse(response, type) {
        var parser, script;

        if (typeof response === 'string' && typeof type === 'string') {
          if (type.match(/\bjson\b/)) {
            try {
              response = JSON.parse(response);
            } catch (error) {}
          } else if (type.match(/\b(?:java|ecma)script\b/)) {
            script = document.createElement('script');
            script.setAttribute('nonce', cspNonce());
            script.text = response;
            document.head.appendChild(script).parentNode.removeChild(script);
          } else if (type.match(/\b(xml|html|svg)\b/)) {
            parser = new DOMParser();
            type = type.replace(/;.+/, '');

            try {
              response = parser.parseFromString(response, type);
            } catch (error) {}
          }
        }

        return response;
      };

      Rails.href = function (element) {
        return element.href;
      };

      Rails.isCrossDomain = function (url) {
        var e, originAnchor, urlAnchor;
        originAnchor = document.createElement('a');
        originAnchor.href = location.href;
        urlAnchor = document.createElement('a');

        try {
          urlAnchor.href = url;
          return !((!urlAnchor.protocol || urlAnchor.protocol === ':') && !urlAnchor.host || originAnchor.protocol + '//' + originAnchor.host === urlAnchor.protocol + '//' + urlAnchor.host);
        } catch (error) {
          e = error;
          return true;
        }
      };
    }).call(this);
    (function () {
      var matches, toArray;
      matches = Rails.matches;

      toArray = function toArray(e) {
        return Array.prototype.slice.call(e);
      };

      Rails.serializeElement = function (element, additionalParam) {
        var inputs, params;
        inputs = [element];

        if (matches(element, 'form')) {
          inputs = toArray(element.elements);
        }

        params = [];
        inputs.forEach(function (input) {
          if (!input.name || input.disabled) {
            return;
          }

          if (matches(input, 'fieldset[disabled] *')) {
            return;
          }

          if (matches(input, 'select')) {
            return toArray(input.options).forEach(function (option) {
              if (option.selected) {
                return params.push({
                  name: input.name,
                  value: option.value
                });
              }
            });
          } else if (input.checked || ['radio', 'checkbox', 'submit'].indexOf(input.type) === -1) {
            return params.push({
              name: input.name,
              value: input.value
            });
          }
        });

        if (additionalParam) {
          params.push(additionalParam);
        }

        return params.map(function (param) {
          if (param.name != null) {
            return encodeURIComponent(param.name) + "=" + encodeURIComponent(param.value);
          } else {
            return param;
          }
        }).join('&');
      };

      Rails.formElements = function (form, selector) {
        if (matches(form, 'form')) {
          return toArray(form.elements).filter(function (el) {
            return matches(el, selector);
          });
        } else {
          return toArray(form.querySelectorAll(selector));
        }
      };
    }).call(this);
    (function () {
      var allowAction, fire, stopEverything;
      fire = Rails.fire, stopEverything = Rails.stopEverything;

      Rails.handleConfirm = function (e) {
        if (!allowAction(this)) {
          return stopEverything(e);
        }
      };

      Rails.confirm = function (message, element) {
        return confirm(message);
      };

      allowAction = function allowAction(element) {
        var answer, callback, message;
        message = element.getAttribute('data-confirm');

        if (!message) {
          return true;
        }

        answer = false;

        if (fire(element, 'confirm')) {
          try {
            answer = Rails.confirm(message, element);
          } catch (error) {}

          callback = fire(element, 'confirm:complete', [answer]);
        }

        return answer && callback;
      };
    }).call(this);
    (function () {
      var disableFormElement, disableFormElements, disableLinkElement, enableFormElement, enableFormElements, enableLinkElement, formElements, getData, isXhrRedirect, matches, setData, stopEverything;
      matches = Rails.matches, getData = Rails.getData, setData = Rails.setData, stopEverything = Rails.stopEverything, formElements = Rails.formElements;

      Rails.handleDisabledElement = function (e) {
        var element;
        element = this;

        if (element.disabled) {
          return stopEverything(e);
        }
      };

      Rails.enableElement = function (e) {
        var element;

        if (e instanceof Event) {
          if (isXhrRedirect(e)) {
            return;
          }

          element = e.target;
        } else {
          element = e;
        }

        if (matches(element, Rails.linkDisableSelector)) {
          return enableLinkElement(element);
        } else if (matches(element, Rails.buttonDisableSelector) || matches(element, Rails.formEnableSelector)) {
          return enableFormElement(element);
        } else if (matches(element, Rails.formSubmitSelector)) {
          return enableFormElements(element);
        }
      };

      Rails.disableElement = function (e) {
        var element;
        element = e instanceof Event ? e.target : e;

        if (matches(element, Rails.linkDisableSelector)) {
          return disableLinkElement(element);
        } else if (matches(element, Rails.buttonDisableSelector) || matches(element, Rails.formDisableSelector)) {
          return disableFormElement(element);
        } else if (matches(element, Rails.formSubmitSelector)) {
          return disableFormElements(element);
        }
      };

      disableLinkElement = function disableLinkElement(element) {
        var replacement;

        if (getData(element, 'ujs:disabled')) {
          return;
        }

        replacement = element.getAttribute('data-disable-with');

        if (replacement != null) {
          setData(element, 'ujs:enable-with', element.innerHTML);
          element.innerHTML = replacement;
        }

        element.addEventListener('click', stopEverything);
        return setData(element, 'ujs:disabled', true);
      };

      enableLinkElement = function enableLinkElement(element) {
        var originalText;
        originalText = getData(element, 'ujs:enable-with');

        if (originalText != null) {
          element.innerHTML = originalText;
          setData(element, 'ujs:enable-with', null);
        }

        element.removeEventListener('click', stopEverything);
        return setData(element, 'ujs:disabled', null);
      };

      disableFormElements = function disableFormElements(form) {
        return formElements(form, Rails.formDisableSelector).forEach(disableFormElement);
      };

      disableFormElement = function disableFormElement(element) {
        var replacement;

        if (getData(element, 'ujs:disabled')) {
          return;
        }

        replacement = element.getAttribute('data-disable-with');

        if (replacement != null) {
          if (matches(element, 'button')) {
            setData(element, 'ujs:enable-with', element.innerHTML);
            element.innerHTML = replacement;
          } else {
            setData(element, 'ujs:enable-with', element.value);
            element.value = replacement;
          }
        }

        element.disabled = true;
        return setData(element, 'ujs:disabled', true);
      };

      enableFormElements = function enableFormElements(form) {
        return formElements(form, Rails.formEnableSelector).forEach(enableFormElement);
      };

      enableFormElement = function enableFormElement(element) {
        var originalText;
        originalText = getData(element, 'ujs:enable-with');

        if (originalText != null) {
          if (matches(element, 'button')) {
            element.innerHTML = originalText;
          } else {
            element.value = originalText;
          }

          setData(element, 'ujs:enable-with', null);
        }

        element.disabled = false;
        return setData(element, 'ujs:disabled', null);
      };

      isXhrRedirect = function isXhrRedirect(event) {
        var ref, xhr;
        xhr = (ref = event.detail) != null ? ref[0] : void 0;
        return (xhr != null ? xhr.getResponseHeader("X-Xhr-Redirect") : void 0) != null;
      };
    }).call(this);
    (function () {
      var stopEverything;
      stopEverything = Rails.stopEverything;

      Rails.handleMethod = function (e) {
        var csrfParam, csrfToken, form, formContent, href, link, method;
        link = this;
        method = link.getAttribute('data-method');

        if (!method) {
          return;
        }

        href = Rails.href(link);
        csrfToken = Rails.csrfToken();
        csrfParam = Rails.csrfParam();
        form = document.createElement('form');
        formContent = "<input name='_method' value='" + method + "' type='hidden' />";

        if (csrfParam != null && csrfToken != null && !Rails.isCrossDomain(href)) {
          formContent += "<input name='" + csrfParam + "' value='" + csrfToken + "' type='hidden' />";
        }

        formContent += '<input type="submit" />';
        form.method = 'post';
        form.action = href;
        form.target = link.target;
        form.innerHTML = formContent;
        form.style.display = 'none';
        document.body.appendChild(form);
        form.querySelector('[type="submit"]').click();
        return stopEverything(e);
      };
    }).call(this);
    (function () {
      var ajax,
          fire,
          getData,
          isCrossDomain,
          isRemote,
          matches,
          serializeElement,
          setData,
          stopEverything,
          slice = [].slice;
      matches = Rails.matches, getData = Rails.getData, setData = Rails.setData, fire = Rails.fire, stopEverything = Rails.stopEverything, ajax = Rails.ajax, isCrossDomain = Rails.isCrossDomain, serializeElement = Rails.serializeElement;

      isRemote = function isRemote(element) {
        var value;
        value = element.getAttribute('data-remote');
        return value != null && value !== 'false';
      };

      Rails.handleRemote = function (e) {
        var button, data, dataType, element, method, url, withCredentials;
        element = this;

        if (!isRemote(element)) {
          return true;
        }

        if (!fire(element, 'ajax:before')) {
          fire(element, 'ajax:stopped');
          return false;
        }

        withCredentials = element.getAttribute('data-with-credentials');
        dataType = element.getAttribute('data-type') || 'script';

        if (matches(element, Rails.formSubmitSelector)) {
          button = getData(element, 'ujs:submit-button');
          method = getData(element, 'ujs:submit-button-formmethod') || element.method;
          url = getData(element, 'ujs:submit-button-formaction') || element.getAttribute('action') || location.href;

          if (method.toUpperCase() === 'GET') {
            url = url.replace(/\?.*$/, '');
          }

          if (element.enctype === 'multipart/form-data') {
            data = new FormData(element);

            if (button != null) {
              data.append(button.name, button.value);
            }
          } else {
            data = serializeElement(element, button);
          }

          setData(element, 'ujs:submit-button', null);
          setData(element, 'ujs:submit-button-formmethod', null);
          setData(element, 'ujs:submit-button-formaction', null);
        } else if (matches(element, Rails.buttonClickSelector) || matches(element, Rails.inputChangeSelector)) {
          method = element.getAttribute('data-method');
          url = element.getAttribute('data-url');
          data = serializeElement(element, element.getAttribute('data-params'));
        } else {
          method = element.getAttribute('data-method');
          url = Rails.href(element);
          data = element.getAttribute('data-params');
        }

        ajax({
          type: method || 'GET',
          url: url,
          data: data,
          dataType: dataType,
          beforeSend: function beforeSend(xhr, options) {
            if (fire(element, 'ajax:beforeSend', [xhr, options])) {
              return fire(element, 'ajax:send', [xhr]);
            } else {
              fire(element, 'ajax:stopped');
              return false;
            }
          },
          success: function success() {
            var args;
            args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
            return fire(element, 'ajax:success', args);
          },
          error: function error() {
            var args;
            args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
            return fire(element, 'ajax:error', args);
          },
          complete: function complete() {
            var args;
            args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
            return fire(element, 'ajax:complete', args);
          },
          crossDomain: isCrossDomain(url),
          withCredentials: withCredentials != null && withCredentials !== 'false'
        });
        return stopEverything(e);
      };

      Rails.formSubmitButtonClick = function (e) {
        var button, form;
        button = this;
        form = button.form;

        if (!form) {
          return;
        }

        if (button.name) {
          setData(form, 'ujs:submit-button', {
            name: button.name,
            value: button.value
          });
        }

        setData(form, 'ujs:formnovalidate-button', button.formNoValidate);
        setData(form, 'ujs:submit-button-formaction', button.getAttribute('formaction'));
        return setData(form, 'ujs:submit-button-formmethod', button.getAttribute('formmethod'));
      };

      Rails.preventInsignificantClick = function (e) {
        var data, insignificantMetaClick, link, metaClick, method, nonPrimaryMouseClick;
        link = this;
        method = (link.getAttribute('data-method') || 'GET').toUpperCase();
        data = link.getAttribute('data-params');
        metaClick = e.metaKey || e.ctrlKey;
        insignificantMetaClick = metaClick && method === 'GET' && !data;
        nonPrimaryMouseClick = e.button != null && e.button !== 0;

        if (nonPrimaryMouseClick || insignificantMetaClick) {
          return e.stopImmediatePropagation();
        }
      };
    }).call(this);
    (function () {
      var $, CSRFProtection, delegate, disableElement, enableElement, fire, formSubmitButtonClick, getData, handleConfirm, handleDisabledElement, handleMethod, handleRemote, loadCSPNonce, preventInsignificantClick, refreshCSRFTokens;
      fire = Rails.fire, delegate = Rails.delegate, getData = Rails.getData, $ = Rails.$, refreshCSRFTokens = Rails.refreshCSRFTokens, CSRFProtection = Rails.CSRFProtection, loadCSPNonce = Rails.loadCSPNonce, enableElement = Rails.enableElement, disableElement = Rails.disableElement, handleDisabledElement = Rails.handleDisabledElement, handleConfirm = Rails.handleConfirm, preventInsignificantClick = Rails.preventInsignificantClick, handleRemote = Rails.handleRemote, formSubmitButtonClick = Rails.formSubmitButtonClick, handleMethod = Rails.handleMethod;

      if (typeof jQuery !== "undefined" && jQuery !== null && jQuery.ajax != null) {
        if (jQuery.rails) {
          throw new Error('If you load both jquery_ujs and rails-ujs, use rails-ujs only.');
        }

        jQuery.rails = Rails;
        jQuery.ajaxPrefilter(function (options, originalOptions, xhr) {
          if (!options.crossDomain) {
            return CSRFProtection(xhr);
          }
        });
      }

      Rails.start = function () {
        if (window._rails_loaded) {
          throw new Error('rails-ujs has already been loaded!');
        }

        window.addEventListener('pageshow', function () {
          $(Rails.formEnableSelector).forEach(function (el) {
            if (getData(el, 'ujs:disabled')) {
              return enableElement(el);
            }
          });
          return $(Rails.linkDisableSelector).forEach(function (el) {
            if (getData(el, 'ujs:disabled')) {
              return enableElement(el);
            }
          });
        });
        delegate(document, Rails.linkDisableSelector, 'ajax:complete', enableElement);
        delegate(document, Rails.linkDisableSelector, 'ajax:stopped', enableElement);
        delegate(document, Rails.buttonDisableSelector, 'ajax:complete', enableElement);
        delegate(document, Rails.buttonDisableSelector, 'ajax:stopped', enableElement);
        delegate(document, Rails.linkClickSelector, 'click', preventInsignificantClick);
        delegate(document, Rails.linkClickSelector, 'click', handleDisabledElement);
        delegate(document, Rails.linkClickSelector, 'click', handleConfirm);
        delegate(document, Rails.linkClickSelector, 'click', disableElement);
        delegate(document, Rails.linkClickSelector, 'click', handleRemote);
        delegate(document, Rails.linkClickSelector, 'click', handleMethod);
        delegate(document, Rails.buttonClickSelector, 'click', preventInsignificantClick);
        delegate(document, Rails.buttonClickSelector, 'click', handleDisabledElement);
        delegate(document, Rails.buttonClickSelector, 'click', handleConfirm);
        delegate(document, Rails.buttonClickSelector, 'click', disableElement);
        delegate(document, Rails.buttonClickSelector, 'click', handleRemote);
        delegate(document, Rails.inputChangeSelector, 'change', handleDisabledElement);
        delegate(document, Rails.inputChangeSelector, 'change', handleConfirm);
        delegate(document, Rails.inputChangeSelector, 'change', handleRemote);
        delegate(document, Rails.formSubmitSelector, 'submit', handleDisabledElement);
        delegate(document, Rails.formSubmitSelector, 'submit', handleConfirm);
        delegate(document, Rails.formSubmitSelector, 'submit', handleRemote);
        delegate(document, Rails.formSubmitSelector, 'submit', function (e) {
          return setTimeout(function () {
            return disableElement(e);
          }, 13);
        });
        delegate(document, Rails.formSubmitSelector, 'ajax:send', disableElement);
        delegate(document, Rails.formSubmitSelector, 'ajax:complete', enableElement);
        delegate(document, Rails.formInputClickSelector, 'click', preventInsignificantClick);
        delegate(document, Rails.formInputClickSelector, 'click', handleDisabledElement);
        delegate(document, Rails.formInputClickSelector, 'click', handleConfirm);
        delegate(document, Rails.formInputClickSelector, 'click', formSubmitButtonClick);
        document.addEventListener('DOMContentLoaded', refreshCSRFTokens);
        document.addEventListener('DOMContentLoaded', loadCSPNonce);
        return window._rails_loaded = true;
      };

      if (window.Rails === Rails && fire(document, 'rails:attachBindings')) {
        Rails.start();
      }
    }).call(this);
  }).call(this);

  if (( false ? undefined : _typeof(module)) === "object" && module.exports) {
    module.exports = Rails;
  } else if (true) {
    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (Rails),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  }
}).call(this);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"), __webpack_require__(/*! ./../../../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/highcharts/highcharts.js":
/*!***********************************************!*\
  !*** ./node_modules/highcharts/highcharts.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*
 Highcharts JS v9.0.1 (2021-02-15)

 (c) 2009-2021 Torstein Honsi

 License: www.highcharts.com/license
*/
(function (W, P) {
  "object" === ( false ? undefined : _typeof(module)) && module.exports ? (P["default"] = P, module.exports = W.document ? P(W) : P) :  true ? !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
    return P(W);
  }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : (undefined);
})("undefined" !== typeof window ? window : this, function (W) {
  function P(f, d, k, x) {
    f.hasOwnProperty(d) || (f[d] = x.apply(null, k));
  }

  var k = {};
  P(k, "Core/Globals.js", [], function () {
    var f = "undefined" !== typeof W ? W : "undefined" !== typeof window ? window : {},
        d = f.document,
        k = f.navigator && f.navigator.userAgent || "",
        x = d && d.createElementNS && !!d.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect,
        B = /(edge|msie|trident)/i.test(k) && !f.opera,
        G = -1 !== k.indexOf("Firefox"),
        D = -1 !== k.indexOf("Chrome"),
        H = G && 4 > parseInt(k.split("Firefox/")[1], 10),
        t = function t() {};

    return {
      product: "Highcharts",
      version: "9.0.1",
      deg2rad: 2 * Math.PI / 360,
      doc: d,
      hasBidiBug: H,
      hasTouch: !!f.TouchEvent,
      isMS: B,
      isWebKit: -1 !== k.indexOf("AppleWebKit"),
      isFirefox: G,
      isChrome: D,
      isSafari: !D && -1 !== k.indexOf("Safari"),
      isTouchDevice: /(Mobile|Android|Windows Phone)/.test(k),
      SVG_NS: "http://www.w3.org/2000/svg",
      chartCount: 0,
      seriesTypes: {},
      supportsPassiveEvents: function () {
        var C = !1;

        if (!B) {
          var l = Object.defineProperty({}, "passive", {
            get: function get() {
              C = !0;
            }
          });
          f.addEventListener && f.removeEventListener && (f.addEventListener("testPassive", t, l), f.removeEventListener("testPassive", t, l));
        }

        return C;
      }(),
      symbolSizes: {},
      svg: x,
      win: f,
      marginNames: ["plotTop", "marginRight", "marginBottom", "plotLeft"],
      noop: t,
      charts: [],
      dateFormats: {}
    };
  });
  P(k, "Core/Utilities.js", [k["Core/Globals.js"]], function (f) {
    function d(a, c, v, L) {
      var p = c ? "Highcharts error" : "Highcharts warning";
      32 === a && (a = p + ": Deprecated member");
      var K = l(a),
          h = K ? p + " #" + a + ": www.highcharts.com/errors/" + a + "/" : a.toString();

      p = function p() {
        if (c) throw Error(h);
        b.console && -1 === d.messages.indexOf(h) && console.warn(h);
      };

      if ("undefined" !== typeof L) {
        var g = "";
        K && (h += "?");
        m(L, function (p, a) {
          g += "\n - " + a + ": " + p;
          K && (h += encodeURI(a) + "=" + encodeURI(p));
        });
        h += g;
      }

      v ? e(v, "displayError", {
        code: a,
        message: h,
        params: L
      }, p) : p();
      d.messages.push(h);
    }

    function k() {
      var a,
          b = arguments,
          v = {},
          L = function L(p, a) {
        "object" !== _typeof(p) && (p = {});
        m(a, function (b, u) {
          "__proto__" !== u && "constructor" !== u && (!H(b, !0) || C(b) || t(b) ? p[u] = a[u] : p[u] = L(p[u] || {}, b));
        });
        return p;
      };

      !0 === b[0] && (v = b[1], b = Array.prototype.slice.call(b, 2));
      var p = b.length;

      for (a = 0; a < p; a++) {
        v = L(v, b[a]);
      }

      return v;
    }

    function x(a, b) {
      var v = {};
      m(a, function (L, p) {
        if (H(a[p], !0) && !a.nodeType && b[p]) L = x(a[p], b[p]), Object.keys(L).length && (v[p] = L);else if (H(a[p]) || a[p] !== b[p]) v[p] = a[p];
      });
      return v;
    }

    function B(a, b) {
      return parseInt(a, b || 10);
    }

    function G(a) {
      return "string" === typeof a;
    }

    function D(a) {
      a = Object.prototype.toString.call(a);
      return "[object Array]" === a || "[object Array Iterator]" === a;
    }

    function H(a, b) {
      return !!a && "object" === _typeof(a) && (!b || !D(a));
    }

    function t(a) {
      return H(a) && "number" === typeof a.nodeType;
    }

    function C(a) {
      var b = a && a.constructor;
      return !(!H(a, !0) || t(a) || !b || !b.name || "Object" === b.name);
    }

    function l(a) {
      return "number" === typeof a && !isNaN(a) && Infinity > a && -Infinity < a;
    }

    function E(a) {
      return "undefined" !== typeof a && null !== a;
    }

    function g(a, b, v) {
      var L;
      G(b) ? E(v) ? a.setAttribute(b, v) : a && a.getAttribute && ((L = a.getAttribute(b)) || "class" !== b || (L = a.getAttribute(b + "Name"))) : m(b, function (p, b) {
        a.setAttribute(b, p);
      });
      return L;
    }

    function y(a, b) {
      var v;
      a || (a = {});

      for (v in b) {
        a[v] = b[v];
      }

      return a;
    }

    function c() {
      for (var a = arguments, b = a.length, v = 0; v < b; v++) {
        var L = a[v];
        if ("undefined" !== typeof L && null !== L) return L;
      }
    }

    function q(a, b) {
      f.isMS && !f.svg && b && "undefined" !== typeof b.opacity && (b.filter = "alpha(opacity=" + 100 * b.opacity + ")");
      y(a.style, b);
    }

    function n(b, e, v, L, p) {
      b = a.createElement(b);
      e && y(b, e);
      p && q(b, {
        padding: "0",
        border: "none",
        margin: "0"
      });
      v && q(b, v);
      L && L.appendChild(b);
      return b;
    }

    function A(a, b) {
      return parseFloat(a.toPrecision(b || 14));
    }

    function M(a, b, v, L) {
      a = +a || 0;
      b = +b;
      var p = f.defaultOptions.lang,
          K = (a.toString().split(".")[1] || "").split("e")[0].length,
          e = a.toString().split("e"),
          h = b;
      if (-1 === b) b = Math.min(K, 20);else if (!l(b)) b = 2;else if (b && e[1] && 0 > e[1]) {
        var u = b + +e[1];
        0 <= u ? (e[0] = (+e[0]).toExponential(u).split("e")[0], b = u) : (e[0] = e[0].split(".")[0] || 0, a = 20 > b ? (e[0] * Math.pow(10, e[1])).toFixed(b) : 0, e[1] = 0);
      }
      var m = (Math.abs(e[1] ? e[0] : a) + Math.pow(10, -Math.max(b, K) - 1)).toFixed(b);
      K = String(B(m));
      u = 3 < K.length ? K.length % 3 : 0;
      v = c(v, p.decimalPoint);
      L = c(L, p.thousandsSep);
      a = (0 > a ? "-" : "") + (u ? K.substr(0, u) + L : "");
      a = 0 > +e[1] && !h ? "0" : a + K.substr(u).replace(/(\d{3})(?=\d)/g, "$1" + L);
      b && (a += v + m.slice(-b));
      e[1] && 0 !== +a && (a += "e" + e[1]);
      return a;
    }

    function z(a, b) {
      if (!a) return b;
      var v = a.split(".").reverse();
      if (1 === v.length) return b[a];

      for (a = v.pop(); "undefined" !== typeof a && "undefined" !== typeof b && null !== b;) {
        b = b[a], a = v.pop();
      }

      return b;
    }

    function m(a, b, v) {
      for (var e in a) {
        Object.hasOwnProperty.call(a, e) && b.call(v || a[e], a[e], e, a);
      }
    }

    function r(a, b, v) {
      function e(p, b) {
        var u = a.removeEventListener || f.removeEventListenerPolyfill;
        u && u.call(a, p, b, !1);
      }

      function p(p) {
        var u;

        if (a.nodeName) {
          if (b) {
            var v = {};
            v[b] = !0;
          } else v = p;

          m(v, function (a, b) {
            if (p[b]) for (u = p[b].length; u--;) {
              e(b, p[b][u].fn);
            }
          });
        }
      }

      var K = "function" === typeof a && a.prototype || a;

      if (Object.hasOwnProperty.call(K, "hcEvents")) {
        var h = K.hcEvents;
        b ? (K = h[b] || [], v ? (h[b] = K.filter(function (a) {
          return v !== a.fn;
        }), e(b, v)) : (p(h), h[b] = [])) : (p(h), delete K.hcEvents);
      }
    }

    function e(b, e, v, L) {
      v = v || {};

      if (a.createEvent && (b.dispatchEvent || b.fireEvent)) {
        var p = a.createEvent("Events");
        p.initEvent(e, !0, !0);
        y(p, v);
        b.dispatchEvent ? b.dispatchEvent(p) : b.fireEvent(e, p);
      } else if (b.hcEvents) {
        v.target || y(v, {
          preventDefault: function preventDefault() {
            v.defaultPrevented = !0;
          },
          target: b,
          type: e
        });
        p = [];

        for (var K = b, h = !1; K.hcEvents;) {
          Object.hasOwnProperty.call(K, "hcEvents") && K.hcEvents[e] && (p.length && (h = !0), p.unshift.apply(p, K.hcEvents[e])), K = Object.getPrototypeOf(K);
        }

        h && p.sort(function (a, p) {
          return a.order - p.order;
        });
        p.forEach(function (a) {
          !1 === a.fn.call(b, v) && v.preventDefault();
        });
      }

      L && !v.defaultPrevented && L.call(b, v);
    }

    var h = f.charts,
        a = f.doc,
        b = f.win;
    "";
    (d || (d = {})).messages = [];
    var w;

    Math.easeInOutSine = function (a) {
      return -.5 * (Math.cos(Math.PI * a) - 1);
    };

    var J = Array.prototype.find ? function (a, b) {
      return a.find(b);
    } : function (a, b) {
      var v,
          e = a.length;

      for (v = 0; v < e; v++) {
        if (b(a[v], v)) return a[v];
      }
    };
    m({
      map: "map",
      each: "forEach",
      grep: "filter",
      reduce: "reduce",
      some: "some"
    }, function (a, b) {
      f[b] = function (v) {
        var e;
        d(32, !1, void 0, (e = {}, e["Highcharts." + b] = "use Array." + a, e));
        return Array.prototype[a].apply(v, [].slice.call(arguments, 1));
      };
    });

    var O,
        F = function () {
      var a = Math.random().toString(36).substring(2, 9) + "-",
          b = 0;
      return function () {
        return "highcharts-" + (O ? "" : a) + b++;
      };
    }(),
        N = f.getOptions = function () {
      return f.defaultOptions;
    },
        R = f.setOptions = function (a) {
      f.defaultOptions = k(!0, f.defaultOptions, a);
      (a.time || a.global) && f.time.update(k(f.defaultOptions.global, f.defaultOptions.time, a.global, a.time));
      return f.defaultOptions;
    };

    b.jQuery && (b.jQuery.fn.highcharts = function () {
      var a = [].slice.call(arguments);
      if (this[0]) return a[0] ? (new f[G(a[0]) ? a.shift() : "Chart"](this[0], a[0], a[1]), this) : h[g(this[0], "data-highcharts-chart")];
    });
    return {
      addEvent: function addEvent(a, b, v, e) {
        void 0 === e && (e = {});
        var p = "function" === typeof a && a.prototype || a;
        Object.hasOwnProperty.call(p, "hcEvents") || (p.hcEvents = {});
        p = p.hcEvents;
        f.Point && a instanceof f.Point && a.series && a.series.chart && (a.series.chart.runTrackerClick = !0);
        var K = a.addEventListener || f.addEventListenerPolyfill;
        K && K.call(a, b, v, f.supportsPassiveEvents ? {
          passive: void 0 === e.passive ? -1 !== b.indexOf("touch") : e.passive,
          capture: !1
        } : !1);
        p[b] || (p[b] = []);
        p[b].push({
          fn: v,
          order: "number" === typeof e.order ? e.order : Infinity
        });
        p[b].sort(function (a, b) {
          return a.order - b.order;
        });
        return function () {
          r(a, b, v);
        };
      },
      arrayMax: function arrayMax(a) {
        for (var b = a.length, v = a[0]; b--;) {
          a[b] > v && (v = a[b]);
        }

        return v;
      },
      arrayMin: function arrayMin(a) {
        for (var b = a.length, v = a[0]; b--;) {
          a[b] < v && (v = a[b]);
        }

        return v;
      },
      attr: g,
      clamp: function clamp(a, b, v) {
        return a > b ? a < v ? a : v : b;
      },
      cleanRecursively: x,
      clearTimeout: function (_clearTimeout) {
        function clearTimeout(_x) {
          return _clearTimeout.apply(this, arguments);
        }

        clearTimeout.toString = function () {
          return _clearTimeout.toString();
        };

        return clearTimeout;
      }(function (a) {
        E(a) && clearTimeout(a);
      }),
      correctFloat: A,
      createElement: n,
      css: q,
      defined: E,
      destroyObjectProperties: function destroyObjectProperties(a, b) {
        m(a, function (v, e) {
          v && v !== b && v.destroy && v.destroy();
          delete a[e];
        });
      },
      discardElement: function discardElement(a) {
        w || (w = n("div"));
        a && w.appendChild(a);
        w.innerHTML = "";
      },
      erase: function erase(a, b) {
        for (var v = a.length; v--;) {
          if (a[v] === b) {
            a.splice(v, 1);
            break;
          }
        }
      },
      error: d,
      extend: y,
      extendClass: function extendClass(a, b) {
        var v = function v() {};

        v.prototype = new a();
        y(v.prototype, b);
        return v;
      },
      find: J,
      fireEvent: e,
      format: function format(a, b, v) {
        var e = "{",
            p = !1,
            K = [],
            h = /f$/,
            c = /\.([0-9])/,
            u = f.defaultOptions.lang,
            m = v && v.time || f.time;

        for (v = v && v.numberFormatter || M; a;) {
          var I = a.indexOf(e);
          if (-1 === I) break;
          var g = a.slice(0, I);

          if (p) {
            g = g.split(":");
            e = z(g.shift() || "", b);
            if (g.length && "number" === typeof e) if (g = g.join(":"), h.test(g)) {
              var w = parseInt((g.match(c) || ["", "-1"])[1], 10);
              null !== e && (e = v(e, w, u.decimalPoint, -1 < g.indexOf(",") ? u.thousandsSep : ""));
            } else e = m.dateFormat(g, e);
            K.push(e);
          } else K.push(g);

          a = a.slice(I + 1);
          e = (p = !p) ? "}" : "{";
        }

        K.push(a);
        return K.join("");
      },
      getMagnitude: function getMagnitude(a) {
        return Math.pow(10, Math.floor(Math.log(a) / Math.LN10));
      },
      getNestedProperty: z,
      getOptions: N,
      getStyle: function getStyle(a, e, v) {
        if ("width" === e) return e = Math.min(a.offsetWidth, a.scrollWidth), v = a.getBoundingClientRect && a.getBoundingClientRect().width, v < e && v >= e - 1 && (e = Math.floor(v)), Math.max(0, e - f.getStyle(a, "padding-left") - f.getStyle(a, "padding-right"));
        if ("height" === e) return Math.max(0, Math.min(a.offsetHeight, a.scrollHeight) - f.getStyle(a, "padding-top") - f.getStyle(a, "padding-bottom"));
        b.getComputedStyle || d(27, !0);
        if (a = b.getComputedStyle(a, void 0)) a = a.getPropertyValue(e), c(v, "opacity" !== e) && (a = B(a));
        return a;
      },
      inArray: function inArray(a, b, v) {
        d(32, !1, void 0, {
          "Highcharts.inArray": "use Array.indexOf"
        });
        return b.indexOf(a, v);
      },
      isArray: D,
      isClass: C,
      isDOMElement: t,
      isFunction: function isFunction(a) {
        return "function" === typeof a;
      },
      isNumber: l,
      isObject: H,
      isString: G,
      keys: function keys(a) {
        d(32, !1, void 0, {
          "Highcharts.keys": "use Object.keys"
        });
        return Object.keys(a);
      },
      merge: k,
      normalizeTickInterval: function normalizeTickInterval(a, b, v, e, p) {
        var K = a;
        v = c(v, 1);
        var h = a / v;
        b || (b = p ? [1, 1.2, 1.5, 2, 2.5, 3, 4, 5, 6, 8, 10] : [1, 2, 2.5, 5, 10], !1 === e && (1 === v ? b = b.filter(function (a) {
          return 0 === a % 1;
        }) : .1 >= v && (b = [1 / v])));

        for (e = 0; e < b.length && !(K = b[e], p && K * v >= a || !p && h <= (b[e] + (b[e + 1] || b[e])) / 2); e++) {
          ;
        }

        return K = A(K * v, -Math.round(Math.log(.001) / Math.LN10));
      },
      numberFormat: M,
      objectEach: m,
      offset: function offset(e) {
        var h = a.documentElement;
        e = e.parentElement || e.parentNode ? e.getBoundingClientRect() : {
          top: 0,
          left: 0,
          width: 0,
          height: 0
        };
        return {
          top: e.top + (b.pageYOffset || h.scrollTop) - (h.clientTop || 0),
          left: e.left + (b.pageXOffset || h.scrollLeft) - (h.clientLeft || 0),
          width: e.width,
          height: e.height
        };
      },
      pad: function pad(a, b, v) {
        return Array((b || 2) + 1 - String(a).replace("-", "").length).join(v || "0") + a;
      },
      pick: c,
      pInt: B,
      relativeLength: function relativeLength(a, b, v) {
        return /%$/.test(a) ? b * parseFloat(a) / 100 + (v || 0) : parseFloat(a);
      },
      removeEvent: r,
      setOptions: R,
      splat: function splat(a) {
        return D(a) ? a : [a];
      },
      stableSort: function stableSort(a, b) {
        var v = a.length,
            e,
            p;

        for (p = 0; p < v; p++) {
          a[p].safeI = p;
        }

        a.sort(function (a, p) {
          e = b(a, p);
          return 0 === e ? a.safeI - p.safeI : e;
        });

        for (p = 0; p < v; p++) {
          delete a[p].safeI;
        }
      },
      syncTimeout: function syncTimeout(a, b, v) {
        if (0 < b) return setTimeout(a, b, v);
        a.call(0, v);
        return -1;
      },
      timeUnits: {
        millisecond: 1,
        second: 1E3,
        minute: 6E4,
        hour: 36E5,
        day: 864E5,
        week: 6048E5,
        month: 24192E5,
        year: 314496E5
      },
      uniqueKey: F,
      useSerialIds: function useSerialIds(a) {
        return O = c(a, O);
      },
      wrap: function wrap(a, b, v) {
        var e = a[b];

        a[b] = function () {
          var a = Array.prototype.slice.call(arguments),
              b = arguments,
              h = this;

          h.proceed = function () {
            e.apply(h, arguments.length ? arguments : b);
          };

          a.unshift(e);
          a = v.apply(this, a);
          h.proceed = null;
          return a;
        };
      }
    };
  });
  P(k, "Core/Renderer/HTML/AST.js", [k["Core/Globals.js"], k["Core/Utilities.js"]], function (f, d) {
    var k = f.SVG_NS,
        x = d.attr,
        B = d.createElement,
        G = d.discardElement,
        D = d.error,
        H = d.isString,
        t = d.objectEach,
        C = d.splat;
    "";
    var l = !1;

    try {
      l = !!new DOMParser().parseFromString("", "text/html");
    } catch (E) {}

    return function () {
      function E(g) {
        this.nodes = "string" === typeof g ? this.parseMarkup(g) : g;
      }

      E.filterUserAttributes = function (g) {
        t(g, function (y, c) {
          var q = !0;
          -1 === E.allowedAttributes.indexOf(c) && (q = !1);
          -1 !== ["background", "dynsrc", "href", "lowsrc", "src"].indexOf(c) && (q = H(y) && E.allowedReferences.some(function (c) {
            return 0 === y.indexOf(c);
          }));
          q || (D("Highcharts warning: Invalid attribute '" + c + "' in config"), delete g[c]);
        });
        return g;
      };

      E.setElementHTML = function (g, y) {
        g.innerHTML = "";
        y && new E(y).addToDOM(g);
      };

      E.prototype.addToDOM = function (g) {
        function y(c, g) {
          var n;
          C(c).forEach(function (c) {
            var q = c.tagName,
                A = c.textContent ? f.doc.createTextNode(c.textContent) : void 0;
            if (q) if ("#text" === q) var m = A;else if (-1 !== E.allowedTags.indexOf(q)) {
              q = f.doc.createElementNS("svg" === q ? k : g.namespaceURI || k, q);
              var r = c.attributes || {};
              t(c, function (e, h) {
                "tagName" !== h && "attributes" !== h && "children" !== h && "textContent" !== h && (r[h] = e);
              });
              x(q, E.filterUserAttributes(r));
              A && q.appendChild(A);
              y(c.children || [], q);
              m = q;
            } else D("Highcharts warning: Invalid tagName '" + q + "' in config");
            m && g.appendChild(m);
            n = m;
          });
          return n;
        }

        return y(this.nodes, g);
      };

      E.prototype.parseMarkup = function (g) {
        var y = [];
        if (l) g = new DOMParser().parseFromString(g, "text/html");else {
          var c = B("div");
          c.innerHTML = g;
          g = {
            body: c
          };
        }

        var q = function q(c, g) {
          var n = c.nodeName.toLowerCase(),
              A = {
            tagName: n
          };

          if ("#text" === n) {
            n = c.textContent || "";
            if (/^[\s]*$/.test(n)) return;
            A.textContent = n;
          }

          if (n = c.attributes) {
            var m = {};
            [].forEach.call(n, function (e) {
              m[e.name] = e.value;
            });
            A.attributes = m;
          }

          if (c.childNodes.length) {
            var r = [];
            [].forEach.call(c.childNodes, function (e) {
              q(e, r);
            });
            r.length && (A.children = r);
          }

          g.push(A);
        };

        [].forEach.call(g.body.childNodes, function (c) {
          return q(c, y);
        });
        c && G(c);
        return y;
      };

      E.allowedTags = "a b br button caption circle clipPath code dd defs div dl dt em feComponentTransfer feFuncA feFuncB feFuncG feFuncR feGaussianBlur feOffset feMerge feMergeNode filter h1 h2 h3 h4 h5 h6 hr i img li linearGradient marker ol p path pattern pre rect small span stop strong style sub sup svg table text thead tbody tspan td th tr ul #text".split(" ");
      E.allowedAttributes = "aria-controls aria-describedby aria-expanded aria-haspopup aria-hidden aria-label aria-labelledby aria-live aria-pressed aria-readonly aria-roledescription aria-selected class clip-path color colspan cx cy d dx dy disabled fill height href id in markerHeight markerWidth offset opacity orient padding paddingLeft patternUnits r refX refY role scope slope src startOffset stdDeviation stroke stroke-linecap stroke-width style result rowspan summary target tabindex text-align textAnchor textLength type valign width x x1 xy y y1 y2 zIndex".split(" ");
      E.allowedReferences = "https:// http:// mailto: / ../ ./ #".split(" ");
      return E;
    }();
  });
  P(k, "Core/Color/Color.js", [k["Core/Globals.js"], k["Core/Utilities.js"]], function (f, d) {
    var k = d.isNumber,
        x = d.merge,
        B = d.pInt;
    "";

    d = function () {
      function d(D) {
        this.parsers = [{
          regex: /rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]?(?:\.[0-9]+)?)\s*\)/,
          parse: function parse(d) {
            return [B(d[1]), B(d[2]), B(d[3]), parseFloat(d[4], 10)];
          }
        }, {
          regex: /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/,
          parse: function parse(d) {
            return [B(d[1]), B(d[2]), B(d[3]), 1];
          }
        }];
        this.rgba = [];
        if (f.Color !== d) return new f.Color(D);
        if (!(this instanceof d)) return new d(D);
        this.init(D);
      }

      d.parse = function (f) {
        return new d(f);
      };

      d.prototype.init = function (f) {
        var k, t;
        if ((this.input = f = d.names[f && f.toLowerCase ? f.toLowerCase() : ""] || f) && f.stops) this.stops = f.stops.map(function (l) {
          return new d(l[1]);
        });else {
          if (f && f.charAt && "#" === f.charAt()) {
            var C = f.length;
            f = parseInt(f.substr(1), 16);
            7 === C ? k = [(f & 16711680) >> 16, (f & 65280) >> 8, f & 255, 1] : 4 === C && (k = [(f & 3840) >> 4 | (f & 3840) >> 8, (f & 240) >> 4 | f & 240, (f & 15) << 4 | f & 15, 1]);
          }

          if (!k) for (t = this.parsers.length; t-- && !k;) {
            var l = this.parsers[t];
            (C = l.regex.exec(f)) && (k = l.parse(C));
          }
        }
        this.rgba = k || [];
      };

      d.prototype.get = function (d) {
        var f = this.input,
            t = this.rgba;

        if ("undefined" !== typeof this.stops) {
          var C = x(f);
          C.stops = [].concat(C.stops);
          this.stops.forEach(function (l, E) {
            C.stops[E] = [C.stops[E][0], l.get(d)];
          });
        } else C = t && k(t[0]) ? "rgb" === d || !d && 1 === t[3] ? "rgb(" + t[0] + "," + t[1] + "," + t[2] + ")" : "a" === d ? t[3] : "rgba(" + t.join(",") + ")" : f;

        return C;
      };

      d.prototype.brighten = function (d) {
        var f,
            t = this.rgba;
        if (this.stops) this.stops.forEach(function (C) {
          C.brighten(d);
        });else if (k(d) && 0 !== d) for (f = 0; 3 > f; f++) {
          t[f] += B(255 * d), 0 > t[f] && (t[f] = 0), 255 < t[f] && (t[f] = 255);
        }
        return this;
      };

      d.prototype.setOpacity = function (d) {
        this.rgba[3] = d;
        return this;
      };

      d.prototype.tweenTo = function (d, f) {
        var t = this.rgba,
            C = d.rgba;
        C.length && t && t.length ? (d = 1 !== C[3] || 1 !== t[3], f = (d ? "rgba(" : "rgb(") + Math.round(C[0] + (t[0] - C[0]) * (1 - f)) + "," + Math.round(C[1] + (t[1] - C[1]) * (1 - f)) + "," + Math.round(C[2] + (t[2] - C[2]) * (1 - f)) + (d ? "," + (C[3] + (t[3] - C[3]) * (1 - f)) : "") + ")") : f = d.input || "none";
        return f;
      };

      d.names = {
        white: "#ffffff",
        black: "#000000"
      };
      return d;
    }();

    f.Color = d;
    f.color = d.parse;
    return d;
  });
  P(k, "Core/Color/Palette.js", [], function () {
    return {
      colors: "#7cb5ec #434348 #90ed7d #f7a35c #8085e9 #f15c80 #e4d354 #2b908f #f45b5b #91e8e1".split(" "),
      backgroundColor: "#ffffff",
      neutralColor100: "#000000",
      neutralColor80: "#333333",
      neutralColor60: "#666666",
      neutralColor40: "#999999",
      neutralColor20: "#cccccc",
      neutralColor10: "#e6e6e6",
      neutralColor5: "#f2f2f2",
      neutralColor3: "#f7f7f7",
      highlightColor100: "#003399",
      highlightColor80: "#335cad",
      highlightColor60: "#6685c2",
      highlightColor20: "#ccd6eb",
      highlightColor10: "#e6ebf5",
      indicatorPositiveLine: "#06b535",
      indicatorNegativeLine: "#f21313"
    };
  });
  P(k, "Core/Animation/Fx.js", [k["Core/Globals.js"], k["Core/Utilities.js"]], function (f, d) {
    var k = f.win,
        x = d.isNumber,
        B = d.objectEach;

    d = function () {
      function d(d, f, t) {
        this.pos = NaN;
        this.options = f;
        this.elem = d;
        this.prop = t;
      }

      d.prototype.dSetter = function () {
        var d = this.paths,
            f = d && d[0];
        d = d && d[1];
        var t = [],
            C = this.now || 0;
        if (1 !== C && f && d) {
          if (f.length === d.length && 1 > C) for (var l = 0; l < d.length; l++) {
            for (var E = f[l], g = d[l], y = [], c = 0; c < g.length; c++) {
              var q = E[c],
                  n = g[c];
              x(q) && x(n) && ("A" !== g[0] || 4 !== c && 5 !== c) ? y[c] = q + C * (n - q) : y[c] = n;
            }

            t.push(y);
          } else t = d;
        } else t = this.toD || [];
        this.elem.attr("d", t, void 0, !0);
      };

      d.prototype.update = function () {
        var d = this.elem,
            f = this.prop,
            t = this.now,
            C = this.options.step;
        if (this[f + "Setter"]) this[f + "Setter"]();else d.attr ? d.element && d.attr(f, t, null, !0) : d.style[f] = t + this.unit;
        C && C.call(d, t, this);
      };

      d.prototype.run = function (f, H, t) {
        var C = this,
            l = C.options,
            E = function E(c) {
          return E.stopped ? !1 : C.step(c);
        },
            g = k.requestAnimationFrame || function (c) {
          setTimeout(c, 13);
        },
            y = function y() {
          for (var c = 0; c < d.timers.length; c++) {
            d.timers[c]() || d.timers.splice(c--, 1);
          }

          d.timers.length && g(y);
        };

        f !== H || this.elem["forceAnimate:" + this.prop] ? (this.startTime = +new Date(), this.start = f, this.end = H, this.unit = t, this.now = this.start, this.pos = 0, E.elem = this.elem, E.prop = this.prop, E() && 1 === d.timers.push(E) && g(y)) : (delete l.curAnim[this.prop], l.complete && 0 === Object.keys(l.curAnim).length && l.complete.call(this.elem));
      };

      d.prototype.step = function (d) {
        var f = +new Date(),
            t = this.options,
            C = this.elem,
            l = t.complete,
            E = t.duration,
            g = t.curAnim;
        if (C.attr && !C.element) d = !1;else if (d || f >= E + this.startTime) {
          this.now = this.end;
          this.pos = 1;
          this.update();
          var y = g[this.prop] = !0;
          B(g, function (c) {
            !0 !== c && (y = !1);
          });
          y && l && l.call(C);
          d = !1;
        } else this.pos = t.easing((f - this.startTime) / E), this.now = this.start + (this.end - this.start) * this.pos, this.update(), d = !0;
        return d;
      };

      d.prototype.initPath = function (d, f, t) {
        function C(c, g) {
          for (; c.length < A;) {
            var m = c[0],
                n = g[A - c.length];
            n && "M" === m[0] && (c[0] = "C" === n[0] ? ["C", m[1], m[2], m[1], m[2], m[1], m[2]] : ["L", m[1], m[2]]);
            c.unshift(m);
            y && c.push(c[c.length - 1]);
          }
        }

        function l(g, n) {
          for (; g.length < A;) {
            if (n = g[g.length / c - 1].slice(), "C" === n[0] && (n[1] = n[5], n[2] = n[6]), y) {
              var m = g[g.length / c].slice();
              g.splice(g.length / 2, 0, n, m);
            } else g.push(n);
          }
        }

        var E = d.startX,
            g = d.endX;
        f = f && f.slice();
        t = t.slice();
        var y = d.isArea,
            c = y ? 2 : 1;
        if (!f) return [t, t];

        if (E && g) {
          for (d = 0; d < E.length; d++) {
            if (E[d] === g[0]) {
              var q = d;
              break;
            } else if (E[0] === g[g.length - E.length + d]) {
              q = d;
              var n = !0;
              break;
            } else if (E[E.length - 1] === g[g.length - E.length + d]) {
              q = E.length - d;
              break;
            }
          }

          "undefined" === typeof q && (f = []);
        }

        if (f.length && x(q)) {
          var A = t.length + q * c;
          n ? (C(f, t), l(t, f)) : (C(t, f), l(f, t));
        }

        return [f, t];
      };

      d.prototype.fillSetter = function () {
        d.prototype.strokeSetter.apply(this, arguments);
      };

      d.prototype.strokeSetter = function () {
        this.elem.attr(this.prop, f.color(this.start).tweenTo(f.color(this.end), this.pos), null, !0);
      };

      d.timers = [];
      return d;
    }();

    f.Fx = d;
    f.timers = d.timers;
    return d;
  });
  P(k, "Core/Animation/AnimationUtilities.js", [k["Core/Animation/Fx.js"], k["Core/Globals.js"], k["Core/Utilities.js"]], function (f, d, k) {
    var x = k.defined,
        B = k.getStyle,
        S = k.isArray,
        D = k.isNumber,
        H = k.isObject,
        t = k.merge,
        C = k.objectEach,
        l = k.pick;

    k = d.setAnimation = function (c, g) {
      g.renderer.globalAnimation = l(c, g.options.chart.animation, !0);
    };

    var E = d.animObject = function (c) {
      return H(c) ? t({
        duration: 500,
        defer: 0
      }, c) : {
        duration: c ? 500 : 0,
        defer: 0
      };
    },
        g = d.getDeferredAnimation = function (c, g, n) {
      var q = E(g),
          y = 0,
          l = 0;
      (n ? [n] : c.series).forEach(function (c) {
        c = E(c.options.animation);
        y = g && x(g.defer) ? q.defer : Math.max(y, c.duration + c.defer);
        l = Math.min(q.duration, c.duration);
      });
      c.renderer.forExport && (y = 0);
      return {
        defer: Math.max(0, y - l),
        duration: Math.min(y, l)
      };
    },
        y = d.stop = function (c, g) {
      for (var n = f.timers.length; n--;) {
        f.timers[n].elem !== c || g && g !== f.timers[n].prop || (f.timers[n].stopped = !0);
      }
    };

    return {
      animate: function animate(c, g, n) {
        var q,
            l = "",
            d,
            m;

        if (!H(n)) {
          var r = arguments;
          n = {
            duration: r[2],
            easing: r[3],
            complete: r[4]
          };
        }

        D(n.duration) || (n.duration = 400);
        n.easing = "function" === typeof n.easing ? n.easing : Math[n.easing] || Math.easeInOutSine;
        n.curAnim = t(g);
        C(g, function (e, h) {
          y(c, h);
          m = new f(c, n, h);
          d = null;
          "d" === h && S(g.d) ? (m.paths = m.initPath(c, c.pathArray, g.d), m.toD = g.d, q = 0, d = 1) : c.attr ? q = c.attr(h) : (q = parseFloat(B(c, h)) || 0, "opacity" !== h && (l = "px"));
          d || (d = e);
          d && d.match && d.match("px") && (d = d.replace(/px/g, ""));
          m.run(q, d, l);
        });
      },
      animObject: E,
      getDeferredAnimation: g,
      setAnimation: k,
      stop: y
    };
  });
  P(k, "Core/Renderer/SVG/SVGElement.js", [k["Core/Animation/AnimationUtilities.js"], k["Core/Renderer/HTML/AST.js"], k["Core/Color/Color.js"], k["Core/Globals.js"], k["Core/Color/Palette.js"], k["Core/Utilities.js"]], function (f, d, k, x, B, G) {
    var D = f.animate,
        H = f.animObject,
        t = f.stop,
        C = x.deg2rad,
        l = x.doc,
        E = x.hasTouch,
        g = x.noop,
        y = x.svg,
        c = x.SVG_NS,
        q = x.win,
        n = G.attr,
        A = G.createElement,
        M = G.css,
        z = G.defined,
        m = G.erase,
        r = G.extend,
        e = G.fireEvent,
        h = G.isArray,
        a = G.isFunction,
        b = G.isNumber,
        w = G.isString,
        J = G.merge,
        O = G.objectEach,
        F = G.pick,
        N = G.pInt,
        R = G.syncTimeout,
        Q = G.uniqueKey;
    "";

    f = function () {
      function f() {
        this.height = this.element = void 0;
        this.opacity = 1;
        this.renderer = void 0;
        this.SVG_NS = c;
        this.symbolCustomAttribs = "x y width height r start end innerR anchorX anchorY rounded".split(" ");
        this.width = void 0;
      }

      f.prototype._defaultGetter = function (a) {
        a = F(this[a + "Value"], this[a], this.element ? this.element.getAttribute(a) : null, 0);
        /^[\-0-9\.]+$/.test(a) && (a = parseFloat(a));
        return a;
      };

      f.prototype._defaultSetter = function (a, b, p) {
        p.setAttribute(b, a);
      };

      f.prototype.add = function (a) {
        var b = this.renderer,
            p = this.element;
        a && (this.parentGroup = a);
        this.parentInverted = a && a.inverted;
        "undefined" !== typeof this.textStr && "text" === this.element.nodeName && b.buildText(this);
        this.added = !0;
        if (!a || a.handleZ || this.zIndex) var e = this.zIndexSetter();
        e || (a ? a.element : b.box).appendChild(p);
        if (this.onAdd) this.onAdd();
        return this;
      };

      f.prototype.addClass = function (a, b) {
        var p = b ? "" : this.attr("class") || "";
        a = (a || "").split(/ /g).reduce(function (a, b) {
          -1 === p.indexOf(b) && a.push(b);
          return a;
        }, p ? [p] : []).join(" ");
        a !== p && this.attr("class", a);
        return this;
      };

      f.prototype.afterSetters = function () {
        this.doTransform && (this.updateTransform(), this.doTransform = !1);
      };

      f.prototype.align = function (a, b, p) {
        var e,
            v = {};
        var c = this.renderer;
        var u = c.alignedObjects;
        var h, I;

        if (a) {
          if (this.alignOptions = a, this.alignByTranslate = b, !p || w(p)) this.alignTo = e = p || "renderer", m(u, this), u.push(this), p = void 0;
        } else a = this.alignOptions, b = this.alignByTranslate, e = this.alignTo;

        p = F(p, c[e], c);
        e = a.align;
        c = a.verticalAlign;
        u = (p.x || 0) + (a.x || 0);
        var g = (p.y || 0) + (a.y || 0);
        "right" === e ? h = 1 : "center" === e && (h = 2);
        h && (u += (p.width - (a.width || 0)) / h);
        v[b ? "translateX" : "x"] = Math.round(u);
        "bottom" === c ? I = 1 : "middle" === c && (I = 2);
        I && (g += (p.height - (a.height || 0)) / I);
        v[b ? "translateY" : "y"] = Math.round(g);
        this[this.placed ? "animate" : "attr"](v);
        this.placed = !0;
        this.alignAttr = v;
        return this;
      };

      f.prototype.alignSetter = function (a) {
        var b = {
          left: "start",
          center: "middle",
          right: "end"
        };
        b[a] && (this.alignValue = a, this.element.setAttribute("text-anchor", b[a]));
      };

      f.prototype.animate = function (a, b, p) {
        var e = this,
            v = H(F(b, this.renderer.globalAnimation, !0));
        b = v.defer;
        F(l.hidden, l.msHidden, l.webkitHidden, !1) && (v.duration = 0);
        0 !== v.duration ? (p && (v.complete = p), R(function () {
          e.element && D(e, a, v);
        }, b)) : (this.attr(a, void 0, p), O(a, function (a, b) {
          v.step && v.step.call(this, a, {
            prop: b,
            pos: 1,
            elem: this
          });
        }, this));
        return this;
      };

      f.prototype.applyTextOutline = function (a) {
        var b = this.element;
        -1 !== a.indexOf("contrast") && (a = a.replace(/contrast/g, this.renderer.getContrast(b.style.fill)));
        var p = a.split(" ");
        a = p[p.length - 1];

        if ((p = p[0]) && "none" !== p && x.svg) {
          this.fakeTS = !0;
          this.ySetter = this.xSetter;
          p = p.replace(/(^[\d\.]+)(.*?)$/g, function (a, b, p) {
            return 2 * Number(b) + p;
          });
          this.removeTextOutline();
          var e = l.createElementNS(c, "tspan");
          n(e, {
            "class": "highcharts-text-outline",
            fill: a,
            stroke: a,
            "stroke-width": p,
            "stroke-linejoin": "round"
          });
          [].forEach.call(b.childNodes, function (a) {
            var b = a.cloneNode(!0);
            b.removeAttribute && ["fill", "stroke", "stroke-width", "stroke"].forEach(function (a) {
              return b.removeAttribute(a);
            });
            e.appendChild(b);
          });
          a = l.createElementNS(c, "tspan");
          a.textContent = "\u200B";
          n(a, {
            x: b.getAttribute("x"),
            y: b.getAttribute("y")
          });
          e.appendChild(a);
          b.insertBefore(e, b.firstChild);
        }
      };

      f.prototype.attr = function (a, b, p, e) {
        var K = this.element,
            v,
            u = this,
            c,
            h,
            g = this.symbolCustomAttribs;

        if ("string" === typeof a && "undefined" !== typeof b) {
          var L = a;
          a = {};
          a[L] = b;
        }

        "string" === typeof a ? u = (this[a + "Getter"] || this._defaultGetter).call(this, a, K) : (O(a, function (b, p) {
          c = !1;
          e || t(this, p);
          this.symbolName && -1 !== g.indexOf(p) && (v || (this.symbolAttr(a), v = !0), c = !0);
          !this.rotation || "x" !== p && "y" !== p || (this.doTransform = !0);
          c || (h = this[p + "Setter"] || this._defaultSetter, h.call(this, b, p, K), !this.styledMode && this.shadows && /^(width|height|visibility|x|y|d|transform|cx|cy|r)$/.test(p) && this.updateShadows(p, b, h));
        }, this), this.afterSetters());
        p && p.call(this);
        return u;
      };

      f.prototype.clip = function (a) {
        return this.attr("clip-path", a ? "url(" + this.renderer.url + "#" + a.id + ")" : "none");
      };

      f.prototype.crisp = function (a, b) {
        b = b || a.strokeWidth || 0;
        var p = Math.round(b) % 2 / 2;
        a.x = Math.floor(a.x || this.x || 0) + p;
        a.y = Math.floor(a.y || this.y || 0) + p;
        a.width = Math.floor((a.width || this.width || 0) - 2 * p);
        a.height = Math.floor((a.height || this.height || 0) - 2 * p);
        z(a.strokeWidth) && (a.strokeWidth = b);
        return a;
      };

      f.prototype.complexColor = function (a, b, p) {
        var K = this.renderer,
            v,
            c,
            u,
            g,
            I,
            m,
            L,
            w,
            n,
            r,
            q = [],
            F;
        e(this.renderer, "complexColor", {
          args: arguments
        }, function () {
          a.radialGradient ? c = "radialGradient" : a.linearGradient && (c = "linearGradient");

          if (c) {
            u = a[c];
            I = K.gradients;
            m = a.stops;
            n = p.radialReference;
            h(u) && (a[c] = u = {
              x1: u[0],
              y1: u[1],
              x2: u[2],
              y2: u[3],
              gradientUnits: "userSpaceOnUse"
            });
            "radialGradient" === c && n && !z(u.gradientUnits) && (g = u, u = J(u, K.getRadialAttr(n, g), {
              gradientUnits: "userSpaceOnUse"
            }));
            O(u, function (a, b) {
              "id" !== b && q.push(b, a);
            });
            O(m, function (a) {
              q.push(a);
            });
            q = q.join(",");
            if (I[q]) r = I[q].attr("id");else {
              u.id = r = Q();
              var e = I[q] = K.createElement(c).attr(u).add(K.defs);
              e.radAttr = g;
              e.stops = [];
              m.forEach(function (a) {
                0 === a[1].indexOf("rgba") ? (v = k.parse(a[1]), L = v.get("rgb"), w = v.get("a")) : (L = a[1], w = 1);
                a = K.createElement("stop").attr({
                  offset: a[0],
                  "stop-color": L,
                  "stop-opacity": w
                }).add(e);
                e.stops.push(a);
              });
            }
            F = "url(" + K.url + "#" + r + ")";
            p.setAttribute(b, F);
            p.gradient = q;

            a.toString = function () {
              return F;
            };
          }
        });
      };

      f.prototype.css = function (a) {
        var b = this.styles,
            p = {},
            e = this.element,
            c = "",
            v = !b,
            u = ["textOutline", "textOverflow", "width"];
        a && a.color && (a.fill = a.color);
        b && O(a, function (a, u) {
          b && b[u] !== a && (p[u] = a, v = !0);
        });

        if (v) {
          b && (a = r(b, p));
          if (a) if (null === a.width || "auto" === a.width) delete this.textWidth;else if ("text" === e.nodeName.toLowerCase() && a.width) var h = this.textWidth = N(a.width);
          this.styles = a;
          h && !y && this.renderer.forExport && delete a.width;

          if (e.namespaceURI === this.SVG_NS) {
            var g = function g(a, b) {
              return "-" + b.toLowerCase();
            };

            O(a, function (a, b) {
              -1 === u.indexOf(b) && (c += b.replace(/([A-Z])/g, g) + ":" + a + ";");
            });
            c && n(e, "style", c);
          } else M(e, a);

          this.added && ("text" === this.element.nodeName && this.renderer.buildText(this), a && a.textOutline && this.applyTextOutline(a.textOutline));
        }

        return this;
      };

      f.prototype.dashstyleSetter = function (a) {
        var b = this["stroke-width"];
        "inherit" === b && (b = 1);

        if (a = a && a.toLowerCase()) {
          var p = a.replace("shortdashdotdot", "3,1,1,1,1,1,").replace("shortdashdot", "3,1,1,1").replace("shortdot", "1,1,").replace("shortdash", "3,1,").replace("longdash", "8,3,").replace(/dot/g, "1,3,").replace("dash", "4,3,").replace(/,$/, "").split(",");

          for (a = p.length; a--;) {
            p[a] = "" + N(p[a]) * F(b, NaN);
          }

          a = p.join(",").replace(/NaN/g, "none");
          this.element.setAttribute("stroke-dasharray", a);
        }
      };

      f.prototype.destroy = function () {
        var a = this,
            b = a.element || {},
            p = a.renderer,
            e = p.isSVG && "SPAN" === b.nodeName && a.parentGroup || void 0,
            c = b.ownerSVGElement;
        b.onclick = b.onmouseout = b.onmouseover = b.onmousemove = b.point = null;
        t(a);

        if (a.clipPath && c) {
          var h = a.clipPath;
          [].forEach.call(c.querySelectorAll("[clip-path],[CLIP-PATH]"), function (a) {
            -1 < a.getAttribute("clip-path").indexOf(h.element.id) && a.removeAttribute("clip-path");
          });
          a.clipPath = h.destroy();
        }

        if (a.stops) {
          for (c = 0; c < a.stops.length; c++) {
            a.stops[c].destroy();
          }

          a.stops.length = 0;
          a.stops = void 0;
        }

        a.safeRemoveChild(b);

        for (p.styledMode || a.destroyShadows(); e && e.div && 0 === e.div.childNodes.length;) {
          b = e.parentGroup, a.safeRemoveChild(e.div), delete e.div, e = b;
        }

        a.alignTo && m(p.alignedObjects, a);
        O(a, function (b, p) {
          a[p] && a[p].parentGroup === a && a[p].destroy && a[p].destroy();
          delete a[p];
        });
      };

      f.prototype.destroyShadows = function () {
        (this.shadows || []).forEach(function (a) {
          this.safeRemoveChild(a);
        }, this);
        this.shadows = void 0;
      };

      f.prototype.destroyTextPath = function (a, b) {
        var p = a.getElementsByTagName("text")[0];

        if (p) {
          if (p.removeAttribute("dx"), p.removeAttribute("dy"), b.element.setAttribute("id", ""), this.textPathWrapper && p.getElementsByTagName("textPath").length) {
            for (a = this.textPathWrapper.element.childNodes; a.length;) {
              p.appendChild(a[0]);
            }

            p.removeChild(this.textPathWrapper.element);
          }
        } else if (a.getAttribute("dx") || a.getAttribute("dy")) a.removeAttribute("dx"), a.removeAttribute("dy");

        this.textPathWrapper && (this.textPathWrapper = this.textPathWrapper.destroy());
      };

      f.prototype.dSetter = function (a, b, p) {
        h(a) && ("string" === typeof a[0] && (a = this.renderer.pathToSegments(a)), this.pathArray = a, a = a.reduce(function (a, b, p) {
          return b && b.join ? (p ? a + " " : "") + b.join(" ") : (b || "").toString();
        }, ""));
        /(NaN| {2}|^$)/.test(a) && (a = "M 0 0");
        this[b] !== a && (p.setAttribute(b, a), this[b] = a);
      };

      f.prototype.fadeOut = function (a) {
        var b = this;
        b.animate({
          opacity: 0
        }, {
          duration: F(a, 150),
          complete: function complete() {
            b.attr({
              y: -9999
            }).hide();
          }
        });
      };

      f.prototype.fillSetter = function (a, b, p) {
        "string" === typeof a ? p.setAttribute(b, a) : a && this.complexColor(a, b, p);
      };

      f.prototype.getBBox = function (b, e) {
        var p,
            c = this.renderer,
            h = this.element,
            g = this.styles,
            u = this.textStr,
            m = c.cache,
            I = c.cacheKeys,
            v = h.namespaceURI === this.SVG_NS;
        e = F(e, this.rotation, 0);
        var L = c.styledMode ? h && f.prototype.getStyle.call(h, "font-size") : g && g.fontSize;

        if (z(u)) {
          var w = u.toString();
          -1 === w.indexOf("<") && (w = w.replace(/[0-9]/g, "0"));
          w += ["", e, L, this.textWidth, g && g.textOverflow, g && g.fontWeight].join();
        }

        w && !b && (p = m[w]);

        if (!p) {
          if (v || c.forExport) {
            try {
              var n = this.fakeTS && function (a) {
                var b = h.querySelector(".highcharts-text-outline");
                b && M(b, {
                  display: a
                });
              };

              a(n) && n("none");
              p = h.getBBox ? r({}, h.getBBox()) : {
                width: h.offsetWidth,
                height: h.offsetHeight
              };
              a(n) && n("");
            } catch (da) {
              "";
            }

            if (!p || 0 > p.width) p = {
              width: 0,
              height: 0
            };
          } else p = this.htmlGetBBox();

          c.isSVG && (b = p.width, c = p.height, v && (p.height = c = {
            "11px,17": 14,
            "13px,20": 16
          }[g && g.fontSize + "," + Math.round(c)] || c), e && (g = e * C, p.width = Math.abs(c * Math.sin(g)) + Math.abs(b * Math.cos(g)), p.height = Math.abs(c * Math.cos(g)) + Math.abs(b * Math.sin(g))));

          if (w && 0 < p.height) {
            for (; 250 < I.length;) {
              delete m[I.shift()];
            }

            m[w] || I.push(w);
            m[w] = p;
          }
        }

        return p;
      };

      f.prototype.getStyle = function (a) {
        return q.getComputedStyle(this.element || this, "").getPropertyValue(a);
      };

      f.prototype.hasClass = function (a) {
        return -1 !== ("" + this.attr("class")).split(" ").indexOf(a);
      };

      f.prototype.hide = function (a) {
        a ? this.attr({
          y: -9999
        }) : this.attr({
          visibility: "hidden"
        });
        return this;
      };

      f.prototype.htmlGetBBox = function () {
        return {
          height: 0,
          width: 0,
          x: 0,
          y: 0
        };
      };

      f.prototype.init = function (a, b) {
        this.element = "span" === b ? A(b) : l.createElementNS(this.SVG_NS, b);
        this.renderer = a;
        e(this, "afterInit");
      };

      f.prototype.invert = function (a) {
        this.inverted = a;
        this.updateTransform();
        return this;
      };

      f.prototype.on = function (a, b) {
        var p,
            e,
            c = this.element,
            h;
        E && "click" === a ? (c.ontouchstart = function (a) {
          p = a.touches[0].clientX;
          e = a.touches[0].clientY;
        }, c.ontouchend = function (a) {
          p && 4 <= Math.sqrt(Math.pow(p - a.changedTouches[0].clientX, 2) + Math.pow(e - a.changedTouches[0].clientY, 2)) || b.call(c, a);
          h = !0;
          !1 !== a.cancelable && a.preventDefault();
        }, c.onclick = function (a) {
          h || b.call(c, a);
        }) : c["on" + a] = b;
        return this;
      };

      f.prototype.opacitySetter = function (a, b, p) {
        this.opacity = a = Number(Number(a).toFixed(3));
        p.setAttribute(b, a);
      };

      f.prototype.removeClass = function (a) {
        return this.attr("class", ("" + this.attr("class")).replace(w(a) ? new RegExp("(^| )" + a + "( |$)") : a, " ").replace(/ +/g, " ").trim());
      };

      f.prototype.removeTextOutline = function () {
        var a = this.element.querySelector("tspan.highcharts-text-outline");
        a && this.safeRemoveChild(a);
      };

      f.prototype.safeRemoveChild = function (a) {
        var b = a.parentNode;
        b && b.removeChild(a);
      };

      f.prototype.setRadialReference = function (a) {
        var b = this.element.gradient && this.renderer.gradients[this.element.gradient];
        this.element.radialReference = a;
        b && b.radAttr && b.animate(this.renderer.getRadialAttr(a, b.radAttr));
        return this;
      };

      f.prototype.setTextPath = function (a, e) {
        var p = this.element,
            c = this.text ? this.text.element : p,
            h = {
          textAnchor: "text-anchor"
        },
            m = !1,
            u = this.textPathWrapper,
            v = !u;
        e = J(!0, {
          enabled: !0,
          attributes: {
            dy: -5,
            startOffset: "50%",
            textAnchor: "middle"
          }
        }, e);
        var I = d.filterUserAttributes(e.attributes);

        if (a && e && e.enabled) {
          u && null === u.element.parentNode ? (v = !0, u = u.destroy()) : u && this.removeTextOutline.call(u.parentGroup);
          this.options && this.options.padding && (I.dx = -this.options.padding);
          u || (this.textPathWrapper = u = this.renderer.createElement("textPath"), m = !0);
          var w = u.element;
          (e = a.element.getAttribute("id")) || a.element.setAttribute("id", e = Q());
          if (v) for (c.setAttribute("y", 0), b(I.dx) && c.setAttribute("x", -I.dx), a = [].slice.call(c.childNodes), v = 0; v < a.length; v++) {
            var n = a[v];
            n.nodeType !== Node.TEXT_NODE && "tspan" !== n.nodeName || w.appendChild(n);
          }
          m && u && u.add({
            element: c
          });
          w.setAttributeNS("http://www.w3.org/1999/xlink", "href", this.renderer.url + "#" + e);
          z(I.dy) && (w.parentNode.setAttribute("dy", I.dy), delete I.dy);
          z(I.dx) && (w.parentNode.setAttribute("dx", I.dx), delete I.dx);
          O(I, function (a, b) {
            w.setAttribute(h[b] || b, a);
          });
          p.removeAttribute("transform");
          this.removeTextOutline.call(u);
          this.text && !this.renderer.styledMode && this.attr({
            fill: "none",
            "stroke-width": 0
          });
          this.applyTextOutline = this.updateTransform = g;
        } else u && (delete this.updateTransform, delete this.applyTextOutline, this.destroyTextPath(p, a), this.updateTransform(), this.options && this.options.rotation && this.applyTextOutline(this.options.style.textOutline));

        return this;
      };

      f.prototype.shadow = function (a, b, p) {
        var e = [],
            c = this.element,
            h = !1,
            u = this.oldShadowOptions;
        var g = {
          color: B.neutralColor100,
          offsetX: 1,
          offsetY: 1,
          opacity: .15,
          width: 3
        };
        var I;
        !0 === a ? I = g : "object" === _typeof(a) && (I = r(g, a));
        I && (I && u && O(I, function (a, b) {
          a !== u[b] && (h = !0);
        }), h && this.destroyShadows(), this.oldShadowOptions = I);
        if (!I) this.destroyShadows();else if (!this.shadows) {
          var m = I.opacity / I.width;
          var v = this.parentInverted ? "translate(-1,-1)" : "translate(" + I.offsetX + ", " + I.offsetY + ")";

          for (g = 1; g <= I.width; g++) {
            var w = c.cloneNode(!1);
            var L = 2 * I.width + 1 - 2 * g;
            n(w, {
              stroke: a.color || B.neutralColor100,
              "stroke-opacity": m * g,
              "stroke-width": L,
              transform: v,
              fill: "none"
            });
            w.setAttribute("class", (w.getAttribute("class") || "") + " highcharts-shadow");
            p && (n(w, "height", Math.max(n(w, "height") - L, 0)), w.cutHeight = L);
            b ? b.element.appendChild(w) : c.parentNode && c.parentNode.insertBefore(w, c);
            e.push(w);
          }

          this.shadows = e;
        }
        return this;
      };

      f.prototype.show = function (a) {
        return this.attr({
          visibility: a ? "inherit" : "visible"
        });
      };

      f.prototype.strokeSetter = function (a, b, p) {
        this[b] = a;
        this.stroke && this["stroke-width"] ? (f.prototype.fillSetter.call(this, this.stroke, "stroke", p), p.setAttribute("stroke-width", this["stroke-width"]), this.hasStroke = !0) : "stroke-width" === b && 0 === a && this.hasStroke ? (p.removeAttribute("stroke"), this.hasStroke = !1) : this.renderer.styledMode && this["stroke-width"] && (p.setAttribute("stroke-width", this["stroke-width"]), this.hasStroke = !0);
      };

      f.prototype.strokeWidth = function () {
        if (!this.renderer.styledMode) return this["stroke-width"] || 0;
        var a = this.getStyle("stroke-width"),
            b = 0;
        if (a.indexOf("px") === a.length - 2) b = N(a);else if ("" !== a) {
          var p = l.createElementNS(c, "rect");
          n(p, {
            width: a,
            "stroke-width": 0
          });
          this.element.parentNode.appendChild(p);
          b = p.getBBox().width;
          p.parentNode.removeChild(p);
        }
        return b;
      };

      f.prototype.symbolAttr = function (a) {
        var b = this;
        "x y r start end width height innerR anchorX anchorY clockwise".split(" ").forEach(function (p) {
          b[p] = F(a[p], b[p]);
        });
        b.attr({
          d: b.renderer.symbols[b.symbolName](b.x, b.y, b.width, b.height, b)
        });
      };

      f.prototype.textSetter = function (a) {
        a !== this.textStr && (delete this.textPxLength, this.textStr = a, this.added && this.renderer.buildText(this));
      };

      f.prototype.titleSetter = function (a) {
        var b = this.element,
            p = b.getElementsByTagName("title")[0] || l.createElementNS(this.SVG_NS, "title");
        b.insertBefore ? b.insertBefore(p, b.firstChild) : b.appendChild(p);
        p.textContent = String(F(a, "")).replace(/<[^>]*>/g, "").replace(/&lt;/g, "<").replace(/&gt;/g, ">");
      };

      f.prototype.toFront = function () {
        var a = this.element;
        a.parentNode.appendChild(a);
        return this;
      };

      f.prototype.translate = function (a, b) {
        return this.attr({
          translateX: a,
          translateY: b
        });
      };

      f.prototype.updateShadows = function (a, b, p) {
        var e = this.shadows;
        if (e) for (var c = e.length; c--;) {
          p.call(e[c], "height" === a ? Math.max(b - (e[c].cutHeight || 0), 0) : "d" === a ? this.d : b, a, e[c]);
        }
      };

      f.prototype.updateTransform = function () {
        var a = this.translateX || 0,
            b = this.translateY || 0,
            p = this.scaleX,
            e = this.scaleY,
            c = this.inverted,
            h = this.rotation,
            u = this.matrix,
            g = this.element;
        c && (a += this.width, b += this.height);
        a = ["translate(" + a + "," + b + ")"];
        z(u) && a.push("matrix(" + u.join(",") + ")");
        c ? a.push("rotate(90) scale(-1,1)") : h && a.push("rotate(" + h + " " + F(this.rotationOriginX, g.getAttribute("x"), 0) + " " + F(this.rotationOriginY, g.getAttribute("y") || 0) + ")");
        (z(p) || z(e)) && a.push("scale(" + F(p, 1) + " " + F(e, 1) + ")");
        a.length && g.setAttribute("transform", a.join(" "));
      };

      f.prototype.visibilitySetter = function (a, b, p) {
        "inherit" === a ? p.removeAttribute(b) : this[b] !== a && p.setAttribute(b, a);
        this[b] = a;
      };

      f.prototype.xGetter = function (a) {
        "circle" === this.element.nodeName && ("x" === a ? a = "cx" : "y" === a && (a = "cy"));
        return this._defaultGetter(a);
      };

      f.prototype.zIndexSetter = function (a, b) {
        var p = this.renderer,
            e = this.parentGroup,
            c = (e || p).element || p.box,
            h = this.element,
            u = !1;
        p = c === p.box;
        var g = this.added;
        var I;
        z(a) ? (h.setAttribute("data-z-index", a), a = +a, this[b] === a && (g = !1)) : z(this[b]) && h.removeAttribute("data-z-index");
        this[b] = a;

        if (g) {
          (a = this.zIndex) && e && (e.handleZ = !0);
          b = c.childNodes;

          for (I = b.length - 1; 0 <= I && !u; I--) {
            e = b[I];
            g = e.getAttribute("data-z-index");
            var m = !z(g);
            if (e !== h) if (0 > a && m && !p && !I) c.insertBefore(h, b[I]), u = !0;else if (N(g) <= a || m && (!z(a) || 0 <= a)) c.insertBefore(h, b[I + 1] || null), u = !0;
          }

          u || (c.insertBefore(h, b[p ? 3 : 0] || null), u = !0);
        }

        return u;
      };

      return f;
    }();

    f.prototype["stroke-widthSetter"] = f.prototype.strokeSetter;
    f.prototype.yGetter = f.prototype.xGetter;

    f.prototype.matrixSetter = f.prototype.rotationOriginXSetter = f.prototype.rotationOriginYSetter = f.prototype.rotationSetter = f.prototype.scaleXSetter = f.prototype.scaleYSetter = f.prototype.translateXSetter = f.prototype.translateYSetter = f.prototype.verticalAlignSetter = function (a, b) {
      this[b] = a;
      this.doTransform = !0;
    };

    x.SVGElement = f;
    return x.SVGElement;
  });
  P(k, "Core/Renderer/SVG/SVGLabel.js", [k["Core/Renderer/SVG/SVGElement.js"], k["Core/Utilities.js"]], function (f, d) {
    function k(f, d) {
      D(f) ? f !== this[d] && (this[d] = f, this.updateTextPadding()) : this[d] = void 0;
    }

    var x = this && this.__extends || function () {
      var _f = function f(d, g) {
        _f = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (g, c) {
          g.__proto__ = c;
        } || function (g, c) {
          for (var q in c) {
            c.hasOwnProperty(q) && (g[q] = c[q]);
          }
        };

        return _f(d, g);
      };

      return function (d, g) {
        function y() {
          this.constructor = d;
        }

        _f(d, g);

        d.prototype = null === g ? Object.create(g) : (y.prototype = g.prototype, new y());
      };
    }(),
        B = d.defined,
        G = d.extend,
        D = d.isNumber,
        H = d.merge,
        t = d.pick,
        C = d.removeEvent;

    return function (d) {
      function l(g, f, c, q, n, A, M, z, m, r) {
        var e = d.call(this) || this;
        e.paddingSetter = k;
        e.paddingLeftSetter = k;
        e.paddingRightSetter = k;
        e.init(g, "g");
        e.textStr = f;
        e.x = c;
        e.y = q;
        e.anchorX = A;
        e.anchorY = M;
        e.baseline = m;
        e.className = r;
        "button" !== r && e.addClass("highcharts-label");
        r && e.addClass("highcharts-" + r);
        e.text = g.text("", 0, 0, z).attr({
          zIndex: 1
        });

        if ("string" === typeof n) {
          var h = /^url\((.*?)\)$/.test(n);
          if (e.renderer.symbols[n] || h) e.symbolKey = n;
        }

        e.bBox = l.emptyBBox;
        e.padding = 3;
        e.baselineOffset = 0;
        e.needsBox = g.styledMode || h;
        e.deferredAttr = {};
        e.alignFactor = 0;
        return e;
      }

      x(l, d);

      l.prototype.alignSetter = function (g) {
        g = {
          left: 0,
          center: .5,
          right: 1
        }[g];
        g !== this.alignFactor && (this.alignFactor = g, this.bBox && D(this.xSetting) && this.attr({
          x: this.xSetting
        }));
      };

      l.prototype.anchorXSetter = function (g, l) {
        this.anchorX = g;
        this.boxAttr(l, Math.round(g) - this.getCrispAdjust() - this.xSetting);
      };

      l.prototype.anchorYSetter = function (g, l) {
        this.anchorY = g;
        this.boxAttr(l, g - this.ySetting);
      };

      l.prototype.boxAttr = function (g, l) {
        this.box ? this.box.attr(g, l) : this.deferredAttr[g] = l;
      };

      l.prototype.css = function (g) {
        if (g) {
          var d = {};
          g = H(g);
          l.textProps.forEach(function (c) {
            "undefined" !== typeof g[c] && (d[c] = g[c], delete g[c]);
          });
          this.text.css(d);
          var c = ("width" in d);
          "fontSize" in d || "fontWeight" in d ? this.updateTextPadding() : c && this.updateBoxSize();
        }

        return f.prototype.css.call(this, g);
      };

      l.prototype.destroy = function () {
        C(this.element, "mouseenter");
        C(this.element, "mouseleave");
        this.text && this.text.destroy();
        this.box && (this.box = this.box.destroy());
        f.prototype.destroy.call(this);
      };

      l.prototype.fillSetter = function (g, l) {
        g && (this.needsBox = !0);
        this.fill = g;
        this.boxAttr(l, g);
      };

      l.prototype.getBBox = function () {
        var g = this.bBox,
            l = this.padding,
            c = t(this.paddingLeft, l);
        return {
          width: this.width,
          height: this.height,
          x: g.x - c,
          y: g.y - l
        };
      };

      l.prototype.getCrispAdjust = function () {
        return this.renderer.styledMode && this.box ? this.box.strokeWidth() % 2 / 2 : (this["stroke-width"] ? parseInt(this["stroke-width"], 10) : 0) % 2 / 2;
      };

      l.prototype.heightSetter = function (g) {
        this.heightSetting = g;
      };

      l.prototype.on = function (g, l) {
        var c = this,
            q = c.text,
            n = q && "SPAN" === q.element.tagName ? q : void 0;

        if (n) {
          var d = function d(q) {
            ("mouseenter" === g || "mouseleave" === g) && q.relatedTarget instanceof Element && (c.element.compareDocumentPosition(q.relatedTarget) & Node.DOCUMENT_POSITION_CONTAINED_BY || n.element.compareDocumentPosition(q.relatedTarget) & Node.DOCUMENT_POSITION_CONTAINED_BY) || l.call(c.element, q);
          };

          n.on(g, d);
        }

        f.prototype.on.call(c, g, d || l);
        return c;
      };

      l.prototype.onAdd = function () {
        var g = this.textStr;
        this.text.add(this);
        this.attr({
          text: B(g) ? g : "",
          x: this.x,
          y: this.y
        });
        this.box && B(this.anchorX) && this.attr({
          anchorX: this.anchorX,
          anchorY: this.anchorY
        });
      };

      l.prototype.rSetter = function (g, l) {
        this.boxAttr(l, g);
      };

      l.prototype.shadow = function (g) {
        g && !this.renderer.styledMode && (this.updateBoxSize(), this.box && this.box.shadow(g));
        return this;
      };

      l.prototype.strokeSetter = function (g, l) {
        this.stroke = g;
        this.boxAttr(l, g);
      };

      l.prototype["stroke-widthSetter"] = function (g, l) {
        g && (this.needsBox = !0);
        this["stroke-width"] = g;
        this.boxAttr(l, g);
      };

      l.prototype["text-alignSetter"] = function (g) {
        this.textAlign = g;
      };

      l.prototype.textSetter = function (g) {
        "undefined" !== typeof g && this.text.attr({
          text: g
        });
        this.updateTextPadding();
      };

      l.prototype.updateBoxSize = function () {
        var g = this.text.element.style,
            d = {},
            c = this.padding,
            q = this.bBox = D(this.widthSetting) && D(this.heightSetting) && !this.textAlign || !B(this.text.textStr) ? l.emptyBBox : this.text.getBBox();
        this.width = this.getPaddedWidth();
        this.height = (this.heightSetting || q.height || 0) + 2 * c;
        this.baselineOffset = c + Math.min(this.renderer.fontMetrics(g && g.fontSize, this.text).b, q.height || Infinity);
        this.needsBox && (this.box || (g = this.box = this.symbolKey ? this.renderer.symbol(this.symbolKey) : this.renderer.rect(), g.addClass(("button" === this.className ? "" : "highcharts-label-box") + (this.className ? " highcharts-" + this.className + "-box" : "")), g.add(this)), g = this.getCrispAdjust(), d.x = g, d.y = (this.baseline ? -this.baselineOffset : 0) + g, d.width = Math.round(this.width), d.height = Math.round(this.height), this.box.attr(G(d, this.deferredAttr)), this.deferredAttr = {});
      };

      l.prototype.updateTextPadding = function () {
        var g = this.text;
        this.updateBoxSize();
        var l = this.baseline ? 0 : this.baselineOffset,
            c = t(this.paddingLeft, this.padding);
        B(this.widthSetting) && this.bBox && ("center" === this.textAlign || "right" === this.textAlign) && (c += {
          center: .5,
          right: 1
        }[this.textAlign] * (this.widthSetting - this.bBox.width));
        if (c !== g.x || l !== g.y) g.attr("x", c), g.hasBoxWidthChanged && (this.bBox = g.getBBox(!0)), "undefined" !== typeof l && g.attr("y", l);
        g.x = c;
        g.y = l;
      };

      l.prototype.widthSetter = function (g) {
        this.widthSetting = D(g) ? g : void 0;
      };

      l.prototype.getPaddedWidth = function () {
        var g = this.padding,
            l = t(this.paddingLeft, g);
        g = t(this.paddingRight, g);
        return (this.widthSetting || this.bBox.width || 0) + l + g;
      };

      l.prototype.xSetter = function (g) {
        this.x = g;
        this.alignFactor && (g -= this.alignFactor * this.getPaddedWidth(), this["forceAnimate:x"] = !0);
        this.xSetting = Math.round(g);
        this.attr("translateX", this.xSetting);
      };

      l.prototype.ySetter = function (g) {
        this.ySetting = this.y = Math.round(g);
        this.attr("translateY", this.ySetting);
      };

      l.emptyBBox = {
        width: 0,
        height: 0,
        x: 0,
        y: 0
      };
      l.textProps = "color direction fontFamily fontSize fontStyle fontWeight lineHeight textAlign textDecoration textOutline textOverflow width".split(" ");
      return l;
    }(f);
  });
  P(k, "Core/Renderer/SVG/TextBuilder.js", [k["Core/Globals.js"], k["Core/Utilities.js"], k["Core/Renderer/HTML/AST.js"]], function (f, d, k) {
    var x = f.doc,
        B = f.SVG_NS,
        S = d.attr,
        D = d.isString,
        H = d.objectEach,
        t = d.pick;
    return function () {
      function d(l) {
        var d = l.styles;
        this.renderer = l.renderer;
        this.svgElement = l;
        this.width = l.textWidth;
        this.textLineHeight = d && d.lineHeight;
        this.textOutline = d && d.textOutline;
        this.ellipsis = !(!d || "ellipsis" !== d.textOverflow);
        this.noWrap = !(!d || "nowrap" !== d.whiteSpace);
        this.fontSize = d && d.fontSize;
      }

      d.prototype.buildSVG = function () {
        var l = this.svgElement,
            d = l.element,
            g = l.renderer,
            f = t(l.textStr, "").toString(),
            c = -1 !== f.indexOf("<"),
            q = d.childNodes,
            n = q.length;
        g = this.width && !l.added && g.box;
        var A = /<br.*?>/g;
        var M = [f, this.ellipsis, this.noWrap, this.textLineHeight, this.textOutline, this.fontSize, this.width].join();

        if (M !== l.textCache) {
          l.textCache = M;

          for (delete l.actualWidth; n--;) {
            d.removeChild(q[n]);
          }

          c || this.ellipsis || this.width || -1 !== f.indexOf(" ") && (!this.noWrap || A.test(f)) ? "" !== f && (g && g.appendChild(d), f = new k(f), this.modifyTree(f.nodes), f.addToDOM(l.element), this.modifyDOM(), this.ellipsis && -1 !== (d.textContent || "").indexOf("\u2026") && l.attr("title", this.unescapeEntities(l.textStr || "", ["&lt;", "&gt;"])), g && g.removeChild(d)) : d.appendChild(x.createTextNode(this.unescapeEntities(f)));
          D(this.textOutline) && l.applyTextOutline && l.applyTextOutline(this.textOutline);
        }
      };

      d.prototype.modifyDOM = function () {
        var d = this,
            f = this.svgElement,
            g = S(f.element, "x");
        [].forEach.call(f.element.querySelectorAll("tspan.highcharts-br"), function (c) {
          c.nextSibling && c.previousSibling && S(c, {
            dy: d.getLineHeight(c.nextSibling),
            x: g
          });
        });
        var y = this.width || 0;

        if (y) {
          var c = function c(_c, q) {
            var n = _c.textContent || "",
                l = n.replace(/([^\^])-/g, "$1- ").split(" "),
                m = !d.noWrap && (1 < l.length || 1 < f.element.childNodes.length),
                r = d.getLineHeight(q),
                e = 0,
                h = f.actualWidth;
            if (d.ellipsis) n && d.truncate(_c, n, void 0, 0, Math.max(0, y - parseInt(d.fontSize || 12, 10)), function (a, b) {
              return a.substring(0, b) + "\u2026";
            });else if (m) {
              n = [];

              for (m = []; q.firstChild && q.firstChild !== _c;) {
                m.push(q.firstChild), q.removeChild(q.firstChild);
              }

              for (; l.length;) {
                l.length && !d.noWrap && 0 < e && (n.push(_c.textContent || ""), _c.textContent = l.join(" ").replace(/- /g, "-")), d.truncate(_c, void 0, l, 0 === e ? h || 0 : 0, y, function (a, b) {
                  return l.slice(0, b).join(" ").replace(/- /g, "-");
                }), h = f.actualWidth, e++;
              }

              m.forEach(function (a) {
                q.insertBefore(a, _c);
              });
              n.forEach(function (a) {
                q.insertBefore(x.createTextNode(a), _c);
                a = x.createElementNS(B, "tspan");
                a.textContent = "\u200B";
                S(a, {
                  dy: r,
                  x: g
                });
                q.insertBefore(a, _c);
              });
            }
          },
              q = function q(g) {
            [].slice.call(g.childNodes).forEach(function (n) {
              n.nodeType === Node.TEXT_NODE ? c(n, g) : (-1 !== n.className.baseVal.indexOf("highcharts-br") && (f.actualWidth = 0), q(n));
            });
          };

          q(f.element);
        }
      };

      d.prototype.getLineHeight = function (d) {
        var l;
        d = d.nodeType === Node.TEXT_NODE ? d.parentElement : d;
        this.renderer.styledMode || (l = d && /(px|em)$/.test(d.style.fontSize) ? d.style.fontSize : this.fontSize || this.renderer.style.fontSize || 12);
        return this.textLineHeight ? parseInt(this.textLineHeight.toString(), 10) : this.renderer.fontMetrics(l, d || this.svgElement.element).h;
      };

      d.prototype.modifyTree = function (d) {
        var l = this,
            g = function g(f, c) {
          var q = f.tagName,
              n = l.renderer.styledMode,
              A = f.attributes || {};
          if ("b" === q || "strong" === q) n ? A["class"] = "highcharts-strong" : A.style = "font-weight:bold;" + (A.style || "");else if ("i" === q || "em" === q) n ? A["class"] = "highcharts-emphasized" : A.style = "font-style:italic;" + (A.style || "");
          D(A.style) && (A.style = A.style.replace(/(;| |^)color([ :])/, "$1fill$2"));
          "br" === q && (A["class"] = "highcharts-br", f.textContent = "\u200B", (c = d[c + 1]) && c.textContent && (c.textContent = c.textContent.replace(/^ +/gm, "")));
          "#text" !== q && "a" !== q && (f.tagName = "tspan");
          f.attributes = A;
          f.children && f.children.filter(function (c) {
            return "#text" !== c.tagName;
          }).forEach(g);
        };

        for (d.forEach(g); d[0] && "tspan" === d[0].tagName && !d[0].children;) {
          d.splice(0, 1);
        }
      };

      d.prototype.truncate = function (d, f, g, y, c, q) {
        var n = this.svgElement,
            l = n.renderer,
            M = n.rotation,
            z = [],
            m = g ? 1 : 0,
            r = (f || g || "").length,
            e = r,
            h,
            a = function a(_a, b) {
          b = b || _a;
          var e = d.parentNode;
          if (e && "undefined" === typeof z[b]) if (e.getSubStringLength) try {
            z[b] = y + e.getSubStringLength(0, g ? b + 1 : b);
          } catch (F) {
            "";
          } else l.getSpanWidth && (d.textContent = q(f || g, _a), z[b] = y + l.getSpanWidth(n, d));
          return z[b];
        };

        n.rotation = 0;
        var b = a(d.textContent.length);

        if (y + b > c) {
          for (; m <= r;) {
            e = Math.ceil((m + r) / 2), g && (h = q(g, e)), b = a(e, h && h.length - 1), m === r ? m = r + 1 : b > c ? r = e - 1 : m = e;
          }

          0 === r ? d.textContent = "" : f && r === f.length - 1 || (d.textContent = h || q(f || g, e));
        }

        g && g.splice(0, e);
        n.actualWidth = b;
        n.rotation = M;
      };

      d.prototype.unescapeEntities = function (d, f) {
        H(this.renderer.escapes, function (g, l) {
          f && -1 !== f.indexOf(g) || (d = d.toString().replace(new RegExp(g, "g"), l));
        });
        return d;
      };

      return d;
    }();
  });
  P(k, "Core/Renderer/SVG/SVGRenderer.js", [k["Core/Color/Color.js"], k["Core/Globals.js"], k["Core/Color/Palette.js"], k["Core/Renderer/SVG/SVGElement.js"], k["Core/Renderer/SVG/SVGLabel.js"], k["Core/Renderer/HTML/AST.js"], k["Core/Renderer/SVG/TextBuilder.js"], k["Core/Utilities.js"]], function (f, d, k, x, B, G, D, H) {
    var t = H.addEvent,
        C = H.attr,
        l = H.createElement,
        E = H.css,
        g = H.defined,
        y = H.destroyObjectProperties,
        c = H.extend,
        q = H.isArray,
        n = H.isNumber,
        A = H.isObject,
        M = H.isString,
        z = H.merge,
        m = H.pick,
        r = H.pInt,
        e = H.uniqueKey,
        h = d.charts,
        a = d.deg2rad,
        b = d.doc,
        w = d.isFirefox,
        J = d.isMS,
        O = d.isWebKit;
    H = d.noop;

    var F = d.SVG_NS,
        N = d.symbolSizes,
        R = d.win,
        Q,
        T = function () {
      function d(a, b, e, c, h, u, g) {
        this.width = this.url = this.style = this.isSVG = this.imgCount = this.height = this.gradients = this.globalAnimation = this.defs = this.chartIndex = this.cacheKeys = this.cache = this.boxWrapper = this.box = this.alignedObjects = void 0;
        this.init(a, b, e, c, h, u, g);
      }

      d.prototype.init = function (a, p, e, c, h, u, g) {
        var K = this.createElement("svg").attr({
          version: "1.1",
          "class": "highcharts-root"
        });
        g || K.css(this.getStyle(c));
        c = K.element;
        a.appendChild(c);
        C(a, "dir", "ltr");
        -1 === a.innerHTML.indexOf("xmlns") && C(c, "xmlns", this.SVG_NS);
        this.isSVG = !0;
        this.box = c;
        this.boxWrapper = K;
        this.alignedObjects = [];
        this.url = this.getReferenceURL();
        this.createElement("desc").add().element.appendChild(b.createTextNode("Created with Highcharts 9.0.1"));
        this.defs = this.createElement("defs").add();
        this.allowHTML = u;
        this.forExport = h;
        this.styledMode = g;
        this.gradients = {};
        this.cache = {};
        this.cacheKeys = [];
        this.imgCount = 0;
        this.setSize(p, e, !1);
        var m;
        w && a.getBoundingClientRect && (p = function p() {
          E(a, {
            left: 0,
            top: 0
          });
          m = a.getBoundingClientRect();
          E(a, {
            left: Math.ceil(m.left) - m.left + "px",
            top: Math.ceil(m.top) - m.top + "px"
          });
        }, p(), this.unSubPixelFix = t(R, "resize", p));
      };

      d.prototype.definition = function (a) {
        return new G([a]).addToDOM(this.defs.element);
      };

      d.prototype.getReferenceURL = function () {
        if ((w || O) && b.getElementsByTagName("base").length) {
          if (!g(Q)) {
            var a = e();
            a = new G([{
              tagName: "svg",
              attributes: {
                width: 8,
                height: 8
              },
              children: [{
                tagName: "defs",
                children: [{
                  tagName: "clipPath",
                  attributes: {
                    id: a
                  },
                  children: [{
                    tagName: "rect",
                    attributes: {
                      width: 4,
                      height: 4
                    }
                  }]
                }]
              }, {
                tagName: "rect",
                attributes: {
                  id: "hitme",
                  width: 8,
                  height: 8,
                  "clip-path": "url(#" + a + ")",
                  fill: "rgba(0,0,0,0.001)"
                }
              }]
            }]).addToDOM(b.body);
            E(a, {
              position: "fixed",
              top: 0,
              left: 0,
              zIndex: 9E5
            });
            var p = b.elementFromPoint(6, 6);
            Q = "hitme" === (p && p.id);
            b.body.removeChild(a);
          }

          if (Q) return R.location.href.split("#")[0].replace(/<[^>]*>/g, "").replace(/([\('\)])/g, "\\$1").replace(/ /g, "%20");
        }

        return "";
      };

      d.prototype.getStyle = function (a) {
        return this.style = c({
          fontFamily: '"Lucida Grande", "Lucida Sans Unicode", Arial, Helvetica, sans-serif',
          fontSize: "12px"
        }, a);
      };

      d.prototype.setStyle = function (a) {
        this.boxWrapper.css(this.getStyle(a));
      };

      d.prototype.isHidden = function () {
        return !this.boxWrapper.getBBox().width;
      };

      d.prototype.destroy = function () {
        var a = this.defs;
        this.box = null;
        this.boxWrapper = this.boxWrapper.destroy();
        y(this.gradients || {});
        this.gradients = null;
        a && (this.defs = a.destroy());
        this.unSubPixelFix && this.unSubPixelFix();
        return this.alignedObjects = null;
      };

      d.prototype.createElement = function (a) {
        var b = new this.Element();
        b.init(this, a);
        return b;
      };

      d.prototype.getRadialAttr = function (a, b) {
        return {
          cx: a[0] - a[2] / 2 + b.cx * a[2],
          cy: a[1] - a[2] / 2 + b.cy * a[2],
          r: b.r * a[2]
        };
      };

      d.prototype.buildText = function (a) {
        new D(a).buildSVG();
      };

      d.prototype.getContrast = function (a) {
        a = f.parse(a).rgba;
        a[0] *= 1;
        a[1] *= 1.2;
        a[2] *= .5;
        return 459 < a[0] + a[1] + a[2] ? "#000000" : "#FFFFFF";
      };

      d.prototype.button = function (a, b, e, h, g, u, m, I, w, d) {
        var p = this.label(a, b, e, w, void 0, void 0, d, void 0, "button"),
            K = 0,
            n = this.styledMode,
            q = g ? z(g) : {};
        a = q && q.style || {};
        q = G.filterUserAttributes(q);
        p.attr(z({
          padding: 8,
          r: 2
        }, q));

        if (!n) {
          q = z({
            fill: k.neutralColor3,
            stroke: k.neutralColor20,
            "stroke-width": 1,
            style: {
              color: k.neutralColor80,
              cursor: "pointer",
              fontWeight: "normal"
            }
          }, {
            style: a
          }, q);
          var r = q.style;
          delete q.style;
          u = z(q, {
            fill: k.neutralColor10
          }, G.filterUserAttributes(u || {}));
          var aa = u.style;
          delete u.style;
          m = z(q, {
            fill: k.highlightColor10,
            style: {
              color: k.neutralColor100,
              fontWeight: "bold"
            }
          }, G.filterUserAttributes(m || {}));
          var f = m.style;
          delete m.style;
          I = z(q, {
            style: {
              color: k.neutralColor20
            }
          }, G.filterUserAttributes(I || {}));
          var v = I.style;
          delete I.style;
        }

        t(p.element, J ? "mouseover" : "mouseenter", function () {
          3 !== K && p.setState(1);
        });
        t(p.element, J ? "mouseout" : "mouseleave", function () {
          3 !== K && p.setState(K);
        });

        p.setState = function (a) {
          1 !== a && (p.state = K = a);
          p.removeClass(/highcharts-button-(normal|hover|pressed|disabled)/).addClass("highcharts-button-" + ["normal", "hover", "pressed", "disabled"][a || 0]);
          n || p.attr([q, u, m, I][a || 0]).css([r, aa, f, v][a || 0]);
        };

        n || p.attr(q).css(c({
          cursor: "default"
        }, r));
        return p.on("click", function (a) {
          3 !== K && h.call(p, a);
        });
      };

      d.prototype.crispLine = function (a, b, e) {
        void 0 === e && (e = "round");
        var p = a[0],
            c = a[1];
        p[1] === c[1] && (p[1] = c[1] = Math[e](p[1]) - b % 2 / 2);
        p[2] === c[2] && (p[2] = c[2] = Math[e](p[2]) + b % 2 / 2);
        return a;
      };

      d.prototype.path = function (a) {
        var b = this.styledMode ? {} : {
          fill: "none"
        };
        q(a) ? b.d = a : A(a) && c(b, a);
        return this.createElement("path").attr(b);
      };

      d.prototype.circle = function (a, b, e) {
        a = A(a) ? a : "undefined" === typeof a ? {} : {
          x: a,
          y: b,
          r: e
        };
        b = this.createElement("circle");

        b.xSetter = b.ySetter = function (a, b, p) {
          p.setAttribute("c" + b, a);
        };

        return b.attr(a);
      };

      d.prototype.arc = function (a, b, e, c, h, u) {
        A(a) ? (c = a, b = c.y, e = c.r, a = c.x) : c = {
          innerR: c,
          start: h,
          end: u
        };
        a = this.symbol("arc", a, b, e, e, c);
        a.r = e;
        return a;
      };

      d.prototype.rect = function (a, b, e, c, h, u) {
        h = A(a) ? a.r : h;
        var p = this.createElement("rect");
        a = A(a) ? a : "undefined" === typeof a ? {} : {
          x: a,
          y: b,
          width: Math.max(e, 0),
          height: Math.max(c, 0)
        };
        this.styledMode || ("undefined" !== typeof u && (a.strokeWidth = u, a = p.crisp(a)), a.fill = "none");
        h && (a.r = h);

        p.rSetter = function (a, b, e) {
          p.r = a;
          C(e, {
            rx: a,
            ry: a
          });
        };

        p.rGetter = function () {
          return p.r;
        };

        return p.attr(a);
      };

      d.prototype.setSize = function (a, b, e) {
        var p = this.alignedObjects,
            c = p.length;
        this.width = a;
        this.height = b;

        for (this.boxWrapper.animate({
          width: a,
          height: b
        }, {
          step: function step() {
            this.attr({
              viewBox: "0 0 " + this.attr("width") + " " + this.attr("height")
            });
          },
          duration: m(e, !0) ? void 0 : 0
        }); c--;) {
          p[c].align();
        }
      };

      d.prototype.g = function (a) {
        var b = this.createElement("g");
        return a ? b.attr({
          "class": "highcharts-" + a
        }) : b;
      };

      d.prototype.image = function (a, b, e, h, g, u) {
        var p = {
          preserveAspectRatio: "none"
        },
            K = function K(a, b) {
          a.setAttributeNS ? a.setAttributeNS("http://www.w3.org/1999/xlink", "href", b) : a.setAttribute("hc-svg-href", b);
        },
            m = function m(b) {
          K(w.element, a);
          u.call(w, b);
        };

        1 < arguments.length && c(p, {
          x: b,
          y: e,
          width: h,
          height: g
        });
        var w = this.createElement("image").attr(p);
        u ? (K(w.element, "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="), p = new R.Image(), t(p, "load", m), p.src = a, p.complete && m({})) : K(w.element, a);
        return w;
      };

      d.prototype.symbol = function (a, p, e, w, d, u) {
        var K = this,
            I = /^url\((.*?)\)$/,
            q = I.test(a),
            n = !q && (this.symbols[a] ? a : "circle"),
            r = n && this.symbols[n],
            J;

        if (r) {
          "number" === typeof p && (J = r.call(this.symbols, Math.round(p || 0), Math.round(e || 0), w || 0, d || 0, u));
          var f = this.path(J);
          K.styledMode || f.attr("fill", "none");
          c(f, {
            symbolName: n,
            x: p,
            y: e,
            width: w,
            height: d
          });
          u && c(f, u);
        } else if (q) {
          var v = a.match(I)[1];
          f = this.image(v);
          f.imgwidth = m(N[v] && N[v].width, u && u.width);
          f.imgheight = m(N[v] && N[v].height, u && u.height);

          var F = function F() {
            f.attr({
              width: f.width,
              height: f.height
            });
          };

          ["width", "height"].forEach(function (a) {
            f[a + "Setter"] = function (a, b) {
              var p = {},
                  e = this["img" + b],
                  c = "width" === b ? "translateX" : "translateY";
              this[b] = a;
              g(e) && (u && "within" === u.backgroundSize && this.width && this.height && (e = Math.round(e * Math.min(this.width / this.imgwidth, this.height / this.imgheight))), this.element && this.element.setAttribute(b, e), this.alignByTranslate || (p[c] = ((this[b] || 0) - e) / 2, this.attr(p)));
            };
          });
          g(p) && f.attr({
            x: p,
            y: e
          });
          f.isImg = !0;
          g(f.imgwidth) && g(f.imgheight) ? F() : (f.attr({
            width: 0,
            height: 0
          }), l("img", {
            onload: function onload() {
              var a = h[K.chartIndex];
              0 === this.width && (E(this, {
                position: "absolute",
                top: "-999em"
              }), b.body.appendChild(this));
              N[v] = {
                width: this.width,
                height: this.height
              };
              f.imgwidth = this.width;
              f.imgheight = this.height;
              f.element && F();
              this.parentNode && this.parentNode.removeChild(this);
              K.imgCount--;
              if (!K.imgCount && a && !a.hasLoaded) a.onload();
            },
            src: v
          }), this.imgCount++);
        }

        return f;
      };

      d.prototype.clipRect = function (a, b, c, h) {
        var p = e() + "-",
            u = this.createElement("clipPath").attr({
          id: p
        }).add(this.defs);
        a = this.rect(a, b, c, h, 0).add(u);
        a.id = p;
        a.clipPath = u;
        a.count = 0;
        return a;
      };

      d.prototype.text = function (a, b, e, c) {
        var p = {};
        if (c && (this.allowHTML || !this.forExport)) return this.html(a, b, e);
        p.x = Math.round(b || 0);
        e && (p.y = Math.round(e));
        g(a) && (p.text = a);
        a = this.createElement("text").attr(p);
        c || (a.xSetter = function (a, b, p) {
          var e = p.getElementsByTagName("tspan"),
              u = p.getAttribute(b),
              c;

          for (c = 0; c < e.length; c++) {
            var h = e[c];
            h.getAttribute(b) === u && h.setAttribute(b, a);
          }

          p.setAttribute(b, a);
        });
        return a;
      };

      d.prototype.fontMetrics = function (a, b) {
        a = !this.styledMode && /px/.test(a) || !R.getComputedStyle ? a || b && b.style && b.style.fontSize || this.style && this.style.fontSize : b && x.prototype.getStyle.call(b, "font-size");
        a = /px/.test(a) ? r(a) : 12;
        b = 24 > a ? a + 3 : Math.round(1.2 * a);
        return {
          h: b,
          b: Math.round(.8 * b),
          f: a
        };
      };

      d.prototype.rotCorr = function (b, p, e) {
        var c = b;
        p && e && (c = Math.max(c * Math.cos(p * a), 4));
        return {
          x: -b / 3 * Math.sin(p * a),
          y: c
        };
      };

      d.prototype.pathToSegments = function (a) {
        for (var b = [], e = [], c = {
          A: 8,
          C: 7,
          H: 2,
          L: 3,
          M: 3,
          Q: 5,
          S: 5,
          T: 3,
          V: 2
        }, h = 0; h < a.length; h++) {
          M(e[0]) && n(a[h]) && e.length === c[e[0].toUpperCase()] && a.splice(h, 0, e[0].replace("M", "L").replace("m", "l")), "string" === typeof a[h] && (e.length && b.push(e.slice(0)), e.length = 0), e.push(a[h]);
        }

        b.push(e.slice(0));
        return b;
      };

      d.prototype.label = function (a, b, e, c, h, u, g, m, w) {
        return new B(this, a, b, e, c, h, u, g, m, w);
      };

      return d;
    }();

    T.prototype.Element = x;
    T.prototype.SVG_NS = F;
    T.prototype.draw = H;
    T.prototype.escapes = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      "'": "&#39;",
      '"': "&quot;"
    };
    T.prototype.symbols = {
      circle: function circle(a, b, e, c) {
        return this.arc(a + e / 2, b + c / 2, e / 2, c / 2, {
          start: .5 * Math.PI,
          end: 2.5 * Math.PI,
          open: !1
        });
      },
      square: function square(a, b, e, c) {
        return [["M", a, b], ["L", a + e, b], ["L", a + e, b + c], ["L", a, b + c], ["Z"]];
      },
      triangle: function triangle(a, b, e, c) {
        return [["M", a + e / 2, b], ["L", a + e, b + c], ["L", a, b + c], ["Z"]];
      },
      "triangle-down": function triangleDown(a, b, e, c) {
        return [["M", a, b], ["L", a + e, b], ["L", a + e / 2, b + c], ["Z"]];
      },
      diamond: function diamond(a, b, e, c) {
        return [["M", a + e / 2, b], ["L", a + e, b + c / 2], ["L", a + e / 2, b + c], ["L", a, b + c / 2], ["Z"]];
      },
      arc: function arc(a, b, e, c, h) {
        var p = [];

        if (h) {
          var u = h.start || 0,
              K = h.end || 0,
              I = h.r || e;
          e = h.r || c || e;
          var w = .001 > Math.abs(K - u - 2 * Math.PI);
          K -= .001;
          c = h.innerR;
          w = m(h.open, w);
          var d = Math.cos(u),
              n = Math.sin(u),
              q = Math.cos(K),
              r = Math.sin(K);
          u = m(h.longArc, .001 > K - u - Math.PI ? 0 : 1);
          p.push(["M", a + I * d, b + e * n], ["A", I, e, 0, u, m(h.clockwise, 1), a + I * q, b + e * r]);
          g(c) && p.push(w ? ["M", a + c * q, b + c * r] : ["L", a + c * q, b + c * r], ["A", c, c, 0, u, g(h.clockwise) ? 1 - h.clockwise : 0, a + c * d, b + c * n]);
          w || p.push(["Z"]);
        }

        return p;
      },
      callout: function callout(a, b, e, c, h) {
        var p = Math.min(h && h.r || 0, e, c),
            u = p + 6,
            g = h && h.anchorX;
        h = h && h.anchorY || 0;
        var m = [["M", a + p, b], ["L", a + e - p, b], ["C", a + e, b, a + e, b, a + e, b + p], ["L", a + e, b + c - p], ["C", a + e, b + c, a + e, b + c, a + e - p, b + c], ["L", a + p, b + c], ["C", a, b + c, a, b + c, a, b + c - p], ["L", a, b + p], ["C", a, b, a, b, a + p, b]];
        if (!n(g)) return m;
        a + g >= e ? h > b + u && h < b + c - u ? m.splice(3, 1, ["L", a + e, h - 6], ["L", a + e + 6, h], ["L", a + e, h + 6], ["L", a + e, b + c - p]) : m.splice(3, 1, ["L", a + e, c / 2], ["L", g, h], ["L", a + e, c / 2], ["L", a + e, b + c - p]) : 0 >= a + g ? h > b + u && h < b + c - u ? m.splice(7, 1, ["L", a, h + 6], ["L", a - 6, h], ["L", a, h - 6], ["L", a, b + p]) : m.splice(7, 1, ["L", a, c / 2], ["L", g, h], ["L", a, c / 2], ["L", a, b + p]) : h && h > c && g > a + u && g < a + e - u ? m.splice(5, 1, ["L", g + 6, b + c], ["L", g, b + c + 6], ["L", g - 6, b + c], ["L", a + p, b + c]) : h && 0 > h && g > a + u && g < a + e - u && m.splice(1, 1, ["L", g - 6, b], ["L", g, b - 6], ["L", g + 6, b], ["L", e - p, b]);
        return m;
      }
    };
    d.SVGRenderer = T;
    d.Renderer = d.SVGRenderer;
    return d.Renderer;
  });
  P(k, "Core/Renderer/HTML/HTMLElement.js", [k["Core/Globals.js"], k["Core/Renderer/SVG/SVGElement.js"], k["Core/Utilities.js"]], function (f, d, k) {
    var x = k.css,
        B = k.defined,
        S = k.extend,
        D = k.pick,
        H = k.pInt,
        t = f.isFirefox;
    S(d.prototype, {
      htmlCss: function htmlCss(d) {
        var f = "SPAN" === this.element.tagName && d && "width" in d,
            t = D(f && d.width, void 0);

        if (f) {
          delete d.width;
          this.textWidth = t;
          var g = !0;
        }

        d && "ellipsis" === d.textOverflow && (d.whiteSpace = "nowrap", d.overflow = "hidden");
        this.styles = S(this.styles, d);
        x(this.element, d);
        g && this.htmlUpdateTransform();
        return this;
      },
      htmlGetBBox: function htmlGetBBox() {
        var d = this.element;
        return {
          x: d.offsetLeft,
          y: d.offsetTop,
          width: d.offsetWidth,
          height: d.offsetHeight
        };
      },
      htmlUpdateTransform: function htmlUpdateTransform() {
        if (this.added) {
          var d = this.renderer,
              f = this.element,
              t = this.translateX || 0,
              g = this.translateY || 0,
              y = this.x || 0,
              c = this.y || 0,
              q = this.textAlign || "left",
              n = {
            left: 0,
            center: .5,
            right: 1
          }[q],
              A = this.styles,
              M = A && A.whiteSpace;
          x(f, {
            marginLeft: t,
            marginTop: g
          });
          !d.styledMode && this.shadows && this.shadows.forEach(function (e) {
            x(e, {
              marginLeft: t + 1,
              marginTop: g + 1
            });
          });
          this.inverted && [].forEach.call(f.childNodes, function (e) {
            d.invertChild(e, f);
          });

          if ("SPAN" === f.tagName) {
            A = this.rotation;
            var z = this.textWidth && H(this.textWidth),
                m = [A, q, f.innerHTML, this.textWidth, this.textAlign].join(),
                r;
            (r = z !== this.oldTextWidth) && !(r = z > this.oldTextWidth) && ((r = this.textPxLength) || (x(f, {
              width: "",
              whiteSpace: M || "nowrap"
            }), r = f.offsetWidth), r = r > z);
            r && (/[ \-]/.test(f.textContent || f.innerText) || "ellipsis" === f.style.textOverflow) ? (x(f, {
              width: z + "px",
              display: "block",
              whiteSpace: M || "normal"
            }), this.oldTextWidth = z, this.hasBoxWidthChanged = !0) : this.hasBoxWidthChanged = !1;
            m !== this.cTT && (M = d.fontMetrics(f.style.fontSize, f).b, !B(A) || A === (this.oldRotation || 0) && q === this.oldAlign || this.setSpanRotation(A, n, M), this.getSpanCorrection(!B(A) && this.textPxLength || f.offsetWidth, M, n, A, q));
            x(f, {
              left: y + (this.xCorr || 0) + "px",
              top: c + (this.yCorr || 0) + "px"
            });
            this.cTT = m;
            this.oldRotation = A;
            this.oldAlign = q;
          }
        } else this.alignOnAdd = !0;
      },
      setSpanRotation: function setSpanRotation(d, f, k) {
        var g = {},
            l = this.renderer.getTransformKey();
        g[l] = g.transform = "rotate(" + d + "deg)";
        g[l + (t ? "Origin" : "-origin")] = g.transformOrigin = 100 * f + "% " + k + "px";
        x(this.element, g);
      },
      getSpanCorrection: function getSpanCorrection(d, f, t) {
        this.xCorr = -d * t;
        this.yCorr = -f;
      }
    });
    return d;
  });
  P(k, "Core/Renderer/HTML/HTMLRenderer.js", [k["Core/Globals.js"], k["Core/Renderer/HTML/AST.js"], k["Core/Renderer/SVG/SVGElement.js"], k["Core/Renderer/SVG/SVGRenderer.js"], k["Core/Utilities.js"]], function (f, d, k, x, B) {
    var S = f.isFirefox,
        D = f.isMS,
        H = f.isWebKit,
        t = f.win,
        C = B.attr,
        l = B.createElement,
        E = B.extend,
        g = B.pick;
    E(x.prototype, {
      getTransformKey: function getTransformKey() {
        return D && !/Edge/.test(t.navigator.userAgent) ? "-ms-transform" : H ? "-webkit-transform" : S ? "MozTransform" : t.opera ? "-o-transform" : "";
      },
      html: function html(f, c, q) {
        var n = this.createElement("span"),
            A = n.element,
            M = n.renderer,
            z = M.isSVG,
            m = function m(c, e) {
          ["opacity", "visibility"].forEach(function (h) {
            c[h + "Setter"] = function (a, b, g) {
              var m = c.div ? c.div.style : e;
              k.prototype[h + "Setter"].call(this, a, b, g);
              m && (m[b] = a);
            };
          });
          c.addedSetters = !0;
        };

        n.textSetter = function (c) {
          c !== this.textStr && (delete this.bBox, delete this.oldTextWidth, d.setElementHTML(this.element, g(c, "")), this.textStr = c, n.doTransform = !0);
        };

        z && m(n, n.element.style);

        n.xSetter = n.ySetter = n.alignSetter = n.rotationSetter = function (c, e) {
          "align" === e ? n.alignValue = n.textAlign = c : n[e] = c;
          n.doTransform = !0;
        };

        n.afterSetters = function () {
          this.doTransform && (this.htmlUpdateTransform(), this.doTransform = !1);
        };

        n.attr({
          text: f,
          x: Math.round(c),
          y: Math.round(q)
        }).css({
          position: "absolute"
        });
        M.styledMode || n.css({
          fontFamily: this.style.fontFamily,
          fontSize: this.style.fontSize
        });
        A.style.whiteSpace = "nowrap";
        n.css = n.htmlCss;
        z && (n.add = function (c) {
          var e = M.box.parentNode,
              h = [];

          if (this.parentGroup = c) {
            var a = c.div;

            if (!a) {
              for (; c;) {
                h.push(c), c = c.parentGroup;
              }

              h.reverse().forEach(function (b) {
                function c(a, e) {
                  b[e] = a;
                  "translateX" === e ? q.left = a + "px" : q.top = a + "px";
                  b.doTransform = !0;
                }

                var g = C(b.element, "class"),
                    d = b.styles || {};
                a = b.div = b.div || l("div", g ? {
                  className: g
                } : void 0, {
                  position: "absolute",
                  left: (b.translateX || 0) + "px",
                  top: (b.translateY || 0) + "px",
                  display: b.display,
                  opacity: b.opacity,
                  cursor: d.cursor,
                  pointerEvents: d.pointerEvents
                }, a || e);
                var q = a.style;
                E(b, {
                  classSetter: function (a) {
                    return function (b) {
                      this.element.setAttribute("class", b);
                      a.className = b;
                    };
                  }(a),
                  on: function on() {
                    h[0].div && n.on.apply({
                      element: h[0].div
                    }, arguments);
                    return b;
                  },
                  translateXSetter: c,
                  translateYSetter: c
                });
                b.addedSetters || m(b);
              });
            }
          } else a = e;

          a.appendChild(A);
          n.added = !0;
          n.alignOnAdd && n.htmlUpdateTransform();
          return n;
        });
        return n;
      }
    });
    return x;
  });
  P(k, "Core/Time.js", [k["Core/Globals.js"], k["Core/Utilities.js"]], function (f, d) {
    var k = f.win,
        x = d.defined,
        B = d.error,
        G = d.extend,
        D = d.isObject,
        H = d.merge,
        t = d.objectEach,
        C = d.pad,
        l = d.pick,
        E = d.splat,
        g = d.timeUnits;
    "";

    d = function () {
      function d(c) {
        this.options = {};
        this.variableTimezone = this.useUTC = !1;
        this.Date = k.Date;
        this.getTimezoneOffset = this.timezoneOffsetFunction();
        this.update(c);
      }

      d.prototype.get = function (c, g) {
        if (this.variableTimezone || this.timezoneOffset) {
          var d = g.getTime(),
              q = d - this.getTimezoneOffset(g);
          g.setTime(q);
          c = g["getUTC" + c]();
          g.setTime(d);
          return c;
        }

        return this.useUTC ? g["getUTC" + c]() : g["get" + c]();
      };

      d.prototype.set = function (c, g, d) {
        if (this.variableTimezone || this.timezoneOffset) {
          if ("Milliseconds" === c || "Seconds" === c || "Minutes" === c && 0 === this.getTimezoneOffset(g) % 36E5) return g["setUTC" + c](d);
          var n = this.getTimezoneOffset(g);
          n = g.getTime() - n;
          g.setTime(n);
          g["setUTC" + c](d);
          c = this.getTimezoneOffset(g);
          n = g.getTime() + c;
          return g.setTime(n);
        }

        return this.useUTC ? g["setUTC" + c](d) : g["set" + c](d);
      };

      d.prototype.update = function (c) {
        var g = l(c && c.useUTC, !0);
        this.options = c = H(!0, this.options || {}, c);
        this.Date = c.Date || k.Date || Date;
        this.timezoneOffset = (this.useUTC = g) && c.timezoneOffset;
        this.getTimezoneOffset = this.timezoneOffsetFunction();
        this.variableTimezone = g && !(!c.getTimezoneOffset && !c.timezone);
      };

      d.prototype.makeTime = function (c, g, d, A, M, z) {
        if (this.useUTC) {
          var m = this.Date.UTC.apply(0, arguments);
          var n = this.getTimezoneOffset(m);
          m += n;
          var e = this.getTimezoneOffset(m);
          n !== e ? m += e - n : n - 36E5 !== this.getTimezoneOffset(m - 36E5) || f.isSafari || (m -= 36E5);
        } else m = new this.Date(c, g, l(d, 1), l(A, 0), l(M, 0), l(z, 0)).getTime();

        return m;
      };

      d.prototype.timezoneOffsetFunction = function () {
        var c = this,
            g = this.options,
            d = g.moment || k.moment;
        if (!this.useUTC) return function (c) {
          return 6E4 * new Date(c.toString()).getTimezoneOffset();
        };

        if (g.timezone) {
          if (d) return function (c) {
            return 6E4 * -d.tz(c, g.timezone).utcOffset();
          };
          B(25);
        }

        return this.useUTC && g.getTimezoneOffset ? function (c) {
          return 6E4 * g.getTimezoneOffset(c.valueOf());
        } : function () {
          return 6E4 * (c.timezoneOffset || 0);
        };
      };

      d.prototype.dateFormat = function (c, g, d) {
        var n;
        if (!x(g) || isNaN(g)) return (null === (n = f.defaultOptions.lang) || void 0 === n ? void 0 : n.invalidDate) || "";
        c = l(c, "%Y-%m-%d %H:%M:%S");
        var q = this;
        n = new this.Date(g);
        var z = this.get("Hours", n),
            m = this.get("Day", n),
            r = this.get("Date", n),
            e = this.get("Month", n),
            h = this.get("FullYear", n),
            a = f.defaultOptions.lang,
            b = null === a || void 0 === a ? void 0 : a.weekdays,
            w = null === a || void 0 === a ? void 0 : a.shortWeekdays;
        n = G({
          a: w ? w[m] : b[m].substr(0, 3),
          A: b[m],
          d: C(r),
          e: C(r, 2, " "),
          w: m,
          b: a.shortMonths[e],
          B: a.months[e],
          m: C(e + 1),
          o: e + 1,
          y: h.toString().substr(2, 2),
          Y: h,
          H: C(z),
          k: z,
          I: C(z % 12 || 12),
          l: z % 12 || 12,
          M: C(this.get("Minutes", n)),
          p: 12 > z ? "AM" : "PM",
          P: 12 > z ? "am" : "pm",
          S: C(n.getSeconds()),
          L: C(Math.floor(g % 1E3), 3)
        }, f.dateFormats);
        t(n, function (a, b) {
          for (; -1 !== c.indexOf("%" + b);) {
            c = c.replace("%" + b, "function" === typeof a ? a.call(q, g) : a);
          }
        });
        return d ? c.substr(0, 1).toUpperCase() + c.substr(1) : c;
      };

      d.prototype.resolveDTLFormat = function (c) {
        return D(c, !0) ? c : (c = E(c), {
          main: c[0],
          from: c[1],
          to: c[2]
        });
      };

      d.prototype.getTimeTicks = function (c, d, n, f) {
        var q = this,
            A = [],
            m = {};
        var r = new q.Date(d);
        var e = c.unitRange,
            h = c.count || 1,
            a;
        f = l(f, 1);

        if (x(d)) {
          q.set("Milliseconds", r, e >= g.second ? 0 : h * Math.floor(q.get("Milliseconds", r) / h));
          e >= g.second && q.set("Seconds", r, e >= g.minute ? 0 : h * Math.floor(q.get("Seconds", r) / h));
          e >= g.minute && q.set("Minutes", r, e >= g.hour ? 0 : h * Math.floor(q.get("Minutes", r) / h));
          e >= g.hour && q.set("Hours", r, e >= g.day ? 0 : h * Math.floor(q.get("Hours", r) / h));
          e >= g.day && q.set("Date", r, e >= g.month ? 1 : Math.max(1, h * Math.floor(q.get("Date", r) / h)));

          if (e >= g.month) {
            q.set("Month", r, e >= g.year ? 0 : h * Math.floor(q.get("Month", r) / h));
            var b = q.get("FullYear", r);
          }

          e >= g.year && q.set("FullYear", r, b - b % h);
          e === g.week && (b = q.get("Day", r), q.set("Date", r, q.get("Date", r) - b + f + (b < f ? -7 : 0)));
          b = q.get("FullYear", r);
          f = q.get("Month", r);
          var w = q.get("Date", r),
              J = q.get("Hours", r);
          d = r.getTime();
          !q.variableTimezone && q.useUTC || !x(n) || (a = n - d > 4 * g.month || q.getTimezoneOffset(d) !== q.getTimezoneOffset(n));
          d = r.getTime();

          for (r = 1; d < n;) {
            A.push(d), d = e === g.year ? q.makeTime(b + r * h, 0) : e === g.month ? q.makeTime(b, f + r * h) : !a || e !== g.day && e !== g.week ? a && e === g.hour && 1 < h ? q.makeTime(b, f, w, J + r * h) : d + e * h : q.makeTime(b, f, w + r * h * (e === g.day ? 1 : 7)), r++;
          }

          A.push(d);
          e <= g.hour && 1E4 > A.length && A.forEach(function (a) {
            0 === a % 18E5 && "000000000" === q.dateFormat("%H%M%S%L", a) && (m[a] = "day");
          });
        }

        A.info = G(c, {
          higherRanks: m,
          totalRange: e * h
        });
        return A;
      };

      return d;
    }();

    f.Time = d;
    return f.Time;
  });
  P(k, "Core/Options.js", [k["Core/Globals.js"], k["Core/Color/Color.js"], k["Core/Color/Palette.js"], k["Core/Time.js"], k["Core/Utilities.js"]], function (f, d, k, x, B) {
    var G = f.isTouchDevice,
        D = f.svg;
    d = d.parse;
    B = B.merge;
    "";
    f.defaultOptions = {
      colors: k.colors,
      symbols: ["circle", "diamond", "square", "triangle", "triangle-down"],
      lang: {
        loading: "Loading...",
        months: "January February March April May June July August September October November December".split(" "),
        shortMonths: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
        weekdays: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
        decimalPoint: ".",
        numericSymbols: "kMGTPE".split(""),
        resetZoom: "Reset zoom",
        resetZoomTitle: "Reset zoom level 1:1",
        thousandsSep: " "
      },
      global: {},
      time: {
        Date: void 0,
        getTimezoneOffset: void 0,
        timezone: void 0,
        timezoneOffset: 0,
        useUTC: !0
      },
      chart: {
        styledMode: !1,
        borderRadius: 0,
        colorCount: 10,
        defaultSeriesType: "line",
        ignoreHiddenSeries: !0,
        spacing: [10, 10, 15, 10],
        resetZoomButton: {
          theme: {
            zIndex: 6
          },
          position: {
            align: "right",
            x: -10,
            y: 10
          }
        },
        zoomBySingleTouch: !1,
        width: null,
        height: null,
        borderColor: k.highlightColor80,
        backgroundColor: k.backgroundColor,
        plotBorderColor: k.neutralColor20
      },
      title: {
        text: "Chart title",
        align: "center",
        margin: 15,
        widthAdjust: -44
      },
      subtitle: {
        text: "",
        align: "center",
        widthAdjust: -44
      },
      caption: {
        margin: 15,
        text: "",
        align: "left",
        verticalAlign: "bottom"
      },
      plotOptions: {},
      labels: {
        style: {
          position: "absolute",
          color: k.neutralColor80
        }
      },
      legend: {
        enabled: !0,
        align: "center",
        alignColumns: !0,
        layout: "horizontal",
        labelFormatter: function labelFormatter() {
          return this.name;
        },
        borderColor: k.neutralColor40,
        borderRadius: 0,
        navigation: {
          activeColor: k.highlightColor100,
          inactiveColor: k.neutralColor20
        },
        itemStyle: {
          color: k.neutralColor80,
          cursor: "pointer",
          fontSize: "12px",
          fontWeight: "bold",
          textOverflow: "ellipsis"
        },
        itemHoverStyle: {
          color: k.neutralColor100
        },
        itemHiddenStyle: {
          color: k.neutralColor20
        },
        shadow: !1,
        itemCheckboxStyle: {
          position: "absolute",
          width: "13px",
          height: "13px"
        },
        squareSymbol: !0,
        symbolPadding: 5,
        verticalAlign: "bottom",
        x: 0,
        y: 0,
        title: {
          style: {
            fontWeight: "bold"
          }
        }
      },
      loading: {
        labelStyle: {
          fontWeight: "bold",
          position: "relative",
          top: "45%"
        },
        style: {
          position: "absolute",
          backgroundColor: k.backgroundColor,
          opacity: .5,
          textAlign: "center"
        }
      },
      tooltip: {
        enabled: !0,
        animation: D,
        borderRadius: 3,
        dateTimeLabelFormats: {
          millisecond: "%A, %b %e, %H:%M:%S.%L",
          second: "%A, %b %e, %H:%M:%S",
          minute: "%A, %b %e, %H:%M",
          hour: "%A, %b %e, %H:%M",
          day: "%A, %b %e, %Y",
          week: "Week from %A, %b %e, %Y",
          month: "%B %Y",
          year: "%Y"
        },
        footerFormat: "",
        padding: 8,
        snap: G ? 25 : 10,
        headerFormat: '<span style="font-size: 10px">{point.key}</span><br/>',
        pointFormat: "<span style=\"color:{point.color}\">\u25CF</span> {series.name}: <b>{point.y}</b><br/>",
        backgroundColor: d(k.neutralColor3).setOpacity(.85).get(),
        borderWidth: 1,
        shadow: !0,
        style: {
          color: k.neutralColor80,
          cursor: "default",
          fontSize: "12px",
          whiteSpace: "nowrap"
        }
      },
      credits: {
        enabled: !0,
        href: "https://www.highcharts.com?credits",
        position: {
          align: "right",
          x: -10,
          verticalAlign: "bottom",
          y: -5
        },
        style: {
          cursor: "pointer",
          color: k.neutralColor40,
          fontSize: "9px"
        },
        text: "Highcharts.com"
      }
    };
    f.defaultOptions.chart.styledMode = !1;
    "";
    f.time = new x(B(f.defaultOptions.global, f.defaultOptions.time));

    f.dateFormat = function (d, t, k) {
      return f.time.dateFormat(d, t, k);
    };

    return {
      dateFormat: f.dateFormat,
      defaultOptions: f.defaultOptions,
      time: f.time
    };
  });
  P(k, "Core/Axis/Tick.js", [k["Core/Globals.js"], k["Core/Utilities.js"]], function (f, d) {
    var k = f.deg2rad,
        x = d.clamp,
        B = d.correctFloat,
        G = d.defined,
        D = d.destroyObjectProperties,
        H = d.extend,
        t = d.fireEvent,
        C = d.isNumber,
        l = d.merge,
        E = d.objectEach,
        g = d.pick;
    "";

    d = function () {
      function d(c, g, d, f, l) {
        this.isNewLabel = this.isNew = !0;
        this.axis = c;
        this.pos = g;
        this.type = d || "";
        this.parameters = l || {};
        this.tickmarkOffset = this.parameters.tickmarkOffset;
        this.options = this.parameters.options;
        t(this, "init");
        d || f || this.addLabel();
      }

      d.prototype.addLabel = function () {
        var c = this,
            d = c.axis,
            n = d.options,
            f = d.chart,
            l = d.categories,
            z = d.logarithmic,
            m = d.names,
            r = c.pos,
            e = g(c.options && c.options.labels, n.labels),
            h = d.tickPositions,
            a = r === h[0],
            b = r === h[h.length - 1];
        m = this.parameters.category || (l ? g(l[r], m[r], r) : r);
        var w = c.label;
        l = (!e.step || 1 === e.step) && 1 === d.tickInterval;
        h = h.info;
        var J, O;

        if (d.dateTime && h) {
          var F = f.time.resolveDTLFormat(n.dateTimeLabelFormats[!n.grid && h.higherRanks[r] || h.unitName]);
          var N = F.main;
        }

        c.isFirst = a;
        c.isLast = b;
        c.formatCtx = {
          axis: d,
          chart: f,
          isFirst: a,
          isLast: b,
          dateTimeLabelFormat: N,
          tickPositionInfo: h,
          value: z ? B(z.lin2log(m)) : m,
          pos: r
        };
        n = d.labelFormatter.call(c.formatCtx, this.formatCtx);
        if (O = F && F.list) c.shortenLabel = function () {
          for (J = 0; J < O.length; J++) {
            if (w.attr({
              text: d.labelFormatter.call(H(c.formatCtx, {
                dateTimeLabelFormat: O[J]
              }))
            }), w.getBBox().width < d.getSlotWidth(c) - 2 * g(e.padding, 5)) return;
          }

          w.attr({
            text: ""
          });
        };
        l && d._addedPlotLB && c.moveLabel(n, e);
        G(w) || c.movedLabel ? w && w.textStr !== n && !l && (!w.textWidth || e.style && e.style.width || w.styles.width || w.css({
          width: null
        }), w.attr({
          text: n
        }), w.textPxLength = w.getBBox().width) : (c.label = w = c.createLabel({
          x: 0,
          y: 0
        }, n, e), c.rotation = 0);
      };

      d.prototype.createLabel = function (c, g, d) {
        var n = this.axis,
            f = n.chart;
        if (c = G(g) && d.enabled ? f.renderer.text(g, c.x, c.y, d.useHTML).add(n.labelGroup) : null) f.styledMode || c.css(l(d.style)), c.textPxLength = c.getBBox().width;
        return c;
      };

      d.prototype.destroy = function () {
        D(this, this.axis);
      };

      d.prototype.getPosition = function (c, g, d, f) {
        var n = this.axis,
            q = n.chart,
            m = f && q.oldChartHeight || q.chartHeight;
        c = {
          x: c ? B(n.translate(g + d, null, null, f) + n.transB) : n.left + n.offset + (n.opposite ? (f && q.oldChartWidth || q.chartWidth) - n.right - n.left : 0),
          y: c ? m - n.bottom + n.offset - (n.opposite ? n.height : 0) : B(m - n.translate(g + d, null, null, f) - n.transB)
        };
        c.y = x(c.y, -1E5, 1E5);
        t(this, "afterGetPosition", {
          pos: c
        });
        return c;
      };

      d.prototype.getLabelPosition = function (c, g, d, f, l, z, m, r) {
        var e = this.axis,
            h = e.transA,
            a = e.isLinked && e.linkedParent ? e.linkedParent.reversed : e.reversed,
            b = e.staggerLines,
            w = e.tickRotCorr || {
          x: 0,
          y: 0
        },
            n = l.y,
            q = f || e.reserveSpaceDefault ? 0 : -e.labelOffset * ("center" === e.labelAlign ? .5 : 1),
            F = {};
        G(n) || (n = 0 === e.side ? d.rotation ? -8 : -d.getBBox().height : 2 === e.side ? w.y + 8 : Math.cos(d.rotation * k) * (w.y - d.getBBox(!1, 0).height / 2));
        c = c + l.x + q + w.x - (z && f ? z * h * (a ? -1 : 1) : 0);
        g = g + n - (z && !f ? z * h * (a ? 1 : -1) : 0);
        b && (d = m / (r || 1) % b, e.opposite && (d = b - d - 1), g += e.labelOffset / b * d);
        F.x = c;
        F.y = Math.round(g);
        t(this, "afterGetLabelPosition", {
          pos: F,
          tickmarkOffset: z,
          index: m
        });
        return F;
      };

      d.prototype.getLabelSize = function () {
        return this.label ? this.label.getBBox()[this.axis.horiz ? "height" : "width"] : 0;
      };

      d.prototype.getMarkPath = function (c, g, d, f, l, z) {
        return z.crispLine([["M", c, g], ["L", c + (l ? 0 : -d), g + (l ? d : 0)]], f);
      };

      d.prototype.handleOverflow = function (c) {
        var d = this.axis,
            f = d.options.labels,
            l = c.x,
            t = d.chart.chartWidth,
            z = d.chart.spacing,
            m = g(d.labelLeft, Math.min(d.pos, z[3]));
        z = g(d.labelRight, Math.max(d.isRadial ? 0 : d.pos + d.len, t - z[1]));
        var r = this.label,
            e = this.rotation,
            h = {
          left: 0,
          center: .5,
          right: 1
        }[d.labelAlign || r.attr("align")],
            a = r.getBBox().width,
            b = d.getSlotWidth(this),
            w = b,
            J = 1,
            O,
            F = {};
        if (e || "justify" !== g(f.overflow, "justify")) 0 > e && l - h * a < m ? O = Math.round(l / Math.cos(e * k) - m) : 0 < e && l + h * a > z && (O = Math.round((t - l) / Math.cos(e * k)));else if (t = l + (1 - h) * a, l - h * a < m ? w = c.x + w * (1 - h) - m : t > z && (w = z - c.x + w * h, J = -1), w = Math.min(b, w), w < b && "center" === d.labelAlign && (c.x += J * (b - w - h * (b - Math.min(a, w)))), a > w || d.autoRotation && (r.styles || {}).width) O = w;
        O && (this.shortenLabel ? this.shortenLabel() : (F.width = Math.floor(O) + "px", (f.style || {}).textOverflow || (F.textOverflow = "ellipsis"), r.css(F)));
      };

      d.prototype.moveLabel = function (c, g) {
        var d = this,
            f = d.label,
            q = !1,
            l = d.axis,
            m = l.reversed;
        f && f.textStr === c ? (d.movedLabel = f, q = !0, delete d.label) : E(l.ticks, function (e) {
          q || e.isNew || e === d || !e.label || e.label.textStr !== c || (d.movedLabel = e.label, q = !0, e.labelPos = d.movedLabel.xy, delete e.label);
        });

        if (!q && (d.labelPos || f)) {
          var r = d.labelPos || f.xy;
          f = l.horiz ? m ? 0 : l.width + l.left : r.x;
          l = l.horiz ? r.y : m ? l.width + l.left : 0;
          d.movedLabel = d.createLabel({
            x: f,
            y: l
          }, c, g);
          d.movedLabel && d.movedLabel.attr({
            opacity: 0
          });
        }
      };

      d.prototype.render = function (c, d, f) {
        var n = this.axis,
            q = n.horiz,
            l = this.pos,
            m = g(this.tickmarkOffset, n.tickmarkOffset);
        l = this.getPosition(q, l, m, d);
        m = l.x;
        var r = l.y;
        n = q && m === n.pos + n.len || !q && r === n.pos ? -1 : 1;
        f = g(f, 1);
        this.isActive = !0;
        this.renderGridLine(d, f, n);
        this.renderMark(l, f, n);
        this.renderLabel(l, d, f, c);
        this.isNew = !1;
        t(this, "afterRender");
      };

      d.prototype.renderGridLine = function (c, d, f) {
        var n = this.axis,
            q = n.options,
            l = this.gridLine,
            m = {},
            r = this.pos,
            e = this.type,
            h = g(this.tickmarkOffset, n.tickmarkOffset),
            a = n.chart.renderer,
            b = e ? e + "Grid" : "grid",
            w = q[b + "LineWidth"],
            J = q[b + "LineColor"];
        q = q[b + "LineDashStyle"];
        l || (n.chart.styledMode || (m.stroke = J, m["stroke-width"] = w, q && (m.dashstyle = q)), e || (m.zIndex = 1), c && (d = 0), this.gridLine = l = a.path().attr(m).addClass("highcharts-" + (e ? e + "-" : "") + "grid-line").add(n.gridGroup));
        if (l && (f = n.getPlotLinePath({
          value: r + h,
          lineWidth: l.strokeWidth() * f,
          force: "pass",
          old: c
        }))) l[c || this.isNew ? "attr" : "animate"]({
          d: f,
          opacity: d
        });
      };

      d.prototype.renderMark = function (c, d, f) {
        var n = this.axis,
            q = n.options,
            l = n.chart.renderer,
            m = this.type,
            r = m ? m + "Tick" : "tick",
            e = n.tickSize(r),
            h = this.mark,
            a = !h,
            b = c.x;
        c = c.y;
        var w = g(q[r + "Width"], !m && n.isXAxis ? 1 : 0);
        q = q[r + "Color"];
        e && (n.opposite && (e[0] = -e[0]), a && (this.mark = h = l.path().addClass("highcharts-" + (m ? m + "-" : "") + "tick").add(n.axisGroup), n.chart.styledMode || h.attr({
          stroke: q,
          "stroke-width": w
        })), h[a ? "attr" : "animate"]({
          d: this.getMarkPath(b, c, e[0], h.strokeWidth() * f, n.horiz, l),
          opacity: d
        }));
      };

      d.prototype.renderLabel = function (c, d, f, l) {
        var n = this.axis,
            q = n.horiz,
            m = n.options,
            r = this.label,
            e = m.labels,
            h = e.step;
        n = g(this.tickmarkOffset, n.tickmarkOffset);
        var a = !0,
            b = c.x;
        c = c.y;
        r && C(b) && (r.xy = c = this.getLabelPosition(b, c, r, q, e, n, l, h), this.isFirst && !this.isLast && !g(m.showFirstLabel, 1) || this.isLast && !this.isFirst && !g(m.showLastLabel, 1) ? a = !1 : !q || e.step || e.rotation || d || 0 === f || this.handleOverflow(c), h && l % h && (a = !1), a && C(c.y) ? (c.opacity = f, r[this.isNewLabel ? "attr" : "animate"](c), this.isNewLabel = !1) : (r.attr("y", -9999), this.isNewLabel = !0));
      };

      d.prototype.replaceMovedLabel = function () {
        var c = this.label,
            g = this.axis,
            d = g.reversed;

        if (c && !this.isNew) {
          var f = g.horiz ? d ? g.left : g.width + g.left : c.xy.x;
          d = g.horiz ? c.xy.y : d ? g.width + g.top : g.top;
          c.animate({
            x: f,
            y: d,
            opacity: 0
          }, void 0, c.destroy);
          delete this.label;
        }

        g.isDirty = !0;
        this.label = this.movedLabel;
        delete this.movedLabel;
      };

      return d;
    }();

    f.Tick = d;
    return f.Tick;
  });
  P(k, "Core/Axis/Axis.js", [k["Core/Animation/AnimationUtilities.js"], k["Core/Color/Color.js"], k["Core/Globals.js"], k["Core/Color/Palette.js"], k["Core/Options.js"], k["Core/Axis/Tick.js"], k["Core/Utilities.js"]], function (f, d, k, x, B, G, D) {
    var H = f.animObject,
        t = B.defaultOptions,
        C = D.addEvent,
        l = D.arrayMax,
        E = D.arrayMin,
        g = D.clamp,
        y = D.correctFloat,
        c = D.defined,
        q = D.destroyObjectProperties,
        n = D.erase,
        A = D.error,
        M = D.extend,
        z = D.fireEvent,
        m = D.format,
        r = D.getMagnitude,
        e = D.isArray,
        h = D.isFunction,
        a = D.isNumber,
        b = D.isString,
        w = D.merge,
        J = D.normalizeTickInterval,
        O = D.objectEach,
        F = D.pick,
        N = D.relativeLength,
        R = D.removeEvent,
        Q = D.splat,
        T = D.syncTimeout;
    "";
    var v = k.deg2rad;

    f = function () {
      function f(a, b) {
        this.zoomEnabled = this.width = this.visible = this.userOptions = this.translationSlope = this.transB = this.transA = this.top = this.ticks = this.tickRotCorr = this.tickPositions = this.tickmarkOffset = this.tickInterval = this.tickAmount = this.side = this.series = this.right = this.positiveValuesOnly = this.pos = this.pointRangePadding = this.pointRange = this.plotLinesAndBandsGroups = this.plotLinesAndBands = this.paddedTicks = this.overlap = this.options = this.offset = this.names = this.minPixelPadding = this.minorTicks = this.minorTickInterval = this.min = this.maxLabelLength = this.max = this.len = this.left = this.labelFormatter = this.labelEdge = this.isLinked = this.height = this.hasVisibleSeries = this.hasNames = this.coll = this.closestPointRange = this.chart = this.categories = this.bottom = this.alternateBands = void 0;
        this.init(a, b);
      }

      f.prototype.init = function (a, b) {
        var e = b.isX,
            p = this;
        p.chart = a;
        p.horiz = a.inverted && !p.isZAxis ? !e : e;
        p.isXAxis = e;
        p.coll = p.coll || (e ? "xAxis" : "yAxis");
        z(this, "init", {
          userOptions: b
        });
        p.opposite = F(b.opposite, p.opposite);
        p.side = F(b.side, p.side, p.horiz ? p.opposite ? 0 : 2 : p.opposite ? 1 : 3);
        p.setOptions(b);
        var u = this.options,
            g = u.type;
        p.labelFormatter = u.labels.formatter || p.defaultLabelFormatter;
        p.userOptions = b;
        p.minPixelPadding = 0;
        p.reversed = F(u.reversed, p.reversed);
        p.visible = !1 !== u.visible;
        p.zoomEnabled = !1 !== u.zoomEnabled;
        p.hasNames = "category" === g || !0 === u.categories;
        p.categories = u.categories || p.hasNames;
        p.names || (p.names = [], p.names.keys = {});
        p.plotLinesAndBandsGroups = {};
        p.positiveValuesOnly = !!p.logarithmic;
        p.isLinked = c(u.linkedTo);
        p.ticks = {};
        p.labelEdge = [];
        p.minorTicks = {};
        p.plotLinesAndBands = [];
        p.alternateBands = {};
        p.len = 0;
        p.minRange = p.userMinRange = u.minRange || u.maxZoom;
        p.range = u.range;
        p.offset = u.offset || 0;
        p.max = null;
        p.min = null;
        p.crosshair = F(u.crosshair, Q(a.options.tooltip.crosshairs)[e ? 0 : 1], !1);
        b = p.options.events;
        -1 === a.axes.indexOf(p) && (e ? a.axes.splice(a.xAxis.length, 0, p) : a.axes.push(p), a[p.coll].push(p));
        p.series = p.series || [];
        a.inverted && !p.isZAxis && e && "undefined" === typeof p.reversed && (p.reversed = !0);
        p.labelRotation = p.options.labels.rotation;
        O(b, function (a, b) {
          h(a) && C(p, b, a);
        });
        z(this, "afterInit");
      };

      f.prototype.setOptions = function (a) {
        this.options = w(f.defaultOptions, "yAxis" === this.coll && f.defaultYAxisOptions, [f.defaultTopAxisOptions, f.defaultRightAxisOptions, f.defaultBottomAxisOptions, f.defaultLeftAxisOptions][this.side], w(t[this.coll], a));
        z(this, "afterSetOptions", {
          userOptions: a
        });
      };

      f.prototype.defaultLabelFormatter = function () {
        var b = this.axis,
            e = a(this.value) ? this.value : NaN,
            c = b.chart.time,
            g = b.categories,
            u = this.dateTimeLabelFormat,
            h = t.lang,
            d = h.numericSymbols;
        h = h.numericSymbolMagnitude || 1E3;
        var f = d && d.length,
            w = b.options.labels.format;
        b = b.logarithmic ? Math.abs(e) : b.tickInterval;
        var n = this.chart,
            q = n.numberFormatter;
        if (w) var r = m(w, this, n);else if (g) r = "" + this.value;else if (u) r = c.dateFormat(u, e);else if (f && 1E3 <= b) for (; f-- && "undefined" === typeof r;) {
          c = Math.pow(h, f + 1), b >= c && 0 === 10 * e % c && null !== d[f] && 0 !== e && (r = q(e / c, -1) + d[f]);
        }
        "undefined" === typeof r && (r = 1E4 <= Math.abs(e) ? q(e, -1) : q(e, -1, void 0, ""));
        return r;
      };

      f.prototype.getSeriesExtremes = function () {
        var b = this,
            e = b.chart,
            g;
        z(this, "getSeriesExtremes", null, function () {
          b.hasVisibleSeries = !1;
          b.dataMin = b.dataMax = b.threshold = null;
          b.softThreshold = !b.isXAxis;
          b.stacking && b.stacking.buildStacks();
          b.series.forEach(function (p) {
            if (p.visible || !e.options.chart.ignoreHiddenSeries) {
              var u = p.options,
                  h = u.threshold;
              b.hasVisibleSeries = !0;
              b.positiveValuesOnly && 0 >= h && (h = null);

              if (b.isXAxis) {
                if (u = p.xData, u.length) {
                  u = b.logarithmic ? u.filter(b.validatePositiveValue) : u;
                  g = p.getXExtremes(u);
                  var d = g.min;
                  var f = g.max;
                  a(d) || d instanceof Date || (u = u.filter(a), g = p.getXExtremes(u), d = g.min, f = g.max);
                  u.length && (b.dataMin = Math.min(F(b.dataMin, d), d), b.dataMax = Math.max(F(b.dataMax, f), f));
                }
              } else if (p = p.applyExtremes(), a(p.dataMin) && (d = p.dataMin, b.dataMin = Math.min(F(b.dataMin, d), d)), a(p.dataMax) && (f = p.dataMax, b.dataMax = Math.max(F(b.dataMax, f), f)), c(h) && (b.threshold = h), !u.softThreshold || b.positiveValuesOnly) b.softThreshold = !1;
            }
          });
        });
        z(this, "afterGetSeriesExtremes");
      };

      f.prototype.translate = function (b, e, c, g, u, h) {
        var p = this.linkedParent || this,
            d = 1,
            f = 0,
            m = g && p.old ? p.old.transA : p.transA;
        g = g && p.old ? p.old.min : p.min;
        var w = p.minPixelPadding;
        u = (p.isOrdinal || p.brokenAxis && p.brokenAxis.hasBreaks || p.logarithmic && u) && p.lin2val;
        m || (m = p.transA);
        c && (d *= -1, f = p.len);
        p.reversed && (d *= -1, f -= d * (p.sector || p.len));
        e ? (b = (b * d + f - w) / m + g, u && (b = p.lin2val(b))) : (u && (b = p.val2lin(b)), b = a(g) ? d * (b - g) * m + f + d * w + (a(h) ? m * h : 0) : void 0);
        return b;
      };

      f.prototype.toPixels = function (a, b) {
        return this.translate(a, !1, !this.horiz, null, !0) + (b ? 0 : this.pos);
      };

      f.prototype.toValue = function (a, b) {
        return this.translate(a - (b ? 0 : this.pos), !0, !this.horiz, null, !0);
      };

      f.prototype.getPlotLinePath = function (b) {
        function e(a, b, e) {
          if ("pass" !== n && a < b || a > e) n ? a = g(a, b, e) : Z = !0;
          return a;
        }

        var c = this,
            p = c.chart,
            u = c.left,
            h = c.top,
            d = b.old,
            f = b.value,
            m = b.translatedValue,
            w = b.lineWidth,
            n = b.force,
            r,
            q,
            l,
            J,
            v = d && p.oldChartHeight || p.chartHeight,
            V = d && p.oldChartWidth || p.chartWidth,
            Z,
            N = c.transB;
        b = {
          value: f,
          lineWidth: w,
          old: d,
          force: n,
          acrossPanes: b.acrossPanes,
          translatedValue: m
        };
        z(this, "getPlotLinePath", b, function (b) {
          m = F(m, c.translate(f, null, null, d));
          m = g(m, -1E5, 1E5);
          r = l = Math.round(m + N);
          q = J = Math.round(v - m - N);
          a(m) ? c.horiz ? (q = h, J = v - c.bottom, r = l = e(r, u, u + c.width)) : (r = u, l = V - c.right, q = J = e(q, h, h + c.height)) : (Z = !0, n = !1);
          b.path = Z && !n ? null : p.renderer.crispLine([["M", r, q], ["L", l, J]], w || 1);
        });
        return b.path;
      };

      f.prototype.getLinearTickPositions = function (a, b, e) {
        var c = y(Math.floor(b / a) * a);
        e = y(Math.ceil(e / a) * a);
        var p = [],
            g;
        y(c + a) === c && (g = 20);
        if (this.single) return [b];

        for (b = c; b <= e;) {
          p.push(b);
          b = y(b + a, g);
          if (b === h) break;
          var h = b;
        }

        return p;
      };

      f.prototype.getMinorTickInterval = function () {
        var a = this.options;
        return !0 === a.minorTicks ? F(a.minorTickInterval, "auto") : !1 === a.minorTicks ? null : a.minorTickInterval;
      };

      f.prototype.getMinorTickPositions = function () {
        var a = this.options,
            b = this.tickPositions,
            e = this.minorTickInterval,
            c = [],
            u = this.pointRangePadding || 0,
            g = this.min - u;
        u = this.max + u;
        var h = u - g;

        if (h && h / e < this.len / 3) {
          var d = this.logarithmic;
          if (d) this.paddedTicks.forEach(function (a, b, p) {
            b && c.push.apply(c, d.getLogTickPositions(e, p[b - 1], p[b], !0));
          });else if (this.dateTime && "auto" === this.getMinorTickInterval()) c = c.concat(this.getTimeTicks(this.dateTime.normalizeTimeTickInterval(e), g, u, a.startOfWeek));else for (a = g + (b[0] - g) % e; a <= u && a !== c[0]; a += e) {
            c.push(a);
          }
        }

        0 !== c.length && this.trimTicks(c);
        return c;
      };

      f.prototype.adjustForMinRange = function () {
        var a = this.options,
            b = this.min,
            e = this.max,
            g = this.logarithmic,
            u = 0,
            h,
            d,
            f,
            m;
        this.isXAxis && "undefined" === typeof this.minRange && !g && (c(a.min) || c(a.max) ? this.minRange = null : (this.series.forEach(function (a) {
          f = a.xData;
          m = a.xIncrement ? 1 : f.length - 1;
          if (1 < f.length) for (h = m; 0 < h; h--) {
            if (d = f[h] - f[h - 1], !u || d < u) u = d;
          }
        }), this.minRange = Math.min(5 * u, this.dataMax - this.dataMin)));

        if (e - b < this.minRange) {
          var w = this.dataMax - this.dataMin >= this.minRange;
          var n = this.minRange;
          var r = (n - e + b) / 2;
          r = [b - r, F(a.min, b - r)];
          w && (r[2] = this.logarithmic ? this.logarithmic.log2lin(this.dataMin) : this.dataMin);
          b = l(r);
          e = [b + n, F(a.max, b + n)];
          w && (e[2] = g ? g.log2lin(this.dataMax) : this.dataMax);
          e = E(e);
          e - b < n && (r[0] = e - n, r[1] = F(a.min, e - n), b = l(r));
        }

        this.min = b;
        this.max = e;
      };

      f.prototype.getClosest = function () {
        var a;
        this.categories ? a = 1 : this.series.forEach(function (b) {
          var e = b.closestPointRange,
              p = b.visible || !b.chart.options.chart.ignoreHiddenSeries;
          !b.noSharedTooltip && c(e) && p && (a = c(a) ? Math.min(a, e) : e);
        });
        return a;
      };

      f.prototype.nameToX = function (a) {
        var b = e(this.categories),
            p = b ? this.categories : this.names,
            g = a.options.x;
        a.series.requireSorting = !1;
        c(g) || (g = !1 === this.options.uniqueNames ? a.series.autoIncrement() : b ? p.indexOf(a.name) : F(p.keys[a.name], -1));

        if (-1 === g) {
          if (!b) var u = p.length;
        } else u = g;

        "undefined" !== typeof u && (this.names[u] = a.name, this.names.keys[a.name] = u);
        return u;
      };

      f.prototype.updateNames = function () {
        var a = this,
            b = this.names;
        0 < b.length && (Object.keys(b.keys).forEach(function (a) {
          delete b.keys[a];
        }), b.length = 0, this.minRange = this.userMinRange, (this.series || []).forEach(function (b) {
          b.xIncrement = null;
          if (!b.points || b.isDirtyData) a.max = Math.max(a.max, b.xData.length - 1), b.processData(), b.generatePoints();
          b.data.forEach(function (e, c) {
            if (e && e.options && "undefined" !== typeof e.name) {
              var p = a.nameToX(e);
              "undefined" !== typeof p && p !== e.x && (e.x = p, b.xData[c] = p);
            }
          });
        }));
      };

      f.prototype.setAxisTranslation = function () {
        var a = this,
            e = a.max - a.min,
            c = a.axisPointRange || 0,
            g = 0,
            u = 0,
            h = a.linkedParent,
            d = !!a.categories,
            f = a.transA,
            m = a.isXAxis;

        if (m || d || c) {
          var w = a.getClosest();
          h ? (g = h.minPointOffset, u = h.pointRangePadding) : a.series.forEach(function (e) {
            var p = d ? 1 : m ? F(e.options.pointRange, w, 0) : a.axisPointRange || 0,
                h = e.options.pointPlacement;
            c = Math.max(c, p);
            if (!a.single || d) e = e.is("xrange") ? !m : m, g = Math.max(g, e && b(h) ? 0 : p / 2), u = Math.max(u, e && "on" === h ? 0 : p);
          });
          h = a.ordinal && a.ordinal.slope && w ? a.ordinal.slope / w : 1;
          a.minPointOffset = g *= h;
          a.pointRangePadding = u *= h;
          a.pointRange = Math.min(c, a.single && d ? 1 : e);
          m && (a.closestPointRange = w);
        }

        a.translationSlope = a.transA = f = a.staticScale || a.len / (e + u || 1);
        a.transB = a.horiz ? a.left : a.bottom;
        a.minPixelPadding = f * g;
        z(this, "afterSetAxisTranslation");
      };

      f.prototype.minFromRange = function () {
        return this.max - this.range;
      };

      f.prototype.setTickInterval = function (b) {
        var e = this,
            p = e.chart,
            g = e.logarithmic,
            u = e.options,
            h = e.isXAxis,
            d = e.isLinked,
            f = u.maxPadding,
            m = u.minPadding,
            w = u.tickInterval,
            n = u.tickPixelInterval,
            q = e.categories,
            l = a(e.threshold) ? e.threshold : null,
            v = e.softThreshold;
        e.dateTime || q || d || this.getTickAmount();
        var N = F(e.userMin, u.min);
        var O = F(e.userMax, u.max);

        if (d) {
          e.linkedParent = p[e.coll][u.linkedTo];
          var V = e.linkedParent.getExtremes();
          e.min = F(V.min, V.dataMin);
          e.max = F(V.max, V.dataMax);
          u.type !== e.linkedParent.options.type && A(11, 1, p);
        } else {
          if (v && c(l)) if (e.dataMin >= l) V = l, m = 0;else if (e.dataMax <= l) {
            var Z = l;
            f = 0;
          }
          e.min = F(N, V, e.dataMin);
          e.max = F(O, Z, e.dataMax);
        }

        g && (e.positiveValuesOnly && !b && 0 >= Math.min(e.min, F(e.dataMin, e.min)) && A(10, 1, p), e.min = y(g.log2lin(e.min), 16), e.max = y(g.log2lin(e.max), 16));
        e.range && c(e.max) && (e.userMin = e.min = N = Math.max(e.dataMin, e.minFromRange()), e.userMax = O = e.max, e.range = null);
        z(e, "foundExtremes");
        e.beforePadding && e.beforePadding();
        e.adjustForMinRange();
        !(q || e.axisPointRange || e.stacking && e.stacking.usePercentage || d) && c(e.min) && c(e.max) && (p = e.max - e.min) && (!c(N) && m && (e.min -= p * m), !c(O) && f && (e.max += p * f));
        a(e.userMin) || (a(u.softMin) && u.softMin < e.min && (e.min = N = u.softMin), a(u.floor) && (e.min = Math.max(e.min, u.floor)));
        a(e.userMax) || (a(u.softMax) && u.softMax > e.max && (e.max = O = u.softMax), a(u.ceiling) && (e.max = Math.min(e.max, u.ceiling)));
        v && c(e.dataMin) && (l = l || 0, !c(N) && e.min < l && e.dataMin >= l ? e.min = e.options.minRange ? Math.min(l, e.max - e.minRange) : l : !c(O) && e.max > l && e.dataMax <= l && (e.max = e.options.minRange ? Math.max(l, e.min + e.minRange) : l));
        a(e.min) && a(e.max) && !this.chart.polar && e.min > e.max && (c(e.options.min) ? e.max = e.min : c(e.options.max) && (e.min = e.max));
        e.tickInterval = e.min === e.max || "undefined" === typeof e.min || "undefined" === typeof e.max ? 1 : d && !w && n === e.linkedParent.options.tickPixelInterval ? w = e.linkedParent.tickInterval : F(w, this.tickAmount ? (e.max - e.min) / Math.max(this.tickAmount - 1, 1) : void 0, q ? 1 : (e.max - e.min) * n / Math.max(e.len, n));
        h && !b && e.series.forEach(function (a) {
          var b, c;
          a.processData(e.min !== (null === (b = e.old) || void 0 === b ? void 0 : b.min) || e.max !== (null === (c = e.old) || void 0 === c ? void 0 : c.max));
        });
        e.setAxisTranslation();
        z(this, "initialAxisTranslation");
        e.pointRange && !w && (e.tickInterval = Math.max(e.pointRange, e.tickInterval));
        b = F(u.minTickInterval, e.dateTime && !e.series.some(function (a) {
          return a.noSharedTooltip;
        }) ? e.closestPointRange : 0);
        !w && e.tickInterval < b && (e.tickInterval = b);
        e.dateTime || e.logarithmic || w || (e.tickInterval = J(e.tickInterval, void 0, r(e.tickInterval), F(u.allowDecimals, .5 > e.tickInterval || void 0 !== this.tickAmount), !!this.tickAmount));
        this.tickAmount || (e.tickInterval = e.unsquish());
        this.setTickPositions();
      };

      f.prototype.setTickPositions = function () {
        var a = this.options,
            b = a.tickPositions;
        var e = this.getMinorTickInterval();
        var g = a.tickPositioner,
            h = this.hasVerticalPanning(),
            d = "colorAxis" === this.coll,
            f = (d || !h) && a.startOnTick;
        h = (d || !h) && a.endOnTick;
        this.tickmarkOffset = this.categories && "between" === a.tickmarkPlacement && 1 === this.tickInterval ? .5 : 0;
        this.minorTickInterval = "auto" === e && this.tickInterval ? this.tickInterval / 5 : e;
        this.single = this.min === this.max && c(this.min) && !this.tickAmount && (parseInt(this.min, 10) === this.min || !1 !== a.allowDecimals);
        this.tickPositions = e = b && b.slice();
        !e && (this.ordinal && this.ordinal.positions || !((this.max - this.min) / this.tickInterval > Math.max(2 * this.len, 200)) ? e = this.dateTime ? this.getTimeTicks(this.dateTime.normalizeTimeTickInterval(this.tickInterval, a.units), this.min, this.max, a.startOfWeek, this.ordinal && this.ordinal.positions, this.closestPointRange, !0) : this.logarithmic ? this.logarithmic.getLogTickPositions(this.tickInterval, this.min, this.max) : this.getLinearTickPositions(this.tickInterval, this.min, this.max) : (e = [this.min, this.max], A(19, !1, this.chart)), e.length > this.len && (e = [e[0], e.pop()], e[0] === e[1] && (e.length = 1)), this.tickPositions = e, g && (g = g.apply(this, [this.min, this.max]))) && (this.tickPositions = e = g);
        this.paddedTicks = e.slice(0);
        this.trimTicks(e, f, h);
        this.isLinked || (this.single && 2 > e.length && !this.categories && !this.series.some(function (a) {
          return a.is("heatmap") && "between" === a.options.pointPlacement;
        }) && (this.min -= .5, this.max += .5), b || g || this.adjustTickAmount());
        z(this, "afterSetTickPositions");
      };

      f.prototype.trimTicks = function (a, b, e) {
        var g = a[0],
            p = a[a.length - 1],
            h = !this.isOrdinal && this.minPointOffset || 0;
        z(this, "trimTicks");

        if (!this.isLinked) {
          if (b && -Infinity !== g) this.min = g;else for (; this.min - h > a[0];) {
            a.shift();
          }
          if (e) this.max = p;else for (; this.max + h < a[a.length - 1];) {
            a.pop();
          }
          0 === a.length && c(g) && !this.options.tickPositions && a.push((p + g) / 2);
        }
      };

      f.prototype.alignToOthers = function () {
        var a = {},
            b,
            e = this.options;
        !1 === this.chart.options.chart.alignTicks || !1 === e.alignTicks || !1 === e.startOnTick || !1 === e.endOnTick || this.logarithmic || this.chart[this.coll].forEach(function (e) {
          var c = e.options;
          c = [e.horiz ? c.left : c.top, c.width, c.height, c.pane].join();
          e.series.length && (a[c] ? b = !0 : a[c] = 1);
        });
        return b;
      };

      f.prototype.getTickAmount = function () {
        var a = this.options,
            b = a.tickAmount,
            e = a.tickPixelInterval;
        !c(a.tickInterval) && !b && this.len < e && !this.isRadial && !this.logarithmic && a.startOnTick && a.endOnTick && (b = 2);
        !b && this.alignToOthers() && (b = Math.ceil(this.len / e) + 1);
        4 > b && (this.finalTickAmt = b, b = 5);
        this.tickAmount = b;
      };

      f.prototype.adjustTickAmount = function () {
        var b = this.options,
            e = this.tickInterval,
            g = this.tickPositions,
            h = this.tickAmount,
            u = this.finalTickAmt,
            d = g && g.length,
            f = F(this.threshold, this.softThreshold ? 0 : null);

        if (this.hasData() && a(this.min) && a(this.max)) {
          if (d < h) {
            for (; g.length < h;) {
              g.length % 2 || this.min === f ? g.push(y(g[g.length - 1] + e)) : g.unshift(y(g[0] - e));
            }

            this.transA *= (d - 1) / (h - 1);
            this.min = b.startOnTick ? g[0] : Math.min(this.min, g[0]);
            this.max = b.endOnTick ? g[g.length - 1] : Math.max(this.max, g[g.length - 1]);
          } else d > h && (this.tickInterval *= 2, this.setTickPositions());

          if (c(u)) {
            for (e = b = g.length; e--;) {
              (3 === u && 1 === e % 2 || 2 >= u && 0 < e && e < b - 1) && g.splice(e, 1);
            }

            this.finalTickAmt = void 0;
          }
        }
      };

      f.prototype.setScale = function () {
        var a,
            b,
            e,
            c,
            g,
            h,
            d = !1,
            f = !1;
        this.series.forEach(function (a) {
          var b;
          d = d || a.isDirtyData || a.isDirty;
          f = f || (null === (b = a.xAxis) || void 0 === b ? void 0 : b.isDirty) || !1;
        });
        this.setAxisSize();
        (h = this.len !== (null === (a = this.old) || void 0 === a ? void 0 : a.len)) || d || f || this.isLinked || this.forceRedraw || this.userMin !== (null === (b = this.old) || void 0 === b ? void 0 : b.userMin) || this.userMax !== (null === (e = this.old) || void 0 === e ? void 0 : e.userMax) || this.alignToOthers() ? (this.stacking && this.stacking.resetStacks(), this.forceRedraw = !1, this.getSeriesExtremes(), this.setTickInterval(), this.isDirty || (this.isDirty = h || this.min !== (null === (c = this.old) || void 0 === c ? void 0 : c.min) || this.max !== (null === (g = this.old) || void 0 === g ? void 0 : g.max))) : this.stacking && this.stacking.cleanStacks();
        d && this.panningState && (this.panningState.isDirty = !0);
        z(this, "afterSetScale");
      };

      f.prototype.setExtremes = function (a, b, e, c, g) {
        var h = this,
            p = h.chart;
        e = F(e, !0);
        h.series.forEach(function (a) {
          delete a.kdTree;
        });
        g = M(g, {
          min: a,
          max: b
        });
        z(h, "setExtremes", g, function () {
          h.userMin = a;
          h.userMax = b;
          h.eventArgs = g;
          e && p.redraw(c);
        });
      };

      f.prototype.zoom = function (a, b) {
        var e = this,
            g = this.dataMin,
            h = this.dataMax,
            p = this.options,
            d = Math.min(g, F(p.min, g)),
            f = Math.max(h, F(p.max, h));
        a = {
          newMin: a,
          newMax: b
        };
        z(this, "zoom", a, function (a) {
          var b = a.newMin,
              p = a.newMax;
          if (b !== e.min || p !== e.max) e.allowZoomOutside || (c(g) && (b < d && (b = d), b > f && (b = f)), c(h) && (p < d && (p = d), p > f && (p = f))), e.displayBtn = "undefined" !== typeof b || "undefined" !== typeof p, e.setExtremes(b, p, !1, void 0, {
            trigger: "zoom"
          });
          a.zoomed = !0;
        });
        return a.zoomed;
      };

      f.prototype.setAxisSize = function () {
        var a = this.chart,
            b = this.options,
            e = b.offsets || [0, 0, 0, 0],
            c = this.horiz,
            g = this.width = Math.round(N(F(b.width, a.plotWidth - e[3] + e[1]), a.plotWidth)),
            h = this.height = Math.round(N(F(b.height, a.plotHeight - e[0] + e[2]), a.plotHeight)),
            d = this.top = Math.round(N(F(b.top, a.plotTop + e[0]), a.plotHeight, a.plotTop));
        b = this.left = Math.round(N(F(b.left, a.plotLeft + e[3]), a.plotWidth, a.plotLeft));
        this.bottom = a.chartHeight - h - d;
        this.right = a.chartWidth - g - b;
        this.len = Math.max(c ? g : h, 0);
        this.pos = c ? b : d;
      };

      f.prototype.getExtremes = function () {
        var a = this.logarithmic;
        return {
          min: a ? y(a.lin2log(this.min)) : this.min,
          max: a ? y(a.lin2log(this.max)) : this.max,
          dataMin: this.dataMin,
          dataMax: this.dataMax,
          userMin: this.userMin,
          userMax: this.userMax
        };
      };

      f.prototype.getThreshold = function (a) {
        var b = this.logarithmic,
            e = b ? b.lin2log(this.min) : this.min;
        b = b ? b.lin2log(this.max) : this.max;
        null === a || -Infinity === a ? a = e : Infinity === a ? a = b : e > a ? a = e : b < a && (a = b);
        return this.translate(a, 0, 1, 0, 1);
      };

      f.prototype.autoLabelAlign = function (a) {
        var b = (F(a, 0) - 90 * this.side + 720) % 360;
        a = {
          align: "center"
        };
        z(this, "autoLabelAlign", a, function (a) {
          15 < b && 165 > b ? a.align = "right" : 195 < b && 345 > b && (a.align = "left");
        });
        return a.align;
      };

      f.prototype.tickSize = function (a) {
        var b = this.options,
            e = b["tick" === a ? "tickLength" : "minorTickLength"],
            c = F(b["tick" === a ? "tickWidth" : "minorTickWidth"], "tick" === a && this.isXAxis && !this.categories ? 1 : 0);

        if (c && e) {
          "inside" === b[a + "Position"] && (e = -e);
          var g = [e, c];
        }

        a = {
          tickSize: g
        };
        z(this, "afterTickSize", a);
        return a.tickSize;
      };

      f.prototype.labelMetrics = function () {
        var a = this.tickPositions && this.tickPositions[0] || 0;
        return this.chart.renderer.fontMetrics(this.options.labels.style && this.options.labels.style.fontSize, this.ticks[a] && this.ticks[a].label);
      };

      f.prototype.unsquish = function () {
        var a = this.options.labels,
            b = this.horiz,
            e = this.tickInterval,
            g = e,
            h = this.len / (((this.categories ? 1 : 0) + this.max - this.min) / e),
            d,
            f = a.rotation,
            m = this.labelMetrics(),
            w,
            n = Number.MAX_VALUE,
            r,
            l = Math.max(this.max - this.min, 0),
            q = function q(a) {
          var b = a / (h || 1);
          b = 1 < b ? Math.ceil(b) : 1;
          b * e > l && Infinity !== a && Infinity !== h && l && (b = Math.ceil(l / e));
          return y(b * e);
        };

        b ? (r = !a.staggerLines && !a.step && (c(f) ? [f] : h < F(a.autoRotationLimit, 80) && a.autoRotation)) && r.forEach(function (a) {
          if (a === f || a && -90 <= a && 90 >= a) {
            w = q(Math.abs(m.h / Math.sin(v * a)));
            var b = w + Math.abs(a / 360);
            b < n && (n = b, d = a, g = w);
          }
        }) : a.step || (g = q(m.h));
        this.autoRotation = r;
        this.labelRotation = F(d, f);
        return g;
      };

      f.prototype.getSlotWidth = function (b) {
        var e,
            c = this.chart,
            g = this.horiz,
            h = this.options.labels,
            d = Math.max(this.tickPositions.length - (this.categories ? 0 : 1), 1),
            p = c.margin[3];
        if (b && a(b.slotWidth)) return b.slotWidth;
        if (g && h && 2 > (h.step || 0)) return h.rotation ? 0 : (this.staggerLines || 1) * this.len / d;

        if (!g) {
          b = null === (e = null === h || void 0 === h ? void 0 : h.style) || void 0 === e ? void 0 : e.width;
          if (void 0 !== b) return parseInt(b, 10);
          if (p) return p - c.spacing[3];
        }

        return .33 * c.chartWidth;
      };

      f.prototype.renderUnsquish = function () {
        var a = this.chart,
            e = a.renderer,
            c = this.tickPositions,
            g = this.ticks,
            h = this.options.labels,
            d = h && h.style || {},
            f = this.horiz,
            m = this.getSlotWidth(),
            w = Math.max(1, Math.round(m - 2 * (h.padding || 5))),
            n = {},
            r = this.labelMetrics(),
            l = h.style && h.style.textOverflow,
            q = 0;
        b(h.rotation) || (n.rotation = h.rotation || 0);
        c.forEach(function (a) {
          a = g[a];
          a.movedLabel && a.replaceMovedLabel();
          a && a.label && a.label.textPxLength > q && (q = a.label.textPxLength);
        });
        this.maxLabelLength = q;
        if (this.autoRotation) q > w && q > r.h ? n.rotation = this.labelRotation : this.labelRotation = 0;else if (m) {
          var J = w;

          if (!l) {
            var F = "clip";

            for (w = c.length; !f && w--;) {
              var v = c[w];
              if (v = g[v].label) v.styles && "ellipsis" === v.styles.textOverflow ? v.css({
                textOverflow: "clip"
              }) : v.textPxLength > m && v.css({
                width: m + "px"
              }), v.getBBox().height > this.len / c.length - (r.h - r.f) && (v.specificTextOverflow = "ellipsis");
            }
          }
        }
        n.rotation && (J = q > .5 * a.chartHeight ? .33 * a.chartHeight : q, l || (F = "ellipsis"));
        if (this.labelAlign = h.align || this.autoLabelAlign(this.labelRotation)) n.align = this.labelAlign;
        c.forEach(function (a) {
          var b = (a = g[a]) && a.label,
              e = d.width,
              c = {};
          b && (b.attr(n), a.shortenLabel ? a.shortenLabel() : J && !e && "nowrap" !== d.whiteSpace && (J < b.textPxLength || "SPAN" === b.element.tagName) ? (c.width = J + "px", l || (c.textOverflow = b.specificTextOverflow || F), b.css(c)) : b.styles && b.styles.width && !c.width && !e && b.css({
            width: null
          }), delete b.specificTextOverflow, a.rotation = n.rotation);
        }, this);
        this.tickRotCorr = e.rotCorr(r.b, this.labelRotation || 0, 0 !== this.side);
      };

      f.prototype.hasData = function () {
        return this.series.some(function (a) {
          return a.hasData();
        }) || this.options.showEmpty && c(this.min) && c(this.max);
      };

      f.prototype.addTitle = function (a) {
        var b = this.chart.renderer,
            e = this.horiz,
            c = this.opposite,
            g = this.options.title,
            h,
            d = this.chart.styledMode;
        this.axisTitle || ((h = g.textAlign) || (h = (e ? {
          low: "left",
          middle: "center",
          high: "right"
        } : {
          low: c ? "right" : "left",
          middle: "center",
          high: c ? "left" : "right"
        })[g.align]), this.axisTitle = b.text(g.text, 0, 0, g.useHTML).attr({
          zIndex: 7,
          rotation: g.rotation || 0,
          align: h
        }).addClass("highcharts-axis-title"), d || this.axisTitle.css(w(g.style)), this.axisTitle.add(this.axisGroup), this.axisTitle.isNew = !0);
        d || g.style.width || this.isRadial || this.axisTitle.css({
          width: this.len + "px"
        });
        this.axisTitle[a ? "show" : "hide"](a);
      };

      f.prototype.generateTick = function (a) {
        var b = this.ticks;
        b[a] ? b[a].addLabel() : b[a] = new G(this, a);
      };

      f.prototype.getOffset = function () {
        var a = this,
            b = this,
            e = b.chart,
            g = e.renderer,
            h = b.options,
            d = b.tickPositions,
            f = b.ticks,
            m = b.horiz,
            w = b.side,
            n = e.inverted && !b.isZAxis ? [1, 0, 3, 2][w] : w,
            r,
            l = 0,
            q = 0,
            J = h.title,
            v = h.labels,
            N = 0,
            V = e.axisOffset;
        e = e.clipOffset;
        var Z = [-1, 1, 1, -1][w],
            k = h.className,
            t = b.axisParent;
        var y = b.hasData();
        b.showAxis = r = y || F(h.showEmpty, !0);
        b.staggerLines = b.horiz && v.staggerLines;

        if (!b.axisGroup) {
          var A = function A(b, e, c) {
            return g.g(b).attr({
              zIndex: c
            }).addClass("highcharts-" + a.coll.toLowerCase() + e + " " + (a.isRadial ? "highcharts-radial-axis" + e + " " : "") + (k || "")).add(t);
          };

          b.gridGroup = A("grid", "-grid", h.gridZIndex || 1);
          b.axisGroup = A("axis", "", h.zIndex || 2);
          b.labelGroup = A("axis-labels", "-labels", v.zIndex || 7);
        }

        y || b.isLinked ? (d.forEach(function (a, e) {
          b.generateTick(a, e);
        }), b.renderUnsquish(), b.reserveSpaceDefault = 0 === w || 2 === w || {
          1: "left",
          3: "right"
        }[w] === b.labelAlign, F(v.reserveSpace, "center" === b.labelAlign ? !0 : null, b.reserveSpaceDefault) && d.forEach(function (a) {
          N = Math.max(f[a].getLabelSize(), N);
        }), b.staggerLines && (N *= b.staggerLines), b.labelOffset = N * (b.opposite ? -1 : 1)) : O(f, function (a, b) {
          a.destroy();
          delete f[b];
        });

        if (J && J.text && !1 !== J.enabled && (b.addTitle(r), r && !1 !== J.reserveSpace)) {
          b.titleOffset = l = b.axisTitle.getBBox()[m ? "height" : "width"];
          var R = J.offset;
          q = c(R) ? 0 : F(J.margin, m ? 5 : 10);
        }

        b.renderLine();
        b.offset = Z * F(h.offset, V[w] ? V[w] + (h.margin || 0) : 0);
        b.tickRotCorr = b.tickRotCorr || {
          x: 0,
          y: 0
        };
        J = 0 === w ? -b.labelMetrics().h : 2 === w ? b.tickRotCorr.y : 0;
        q = Math.abs(N) + q;
        N && (q = q - J + Z * (m ? F(v.y, b.tickRotCorr.y + 8 * Z) : v.x));
        b.axisTitleMargin = F(R, q);
        b.getMaxLabelDimensions && (b.maxLabelDimensions = b.getMaxLabelDimensions(f, d));
        m = this.tickSize("tick");
        V[w] = Math.max(V[w], b.axisTitleMargin + l + Z * b.offset, q, d && d.length && m ? m[0] + Z * b.offset : 0);
        h = h.offset ? 0 : 2 * Math.floor(b.axisLine.strokeWidth() / 2);
        e[n] = Math.max(e[n], h);
        z(this, "afterGetOffset");
      };

      f.prototype.getLinePath = function (a) {
        var b = this.chart,
            e = this.opposite,
            c = this.offset,
            g = this.horiz,
            h = this.left + (e ? this.width : 0) + c;
        c = b.chartHeight - this.bottom - (e ? this.height : 0) + c;
        e && (a *= -1);
        return b.renderer.crispLine([["M", g ? this.left : h, g ? c : this.top], ["L", g ? b.chartWidth - this.right : h, g ? c : b.chartHeight - this.bottom]], a);
      };

      f.prototype.renderLine = function () {
        this.axisLine || (this.axisLine = this.chart.renderer.path().addClass("highcharts-axis-line").add(this.axisGroup), this.chart.styledMode || this.axisLine.attr({
          stroke: this.options.lineColor,
          "stroke-width": this.options.lineWidth,
          zIndex: 7
        }));
      };

      f.prototype.getTitlePosition = function () {
        var a = this.horiz,
            b = this.left,
            e = this.top,
            c = this.len,
            g = this.options.title,
            h = a ? b : e,
            d = this.opposite,
            f = this.offset,
            m = g.x || 0,
            w = g.y || 0,
            n = this.axisTitle,
            r = this.chart.renderer.fontMetrics(g.style && g.style.fontSize, n);
        n = Math.max(n.getBBox(null, 0).height - r.h - 1, 0);
        c = {
          low: h + (a ? 0 : c),
          middle: h + c / 2,
          high: h + (a ? c : 0)
        }[g.align];
        b = (a ? e + this.height : b) + (a ? 1 : -1) * (d ? -1 : 1) * this.axisTitleMargin + [-n, n, r.f, -n][this.side];
        a = {
          x: a ? c + m : b + (d ? this.width : 0) + f + m,
          y: a ? b + w - (d ? this.height : 0) + f : c + w
        };
        z(this, "afterGetTitlePosition", {
          titlePosition: a
        });
        return a;
      };

      f.prototype.renderMinorTick = function (a) {
        var b = this.chart.hasRendered && this.old,
            e = this.minorTicks;
        e[a] || (e[a] = new G(this, a, "minor"));
        b && e[a].isNew && e[a].render(null, !0);
        e[a].render(null, !1, 1);
      };

      f.prototype.renderTick = function (a, b) {
        var e,
            c = this.ticks,
            g = this.chart.hasRendered && this.old;
        if (!this.isLinked || a >= this.min && a <= this.max || (null === (e = this.grid) || void 0 === e ? 0 : e.isColumn)) c[a] || (c[a] = new G(this, a)), g && c[a].isNew && c[a].render(b, !0, -1), c[a].render(b);
      };

      f.prototype.render = function () {
        var b = this,
            e = b.chart,
            c = b.logarithmic,
            g = b.options,
            h = b.isLinked,
            d = b.tickPositions,
            f = b.axisTitle,
            m = b.ticks,
            w = b.minorTicks,
            n = b.alternateBands,
            r = g.stackLabels,
            q = g.alternateGridColor,
            l = b.tickmarkOffset,
            J = b.axisLine,
            F = b.showAxis,
            v = H(e.renderer.globalAnimation),
            V,
            N;
        b.labelEdge.length = 0;
        b.overlap = !1;
        [m, w, n].forEach(function (a) {
          O(a, function (a) {
            a.isActive = !1;
          });
        });
        if (b.hasData() || h) b.minorTickInterval && !b.categories && b.getMinorTickPositions().forEach(function (a) {
          b.renderMinorTick(a);
        }), d.length && (d.forEach(function (a, e) {
          b.renderTick(a, e);
        }), l && (0 === b.min || b.single) && (m[-1] || (m[-1] = new G(b, -1, null, !0)), m[-1].render(-1))), q && d.forEach(function (a, g) {
          N = "undefined" !== typeof d[g + 1] ? d[g + 1] + l : b.max - l;
          0 === g % 2 && a < b.max && N <= b.max + (e.polar ? -l : l) && (n[a] || (n[a] = new k.PlotLineOrBand(b)), V = a + l, n[a].options = {
            from: c ? c.lin2log(V) : V,
            to: c ? c.lin2log(N) : N,
            color: q,
            className: "highcharts-alternate-grid"
          }, n[a].render(), n[a].isActive = !0);
        }), b._addedPlotLB || (b._addedPlotLB = !0, (g.plotLines || []).concat(g.plotBands || []).forEach(function (a) {
          b.addPlotBandOrLine(a);
        }));
        [m, w, n].forEach(function (a) {
          var b,
              c = [],
              g = v.duration;
          O(a, function (a, b) {
            a.isActive || (a.render(b, !1, 0), a.isActive = !1, c.push(b));
          });
          T(function () {
            for (b = c.length; b--;) {
              a[c[b]] && !a[c[b]].isActive && (a[c[b]].destroy(), delete a[c[b]]);
            }
          }, a !== n && e.hasRendered && g ? g : 0);
        });
        J && (J[J.isPlaced ? "animate" : "attr"]({
          d: this.getLinePath(J.strokeWidth())
        }), J.isPlaced = !0, J[F ? "show" : "hide"](F));
        f && F && (g = b.getTitlePosition(), a(g.y) ? (f[f.isNew ? "attr" : "animate"](g), f.isNew = !1) : (f.attr("y", -9999), f.isNew = !0));
        r && r.enabled && b.stacking && b.stacking.renderStackTotals();
        b.old = {
          len: b.len,
          max: b.max,
          min: b.min,
          transA: b.transA,
          userMax: b.userMax,
          userMin: b.userMin
        };
        b.isDirty = !1;
        z(this, "afterRender");
      };

      f.prototype.redraw = function () {
        this.visible && (this.render(), this.plotLinesAndBands.forEach(function (a) {
          a.render();
        }));
        this.series.forEach(function (a) {
          a.isDirty = !0;
        });
      };

      f.prototype.getKeepProps = function () {
        return this.keepProps || f.keepProps;
      };

      f.prototype.destroy = function (a) {
        var b = this,
            e = b.plotLinesAndBands,
            c;
        z(this, "destroy", {
          keepEvents: a
        });
        a || R(b);
        [b.ticks, b.minorTicks, b.alternateBands].forEach(function (a) {
          q(a);
        });
        if (e) for (a = e.length; a--;) {
          e[a].destroy();
        }
        "axisLine axisTitle axisGroup gridGroup labelGroup cross scrollbar".split(" ").forEach(function (a) {
          b[a] && (b[a] = b[a].destroy());
        });

        for (c in b.plotLinesAndBandsGroups) {
          b.plotLinesAndBandsGroups[c] = b.plotLinesAndBandsGroups[c].destroy();
        }

        O(b, function (a, e) {
          -1 === b.getKeepProps().indexOf(e) && delete b[e];
        });
      };

      f.prototype.drawCrosshair = function (a, b) {
        var e = this.crosshair,
            g = F(e.snap, !0),
            h,
            f = this.cross,
            m = this.chart;
        z(this, "drawCrosshair", {
          e: a,
          point: b
        });
        a || (a = this.cross && this.cross.e);

        if (this.crosshair && !1 !== (c(b) || !g)) {
          g ? c(b) && (h = F("colorAxis" !== this.coll ? b.crosshairPos : null, this.isXAxis ? b.plotX : this.len - b.plotY)) : h = a && (this.horiz ? a.chartX - this.pos : this.len - a.chartY + this.pos);

          if (c(h)) {
            var p = {
              value: b && (this.isXAxis ? b.x : F(b.stackY, b.y)),
              translatedValue: h
            };
            m.polar && M(p, {
              isCrosshair: !0,
              chartX: a && a.chartX,
              chartY: a && a.chartY,
              point: b
            });
            p = this.getPlotLinePath(p) || null;
          }

          if (!c(p)) {
            this.hideCrosshair();
            return;
          }

          g = this.categories && !this.isRadial;
          f || (this.cross = f = m.renderer.path().addClass("highcharts-crosshair highcharts-crosshair-" + (g ? "category " : "thin ") + e.className).attr({
            zIndex: F(e.zIndex, 2)
          }).add(), m.styledMode || (f.attr({
            stroke: e.color || (g ? d.parse(x.highlightColor20).setOpacity(.25).get() : x.neutralColor20),
            "stroke-width": F(e.width, 1)
          }).css({
            "pointer-events": "none"
          }), e.dashStyle && f.attr({
            dashstyle: e.dashStyle
          })));
          f.show().attr({
            d: p
          });
          g && !e.width && f.attr({
            "stroke-width": this.transA
          });
          this.cross.e = a;
        } else this.hideCrosshair();

        z(this, "afterDrawCrosshair", {
          e: a,
          point: b
        });
      };

      f.prototype.hideCrosshair = function () {
        this.cross && this.cross.hide();
        z(this, "afterHideCrosshair");
      };

      f.prototype.hasVerticalPanning = function () {
        var a,
            b = null === (a = this.chart.options.chart) || void 0 === a ? void 0 : a.panning;
        return !!(b && b.enabled && /y/.test(b.type));
      };

      f.prototype.validatePositiveValue = function (b) {
        return a(b) && 0 < b;
      };

      f.prototype.update = function (a, b) {
        var e = this.chart,
            c = a && a.events || {};
        a = w(this.userOptions, a);
        e.options[this.coll].indexOf && (e.options[this.coll][e.options[this.coll].indexOf(this.userOptions)] = a);
        O(e.options[this.coll].events, function (a, b) {
          "undefined" === typeof c[b] && (c[b] = void 0);
        });
        this.destroy(!0);
        this.init(e, M(a, {
          events: c
        }));
        e.isDirtyBox = !0;
        F(b, !0) && e.redraw();
      };

      f.prototype.remove = function (a) {
        for (var b = this.chart, c = this.coll, g = this.series, h = g.length; h--;) {
          g[h] && g[h].remove(!1);
        }

        n(b.axes, this);
        n(b[c], this);
        e(b.options[c]) ? b.options[c].splice(this.options.index, 1) : delete b.options[c];
        b[c].forEach(function (a, b) {
          a.options.index = a.userOptions.index = b;
        });
        this.destroy();
        b.isDirtyBox = !0;
        F(a, !0) && b.redraw();
      };

      f.prototype.setTitle = function (a, b) {
        this.update({
          title: a
        }, b);
      };

      f.prototype.setCategories = function (a, b) {
        this.update({
          categories: a
        }, b);
      };

      f.defaultOptions = {
        dateTimeLabelFormats: {
          millisecond: {
            main: "%H:%M:%S.%L",
            range: !1
          },
          second: {
            main: "%H:%M:%S",
            range: !1
          },
          minute: {
            main: "%H:%M",
            range: !1
          },
          hour: {
            main: "%H:%M",
            range: !1
          },
          day: {
            main: "%e. %b"
          },
          week: {
            main: "%e. %b"
          },
          month: {
            main: "%b '%y"
          },
          year: {
            main: "%Y"
          }
        },
        endOnTick: !1,
        labels: {
          enabled: !0,
          indentation: 10,
          x: 0,
          style: {
            color: x.neutralColor60,
            cursor: "default",
            fontSize: "11px"
          }
        },
        maxPadding: .01,
        minorTickLength: 2,
        minorTickPosition: "outside",
        minPadding: .01,
        showEmpty: !0,
        startOfWeek: 1,
        startOnTick: !1,
        tickLength: 10,
        tickPixelInterval: 100,
        tickmarkPlacement: "between",
        tickPosition: "outside",
        title: {
          align: "middle",
          style: {
            color: x.neutralColor60
          }
        },
        type: "linear",
        minorGridLineColor: x.neutralColor5,
        minorGridLineWidth: 1,
        minorTickColor: x.neutralColor40,
        lineColor: x.highlightColor20,
        lineWidth: 1,
        gridLineColor: x.neutralColor10,
        tickColor: x.highlightColor20
      };
      f.defaultYAxisOptions = {
        endOnTick: !0,
        maxPadding: .05,
        minPadding: .05,
        tickPixelInterval: 72,
        showLastLabel: !0,
        labels: {
          x: -8
        },
        startOnTick: !0,
        title: {
          rotation: 270,
          text: "Values"
        },
        stackLabels: {
          animation: {},
          allowOverlap: !1,
          enabled: !1,
          crop: !0,
          overflow: "justify",
          formatter: function formatter() {
            var a = this.axis.chart.numberFormatter;
            return a(this.total, -1);
          },
          style: {
            color: x.neutralColor100,
            fontSize: "11px",
            fontWeight: "bold",
            textOutline: "1px contrast"
          }
        },
        gridLineWidth: 1,
        lineWidth: 0
      };
      f.defaultLeftAxisOptions = {
        labels: {
          x: -15
        },
        title: {
          rotation: 270
        }
      };
      f.defaultRightAxisOptions = {
        labels: {
          x: 15
        },
        title: {
          rotation: 90
        }
      };
      f.defaultBottomAxisOptions = {
        labels: {
          autoRotation: [-45],
          x: 0
        },
        margin: 15,
        title: {
          rotation: 0
        }
      };
      f.defaultTopAxisOptions = {
        labels: {
          autoRotation: [-45],
          x: 0
        },
        margin: 15,
        title: {
          rotation: 0
        }
      };
      f.keepProps = "extKey hcEvents names series userMax userMin".split(" ");
      return f;
    }();

    k.Axis = f;
    return k.Axis;
  });
  P(k, "Core/Axis/DateTimeAxis.js", [k["Core/Axis/Axis.js"], k["Core/Utilities.js"]], function (f, d) {
    var k = d.addEvent,
        x = d.getMagnitude,
        B = d.normalizeTickInterval,
        G = d.timeUnits,
        D = function () {
      function d(d) {
        this.axis = d;
      }

      d.prototype.normalizeTimeTickInterval = function (d, f) {
        var l = f || [["millisecond", [1, 2, 5, 10, 20, 25, 50, 100, 200, 500]], ["second", [1, 2, 5, 10, 15, 30]], ["minute", [1, 2, 5, 10, 15, 30]], ["hour", [1, 2, 3, 4, 6, 8, 12]], ["day", [1, 2]], ["week", [1, 2]], ["month", [1, 2, 3, 4, 6]], ["year", null]];
        f = l[l.length - 1];
        var k = G[f[0]],
            g = f[1],
            t;

        for (t = 0; t < l.length && !(f = l[t], k = G[f[0]], g = f[1], l[t + 1] && d <= (k * g[g.length - 1] + G[l[t + 1][0]]) / 2); t++) {
          ;
        }

        k === G.year && d < 5 * k && (g = [1, 2, 5]);
        d = B(d / k, g, "year" === f[0] ? Math.max(x(d / k), 1) : 1);
        return {
          unitRange: k,
          count: d,
          unitName: f[0]
        };
      };

      return d;
    }();

    d = function () {
      function d() {}

      d.compose = function (d) {
        d.keepProps.push("dateTime");

        d.prototype.getTimeTicks = function () {
          return this.chart.time.getTimeTicks.apply(this.chart.time, arguments);
        };

        k(d, "init", function (d) {
          "datetime" !== d.userOptions.type ? this.dateTime = void 0 : this.dateTime || (this.dateTime = new D(this));
        });
      };

      d.AdditionsClass = D;
      return d;
    }();

    d.compose(f);
    return d;
  });
  P(k, "Core/Axis/LogarithmicAxis.js", [k["Core/Axis/Axis.js"], k["Core/Utilities.js"]], function (f, d) {
    var k = d.addEvent,
        x = d.getMagnitude,
        B = d.normalizeTickInterval,
        G = d.pick,
        D = function () {
      function d(d) {
        this.axis = d;
      }

      d.prototype.getLogTickPositions = function (d, f, l, k) {
        var g = this.axis,
            y = g.len,
            c = g.options,
            q = [];
        k || (this.minorAutoInterval = void 0);
        if (.5 <= d) d = Math.round(d), q = g.getLinearTickPositions(d, f, l);else if (.08 <= d) {
          c = Math.floor(f);
          var n, A;

          for (y = .3 < d ? [1, 2, 4] : .15 < d ? [1, 2, 4, 6, 8] : [1, 2, 3, 4, 5, 6, 7, 8, 9]; c < l + 1 && !A; c++) {
            var t = y.length;

            for (n = 0; n < t && !A; n++) {
              var z = this.log2lin(this.lin2log(c) * y[n]);
              z > f && (!k || m <= l) && "undefined" !== typeof m && q.push(m);
              m > l && (A = !0);
              var m = z;
            }
          }
        } else f = this.lin2log(f), l = this.lin2log(l), d = k ? g.getMinorTickInterval() : c.tickInterval, d = G("auto" === d ? null : d, this.minorAutoInterval, c.tickPixelInterval / (k ? 5 : 1) * (l - f) / ((k ? y / g.tickPositions.length : y) || 1)), d = B(d, void 0, x(d)), q = g.getLinearTickPositions(d, f, l).map(this.log2lin), k || (this.minorAutoInterval = d / 5);
        k || (g.tickInterval = d);
        return q;
      };

      d.prototype.lin2log = function (d) {
        return Math.pow(10, d);
      };

      d.prototype.log2lin = function (d) {
        return Math.log(d) / Math.LN10;
      };

      return d;
    }();

    d = function () {
      function d() {}

      d.compose = function (d) {
        d.keepProps.push("logarithmic");
        k(d, "init", function (d) {
          var f = this.logarithmic;
          "logarithmic" !== d.userOptions.type ? this.logarithmic = void 0 : f || (this.logarithmic = new D(this));
        });
        k(d, "afterInit", function () {
          var d = this.logarithmic;
          d && (this.lin2val = function (f) {
            return d.lin2log(f);
          }, this.val2lin = function (f) {
            return d.log2lin(f);
          });
        });
      };

      return d;
    }();

    d.compose(f);
    return d;
  });
  P(k, "Core/Axis/PlotLineOrBand.js", [k["Core/Axis/Axis.js"], k["Core/Globals.js"], k["Core/Color/Palette.js"], k["Core/Utilities.js"]], function (f, d, k, x) {
    var B = x.arrayMax,
        G = x.arrayMin,
        D = x.defined,
        H = x.destroyObjectProperties,
        t = x.erase,
        C = x.extend,
        l = x.fireEvent,
        E = x.merge,
        g = x.objectEach,
        y = x.pick;

    x = function () {
      function c(c, g) {
        this.axis = c;
        g && (this.options = g, this.id = g.id);
      }

      c.prototype.render = function () {
        l(this, "render");
        var c = this,
            d = c.axis,
            f = d.horiz,
            t = d.logarithmic,
            z = c.options,
            m = z.label,
            r = c.label,
            e = z.to,
            h = z.from,
            a = z.value,
            b = D(h) && D(e),
            w = D(a),
            J = c.svgElem,
            O = !J,
            F = [],
            N = z.color,
            R = y(z.zIndex, 0),
            Q = z.events;
        F = {
          "class": "highcharts-plot-" + (b ? "band " : "line ") + (z.className || "")
        };
        var C = {},
            v = d.chart.renderer,
            x = b ? "bands" : "lines";
        t && (h = t.log2lin(h), e = t.log2lin(e), a = t.log2lin(a));
        d.chart.styledMode || (w ? (F.stroke = N || k.neutralColor40, F["stroke-width"] = y(z.width, 1), z.dashStyle && (F.dashstyle = z.dashStyle)) : b && (F.fill = N || k.highlightColor10, z.borderWidth && (F.stroke = z.borderColor, F["stroke-width"] = z.borderWidth)));
        C.zIndex = R;
        x += "-" + R;
        (t = d.plotLinesAndBandsGroups[x]) || (d.plotLinesAndBandsGroups[x] = t = v.g("plot-" + x).attr(C).add());
        O && (c.svgElem = J = v.path().attr(F).add(t));
        if (w) F = d.getPlotLinePath({
          value: a,
          lineWidth: J.strokeWidth(),
          acrossPanes: z.acrossPanes
        });else if (b) F = d.getPlotBandPath(h, e, z);else return;
        !c.eventsAdded && Q && (g(Q, function (a, b) {
          J.on(b, function (a) {
            Q[b].apply(c, [a]);
          });
        }), c.eventsAdded = !0);
        (O || !J.d) && F && F.length ? J.attr({
          d: F
        }) : J && (F ? (J.show(!0), J.animate({
          d: F
        })) : J.d && (J.hide(), r && (c.label = r = r.destroy())));
        m && (D(m.text) || D(m.formatter)) && F && F.length && 0 < d.width && 0 < d.height && !F.isFlat ? (m = E({
          align: f && b && "center",
          x: f ? !b && 4 : 10,
          verticalAlign: !f && b && "middle",
          y: f ? b ? 16 : 10 : b ? 6 : -4,
          rotation: f && !b && 90
        }, m), this.renderLabel(m, F, b, R)) : r && r.hide();
        return c;
      };

      c.prototype.renderLabel = function (c, g, d, f) {
        var n = this.label,
            m = this.axis.chart.renderer;
        n || (n = {
          align: c.textAlign || c.align,
          rotation: c.rotation,
          "class": "highcharts-plot-" + (d ? "band" : "line") + "-label " + (c.className || "")
        }, n.zIndex = f, f = this.getLabelText(c), this.label = n = m.text(f, 0, 0, c.useHTML).attr(n).add(), this.axis.chart.styledMode || n.css(c.style));
        m = g.xBounds || [g[0][1], g[1][1], d ? g[2][1] : g[0][1]];
        g = g.yBounds || [g[0][2], g[1][2], d ? g[2][2] : g[0][2]];
        d = G(m);
        f = G(g);
        n.align(c, !1, {
          x: d,
          y: f,
          width: B(m) - d,
          height: B(g) - f
        });
        n.show(!0);
      };

      c.prototype.getLabelText = function (c) {
        return D(c.formatter) ? c.formatter.call(this) : c.text;
      };

      c.prototype.destroy = function () {
        t(this.axis.plotLinesAndBands, this);
        delete this.axis;
        H(this);
      };

      return c;
    }();

    C(f.prototype, {
      getPlotBandPath: function getPlotBandPath(c, g, d) {
        void 0 === d && (d = this.options);
        var f = this.getPlotLinePath({
          value: g,
          force: !0,
          acrossPanes: d.acrossPanes
        });
        d = this.getPlotLinePath({
          value: c,
          force: !0,
          acrossPanes: d.acrossPanes
        });
        var n = [],
            l = this.horiz,
            m = 1;
        c = c < this.min && g < this.min || c > this.max && g > this.max;

        if (d && f) {
          if (c) {
            var r = d.toString() === f.toString();
            m = 0;
          }

          for (c = 0; c < d.length; c += 2) {
            g = d[c];
            var e = d[c + 1],
                h = f[c],
                a = f[c + 1];
            "M" !== g[0] && "L" !== g[0] || "M" !== e[0] && "L" !== e[0] || "M" !== h[0] && "L" !== h[0] || "M" !== a[0] && "L" !== a[0] || (l && h[1] === g[1] ? (h[1] += m, a[1] += m) : l || h[2] !== g[2] || (h[2] += m, a[2] += m), n.push(["M", g[1], g[2]], ["L", e[1], e[2]], ["L", a[1], a[2]], ["L", h[1], h[2]], ["Z"]));
            n.isFlat = r;
          }
        }

        return n;
      },
      addPlotBand: function addPlotBand(c) {
        return this.addPlotBandOrLine(c, "plotBands");
      },
      addPlotLine: function addPlotLine(c) {
        return this.addPlotBandOrLine(c, "plotLines");
      },
      addPlotBandOrLine: function addPlotBandOrLine(c, g) {
        var f = this,
            l = new d.PlotLineOrBand(this, c),
            q = this.userOptions;
        this.visible && (l = l.render());

        if (l) {
          this._addedPlotLB || (this._addedPlotLB = !0, (q.plotLines || []).concat(q.plotBands || []).forEach(function (c) {
            f.addPlotBandOrLine(c);
          }));

          if (g) {
            var k = q[g] || [];
            k.push(c);
            q[g] = k;
          }

          this.plotLinesAndBands.push(l);
        }

        return l;
      },
      removePlotBandOrLine: function removePlotBandOrLine(c) {
        for (var g = this.plotLinesAndBands, d = this.options, f = this.userOptions, l = g.length; l--;) {
          g[l].id === c && g[l].destroy();
        }

        [d.plotLines || [], f.plotLines || [], d.plotBands || [], f.plotBands || []].forEach(function (g) {
          for (l = g.length; l--;) {
            (g[l] || {}).id === c && t(g, g[l]);
          }
        });
      },
      removePlotBand: function removePlotBand(c) {
        this.removePlotBandOrLine(c);
      },
      removePlotLine: function removePlotLine(c) {
        this.removePlotBandOrLine(c);
      }
    });
    d.PlotLineOrBand = x;
    return d.PlotLineOrBand;
  });
  P(k, "Core/Tooltip.js", [k["Core/Globals.js"], k["Core/Color/Palette.js"], k["Core/Utilities.js"]], function (f, d, k) {
    var x = f.doc,
        B = k.clamp,
        G = k.css,
        D = k.defined,
        H = k.discardElement,
        t = k.extend,
        C = k.fireEvent,
        l = k.format,
        E = k.isNumber,
        g = k.isString,
        y = k.merge,
        c = k.pick,
        q = k.splat,
        n = k.syncTimeout,
        A = k.timeUnits;
    "";

    var M = function () {
      function z(c, g) {
        this.container = void 0;
        this.crosshairs = [];
        this.distance = 0;
        this.isHidden = !0;
        this.isSticky = !1;
        this.now = {};
        this.options = {};
        this.outside = !1;
        this.chart = c;
        this.init(c, g);
      }

      z.prototype.applyFilter = function () {
        var c = this.chart;
        c.renderer.definition({
          tagName: "filter",
          attributes: {
            id: "drop-shadow-" + c.index,
            opacity: .5
          },
          children: [{
            tagName: "feGaussianBlur",
            attributes: {
              "in": "SourceAlpha",
              stdDeviation: 1
            }
          }, {
            tagName: "feOffset",
            attributes: {
              dx: 1,
              dy: 1
            }
          }, {
            tagName: "feComponentTransfer",
            children: [{
              tagName: "feFuncA",
              attributes: {
                type: "linear",
                slope: .3
              }
            }]
          }, {
            tagName: "feMerge",
            children: [{
              tagName: "feMergeNode"
            }, {
              tagName: "feMergeNode",
              attributes: {
                "in": "SourceGraphic"
              }
            }]
          }]
        });
        c.renderer.definition({
          tagName: "style",
          textContent: ".highcharts-tooltip-" + c.index + "{filter:url(#drop-shadow-" + c.index + ")}"
        });
      };

      z.prototype.bodyFormatter = function (c) {
        return c.map(function (c) {
          var e = c.series.tooltipOptions;
          return (e[(c.point.formatPrefix || "point") + "Formatter"] || c.point.tooltipFormatter).call(c.point, e[(c.point.formatPrefix || "point") + "Format"] || "");
        });
      };

      z.prototype.cleanSplit = function (c) {
        this.chart.series.forEach(function (g) {
          var e = g && g.tt;
          e && (!e.isActive || c ? g.tt = e.destroy() : e.isActive = !1);
        });
      };

      z.prototype.defaultFormatter = function (c) {
        var g = this.points || q(this);
        var e = [c.tooltipFooterHeaderFormatter(g[0])];
        e = e.concat(c.bodyFormatter(g));
        e.push(c.tooltipFooterHeaderFormatter(g[0], !0));
        return e;
      };

      z.prototype.destroy = function () {
        this.label && (this.label = this.label.destroy());
        this.split && this.tt && (this.cleanSplit(this.chart, !0), this.tt = this.tt.destroy());
        this.renderer && (this.renderer = this.renderer.destroy(), H(this.container));
        k.clearTimeout(this.hideTimer);
        k.clearTimeout(this.tooltipTimeout);
      };

      z.prototype.getAnchor = function (c, g) {
        var e = this.chart;
        var d = e.pointer;
        var a = e.inverted,
            b = e.plotTop,
            f = e.plotLeft,
            m = 0,
            n = 0,
            l,
            r;
        c = q(c);
        this.followPointer && g ? ("undefined" === typeof g.chartX && (g = d.normalize(g)), d = [g.chartX - f, g.chartY - b]) : c[0].tooltipPos ? d = c[0].tooltipPos : (c.forEach(function (c) {
          l = c.series.yAxis;
          r = c.series.xAxis;
          m += c.plotX || 0;
          n += c.plotLow ? (c.plotLow + (c.plotHigh || 0)) / 2 : c.plotY || 0;
          r && l && (a ? (m += b + e.plotHeight - r.len - r.pos, n += f + e.plotWidth - l.len - l.pos) : (m += r.pos - f, n += l.pos - b));
        }), m /= c.length, n /= c.length, d = [a ? e.plotWidth - n : m, a ? e.plotHeight - m : n], this.shared && 1 < c.length && g && (a ? d[0] = g.chartX - f : d[1] = g.chartY - b));
        return d.map(Math.round);
      };

      z.prototype.getDateFormat = function (c, g, e, d) {
        var a = this.chart.time,
            b = a.dateFormat("%m-%d %H:%M:%S.%L", g),
            h = {
          millisecond: 15,
          second: 12,
          minute: 9,
          hour: 6,
          day: 3
        },
            f = "millisecond";

        for (m in A) {
          if (c === A.week && +a.dateFormat("%w", g) === e && "00:00:00.000" === b.substr(6)) {
            var m = "week";
            break;
          }

          if (A[m] > c) {
            m = f;
            break;
          }

          if (h[m] && b.substr(h[m]) !== "01-01 00:00:00.000".substr(h[m])) break;
          "week" !== m && (f = m);
        }

        if (m) var n = a.resolveDTLFormat(d[m]).main;
        return n;
      };

      z.prototype.getLabel = function () {
        var c,
            g,
            e,
            d = this,
            a = this.chart.renderer,
            b = this.chart.styledMode,
            w = this.options,
            n = "tooltip" + (D(w.className) ? " " + w.className : ""),
            l = (null === (c = w.style) || void 0 === c ? void 0 : c.pointerEvents) || (!this.followPointer && w.stickOnContact ? "auto" : "none"),
            q;

        c = function c() {
          d.inContact = !0;
        };

        var k = function k() {
          var a = d.chart.hoverSeries;
          d.inContact = !1;
          if (a && a.onMouseOut) a.onMouseOut();
        };

        if (!this.label) {
          if (this.outside) {
            var t = null === (g = this.chart.options.chart) || void 0 === g ? void 0 : g.style;
            this.container = q = f.doc.createElement("div");
            q.className = "highcharts-tooltip-container";
            G(q, {
              position: "absolute",
              top: "1px",
              pointerEvents: l,
              zIndex: Math.max((null === (e = this.options.style) || void 0 === e ? void 0 : e.zIndex) || 0, ((null === t || void 0 === t ? void 0 : t.zIndex) || 0) + 3)
            });
            f.doc.body.appendChild(q);
            this.renderer = a = new f.Renderer(q, 0, 0, t, void 0, void 0, a.styledMode);
          }

          this.split ? this.label = a.g(n) : (this.label = a.label("", 0, 0, w.shape || "callout", null, null, w.useHTML, null, n).attr({
            padding: w.padding,
            r: w.borderRadius
          }), b || this.label.attr({
            fill: w.backgroundColor,
            "stroke-width": w.borderWidth
          }).css(w.style).css({
            pointerEvents: l
          }).shadow(w.shadow));
          b && (this.applyFilter(), this.label.addClass("highcharts-tooltip-" + this.chart.index));

          if (d.outside && !d.split) {
            var y = this.label,
                z = y.xSetter,
                v = y.ySetter;

            y.xSetter = function (a) {
              z.call(y, d.distance);
              q.style.left = a + "px";
            };

            y.ySetter = function (a) {
              v.call(y, d.distance);
              q.style.top = a + "px";
            };
          }

          this.label.on("mouseenter", c).on("mouseleave", k).attr({
            zIndex: 8
          }).add();
        }

        return this.label;
      };

      z.prototype.getPosition = function (g, d, e) {
        var h = this.chart,
            a = this.distance,
            b = {},
            f = h.inverted && e.h || 0,
            m,
            n = this.outside,
            l = n ? x.documentElement.clientWidth - 2 * a : h.chartWidth,
            r = n ? Math.max(x.body.scrollHeight, x.documentElement.scrollHeight, x.body.offsetHeight, x.documentElement.offsetHeight, x.documentElement.clientHeight) : h.chartHeight,
            q = h.pointer.getChartPosition(),
            k = function k(b) {
          var c = "x" === b;
          return [b, c ? l : r, c ? g : d].concat(n ? [c ? g * q.scaleX : d * q.scaleY, c ? q.left - a + (e.plotX + h.plotLeft) * q.scaleX : q.top - a + (e.plotY + h.plotTop) * q.scaleY, 0, c ? l : r] : [c ? g : d, c ? e.plotX + h.plotLeft : e.plotY + h.plotTop, c ? h.plotLeft : h.plotTop, c ? h.plotLeft + h.plotWidth : h.plotTop + h.plotHeight]);
        },
            y = k("y"),
            v = k("x"),
            t = !this.followPointer && c(e.ttBelow, !h.inverted === !!e.negative),
            p = function p(e, c, g, d, h, m, _p) {
          var u = n ? "y" === e ? a * q.scaleY : a * q.scaleX : a,
              w = (g - d) / 2,
              l = d < h - a,
              r = h + a + d < c,
              J = h - u - g + w;
          h = h + u - w;
          if (t && r) b[e] = h;else if (!t && l) b[e] = J;else if (l) b[e] = Math.min(_p - d, 0 > J - f ? J : J - f);else if (r) b[e] = Math.max(m, h + f + g > c ? h : h + f);else return !1;
        },
            z = function z(e, c, g, d, h) {
          var f;
          h < a || h > c - a ? f = !1 : b[e] = h < g / 2 ? 1 : h > c - d / 2 ? c - d - 2 : h - g / 2;
          return f;
        },
            A = function A(a) {
          var b = y;
          y = v;
          v = b;
          m = a;
        },
            E = function E() {
          !1 !== p.apply(0, y) ? !1 !== z.apply(0, v) || m || (A(!0), E()) : m ? b.x = b.y = 0 : (A(!0), E());
        };

        (h.inverted || 1 < this.len) && A();
        E();
        return b;
      };

      z.prototype.getXDateFormat = function (c, g, e) {
        g = g.dateTimeLabelFormats;
        var d = e && e.closestPointRange;
        return (d ? this.getDateFormat(d, c.x, e.options.startOfWeek, g) : g.day) || g.year;
      };

      z.prototype.hide = function (g) {
        var d = this;
        k.clearTimeout(this.hideTimer);
        g = c(g, this.options.hideDelay, 500);
        this.isHidden || (this.hideTimer = n(function () {
          d.getLabel().fadeOut(g ? void 0 : g);
          d.isHidden = !0;
        }, g));
      };

      z.prototype.init = function (g, d) {
        this.chart = g;
        this.options = d;
        this.crosshairs = [];
        this.now = {
          x: 0,
          y: 0
        };
        this.isHidden = !0;
        this.split = d.split && !g.inverted && !g.polar;
        this.shared = d.shared || this.split;
        this.outside = c(d.outside, !(!g.scrollablePixelsX && !g.scrollablePixelsY));
      };

      z.prototype.isStickyOnContact = function () {
        return !(this.followPointer || !this.options.stickOnContact || !this.inContact);
      };

      z.prototype.move = function (c, g, e, d) {
        var a = this,
            b = a.now,
            h = !1 !== a.options.animation && !a.isHidden && (1 < Math.abs(c - b.x) || 1 < Math.abs(g - b.y)),
            f = a.followPointer || 1 < a.len;
        t(b, {
          x: h ? (2 * b.x + c) / 3 : c,
          y: h ? (b.y + g) / 2 : g,
          anchorX: f ? void 0 : h ? (2 * b.anchorX + e) / 3 : e,
          anchorY: f ? void 0 : h ? (b.anchorY + d) / 2 : d
        });
        a.getLabel().attr(b);
        a.drawTracker();
        h && (k.clearTimeout(this.tooltipTimeout), this.tooltipTimeout = setTimeout(function () {
          a && a.move(c, g, e, d);
        }, 32));
      };

      z.prototype.refresh = function (g, f) {
        var e = this.chart,
            h = this.options,
            a = g,
            b = {},
            m = [],
            n = h.formatter || this.defaultFormatter;
        b = this.shared;
        var l = e.styledMode;

        if (h.enabled) {
          k.clearTimeout(this.hideTimer);
          this.followPointer = q(a)[0].series.tooltipOptions.followPointer;
          var r = this.getAnchor(a, f);
          f = r[0];
          var N = r[1];
          !b || a.series && a.series.noSharedTooltip ? b = a.getLabelConfig() : (e.pointer.applyInactiveState(a), a.forEach(function (a) {
            a.setState("hover");
            m.push(a.getLabelConfig());
          }), b = {
            x: a[0].category,
            y: a[0].y
          }, b.points = m, a = a[0]);
          this.len = m.length;
          e = n.call(b, this);
          n = a.series;
          this.distance = c(n.tooltipOptions.distance, 16);
          !1 === e ? this.hide() : (this.split ? this.renderSplit(e, q(g)) : (g = this.getLabel(), h.style.width && !l || g.css({
            width: this.chart.spacingBox.width + "px"
          }), g.attr({
            text: e && e.join ? e.join("") : e
          }), g.removeClass(/highcharts-color-[\d]+/g).addClass("highcharts-color-" + c(a.colorIndex, n.colorIndex)), l || g.attr({
            stroke: h.borderColor || a.color || n.color || d.neutralColor60
          }), this.updatePosition({
            plotX: f,
            plotY: N,
            negative: a.negative,
            ttBelow: a.ttBelow,
            h: r[2] || 0
          })), this.isHidden && this.label && this.label.attr({
            opacity: 1
          }).show(), this.isHidden = !1);
          C(this, "refresh");
        }
      };

      z.prototype.renderSplit = function (m, n) {
        function e(a, b, e, c, g) {
          void 0 === g && (g = !0);
          e ? (b = aa ? 0 : U, a = B(a - c / 2, x.left, x.right - c)) : (b -= I, a = g ? a - c - p : a + p, a = B(a, g ? a : x.left, x.right));
          return {
            x: a,
            y: b
          };
        }

        var h = this,
            a = h.chart,
            b = h.chart,
            w = b.plotHeight,
            l = b.plotLeft,
            q = b.plotTop,
            r = b.pointer,
            k = b.renderer,
            y = b.scrollablePixelsY,
            z = void 0 === y ? 0 : y;
        y = b.scrollingContainer;
        y = void 0 === y ? {
          scrollLeft: 0,
          scrollTop: 0
        } : y;
        var A = y.scrollLeft,
            v = y.scrollTop,
            E = b.styledMode,
            p = h.distance,
            C = h.options,
            M = h.options.positioner,
            x = {
          left: A,
          right: A + b.chartWidth,
          top: v,
          bottom: v + b.chartHeight
        },
            u = h.getLabel(),
            aa = !(!a.xAxis[0] || !a.xAxis[0].opposite),
            I = q + v,
            X = 0,
            U = w - z;
        g(m) && (m = [!1, m]);
        m = m.slice(0, n.length + 1).reduce(function (a, b, g) {
          if (!1 !== b && "" !== b) {
            g = n[g - 1] || {
              isHeader: !0,
              plotX: n[0].plotX,
              plotY: w,
              series: {}
            };
            var f = g.isHeader,
                m = f ? h : g.series,
                r = m.tt,
                J = g.isHeader;
            var F = g.series;
            var N = "highcharts-color-" + c(g.colorIndex, F.colorIndex, "none");
            r || (r = {
              padding: C.padding,
              r: C.borderRadius
            }, E || (r.fill = C.backgroundColor, r["stroke-width"] = C.borderWidth), r = k.label("", 0, 0, C[J ? "headerShape" : "shape"] || "callout", void 0, void 0, C.useHTML).addClass((J ? "highcharts-tooltip-header " : "") + "highcharts-tooltip-box " + N).attr(r).add(u));
            r.isActive = !0;
            r.attr({
              text: b
            });
            E || r.css(C.style).shadow(C.shadow).attr({
              stroke: C.borderColor || g.color || F.color || d.neutralColor80
            });
            b = m.tt = r;
            J = b.getBBox();
            m = J.width + b.strokeWidth();
            f && (X = J.height, U += X, aa && (I -= X));
            F = g.plotX;
            F = void 0 === F ? 0 : F;
            N = g.plotY;
            N = void 0 === N ? 0 : N;
            var O = g.series;

            if (g.isHeader) {
              F = l + F;
              var y = q + w / 2;
            } else r = O.xAxis, O = O.yAxis, F = r.pos + B(F, -p, r.len + p), O.pos + N >= v + q && O.pos + N <= v + q + w - z && (y = O.pos + N);

            F = B(F, x.left - p, x.right + p);
            "number" === typeof y ? (J = J.height + 1, N = M ? M.call(h, m, J, g) : e(F, y, f, m), a.push({
              align: M ? 0 : void 0,
              anchorX: F,
              anchorY: y,
              boxWidth: m,
              point: g,
              rank: c(N.rank, f ? 1 : 0),
              size: J,
              target: N.y,
              tt: b,
              x: N.x
            })) : b.isActive = !1;
          }

          return a;
        }, []);
        !M && m.some(function (a) {
          return a.x < x.left;
        }) && (m = m.map(function (a) {
          var b = e(a.anchorX, a.anchorY, a.point.isHeader, a.boxWidth, !1);
          return t(a, {
            target: b.y,
            x: b.x
          });
        }));
        h.cleanSplit();
        f.distribute(m, U);
        m.forEach(function (a) {
          var b = a.pos;
          a.tt.attr({
            visibility: "undefined" === typeof b ? "hidden" : "inherit",
            x: a.x,
            y: b + I,
            anchorX: a.anchorX,
            anchorY: a.anchorY
          });
        });
        m = h.container;
        a = h.renderer;
        h.outside && m && a && (b = u.getBBox(), a.setSize(b.width + b.x, b.height + b.y, !1), r = r.getChartPosition(), m.style.left = r.left + "px", m.style.top = r.top + "px");
      };

      z.prototype.drawTracker = function () {
        if (this.followPointer || !this.options.stickOnContact) this.tracker && this.tracker.destroy();else {
          var c = this.chart,
              g = this.label,
              e = c.hoverPoint;

          if (g && e) {
            var d = {
              x: 0,
              y: 0,
              width: 0,
              height: 0
            };
            e = this.getAnchor(e);
            var a = g.getBBox();
            e[0] += c.plotLeft - g.translateX;
            e[1] += c.plotTop - g.translateY;
            d.x = Math.min(0, e[0]);
            d.y = Math.min(0, e[1]);
            d.width = 0 > e[0] ? Math.max(Math.abs(e[0]), a.width - e[0]) : Math.max(Math.abs(e[0]), a.width);
            d.height = 0 > e[1] ? Math.max(Math.abs(e[1]), a.height - Math.abs(e[1])) : Math.max(Math.abs(e[1]), a.height);
            this.tracker ? this.tracker.attr(d) : (this.tracker = g.renderer.rect(d).addClass("highcharts-tracker").add(g), c.styledMode || this.tracker.attr({
              fill: "rgba(0,0,0,0)"
            }));
          }
        }
      };

      z.prototype.styledModeFormat = function (c) {
        return c.replace('style="font-size: 10px"', 'class="highcharts-header"').replace(/style="color:{(point|series)\.color}"/g, 'class="highcharts-color-{$1.colorIndex}"');
      };

      z.prototype.tooltipFooterHeaderFormatter = function (c, g) {
        var e = g ? "footer" : "header",
            d = c.series,
            a = d.tooltipOptions,
            b = a.xDateFormat,
            f = d.xAxis,
            m = f && "datetime" === f.options.type && E(c.key),
            n = a[e + "Format"];
        g = {
          isFooter: g,
          labelConfig: c
        };
        C(this, "headerFormatter", g, function (e) {
          m && !b && (b = this.getXDateFormat(c, a, f));
          m && b && (c.point && c.point.tooltipDateKeys || ["key"]).forEach(function (a) {
            n = n.replace("{point." + a + "}", "{point." + a + ":" + b + "}");
          });
          d.chart.styledMode && (n = this.styledModeFormat(n));
          e.text = l(n, {
            point: c,
            series: d
          }, this.chart);
        });
        return g.text;
      };

      z.prototype.update = function (c) {
        this.destroy();
        y(!0, this.chart.options.tooltip.userOptions, c);
        this.init(this.chart, y(!0, this.options, c));
      };

      z.prototype.updatePosition = function (c) {
        var g = this.chart,
            e = g.pointer,
            d = this.getLabel(),
            a = c.plotX + g.plotLeft;
        g = c.plotY + g.plotTop;
        e = e.getChartPosition();
        c = (this.options.positioner || this.getPosition).call(this, d.width, d.height, c);

        if (this.outside) {
          var b = (this.options.borderWidth || 0) + 2 * this.distance;
          this.renderer.setSize(d.width + b, d.height + b, !1);
          if (1 !== e.scaleX || 1 !== e.scaleY) G(this.container, {
            transform: "scale(" + e.scaleX + ", " + e.scaleY + ")"
          }), a *= e.scaleX, g *= e.scaleY;
          a += e.left - c.x;
          g += e.top - c.y;
        }

        this.move(Math.round(c.x), Math.round(c.y || 0), a, g);
      };

      return z;
    }();

    f.Tooltip = M;
    return f.Tooltip;
  });
  P(k, "Core/Pointer.js", [k["Core/Color/Color.js"], k["Core/Globals.js"], k["Core/Color/Palette.js"], k["Core/Tooltip.js"], k["Core/Utilities.js"]], function (f, d, k, x, B) {
    var G = f.parse,
        D = d.charts,
        H = d.noop,
        t = B.addEvent,
        C = B.attr,
        l = B.css,
        E = B.defined,
        g = B.extend,
        y = B.find,
        c = B.fireEvent,
        q = B.isNumber,
        n = B.isObject,
        A = B.objectEach,
        M = B.offset,
        z = B.pick,
        m = B.splat;
    "";

    f = function () {
      function f(e, c) {
        this.lastValidTouch = {};
        this.pinchDown = [];
        this.runChartClick = !1;
        this.chart = e;
        this.hasDragged = !1;
        this.options = c;

        this.unbindContainerMouseLeave = function () {};

        this.unbindContainerMouseEnter = function () {};

        this.init(e, c);
      }

      f.prototype.applyInactiveState = function (e) {
        var c = [],
            a;
        (e || []).forEach(function (b) {
          a = b.series;
          c.push(a);
          a.linkedParent && c.push(a.linkedParent);
          a.linkedSeries && (c = c.concat(a.linkedSeries));
          a.navigatorSeries && c.push(a.navigatorSeries);
        });
        this.chart.series.forEach(function (a) {
          -1 === c.indexOf(a) ? a.setState("inactive", !0) : a.options.inactiveOtherPoints && a.setAllPointsToState("inactive");
        });
      };

      f.prototype.destroy = function () {
        var e = this;
        "undefined" !== typeof e.unDocMouseMove && e.unDocMouseMove();
        this.unbindContainerMouseLeave();
        d.chartCount || (d.unbindDocumentMouseUp && (d.unbindDocumentMouseUp = d.unbindDocumentMouseUp()), d.unbindDocumentTouchEnd && (d.unbindDocumentTouchEnd = d.unbindDocumentTouchEnd()));
        clearInterval(e.tooltipTimeout);
        A(e, function (c, a) {
          e[a] = void 0;
        });
      };

      f.prototype.drag = function (e) {
        var c = this.chart,
            a = c.options.chart,
            b = e.chartX,
            g = e.chartY,
            d = this.zoomHor,
            f = this.zoomVert,
            m = c.plotLeft,
            l = c.plotTop,
            q = c.plotWidth,
            r = c.plotHeight,
            y = this.selectionMarker,
            v = this.mouseDownX || 0,
            t = this.mouseDownY || 0,
            p = n(a.panning) ? a.panning && a.panning.enabled : a.panning,
            z = a.panKey && e[a.panKey + "Key"];
        if (!y || !y.touch) if (b < m ? b = m : b > m + q && (b = m + q), g < l ? g = l : g > l + r && (g = l + r), this.hasDragged = Math.sqrt(Math.pow(v - b, 2) + Math.pow(t - g, 2)), 10 < this.hasDragged) {
          var A = c.isInsidePlot(v - m, t - l);
          c.hasCartesianSeries && (this.zoomX || this.zoomY) && A && !z && !y && (this.selectionMarker = y = c.renderer.rect(m, l, d ? 1 : q, f ? 1 : r, 0).attr({
            "class": "highcharts-selection-marker",
            zIndex: 7
          }).add(), c.styledMode || y.attr({
            fill: a.selectionMarkerFill || G(k.highlightColor80).setOpacity(.25).get()
          }));
          y && d && (b -= v, y.attr({
            width: Math.abs(b),
            x: (0 < b ? 0 : b) + v
          }));
          y && f && (b = g - t, y.attr({
            height: Math.abs(b),
            y: (0 < b ? 0 : b) + t
          }));
          A && !y && p && c.pan(e, a.panning);
        }
      };

      f.prototype.dragStart = function (e) {
        var c = this.chart;
        c.mouseIsDown = e.type;
        c.cancelClick = !1;
        c.mouseDownX = this.mouseDownX = e.chartX;
        c.mouseDownY = this.mouseDownY = e.chartY;
      };

      f.prototype.drop = function (e) {
        var d = this,
            a = this.chart,
            b = this.hasPinched;

        if (this.selectionMarker) {
          var f = {
            originalEvent: e,
            xAxis: [],
            yAxis: []
          },
              m = this.selectionMarker,
              n = m.attr ? m.attr("x") : m.x,
              r = m.attr ? m.attr("y") : m.y,
              k = m.attr ? m.attr("width") : m.width,
              y = m.attr ? m.attr("height") : m.height,
              t;
          if (this.hasDragged || b) a.axes.forEach(function (a) {
            if (a.zoomEnabled && E(a.min) && (b || d[{
              xAxis: "zoomX",
              yAxis: "zoomY"
            }[a.coll]]) && q(n) && q(r)) {
              var c = a.horiz,
                  g = "touchend" === e.type ? a.minPixelPadding : 0,
                  h = a.toValue((c ? n : r) + g);
              c = a.toValue((c ? n + k : r + y) - g);
              f[a.coll].push({
                axis: a,
                min: Math.min(h, c),
                max: Math.max(h, c)
              });
              t = !0;
            }
          }), t && c(a, "selection", f, function (e) {
            a.zoom(g(e, b ? {
              animation: !1
            } : null));
          });
          q(a.index) && (this.selectionMarker = this.selectionMarker.destroy());
          b && this.scaleGroups();
        }

        a && q(a.index) && (l(a.container, {
          cursor: a._cursor
        }), a.cancelClick = 10 < this.hasDragged, a.mouseIsDown = this.hasDragged = this.hasPinched = !1, this.pinchDown = []);
      };

      f.prototype.findNearestKDPoint = function (e, c, a) {
        var b = this.chart,
            g = b.hoverPoint;
        b = b.tooltip;
        if (g && b && b.isStickyOnContact()) return g;
        var d;
        e.forEach(function (b) {
          var e = !(b.noSharedTooltip && c) && 0 > b.options.findNearestPointBy.indexOf("y");
          b = b.searchPoint(a, e);

          if ((e = n(b, !0) && b.series) && !(e = !n(d, !0))) {
            e = d.distX - b.distX;
            var g = d.dist - b.dist,
                f = (b.series.group && b.series.group.zIndex) - (d.series.group && d.series.group.zIndex);
            e = 0 < (0 !== e && c ? e : 0 !== g ? g : 0 !== f ? f : d.series.index > b.series.index ? -1 : 1);
          }

          e && (d = b);
        });
        return d;
      };

      f.prototype.getChartCoordinatesFromPoint = function (e, c) {
        var a = e.series,
            b = a.xAxis;
        a = a.yAxis;
        var g = z(e.clientX, e.plotX),
            d = e.shapeArgs;
        if (b && a) return c ? {
          chartX: b.len + b.pos - g,
          chartY: a.len + a.pos - e.plotY
        } : {
          chartX: g + b.pos,
          chartY: e.plotY + a.pos
        };
        if (d && d.x && d.y) return {
          chartX: d.x,
          chartY: d.y
        };
      };

      f.prototype.getChartPosition = function () {
        if (this.chartPosition) return this.chartPosition;
        var e = this.chart.container,
            c = M(e);
        this.chartPosition = {
          left: c.left,
          top: c.top,
          scaleX: 1,
          scaleY: 1
        };
        var a = e.offsetWidth;
        e = e.offsetHeight;
        2 < a && 2 < e && (this.chartPosition.scaleX = c.width / a, this.chartPosition.scaleY = c.height / e);
        return this.chartPosition;
      };

      f.prototype.getCoordinates = function (e) {
        var c = {
          xAxis: [],
          yAxis: []
        };
        this.chart.axes.forEach(function (a) {
          c[a.isXAxis ? "xAxis" : "yAxis"].push({
            axis: a,
            value: a.toValue(e[a.horiz ? "chartX" : "chartY"])
          });
        });
        return c;
      };

      f.prototype.getHoverData = function (e, g, a, b, d, f) {
        var h,
            m = [];
        b = !(!b || !e);
        var w = g && !g.stickyTracking,
            l = {
          chartX: f ? f.chartX : void 0,
          chartY: f ? f.chartY : void 0,
          shared: d
        };
        c(this, "beforeGetHoverData", l);
        w = w ? [g] : a.filter(function (a) {
          return l.filter ? l.filter(a) : a.visible && !(!d && a.directTouch) && z(a.options.enableMouseTracking, !0) && a.stickyTracking;
        });
        g = (h = b || !f ? e : this.findNearestKDPoint(w, d, f)) && h.series;
        h && (d && !g.noSharedTooltip ? (w = a.filter(function (a) {
          return l.filter ? l.filter(a) : a.visible && !(!d && a.directTouch) && z(a.options.enableMouseTracking, !0) && !a.noSharedTooltip;
        }), w.forEach(function (a) {
          var b = y(a.points, function (a) {
            return a.x === h.x && !a.isNull;
          });
          n(b) && (a.chart.isBoosting && (b = a.getPoint(b)), m.push(b));
        })) : m.push(h));
        l = {
          hoverPoint: h
        };
        c(this, "afterGetHoverData", l);
        return {
          hoverPoint: l.hoverPoint,
          hoverSeries: g,
          hoverPoints: m
        };
      };

      f.prototype.getPointFromEvent = function (e) {
        e = e.target;

        for (var c; e && !c;) {
          c = e.point, e = e.parentNode;
        }

        return c;
      };

      f.prototype.onTrackerMouseOut = function (e) {
        e = e.relatedTarget || e.toElement;
        var c = this.chart.hoverSeries;
        this.isDirectTouch = !1;
        if (!(!c || !e || c.stickyTracking || this.inClass(e, "highcharts-tooltip") || this.inClass(e, "highcharts-series-" + c.index) && this.inClass(e, "highcharts-tracker"))) c.onMouseOut();
      };

      f.prototype.inClass = function (e, c) {
        for (var a; e;) {
          if (a = C(e, "class")) {
            if (-1 !== a.indexOf(c)) return !0;
            if (-1 !== a.indexOf("highcharts-container")) return !1;
          }

          e = e.parentNode;
        }
      };

      f.prototype.init = function (e, c) {
        this.options = c;
        this.chart = e;
        this.runChartClick = c.chart.events && !!c.chart.events.click;
        this.pinchDown = [];
        this.lastValidTouch = {};
        x && (e.tooltip = new x(e, c.tooltip), this.followTouchMove = z(c.tooltip.followTouchMove, !0));
        this.setDOMEvents();
      };

      f.prototype.normalize = function (e, c) {
        var a = e.touches,
            b = a ? a.length ? a.item(0) : z(a.changedTouches, e.changedTouches)[0] : e;
        c || (c = this.getChartPosition());
        a = b.pageX - c.left;
        b = b.pageY - c.top;
        a /= c.scaleX;
        b /= c.scaleY;
        return g(e, {
          chartX: Math.round(a),
          chartY: Math.round(b)
        });
      };

      f.prototype.onContainerClick = function (e) {
        var d = this.chart,
            a = d.hoverPoint;
        e = this.normalize(e);
        var b = d.plotLeft,
            f = d.plotTop;
        d.cancelClick || (a && this.inClass(e.target, "highcharts-tracker") ? (c(a.series, "click", g(e, {
          point: a
        })), d.hoverPoint && a.firePointEvent("click", e)) : (g(e, this.getCoordinates(e)), d.isInsidePlot(e.chartX - b, e.chartY - f) && c(d, "click", e)));
      };

      f.prototype.onContainerMouseDown = function (e) {
        var c = 1 === ((e.buttons || e.button) & 1);
        e = this.normalize(e);
        if (d.isFirefox && 0 !== e.button) this.onContainerMouseMove(e);
        if ("undefined" === typeof e.button || c) this.zoomOption(e), c && e.preventDefault && e.preventDefault(), this.dragStart(e);
      };

      f.prototype.onContainerMouseLeave = function (e) {
        var c = D[z(d.hoverChartIndex, -1)],
            a = this.chart.tooltip;
        e = this.normalize(e);
        c && (e.relatedTarget || e.toElement) && (c.pointer.reset(), c.pointer.chartPosition = void 0);
        a && !a.isHidden && this.reset();
      };

      f.prototype.onContainerMouseEnter = function (e) {
        delete this.chartPosition;
      };

      f.prototype.onContainerMouseMove = function (e) {
        var c = this.chart;
        e = this.normalize(e);
        this.setHoverChartIndex();
        e.preventDefault || (e.returnValue = !1);
        ("mousedown" === c.mouseIsDown || this.touchSelect(e)) && this.drag(e);
        c.openMenu || !this.inClass(e.target, "highcharts-tracker") && !c.isInsidePlot(e.chartX - c.plotLeft, e.chartY - c.plotTop) || this.runPointActions(e);
      };

      f.prototype.onDocumentTouchEnd = function (e) {
        D[d.hoverChartIndex] && D[d.hoverChartIndex].pointer.drop(e);
      };

      f.prototype.onContainerTouchMove = function (e) {
        if (this.touchSelect(e)) this.onContainerMouseMove(e);else this.touch(e);
      };

      f.prototype.onContainerTouchStart = function (e) {
        if (this.touchSelect(e)) this.onContainerMouseDown(e);else this.zoomOption(e), this.touch(e, !0);
      };

      f.prototype.onDocumentMouseMove = function (e) {
        var c = this.chart,
            a = this.chartPosition;
        e = this.normalize(e, a);
        var b = c.tooltip;
        !a || b && b.isStickyOnContact() || c.isInsidePlot(e.chartX - c.plotLeft, e.chartY - c.plotTop) || this.inClass(e.target, "highcharts-tracker") || this.reset();
      };

      f.prototype.onDocumentMouseUp = function (e) {
        var c = D[z(d.hoverChartIndex, -1)];
        c && c.pointer.drop(e);
      };

      f.prototype.pinch = function (e) {
        var c = this,
            a = c.chart,
            b = c.pinchDown,
            d = e.touches || [],
            f = d.length,
            m = c.lastValidTouch,
            n = c.hasZoom,
            l = c.selectionMarker,
            q = {},
            r = 1 === f && (c.inClass(e.target, "highcharts-tracker") && a.runTrackerClick || c.runChartClick),
            k = {};
        1 < f && (c.initiated = !0);
        n && c.initiated && !r && !1 !== e.cancelable && e.preventDefault();
        [].map.call(d, function (a) {
          return c.normalize(a);
        });
        "touchstart" === e.type ? ([].forEach.call(d, function (a, e) {
          b[e] = {
            chartX: a.chartX,
            chartY: a.chartY
          };
        }), m.x = [b[0].chartX, b[1] && b[1].chartX], m.y = [b[0].chartY, b[1] && b[1].chartY], a.axes.forEach(function (b) {
          if (b.zoomEnabled) {
            var e = a.bounds[b.horiz ? "h" : "v"],
                c = b.minPixelPadding,
                g = b.toPixels(Math.min(z(b.options.min, b.dataMin), b.dataMin)),
                d = b.toPixels(Math.max(z(b.options.max, b.dataMax), b.dataMax)),
                f = Math.max(g, d);
            e.min = Math.min(b.pos, Math.min(g, d) - c);
            e.max = Math.max(b.pos + b.len, f + c);
          }
        }), c.res = !0) : c.followTouchMove && 1 === f ? this.runPointActions(c.normalize(e)) : b.length && (l || (c.selectionMarker = l = g({
          destroy: H,
          touch: !0
        }, a.plotBox)), c.pinchTranslate(b, d, q, l, k, m), c.hasPinched = n, c.scaleGroups(q, k), c.res && (c.res = !1, this.reset(!1, 0)));
      };

      f.prototype.pinchTranslate = function (e, c, a, b, g, d) {
        this.zoomHor && this.pinchTranslateDirection(!0, e, c, a, b, g, d);
        this.zoomVert && this.pinchTranslateDirection(!1, e, c, a, b, g, d);
      };

      f.prototype.pinchTranslateDirection = function (e, c, a, b, g, d, f, m) {
        var h = this.chart,
            n = e ? "x" : "y",
            l = e ? "X" : "Y",
            w = "chart" + l,
            q = e ? "width" : "height",
            r = h["plot" + (e ? "Left" : "Top")],
            p,
            J,
            F = m || 1,
            k = h.inverted,
            u = h.bounds[e ? "h" : "v"],
            y = 1 === c.length,
            I = c[0][w],
            t = a[0][w],
            z = !y && c[1][w],
            O = !y && a[1][w];

        a = function a() {
          "number" === typeof O && 20 < Math.abs(I - z) && (F = m || Math.abs(t - O) / Math.abs(I - z));
          J = (r - t) / F + I;
          p = h["plot" + (e ? "Width" : "Height")] / F;
        };

        a();
        c = J;

        if (c < u.min) {
          c = u.min;
          var A = !0;
        } else c + p > u.max && (c = u.max - p, A = !0);

        A ? (t -= .8 * (t - f[n][0]), "number" === typeof O && (O -= .8 * (O - f[n][1])), a()) : f[n] = [t, O];
        k || (d[n] = J - r, d[q] = p);
        d = k ? 1 / F : F;
        g[q] = p;
        g[n] = c;
        b[k ? e ? "scaleY" : "scaleX" : "scale" + l] = F;
        b["translate" + l] = d * r + (t - d * I);
      };

      f.prototype.reset = function (e, c) {
        var a = this.chart,
            b = a.hoverSeries,
            g = a.hoverPoint,
            d = a.hoverPoints,
            f = a.tooltip,
            h = f && f.shared ? d : g;
        e && h && m(h).forEach(function (a) {
          a.series.isCartesian && "undefined" === typeof a.plotX && (e = !1);
        });
        if (e) f && h && m(h).length && (f.refresh(h), f.shared && d ? d.forEach(function (a) {
          a.setState(a.state, !0);
          a.series.isCartesian && (a.series.xAxis.crosshair && a.series.xAxis.drawCrosshair(null, a), a.series.yAxis.crosshair && a.series.yAxis.drawCrosshair(null, a));
        }) : g && (g.setState(g.state, !0), a.axes.forEach(function (a) {
          a.crosshair && g.series[a.coll] === a && a.drawCrosshair(null, g);
        })));else {
          if (g) g.onMouseOut();
          d && d.forEach(function (a) {
            a.setState();
          });
          if (b) b.onMouseOut();
          f && f.hide(c);
          this.unDocMouseMove && (this.unDocMouseMove = this.unDocMouseMove());
          a.axes.forEach(function (a) {
            a.hideCrosshair();
          });
          this.hoverX = a.hoverPoints = a.hoverPoint = null;
        }
      };

      f.prototype.runPointActions = function (e, c) {
        var a = this.chart,
            b = a.tooltip && a.tooltip.options.enabled ? a.tooltip : void 0,
            g = b ? b.shared : !1,
            f = c || a.hoverPoint,
            h = f && f.series || a.hoverSeries;
        h = this.getHoverData(f, h, a.series, (!e || "touchmove" !== e.type) && (!!c || h && h.directTouch && this.isDirectTouch), g, e);
        f = h.hoverPoint;
        var m = h.hoverPoints;
        c = (h = h.hoverSeries) && h.tooltipOptions.followPointer;
        g = g && h && !h.noSharedTooltip;

        if (f && (f !== a.hoverPoint || b && b.isHidden)) {
          (a.hoverPoints || []).forEach(function (a) {
            -1 === m.indexOf(a) && a.setState();
          });
          if (a.hoverSeries !== h) h.onMouseOver();
          this.applyInactiveState(m);
          (m || []).forEach(function (a) {
            a.setState("hover");
          });
          a.hoverPoint && a.hoverPoint.firePointEvent("mouseOut");
          if (!f.series) return;
          a.hoverPoints = m;
          a.hoverPoint = f;
          f.firePointEvent("mouseOver");
          b && b.refresh(g ? m : f, e);
        } else c && b && !b.isHidden && (f = b.getAnchor([{}], e), b.updatePosition({
          plotX: f[0],
          plotY: f[1]
        }));

        this.unDocMouseMove || (this.unDocMouseMove = t(a.container.ownerDocument, "mousemove", function (a) {
          var b = D[d.hoverChartIndex];
          if (b) b.pointer.onDocumentMouseMove(a);
        }));
        a.axes.forEach(function (b) {
          var c = z((b.crosshair || {}).snap, !0),
              g;
          c && ((g = a.hoverPoint) && g.series[b.coll] === b || (g = y(m, function (a) {
            return a.series[b.coll] === b;
          })));
          g || !c ? b.drawCrosshair(e, g) : b.hideCrosshair();
        });
      };

      f.prototype.scaleGroups = function (e, c) {
        var a = this.chart,
            b;
        a.series.forEach(function (g) {
          b = e || g.getPlotBox();
          g.xAxis && g.xAxis.zoomEnabled && g.group && (g.group.attr(b), g.markerGroup && (g.markerGroup.attr(b), g.markerGroup.clip(c ? a.clipRect : null)), g.dataLabelsGroup && g.dataLabelsGroup.attr(b));
        });
        a.clipRect.attr(c || a.clipBox);
      };

      f.prototype.setDOMEvents = function () {
        var e = this,
            c = this.chart.container,
            a = c.ownerDocument;
        c.onmousedown = this.onContainerMouseDown.bind(this);
        c.onmousemove = this.onContainerMouseMove.bind(this);
        c.onclick = this.onContainerClick.bind(this);
        this.unbindContainerMouseEnter = t(c, "mouseenter", this.onContainerMouseEnter.bind(this));
        this.unbindContainerMouseLeave = t(c, "mouseleave", this.onContainerMouseLeave.bind(this));
        d.unbindDocumentMouseUp || (d.unbindDocumentMouseUp = t(a, "mouseup", this.onDocumentMouseUp.bind(this)));

        for (var b = this.chart.renderTo.parentElement; b && "BODY" !== b.tagName;) {
          t(b, "scroll", function () {
            delete e.chartPosition;
          }), b = b.parentElement;
        }

        d.hasTouch && (t(c, "touchstart", this.onContainerTouchStart.bind(this), {
          passive: !1
        }), t(c, "touchmove", this.onContainerTouchMove.bind(this), {
          passive: !1
        }), d.unbindDocumentTouchEnd || (d.unbindDocumentTouchEnd = t(a, "touchend", this.onDocumentTouchEnd.bind(this), {
          passive: !1
        })));
      };

      f.prototype.setHoverChartIndex = function () {
        var e = this.chart,
            c = d.charts[z(d.hoverChartIndex, -1)];
        if (c && c !== e) c.pointer.onContainerMouseLeave({
          relatedTarget: !0
        });
        c && c.mouseIsDown || (d.hoverChartIndex = e.index);
      };

      f.prototype.touch = function (e, c) {
        var a = this.chart,
            b;
        this.setHoverChartIndex();
        if (1 === e.touches.length) {
          if (e = this.normalize(e), (b = a.isInsidePlot(e.chartX - a.plotLeft, e.chartY - a.plotTop)) && !a.openMenu) {
            c && this.runPointActions(e);

            if ("touchmove" === e.type) {
              c = this.pinchDown;
              var g = c[0] ? 4 <= Math.sqrt(Math.pow(c[0].chartX - e.chartX, 2) + Math.pow(c[0].chartY - e.chartY, 2)) : !1;
            }

            z(g, !0) && this.pinch(e);
          } else c && this.reset();
        } else 2 === e.touches.length && this.pinch(e);
      };

      f.prototype.touchSelect = function (e) {
        return !(!this.chart.options.chart.zoomBySingleTouch || !e.touches || 1 !== e.touches.length);
      };

      f.prototype.zoomOption = function (e) {
        var c = this.chart,
            a = c.options.chart,
            b = a.zoomType || "";
        c = c.inverted;
        /touch/.test(e.type) && (b = z(a.pinchType, b));
        this.zoomX = e = /x/.test(b);
        this.zoomY = b = /y/.test(b);
        this.zoomHor = e && !c || b && c;
        this.zoomVert = b && !c || e && c;
        this.hasZoom = e || b;
      };

      return f;
    }();

    return d.Pointer = f;
  });
  P(k, "Core/MSPointer.js", [k["Core/Globals.js"], k["Core/Pointer.js"], k["Core/Utilities.js"]], function (f, d, k) {
    function x() {
      var c = [];

      c.item = function (c) {
        return this[c];
      };

      E(y, function (g) {
        c.push({
          pageX: g.pageX,
          pageY: g.pageY,
          target: g.target
        });
      });
      return c;
    }

    function B(c, g, d, l) {
      "touch" !== c.pointerType && c.pointerType !== c.MSPOINTER_TYPE_TOUCH || !D[f.hoverChartIndex] || (l(c), l = D[f.hoverChartIndex].pointer, l[g]({
        type: d,
        target: c.currentTarget,
        preventDefault: t,
        touches: x()
      }));
    }

    var G = this && this.__extends || function () {
      var _c2 = function c(g, d) {
        _c2 = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (c, g) {
          c.__proto__ = g;
        } || function (c, g) {
          for (var d in g) {
            g.hasOwnProperty(d) && (c[d] = g[d]);
          }
        };

        return _c2(g, d);
      };

      return function (g, d) {
        function f() {
          this.constructor = g;
        }

        _c2(g, d);

        g.prototype = null === d ? Object.create(d) : (f.prototype = d.prototype, new f());
      };
    }(),
        D = f.charts,
        H = f.doc,
        t = f.noop,
        C = k.addEvent,
        l = k.css,
        E = k.objectEach,
        g = k.removeEvent,
        y = {},
        c = !!f.win.PointerEvent;

    return function (d) {
      function f() {
        return null !== d && d.apply(this, arguments) || this;
      }

      G(f, d);

      f.prototype.batchMSEvents = function (g) {
        g(this.chart.container, c ? "pointerdown" : "MSPointerDown", this.onContainerPointerDown);
        g(this.chart.container, c ? "pointermove" : "MSPointerMove", this.onContainerPointerMove);
        g(H, c ? "pointerup" : "MSPointerUp", this.onDocumentPointerUp);
      };

      f.prototype.destroy = function () {
        this.batchMSEvents(g);
        d.prototype.destroy.call(this);
      };

      f.prototype.init = function (c, g) {
        d.prototype.init.call(this, c, g);
        this.hasZoom && l(c.container, {
          "-ms-touch-action": "none",
          "touch-action": "none"
        });
      };

      f.prototype.onContainerPointerDown = function (c) {
        B(c, "onContainerTouchStart", "touchstart", function (c) {
          y[c.pointerId] = {
            pageX: c.pageX,
            pageY: c.pageY,
            target: c.currentTarget
          };
        });
      };

      f.prototype.onContainerPointerMove = function (c) {
        B(c, "onContainerTouchMove", "touchmove", function (c) {
          y[c.pointerId] = {
            pageX: c.pageX,
            pageY: c.pageY
          };
          y[c.pointerId].target || (y[c.pointerId].target = c.currentTarget);
        });
      };

      f.prototype.onDocumentPointerUp = function (c) {
        B(c, "onDocumentTouchEnd", "touchend", function (c) {
          delete y[c.pointerId];
        });
      };

      f.prototype.setDOMEvents = function () {
        d.prototype.setDOMEvents.call(this);
        (this.hasZoom || this.followTouchMove) && this.batchMSEvents(C);
      };

      return f;
    }(d);
  });
  P(k, "Core/Series/Point.js", [k["Core/Renderer/HTML/AST.js"], k["Core/Animation/AnimationUtilities.js"], k["Core/Globals.js"], k["Core/Options.js"], k["Core/Utilities.js"]], function (f, d, k, x, B) {
    var G = d.animObject,
        D = x.defaultOptions,
        H = B.addEvent,
        t = B.defined,
        C = B.erase,
        l = B.extend,
        E = B.fireEvent,
        g = B.format,
        y = B.getNestedProperty,
        c = B.isArray,
        q = B.isFunction,
        n = B.isNumber,
        A = B.isObject,
        M = B.merge,
        z = B.objectEach,
        m = B.pick,
        r = B.syncTimeout,
        e = B.removeEvent,
        h = B.uniqueKey;
    "";

    d = function () {
      function a() {
        this.colorIndex = this.category = void 0;
        this.formatPrefix = "point";
        this.id = void 0;
        this.isNull = !1;
        this.percentage = this.options = this.name = void 0;
        this.selected = !1;
        this.total = this.series = void 0;
        this.visible = !0;
        this.x = void 0;
      }

      a.prototype.animateBeforeDestroy = function () {
        var a = this,
            c = {
          x: a.startXPos,
          opacity: 0
        },
            e,
            g = a.getGraphicalProps();
        g.singular.forEach(function (b) {
          e = "dataLabel" === b;
          a[b] = a[b].animate(e ? {
            x: a[b].startXPos,
            y: a[b].startYPos,
            opacity: 0
          } : c);
        });
        g.plural.forEach(function (b) {
          a[b].forEach(function (b) {
            b.element && b.animate(l({
              x: a.startXPos
            }, b.startYPos ? {
              x: b.startXPos,
              y: b.startYPos
            } : {}));
          });
        });
      };

      a.prototype.applyOptions = function (b, c) {
        var e = this.series,
            g = e.options.pointValKey || e.pointValKey;
        b = a.prototype.optionsToObject.call(this, b);
        l(this, b);
        this.options = this.options ? l(this.options, b) : b;
        b.group && delete this.group;
        b.dataLabels && delete this.dataLabels;
        g && (this.y = a.prototype.getNestedProperty.call(this, g));
        this.formatPrefix = (this.isNull = m(this.isValid && !this.isValid(), null === this.x || !n(this.y))) ? "null" : "point";
        this.selected && (this.state = "select");
        "name" in this && "undefined" === typeof c && e.xAxis && e.xAxis.hasNames && (this.x = e.xAxis.nameToX(this));
        "undefined" === typeof this.x && e && (this.x = "undefined" === typeof c ? e.autoIncrement(this) : c);
        return this;
      };

      a.prototype.destroy = function () {
        function a() {
          if (c.graphic || c.dataLabel || c.dataLabels) e(c), c.destroyElements();

          for (m in c) {
            c[m] = null;
          }
        }

        var c = this,
            g = c.series,
            d = g.chart;
        g = g.options.dataSorting;
        var f = d.hoverPoints,
            h = G(c.series.chart.renderer.globalAnimation),
            m;
        c.legendItem && d.legend.destroyItem(c);
        f && (c.setState(), C(f, c), f.length || (d.hoverPoints = null));
        if (c === d.hoverPoint) c.onMouseOut();
        g && g.enabled ? (this.animateBeforeDestroy(), r(a, h.duration)) : a();
        d.pointCount--;
      };

      a.prototype.destroyElements = function (a) {
        var b = this;
        a = b.getGraphicalProps(a);
        a.singular.forEach(function (a) {
          b[a] = b[a].destroy();
        });
        a.plural.forEach(function (a) {
          b[a].forEach(function (a) {
            a.element && a.destroy();
          });
          delete b[a];
        });
      };

      a.prototype.firePointEvent = function (a, c, e) {
        var b = this,
            g = this.series.options;
        (g.point.events[a] || b.options && b.options.events && b.options.events[a]) && b.importEvents();
        "click" === a && g.allowPointSelect && (e = function e(a) {
          b.select && b.select(null, a.ctrlKey || a.metaKey || a.shiftKey);
        });
        E(b, a, c, e);
      };

      a.prototype.getClassName = function () {
        return "highcharts-point" + (this.selected ? " highcharts-point-select" : "") + (this.negative ? " highcharts-negative" : "") + (this.isNull ? " highcharts-null-point" : "") + ("undefined" !== typeof this.colorIndex ? " highcharts-color-" + this.colorIndex : "") + (this.options.className ? " " + this.options.className : "") + (this.zone && this.zone.className ? " " + this.zone.className.replace("highcharts-negative", "") : "");
      };

      a.prototype.getGraphicalProps = function (a) {
        var b = this,
            c = [],
            e,
            g = {
          singular: [],
          plural: []
        };
        a = a || {
          graphic: 1,
          dataLabel: 1
        };
        a.graphic && c.push("graphic", "upperGraphic", "shadowGroup");
        a.dataLabel && c.push("dataLabel", "dataLabelUpper", "connector");

        for (e = c.length; e--;) {
          var d = c[e];
          b[d] && g.singular.push(d);
        }

        ["dataLabel", "connector"].forEach(function (c) {
          var e = c + "s";
          a[c] && b[e] && g.plural.push(e);
        });
        return g;
      };

      a.prototype.getLabelConfig = function () {
        return {
          x: this.category,
          y: this.y,
          color: this.color,
          colorIndex: this.colorIndex,
          key: this.name || this.category,
          series: this.series,
          point: this,
          percentage: this.percentage,
          total: this.total || this.stackTotal
        };
      };

      a.prototype.getNestedProperty = function (a) {
        if (a) return 0 === a.indexOf("custom.") ? y(a, this.options) : this[a];
      };

      a.prototype.getZone = function () {
        var a = this.series,
            c = a.zones;
        a = a.zoneAxis || "y";
        var e = 0,
            g;

        for (g = c[e]; this[a] >= g.value;) {
          g = c[++e];
        }

        this.nonZonedColor || (this.nonZonedColor = this.color);
        this.color = g && g.color && !this.options.color ? g.color : this.nonZonedColor;
        return g;
      };

      a.prototype.hasNewShapeType = function () {
        return (this.graphic && (this.graphic.symbolName || this.graphic.element.nodeName)) !== this.shapeType;
      };

      a.prototype.init = function (a, c, e) {
        this.series = a;
        this.applyOptions(c, e);
        this.id = t(this.id) ? this.id : h();
        this.resolveColor();
        a.chart.pointCount++;
        E(this, "afterInit");
        return this;
      };

      a.prototype.optionsToObject = function (b) {
        var e = {},
            g = this.series,
            d = g.options.keys,
            f = d || g.pointArrayMap || ["y"],
            h = f.length,
            m = 0,
            l = 0;
        if (n(b) || null === b) e[f[0]] = b;else if (c(b)) for (!d && b.length > h && (g = _typeof(b[0]), "string" === g ? e.name = b[0] : "number" === g && (e.x = b[0]), m++); l < h;) {
          d && "undefined" === typeof b[m] || (0 < f[l].indexOf(".") ? a.prototype.setNestedProperty(e, b[m], f[l]) : e[f[l]] = b[m]), m++, l++;
        } else "object" === _typeof(b) && (e = b, b.dataLabels && (g._hasPointLabels = !0), b.marker && (g._hasPointMarkers = !0));
        return e;
      };

      a.prototype.resolveColor = function () {
        var a = this.series;
        var c = a.chart.options.chart.colorCount;
        var e = a.chart.styledMode;
        delete this.nonZonedColor;
        e || this.options.color || (this.color = a.color);
        a.options.colorByPoint ? (e || (c = a.options.colors || a.chart.options.colors, this.color = this.color || c[a.colorCounter], c = c.length), e = a.colorCounter, a.colorCounter++, a.colorCounter === c && (a.colorCounter = 0)) : e = a.colorIndex;
        this.colorIndex = m(this.options.colorIndex, e);
      };

      a.prototype.setNestedProperty = function (a, c, e) {
        e.split(".").reduce(function (a, b, e, g) {
          a[b] = g.length - 1 === e ? c : A(a[b], !0) ? a[b] : {};
          return a[b];
        }, a);
        return a;
      };

      a.prototype.tooltipFormatter = function (a) {
        var b = this.series,
            c = b.tooltipOptions,
            e = m(c.valueDecimals, ""),
            d = c.valuePrefix || "",
            f = c.valueSuffix || "";
        b.chart.styledMode && (a = b.chart.tooltip.styledModeFormat(a));
        (b.pointArrayMap || ["y"]).forEach(function (b) {
          b = "{point." + b;
          if (d || f) a = a.replace(RegExp(b + "}", "g"), d + b + "}" + f);
          a = a.replace(RegExp(b + "}", "g"), b + ":,." + e + "f}");
        });
        return g(a, {
          point: this,
          series: this.series
        }, b.chart);
      };

      a.prototype.update = function (a, c, e, g) {
        function b() {
          d.applyOptions(a);
          var b = h && d.hasDummyGraphic;
          b = null === d.y ? !b : b;
          h && b && (d.graphic = h.destroy(), delete d.hasDummyGraphic);
          A(a, !0) && (h && h.element && a && a.marker && "undefined" !== typeof a.marker.symbol && (d.graphic = h.destroy()), a && a.dataLabels && d.dataLabel && (d.dataLabel = d.dataLabel.destroy()), d.connector && (d.connector = d.connector.destroy()));
          l = d.index;
          f.updateParallelArrays(d, l);
          q.data[l] = A(q.data[l], !0) || A(a, !0) ? d.options : m(a, q.data[l]);
          f.isDirty = f.isDirtyData = !0;
          !f.fixedBox && f.hasCartesianSeries && (n.isDirtyBox = !0);
          "point" === q.legendType && (n.isDirtyLegend = !0);
          c && n.redraw(e);
        }

        var d = this,
            f = d.series,
            h = d.graphic,
            l,
            n = f.chart,
            q = f.options;
        c = m(c, !0);
        !1 === g ? b() : d.firePointEvent("update", {
          options: a
        }, b);
      };

      a.prototype.remove = function (a, c) {
        this.series.removePoint(this.series.data.indexOf(this), a, c);
      };

      a.prototype.select = function (a, c) {
        var b = this,
            e = b.series,
            g = e.chart;
        this.selectedStaging = a = m(a, !b.selected);
        b.firePointEvent(a ? "select" : "unselect", {
          accumulate: c
        }, function () {
          b.selected = b.options.selected = a;
          e.options.data[e.data.indexOf(b)] = b.options;
          b.setState(a && "select");
          c || g.getSelectedPoints().forEach(function (a) {
            var c = a.series;
            a.selected && a !== b && (a.selected = a.options.selected = !1, c.options.data[c.data.indexOf(a)] = a.options, a.setState(g.hoverPoints && c.options.inactiveOtherPoints ? "inactive" : ""), a.firePointEvent("unselect"));
          });
        });
        delete this.selectedStaging;
      };

      a.prototype.onMouseOver = function (a) {
        var b = this.series.chart,
            c = b.pointer;
        a = a ? c.normalize(a) : c.getChartCoordinatesFromPoint(this, b.inverted);
        c.runPointActions(a, this);
      };

      a.prototype.onMouseOut = function () {
        var a = this.series.chart;
        this.firePointEvent("mouseOut");
        this.series.options.inactiveOtherPoints || (a.hoverPoints || []).forEach(function (a) {
          a.setState();
        });
        a.hoverPoints = a.hoverPoint = null;
      };

      a.prototype.importEvents = function () {
        if (!this.hasImportedEvents) {
          var a = this,
              c = M(a.series.options.point, a.options).events;
          a.events = c;
          z(c, function (b, c) {
            q(b) && H(a, c, b);
          });
          this.hasImportedEvents = !0;
        }
      };

      a.prototype.setState = function (a, c) {
        var b = this.series,
            e = this.state,
            g = b.options.states[a || "normal"] || {},
            d = D.plotOptions[b.type].marker && b.options.marker,
            h = d && !1 === d.enabled,
            n = d && d.states && d.states[a || "normal"] || {},
            q = !1 === n.enabled,
            r = b.stateMarkerGraphic,
            w = this.marker || {},
            p = b.chart,
            k = b.halo,
            y,
            t = d && b.markerAttribs;
        a = a || "";

        if (!(a === this.state && !c || this.selected && "select" !== a || !1 === g.enabled || a && (q || h && !1 === n.enabled) || a && w.states && w.states[a] && !1 === w.states[a].enabled)) {
          this.state = a;
          t && (y = b.markerAttribs(this, a));

          if (this.graphic) {
            e && this.graphic.removeClass("highcharts-point-" + e);
            a && this.graphic.addClass("highcharts-point-" + a);

            if (!p.styledMode) {
              var u = b.pointAttribs(this, a);
              var z = m(p.options.chart.animation, g.animation);
              b.options.inactiveOtherPoints && u.opacity && ((this.dataLabels || []).forEach(function (a) {
                a && a.animate({
                  opacity: u.opacity
                }, z);
              }), this.connector && this.connector.animate({
                opacity: u.opacity
              }, z));
              this.graphic.animate(u, z);
            }

            y && this.graphic.animate(y, m(p.options.chart.animation, n.animation, d.animation));
            r && r.hide();
          } else {
            if (a && n) {
              e = w.symbol || b.symbol;
              r && r.currentSymbol !== e && (r = r.destroy());
              if (y) if (r) r[c ? "animate" : "attr"]({
                x: y.x,
                y: y.y
              });else e && (b.stateMarkerGraphic = r = p.renderer.symbol(e, y.x, y.y, y.width, y.height).add(b.markerGroup), r.currentSymbol = e);
              !p.styledMode && r && r.attr(b.pointAttribs(this, a));
            }

            r && (r[a && this.isInside ? "show" : "hide"](), r.element.point = this);
          }

          a = g.halo;
          g = (r = this.graphic || r) && r.visibility || "inherit";
          a && a.size && r && "hidden" !== g && !this.isCluster ? (k || (b.halo = k = p.renderer.path().add(r.parentGroup)), k.show()[c ? "animate" : "attr"]({
            d: this.haloPath(a.size)
          }), k.attr({
            "class": "highcharts-halo highcharts-color-" + m(this.colorIndex, b.colorIndex) + (this.className ? " " + this.className : ""),
            visibility: g,
            zIndex: -1
          }), k.point = this, p.styledMode || k.attr(l({
            fill: this.color || b.color,
            "fill-opacity": a.opacity
          }, f.filterUserAttributes(a.attributes || {})))) : k && k.point && k.point.haloPath && k.animate({
            d: k.point.haloPath(0)
          }, null, k.hide);
          E(this, "afterSetState");
        }
      };

      a.prototype.haloPath = function (a) {
        return this.series.chart.renderer.symbols.circle(Math.floor(this.plotX) - a, this.plotY - a, 2 * a, 2 * a);
      };

      return a;
    }();

    return k.Point = d;
  });
  P(k, "Core/Legend.js", [k["Core/Animation/AnimationUtilities.js"], k["Core/Globals.js"], k["Core/Series/Point.js"], k["Core/Utilities.js"]], function (f, d, k, x) {
    var B = f.animObject,
        G = f.setAnimation;
    f = d.isFirefox;
    var D = d.marginNames,
        H = d.win,
        t = x.addEvent,
        C = x.createElement,
        l = x.css,
        E = x.defined,
        g = x.discardElement,
        y = x.find,
        c = x.fireEvent,
        q = x.format,
        n = x.isNumber,
        A = x.merge,
        M = x.pick,
        z = x.relativeLength,
        m = x.stableSort,
        r = x.syncTimeout;
    x = x.wrap;

    var e = function () {
      function e(a, b) {
        this.allItems = [];
        this.contentGroup = this.box = void 0;
        this.display = !1;
        this.group = void 0;
        this.offsetWidth = this.maxLegendWidth = this.maxItemWidth = this.legendWidth = this.legendHeight = this.lastLineHeight = this.lastItemY = this.itemY = this.itemX = this.itemMarginTop = this.itemMarginBottom = this.itemHeight = this.initialItemY = 0;
        this.options = {};
        this.padding = 0;
        this.pages = [];
        this.proximate = !1;
        this.scrollGroup = void 0;
        this.widthOption = this.totalItemWidth = this.titleHeight = this.symbolWidth = this.symbolHeight = 0;
        this.chart = a;
        this.init(a, b);
      }

      e.prototype.init = function (a, b) {
        this.chart = a;
        this.setOptions(b);
        b.enabled && (this.render(), t(this.chart, "endResize", function () {
          this.legend.positionCheckboxes();
        }), this.proximate ? this.unchartrender = t(this.chart, "render", function () {
          this.legend.proximatePositions();
          this.legend.positionItems();
        }) : this.unchartrender && this.unchartrender());
      };

      e.prototype.setOptions = function (a) {
        var b = M(a.padding, 8);
        this.options = a;
        this.chart.styledMode || (this.itemStyle = a.itemStyle, this.itemHiddenStyle = A(this.itemStyle, a.itemHiddenStyle));
        this.itemMarginTop = a.itemMarginTop || 0;
        this.itemMarginBottom = a.itemMarginBottom || 0;
        this.padding = b;
        this.initialItemY = b - 5;
        this.symbolWidth = M(a.symbolWidth, 16);
        this.pages = [];
        this.proximate = "proximate" === a.layout && !this.chart.inverted;
        this.baseline = void 0;
      };

      e.prototype.update = function (a, b) {
        var e = this.chart;
        this.setOptions(A(!0, this.options, a));
        this.destroy();
        e.isDirtyLegend = e.isDirtyBox = !0;
        M(b, !0) && e.redraw();
        c(this, "afterUpdate");
      };

      e.prototype.colorizeItem = function (a, b) {
        a.legendGroup[b ? "removeClass" : "addClass"]("highcharts-legend-item-hidden");

        if (!this.chart.styledMode) {
          var e = this.options,
              g = a.legendItem,
              d = a.legendLine,
              f = a.legendSymbol,
              h = this.itemHiddenStyle.color;
          e = b ? e.itemStyle.color : h;
          var m = b ? a.color || h : h,
              l = a.options && a.options.marker,
              n = {
            fill: m
          };
          g && g.css({
            fill: e,
            color: e
          });
          d && d.attr({
            stroke: m
          });
          f && (l && f.isMarker && (n = a.pointAttribs(), b || (n.stroke = n.fill = h)), f.attr(n));
        }

        c(this, "afterColorizeItem", {
          item: a,
          visible: b
        });
      };

      e.prototype.positionItems = function () {
        this.allItems.forEach(this.positionItem, this);
        this.chart.isResizing || this.positionCheckboxes();
      };

      e.prototype.positionItem = function (a) {
        var b = this,
            e = this.options,
            g = e.symbolPadding,
            d = !e.rtl,
            f = a._legendItemPos;
        e = f[0];
        f = f[1];
        var h = a.checkbox,
            m = a.legendGroup;
        m && m.element && (g = {
          translateX: d ? e : this.legendWidth - e - 2 * g - 4,
          translateY: f
        }, d = function d() {
          c(b, "afterPositionItem", {
            item: a
          });
        }, E(m.translateY) ? m.animate(g, void 0, d) : (m.attr(g), d()));
        h && (h.x = e, h.y = f);
      };

      e.prototype.destroyItem = function (a) {
        var b = a.checkbox;
        ["legendItem", "legendLine", "legendSymbol", "legendGroup"].forEach(function (b) {
          a[b] && (a[b] = a[b].destroy());
        });
        b && g(a.checkbox);
      };

      e.prototype.destroy = function () {
        function a(a) {
          this[a] && (this[a] = this[a].destroy());
        }

        this.getAllItems().forEach(function (b) {
          ["legendItem", "legendGroup"].forEach(a, b);
        });
        "clipRect up down pager nav box title group".split(" ").forEach(a, this);
        this.display = null;
      };

      e.prototype.positionCheckboxes = function () {
        var a = this.group && this.group.alignAttr,
            b = this.clipHeight || this.legendHeight,
            c = this.titleHeight;

        if (a) {
          var e = a.translateY;
          this.allItems.forEach(function (g) {
            var d = g.checkbox;

            if (d) {
              var f = e + c + d.y + (this.scrollOffset || 0) + 3;
              l(d, {
                left: a.translateX + g.checkboxOffset + d.x - 20 + "px",
                top: f + "px",
                display: this.proximate || f > e - 6 && f < e + b - 6 ? "" : "none"
              });
            }
          }, this);
        }
      };

      e.prototype.renderTitle = function () {
        var a = this.options,
            b = this.padding,
            c = a.title,
            e = 0;
        c.text && (this.title || (this.title = this.chart.renderer.label(c.text, b - 3, b - 4, null, null, null, a.useHTML, null, "legend-title").attr({
          zIndex: 1
        }), this.chart.styledMode || this.title.css(c.style), this.title.add(this.group)), c.width || this.title.css({
          width: this.maxLegendWidth + "px"
        }), a = this.title.getBBox(), e = a.height, this.offsetWidth = a.width, this.contentGroup.attr({
          translateY: e
        }));
        this.titleHeight = e;
      };

      e.prototype.setText = function (a) {
        var b = this.options;
        a.legendItem.attr({
          text: b.labelFormat ? q(b.labelFormat, a, this.chart) : b.labelFormatter.call(a)
        });
      };

      e.prototype.renderItem = function (a) {
        var b = this.chart,
            c = b.renderer,
            e = this.options,
            g = this.symbolWidth,
            d = e.symbolPadding,
            f = this.itemStyle,
            h = this.itemHiddenStyle,
            m = "horizontal" === e.layout ? M(e.itemDistance, 20) : 0,
            l = !e.rtl,
            n = a.legendItem,
            q = !a.series,
            p = !q && a.series.drawLegendSymbol ? a.series : a,
            r = p.options;
        r = this.createCheckboxForItem && r && r.showCheckbox;
        m = g + d + m + (r ? 20 : 0);
        var k = e.useHTML,
            y = a.options.className;
        n || (a.legendGroup = c.g("legend-item").addClass("highcharts-" + p.type + "-series highcharts-color-" + a.colorIndex + (y ? " " + y : "") + (q ? " highcharts-series-" + a.index : "")).attr({
          zIndex: 1
        }).add(this.scrollGroup), a.legendItem = n = c.text("", l ? g + d : -d, this.baseline || 0, k), b.styledMode || n.css(A(a.visible ? f : h)), n.attr({
          align: l ? "left" : "right",
          zIndex: 2
        }).add(a.legendGroup), this.baseline || (this.fontMetrics = c.fontMetrics(b.styledMode ? 12 : f.fontSize, n), this.baseline = this.fontMetrics.f + 3 + this.itemMarginTop, n.attr("y", this.baseline)), this.symbolHeight = e.symbolHeight || this.fontMetrics.f, p.drawLegendSymbol(this, a), this.setItemEvents && this.setItemEvents(a, n, k));
        r && !a.checkbox && this.createCheckboxForItem && this.createCheckboxForItem(a);
        this.colorizeItem(a, a.visible);
        !b.styledMode && f.width || n.css({
          width: (e.itemWidth || this.widthOption || b.spacingBox.width) - m + "px"
        });
        this.setText(a);
        b = n.getBBox();
        a.itemWidth = a.checkboxOffset = e.itemWidth || a.legendItemWidth || b.width + m;
        this.maxItemWidth = Math.max(this.maxItemWidth, a.itemWidth);
        this.totalItemWidth += a.itemWidth;
        this.itemHeight = a.itemHeight = Math.round(a.legendItemHeight || b.height || this.symbolHeight);
      };

      e.prototype.layoutItem = function (a) {
        var b = this.options,
            c = this.padding,
            e = "horizontal" === b.layout,
            g = a.itemHeight,
            d = this.itemMarginBottom,
            f = this.itemMarginTop,
            h = e ? M(b.itemDistance, 20) : 0,
            m = this.maxLegendWidth;
        b = b.alignColumns && this.totalItemWidth > m ? this.maxItemWidth : a.itemWidth;
        e && this.itemX - c + b > m && (this.itemX = c, this.lastLineHeight && (this.itemY += f + this.lastLineHeight + d), this.lastLineHeight = 0);
        this.lastItemY = f + this.itemY + d;
        this.lastLineHeight = Math.max(g, this.lastLineHeight);
        a._legendItemPos = [this.itemX, this.itemY];
        e ? this.itemX += b : (this.itemY += f + g + d, this.lastLineHeight = g);
        this.offsetWidth = this.widthOption || Math.max((e ? this.itemX - c - (a.checkbox ? 0 : h) : b) + c, this.offsetWidth);
      };

      e.prototype.getAllItems = function () {
        var a = [];
        this.chart.series.forEach(function (b) {
          var c = b && b.options;
          b && M(c.showInLegend, E(c.linkedTo) ? !1 : void 0, !0) && (a = a.concat(b.legendItems || ("point" === c.legendType ? b.data : b)));
        });
        c(this, "afterGetAllItems", {
          allItems: a
        });
        return a;
      };

      e.prototype.getAlignment = function () {
        var a = this.options;
        return this.proximate ? a.align.charAt(0) + "tv" : a.floating ? "" : a.align.charAt(0) + a.verticalAlign.charAt(0) + a.layout.charAt(0);
      };

      e.prototype.adjustMargins = function (a, b) {
        var c = this.chart,
            e = this.options,
            g = this.getAlignment();
        g && [/(lth|ct|rth)/, /(rtv|rm|rbv)/, /(rbh|cb|lbh)/, /(lbv|lm|ltv)/].forEach(function (d, f) {
          d.test(g) && !E(a[f]) && (c[D[f]] = Math.max(c[D[f]], c.legend[(f + 1) % 2 ? "legendHeight" : "legendWidth"] + [1, -1, -1, 1][f] * e[f % 2 ? "x" : "y"] + M(e.margin, 12) + b[f] + (c.titleOffset[f] || 0)));
        });
      };

      e.prototype.proximatePositions = function () {
        var a = this.chart,
            b = [],
            c = "left" === this.options.align;
        this.allItems.forEach(function (e) {
          var g;
          var d = c;

          if (e.yAxis) {
            e.xAxis.options.reversed && (d = !d);
            e.points && (g = y(d ? e.points : e.points.slice(0).reverse(), function (a) {
              return n(a.plotY);
            }));
            d = this.itemMarginTop + e.legendItem.getBBox().height + this.itemMarginBottom;
            var f = e.yAxis.top - a.plotTop;
            e.visible ? (g = g ? g.plotY : e.yAxis.height, g += f - .3 * d) : g = f + e.yAxis.height;
            b.push({
              target: g,
              size: d,
              item: e
            });
          }
        }, this);
        d.distribute(b, a.plotHeight);
        b.forEach(function (b) {
          b.item._legendItemPos[1] = a.plotTop - a.spacing[0] + b.pos;
        });
      };

      e.prototype.render = function () {
        var a = this.chart,
            b = a.renderer,
            e = this.group,
            g = this.box,
            d = this.options,
            f = this.padding;
        this.itemX = f;
        this.itemY = this.initialItemY;
        this.lastItemY = this.offsetWidth = 0;
        this.widthOption = z(d.width, a.spacingBox.width - f);
        var h = a.spacingBox.width - 2 * f - d.x;
        -1 < ["rm", "lm"].indexOf(this.getAlignment().substring(0, 2)) && (h /= 2);
        this.maxLegendWidth = this.widthOption || h;
        e || (this.group = e = b.g("legend").attr({
          zIndex: 7
        }).add(), this.contentGroup = b.g().attr({
          zIndex: 1
        }).add(e), this.scrollGroup = b.g().add(this.contentGroup));
        this.renderTitle();
        var n = this.getAllItems();
        m(n, function (a, b) {
          return (a.options && a.options.legendIndex || 0) - (b.options && b.options.legendIndex || 0);
        });
        d.reversed && n.reverse();
        this.allItems = n;
        this.display = h = !!n.length;
        this.itemHeight = this.totalItemWidth = this.maxItemWidth = this.lastLineHeight = 0;
        n.forEach(this.renderItem, this);
        n.forEach(this.layoutItem, this);
        n = (this.widthOption || this.offsetWidth) + f;
        var l = this.lastItemY + this.lastLineHeight + this.titleHeight;
        l = this.handleOverflow(l);
        l += f;
        g || (this.box = g = b.rect().addClass("highcharts-legend-box").attr({
          r: d.borderRadius
        }).add(e), g.isNew = !0);
        a.styledMode || g.attr({
          stroke: d.borderColor,
          "stroke-width": d.borderWidth || 0,
          fill: d.backgroundColor || "none"
        }).shadow(d.shadow);
        0 < n && 0 < l && (g[g.isNew ? "attr" : "animate"](g.crisp.call({}, {
          x: 0,
          y: 0,
          width: n,
          height: l
        }, g.strokeWidth())), g.isNew = !1);
        g[h ? "show" : "hide"]();
        a.styledMode && "none" === e.getStyle("display") && (n = l = 0);
        this.legendWidth = n;
        this.legendHeight = l;
        h && this.align();
        this.proximate || this.positionItems();
        c(this, "afterRender");
      };

      e.prototype.align = function (a) {
        void 0 === a && (a = this.chart.spacingBox);
        var b = this.chart,
            c = this.options,
            e = a.y;
        /(lth|ct|rth)/.test(this.getAlignment()) && 0 < b.titleOffset[0] ? e += b.titleOffset[0] : /(lbh|cb|rbh)/.test(this.getAlignment()) && 0 < b.titleOffset[2] && (e -= b.titleOffset[2]);
        e !== a.y && (a = A(a, {
          y: e
        }));
        this.group.align(A(c, {
          width: this.legendWidth,
          height: this.legendHeight,
          verticalAlign: this.proximate ? "top" : c.verticalAlign
        }), !0, a);
      };

      e.prototype.handleOverflow = function (a) {
        var b = this,
            c = this.chart,
            e = c.renderer,
            g = this.options,
            d = g.y,
            f = this.padding;
        d = c.spacingBox.height + ("top" === g.verticalAlign ? -d : d) - f;

        var h = g.maxHeight,
            m,
            n = this.clipRect,
            l = g.navigation,
            q = M(l.animation, !0),
            p = l.arrowSize || 12,
            r = this.nav,
            k = this.pages,
            y,
            u = this.allItems,
            t = function t(a) {
          "number" === typeof a ? n.attr({
            height: a
          }) : n && (b.clipRect = n.destroy(), b.contentGroup.clip());
          b.contentGroup.div && (b.contentGroup.div.style.clip = a ? "rect(" + f + "px,9999px," + (f + a) + "px,0)" : "auto");
        },
            I = function I(a) {
          b[a] = e.circle(0, 0, 1.3 * p).translate(p / 2, p / 2).add(r);
          c.styledMode || b[a].attr("fill", "rgba(0,0,0,0.0001)");
          return b[a];
        };

        "horizontal" !== g.layout || "middle" === g.verticalAlign || g.floating || (d /= 2);
        h && (d = Math.min(d, h));
        k.length = 0;
        a > d && !1 !== l.enabled ? (this.clipHeight = m = Math.max(d - 20 - this.titleHeight - f, 0), this.currentPage = M(this.currentPage, 1), this.fullHeight = a, u.forEach(function (a, b) {
          var c = a._legendItemPos[1],
              e = Math.round(a.legendItem.getBBox().height),
              g = k.length;
          if (!g || c - k[g - 1] > m && (y || c) !== k[g - 1]) k.push(y || c), g++;
          a.pageIx = g - 1;
          y && (u[b - 1].pageIx = g - 1);
          b === u.length - 1 && c + e - k[g - 1] > m && c !== y && (k.push(c), a.pageIx = g);
          c !== y && (y = c);
        }), n || (n = b.clipRect = e.clipRect(0, f, 9999, 0), b.contentGroup.clip(n)), t(m), r || (this.nav = r = e.g().attr({
          zIndex: 1
        }).add(this.group), this.up = e.symbol("triangle", 0, 0, p, p).add(r), I("upTracker").on("click", function () {
          b.scroll(-1, q);
        }), this.pager = e.text("", 15, 10).addClass("highcharts-legend-navigation"), c.styledMode || this.pager.css(l.style), this.pager.add(r), this.down = e.symbol("triangle-down", 0, 0, p, p).add(r), I("downTracker").on("click", function () {
          b.scroll(1, q);
        })), b.scroll(0), a = d) : r && (t(), this.nav = r.destroy(), this.scrollGroup.attr({
          translateY: 1
        }), this.clipHeight = 0);
        return a;
      };

      e.prototype.scroll = function (a, b) {
        var e = this,
            g = this.chart,
            d = this.pages,
            f = d.length,
            h = this.currentPage + a;
        a = this.clipHeight;
        var m = this.options.navigation,
            n = this.pager,
            l = this.padding;
        h > f && (h = f);
        0 < h && ("undefined" !== typeof b && G(b, g), this.nav.attr({
          translateX: l,
          translateY: a + this.padding + 7 + this.titleHeight,
          visibility: "visible"
        }), [this.up, this.upTracker].forEach(function (a) {
          a.attr({
            "class": 1 === h ? "highcharts-legend-nav-inactive" : "highcharts-legend-nav-active"
          });
        }), n.attr({
          text: h + "/" + f
        }), [this.down, this.downTracker].forEach(function (a) {
          a.attr({
            x: 18 + this.pager.getBBox().width,
            "class": h === f ? "highcharts-legend-nav-inactive" : "highcharts-legend-nav-active"
          });
        }, this), g.styledMode || (this.up.attr({
          fill: 1 === h ? m.inactiveColor : m.activeColor
        }), this.upTracker.css({
          cursor: 1 === h ? "default" : "pointer"
        }), this.down.attr({
          fill: h === f ? m.inactiveColor : m.activeColor
        }), this.downTracker.css({
          cursor: h === f ? "default" : "pointer"
        })), this.scrollOffset = -d[h - 1] + this.initialItemY, this.scrollGroup.animate({
          translateY: this.scrollOffset
        }), this.currentPage = h, this.positionCheckboxes(), b = B(M(b, g.renderer.globalAnimation, !0)), r(function () {
          c(e, "afterScroll", {
            currentPage: h
          });
        }, b.duration));
      };

      e.prototype.setItemEvents = function (a, b, e) {
        var g = this,
            d = g.chart.renderer.boxWrapper,
            f = a instanceof k,
            h = "highcharts-legend-" + (f ? "point" : "series") + "-active",
            m = g.chart.styledMode;
        (e ? [b, a.legendSymbol] : [a.legendGroup]).forEach(function (e) {
          if (e) e.on("mouseover", function () {
            a.visible && g.allItems.forEach(function (b) {
              a !== b && b.setState("inactive", !f);
            });
            a.setState("hover");
            a.visible && d.addClass(h);
            m || b.css(g.options.itemHoverStyle);
          }).on("mouseout", function () {
            g.chart.styledMode || b.css(A(a.visible ? g.itemStyle : g.itemHiddenStyle));
            g.allItems.forEach(function (b) {
              a !== b && b.setState("", !f);
            });
            d.removeClass(h);
            a.setState();
          }).on("click", function (b) {
            var e = function e() {
              a.setVisible && a.setVisible();
              g.allItems.forEach(function (b) {
                a !== b && b.setState(a.visible ? "inactive" : "", !f);
              });
            };

            d.removeClass(h);
            b = {
              browserEvent: b
            };
            a.firePointEvent ? a.firePointEvent("legendItemClick", b, e) : c(a, "legendItemClick", b, e);
          });
        });
      };

      e.prototype.createCheckboxForItem = function (a) {
        a.checkbox = C("input", {
          type: "checkbox",
          className: "highcharts-legend-checkbox",
          checked: a.selected,
          defaultChecked: a.selected
        }, this.options.itemCheckboxStyle, this.chart.container);
        t(a.checkbox, "click", function (b) {
          c(a.series || a, "checkboxClick", {
            checked: b.target.checked,
            item: a
          }, function () {
            a.select();
          });
        });
      };

      return e;
    }();

    (/Trident\/7\.0/.test(H.navigator && H.navigator.userAgent) || f) && x(e.prototype, "positionItem", function (e, a) {
      var b = this,
          c = function c() {
        a._legendItemPos && e.call(b, a);
      };

      c();
      b.bubbleLegend || setTimeout(c);
    });
    d.Legend = e;
    return d.Legend;
  });
  P(k, "Core/Series/SeriesRegistry.js", [k["Core/Globals.js"], k["Core/Options.js"], k["Core/Series/Point.js"], k["Core/Utilities.js"]], function (f, d, k, x) {
    var B = d.defaultOptions,
        G = x.error,
        D = x.extendClass,
        H = x.merge,
        t;

    (function (d) {
      function f(f, g) {
        var l = B.plotOptions || {},
            c = g.defaultOptions;
        g.prototype.pointClass || (g.prototype.pointClass = k);
        g.prototype.type = f;
        c && (l[f] = c);
        d.seriesTypes[f] = g;
      }

      d.seriesTypes = {};

      d.getSeries = function (f, g) {
        void 0 === g && (g = {});
        var l = f.options.chart;
        l = g.type || l.type || l.defaultSeriesType || "";
        var c = d.seriesTypes[l];
        d || G(17, !0, f, {
          missingModuleFor: l
        });
        l = new c();
        "function" === typeof l.init && l.init(f, g);
        return l;
      };

      d.registerSeriesType = f;

      d.seriesType = function (l, g, y, c, q) {
        var n = B.plotOptions || {};
        g = g || "";
        n[l] = H(n[g], y);
        f(l, D(d.seriesTypes[g] || function () {}, c));
        d.seriesTypes[l].prototype.type = l;
        q && (d.seriesTypes[l].prototype.pointClass = D(k, q));
        return d.seriesTypes[l];
      };
    })(t || (t = {}));

    f.seriesType = t.seriesType;
    f.seriesTypes = t.seriesTypes;
    return t;
  });
  P(k, "Core/Chart/Chart.js", [k["Core/Animation/AnimationUtilities.js"], k["Core/Axis/Axis.js"], k["Core/Globals.js"], k["Core/Legend.js"], k["Core/MSPointer.js"], k["Core/Options.js"], k["Core/Color/Palette.js"], k["Core/Pointer.js"], k["Core/Series/SeriesRegistry.js"], k["Core/Time.js"], k["Core/Utilities.js"], k["Core/Renderer/HTML/AST.js"]], function (f, d, k, x, B, G, D, H, t, C, l, E) {
    var g = f.animate,
        y = f.animObject,
        c = f.setAnimation,
        q = k.charts,
        n = k.doc,
        A = k.win,
        M = G.defaultOptions,
        z = G.time,
        m = t.seriesTypes,
        r = l.addEvent,
        e = l.attr,
        h = l.cleanRecursively,
        a = l.createElement,
        b = l.css,
        w = l.defined,
        J = l.discardElement,
        O = l.erase,
        F = l.error,
        N = l.extend,
        R = l.find,
        Q = l.fireEvent,
        T = l.getStyle,
        v = l.isArray,
        L = l.isFunction,
        p = l.isNumber,
        K = l.isObject,
        S = l.isString,
        ba = l.merge,
        u = l.numberFormat,
        aa = l.objectEach,
        I = l.pick,
        X = l.pInt,
        U = l.relativeLength,
        ea = l.removeEvent,
        Y = l.splat,
        da = l.syncTimeout,
        ha = l.uniqueKey,
        fa = k.marginNames,
        ca = function () {
      function f(a, b, c) {
        this.yAxis = this.xAxis = this.userOptions = this.titleOffset = this.time = this.symbolCounter = this.spacingBox = this.spacing = this.series = this.renderTo = this.renderer = this.pointer = this.pointCount = this.plotWidth = this.plotTop = this.plotLeft = this.plotHeight = this.plotBox = this.options = this.numberFormatter = this.margin = this.legend = this.labelCollectors = this.isResizing = this.index = this.container = this.colorCounter = this.clipBox = this.chartWidth = this.chartHeight = this.bounds = this.axisOffset = this.axes = void 0;
        this.getArgs(a, b, c);
      }

      f.prototype.getArgs = function (a, b, c) {
        S(a) || a.nodeName ? (this.renderTo = a, this.init(b, c)) : this.init(a, b);
      };

      f.prototype.init = function (a, b) {
        var c,
            e = a.series,
            g = a.plotOptions || {};
        Q(this, "init", {
          args: arguments
        }, function () {
          a.series = null;
          c = ba(M, a);
          var d = c.chart || {};
          aa(c.plotOptions, function (a, b) {
            K(a) && (a.tooltip = g[b] && ba(g[b].tooltip) || void 0);
          });
          c.tooltip.userOptions = a.chart && a.chart.forExport && a.tooltip.userOptions || a.tooltip;
          c.series = a.series = e;
          this.userOptions = a;
          var f = d.events;
          this.margin = [];
          this.spacing = [];
          this.bounds = {
            h: {},
            v: {}
          };
          this.labelCollectors = [];
          this.callback = b;
          this.isResizing = 0;
          this.options = c;
          this.axes = [];
          this.series = [];
          this.time = a.time && Object.keys(a.time).length ? new C(a.time) : k.time;
          this.numberFormatter = d.numberFormatter || u;
          this.styledMode = d.styledMode;
          this.hasCartesianSeries = d.showAxes;
          var h = this;
          h.index = q.length;
          q.push(h);
          k.chartCount++;
          f && aa(f, function (a, b) {
            L(a) && r(h, b, a);
          });
          h.xAxis = [];
          h.yAxis = [];
          h.pointCount = h.colorCounter = h.symbolCounter = 0;
          Q(h, "afterInit");
          h.firstRender();
        });
      };

      f.prototype.initSeries = function (a) {
        var b = this.options.chart;
        b = a.type || b.type || b.defaultSeriesType;
        var c = m[b];
        c || F(17, !0, this, {
          missingModuleFor: b
        });
        b = new c();
        "function" === typeof b.init && b.init(this, a);
        return b;
      };

      f.prototype.setSeriesData = function () {
        this.getSeriesOrderByLinks().forEach(function (a) {
          a.points || a.data || !a.enabledDataSorting || a.setData(a.options.data, !1);
        });
      };

      f.prototype.getSeriesOrderByLinks = function () {
        return this.series.concat().sort(function (a, b) {
          return a.linkedSeries.length || b.linkedSeries.length ? b.linkedSeries.length - a.linkedSeries.length : 0;
        });
      };

      f.prototype.orderSeries = function (a) {
        var b = this.series;

        for (a = a || 0; a < b.length; a++) {
          b[a] && (b[a].index = a, b[a].name = b[a].getName());
        }
      };

      f.prototype.isInsidePlot = function (a, b, c) {
        var e = c ? b : a;
        a = c ? a : b;
        e = {
          x: e,
          y: a,
          isInsidePlot: 0 <= e && e <= this.plotWidth && 0 <= a && a <= this.plotHeight
        };
        Q(this, "afterIsInsidePlot", e);
        return e.isInsidePlot;
      };

      f.prototype.redraw = function (a) {
        Q(this, "beforeRedraw");
        var b = this.hasCartesianSeries ? this.axes : this.colorAxis || [],
            e = this.series,
            g = this.pointer,
            d = this.legend,
            f = this.userOptions.legend,
            h = this.isDirtyLegend,
            m = this.isDirtyBox,
            u = this.renderer,
            l = u.isHidden(),
            n = [];
        this.setResponsive && this.setResponsive(!1);
        c(this.hasRendered ? a : !1, this);
        l && this.temporaryDisplay();
        this.layOutTitles();

        for (a = e.length; a--;) {
          var p = e[a];

          if (p.options.stacking || p.options.centerInCategory) {
            var q = !0;

            if (p.isDirty) {
              var r = !0;
              break;
            }
          }
        }

        if (r) for (a = e.length; a--;) {
          p = e[a], p.options.stacking && (p.isDirty = !0);
        }
        e.forEach(function (a) {
          a.isDirty && ("point" === a.options.legendType ? ("function" === typeof a.updateTotals && a.updateTotals(), h = !0) : f && (f.labelFormatter || f.labelFormat) && (h = !0));
          a.isDirtyData && Q(a, "updatedData");
        });
        h && d && d.options.enabled && (d.render(), this.isDirtyLegend = !1);
        q && this.getStacks();
        b.forEach(function (a) {
          a.updateNames();
          a.setScale();
        });
        this.getMargins();
        b.forEach(function (a) {
          a.isDirty && (m = !0);
        });
        b.forEach(function (a) {
          var b = a.min + "," + a.max;
          a.extKey !== b && (a.extKey = b, n.push(function () {
            Q(a, "afterSetExtremes", N(a.eventArgs, a.getExtremes()));
            delete a.eventArgs;
          }));
          (m || q) && a.redraw();
        });
        m && this.drawChartBox();
        Q(this, "predraw");
        e.forEach(function (a) {
          (m || a.isDirty) && a.visible && a.redraw();
          a.isDirtyData = !1;
        });
        g && g.reset(!0);
        u.draw();
        Q(this, "redraw");
        Q(this, "render");
        l && this.temporaryDisplay(!0);
        n.forEach(function (a) {
          a.call();
        });
      };

      f.prototype.get = function (a) {
        function b(b) {
          return b.id === a || b.options && b.options.id === a;
        }

        var c = this.series,
            e;
        var g = R(this.axes, b) || R(this.series, b);

        for (e = 0; !g && e < c.length; e++) {
          g = R(c[e].points || [], b);
        }

        return g;
      };

      f.prototype.getAxes = function () {
        var a = this,
            b = this.options,
            e = b.xAxis = Y(b.xAxis || {});
        b = b.yAxis = Y(b.yAxis || {});
        Q(this, "getAxes");
        e.forEach(function (a, b) {
          a.index = b;
          a.isX = !0;
        });
        b.forEach(function (a, b) {
          a.index = b;
        });
        e.concat(b).forEach(function (b) {
          new d(a, b);
        });
        Q(this, "afterGetAxes");
      };

      f.prototype.getSelectedPoints = function () {
        var a = [];
        this.series.forEach(function (b) {
          a = a.concat(b.getPointsCollection().filter(function (a) {
            return I(a.selectedStaging, a.selected);
          }));
        });
        return a;
      };

      f.prototype.getSelectedSeries = function () {
        return this.series.filter(function (a) {
          return a.selected;
        });
      };

      f.prototype.setTitle = function (a, b, e) {
        this.applyDescription("title", a);
        this.applyDescription("subtitle", b);
        this.applyDescription("caption", void 0);
        this.layOutTitles(e);
      };

      f.prototype.applyDescription = function (a, b) {
        var e = this,
            c = "title" === a ? {
          color: D.neutralColor80,
          fontSize: this.options.isStock ? "16px" : "18px"
        } : {
          color: D.neutralColor60
        };
        c = this.options[a] = ba(!this.styledMode && {
          style: c
        }, this.options[a], b);
        var g = this[a];
        g && b && (this[a] = g = g.destroy());
        c && !g && (g = this.renderer.text(c.text, 0, 0, c.useHTML).attr({
          align: c.align,
          "class": "highcharts-" + a,
          zIndex: c.zIndex || 4
        }).add(), g.update = function (b) {
          e[{
            title: "setTitle",
            subtitle: "setSubtitle",
            caption: "setCaption"
          }[a]](b);
        }, this.styledMode || g.css(c.style), this[a] = g);
      };

      f.prototype.layOutTitles = function (a) {
        var b = [0, 0, 0],
            c = this.renderer,
            e = this.spacingBox;
        ["title", "subtitle", "caption"].forEach(function (a) {
          var g = this[a],
              d = this.options[a],
              f = d.verticalAlign || "top";
          a = "title" === a ? -3 : "top" === f ? b[0] + 2 : 0;

          if (g) {
            if (!this.styledMode) var h = d.style.fontSize;
            h = c.fontMetrics(h, g).b;
            g.css({
              width: (d.width || e.width + (d.widthAdjust || 0)) + "px"
            });
            var m = Math.round(g.getBBox(d.useHTML).height);
            g.align(N({
              y: "bottom" === f ? h : a + h,
              height: m
            }, d), !1, "spacingBox");
            d.floating || ("top" === f ? b[0] = Math.ceil(b[0] + m) : "bottom" === f && (b[2] = Math.ceil(b[2] + m)));
          }
        }, this);
        b[0] && "top" === (this.options.title.verticalAlign || "top") && (b[0] += this.options.title.margin);
        b[2] && "bottom" === this.options.caption.verticalAlign && (b[2] += this.options.caption.margin);
        var g = !this.titleOffset || this.titleOffset.join(",") !== b.join(",");
        this.titleOffset = b;
        Q(this, "afterLayOutTitles");
        !this.isDirtyBox && g && (this.isDirtyBox = this.isDirtyLegend = g, this.hasRendered && I(a, !0) && this.isDirtyBox && this.redraw());
      };

      f.prototype.getChartSize = function () {
        var a = this.options.chart,
            b = a.width;
        a = a.height;
        var c = this.renderTo;
        w(b) || (this.containerWidth = T(c, "width"));
        w(a) || (this.containerHeight = T(c, "height"));
        this.chartWidth = Math.max(0, b || this.containerWidth || 600);
        this.chartHeight = Math.max(0, U(a, this.chartWidth) || (1 < this.containerHeight ? this.containerHeight : 400));
      };

      f.prototype.temporaryDisplay = function (a) {
        var c = this.renderTo;
        if (a) for (; c && c.style;) {
          c.hcOrigStyle && (b(c, c.hcOrigStyle), delete c.hcOrigStyle), c.hcOrigDetached && (n.body.removeChild(c), c.hcOrigDetached = !1), c = c.parentNode;
        } else for (; c && c.style;) {
          n.body.contains(c) || c.parentNode || (c.hcOrigDetached = !0, n.body.appendChild(c));
          if ("none" === T(c, "display", !1) || c.hcOricDetached) c.hcOrigStyle = {
            display: c.style.display,
            height: c.style.height,
            overflow: c.style.overflow
          }, a = {
            display: "block",
            overflow: "hidden"
          }, c !== this.renderTo && (a.height = 0), b(c, a), c.offsetWidth || c.style.setProperty("display", "block", "important");
          c = c.parentNode;
          if (c === n.body) break;
        }
      };

      f.prototype.setClassName = function (a) {
        this.container.className = "highcharts-container " + (a || "");
      };

      f.prototype.getContainer = function () {
        var g = this.options,
            d = g.chart;
        var f = this.renderTo;
        var h = ha(),
            m,
            u;
        f || (this.renderTo = f = d.renderTo);
        S(f) && (this.renderTo = f = n.getElementById(f));
        f || F(13, !0, this);
        var l = X(e(f, "data-highcharts-chart"));
        p(l) && q[l] && q[l].hasRendered && q[l].destroy();
        e(f, "data-highcharts-chart", this.index);
        f.innerHTML = "";
        d.skipClone || f.offsetWidth || this.temporaryDisplay();
        this.getChartSize();
        l = this.chartWidth;
        var r = this.chartHeight;
        b(f, {
          overflow: "hidden"
        });
        this.styledMode || (m = N({
          position: "relative",
          overflow: "hidden",
          width: l + "px",
          height: r + "px",
          textAlign: "left",
          lineHeight: "normal",
          zIndex: 0,
          "-webkit-tap-highlight-color": "rgba(0,0,0,0)",
          userSelect: "none"
        }, d.style));
        this.container = f = a("div", {
          id: h
        }, m, f);
        this._cursor = f.style.cursor;
        this.renderer = new (k[d.renderer] || k.Renderer)(f, l, r, null, d.forExport, g.exporting && g.exporting.allowHTML, this.styledMode);
        c(void 0, this);
        this.setClassName(d.className);
        if (this.styledMode) for (u in g.defs) {
          this.renderer.definition(g.defs[u]);
        } else this.renderer.setStyle(d.style);
        this.renderer.chartIndex = this.index;
        Q(this, "afterGetContainer");
      };

      f.prototype.getMargins = function (a) {
        var b = this.spacing,
            c = this.margin,
            e = this.titleOffset;
        this.resetMargins();
        e[0] && !w(c[0]) && (this.plotTop = Math.max(this.plotTop, e[0] + b[0]));
        e[2] && !w(c[2]) && (this.marginBottom = Math.max(this.marginBottom, e[2] + b[2]));
        this.legend && this.legend.display && this.legend.adjustMargins(c, b);
        Q(this, "getMargins");
        a || this.getAxisMargins();
      };

      f.prototype.getAxisMargins = function () {
        var a = this,
            b = a.axisOffset = [0, 0, 0, 0],
            c = a.colorAxis,
            e = a.margin,
            g = function g(a) {
          a.forEach(function (a) {
            a.visible && a.getOffset();
          });
        };

        a.hasCartesianSeries ? g(a.axes) : c && c.length && g(c);
        fa.forEach(function (c, g) {
          w(e[g]) || (a[c] += b[g]);
        });
        a.setChartSize();
      };

      f.prototype.reflow = function (a) {
        var b = this,
            c = b.options.chart,
            e = b.renderTo,
            g = w(c.width) && w(c.height),
            d = c.width || T(e, "width");
        c = c.height || T(e, "height");
        e = a ? a.target : A;
        delete b.pointer.chartPosition;

        if (!g && !b.isPrinting && d && c && (e === A || e === n)) {
          if (d !== b.containerWidth || c !== b.containerHeight) l.clearTimeout(b.reflowTimeout), b.reflowTimeout = da(function () {
            b.container && b.setSize(void 0, void 0, !1);
          }, a ? 100 : 0);
          b.containerWidth = d;
          b.containerHeight = c;
        }
      };

      f.prototype.setReflow = function (a) {
        var b = this;
        !1 === a || this.unbindReflow ? !1 === a && this.unbindReflow && (this.unbindReflow = this.unbindReflow()) : (this.unbindReflow = r(A, "resize", function (a) {
          b.options && b.reflow(a);
        }), r(this, "destroy", this.unbindReflow));
      };

      f.prototype.setSize = function (a, e, d) {
        var f = this,
            h = f.renderer;
        f.isResizing += 1;
        c(d, f);
        d = h.globalAnimation;
        f.oldChartHeight = f.chartHeight;
        f.oldChartWidth = f.chartWidth;
        "undefined" !== typeof a && (f.options.chart.width = a);
        "undefined" !== typeof e && (f.options.chart.height = e);
        f.getChartSize();
        f.styledMode || (d ? g : b)(f.container, {
          width: f.chartWidth + "px",
          height: f.chartHeight + "px"
        }, d);
        f.setChartSize(!0);
        h.setSize(f.chartWidth, f.chartHeight, d);
        f.axes.forEach(function (a) {
          a.isDirty = !0;
          a.setScale();
        });
        f.isDirtyLegend = !0;
        f.isDirtyBox = !0;
        f.layOutTitles();
        f.getMargins();
        f.redraw(d);
        f.oldChartHeight = null;
        Q(f, "resize");
        da(function () {
          f && Q(f, "endResize", null, function () {
            --f.isResizing;
          });
        }, y(d).duration);
      };

      f.prototype.setChartSize = function (a) {
        var b = this.inverted,
            c = this.renderer,
            e = this.chartWidth,
            g = this.chartHeight,
            d = this.options.chart,
            f = this.spacing,
            h = this.clipOffset,
            m,
            u,
            l,
            n;
        this.plotLeft = m = Math.round(this.plotLeft);
        this.plotTop = u = Math.round(this.plotTop);
        this.plotWidth = l = Math.max(0, Math.round(e - m - this.marginRight));
        this.plotHeight = n = Math.max(0, Math.round(g - u - this.marginBottom));
        this.plotSizeX = b ? n : l;
        this.plotSizeY = b ? l : n;
        this.plotBorderWidth = d.plotBorderWidth || 0;
        this.spacingBox = c.spacingBox = {
          x: f[3],
          y: f[0],
          width: e - f[3] - f[1],
          height: g - f[0] - f[2]
        };
        this.plotBox = c.plotBox = {
          x: m,
          y: u,
          width: l,
          height: n
        };
        e = 2 * Math.floor(this.plotBorderWidth / 2);
        b = Math.ceil(Math.max(e, h[3]) / 2);
        c = Math.ceil(Math.max(e, h[0]) / 2);
        this.clipBox = {
          x: b,
          y: c,
          width: Math.floor(this.plotSizeX - Math.max(e, h[1]) / 2 - b),
          height: Math.max(0, Math.floor(this.plotSizeY - Math.max(e, h[2]) / 2 - c))
        };
        a || this.axes.forEach(function (a) {
          a.setAxisSize();
          a.setAxisTranslation();
        });
        Q(this, "afterSetChartSize", {
          skipAxes: a
        });
      };

      f.prototype.resetMargins = function () {
        Q(this, "resetMargins");
        var a = this,
            b = a.options.chart;
        ["margin", "spacing"].forEach(function (c) {
          var e = b[c],
              g = K(e) ? e : [e, e, e, e];
          ["Top", "Right", "Bottom", "Left"].forEach(function (e, d) {
            a[c][d] = I(b[c + e], g[d]);
          });
        });
        fa.forEach(function (b, c) {
          a[b] = I(a.margin[c], a.spacing[c]);
        });
        a.axisOffset = [0, 0, 0, 0];
        a.clipOffset = [0, 0, 0, 0];
      };

      f.prototype.drawChartBox = function () {
        var a = this.options.chart,
            b = this.renderer,
            c = this.chartWidth,
            e = this.chartHeight,
            g = this.chartBackground,
            d = this.plotBackground,
            f = this.plotBorder,
            h = this.styledMode,
            m = this.plotBGImage,
            u = a.backgroundColor,
            l = a.plotBackgroundColor,
            n = a.plotBackgroundImage,
            p,
            q = this.plotLeft,
            r = this.plotTop,
            k = this.plotWidth,
            I = this.plotHeight,
            w = this.plotBox,
            y = this.clipRect,
            t = this.clipBox,
            v = "animate";
        g || (this.chartBackground = g = b.rect().addClass("highcharts-background").add(), v = "attr");
        if (h) var z = p = g.strokeWidth();else {
          z = a.borderWidth || 0;
          p = z + (a.shadow ? 8 : 0);
          u = {
            fill: u || "none"
          };
          if (z || g["stroke-width"]) u.stroke = a.borderColor, u["stroke-width"] = z;
          g.attr(u).shadow(a.shadow);
        }
        g[v]({
          x: p / 2,
          y: p / 2,
          width: c - p - z % 2,
          height: e - p - z % 2,
          r: a.borderRadius
        });
        v = "animate";
        d || (v = "attr", this.plotBackground = d = b.rect().addClass("highcharts-plot-background").add());
        d[v](w);
        h || (d.attr({
          fill: l || "none"
        }).shadow(a.plotShadow), n && (m ? (n !== m.attr("href") && m.attr("href", n), m.animate(w)) : this.plotBGImage = b.image(n, q, r, k, I).add()));
        y ? y.animate({
          width: t.width,
          height: t.height
        }) : this.clipRect = b.clipRect(t);
        v = "animate";
        f || (v = "attr", this.plotBorder = f = b.rect().addClass("highcharts-plot-border").attr({
          zIndex: 1
        }).add());
        h || f.attr({
          stroke: a.plotBorderColor,
          "stroke-width": a.plotBorderWidth || 0,
          fill: "none"
        });
        f[v](f.crisp({
          x: q,
          y: r,
          width: k,
          height: I
        }, -f.strokeWidth()));
        this.isDirtyBox = !1;
        Q(this, "afterDrawChartBox");
      };

      f.prototype.propFromSeries = function () {
        var a = this,
            b = a.options.chart,
            c,
            e = a.options.series,
            g,
            d;
        ["inverted", "angular", "polar"].forEach(function (f) {
          c = m[b.type || b.defaultSeriesType];
          d = b[f] || c && c.prototype[f];

          for (g = e && e.length; !d && g--;) {
            (c = m[e[g].type]) && c.prototype[f] && (d = !0);
          }

          a[f] = d;
        });
      };

      f.prototype.linkSeries = function () {
        var a = this,
            b = a.series;
        b.forEach(function (a) {
          a.linkedSeries.length = 0;
        });
        b.forEach(function (b) {
          var c = b.options.linkedTo;
          S(c) && (c = ":previous" === c ? a.series[b.index - 1] : a.get(c)) && c.linkedParent !== b && (c.linkedSeries.push(b), b.linkedParent = c, c.enabledDataSorting && b.setDataSortingOptions(), b.visible = I(b.options.visible, c.options.visible, b.visible));
        });
        Q(this, "afterLinkSeries");
      };

      f.prototype.renderSeries = function () {
        this.series.forEach(function (a) {
          a.translate();
          a.render();
        });
      };

      f.prototype.renderLabels = function () {
        var a = this,
            b = a.options.labels;
        b.items && b.items.forEach(function (c) {
          var e = N(b.style, c.style),
              g = X(e.left) + a.plotLeft,
              d = X(e.top) + a.plotTop + 12;
          delete e.left;
          delete e.top;
          a.renderer.text(c.html, g, d).attr({
            zIndex: 2
          }).css(e).add();
        });
      };

      f.prototype.render = function () {
        var a = this.axes,
            b = this.colorAxis,
            c = this.renderer,
            e = this.options,
            g = 0,
            d = function d(a) {
          a.forEach(function (a) {
            a.visible && a.render();
          });
        };

        this.setTitle();
        this.legend = new x(this, e.legend);
        this.getStacks && this.getStacks();
        this.getMargins(!0);
        this.setChartSize();
        e = this.plotWidth;
        a.some(function (a) {
          if (a.horiz && a.visible && a.options.labels.enabled && a.series.length) return g = 21, !0;
        });
        var f = this.plotHeight = Math.max(this.plotHeight - g, 0);
        a.forEach(function (a) {
          a.setScale();
        });
        this.getAxisMargins();
        var h = 1.1 < e / this.plotWidth;
        var m = 1.05 < f / this.plotHeight;
        if (h || m) a.forEach(function (a) {
          (a.horiz && h || !a.horiz && m) && a.setTickInterval(!0);
        }), this.getMargins();
        this.drawChartBox();
        this.hasCartesianSeries ? d(a) : b && b.length && d(b);
        this.seriesGroup || (this.seriesGroup = c.g("series-group").attr({
          zIndex: 3
        }).add());
        this.renderSeries();
        this.renderLabels();
        this.addCredits();
        this.setResponsive && this.setResponsive();
        this.hasRendered = !0;
      };

      f.prototype.addCredits = function (a) {
        var b = this,
            c = ba(!0, this.options.credits, a);
        c.enabled && !this.credits && (this.credits = this.renderer.text(c.text + (this.mapCredits || ""), 0, 0).addClass("highcharts-credits").on("click", function () {
          c.href && (A.location.href = c.href);
        }).attr({
          align: c.position.align,
          zIndex: 8
        }), b.styledMode || this.credits.css(c.style), this.credits.add().align(c.position), this.credits.update = function (a) {
          b.credits = b.credits.destroy();
          b.addCredits(a);
        });
      };

      f.prototype.destroy = function () {
        var a = this,
            b = a.axes,
            c = a.series,
            e = a.container,
            g,
            d = e && e.parentNode;
        Q(a, "destroy");
        a.renderer.forExport ? O(q, a) : q[a.index] = void 0;
        k.chartCount--;
        a.renderTo.removeAttribute("data-highcharts-chart");
        ea(a);

        for (g = b.length; g--;) {
          b[g] = b[g].destroy();
        }

        this.scroller && this.scroller.destroy && this.scroller.destroy();

        for (g = c.length; g--;) {
          c[g] = c[g].destroy();
        }

        "title subtitle chartBackground plotBackground plotBGImage plotBorder seriesGroup clipRect credits pointer rangeSelector legend resetZoomButton tooltip renderer".split(" ").forEach(function (b) {
          var c = a[b];
          c && c.destroy && (a[b] = c.destroy());
        });
        e && (e.innerHTML = "", ea(e), d && J(e));
        aa(a, function (b, c) {
          delete a[c];
        });
      };

      f.prototype.firstRender = function () {
        var a = this,
            b = a.options;

        if (!a.isReadyToRender || a.isReadyToRender()) {
          a.getContainer();
          a.resetMargins();
          a.setChartSize();
          a.propFromSeries();
          a.getAxes();
          (v(b.series) ? b.series : []).forEach(function (b) {
            a.initSeries(b);
          });
          a.linkSeries();
          a.setSeriesData();
          Q(a, "beforeRender");
          H && (a.pointer = k.hasTouch || !A.PointerEvent && !A.MSPointerEvent ? new H(a, b) : new B(a, b));
          a.render();
          a.pointer.getChartPosition();
          if (!a.renderer.imgCount && !a.hasLoaded) a.onload();
          a.temporaryDisplay(!0);
        }
      };

      f.prototype.onload = function () {
        this.callbacks.concat([this.callback]).forEach(function (a) {
          a && "undefined" !== typeof this.index && a.apply(this, [this]);
        }, this);
        Q(this, "load");
        Q(this, "render");
        w(this.index) && this.setReflow(this.options.chart.reflow);
        this.hasLoaded = !0;
      };

      f.prototype.addSeries = function (a, b, c) {
        var e,
            g = this;
        a && (b = I(b, !0), Q(g, "addSeries", {
          options: a
        }, function () {
          e = g.initSeries(a);
          g.isDirtyLegend = !0;
          g.linkSeries();
          e.enabledDataSorting && e.setData(a.data, !1);
          Q(g, "afterAddSeries", {
            series: e
          });
          b && g.redraw(c);
        }));
        return e;
      };

      f.prototype.addAxis = function (a, b, c, e) {
        return this.createAxis(b ? "xAxis" : "yAxis", {
          axis: a,
          redraw: c,
          animation: e
        });
      };

      f.prototype.addColorAxis = function (a, b, c) {
        return this.createAxis("colorAxis", {
          axis: a,
          redraw: b,
          animation: c
        });
      };

      f.prototype.createAxis = function (a, b) {
        var c = this.options,
            e = "colorAxis" === a,
            g = b.redraw,
            f = b.animation;
        b = ba(b.axis, {
          index: this[a].length,
          isX: "xAxis" === a
        });
        var h = e ? new k.ColorAxis(this, b) : new d(this, b);
        c[a] = Y(c[a] || {});
        c[a].push(b);
        e && (this.isDirtyLegend = !0, this.axes.forEach(function (a) {
          a.series = [];
        }), this.series.forEach(function (a) {
          a.bindAxes();
          a.isDirtyData = !0;
        }));
        I(g, !0) && this.redraw(f);
        return h;
      };

      f.prototype.showLoading = function (c) {
        var e = this,
            d = e.options,
            f = e.loadingDiv,
            h = e.loadingSpan,
            m = d.loading,
            u = function u() {
          f && b(f, {
            left: e.plotLeft + "px",
            top: e.plotTop + "px",
            width: e.plotWidth + "px",
            height: e.plotHeight + "px"
          });
        };

        f || (e.loadingDiv = f = a("div", {
          className: "highcharts-loading highcharts-loading-hidden"
        }, null, e.container));
        h || (e.loadingSpan = h = a("span", {
          className: "highcharts-loading-inner"
        }, null, f), r(e, "redraw", u));
        f.className = "highcharts-loading";
        E.setElementHTML(h, I(c, d.lang.loading, ""));
        e.styledMode || (b(f, N(m.style, {
          zIndex: 10
        })), b(h, m.labelStyle), e.loadingShown || (b(f, {
          opacity: 0,
          display: ""
        }), g(f, {
          opacity: m.style.opacity || .5
        }, {
          duration: m.showDuration || 0
        })));
        e.loadingShown = !0;
        u();
      };

      f.prototype.hideLoading = function () {
        var a = this.options,
            c = this.loadingDiv;
        c && (c.className = "highcharts-loading highcharts-loading-hidden", this.styledMode || g(c, {
          opacity: 0
        }, {
          duration: a.loading.hideDuration || 100,
          complete: function complete() {
            b(c, {
              display: "none"
            });
          }
        }));
        this.loadingShown = !1;
      };

      f.prototype.update = function (a, b, c, e) {
        var g = this,
            d = {
          credits: "addCredits",
          title: "setTitle",
          subtitle: "setSubtitle",
          caption: "setCaption"
        },
            f,
            m,
            u,
            l = a.isResponsiveOptions,
            n = [];
        Q(g, "update", {
          options: a
        });
        l || g.setResponsive(!1, !0);
        a = h(a, g.options);
        g.userOptions = ba(g.userOptions, a);

        if (f = a.chart) {
          ba(!0, g.options.chart, f);
          "className" in f && g.setClassName(f.className);
          "reflow" in f && g.setReflow(f.reflow);

          if ("inverted" in f || "polar" in f || "type" in f) {
            g.propFromSeries();
            var q = !0;
          }

          "alignTicks" in f && (q = !0);
          aa(f, function (a, b) {
            -1 !== g.propsRequireUpdateSeries.indexOf("chart." + b) && (m = !0);
            -1 !== g.propsRequireDirtyBox.indexOf(b) && (g.isDirtyBox = !0);
            -1 !== g.propsRequireReflow.indexOf(b) && (l ? g.isDirtyBox = !0 : u = !0);
          });
          !g.styledMode && "style" in f && g.renderer.setStyle(f.style);
        }

        !g.styledMode && a.colors && (this.options.colors = a.colors);
        a.time && (this.time === z && (this.time = new C(a.time)), ba(!0, g.options.time, a.time));
        aa(a, function (b, c) {
          if (g[c] && "function" === typeof g[c].update) g[c].update(b, !1);else if ("function" === typeof g[d[c]]) g[d[c]](b);else "color" !== c && -1 === g.collectionsWithUpdate.indexOf(c) && ba(!0, g.options[c], a[c]);
          "chart" !== c && -1 !== g.propsRequireUpdateSeries.indexOf(c) && (m = !0);
        });
        this.collectionsWithUpdate.forEach(function (b) {
          if (a[b]) {
            if ("series" === b) {
              var e = [];
              g[b].forEach(function (a, b) {
                a.options.isInternal || e.push(I(a.options.index, b));
              });
            }

            Y(a[b]).forEach(function (a, d) {
              var f = w(a.id),
                  h;
              f && (h = g.get(a.id));
              !h && g[b] && (h = g[b][e ? e[d] : d]) && f && w(h.options.id) && (h = void 0);
              h && h.coll === b && (h.update(a, !1), c && (h.touched = !0));
              !h && c && g.collectionsWithInit[b] && (g.collectionsWithInit[b][0].apply(g, [a].concat(g.collectionsWithInit[b][1] || []).concat([!1])).touched = !0);
            });
            c && g[b].forEach(function (a) {
              a.touched || a.options.isInternal ? delete a.touched : n.push(a);
            });
          }
        });
        n.forEach(function (a) {
          a.chart && a.remove(!1);
        });
        q && g.axes.forEach(function (a) {
          a.update({}, !1);
        });
        m && g.getSeriesOrderByLinks().forEach(function (a) {
          a.chart && a.update({}, !1);
        }, this);
        q = f && f.width;
        f = f && f.height;
        S(f) && (f = U(f, q || g.chartWidth));
        u || p(q) && q !== g.chartWidth || p(f) && f !== g.chartHeight ? g.setSize(q, f, e) : I(b, !0) && g.redraw(e);
        Q(g, "afterUpdate", {
          options: a,
          redraw: b,
          animation: e
        });
      };

      f.prototype.setSubtitle = function (a, b) {
        this.applyDescription("subtitle", a);
        this.layOutTitles(b);
      };

      f.prototype.setCaption = function (a, b) {
        this.applyDescription("caption", a);
        this.layOutTitles(b);
      };

      f.prototype.showResetZoom = function () {
        function a() {
          b.zoomOut();
        }

        var b = this,
            c = M.lang,
            e = b.options.chart.resetZoomButton,
            g = e.theme,
            d = g.states,
            f = "chart" === e.relativeTo || "spaceBox" === e.relativeTo ? null : this.scrollablePlotBox || "plotBox";
        Q(this, "beforeShowResetZoom", null, function () {
          b.resetZoomButton = b.renderer.button(c.resetZoom, null, null, a, g, d && d.hover).attr({
            align: e.position.align,
            title: c.resetZoomTitle
          }).addClass("highcharts-reset-zoom").add().align(e.position, !1, f);
        });
        Q(this, "afterShowResetZoom");
      };

      f.prototype.zoomOut = function () {
        Q(this, "selection", {
          resetSelection: !0
        }, this.zoom);
      };

      f.prototype.zoom = function (a) {
        var b = this,
            c,
            e = b.pointer,
            g = !1,
            d = b.inverted ? e.mouseDownX : e.mouseDownY;
        !a || a.resetSelection ? (b.axes.forEach(function (a) {
          c = a.zoom();
        }), e.initiated = !1) : a.xAxis.concat(a.yAxis).forEach(function (a) {
          var f = a.axis,
              h = b.inverted ? f.left : f.top,
              m = b.inverted ? h + f.width : h + f.height,
              u = f.isXAxis,
              l = !1;
          if (!u && d >= h && d <= m || u || !w(d)) l = !0;
          e[u ? "zoomX" : "zoomY"] && l && (c = f.zoom(a.min, a.max), f.displayBtn && (g = !0));
        });
        var f = b.resetZoomButton;
        g && !f ? b.showResetZoom() : !g && K(f) && (b.resetZoomButton = f.destroy());
        c && b.redraw(I(b.options.chart.animation, a && a.animation, 100 > b.pointCount));
      };

      f.prototype.pan = function (a, c) {
        var e = this,
            g = e.hoverPoints,
            d = e.options.chart,
            f = e.options.mapNavigation && e.options.mapNavigation.enabled,
            h;
        c = "object" === _typeof(c) ? c : {
          enabled: c,
          type: "x"
        };
        d && d.panning && (d.panning = c);
        var m = c.type;
        Q(this, "pan", {
          originalEvent: a
        }, function () {
          g && g.forEach(function (a) {
            a.setState();
          });
          var c = [1];
          "xy" === m ? c = [1, 0] : "y" === m && (c = [0]);
          c.forEach(function (b) {
            var c = e[b ? "xAxis" : "yAxis"][0],
                g = c.horiz,
                d = a[g ? "chartX" : "chartY"];
            g = g ? "mouseDownX" : "mouseDownY";
            var u = e[g],
                l = (c.pointRange || 0) / 2,
                n = c.reversed && !e.inverted || !c.reversed && e.inverted ? -1 : 1,
                q = c.getExtremes(),
                r = c.toValue(u - d, !0) + l * n;
            n = c.toValue(u + c.len - d, !0) - l * n;
            var k = n < r;
            u = k ? n : r;
            r = k ? r : n;
            n = c.hasVerticalPanning();
            var w = c.panningState;
            !n || b || w && !w.isDirty || c.series.forEach(function (a) {
              var b = a.getProcessedData(!0);
              b = a.getExtremes(b.yData, !0);
              w || (w = {
                startMin: Number.MAX_VALUE,
                startMax: -Number.MAX_VALUE
              });
              p(b.dataMin) && p(b.dataMax) && (w.startMin = Math.min(I(a.options.threshold, Infinity), b.dataMin, w.startMin), w.startMax = Math.max(I(a.options.threshold, -Infinity), b.dataMax, w.startMax));
            });
            b = Math.min(I(null === w || void 0 === w ? void 0 : w.startMin, q.dataMin), l ? q.min : c.toValue(c.toPixels(q.min) - c.minPixelPadding));
            l = Math.max(I(null === w || void 0 === w ? void 0 : w.startMax, q.dataMax), l ? q.max : c.toValue(c.toPixels(q.max) + c.minPixelPadding));
            c.panningState = w;
            c.isOrdinal || (n = b - u, 0 < n && (r += n, u = b), n = r - l, 0 < n && (r = l, u -= n), c.series.length && u !== q.min && r !== q.max && u >= b && r <= l && (c.setExtremes(u, r, !1, !1, {
              trigger: "pan"
            }), e.resetZoomButton || f || u === b || r === l || !m.match("y") || (e.showResetZoom(), c.displayBtn = !1), h = !0), e[g] = d);
          });
          h && e.redraw(!1);
          b(e.container, {
            cursor: "move"
          });
        });
      };

      return f;
    }();

    N(ca.prototype, {
      callbacks: [],
      collectionsWithInit: {
        xAxis: [ca.prototype.addAxis, [!0]],
        yAxis: [ca.prototype.addAxis, [!1]],
        series: [ca.prototype.addSeries]
      },
      collectionsWithUpdate: ["xAxis", "yAxis", "zAxis", "series"],
      propsRequireDirtyBox: "backgroundColor borderColor borderWidth borderRadius plotBackgroundColor plotBackgroundImage plotBorderColor plotBorderWidth plotShadow shadow".split(" "),
      propsRequireReflow: "margin marginTop marginRight marginBottom marginLeft spacing spacingTop spacingRight spacingBottom spacingLeft".split(" "),
      propsRequireUpdateSeries: "chart.inverted chart.polar chart.ignoreHiddenSeries chart.type colors plotOptions time tooltip".split(" ")
    });

    k.chart = function (a, b, c) {
      return new ca(a, b, c);
    };

    k.Chart = ca;
    "";
    return ca;
  });
  P(k, "Mixins/LegendSymbol.js", [k["Core/Globals.js"], k["Core/Utilities.js"]], function (f, d) {
    var k = d.merge,
        x = d.pick;
    return f.LegendSymbolMixin = {
      drawRectangle: function drawRectangle(d, f) {
        var k = d.symbolHeight,
            H = d.options.squareSymbol;
        f.legendSymbol = this.chart.renderer.rect(H ? (d.symbolWidth - k) / 2 : 0, d.baseline - k + 1, H ? k : d.symbolWidth, k, x(d.options.symbolRadius, k / 2)).addClass("highcharts-point").attr({
          zIndex: 3
        }).add(f.legendGroup);
      },
      drawLineMarker: function drawLineMarker(d) {
        var f = this.options,
            D = f.marker,
            H = d.symbolWidth,
            t = d.symbolHeight,
            C = t / 2,
            l = this.chart.renderer,
            E = this.legendGroup;
        d = d.baseline - Math.round(.3 * d.fontMetrics.b);
        var g = {};
        this.chart.styledMode || (g = {
          "stroke-width": f.lineWidth || 0
        }, f.dashStyle && (g.dashstyle = f.dashStyle));
        this.legendLine = l.path([["M", 0, d], ["L", H, d]]).addClass("highcharts-graph").attr(g).add(E);
        D && !1 !== D.enabled && H && (f = Math.min(x(D.radius, C), C), 0 === this.symbol.indexOf("url") && (D = k(D, {
          width: t,
          height: t
        }), f = 0), this.legendSymbol = D = l.symbol(this.symbol, H / 2 - f, d - f, 2 * f, 2 * f, D).addClass("highcharts-point").add(E), D.isMarker = !0);
      }
    };
  });
  P(k, "Core/Series/Series.js", [k["Core/Animation/AnimationUtilities.js"], k["Core/Globals.js"], k["Mixins/LegendSymbol.js"], k["Core/Options.js"], k["Core/Color/Palette.js"], k["Core/Series/Point.js"], k["Core/Series/SeriesRegistry.js"], k["Core/Renderer/SVG/SVGElement.js"], k["Core/Utilities.js"]], function (f, d, k, x, B, G, D, H, t) {
    var C = f.animObject,
        l = f.setAnimation,
        E = d.hasTouch,
        g = d.svg,
        y = d.win,
        c = x.defaultOptions,
        q = D.seriesTypes,
        n = t.addEvent,
        A = t.arrayMax,
        M = t.arrayMin,
        z = t.clamp,
        m = t.cleanRecursively,
        r = t.correctFloat,
        e = t.defined,
        h = t.erase,
        a = t.error,
        b = t.extend,
        w = t.find,
        J = t.fireEvent,
        O = t.getNestedProperty,
        F = t.isArray,
        N = t.isFunction,
        R = t.isNumber,
        Q = t.isString,
        T = t.merge,
        v = t.objectEach,
        L = t.pick,
        p = t.removeEvent,
        K = t.splat,
        S = t.syncTimeout;

    f = function () {
      function d() {
        this.zones = this.yAxis = this.xAxis = this.userOptions = this.tooltipOptions = this.processedYData = this.processedXData = this.points = this.options = this.linkedSeries = this.index = this.eventsToUnbind = this.eventOptions = this.data = this.chart = this._i = void 0;
      }

      d.prototype.init = function (a, c) {
        J(this, "init", {
          options: c
        });
        var e = this,
            g = a.series,
            d;
        this.eventOptions = this.eventOptions || {};
        this.eventsToUnbind = [];
        e.chart = a;
        e.options = c = e.setOptions(c);
        e.linkedSeries = [];
        e.bindAxes();
        b(e, {
          name: c.name,
          state: "",
          visible: !1 !== c.visible,
          selected: !0 === c.selected
        });
        var f = c.events;
        v(f, function (a, b) {
          N(a) && e.eventOptions[b] !== a && (N(e.eventOptions[b]) && p(e, b, e.eventOptions[b]), e.eventOptions[b] = a, n(e, b, a));
        });
        if (f && f.click || c.point && c.point.events && c.point.events.click || c.allowPointSelect) a.runTrackerClick = !0;
        e.getColor();
        e.getSymbol();
        e.parallelArrays.forEach(function (a) {
          e[a + "Data"] || (e[a + "Data"] = []);
        });
        e.isCartesian && (a.hasCartesianSeries = !0);
        g.length && (d = g[g.length - 1]);
        e._i = L(d && d._i, -1) + 1;
        e.opacity = e.options.opacity;
        a.orderSeries(this.insert(g));
        c.dataSorting && c.dataSorting.enabled ? e.setDataSortingOptions() : e.points || e.data || e.setData(c.data, !1);
        J(this, "afterInit");
      };

      d.prototype.is = function (a) {
        return q[a] && this instanceof q[a];
      };

      d.prototype.insert = function (a) {
        var b = this.options.index,
            c;

        if (R(b)) {
          for (c = a.length; c--;) {
            if (b >= L(a[c].options.index, a[c]._i)) {
              a.splice(c + 1, 0, this);
              break;
            }
          }

          -1 === c && a.unshift(this);
          c += 1;
        } else a.push(this);

        return L(c, a.length - 1);
      };

      d.prototype.bindAxes = function () {
        var b = this,
            c = b.options,
            e = b.chart,
            g;
        J(this, "bindAxes", null, function () {
          (b.axisTypes || []).forEach(function (d) {
            e[d].forEach(function (a) {
              g = a.options;
              if (c[d] === g.index || "undefined" !== typeof c[d] && c[d] === g.id || "undefined" === typeof c[d] && 0 === g.index) b.insert(a.series), b[d] = a, a.isDirty = !0;
            });
            b[d] || b.optionalAxis === d || a(18, !0, e);
          });
        });
        J(this, "afterBindAxes");
      };

      d.prototype.updateParallelArrays = function (a, b) {
        var c = a.series,
            e = arguments,
            g = R(b) ? function (e) {
          var g = "y" === e && c.toYData ? c.toYData(a) : a[e];
          c[e + "Data"][b] = g;
        } : function (a) {
          Array.prototype[b].apply(c[a + "Data"], Array.prototype.slice.call(e, 2));
        };
        c.parallelArrays.forEach(g);
      };

      d.prototype.hasData = function () {
        return this.visible && "undefined" !== typeof this.dataMax && "undefined" !== typeof this.dataMin || this.visible && this.yData && 0 < this.yData.length;
      };

      d.prototype.autoIncrement = function () {
        var a = this.options,
            b = this.xIncrement,
            c,
            e = a.pointIntervalUnit,
            g = this.chart.time;
        b = L(b, a.pointStart, 0);
        this.pointInterval = c = L(this.pointInterval, a.pointInterval, 1);
        e && (a = new g.Date(b), "day" === e ? g.set("Date", a, g.get("Date", a) + c) : "month" === e ? g.set("Month", a, g.get("Month", a) + c) : "year" === e && g.set("FullYear", a, g.get("FullYear", a) + c), c = a.getTime() - b);
        this.xIncrement = b + c;
        return b;
      };

      d.prototype.setDataSortingOptions = function () {
        var a = this.options;
        b(this, {
          requireSorting: !1,
          sorted: !1,
          enabledDataSorting: !0,
          allowDG: !1
        });
        e(a.pointRange) || (a.pointRange = 1);
      };

      d.prototype.setOptions = function (a) {
        var b = this.chart,
            g = b.options,
            d = g.plotOptions,
            f = b.userOptions || {};
        a = T(a);
        b = b.styledMode;
        var h = {
          plotOptions: d,
          userOptions: a
        };
        J(this, "setOptions", h);
        var m = h.plotOptions[this.type],
            l = f.plotOptions || {};
        this.userOptions = h.userOptions;
        f = T(m, d.series, f.plotOptions && f.plotOptions[this.type], a);
        this.tooltipOptions = T(c.tooltip, c.plotOptions.series && c.plotOptions.series.tooltip, c.plotOptions[this.type].tooltip, g.tooltip.userOptions, d.series && d.series.tooltip, d[this.type].tooltip, a.tooltip);
        this.stickyTracking = L(a.stickyTracking, l[this.type] && l[this.type].stickyTracking, l.series && l.series.stickyTracking, this.tooltipOptions.shared && !this.noSharedTooltip ? !0 : f.stickyTracking);
        null === m.marker && delete f.marker;
        this.zoneAxis = f.zoneAxis;
        g = this.zones = (f.zones || []).slice();
        !f.negativeColor && !f.negativeFillColor || f.zones || (d = {
          value: f[this.zoneAxis + "Threshold"] || f.threshold || 0,
          className: "highcharts-negative"
        }, b || (d.color = f.negativeColor, d.fillColor = f.negativeFillColor), g.push(d));
        g.length && e(g[g.length - 1].value) && g.push(b ? {} : {
          color: this.color,
          fillColor: this.fillColor
        });
        J(this, "afterSetOptions", {
          options: f
        });
        return f;
      };

      d.prototype.getName = function () {
        return L(this.options.name, "Series " + (this.index + 1));
      };

      d.prototype.getCyclic = function (a, b, c) {
        var g = this.chart,
            d = this.userOptions,
            f = a + "Index",
            h = a + "Counter",
            m = c ? c.length : L(g.options.chart[a + "Count"], g[a + "Count"]);

        if (!b) {
          var l = L(d[f], d["_" + f]);
          e(l) || (g.series.length || (g[h] = 0), d["_" + f] = l = g[h] % m, g[h] += 1);
          c && (b = c[l]);
        }

        "undefined" !== typeof l && (this[f] = l);
        this[a] = b;
      };

      d.prototype.getColor = function () {
        this.chart.styledMode ? this.getCyclic("color") : this.options.colorByPoint ? this.options.color = null : this.getCyclic("color", this.options.color || c.plotOptions[this.type].color, this.chart.options.colors);
      };

      d.prototype.getPointsCollection = function () {
        return (this.hasGroupedData ? this.points : this.data) || [];
      };

      d.prototype.getSymbol = function () {
        this.getCyclic("symbol", this.options.marker.symbol, this.chart.options.symbols);
      };

      d.prototype.findPointIndex = function (a, b) {
        var c = a.id,
            e = a.x,
            g = this.points,
            d,
            f = this.options.dataSorting;
        if (c) var h = this.chart.get(c);else if (this.linkedParent || this.enabledDataSorting) {
          var m = f && f.matchByName ? "name" : "index";
          h = w(g, function (b) {
            return !b.touched && b[m] === a[m];
          });
          if (!h) return;
        }

        if (h) {
          var l = h && h.index;
          "undefined" !== typeof l && (d = !0);
        }

        "undefined" === typeof l && R(e) && (l = this.xData.indexOf(e, b));
        -1 !== l && "undefined" !== typeof l && this.cropped && (l = l >= this.cropStart ? l - this.cropStart : l);
        !d && g[l] && g[l].touched && (l = void 0);
        return l;
      };

      d.prototype.updateData = function (a, b) {
        var c = this.options,
            g = c.dataSorting,
            d = this.points,
            f = [],
            h,
            m,
            l,
            n = this.requireSorting,
            u = a.length === d.length,
            p = !0;
        this.xIncrement = null;
        a.forEach(function (a, b) {
          var m = e(a) && this.pointClass.prototype.optionsToObject.call({
            series: this
          }, a) || {};
          var p = m.x;

          if (m.id || R(p)) {
            if (p = this.findPointIndex(m, l), -1 === p || "undefined" === typeof p ? f.push(a) : d[p] && a !== c.data[p] ? (d[p].update(a, !1, null, !1), d[p].touched = !0, n && (l = p + 1)) : d[p] && (d[p].touched = !0), !u || b !== p || g && g.enabled || this.hasDerivedData) h = !0;
          } else f.push(a);
        }, this);
        if (h) for (a = d.length; a--;) {
          (m = d[a]) && !m.touched && m.remove && m.remove(!1, b);
        } else !u || g && g.enabled ? p = !1 : (a.forEach(function (a, b) {
          d[b].update && a !== d[b].y && d[b].update(a, !1, null, !1);
        }), f.length = 0);
        d.forEach(function (a) {
          a && (a.touched = !1);
        });
        if (!p) return !1;
        f.forEach(function (a) {
          this.addPoint(a, !1, null, null, !1);
        }, this);
        null === this.xIncrement && this.xData && this.xData.length && (this.xIncrement = A(this.xData), this.autoIncrement());
        return !0;
      };

      d.prototype.setData = function (b, c, e, g) {
        var d = this,
            f = d.points,
            h = f && f.length || 0,
            m,
            l = d.options,
            n = d.chart,
            u = l.dataSorting,
            p = null,
            q = d.xAxis;
        p = l.turboThreshold;
        var r = this.xData,
            k = this.yData,
            w = (m = d.pointArrayMap) && m.length,
            y = l.keys,
            t = 0,
            I = 1,
            v;
        b = b || [];
        m = b.length;
        c = L(c, !0);
        u && u.enabled && (b = this.sortData(b));
        !1 !== g && m && h && !d.cropped && !d.hasGroupedData && d.visible && !d.isSeriesBoosting && (v = this.updateData(b, e));

        if (!v) {
          d.xIncrement = null;
          d.colorCounter = 0;
          this.parallelArrays.forEach(function (a) {
            d[a + "Data"].length = 0;
          });
          if (p && m > p) {
            if (p = d.getFirstValidPoint(b), R(p)) for (e = 0; e < m; e++) {
              r[e] = this.autoIncrement(), k[e] = b[e];
            } else if (F(p)) {
              if (w) for (e = 0; e < m; e++) {
                g = b[e], r[e] = g[0], k[e] = g.slice(1, w + 1);
              } else for (y && (t = y.indexOf("x"), I = y.indexOf("y"), t = 0 <= t ? t : 0, I = 0 <= I ? I : 1), e = 0; e < m; e++) {
                g = b[e], r[e] = g[t], k[e] = g[I];
              }
            } else a(12, !1, n);
          } else for (e = 0; e < m; e++) {
            "undefined" !== typeof b[e] && (g = {
              series: d
            }, d.pointClass.prototype.applyOptions.apply(g, [b[e]]), d.updateParallelArrays(g, e));
          }
          k && Q(k[0]) && a(14, !0, n);
          d.data = [];
          d.options.data = d.userOptions.data = b;

          for (e = h; e--;) {
            f[e] && f[e].destroy && f[e].destroy();
          }

          q && (q.minRange = q.userMinRange);
          d.isDirty = n.isDirtyBox = !0;
          d.isDirtyData = !!f;
          e = !1;
        }

        "point" === l.legendType && (this.processData(), this.generatePoints());
        c && n.redraw(e);
      };

      d.prototype.sortData = function (a) {
        var b = this,
            c = b.options.dataSorting.sortKey || "y",
            g = function g(a, b) {
          return e(b) && a.pointClass.prototype.optionsToObject.call({
            series: a
          }, b) || {};
        };

        a.forEach(function (c, e) {
          a[e] = g(b, c);
          a[e].index = e;
        }, this);
        a.concat().sort(function (a, b) {
          a = O(c, a);
          b = O(c, b);
          return b < a ? -1 : b > a ? 1 : 0;
        }).forEach(function (a, b) {
          a.x = b;
        }, this);
        b.linkedSeries && b.linkedSeries.forEach(function (b) {
          var c = b.options,
              e = c.data;
          c.dataSorting && c.dataSorting.enabled || !e || (e.forEach(function (c, d) {
            e[d] = g(b, c);
            a[d] && (e[d].x = a[d].x, e[d].index = d);
          }), b.setData(e, !1));
        });
        return a;
      };

      d.prototype.getProcessedData = function (b) {
        var c = this.xData,
            e = this.yData,
            g = c.length;
        var d = 0;
        var f = this.xAxis,
            h = this.options;
        var m = h.cropThreshold;
        var l = b || this.getExtremesFromAll || h.getExtremesFromAll,
            n = this.isCartesian;
        b = f && f.val2lin;
        h = !(!f || !f.logarithmic);
        var p = this.requireSorting;

        if (f) {
          f = f.getExtremes();
          var u = f.min;
          var q = f.max;
        }

        if (n && this.sorted && !l && (!m || g > m || this.forceCrop)) if (c[g - 1] < u || c[0] > q) c = [], e = [];else if (this.yData && (c[0] < u || c[g - 1] > q)) {
          d = this.cropData(this.xData, this.yData, u, q);
          c = d.xData;
          e = d.yData;
          d = d.start;
          var r = !0;
        }

        for (m = c.length || 1; --m;) {
          if (g = h ? b(c[m]) - b(c[m - 1]) : c[m] - c[m - 1], 0 < g && ("undefined" === typeof k || g < k)) var k = g;else 0 > g && p && (a(15, !1, this.chart), p = !1);
        }

        return {
          xData: c,
          yData: e,
          cropped: r,
          cropStart: d,
          closestPointRange: k
        };
      };

      d.prototype.processData = function (a) {
        var b = this.xAxis;
        if (this.isCartesian && !this.isDirty && !b.isDirty && !this.yAxis.isDirty && !a) return !1;
        a = this.getProcessedData();
        this.cropped = a.cropped;
        this.cropStart = a.cropStart;
        this.processedXData = a.xData;
        this.processedYData = a.yData;
        this.closestPointRange = this.basePointRange = a.closestPointRange;
      };

      d.prototype.cropData = function (a, b, c, e, g) {
        var d = a.length,
            f = 0,
            h = d,
            m;
        g = L(g, this.cropShoulder);

        for (m = 0; m < d; m++) {
          if (a[m] >= c) {
            f = Math.max(0, m - g);
            break;
          }
        }

        for (c = m; c < d; c++) {
          if (a[c] > e) {
            h = c + g;
            break;
          }
        }

        return {
          xData: a.slice(f, h),
          yData: b.slice(f, h),
          start: f,
          end: h
        };
      };

      d.prototype.generatePoints = function () {
        var a = this.options,
            c = a.data,
            e = this.data,
            g,
            d = this.processedXData,
            f = this.processedYData,
            h = this.pointClass,
            m = d.length,
            l = this.cropStart || 0,
            n = this.hasGroupedData;
        a = a.keys;
        var p = [],
            q;
        e || n || (e = [], e.length = c.length, e = this.data = e);
        a && n && (this.options.keys = !1);

        for (q = 0; q < m; q++) {
          var r = l + q;

          if (n) {
            var k = new h().init(this, [d[q]].concat(K(f[q])));
            k.dataGroup = this.groupMap[q];
            k.dataGroup.options && (k.options = k.dataGroup.options, b(k, k.dataGroup.options), delete k.dataLabels);
          } else (k = e[r]) || "undefined" === typeof c[r] || (e[r] = k = new h().init(this, c[r], d[q]));

          k && (k.index = r, p[q] = k);
        }

        this.options.keys = a;
        if (e && (m !== (g = e.length) || n)) for (q = 0; q < g; q++) {
          q !== l || n || (q += m), e[q] && (e[q].destroyElements(), e[q].plotX = void 0);
        }
        this.data = e;
        this.points = p;
        J(this, "afterGeneratePoints");
      };

      d.prototype.getXExtremes = function (a) {
        return {
          min: M(a),
          max: A(a)
        };
      };

      d.prototype.getExtremes = function (a, b) {
        var c = this.xAxis,
            e = this.yAxis,
            g = this.processedXData || this.xData,
            d = [],
            f = 0,
            h = 0;
        var m = 0;
        var l = this.requireSorting ? this.cropShoulder : 0,
            n = e ? e.positiveValuesOnly : !1,
            p;
        a = a || this.stackedYData || this.processedYData || [];
        e = a.length;
        c && (m = c.getExtremes(), h = m.min, m = m.max);

        for (p = 0; p < e; p++) {
          var u = g[p];
          var q = a[p];
          var r = (R(q) || F(q)) && (q.length || 0 < q || !n);
          u = b || this.getExtremesFromAll || this.options.getExtremesFromAll || this.cropped || !c || (g[p + l] || u) >= h && (g[p - l] || u) <= m;
          if (r && u) if (r = q.length) for (; r--;) {
            R(q[r]) && (d[f++] = q[r]);
          } else d[f++] = q;
        }

        a = {
          dataMin: M(d),
          dataMax: A(d)
        };
        J(this, "afterGetExtremes", {
          dataExtremes: a
        });
        return a;
      };

      d.prototype.applyExtremes = function () {
        var a = this.getExtremes();
        this.dataMin = a.dataMin;
        this.dataMax = a.dataMax;
        return a;
      };

      d.prototype.getFirstValidPoint = function (a) {
        for (var b = null, c = a.length, e = 0; null === b && e < c;) {
          b = a[e], e++;
        }

        return b;
      };

      d.prototype.translate = function () {
        this.processedXData || this.processData();
        this.generatePoints();
        var a = this.options,
            b = a.stacking,
            c = this.xAxis,
            g = c.categories,
            d = this.enabledDataSorting,
            f = this.yAxis,
            h = this.points,
            m = h.length,
            l = !!this.modifyValue,
            n,
            p = this.pointPlacementToXValue(),
            q = !!p,
            k = a.threshold,
            w = a.startFromThreshold ? k : 0,
            y,
            t = this.zoneAxis || "y",
            v = Number.MAX_VALUE;

        for (n = 0; n < m; n++) {
          var A = h[n],
              C = A.x,
              E = A.y,
              x = A.low,
              M = b && f.stacking && f.stacking.stacks[(this.negStacks && E < (w ? 0 : k) ? "-" : "") + this.stackKey];
          if (f.positiveValuesOnly && !f.validatePositiveValue(E) || c.positiveValuesOnly && !c.validatePositiveValue(C)) A.isNull = !0;
          A.plotX = y = r(z(c.translate(C, 0, 0, 0, 1, p, "flags" === this.type), -1E5, 1E5));

          if (b && this.visible && M && M[C]) {
            var N = this.getStackIndicator(N, C, this.index);

            if (!A.isNull) {
              var H = M[C];
              var Q = H.points[N.key];
            }
          }

          F(Q) && (x = Q[0], E = Q[1], x === w && N.key === M[C].base && (x = L(R(k) && k, f.min)), f.positiveValuesOnly && 0 >= x && (x = null), A.total = A.stackTotal = H.total, A.percentage = H.total && A.y / H.total * 100, A.stackY = E, this.irregularWidths || H.setOffset(this.pointXOffset || 0, this.barW || 0));
          A.yBottom = e(x) ? z(f.translate(x, 0, 1, 0, 1), -1E5, 1E5) : null;
          l && (E = this.modifyValue(E, A));
          A.plotY = void 0;
          R(E) && (E = f.translate(E, !1, !0, !1, !0), "undefined" !== typeof E && (A.plotY = z(E, -1E5, 1E5)));
          A.isInside = this.isPointInside(A);
          A.clientX = q ? r(c.translate(C, 0, 0, 0, 1, p)) : y;
          A.negative = A[t] < (a[t + "Threshold"] || k || 0);
          A.category = g && "undefined" !== typeof g[A.x] ? g[A.x] : A.x;

          if (!A.isNull && !1 !== A.visible) {
            "undefined" !== typeof D && (v = Math.min(v, Math.abs(y - D)));
            var D = y;
          }

          A.zone = this.zones.length && A.getZone();
          !A.graphic && this.group && d && (A.isNew = !0);
        }

        this.closestPointRangePx = v;
        J(this, "afterTranslate");
      };

      d.prototype.getValidPoints = function (a, b, c) {
        var e = this.chart;
        return (a || this.points || []).filter(function (a) {
          return b && !e.isInsidePlot(a.plotX, a.plotY, e.inverted) ? !1 : !1 !== a.visible && (c || !a.isNull);
        });
      };

      d.prototype.getClipBox = function (a, b) {
        var c = this.options,
            e = this.chart,
            g = e.inverted,
            d = this.xAxis,
            f = d && this.yAxis,
            h = e.options.chart.scrollablePlotArea || {};
        a && !1 === c.clip && f ? a = g ? {
          y: -e.chartWidth + f.len + f.pos,
          height: e.chartWidth,
          width: e.chartHeight,
          x: -e.chartHeight + d.len + d.pos
        } : {
          y: -f.pos,
          height: e.chartHeight,
          width: e.chartWidth,
          x: -d.pos
        } : (a = this.clipBox || e.clipBox, b && (a.width = e.plotSizeX, a.x = (e.scrollablePixelsX || 0) * (h.scrollPositionX || 0)));
        return b ? {
          width: a.width,
          x: a.x
        } : a;
      };

      d.prototype.setClip = function (a) {
        var b = this.chart,
            c = this.options,
            e = b.renderer,
            g = b.inverted,
            d = this.clipBox,
            f = this.getClipBox(a),
            h = this.sharedClipKey || ["_sharedClip", a && a.duration, a && a.easing, a && a.defer, f.height, c.xAxis, c.yAxis].join(),
            m = b[h],
            l = b[h + "m"];
        a && (f.width = 0, g && (f.x = b.plotHeight + (!1 !== c.clip ? 0 : b.plotTop)));
        m ? b.hasLoaded || m.attr(f) : (a && (b[h + "m"] = l = e.clipRect(g ? b.plotSizeX + 99 : -99, g ? -b.plotLeft : -b.plotTop, 99, g ? b.chartWidth : b.chartHeight)), b[h] = m = e.clipRect(f), m.count = {
          length: 0
        });
        a && !m.count[this.index] && (m.count[this.index] = !0, m.count.length += 1);
        if (!1 !== c.clip || a) this.group.clip(a || d ? m : b.clipRect), this.markerGroup.clip(l), this.sharedClipKey = h;
        a || (m.count[this.index] && (delete m.count[this.index], --m.count.length), 0 === m.count.length && h && b[h] && (d || (b[h] = b[h].destroy()), b[h + "m"] && (b[h + "m"] = b[h + "m"].destroy())));
      };

      d.prototype.animate = function (a) {
        var b = this.chart,
            c = C(this.options.animation);
        if (a) this.setClip(c);else {
          var e = this.sharedClipKey;
          a = b[e];
          var g = this.getClipBox(c, !0);
          a && a.animate(g, c);
          b[e + "m"] && b[e + "m"].animate({
            width: g.width + 99,
            x: g.x - (b.inverted ? 0 : 99)
          }, c);
        }
      };

      d.prototype.afterAnimate = function () {
        this.setClip();
        J(this, "afterAnimate");
        this.finishedAnimating = !0;
      };

      d.prototype.drawPoints = function () {
        var a = this.points,
            b = this.chart,
            c,
            e,
            g = this.options.marker,
            d = this[this.specialGroup] || this.markerGroup,
            f = this.xAxis,
            h = L(g.enabled, !f || f.isRadial ? !0 : null, this.closestPointRangePx >= g.enabledThreshold * g.radius);
        if (!1 !== g.enabled || this._hasPointMarkers) for (c = 0; c < a.length; c++) {
          var m = a[c];
          var l = (e = m.graphic) ? "animate" : "attr";
          var n = m.marker || {};
          var p = !!m.marker;

          if ((h && "undefined" === typeof n.enabled || n.enabled) && !m.isNull && !1 !== m.visible) {
            var q = L(n.symbol, this.symbol);
            var r = this.markerAttribs(m, m.selected && "select");
            this.enabledDataSorting && (m.startXPos = f.reversed ? -r.width : f.width);
            var k = !1 !== m.isInside;
            e ? e[k ? "show" : "hide"](k).animate(r) : k && (0 < r.width || m.hasImage) && (m.graphic = e = b.renderer.symbol(q, r.x, r.y, r.width, r.height, p ? n : g).add(d), this.enabledDataSorting && b.hasRendered && (e.attr({
              x: m.startXPos
            }), l = "animate"));
            e && "animate" === l && e[k ? "show" : "hide"](k).animate(r);
            if (e && !b.styledMode) e[l](this.pointAttribs(m, m.selected && "select"));
            e && e.addClass(m.getClassName(), !0);
          } else e && (m.graphic = e.destroy());
        }
      };

      d.prototype.markerAttribs = function (a, b) {
        var c = this.options,
            e = c.marker,
            g = a.marker || {},
            d = g.symbol || e.symbol,
            f = L(g.radius, e.radius);
        b && (e = e.states[b], b = g.states && g.states[b], f = L(b && b.radius, e && e.radius, f + (e && e.radiusPlus || 0)));
        a.hasImage = d && 0 === d.indexOf("url");
        a.hasImage && (f = 0);
        a = {
          x: c.crisp ? Math.floor(a.plotX) - f : a.plotX - f,
          y: a.plotY - f
        };
        f && (a.width = a.height = 2 * f);
        return a;
      };

      d.prototype.pointAttribs = function (a, b) {
        var c = this.options.marker,
            e = a && a.options,
            g = e && e.marker || {},
            d = this.color,
            f = e && e.color,
            h = a && a.color;
        e = L(g.lineWidth, c.lineWidth);
        var m = a && a.zone && a.zone.color;
        a = 1;
        d = f || m || h || d;
        f = g.fillColor || c.fillColor || d;
        d = g.lineColor || c.lineColor || d;
        b = b || "normal";
        c = c.states[b];
        b = g.states && g.states[b] || {};
        e = L(b.lineWidth, c.lineWidth, e + L(b.lineWidthPlus, c.lineWidthPlus, 0));
        f = b.fillColor || c.fillColor || f;
        d = b.lineColor || c.lineColor || d;
        a = L(b.opacity, c.opacity, a);
        return {
          stroke: d,
          "stroke-width": e,
          fill: f,
          opacity: a
        };
      };

      d.prototype.destroy = function (a) {
        var b = this,
            c = b.chart,
            e = /AppleWebKit\/533/.test(y.navigator.userAgent),
            g,
            d,
            f = b.data || [],
            m,
            l;
        J(b, "destroy");
        this.removeEvents(a);
        (b.axisTypes || []).forEach(function (a) {
          (l = b[a]) && l.series && (h(l.series, b), l.isDirty = l.forceRedraw = !0);
        });
        b.legendItem && b.chart.legend.destroyItem(b);

        for (d = f.length; d--;) {
          (m = f[d]) && m.destroy && m.destroy();
        }

        b.points = null;
        t.clearTimeout(b.animationTimeout);
        v(b, function (a, b) {
          a instanceof H && !a.survive && (g = e && "group" === b ? "hide" : "destroy", a[g]());
        });
        c.hoverSeries === b && (c.hoverSeries = null);
        h(c.series, b);
        c.orderSeries();
        v(b, function (c, e) {
          a && "hcEvents" === e || delete b[e];
        });
      };

      d.prototype.applyZones = function () {
        var a = this,
            b = this.chart,
            c = b.renderer,
            e = this.zones,
            g,
            d,
            f = this.clips || [],
            h,
            m = this.graph,
            l = this.area,
            n = Math.max(b.chartWidth, b.chartHeight),
            p = this[(this.zoneAxis || "y") + "Axis"],
            q = b.inverted,
            r,
            k,
            w,
            y = !1,
            t,
            v;

        if (e.length && (m || l) && p && "undefined" !== typeof p.min) {
          var A = p.reversed;
          var F = p.horiz;
          m && !this.showLine && m.hide();
          l && l.hide();
          var E = p.getExtremes();
          e.forEach(function (e, u) {
            g = A ? F ? b.plotWidth : 0 : F ? 0 : p.toPixels(E.min) || 0;
            g = z(L(d, g), 0, n);
            d = z(Math.round(p.toPixels(L(e.value, E.max), !0) || 0), 0, n);
            y && (g = d = p.toPixels(E.max));
            r = Math.abs(g - d);
            k = Math.min(g, d);
            w = Math.max(g, d);
            p.isXAxis ? (h = {
              x: q ? w : k,
              y: 0,
              width: r,
              height: n
            }, F || (h.x = b.plotHeight - h.x)) : (h = {
              x: 0,
              y: q ? w : k,
              width: n,
              height: r
            }, F && (h.y = b.plotWidth - h.y));
            q && c.isVML && (h = p.isXAxis ? {
              x: 0,
              y: A ? k : w,
              height: h.width,
              width: b.chartWidth
            } : {
              x: h.y - b.plotLeft - b.spacingBox.x,
              y: 0,
              width: h.height,
              height: b.chartHeight
            });
            f[u] ? f[u].animate(h) : f[u] = c.clipRect(h);
            t = a["zone-area-" + u];
            v = a["zone-graph-" + u];
            m && v && v.clip(f[u]);
            l && t && t.clip(f[u]);
            y = e.value > E.max;
            a.resetZones && 0 === d && (d = void 0);
          });
          this.clips = f;
        } else a.visible && (m && m.show(!0), l && l.show(!0));
      };

      d.prototype.invertGroups = function (a) {
        function b() {
          ["group", "markerGroup"].forEach(function (b) {
            c[b] && (e.renderer.isVML && c[b].attr({
              width: c.yAxis.len,
              height: c.xAxis.len
            }), c[b].width = c.yAxis.len, c[b].height = c.xAxis.len, c[b].invert(c.isRadialSeries ? !1 : a));
          });
        }

        var c = this,
            e = c.chart;
        c.xAxis && (c.eventsToUnbind.push(n(e, "resize", b)), b(), c.invertGroups = b);
      };

      d.prototype.plotGroup = function (a, b, c, g, d) {
        var f = this[a],
            h = !f;
        c = {
          visibility: c,
          zIndex: g || .1
        };
        "undefined" === typeof this.opacity || this.chart.styledMode || "inactive" === this.state || (c.opacity = this.opacity);
        h && (this[a] = f = this.chart.renderer.g().add(d));
        f.addClass("highcharts-" + b + " highcharts-series-" + this.index + " highcharts-" + this.type + "-series " + (e(this.colorIndex) ? "highcharts-color-" + this.colorIndex + " " : "") + (this.options.className || "") + (f.hasClass("highcharts-tracker") ? " highcharts-tracker" : ""), !0);
        f.attr(c)[h ? "attr" : "animate"](this.getPlotBox());
        return f;
      };

      d.prototype.getPlotBox = function () {
        var a = this.chart,
            b = this.xAxis,
            c = this.yAxis;
        a.inverted && (b = c, c = this.xAxis);
        return {
          translateX: b ? b.left : a.plotLeft,
          translateY: c ? c.top : a.plotTop,
          scaleX: 1,
          scaleY: 1
        };
      };

      d.prototype.removeEvents = function (a) {
        a || p(this);
        this.eventsToUnbind.length && (this.eventsToUnbind.forEach(function (a) {
          a();
        }), this.eventsToUnbind.length = 0);
      };

      d.prototype.render = function () {
        var a = this,
            b = a.chart,
            c = a.options,
            e = C(c.animation),
            g = !a.finishedAnimating && b.renderer.isSVG && e.duration,
            d = a.visible ? "inherit" : "hidden",
            f = c.zIndex,
            h = a.hasRendered,
            m = b.seriesGroup,
            l = b.inverted;
        J(this, "render");
        var n = a.plotGroup("group", "series", d, f, m);
        a.markerGroup = a.plotGroup("markerGroup", "markers", d, f, m);
        g && a.animate && a.animate(!0);
        n.inverted = L(a.invertible, a.isCartesian) ? l : !1;
        a.drawGraph && (a.drawGraph(), a.applyZones());
        a.visible && a.drawPoints();
        a.drawDataLabels && a.drawDataLabels();
        a.redrawPoints && a.redrawPoints();
        a.drawTracker && !1 !== a.options.enableMouseTracking && a.drawTracker();
        a.invertGroups(l);
        !1 === c.clip || a.sharedClipKey || h || n.clip(b.clipRect);
        g && a.animate && a.animate();
        h || (g && e.defer && (g += e.defer), a.animationTimeout = S(function () {
          a.afterAnimate();
        }, g || 0));
        a.isDirty = !1;
        a.hasRendered = !0;
        J(a, "afterRender");
      };

      d.prototype.redraw = function () {
        var a = this.chart,
            b = this.isDirty || this.isDirtyData,
            c = this.group,
            e = this.xAxis,
            g = this.yAxis;
        c && (a.inverted && c.attr({
          width: a.plotWidth,
          height: a.plotHeight
        }), c.animate({
          translateX: L(e && e.left, a.plotLeft),
          translateY: L(g && g.top, a.plotTop)
        }));
        this.translate();
        this.render();
        b && delete this.kdTree;
      };

      d.prototype.searchPoint = function (a, b) {
        var c = this.xAxis,
            e = this.yAxis,
            g = this.chart.inverted;
        return this.searchKDTree({
          clientX: g ? c.len - a.chartY + c.pos : a.chartX - c.pos,
          plotY: g ? e.len - a.chartX + e.pos : a.chartY - e.pos
        }, b, a);
      };

      d.prototype.buildKDTree = function (a) {
        function b(a, e, g) {
          var d;

          if (d = a && a.length) {
            var f = c.kdAxisArray[e % g];
            a.sort(function (a, b) {
              return a[f] - b[f];
            });
            d = Math.floor(d / 2);
            return {
              point: a[d],
              left: b(a.slice(0, d), e + 1, g),
              right: b(a.slice(d + 1), e + 1, g)
            };
          }
        }

        this.buildingKdTree = !0;
        var c = this,
            e = -1 < c.options.findNearestPointBy.indexOf("y") ? 2 : 1;
        delete c.kdTree;
        S(function () {
          c.kdTree = b(c.getValidPoints(null, !c.directTouch), e, e);
          c.buildingKdTree = !1;
        }, c.options.kdNow || a && "touchstart" === a.type ? 0 : 1);
      };

      d.prototype.searchKDTree = function (a, b, c) {
        function g(a, b, c, l) {
          var n = b.point,
              p = d.kdAxisArray[c % l],
              q = n;
          var r = e(a[f]) && e(n[f]) ? Math.pow(a[f] - n[f], 2) : null;
          var k = e(a[h]) && e(n[h]) ? Math.pow(a[h] - n[h], 2) : null;
          k = (r || 0) + (k || 0);
          n.dist = e(k) ? Math.sqrt(k) : Number.MAX_VALUE;
          n.distX = e(r) ? Math.sqrt(r) : Number.MAX_VALUE;
          p = a[p] - n[p];
          k = 0 > p ? "left" : "right";
          r = 0 > p ? "right" : "left";
          b[k] && (k = g(a, b[k], c + 1, l), q = k[m] < q[m] ? k : n);
          b[r] && Math.sqrt(p * p) < q[m] && (a = g(a, b[r], c + 1, l), q = a[m] < q[m] ? a : q);
          return q;
        }

        var d = this,
            f = this.kdAxisArray[0],
            h = this.kdAxisArray[1],
            m = b ? "distX" : "dist";
        b = -1 < d.options.findNearestPointBy.indexOf("y") ? 2 : 1;
        this.kdTree || this.buildingKdTree || this.buildKDTree(c);
        if (this.kdTree) return g(a, this.kdTree, b, b);
      };

      d.prototype.pointPlacementToXValue = function () {
        var a = this.options,
            b = a.pointRange,
            c = this.xAxis;
        a = a.pointPlacement;
        "between" === a && (a = c.reversed ? -.5 : .5);
        return R(a) ? a * (b || c.pointRange) : 0;
      };

      d.prototype.isPointInside = function (a) {
        return "undefined" !== typeof a.plotY && "undefined" !== typeof a.plotX && 0 <= a.plotY && a.plotY <= this.yAxis.len && 0 <= a.plotX && a.plotX <= this.xAxis.len;
      };

      d.prototype.drawTracker = function () {
        var a = this,
            b = a.options,
            c = b.trackByArea,
            e = [].concat(c ? a.areaPath : a.graphPath),
            d = a.chart,
            f = d.pointer,
            h = d.renderer,
            m = d.options.tooltip.snap,
            l = a.tracker,
            n = function n(b) {
          if (d.hoverSeries !== a) a.onMouseOver();
        },
            p = "rgba(192,192,192," + (g ? .0001 : .002) + ")";

        l ? l.attr({
          d: e
        }) : a.graph && (a.tracker = h.path(e).attr({
          visibility: a.visible ? "visible" : "hidden",
          zIndex: 2
        }).addClass(c ? "highcharts-tracker-area" : "highcharts-tracker-line").add(a.group), d.styledMode || a.tracker.attr({
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
          stroke: p,
          fill: c ? p : "none",
          "stroke-width": a.graph.strokeWidth() + (c ? 0 : 2 * m)
        }), [a.tracker, a.markerGroup].forEach(function (a) {
          a.addClass("highcharts-tracker").on("mouseover", n).on("mouseout", function (a) {
            f.onTrackerMouseOut(a);
          });
          b.cursor && !d.styledMode && a.css({
            cursor: b.cursor
          });
          if (E) a.on("touchstart", n);
        }));
        J(this, "afterDrawTracker");
      };

      d.prototype.addPoint = function (a, b, c, e, g) {
        var d = this.options,
            f = this.data,
            h = this.chart,
            m = this.xAxis;
        m = m && m.hasNames && m.names;
        var l = d.data,
            n = this.xData,
            p;
        b = L(b, !0);
        var q = {
          series: this
        };
        this.pointClass.prototype.applyOptions.apply(q, [a]);
        var r = q.x;
        var k = n.length;
        if (this.requireSorting && r < n[k - 1]) for (p = !0; k && n[k - 1] > r;) {
          k--;
        }
        this.updateParallelArrays(q, "splice", k, 0, 0);
        this.updateParallelArrays(q, k);
        m && q.name && (m[r] = q.name);
        l.splice(k, 0, a);
        p && (this.data.splice(k, 0, null), this.processData());
        "point" === d.legendType && this.generatePoints();
        c && (f[0] && f[0].remove ? f[0].remove(!1) : (f.shift(), this.updateParallelArrays(q, "shift"), l.shift()));
        !1 !== g && J(this, "addPoint", {
          point: q
        });
        this.isDirtyData = this.isDirty = !0;
        b && h.redraw(e);
      };

      d.prototype.removePoint = function (a, b, c) {
        var e = this,
            g = e.data,
            d = g[a],
            f = e.points,
            h = e.chart,
            m = function m() {
          f && f.length === g.length && f.splice(a, 1);
          g.splice(a, 1);
          e.options.data.splice(a, 1);
          e.updateParallelArrays(d || {
            series: e
          }, "splice", a, 1);
          d && d.destroy();
          e.isDirty = !0;
          e.isDirtyData = !0;
          b && h.redraw();
        };

        l(c, h);
        b = L(b, !0);
        d ? d.firePointEvent("remove", null, m) : m();
      };

      d.prototype.remove = function (a, b, c, e) {
        function g() {
          d.destroy(e);
          f.isDirtyLegend = f.isDirtyBox = !0;
          f.linkSeries();
          L(a, !0) && f.redraw(b);
        }

        var d = this,
            f = d.chart;
        !1 !== c ? J(d, "remove", null, g) : g();
      };

      d.prototype.update = function (c, e) {
        c = m(c, this.userOptions);
        J(this, "update", {
          options: c
        });
        var g = this,
            d = g.chart,
            f = g.userOptions,
            h = g.initialType || g.type,
            l = d.options.plotOptions,
            n = c.type || f.type || d.options.chart.type,
            p = !(this.hasDerivedData || n && n !== this.type || "undefined" !== typeof c.pointStart || "undefined" !== typeof c.pointInterval || g.hasOptionChanged("dataGrouping") || g.hasOptionChanged("pointStart") || g.hasOptionChanged("pointInterval") || g.hasOptionChanged("pointIntervalUnit") || g.hasOptionChanged("keys")),
            r = q[h].prototype,
            k,
            w = ["eventOptions", "navigatorSeries", "baseSeries"],
            u = g.finishedAnimating && {
          animation: !1
        },
            y = {};
        p && (w.push("data", "isDirtyData", "points", "processedXData", "processedYData", "xIncrement", "cropped", "_hasPointMarkers", "_hasPointLabels", "nodes", "layout", "mapMap", "mapData", "minY", "maxY", "minX", "maxX"), !1 !== c.visible && w.push("area", "graph"), g.parallelArrays.forEach(function (a) {
          w.push(a + "Data");
        }), c.data && (c.dataSorting && b(g.options.dataSorting, c.dataSorting), this.setData(c.data, !1)));
        c = T(f, u, {
          index: "undefined" === typeof f.index ? g.index : f.index,
          pointStart: L(l && l.series && l.series.pointStart, f.pointStart, g.xData[0])
        }, !p && {
          data: g.options.data
        }, c);
        p && c.data && (c.data = g.options.data);
        w = ["group", "markerGroup", "dataLabelsGroup", "transformGroup"].concat(w);
        w.forEach(function (a) {
          w[a] = g[a];
          delete g[a];
        });

        if (q[n || h]) {
          if (f = n !== g.type, g.remove(!1, !1, !1, !0), f) if (Object.setPrototypeOf) Object.setPrototypeOf(g, q[n || h].prototype);else {
            f = Object.hasOwnProperty.call(g, "hcEvents") && g.hcEvents;

            for (k in r) {
              g[k] = void 0;
            }

            b(g, q[n || h].prototype);
            f ? g.hcEvents = f : delete g.hcEvents;
          }
        } else a(17, !0, d, {
          missingModuleFor: n || h
        });

        w.forEach(function (a) {
          g[a] = w[a];
        });
        g.init(d, c);

        if (p && this.points) {
          var t = g.options;
          !1 === t.visible ? (y.graphic = 1, y.dataLabel = 1) : g._hasPointLabels || (c = t.marker, n = t.dataLabels, c && (!1 === c.enabled || "symbol" in c) && (y.graphic = 1), n && !1 === n.enabled && (y.dataLabel = 1));
          this.points.forEach(function (a) {
            a && a.series && (a.resolveColor(), Object.keys(y).length && a.destroyElements(y), !1 === t.showInLegend && a.legendItem && d.legend.destroyItem(a));
          }, this);
        }

        g.initialType = h;
        d.linkSeries();
        J(this, "afterUpdate");
        L(e, !0) && d.redraw(p ? void 0 : !1);
      };

      d.prototype.setName = function (a) {
        this.name = this.options.name = this.userOptions.name = a;
        this.chart.isDirtyLegend = !0;
      };

      d.prototype.hasOptionChanged = function (a) {
        var b = this.options[a],
            c = this.chart.options.plotOptions,
            e = this.userOptions[a];
        return e ? b !== e : b !== L(c && c[this.type] && c[this.type][a], c && c.series && c.series[a], b);
      };

      d.prototype.onMouseOver = function () {
        var a = this.chart,
            b = a.hoverSeries;
        a.pointer.setHoverChartIndex();
        if (b && b !== this) b.onMouseOut();
        this.options.events.mouseOver && J(this, "mouseOver");
        this.setState("hover");
        a.hoverSeries = this;
      };

      d.prototype.onMouseOut = function () {
        var a = this.options,
            b = this.chart,
            c = b.tooltip,
            e = b.hoverPoint;
        b.hoverSeries = null;
        if (e) e.onMouseOut();
        this && a.events.mouseOut && J(this, "mouseOut");
        !c || this.stickyTracking || c.shared && !this.noSharedTooltip || c.hide();
        b.series.forEach(function (a) {
          a.setState("", !0);
        });
      };

      d.prototype.setState = function (a, b) {
        var c = this,
            e = c.options,
            g = c.graph,
            d = e.inactiveOtherPoints,
            f = e.states,
            h = e.lineWidth,
            m = e.opacity,
            l = L(f[a || "normal"] && f[a || "normal"].animation, c.chart.options.chart.animation);
        e = 0;
        a = a || "";

        if (c.state !== a && ([c.group, c.markerGroup, c.dataLabelsGroup].forEach(function (b) {
          b && (c.state && b.removeClass("highcharts-series-" + c.state), a && b.addClass("highcharts-series-" + a));
        }), c.state = a, !c.chart.styledMode)) {
          if (f[a] && !1 === f[a].enabled) return;
          a && (h = f[a].lineWidth || h + (f[a].lineWidthPlus || 0), m = L(f[a].opacity, m));
          if (g && !g.dashstyle) for (f = {
            "stroke-width": h
          }, g.animate(f, l); c["zone-graph-" + e];) {
            c["zone-graph-" + e].animate(f, l), e += 1;
          }
          d || [c.group, c.markerGroup, c.dataLabelsGroup, c.labelBySeries].forEach(function (a) {
            a && a.animate({
              opacity: m
            }, l);
          });
        }

        b && d && c.points && c.setAllPointsToState(a || void 0);
      };

      d.prototype.setAllPointsToState = function (a) {
        this.points.forEach(function (b) {
          b.setState && b.setState(a);
        });
      };

      d.prototype.setVisible = function (a, b) {
        var c = this,
            e = c.chart,
            g = c.legendItem,
            d = e.options.chart.ignoreHiddenSeries,
            f = c.visible;
        var h = (c.visible = a = c.options.visible = c.userOptions.visible = "undefined" === typeof a ? !f : a) ? "show" : "hide";
        ["group", "dataLabelsGroup", "markerGroup", "tracker", "tt"].forEach(function (a) {
          if (c[a]) c[a][h]();
        });
        if (e.hoverSeries === c || (e.hoverPoint && e.hoverPoint.series) === c) c.onMouseOut();
        g && e.legend.colorizeItem(c, a);
        c.isDirty = !0;
        c.options.stacking && e.series.forEach(function (a) {
          a.options.stacking && a.visible && (a.isDirty = !0);
        });
        c.linkedSeries.forEach(function (b) {
          b.setVisible(a, !1);
        });
        d && (e.isDirtyBox = !0);
        J(c, h);
        !1 !== b && e.redraw();
      };

      d.prototype.show = function () {
        this.setVisible(!0);
      };

      d.prototype.hide = function () {
        this.setVisible(!1);
      };

      d.prototype.select = function (a) {
        this.selected = a = this.options.selected = "undefined" === typeof a ? !this.selected : a;
        this.checkbox && (this.checkbox.checked = a);
        J(this, a ? "select" : "unselect");
      };

      d.defaultOptions = {
        lineWidth: 2,
        allowPointSelect: !1,
        crisp: !0,
        showCheckbox: !1,
        animation: {
          duration: 1E3
        },
        events: {},
        marker: {
          enabledThreshold: 2,
          lineColor: B.backgroundColor,
          lineWidth: 0,
          radius: 4,
          states: {
            normal: {
              animation: !0
            },
            hover: {
              animation: {
                duration: 50
              },
              enabled: !0,
              radiusPlus: 2,
              lineWidthPlus: 1
            },
            select: {
              fillColor: B.neutralColor20,
              lineColor: B.neutralColor100,
              lineWidth: 2
            }
          }
        },
        point: {
          events: {}
        },
        dataLabels: {
          animation: {},
          align: "center",
          defer: !0,
          formatter: function formatter() {
            var a = this.series.chart.numberFormatter;
            return "number" !== typeof this.y ? "" : a(this.y, -1);
          },
          padding: 5,
          style: {
            fontSize: "11px",
            fontWeight: "bold",
            color: "contrast",
            textOutline: "1px contrast"
          },
          verticalAlign: "bottom",
          x: 0,
          y: 0
        },
        cropThreshold: 300,
        opacity: 1,
        pointRange: 0,
        softThreshold: !0,
        states: {
          normal: {
            animation: !0
          },
          hover: {
            animation: {
              duration: 50
            },
            lineWidthPlus: 1,
            marker: {},
            halo: {
              size: 10,
              opacity: .25
            }
          },
          select: {
            animation: {
              duration: 0
            }
          },
          inactive: {
            animation: {
              duration: 50
            },
            opacity: .2
          }
        },
        stickyTracking: !0,
        turboThreshold: 1E3,
        findNearestPointBy: "x"
      };
      return d;
    }();

    b(f.prototype, {
      axisTypes: ["xAxis", "yAxis"],
      coll: "series",
      colorCounter: 0,
      cropShoulder: 1,
      directTouch: !1,
      drawLegendSymbol: k.drawLineMarker,
      isCartesian: !0,
      kdAxisArray: ["clientX", "plotY"],
      parallelArrays: ["x", "y"],
      pointClass: G,
      requireSorting: !0,
      sorted: !0
    });
    D.series = f;
    "";
    "";
    return f;
  });
  P(k, "Extensions/ScrollablePlotArea.js", [k["Core/Animation/AnimationUtilities.js"], k["Core/Axis/Axis.js"], k["Core/Chart/Chart.js"], k["Core/Series/Series.js"], k["Core/Globals.js"], k["Core/Utilities.js"]], function (f, d, k, x, B, G) {
    var D = f.stop,
        H = G.addEvent,
        t = G.createElement,
        C = G.merge,
        l = G.pick;
    "";
    H(k, "afterSetChartSize", function (d) {
      var g = this.options.chart.scrollablePlotArea,
          f = g && g.minWidth;
      g = g && g.minHeight;

      if (!this.renderer.forExport) {
        if (f) {
          if (this.scrollablePixelsX = f = Math.max(0, f - this.chartWidth)) {
            this.scrollablePlotBox = C(this.plotBox);
            this.plotWidth += f;
            this.inverted ? (this.clipBox.height += f, this.plotBox.height += f) : (this.clipBox.width += f, this.plotBox.width += f);
            var c = {
              1: {
                name: "right",
                value: f
              }
            };
          }
        } else g && (this.scrollablePixelsY = f = Math.max(0, g - this.chartHeight)) && (this.scrollablePlotBox = C(this.plotBox), this.plotHeight += f, this.inverted ? (this.clipBox.width += f, this.plotBox.width += f) : (this.clipBox.height += f, this.plotBox.height += f), c = {
          2: {
            name: "bottom",
            value: f
          }
        });

        c && !d.skipAxes && this.axes.forEach(function (g) {
          c[g.side] ? g.getPlotLinePath = function () {
            var d = c[g.side].name,
                f = this[d];
            this[d] = f - c[g.side].value;
            var l = B.Axis.prototype.getPlotLinePath.apply(this, arguments);
            this[d] = f;
            return l;
          } : (g.setAxisSize(), g.setAxisTranslation());
        });
      }
    });
    H(k, "render", function () {
      this.scrollablePixelsX || this.scrollablePixelsY ? (this.setUpScrolling && this.setUpScrolling(), this.applyFixed()) : this.fixedDiv && this.applyFixed();
    });

    k.prototype.setUpScrolling = function () {
      var d = this,
          g = {
        WebkitOverflowScrolling: "touch",
        overflowX: "hidden",
        overflowY: "hidden"
      };
      this.scrollablePixelsX && (g.overflowX = "auto");
      this.scrollablePixelsY && (g.overflowY = "auto");
      this.scrollingParent = t("div", {
        className: "highcharts-scrolling-parent"
      }, {
        position: "relative"
      }, this.renderTo);
      this.scrollingContainer = t("div", {
        className: "highcharts-scrolling"
      }, g, this.scrollingParent);
      H(this.scrollingContainer, "scroll", function () {
        d.pointer && delete d.pointer.chartPosition;
      });
      this.innerContainer = t("div", {
        className: "highcharts-inner-container"
      }, null, this.scrollingContainer);
      this.innerContainer.appendChild(this.container);
      this.setUpScrolling = null;
    };

    k.prototype.moveFixedElements = function () {
      var d = this.container,
          g = this.fixedRenderer,
          f = ".highcharts-contextbutton .highcharts-credits .highcharts-legend .highcharts-legend-checkbox .highcharts-navigator-series .highcharts-navigator-xaxis .highcharts-navigator-yaxis .highcharts-navigator .highcharts-reset-zoom .highcharts-scrollbar .highcharts-subtitle .highcharts-title".split(" "),
          c;
      this.scrollablePixelsX && !this.inverted ? c = ".highcharts-yaxis" : this.scrollablePixelsX && this.inverted ? c = ".highcharts-xaxis" : this.scrollablePixelsY && !this.inverted ? c = ".highcharts-xaxis" : this.scrollablePixelsY && this.inverted && (c = ".highcharts-yaxis");
      c && f.push(c + ":not(.highcharts-radial-axis)", c + "-labels:not(.highcharts-radial-axis-labels)");
      f.forEach(function (c) {
        [].forEach.call(d.querySelectorAll(c), function (c) {
          (c.namespaceURI === g.SVG_NS ? g.box : g.box.parentNode).appendChild(c);
          c.style.pointerEvents = "auto";
        });
      });
    };

    k.prototype.applyFixed = function () {
      var f = this,
          g,
          k,
          c,
          q = !this.fixedDiv,
          n = this.options.chart,
          A = n.scrollablePlotArea;
      q ? (this.fixedDiv = t("div", {
        className: "highcharts-fixed"
      }, {
        position: "absolute",
        overflow: "hidden",
        pointerEvents: "none",
        zIndex: ((null === (g = n.style) || void 0 === g ? void 0 : g.zIndex) || 0) + 2,
        top: 0
      }, null, !0), null === (k = this.scrollingContainer) || void 0 === k ? void 0 : k.parentNode.insertBefore(this.fixedDiv, this.scrollingContainer), this.renderTo.style.overflow = "visible", this.fixedRenderer = g = new B.Renderer(this.fixedDiv, this.chartWidth, this.chartHeight, null === (c = this.options.chart) || void 0 === c ? void 0 : c.style), this.scrollableMask = g.path().attr({
        fill: this.options.chart.backgroundColor || "#fff",
        "fill-opacity": l(A.opacity, .85),
        zIndex: -1
      }).addClass("highcharts-scrollable-mask").add(), H(this, "afterShowResetZoom", this.moveFixedElements), H(this, "afterLayOutTitles", this.moveFixedElements), H(d, "afterInit", function () {
        f.scrollableDirty = !0;
      }), H(x, "show", function () {
        f.scrollableDirty = !0;
      })) : this.fixedRenderer.setSize(this.chartWidth, this.chartHeight);
      if (this.scrollableDirty || q) this.scrollableDirty = !1, this.moveFixedElements();
      c = this.chartWidth + (this.scrollablePixelsX || 0);
      g = this.chartHeight + (this.scrollablePixelsY || 0);
      D(this.container);
      this.container.style.width = c + "px";
      this.container.style.height = g + "px";
      this.renderer.boxWrapper.attr({
        width: c,
        height: g,
        viewBox: [0, 0, c, g].join(" ")
      });
      this.chartBackground.attr({
        width: c,
        height: g
      });
      this.scrollingContainer.style.height = this.chartHeight + "px";
      q && (A.scrollPositionX && (this.scrollingContainer.scrollLeft = this.scrollablePixelsX * A.scrollPositionX), A.scrollPositionY && (this.scrollingContainer.scrollTop = this.scrollablePixelsY * A.scrollPositionY));
      g = this.axisOffset;
      q = this.plotTop - g[0] - 1;
      A = this.plotLeft - g[3] - 1;
      c = this.plotTop + this.plotHeight + g[2] + 1;
      g = this.plotLeft + this.plotWidth + g[1] + 1;
      k = this.plotLeft + this.plotWidth - (this.scrollablePixelsX || 0);
      n = this.plotTop + this.plotHeight - (this.scrollablePixelsY || 0);
      q = this.scrollablePixelsX ? [["M", 0, q], ["L", this.plotLeft - 1, q], ["L", this.plotLeft - 1, c], ["L", 0, c], ["Z"], ["M", k, q], ["L", this.chartWidth, q], ["L", this.chartWidth, c], ["L", k, c], ["Z"]] : this.scrollablePixelsY ? [["M", A, 0], ["L", A, this.plotTop - 1], ["L", g, this.plotTop - 1], ["L", g, 0], ["Z"], ["M", A, n], ["L", A, this.chartHeight], ["L", g, this.chartHeight], ["L", g, n], ["Z"]] : [["M", 0, 0]];
      "adjustHeight" !== this.redrawTrigger && this.scrollableMask.attr({
        d: q
      });
    };
  });
  P(k, "Core/Axis/StackingAxis.js", [k["Core/Animation/AnimationUtilities.js"], k["Core/Utilities.js"]], function (f, d) {
    var k = f.getDeferredAnimation,
        x = d.addEvent,
        B = d.destroyObjectProperties,
        G = d.fireEvent,
        D = d.objectEach,
        H = d.pick,
        t = function () {
      function d(d) {
        this.oldStacks = {};
        this.stacks = {};
        this.stacksTouched = 0;
        this.axis = d;
      }

      d.prototype.buildStacks = function () {
        var d = this.axis,
            f = d.series,
            g = H(d.options.reversedStacks, !0),
            k = f.length,
            c;

        if (!d.isXAxis) {
          this.usePercentage = !1;

          for (c = k; c--;) {
            var q = f[g ? c : k - c - 1];
            q.setStackedPoints();
            q.setGroupedPoints();
          }

          for (c = 0; c < k; c++) {
            f[c].modifyStacks();
          }

          G(d, "afterBuildStacks");
        }
      };

      d.prototype.cleanStacks = function () {
        if (!this.axis.isXAxis) {
          if (this.oldStacks) var d = this.stacks = this.oldStacks;
          D(d, function (d) {
            D(d, function (g) {
              g.cumulative = g.total;
            });
          });
        }
      };

      d.prototype.resetStacks = function () {
        var d = this,
            f = d.stacks;
        d.axis.isXAxis || D(f, function (g) {
          D(g, function (f, c) {
            f.touched < d.stacksTouched ? (f.destroy(), delete g[c]) : (f.total = null, f.cumulative = null);
          });
        });
      };

      d.prototype.renderStackTotals = function () {
        var d = this.axis,
            f = d.chart,
            g = f.renderer,
            t = this.stacks;
        d = k(f, d.options.stackLabels.animation);
        var c = this.stackTotalGroup = this.stackTotalGroup || g.g("stack-labels").attr({
          visibility: "visible",
          zIndex: 6,
          opacity: 0
        }).add();
        c.translate(f.plotLeft, f.plotTop);
        D(t, function (g) {
          D(g, function (g) {
            g.render(c);
          });
        });
        c.animate({
          opacity: 1
        }, d);
      };

      return d;
    }();

    return function () {
      function d() {}

      d.compose = function (f) {
        x(f, "init", d.onInit);
        x(f, "destroy", d.onDestroy);
      };

      d.onDestroy = function () {
        var d = this.stacking;

        if (d) {
          var f = d.stacks;
          D(f, function (g, d) {
            B(g);
            f[d] = null;
          });
          d && d.stackTotalGroup && d.stackTotalGroup.destroy();
        }
      };

      d.onInit = function () {
        this.stacking || (this.stacking = new t(this));
      };

      return d;
    }();
  });
  P(k, "Extensions/Stacking.js", [k["Core/Axis/Axis.js"], k["Core/Chart/Chart.js"], k["Core/Globals.js"], k["Core/Series/Series.js"], k["Core/Axis/StackingAxis.js"], k["Core/Utilities.js"]], function (f, d, k, x, B, G) {
    var D = G.correctFloat,
        H = G.defined,
        t = G.destroyObjectProperties,
        C = G.format,
        l = G.isArray,
        E = G.isNumber,
        g = G.pick;
    "";

    var y = function () {
      function c(c, g, d, f, l) {
        var m = c.chart.inverted;
        this.axis = c;
        this.isNegative = d;
        this.options = g = g || {};
        this.x = f;
        this.total = null;
        this.points = {};
        this.hasValidPoints = !1;
        this.stack = l;
        this.rightCliff = this.leftCliff = 0;
        this.alignOptions = {
          align: g.align || (m ? d ? "left" : "right" : "center"),
          verticalAlign: g.verticalAlign || (m ? "middle" : d ? "bottom" : "top"),
          y: g.y,
          x: g.x
        };
        this.textAlign = g.textAlign || (m ? d ? "right" : "left" : "center");
      }

      c.prototype.destroy = function () {
        t(this, this.axis);
      };

      c.prototype.render = function (c) {
        var d = this.axis.chart,
            f = this.options,
            l = f.format;
        l = l ? C(l, this, d) : f.formatter.call(this);
        this.label ? this.label.attr({
          text: l,
          visibility: "hidden"
        }) : (this.label = d.renderer.label(l, null, null, f.shape, null, null, f.useHTML, !1, "stack-labels"), l = {
          r: f.borderRadius || 0,
          text: l,
          rotation: f.rotation,
          padding: g(f.padding, 5),
          visibility: "hidden"
        }, d.styledMode || (l.fill = f.backgroundColor, l.stroke = f.borderColor, l["stroke-width"] = f.borderWidth, this.label.css(f.style)), this.label.attr(l), this.label.added || this.label.add(c));
        this.label.labelrank = d.plotSizeY;
      };

      c.prototype.setOffset = function (c, d, f, l, k) {
        var m = this.axis,
            n = m.chart;
        l = m.translate(m.stacking.usePercentage ? 100 : l ? l : this.total, 0, 0, 0, 1);
        f = m.translate(f ? f : 0);
        f = H(l) && Math.abs(l - f);
        c = g(k, n.xAxis[0].translate(this.x)) + c;
        m = H(l) && this.getStackBox(n, this, c, l, d, f, m);
        d = this.label;
        f = this.isNegative;
        c = "justify" === g(this.options.overflow, "justify");
        var e = this.textAlign;
        d && m && (k = d.getBBox(), l = d.padding, e = "left" === e ? n.inverted ? -l : l : "right" === e ? k.width : n.inverted && "center" === e ? k.width / 2 : n.inverted ? f ? k.width + l : -l : k.width / 2, f = n.inverted ? k.height / 2 : f ? -l : k.height, this.alignOptions.x = g(this.options.x, 0), this.alignOptions.y = g(this.options.y, 0), m.x -= e, m.y -= f, d.align(this.alignOptions, null, m), n.isInsidePlot(d.alignAttr.x + e - this.alignOptions.x, d.alignAttr.y + f - this.alignOptions.y) ? d.show() : (d.alignAttr.y = -9999, c = !1), c && x.prototype.justifyDataLabel.call(this.axis, d, this.alignOptions, d.alignAttr, k, m), d.attr({
          x: d.alignAttr.x,
          y: d.alignAttr.y
        }), g(!c && this.options.crop, !0) && ((n = E(d.x) && E(d.y) && n.isInsidePlot(d.x - l + d.width, d.y) && n.isInsidePlot(d.x + l, d.y)) || d.hide()));
      };

      c.prototype.getStackBox = function (c, g, d, f, l, m, k) {
        var e = g.axis.reversed,
            h = c.inverted,
            a = k.height + k.pos - (h ? c.plotLeft : c.plotTop);
        g = g.isNegative && !e || !g.isNegative && e;
        return {
          x: h ? g ? f - k.right : f - m + k.pos - c.plotLeft : d + c.xAxis[0].transB - c.plotLeft,
          y: h ? k.height - d - l : g ? a - f - m : a - f,
          width: h ? m : l,
          height: h ? l : m
        };
      };

      return c;
    }();

    d.prototype.getStacks = function () {
      var c = this,
          d = c.inverted;
      c.yAxis.forEach(function (c) {
        c.stacking && c.stacking.stacks && c.hasVisibleSeries && (c.stacking.oldStacks = c.stacking.stacks);
      });
      c.series.forEach(function (f) {
        var l = f.xAxis && f.xAxis.options || {};
        !f.options.stacking || !0 !== f.visible && !1 !== c.options.chart.ignoreHiddenSeries || (f.stackKey = [f.type, g(f.options.stack, ""), d ? l.top : l.left, d ? l.height : l.width].join());
      });
    };

    B.compose(f);

    x.prototype.setGroupedPoints = function () {
      this.options.centerInCategory && (this.is("column") || this.is("columnrange")) && !this.options.stacking && 1 < this.chart.series.length && x.prototype.setStackedPoints.call(this, "group");
    };

    x.prototype.setStackedPoints = function (c) {
      var d = c || this.options.stacking;

      if (d && (!0 === this.visible || !1 === this.chart.options.chart.ignoreHiddenSeries)) {
        var f = this.processedXData,
            k = this.processedYData,
            t = [],
            z = k.length,
            m = this.options,
            r = m.threshold,
            e = g(m.startFromThreshold && r, 0);
        m = m.stack;
        c = c ? this.type + "," + d : this.stackKey;
        var h = "-" + c,
            a = this.negStacks,
            b = this.yAxis,
            w = b.stacking.stacks,
            C = b.stacking.oldStacks,
            E,
            F;
        b.stacking.stacksTouched += 1;

        for (F = 0; F < z; F++) {
          var x = f[F];
          var R = k[F];
          var Q = this.getStackIndicator(Q, x, this.index);
          var B = Q.key;
          var v = (E = a && R < (e ? 0 : r)) ? h : c;
          w[v] || (w[v] = {});
          w[v][x] || (C[v] && C[v][x] ? (w[v][x] = C[v][x], w[v][x].total = null) : w[v][x] = new y(b, b.options.stackLabels, E, x, m));
          v = w[v][x];
          null !== R ? (v.points[B] = v.points[this.index] = [g(v.cumulative, e)], H(v.cumulative) || (v.base = B), v.touched = b.stacking.stacksTouched, 0 < Q.index && !1 === this.singleStacks && (v.points[B][0] = v.points[this.index + "," + x + ",0"][0])) : v.points[B] = v.points[this.index] = null;
          "percent" === d ? (E = E ? c : h, a && w[E] && w[E][x] ? (E = w[E][x], v.total = E.total = Math.max(E.total, v.total) + Math.abs(R) || 0) : v.total = D(v.total + (Math.abs(R) || 0))) : "group" === d ? (l(R) && (R = R[0]), null !== R && (v.total = (v.total || 0) + 1)) : v.total = D(v.total + (R || 0));
          v.cumulative = "group" === d ? (v.total || 1) - 1 : g(v.cumulative, e) + (R || 0);
          null !== R && (v.points[B].push(v.cumulative), t[F] = v.cumulative, v.hasValidPoints = !0);
        }

        "percent" === d && (b.stacking.usePercentage = !0);
        "group" !== d && (this.stackedYData = t);
        b.stacking.oldStacks = {};
      }
    };

    x.prototype.modifyStacks = function () {
      var c = this,
          g = c.stackKey,
          d = c.yAxis.stacking.stacks,
          f = c.processedXData,
          l,
          k = c.options.stacking;
      c[k + "Stacker"] && [g, "-" + g].forEach(function (g) {
        for (var m = f.length, e, h; m--;) {
          if (e = f[m], l = c.getStackIndicator(l, e, c.index, g), h = (e = d[g] && d[g][e]) && e.points[l.key]) c[k + "Stacker"](h, e, m);
        }
      });
    };

    x.prototype.percentStacker = function (c, g, d) {
      g = g.total ? 100 / g.total : 0;
      c[0] = D(c[0] * g);
      c[1] = D(c[1] * g);
      this.stackedYData[d] = c[1];
    };

    x.prototype.getStackIndicator = function (c, g, d, f) {
      !H(c) || c.x !== g || f && c.key !== f ? c = {
        x: g,
        index: 0,
        key: f
      } : c.index++;
      c.key = [d, g, c.index].join();
      return c;
    };

    k.StackItem = y;
    return k.StackItem;
  });
  P(k, "Series/Line/LineSeries.js", [k["Core/Color/Palette.js"], k["Core/Series/Series.js"], k["Core/Series/SeriesRegistry.js"], k["Core/Utilities.js"]], function (f, d, k, x) {
    var B = this && this.__extends || function () {
      var _d = function d(f, k) {
        _d = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (d, f) {
          d.__proto__ = f;
        } || function (d, f) {
          for (var g in f) {
            f.hasOwnProperty(g) && (d[g] = f[g]);
          }
        };

        return _d(f, k);
      };

      return function (f, k) {
        function l() {
          this.constructor = f;
        }

        _d(f, k);

        f.prototype = null === k ? Object.create(k) : (l.prototype = k.prototype, new l());
      };
    }(),
        G = x.defined,
        D = x.merge;

    x = function (k) {
      function t() {
        var d = null !== k && k.apply(this, arguments) || this;
        d.data = void 0;
        d.options = void 0;
        d.points = void 0;
        return d;
      }

      B(t, k);

      t.prototype.drawGraph = function () {
        var d = this,
            l = this.options,
            k = (this.gappedPath || this.getGraphPath).call(this),
            g = this.chart.styledMode,
            t = [["graph", "highcharts-graph"]];
        g || t[0].push(l.lineColor || this.color || f.neutralColor20, l.dashStyle);
        t = d.getZonesGraphs(t);
        t.forEach(function (c, f) {
          var n = c[0],
              q = d[n],
              t = q ? "animate" : "attr";
          q ? (q.endX = d.preventGraphAnimation ? null : k.xMap, q.animate({
            d: k
          })) : k.length && (d[n] = q = d.chart.renderer.path(k).addClass(c[1]).attr({
            zIndex: 1
          }).add(d.group));
          q && !g && (n = {
            stroke: c[2],
            "stroke-width": l.lineWidth,
            fill: d.fillGraph && d.color || "none"
          }, c[3] ? n.dashstyle = c[3] : "square" !== l.linecap && (n["stroke-linecap"] = n["stroke-linejoin"] = "round"), q[t](n).shadow(2 > f && l.shadow));
          q && (q.startX = k.xMap, q.isArea = k.isArea);
        });
      };

      t.prototype.getGraphPath = function (d, f, k) {
        var g = this,
            l = g.options,
            c = l.step,
            q,
            n = [],
            t = [],
            E;
        d = d || g.points;
        (q = d.reversed) && d.reverse();
        (c = {
          right: 1,
          center: 2
        }[c] || c && 3) && q && (c = 4 - c);
        d = this.getValidPoints(d, !1, !(l.connectNulls && !f && !k));
        d.forEach(function (q, m) {
          var r = q.plotX,
              e = q.plotY,
              h = d[m - 1];
          (q.leftCliff || h && h.rightCliff) && !k && (E = !0);
          q.isNull && !G(f) && 0 < m ? E = !l.connectNulls : q.isNull && !f ? E = !0 : (0 === m || E ? m = [["M", q.plotX, q.plotY]] : g.getPointSpline ? m = [g.getPointSpline(d, q, m)] : c ? (m = 1 === c ? [["L", h.plotX, e]] : 2 === c ? [["L", (h.plotX + r) / 2, h.plotY], ["L", (h.plotX + r) / 2, e]] : [["L", r, h.plotY]], m.push(["L", r, e])) : m = [["L", r, e]], t.push(q.x), c && (t.push(q.x), 2 === c && t.push(q.x)), n.push.apply(n, m), E = !1);
        });
        n.xMap = t;
        return g.graphPath = n;
      };

      t.prototype.getZonesGraphs = function (d) {
        this.zones.forEach(function (f, k) {
          k = ["zone-graph-" + k, "highcharts-graph highcharts-zone-graph-" + k + " " + (f.className || "")];
          this.chart.styledMode || k.push(f.color || this.color, f.dashStyle || this.options.dashStyle);
          d.push(k);
        }, this);
        return d;
      };

      t.defaultOptions = D(d.defaultOptions, {});
      return t;
    }(d);

    k.registerSeriesType("line", x);
    "";
    return x;
  });
  P(k, "Series/Area/AreaSeries.js", [k["Core/Color/Color.js"], k["Mixins/LegendSymbol.js"], k["Core/Series/SeriesRegistry.js"], k["Core/Utilities.js"]], function (f, d, k, x) {
    var B = this && this.__extends || function () {
      var _d2 = function d(f, g) {
        _d2 = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (g, c) {
          g.__proto__ = c;
        } || function (g, c) {
          for (var d in c) {
            c.hasOwnProperty(d) && (g[d] = c[d]);
          }
        };

        return _d2(f, g);
      };

      return function (f, g) {
        function l() {
          this.constructor = f;
        }

        _d2(f, g);

        f.prototype = null === g ? Object.create(g) : (l.prototype = g.prototype, new l());
      };
    }(),
        G = f.parse,
        D = k.seriesTypes.line;

    f = x.extend;
    var H = x.merge,
        t = x.objectEach,
        C = x.pick;

    x = function (d) {
      function f() {
        var g = null !== d && d.apply(this, arguments) || this;
        g.data = void 0;
        g.options = void 0;
        g.points = void 0;
        return g;
      }

      B(f, d);

      f.prototype.drawGraph = function () {
        this.areaPath = [];
        d.prototype.drawGraph.apply(this);
        var g = this,
            f = this.areaPath,
            c = this.options,
            l = [["area", "highcharts-area", this.color, c.fillColor]];
        this.zones.forEach(function (d, f) {
          l.push(["zone-area-" + f, "highcharts-area highcharts-zone-area-" + f + " " + d.className, d.color || g.color, d.fillColor || c.fillColor]);
        });
        l.forEach(function (d) {
          var l = d[0],
              n = g[l],
              k = n ? "animate" : "attr",
              m = {};
          n ? (n.endX = g.preventGraphAnimation ? null : f.xMap, n.animate({
            d: f
          })) : (m.zIndex = 0, n = g[l] = g.chart.renderer.path(f).addClass(d[1]).add(g.group), n.isArea = !0);
          g.chart.styledMode || (m.fill = C(d[3], G(d[2]).setOpacity(C(c.fillOpacity, .75)).get()));
          n[k](m);
          n.startX = f.xMap;
          n.shiftUnit = c.step ? 2 : 1;
        });
      };

      f.prototype.getGraphPath = function (g) {
        var d = D.prototype.getGraphPath,
            c = this.options,
            f = c.stacking,
            l = this.yAxis,
            k,
            t = [],
            z = [],
            m = this.index,
            r = l.stacking.stacks[this.stackKey],
            e = c.threshold,
            h = Math.round(l.getThreshold(c.threshold));
        c = C(c.connectNulls, "percent" === f);

        var a = function a(_a2, b, c) {
          var d = g[_a2];
          _a2 = f && r[d.x].points[m];
          var k = d[c + "Null"] || 0;
          c = d[c + "Cliff"] || 0;
          d = !0;

          if (c || k) {
            var n = (k ? _a2[0] : _a2[1]) + c;
            var q = _a2[0] + c;
            d = !!k;
          } else !f && g[b] && g[b].isNull && (n = q = e);

          "undefined" !== typeof n && (z.push({
            plotX: w,
            plotY: null === n ? h : l.getThreshold(n),
            isNull: d,
            isCliff: !0
          }), t.push({
            plotX: w,
            plotY: null === q ? h : l.getThreshold(q),
            doCurve: !1
          }));
        };

        g = g || this.points;
        f && (g = this.getStackPoints(g));

        for (k = 0; k < g.length; k++) {
          f || (g[k].leftCliff = g[k].rightCliff = g[k].leftNull = g[k].rightNull = void 0);
          var b = g[k].isNull;
          var w = C(g[k].rectPlotX, g[k].plotX);
          var E = f ? C(g[k].yBottom, h) : h;
          if (!b || c) c || a(k, k - 1, "left"), b && !f && c || (z.push(g[k]), t.push({
            x: k,
            plotX: w,
            plotY: E
          })), c || a(k, k + 1, "right");
        }

        k = d.call(this, z, !0, !0);
        t.reversed = !0;
        b = d.call(this, t, !0, !0);
        (E = b[0]) && "M" === E[0] && (b[0] = ["L", E[1], E[2]]);
        b = k.concat(b);
        d = d.call(this, z, !1, c);
        b.xMap = k.xMap;
        this.areaPath = b;
        return d;
      };

      f.prototype.getStackPoints = function (d) {
        var g = [],
            c = [],
            f = this.xAxis,
            l = this.yAxis,
            k = l.stacking.stacks[this.stackKey],
            E = {},
            z = this.index,
            m = l.series,
            r = m.length,
            e = C(l.options.reversedStacks, !0) ? 1 : -1,
            h;
        d = d || this.points;

        if (this.options.stacking) {
          for (h = 0; h < d.length; h++) {
            d[h].leftNull = d[h].rightNull = void 0, E[d[h].x] = d[h];
          }

          t(k, function (a, e) {
            null !== a.total && c.push(e);
          });
          c.sort(function (a, c) {
            return a - c;
          });
          var a = m.map(function (a) {
            return a.visible;
          });
          c.forEach(function (b, d) {
            var m = 0,
                n,
                q;
            if (E[b] && !E[b].isNull) g.push(E[b]), [-1, 1].forEach(function (g) {
              var f = 1 === g ? "rightNull" : "leftNull",
                  m = 0,
                  l = k[c[d + g]];
              if (l) for (h = z; 0 <= h && h < r;) {
                n = l.points[h], n || (h === z ? E[b][f] = !0 : a[h] && (q = k[b].points[h]) && (m -= q[1] - q[0])), h += e;
              }
              E[b][1 === g ? "rightCliff" : "leftCliff"] = m;
            });else {
              for (h = z; 0 <= h && h < r;) {
                if (n = k[b].points[h]) {
                  m = n[1];
                  break;
                }

                h += e;
              }

              m = l.translate(m, 0, 1, 0, 1);
              g.push({
                isNull: !0,
                plotX: f.translate(b, 0, 0, 0, 1),
                x: b,
                plotY: m,
                yBottom: m
              });
            }
          });
        }

        return g;
      };

      f.defaultOptions = H(D.defaultOptions, {
        threshold: 0
      });
      return f;
    }(D);

    f(x.prototype, {
      singleStacks: !1,
      drawLegendSymbol: d.drawRectangle
    });
    k.registerSeriesType("area", x);
    "";
    return x;
  });
  P(k, "Series/Spline/SplineSeries.js", [k["Core/Series/SeriesRegistry.js"], k["Core/Utilities.js"]], function (f, d) {
    var k = this && this.__extends || function () {
      var _d3 = function d(f, k) {
        _d3 = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (d, f) {
          d.__proto__ = f;
        } || function (d, f) {
          for (var l in f) {
            f.hasOwnProperty(l) && (d[l] = f[l]);
          }
        };

        return _d3(f, k);
      };

      return function (f, k) {
        function t() {
          this.constructor = f;
        }

        _d3(f, k);

        f.prototype = null === k ? Object.create(k) : (t.prototype = k.prototype, new t());
      };
    }(),
        x = f.seriesTypes.line,
        B = d.merge,
        G = d.pick;

    d = function (d) {
      function f() {
        var f = null !== d && d.apply(this, arguments) || this;
        f.data = void 0;
        f.options = void 0;
        f.points = void 0;
        return f;
      }

      k(f, d);

      f.prototype.getPointSpline = function (d, f, l) {
        var k = f.plotX || 0,
            g = f.plotY || 0,
            t = d[l - 1];
        l = d[l + 1];

        if (t && !t.isNull && !1 !== t.doCurve && !f.isCliff && l && !l.isNull && !1 !== l.doCurve && !f.isCliff) {
          d = t.plotY || 0;
          var c = l.plotX || 0;
          l = l.plotY || 0;
          var q = 0;
          var n = (1.5 * k + (t.plotX || 0)) / 2.5;
          var x = (1.5 * g + d) / 2.5;
          c = (1.5 * k + c) / 2.5;
          var C = (1.5 * g + l) / 2.5;
          c !== n && (q = (C - x) * (c - k) / (c - n) + g - C);
          x += q;
          C += q;
          x > d && x > g ? (x = Math.max(d, g), C = 2 * g - x) : x < d && x < g && (x = Math.min(d, g), C = 2 * g - x);
          C > l && C > g ? (C = Math.max(l, g), x = 2 * g - C) : C < l && C < g && (C = Math.min(l, g), x = 2 * g - C);
          f.rightContX = c;
          f.rightContY = C;
        }

        f = ["C", G(t.rightContX, t.plotX, 0), G(t.rightContY, t.plotY, 0), G(n, k, 0), G(x, g, 0), k, g];
        t.rightContX = t.rightContY = void 0;
        return f;
      };

      f.defaultOptions = B(x.defaultOptions);
      return f;
    }(x);

    f.registerSeriesType("spline", d);
    "";
    return d;
  });
  P(k, "Series/AreaSpline/AreaSplineSeries.js", [k["Series/Area/AreaSeries.js"], k["Series/Spline/SplineSeries.js"], k["Mixins/LegendSymbol.js"], k["Core/Series/SeriesRegistry.js"], k["Core/Utilities.js"]], function (f, d, k, x, B) {
    var G = this && this.__extends || function () {
      var _d4 = function d(f, k) {
        _d4 = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (d, f) {
          d.__proto__ = f;
        } || function (d, f) {
          for (var c in f) {
            f.hasOwnProperty(c) && (d[c] = f[c]);
          }
        };

        return _d4(f, k);
      };

      return function (f, k) {
        function g() {
          this.constructor = f;
        }

        _d4(f, k);

        f.prototype = null === k ? Object.create(k) : (g.prototype = k.prototype, new g());
      };
    }(),
        D = f.prototype,
        H = B.extend,
        t = B.merge;

    B = function (k) {
      function l() {
        var d = null !== k && k.apply(this, arguments) || this;
        d.data = void 0;
        d.points = void 0;
        d.options = void 0;
        return d;
      }

      G(l, k);
      l.defaultOptions = t(d.defaultOptions, f.defaultOptions);
      return l;
    }(d);

    H(B.prototype, {
      getGraphPath: D.getGraphPath,
      getStackPoints: D.getStackPoints,
      drawGraph: D.drawGraph,
      drawLegendSymbol: k.drawRectangle
    });
    x.registerSeriesType("areaspline", B);
    "";
    return B;
  });
  P(k, "Series/Column/ColumnSeries.js", [k["Core/Animation/AnimationUtilities.js"], k["Core/Color/Color.js"], k["Core/Globals.js"], k["Mixins/LegendSymbol.js"], k["Core/Color/Palette.js"], k["Core/Series/Series.js"], k["Core/Series/SeriesRegistry.js"], k["Core/Utilities.js"]], function (f, d, k, x, B, G, D, H) {
    var t = this && this.__extends || function () {
      var _c3 = function c(e, a) {
        _c3 = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (a, c) {
          a.__proto__ = c;
        } || function (a, c) {
          for (var b in c) {
            c.hasOwnProperty(b) && (a[b] = c[b]);
          }
        };

        return _c3(e, a);
      };

      return function (e, a) {
        function b() {
          this.constructor = e;
        }

        _c3(e, a);

        e.prototype = null === a ? Object.create(a) : (b.prototype = a.prototype, new b());
      };
    }(),
        C = f.animObject,
        l = d.parse,
        E = k.hasTouch;

    f = k.noop;
    var g = H.clamp,
        y = H.css,
        c = H.defined,
        q = H.extend,
        n = H.fireEvent,
        A = H.isArray,
        M = H.isNumber,
        z = H.merge,
        m = H.pick,
        r = H.objectEach;

    H = function (e) {
      function d() {
        var a = null !== e && e.apply(this, arguments) || this;
        a.borderWidth = void 0;
        a.data = void 0;
        a.group = void 0;
        a.options = void 0;
        a.points = void 0;
        return a;
      }

      t(d, e);

      d.prototype.animate = function (a) {
        var b = this,
            c = this.yAxis,
            e = b.options,
            d = this.chart.inverted,
            f = {},
            h = d ? "translateX" : "translateY";
        if (a) f.scaleY = .001, a = g(c.toPixels(e.threshold), c.pos, c.pos + c.len), d ? f.translateX = a - c.len : f.translateY = a, b.clipBox && b.setClip(), b.group.attr(f);else {
          var m = b.group.attr(h);
          b.group.animate({
            scaleY: 1
          }, q(C(b.options.animation), {
            step: function step(a, e) {
              b.group && (f[h] = m + e.pos * (c.pos - m), b.group.attr(f));
            }
          }));
        }
      };

      d.prototype.init = function (a, b) {
        e.prototype.init.apply(this, arguments);
        var c = this;
        a = c.chart;
        a.hasRendered && a.series.forEach(function (a) {
          a.type === c.type && (a.isDirty = !0);
        });
      };

      d.prototype.getColumnMetrics = function () {
        var a = this,
            b = a.options,
            c = a.xAxis,
            e = a.yAxis,
            d = c.options.reversedStacks;
        d = c.reversed && !d || !c.reversed && d;
        var g,
            f = {},
            h = 0;
        !1 === b.grouping ? h = 1 : a.chart.series.forEach(function (b) {
          var c = b.yAxis,
              d = b.options;

          if (b.type === a.type && (b.visible || !a.chart.options.chart.ignoreHiddenSeries) && e.len === c.len && e.pos === c.pos) {
            if (d.stacking && "group" !== d.stacking) {
              g = b.stackKey;
              "undefined" === typeof f[g] && (f[g] = h++);
              var m = f[g];
            } else !1 !== d.grouping && (m = h++);

            b.columnIndex = m;
          }
        });
        var l = Math.min(Math.abs(c.transA) * (c.ordinal && c.ordinal.slope || b.pointRange || c.closestPointRange || c.tickInterval || 1), c.len),
            k = l * b.groupPadding,
            n = (l - 2 * k) / (h || 1);
        b = Math.min(b.maxPointWidth || c.len, m(b.pointWidth, n * (1 - 2 * b.pointPadding)));
        a.columnMetrics = {
          width: b,
          offset: (n - b) / 2 + (k + ((a.columnIndex || 0) + (d ? 1 : 0)) * n - l / 2) * (d ? -1 : 1),
          paddedWidth: n,
          columnCount: h
        };
        return a.columnMetrics;
      };

      d.prototype.crispCol = function (a, b, c, e) {
        var d = this.chart,
            g = this.borderWidth,
            f = -(g % 2 ? .5 : 0);
        g = g % 2 ? .5 : 1;
        d.inverted && d.renderer.isVML && (g += 1);
        this.options.crisp && (c = Math.round(a + c) + f, a = Math.round(a) + f, c -= a);
        e = Math.round(b + e) + g;
        f = .5 >= Math.abs(b) && .5 < e;
        b = Math.round(b) + g;
        e -= b;
        f && e && (--b, e += 1);
        return {
          x: a,
          y: b,
          width: c,
          height: e
        };
      };

      d.prototype.adjustForMissingColumns = function (a, b, c, e) {
        var d = this,
            g = this.options.stacking;

        if (!c.isNull && 1 < e.columnCount) {
          var f = 0,
              h = 0;
          r(this.yAxis.stacking && this.yAxis.stacking.stacks, function (a) {
            if ("number" === typeof c.x && (a = a[c.x.toString()])) {
              var b = a.points[d.index],
                  e = a.total;
              g ? (b && (f = h), a.hasValidPoints && h++) : A(b) && (f = b[1], h = e || 0);
            }
          });
          a = (c.plotX || 0) + ((h - 1) * e.paddedWidth + b) / 2 - b - f * e.paddedWidth;
        }

        return a;
      };

      d.prototype.translate = function () {
        var a = this,
            b = a.chart,
            e = a.options,
            d = a.dense = 2 > a.closestPointRange * a.xAxis.transA;
        d = a.borderWidth = m(e.borderWidth, d ? 0 : 1);
        var f = a.xAxis,
            h = a.yAxis,
            l = e.threshold,
            k = a.translatedThreshold = h.getThreshold(l),
            n = m(e.minPointLength, 5),
            q = a.getColumnMetrics(),
            r = q.width,
            t = a.barW = Math.max(r, 1 + 2 * d),
            p = a.pointXOffset = q.offset,
            y = a.dataMin,
            z = a.dataMax;
        b.inverted && (k -= .5);
        e.pointPadding && (t = Math.ceil(t));
        G.prototype.translate.apply(a);
        a.points.forEach(function (d) {
          var w = m(d.yBottom, k),
              v = 999 + Math.abs(w),
              F = r,
              x = d.plotX || 0;
          v = g(d.plotY, -v, h.len + v);
          var E = x + p,
              C = t,
              A = Math.min(v, w),
              B = Math.max(v, w) - A;

          if (n && Math.abs(B) < n) {
            B = n;
            var H = !h.reversed && !d.negative || h.reversed && d.negative;
            M(l) && M(z) && d.y === l && z <= l && (h.min || 0) < l && (y !== z || (h.max || 0) <= l) && (H = !H);
            A = Math.abs(A - k) > n ? w - n : k - (H ? n : 0);
          }

          c(d.options.pointWidth) && (F = C = Math.ceil(d.options.pointWidth), E -= Math.round((F - r) / 2));
          e.centerInCategory && (E = a.adjustForMissingColumns(E, F, d, q));
          d.barX = E;
          d.pointWidth = F;
          d.tooltipPos = b.inverted ? [g(h.len + h.pos - b.plotLeft - v, h.pos - b.plotLeft, h.len + h.pos - b.plotLeft), f.len + f.pos - b.plotTop - (x || 0) - p - C / 2, B] : [f.left - b.plotLeft + E + C / 2, g(v + h.pos - b.plotTop, h.pos - b.plotTop, h.len + h.pos - b.plotTop), B];
          d.shapeType = a.pointClass.prototype.shapeType || "rect";
          d.shapeArgs = a.crispCol.apply(a, d.isNull ? [E, k, C, 0] : [E, A, C, B]);
        });
      };

      d.prototype.drawGraph = function () {
        this.group[this.dense ? "addClass" : "removeClass"]("highcharts-dense-data");
      };

      d.prototype.pointAttribs = function (a, b) {
        var c = this.options,
            e = this.pointAttrToOptions || {};
        var d = e.stroke || "borderColor";
        var g = e["stroke-width"] || "borderWidth",
            f = a && a.color || this.color,
            h = a && a[d] || c[d] || this.color || f,
            k = a && a[g] || c[g] || this[g] || 0;
        e = a && a.options.dashStyle || c.dashStyle;
        var n = m(a && a.opacity, c.opacity, 1);

        if (a && this.zones.length) {
          var q = a.getZone();
          f = a.options.color || q && (q.color || a.nonZonedColor) || this.color;
          q && (h = q.borderColor || h, e = q.dashStyle || e, k = q.borderWidth || k);
        }

        b && a && (a = z(c.states[b], a.options.states && a.options.states[b] || {}), b = a.brightness, f = a.color || "undefined" !== typeof b && l(f).brighten(a.brightness).get() || f, h = a[d] || h, k = a[g] || k, e = a.dashStyle || e, n = m(a.opacity, n));
        d = {
          fill: f,
          stroke: h,
          "stroke-width": k,
          opacity: n
        };
        e && (d.dashstyle = e);
        return d;
      };

      d.prototype.drawPoints = function () {
        var a = this,
            b = this.chart,
            c = a.options,
            e = b.renderer,
            d = c.animationLimit || 250,
            g;
        a.points.forEach(function (f) {
          var h = f.graphic,
              m = !!h,
              l = h && b.pointCount < d ? "animate" : "attr";

          if (M(f.plotY) && null !== f.y) {
            g = f.shapeArgs;
            h && f.hasNewShapeType() && (h = h.destroy());
            a.enabledDataSorting && (f.startXPos = a.xAxis.reversed ? -(g ? g.width : 0) : a.xAxis.width);
            h || (f.graphic = h = e[f.shapeType](g).add(f.group || a.group)) && a.enabledDataSorting && b.hasRendered && b.pointCount < d && (h.attr({
              x: f.startXPos
            }), m = !0, l = "animate");
            if (h && m) h[l](z(g));
            if (c.borderRadius) h[l]({
              r: c.borderRadius
            });
            b.styledMode || h[l](a.pointAttribs(f, f.selected && "select")).shadow(!1 !== f.allowShadow && c.shadow, null, c.stacking && !c.borderRadius);
            h && (h.addClass(f.getClassName(), !0), h.attr({
              visibility: f.visible ? "inherit" : "hidden"
            }));
          } else h && (f.graphic = h.destroy());
        });
      };

      d.prototype.drawTracker = function () {
        var a = this,
            b = a.chart,
            c = b.pointer,
            e = function e(a) {
          var b = c.getPointFromEvent(a);
          "undefined" !== typeof b && (c.isDirectTouch = !0, b.onMouseOver(a));
        },
            d;

        a.points.forEach(function (a) {
          d = A(a.dataLabels) ? a.dataLabels : a.dataLabel ? [a.dataLabel] : [];
          a.graphic && (a.graphic.element.point = a);
          d.forEach(function (b) {
            b.div ? b.div.point = a : b.element.point = a;
          });
        });
        a._hasTracking || (a.trackerGroups.forEach(function (d) {
          if (a[d]) {
            a[d].addClass("highcharts-tracker").on("mouseover", e).on("mouseout", function (a) {
              c.onTrackerMouseOut(a);
            });
            if (E) a[d].on("touchstart", e);
            !b.styledMode && a.options.cursor && a[d].css(y).css({
              cursor: a.options.cursor
            });
          }
        }), a._hasTracking = !0);
        n(this, "afterDrawTracker");
      };

      d.prototype.remove = function () {
        var a = this,
            b = a.chart;
        b.hasRendered && b.series.forEach(function (b) {
          b.type === a.type && (b.isDirty = !0);
        });
        G.prototype.remove.apply(a, arguments);
      };

      d.defaultOptions = z(G.defaultOptions, {
        borderRadius: 0,
        centerInCategory: !1,
        groupPadding: .2,
        marker: null,
        pointPadding: .1,
        minPointLength: 0,
        cropThreshold: 50,
        pointRange: null,
        states: {
          hover: {
            halo: !1,
            brightness: .1
          },
          select: {
            color: B.neutralColor20,
            borderColor: B.neutralColor100
          }
        },
        dataLabels: {
          align: void 0,
          verticalAlign: void 0,
          y: void 0
        },
        startFromThreshold: !0,
        stickyTracking: !1,
        tooltip: {
          distance: 6
        },
        threshold: 0,
        borderColor: B.backgroundColor
      });
      return d;
    }(G);

    q(H.prototype, {
      cropShoulder: 0,
      directTouch: !0,
      drawLegendSymbol: x.drawRectangle,
      getSymbol: f,
      negStacks: !0,
      trackerGroups: ["group", "dataLabelsGroup"]
    });
    D.registerSeriesType("column", H);
    "";
    "";
    return H;
  });
  P(k, "Series/Bar/BarSeries.js", [k["Series/Column/ColumnSeries.js"], k["Core/Series/SeriesRegistry.js"], k["Core/Utilities.js"]], function (f, d, k) {
    var x = this && this.__extends || function () {
      var _d5 = function d(f, k) {
        _d5 = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (d, f) {
          d.__proto__ = f;
        } || function (d, f) {
          for (var l in f) {
            f.hasOwnProperty(l) && (d[l] = f[l]);
          }
        };

        return _d5(f, k);
      };

      return function (f, k) {
        function t() {
          this.constructor = f;
        }

        _d5(f, k);

        f.prototype = null === k ? Object.create(k) : (t.prototype = k.prototype, new t());
      };
    }(),
        B = k.extend,
        G = k.merge;

    k = function (d) {
      function k() {
        var f = null !== d && d.apply(this, arguments) || this;
        f.data = void 0;
        f.options = void 0;
        f.points = void 0;
        return f;
      }

      x(k, d);
      k.defaultOptions = G(f.defaultOptions, {});
      return k;
    }(f);

    B(k.prototype, {
      inverted: !0
    });
    d.registerSeriesType("bar", k);
    "";
    return k;
  });
  P(k, "Series/Scatter/ScatterSeries.js", [k["Series/Column/ColumnSeries.js"], k["Series/Line/LineSeries.js"], k["Core/Series/SeriesRegistry.js"], k["Core/Utilities.js"]], function (f, d, k, x) {
    var B = this && this.__extends || function () {
      var _d6 = function d(f, l) {
        _d6 = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (d, g) {
          d.__proto__ = g;
        } || function (d, g) {
          for (var f in g) {
            g.hasOwnProperty(f) && (d[f] = g[f]);
          }
        };

        return _d6(f, l);
      };

      return function (f, l) {
        function k() {
          this.constructor = f;
        }

        _d6(f, l);

        f.prototype = null === l ? Object.create(l) : (k.prototype = l.prototype, new k());
      };
    }(),
        G = x.addEvent,
        D = x.extend,
        H = x.merge;

    x = function (f) {
      function k() {
        var d = null !== f && f.apply(this, arguments) || this;
        d.data = void 0;
        d.options = void 0;
        d.points = void 0;
        return d;
      }

      B(k, f);

      k.prototype.applyJitter = function () {
        var d = this,
            f = this.options.jitter,
            g = this.points.length;
        f && this.points.forEach(function (l, c) {
          ["x", "y"].forEach(function (k, n) {
            var q = "plot" + k.toUpperCase();

            if (f[k] && !l.isNull) {
              var t = d[k + "Axis"];
              var z = f[k] * t.transA;

              if (t && !t.isLog) {
                var m = Math.max(0, l[q] - z);
                t = Math.min(t.len, l[q] + z);
                n = 1E4 * Math.sin(c + n * g);
                l[q] = m + (t - m) * (n - Math.floor(n));
                "x" === k && (l.clientX = l.plotX);
              }
            }
          });
        });
      };

      k.prototype.drawGraph = function () {
        (this.options.lineWidth || 0 === this.options.lineWidth && this.graph && this.graph.strokeWidth()) && f.prototype.drawGraph.call(this);
      };

      k.defaultOptions = H(d.defaultOptions, {
        lineWidth: 0,
        findNearestPointBy: "xy",
        jitter: {
          x: 0,
          y: 0
        },
        marker: {
          enabled: !0
        },
        tooltip: {
          headerFormat: "<span style=\"color:{point.color}\">\u25CF</span> <span style=\"font-size: 10px\"> {series.name}</span><br/>",
          pointFormat: "x: <b>{point.x}</b><br/>y: <b>{point.y}</b><br/>"
        }
      });
      return k;
    }(d);

    D(x.prototype, {
      drawTracker: f.prototype.drawTracker,
      sorted: !1,
      requireSorting: !1,
      noSharedTooltip: !0,
      trackerGroups: ["group", "markerGroup", "dataLabelsGroup"],
      takeOrdinalPosition: !1
    });
    G(x, "afterTranslate", function () {
      this.applyJitter();
    });
    k.registerSeriesType("scatter", x);
    "";
    return x;
  });
  P(k, "Mixins/CenteredSeries.js", [k["Core/Globals.js"], k["Core/Series/Series.js"], k["Core/Utilities.js"]], function (f, d, k) {
    var x = k.isNumber,
        B = k.pick,
        G = k.relativeLength,
        D = f.deg2rad;
    return f.CenteredSeriesMixin = {
      getCenter: function getCenter() {
        var f = this.options,
            k = this.chart,
            x = 2 * (f.slicedOffset || 0),
            l = k.plotWidth - 2 * x,
            E = k.plotHeight - 2 * x,
            g = f.center,
            y = Math.min(l, E),
            c = f.size,
            q = f.innerSize || 0;
        "string" === typeof c && (c = parseFloat(c));
        "string" === typeof q && (q = parseFloat(q));
        f = [B(g[0], "50%"), B(g[1], "50%"), B(c && 0 > c ? void 0 : f.size, "100%"), B(q && 0 > q ? void 0 : f.innerSize || 0, "0%")];
        !k.angular || this instanceof d || (f[3] = 0);

        for (g = 0; 4 > g; ++g) {
          c = f[g], k = 2 > g || 2 === g && /%$/.test(c), f[g] = G(c, [l, E, y, f[2]][g]) + (k ? x : 0);
        }

        f[3] > f[2] && (f[3] = f[2]);
        return f;
      },
      getStartAndEndRadians: function getStartAndEndRadians(d, f) {
        d = x(d) ? d : 0;
        f = x(f) && f > d && 360 > f - d ? f : d + 360;
        return {
          start: D * (d + -90),
          end: D * (f + -90)
        };
      }
    };
  });
  P(k, "Series/Pie/PiePoint.js", [k["Core/Animation/AnimationUtilities.js"], k["Core/Series/Point.js"], k["Core/Utilities.js"]], function (f, d, k) {
    var x = this && this.__extends || function () {
      var _d7 = function d(f, g) {
        _d7 = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (d, c) {
          d.__proto__ = c;
        } || function (d, c) {
          for (var g in c) {
            c.hasOwnProperty(g) && (d[g] = c[g]);
          }
        };

        return _d7(f, g);
      };

      return function (f, g) {
        function l() {
          this.constructor = f;
        }

        _d7(f, g);

        f.prototype = null === g ? Object.create(g) : (l.prototype = g.prototype, new l());
      };
    }(),
        B = f.setAnimation,
        G = k.addEvent,
        D = k.defined;

    f = k.extend;
    var H = k.isNumber,
        t = k.pick,
        C = k.relativeLength;

    k = function (f) {
      function l() {
        var d = null !== f && f.apply(this, arguments) || this;
        d.labelDistance = void 0;
        d.options = void 0;
        d.series = void 0;
        return d;
      }

      x(l, f);

      l.prototype.getConnectorPath = function () {
        var d = this.labelPosition,
            f = this.series.options.dataLabels,
            c = f.connectorShape,
            l = this.connectorShapes;
        l[c] && (c = l[c]);
        return c.call(this, {
          x: d["final"].x,
          y: d["final"].y,
          alignment: d.alignment
        }, d.connectorPosition, f);
      };

      l.prototype.getTranslate = function () {
        return this.sliced ? this.slicedTranslation : {
          translateX: 0,
          translateY: 0
        };
      };

      l.prototype.haloPath = function (d) {
        var f = this.shapeArgs;
        return this.sliced || !this.visible ? [] : this.series.chart.renderer.symbols.arc(f.x, f.y, f.r + d, f.r + d, {
          innerR: f.r - 1,
          start: f.start,
          end: f.end
        });
      };

      l.prototype.init = function () {
        d.prototype.init.apply(this, arguments);
        var f = this;
        f.name = t(f.name, "Slice");

        var l = function l(c) {
          f.slice("select" === c.type);
        };

        G(f, "select", l);
        G(f, "unselect", l);
        return f;
      };

      l.prototype.isValid = function () {
        return H(this.y) && 0 <= this.y;
      };

      l.prototype.setVisible = function (d, f) {
        var c = this,
            g = c.series,
            l = g.chart,
            k = g.options.ignoreHiddenPoint;
        f = t(f, k);
        d !== c.visible && (c.visible = c.options.visible = d = "undefined" === typeof d ? !c.visible : d, g.options.data[g.data.indexOf(c)] = c.options, ["graphic", "dataLabel", "connector", "shadowGroup"].forEach(function (f) {
          if (c[f]) c[f][d ? "show" : "hide"](d);
        }), c.legendItem && l.legend.colorizeItem(c, d), d || "hover" !== c.state || c.setState(""), k && (g.isDirty = !0), f && l.redraw());
      };

      l.prototype.slice = function (d, f, c) {
        var g = this.series;
        B(c, g.chart);
        t(f, !0);
        this.sliced = this.options.sliced = D(d) ? d : !this.sliced;
        g.options.data[g.data.indexOf(this)] = this.options;
        this.graphic && this.graphic.animate(this.getTranslate());
        this.shadowGroup && this.shadowGroup.animate(this.getTranslate());
      };

      return l;
    }(d);

    f(k.prototype, {
      connectorShapes: {
        fixedOffset: function fixedOffset(d, f, g) {
          var l = f.breakAt;
          f = f.touchingSliceAt;
          return [["M", d.x, d.y], g.softConnector ? ["C", d.x + ("left" === d.alignment ? -5 : 5), d.y, 2 * l.x - f.x, 2 * l.y - f.y, l.x, l.y] : ["L", l.x, l.y], ["L", f.x, f.y]];
        },
        straight: function straight(d, f) {
          f = f.touchingSliceAt;
          return [["M", d.x, d.y], ["L", f.x, f.y]];
        },
        crookedLine: function crookedLine(d, f, g) {
          f = f.touchingSliceAt;
          var l = this.series,
              c = l.center[0],
              k = l.chart.plotWidth,
              n = l.chart.plotLeft;
          l = d.alignment;
          var t = this.shapeArgs.r;
          g = C(g.crookDistance, 1);
          k = "left" === l ? c + t + (k + n - c - t) * (1 - g) : n + (c - t) * g;
          g = ["L", k, d.y];
          c = !0;
          if ("left" === l ? k > d.x || k < f.x : k < d.x || k > f.x) c = !1;
          d = [["M", d.x, d.y]];
          c && d.push(g);
          d.push(["L", f.x, f.y]);
          return d;
        }
      }
    });
    return k;
  });
  P(k, "Series/Pie/PieSeries.js", [k["Mixins/CenteredSeries.js"], k["Series/Column/ColumnSeries.js"], k["Core/Globals.js"], k["Mixins/LegendSymbol.js"], k["Core/Color/Palette.js"], k["Series/Pie/PiePoint.js"], k["Core/Series/Series.js"], k["Core/Series/SeriesRegistry.js"], k["Core/Renderer/SVG/SVGRenderer.js"], k["Core/Utilities.js"]], function (f, d, k, x, B, G, D, H, t, C) {
    var l = this && this.__extends || function () {
      var _c4 = function c(d, f) {
        _c4 = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (c, e) {
          c.__proto__ = e;
        } || function (c, e) {
          for (var d in e) {
            e.hasOwnProperty(d) && (c[d] = e[d]);
          }
        };

        return _c4(d, f);
      };

      return function (d, f) {
        function g() {
          this.constructor = d;
        }

        _c4(d, f);

        d.prototype = null === f ? Object.create(f) : (g.prototype = f.prototype, new g());
      };
    }(),
        E = f.getStartAndEndRadians;

    k = k.noop;
    var g = C.clamp,
        y = C.extend,
        c = C.fireEvent,
        q = C.merge,
        n = C.pick,
        A = C.relativeLength;

    C = function (d) {
      function f() {
        var c = null !== d && d.apply(this, arguments) || this;
        c.center = void 0;
        c.data = void 0;
        c.maxLabelDistance = void 0;
        c.options = void 0;
        c.points = void 0;
        return c;
      }

      l(f, d);

      f.prototype.animate = function (c) {
        var d = this,
            e = d.points,
            f = d.startAngleRad;
        c || e.forEach(function (a) {
          var b = a.graphic,
              c = a.shapeArgs;
          b && c && (b.attr({
            r: n(a.startR, d.center && d.center[3] / 2),
            start: f,
            end: f
          }), b.animate({
            r: c.r,
            start: c.start,
            end: c.end
          }, d.options.animation));
        });
      };

      f.prototype.drawEmpty = function () {
        var c = this.startAngleRad,
            d = this.endAngleRad,
            e = this.options;

        if (0 === this.total && this.center) {
          var f = this.center[0];
          var a = this.center[1];
          this.graph || (this.graph = this.chart.renderer.arc(f, a, this.center[1] / 2, 0, c, d).addClass("highcharts-empty-series").add(this.group));
          this.graph.attr({
            d: t.prototype.symbols.arc(f, a, this.center[2] / 2, 0, {
              start: c,
              end: d,
              innerR: this.center[3] / 2
            })
          });
          this.chart.styledMode || this.graph.attr({
            "stroke-width": e.borderWidth,
            fill: e.fillColor || "none",
            stroke: e.color || B.neutralColor20
          });
        } else this.graph && (this.graph = this.graph.destroy());
      };

      f.prototype.drawPoints = function () {
        var c = this.chart.renderer;
        this.points.forEach(function (d) {
          d.graphic && d.hasNewShapeType() && (d.graphic = d.graphic.destroy());
          d.graphic || (d.graphic = c[d.shapeType](d.shapeArgs).add(d.series.group), d.delayedRendering = !0);
        });
      };

      f.prototype.generatePoints = function () {
        d.prototype.generatePoints.call(this);
        this.updateTotals();
      };

      f.prototype.getX = function (c, d, e) {
        var f = this.center,
            a = this.radii ? this.radii[e.index] || 0 : f[2] / 2;
        c = Math.asin(g((c - f[1]) / (a + e.labelDistance), -1, 1));
        return f[0] + (d ? -1 : 1) * Math.cos(c) * (a + e.labelDistance) + (0 < e.labelDistance ? (d ? -1 : 1) * this.options.dataLabels.padding : 0);
      };

      f.prototype.hasData = function () {
        return !!this.processedXData.length;
      };

      f.prototype.redrawPoints = function () {
        var c = this,
            d = c.chart,
            e = d.renderer,
            f,
            a,
            b,
            g,
            l = c.options.shadow;
        this.drawEmpty();
        !l || c.shadowGroup || d.styledMode || (c.shadowGroup = e.g("shadow").attr({
          zIndex: -1
        }).add(c.group));
        c.points.forEach(function (h) {
          var m = {};
          a = h.graphic;

          if (!h.isNull && a) {
            g = h.shapeArgs;
            f = h.getTranslate();

            if (!d.styledMode) {
              var k = h.shadowGroup;
              l && !k && (k = h.shadowGroup = e.g("shadow").add(c.shadowGroup));
              k && k.attr(f);
              b = c.pointAttribs(h, h.selected && "select");
            }

            h.delayedRendering ? (a.setRadialReference(c.center).attr(g).attr(f), d.styledMode || a.attr(b).attr({
              "stroke-linejoin": "round"
            }).shadow(l, k), h.delayedRendering = !1) : (a.setRadialReference(c.center), d.styledMode || q(!0, m, b), q(!0, m, g, f), a.animate(m));
            a.attr({
              visibility: h.visible ? "inherit" : "hidden"
            });
            a.addClass(h.getClassName(), !0);
          } else a && (h.graphic = a.destroy());
        });
      };

      f.prototype.sortByAngle = function (c, d) {
        c.sort(function (c, f) {
          return "undefined" !== typeof c.angle && (f.angle - c.angle) * d;
        });
      };

      f.prototype.translate = function (d) {
        this.generatePoints();
        var f = 0,
            e = this.options,
            g = e.slicedOffset,
            a = g + (e.borderWidth || 0),
            b = E(e.startAngle, e.endAngle),
            m = this.startAngleRad = b.start;
        b = (this.endAngleRad = b.end) - m;
        var l = this.points,
            k = e.dataLabels.distance;
        e = e.ignoreHiddenPoint;
        var q,
            t = l.length;
        d || (this.center = d = this.getCenter());

        for (q = 0; q < t; q++) {
          var z = l[q];
          var x = m + f * b;
          !z.isValid() || e && !z.visible || (f += z.percentage / 100);
          var y = m + f * b;
          z.shapeType = "arc";
          z.shapeArgs = {
            x: d[0],
            y: d[1],
            r: d[2] / 2,
            innerR: d[3] / 2,
            start: Math.round(1E3 * x) / 1E3,
            end: Math.round(1E3 * y) / 1E3
          };
          z.labelDistance = n(z.options.dataLabels && z.options.dataLabels.distance, k);
          z.labelDistance = A(z.labelDistance, z.shapeArgs.r);
          this.maxLabelDistance = Math.max(this.maxLabelDistance || 0, z.labelDistance);
          y = (y + x) / 2;
          y > 1.5 * Math.PI ? y -= 2 * Math.PI : y < -Math.PI / 2 && (y += 2 * Math.PI);
          z.slicedTranslation = {
            translateX: Math.round(Math.cos(y) * g),
            translateY: Math.round(Math.sin(y) * g)
          };
          var v = Math.cos(y) * d[2] / 2;
          var C = Math.sin(y) * d[2] / 2;
          z.tooltipPos = [d[0] + .7 * v, d[1] + .7 * C];
          z.half = y < -Math.PI / 2 || y > Math.PI / 2 ? 1 : 0;
          z.angle = y;
          x = Math.min(a, z.labelDistance / 5);
          z.labelPosition = {
            natural: {
              x: d[0] + v + Math.cos(y) * z.labelDistance,
              y: d[1] + C + Math.sin(y) * z.labelDistance
            },
            "final": {},
            alignment: 0 > z.labelDistance ? "center" : z.half ? "right" : "left",
            connectorPosition: {
              breakAt: {
                x: d[0] + v + Math.cos(y) * x,
                y: d[1] + C + Math.sin(y) * x
              },
              touchingSliceAt: {
                x: d[0] + v,
                y: d[1] + C
              }
            }
          };
        }

        c(this, "afterTranslate");
      };

      f.prototype.updateTotals = function () {
        var c,
            d = 0,
            e = this.points,
            f = e.length,
            a = this.options.ignoreHiddenPoint;

        for (c = 0; c < f; c++) {
          var b = e[c];
          !b.isValid() || a && !b.visible || (d += b.y);
        }

        this.total = d;

        for (c = 0; c < f; c++) {
          b = e[c], b.percentage = 0 < d && (b.visible || !a) ? b.y / d * 100 : 0, b.total = d;
        }
      };

      f.defaultOptions = q(D.defaultOptions, {
        center: [null, null],
        clip: !1,
        colorByPoint: !0,
        dataLabels: {
          allowOverlap: !0,
          connectorPadding: 5,
          connectorShape: "fixedOffset",
          crookDistance: "70%",
          distance: 30,
          enabled: !0,
          formatter: function formatter() {
            return this.point.isNull ? void 0 : this.point.name;
          },
          softConnector: !0,
          x: 0
        },
        fillColor: void 0,
        ignoreHiddenPoint: !0,
        inactiveOtherPoints: !0,
        legendType: "point",
        marker: null,
        size: null,
        showInLegend: !1,
        slicedOffset: 10,
        stickyTracking: !1,
        tooltip: {
          followPointer: !0
        },
        borderColor: B.backgroundColor,
        borderWidth: 1,
        lineWidth: void 0,
        states: {
          hover: {
            brightness: .1
          }
        }
      });
      return f;
    }(D);

    y(C.prototype, {
      axisTypes: [],
      directTouch: !0,
      drawGraph: null,
      drawLegendSymbol: x.drawRectangle,
      drawTracker: d.prototype.drawTracker,
      getCenter: f.getCenter,
      getSymbol: k,
      isCartesian: !1,
      noSharedTooltip: !0,
      pointAttribs: d.prototype.pointAttribs,
      pointClass: G,
      requireSorting: !1,
      searchPoint: k,
      trackerGroups: ["group", "dataLabelsGroup"]
    });
    H.registerSeriesType("pie", C);
    "";
    return C;
  });
  P(k, "Core/Series/DataLabels.js", [k["Core/Animation/AnimationUtilities.js"], k["Core/Globals.js"], k["Core/Color/Palette.js"], k["Core/Series/Series.js"], k["Core/Series/SeriesRegistry.js"], k["Core/Utilities.js"]], function (f, d, k, x, B, G) {
    var D = f.getDeferredAnimation;
    f = d.noop;
    B = B.seriesTypes;
    var H = G.arrayMax,
        t = G.clamp,
        C = G.defined,
        l = G.extend,
        E = G.fireEvent,
        g = G.format,
        y = G.isArray,
        c = G.merge,
        q = G.objectEach,
        n = G.pick,
        A = G.relativeLength,
        M = G.splat,
        z = G.stableSort;
    "";

    d.distribute = function (c, f, e) {
      function g(a, b) {
        return a.target - b.target;
      }

      var a,
          b = !0,
          m = c,
          l = [];
      var k = 0;
      var q = m.reducedLen || f;

      for (a = c.length; a--;) {
        k += c[a].size;
      }

      if (k > q) {
        z(c, function (a, b) {
          return (b.rank || 0) - (a.rank || 0);
        });

        for (k = a = 0; k <= q;) {
          k += c[a].size, a++;
        }

        l = c.splice(a - 1, c.length);
      }

      z(c, g);

      for (c = c.map(function (a) {
        return {
          size: a.size,
          targets: [a.target],
          align: n(a.align, .5)
        };
      }); b;) {
        for (a = c.length; a--;) {
          b = c[a], k = (Math.min.apply(0, b.targets) + Math.max.apply(0, b.targets)) / 2, b.pos = t(k - b.size * b.align, 0, f - b.size);
        }

        a = c.length;

        for (b = !1; a--;) {
          0 < a && c[a - 1].pos + c[a - 1].size > c[a].pos && (c[a - 1].size += c[a].size, c[a - 1].targets = c[a - 1].targets.concat(c[a].targets), c[a - 1].align = .5, c[a - 1].pos + c[a - 1].size > f && (c[a - 1].pos = f - c[a - 1].size), c.splice(a, 1), b = !0);
        }
      }

      m.push.apply(m, l);
      a = 0;
      c.some(function (b) {
        var c = 0;
        if (b.targets.some(function () {
          m[a].pos = b.pos + c;
          if ("undefined" !== typeof e && Math.abs(m[a].pos - m[a].target) > e) return m.slice(0, a + 1).forEach(function (a) {
            delete a.pos;
          }), m.reducedLen = (m.reducedLen || f) - .1 * f, m.reducedLen > .1 * f && d.distribute(m, f, e), !0;
          c += m[a].size;
          a++;
        })) return !0;
      });
      z(m, g);
    };

    x.prototype.drawDataLabels = function () {
      function d(a, b) {
        var c = b.filter;
        return c ? (b = c.operator, a = a[c.property], c = c.value, ">" === b && a > c || "<" === b && a < c || ">=" === b && a >= c || "<=" === b && a <= c || "==" === b && a == c || "===" === b && a === c ? !0 : !1) : !0;
      }

      function f(a, b) {
        var d = [],
            e;
        if (y(a) && !y(b)) d = a.map(function (a) {
          return c(a, b);
        });else if (y(b) && !y(a)) d = b.map(function (b) {
          return c(a, b);
        });else if (y(a) || y(b)) for (e = Math.max(a.length, b.length); e--;) {
          d[e] = c(a[e], b[e]);
        } else d = c(a, b);
        return d;
      }

      var e = this,
          h = e.chart,
          a = e.options,
          b = a.dataLabels,
          l = e.points,
          t,
          z = e.hasRendered || 0,
          x = b.animation;
      x = b.defer ? D(h, x, e) : {
        defer: 0,
        duration: 0
      };
      var A = h.renderer;
      b = f(f(h.options.plotOptions && h.options.plotOptions.series && h.options.plotOptions.series.dataLabels, h.options.plotOptions && h.options.plotOptions[e.type] && h.options.plotOptions[e.type].dataLabels), b);
      E(this, "drawDataLabels");

      if (y(b) || b.enabled || e._hasPointLabels) {
        var B = e.plotGroup("dataLabelsGroup", "data-labels", z ? "inherit" : "hidden", b.zIndex || 6);
        B.attr({
          opacity: +z
        });
        !z && (z = e.dataLabelsGroup) && (e.visible && B.show(!0), z[a.animation ? "animate" : "attr"]({
          opacity: 1
        }, x));
        l.forEach(function (c) {
          t = M(f(b, c.dlOptions || c.options && c.options.dataLabels));
          t.forEach(function (b, f) {
            var m = b.enabled && (!c.isNull || c.dataLabelOnNull) && d(c, b),
                l = c.dataLabels ? c.dataLabels[f] : c.dataLabel,
                r = c.connectors ? c.connectors[f] : c.connector,
                t = n(b.distance, c.labelDistance),
                w = !l;

            if (m) {
              var u = c.getLabelConfig();
              var v = n(b[c.formatPrefix + "Format"], b.format);
              u = C(v) ? g(v, u, h) : (b[c.formatPrefix + "Formatter"] || b.formatter).call(u, b);
              v = b.style;
              var z = b.rotation;
              h.styledMode || (v.color = n(b.color, v.color, e.color, k.neutralColor100), "contrast" === v.color ? (c.contrastColor = A.getContrast(c.color || e.color), v.color = !C(t) && b.inside || 0 > t || a.stacking ? c.contrastColor : k.neutralColor100) : delete c.contrastColor, a.cursor && (v.cursor = a.cursor));
              var x = {
                r: b.borderRadius || 0,
                rotation: z,
                padding: b.padding,
                zIndex: 1
              };
              h.styledMode || (x.fill = b.backgroundColor, x.stroke = b.borderColor, x["stroke-width"] = b.borderWidth);
              q(x, function (a, b) {
                "undefined" === typeof a && delete x[b];
              });
            }

            !l || m && C(u) ? m && C(u) && (l ? x.text = u : (c.dataLabels = c.dataLabels || [], l = c.dataLabels[f] = z ? A.text(u, 0, -9999, b.useHTML).addClass("highcharts-data-label") : A.label(u, 0, -9999, b.shape, null, null, b.useHTML, null, "data-label"), f || (c.dataLabel = l), l.addClass(" highcharts-data-label-color-" + c.colorIndex + " " + (b.className || "") + (b.useHTML ? " highcharts-tracker" : ""))), l.options = b, l.attr(x), h.styledMode || l.css(v).shadow(b.shadow), l.added || l.add(B), b.textPath && !b.useHTML && (l.setTextPath(c.getDataLabelPath && c.getDataLabelPath(l) || c.graphic, b.textPath), c.dataLabelPath && !b.textPath.enabled && (c.dataLabelPath = c.dataLabelPath.destroy())), e.alignDataLabel(c, l, b, null, w)) : (c.dataLabel = c.dataLabel && c.dataLabel.destroy(), c.dataLabels && (1 === c.dataLabels.length ? delete c.dataLabels : delete c.dataLabels[f]), f || delete c.dataLabel, r && (c.connector = c.connector.destroy(), c.connectors && (1 === c.connectors.length ? delete c.connectors : delete c.connectors[f])));
          });
        });
      }

      E(this, "afterDrawDataLabels");
    };

    x.prototype.alignDataLabel = function (c, d, e, f, a) {
      var b = this,
          g = this.chart,
          h = this.isCartesian && g.inverted,
          m = this.enabledDataSorting,
          k = n(c.dlBox && c.dlBox.centerX, c.plotX, -9999),
          q = n(c.plotY, -9999),
          r = d.getBBox(),
          t = e.rotation,
          z = e.align,
          v = g.isInsidePlot(k, Math.round(q), h),
          x = "justify" === n(e.overflow, m ? "none" : "justify"),
          p = this.visible && !1 !== c.visible && (c.series.forceDL || m && !x || v || e.inside && f && g.isInsidePlot(k, h ? f.x + 1 : f.y + f.height - 1, h));

      var y = function y(e) {
        m && b.xAxis && !x && b.setDataLabelStartPos(c, d, a, v, e);
      };

      if (p) {
        var C = g.renderer.fontMetrics(g.styledMode ? void 0 : e.style.fontSize, d).b;
        f = l({
          x: h ? this.yAxis.len - q : k,
          y: Math.round(h ? this.xAxis.len - k : q),
          width: 0,
          height: 0
        }, f);
        l(e, {
          width: r.width,
          height: r.height
        });
        t ? (x = !1, k = g.renderer.rotCorr(C, t), k = {
          x: f.x + (e.x || 0) + f.width / 2 + k.x,
          y: f.y + (e.y || 0) + {
            top: 0,
            middle: .5,
            bottom: 1
          }[e.verticalAlign] * f.height
        }, y(k), d[a ? "attr" : "animate"](k).attr({
          align: z
        }), y = (t + 720) % 360, y = 180 < y && 360 > y, "left" === z ? k.y -= y ? r.height : 0 : "center" === z ? (k.x -= r.width / 2, k.y -= r.height / 2) : "right" === z && (k.x -= r.width, k.y -= y ? 0 : r.height), d.placed = !0, d.alignAttr = k) : (y(f), d.align(e, null, f), k = d.alignAttr);
        x && 0 <= f.height ? this.justifyDataLabel(d, e, k, r, f, a) : n(e.crop, !0) && (p = g.isInsidePlot(k.x, k.y) && g.isInsidePlot(k.x + r.width, k.y + r.height));
        if (e.shape && !t) d[a ? "attr" : "animate"]({
          anchorX: h ? g.plotWidth - c.plotY : c.plotX,
          anchorY: h ? g.plotHeight - c.plotX : c.plotY
        });
      }

      a && m && (d.placed = !1);
      p || m && !x || (d.hide(!0), d.placed = !1);
    };

    x.prototype.setDataLabelStartPos = function (c, d, e, f, a) {
      var b = this.chart,
          g = b.inverted,
          h = this.xAxis,
          k = h.reversed,
          l = g ? d.height / 2 : d.width / 2;
      c = (c = c.pointWidth) ? c / 2 : 0;
      h = g ? a.x : k ? -l - c : h.width - l + c;
      a = g ? k ? this.yAxis.height - l + c : -l - c : a.y;
      d.startXPos = h;
      d.startYPos = a;
      f ? "hidden" === d.visibility && (d.show(), d.attr({
        opacity: 0
      }).animate({
        opacity: 1
      })) : d.attr({
        opacity: 1
      }).animate({
        opacity: 0
      }, void 0, d.hide);
      b.hasRendered && (e && d.attr({
        x: d.startXPos,
        y: d.startYPos
      }), d.placed = !0);
    };

    x.prototype.justifyDataLabel = function (c, d, e, f, a, b) {
      var g = this.chart,
          h = d.align,
          k = d.verticalAlign,
          l = c.box ? 0 : c.padding || 0,
          m = d.x;
      m = void 0 === m ? 0 : m;
      var n = d.y;
      var q = void 0 === n ? 0 : n;
      n = e.x + l;

      if (0 > n) {
        "right" === h && 0 <= m ? (d.align = "left", d.inside = !0) : m -= n;
        var r = !0;
      }

      n = e.x + f.width - l;
      n > g.plotWidth && ("left" === h && 0 >= m ? (d.align = "right", d.inside = !0) : m += g.plotWidth - n, r = !0);
      n = e.y + l;
      0 > n && ("bottom" === k && 0 <= q ? (d.verticalAlign = "top", d.inside = !0) : q -= n, r = !0);
      n = e.y + f.height - l;
      n > g.plotHeight && ("top" === k && 0 >= q ? (d.verticalAlign = "bottom", d.inside = !0) : q += g.plotHeight - n, r = !0);
      r && (d.x = m, d.y = q, c.placed = !b, c.align(d, void 0, a));
      return r;
    };

    B.pie && (B.pie.prototype.dataLabelPositioners = {
      radialDistributionY: function radialDistributionY(c) {
        return c.top + c.distributeBox.pos;
      },
      radialDistributionX: function radialDistributionX(c, d, e, f) {
        return c.getX(e < d.top + 2 || e > d.bottom - 2 ? f : e, d.half, d);
      },
      justify: function justify(c, d, e) {
        return e[0] + (c.half ? -1 : 1) * (d + c.labelDistance);
      },
      alignToPlotEdges: function alignToPlotEdges(c, d, e, f) {
        c = c.getBBox().width;
        return d ? c + f : e - c - f;
      },
      alignToConnectors: function alignToConnectors(c, d, e, f) {
        var a = 0,
            b;
        c.forEach(function (c) {
          b = c.dataLabel.getBBox().width;
          b > a && (a = b);
        });
        return d ? a + f : e - a - f;
      }
    }, B.pie.prototype.drawDataLabels = function () {
      var f = this,
          g = f.data,
          e,
          h = f.chart,
          a = f.options.dataLabels || {},
          b = a.connectorPadding,
          l,
          q = h.plotWidth,
          t = h.plotHeight,
          z = h.plotLeft,
          y = Math.round(h.chartWidth / 3),
          A,
          B = f.center,
          E = B[2] / 2,
          v = B[1],
          D,
          p,
          G,
          M,
          P = [[], []],
          u,
          S,
          I,
          X,
          U = [0, 0, 0, 0],
          W = f.dataLabelPositioners,
          Y;
      f.visible && (a.enabled || f._hasPointLabels) && (g.forEach(function (a) {
        a.dataLabel && a.visible && a.dataLabel.shortened && (a.dataLabel.attr({
          width: "auto"
        }).css({
          width: "auto",
          textOverflow: "clip"
        }), a.dataLabel.shortened = !1);
      }), x.prototype.drawDataLabels.apply(f), g.forEach(function (b) {
        b.dataLabel && (b.visible ? (P[b.half].push(b), b.dataLabel._pos = null, !C(a.style.width) && !C(b.options.dataLabels && b.options.dataLabels.style && b.options.dataLabels.style.width) && b.dataLabel.getBBox().width > y && (b.dataLabel.css({
          width: Math.round(.7 * y) + "px"
        }), b.dataLabel.shortened = !0)) : (b.dataLabel = b.dataLabel.destroy(), b.dataLabels && 1 === b.dataLabels.length && delete b.dataLabels));
      }), P.forEach(function (c, g) {
        var k = c.length,
            l = [],
            m;

        if (k) {
          f.sortByAngle(c, g - .5);

          if (0 < f.maxLabelDistance) {
            var r = Math.max(0, v - E - f.maxLabelDistance);
            var w = Math.min(v + E + f.maxLabelDistance, h.plotHeight);
            c.forEach(function (a) {
              0 < a.labelDistance && a.dataLabel && (a.top = Math.max(0, v - E - a.labelDistance), a.bottom = Math.min(v + E + a.labelDistance, h.plotHeight), m = a.dataLabel.getBBox().height || 21, a.distributeBox = {
                target: a.labelPosition.natural.y - a.top + m / 2,
                size: m,
                rank: a.y
              }, l.push(a.distributeBox));
            });
            r = w + m - r;
            d.distribute(l, r, r / 5);
          }

          for (X = 0; X < k; X++) {
            e = c[X];
            G = e.labelPosition;
            D = e.dataLabel;
            I = !1 === e.visible ? "hidden" : "inherit";
            S = r = G.natural.y;
            l && C(e.distributeBox) && ("undefined" === typeof e.distributeBox.pos ? I = "hidden" : (M = e.distributeBox.size, S = W.radialDistributionY(e)));
            delete e.positionIndex;
            if (a.justify) u = W.justify(e, E, B);else switch (a.alignTo) {
              case "connectors":
                u = W.alignToConnectors(c, g, q, z);
                break;

              case "plotEdges":
                u = W.alignToPlotEdges(D, g, q, z);
                break;

              default:
                u = W.radialDistributionX(f, e, S, r);
            }
            D._attr = {
              visibility: I,
              align: G.alignment
            };
            Y = e.options.dataLabels || {};
            D._pos = {
              x: u + n(Y.x, a.x) + ({
                left: b,
                right: -b
              }[G.alignment] || 0),
              y: S + n(Y.y, a.y) - 10
            };
            G["final"].x = u;
            G["final"].y = S;
            n(a.crop, !0) && (p = D.getBBox().width, r = null, u - p < b && 1 === g ? (r = Math.round(p - u + b), U[3] = Math.max(r, U[3])) : u + p > q - b && 0 === g && (r = Math.round(u + p - q + b), U[1] = Math.max(r, U[1])), 0 > S - M / 2 ? U[0] = Math.max(Math.round(-S + M / 2), U[0]) : S + M / 2 > t && (U[2] = Math.max(Math.round(S + M / 2 - t), U[2])), D.sideOverflow = r);
          }
        }
      }), 0 === H(U) || this.verifyDataLabelOverflow(U)) && (this.placeDataLabels(), this.points.forEach(function (b) {
        Y = c(a, b.options.dataLabels);

        if (l = n(Y.connectorWidth, 1)) {
          var d;
          A = b.connector;

          if ((D = b.dataLabel) && D._pos && b.visible && 0 < b.labelDistance) {
            I = D._attr.visibility;
            if (d = !A) b.connector = A = h.renderer.path().addClass("highcharts-data-label-connector  highcharts-color-" + b.colorIndex + (b.className ? " " + b.className : "")).add(f.dataLabelsGroup), h.styledMode || A.attr({
              "stroke-width": l,
              stroke: Y.connectorColor || b.color || k.neutralColor60
            });
            A[d ? "attr" : "animate"]({
              d: b.getConnectorPath()
            });
            A.attr("visibility", I);
          } else A && (b.connector = A.destroy());
        }
      }));
    }, B.pie.prototype.placeDataLabels = function () {
      this.points.forEach(function (c) {
        var d = c.dataLabel,
            e;
        d && c.visible && ((e = d._pos) ? (d.sideOverflow && (d._attr.width = Math.max(d.getBBox().width - d.sideOverflow, 0), d.css({
          width: d._attr.width + "px",
          textOverflow: (this.options.dataLabels.style || {}).textOverflow || "ellipsis"
        }), d.shortened = !0), d.attr(d._attr), d[d.moved ? "animate" : "attr"](e), d.moved = !0) : d && d.attr({
          y: -9999
        }));
        delete c.distributeBox;
      }, this);
    }, B.pie.prototype.alignDataLabel = f, B.pie.prototype.verifyDataLabelOverflow = function (c) {
      var d = this.center,
          e = this.options,
          f = e.center,
          a = e.minSize || 80,
          b = null !== e.size;

      if (!b) {
        if (null !== f[0]) var g = Math.max(d[2] - Math.max(c[1], c[3]), a);else g = Math.max(d[2] - c[1] - c[3], a), d[0] += (c[3] - c[1]) / 2;
        null !== f[1] ? g = t(g, a, d[2] - Math.max(c[0], c[2])) : (g = t(g, a, d[2] - c[0] - c[2]), d[1] += (c[0] - c[2]) / 2);
        g < d[2] ? (d[2] = g, d[3] = Math.min(A(e.innerSize || 0, g), g), this.translate(d), this.drawDataLabels && this.drawDataLabels()) : b = !0;
      }

      return b;
    });
    B.column && (B.column.prototype.alignDataLabel = function (d, f, e, g, a) {
      var b = this.chart.inverted,
          h = d.series,
          k = d.dlBox || d.shapeArgs,
          l = n(d.below, d.plotY > n(this.translatedThreshold, h.yAxis.len)),
          m = n(e.inside, !!this.options.stacking);
      k && (g = c(k), 0 > g.y && (g.height += g.y, g.y = 0), k = g.y + g.height - h.yAxis.len, 0 < k && k < g.height && (g.height -= k), b && (g = {
        x: h.yAxis.len - g.y - g.height,
        y: h.xAxis.len - g.x - g.width,
        width: g.height,
        height: g.width
      }), m || (b ? (g.x += l ? 0 : g.width, g.width = 0) : (g.y += l ? g.height : 0, g.height = 0)));
      e.align = n(e.align, !b || m ? "center" : l ? "right" : "left");
      e.verticalAlign = n(e.verticalAlign, b || m ? "middle" : l ? "top" : "bottom");
      x.prototype.alignDataLabel.call(this, d, f, e, g, a);
      e.inside && d.contrastColor && f.css({
        color: d.contrastColor
      });
    });
  });
  P(k, "Extensions/OverlappingDataLabels.js", [k["Core/Chart/Chart.js"], k["Core/Utilities.js"]], function (f, d) {
    var k = d.addEvent,
        x = d.fireEvent,
        B = d.isArray,
        G = d.isNumber,
        D = d.objectEach,
        H = d.pick;
    k(f, "render", function () {
      var d = [];
      (this.labelCollectors || []).forEach(function (f) {
        d = d.concat(f());
      });
      (this.yAxis || []).forEach(function (f) {
        f.stacking && f.options.stackLabels && !f.options.stackLabels.allowOverlap && D(f.stacking.stacks, function (f) {
          D(f, function (f) {
            d.push(f.label);
          });
        });
      });
      (this.series || []).forEach(function (f) {
        var k = f.options.dataLabels;
        f.visible && (!1 !== k.enabled || f._hasPointLabels) && (k = function k(f) {
          return f.forEach(function (f) {
            f.visible && (B(f.dataLabels) ? f.dataLabels : f.dataLabel ? [f.dataLabel] : []).forEach(function (g) {
              var c = g.options;
              g.labelrank = H(c.labelrank, f.labelrank, f.shapeArgs && f.shapeArgs.height);
              c.allowOverlap || d.push(g);
            });
          });
        }, k(f.nodes || []), k(f.points));
      });
      this.hideOverlappingLabels(d);
    });

    f.prototype.hideOverlappingLabels = function (d) {
      var f = this,
          k = d.length,
          t = f.renderer,
          g,
          y,
          c,
          q = !1;

      var n = function n(c) {
        var d,
            f = c.box ? 0 : c.padding || 0,
            e = d = 0,
            g;

        if (c && (!c.alignAttr || c.placed)) {
          var a = c.alignAttr || {
            x: c.attr("x"),
            y: c.attr("y")
          };
          var b = c.parentGroup;
          c.width || (d = c.getBBox(), c.width = d.width, c.height = d.height, d = t.fontMetrics(null, c.element).h);
          var k = c.width - 2 * f;
          (g = {
            left: "0",
            center: "0.5",
            right: "1"
          }[c.alignValue]) ? e = +g * k : G(c.x) && Math.round(c.x) !== c.translateX && (e = c.x - c.translateX);
          return {
            x: a.x + (b.translateX || 0) + f - (e || 0),
            y: a.y + (b.translateY || 0) + f - d,
            width: c.width - 2 * f,
            height: c.height - 2 * f
          };
        }
      };

      for (y = 0; y < k; y++) {
        if (g = d[y]) g.oldOpacity = g.opacity, g.newOpacity = 1, g.absoluteBox = n(g);
      }

      d.sort(function (c, d) {
        return (d.labelrank || 0) - (c.labelrank || 0);
      });

      for (y = 0; y < k; y++) {
        var A = (n = d[y]) && n.absoluteBox;

        for (g = y + 1; g < k; ++g) {
          var B = (c = d[g]) && c.absoluteBox;
          !A || !B || n === c || 0 === n.newOpacity || 0 === c.newOpacity || B.x >= A.x + A.width || B.x + B.width <= A.x || B.y >= A.y + A.height || B.y + B.height <= A.y || ((n.labelrank < c.labelrank ? n : c).newOpacity = 0);
        }
      }

      d.forEach(function (c) {
        if (c) {
          var d = c.newOpacity;
          c.oldOpacity !== d && (c.alignAttr && c.placed ? (c[d ? "removeClass" : "addClass"]("highcharts-data-label-hidden"), q = !0, c.alignAttr.opacity = d, c[c.isOld ? "animate" : "attr"](c.alignAttr, null, function () {
            f.styledMode || c.css({
              pointerEvents: d ? "auto" : "none"
            });
            c.visibility = d ? "inherit" : "hidden";
          }), x(f, "afterHideOverlappingLabel")) : c.attr({
            opacity: d
          }));
          c.isOld = !0;
        }
      });
      q && x(f, "afterHideAllOverlappingLabels");
    };
  });
  P(k, "Core/Responsive.js", [k["Core/Chart/Chart.js"], k["Core/Utilities.js"]], function (f, d) {
    var k = d.find,
        x = d.isArray,
        B = d.isObject,
        G = d.merge,
        D = d.objectEach,
        H = d.pick,
        t = d.splat,
        C = d.uniqueKey;

    f.prototype.setResponsive = function (d, f) {
      var g = this.options.responsive,
          l = [],
          c = this.currentResponsive;
      !f && g && g.rules && g.rules.forEach(function (c) {
        "undefined" === typeof c._id && (c._id = C());
        this.matchResponsiveRule(c, l);
      }, this);
      f = G.apply(0, l.map(function (c) {
        return k(g.rules, function (d) {
          return d._id === c;
        }).chartOptions;
      }));
      f.isResponsiveOptions = !0;
      l = l.toString() || void 0;
      l !== (c && c.ruleIds) && (c && this.update(c.undoOptions, d, !0), l ? (c = this.currentOptions(f), c.isResponsiveOptions = !0, this.currentResponsive = {
        ruleIds: l,
        mergedOptions: f,
        undoOptions: c
      }, this.update(f, d, !0)) : this.currentResponsive = void 0);
    };

    f.prototype.matchResponsiveRule = function (d, f) {
      var g = d.condition;
      (g.callback || function () {
        return this.chartWidth <= H(g.maxWidth, Number.MAX_VALUE) && this.chartHeight <= H(g.maxHeight, Number.MAX_VALUE) && this.chartWidth >= H(g.minWidth, 0) && this.chartHeight >= H(g.minHeight, 0);
      }).call(this) && f.push(d._id);
    };

    f.prototype.currentOptions = function (d) {
      function f(c, d, k, l) {
        var n;
        D(c, function (c, m) {
          if (!l && -1 < g.collectionsWithUpdate.indexOf(m) && d[m]) for (c = t(c), k[m] = [], n = 0; n < Math.max(c.length, d[m].length); n++) {
            d[m][n] && (void 0 === c[n] ? k[m][n] = d[m][n] : (k[m][n] = {}, f(c[n], d[m][n], k[m][n], l + 1)));
          } else B(c) ? (k[m] = x(c) ? [] : {}, f(c, d[m] || {}, k[m], l + 1)) : k[m] = "undefined" === typeof d[m] ? null : d[m];
        });
      }

      var g = this,
          k = {};
      f(d, this.options, k, 0);
      return k;
    };
  });
  P(k, "masters/highcharts.src.js", [k["Core/Globals.js"], k["Core/Utilities.js"], k["Core/Renderer/HTML/AST.js"], k["Core/Series/Series.js"]], function (f, d, k, x) {
    f.addEvent = d.addEvent;
    f.arrayMax = d.arrayMax;
    f.arrayMin = d.arrayMin;
    f.attr = d.attr;
    f.clearTimeout = d.clearTimeout;
    f.correctFloat = d.correctFloat;
    f.createElement = d.createElement;
    f.css = d.css;
    f.defined = d.defined;
    f.destroyObjectProperties = d.destroyObjectProperties;
    f.discardElement = d.discardElement;
    f.erase = d.erase;
    f.error = d.error;
    f.extend = d.extend;
    f.extendClass = d.extendClass;
    f.find = d.find;
    f.fireEvent = d.fireEvent;
    f.format = d.format;
    f.getMagnitude = d.getMagnitude;
    f.getStyle = d.getStyle;
    f.inArray = d.inArray;
    f.isArray = d.isArray;
    f.isClass = d.isClass;
    f.isDOMElement = d.isDOMElement;
    f.isFunction = d.isFunction;
    f.isNumber = d.isNumber;
    f.isObject = d.isObject;
    f.isString = d.isString;
    f.keys = d.keys;
    f.merge = d.merge;
    f.normalizeTickInterval = d.normalizeTickInterval;
    f.numberFormat = d.numberFormat;
    f.objectEach = d.objectEach;
    f.offset = d.offset;
    f.pad = d.pad;
    f.pick = d.pick;
    f.pInt = d.pInt;
    f.relativeLength = d.relativeLength;
    f.removeEvent = d.removeEvent;
    f.splat = d.splat;
    f.stableSort = d.stableSort;
    f.syncTimeout = d.syncTimeout;
    f.timeUnits = d.timeUnits;
    f.uniqueKey = d.uniqueKey;
    f.useSerialIds = d.useSerialIds;
    f.wrap = d.wrap;
    f.AST = k;
    f.Series = x;
    return f;
  });
  k["masters/highcharts.src.js"]._modules = k;
  return k["masters/highcharts.src.js"];
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/jquery/dist/jquery.js":
/*!********************************************!*\
  !*** ./node_modules/jquery/dist/jquery.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
 * jQuery JavaScript Library v3.6.0
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2021-03-02T17:08Z
 */
(function (global, factory) {
  "use strict";

  if (( false ? undefined : _typeof(module)) === "object" && _typeof(module.exports) === "object") {
    // For CommonJS and CommonJS-like environments where a proper `window`
    // is present, execute the factory and get jQuery.
    // For environments that do not have a `window` with a `document`
    // (such as Node.js), expose a factory as module.exports.
    // This accentuates the need for the creation of a real `window`.
    // e.g. var jQuery = require("jquery")(window);
    // See ticket #14549 for more info.
    module.exports = global.document ? factory(global, true) : function (w) {
      if (!w.document) {
        throw new Error("jQuery requires a window with a document");
      }

      return factory(w);
    };
  } else {
    factory(global);
  } // Pass this if window is not defined yet

})(typeof window !== "undefined" ? window : this, function (window, noGlobal) {
  // Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
  // throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
  // arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
  // enough that all such attempts are guarded in a try block.
  "use strict";

  var arr = [];
  var getProto = Object.getPrototypeOf;
  var _slice = arr.slice;
  var flat = arr.flat ? function (array) {
    return arr.flat.call(array);
  } : function (array) {
    return arr.concat.apply([], array);
  };
  var push = arr.push;
  var indexOf = arr.indexOf;
  var class2type = {};
  var toString = class2type.toString;
  var hasOwn = class2type.hasOwnProperty;
  var fnToString = hasOwn.toString;
  var ObjectFunctionString = fnToString.call(Object);
  var support = {};

  var isFunction = function isFunction(obj) {
    // Support: Chrome <=57, Firefox <=52
    // In some browsers, typeof returns "function" for HTML <object> elements
    // (i.e., `typeof document.createElement( "object" ) === "function"`).
    // We don't want to classify *any* DOM node as a function.
    // Support: QtWeb <=3.8.5, WebKit <=534.34, wkhtmltopdf tool <=0.12.5
    // Plus for old WebKit, typeof returns "function" for HTML collections
    // (e.g., `typeof document.getElementsByTagName("div") === "function"`). (gh-4756)
    return typeof obj === "function" && typeof obj.nodeType !== "number" && typeof obj.item !== "function";
  };

  var isWindow = function isWindow(obj) {
    return obj != null && obj === obj.window;
  };

  var document = window.document;
  var preservedScriptAttributes = {
    type: true,
    src: true,
    nonce: true,
    noModule: true
  };

  function DOMEval(code, node, doc) {
    doc = doc || document;
    var i,
        val,
        script = doc.createElement("script");
    script.text = code;

    if (node) {
      for (i in preservedScriptAttributes) {
        // Support: Firefox 64+, Edge 18+
        // Some browsers don't support the "nonce" property on scripts.
        // On the other hand, just using `getAttribute` is not enough as
        // the `nonce` attribute is reset to an empty string whenever it
        // becomes browsing-context connected.
        // See https://github.com/whatwg/html/issues/2369
        // See https://html.spec.whatwg.org/#nonce-attributes
        // The `node.getAttribute` check was added for the sake of
        // `jQuery.globalEval` so that it can fake a nonce-containing node
        // via an object.
        val = node[i] || node.getAttribute && node.getAttribute(i);

        if (val) {
          script.setAttribute(i, val);
        }
      }
    }

    doc.head.appendChild(script).parentNode.removeChild(script);
  }

  function toType(obj) {
    if (obj == null) {
      return obj + "";
    } // Support: Android <=2.3 only (functionish RegExp)


    return _typeof(obj) === "object" || typeof obj === "function" ? class2type[toString.call(obj)] || "object" : _typeof(obj);
  }
  /* global Symbol */
  // Defining this global in .eslintrc.json would create a danger of using the global
  // unguarded in another place, it seems safer to define global only for this module


  var version = "3.6.0",
      // Define a local copy of jQuery
  jQuery = function jQuery(selector, context) {
    // The jQuery object is actually just the init constructor 'enhanced'
    // Need init if jQuery is called (just allow error to be thrown if not included)
    return new jQuery.fn.init(selector, context);
  };

  jQuery.fn = jQuery.prototype = {
    // The current version of jQuery being used
    jquery: version,
    constructor: jQuery,
    // The default length of a jQuery object is 0
    length: 0,
    toArray: function toArray() {
      return _slice.call(this);
    },
    // Get the Nth element in the matched element set OR
    // Get the whole matched element set as a clean array
    get: function get(num) {
      // Return all the elements in a clean array
      if (num == null) {
        return _slice.call(this);
      } // Return just the one element from the set


      return num < 0 ? this[num + this.length] : this[num];
    },
    // Take an array of elements and push it onto the stack
    // (returning the new matched element set)
    pushStack: function pushStack(elems) {
      // Build a new jQuery matched element set
      var ret = jQuery.merge(this.constructor(), elems); // Add the old object onto the stack (as a reference)

      ret.prevObject = this; // Return the newly-formed element set

      return ret;
    },
    // Execute a callback for every element in the matched set.
    each: function each(callback) {
      return jQuery.each(this, callback);
    },
    map: function map(callback) {
      return this.pushStack(jQuery.map(this, function (elem, i) {
        return callback.call(elem, i, elem);
      }));
    },
    slice: function slice() {
      return this.pushStack(_slice.apply(this, arguments));
    },
    first: function first() {
      return this.eq(0);
    },
    last: function last() {
      return this.eq(-1);
    },
    even: function even() {
      return this.pushStack(jQuery.grep(this, function (_elem, i) {
        return (i + 1) % 2;
      }));
    },
    odd: function odd() {
      return this.pushStack(jQuery.grep(this, function (_elem, i) {
        return i % 2;
      }));
    },
    eq: function eq(i) {
      var len = this.length,
          j = +i + (i < 0 ? len : 0);
      return this.pushStack(j >= 0 && j < len ? [this[j]] : []);
    },
    end: function end() {
      return this.prevObject || this.constructor();
    },
    // For internal use only.
    // Behaves like an Array's method, not like a jQuery method.
    push: push,
    sort: arr.sort,
    splice: arr.splice
  };

  jQuery.extend = jQuery.fn.extend = function () {
    var options,
        name,
        src,
        copy,
        copyIsArray,
        clone,
        target = arguments[0] || {},
        i = 1,
        length = arguments.length,
        deep = false; // Handle a deep copy situation

    if (typeof target === "boolean") {
      deep = target; // Skip the boolean and the target

      target = arguments[i] || {};
      i++;
    } // Handle case when target is a string or something (possible in deep copy)


    if (_typeof(target) !== "object" && !isFunction(target)) {
      target = {};
    } // Extend jQuery itself if only one argument is passed


    if (i === length) {
      target = this;
      i--;
    }

    for (; i < length; i++) {
      // Only deal with non-null/undefined values
      if ((options = arguments[i]) != null) {
        // Extend the base object
        for (name in options) {
          copy = options[name]; // Prevent Object.prototype pollution
          // Prevent never-ending loop

          if (name === "__proto__" || target === copy) {
            continue;
          } // Recurse if we're merging plain objects or arrays


          if (deep && copy && (jQuery.isPlainObject(copy) || (copyIsArray = Array.isArray(copy)))) {
            src = target[name]; // Ensure proper type for the source value

            if (copyIsArray && !Array.isArray(src)) {
              clone = [];
            } else if (!copyIsArray && !jQuery.isPlainObject(src)) {
              clone = {};
            } else {
              clone = src;
            }

            copyIsArray = false; // Never move original objects, clone them

            target[name] = jQuery.extend(deep, clone, copy); // Don't bring in undefined values
          } else if (copy !== undefined) {
            target[name] = copy;
          }
        }
      }
    } // Return the modified object


    return target;
  };

  jQuery.extend({
    // Unique for each copy of jQuery on the page
    expando: "jQuery" + (version + Math.random()).replace(/\D/g, ""),
    // Assume jQuery is ready without the ready module
    isReady: true,
    error: function error(msg) {
      throw new Error(msg);
    },
    noop: function noop() {},
    isPlainObject: function isPlainObject(obj) {
      var proto, Ctor; // Detect obvious negatives
      // Use toString instead of jQuery.type to catch host objects

      if (!obj || toString.call(obj) !== "[object Object]") {
        return false;
      }

      proto = getProto(obj); // Objects with no prototype (e.g., `Object.create( null )`) are plain

      if (!proto) {
        return true;
      } // Objects with prototype are plain iff they were constructed by a global Object function


      Ctor = hasOwn.call(proto, "constructor") && proto.constructor;
      return typeof Ctor === "function" && fnToString.call(Ctor) === ObjectFunctionString;
    },
    isEmptyObject: function isEmptyObject(obj) {
      var name;

      for (name in obj) {
        return false;
      }

      return true;
    },
    // Evaluates a script in a provided context; falls back to the global one
    // if not specified.
    globalEval: function globalEval(code, options, doc) {
      DOMEval(code, {
        nonce: options && options.nonce
      }, doc);
    },
    each: function each(obj, callback) {
      var length,
          i = 0;

      if (isArrayLike(obj)) {
        length = obj.length;

        for (; i < length; i++) {
          if (callback.call(obj[i], i, obj[i]) === false) {
            break;
          }
        }
      } else {
        for (i in obj) {
          if (callback.call(obj[i], i, obj[i]) === false) {
            break;
          }
        }
      }

      return obj;
    },
    // results is for internal usage only
    makeArray: function makeArray(arr, results) {
      var ret = results || [];

      if (arr != null) {
        if (isArrayLike(Object(arr))) {
          jQuery.merge(ret, typeof arr === "string" ? [arr] : arr);
        } else {
          push.call(ret, arr);
        }
      }

      return ret;
    },
    inArray: function inArray(elem, arr, i) {
      return arr == null ? -1 : indexOf.call(arr, elem, i);
    },
    // Support: Android <=4.0 only, PhantomJS 1 only
    // push.apply(_, arraylike) throws on ancient WebKit
    merge: function merge(first, second) {
      var len = +second.length,
          j = 0,
          i = first.length;

      for (; j < len; j++) {
        first[i++] = second[j];
      }

      first.length = i;
      return first;
    },
    grep: function grep(elems, callback, invert) {
      var callbackInverse,
          matches = [],
          i = 0,
          length = elems.length,
          callbackExpect = !invert; // Go through the array, only saving the items
      // that pass the validator function

      for (; i < length; i++) {
        callbackInverse = !callback(elems[i], i);

        if (callbackInverse !== callbackExpect) {
          matches.push(elems[i]);
        }
      }

      return matches;
    },
    // arg is for internal usage only
    map: function map(elems, callback, arg) {
      var length,
          value,
          i = 0,
          ret = []; // Go through the array, translating each of the items to their new values

      if (isArrayLike(elems)) {
        length = elems.length;

        for (; i < length; i++) {
          value = callback(elems[i], i, arg);

          if (value != null) {
            ret.push(value);
          }
        } // Go through every key on the object,

      } else {
        for (i in elems) {
          value = callback(elems[i], i, arg);

          if (value != null) {
            ret.push(value);
          }
        }
      } // Flatten any nested arrays


      return flat(ret);
    },
    // A global GUID counter for objects
    guid: 1,
    // jQuery.support is not used in Core but other projects attach their
    // properties to it so it needs to exist.
    support: support
  });

  if (typeof Symbol === "function") {
    jQuery.fn[Symbol.iterator] = arr[Symbol.iterator];
  } // Populate the class2type map


  jQuery.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (_i, name) {
    class2type["[object " + name + "]"] = name.toLowerCase();
  });

  function isArrayLike(obj) {
    // Support: real iOS 8.2 only (not reproducible in simulator)
    // `in` check used to prevent JIT error (gh-2145)
    // hasOwn isn't used here due to false negatives
    // regarding Nodelist length in IE
    var length = !!obj && "length" in obj && obj.length,
        type = toType(obj);

    if (isFunction(obj) || isWindow(obj)) {
      return false;
    }

    return type === "array" || length === 0 || typeof length === "number" && length > 0 && length - 1 in obj;
  }

  var Sizzle =
  /*!
   * Sizzle CSS Selector Engine v2.3.6
   * https://sizzlejs.com/
   *
   * Copyright JS Foundation and other contributors
   * Released under the MIT license
   * https://js.foundation/
   *
   * Date: 2021-02-16
   */
  function (window) {
    var i,
        support,
        Expr,
        getText,
        isXML,
        tokenize,
        compile,
        select,
        outermostContext,
        sortInput,
        hasDuplicate,
        // Local document vars
    setDocument,
        document,
        docElem,
        documentIsHTML,
        rbuggyQSA,
        rbuggyMatches,
        matches,
        contains,
        // Instance-specific data
    expando = "sizzle" + 1 * new Date(),
        preferredDoc = window.document,
        dirruns = 0,
        done = 0,
        classCache = createCache(),
        tokenCache = createCache(),
        compilerCache = createCache(),
        nonnativeSelectorCache = createCache(),
        sortOrder = function sortOrder(a, b) {
      if (a === b) {
        hasDuplicate = true;
      }

      return 0;
    },
        // Instance methods
    hasOwn = {}.hasOwnProperty,
        arr = [],
        pop = arr.pop,
        pushNative = arr.push,
        push = arr.push,
        slice = arr.slice,
        // Use a stripped-down indexOf as it's faster than native
    // https://jsperf.com/thor-indexof-vs-for/5
    indexOf = function indexOf(list, elem) {
      var i = 0,
          len = list.length;

      for (; i < len; i++) {
        if (list[i] === elem) {
          return i;
        }
      }

      return -1;
    },
        booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|" + "ismap|loop|multiple|open|readonly|required|scoped",
        // Regular expressions
    // http://www.w3.org/TR/css3-selectors/#whitespace
    whitespace = "[\\x20\\t\\r\\n\\f]",
        // https://www.w3.org/TR/css-syntax-3/#ident-token-diagram
    identifier = "(?:\\\\[\\da-fA-F]{1,6}" + whitespace + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
        // Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
    attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace + // Operator (capture 2)
    "*([*^$|!~]?=)" + whitespace + // "Attribute values must be CSS identifiers [capture 5]
    // or strings [capture 3 or capture 4]"
    "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace + "*\\]",
        pseudos = ":(" + identifier + ")(?:\\((" + // To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
    // 1. quoted (capture 3; capture 4 or capture 5)
    "('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" + // 2. simple (capture 6)
    "((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" + // 3. anything else (capture 2)
    ".*" + ")\\)|)",
        // Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
    rwhitespace = new RegExp(whitespace + "+", "g"),
        rtrim = new RegExp("^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g"),
        rcomma = new RegExp("^" + whitespace + "*," + whitespace + "*"),
        rcombinators = new RegExp("^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*"),
        rdescend = new RegExp(whitespace + "|>"),
        rpseudo = new RegExp(pseudos),
        ridentifier = new RegExp("^" + identifier + "$"),
        matchExpr = {
      "ID": new RegExp("^#(" + identifier + ")"),
      "CLASS": new RegExp("^\\.(" + identifier + ")"),
      "TAG": new RegExp("^(" + identifier + "|[*])"),
      "ATTR": new RegExp("^" + attributes),
      "PSEUDO": new RegExp("^" + pseudos),
      "CHILD": new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace + "*(\\d+)|))" + whitespace + "*\\)|)", "i"),
      "bool": new RegExp("^(?:" + booleans + ")$", "i"),
      // For use in libraries implementing .is()
      // We use this for POS matching in `select`
      "needsContext": new RegExp("^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i")
    },
        rhtml = /HTML$/i,
        rinputs = /^(?:input|select|textarea|button)$/i,
        rheader = /^h\d$/i,
        rnative = /^[^{]+\{\s*\[native \w/,
        // Easily-parseable/retrievable ID or TAG or CLASS selectors
    rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        rsibling = /[+~]/,
        // CSS escapes
    // http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
    runescape = new RegExp("\\\\[\\da-fA-F]{1,6}" + whitespace + "?|\\\\([^\\r\\n\\f])", "g"),
        funescape = function funescape(escape, nonHex) {
      var high = "0x" + escape.slice(1) - 0x10000;
      return nonHex ? // Strip the backslash prefix from a non-hex escape sequence
      nonHex : // Replace a hexadecimal escape sequence with the encoded Unicode code point
      // Support: IE <=11+
      // For values outside the Basic Multilingual Plane (BMP), manually construct a
      // surrogate pair
      high < 0 ? String.fromCharCode(high + 0x10000) : String.fromCharCode(high >> 10 | 0xD800, high & 0x3FF | 0xDC00);
    },
        // CSS string/identifier serialization
    // https://drafts.csswg.org/cssom/#common-serializing-idioms
    rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
        fcssescape = function fcssescape(ch, asCodePoint) {
      if (asCodePoint) {
        // U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
        if (ch === "\0") {
          return "\uFFFD";
        } // Control characters and (dependent upon position) numbers get escaped as code points


        return ch.slice(0, -1) + "\\" + ch.charCodeAt(ch.length - 1).toString(16) + " ";
      } // Other potentially-special ASCII characters get backslash-escaped


      return "\\" + ch;
    },
        // Used for iframes
    // See setDocument()
    // Removing the function wrapper causes a "Permission Denied"
    // error in IE
    unloadHandler = function unloadHandler() {
      setDocument();
    },
        inDisabledFieldset = addCombinator(function (elem) {
      return elem.disabled === true && elem.nodeName.toLowerCase() === "fieldset";
    }, {
      dir: "parentNode",
      next: "legend"
    }); // Optimize for push.apply( _, NodeList )


    try {
      push.apply(arr = slice.call(preferredDoc.childNodes), preferredDoc.childNodes); // Support: Android<4.0
      // Detect silently failing push.apply
      // eslint-disable-next-line no-unused-expressions

      arr[preferredDoc.childNodes.length].nodeType;
    } catch (e) {
      push = {
        apply: arr.length ? // Leverage slice if possible
        function (target, els) {
          pushNative.apply(target, slice.call(els));
        } : // Support: IE<9
        // Otherwise append directly
        function (target, els) {
          var j = target.length,
              i = 0; // Can't trust NodeList.length

          while (target[j++] = els[i++]) {}

          target.length = j - 1;
        }
      };
    }

    function Sizzle(selector, context, results, seed) {
      var m,
          i,
          elem,
          nid,
          match,
          groups,
          newSelector,
          newContext = context && context.ownerDocument,
          // nodeType defaults to 9, since context defaults to document
      nodeType = context ? context.nodeType : 9;
      results = results || []; // Return early from calls with invalid selector or context

      if (typeof selector !== "string" || !selector || nodeType !== 1 && nodeType !== 9 && nodeType !== 11) {
        return results;
      } // Try to shortcut find operations (as opposed to filters) in HTML documents


      if (!seed) {
        setDocument(context);
        context = context || document;

        if (documentIsHTML) {
          // If the selector is sufficiently simple, try using a "get*By*" DOM method
          // (excepting DocumentFragment context, where the methods don't exist)
          if (nodeType !== 11 && (match = rquickExpr.exec(selector))) {
            // ID selector
            if (m = match[1]) {
              // Document context
              if (nodeType === 9) {
                if (elem = context.getElementById(m)) {
                  // Support: IE, Opera, Webkit
                  // TODO: identify versions
                  // getElementById can match elements by name instead of ID
                  if (elem.id === m) {
                    results.push(elem);
                    return results;
                  }
                } else {
                  return results;
                } // Element context

              } else {
                // Support: IE, Opera, Webkit
                // TODO: identify versions
                // getElementById can match elements by name instead of ID
                if (newContext && (elem = newContext.getElementById(m)) && contains(context, elem) && elem.id === m) {
                  results.push(elem);
                  return results;
                }
              } // Type selector

            } else if (match[2]) {
              push.apply(results, context.getElementsByTagName(selector));
              return results; // Class selector
            } else if ((m = match[3]) && support.getElementsByClassName && context.getElementsByClassName) {
              push.apply(results, context.getElementsByClassName(m));
              return results;
            }
          } // Take advantage of querySelectorAll


          if (support.qsa && !nonnativeSelectorCache[selector + " "] && (!rbuggyQSA || !rbuggyQSA.test(selector)) && ( // Support: IE 8 only
          // Exclude object elements
          nodeType !== 1 || context.nodeName.toLowerCase() !== "object")) {
            newSelector = selector;
            newContext = context; // qSA considers elements outside a scoping root when evaluating child or
            // descendant combinators, which is not what we want.
            // In such cases, we work around the behavior by prefixing every selector in the
            // list with an ID selector referencing the scope context.
            // The technique has to be used as well when a leading combinator is used
            // as such selectors are not recognized by querySelectorAll.
            // Thanks to Andrew Dupont for this technique.

            if (nodeType === 1 && (rdescend.test(selector) || rcombinators.test(selector))) {
              // Expand context for sibling selectors
              newContext = rsibling.test(selector) && testContext(context.parentNode) || context; // We can use :scope instead of the ID hack if the browser
              // supports it & if we're not changing the context.

              if (newContext !== context || !support.scope) {
                // Capture the context ID, setting it first if necessary
                if (nid = context.getAttribute("id")) {
                  nid = nid.replace(rcssescape, fcssescape);
                } else {
                  context.setAttribute("id", nid = expando);
                }
              } // Prefix every selector in the list


              groups = tokenize(selector);
              i = groups.length;

              while (i--) {
                groups[i] = (nid ? "#" + nid : ":scope") + " " + toSelector(groups[i]);
              }

              newSelector = groups.join(",");
            }

            try {
              push.apply(results, newContext.querySelectorAll(newSelector));
              return results;
            } catch (qsaError) {
              nonnativeSelectorCache(selector, true);
            } finally {
              if (nid === expando) {
                context.removeAttribute("id");
              }
            }
          }
        }
      } // All others


      return select(selector.replace(rtrim, "$1"), context, results, seed);
    }
    /**
     * Create key-value caches of limited size
     * @returns {function(string, object)} Returns the Object data after storing it on itself with
     *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
     *	deleting the oldest entry
     */


    function createCache() {
      var keys = [];

      function cache(key, value) {
        // Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
        if (keys.push(key + " ") > Expr.cacheLength) {
          // Only keep the most recent entries
          delete cache[keys.shift()];
        }

        return cache[key + " "] = value;
      }

      return cache;
    }
    /**
     * Mark a function for special use by Sizzle
     * @param {Function} fn The function to mark
     */


    function markFunction(fn) {
      fn[expando] = true;
      return fn;
    }
    /**
     * Support testing using an element
     * @param {Function} fn Passed the created element and returns a boolean result
     */


    function assert(fn) {
      var el = document.createElement("fieldset");

      try {
        return !!fn(el);
      } catch (e) {
        return false;
      } finally {
        // Remove from its parent by default
        if (el.parentNode) {
          el.parentNode.removeChild(el);
        } // release memory in IE


        el = null;
      }
    }
    /**
     * Adds the same handler for all of the specified attrs
     * @param {String} attrs Pipe-separated list of attributes
     * @param {Function} handler The method that will be applied
     */


    function addHandle(attrs, handler) {
      var arr = attrs.split("|"),
          i = arr.length;

      while (i--) {
        Expr.attrHandle[arr[i]] = handler;
      }
    }
    /**
     * Checks document order of two siblings
     * @param {Element} a
     * @param {Element} b
     * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
     */


    function siblingCheck(a, b) {
      var cur = b && a,
          diff = cur && a.nodeType === 1 && b.nodeType === 1 && a.sourceIndex - b.sourceIndex; // Use IE sourceIndex if available on both nodes

      if (diff) {
        return diff;
      } // Check if b follows a


      if (cur) {
        while (cur = cur.nextSibling) {
          if (cur === b) {
            return -1;
          }
        }
      }

      return a ? 1 : -1;
    }
    /**
     * Returns a function to use in pseudos for input types
     * @param {String} type
     */


    function createInputPseudo(type) {
      return function (elem) {
        var name = elem.nodeName.toLowerCase();
        return name === "input" && elem.type === type;
      };
    }
    /**
     * Returns a function to use in pseudos for buttons
     * @param {String} type
     */


    function createButtonPseudo(type) {
      return function (elem) {
        var name = elem.nodeName.toLowerCase();
        return (name === "input" || name === "button") && elem.type === type;
      };
    }
    /**
     * Returns a function to use in pseudos for :enabled/:disabled
     * @param {Boolean} disabled true for :disabled; false for :enabled
     */


    function createDisabledPseudo(disabled) {
      // Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
      return function (elem) {
        // Only certain elements can match :enabled or :disabled
        // https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
        // https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
        if ("form" in elem) {
          // Check for inherited disabledness on relevant non-disabled elements:
          // * listed form-associated elements in a disabled fieldset
          //   https://html.spec.whatwg.org/multipage/forms.html#category-listed
          //   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
          // * option elements in a disabled optgroup
          //   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
          // All such elements have a "form" property.
          if (elem.parentNode && elem.disabled === false) {
            // Option elements defer to a parent optgroup if present
            if ("label" in elem) {
              if ("label" in elem.parentNode) {
                return elem.parentNode.disabled === disabled;
              } else {
                return elem.disabled === disabled;
              }
            } // Support: IE 6 - 11
            // Use the isDisabled shortcut property to check for disabled fieldset ancestors


            return elem.isDisabled === disabled || // Where there is no isDisabled, check manually

            /* jshint -W018 */
            elem.isDisabled !== !disabled && inDisabledFieldset(elem) === disabled;
          }

          return elem.disabled === disabled; // Try to winnow out elements that can't be disabled before trusting the disabled property.
          // Some victims get caught in our net (label, legend, menu, track), but it shouldn't
          // even exist on them, let alone have a boolean value.
        } else if ("label" in elem) {
          return elem.disabled === disabled;
        } // Remaining elements are neither :enabled nor :disabled


        return false;
      };
    }
    /**
     * Returns a function to use in pseudos for positionals
     * @param {Function} fn
     */


    function createPositionalPseudo(fn) {
      return markFunction(function (argument) {
        argument = +argument;
        return markFunction(function (seed, matches) {
          var j,
              matchIndexes = fn([], seed.length, argument),
              i = matchIndexes.length; // Match elements found at the specified indexes

          while (i--) {
            if (seed[j = matchIndexes[i]]) {
              seed[j] = !(matches[j] = seed[j]);
            }
          }
        });
      });
    }
    /**
     * Checks a node for validity as a Sizzle context
     * @param {Element|Object=} context
     * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
     */


    function testContext(context) {
      return context && typeof context.getElementsByTagName !== "undefined" && context;
    } // Expose support vars for convenience


    support = Sizzle.support = {};
    /**
     * Detects XML nodes
     * @param {Element|Object} elem An element or a document
     * @returns {Boolean} True iff elem is a non-HTML XML node
     */

    isXML = Sizzle.isXML = function (elem) {
      var namespace = elem && elem.namespaceURI,
          docElem = elem && (elem.ownerDocument || elem).documentElement; // Support: IE <=8
      // Assume HTML when documentElement doesn't yet exist, such as inside loading iframes
      // https://bugs.jquery.com/ticket/4833

      return !rhtml.test(namespace || docElem && docElem.nodeName || "HTML");
    };
    /**
     * Sets document-related variables once based on the current document
     * @param {Element|Object} [doc] An element or document object to use to set the document
     * @returns {Object} Returns the current document
     */


    setDocument = Sizzle.setDocument = function (node) {
      var hasCompare,
          subWindow,
          doc = node ? node.ownerDocument || node : preferredDoc; // Return early if doc is invalid or already selected
      // Support: IE 11+, Edge 17 - 18+
      // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
      // two documents; shallow comparisons work.
      // eslint-disable-next-line eqeqeq

      if (doc == document || doc.nodeType !== 9 || !doc.documentElement) {
        return document;
      } // Update global variables


      document = doc;
      docElem = document.documentElement;
      documentIsHTML = !isXML(document); // Support: IE 9 - 11+, Edge 12 - 18+
      // Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
      // Support: IE 11+, Edge 17 - 18+
      // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
      // two documents; shallow comparisons work.
      // eslint-disable-next-line eqeqeq

      if (preferredDoc != document && (subWindow = document.defaultView) && subWindow.top !== subWindow) {
        // Support: IE 11, Edge
        if (subWindow.addEventListener) {
          subWindow.addEventListener("unload", unloadHandler, false); // Support: IE 9 - 10 only
        } else if (subWindow.attachEvent) {
          subWindow.attachEvent("onunload", unloadHandler);
        }
      } // Support: IE 8 - 11+, Edge 12 - 18+, Chrome <=16 - 25 only, Firefox <=3.6 - 31 only,
      // Safari 4 - 5 only, Opera <=11.6 - 12.x only
      // IE/Edge & older browsers don't support the :scope pseudo-class.
      // Support: Safari 6.0 only
      // Safari 6.0 supports :scope but it's an alias of :root there.


      support.scope = assert(function (el) {
        docElem.appendChild(el).appendChild(document.createElement("div"));
        return typeof el.querySelectorAll !== "undefined" && !el.querySelectorAll(":scope fieldset div").length;
      });
      /* Attributes
      ---------------------------------------------------------------------- */
      // Support: IE<8
      // Verify that getAttribute really returns attributes and not properties
      // (excepting IE8 booleans)

      support.attributes = assert(function (el) {
        el.className = "i";
        return !el.getAttribute("className");
      });
      /* getElement(s)By*
      ---------------------------------------------------------------------- */
      // Check if getElementsByTagName("*") returns only elements

      support.getElementsByTagName = assert(function (el) {
        el.appendChild(document.createComment(""));
        return !el.getElementsByTagName("*").length;
      }); // Support: IE<9

      support.getElementsByClassName = rnative.test(document.getElementsByClassName); // Support: IE<10
      // Check if getElementById returns elements by name
      // The broken getElementById methods don't pick up programmatically-set names,
      // so use a roundabout getElementsByName test

      support.getById = assert(function (el) {
        docElem.appendChild(el).id = expando;
        return !document.getElementsByName || !document.getElementsByName(expando).length;
      }); // ID filter and find

      if (support.getById) {
        Expr.filter["ID"] = function (id) {
          var attrId = id.replace(runescape, funescape);
          return function (elem) {
            return elem.getAttribute("id") === attrId;
          };
        };

        Expr.find["ID"] = function (id, context) {
          if (typeof context.getElementById !== "undefined" && documentIsHTML) {
            var elem = context.getElementById(id);
            return elem ? [elem] : [];
          }
        };
      } else {
        Expr.filter["ID"] = function (id) {
          var attrId = id.replace(runescape, funescape);
          return function (elem) {
            var node = typeof elem.getAttributeNode !== "undefined" && elem.getAttributeNode("id");
            return node && node.value === attrId;
          };
        }; // Support: IE 6 - 7 only
        // getElementById is not reliable as a find shortcut


        Expr.find["ID"] = function (id, context) {
          if (typeof context.getElementById !== "undefined" && documentIsHTML) {
            var node,
                i,
                elems,
                elem = context.getElementById(id);

            if (elem) {
              // Verify the id attribute
              node = elem.getAttributeNode("id");

              if (node && node.value === id) {
                return [elem];
              } // Fall back on getElementsByName


              elems = context.getElementsByName(id);
              i = 0;

              while (elem = elems[i++]) {
                node = elem.getAttributeNode("id");

                if (node && node.value === id) {
                  return [elem];
                }
              }
            }

            return [];
          }
        };
      } // Tag


      Expr.find["TAG"] = support.getElementsByTagName ? function (tag, context) {
        if (typeof context.getElementsByTagName !== "undefined") {
          return context.getElementsByTagName(tag); // DocumentFragment nodes don't have gEBTN
        } else if (support.qsa) {
          return context.querySelectorAll(tag);
        }
      } : function (tag, context) {
        var elem,
            tmp = [],
            i = 0,
            // By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
        results = context.getElementsByTagName(tag); // Filter out possible comments

        if (tag === "*") {
          while (elem = results[i++]) {
            if (elem.nodeType === 1) {
              tmp.push(elem);
            }
          }

          return tmp;
        }

        return results;
      }; // Class

      Expr.find["CLASS"] = support.getElementsByClassName && function (className, context) {
        if (typeof context.getElementsByClassName !== "undefined" && documentIsHTML) {
          return context.getElementsByClassName(className);
        }
      };
      /* QSA/matchesSelector
      ---------------------------------------------------------------------- */
      // QSA and matchesSelector support
      // matchesSelector(:active) reports false when true (IE9/Opera 11.5)


      rbuggyMatches = []; // qSa(:focus) reports false when true (Chrome 21)
      // We allow this because of a bug in IE8/9 that throws an error
      // whenever `document.activeElement` is accessed on an iframe
      // So, we allow :focus to pass through QSA all the time to avoid the IE error
      // See https://bugs.jquery.com/ticket/13378

      rbuggyQSA = [];

      if (support.qsa = rnative.test(document.querySelectorAll)) {
        // Build QSA regex
        // Regex strategy adopted from Diego Perini
        assert(function (el) {
          var input; // Select is set to empty string on purpose
          // This is to test IE's treatment of not explicitly
          // setting a boolean content attribute,
          // since its presence should be enough
          // https://bugs.jquery.com/ticket/12359

          docElem.appendChild(el).innerHTML = "<a id='" + expando + "'></a>" + "<select id='" + expando + "-\r\\' msallowcapture=''>" + "<option selected=''></option></select>"; // Support: IE8, Opera 11-12.16
          // Nothing should be selected when empty strings follow ^= or $= or *=
          // The test attribute must be unknown in Opera but "safe" for WinRT
          // https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section

          if (el.querySelectorAll("[msallowcapture^='']").length) {
            rbuggyQSA.push("[*^$]=" + whitespace + "*(?:''|\"\")");
          } // Support: IE8
          // Boolean attributes and "value" are not treated correctly


          if (!el.querySelectorAll("[selected]").length) {
            rbuggyQSA.push("\\[" + whitespace + "*(?:value|" + booleans + ")");
          } // Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+


          if (!el.querySelectorAll("[id~=" + expando + "-]").length) {
            rbuggyQSA.push("~=");
          } // Support: IE 11+, Edge 15 - 18+
          // IE 11/Edge don't find elements on a `[name='']` query in some cases.
          // Adding a temporary attribute to the document before the selection works
          // around the issue.
          // Interestingly, IE 10 & older don't seem to have the issue.


          input = document.createElement("input");
          input.setAttribute("name", "");
          el.appendChild(input);

          if (!el.querySelectorAll("[name='']").length) {
            rbuggyQSA.push("\\[" + whitespace + "*name" + whitespace + "*=" + whitespace + "*(?:''|\"\")");
          } // Webkit/Opera - :checked should return selected option elements
          // http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
          // IE8 throws error here and will not see later tests


          if (!el.querySelectorAll(":checked").length) {
            rbuggyQSA.push(":checked");
          } // Support: Safari 8+, iOS 8+
          // https://bugs.webkit.org/show_bug.cgi?id=136851
          // In-page `selector#id sibling-combinator selector` fails


          if (!el.querySelectorAll("a#" + expando + "+*").length) {
            rbuggyQSA.push(".#.+[+~]");
          } // Support: Firefox <=3.6 - 5 only
          // Old Firefox doesn't throw on a badly-escaped identifier.


          el.querySelectorAll("\\\f");
          rbuggyQSA.push("[\\r\\n\\f]");
        });
        assert(function (el) {
          el.innerHTML = "<a href='' disabled='disabled'></a>" + "<select disabled='disabled'><option/></select>"; // Support: Windows 8 Native Apps
          // The type and name attributes are restricted during .innerHTML assignment

          var input = document.createElement("input");
          input.setAttribute("type", "hidden");
          el.appendChild(input).setAttribute("name", "D"); // Support: IE8
          // Enforce case-sensitivity of name attribute

          if (el.querySelectorAll("[name=d]").length) {
            rbuggyQSA.push("name" + whitespace + "*[*^$|!~]?=");
          } // FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
          // IE8 throws error here and will not see later tests


          if (el.querySelectorAll(":enabled").length !== 2) {
            rbuggyQSA.push(":enabled", ":disabled");
          } // Support: IE9-11+
          // IE's :disabled selector does not pick up the children of disabled fieldsets


          docElem.appendChild(el).disabled = true;

          if (el.querySelectorAll(":disabled").length !== 2) {
            rbuggyQSA.push(":enabled", ":disabled");
          } // Support: Opera 10 - 11 only
          // Opera 10-11 does not throw on post-comma invalid pseudos


          el.querySelectorAll("*,:x");
          rbuggyQSA.push(",.*:");
        });
      }

      if (support.matchesSelector = rnative.test(matches = docElem.matches || docElem.webkitMatchesSelector || docElem.mozMatchesSelector || docElem.oMatchesSelector || docElem.msMatchesSelector)) {
        assert(function (el) {
          // Check to see if it's possible to do matchesSelector
          // on a disconnected node (IE 9)
          support.disconnectedMatch = matches.call(el, "*"); // This should fail with an exception
          // Gecko does not error, returns false instead

          matches.call(el, "[s!='']:x");
          rbuggyMatches.push("!=", pseudos);
        });
      }

      rbuggyQSA = rbuggyQSA.length && new RegExp(rbuggyQSA.join("|"));
      rbuggyMatches = rbuggyMatches.length && new RegExp(rbuggyMatches.join("|"));
      /* Contains
      ---------------------------------------------------------------------- */

      hasCompare = rnative.test(docElem.compareDocumentPosition); // Element contains another
      // Purposefully self-exclusive
      // As in, an element does not contain itself

      contains = hasCompare || rnative.test(docElem.contains) ? function (a, b) {
        var adown = a.nodeType === 9 ? a.documentElement : a,
            bup = b && b.parentNode;
        return a === bup || !!(bup && bup.nodeType === 1 && (adown.contains ? adown.contains(bup) : a.compareDocumentPosition && a.compareDocumentPosition(bup) & 16));
      } : function (a, b) {
        if (b) {
          while (b = b.parentNode) {
            if (b === a) {
              return true;
            }
          }
        }

        return false;
      };
      /* Sorting
      ---------------------------------------------------------------------- */
      // Document order sorting

      sortOrder = hasCompare ? function (a, b) {
        // Flag for duplicate removal
        if (a === b) {
          hasDuplicate = true;
          return 0;
        } // Sort on method existence if only one input has compareDocumentPosition


        var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;

        if (compare) {
          return compare;
        } // Calculate position if both inputs belong to the same document
        // Support: IE 11+, Edge 17 - 18+
        // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
        // two documents; shallow comparisons work.
        // eslint-disable-next-line eqeqeq


        compare = (a.ownerDocument || a) == (b.ownerDocument || b) ? a.compareDocumentPosition(b) : // Otherwise we know they are disconnected
        1; // Disconnected nodes

        if (compare & 1 || !support.sortDetached && b.compareDocumentPosition(a) === compare) {
          // Choose the first element that is related to our preferred document
          // Support: IE 11+, Edge 17 - 18+
          // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
          // two documents; shallow comparisons work.
          // eslint-disable-next-line eqeqeq
          if (a == document || a.ownerDocument == preferredDoc && contains(preferredDoc, a)) {
            return -1;
          } // Support: IE 11+, Edge 17 - 18+
          // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
          // two documents; shallow comparisons work.
          // eslint-disable-next-line eqeqeq


          if (b == document || b.ownerDocument == preferredDoc && contains(preferredDoc, b)) {
            return 1;
          } // Maintain original order


          return sortInput ? indexOf(sortInput, a) - indexOf(sortInput, b) : 0;
        }

        return compare & 4 ? -1 : 1;
      } : function (a, b) {
        // Exit early if the nodes are identical
        if (a === b) {
          hasDuplicate = true;
          return 0;
        }

        var cur,
            i = 0,
            aup = a.parentNode,
            bup = b.parentNode,
            ap = [a],
            bp = [b]; // Parentless nodes are either documents or disconnected

        if (!aup || !bup) {
          // Support: IE 11+, Edge 17 - 18+
          // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
          // two documents; shallow comparisons work.

          /* eslint-disable eqeqeq */
          return a == document ? -1 : b == document ? 1 :
          /* eslint-enable eqeqeq */
          aup ? -1 : bup ? 1 : sortInput ? indexOf(sortInput, a) - indexOf(sortInput, b) : 0; // If the nodes are siblings, we can do a quick check
        } else if (aup === bup) {
          return siblingCheck(a, b);
        } // Otherwise we need full lists of their ancestors for comparison


        cur = a;

        while (cur = cur.parentNode) {
          ap.unshift(cur);
        }

        cur = b;

        while (cur = cur.parentNode) {
          bp.unshift(cur);
        } // Walk down the tree looking for a discrepancy


        while (ap[i] === bp[i]) {
          i++;
        }

        return i ? // Do a sibling check if the nodes have a common ancestor
        siblingCheck(ap[i], bp[i]) : // Otherwise nodes in our document sort first
        // Support: IE 11+, Edge 17 - 18+
        // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
        // two documents; shallow comparisons work.

        /* eslint-disable eqeqeq */
        ap[i] == preferredDoc ? -1 : bp[i] == preferredDoc ? 1 :
        /* eslint-enable eqeqeq */
        0;
      };
      return document;
    };

    Sizzle.matches = function (expr, elements) {
      return Sizzle(expr, null, null, elements);
    };

    Sizzle.matchesSelector = function (elem, expr) {
      setDocument(elem);

      if (support.matchesSelector && documentIsHTML && !nonnativeSelectorCache[expr + " "] && (!rbuggyMatches || !rbuggyMatches.test(expr)) && (!rbuggyQSA || !rbuggyQSA.test(expr))) {
        try {
          var ret = matches.call(elem, expr); // IE 9's matchesSelector returns false on disconnected nodes

          if (ret || support.disconnectedMatch || // As well, disconnected nodes are said to be in a document
          // fragment in IE 9
          elem.document && elem.document.nodeType !== 11) {
            return ret;
          }
        } catch (e) {
          nonnativeSelectorCache(expr, true);
        }
      }

      return Sizzle(expr, document, null, [elem]).length > 0;
    };

    Sizzle.contains = function (context, elem) {
      // Set document vars if needed
      // Support: IE 11+, Edge 17 - 18+
      // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
      // two documents; shallow comparisons work.
      // eslint-disable-next-line eqeqeq
      if ((context.ownerDocument || context) != document) {
        setDocument(context);
      }

      return contains(context, elem);
    };

    Sizzle.attr = function (elem, name) {
      // Set document vars if needed
      // Support: IE 11+, Edge 17 - 18+
      // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
      // two documents; shallow comparisons work.
      // eslint-disable-next-line eqeqeq
      if ((elem.ownerDocument || elem) != document) {
        setDocument(elem);
      }

      var fn = Expr.attrHandle[name.toLowerCase()],
          // Don't get fooled by Object.prototype properties (jQuery #13807)
      val = fn && hasOwn.call(Expr.attrHandle, name.toLowerCase()) ? fn(elem, name, !documentIsHTML) : undefined;
      return val !== undefined ? val : support.attributes || !documentIsHTML ? elem.getAttribute(name) : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null;
    };

    Sizzle.escape = function (sel) {
      return (sel + "").replace(rcssescape, fcssescape);
    };

    Sizzle.error = function (msg) {
      throw new Error("Syntax error, unrecognized expression: " + msg);
    };
    /**
     * Document sorting and removing duplicates
     * @param {ArrayLike} results
     */


    Sizzle.uniqueSort = function (results) {
      var elem,
          duplicates = [],
          j = 0,
          i = 0; // Unless we *know* we can detect duplicates, assume their presence

      hasDuplicate = !support.detectDuplicates;
      sortInput = !support.sortStable && results.slice(0);
      results.sort(sortOrder);

      if (hasDuplicate) {
        while (elem = results[i++]) {
          if (elem === results[i]) {
            j = duplicates.push(i);
          }
        }

        while (j--) {
          results.splice(duplicates[j], 1);
        }
      } // Clear input after sorting to release objects
      // See https://github.com/jquery/sizzle/pull/225


      sortInput = null;
      return results;
    };
    /**
     * Utility function for retrieving the text value of an array of DOM nodes
     * @param {Array|Element} elem
     */


    getText = Sizzle.getText = function (elem) {
      var node,
          ret = "",
          i = 0,
          nodeType = elem.nodeType;

      if (!nodeType) {
        // If no nodeType, this is expected to be an array
        while (node = elem[i++]) {
          // Do not traverse comment nodes
          ret += getText(node);
        }
      } else if (nodeType === 1 || nodeType === 9 || nodeType === 11) {
        // Use textContent for elements
        // innerText usage removed for consistency of new lines (jQuery #11153)
        if (typeof elem.textContent === "string") {
          return elem.textContent;
        } else {
          // Traverse its children
          for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
            ret += getText(elem);
          }
        }
      } else if (nodeType === 3 || nodeType === 4) {
        return elem.nodeValue;
      } // Do not include comment or processing instruction nodes


      return ret;
    };

    Expr = Sizzle.selectors = {
      // Can be adjusted by the user
      cacheLength: 50,
      createPseudo: markFunction,
      match: matchExpr,
      attrHandle: {},
      find: {},
      relative: {
        ">": {
          dir: "parentNode",
          first: true
        },
        " ": {
          dir: "parentNode"
        },
        "+": {
          dir: "previousSibling",
          first: true
        },
        "~": {
          dir: "previousSibling"
        }
      },
      preFilter: {
        "ATTR": function ATTR(match) {
          match[1] = match[1].replace(runescape, funescape); // Move the given value to match[3] whether quoted or unquoted

          match[3] = (match[3] || match[4] || match[5] || "").replace(runescape, funescape);

          if (match[2] === "~=") {
            match[3] = " " + match[3] + " ";
          }

          return match.slice(0, 4);
        },
        "CHILD": function CHILD(match) {
          /* matches from matchExpr["CHILD"]
          	1 type (only|nth|...)
          	2 what (child|of-type)
          	3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
          	4 xn-component of xn+y argument ([+-]?\d*n|)
          	5 sign of xn-component
          	6 x of xn-component
          	7 sign of y-component
          	8 y of y-component
          */
          match[1] = match[1].toLowerCase();

          if (match[1].slice(0, 3) === "nth") {
            // nth-* requires argument
            if (!match[3]) {
              Sizzle.error(match[0]);
            } // numeric x and y parameters for Expr.filter.CHILD
            // remember that false/true cast respectively to 0/1


            match[4] = +(match[4] ? match[5] + (match[6] || 1) : 2 * (match[3] === "even" || match[3] === "odd"));
            match[5] = +(match[7] + match[8] || match[3] === "odd"); // other types prohibit arguments
          } else if (match[3]) {
            Sizzle.error(match[0]);
          }

          return match;
        },
        "PSEUDO": function PSEUDO(match) {
          var excess,
              unquoted = !match[6] && match[2];

          if (matchExpr["CHILD"].test(match[0])) {
            return null;
          } // Accept quoted arguments as-is


          if (match[3]) {
            match[2] = match[4] || match[5] || ""; // Strip excess characters from unquoted arguments
          } else if (unquoted && rpseudo.test(unquoted) && ( // Get excess from tokenize (recursively)
          excess = tokenize(unquoted, true)) && ( // advance to the next closing parenthesis
          excess = unquoted.indexOf(")", unquoted.length - excess) - unquoted.length)) {
            // excess is a negative index
            match[0] = match[0].slice(0, excess);
            match[2] = unquoted.slice(0, excess);
          } // Return only captures needed by the pseudo filter method (type and argument)


          return match.slice(0, 3);
        }
      },
      filter: {
        "TAG": function TAG(nodeNameSelector) {
          var nodeName = nodeNameSelector.replace(runescape, funescape).toLowerCase();
          return nodeNameSelector === "*" ? function () {
            return true;
          } : function (elem) {
            return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
          };
        },
        "CLASS": function CLASS(className) {
          var pattern = classCache[className + " "];
          return pattern || (pattern = new RegExp("(^|" + whitespace + ")" + className + "(" + whitespace + "|$)")) && classCache(className, function (elem) {
            return pattern.test(typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "");
          });
        },
        "ATTR": function ATTR(name, operator, check) {
          return function (elem) {
            var result = Sizzle.attr(elem, name);

            if (result == null) {
              return operator === "!=";
            }

            if (!operator) {
              return true;
            }

            result += "";
            /* eslint-disable max-len */

            return operator === "=" ? result === check : operator === "!=" ? result !== check : operator === "^=" ? check && result.indexOf(check) === 0 : operator === "*=" ? check && result.indexOf(check) > -1 : operator === "$=" ? check && result.slice(-check.length) === check : operator === "~=" ? (" " + result.replace(rwhitespace, " ") + " ").indexOf(check) > -1 : operator === "|=" ? result === check || result.slice(0, check.length + 1) === check + "-" : false;
            /* eslint-enable max-len */
          };
        },
        "CHILD": function CHILD(type, what, _argument, first, last) {
          var simple = type.slice(0, 3) !== "nth",
              forward = type.slice(-4) !== "last",
              ofType = what === "of-type";
          return first === 1 && last === 0 ? // Shortcut for :nth-*(n)
          function (elem) {
            return !!elem.parentNode;
          } : function (elem, _context, xml) {
            var cache,
                uniqueCache,
                outerCache,
                node,
                nodeIndex,
                start,
                dir = simple !== forward ? "nextSibling" : "previousSibling",
                parent = elem.parentNode,
                name = ofType && elem.nodeName.toLowerCase(),
                useCache = !xml && !ofType,
                diff = false;

            if (parent) {
              // :(first|last|only)-(child|of-type)
              if (simple) {
                while (dir) {
                  node = elem;

                  while (node = node[dir]) {
                    if (ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) {
                      return false;
                    }
                  } // Reverse direction for :only-* (if we haven't yet done so)


                  start = dir = type === "only" && !start && "nextSibling";
                }

                return true;
              }

              start = [forward ? parent.firstChild : parent.lastChild]; // non-xml :nth-child(...) stores cache data on `parent`

              if (forward && useCache) {
                // Seek `elem` from a previously-cached index
                // ...in a gzip-friendly way
                node = parent;
                outerCache = node[expando] || (node[expando] = {}); // Support: IE <9 only
                // Defend against cloned attroperties (jQuery gh-1709)

                uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});
                cache = uniqueCache[type] || [];
                nodeIndex = cache[0] === dirruns && cache[1];
                diff = nodeIndex && cache[2];
                node = nodeIndex && parent.childNodes[nodeIndex];

                while (node = ++nodeIndex && node && node[dir] || ( // Fallback to seeking `elem` from the start
                diff = nodeIndex = 0) || start.pop()) {
                  // When found, cache indexes on `parent` and break
                  if (node.nodeType === 1 && ++diff && node === elem) {
                    uniqueCache[type] = [dirruns, nodeIndex, diff];
                    break;
                  }
                }
              } else {
                // Use previously-cached element index if available
                if (useCache) {
                  // ...in a gzip-friendly way
                  node = elem;
                  outerCache = node[expando] || (node[expando] = {}); // Support: IE <9 only
                  // Defend against cloned attroperties (jQuery gh-1709)

                  uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});
                  cache = uniqueCache[type] || [];
                  nodeIndex = cache[0] === dirruns && cache[1];
                  diff = nodeIndex;
                } // xml :nth-child(...)
                // or :nth-last-child(...) or :nth(-last)?-of-type(...)


                if (diff === false) {
                  // Use the same loop as above to seek `elem` from the start
                  while (node = ++nodeIndex && node && node[dir] || (diff = nodeIndex = 0) || start.pop()) {
                    if ((ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) && ++diff) {
                      // Cache the index of each encountered element
                      if (useCache) {
                        outerCache = node[expando] || (node[expando] = {}); // Support: IE <9 only
                        // Defend against cloned attroperties (jQuery gh-1709)

                        uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});
                        uniqueCache[type] = [dirruns, diff];
                      }

                      if (node === elem) {
                        break;
                      }
                    }
                  }
                }
              } // Incorporate the offset, then check against cycle size


              diff -= last;
              return diff === first || diff % first === 0 && diff / first >= 0;
            }
          };
        },
        "PSEUDO": function PSEUDO(pseudo, argument) {
          // pseudo-class names are case-insensitive
          // http://www.w3.org/TR/selectors/#pseudo-classes
          // Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
          // Remember that setFilters inherits from pseudos
          var args,
              fn = Expr.pseudos[pseudo] || Expr.setFilters[pseudo.toLowerCase()] || Sizzle.error("unsupported pseudo: " + pseudo); // The user may use createPseudo to indicate that
          // arguments are needed to create the filter function
          // just as Sizzle does

          if (fn[expando]) {
            return fn(argument);
          } // But maintain support for old signatures


          if (fn.length > 1) {
            args = [pseudo, pseudo, "", argument];
            return Expr.setFilters.hasOwnProperty(pseudo.toLowerCase()) ? markFunction(function (seed, matches) {
              var idx,
                  matched = fn(seed, argument),
                  i = matched.length;

              while (i--) {
                idx = indexOf(seed, matched[i]);
                seed[idx] = !(matches[idx] = matched[i]);
              }
            }) : function (elem) {
              return fn(elem, 0, args);
            };
          }

          return fn;
        }
      },
      pseudos: {
        // Potentially complex pseudos
        "not": markFunction(function (selector) {
          // Trim the selector passed to compile
          // to avoid treating leading and trailing
          // spaces as combinators
          var input = [],
              results = [],
              matcher = compile(selector.replace(rtrim, "$1"));
          return matcher[expando] ? markFunction(function (seed, matches, _context, xml) {
            var elem,
                unmatched = matcher(seed, null, xml, []),
                i = seed.length; // Match elements unmatched by `matcher`

            while (i--) {
              if (elem = unmatched[i]) {
                seed[i] = !(matches[i] = elem);
              }
            }
          }) : function (elem, _context, xml) {
            input[0] = elem;
            matcher(input, null, xml, results); // Don't keep the element (issue #299)

            input[0] = null;
            return !results.pop();
          };
        }),
        "has": markFunction(function (selector) {
          return function (elem) {
            return Sizzle(selector, elem).length > 0;
          };
        }),
        "contains": markFunction(function (text) {
          text = text.replace(runescape, funescape);
          return function (elem) {
            return (elem.textContent || getText(elem)).indexOf(text) > -1;
          };
        }),
        // "Whether an element is represented by a :lang() selector
        // is based solely on the element's language value
        // being equal to the identifier C,
        // or beginning with the identifier C immediately followed by "-".
        // The matching of C against the element's language value is performed case-insensitively.
        // The identifier C does not have to be a valid language name."
        // http://www.w3.org/TR/selectors/#lang-pseudo
        "lang": markFunction(function (lang) {
          // lang value must be a valid identifier
          if (!ridentifier.test(lang || "")) {
            Sizzle.error("unsupported lang: " + lang);
          }

          lang = lang.replace(runescape, funescape).toLowerCase();
          return function (elem) {
            var elemLang;

            do {
              if (elemLang = documentIsHTML ? elem.lang : elem.getAttribute("xml:lang") || elem.getAttribute("lang")) {
                elemLang = elemLang.toLowerCase();
                return elemLang === lang || elemLang.indexOf(lang + "-") === 0;
              }
            } while ((elem = elem.parentNode) && elem.nodeType === 1);

            return false;
          };
        }),
        // Miscellaneous
        "target": function target(elem) {
          var hash = window.location && window.location.hash;
          return hash && hash.slice(1) === elem.id;
        },
        "root": function root(elem) {
          return elem === docElem;
        },
        "focus": function focus(elem) {
          return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
        },
        // Boolean properties
        "enabled": createDisabledPseudo(false),
        "disabled": createDisabledPseudo(true),
        "checked": function checked(elem) {
          // In CSS3, :checked should return both checked and selected elements
          // http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
          var nodeName = elem.nodeName.toLowerCase();
          return nodeName === "input" && !!elem.checked || nodeName === "option" && !!elem.selected;
        },
        "selected": function selected(elem) {
          // Accessing this property makes selected-by-default
          // options in Safari work properly
          if (elem.parentNode) {
            // eslint-disable-next-line no-unused-expressions
            elem.parentNode.selectedIndex;
          }

          return elem.selected === true;
        },
        // Contents
        "empty": function empty(elem) {
          // http://www.w3.org/TR/selectors/#empty-pseudo
          // :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
          //   but not by others (comment: 8; processing instruction: 7; etc.)
          // nodeType < 6 works because attributes (2) do not appear as children
          for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
            if (elem.nodeType < 6) {
              return false;
            }
          }

          return true;
        },
        "parent": function parent(elem) {
          return !Expr.pseudos["empty"](elem);
        },
        // Element/input types
        "header": function header(elem) {
          return rheader.test(elem.nodeName);
        },
        "input": function input(elem) {
          return rinputs.test(elem.nodeName);
        },
        "button": function button(elem) {
          var name = elem.nodeName.toLowerCase();
          return name === "input" && elem.type === "button" || name === "button";
        },
        "text": function text(elem) {
          var attr;
          return elem.nodeName.toLowerCase() === "input" && elem.type === "text" && ( // Support: IE<8
          // New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
          (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text");
        },
        // Position-in-collection
        "first": createPositionalPseudo(function () {
          return [0];
        }),
        "last": createPositionalPseudo(function (_matchIndexes, length) {
          return [length - 1];
        }),
        "eq": createPositionalPseudo(function (_matchIndexes, length, argument) {
          return [argument < 0 ? argument + length : argument];
        }),
        "even": createPositionalPseudo(function (matchIndexes, length) {
          var i = 0;

          for (; i < length; i += 2) {
            matchIndexes.push(i);
          }

          return matchIndexes;
        }),
        "odd": createPositionalPseudo(function (matchIndexes, length) {
          var i = 1;

          for (; i < length; i += 2) {
            matchIndexes.push(i);
          }

          return matchIndexes;
        }),
        "lt": createPositionalPseudo(function (matchIndexes, length, argument) {
          var i = argument < 0 ? argument + length : argument > length ? length : argument;

          for (; --i >= 0;) {
            matchIndexes.push(i);
          }

          return matchIndexes;
        }),
        "gt": createPositionalPseudo(function (matchIndexes, length, argument) {
          var i = argument < 0 ? argument + length : argument;

          for (; ++i < length;) {
            matchIndexes.push(i);
          }

          return matchIndexes;
        })
      }
    };
    Expr.pseudos["nth"] = Expr.pseudos["eq"]; // Add button/input type pseudos

    for (i in {
      radio: true,
      checkbox: true,
      file: true,
      password: true,
      image: true
    }) {
      Expr.pseudos[i] = createInputPseudo(i);
    }

    for (i in {
      submit: true,
      reset: true
    }) {
      Expr.pseudos[i] = createButtonPseudo(i);
    } // Easy API for creating new setFilters


    function setFilters() {}

    setFilters.prototype = Expr.filters = Expr.pseudos;
    Expr.setFilters = new setFilters();

    tokenize = Sizzle.tokenize = function (selector, parseOnly) {
      var matched,
          match,
          tokens,
          type,
          soFar,
          groups,
          preFilters,
          cached = tokenCache[selector + " "];

      if (cached) {
        return parseOnly ? 0 : cached.slice(0);
      }

      soFar = selector;
      groups = [];
      preFilters = Expr.preFilter;

      while (soFar) {
        // Comma and first run
        if (!matched || (match = rcomma.exec(soFar))) {
          if (match) {
            // Don't consume trailing commas as valid
            soFar = soFar.slice(match[0].length) || soFar;
          }

          groups.push(tokens = []);
        }

        matched = false; // Combinators

        if (match = rcombinators.exec(soFar)) {
          matched = match.shift();
          tokens.push({
            value: matched,
            // Cast descendant combinators to space
            type: match[0].replace(rtrim, " ")
          });
          soFar = soFar.slice(matched.length);
        } // Filters


        for (type in Expr.filter) {
          if ((match = matchExpr[type].exec(soFar)) && (!preFilters[type] || (match = preFilters[type](match)))) {
            matched = match.shift();
            tokens.push({
              value: matched,
              type: type,
              matches: match
            });
            soFar = soFar.slice(matched.length);
          }
        }

        if (!matched) {
          break;
        }
      } // Return the length of the invalid excess
      // if we're just parsing
      // Otherwise, throw an error or return tokens


      return parseOnly ? soFar.length : soFar ? Sizzle.error(selector) : // Cache the tokens
      tokenCache(selector, groups).slice(0);
    };

    function toSelector(tokens) {
      var i = 0,
          len = tokens.length,
          selector = "";

      for (; i < len; i++) {
        selector += tokens[i].value;
      }

      return selector;
    }

    function addCombinator(matcher, combinator, base) {
      var dir = combinator.dir,
          skip = combinator.next,
          key = skip || dir,
          checkNonElements = base && key === "parentNode",
          doneName = done++;
      return combinator.first ? // Check against closest ancestor/preceding element
      function (elem, context, xml) {
        while (elem = elem[dir]) {
          if (elem.nodeType === 1 || checkNonElements) {
            return matcher(elem, context, xml);
          }
        }

        return false;
      } : // Check against all ancestor/preceding elements
      function (elem, context, xml) {
        var oldCache,
            uniqueCache,
            outerCache,
            newCache = [dirruns, doneName]; // We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching

        if (xml) {
          while (elem = elem[dir]) {
            if (elem.nodeType === 1 || checkNonElements) {
              if (matcher(elem, context, xml)) {
                return true;
              }
            }
          }
        } else {
          while (elem = elem[dir]) {
            if (elem.nodeType === 1 || checkNonElements) {
              outerCache = elem[expando] || (elem[expando] = {}); // Support: IE <9 only
              // Defend against cloned attroperties (jQuery gh-1709)

              uniqueCache = outerCache[elem.uniqueID] || (outerCache[elem.uniqueID] = {});

              if (skip && skip === elem.nodeName.toLowerCase()) {
                elem = elem[dir] || elem;
              } else if ((oldCache = uniqueCache[key]) && oldCache[0] === dirruns && oldCache[1] === doneName) {
                // Assign to newCache so results back-propagate to previous elements
                return newCache[2] = oldCache[2];
              } else {
                // Reuse newcache so results back-propagate to previous elements
                uniqueCache[key] = newCache; // A match means we're done; a fail means we have to keep checking

                if (newCache[2] = matcher(elem, context, xml)) {
                  return true;
                }
              }
            }
          }
        }

        return false;
      };
    }

    function elementMatcher(matchers) {
      return matchers.length > 1 ? function (elem, context, xml) {
        var i = matchers.length;

        while (i--) {
          if (!matchers[i](elem, context, xml)) {
            return false;
          }
        }

        return true;
      } : matchers[0];
    }

    function multipleContexts(selector, contexts, results) {
      var i = 0,
          len = contexts.length;

      for (; i < len; i++) {
        Sizzle(selector, contexts[i], results);
      }

      return results;
    }

    function condense(unmatched, map, filter, context, xml) {
      var elem,
          newUnmatched = [],
          i = 0,
          len = unmatched.length,
          mapped = map != null;

      for (; i < len; i++) {
        if (elem = unmatched[i]) {
          if (!filter || filter(elem, context, xml)) {
            newUnmatched.push(elem);

            if (mapped) {
              map.push(i);
            }
          }
        }
      }

      return newUnmatched;
    }

    function setMatcher(preFilter, selector, matcher, postFilter, postFinder, postSelector) {
      if (postFilter && !postFilter[expando]) {
        postFilter = setMatcher(postFilter);
      }

      if (postFinder && !postFinder[expando]) {
        postFinder = setMatcher(postFinder, postSelector);
      }

      return markFunction(function (seed, results, context, xml) {
        var temp,
            i,
            elem,
            preMap = [],
            postMap = [],
            preexisting = results.length,
            // Get initial elements from seed or context
        elems = seed || multipleContexts(selector || "*", context.nodeType ? [context] : context, []),
            // Prefilter to get matcher input, preserving a map for seed-results synchronization
        matcherIn = preFilter && (seed || !selector) ? condense(elems, preMap, preFilter, context, xml) : elems,
            matcherOut = matcher ? // If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
        postFinder || (seed ? preFilter : preexisting || postFilter) ? // ...intermediate processing is necessary
        [] : // ...otherwise use results directly
        results : matcherIn; // Find primary matches

        if (matcher) {
          matcher(matcherIn, matcherOut, context, xml);
        } // Apply postFilter


        if (postFilter) {
          temp = condense(matcherOut, postMap);
          postFilter(temp, [], context, xml); // Un-match failing elements by moving them back to matcherIn

          i = temp.length;

          while (i--) {
            if (elem = temp[i]) {
              matcherOut[postMap[i]] = !(matcherIn[postMap[i]] = elem);
            }
          }
        }

        if (seed) {
          if (postFinder || preFilter) {
            if (postFinder) {
              // Get the final matcherOut by condensing this intermediate into postFinder contexts
              temp = [];
              i = matcherOut.length;

              while (i--) {
                if (elem = matcherOut[i]) {
                  // Restore matcherIn since elem is not yet a final match
                  temp.push(matcherIn[i] = elem);
                }
              }

              postFinder(null, matcherOut = [], temp, xml);
            } // Move matched elements from seed to results to keep them synchronized


            i = matcherOut.length;

            while (i--) {
              if ((elem = matcherOut[i]) && (temp = postFinder ? indexOf(seed, elem) : preMap[i]) > -1) {
                seed[temp] = !(results[temp] = elem);
              }
            }
          } // Add elements to results, through postFinder if defined

        } else {
          matcherOut = condense(matcherOut === results ? matcherOut.splice(preexisting, matcherOut.length) : matcherOut);

          if (postFinder) {
            postFinder(null, results, matcherOut, xml);
          } else {
            push.apply(results, matcherOut);
          }
        }
      });
    }

    function matcherFromTokens(tokens) {
      var checkContext,
          matcher,
          j,
          len = tokens.length,
          leadingRelative = Expr.relative[tokens[0].type],
          implicitRelative = leadingRelative || Expr.relative[" "],
          i = leadingRelative ? 1 : 0,
          // The foundational matcher ensures that elements are reachable from top-level context(s)
      matchContext = addCombinator(function (elem) {
        return elem === checkContext;
      }, implicitRelative, true),
          matchAnyContext = addCombinator(function (elem) {
        return indexOf(checkContext, elem) > -1;
      }, implicitRelative, true),
          matchers = [function (elem, context, xml) {
        var ret = !leadingRelative && (xml || context !== outermostContext) || ((checkContext = context).nodeType ? matchContext(elem, context, xml) : matchAnyContext(elem, context, xml)); // Avoid hanging onto element (issue #299)

        checkContext = null;
        return ret;
      }];

      for (; i < len; i++) {
        if (matcher = Expr.relative[tokens[i].type]) {
          matchers = [addCombinator(elementMatcher(matchers), matcher)];
        } else {
          matcher = Expr.filter[tokens[i].type].apply(null, tokens[i].matches); // Return special upon seeing a positional matcher

          if (matcher[expando]) {
            // Find the next relative operator (if any) for proper handling
            j = ++i;

            for (; j < len; j++) {
              if (Expr.relative[tokens[j].type]) {
                break;
              }
            }

            return setMatcher(i > 1 && elementMatcher(matchers), i > 1 && toSelector( // If the preceding token was a descendant combinator, insert an implicit any-element `*`
            tokens.slice(0, i - 1).concat({
              value: tokens[i - 2].type === " " ? "*" : ""
            })).replace(rtrim, "$1"), matcher, i < j && matcherFromTokens(tokens.slice(i, j)), j < len && matcherFromTokens(tokens = tokens.slice(j)), j < len && toSelector(tokens));
          }

          matchers.push(matcher);
        }
      }

      return elementMatcher(matchers);
    }

    function matcherFromGroupMatchers(elementMatchers, setMatchers) {
      var bySet = setMatchers.length > 0,
          byElement = elementMatchers.length > 0,
          superMatcher = function superMatcher(seed, context, xml, results, outermost) {
        var elem,
            j,
            matcher,
            matchedCount = 0,
            i = "0",
            unmatched = seed && [],
            setMatched = [],
            contextBackup = outermostContext,
            // We must always have either seed elements or outermost context
        elems = seed || byElement && Expr.find["TAG"]("*", outermost),
            // Use integer dirruns iff this is the outermost matcher
        dirrunsUnique = dirruns += contextBackup == null ? 1 : Math.random() || 0.1,
            len = elems.length;

        if (outermost) {
          // Support: IE 11+, Edge 17 - 18+
          // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
          // two documents; shallow comparisons work.
          // eslint-disable-next-line eqeqeq
          outermostContext = context == document || context || outermost;
        } // Add elements passing elementMatchers directly to results
        // Support: IE<9, Safari
        // Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id


        for (; i !== len && (elem = elems[i]) != null; i++) {
          if (byElement && elem) {
            j = 0; // Support: IE 11+, Edge 17 - 18+
            // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
            // two documents; shallow comparisons work.
            // eslint-disable-next-line eqeqeq

            if (!context && elem.ownerDocument != document) {
              setDocument(elem);
              xml = !documentIsHTML;
            }

            while (matcher = elementMatchers[j++]) {
              if (matcher(elem, context || document, xml)) {
                results.push(elem);
                break;
              }
            }

            if (outermost) {
              dirruns = dirrunsUnique;
            }
          } // Track unmatched elements for set filters


          if (bySet) {
            // They will have gone through all possible matchers
            if (elem = !matcher && elem) {
              matchedCount--;
            } // Lengthen the array for every element, matched or not


            if (seed) {
              unmatched.push(elem);
            }
          }
        } // `i` is now the count of elements visited above, and adding it to `matchedCount`
        // makes the latter nonnegative.


        matchedCount += i; // Apply set filters to unmatched elements
        // NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
        // equals `i`), unless we didn't visit _any_ elements in the above loop because we have
        // no element matchers and no seed.
        // Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
        // case, which will result in a "00" `matchedCount` that differs from `i` but is also
        // numerically zero.

        if (bySet && i !== matchedCount) {
          j = 0;

          while (matcher = setMatchers[j++]) {
            matcher(unmatched, setMatched, context, xml);
          }

          if (seed) {
            // Reintegrate element matches to eliminate the need for sorting
            if (matchedCount > 0) {
              while (i--) {
                if (!(unmatched[i] || setMatched[i])) {
                  setMatched[i] = pop.call(results);
                }
              }
            } // Discard index placeholder values to get only actual matches


            setMatched = condense(setMatched);
          } // Add matches to results


          push.apply(results, setMatched); // Seedless set matches succeeding multiple successful matchers stipulate sorting

          if (outermost && !seed && setMatched.length > 0 && matchedCount + setMatchers.length > 1) {
            Sizzle.uniqueSort(results);
          }
        } // Override manipulation of globals by nested matchers


        if (outermost) {
          dirruns = dirrunsUnique;
          outermostContext = contextBackup;
        }

        return unmatched;
      };

      return bySet ? markFunction(superMatcher) : superMatcher;
    }

    compile = Sizzle.compile = function (selector, match
    /* Internal Use Only */
    ) {
      var i,
          setMatchers = [],
          elementMatchers = [],
          cached = compilerCache[selector + " "];

      if (!cached) {
        // Generate a function of recursive functions that can be used to check each element
        if (!match) {
          match = tokenize(selector);
        }

        i = match.length;

        while (i--) {
          cached = matcherFromTokens(match[i]);

          if (cached[expando]) {
            setMatchers.push(cached);
          } else {
            elementMatchers.push(cached);
          }
        } // Cache the compiled function


        cached = compilerCache(selector, matcherFromGroupMatchers(elementMatchers, setMatchers)); // Save selector and tokenization

        cached.selector = selector;
      }

      return cached;
    };
    /**
     * A low-level selection function that works with Sizzle's compiled
     *  selector functions
     * @param {String|Function} selector A selector or a pre-compiled
     *  selector function built with Sizzle.compile
     * @param {Element} context
     * @param {Array} [results]
     * @param {Array} [seed] A set of elements to match against
     */


    select = Sizzle.select = function (selector, context, results, seed) {
      var i,
          tokens,
          token,
          type,
          find,
          compiled = typeof selector === "function" && selector,
          match = !seed && tokenize(selector = compiled.selector || selector);
      results = results || []; // Try to minimize operations if there is only one selector in the list and no seed
      // (the latter of which guarantees us context)

      if (match.length === 1) {
        // Reduce context if the leading compound selector is an ID
        tokens = match[0] = match[0].slice(0);

        if (tokens.length > 2 && (token = tokens[0]).type === "ID" && context.nodeType === 9 && documentIsHTML && Expr.relative[tokens[1].type]) {
          context = (Expr.find["ID"](token.matches[0].replace(runescape, funescape), context) || [])[0];

          if (!context) {
            return results; // Precompiled matchers will still verify ancestry, so step up a level
          } else if (compiled) {
            context = context.parentNode;
          }

          selector = selector.slice(tokens.shift().value.length);
        } // Fetch a seed set for right-to-left matching


        i = matchExpr["needsContext"].test(selector) ? 0 : tokens.length;

        while (i--) {
          token = tokens[i]; // Abort if we hit a combinator

          if (Expr.relative[type = token.type]) {
            break;
          }

          if (find = Expr.find[type]) {
            // Search, expanding context for leading sibling combinators
            if (seed = find(token.matches[0].replace(runescape, funescape), rsibling.test(tokens[0].type) && testContext(context.parentNode) || context)) {
              // If seed is empty or no tokens remain, we can return early
              tokens.splice(i, 1);
              selector = seed.length && toSelector(tokens);

              if (!selector) {
                push.apply(results, seed);
                return results;
              }

              break;
            }
          }
        }
      } // Compile and execute a filtering function if one is not provided
      // Provide `match` to avoid retokenization if we modified the selector above


      (compiled || compile(selector, match))(seed, context, !documentIsHTML, results, !context || rsibling.test(selector) && testContext(context.parentNode) || context);
      return results;
    }; // One-time assignments
    // Sort stability


    support.sortStable = expando.split("").sort(sortOrder).join("") === expando; // Support: Chrome 14-35+
    // Always assume duplicates if they aren't passed to the comparison function

    support.detectDuplicates = !!hasDuplicate; // Initialize against the default document

    setDocument(); // Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
    // Detached nodes confoundingly follow *each other*

    support.sortDetached = assert(function (el) {
      // Should return 1, but returns 4 (following)
      return el.compareDocumentPosition(document.createElement("fieldset")) & 1;
    }); // Support: IE<8
    // Prevent attribute/property "interpolation"
    // https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx

    if (!assert(function (el) {
      el.innerHTML = "<a href='#'></a>";
      return el.firstChild.getAttribute("href") === "#";
    })) {
      addHandle("type|href|height|width", function (elem, name, isXML) {
        if (!isXML) {
          return elem.getAttribute(name, name.toLowerCase() === "type" ? 1 : 2);
        }
      });
    } // Support: IE<9
    // Use defaultValue in place of getAttribute("value")


    if (!support.attributes || !assert(function (el) {
      el.innerHTML = "<input/>";
      el.firstChild.setAttribute("value", "");
      return el.firstChild.getAttribute("value") === "";
    })) {
      addHandle("value", function (elem, _name, isXML) {
        if (!isXML && elem.nodeName.toLowerCase() === "input") {
          return elem.defaultValue;
        }
      });
    } // Support: IE<9
    // Use getAttributeNode to fetch booleans when getAttribute lies


    if (!assert(function (el) {
      return el.getAttribute("disabled") == null;
    })) {
      addHandle(booleans, function (elem, name, isXML) {
        var val;

        if (!isXML) {
          return elem[name] === true ? name.toLowerCase() : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null;
        }
      });
    }

    return Sizzle;
  }(window);

  jQuery.find = Sizzle;
  jQuery.expr = Sizzle.selectors; // Deprecated

  jQuery.expr[":"] = jQuery.expr.pseudos;
  jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
  jQuery.text = Sizzle.getText;
  jQuery.isXMLDoc = Sizzle.isXML;
  jQuery.contains = Sizzle.contains;
  jQuery.escapeSelector = Sizzle.escape;

  var dir = function dir(elem, _dir, until) {
    var matched = [],
        truncate = until !== undefined;

    while ((elem = elem[_dir]) && elem.nodeType !== 9) {
      if (elem.nodeType === 1) {
        if (truncate && jQuery(elem).is(until)) {
          break;
        }

        matched.push(elem);
      }
    }

    return matched;
  };

  var _siblings = function siblings(n, elem) {
    var matched = [];

    for (; n; n = n.nextSibling) {
      if (n.nodeType === 1 && n !== elem) {
        matched.push(n);
      }
    }

    return matched;
  };

  var rneedsContext = jQuery.expr.match.needsContext;

  function nodeName(elem, name) {
    return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
  }

  var rsingleTag = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i; // Implement the identical functionality for filter and not

  function winnow(elements, qualifier, not) {
    if (isFunction(qualifier)) {
      return jQuery.grep(elements, function (elem, i) {
        return !!qualifier.call(elem, i, elem) !== not;
      });
    } // Single element


    if (qualifier.nodeType) {
      return jQuery.grep(elements, function (elem) {
        return elem === qualifier !== not;
      });
    } // Arraylike of elements (jQuery, arguments, Array)


    if (typeof qualifier !== "string") {
      return jQuery.grep(elements, function (elem) {
        return indexOf.call(qualifier, elem) > -1 !== not;
      });
    } // Filtered directly for both simple and complex selectors


    return jQuery.filter(qualifier, elements, not);
  }

  jQuery.filter = function (expr, elems, not) {
    var elem = elems[0];

    if (not) {
      expr = ":not(" + expr + ")";
    }

    if (elems.length === 1 && elem.nodeType === 1) {
      return jQuery.find.matchesSelector(elem, expr) ? [elem] : [];
    }

    return jQuery.find.matches(expr, jQuery.grep(elems, function (elem) {
      return elem.nodeType === 1;
    }));
  };

  jQuery.fn.extend({
    find: function find(selector) {
      var i,
          ret,
          len = this.length,
          self = this;

      if (typeof selector !== "string") {
        return this.pushStack(jQuery(selector).filter(function () {
          for (i = 0; i < len; i++) {
            if (jQuery.contains(self[i], this)) {
              return true;
            }
          }
        }));
      }

      ret = this.pushStack([]);

      for (i = 0; i < len; i++) {
        jQuery.find(selector, self[i], ret);
      }

      return len > 1 ? jQuery.uniqueSort(ret) : ret;
    },
    filter: function filter(selector) {
      return this.pushStack(winnow(this, selector || [], false));
    },
    not: function not(selector) {
      return this.pushStack(winnow(this, selector || [], true));
    },
    is: function is(selector) {
      return !!winnow(this, // If this is a positional/relative selector, check membership in the returned set
      // so $("p:first").is("p:last") won't return true for a doc with two "p".
      typeof selector === "string" && rneedsContext.test(selector) ? jQuery(selector) : selector || [], false).length;
    }
  }); // Initialize a jQuery object
  // A central reference to the root jQuery(document)

  var rootjQuery,
      // A simple way to check for HTML strings
  // Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
  // Strict HTML recognition (#11290: must start with <)
  // Shortcut simple #id case for speed
  rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
      init = jQuery.fn.init = function (selector, context, root) {
    var match, elem; // HANDLE: $(""), $(null), $(undefined), $(false)

    if (!selector) {
      return this;
    } // Method init() accepts an alternate rootjQuery
    // so migrate can support jQuery.sub (gh-2101)


    root = root || rootjQuery; // Handle HTML strings

    if (typeof selector === "string") {
      if (selector[0] === "<" && selector[selector.length - 1] === ">" && selector.length >= 3) {
        // Assume that strings that start and end with <> are HTML and skip the regex check
        match = [null, selector, null];
      } else {
        match = rquickExpr.exec(selector);
      } // Match html or make sure no context is specified for #id


      if (match && (match[1] || !context)) {
        // HANDLE: $(html) -> $(array)
        if (match[1]) {
          context = context instanceof jQuery ? context[0] : context; // Option to run scripts is true for back-compat
          // Intentionally let the error be thrown if parseHTML is not present

          jQuery.merge(this, jQuery.parseHTML(match[1], context && context.nodeType ? context.ownerDocument || context : document, true)); // HANDLE: $(html, props)

          if (rsingleTag.test(match[1]) && jQuery.isPlainObject(context)) {
            for (match in context) {
              // Properties of context are called as methods if possible
              if (isFunction(this[match])) {
                this[match](context[match]); // ...and otherwise set as attributes
              } else {
                this.attr(match, context[match]);
              }
            }
          }

          return this; // HANDLE: $(#id)
        } else {
          elem = document.getElementById(match[2]);

          if (elem) {
            // Inject the element directly into the jQuery object
            this[0] = elem;
            this.length = 1;
          }

          return this;
        } // HANDLE: $(expr, $(...))

      } else if (!context || context.jquery) {
        return (context || root).find(selector); // HANDLE: $(expr, context)
        // (which is just equivalent to: $(context).find(expr)
      } else {
        return this.constructor(context).find(selector);
      } // HANDLE: $(DOMElement)

    } else if (selector.nodeType) {
      this[0] = selector;
      this.length = 1;
      return this; // HANDLE: $(function)
      // Shortcut for document ready
    } else if (isFunction(selector)) {
      return root.ready !== undefined ? root.ready(selector) : // Execute immediately if ready is not present
      selector(jQuery);
    }

    return jQuery.makeArray(selector, this);
  }; // Give the init function the jQuery prototype for later instantiation


  init.prototype = jQuery.fn; // Initialize central reference

  rootjQuery = jQuery(document);
  var rparentsprev = /^(?:parents|prev(?:Until|All))/,
      // Methods guaranteed to produce a unique set when starting from a unique set
  guaranteedUnique = {
    children: true,
    contents: true,
    next: true,
    prev: true
  };
  jQuery.fn.extend({
    has: function has(target) {
      var targets = jQuery(target, this),
          l = targets.length;
      return this.filter(function () {
        var i = 0;

        for (; i < l; i++) {
          if (jQuery.contains(this, targets[i])) {
            return true;
          }
        }
      });
    },
    closest: function closest(selectors, context) {
      var cur,
          i = 0,
          l = this.length,
          matched = [],
          targets = typeof selectors !== "string" && jQuery(selectors); // Positional selectors never match, since there's no _selection_ context

      if (!rneedsContext.test(selectors)) {
        for (; i < l; i++) {
          for (cur = this[i]; cur && cur !== context; cur = cur.parentNode) {
            // Always skip document fragments
            if (cur.nodeType < 11 && (targets ? targets.index(cur) > -1 : // Don't pass non-elements to Sizzle
            cur.nodeType === 1 && jQuery.find.matchesSelector(cur, selectors))) {
              matched.push(cur);
              break;
            }
          }
        }
      }

      return this.pushStack(matched.length > 1 ? jQuery.uniqueSort(matched) : matched);
    },
    // Determine the position of an element within the set
    index: function index(elem) {
      // No argument, return index in parent
      if (!elem) {
        return this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
      } // Index in selector


      if (typeof elem === "string") {
        return indexOf.call(jQuery(elem), this[0]);
      } // Locate the position of the desired element


      return indexOf.call(this, // If it receives a jQuery object, the first element is used
      elem.jquery ? elem[0] : elem);
    },
    add: function add(selector, context) {
      return this.pushStack(jQuery.uniqueSort(jQuery.merge(this.get(), jQuery(selector, context))));
    },
    addBack: function addBack(selector) {
      return this.add(selector == null ? this.prevObject : this.prevObject.filter(selector));
    }
  });

  function sibling(cur, dir) {
    while ((cur = cur[dir]) && cur.nodeType !== 1) {}

    return cur;
  }

  jQuery.each({
    parent: function parent(elem) {
      var parent = elem.parentNode;
      return parent && parent.nodeType !== 11 ? parent : null;
    },
    parents: function parents(elem) {
      return dir(elem, "parentNode");
    },
    parentsUntil: function parentsUntil(elem, _i, until) {
      return dir(elem, "parentNode", until);
    },
    next: function next(elem) {
      return sibling(elem, "nextSibling");
    },
    prev: function prev(elem) {
      return sibling(elem, "previousSibling");
    },
    nextAll: function nextAll(elem) {
      return dir(elem, "nextSibling");
    },
    prevAll: function prevAll(elem) {
      return dir(elem, "previousSibling");
    },
    nextUntil: function nextUntil(elem, _i, until) {
      return dir(elem, "nextSibling", until);
    },
    prevUntil: function prevUntil(elem, _i, until) {
      return dir(elem, "previousSibling", until);
    },
    siblings: function siblings(elem) {
      return _siblings((elem.parentNode || {}).firstChild, elem);
    },
    children: function children(elem) {
      return _siblings(elem.firstChild);
    },
    contents: function contents(elem) {
      if (elem.contentDocument != null && // Support: IE 11+
      // <object> elements with no `data` attribute has an object
      // `contentDocument` with a `null` prototype.
      getProto(elem.contentDocument)) {
        return elem.contentDocument;
      } // Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
      // Treat the template element as a regular one in browsers that
      // don't support it.


      if (nodeName(elem, "template")) {
        elem = elem.content || elem;
      }

      return jQuery.merge([], elem.childNodes);
    }
  }, function (name, fn) {
    jQuery.fn[name] = function (until, selector) {
      var matched = jQuery.map(this, fn, until);

      if (name.slice(-5) !== "Until") {
        selector = until;
      }

      if (selector && typeof selector === "string") {
        matched = jQuery.filter(selector, matched);
      }

      if (this.length > 1) {
        // Remove duplicates
        if (!guaranteedUnique[name]) {
          jQuery.uniqueSort(matched);
        } // Reverse order for parents* and prev-derivatives


        if (rparentsprev.test(name)) {
          matched.reverse();
        }
      }

      return this.pushStack(matched);
    };
  });
  var rnothtmlwhite = /[^\x20\t\r\n\f]+/g; // Convert String-formatted options into Object-formatted ones

  function createOptions(options) {
    var object = {};
    jQuery.each(options.match(rnothtmlwhite) || [], function (_, flag) {
      object[flag] = true;
    });
    return object;
  }
  /*
   * Create a callback list using the following parameters:
   *
   *	options: an optional list of space-separated options that will change how
   *			the callback list behaves or a more traditional option object
   *
   * By default a callback list will act like an event callback list and can be
   * "fired" multiple times.
   *
   * Possible options:
   *
   *	once:			will ensure the callback list can only be fired once (like a Deferred)
   *
   *	memory:			will keep track of previous values and will call any callback added
   *					after the list has been fired right away with the latest "memorized"
   *					values (like a Deferred)
   *
   *	unique:			will ensure a callback can only be added once (no duplicate in the list)
   *
   *	stopOnFalse:	interrupt callings when a callback returns false
   *
   */


  jQuery.Callbacks = function (options) {
    // Convert options from String-formatted to Object-formatted if needed
    // (we check in cache first)
    options = typeof options === "string" ? createOptions(options) : jQuery.extend({}, options);

    var // Flag to know if list is currently firing
    firing,
        // Last fire value for non-forgettable lists
    memory,
        // Flag to know if list was already fired
    _fired,
        // Flag to prevent firing
    _locked,
        // Actual callback list
    list = [],
        // Queue of execution data for repeatable lists
    queue = [],
        // Index of currently firing callback (modified by add/remove as needed)
    firingIndex = -1,
        // Fire callbacks
    fire = function fire() {
      // Enforce single-firing
      _locked = _locked || options.once; // Execute callbacks for all pending executions,
      // respecting firingIndex overrides and runtime changes

      _fired = firing = true;

      for (; queue.length; firingIndex = -1) {
        memory = queue.shift();

        while (++firingIndex < list.length) {
          // Run callback and check for early termination
          if (list[firingIndex].apply(memory[0], memory[1]) === false && options.stopOnFalse) {
            // Jump to end and forget the data so .add doesn't re-fire
            firingIndex = list.length;
            memory = false;
          }
        }
      } // Forget the data if we're done with it


      if (!options.memory) {
        memory = false;
      }

      firing = false; // Clean up if we're done firing for good

      if (_locked) {
        // Keep an empty list if we have data for future add calls
        if (memory) {
          list = []; // Otherwise, this object is spent
        } else {
          list = "";
        }
      }
    },
        // Actual Callbacks object
    self = {
      // Add a callback or a collection of callbacks to the list
      add: function add() {
        if (list) {
          // If we have memory from a past run, we should fire after adding
          if (memory && !firing) {
            firingIndex = list.length - 1;
            queue.push(memory);
          }

          (function add(args) {
            jQuery.each(args, function (_, arg) {
              if (isFunction(arg)) {
                if (!options.unique || !self.has(arg)) {
                  list.push(arg);
                }
              } else if (arg && arg.length && toType(arg) !== "string") {
                // Inspect recursively
                add(arg);
              }
            });
          })(arguments);

          if (memory && !firing) {
            fire();
          }
        }

        return this;
      },
      // Remove a callback from the list
      remove: function remove() {
        jQuery.each(arguments, function (_, arg) {
          var index;

          while ((index = jQuery.inArray(arg, list, index)) > -1) {
            list.splice(index, 1); // Handle firing indexes

            if (index <= firingIndex) {
              firingIndex--;
            }
          }
        });
        return this;
      },
      // Check if a given callback is in the list.
      // If no argument is given, return whether or not list has callbacks attached.
      has: function has(fn) {
        return fn ? jQuery.inArray(fn, list) > -1 : list.length > 0;
      },
      // Remove all callbacks from the list
      empty: function empty() {
        if (list) {
          list = [];
        }

        return this;
      },
      // Disable .fire and .add
      // Abort any current/pending executions
      // Clear all callbacks and values
      disable: function disable() {
        _locked = queue = [];
        list = memory = "";
        return this;
      },
      disabled: function disabled() {
        return !list;
      },
      // Disable .fire
      // Also disable .add unless we have memory (since it would have no effect)
      // Abort any pending executions
      lock: function lock() {
        _locked = queue = [];

        if (!memory && !firing) {
          list = memory = "";
        }

        return this;
      },
      locked: function locked() {
        return !!_locked;
      },
      // Call all callbacks with the given context and arguments
      fireWith: function fireWith(context, args) {
        if (!_locked) {
          args = args || [];
          args = [context, args.slice ? args.slice() : args];
          queue.push(args);

          if (!firing) {
            fire();
          }
        }

        return this;
      },
      // Call all the callbacks with the given arguments
      fire: function fire() {
        self.fireWith(this, arguments);
        return this;
      },
      // To know if the callbacks have already been called at least once
      fired: function fired() {
        return !!_fired;
      }
    };

    return self;
  };

  function Identity(v) {
    return v;
  }

  function Thrower(ex) {
    throw ex;
  }

  function adoptValue(value, resolve, reject, noValue) {
    var method;

    try {
      // Check for promise aspect first to privilege synchronous behavior
      if (value && isFunction(method = value.promise)) {
        method.call(value).done(resolve).fail(reject); // Other thenables
      } else if (value && isFunction(method = value.then)) {
        method.call(value, resolve, reject); // Other non-thenables
      } else {
        // Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
        // * false: [ value ].slice( 0 ) => resolve( value )
        // * true: [ value ].slice( 1 ) => resolve()
        resolve.apply(undefined, [value].slice(noValue));
      } // For Promises/A+, convert exceptions into rejections
      // Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
      // Deferred#then to conditionally suppress rejection.

    } catch (value) {
      // Support: Android 4.0 only
      // Strict mode functions invoked without .call/.apply get global-object context
      reject.apply(undefined, [value]);
    }
  }

  jQuery.extend({
    Deferred: function Deferred(func) {
      var tuples = [// action, add listener, callbacks,
      // ... .then handlers, argument index, [final state]
      ["notify", "progress", jQuery.Callbacks("memory"), jQuery.Callbacks("memory"), 2], ["resolve", "done", jQuery.Callbacks("once memory"), jQuery.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", jQuery.Callbacks("once memory"), jQuery.Callbacks("once memory"), 1, "rejected"]],
          _state = "pending",
          _promise = {
        state: function state() {
          return _state;
        },
        always: function always() {
          deferred.done(arguments).fail(arguments);
          return this;
        },
        "catch": function _catch(fn) {
          return _promise.then(null, fn);
        },
        // Keep pipe for back-compat
        pipe: function pipe()
        /* fnDone, fnFail, fnProgress */
        {
          var fns = arguments;
          return jQuery.Deferred(function (newDefer) {
            jQuery.each(tuples, function (_i, tuple) {
              // Map tuples (progress, done, fail) to arguments (done, fail, progress)
              var fn = isFunction(fns[tuple[4]]) && fns[tuple[4]]; // deferred.progress(function() { bind to newDefer or newDefer.notify })
              // deferred.done(function() { bind to newDefer or newDefer.resolve })
              // deferred.fail(function() { bind to newDefer or newDefer.reject })

              deferred[tuple[1]](function () {
                var returned = fn && fn.apply(this, arguments);

                if (returned && isFunction(returned.promise)) {
                  returned.promise().progress(newDefer.notify).done(newDefer.resolve).fail(newDefer.reject);
                } else {
                  newDefer[tuple[0] + "With"](this, fn ? [returned] : arguments);
                }
              });
            });
            fns = null;
          }).promise();
        },
        then: function then(onFulfilled, onRejected, onProgress) {
          var maxDepth = 0;

          function resolve(depth, deferred, handler, special) {
            return function () {
              var that = this,
                  args = arguments,
                  mightThrow = function mightThrow() {
                var returned, then; // Support: Promises/A+ section 2.3.3.3.3
                // https://promisesaplus.com/#point-59
                // Ignore double-resolution attempts

                if (depth < maxDepth) {
                  return;
                }

                returned = handler.apply(that, args); // Support: Promises/A+ section 2.3.1
                // https://promisesaplus.com/#point-48

                if (returned === deferred.promise()) {
                  throw new TypeError("Thenable self-resolution");
                } // Support: Promises/A+ sections 2.3.3.1, 3.5
                // https://promisesaplus.com/#point-54
                // https://promisesaplus.com/#point-75
                // Retrieve `then` only once


                then = returned && ( // Support: Promises/A+ section 2.3.4
                // https://promisesaplus.com/#point-64
                // Only check objects and functions for thenability
                _typeof(returned) === "object" || typeof returned === "function") && returned.then; // Handle a returned thenable

                if (isFunction(then)) {
                  // Special processors (notify) just wait for resolution
                  if (special) {
                    then.call(returned, resolve(maxDepth, deferred, Identity, special), resolve(maxDepth, deferred, Thrower, special)); // Normal processors (resolve) also hook into progress
                  } else {
                    // ...and disregard older resolution values
                    maxDepth++;
                    then.call(returned, resolve(maxDepth, deferred, Identity, special), resolve(maxDepth, deferred, Thrower, special), resolve(maxDepth, deferred, Identity, deferred.notifyWith));
                  } // Handle all other returned values

                } else {
                  // Only substitute handlers pass on context
                  // and multiple values (non-spec behavior)
                  if (handler !== Identity) {
                    that = undefined;
                    args = [returned];
                  } // Process the value(s)
                  // Default process is resolve


                  (special || deferred.resolveWith)(that, args);
                }
              },
                  // Only normal processors (resolve) catch and reject exceptions
              process = special ? mightThrow : function () {
                try {
                  mightThrow();
                } catch (e) {
                  if (jQuery.Deferred.exceptionHook) {
                    jQuery.Deferred.exceptionHook(e, process.stackTrace);
                  } // Support: Promises/A+ section 2.3.3.3.4.1
                  // https://promisesaplus.com/#point-61
                  // Ignore post-resolution exceptions


                  if (depth + 1 >= maxDepth) {
                    // Only substitute handlers pass on context
                    // and multiple values (non-spec behavior)
                    if (handler !== Thrower) {
                      that = undefined;
                      args = [e];
                    }

                    deferred.rejectWith(that, args);
                  }
                }
              }; // Support: Promises/A+ section 2.3.3.3.1
              // https://promisesaplus.com/#point-57
              // Re-resolve promises immediately to dodge false rejection from
              // subsequent errors


              if (depth) {
                process();
              } else {
                // Call an optional hook to record the stack, in case of exception
                // since it's otherwise lost when execution goes async
                if (jQuery.Deferred.getStackHook) {
                  process.stackTrace = jQuery.Deferred.getStackHook();
                }

                window.setTimeout(process);
              }
            };
          }

          return jQuery.Deferred(function (newDefer) {
            // progress_handlers.add( ... )
            tuples[0][3].add(resolve(0, newDefer, isFunction(onProgress) ? onProgress : Identity, newDefer.notifyWith)); // fulfilled_handlers.add( ... )

            tuples[1][3].add(resolve(0, newDefer, isFunction(onFulfilled) ? onFulfilled : Identity)); // rejected_handlers.add( ... )

            tuples[2][3].add(resolve(0, newDefer, isFunction(onRejected) ? onRejected : Thrower));
          }).promise();
        },
        // Get a promise for this deferred
        // If obj is provided, the promise aspect is added to the object
        promise: function promise(obj) {
          return obj != null ? jQuery.extend(obj, _promise) : _promise;
        }
      },
          deferred = {}; // Add list-specific methods

      jQuery.each(tuples, function (i, tuple) {
        var list = tuple[2],
            stateString = tuple[5]; // promise.progress = list.add
        // promise.done = list.add
        // promise.fail = list.add

        _promise[tuple[1]] = list.add; // Handle state

        if (stateString) {
          list.add(function () {
            // state = "resolved" (i.e., fulfilled)
            // state = "rejected"
            _state = stateString;
          }, // rejected_callbacks.disable
          // fulfilled_callbacks.disable
          tuples[3 - i][2].disable, // rejected_handlers.disable
          // fulfilled_handlers.disable
          tuples[3 - i][3].disable, // progress_callbacks.lock
          tuples[0][2].lock, // progress_handlers.lock
          tuples[0][3].lock);
        } // progress_handlers.fire
        // fulfilled_handlers.fire
        // rejected_handlers.fire


        list.add(tuple[3].fire); // deferred.notify = function() { deferred.notifyWith(...) }
        // deferred.resolve = function() { deferred.resolveWith(...) }
        // deferred.reject = function() { deferred.rejectWith(...) }

        deferred[tuple[0]] = function () {
          deferred[tuple[0] + "With"](this === deferred ? undefined : this, arguments);
          return this;
        }; // deferred.notifyWith = list.fireWith
        // deferred.resolveWith = list.fireWith
        // deferred.rejectWith = list.fireWith


        deferred[tuple[0] + "With"] = list.fireWith;
      }); // Make the deferred a promise

      _promise.promise(deferred); // Call given func if any


      if (func) {
        func.call(deferred, deferred);
      } // All done!


      return deferred;
    },
    // Deferred helper
    when: function when(singleValue) {
      var // count of uncompleted subordinates
      remaining = arguments.length,
          // count of unprocessed arguments
      i = remaining,
          // subordinate fulfillment data
      resolveContexts = Array(i),
          resolveValues = _slice.call(arguments),
          // the primary Deferred
      primary = jQuery.Deferred(),
          // subordinate callback factory
      updateFunc = function updateFunc(i) {
        return function (value) {
          resolveContexts[i] = this;
          resolveValues[i] = arguments.length > 1 ? _slice.call(arguments) : value;

          if (! --remaining) {
            primary.resolveWith(resolveContexts, resolveValues);
          }
        };
      }; // Single- and empty arguments are adopted like Promise.resolve


      if (remaining <= 1) {
        adoptValue(singleValue, primary.done(updateFunc(i)).resolve, primary.reject, !remaining); // Use .then() to unwrap secondary thenables (cf. gh-3000)

        if (primary.state() === "pending" || isFunction(resolveValues[i] && resolveValues[i].then)) {
          return primary.then();
        }
      } // Multiple arguments are aggregated like Promise.all array elements


      while (i--) {
        adoptValue(resolveValues[i], updateFunc(i), primary.reject);
      }

      return primary.promise();
    }
  }); // These usually indicate a programmer mistake during development,
  // warn about them ASAP rather than swallowing them by default.

  var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

  jQuery.Deferred.exceptionHook = function (error, stack) {
    // Support: IE 8 - 9 only
    // Console exists when dev tools are open, which can happen at any time
    if (window.console && window.console.warn && error && rerrorNames.test(error.name)) {
      window.console.warn("jQuery.Deferred exception: " + error.message, error.stack, stack);
    }
  };

  jQuery.readyException = function (error) {
    window.setTimeout(function () {
      throw error;
    });
  }; // The deferred used on DOM ready


  var readyList = jQuery.Deferred();

  jQuery.fn.ready = function (fn) {
    readyList.then(fn) // Wrap jQuery.readyException in a function so that the lookup
    // happens at the time of error handling instead of callback
    // registration.
    ["catch"](function (error) {
      jQuery.readyException(error);
    });
    return this;
  };

  jQuery.extend({
    // Is the DOM ready to be used? Set to true once it occurs.
    isReady: false,
    // A counter to track how many items to wait for before
    // the ready event fires. See #6781
    readyWait: 1,
    // Handle when the DOM is ready
    ready: function ready(wait) {
      // Abort if there are pending holds or we're already ready
      if (wait === true ? --jQuery.readyWait : jQuery.isReady) {
        return;
      } // Remember that the DOM is ready


      jQuery.isReady = true; // If a normal DOM Ready event fired, decrement, and wait if need be

      if (wait !== true && --jQuery.readyWait > 0) {
        return;
      } // If there are functions bound, to execute


      readyList.resolveWith(document, [jQuery]);
    }
  });
  jQuery.ready.then = readyList.then; // The ready event handler and self cleanup method

  function completed() {
    document.removeEventListener("DOMContentLoaded", completed);
    window.removeEventListener("load", completed);
    jQuery.ready();
  } // Catch cases where $(document).ready() is called
  // after the browser event has already occurred.
  // Support: IE <=9 - 10 only
  // Older IE sometimes signals "interactive" too soon


  if (document.readyState === "complete" || document.readyState !== "loading" && !document.documentElement.doScroll) {
    // Handle it asynchronously to allow scripts the opportunity to delay ready
    window.setTimeout(jQuery.ready);
  } else {
    // Use the handy event callback
    document.addEventListener("DOMContentLoaded", completed); // A fallback to window.onload, that will always work

    window.addEventListener("load", completed);
  } // Multifunctional method to get and set values of a collection
  // The value/s can optionally be executed if it's a function


  var access = function access(elems, fn, key, value, chainable, emptyGet, raw) {
    var i = 0,
        len = elems.length,
        bulk = key == null; // Sets many values

    if (toType(key) === "object") {
      chainable = true;

      for (i in key) {
        access(elems, fn, i, key[i], true, emptyGet, raw);
      } // Sets one value

    } else if (value !== undefined) {
      chainable = true;

      if (!isFunction(value)) {
        raw = true;
      }

      if (bulk) {
        // Bulk operations run against the entire set
        if (raw) {
          fn.call(elems, value);
          fn = null; // ...except when executing function values
        } else {
          bulk = fn;

          fn = function fn(elem, _key, value) {
            return bulk.call(jQuery(elem), value);
          };
        }
      }

      if (fn) {
        for (; i < len; i++) {
          fn(elems[i], key, raw ? value : value.call(elems[i], i, fn(elems[i], key)));
        }
      }
    }

    if (chainable) {
      return elems;
    } // Gets


    if (bulk) {
      return fn.call(elems);
    }

    return len ? fn(elems[0], key) : emptyGet;
  }; // Matches dashed string for camelizing


  var rmsPrefix = /^-ms-/,
      rdashAlpha = /-([a-z])/g; // Used by camelCase as callback to replace()

  function fcamelCase(_all, letter) {
    return letter.toUpperCase();
  } // Convert dashed to camelCase; used by the css and data modules
  // Support: IE <=9 - 11, Edge 12 - 15
  // Microsoft forgot to hump their vendor prefix (#9572)


  function camelCase(string) {
    return string.replace(rmsPrefix, "ms-").replace(rdashAlpha, fcamelCase);
  }

  var acceptData = function acceptData(owner) {
    // Accepts only:
    //  - Node
    //    - Node.ELEMENT_NODE
    //    - Node.DOCUMENT_NODE
    //  - Object
    //    - Any
    return owner.nodeType === 1 || owner.nodeType === 9 || !+owner.nodeType;
  };

  function Data() {
    this.expando = jQuery.expando + Data.uid++;
  }

  Data.uid = 1;
  Data.prototype = {
    cache: function cache(owner) {
      // Check if the owner object already has a cache
      var value = owner[this.expando]; // If not, create one

      if (!value) {
        value = {}; // We can accept data for non-element nodes in modern browsers,
        // but we should not, see #8335.
        // Always return an empty object.

        if (acceptData(owner)) {
          // If it is a node unlikely to be stringify-ed or looped over
          // use plain assignment
          if (owner.nodeType) {
            owner[this.expando] = value; // Otherwise secure it in a non-enumerable property
            // configurable must be true to allow the property to be
            // deleted when data is removed
          } else {
            Object.defineProperty(owner, this.expando, {
              value: value,
              configurable: true
            });
          }
        }
      }

      return value;
    },
    set: function set(owner, data, value) {
      var prop,
          cache = this.cache(owner); // Handle: [ owner, key, value ] args
      // Always use camelCase key (gh-2257)

      if (typeof data === "string") {
        cache[camelCase(data)] = value; // Handle: [ owner, { properties } ] args
      } else {
        // Copy the properties one-by-one to the cache object
        for (prop in data) {
          cache[camelCase(prop)] = data[prop];
        }
      }

      return cache;
    },
    get: function get(owner, key) {
      return key === undefined ? this.cache(owner) : // Always use camelCase key (gh-2257)
      owner[this.expando] && owner[this.expando][camelCase(key)];
    },
    access: function access(owner, key, value) {
      // In cases where either:
      //
      //   1. No key was specified
      //   2. A string key was specified, but no value provided
      //
      // Take the "read" path and allow the get method to determine
      // which value to return, respectively either:
      //
      //   1. The entire cache object
      //   2. The data stored at the key
      //
      if (key === undefined || key && typeof key === "string" && value === undefined) {
        return this.get(owner, key);
      } // When the key is not a string, or both a key and value
      // are specified, set or extend (existing objects) with either:
      //
      //   1. An object of properties
      //   2. A key and value
      //


      this.set(owner, key, value); // Since the "set" path can have two possible entry points
      // return the expected data based on which path was taken[*]

      return value !== undefined ? value : key;
    },
    remove: function remove(owner, key) {
      var i,
          cache = owner[this.expando];

      if (cache === undefined) {
        return;
      }

      if (key !== undefined) {
        // Support array or space separated string of keys
        if (Array.isArray(key)) {
          // If key is an array of keys...
          // We always set camelCase keys, so remove that.
          key = key.map(camelCase);
        } else {
          key = camelCase(key); // If a key with the spaces exists, use it.
          // Otherwise, create an array by matching non-whitespace

          key = key in cache ? [key] : key.match(rnothtmlwhite) || [];
        }

        i = key.length;

        while (i--) {
          delete cache[key[i]];
        }
      } // Remove the expando if there's no more data


      if (key === undefined || jQuery.isEmptyObject(cache)) {
        // Support: Chrome <=35 - 45
        // Webkit & Blink performance suffers when deleting properties
        // from DOM nodes, so set to undefined instead
        // https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
        if (owner.nodeType) {
          owner[this.expando] = undefined;
        } else {
          delete owner[this.expando];
        }
      }
    },
    hasData: function hasData(owner) {
      var cache = owner[this.expando];
      return cache !== undefined && !jQuery.isEmptyObject(cache);
    }
  };
  var dataPriv = new Data();
  var dataUser = new Data(); //	Implementation Summary
  //
  //	1. Enforce API surface and semantic compatibility with 1.9.x branch
  //	2. Improve the module's maintainability by reducing the storage
  //		paths to a single mechanism.
  //	3. Use the same single mechanism to support "private" and "user" data.
  //	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
  //	5. Avoid exposing implementation details on user objects (eg. expando properties)
  //	6. Provide a clear path for implementation upgrade to WeakMap in 2014

  var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      rmultiDash = /[A-Z]/g;

  function getData(data) {
    if (data === "true") {
      return true;
    }

    if (data === "false") {
      return false;
    }

    if (data === "null") {
      return null;
    } // Only convert to a number if it doesn't change the string


    if (data === +data + "") {
      return +data;
    }

    if (rbrace.test(data)) {
      return JSON.parse(data);
    }

    return data;
  }

  function dataAttr(elem, key, data) {
    var name; // If nothing was found internally, try to fetch any
    // data from the HTML5 data-* attribute

    if (data === undefined && elem.nodeType === 1) {
      name = "data-" + key.replace(rmultiDash, "-$&").toLowerCase();
      data = elem.getAttribute(name);

      if (typeof data === "string") {
        try {
          data = getData(data);
        } catch (e) {} // Make sure we set the data so it isn't changed later


        dataUser.set(elem, key, data);
      } else {
        data = undefined;
      }
    }

    return data;
  }

  jQuery.extend({
    hasData: function hasData(elem) {
      return dataUser.hasData(elem) || dataPriv.hasData(elem);
    },
    data: function data(elem, name, _data) {
      return dataUser.access(elem, name, _data);
    },
    removeData: function removeData(elem, name) {
      dataUser.remove(elem, name);
    },
    // TODO: Now that all calls to _data and _removeData have been replaced
    // with direct calls to dataPriv methods, these can be deprecated.
    _data: function _data(elem, name, data) {
      return dataPriv.access(elem, name, data);
    },
    _removeData: function _removeData(elem, name) {
      dataPriv.remove(elem, name);
    }
  });
  jQuery.fn.extend({
    data: function data(key, value) {
      var i,
          name,
          data,
          elem = this[0],
          attrs = elem && elem.attributes; // Gets all values

      if (key === undefined) {
        if (this.length) {
          data = dataUser.get(elem);

          if (elem.nodeType === 1 && !dataPriv.get(elem, "hasDataAttrs")) {
            i = attrs.length;

            while (i--) {
              // Support: IE 11 only
              // The attrs elements can be null (#14894)
              if (attrs[i]) {
                name = attrs[i].name;

                if (name.indexOf("data-") === 0) {
                  name = camelCase(name.slice(5));
                  dataAttr(elem, name, data[name]);
                }
              }
            }

            dataPriv.set(elem, "hasDataAttrs", true);
          }
        }

        return data;
      } // Sets multiple values


      if (_typeof(key) === "object") {
        return this.each(function () {
          dataUser.set(this, key);
        });
      }

      return access(this, function (value) {
        var data; // The calling jQuery object (element matches) is not empty
        // (and therefore has an element appears at this[ 0 ]) and the
        // `value` parameter was not undefined. An empty jQuery object
        // will result in `undefined` for elem = this[ 0 ] which will
        // throw an exception if an attempt to read a data cache is made.

        if (elem && value === undefined) {
          // Attempt to get data from the cache
          // The key will always be camelCased in Data
          data = dataUser.get(elem, key);

          if (data !== undefined) {
            return data;
          } // Attempt to "discover" the data in
          // HTML5 custom data-* attrs


          data = dataAttr(elem, key);

          if (data !== undefined) {
            return data;
          } // We tried really hard, but the data doesn't exist.


          return;
        } // Set the data...


        this.each(function () {
          // We always store the camelCased key
          dataUser.set(this, key, value);
        });
      }, null, value, arguments.length > 1, null, true);
    },
    removeData: function removeData(key) {
      return this.each(function () {
        dataUser.remove(this, key);
      });
    }
  });
  jQuery.extend({
    queue: function queue(elem, type, data) {
      var queue;

      if (elem) {
        type = (type || "fx") + "queue";
        queue = dataPriv.get(elem, type); // Speed up dequeue by getting out quickly if this is just a lookup

        if (data) {
          if (!queue || Array.isArray(data)) {
            queue = dataPriv.access(elem, type, jQuery.makeArray(data));
          } else {
            queue.push(data);
          }
        }

        return queue || [];
      }
    },
    dequeue: function dequeue(elem, type) {
      type = type || "fx";

      var queue = jQuery.queue(elem, type),
          startLength = queue.length,
          fn = queue.shift(),
          hooks = jQuery._queueHooks(elem, type),
          next = function next() {
        jQuery.dequeue(elem, type);
      }; // If the fx queue is dequeued, always remove the progress sentinel


      if (fn === "inprogress") {
        fn = queue.shift();
        startLength--;
      }

      if (fn) {
        // Add a progress sentinel to prevent the fx queue from being
        // automatically dequeued
        if (type === "fx") {
          queue.unshift("inprogress");
        } // Clear up the last queue stop function


        delete hooks.stop;
        fn.call(elem, next, hooks);
      }

      if (!startLength && hooks) {
        hooks.empty.fire();
      }
    },
    // Not public - generate a queueHooks object, or return the current one
    _queueHooks: function _queueHooks(elem, type) {
      var key = type + "queueHooks";
      return dataPriv.get(elem, key) || dataPriv.access(elem, key, {
        empty: jQuery.Callbacks("once memory").add(function () {
          dataPriv.remove(elem, [type + "queue", key]);
        })
      });
    }
  });
  jQuery.fn.extend({
    queue: function queue(type, data) {
      var setter = 2;

      if (typeof type !== "string") {
        data = type;
        type = "fx";
        setter--;
      }

      if (arguments.length < setter) {
        return jQuery.queue(this[0], type);
      }

      return data === undefined ? this : this.each(function () {
        var queue = jQuery.queue(this, type, data); // Ensure a hooks for this queue

        jQuery._queueHooks(this, type);

        if (type === "fx" && queue[0] !== "inprogress") {
          jQuery.dequeue(this, type);
        }
      });
    },
    dequeue: function dequeue(type) {
      return this.each(function () {
        jQuery.dequeue(this, type);
      });
    },
    clearQueue: function clearQueue(type) {
      return this.queue(type || "fx", []);
    },
    // Get a promise resolved when queues of a certain type
    // are emptied (fx is the type by default)
    promise: function promise(type, obj) {
      var tmp,
          count = 1,
          defer = jQuery.Deferred(),
          elements = this,
          i = this.length,
          resolve = function resolve() {
        if (! --count) {
          defer.resolveWith(elements, [elements]);
        }
      };

      if (typeof type !== "string") {
        obj = type;
        type = undefined;
      }

      type = type || "fx";

      while (i--) {
        tmp = dataPriv.get(elements[i], type + "queueHooks");

        if (tmp && tmp.empty) {
          count++;
          tmp.empty.add(resolve);
        }
      }

      resolve();
      return defer.promise(obj);
    }
  });
  var pnum = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source;
  var rcssNum = new RegExp("^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i");
  var cssExpand = ["Top", "Right", "Bottom", "Left"];
  var documentElement = document.documentElement;

  var isAttached = function isAttached(elem) {
    return jQuery.contains(elem.ownerDocument, elem);
  },
      composed = {
    composed: true
  }; // Support: IE 9 - 11+, Edge 12 - 18+, iOS 10.0 - 10.2 only
  // Check attachment across shadow DOM boundaries when possible (gh-3504)
  // Support: iOS 10.0-10.2 only
  // Early iOS 10 versions support `attachShadow` but not `getRootNode`,
  // leading to errors. We need to check for `getRootNode`.


  if (documentElement.getRootNode) {
    isAttached = function isAttached(elem) {
      return jQuery.contains(elem.ownerDocument, elem) || elem.getRootNode(composed) === elem.ownerDocument;
    };
  }

  var isHiddenWithinTree = function isHiddenWithinTree(elem, el) {
    // isHiddenWithinTree might be called from jQuery#filter function;
    // in that case, element will be second argument
    elem = el || elem; // Inline style trumps all

    return elem.style.display === "none" || elem.style.display === "" && // Otherwise, check computed style
    // Support: Firefox <=43 - 45
    // Disconnected elements can have computed display: none, so first confirm that elem is
    // in the document.
    isAttached(elem) && jQuery.css(elem, "display") === "none";
  };

  function adjustCSS(elem, prop, valueParts, tween) {
    var adjusted,
        scale,
        maxIterations = 20,
        currentValue = tween ? function () {
      return tween.cur();
    } : function () {
      return jQuery.css(elem, prop, "");
    },
        initial = currentValue(),
        unit = valueParts && valueParts[3] || (jQuery.cssNumber[prop] ? "" : "px"),
        // Starting value computation is required for potential unit mismatches
    initialInUnit = elem.nodeType && (jQuery.cssNumber[prop] || unit !== "px" && +initial) && rcssNum.exec(jQuery.css(elem, prop));

    if (initialInUnit && initialInUnit[3] !== unit) {
      // Support: Firefox <=54
      // Halve the iteration target value to prevent interference from CSS upper bounds (gh-2144)
      initial = initial / 2; // Trust units reported by jQuery.css

      unit = unit || initialInUnit[3]; // Iteratively approximate from a nonzero starting point

      initialInUnit = +initial || 1;

      while (maxIterations--) {
        // Evaluate and update our best guess (doubling guesses that zero out).
        // Finish if the scale equals or crosses 1 (making the old*new product non-positive).
        jQuery.style(elem, prop, initialInUnit + unit);

        if ((1 - scale) * (1 - (scale = currentValue() / initial || 0.5)) <= 0) {
          maxIterations = 0;
        }

        initialInUnit = initialInUnit / scale;
      }

      initialInUnit = initialInUnit * 2;
      jQuery.style(elem, prop, initialInUnit + unit); // Make sure we update the tween properties later on

      valueParts = valueParts || [];
    }

    if (valueParts) {
      initialInUnit = +initialInUnit || +initial || 0; // Apply relative offset (+=/-=) if specified

      adjusted = valueParts[1] ? initialInUnit + (valueParts[1] + 1) * valueParts[2] : +valueParts[2];

      if (tween) {
        tween.unit = unit;
        tween.start = initialInUnit;
        tween.end = adjusted;
      }
    }

    return adjusted;
  }

  var defaultDisplayMap = {};

  function getDefaultDisplay(elem) {
    var temp,
        doc = elem.ownerDocument,
        nodeName = elem.nodeName,
        display = defaultDisplayMap[nodeName];

    if (display) {
      return display;
    }

    temp = doc.body.appendChild(doc.createElement(nodeName));
    display = jQuery.css(temp, "display");
    temp.parentNode.removeChild(temp);

    if (display === "none") {
      display = "block";
    }

    defaultDisplayMap[nodeName] = display;
    return display;
  }

  function showHide(elements, show) {
    var display,
        elem,
        values = [],
        index = 0,
        length = elements.length; // Determine new display value for elements that need to change

    for (; index < length; index++) {
      elem = elements[index];

      if (!elem.style) {
        continue;
      }

      display = elem.style.display;

      if (show) {
        // Since we force visibility upon cascade-hidden elements, an immediate (and slow)
        // check is required in this first loop unless we have a nonempty display value (either
        // inline or about-to-be-restored)
        if (display === "none") {
          values[index] = dataPriv.get(elem, "display") || null;

          if (!values[index]) {
            elem.style.display = "";
          }
        }

        if (elem.style.display === "" && isHiddenWithinTree(elem)) {
          values[index] = getDefaultDisplay(elem);
        }
      } else {
        if (display !== "none") {
          values[index] = "none"; // Remember what we're overwriting

          dataPriv.set(elem, "display", display);
        }
      }
    } // Set the display of the elements in a second loop to avoid constant reflow


    for (index = 0; index < length; index++) {
      if (values[index] != null) {
        elements[index].style.display = values[index];
      }
    }

    return elements;
  }

  jQuery.fn.extend({
    show: function show() {
      return showHide(this, true);
    },
    hide: function hide() {
      return showHide(this);
    },
    toggle: function toggle(state) {
      if (typeof state === "boolean") {
        return state ? this.show() : this.hide();
      }

      return this.each(function () {
        if (isHiddenWithinTree(this)) {
          jQuery(this).show();
        } else {
          jQuery(this).hide();
        }
      });
    }
  });
  var rcheckableType = /^(?:checkbox|radio)$/i;
  var rtagName = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i;
  var rscriptType = /^$|^module$|\/(?:java|ecma)script/i;

  (function () {
    var fragment = document.createDocumentFragment(),
        div = fragment.appendChild(document.createElement("div")),
        input = document.createElement("input"); // Support: Android 4.0 - 4.3 only
    // Check state lost if the name is set (#11217)
    // Support: Windows Web Apps (WWA)
    // `name` and `type` must use .setAttribute for WWA (#14901)

    input.setAttribute("type", "radio");
    input.setAttribute("checked", "checked");
    input.setAttribute("name", "t");
    div.appendChild(input); // Support: Android <=4.1 only
    // Older WebKit doesn't clone checked state correctly in fragments

    support.checkClone = div.cloneNode(true).cloneNode(true).lastChild.checked; // Support: IE <=11 only
    // Make sure textarea (and checkbox) defaultValue is properly cloned

    div.innerHTML = "<textarea>x</textarea>";
    support.noCloneChecked = !!div.cloneNode(true).lastChild.defaultValue; // Support: IE <=9 only
    // IE <=9 replaces <option> tags with their contents when inserted outside of
    // the select element.

    div.innerHTML = "<option></option>";
    support.option = !!div.lastChild;
  })(); // We have to close these tags to support XHTML (#13200)


  var wrapMap = {
    // XHTML parsers do not magically insert elements in the
    // same way that tag soup parsers do. So we cannot shorten
    // this by omitting <tbody> or other required elements.
    thead: [1, "<table>", "</table>"],
    col: [2, "<table><colgroup>", "</colgroup></table>"],
    tr: [2, "<table><tbody>", "</tbody></table>"],
    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
    _default: [0, "", ""]
  };
  wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
  wrapMap.th = wrapMap.td; // Support: IE <=9 only

  if (!support.option) {
    wrapMap.optgroup = wrapMap.option = [1, "<select multiple='multiple'>", "</select>"];
  }

  function getAll(context, tag) {
    // Support: IE <=9 - 11 only
    // Use typeof to avoid zero-argument method invocation on host objects (#15151)
    var ret;

    if (typeof context.getElementsByTagName !== "undefined") {
      ret = context.getElementsByTagName(tag || "*");
    } else if (typeof context.querySelectorAll !== "undefined") {
      ret = context.querySelectorAll(tag || "*");
    } else {
      ret = [];
    }

    if (tag === undefined || tag && nodeName(context, tag)) {
      return jQuery.merge([context], ret);
    }

    return ret;
  } // Mark scripts as having already been evaluated


  function setGlobalEval(elems, refElements) {
    var i = 0,
        l = elems.length;

    for (; i < l; i++) {
      dataPriv.set(elems[i], "globalEval", !refElements || dataPriv.get(refElements[i], "globalEval"));
    }
  }

  var rhtml = /<|&#?\w+;/;

  function buildFragment(elems, context, scripts, selection, ignored) {
    var elem,
        tmp,
        tag,
        wrap,
        attached,
        j,
        fragment = context.createDocumentFragment(),
        nodes = [],
        i = 0,
        l = elems.length;

    for (; i < l; i++) {
      elem = elems[i];

      if (elem || elem === 0) {
        // Add nodes directly
        if (toType(elem) === "object") {
          // Support: Android <=4.0 only, PhantomJS 1 only
          // push.apply(_, arraylike) throws on ancient WebKit
          jQuery.merge(nodes, elem.nodeType ? [elem] : elem); // Convert non-html into a text node
        } else if (!rhtml.test(elem)) {
          nodes.push(context.createTextNode(elem)); // Convert html into DOM nodes
        } else {
          tmp = tmp || fragment.appendChild(context.createElement("div")); // Deserialize a standard representation

          tag = (rtagName.exec(elem) || ["", ""])[1].toLowerCase();
          wrap = wrapMap[tag] || wrapMap._default;
          tmp.innerHTML = wrap[1] + jQuery.htmlPrefilter(elem) + wrap[2]; // Descend through wrappers to the right content

          j = wrap[0];

          while (j--) {
            tmp = tmp.lastChild;
          } // Support: Android <=4.0 only, PhantomJS 1 only
          // push.apply(_, arraylike) throws on ancient WebKit


          jQuery.merge(nodes, tmp.childNodes); // Remember the top-level container

          tmp = fragment.firstChild; // Ensure the created nodes are orphaned (#12392)

          tmp.textContent = "";
        }
      }
    } // Remove wrapper from fragment


    fragment.textContent = "";
    i = 0;

    while (elem = nodes[i++]) {
      // Skip elements already in the context collection (trac-4087)
      if (selection && jQuery.inArray(elem, selection) > -1) {
        if (ignored) {
          ignored.push(elem);
        }

        continue;
      }

      attached = isAttached(elem); // Append to fragment

      tmp = getAll(fragment.appendChild(elem), "script"); // Preserve script evaluation history

      if (attached) {
        setGlobalEval(tmp);
      } // Capture executables


      if (scripts) {
        j = 0;

        while (elem = tmp[j++]) {
          if (rscriptType.test(elem.type || "")) {
            scripts.push(elem);
          }
        }
      }
    }

    return fragment;
  }

  var rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

  function returnTrue() {
    return true;
  }

  function returnFalse() {
    return false;
  } // Support: IE <=9 - 11+
  // focus() and blur() are asynchronous, except when they are no-op.
  // So expect focus to be synchronous when the element is already active,
  // and blur to be synchronous when the element is not already active.
  // (focus and blur are always synchronous in other supported browsers,
  // this just defines when we can count on it).


  function expectSync(elem, type) {
    return elem === safeActiveElement() === (type === "focus");
  } // Support: IE <=9 only
  // Accessing document.activeElement can throw unexpectedly
  // https://bugs.jquery.com/ticket/13393


  function safeActiveElement() {
    try {
      return document.activeElement;
    } catch (err) {}
  }

  function _on(elem, types, selector, data, fn, one) {
    var origFn, type; // Types can be a map of types/handlers

    if (_typeof(types) === "object") {
      // ( types-Object, selector, data )
      if (typeof selector !== "string") {
        // ( types-Object, data )
        data = data || selector;
        selector = undefined;
      }

      for (type in types) {
        _on(elem, type, selector, data, types[type], one);
      }

      return elem;
    }

    if (data == null && fn == null) {
      // ( types, fn )
      fn = selector;
      data = selector = undefined;
    } else if (fn == null) {
      if (typeof selector === "string") {
        // ( types, selector, fn )
        fn = data;
        data = undefined;
      } else {
        // ( types, data, fn )
        fn = data;
        data = selector;
        selector = undefined;
      }
    }

    if (fn === false) {
      fn = returnFalse;
    } else if (!fn) {
      return elem;
    }

    if (one === 1) {
      origFn = fn;

      fn = function fn(event) {
        // Can use an empty set, since event contains the info
        jQuery().off(event);
        return origFn.apply(this, arguments);
      }; // Use same guid so caller can remove using origFn


      fn.guid = origFn.guid || (origFn.guid = jQuery.guid++);
    }

    return elem.each(function () {
      jQuery.event.add(this, types, fn, data, selector);
    });
  }
  /*
   * Helper functions for managing events -- not part of the public interface.
   * Props to Dean Edwards' addEvent library for many of the ideas.
   */


  jQuery.event = {
    global: {},
    add: function add(elem, types, handler, data, selector) {
      var handleObjIn,
          eventHandle,
          tmp,
          events,
          t,
          handleObj,
          special,
          handlers,
          type,
          namespaces,
          origType,
          elemData = dataPriv.get(elem); // Only attach events to objects that accept data

      if (!acceptData(elem)) {
        return;
      } // Caller can pass in an object of custom data in lieu of the handler


      if (handler.handler) {
        handleObjIn = handler;
        handler = handleObjIn.handler;
        selector = handleObjIn.selector;
      } // Ensure that invalid selectors throw exceptions at attach time
      // Evaluate against documentElement in case elem is a non-element node (e.g., document)


      if (selector) {
        jQuery.find.matchesSelector(documentElement, selector);
      } // Make sure that the handler has a unique ID, used to find/remove it later


      if (!handler.guid) {
        handler.guid = jQuery.guid++;
      } // Init the element's event structure and main handler, if this is the first


      if (!(events = elemData.events)) {
        events = elemData.events = Object.create(null);
      }

      if (!(eventHandle = elemData.handle)) {
        eventHandle = elemData.handle = function (e) {
          // Discard the second event of a jQuery.event.trigger() and
          // when an event is called after a page has unloaded
          return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ? jQuery.event.dispatch.apply(elem, arguments) : undefined;
        };
      } // Handle multiple events separated by a space


      types = (types || "").match(rnothtmlwhite) || [""];
      t = types.length;

      while (t--) {
        tmp = rtypenamespace.exec(types[t]) || [];
        type = origType = tmp[1];
        namespaces = (tmp[2] || "").split(".").sort(); // There *must* be a type, no attaching namespace-only handlers

        if (!type) {
          continue;
        } // If event changes its type, use the special event handlers for the changed type


        special = jQuery.event.special[type] || {}; // If selector defined, determine special event api type, otherwise given type

        type = (selector ? special.delegateType : special.bindType) || type; // Update special based on newly reset type

        special = jQuery.event.special[type] || {}; // handleObj is passed to all event handlers

        handleObj = jQuery.extend({
          type: type,
          origType: origType,
          data: data,
          handler: handler,
          guid: handler.guid,
          selector: selector,
          needsContext: selector && jQuery.expr.match.needsContext.test(selector),
          namespace: namespaces.join(".")
        }, handleObjIn); // Init the event handler queue if we're the first

        if (!(handlers = events[type])) {
          handlers = events[type] = [];
          handlers.delegateCount = 0; // Only use addEventListener if the special events handler returns false

          if (!special.setup || special.setup.call(elem, data, namespaces, eventHandle) === false) {
            if (elem.addEventListener) {
              elem.addEventListener(type, eventHandle);
            }
          }
        }

        if (special.add) {
          special.add.call(elem, handleObj);

          if (!handleObj.handler.guid) {
            handleObj.handler.guid = handler.guid;
          }
        } // Add to the element's handler list, delegates in front


        if (selector) {
          handlers.splice(handlers.delegateCount++, 0, handleObj);
        } else {
          handlers.push(handleObj);
        } // Keep track of which events have ever been used, for event optimization


        jQuery.event.global[type] = true;
      }
    },
    // Detach an event or set of events from an element
    remove: function remove(elem, types, handler, selector, mappedTypes) {
      var j,
          origCount,
          tmp,
          events,
          t,
          handleObj,
          special,
          handlers,
          type,
          namespaces,
          origType,
          elemData = dataPriv.hasData(elem) && dataPriv.get(elem);

      if (!elemData || !(events = elemData.events)) {
        return;
      } // Once for each type.namespace in types; type may be omitted


      types = (types || "").match(rnothtmlwhite) || [""];
      t = types.length;

      while (t--) {
        tmp = rtypenamespace.exec(types[t]) || [];
        type = origType = tmp[1];
        namespaces = (tmp[2] || "").split(".").sort(); // Unbind all events (on this namespace, if provided) for the element

        if (!type) {
          for (type in events) {
            jQuery.event.remove(elem, type + types[t], handler, selector, true);
          }

          continue;
        }

        special = jQuery.event.special[type] || {};
        type = (selector ? special.delegateType : special.bindType) || type;
        handlers = events[type] || [];
        tmp = tmp[2] && new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)"); // Remove matching events

        origCount = j = handlers.length;

        while (j--) {
          handleObj = handlers[j];

          if ((mappedTypes || origType === handleObj.origType) && (!handler || handler.guid === handleObj.guid) && (!tmp || tmp.test(handleObj.namespace)) && (!selector || selector === handleObj.selector || selector === "**" && handleObj.selector)) {
            handlers.splice(j, 1);

            if (handleObj.selector) {
              handlers.delegateCount--;
            }

            if (special.remove) {
              special.remove.call(elem, handleObj);
            }
          }
        } // Remove generic event handler if we removed something and no more handlers exist
        // (avoids potential for endless recursion during removal of special event handlers)


        if (origCount && !handlers.length) {
          if (!special.teardown || special.teardown.call(elem, namespaces, elemData.handle) === false) {
            jQuery.removeEvent(elem, type, elemData.handle);
          }

          delete events[type];
        }
      } // Remove data and the expando if it's no longer used


      if (jQuery.isEmptyObject(events)) {
        dataPriv.remove(elem, "handle events");
      }
    },
    dispatch: function dispatch(nativeEvent) {
      var i,
          j,
          ret,
          matched,
          handleObj,
          handlerQueue,
          args = new Array(arguments.length),
          // Make a writable jQuery.Event from the native event object
      event = jQuery.event.fix(nativeEvent),
          handlers = (dataPriv.get(this, "events") || Object.create(null))[event.type] || [],
          special = jQuery.event.special[event.type] || {}; // Use the fix-ed jQuery.Event rather than the (read-only) native event

      args[0] = event;

      for (i = 1; i < arguments.length; i++) {
        args[i] = arguments[i];
      }

      event.delegateTarget = this; // Call the preDispatch hook for the mapped type, and let it bail if desired

      if (special.preDispatch && special.preDispatch.call(this, event) === false) {
        return;
      } // Determine handlers


      handlerQueue = jQuery.event.handlers.call(this, event, handlers); // Run delegates first; they may want to stop propagation beneath us

      i = 0;

      while ((matched = handlerQueue[i++]) && !event.isPropagationStopped()) {
        event.currentTarget = matched.elem;
        j = 0;

        while ((handleObj = matched.handlers[j++]) && !event.isImmediatePropagationStopped()) {
          // If the event is namespaced, then each handler is only invoked if it is
          // specially universal or its namespaces are a superset of the event's.
          if (!event.rnamespace || handleObj.namespace === false || event.rnamespace.test(handleObj.namespace)) {
            event.handleObj = handleObj;
            event.data = handleObj.data;
            ret = ((jQuery.event.special[handleObj.origType] || {}).handle || handleObj.handler).apply(matched.elem, args);

            if (ret !== undefined) {
              if ((event.result = ret) === false) {
                event.preventDefault();
                event.stopPropagation();
              }
            }
          }
        }
      } // Call the postDispatch hook for the mapped type


      if (special.postDispatch) {
        special.postDispatch.call(this, event);
      }

      return event.result;
    },
    handlers: function handlers(event, _handlers) {
      var i,
          handleObj,
          sel,
          matchedHandlers,
          matchedSelectors,
          handlerQueue = [],
          delegateCount = _handlers.delegateCount,
          cur = event.target; // Find delegate handlers

      if (delegateCount && // Support: IE <=9
      // Black-hole SVG <use> instance trees (trac-13180)
      cur.nodeType && // Support: Firefox <=42
      // Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
      // https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
      // Support: IE 11 only
      // ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
      !(event.type === "click" && event.button >= 1)) {
        for (; cur !== this; cur = cur.parentNode || this) {
          // Don't check non-elements (#13208)
          // Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
          if (cur.nodeType === 1 && !(event.type === "click" && cur.disabled === true)) {
            matchedHandlers = [];
            matchedSelectors = {};

            for (i = 0; i < delegateCount; i++) {
              handleObj = _handlers[i]; // Don't conflict with Object.prototype properties (#13203)

              sel = handleObj.selector + " ";

              if (matchedSelectors[sel] === undefined) {
                matchedSelectors[sel] = handleObj.needsContext ? jQuery(sel, this).index(cur) > -1 : jQuery.find(sel, this, null, [cur]).length;
              }

              if (matchedSelectors[sel]) {
                matchedHandlers.push(handleObj);
              }
            }

            if (matchedHandlers.length) {
              handlerQueue.push({
                elem: cur,
                handlers: matchedHandlers
              });
            }
          }
        }
      } // Add the remaining (directly-bound) handlers


      cur = this;

      if (delegateCount < _handlers.length) {
        handlerQueue.push({
          elem: cur,
          handlers: _handlers.slice(delegateCount)
        });
      }

      return handlerQueue;
    },
    addProp: function addProp(name, hook) {
      Object.defineProperty(jQuery.Event.prototype, name, {
        enumerable: true,
        configurable: true,
        get: isFunction(hook) ? function () {
          if (this.originalEvent) {
            return hook(this.originalEvent);
          }
        } : function () {
          if (this.originalEvent) {
            return this.originalEvent[name];
          }
        },
        set: function set(value) {
          Object.defineProperty(this, name, {
            enumerable: true,
            configurable: true,
            writable: true,
            value: value
          });
        }
      });
    },
    fix: function fix(originalEvent) {
      return originalEvent[jQuery.expando] ? originalEvent : new jQuery.Event(originalEvent);
    },
    special: {
      load: {
        // Prevent triggered image.load events from bubbling to window.load
        noBubble: true
      },
      click: {
        // Utilize native event to ensure correct state for checkable inputs
        setup: function setup(data) {
          // For mutual compressibility with _default, replace `this` access with a local var.
          // `|| data` is dead code meant only to preserve the variable through minification.
          var el = this || data; // Claim the first handler

          if (rcheckableType.test(el.type) && el.click && nodeName(el, "input")) {
            // dataPriv.set( el, "click", ... )
            leverageNative(el, "click", returnTrue);
          } // Return false to allow normal processing in the caller


          return false;
        },
        trigger: function trigger(data) {
          // For mutual compressibility with _default, replace `this` access with a local var.
          // `|| data` is dead code meant only to preserve the variable through minification.
          var el = this || data; // Force setup before triggering a click

          if (rcheckableType.test(el.type) && el.click && nodeName(el, "input")) {
            leverageNative(el, "click");
          } // Return non-false to allow normal event-path propagation


          return true;
        },
        // For cross-browser consistency, suppress native .click() on links
        // Also prevent it if we're currently inside a leveraged native-event stack
        _default: function _default(event) {
          var target = event.target;
          return rcheckableType.test(target.type) && target.click && nodeName(target, "input") && dataPriv.get(target, "click") || nodeName(target, "a");
        }
      },
      beforeunload: {
        postDispatch: function postDispatch(event) {
          // Support: Firefox 20+
          // Firefox doesn't alert if the returnValue field is not set.
          if (event.result !== undefined && event.originalEvent) {
            event.originalEvent.returnValue = event.result;
          }
        }
      }
    }
  }; // Ensure the presence of an event listener that handles manually-triggered
  // synthetic events by interrupting progress until reinvoked in response to
  // *native* events that it fires directly, ensuring that state changes have
  // already occurred before other listeners are invoked.

  function leverageNative(el, type, expectSync) {
    // Missing expectSync indicates a trigger call, which must force setup through jQuery.event.add
    if (!expectSync) {
      if (dataPriv.get(el, type) === undefined) {
        jQuery.event.add(el, type, returnTrue);
      }

      return;
    } // Register the controller as a special universal handler for all event namespaces


    dataPriv.set(el, type, false);
    jQuery.event.add(el, type, {
      namespace: false,
      handler: function handler(event) {
        var notAsync,
            result,
            saved = dataPriv.get(this, type);

        if (event.isTrigger & 1 && this[type]) {
          // Interrupt processing of the outer synthetic .trigger()ed event
          // Saved data should be false in such cases, but might be a leftover capture object
          // from an async native handler (gh-4350)
          if (!saved.length) {
            // Store arguments for use when handling the inner native event
            // There will always be at least one argument (an event object), so this array
            // will not be confused with a leftover capture object.
            saved = _slice.call(arguments);
            dataPriv.set(this, type, saved); // Trigger the native event and capture its result
            // Support: IE <=9 - 11+
            // focus() and blur() are asynchronous

            notAsync = expectSync(this, type);
            this[type]();
            result = dataPriv.get(this, type);

            if (saved !== result || notAsync) {
              dataPriv.set(this, type, false);
            } else {
              result = {};
            }

            if (saved !== result) {
              // Cancel the outer synthetic event
              event.stopImmediatePropagation();
              event.preventDefault(); // Support: Chrome 86+
              // In Chrome, if an element having a focusout handler is blurred by
              // clicking outside of it, it invokes the handler synchronously. If
              // that handler calls `.remove()` on the element, the data is cleared,
              // leaving `result` undefined. We need to guard against this.

              return result && result.value;
            } // If this is an inner synthetic event for an event with a bubbling surrogate
            // (focus or blur), assume that the surrogate already propagated from triggering the
            // native event and prevent that from happening again here.
            // This technically gets the ordering wrong w.r.t. to `.trigger()` (in which the
            // bubbling surrogate propagates *after* the non-bubbling base), but that seems
            // less bad than duplication.

          } else if ((jQuery.event.special[type] || {}).delegateType) {
            event.stopPropagation();
          } // If this is a native event triggered above, everything is now in order
          // Fire an inner synthetic event with the original arguments

        } else if (saved.length) {
          // ...and capture the result
          dataPriv.set(this, type, {
            value: jQuery.event.trigger( // Support: IE <=9 - 11+
            // Extend with the prototype to reset the above stopImmediatePropagation()
            jQuery.extend(saved[0], jQuery.Event.prototype), saved.slice(1), this)
          }); // Abort handling of the native event

          event.stopImmediatePropagation();
        }
      }
    });
  }

  jQuery.removeEvent = function (elem, type, handle) {
    // This "if" is needed for plain objects
    if (elem.removeEventListener) {
      elem.removeEventListener(type, handle);
    }
  };

  jQuery.Event = function (src, props) {
    // Allow instantiation without the 'new' keyword
    if (!(this instanceof jQuery.Event)) {
      return new jQuery.Event(src, props);
    } // Event object


    if (src && src.type) {
      this.originalEvent = src;
      this.type = src.type; // Events bubbling up the document may have been marked as prevented
      // by a handler lower down the tree; reflect the correct value.

      this.isDefaultPrevented = src.defaultPrevented || src.defaultPrevented === undefined && // Support: Android <=2.3 only
      src.returnValue === false ? returnTrue : returnFalse; // Create target properties
      // Support: Safari <=6 - 7 only
      // Target should not be a text node (#504, #13143)

      this.target = src.target && src.target.nodeType === 3 ? src.target.parentNode : src.target;
      this.currentTarget = src.currentTarget;
      this.relatedTarget = src.relatedTarget; // Event type
    } else {
      this.type = src;
    } // Put explicitly provided properties onto the event object


    if (props) {
      jQuery.extend(this, props);
    } // Create a timestamp if incoming event doesn't have one


    this.timeStamp = src && src.timeStamp || Date.now(); // Mark it as fixed

    this[jQuery.expando] = true;
  }; // jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
  // https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html


  jQuery.Event.prototype = {
    constructor: jQuery.Event,
    isDefaultPrevented: returnFalse,
    isPropagationStopped: returnFalse,
    isImmediatePropagationStopped: returnFalse,
    isSimulated: false,
    preventDefault: function preventDefault() {
      var e = this.originalEvent;
      this.isDefaultPrevented = returnTrue;

      if (e && !this.isSimulated) {
        e.preventDefault();
      }
    },
    stopPropagation: function stopPropagation() {
      var e = this.originalEvent;
      this.isPropagationStopped = returnTrue;

      if (e && !this.isSimulated) {
        e.stopPropagation();
      }
    },
    stopImmediatePropagation: function stopImmediatePropagation() {
      var e = this.originalEvent;
      this.isImmediatePropagationStopped = returnTrue;

      if (e && !this.isSimulated) {
        e.stopImmediatePropagation();
      }

      this.stopPropagation();
    }
  }; // Includes all common event props including KeyEvent and MouseEvent specific props

  jQuery.each({
    altKey: true,
    bubbles: true,
    cancelable: true,
    changedTouches: true,
    ctrlKey: true,
    detail: true,
    eventPhase: true,
    metaKey: true,
    pageX: true,
    pageY: true,
    shiftKey: true,
    view: true,
    "char": true,
    code: true,
    charCode: true,
    key: true,
    keyCode: true,
    button: true,
    buttons: true,
    clientX: true,
    clientY: true,
    offsetX: true,
    offsetY: true,
    pointerId: true,
    pointerType: true,
    screenX: true,
    screenY: true,
    targetTouches: true,
    toElement: true,
    touches: true,
    which: true
  }, jQuery.event.addProp);
  jQuery.each({
    focus: "focusin",
    blur: "focusout"
  }, function (type, delegateType) {
    jQuery.event.special[type] = {
      // Utilize native event if possible so blur/focus sequence is correct
      setup: function setup() {
        // Claim the first handler
        // dataPriv.set( this, "focus", ... )
        // dataPriv.set( this, "blur", ... )
        leverageNative(this, type, expectSync); // Return false to allow normal processing in the caller

        return false;
      },
      trigger: function trigger() {
        // Force setup before trigger
        leverageNative(this, type); // Return non-false to allow normal event-path propagation

        return true;
      },
      // Suppress native focus or blur as it's already being fired
      // in leverageNative.
      _default: function _default() {
        return true;
      },
      delegateType: delegateType
    };
  }); // Create mouseenter/leave events using mouseover/out and event-time checks
  // so that event delegation works in jQuery.
  // Do the same for pointerenter/pointerleave and pointerover/pointerout
  //
  // Support: Safari 7 only
  // Safari sends mouseenter too often; see:
  // https://bugs.chromium.org/p/chromium/issues/detail?id=470258
  // for the description of the bug (it existed in older Chrome versions as well).

  jQuery.each({
    mouseenter: "mouseover",
    mouseleave: "mouseout",
    pointerenter: "pointerover",
    pointerleave: "pointerout"
  }, function (orig, fix) {
    jQuery.event.special[orig] = {
      delegateType: fix,
      bindType: fix,
      handle: function handle(event) {
        var ret,
            target = this,
            related = event.relatedTarget,
            handleObj = event.handleObj; // For mouseenter/leave call the handler if related is outside the target.
        // NB: No relatedTarget if the mouse left/entered the browser window

        if (!related || related !== target && !jQuery.contains(target, related)) {
          event.type = handleObj.origType;
          ret = handleObj.handler.apply(this, arguments);
          event.type = fix;
        }

        return ret;
      }
    };
  });
  jQuery.fn.extend({
    on: function on(types, selector, data, fn) {
      return _on(this, types, selector, data, fn);
    },
    one: function one(types, selector, data, fn) {
      return _on(this, types, selector, data, fn, 1);
    },
    off: function off(types, selector, fn) {
      var handleObj, type;

      if (types && types.preventDefault && types.handleObj) {
        // ( event )  dispatched jQuery.Event
        handleObj = types.handleObj;
        jQuery(types.delegateTarget).off(handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType, handleObj.selector, handleObj.handler);
        return this;
      }

      if (_typeof(types) === "object") {
        // ( types-object [, selector] )
        for (type in types) {
          this.off(type, selector, types[type]);
        }

        return this;
      }

      if (selector === false || typeof selector === "function") {
        // ( types [, fn] )
        fn = selector;
        selector = undefined;
      }

      if (fn === false) {
        fn = returnFalse;
      }

      return this.each(function () {
        jQuery.event.remove(this, types, fn, selector);
      });
    }
  });
  var // Support: IE <=10 - 11, Edge 12 - 13 only
  // In IE/Edge using regex groups here causes severe slowdowns.
  // See https://connect.microsoft.com/IE/feedback/details/1736512/
  rnoInnerhtml = /<script|<style|<link/i,
      // checked="checked" or checked
  rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
      rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g; // Prefer a tbody over its parent table for containing new rows

  function manipulationTarget(elem, content) {
    if (nodeName(elem, "table") && nodeName(content.nodeType !== 11 ? content : content.firstChild, "tr")) {
      return jQuery(elem).children("tbody")[0] || elem;
    }

    return elem;
  } // Replace/restore the type attribute of script elements for safe DOM manipulation


  function disableScript(elem) {
    elem.type = (elem.getAttribute("type") !== null) + "/" + elem.type;
    return elem;
  }

  function restoreScript(elem) {
    if ((elem.type || "").slice(0, 5) === "true/") {
      elem.type = elem.type.slice(5);
    } else {
      elem.removeAttribute("type");
    }

    return elem;
  }

  function cloneCopyEvent(src, dest) {
    var i, l, type, pdataOld, udataOld, udataCur, events;

    if (dest.nodeType !== 1) {
      return;
    } // 1. Copy private data: events, handlers, etc.


    if (dataPriv.hasData(src)) {
      pdataOld = dataPriv.get(src);
      events = pdataOld.events;

      if (events) {
        dataPriv.remove(dest, "handle events");

        for (type in events) {
          for (i = 0, l = events[type].length; i < l; i++) {
            jQuery.event.add(dest, type, events[type][i]);
          }
        }
      }
    } // 2. Copy user data


    if (dataUser.hasData(src)) {
      udataOld = dataUser.access(src);
      udataCur = jQuery.extend({}, udataOld);
      dataUser.set(dest, udataCur);
    }
  } // Fix IE bugs, see support tests


  function fixInput(src, dest) {
    var nodeName = dest.nodeName.toLowerCase(); // Fails to persist the checked state of a cloned checkbox or radio button.

    if (nodeName === "input" && rcheckableType.test(src.type)) {
      dest.checked = src.checked; // Fails to return the selected option to the default selected state when cloning options
    } else if (nodeName === "input" || nodeName === "textarea") {
      dest.defaultValue = src.defaultValue;
    }
  }

  function domManip(collection, args, callback, ignored) {
    // Flatten any nested arrays
    args = flat(args);
    var fragment,
        first,
        scripts,
        hasScripts,
        node,
        doc,
        i = 0,
        l = collection.length,
        iNoClone = l - 1,
        value = args[0],
        valueIsFunction = isFunction(value); // We can't cloneNode fragments that contain checked, in WebKit

    if (valueIsFunction || l > 1 && typeof value === "string" && !support.checkClone && rchecked.test(value)) {
      return collection.each(function (index) {
        var self = collection.eq(index);

        if (valueIsFunction) {
          args[0] = value.call(this, index, self.html());
        }

        domManip(self, args, callback, ignored);
      });
    }

    if (l) {
      fragment = buildFragment(args, collection[0].ownerDocument, false, collection, ignored);
      first = fragment.firstChild;

      if (fragment.childNodes.length === 1) {
        fragment = first;
      } // Require either new content or an interest in ignored elements to invoke the callback


      if (first || ignored) {
        scripts = jQuery.map(getAll(fragment, "script"), disableScript);
        hasScripts = scripts.length; // Use the original fragment for the last item
        // instead of the first because it can end up
        // being emptied incorrectly in certain situations (#8070).

        for (; i < l; i++) {
          node = fragment;

          if (i !== iNoClone) {
            node = jQuery.clone(node, true, true); // Keep references to cloned scripts for later restoration

            if (hasScripts) {
              // Support: Android <=4.0 only, PhantomJS 1 only
              // push.apply(_, arraylike) throws on ancient WebKit
              jQuery.merge(scripts, getAll(node, "script"));
            }
          }

          callback.call(collection[i], node, i);
        }

        if (hasScripts) {
          doc = scripts[scripts.length - 1].ownerDocument; // Reenable scripts

          jQuery.map(scripts, restoreScript); // Evaluate executable scripts on first document insertion

          for (i = 0; i < hasScripts; i++) {
            node = scripts[i];

            if (rscriptType.test(node.type || "") && !dataPriv.access(node, "globalEval") && jQuery.contains(doc, node)) {
              if (node.src && (node.type || "").toLowerCase() !== "module") {
                // Optional AJAX dependency, but won't run scripts if not present
                if (jQuery._evalUrl && !node.noModule) {
                  jQuery._evalUrl(node.src, {
                    nonce: node.nonce || node.getAttribute("nonce")
                  }, doc);
                }
              } else {
                DOMEval(node.textContent.replace(rcleanScript, ""), node, doc);
              }
            }
          }
        }
      }
    }

    return collection;
  }

  function _remove(elem, selector, keepData) {
    var node,
        nodes = selector ? jQuery.filter(selector, elem) : elem,
        i = 0;

    for (; (node = nodes[i]) != null; i++) {
      if (!keepData && node.nodeType === 1) {
        jQuery.cleanData(getAll(node));
      }

      if (node.parentNode) {
        if (keepData && isAttached(node)) {
          setGlobalEval(getAll(node, "script"));
        }

        node.parentNode.removeChild(node);
      }
    }

    return elem;
  }

  jQuery.extend({
    htmlPrefilter: function htmlPrefilter(html) {
      return html;
    },
    clone: function clone(elem, dataAndEvents, deepDataAndEvents) {
      var i,
          l,
          srcElements,
          destElements,
          clone = elem.cloneNode(true),
          inPage = isAttached(elem); // Fix IE cloning issues

      if (!support.noCloneChecked && (elem.nodeType === 1 || elem.nodeType === 11) && !jQuery.isXMLDoc(elem)) {
        // We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
        destElements = getAll(clone);
        srcElements = getAll(elem);

        for (i = 0, l = srcElements.length; i < l; i++) {
          fixInput(srcElements[i], destElements[i]);
        }
      } // Copy the events from the original to the clone


      if (dataAndEvents) {
        if (deepDataAndEvents) {
          srcElements = srcElements || getAll(elem);
          destElements = destElements || getAll(clone);

          for (i = 0, l = srcElements.length; i < l; i++) {
            cloneCopyEvent(srcElements[i], destElements[i]);
          }
        } else {
          cloneCopyEvent(elem, clone);
        }
      } // Preserve script evaluation history


      destElements = getAll(clone, "script");

      if (destElements.length > 0) {
        setGlobalEval(destElements, !inPage && getAll(elem, "script"));
      } // Return the cloned set


      return clone;
    },
    cleanData: function cleanData(elems) {
      var data,
          elem,
          type,
          special = jQuery.event.special,
          i = 0;

      for (; (elem = elems[i]) !== undefined; i++) {
        if (acceptData(elem)) {
          if (data = elem[dataPriv.expando]) {
            if (data.events) {
              for (type in data.events) {
                if (special[type]) {
                  jQuery.event.remove(elem, type); // This is a shortcut to avoid jQuery.event.remove's overhead
                } else {
                  jQuery.removeEvent(elem, type, data.handle);
                }
              }
            } // Support: Chrome <=35 - 45+
            // Assign undefined instead of using delete, see Data#remove


            elem[dataPriv.expando] = undefined;
          }

          if (elem[dataUser.expando]) {
            // Support: Chrome <=35 - 45+
            // Assign undefined instead of using delete, see Data#remove
            elem[dataUser.expando] = undefined;
          }
        }
      }
    }
  });
  jQuery.fn.extend({
    detach: function detach(selector) {
      return _remove(this, selector, true);
    },
    remove: function remove(selector) {
      return _remove(this, selector);
    },
    text: function text(value) {
      return access(this, function (value) {
        return value === undefined ? jQuery.text(this) : this.empty().each(function () {
          if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
            this.textContent = value;
          }
        });
      }, null, value, arguments.length);
    },
    append: function append() {
      return domManip(this, arguments, function (elem) {
        if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
          var target = manipulationTarget(this, elem);
          target.appendChild(elem);
        }
      });
    },
    prepend: function prepend() {
      return domManip(this, arguments, function (elem) {
        if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
          var target = manipulationTarget(this, elem);
          target.insertBefore(elem, target.firstChild);
        }
      });
    },
    before: function before() {
      return domManip(this, arguments, function (elem) {
        if (this.parentNode) {
          this.parentNode.insertBefore(elem, this);
        }
      });
    },
    after: function after() {
      return domManip(this, arguments, function (elem) {
        if (this.parentNode) {
          this.parentNode.insertBefore(elem, this.nextSibling);
        }
      });
    },
    empty: function empty() {
      var elem,
          i = 0;

      for (; (elem = this[i]) != null; i++) {
        if (elem.nodeType === 1) {
          // Prevent memory leaks
          jQuery.cleanData(getAll(elem, false)); // Remove any remaining nodes

          elem.textContent = "";
        }
      }

      return this;
    },
    clone: function clone(dataAndEvents, deepDataAndEvents) {
      dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
      deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;
      return this.map(function () {
        return jQuery.clone(this, dataAndEvents, deepDataAndEvents);
      });
    },
    html: function html(value) {
      return access(this, function (value) {
        var elem = this[0] || {},
            i = 0,
            l = this.length;

        if (value === undefined && elem.nodeType === 1) {
          return elem.innerHTML;
        } // See if we can take a shortcut and just use innerHTML


        if (typeof value === "string" && !rnoInnerhtml.test(value) && !wrapMap[(rtagName.exec(value) || ["", ""])[1].toLowerCase()]) {
          value = jQuery.htmlPrefilter(value);

          try {
            for (; i < l; i++) {
              elem = this[i] || {}; // Remove element nodes and prevent memory leaks

              if (elem.nodeType === 1) {
                jQuery.cleanData(getAll(elem, false));
                elem.innerHTML = value;
              }
            }

            elem = 0; // If using innerHTML throws an exception, use the fallback method
          } catch (e) {}
        }

        if (elem) {
          this.empty().append(value);
        }
      }, null, value, arguments.length);
    },
    replaceWith: function replaceWith() {
      var ignored = []; // Make the changes, replacing each non-ignored context element with the new content

      return domManip(this, arguments, function (elem) {
        var parent = this.parentNode;

        if (jQuery.inArray(this, ignored) < 0) {
          jQuery.cleanData(getAll(this));

          if (parent) {
            parent.replaceChild(elem, this);
          }
        } // Force callback invocation

      }, ignored);
    }
  });
  jQuery.each({
    appendTo: "append",
    prependTo: "prepend",
    insertBefore: "before",
    insertAfter: "after",
    replaceAll: "replaceWith"
  }, function (name, original) {
    jQuery.fn[name] = function (selector) {
      var elems,
          ret = [],
          insert = jQuery(selector),
          last = insert.length - 1,
          i = 0;

      for (; i <= last; i++) {
        elems = i === last ? this : this.clone(true);
        jQuery(insert[i])[original](elems); // Support: Android <=4.0 only, PhantomJS 1 only
        // .get() because push.apply(_, arraylike) throws on ancient WebKit

        push.apply(ret, elems.get());
      }

      return this.pushStack(ret);
    };
  });
  var rnumnonpx = new RegExp("^(" + pnum + ")(?!px)[a-z%]+$", "i");

  var getStyles = function getStyles(elem) {
    // Support: IE <=11 only, Firefox <=30 (#15098, #14150)
    // IE throws on elements created in popups
    // FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
    var view = elem.ownerDocument.defaultView;

    if (!view || !view.opener) {
      view = window;
    }

    return view.getComputedStyle(elem);
  };

  var swap = function swap(elem, options, callback) {
    var ret,
        name,
        old = {}; // Remember the old values, and insert the new ones

    for (name in options) {
      old[name] = elem.style[name];
      elem.style[name] = options[name];
    }

    ret = callback.call(elem); // Revert the old values

    for (name in options) {
      elem.style[name] = old[name];
    }

    return ret;
  };

  var rboxStyle = new RegExp(cssExpand.join("|"), "i");

  (function () {
    // Executing both pixelPosition & boxSizingReliable tests require only one layout
    // so they're executed at the same time to save the second computation.
    function computeStyleTests() {
      // This is a singleton, we need to execute it only once
      if (!div) {
        return;
      }

      container.style.cssText = "position:absolute;left:-11111px;width:60px;" + "margin-top:1px;padding:0;border:0";
      div.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;" + "margin:auto;border:1px;padding:1px;" + "width:60%;top:1%";
      documentElement.appendChild(container).appendChild(div);
      var divStyle = window.getComputedStyle(div);
      pixelPositionVal = divStyle.top !== "1%"; // Support: Android 4.0 - 4.3 only, Firefox <=3 - 44

      reliableMarginLeftVal = roundPixelMeasures(divStyle.marginLeft) === 12; // Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
      // Some styles come back with percentage values, even though they shouldn't

      div.style.right = "60%";
      pixelBoxStylesVal = roundPixelMeasures(divStyle.right) === 36; // Support: IE 9 - 11 only
      // Detect misreporting of content dimensions for box-sizing:border-box elements

      boxSizingReliableVal = roundPixelMeasures(divStyle.width) === 36; // Support: IE 9 only
      // Detect overflow:scroll screwiness (gh-3699)
      // Support: Chrome <=64
      // Don't get tricked when zoom affects offsetWidth (gh-4029)

      div.style.position = "absolute";
      scrollboxSizeVal = roundPixelMeasures(div.offsetWidth / 3) === 12;
      documentElement.removeChild(container); // Nullify the div so it wouldn't be stored in the memory and
      // it will also be a sign that checks already performed

      div = null;
    }

    function roundPixelMeasures(measure) {
      return Math.round(parseFloat(measure));
    }

    var pixelPositionVal,
        boxSizingReliableVal,
        scrollboxSizeVal,
        pixelBoxStylesVal,
        reliableTrDimensionsVal,
        reliableMarginLeftVal,
        container = document.createElement("div"),
        div = document.createElement("div"); // Finish early in limited (non-browser) environments

    if (!div.style) {
      return;
    } // Support: IE <=9 - 11 only
    // Style of cloned element affects source element cloned (#8908)


    div.style.backgroundClip = "content-box";
    div.cloneNode(true).style.backgroundClip = "";
    support.clearCloneStyle = div.style.backgroundClip === "content-box";
    jQuery.extend(support, {
      boxSizingReliable: function boxSizingReliable() {
        computeStyleTests();
        return boxSizingReliableVal;
      },
      pixelBoxStyles: function pixelBoxStyles() {
        computeStyleTests();
        return pixelBoxStylesVal;
      },
      pixelPosition: function pixelPosition() {
        computeStyleTests();
        return pixelPositionVal;
      },
      reliableMarginLeft: function reliableMarginLeft() {
        computeStyleTests();
        return reliableMarginLeftVal;
      },
      scrollboxSize: function scrollboxSize() {
        computeStyleTests();
        return scrollboxSizeVal;
      },
      // Support: IE 9 - 11+, Edge 15 - 18+
      // IE/Edge misreport `getComputedStyle` of table rows with width/height
      // set in CSS while `offset*` properties report correct values.
      // Behavior in IE 9 is more subtle than in newer versions & it passes
      // some versions of this test; make sure not to make it pass there!
      //
      // Support: Firefox 70+
      // Only Firefox includes border widths
      // in computed dimensions. (gh-4529)
      reliableTrDimensions: function reliableTrDimensions() {
        var table, tr, trChild, trStyle;

        if (reliableTrDimensionsVal == null) {
          table = document.createElement("table");
          tr = document.createElement("tr");
          trChild = document.createElement("div");
          table.style.cssText = "position:absolute;left:-11111px;border-collapse:separate";
          tr.style.cssText = "border:1px solid"; // Support: Chrome 86+
          // Height set through cssText does not get applied.
          // Computed height then comes back as 0.

          tr.style.height = "1px";
          trChild.style.height = "9px"; // Support: Android 8 Chrome 86+
          // In our bodyBackground.html iframe,
          // display for all div elements is set to "inline",
          // which causes a problem only in Android 8 Chrome 86.
          // Ensuring the div is display: block
          // gets around this issue.

          trChild.style.display = "block";
          documentElement.appendChild(table).appendChild(tr).appendChild(trChild);
          trStyle = window.getComputedStyle(tr);
          reliableTrDimensionsVal = parseInt(trStyle.height, 10) + parseInt(trStyle.borderTopWidth, 10) + parseInt(trStyle.borderBottomWidth, 10) === tr.offsetHeight;
          documentElement.removeChild(table);
        }

        return reliableTrDimensionsVal;
      }
    });
  })();

  function curCSS(elem, name, computed) {
    var width,
        minWidth,
        maxWidth,
        ret,
        // Support: Firefox 51+
    // Retrieving style before computed somehow
    // fixes an issue with getting wrong values
    // on detached elements
    style = elem.style;
    computed = computed || getStyles(elem); // getPropertyValue is needed for:
    //   .css('filter') (IE 9 only, #12537)
    //   .css('--customProperty) (#3144)

    if (computed) {
      ret = computed.getPropertyValue(name) || computed[name];

      if (ret === "" && !isAttached(elem)) {
        ret = jQuery.style(elem, name);
      } // A tribute to the "awesome hack by Dean Edwards"
      // Android Browser returns percentage for some values,
      // but width seems to be reliably pixels.
      // This is against the CSSOM draft spec:
      // https://drafts.csswg.org/cssom/#resolved-values


      if (!support.pixelBoxStyles() && rnumnonpx.test(ret) && rboxStyle.test(name)) {
        // Remember the original values
        width = style.width;
        minWidth = style.minWidth;
        maxWidth = style.maxWidth; // Put in the new values to get a computed value out

        style.minWidth = style.maxWidth = style.width = ret;
        ret = computed.width; // Revert the changed values

        style.width = width;
        style.minWidth = minWidth;
        style.maxWidth = maxWidth;
      }
    }

    return ret !== undefined ? // Support: IE <=9 - 11 only
    // IE returns zIndex value as an integer.
    ret + "" : ret;
  }

  function addGetHookIf(conditionFn, hookFn) {
    // Define the hook, we'll check on the first run if it's really needed.
    return {
      get: function get() {
        if (conditionFn()) {
          // Hook not needed (or it's not possible to use it due
          // to missing dependency), remove it.
          delete this.get;
          return;
        } // Hook needed; redefine it so that the support test is not executed again.


        return (this.get = hookFn).apply(this, arguments);
      }
    };
  }

  var cssPrefixes = ["Webkit", "Moz", "ms"],
      emptyStyle = document.createElement("div").style,
      vendorProps = {}; // Return a vendor-prefixed property or undefined

  function vendorPropName(name) {
    // Check for vendor prefixed names
    var capName = name[0].toUpperCase() + name.slice(1),
        i = cssPrefixes.length;

    while (i--) {
      name = cssPrefixes[i] + capName;

      if (name in emptyStyle) {
        return name;
      }
    }
  } // Return a potentially-mapped jQuery.cssProps or vendor prefixed property


  function finalPropName(name) {
    var _final = jQuery.cssProps[name] || vendorProps[name];

    if (_final) {
      return _final;
    }

    if (name in emptyStyle) {
      return name;
    }

    return vendorProps[name] = vendorPropName(name) || name;
  }

  var // Swappable if display is none or starts with table
  // except "table", "table-cell", or "table-caption"
  // See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
  rdisplayswap = /^(none|table(?!-c[ea]).+)/,
      rcustomProp = /^--/,
      cssShow = {
    position: "absolute",
    visibility: "hidden",
    display: "block"
  },
      cssNormalTransform = {
    letterSpacing: "0",
    fontWeight: "400"
  };

  function setPositiveNumber(_elem, value, subtract) {
    // Any relative (+/-) values have already been
    // normalized at this point
    var matches = rcssNum.exec(value);
    return matches ? // Guard against undefined "subtract", e.g., when used as in cssHooks
    Math.max(0, matches[2] - (subtract || 0)) + (matches[3] || "px") : value;
  }

  function boxModelAdjustment(elem, dimension, box, isBorderBox, styles, computedVal) {
    var i = dimension === "width" ? 1 : 0,
        extra = 0,
        delta = 0; // Adjustment may not be necessary

    if (box === (isBorderBox ? "border" : "content")) {
      return 0;
    }

    for (; i < 4; i += 2) {
      // Both box models exclude margin
      if (box === "margin") {
        delta += jQuery.css(elem, box + cssExpand[i], true, styles);
      } // If we get here with a content-box, we're seeking "padding" or "border" or "margin"


      if (!isBorderBox) {
        // Add padding
        delta += jQuery.css(elem, "padding" + cssExpand[i], true, styles); // For "border" or "margin", add border

        if (box !== "padding") {
          delta += jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles); // But still keep track of it otherwise
        } else {
          extra += jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
        } // If we get here with a border-box (content + padding + border), we're seeking "content" or
        // "padding" or "margin"

      } else {
        // For "content", subtract padding
        if (box === "content") {
          delta -= jQuery.css(elem, "padding" + cssExpand[i], true, styles);
        } // For "content" or "padding", subtract border


        if (box !== "margin") {
          delta -= jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
        }
      }
    } // Account for positive content-box scroll gutter when requested by providing computedVal


    if (!isBorderBox && computedVal >= 0) {
      // offsetWidth/offsetHeight is a rounded sum of content, padding, scroll gutter, and border
      // Assuming integer scroll gutter, subtract the rest and round down
      delta += Math.max(0, Math.ceil(elem["offset" + dimension[0].toUpperCase() + dimension.slice(1)] - computedVal - delta - extra - 0.5 // If offsetWidth/offsetHeight is unknown, then we can't determine content-box scroll gutter
      // Use an explicit zero to avoid NaN (gh-3964)
      )) || 0;
    }

    return delta;
  }

  function getWidthOrHeight(elem, dimension, extra) {
    // Start with computed style
    var styles = getStyles(elem),
        // To avoid forcing a reflow, only fetch boxSizing if we need it (gh-4322).
    // Fake content-box until we know it's needed to know the true value.
    boxSizingNeeded = !support.boxSizingReliable() || extra,
        isBorderBox = boxSizingNeeded && jQuery.css(elem, "boxSizing", false, styles) === "border-box",
        valueIsBorderBox = isBorderBox,
        val = curCSS(elem, dimension, styles),
        offsetProp = "offset" + dimension[0].toUpperCase() + dimension.slice(1); // Support: Firefox <=54
    // Return a confounding non-pixel value or feign ignorance, as appropriate.

    if (rnumnonpx.test(val)) {
      if (!extra) {
        return val;
      }

      val = "auto";
    } // Support: IE 9 - 11 only
    // Use offsetWidth/offsetHeight for when box sizing is unreliable.
    // In those cases, the computed value can be trusted to be border-box.


    if ((!support.boxSizingReliable() && isBorderBox || // Support: IE 10 - 11+, Edge 15 - 18+
    // IE/Edge misreport `getComputedStyle` of table rows with width/height
    // set in CSS while `offset*` properties report correct values.
    // Interestingly, in some cases IE 9 doesn't suffer from this issue.
    !support.reliableTrDimensions() && nodeName(elem, "tr") || // Fall back to offsetWidth/offsetHeight when value is "auto"
    // This happens for inline elements with no explicit setting (gh-3571)
    val === "auto" || // Support: Android <=4.1 - 4.3 only
    // Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
    !parseFloat(val) && jQuery.css(elem, "display", false, styles) === "inline") && // Make sure the element is visible & connected
    elem.getClientRects().length) {
      isBorderBox = jQuery.css(elem, "boxSizing", false, styles) === "border-box"; // Where available, offsetWidth/offsetHeight approximate border box dimensions.
      // Where not available (e.g., SVG), assume unreliable box-sizing and interpret the
      // retrieved value as a content box dimension.

      valueIsBorderBox = offsetProp in elem;

      if (valueIsBorderBox) {
        val = elem[offsetProp];
      }
    } // Normalize "" and auto


    val = parseFloat(val) || 0; // Adjust for the element's box model

    return val + boxModelAdjustment(elem, dimension, extra || (isBorderBox ? "border" : "content"), valueIsBorderBox, styles, // Provide the current computed size to request scroll gutter calculation (gh-3589)
    val) + "px";
  }

  jQuery.extend({
    // Add in style property hooks for overriding the default
    // behavior of getting and setting a style property
    cssHooks: {
      opacity: {
        get: function get(elem, computed) {
          if (computed) {
            // We should always get a number back from opacity
            var ret = curCSS(elem, "opacity");
            return ret === "" ? "1" : ret;
          }
        }
      }
    },
    // Don't automatically add "px" to these possibly-unitless properties
    cssNumber: {
      "animationIterationCount": true,
      "columnCount": true,
      "fillOpacity": true,
      "flexGrow": true,
      "flexShrink": true,
      "fontWeight": true,
      "gridArea": true,
      "gridColumn": true,
      "gridColumnEnd": true,
      "gridColumnStart": true,
      "gridRow": true,
      "gridRowEnd": true,
      "gridRowStart": true,
      "lineHeight": true,
      "opacity": true,
      "order": true,
      "orphans": true,
      "widows": true,
      "zIndex": true,
      "zoom": true
    },
    // Add in properties whose names you wish to fix before
    // setting or getting the value
    cssProps: {},
    // Get and set the style property on a DOM Node
    style: function style(elem, name, value, extra) {
      // Don't set styles on text and comment nodes
      if (!elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style) {
        return;
      } // Make sure that we're working with the right name


      var ret,
          type,
          hooks,
          origName = camelCase(name),
          isCustomProp = rcustomProp.test(name),
          style = elem.style; // Make sure that we're working with the right name. We don't
      // want to query the value if it is a CSS custom property
      // since they are user-defined.

      if (!isCustomProp) {
        name = finalPropName(origName);
      } // Gets hook for the prefixed version, then unprefixed version


      hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName]; // Check if we're setting a value

      if (value !== undefined) {
        type = _typeof(value); // Convert "+=" or "-=" to relative numbers (#7345)

        if (type === "string" && (ret = rcssNum.exec(value)) && ret[1]) {
          value = adjustCSS(elem, name, ret); // Fixes bug #9237

          type = "number";
        } // Make sure that null and NaN values aren't set (#7116)


        if (value == null || value !== value) {
          return;
        } // If a number was passed in, add the unit (except for certain CSS properties)
        // The isCustomProp check can be removed in jQuery 4.0 when we only auto-append
        // "px" to a few hardcoded values.


        if (type === "number" && !isCustomProp) {
          value += ret && ret[3] || (jQuery.cssNumber[origName] ? "" : "px");
        } // background-* props affect original clone's values


        if (!support.clearCloneStyle && value === "" && name.indexOf("background") === 0) {
          style[name] = "inherit";
        } // If a hook was provided, use that value, otherwise just set the specified value


        if (!hooks || !("set" in hooks) || (value = hooks.set(elem, value, extra)) !== undefined) {
          if (isCustomProp) {
            style.setProperty(name, value);
          } else {
            style[name] = value;
          }
        }
      } else {
        // If a hook was provided get the non-computed value from there
        if (hooks && "get" in hooks && (ret = hooks.get(elem, false, extra)) !== undefined) {
          return ret;
        } // Otherwise just get the value from the style object


        return style[name];
      }
    },
    css: function css(elem, name, extra, styles) {
      var val,
          num,
          hooks,
          origName = camelCase(name),
          isCustomProp = rcustomProp.test(name); // Make sure that we're working with the right name. We don't
      // want to modify the value if it is a CSS custom property
      // since they are user-defined.

      if (!isCustomProp) {
        name = finalPropName(origName);
      } // Try prefixed name followed by the unprefixed name


      hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName]; // If a hook was provided get the computed value from there

      if (hooks && "get" in hooks) {
        val = hooks.get(elem, true, extra);
      } // Otherwise, if a way to get the computed value exists, use that


      if (val === undefined) {
        val = curCSS(elem, name, styles);
      } // Convert "normal" to computed value


      if (val === "normal" && name in cssNormalTransform) {
        val = cssNormalTransform[name];
      } // Make numeric if forced or a qualifier was provided and val looks numeric


      if (extra === "" || extra) {
        num = parseFloat(val);
        return extra === true || isFinite(num) ? num || 0 : val;
      }

      return val;
    }
  });
  jQuery.each(["height", "width"], function (_i, dimension) {
    jQuery.cssHooks[dimension] = {
      get: function get(elem, computed, extra) {
        if (computed) {
          // Certain elements can have dimension info if we invisibly show them
          // but it must have a current display style that would benefit
          return rdisplayswap.test(jQuery.css(elem, "display")) && ( // Support: Safari 8+
          // Table columns in Safari have non-zero offsetWidth & zero
          // getBoundingClientRect().width unless display is changed.
          // Support: IE <=11 only
          // Running getBoundingClientRect on a disconnected node
          // in IE throws an error.
          !elem.getClientRects().length || !elem.getBoundingClientRect().width) ? swap(elem, cssShow, function () {
            return getWidthOrHeight(elem, dimension, extra);
          }) : getWidthOrHeight(elem, dimension, extra);
        }
      },
      set: function set(elem, value, extra) {
        var matches,
            styles = getStyles(elem),
            // Only read styles.position if the test has a chance to fail
        // to avoid forcing a reflow.
        scrollboxSizeBuggy = !support.scrollboxSize() && styles.position === "absolute",
            // To avoid forcing a reflow, only fetch boxSizing if we need it (gh-3991)
        boxSizingNeeded = scrollboxSizeBuggy || extra,
            isBorderBox = boxSizingNeeded && jQuery.css(elem, "boxSizing", false, styles) === "border-box",
            subtract = extra ? boxModelAdjustment(elem, dimension, extra, isBorderBox, styles) : 0; // Account for unreliable border-box dimensions by comparing offset* to computed and
        // faking a content-box to get border and padding (gh-3699)

        if (isBorderBox && scrollboxSizeBuggy) {
          subtract -= Math.ceil(elem["offset" + dimension[0].toUpperCase() + dimension.slice(1)] - parseFloat(styles[dimension]) - boxModelAdjustment(elem, dimension, "border", false, styles) - 0.5);
        } // Convert to pixels if value adjustment is needed


        if (subtract && (matches = rcssNum.exec(value)) && (matches[3] || "px") !== "px") {
          elem.style[dimension] = value;
          value = jQuery.css(elem, dimension);
        }

        return setPositiveNumber(elem, value, subtract);
      }
    };
  });
  jQuery.cssHooks.marginLeft = addGetHookIf(support.reliableMarginLeft, function (elem, computed) {
    if (computed) {
      return (parseFloat(curCSS(elem, "marginLeft")) || elem.getBoundingClientRect().left - swap(elem, {
        marginLeft: 0
      }, function () {
        return elem.getBoundingClientRect().left;
      })) + "px";
    }
  }); // These hooks are used by animate to expand properties

  jQuery.each({
    margin: "",
    padding: "",
    border: "Width"
  }, function (prefix, suffix) {
    jQuery.cssHooks[prefix + suffix] = {
      expand: function expand(value) {
        var i = 0,
            expanded = {},
            // Assumes a single number if not a string
        parts = typeof value === "string" ? value.split(" ") : [value];

        for (; i < 4; i++) {
          expanded[prefix + cssExpand[i] + suffix] = parts[i] || parts[i - 2] || parts[0];
        }

        return expanded;
      }
    };

    if (prefix !== "margin") {
      jQuery.cssHooks[prefix + suffix].set = setPositiveNumber;
    }
  });
  jQuery.fn.extend({
    css: function css(name, value) {
      return access(this, function (elem, name, value) {
        var styles,
            len,
            map = {},
            i = 0;

        if (Array.isArray(name)) {
          styles = getStyles(elem);
          len = name.length;

          for (; i < len; i++) {
            map[name[i]] = jQuery.css(elem, name[i], false, styles);
          }

          return map;
        }

        return value !== undefined ? jQuery.style(elem, name, value) : jQuery.css(elem, name);
      }, name, value, arguments.length > 1);
    }
  });

  function Tween(elem, options, prop, end, easing) {
    return new Tween.prototype.init(elem, options, prop, end, easing);
  }

  jQuery.Tween = Tween;
  Tween.prototype = {
    constructor: Tween,
    init: function init(elem, options, prop, end, easing, unit) {
      this.elem = elem;
      this.prop = prop;
      this.easing = easing || jQuery.easing._default;
      this.options = options;
      this.start = this.now = this.cur();
      this.end = end;
      this.unit = unit || (jQuery.cssNumber[prop] ? "" : "px");
    },
    cur: function cur() {
      var hooks = Tween.propHooks[this.prop];
      return hooks && hooks.get ? hooks.get(this) : Tween.propHooks._default.get(this);
    },
    run: function run(percent) {
      var eased,
          hooks = Tween.propHooks[this.prop];

      if (this.options.duration) {
        this.pos = eased = jQuery.easing[this.easing](percent, this.options.duration * percent, 0, 1, this.options.duration);
      } else {
        this.pos = eased = percent;
      }

      this.now = (this.end - this.start) * eased + this.start;

      if (this.options.step) {
        this.options.step.call(this.elem, this.now, this);
      }

      if (hooks && hooks.set) {
        hooks.set(this);
      } else {
        Tween.propHooks._default.set(this);
      }

      return this;
    }
  };
  Tween.prototype.init.prototype = Tween.prototype;
  Tween.propHooks = {
    _default: {
      get: function get(tween) {
        var result; // Use a property on the element directly when it is not a DOM element,
        // or when there is no matching style property that exists.

        if (tween.elem.nodeType !== 1 || tween.elem[tween.prop] != null && tween.elem.style[tween.prop] == null) {
          return tween.elem[tween.prop];
        } // Passing an empty string as a 3rd parameter to .css will automatically
        // attempt a parseFloat and fallback to a string if the parse fails.
        // Simple values such as "10px" are parsed to Float;
        // complex values such as "rotate(1rad)" are returned as-is.


        result = jQuery.css(tween.elem, tween.prop, ""); // Empty strings, null, undefined and "auto" are converted to 0.

        return !result || result === "auto" ? 0 : result;
      },
      set: function set(tween) {
        // Use step hook for back compat.
        // Use cssHook if its there.
        // Use .style if available and use plain properties where available.
        if (jQuery.fx.step[tween.prop]) {
          jQuery.fx.step[tween.prop](tween);
        } else if (tween.elem.nodeType === 1 && (jQuery.cssHooks[tween.prop] || tween.elem.style[finalPropName(tween.prop)] != null)) {
          jQuery.style(tween.elem, tween.prop, tween.now + tween.unit);
        } else {
          tween.elem[tween.prop] = tween.now;
        }
      }
    }
  }; // Support: IE <=9 only
  // Panic based approach to setting things on disconnected nodes

  Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
    set: function set(tween) {
      if (tween.elem.nodeType && tween.elem.parentNode) {
        tween.elem[tween.prop] = tween.now;
      }
    }
  };
  jQuery.easing = {
    linear: function linear(p) {
      return p;
    },
    swing: function swing(p) {
      return 0.5 - Math.cos(p * Math.PI) / 2;
    },
    _default: "swing"
  };
  jQuery.fx = Tween.prototype.init; // Back compat <1.8 extension point

  jQuery.fx.step = {};
  var fxNow,
      inProgress,
      rfxtypes = /^(?:toggle|show|hide)$/,
      rrun = /queueHooks$/;

  function schedule() {
    if (inProgress) {
      if (document.hidden === false && window.requestAnimationFrame) {
        window.requestAnimationFrame(schedule);
      } else {
        window.setTimeout(schedule, jQuery.fx.interval);
      }

      jQuery.fx.tick();
    }
  } // Animations created synchronously will run synchronously


  function createFxNow() {
    window.setTimeout(function () {
      fxNow = undefined;
    });
    return fxNow = Date.now();
  } // Generate parameters to create a standard animation


  function genFx(type, includeWidth) {
    var which,
        i = 0,
        attrs = {
      height: type
    }; // If we include width, step value is 1 to do all cssExpand values,
    // otherwise step value is 2 to skip over Left and Right

    includeWidth = includeWidth ? 1 : 0;

    for (; i < 4; i += 2 - includeWidth) {
      which = cssExpand[i];
      attrs["margin" + which] = attrs["padding" + which] = type;
    }

    if (includeWidth) {
      attrs.opacity = attrs.width = type;
    }

    return attrs;
  }

  function createTween(value, prop, animation) {
    var tween,
        collection = (Animation.tweeners[prop] || []).concat(Animation.tweeners["*"]),
        index = 0,
        length = collection.length;

    for (; index < length; index++) {
      if (tween = collection[index].call(animation, prop, value)) {
        // We're done with this property
        return tween;
      }
    }
  }

  function defaultPrefilter(elem, props, opts) {
    var prop,
        value,
        toggle,
        hooks,
        oldfire,
        propTween,
        restoreDisplay,
        display,
        isBox = "width" in props || "height" in props,
        anim = this,
        orig = {},
        style = elem.style,
        hidden = elem.nodeType && isHiddenWithinTree(elem),
        dataShow = dataPriv.get(elem, "fxshow"); // Queue-skipping animations hijack the fx hooks

    if (!opts.queue) {
      hooks = jQuery._queueHooks(elem, "fx");

      if (hooks.unqueued == null) {
        hooks.unqueued = 0;
        oldfire = hooks.empty.fire;

        hooks.empty.fire = function () {
          if (!hooks.unqueued) {
            oldfire();
          }
        };
      }

      hooks.unqueued++;
      anim.always(function () {
        // Ensure the complete handler is called before this completes
        anim.always(function () {
          hooks.unqueued--;

          if (!jQuery.queue(elem, "fx").length) {
            hooks.empty.fire();
          }
        });
      });
    } // Detect show/hide animations


    for (prop in props) {
      value = props[prop];

      if (rfxtypes.test(value)) {
        delete props[prop];
        toggle = toggle || value === "toggle";

        if (value === (hidden ? "hide" : "show")) {
          // Pretend to be hidden if this is a "show" and
          // there is still data from a stopped show/hide
          if (value === "show" && dataShow && dataShow[prop] !== undefined) {
            hidden = true; // Ignore all other no-op show/hide data
          } else {
            continue;
          }
        }

        orig[prop] = dataShow && dataShow[prop] || jQuery.style(elem, prop);
      }
    } // Bail out if this is a no-op like .hide().hide()


    propTween = !jQuery.isEmptyObject(props);

    if (!propTween && jQuery.isEmptyObject(orig)) {
      return;
    } // Restrict "overflow" and "display" styles during box animations


    if (isBox && elem.nodeType === 1) {
      // Support: IE <=9 - 11, Edge 12 - 15
      // Record all 3 overflow attributes because IE does not infer the shorthand
      // from identically-valued overflowX and overflowY and Edge just mirrors
      // the overflowX value there.
      opts.overflow = [style.overflow, style.overflowX, style.overflowY]; // Identify a display type, preferring old show/hide data over the CSS cascade

      restoreDisplay = dataShow && dataShow.display;

      if (restoreDisplay == null) {
        restoreDisplay = dataPriv.get(elem, "display");
      }

      display = jQuery.css(elem, "display");

      if (display === "none") {
        if (restoreDisplay) {
          display = restoreDisplay;
        } else {
          // Get nonempty value(s) by temporarily forcing visibility
          showHide([elem], true);
          restoreDisplay = elem.style.display || restoreDisplay;
          display = jQuery.css(elem, "display");
          showHide([elem]);
        }
      } // Animate inline elements as inline-block


      if (display === "inline" || display === "inline-block" && restoreDisplay != null) {
        if (jQuery.css(elem, "float") === "none") {
          // Restore the original display value at the end of pure show/hide animations
          if (!propTween) {
            anim.done(function () {
              style.display = restoreDisplay;
            });

            if (restoreDisplay == null) {
              display = style.display;
              restoreDisplay = display === "none" ? "" : display;
            }
          }

          style.display = "inline-block";
        }
      }
    }

    if (opts.overflow) {
      style.overflow = "hidden";
      anim.always(function () {
        style.overflow = opts.overflow[0];
        style.overflowX = opts.overflow[1];
        style.overflowY = opts.overflow[2];
      });
    } // Implement show/hide animations


    propTween = false;

    for (prop in orig) {
      // General show/hide setup for this element animation
      if (!propTween) {
        if (dataShow) {
          if ("hidden" in dataShow) {
            hidden = dataShow.hidden;
          }
        } else {
          dataShow = dataPriv.access(elem, "fxshow", {
            display: restoreDisplay
          });
        } // Store hidden/visible for toggle so `.stop().toggle()` "reverses"


        if (toggle) {
          dataShow.hidden = !hidden;
        } // Show elements before animating them


        if (hidden) {
          showHide([elem], true);
        }
        /* eslint-disable no-loop-func */


        anim.done(function () {
          /* eslint-enable no-loop-func */
          // The final step of a "hide" animation is actually hiding the element
          if (!hidden) {
            showHide([elem]);
          }

          dataPriv.remove(elem, "fxshow");

          for (prop in orig) {
            jQuery.style(elem, prop, orig[prop]);
          }
        });
      } // Per-property setup


      propTween = createTween(hidden ? dataShow[prop] : 0, prop, anim);

      if (!(prop in dataShow)) {
        dataShow[prop] = propTween.start;

        if (hidden) {
          propTween.end = propTween.start;
          propTween.start = 0;
        }
      }
    }
  }

  function propFilter(props, specialEasing) {
    var index, name, easing, value, hooks; // camelCase, specialEasing and expand cssHook pass

    for (index in props) {
      name = camelCase(index);
      easing = specialEasing[name];
      value = props[index];

      if (Array.isArray(value)) {
        easing = value[1];
        value = props[index] = value[0];
      }

      if (index !== name) {
        props[name] = value;
        delete props[index];
      }

      hooks = jQuery.cssHooks[name];

      if (hooks && "expand" in hooks) {
        value = hooks.expand(value);
        delete props[name]; // Not quite $.extend, this won't overwrite existing keys.
        // Reusing 'index' because we have the correct "name"

        for (index in value) {
          if (!(index in props)) {
            props[index] = value[index];
            specialEasing[index] = easing;
          }
        }
      } else {
        specialEasing[name] = easing;
      }
    }
  }

  function Animation(elem, properties, options) {
    var result,
        stopped,
        index = 0,
        length = Animation.prefilters.length,
        deferred = jQuery.Deferred().always(function () {
      // Don't match elem in the :animated selector
      delete tick.elem;
    }),
        tick = function tick() {
      if (stopped) {
        return false;
      }

      var currentTime = fxNow || createFxNow(),
          remaining = Math.max(0, animation.startTime + animation.duration - currentTime),
          // Support: Android 2.3 only
      // Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
      temp = remaining / animation.duration || 0,
          percent = 1 - temp,
          index = 0,
          length = animation.tweens.length;

      for (; index < length; index++) {
        animation.tweens[index].run(percent);
      }

      deferred.notifyWith(elem, [animation, percent, remaining]); // If there's more to do, yield

      if (percent < 1 && length) {
        return remaining;
      } // If this was an empty animation, synthesize a final progress notification


      if (!length) {
        deferred.notifyWith(elem, [animation, 1, 0]);
      } // Resolve the animation and report its conclusion


      deferred.resolveWith(elem, [animation]);
      return false;
    },
        animation = deferred.promise({
      elem: elem,
      props: jQuery.extend({}, properties),
      opts: jQuery.extend(true, {
        specialEasing: {},
        easing: jQuery.easing._default
      }, options),
      originalProperties: properties,
      originalOptions: options,
      startTime: fxNow || createFxNow(),
      duration: options.duration,
      tweens: [],
      createTween: function createTween(prop, end) {
        var tween = jQuery.Tween(elem, animation.opts, prop, end, animation.opts.specialEasing[prop] || animation.opts.easing);
        animation.tweens.push(tween);
        return tween;
      },
      stop: function stop(gotoEnd) {
        var index = 0,
            // If we are going to the end, we want to run all the tweens
        // otherwise we skip this part
        length = gotoEnd ? animation.tweens.length : 0;

        if (stopped) {
          return this;
        }

        stopped = true;

        for (; index < length; index++) {
          animation.tweens[index].run(1);
        } // Resolve when we played the last frame; otherwise, reject


        if (gotoEnd) {
          deferred.notifyWith(elem, [animation, 1, 0]);
          deferred.resolveWith(elem, [animation, gotoEnd]);
        } else {
          deferred.rejectWith(elem, [animation, gotoEnd]);
        }

        return this;
      }
    }),
        props = animation.props;

    propFilter(props, animation.opts.specialEasing);

    for (; index < length; index++) {
      result = Animation.prefilters[index].call(animation, elem, props, animation.opts);

      if (result) {
        if (isFunction(result.stop)) {
          jQuery._queueHooks(animation.elem, animation.opts.queue).stop = result.stop.bind(result);
        }

        return result;
      }
    }

    jQuery.map(props, createTween, animation);

    if (isFunction(animation.opts.start)) {
      animation.opts.start.call(elem, animation);
    } // Attach callbacks from options


    animation.progress(animation.opts.progress).done(animation.opts.done, animation.opts.complete).fail(animation.opts.fail).always(animation.opts.always);
    jQuery.fx.timer(jQuery.extend(tick, {
      elem: elem,
      anim: animation,
      queue: animation.opts.queue
    }));
    return animation;
  }

  jQuery.Animation = jQuery.extend(Animation, {
    tweeners: {
      "*": [function (prop, value) {
        var tween = this.createTween(prop, value);
        adjustCSS(tween.elem, prop, rcssNum.exec(value), tween);
        return tween;
      }]
    },
    tweener: function tweener(props, callback) {
      if (isFunction(props)) {
        callback = props;
        props = ["*"];
      } else {
        props = props.match(rnothtmlwhite);
      }

      var prop,
          index = 0,
          length = props.length;

      for (; index < length; index++) {
        prop = props[index];
        Animation.tweeners[prop] = Animation.tweeners[prop] || [];
        Animation.tweeners[prop].unshift(callback);
      }
    },
    prefilters: [defaultPrefilter],
    prefilter: function prefilter(callback, prepend) {
      if (prepend) {
        Animation.prefilters.unshift(callback);
      } else {
        Animation.prefilters.push(callback);
      }
    }
  });

  jQuery.speed = function (speed, easing, fn) {
    var opt = speed && _typeof(speed) === "object" ? jQuery.extend({}, speed) : {
      complete: fn || !fn && easing || isFunction(speed) && speed,
      duration: speed,
      easing: fn && easing || easing && !isFunction(easing) && easing
    }; // Go to the end state if fx are off

    if (jQuery.fx.off) {
      opt.duration = 0;
    } else {
      if (typeof opt.duration !== "number") {
        if (opt.duration in jQuery.fx.speeds) {
          opt.duration = jQuery.fx.speeds[opt.duration];
        } else {
          opt.duration = jQuery.fx.speeds._default;
        }
      }
    } // Normalize opt.queue - true/undefined/null -> "fx"


    if (opt.queue == null || opt.queue === true) {
      opt.queue = "fx";
    } // Queueing


    opt.old = opt.complete;

    opt.complete = function () {
      if (isFunction(opt.old)) {
        opt.old.call(this);
      }

      if (opt.queue) {
        jQuery.dequeue(this, opt.queue);
      }
    };

    return opt;
  };

  jQuery.fn.extend({
    fadeTo: function fadeTo(speed, to, easing, callback) {
      // Show any hidden elements after setting opacity to 0
      return this.filter(isHiddenWithinTree).css("opacity", 0).show() // Animate to the value specified
      .end().animate({
        opacity: to
      }, speed, easing, callback);
    },
    animate: function animate(prop, speed, easing, callback) {
      var empty = jQuery.isEmptyObject(prop),
          optall = jQuery.speed(speed, easing, callback),
          doAnimation = function doAnimation() {
        // Operate on a copy of prop so per-property easing won't be lost
        var anim = Animation(this, jQuery.extend({}, prop), optall); // Empty animations, or finishing resolves immediately

        if (empty || dataPriv.get(this, "finish")) {
          anim.stop(true);
        }
      };

      doAnimation.finish = doAnimation;
      return empty || optall.queue === false ? this.each(doAnimation) : this.queue(optall.queue, doAnimation);
    },
    stop: function stop(type, clearQueue, gotoEnd) {
      var stopQueue = function stopQueue(hooks) {
        var stop = hooks.stop;
        delete hooks.stop;
        stop(gotoEnd);
      };

      if (typeof type !== "string") {
        gotoEnd = clearQueue;
        clearQueue = type;
        type = undefined;
      }

      if (clearQueue) {
        this.queue(type || "fx", []);
      }

      return this.each(function () {
        var dequeue = true,
            index = type != null && type + "queueHooks",
            timers = jQuery.timers,
            data = dataPriv.get(this);

        if (index) {
          if (data[index] && data[index].stop) {
            stopQueue(data[index]);
          }
        } else {
          for (index in data) {
            if (data[index] && data[index].stop && rrun.test(index)) {
              stopQueue(data[index]);
            }
          }
        }

        for (index = timers.length; index--;) {
          if (timers[index].elem === this && (type == null || timers[index].queue === type)) {
            timers[index].anim.stop(gotoEnd);
            dequeue = false;
            timers.splice(index, 1);
          }
        } // Start the next in the queue if the last step wasn't forced.
        // Timers currently will call their complete callbacks, which
        // will dequeue but only if they were gotoEnd.


        if (dequeue || !gotoEnd) {
          jQuery.dequeue(this, type);
        }
      });
    },
    finish: function finish(type) {
      if (type !== false) {
        type = type || "fx";
      }

      return this.each(function () {
        var index,
            data = dataPriv.get(this),
            queue = data[type + "queue"],
            hooks = data[type + "queueHooks"],
            timers = jQuery.timers,
            length = queue ? queue.length : 0; // Enable finishing flag on private data

        data.finish = true; // Empty the queue first

        jQuery.queue(this, type, []);

        if (hooks && hooks.stop) {
          hooks.stop.call(this, true);
        } // Look for any active animations, and finish them


        for (index = timers.length; index--;) {
          if (timers[index].elem === this && timers[index].queue === type) {
            timers[index].anim.stop(true);
            timers.splice(index, 1);
          }
        } // Look for any animations in the old queue and finish them


        for (index = 0; index < length; index++) {
          if (queue[index] && queue[index].finish) {
            queue[index].finish.call(this);
          }
        } // Turn off finishing flag


        delete data.finish;
      });
    }
  });
  jQuery.each(["toggle", "show", "hide"], function (_i, name) {
    var cssFn = jQuery.fn[name];

    jQuery.fn[name] = function (speed, easing, callback) {
      return speed == null || typeof speed === "boolean" ? cssFn.apply(this, arguments) : this.animate(genFx(name, true), speed, easing, callback);
    };
  }); // Generate shortcuts for custom animations

  jQuery.each({
    slideDown: genFx("show"),
    slideUp: genFx("hide"),
    slideToggle: genFx("toggle"),
    fadeIn: {
      opacity: "show"
    },
    fadeOut: {
      opacity: "hide"
    },
    fadeToggle: {
      opacity: "toggle"
    }
  }, function (name, props) {
    jQuery.fn[name] = function (speed, easing, callback) {
      return this.animate(props, speed, easing, callback);
    };
  });
  jQuery.timers = [];

  jQuery.fx.tick = function () {
    var timer,
        i = 0,
        timers = jQuery.timers;
    fxNow = Date.now();

    for (; i < timers.length; i++) {
      timer = timers[i]; // Run the timer and safely remove it when done (allowing for external removal)

      if (!timer() && timers[i] === timer) {
        timers.splice(i--, 1);
      }
    }

    if (!timers.length) {
      jQuery.fx.stop();
    }

    fxNow = undefined;
  };

  jQuery.fx.timer = function (timer) {
    jQuery.timers.push(timer);
    jQuery.fx.start();
  };

  jQuery.fx.interval = 13;

  jQuery.fx.start = function () {
    if (inProgress) {
      return;
    }

    inProgress = true;
    schedule();
  };

  jQuery.fx.stop = function () {
    inProgress = null;
  };

  jQuery.fx.speeds = {
    slow: 600,
    fast: 200,
    // Default speed
    _default: 400
  }; // Based off of the plugin by Clint Helfers, with permission.
  // https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/

  jQuery.fn.delay = function (time, type) {
    time = jQuery.fx ? jQuery.fx.speeds[time] || time : time;
    type = type || "fx";
    return this.queue(type, function (next, hooks) {
      var timeout = window.setTimeout(next, time);

      hooks.stop = function () {
        window.clearTimeout(timeout);
      };
    });
  };

  (function () {
    var input = document.createElement("input"),
        select = document.createElement("select"),
        opt = select.appendChild(document.createElement("option"));
    input.type = "checkbox"; // Support: Android <=4.3 only
    // Default value for a checkbox should be "on"

    support.checkOn = input.value !== ""; // Support: IE <=11 only
    // Must access selectedIndex to make default options select

    support.optSelected = opt.selected; // Support: IE <=11 only
    // An input loses its value after becoming a radio

    input = document.createElement("input");
    input.value = "t";
    input.type = "radio";
    support.radioValue = input.value === "t";
  })();

  var boolHook,
      attrHandle = jQuery.expr.attrHandle;
  jQuery.fn.extend({
    attr: function attr(name, value) {
      return access(this, jQuery.attr, name, value, arguments.length > 1);
    },
    removeAttr: function removeAttr(name) {
      return this.each(function () {
        jQuery.removeAttr(this, name);
      });
    }
  });
  jQuery.extend({
    attr: function attr(elem, name, value) {
      var ret,
          hooks,
          nType = elem.nodeType; // Don't get/set attributes on text, comment and attribute nodes

      if (nType === 3 || nType === 8 || nType === 2) {
        return;
      } // Fallback to prop when attributes are not supported


      if (typeof elem.getAttribute === "undefined") {
        return jQuery.prop(elem, name, value);
      } // Attribute hooks are determined by the lowercase version
      // Grab necessary hook if one is defined


      if (nType !== 1 || !jQuery.isXMLDoc(elem)) {
        hooks = jQuery.attrHooks[name.toLowerCase()] || (jQuery.expr.match.bool.test(name) ? boolHook : undefined);
      }

      if (value !== undefined) {
        if (value === null) {
          jQuery.removeAttr(elem, name);
          return;
        }

        if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== undefined) {
          return ret;
        }

        elem.setAttribute(name, value + "");
        return value;
      }

      if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
        return ret;
      }

      ret = jQuery.find.attr(elem, name); // Non-existent attributes return null, we normalize to undefined

      return ret == null ? undefined : ret;
    },
    attrHooks: {
      type: {
        set: function set(elem, value) {
          if (!support.radioValue && value === "radio" && nodeName(elem, "input")) {
            var val = elem.value;
            elem.setAttribute("type", value);

            if (val) {
              elem.value = val;
            }

            return value;
          }
        }
      }
    },
    removeAttr: function removeAttr(elem, value) {
      var name,
          i = 0,
          // Attribute names can contain non-HTML whitespace characters
      // https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
      attrNames = value && value.match(rnothtmlwhite);

      if (attrNames && elem.nodeType === 1) {
        while (name = attrNames[i++]) {
          elem.removeAttribute(name);
        }
      }
    }
  }); // Hooks for boolean attributes

  boolHook = {
    set: function set(elem, value, name) {
      if (value === false) {
        // Remove boolean attributes when set to false
        jQuery.removeAttr(elem, name);
      } else {
        elem.setAttribute(name, name);
      }

      return name;
    }
  };
  jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g), function (_i, name) {
    var getter = attrHandle[name] || jQuery.find.attr;

    attrHandle[name] = function (elem, name, isXML) {
      var ret,
          handle,
          lowercaseName = name.toLowerCase();

      if (!isXML) {
        // Avoid an infinite loop by temporarily removing this function from the getter
        handle = attrHandle[lowercaseName];
        attrHandle[lowercaseName] = ret;
        ret = getter(elem, name, isXML) != null ? lowercaseName : null;
        attrHandle[lowercaseName] = handle;
      }

      return ret;
    };
  });
  var rfocusable = /^(?:input|select|textarea|button)$/i,
      rclickable = /^(?:a|area)$/i;
  jQuery.fn.extend({
    prop: function prop(name, value) {
      return access(this, jQuery.prop, name, value, arguments.length > 1);
    },
    removeProp: function removeProp(name) {
      return this.each(function () {
        delete this[jQuery.propFix[name] || name];
      });
    }
  });
  jQuery.extend({
    prop: function prop(elem, name, value) {
      var ret,
          hooks,
          nType = elem.nodeType; // Don't get/set properties on text, comment and attribute nodes

      if (nType === 3 || nType === 8 || nType === 2) {
        return;
      }

      if (nType !== 1 || !jQuery.isXMLDoc(elem)) {
        // Fix name and attach hooks
        name = jQuery.propFix[name] || name;
        hooks = jQuery.propHooks[name];
      }

      if (value !== undefined) {
        if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== undefined) {
          return ret;
        }

        return elem[name] = value;
      }

      if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
        return ret;
      }

      return elem[name];
    },
    propHooks: {
      tabIndex: {
        get: function get(elem) {
          // Support: IE <=9 - 11 only
          // elem.tabIndex doesn't always return the
          // correct value when it hasn't been explicitly set
          // https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
          // Use proper attribute retrieval(#12072)
          var tabindex = jQuery.find.attr(elem, "tabindex");

          if (tabindex) {
            return parseInt(tabindex, 10);
          }

          if (rfocusable.test(elem.nodeName) || rclickable.test(elem.nodeName) && elem.href) {
            return 0;
          }

          return -1;
        }
      }
    },
    propFix: {
      "for": "htmlFor",
      "class": "className"
    }
  }); // Support: IE <=11 only
  // Accessing the selectedIndex property
  // forces the browser to respect setting selected
  // on the option
  // The getter ensures a default option is selected
  // when in an optgroup
  // eslint rule "no-unused-expressions" is disabled for this code
  // since it considers such accessions noop

  if (!support.optSelected) {
    jQuery.propHooks.selected = {
      get: function get(elem) {
        /* eslint no-unused-expressions: "off" */
        var parent = elem.parentNode;

        if (parent && parent.parentNode) {
          parent.parentNode.selectedIndex;
        }

        return null;
      },
      set: function set(elem) {
        /* eslint no-unused-expressions: "off" */
        var parent = elem.parentNode;

        if (parent) {
          parent.selectedIndex;

          if (parent.parentNode) {
            parent.parentNode.selectedIndex;
          }
        }
      }
    };
  }

  jQuery.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
    jQuery.propFix[this.toLowerCase()] = this;
  }); // Strip and collapse whitespace according to HTML spec
  // https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace

  function stripAndCollapse(value) {
    var tokens = value.match(rnothtmlwhite) || [];
    return tokens.join(" ");
  }

  function getClass(elem) {
    return elem.getAttribute && elem.getAttribute("class") || "";
  }

  function classesToArray(value) {
    if (Array.isArray(value)) {
      return value;
    }

    if (typeof value === "string") {
      return value.match(rnothtmlwhite) || [];
    }

    return [];
  }

  jQuery.fn.extend({
    addClass: function addClass(value) {
      var classes,
          elem,
          cur,
          curValue,
          clazz,
          j,
          finalValue,
          i = 0;

      if (isFunction(value)) {
        return this.each(function (j) {
          jQuery(this).addClass(value.call(this, j, getClass(this)));
        });
      }

      classes = classesToArray(value);

      if (classes.length) {
        while (elem = this[i++]) {
          curValue = getClass(elem);
          cur = elem.nodeType === 1 && " " + stripAndCollapse(curValue) + " ";

          if (cur) {
            j = 0;

            while (clazz = classes[j++]) {
              if (cur.indexOf(" " + clazz + " ") < 0) {
                cur += clazz + " ";
              }
            } // Only assign if different to avoid unneeded rendering.


            finalValue = stripAndCollapse(cur);

            if (curValue !== finalValue) {
              elem.setAttribute("class", finalValue);
            }
          }
        }
      }

      return this;
    },
    removeClass: function removeClass(value) {
      var classes,
          elem,
          cur,
          curValue,
          clazz,
          j,
          finalValue,
          i = 0;

      if (isFunction(value)) {
        return this.each(function (j) {
          jQuery(this).removeClass(value.call(this, j, getClass(this)));
        });
      }

      if (!arguments.length) {
        return this.attr("class", "");
      }

      classes = classesToArray(value);

      if (classes.length) {
        while (elem = this[i++]) {
          curValue = getClass(elem); // This expression is here for better compressibility (see addClass)

          cur = elem.nodeType === 1 && " " + stripAndCollapse(curValue) + " ";

          if (cur) {
            j = 0;

            while (clazz = classes[j++]) {
              // Remove *all* instances
              while (cur.indexOf(" " + clazz + " ") > -1) {
                cur = cur.replace(" " + clazz + " ", " ");
              }
            } // Only assign if different to avoid unneeded rendering.


            finalValue = stripAndCollapse(cur);

            if (curValue !== finalValue) {
              elem.setAttribute("class", finalValue);
            }
          }
        }
      }

      return this;
    },
    toggleClass: function toggleClass(value, stateVal) {
      var type = _typeof(value),
          isValidValue = type === "string" || Array.isArray(value);

      if (typeof stateVal === "boolean" && isValidValue) {
        return stateVal ? this.addClass(value) : this.removeClass(value);
      }

      if (isFunction(value)) {
        return this.each(function (i) {
          jQuery(this).toggleClass(value.call(this, i, getClass(this), stateVal), stateVal);
        });
      }

      return this.each(function () {
        var className, i, self, classNames;

        if (isValidValue) {
          // Toggle individual class names
          i = 0;
          self = jQuery(this);
          classNames = classesToArray(value);

          while (className = classNames[i++]) {
            // Check each className given, space separated list
            if (self.hasClass(className)) {
              self.removeClass(className);
            } else {
              self.addClass(className);
            }
          } // Toggle whole class name

        } else if (value === undefined || type === "boolean") {
          className = getClass(this);

          if (className) {
            // Store className if set
            dataPriv.set(this, "__className__", className);
          } // If the element has a class name or if we're passed `false`,
          // then remove the whole classname (if there was one, the above saved it).
          // Otherwise bring back whatever was previously saved (if anything),
          // falling back to the empty string if nothing was stored.


          if (this.setAttribute) {
            this.setAttribute("class", className || value === false ? "" : dataPriv.get(this, "__className__") || "");
          }
        }
      });
    },
    hasClass: function hasClass(selector) {
      var className,
          elem,
          i = 0;
      className = " " + selector + " ";

      while (elem = this[i++]) {
        if (elem.nodeType === 1 && (" " + stripAndCollapse(getClass(elem)) + " ").indexOf(className) > -1) {
          return true;
        }
      }

      return false;
    }
  });
  var rreturn = /\r/g;
  jQuery.fn.extend({
    val: function val(value) {
      var hooks,
          ret,
          valueIsFunction,
          elem = this[0];

      if (!arguments.length) {
        if (elem) {
          hooks = jQuery.valHooks[elem.type] || jQuery.valHooks[elem.nodeName.toLowerCase()];

          if (hooks && "get" in hooks && (ret = hooks.get(elem, "value")) !== undefined) {
            return ret;
          }

          ret = elem.value; // Handle most common string cases

          if (typeof ret === "string") {
            return ret.replace(rreturn, "");
          } // Handle cases where value is null/undef or number


          return ret == null ? "" : ret;
        }

        return;
      }

      valueIsFunction = isFunction(value);
      return this.each(function (i) {
        var val;

        if (this.nodeType !== 1) {
          return;
        }

        if (valueIsFunction) {
          val = value.call(this, i, jQuery(this).val());
        } else {
          val = value;
        } // Treat null/undefined as ""; convert numbers to string


        if (val == null) {
          val = "";
        } else if (typeof val === "number") {
          val += "";
        } else if (Array.isArray(val)) {
          val = jQuery.map(val, function (value) {
            return value == null ? "" : value + "";
          });
        }

        hooks = jQuery.valHooks[this.type] || jQuery.valHooks[this.nodeName.toLowerCase()]; // If set returns undefined, fall back to normal setting

        if (!hooks || !("set" in hooks) || hooks.set(this, val, "value") === undefined) {
          this.value = val;
        }
      });
    }
  });
  jQuery.extend({
    valHooks: {
      option: {
        get: function get(elem) {
          var val = jQuery.find.attr(elem, "value");
          return val != null ? val : // Support: IE <=10 - 11 only
          // option.text throws exceptions (#14686, #14858)
          // Strip and collapse whitespace
          // https://html.spec.whatwg.org/#strip-and-collapse-whitespace
          stripAndCollapse(jQuery.text(elem));
        }
      },
      select: {
        get: function get(elem) {
          var value,
              option,
              i,
              options = elem.options,
              index = elem.selectedIndex,
              one = elem.type === "select-one",
              values = one ? null : [],
              max = one ? index + 1 : options.length;

          if (index < 0) {
            i = max;
          } else {
            i = one ? index : 0;
          } // Loop through all the selected options


          for (; i < max; i++) {
            option = options[i]; // Support: IE <=9 only
            // IE8-9 doesn't update selected after form reset (#2551)

            if ((option.selected || i === index) && // Don't return options that are disabled or in a disabled optgroup
            !option.disabled && (!option.parentNode.disabled || !nodeName(option.parentNode, "optgroup"))) {
              // Get the specific value for the option
              value = jQuery(option).val(); // We don't need an array for one selects

              if (one) {
                return value;
              } // Multi-Selects return an array


              values.push(value);
            }
          }

          return values;
        },
        set: function set(elem, value) {
          var optionSet,
              option,
              options = elem.options,
              values = jQuery.makeArray(value),
              i = options.length;

          while (i--) {
            option = options[i];
            /* eslint-disable no-cond-assign */

            if (option.selected = jQuery.inArray(jQuery.valHooks.option.get(option), values) > -1) {
              optionSet = true;
            }
            /* eslint-enable no-cond-assign */

          } // Force browsers to behave consistently when non-matching value is set


          if (!optionSet) {
            elem.selectedIndex = -1;
          }

          return values;
        }
      }
    }
  }); // Radios and checkboxes getter/setter

  jQuery.each(["radio", "checkbox"], function () {
    jQuery.valHooks[this] = {
      set: function set(elem, value) {
        if (Array.isArray(value)) {
          return elem.checked = jQuery.inArray(jQuery(elem).val(), value) > -1;
        }
      }
    };

    if (!support.checkOn) {
      jQuery.valHooks[this].get = function (elem) {
        return elem.getAttribute("value") === null ? "on" : elem.value;
      };
    }
  }); // Return jQuery for attributes-only inclusion

  support.focusin = "onfocusin" in window;

  var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
      stopPropagationCallback = function stopPropagationCallback(e) {
    e.stopPropagation();
  };

  jQuery.extend(jQuery.event, {
    trigger: function trigger(event, data, elem, onlyHandlers) {
      var i,
          cur,
          tmp,
          bubbleType,
          ontype,
          handle,
          special,
          lastElement,
          eventPath = [elem || document],
          type = hasOwn.call(event, "type") ? event.type : event,
          namespaces = hasOwn.call(event, "namespace") ? event.namespace.split(".") : [];
      cur = lastElement = tmp = elem = elem || document; // Don't do events on text and comment nodes

      if (elem.nodeType === 3 || elem.nodeType === 8) {
        return;
      } // focus/blur morphs to focusin/out; ensure we're not firing them right now


      if (rfocusMorph.test(type + jQuery.event.triggered)) {
        return;
      }

      if (type.indexOf(".") > -1) {
        // Namespaced trigger; create a regexp to match event type in handle()
        namespaces = type.split(".");
        type = namespaces.shift();
        namespaces.sort();
      }

      ontype = type.indexOf(":") < 0 && "on" + type; // Caller can pass in a jQuery.Event object, Object, or just an event type string

      event = event[jQuery.expando] ? event : new jQuery.Event(type, _typeof(event) === "object" && event); // Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)

      event.isTrigger = onlyHandlers ? 2 : 3;
      event.namespace = namespaces.join(".");
      event.rnamespace = event.namespace ? new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)") : null; // Clean up the event in case it is being reused

      event.result = undefined;

      if (!event.target) {
        event.target = elem;
      } // Clone any incoming data and prepend the event, creating the handler arg list


      data = data == null ? [event] : jQuery.makeArray(data, [event]); // Allow special events to draw outside the lines

      special = jQuery.event.special[type] || {};

      if (!onlyHandlers && special.trigger && special.trigger.apply(elem, data) === false) {
        return;
      } // Determine event propagation path in advance, per W3C events spec (#9951)
      // Bubble up to document, then to window; watch for a global ownerDocument var (#9724)


      if (!onlyHandlers && !special.noBubble && !isWindow(elem)) {
        bubbleType = special.delegateType || type;

        if (!rfocusMorph.test(bubbleType + type)) {
          cur = cur.parentNode;
        }

        for (; cur; cur = cur.parentNode) {
          eventPath.push(cur);
          tmp = cur;
        } // Only add window if we got to document (e.g., not plain obj or detached DOM)


        if (tmp === (elem.ownerDocument || document)) {
          eventPath.push(tmp.defaultView || tmp.parentWindow || window);
        }
      } // Fire handlers on the event path


      i = 0;

      while ((cur = eventPath[i++]) && !event.isPropagationStopped()) {
        lastElement = cur;
        event.type = i > 1 ? bubbleType : special.bindType || type; // jQuery handler

        handle = (dataPriv.get(cur, "events") || Object.create(null))[event.type] && dataPriv.get(cur, "handle");

        if (handle) {
          handle.apply(cur, data);
        } // Native handler


        handle = ontype && cur[ontype];

        if (handle && handle.apply && acceptData(cur)) {
          event.result = handle.apply(cur, data);

          if (event.result === false) {
            event.preventDefault();
          }
        }
      }

      event.type = type; // If nobody prevented the default action, do it now

      if (!onlyHandlers && !event.isDefaultPrevented()) {
        if ((!special._default || special._default.apply(eventPath.pop(), data) === false) && acceptData(elem)) {
          // Call a native DOM method on the target with the same name as the event.
          // Don't do default actions on window, that's where global variables be (#6170)
          if (ontype && isFunction(elem[type]) && !isWindow(elem)) {
            // Don't re-trigger an onFOO event when we call its FOO() method
            tmp = elem[ontype];

            if (tmp) {
              elem[ontype] = null;
            } // Prevent re-triggering of the same event, since we already bubbled it above


            jQuery.event.triggered = type;

            if (event.isPropagationStopped()) {
              lastElement.addEventListener(type, stopPropagationCallback);
            }

            elem[type]();

            if (event.isPropagationStopped()) {
              lastElement.removeEventListener(type, stopPropagationCallback);
            }

            jQuery.event.triggered = undefined;

            if (tmp) {
              elem[ontype] = tmp;
            }
          }
        }
      }

      return event.result;
    },
    // Piggyback on a donor event to simulate a different one
    // Used only for `focus(in | out)` events
    simulate: function simulate(type, elem, event) {
      var e = jQuery.extend(new jQuery.Event(), event, {
        type: type,
        isSimulated: true
      });
      jQuery.event.trigger(e, null, elem);
    }
  });
  jQuery.fn.extend({
    trigger: function trigger(type, data) {
      return this.each(function () {
        jQuery.event.trigger(type, data, this);
      });
    },
    triggerHandler: function triggerHandler(type, data) {
      var elem = this[0];

      if (elem) {
        return jQuery.event.trigger(type, data, elem, true);
      }
    }
  }); // Support: Firefox <=44
  // Firefox doesn't have focus(in | out) events
  // Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
  //
  // Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
  // focus(in | out) events fire after focus & blur events,
  // which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
  // Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857

  if (!support.focusin) {
    jQuery.each({
      focus: "focusin",
      blur: "focusout"
    }, function (orig, fix) {
      // Attach a single capturing handler on the document while someone wants focusin/focusout
      var handler = function handler(event) {
        jQuery.event.simulate(fix, event.target, jQuery.event.fix(event));
      };

      jQuery.event.special[fix] = {
        setup: function setup() {
          // Handle: regular nodes (via `this.ownerDocument`), window
          // (via `this.document`) & document (via `this`).
          var doc = this.ownerDocument || this.document || this,
              attaches = dataPriv.access(doc, fix);

          if (!attaches) {
            doc.addEventListener(orig, handler, true);
          }

          dataPriv.access(doc, fix, (attaches || 0) + 1);
        },
        teardown: function teardown() {
          var doc = this.ownerDocument || this.document || this,
              attaches = dataPriv.access(doc, fix) - 1;

          if (!attaches) {
            doc.removeEventListener(orig, handler, true);
            dataPriv.remove(doc, fix);
          } else {
            dataPriv.access(doc, fix, attaches);
          }
        }
      };
    });
  }

  var location = window.location;
  var nonce = {
    guid: Date.now()
  };
  var rquery = /\?/; // Cross-browser xml parsing

  jQuery.parseXML = function (data) {
    var xml, parserErrorElem;

    if (!data || typeof data !== "string") {
      return null;
    } // Support: IE 9 - 11 only
    // IE throws on parseFromString with invalid input.


    try {
      xml = new window.DOMParser().parseFromString(data, "text/xml");
    } catch (e) {}

    parserErrorElem = xml && xml.getElementsByTagName("parsererror")[0];

    if (!xml || parserErrorElem) {
      jQuery.error("Invalid XML: " + (parserErrorElem ? jQuery.map(parserErrorElem.childNodes, function (el) {
        return el.textContent;
      }).join("\n") : data));
    }

    return xml;
  };

  var rbracket = /\[\]$/,
      rCRLF = /\r?\n/g,
      rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
      rsubmittable = /^(?:input|select|textarea|keygen)/i;

  function buildParams(prefix, obj, traditional, add) {
    var name;

    if (Array.isArray(obj)) {
      // Serialize array item.
      jQuery.each(obj, function (i, v) {
        if (traditional || rbracket.test(prefix)) {
          // Treat each array item as a scalar.
          add(prefix, v);
        } else {
          // Item is non-scalar (array or object), encode its numeric index.
          buildParams(prefix + "[" + (_typeof(v) === "object" && v != null ? i : "") + "]", v, traditional, add);
        }
      });
    } else if (!traditional && toType(obj) === "object") {
      // Serialize object item.
      for (name in obj) {
        buildParams(prefix + "[" + name + "]", obj[name], traditional, add);
      }
    } else {
      // Serialize scalar item.
      add(prefix, obj);
    }
  } // Serialize an array of form elements or a set of
  // key/values into a query string


  jQuery.param = function (a, traditional) {
    var prefix,
        s = [],
        add = function add(key, valueOrFunction) {
      // If value is a function, invoke it and use its return value
      var value = isFunction(valueOrFunction) ? valueOrFunction() : valueOrFunction;
      s[s.length] = encodeURIComponent(key) + "=" + encodeURIComponent(value == null ? "" : value);
    };

    if (a == null) {
      return "";
    } // If an array was passed in, assume that it is an array of form elements.


    if (Array.isArray(a) || a.jquery && !jQuery.isPlainObject(a)) {
      // Serialize the form elements
      jQuery.each(a, function () {
        add(this.name, this.value);
      });
    } else {
      // If traditional, encode the "old" way (the way 1.3.2 or older
      // did it), otherwise encode params recursively.
      for (prefix in a) {
        buildParams(prefix, a[prefix], traditional, add);
      }
    } // Return the resulting serialization


    return s.join("&");
  };

  jQuery.fn.extend({
    serialize: function serialize() {
      return jQuery.param(this.serializeArray());
    },
    serializeArray: function serializeArray() {
      return this.map(function () {
        // Can add propHook for "elements" to filter or add form elements
        var elements = jQuery.prop(this, "elements");
        return elements ? jQuery.makeArray(elements) : this;
      }).filter(function () {
        var type = this.type; // Use .is( ":disabled" ) so that fieldset[disabled] works

        return this.name && !jQuery(this).is(":disabled") && rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(type) && (this.checked || !rcheckableType.test(type));
      }).map(function (_i, elem) {
        var val = jQuery(this).val();

        if (val == null) {
          return null;
        }

        if (Array.isArray(val)) {
          return jQuery.map(val, function (val) {
            return {
              name: elem.name,
              value: val.replace(rCRLF, "\r\n")
            };
          });
        }

        return {
          name: elem.name,
          value: val.replace(rCRLF, "\r\n")
        };
      }).get();
    }
  });
  var r20 = /%20/g,
      rhash = /#.*$/,
      rantiCache = /([?&])_=[^&]*/,
      rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,
      // #7653, #8125, #8152: local protocol detection
  rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
      rnoContent = /^(?:GET|HEAD)$/,
      rprotocol = /^\/\//,

  /* Prefilters
   * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
   * 2) These are called:
   *    - BEFORE asking for a transport
   *    - AFTER param serialization (s.data is a string if s.processData is true)
   * 3) key is the dataType
   * 4) the catchall symbol "*" can be used
   * 5) execution will start with transport dataType and THEN continue down to "*" if needed
   */
  prefilters = {},

  /* Transports bindings
   * 1) key is the dataType
   * 2) the catchall symbol "*" can be used
   * 3) selection will start with transport dataType and THEN go to "*" if needed
   */
  transports = {},
      // Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
  allTypes = "*/".concat("*"),
      // Anchor tag for parsing the document origin
  originAnchor = document.createElement("a");
  originAnchor.href = location.href; // Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport

  function addToPrefiltersOrTransports(structure) {
    // dataTypeExpression is optional and defaults to "*"
    return function (dataTypeExpression, func) {
      if (typeof dataTypeExpression !== "string") {
        func = dataTypeExpression;
        dataTypeExpression = "*";
      }

      var dataType,
          i = 0,
          dataTypes = dataTypeExpression.toLowerCase().match(rnothtmlwhite) || [];

      if (isFunction(func)) {
        // For each dataType in the dataTypeExpression
        while (dataType = dataTypes[i++]) {
          // Prepend if requested
          if (dataType[0] === "+") {
            dataType = dataType.slice(1) || "*";
            (structure[dataType] = structure[dataType] || []).unshift(func); // Otherwise append
          } else {
            (structure[dataType] = structure[dataType] || []).push(func);
          }
        }
      }
    };
  } // Base inspection function for prefilters and transports


  function inspectPrefiltersOrTransports(structure, options, originalOptions, jqXHR) {
    var inspected = {},
        seekingTransport = structure === transports;

    function inspect(dataType) {
      var selected;
      inspected[dataType] = true;
      jQuery.each(structure[dataType] || [], function (_, prefilterOrFactory) {
        var dataTypeOrTransport = prefilterOrFactory(options, originalOptions, jqXHR);

        if (typeof dataTypeOrTransport === "string" && !seekingTransport && !inspected[dataTypeOrTransport]) {
          options.dataTypes.unshift(dataTypeOrTransport);
          inspect(dataTypeOrTransport);
          return false;
        } else if (seekingTransport) {
          return !(selected = dataTypeOrTransport);
        }
      });
      return selected;
    }

    return inspect(options.dataTypes[0]) || !inspected["*"] && inspect("*");
  } // A special extend for ajax options
  // that takes "flat" options (not to be deep extended)
  // Fixes #9887


  function ajaxExtend(target, src) {
    var key,
        deep,
        flatOptions = jQuery.ajaxSettings.flatOptions || {};

    for (key in src) {
      if (src[key] !== undefined) {
        (flatOptions[key] ? target : deep || (deep = {}))[key] = src[key];
      }
    }

    if (deep) {
      jQuery.extend(true, target, deep);
    }

    return target;
  }
  /* Handles responses to an ajax request:
   * - finds the right dataType (mediates between content-type and expected dataType)
   * - returns the corresponding response
   */


  function ajaxHandleResponses(s, jqXHR, responses) {
    var ct,
        type,
        finalDataType,
        firstDataType,
        contents = s.contents,
        dataTypes = s.dataTypes; // Remove auto dataType and get content-type in the process

    while (dataTypes[0] === "*") {
      dataTypes.shift();

      if (ct === undefined) {
        ct = s.mimeType || jqXHR.getResponseHeader("Content-Type");
      }
    } // Check if we're dealing with a known content-type


    if (ct) {
      for (type in contents) {
        if (contents[type] && contents[type].test(ct)) {
          dataTypes.unshift(type);
          break;
        }
      }
    } // Check to see if we have a response for the expected dataType


    if (dataTypes[0] in responses) {
      finalDataType = dataTypes[0];
    } else {
      // Try convertible dataTypes
      for (type in responses) {
        if (!dataTypes[0] || s.converters[type + " " + dataTypes[0]]) {
          finalDataType = type;
          break;
        }

        if (!firstDataType) {
          firstDataType = type;
        }
      } // Or just use first one


      finalDataType = finalDataType || firstDataType;
    } // If we found a dataType
    // We add the dataType to the list if needed
    // and return the corresponding response


    if (finalDataType) {
      if (finalDataType !== dataTypes[0]) {
        dataTypes.unshift(finalDataType);
      }

      return responses[finalDataType];
    }
  }
  /* Chain conversions given the request and the original response
   * Also sets the responseXXX fields on the jqXHR instance
   */


  function ajaxConvert(s, response, jqXHR, isSuccess) {
    var conv2,
        current,
        conv,
        tmp,
        prev,
        converters = {},
        // Work with a copy of dataTypes in case we need to modify it for conversion
    dataTypes = s.dataTypes.slice(); // Create converters map with lowercased keys

    if (dataTypes[1]) {
      for (conv in s.converters) {
        converters[conv.toLowerCase()] = s.converters[conv];
      }
    }

    current = dataTypes.shift(); // Convert to each sequential dataType

    while (current) {
      if (s.responseFields[current]) {
        jqXHR[s.responseFields[current]] = response;
      } // Apply the dataFilter if provided


      if (!prev && isSuccess && s.dataFilter) {
        response = s.dataFilter(response, s.dataType);
      }

      prev = current;
      current = dataTypes.shift();

      if (current) {
        // There's only work to do if current dataType is non-auto
        if (current === "*") {
          current = prev; // Convert response if prev dataType is non-auto and differs from current
        } else if (prev !== "*" && prev !== current) {
          // Seek a direct converter
          conv = converters[prev + " " + current] || converters["* " + current]; // If none found, seek a pair

          if (!conv) {
            for (conv2 in converters) {
              // If conv2 outputs current
              tmp = conv2.split(" ");

              if (tmp[1] === current) {
                // If prev can be converted to accepted input
                conv = converters[prev + " " + tmp[0]] || converters["* " + tmp[0]];

                if (conv) {
                  // Condense equivalence converters
                  if (conv === true) {
                    conv = converters[conv2]; // Otherwise, insert the intermediate dataType
                  } else if (converters[conv2] !== true) {
                    current = tmp[0];
                    dataTypes.unshift(tmp[1]);
                  }

                  break;
                }
              }
            }
          } // Apply converter (if not an equivalence)


          if (conv !== true) {
            // Unless errors are allowed to bubble, catch and return them
            if (conv && s["throws"]) {
              response = conv(response);
            } else {
              try {
                response = conv(response);
              } catch (e) {
                return {
                  state: "parsererror",
                  error: conv ? e : "No conversion from " + prev + " to " + current
                };
              }
            }
          }
        }
      }
    }

    return {
      state: "success",
      data: response
    };
  }

  jQuery.extend({
    // Counter for holding the number of active queries
    active: 0,
    // Last-Modified header cache for next request
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: location.href,
      type: "GET",
      isLocal: rlocalProtocol.test(location.protocol),
      global: true,
      processData: true,
      async: true,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",

      /*
      timeout: 0,
      data: null,
      dataType: null,
      username: null,
      password: null,
      cache: null,
      throws: false,
      traditional: false,
      headers: {},
      */
      accepts: {
        "*": allTypes,
        text: "text/plain",
        html: "text/html",
        xml: "application/xml, text/xml",
        json: "application/json, text/javascript"
      },
      contents: {
        xml: /\bxml\b/,
        html: /\bhtml/,
        json: /\bjson\b/
      },
      responseFields: {
        xml: "responseXML",
        text: "responseText",
        json: "responseJSON"
      },
      // Data converters
      // Keys separate source (or catchall "*") and destination types with a single space
      converters: {
        // Convert anything to text
        "* text": String,
        // Text to html (true = no transformation)
        "text html": true,
        // Evaluate text as a json expression
        "text json": JSON.parse,
        // Parse text as xml
        "text xml": jQuery.parseXML
      },
      // For options that shouldn't be deep extended:
      // you can add your own custom options here if
      // and when you create one that shouldn't be
      // deep extended (see ajaxExtend)
      flatOptions: {
        url: true,
        context: true
      }
    },
    // Creates a full fledged settings object into target
    // with both ajaxSettings and settings fields.
    // If target is omitted, writes into ajaxSettings.
    ajaxSetup: function ajaxSetup(target, settings) {
      return settings ? // Building a settings object
      ajaxExtend(ajaxExtend(target, jQuery.ajaxSettings), settings) : // Extending ajaxSettings
      ajaxExtend(jQuery.ajaxSettings, target);
    },
    ajaxPrefilter: addToPrefiltersOrTransports(prefilters),
    ajaxTransport: addToPrefiltersOrTransports(transports),
    // Main method
    ajax: function ajax(url, options) {
      // If url is an object, simulate pre-1.5 signature
      if (_typeof(url) === "object") {
        options = url;
        url = undefined;
      } // Force options to be an object


      options = options || {};

      var transport,
          // URL without anti-cache param
      cacheURL,
          // Response headers
      responseHeadersString,
          responseHeaders,
          // timeout handle
      timeoutTimer,
          // Url cleanup var
      urlAnchor,
          // Request state (becomes false upon send and true upon completion)
      completed,
          // To know if global events are to be dispatched
      fireGlobals,
          // Loop variable
      i,
          // uncached part of the url
      uncached,
          // Create the final options object
      s = jQuery.ajaxSetup({}, options),
          // Callbacks context
      callbackContext = s.context || s,
          // Context for global events is callbackContext if it is a DOM node or jQuery collection
      globalEventContext = s.context && (callbackContext.nodeType || callbackContext.jquery) ? jQuery(callbackContext) : jQuery.event,
          // Deferreds
      deferred = jQuery.Deferred(),
          completeDeferred = jQuery.Callbacks("once memory"),
          // Status-dependent callbacks
      _statusCode = s.statusCode || {},
          // Headers (they are sent all at once)
      requestHeaders = {},
          requestHeadersNames = {},
          // Default abort message
      strAbort = "canceled",
          // Fake xhr
      jqXHR = {
        readyState: 0,
        // Builds headers hashtable if needed
        getResponseHeader: function getResponseHeader(key) {
          var match;

          if (completed) {
            if (!responseHeaders) {
              responseHeaders = {};

              while (match = rheaders.exec(responseHeadersString)) {
                responseHeaders[match[1].toLowerCase() + " "] = (responseHeaders[match[1].toLowerCase() + " "] || []).concat(match[2]);
              }
            }

            match = responseHeaders[key.toLowerCase() + " "];
          }

          return match == null ? null : match.join(", ");
        },
        // Raw string
        getAllResponseHeaders: function getAllResponseHeaders() {
          return completed ? responseHeadersString : null;
        },
        // Caches the header
        setRequestHeader: function setRequestHeader(name, value) {
          if (completed == null) {
            name = requestHeadersNames[name.toLowerCase()] = requestHeadersNames[name.toLowerCase()] || name;
            requestHeaders[name] = value;
          }

          return this;
        },
        // Overrides response content-type header
        overrideMimeType: function overrideMimeType(type) {
          if (completed == null) {
            s.mimeType = type;
          }

          return this;
        },
        // Status-dependent callbacks
        statusCode: function statusCode(map) {
          var code;

          if (map) {
            if (completed) {
              // Execute the appropriate callbacks
              jqXHR.always(map[jqXHR.status]);
            } else {
              // Lazy-add the new callbacks in a way that preserves old ones
              for (code in map) {
                _statusCode[code] = [_statusCode[code], map[code]];
              }
            }
          }

          return this;
        },
        // Cancel the request
        abort: function abort(statusText) {
          var finalText = statusText || strAbort;

          if (transport) {
            transport.abort(finalText);
          }

          done(0, finalText);
          return this;
        }
      }; // Attach deferreds


      deferred.promise(jqXHR); // Add protocol if not provided (prefilters might expect it)
      // Handle falsy url in the settings object (#10093: consistency with old signature)
      // We also use the url parameter if available

      s.url = ((url || s.url || location.href) + "").replace(rprotocol, location.protocol + "//"); // Alias method option to type as per ticket #12004

      s.type = options.method || options.type || s.method || s.type; // Extract dataTypes list

      s.dataTypes = (s.dataType || "*").toLowerCase().match(rnothtmlwhite) || [""]; // A cross-domain request is in order when the origin doesn't match the current origin.

      if (s.crossDomain == null) {
        urlAnchor = document.createElement("a"); // Support: IE <=8 - 11, Edge 12 - 15
        // IE throws exception on accessing the href property if url is malformed,
        // e.g. http://example.com:80x/

        try {
          urlAnchor.href = s.url; // Support: IE <=8 - 11 only
          // Anchor's host property isn't correctly set when s.url is relative

          urlAnchor.href = urlAnchor.href;
          s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !== urlAnchor.protocol + "//" + urlAnchor.host;
        } catch (e) {
          // If there is an error parsing the URL, assume it is crossDomain,
          // it can be rejected by the transport if it is invalid
          s.crossDomain = true;
        }
      } // Convert data if not already a string


      if (s.data && s.processData && typeof s.data !== "string") {
        s.data = jQuery.param(s.data, s.traditional);
      } // Apply prefilters


      inspectPrefiltersOrTransports(prefilters, s, options, jqXHR); // If request was aborted inside a prefilter, stop there

      if (completed) {
        return jqXHR;
      } // We can fire global events as of now if asked to
      // Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)


      fireGlobals = jQuery.event && s.global; // Watch for a new set of requests

      if (fireGlobals && jQuery.active++ === 0) {
        jQuery.event.trigger("ajaxStart");
      } // Uppercase the type


      s.type = s.type.toUpperCase(); // Determine if request has content

      s.hasContent = !rnoContent.test(s.type); // Save the URL in case we're toying with the If-Modified-Since
      // and/or If-None-Match header later on
      // Remove hash to simplify url manipulation

      cacheURL = s.url.replace(rhash, ""); // More options handling for requests with no content

      if (!s.hasContent) {
        // Remember the hash so we can put it back
        uncached = s.url.slice(cacheURL.length); // If data is available and should be processed, append data to url

        if (s.data && (s.processData || typeof s.data === "string")) {
          cacheURL += (rquery.test(cacheURL) ? "&" : "?") + s.data; // #9682: remove data so that it's not used in an eventual retry

          delete s.data;
        } // Add or update anti-cache param if needed


        if (s.cache === false) {
          cacheURL = cacheURL.replace(rantiCache, "$1");
          uncached = (rquery.test(cacheURL) ? "&" : "?") + "_=" + nonce.guid++ + uncached;
        } // Put hash and anti-cache on the URL that will be requested (gh-1732)


        s.url = cacheURL + uncached; // Change '%20' to '+' if this is encoded form body content (gh-2658)
      } else if (s.data && s.processData && (s.contentType || "").indexOf("application/x-www-form-urlencoded") === 0) {
        s.data = s.data.replace(r20, "+");
      } // Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.


      if (s.ifModified) {
        if (jQuery.lastModified[cacheURL]) {
          jqXHR.setRequestHeader("If-Modified-Since", jQuery.lastModified[cacheURL]);
        }

        if (jQuery.etag[cacheURL]) {
          jqXHR.setRequestHeader("If-None-Match", jQuery.etag[cacheURL]);
        }
      } // Set the correct header, if data is being sent


      if (s.data && s.hasContent && s.contentType !== false || options.contentType) {
        jqXHR.setRequestHeader("Content-Type", s.contentType);
      } // Set the Accepts header for the server, depending on the dataType


      jqXHR.setRequestHeader("Accept", s.dataTypes[0] && s.accepts[s.dataTypes[0]] ? s.accepts[s.dataTypes[0]] + (s.dataTypes[0] !== "*" ? ", " + allTypes + "; q=0.01" : "") : s.accepts["*"]); // Check for headers option

      for (i in s.headers) {
        jqXHR.setRequestHeader(i, s.headers[i]);
      } // Allow custom headers/mimetypes and early abort


      if (s.beforeSend && (s.beforeSend.call(callbackContext, jqXHR, s) === false || completed)) {
        // Abort if not done already and return
        return jqXHR.abort();
      } // Aborting is no longer a cancellation


      strAbort = "abort"; // Install callbacks on deferreds

      completeDeferred.add(s.complete);
      jqXHR.done(s.success);
      jqXHR.fail(s.error); // Get transport

      transport = inspectPrefiltersOrTransports(transports, s, options, jqXHR); // If no transport, we auto-abort

      if (!transport) {
        done(-1, "No Transport");
      } else {
        jqXHR.readyState = 1; // Send global event

        if (fireGlobals) {
          globalEventContext.trigger("ajaxSend", [jqXHR, s]);
        } // If request was aborted inside ajaxSend, stop there


        if (completed) {
          return jqXHR;
        } // Timeout


        if (s.async && s.timeout > 0) {
          timeoutTimer = window.setTimeout(function () {
            jqXHR.abort("timeout");
          }, s.timeout);
        }

        try {
          completed = false;
          transport.send(requestHeaders, done);
        } catch (e) {
          // Rethrow post-completion exceptions
          if (completed) {
            throw e;
          } // Propagate others as results


          done(-1, e);
        }
      } // Callback for when everything is done


      function done(status, nativeStatusText, responses, headers) {
        var isSuccess,
            success,
            error,
            response,
            modified,
            statusText = nativeStatusText; // Ignore repeat invocations

        if (completed) {
          return;
        }

        completed = true; // Clear timeout if it exists

        if (timeoutTimer) {
          window.clearTimeout(timeoutTimer);
        } // Dereference transport for early garbage collection
        // (no matter how long the jqXHR object will be used)


        transport = undefined; // Cache response headers

        responseHeadersString = headers || ""; // Set readyState

        jqXHR.readyState = status > 0 ? 4 : 0; // Determine if successful

        isSuccess = status >= 200 && status < 300 || status === 304; // Get response data

        if (responses) {
          response = ajaxHandleResponses(s, jqXHR, responses);
        } // Use a noop converter for missing script but not if jsonp


        if (!isSuccess && jQuery.inArray("script", s.dataTypes) > -1 && jQuery.inArray("json", s.dataTypes) < 0) {
          s.converters["text script"] = function () {};
        } // Convert no matter what (that way responseXXX fields are always set)


        response = ajaxConvert(s, response, jqXHR, isSuccess); // If successful, handle type chaining

        if (isSuccess) {
          // Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
          if (s.ifModified) {
            modified = jqXHR.getResponseHeader("Last-Modified");

            if (modified) {
              jQuery.lastModified[cacheURL] = modified;
            }

            modified = jqXHR.getResponseHeader("etag");

            if (modified) {
              jQuery.etag[cacheURL] = modified;
            }
          } // if no content


          if (status === 204 || s.type === "HEAD") {
            statusText = "nocontent"; // if not modified
          } else if (status === 304) {
            statusText = "notmodified"; // If we have data, let's convert it
          } else {
            statusText = response.state;
            success = response.data;
            error = response.error;
            isSuccess = !error;
          }
        } else {
          // Extract error from statusText and normalize for non-aborts
          error = statusText;

          if (status || !statusText) {
            statusText = "error";

            if (status < 0) {
              status = 0;
            }
          }
        } // Set data for the fake xhr object


        jqXHR.status = status;
        jqXHR.statusText = (nativeStatusText || statusText) + ""; // Success/Error

        if (isSuccess) {
          deferred.resolveWith(callbackContext, [success, statusText, jqXHR]);
        } else {
          deferred.rejectWith(callbackContext, [jqXHR, statusText, error]);
        } // Status-dependent callbacks


        jqXHR.statusCode(_statusCode);
        _statusCode = undefined;

        if (fireGlobals) {
          globalEventContext.trigger(isSuccess ? "ajaxSuccess" : "ajaxError", [jqXHR, s, isSuccess ? success : error]);
        } // Complete


        completeDeferred.fireWith(callbackContext, [jqXHR, statusText]);

        if (fireGlobals) {
          globalEventContext.trigger("ajaxComplete", [jqXHR, s]); // Handle the global AJAX counter

          if (! --jQuery.active) {
            jQuery.event.trigger("ajaxStop");
          }
        }
      }

      return jqXHR;
    },
    getJSON: function getJSON(url, data, callback) {
      return jQuery.get(url, data, callback, "json");
    },
    getScript: function getScript(url, callback) {
      return jQuery.get(url, undefined, callback, "script");
    }
  });
  jQuery.each(["get", "post"], function (_i, method) {
    jQuery[method] = function (url, data, callback, type) {
      // Shift arguments if data argument was omitted
      if (isFunction(data)) {
        type = type || callback;
        callback = data;
        data = undefined;
      } // The url can be an options object (which then must have .url)


      return jQuery.ajax(jQuery.extend({
        url: url,
        type: method,
        dataType: type,
        data: data,
        success: callback
      }, jQuery.isPlainObject(url) && url));
    };
  });
  jQuery.ajaxPrefilter(function (s) {
    var i;

    for (i in s.headers) {
      if (i.toLowerCase() === "content-type") {
        s.contentType = s.headers[i] || "";
      }
    }
  });

  jQuery._evalUrl = function (url, options, doc) {
    return jQuery.ajax({
      url: url,
      // Make this explicit, since user can override this through ajaxSetup (#11264)
      type: "GET",
      dataType: "script",
      cache: true,
      async: false,
      global: false,
      // Only evaluate the response if it is successful (gh-4126)
      // dataFilter is not invoked for failure responses, so using it instead
      // of the default converter is kludgy but it works.
      converters: {
        "text script": function textScript() {}
      },
      dataFilter: function dataFilter(response) {
        jQuery.globalEval(response, options, doc);
      }
    });
  };

  jQuery.fn.extend({
    wrapAll: function wrapAll(html) {
      var wrap;

      if (this[0]) {
        if (isFunction(html)) {
          html = html.call(this[0]);
        } // The elements to wrap the target around


        wrap = jQuery(html, this[0].ownerDocument).eq(0).clone(true);

        if (this[0].parentNode) {
          wrap.insertBefore(this[0]);
        }

        wrap.map(function () {
          var elem = this;

          while (elem.firstElementChild) {
            elem = elem.firstElementChild;
          }

          return elem;
        }).append(this);
      }

      return this;
    },
    wrapInner: function wrapInner(html) {
      if (isFunction(html)) {
        return this.each(function (i) {
          jQuery(this).wrapInner(html.call(this, i));
        });
      }

      return this.each(function () {
        var self = jQuery(this),
            contents = self.contents();

        if (contents.length) {
          contents.wrapAll(html);
        } else {
          self.append(html);
        }
      });
    },
    wrap: function wrap(html) {
      var htmlIsFunction = isFunction(html);
      return this.each(function (i) {
        jQuery(this).wrapAll(htmlIsFunction ? html.call(this, i) : html);
      });
    },
    unwrap: function unwrap(selector) {
      this.parent(selector).not("body").each(function () {
        jQuery(this).replaceWith(this.childNodes);
      });
      return this;
    }
  });

  jQuery.expr.pseudos.hidden = function (elem) {
    return !jQuery.expr.pseudos.visible(elem);
  };

  jQuery.expr.pseudos.visible = function (elem) {
    return !!(elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length);
  };

  jQuery.ajaxSettings.xhr = function () {
    try {
      return new window.XMLHttpRequest();
    } catch (e) {}
  };

  var xhrSuccessStatus = {
    // File protocol always yields status code 0, assume 200
    0: 200,
    // Support: IE <=9 only
    // #1450: sometimes IE returns 1223 when it should be 204
    1223: 204
  },
      xhrSupported = jQuery.ajaxSettings.xhr();
  support.cors = !!xhrSupported && "withCredentials" in xhrSupported;
  support.ajax = xhrSupported = !!xhrSupported;
  jQuery.ajaxTransport(function (options) {
    var _callback, errorCallback; // Cross domain only allowed if supported through XMLHttpRequest


    if (support.cors || xhrSupported && !options.crossDomain) {
      return {
        send: function send(headers, complete) {
          var i,
              xhr = options.xhr();
          xhr.open(options.type, options.url, options.async, options.username, options.password); // Apply custom fields if provided

          if (options.xhrFields) {
            for (i in options.xhrFields) {
              xhr[i] = options.xhrFields[i];
            }
          } // Override mime type if needed


          if (options.mimeType && xhr.overrideMimeType) {
            xhr.overrideMimeType(options.mimeType);
          } // X-Requested-With header
          // For cross-domain requests, seeing as conditions for a preflight are
          // akin to a jigsaw puzzle, we simply never set it to be sure.
          // (it can always be set on a per-request basis or even using ajaxSetup)
          // For same-domain requests, won't change header if already provided.


          if (!options.crossDomain && !headers["X-Requested-With"]) {
            headers["X-Requested-With"] = "XMLHttpRequest";
          } // Set headers


          for (i in headers) {
            xhr.setRequestHeader(i, headers[i]);
          } // Callback


          _callback = function callback(type) {
            return function () {
              if (_callback) {
                _callback = errorCallback = xhr.onload = xhr.onerror = xhr.onabort = xhr.ontimeout = xhr.onreadystatechange = null;

                if (type === "abort") {
                  xhr.abort();
                } else if (type === "error") {
                  // Support: IE <=9 only
                  // On a manual native abort, IE9 throws
                  // errors on any property access that is not readyState
                  if (typeof xhr.status !== "number") {
                    complete(0, "error");
                  } else {
                    complete( // File: protocol always yields status 0; see #8605, #14207
                    xhr.status, xhr.statusText);
                  }
                } else {
                  complete(xhrSuccessStatus[xhr.status] || xhr.status, xhr.statusText, // Support: IE <=9 only
                  // IE9 has no XHR2 but throws on binary (trac-11426)
                  // For XHR2 non-text, let the caller handle it (gh-2498)
                  (xhr.responseType || "text") !== "text" || typeof xhr.responseText !== "string" ? {
                    binary: xhr.response
                  } : {
                    text: xhr.responseText
                  }, xhr.getAllResponseHeaders());
                }
              }
            };
          }; // Listen to events


          xhr.onload = _callback();
          errorCallback = xhr.onerror = xhr.ontimeout = _callback("error"); // Support: IE 9 only
          // Use onreadystatechange to replace onabort
          // to handle uncaught aborts

          if (xhr.onabort !== undefined) {
            xhr.onabort = errorCallback;
          } else {
            xhr.onreadystatechange = function () {
              // Check readyState before timeout as it changes
              if (xhr.readyState === 4) {
                // Allow onerror to be called first,
                // but that will not handle a native abort
                // Also, save errorCallback to a variable
                // as xhr.onerror cannot be accessed
                window.setTimeout(function () {
                  if (_callback) {
                    errorCallback();
                  }
                });
              }
            };
          } // Create the abort callback


          _callback = _callback("abort");

          try {
            // Do send the request (this may raise an exception)
            xhr.send(options.hasContent && options.data || null);
          } catch (e) {
            // #14683: Only rethrow if this hasn't been notified as an error yet
            if (_callback) {
              throw e;
            }
          }
        },
        abort: function abort() {
          if (_callback) {
            _callback();
          }
        }
      };
    }
  }); // Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)

  jQuery.ajaxPrefilter(function (s) {
    if (s.crossDomain) {
      s.contents.script = false;
    }
  }); // Install script dataType

  jQuery.ajaxSetup({
    accepts: {
      script: "text/javascript, application/javascript, " + "application/ecmascript, application/x-ecmascript"
    },
    contents: {
      script: /\b(?:java|ecma)script\b/
    },
    converters: {
      "text script": function textScript(text) {
        jQuery.globalEval(text);
        return text;
      }
    }
  }); // Handle cache's special case and crossDomain

  jQuery.ajaxPrefilter("script", function (s) {
    if (s.cache === undefined) {
      s.cache = false;
    }

    if (s.crossDomain) {
      s.type = "GET";
    }
  }); // Bind script tag hack transport

  jQuery.ajaxTransport("script", function (s) {
    // This transport only deals with cross domain or forced-by-attrs requests
    if (s.crossDomain || s.scriptAttrs) {
      var script, _callback2;

      return {
        send: function send(_, complete) {
          script = jQuery("<script>").attr(s.scriptAttrs || {}).prop({
            charset: s.scriptCharset,
            src: s.url
          }).on("load error", _callback2 = function callback(evt) {
            script.remove();
            _callback2 = null;

            if (evt) {
              complete(evt.type === "error" ? 404 : 200, evt.type);
            }
          }); // Use native DOM manipulation to avoid our domManip AJAX trickery

          document.head.appendChild(script[0]);
        },
        abort: function abort() {
          if (_callback2) {
            _callback2();
          }
        }
      };
    }
  });
  var oldCallbacks = [],
      rjsonp = /(=)\?(?=&|$)|\?\?/; // Default jsonp settings

  jQuery.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function jsonpCallback() {
      var callback = oldCallbacks.pop() || jQuery.expando + "_" + nonce.guid++;
      this[callback] = true;
      return callback;
    }
  }); // Detect, normalize options and install callbacks for jsonp requests

  jQuery.ajaxPrefilter("json jsonp", function (s, originalSettings, jqXHR) {
    var callbackName,
        overwritten,
        responseContainer,
        jsonProp = s.jsonp !== false && (rjsonp.test(s.url) ? "url" : typeof s.data === "string" && (s.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && rjsonp.test(s.data) && "data"); // Handle iff the expected data type is "jsonp" or we have a parameter to set

    if (jsonProp || s.dataTypes[0] === "jsonp") {
      // Get callback name, remembering preexisting value associated with it
      callbackName = s.jsonpCallback = isFunction(s.jsonpCallback) ? s.jsonpCallback() : s.jsonpCallback; // Insert callback into url or form data

      if (jsonProp) {
        s[jsonProp] = s[jsonProp].replace(rjsonp, "$1" + callbackName);
      } else if (s.jsonp !== false) {
        s.url += (rquery.test(s.url) ? "&" : "?") + s.jsonp + "=" + callbackName;
      } // Use data converter to retrieve json after script execution


      s.converters["script json"] = function () {
        if (!responseContainer) {
          jQuery.error(callbackName + " was not called");
        }

        return responseContainer[0];
      }; // Force json dataType


      s.dataTypes[0] = "json"; // Install callback

      overwritten = window[callbackName];

      window[callbackName] = function () {
        responseContainer = arguments;
      }; // Clean-up function (fires after converters)


      jqXHR.always(function () {
        // If previous value didn't exist - remove it
        if (overwritten === undefined) {
          jQuery(window).removeProp(callbackName); // Otherwise restore preexisting value
        } else {
          window[callbackName] = overwritten;
        } // Save back as free


        if (s[callbackName]) {
          // Make sure that re-using the options doesn't screw things around
          s.jsonpCallback = originalSettings.jsonpCallback; // Save the callback name for future use

          oldCallbacks.push(callbackName);
        } // Call if it was a function and we have a response


        if (responseContainer && isFunction(overwritten)) {
          overwritten(responseContainer[0]);
        }

        responseContainer = overwritten = undefined;
      }); // Delegate to script

      return "script";
    }
  }); // Support: Safari 8 only
  // In Safari 8 documents created via document.implementation.createHTMLDocument
  // collapse sibling forms: the second one becomes a child of the first one.
  // Because of that, this security measure has to be disabled in Safari 8.
  // https://bugs.webkit.org/show_bug.cgi?id=137337

  support.createHTMLDocument = function () {
    var body = document.implementation.createHTMLDocument("").body;
    body.innerHTML = "<form></form><form></form>";
    return body.childNodes.length === 2;
  }(); // Argument "data" should be string of html
  // context (optional): If specified, the fragment will be created in this context,
  // defaults to document
  // keepScripts (optional): If true, will include scripts passed in the html string


  jQuery.parseHTML = function (data, context, keepScripts) {
    if (typeof data !== "string") {
      return [];
    }

    if (typeof context === "boolean") {
      keepScripts = context;
      context = false;
    }

    var base, parsed, scripts;

    if (!context) {
      // Stop scripts or inline event handlers from being executed immediately
      // by using document.implementation
      if (support.createHTMLDocument) {
        context = document.implementation.createHTMLDocument(""); // Set the base href for the created document
        // so any parsed elements with URLs
        // are based on the document's URL (gh-2965)

        base = context.createElement("base");
        base.href = document.location.href;
        context.head.appendChild(base);
      } else {
        context = document;
      }
    }

    parsed = rsingleTag.exec(data);
    scripts = !keepScripts && []; // Single tag

    if (parsed) {
      return [context.createElement(parsed[1])];
    }

    parsed = buildFragment([data], context, scripts);

    if (scripts && scripts.length) {
      jQuery(scripts).remove();
    }

    return jQuery.merge([], parsed.childNodes);
  };
  /**
   * Load a url into a page
   */


  jQuery.fn.load = function (url, params, callback) {
    var selector,
        type,
        response,
        self = this,
        off = url.indexOf(" ");

    if (off > -1) {
      selector = stripAndCollapse(url.slice(off));
      url = url.slice(0, off);
    } // If it's a function


    if (isFunction(params)) {
      // We assume that it's the callback
      callback = params;
      params = undefined; // Otherwise, build a param string
    } else if (params && _typeof(params) === "object") {
      type = "POST";
    } // If we have elements to modify, make the request


    if (self.length > 0) {
      jQuery.ajax({
        url: url,
        // If "type" variable is undefined, then "GET" method will be used.
        // Make value of this field explicit since
        // user can override it through ajaxSetup method
        type: type || "GET",
        dataType: "html",
        data: params
      }).done(function (responseText) {
        // Save response for use in complete callback
        response = arguments;
        self.html(selector ? // If a selector was specified, locate the right elements in a dummy div
        // Exclude scripts to avoid IE 'Permission Denied' errors
        jQuery("<div>").append(jQuery.parseHTML(responseText)).find(selector) : // Otherwise use the full result
        responseText); // If the request succeeds, this function gets "data", "status", "jqXHR"
        // but they are ignored because response was set above.
        // If it fails, this function gets "jqXHR", "status", "error"
      }).always(callback && function (jqXHR, status) {
        self.each(function () {
          callback.apply(this, response || [jqXHR.responseText, status, jqXHR]);
        });
      });
    }

    return this;
  };

  jQuery.expr.pseudos.animated = function (elem) {
    return jQuery.grep(jQuery.timers, function (fn) {
      return elem === fn.elem;
    }).length;
  };

  jQuery.offset = {
    setOffset: function setOffset(elem, options, i) {
      var curPosition,
          curLeft,
          curCSSTop,
          curTop,
          curOffset,
          curCSSLeft,
          calculatePosition,
          position = jQuery.css(elem, "position"),
          curElem = jQuery(elem),
          props = {}; // Set position first, in-case top/left are set even on static elem

      if (position === "static") {
        elem.style.position = "relative";
      }

      curOffset = curElem.offset();
      curCSSTop = jQuery.css(elem, "top");
      curCSSLeft = jQuery.css(elem, "left");
      calculatePosition = (position === "absolute" || position === "fixed") && (curCSSTop + curCSSLeft).indexOf("auto") > -1; // Need to be able to calculate position if either
      // top or left is auto and position is either absolute or fixed

      if (calculatePosition) {
        curPosition = curElem.position();
        curTop = curPosition.top;
        curLeft = curPosition.left;
      } else {
        curTop = parseFloat(curCSSTop) || 0;
        curLeft = parseFloat(curCSSLeft) || 0;
      }

      if (isFunction(options)) {
        // Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
        options = options.call(elem, i, jQuery.extend({}, curOffset));
      }

      if (options.top != null) {
        props.top = options.top - curOffset.top + curTop;
      }

      if (options.left != null) {
        props.left = options.left - curOffset.left + curLeft;
      }

      if ("using" in options) {
        options.using.call(elem, props);
      } else {
        curElem.css(props);
      }
    }
  };
  jQuery.fn.extend({
    // offset() relates an element's border box to the document origin
    offset: function offset(options) {
      // Preserve chaining for setter
      if (arguments.length) {
        return options === undefined ? this : this.each(function (i) {
          jQuery.offset.setOffset(this, options, i);
        });
      }

      var rect,
          win,
          elem = this[0];

      if (!elem) {
        return;
      } // Return zeros for disconnected and hidden (display: none) elements (gh-2310)
      // Support: IE <=11 only
      // Running getBoundingClientRect on a
      // disconnected node in IE throws an error


      if (!elem.getClientRects().length) {
        return {
          top: 0,
          left: 0
        };
      } // Get document-relative position by adding viewport scroll to viewport-relative gBCR


      rect = elem.getBoundingClientRect();
      win = elem.ownerDocument.defaultView;
      return {
        top: rect.top + win.pageYOffset,
        left: rect.left + win.pageXOffset
      };
    },
    // position() relates an element's margin box to its offset parent's padding box
    // This corresponds to the behavior of CSS absolute positioning
    position: function position() {
      if (!this[0]) {
        return;
      }

      var offsetParent,
          offset,
          doc,
          elem = this[0],
          parentOffset = {
        top: 0,
        left: 0
      }; // position:fixed elements are offset from the viewport, which itself always has zero offset

      if (jQuery.css(elem, "position") === "fixed") {
        // Assume position:fixed implies availability of getBoundingClientRect
        offset = elem.getBoundingClientRect();
      } else {
        offset = this.offset(); // Account for the *real* offset parent, which can be the document or its root element
        // when a statically positioned element is identified

        doc = elem.ownerDocument;
        offsetParent = elem.offsetParent || doc.documentElement;

        while (offsetParent && (offsetParent === doc.body || offsetParent === doc.documentElement) && jQuery.css(offsetParent, "position") === "static") {
          offsetParent = offsetParent.parentNode;
        }

        if (offsetParent && offsetParent !== elem && offsetParent.nodeType === 1) {
          // Incorporate borders into its offset, since they are outside its content origin
          parentOffset = jQuery(offsetParent).offset();
          parentOffset.top += jQuery.css(offsetParent, "borderTopWidth", true);
          parentOffset.left += jQuery.css(offsetParent, "borderLeftWidth", true);
        }
      } // Subtract parent offsets and element margins


      return {
        top: offset.top - parentOffset.top - jQuery.css(elem, "marginTop", true),
        left: offset.left - parentOffset.left - jQuery.css(elem, "marginLeft", true)
      };
    },
    // This method will return documentElement in the following cases:
    // 1) For the element inside the iframe without offsetParent, this method will return
    //    documentElement of the parent window
    // 2) For the hidden or detached element
    // 3) For body or html element, i.e. in case of the html node - it will return itself
    //
    // but those exceptions were never presented as a real life use-cases
    // and might be considered as more preferable results.
    //
    // This logic, however, is not guaranteed and can change at any point in the future
    offsetParent: function offsetParent() {
      return this.map(function () {
        var offsetParent = this.offsetParent;

        while (offsetParent && jQuery.css(offsetParent, "position") === "static") {
          offsetParent = offsetParent.offsetParent;
        }

        return offsetParent || documentElement;
      });
    }
  }); // Create scrollLeft and scrollTop methods

  jQuery.each({
    scrollLeft: "pageXOffset",
    scrollTop: "pageYOffset"
  }, function (method, prop) {
    var top = "pageYOffset" === prop;

    jQuery.fn[method] = function (val) {
      return access(this, function (elem, method, val) {
        // Coalesce documents and windows
        var win;

        if (isWindow(elem)) {
          win = elem;
        } else if (elem.nodeType === 9) {
          win = elem.defaultView;
        }

        if (val === undefined) {
          return win ? win[prop] : elem[method];
        }

        if (win) {
          win.scrollTo(!top ? val : win.pageXOffset, top ? val : win.pageYOffset);
        } else {
          elem[method] = val;
        }
      }, method, val, arguments.length);
    };
  }); // Support: Safari <=7 - 9.1, Chrome <=37 - 49
  // Add the top/left cssHooks using jQuery.fn.position
  // Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
  // Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
  // getComputedStyle returns percent when specified for top/left/bottom/right;
  // rather than make the css module depend on the offset module, just check for it here

  jQuery.each(["top", "left"], function (_i, prop) {
    jQuery.cssHooks[prop] = addGetHookIf(support.pixelPosition, function (elem, computed) {
      if (computed) {
        computed = curCSS(elem, prop); // If curCSS returns percentage, fallback to offset

        return rnumnonpx.test(computed) ? jQuery(elem).position()[prop] + "px" : computed;
      }
    });
  }); // Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods

  jQuery.each({
    Height: "height",
    Width: "width"
  }, function (name, type) {
    jQuery.each({
      padding: "inner" + name,
      content: type,
      "": "outer" + name
    }, function (defaultExtra, funcName) {
      // Margin is only for outerHeight, outerWidth
      jQuery.fn[funcName] = function (margin, value) {
        var chainable = arguments.length && (defaultExtra || typeof margin !== "boolean"),
            extra = defaultExtra || (margin === true || value === true ? "margin" : "border");
        return access(this, function (elem, type, value) {
          var doc;

          if (isWindow(elem)) {
            // $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
            return funcName.indexOf("outer") === 0 ? elem["inner" + name] : elem.document.documentElement["client" + name];
          } // Get document width or height


          if (elem.nodeType === 9) {
            doc = elem.documentElement; // Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
            // whichever is greatest

            return Math.max(elem.body["scroll" + name], doc["scroll" + name], elem.body["offset" + name], doc["offset" + name], doc["client" + name]);
          }

          return value === undefined ? // Get width or height on the element, requesting but not forcing parseFloat
          jQuery.css(elem, type, extra) : // Set width or height on the element
          jQuery.style(elem, type, value, extra);
        }, type, chainable ? margin : undefined, chainable);
      };
    });
  });
  jQuery.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (_i, type) {
    jQuery.fn[type] = function (fn) {
      return this.on(type, fn);
    };
  });
  jQuery.fn.extend({
    bind: function bind(types, data, fn) {
      return this.on(types, null, data, fn);
    },
    unbind: function unbind(types, fn) {
      return this.off(types, null, fn);
    },
    delegate: function delegate(selector, types, data, fn) {
      return this.on(types, selector, data, fn);
    },
    undelegate: function undelegate(selector, types, fn) {
      // ( namespace ) or ( selector, types [, fn] )
      return arguments.length === 1 ? this.off(selector, "**") : this.off(types, selector || "**", fn);
    },
    hover: function hover(fnOver, fnOut) {
      return this.mouseenter(fnOver).mouseleave(fnOut || fnOver);
    }
  });
  jQuery.each(("blur focus focusin focusout resize scroll click dblclick " + "mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " + "change select submit keydown keypress keyup contextmenu").split(" "), function (_i, name) {
    // Handle event binding
    jQuery.fn[name] = function (data, fn) {
      return arguments.length > 0 ? this.on(name, null, data, fn) : this.trigger(name);
    };
  }); // Support: Android <=4.0 only
  // Make sure we trim BOM and NBSP

  var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g; // Bind a function to a context, optionally partially applying any
  // arguments.
  // jQuery.proxy is deprecated to promote standards (specifically Function#bind)
  // However, it is not slated for removal any time soon

  jQuery.proxy = function (fn, context) {
    var tmp, args, proxy;

    if (typeof context === "string") {
      tmp = fn[context];
      context = fn;
      fn = tmp;
    } // Quick check to determine if target is callable, in the spec
    // this throws a TypeError, but we will just return undefined.


    if (!isFunction(fn)) {
      return undefined;
    } // Simulated bind


    args = _slice.call(arguments, 2);

    proxy = function proxy() {
      return fn.apply(context || this, args.concat(_slice.call(arguments)));
    }; // Set the guid of unique handler to the same of original handler, so it can be removed


    proxy.guid = fn.guid = fn.guid || jQuery.guid++;
    return proxy;
  };

  jQuery.holdReady = function (hold) {
    if (hold) {
      jQuery.readyWait++;
    } else {
      jQuery.ready(true);
    }
  };

  jQuery.isArray = Array.isArray;
  jQuery.parseJSON = JSON.parse;
  jQuery.nodeName = nodeName;
  jQuery.isFunction = isFunction;
  jQuery.isWindow = isWindow;
  jQuery.camelCase = camelCase;
  jQuery.type = toType;
  jQuery.now = Date.now;

  jQuery.isNumeric = function (obj) {
    // As of jQuery 3.0, isNumeric is limited to
    // strings and numbers (primitives or objects)
    // that can be coerced to finite numbers (gh-2662)
    var type = jQuery.type(obj);
    return (type === "number" || type === "string") && // parseFloat NaNs numeric-cast false positives ("")
    // ...but misinterprets leading-number strings, particularly hex literals ("0x...")
    // subtraction forces infinities to NaN
    !isNaN(obj - parseFloat(obj));
  };

  jQuery.trim = function (text) {
    return text == null ? "" : (text + "").replace(rtrim, "");
  }; // Register as a named AMD module, since jQuery can be concatenated with other
  // files that may use define, but not via a proper concatenation script that
  // understands anonymous AMD modules. A named AMD is safest and most robust
  // way to register. Lowercase jquery is used because AMD module names are
  // derived from file names, and jQuery is normally delivered in a lowercase
  // file name. Do this after creating the global so that if an AMD module wants
  // to call noConflict to hide this version of jQuery, it will work.
  // Note that for maximum portability, libraries that are not jQuery should
  // declare themselves as anonymous modules, and avoid setting a global if an
  // AMD loader is present. jQuery is a special case. For more information, see
  // https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon


  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
      return jQuery;
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  }

  var // Map over jQuery in case of overwrite
  _jQuery = window.jQuery,
      // Map over the $ in case of overwrite
  _$ = window.$;

  jQuery.noConflict = function (deep) {
    if (window.$ === jQuery) {
      window.$ = _$;
    }

    if (deep && window.jQuery === jQuery) {
      window.jQuery = _jQuery;
    }

    return jQuery;
  }; // Expose jQuery and $ identifiers, even in AMD
  // (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
  // and CommonJS for browser emulators (#13566)


  if (typeof noGlobal === "undefined") {
    window.jQuery = window.$ = jQuery;
  }

  return jQuery;
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/turbolinks/dist/turbolinks.js":
/*!****************************************************!*\
  !*** ./node_modules/turbolinks/dist/turbolinks.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*
Turbolinks 5.2.0
Copyright © 2018 Basecamp, LLC
 */
(function () {
  var t = this;
  (function () {
    (function () {
      this.Turbolinks = {
        supported: function () {
          return null != window.history.pushState && null != window.requestAnimationFrame && null != window.addEventListener;
        }(),
        visit: function visit(t, r) {
          return e.controller.visit(t, r);
        },
        clearCache: function clearCache() {
          return e.controller.clearCache();
        },
        setProgressBarDelay: function setProgressBarDelay(t) {
          return e.controller.setProgressBarDelay(t);
        }
      };
    }).call(this);
  }).call(t);
  var e = t.Turbolinks;
  (function () {
    (function () {
      var t,
          r,
          n,
          o = [].slice;
      e.copyObject = function (t) {
        var e, r, n;
        r = {};

        for (e in t) {
          n = t[e], r[e] = n;
        }

        return r;
      }, e.closest = function (e, r) {
        return t.call(e, r);
      }, t = function () {
        var t, e;
        return t = document.documentElement, null != (e = t.closest) ? e : function (t) {
          var e;

          for (e = this; e;) {
            if (e.nodeType === Node.ELEMENT_NODE && r.call(e, t)) return e;
            e = e.parentNode;
          }
        };
      }(), e.defer = function (t) {
        return setTimeout(t, 1);
      }, e.throttle = function (t) {
        var e;
        return e = null, function () {
          var r;
          return r = 1 <= arguments.length ? o.call(arguments, 0) : [], null != e ? e : e = requestAnimationFrame(function (n) {
            return function () {
              return e = null, t.apply(n, r);
            };
          }(this));
        };
      }, e.dispatch = function (t, e) {
        var r, o, i, s, a, u;
        return a = null != e ? e : {}, u = a.target, r = a.cancelable, o = a.data, i = document.createEvent("Events"), i.initEvent(t, !0, r === !0), i.data = null != o ? o : {}, i.cancelable && !n && (s = i.preventDefault, i.preventDefault = function () {
          return this.defaultPrevented || Object.defineProperty(this, "defaultPrevented", {
            get: function get() {
              return !0;
            }
          }), s.call(this);
        }), (null != u ? u : document).dispatchEvent(i), i;
      }, n = function () {
        var t;
        return t = document.createEvent("Events"), t.initEvent("test", !0, !0), t.preventDefault(), t.defaultPrevented;
      }(), e.match = function (t, e) {
        return r.call(t, e);
      }, r = function () {
        var t, e, r, n;
        return t = document.documentElement, null != (e = null != (r = null != (n = t.matchesSelector) ? n : t.webkitMatchesSelector) ? r : t.msMatchesSelector) ? e : t.mozMatchesSelector;
      }(), e.uuid = function () {
        var t, e, r;

        for (r = "", t = e = 1; 36 >= e; t = ++e) {
          r += 9 === t || 14 === t || 19 === t || 24 === t ? "-" : 15 === t ? "4" : 20 === t ? (Math.floor(4 * Math.random()) + 8).toString(16) : Math.floor(15 * Math.random()).toString(16);
        }

        return r;
      };
    }).call(this), function () {
      e.Location = function () {
        function t(t) {
          var e, r;
          null == t && (t = ""), r = document.createElement("a"), r.href = t.toString(), this.absoluteURL = r.href, e = r.hash.length, 2 > e ? this.requestURL = this.absoluteURL : (this.requestURL = this.absoluteURL.slice(0, -e), this.anchor = r.hash.slice(1));
        }

        var e, r, n, o;
        return t.wrap = function (t) {
          return t instanceof this ? t : new this(t);
        }, t.prototype.getOrigin = function () {
          return this.absoluteURL.split("/", 3).join("/");
        }, t.prototype.getPath = function () {
          var t, e;
          return null != (t = null != (e = this.requestURL.match(/\/\/[^\/]*(\/[^?;]*)/)) ? e[1] : void 0) ? t : "/";
        }, t.prototype.getPathComponents = function () {
          return this.getPath().split("/").slice(1);
        }, t.prototype.getLastPathComponent = function () {
          return this.getPathComponents().slice(-1)[0];
        }, t.prototype.getExtension = function () {
          var t, e;
          return null != (t = null != (e = this.getLastPathComponent().match(/\.[^.]*$/)) ? e[0] : void 0) ? t : "";
        }, t.prototype.isHTML = function () {
          return this.getExtension().match(/^(?:|\.(?:htm|html|xhtml))$/);
        }, t.prototype.isPrefixedBy = function (t) {
          var e;
          return e = r(t), this.isEqualTo(t) || o(this.absoluteURL, e);
        }, t.prototype.isEqualTo = function (t) {
          return this.absoluteURL === (null != t ? t.absoluteURL : void 0);
        }, t.prototype.toCacheKey = function () {
          return this.requestURL;
        }, t.prototype.toJSON = function () {
          return this.absoluteURL;
        }, t.prototype.toString = function () {
          return this.absoluteURL;
        }, t.prototype.valueOf = function () {
          return this.absoluteURL;
        }, r = function r(t) {
          return e(t.getOrigin() + t.getPath());
        }, e = function e(t) {
          return n(t, "/") ? t : t + "/";
        }, o = function o(t, e) {
          return t.slice(0, e.length) === e;
        }, n = function n(t, e) {
          return t.slice(-e.length) === e;
        }, t;
      }();
    }.call(this), function () {
      var t = function t(_t, e) {
        return function () {
          return _t.apply(e, arguments);
        };
      };

      e.HttpRequest = function () {
        function r(r, n, o) {
          this.delegate = r, this.requestCanceled = t(this.requestCanceled, this), this.requestTimedOut = t(this.requestTimedOut, this), this.requestFailed = t(this.requestFailed, this), this.requestLoaded = t(this.requestLoaded, this), this.requestProgressed = t(this.requestProgressed, this), this.url = e.Location.wrap(n).requestURL, this.referrer = e.Location.wrap(o).absoluteURL, this.createXHR();
        }

        return r.NETWORK_FAILURE = 0, r.TIMEOUT_FAILURE = -1, r.timeout = 60, r.prototype.send = function () {
          var t;
          return this.xhr && !this.sent ? (this.notifyApplicationBeforeRequestStart(), this.setProgress(0), this.xhr.send(), this.sent = !0, "function" == typeof (t = this.delegate).requestStarted ? t.requestStarted() : void 0) : void 0;
        }, r.prototype.cancel = function () {
          return this.xhr && this.sent ? this.xhr.abort() : void 0;
        }, r.prototype.requestProgressed = function (t) {
          return t.lengthComputable ? this.setProgress(t.loaded / t.total) : void 0;
        }, r.prototype.requestLoaded = function () {
          return this.endRequest(function (t) {
            return function () {
              var e;
              return 200 <= (e = t.xhr.status) && 300 > e ? t.delegate.requestCompletedWithResponse(t.xhr.responseText, t.xhr.getResponseHeader("Turbolinks-Location")) : (t.failed = !0, t.delegate.requestFailedWithStatusCode(t.xhr.status, t.xhr.responseText));
            };
          }(this));
        }, r.prototype.requestFailed = function () {
          return this.endRequest(function (t) {
            return function () {
              return t.failed = !0, t.delegate.requestFailedWithStatusCode(t.constructor.NETWORK_FAILURE);
            };
          }(this));
        }, r.prototype.requestTimedOut = function () {
          return this.endRequest(function (t) {
            return function () {
              return t.failed = !0, t.delegate.requestFailedWithStatusCode(t.constructor.TIMEOUT_FAILURE);
            };
          }(this));
        }, r.prototype.requestCanceled = function () {
          return this.endRequest();
        }, r.prototype.notifyApplicationBeforeRequestStart = function () {
          return e.dispatch("turbolinks:request-start", {
            data: {
              url: this.url,
              xhr: this.xhr
            }
          });
        }, r.prototype.notifyApplicationAfterRequestEnd = function () {
          return e.dispatch("turbolinks:request-end", {
            data: {
              url: this.url,
              xhr: this.xhr
            }
          });
        }, r.prototype.createXHR = function () {
          return this.xhr = new XMLHttpRequest(), this.xhr.open("GET", this.url, !0), this.xhr.timeout = 1e3 * this.constructor.timeout, this.xhr.setRequestHeader("Accept", "text/html, application/xhtml+xml"), this.xhr.setRequestHeader("Turbolinks-Referrer", this.referrer), this.xhr.onprogress = this.requestProgressed, this.xhr.onload = this.requestLoaded, this.xhr.onerror = this.requestFailed, this.xhr.ontimeout = this.requestTimedOut, this.xhr.onabort = this.requestCanceled;
        }, r.prototype.endRequest = function (t) {
          return this.xhr ? (this.notifyApplicationAfterRequestEnd(), null != t && t.call(this), this.destroy()) : void 0;
        }, r.prototype.setProgress = function (t) {
          var e;
          return this.progress = t, "function" == typeof (e = this.delegate).requestProgressed ? e.requestProgressed(this.progress) : void 0;
        }, r.prototype.destroy = function () {
          var t;
          return this.setProgress(1), "function" == typeof (t = this.delegate).requestFinished && t.requestFinished(), this.delegate = null, this.xhr = null;
        }, r;
      }();
    }.call(this), function () {
      var t = function t(_t2, e) {
        return function () {
          return _t2.apply(e, arguments);
        };
      };

      e.ProgressBar = function () {
        function e() {
          this.trickle = t(this.trickle, this), this.stylesheetElement = this.createStylesheetElement(), this.progressElement = this.createProgressElement();
        }

        var r;
        return r = 300, e.defaultCSS = ".turbolinks-progress-bar {\n  position: fixed;\n  display: block;\n  top: 0;\n  left: 0;\n  height: 3px;\n  background: #0076ff;\n  z-index: 9999;\n  transition: width " + r + "ms ease-out, opacity " + r / 2 + "ms " + r / 2 + "ms ease-in;\n  transform: translate3d(0, 0, 0);\n}", e.prototype.show = function () {
          return this.visible ? void 0 : (this.visible = !0, this.installStylesheetElement(), this.installProgressElement(), this.startTrickling());
        }, e.prototype.hide = function () {
          return this.visible && !this.hiding ? (this.hiding = !0, this.fadeProgressElement(function (t) {
            return function () {
              return t.uninstallProgressElement(), t.stopTrickling(), t.visible = !1, t.hiding = !1;
            };
          }(this))) : void 0;
        }, e.prototype.setValue = function (t) {
          return this.value = t, this.refresh();
        }, e.prototype.installStylesheetElement = function () {
          return document.head.insertBefore(this.stylesheetElement, document.head.firstChild);
        }, e.prototype.installProgressElement = function () {
          return this.progressElement.style.width = 0, this.progressElement.style.opacity = 1, document.documentElement.insertBefore(this.progressElement, document.body), this.refresh();
        }, e.prototype.fadeProgressElement = function (t) {
          return this.progressElement.style.opacity = 0, setTimeout(t, 1.5 * r);
        }, e.prototype.uninstallProgressElement = function () {
          return this.progressElement.parentNode ? document.documentElement.removeChild(this.progressElement) : void 0;
        }, e.prototype.startTrickling = function () {
          return null != this.trickleInterval ? this.trickleInterval : this.trickleInterval = setInterval(this.trickle, r);
        }, e.prototype.stopTrickling = function () {
          return clearInterval(this.trickleInterval), this.trickleInterval = null;
        }, e.prototype.trickle = function () {
          return this.setValue(this.value + Math.random() / 100);
        }, e.prototype.refresh = function () {
          return requestAnimationFrame(function (t) {
            return function () {
              return t.progressElement.style.width = 10 + 90 * t.value + "%";
            };
          }(this));
        }, e.prototype.createStylesheetElement = function () {
          var t;
          return t = document.createElement("style"), t.type = "text/css", t.textContent = this.constructor.defaultCSS, t;
        }, e.prototype.createProgressElement = function () {
          var t;
          return t = document.createElement("div"), t.className = "turbolinks-progress-bar", t;
        }, e;
      }();
    }.call(this), function () {
      var t = function t(_t3, e) {
        return function () {
          return _t3.apply(e, arguments);
        };
      };

      e.BrowserAdapter = function () {
        function r(r) {
          this.controller = r, this.showProgressBar = t(this.showProgressBar, this), this.progressBar = new e.ProgressBar();
        }

        var n, o, i;
        return i = e.HttpRequest, n = i.NETWORK_FAILURE, o = i.TIMEOUT_FAILURE, r.prototype.visitProposedToLocationWithAction = function (t, e) {
          return this.controller.startVisitToLocationWithAction(t, e);
        }, r.prototype.visitStarted = function (t) {
          return t.issueRequest(), t.changeHistory(), t.loadCachedSnapshot();
        }, r.prototype.visitRequestStarted = function (t) {
          return this.progressBar.setValue(0), t.hasCachedSnapshot() || "restore" !== t.action ? this.showProgressBarAfterDelay() : this.showProgressBar();
        }, r.prototype.visitRequestProgressed = function (t) {
          return this.progressBar.setValue(t.progress);
        }, r.prototype.visitRequestCompleted = function (t) {
          return t.loadResponse();
        }, r.prototype.visitRequestFailedWithStatusCode = function (t, e) {
          switch (e) {
            case n:
            case o:
              return this.reload();

            default:
              return t.loadResponse();
          }
        }, r.prototype.visitRequestFinished = function (t) {
          return this.hideProgressBar();
        }, r.prototype.visitCompleted = function (t) {
          return t.followRedirect();
        }, r.prototype.pageInvalidated = function () {
          return this.reload();
        }, r.prototype.showProgressBarAfterDelay = function () {
          return this.progressBarTimeout = setTimeout(this.showProgressBar, this.controller.progressBarDelay);
        }, r.prototype.showProgressBar = function () {
          return this.progressBar.show();
        }, r.prototype.hideProgressBar = function () {
          return this.progressBar.hide(), clearTimeout(this.progressBarTimeout);
        }, r.prototype.reload = function () {
          return window.location.reload();
        }, r;
      }();
    }.call(this), function () {
      var t = function t(_t4, e) {
        return function () {
          return _t4.apply(e, arguments);
        };
      };

      e.History = function () {
        function r(e) {
          this.delegate = e, this.onPageLoad = t(this.onPageLoad, this), this.onPopState = t(this.onPopState, this);
        }

        return r.prototype.start = function () {
          return this.started ? void 0 : (addEventListener("popstate", this.onPopState, !1), addEventListener("load", this.onPageLoad, !1), this.started = !0);
        }, r.prototype.stop = function () {
          return this.started ? (removeEventListener("popstate", this.onPopState, !1), removeEventListener("load", this.onPageLoad, !1), this.started = !1) : void 0;
        }, r.prototype.push = function (t, r) {
          return t = e.Location.wrap(t), this.update("push", t, r);
        }, r.prototype.replace = function (t, r) {
          return t = e.Location.wrap(t), this.update("replace", t, r);
        }, r.prototype.onPopState = function (t) {
          var r, n, o, i;
          return this.shouldHandlePopState() && (i = null != (n = t.state) ? n.turbolinks : void 0) ? (r = e.Location.wrap(window.location), o = i.restorationIdentifier, this.delegate.historyPoppedToLocationWithRestorationIdentifier(r, o)) : void 0;
        }, r.prototype.onPageLoad = function (t) {
          return e.defer(function (t) {
            return function () {
              return t.pageLoaded = !0;
            };
          }(this));
        }, r.prototype.shouldHandlePopState = function () {
          return this.pageIsLoaded();
        }, r.prototype.pageIsLoaded = function () {
          return this.pageLoaded || "complete" === document.readyState;
        }, r.prototype.update = function (t, e, r) {
          var n;
          return n = {
            turbolinks: {
              restorationIdentifier: r
            }
          }, history[t + "State"](n, null, e);
        }, r;
      }();
    }.call(this), function () {
      e.HeadDetails = function () {
        function t(t) {
          var e, r, n, s, a, u;

          for (this.elements = {}, n = 0, a = t.length; a > n; n++) {
            u = t[n], u.nodeType === Node.ELEMENT_NODE && (s = u.outerHTML, r = null != (e = this.elements)[s] ? e[s] : e[s] = {
              type: i(u),
              tracked: o(u),
              elements: []
            }, r.elements.push(u));
          }
        }

        var e, r, n, o, i;
        return t.fromHeadElement = function (t) {
          var e;
          return new this(null != (e = null != t ? t.childNodes : void 0) ? e : []);
        }, t.prototype.hasElementWithKey = function (t) {
          return t in this.elements;
        }, t.prototype.getTrackedElementSignature = function () {
          var t, e;
          return function () {
            var r, n;
            r = this.elements, n = [];

            for (t in r) {
              e = r[t].tracked, e && n.push(t);
            }

            return n;
          }.call(this).join("");
        }, t.prototype.getScriptElementsNotInDetails = function (t) {
          return this.getElementsMatchingTypeNotInDetails("script", t);
        }, t.prototype.getStylesheetElementsNotInDetails = function (t) {
          return this.getElementsMatchingTypeNotInDetails("stylesheet", t);
        }, t.prototype.getElementsMatchingTypeNotInDetails = function (t, e) {
          var r, n, o, i, s, a;
          o = this.elements, s = [];

          for (n in o) {
            i = o[n], a = i.type, r = i.elements, a !== t || e.hasElementWithKey(n) || s.push(r[0]);
          }

          return s;
        }, t.prototype.getProvisionalElements = function () {
          var t, e, r, n, o, i, s;
          r = [], n = this.elements;

          for (e in n) {
            o = n[e], s = o.type, i = o.tracked, t = o.elements, null != s || i ? t.length > 1 && r.push.apply(r, t.slice(1)) : r.push.apply(r, t);
          }

          return r;
        }, t.prototype.getMetaValue = function (t) {
          var e;
          return null != (e = this.findMetaElementByName(t)) ? e.getAttribute("content") : void 0;
        }, t.prototype.findMetaElementByName = function (t) {
          var r, n, o, i;
          r = void 0, i = this.elements;

          for (o in i) {
            n = i[o].elements, e(n[0], t) && (r = n[0]);
          }

          return r;
        }, i = function i(t) {
          return r(t) ? "script" : n(t) ? "stylesheet" : void 0;
        }, o = function o(t) {
          return "reload" === t.getAttribute("data-turbolinks-track");
        }, r = function r(t) {
          var e;
          return e = t.tagName.toLowerCase(), "script" === e;
        }, n = function n(t) {
          var e;
          return e = t.tagName.toLowerCase(), "style" === e || "link" === e && "stylesheet" === t.getAttribute("rel");
        }, e = function e(t, _e) {
          var r;
          return r = t.tagName.toLowerCase(), "meta" === r && t.getAttribute("name") === _e;
        }, t;
      }();
    }.call(this), function () {
      e.Snapshot = function () {
        function t(t, e) {
          this.headDetails = t, this.bodyElement = e;
        }

        return t.wrap = function (t) {
          return t instanceof this ? t : "string" == typeof t ? this.fromHTMLString(t) : this.fromHTMLElement(t);
        }, t.fromHTMLString = function (t) {
          var e;
          return e = document.createElement("html"), e.innerHTML = t, this.fromHTMLElement(e);
        }, t.fromHTMLElement = function (t) {
          var r, n, o, i;
          return o = t.querySelector("head"), r = null != (i = t.querySelector("body")) ? i : document.createElement("body"), n = e.HeadDetails.fromHeadElement(o), new this(n, r);
        }, t.prototype.clone = function () {
          return new this.constructor(this.headDetails, this.bodyElement.cloneNode(!0));
        }, t.prototype.getRootLocation = function () {
          var t, r;
          return r = null != (t = this.getSetting("root")) ? t : "/", new e.Location(r);
        }, t.prototype.getCacheControlValue = function () {
          return this.getSetting("cache-control");
        }, t.prototype.getElementForAnchor = function (t) {
          try {
            return this.bodyElement.querySelector("[id='" + t + "'], a[name='" + t + "']");
          } catch (e) {}
        }, t.prototype.getPermanentElements = function () {
          return this.bodyElement.querySelectorAll("[id][data-turbolinks-permanent]");
        }, t.prototype.getPermanentElementById = function (t) {
          return this.bodyElement.querySelector("#" + t + "[data-turbolinks-permanent]");
        }, t.prototype.getPermanentElementsPresentInSnapshot = function (t) {
          var e, r, n, o, i;

          for (o = this.getPermanentElements(), i = [], r = 0, n = o.length; n > r; r++) {
            e = o[r], t.getPermanentElementById(e.id) && i.push(e);
          }

          return i;
        }, t.prototype.findFirstAutofocusableElement = function () {
          return this.bodyElement.querySelector("[autofocus]");
        }, t.prototype.hasAnchor = function (t) {
          return null != this.getElementForAnchor(t);
        }, t.prototype.isPreviewable = function () {
          return "no-preview" !== this.getCacheControlValue();
        }, t.prototype.isCacheable = function () {
          return "no-cache" !== this.getCacheControlValue();
        }, t.prototype.isVisitable = function () {
          return "reload" !== this.getSetting("visit-control");
        }, t.prototype.getSetting = function (t) {
          return this.headDetails.getMetaValue("turbolinks-" + t);
        }, t;
      }();
    }.call(this), function () {
      var t = [].slice;

      e.Renderer = function () {
        function e() {}

        var r;
        return e.render = function () {
          var e, r, n, o;
          return n = arguments[0], r = arguments[1], e = 3 <= arguments.length ? t.call(arguments, 2) : [], o = function (t, e, r) {
            r.prototype = t.prototype;
            var n = new r(),
                o = t.apply(n, e);
            return Object(o) === o ? o : n;
          }(this, e, function () {}), o.delegate = n, o.render(r), o;
        }, e.prototype.renderView = function (t) {
          return this.delegate.viewWillRender(this.newBody), t(), this.delegate.viewRendered(this.newBody);
        }, e.prototype.invalidateView = function () {
          return this.delegate.viewInvalidated();
        }, e.prototype.createScriptElement = function (t) {
          var e;
          return "false" === t.getAttribute("data-turbolinks-eval") ? t : (e = document.createElement("script"), e.textContent = t.textContent, e.async = !1, r(e, t), e);
        }, r = function r(t, e) {
          var r, n, o, i, s, a, u;

          for (i = e.attributes, a = [], r = 0, n = i.length; n > r; r++) {
            s = i[r], o = s.name, u = s.value, a.push(t.setAttribute(o, u));
          }

          return a;
        }, e;
      }();
    }.call(this), function () {
      var t,
          r,
          n = function n(t, e) {
        function r() {
          this.constructor = t;
        }

        for (var n in e) {
          o.call(e, n) && (t[n] = e[n]);
        }

        return r.prototype = e.prototype, t.prototype = new r(), t.__super__ = e.prototype, t;
      },
          o = {}.hasOwnProperty;

      e.SnapshotRenderer = function (e) {
        function o(t, e, r) {
          this.currentSnapshot = t, this.newSnapshot = e, this.isPreview = r, this.currentHeadDetails = this.currentSnapshot.headDetails, this.newHeadDetails = this.newSnapshot.headDetails, this.currentBody = this.currentSnapshot.bodyElement, this.newBody = this.newSnapshot.bodyElement;
        }

        return n(o, e), o.prototype.render = function (t) {
          return this.shouldRender() ? (this.mergeHead(), this.renderView(function (e) {
            return function () {
              return e.replaceBody(), e.isPreview || e.focusFirstAutofocusableElement(), t();
            };
          }(this))) : this.invalidateView();
        }, o.prototype.mergeHead = function () {
          return this.copyNewHeadStylesheetElements(), this.copyNewHeadScriptElements(), this.removeCurrentHeadProvisionalElements(), this.copyNewHeadProvisionalElements();
        }, o.prototype.replaceBody = function () {
          var t;
          return t = this.relocateCurrentBodyPermanentElements(), this.activateNewBodyScriptElements(), this.assignNewBody(), this.replacePlaceholderElementsWithClonedPermanentElements(t);
        }, o.prototype.shouldRender = function () {
          return this.newSnapshot.isVisitable() && this.trackedElementsAreIdentical();
        }, o.prototype.trackedElementsAreIdentical = function () {
          return this.currentHeadDetails.getTrackedElementSignature() === this.newHeadDetails.getTrackedElementSignature();
        }, o.prototype.copyNewHeadStylesheetElements = function () {
          var t, e, r, n, o;

          for (n = this.getNewHeadStylesheetElements(), o = [], e = 0, r = n.length; r > e; e++) {
            t = n[e], o.push(document.head.appendChild(t));
          }

          return o;
        }, o.prototype.copyNewHeadScriptElements = function () {
          var t, e, r, n, o;

          for (n = this.getNewHeadScriptElements(), o = [], e = 0, r = n.length; r > e; e++) {
            t = n[e], o.push(document.head.appendChild(this.createScriptElement(t)));
          }

          return o;
        }, o.prototype.removeCurrentHeadProvisionalElements = function () {
          var t, e, r, n, o;

          for (n = this.getCurrentHeadProvisionalElements(), o = [], e = 0, r = n.length; r > e; e++) {
            t = n[e], o.push(document.head.removeChild(t));
          }

          return o;
        }, o.prototype.copyNewHeadProvisionalElements = function () {
          var t, e, r, n, o;

          for (n = this.getNewHeadProvisionalElements(), o = [], e = 0, r = n.length; r > e; e++) {
            t = n[e], o.push(document.head.appendChild(t));
          }

          return o;
        }, o.prototype.relocateCurrentBodyPermanentElements = function () {
          var e, n, o, i, s, a, u;

          for (a = this.getCurrentBodyPermanentElements(), u = [], e = 0, n = a.length; n > e; e++) {
            i = a[e], s = t(i), o = this.newSnapshot.getPermanentElementById(i.id), r(i, s.element), r(o, i), u.push(s);
          }

          return u;
        }, o.prototype.replacePlaceholderElementsWithClonedPermanentElements = function (t) {
          var e, n, o, i, s, a, u;

          for (u = [], o = 0, i = t.length; i > o; o++) {
            a = t[o], n = a.element, s = a.permanentElement, e = s.cloneNode(!0), u.push(r(n, e));
          }

          return u;
        }, o.prototype.activateNewBodyScriptElements = function () {
          var t, e, n, o, i, s;

          for (i = this.getNewBodyScriptElements(), s = [], e = 0, o = i.length; o > e; e++) {
            n = i[e], t = this.createScriptElement(n), s.push(r(n, t));
          }

          return s;
        }, o.prototype.assignNewBody = function () {
          return document.body = this.newBody;
        }, o.prototype.focusFirstAutofocusableElement = function () {
          var t;
          return null != (t = this.newSnapshot.findFirstAutofocusableElement()) ? t.focus() : void 0;
        }, o.prototype.getNewHeadStylesheetElements = function () {
          return this.newHeadDetails.getStylesheetElementsNotInDetails(this.currentHeadDetails);
        }, o.prototype.getNewHeadScriptElements = function () {
          return this.newHeadDetails.getScriptElementsNotInDetails(this.currentHeadDetails);
        }, o.prototype.getCurrentHeadProvisionalElements = function () {
          return this.currentHeadDetails.getProvisionalElements();
        }, o.prototype.getNewHeadProvisionalElements = function () {
          return this.newHeadDetails.getProvisionalElements();
        }, o.prototype.getCurrentBodyPermanentElements = function () {
          return this.currentSnapshot.getPermanentElementsPresentInSnapshot(this.newSnapshot);
        }, o.prototype.getNewBodyScriptElements = function () {
          return this.newBody.querySelectorAll("script");
        }, o;
      }(e.Renderer), t = function t(_t5) {
        var e;
        return e = document.createElement("meta"), e.setAttribute("name", "turbolinks-permanent-placeholder"), e.setAttribute("content", _t5.id), {
          element: e,
          permanentElement: _t5
        };
      }, r = function r(t, e) {
        var r;
        return (r = t.parentNode) ? r.replaceChild(e, t) : void 0;
      };
    }.call(this), function () {
      var t = function t(_t6, e) {
        function n() {
          this.constructor = _t6;
        }

        for (var o in e) {
          r.call(e, o) && (_t6[o] = e[o]);
        }

        return n.prototype = e.prototype, _t6.prototype = new n(), _t6.__super__ = e.prototype, _t6;
      },
          r = {}.hasOwnProperty;

      e.ErrorRenderer = function (e) {
        function r(t) {
          var e;
          e = document.createElement("html"), e.innerHTML = t, this.newHead = e.querySelector("head"), this.newBody = e.querySelector("body");
        }

        return t(r, e), r.prototype.render = function (t) {
          return this.renderView(function (e) {
            return function () {
              return e.replaceHeadAndBody(), e.activateBodyScriptElements(), t();
            };
          }(this));
        }, r.prototype.replaceHeadAndBody = function () {
          var t, e;
          return e = document.head, t = document.body, e.parentNode.replaceChild(this.newHead, e), t.parentNode.replaceChild(this.newBody, t);
        }, r.prototype.activateBodyScriptElements = function () {
          var t, e, r, n, o, i;

          for (n = this.getScriptElements(), i = [], e = 0, r = n.length; r > e; e++) {
            o = n[e], t = this.createScriptElement(o), i.push(o.parentNode.replaceChild(t, o));
          }

          return i;
        }, r.prototype.getScriptElements = function () {
          return document.documentElement.querySelectorAll("script");
        }, r;
      }(e.Renderer);
    }.call(this), function () {
      e.View = function () {
        function t(t) {
          this.delegate = t, this.htmlElement = document.documentElement;
        }

        return t.prototype.getRootLocation = function () {
          return this.getSnapshot().getRootLocation();
        }, t.prototype.getElementForAnchor = function (t) {
          return this.getSnapshot().getElementForAnchor(t);
        }, t.prototype.getSnapshot = function () {
          return e.Snapshot.fromHTMLElement(this.htmlElement);
        }, t.prototype.render = function (t, e) {
          var r, n, o;
          return o = t.snapshot, r = t.error, n = t.isPreview, this.markAsPreview(n), null != o ? this.renderSnapshot(o, n, e) : this.renderError(r, e);
        }, t.prototype.markAsPreview = function (t) {
          return t ? this.htmlElement.setAttribute("data-turbolinks-preview", "") : this.htmlElement.removeAttribute("data-turbolinks-preview");
        }, t.prototype.renderSnapshot = function (t, r, n) {
          return e.SnapshotRenderer.render(this.delegate, n, this.getSnapshot(), e.Snapshot.wrap(t), r);
        }, t.prototype.renderError = function (t, r) {
          return e.ErrorRenderer.render(this.delegate, r, t);
        }, t;
      }();
    }.call(this), function () {
      var t = function t(_t7, e) {
        return function () {
          return _t7.apply(e, arguments);
        };
      };

      e.ScrollManager = function () {
        function r(r) {
          this.delegate = r, this.onScroll = t(this.onScroll, this), this.onScroll = e.throttle(this.onScroll);
        }

        return r.prototype.start = function () {
          return this.started ? void 0 : (addEventListener("scroll", this.onScroll, !1), this.onScroll(), this.started = !0);
        }, r.prototype.stop = function () {
          return this.started ? (removeEventListener("scroll", this.onScroll, !1), this.started = !1) : void 0;
        }, r.prototype.scrollToElement = function (t) {
          return t.scrollIntoView();
        }, r.prototype.scrollToPosition = function (t) {
          var e, r;
          return e = t.x, r = t.y, window.scrollTo(e, r);
        }, r.prototype.onScroll = function (t) {
          return this.updatePosition({
            x: window.pageXOffset,
            y: window.pageYOffset
          });
        }, r.prototype.updatePosition = function (t) {
          var e;
          return this.position = t, null != (e = this.delegate) ? e.scrollPositionChanged(this.position) : void 0;
        }, r;
      }();
    }.call(this), function () {
      e.SnapshotCache = function () {
        function t(t) {
          this.size = t, this.keys = [], this.snapshots = {};
        }

        var r;
        return t.prototype.has = function (t) {
          var e;
          return e = r(t), e in this.snapshots;
        }, t.prototype.get = function (t) {
          var e;
          if (this.has(t)) return e = this.read(t), this.touch(t), e;
        }, t.prototype.put = function (t, e) {
          return this.write(t, e), this.touch(t), e;
        }, t.prototype.read = function (t) {
          var e;
          return e = r(t), this.snapshots[e];
        }, t.prototype.write = function (t, e) {
          var n;
          return n = r(t), this.snapshots[n] = e;
        }, t.prototype.touch = function (t) {
          var e, n;
          return n = r(t), e = this.keys.indexOf(n), e > -1 && this.keys.splice(e, 1), this.keys.unshift(n), this.trim();
        }, t.prototype.trim = function () {
          var t, e, r, n, o;

          for (n = this.keys.splice(this.size), o = [], t = 0, r = n.length; r > t; t++) {
            e = n[t], o.push(delete this.snapshots[e]);
          }

          return o;
        }, r = function r(t) {
          return e.Location.wrap(t).toCacheKey();
        }, t;
      }();
    }.call(this), function () {
      var t = function t(_t8, e) {
        return function () {
          return _t8.apply(e, arguments);
        };
      };

      e.Visit = function () {
        function r(r, n, o) {
          this.controller = r, this.action = o, this.performScroll = t(this.performScroll, this), this.identifier = e.uuid(), this.location = e.Location.wrap(n), this.adapter = this.controller.adapter, this.state = "initialized", this.timingMetrics = {};
        }

        var n;
        return r.prototype.start = function () {
          return "initialized" === this.state ? (this.recordTimingMetric("visitStart"), this.state = "started", this.adapter.visitStarted(this)) : void 0;
        }, r.prototype.cancel = function () {
          var t;
          return "started" === this.state ? (null != (t = this.request) && t.cancel(), this.cancelRender(), this.state = "canceled") : void 0;
        }, r.prototype.complete = function () {
          var t;
          return "started" === this.state ? (this.recordTimingMetric("visitEnd"), this.state = "completed", "function" == typeof (t = this.adapter).visitCompleted && t.visitCompleted(this), this.controller.visitCompleted(this)) : void 0;
        }, r.prototype.fail = function () {
          var t;
          return "started" === this.state ? (this.state = "failed", "function" == typeof (t = this.adapter).visitFailed ? t.visitFailed(this) : void 0) : void 0;
        }, r.prototype.changeHistory = function () {
          var t, e;
          return this.historyChanged ? void 0 : (t = this.location.isEqualTo(this.referrer) ? "replace" : this.action, e = n(t), this.controller[e](this.location, this.restorationIdentifier), this.historyChanged = !0);
        }, r.prototype.issueRequest = function () {
          return this.shouldIssueRequest() && null == this.request ? (this.progress = 0, this.request = new e.HttpRequest(this, this.location, this.referrer), this.request.send()) : void 0;
        }, r.prototype.getCachedSnapshot = function () {
          var t;
          return !(t = this.controller.getCachedSnapshotForLocation(this.location)) || null != this.location.anchor && !t.hasAnchor(this.location.anchor) || "restore" !== this.action && !t.isPreviewable() ? void 0 : t;
        }, r.prototype.hasCachedSnapshot = function () {
          return null != this.getCachedSnapshot();
        }, r.prototype.loadCachedSnapshot = function () {
          var t, e;
          return (e = this.getCachedSnapshot()) ? (t = this.shouldIssueRequest(), this.render(function () {
            var r;
            return this.cacheSnapshot(), this.controller.render({
              snapshot: e,
              isPreview: t
            }, this.performScroll), "function" == typeof (r = this.adapter).visitRendered && r.visitRendered(this), t ? void 0 : this.complete();
          })) : void 0;
        }, r.prototype.loadResponse = function () {
          return null != this.response ? this.render(function () {
            var t, e;
            return this.cacheSnapshot(), this.request.failed ? (this.controller.render({
              error: this.response
            }, this.performScroll), "function" == typeof (t = this.adapter).visitRendered && t.visitRendered(this), this.fail()) : (this.controller.render({
              snapshot: this.response
            }, this.performScroll), "function" == typeof (e = this.adapter).visitRendered && e.visitRendered(this), this.complete());
          }) : void 0;
        }, r.prototype.followRedirect = function () {
          return this.redirectedToLocation && !this.followedRedirect ? (this.location = this.redirectedToLocation, this.controller.replaceHistoryWithLocationAndRestorationIdentifier(this.redirectedToLocation, this.restorationIdentifier), this.followedRedirect = !0) : void 0;
        }, r.prototype.requestStarted = function () {
          var t;
          return this.recordTimingMetric("requestStart"), "function" == typeof (t = this.adapter).visitRequestStarted ? t.visitRequestStarted(this) : void 0;
        }, r.prototype.requestProgressed = function (t) {
          var e;
          return this.progress = t, "function" == typeof (e = this.adapter).visitRequestProgressed ? e.visitRequestProgressed(this) : void 0;
        }, r.prototype.requestCompletedWithResponse = function (t, r) {
          return this.response = t, null != r && (this.redirectedToLocation = e.Location.wrap(r)), this.adapter.visitRequestCompleted(this);
        }, r.prototype.requestFailedWithStatusCode = function (t, e) {
          return this.response = e, this.adapter.visitRequestFailedWithStatusCode(this, t);
        }, r.prototype.requestFinished = function () {
          var t;
          return this.recordTimingMetric("requestEnd"), "function" == typeof (t = this.adapter).visitRequestFinished ? t.visitRequestFinished(this) : void 0;
        }, r.prototype.performScroll = function () {
          return this.scrolled ? void 0 : ("restore" === this.action ? this.scrollToRestoredPosition() || this.scrollToTop() : this.scrollToAnchor() || this.scrollToTop(), this.scrolled = !0);
        }, r.prototype.scrollToRestoredPosition = function () {
          var t, e;
          return t = null != (e = this.restorationData) ? e.scrollPosition : void 0, null != t ? (this.controller.scrollToPosition(t), !0) : void 0;
        }, r.prototype.scrollToAnchor = function () {
          return null != this.location.anchor ? (this.controller.scrollToAnchor(this.location.anchor), !0) : void 0;
        }, r.prototype.scrollToTop = function () {
          return this.controller.scrollToPosition({
            x: 0,
            y: 0
          });
        }, r.prototype.recordTimingMetric = function (t) {
          var e;
          return null != (e = this.timingMetrics)[t] ? e[t] : e[t] = new Date().getTime();
        }, r.prototype.getTimingMetrics = function () {
          return e.copyObject(this.timingMetrics);
        }, n = function n(t) {
          switch (t) {
            case "replace":
              return "replaceHistoryWithLocationAndRestorationIdentifier";

            case "advance":
            case "restore":
              return "pushHistoryWithLocationAndRestorationIdentifier";
          }
        }, r.prototype.shouldIssueRequest = function () {
          return "restore" === this.action ? !this.hasCachedSnapshot() : !0;
        }, r.prototype.cacheSnapshot = function () {
          return this.snapshotCached ? void 0 : (this.controller.cacheSnapshot(), this.snapshotCached = !0);
        }, r.prototype.render = function (t) {
          return this.cancelRender(), this.frame = requestAnimationFrame(function (e) {
            return function () {
              return e.frame = null, t.call(e);
            };
          }(this));
        }, r.prototype.cancelRender = function () {
          return this.frame ? cancelAnimationFrame(this.frame) : void 0;
        }, r;
      }();
    }.call(this), function () {
      var t = function t(_t9, e) {
        return function () {
          return _t9.apply(e, arguments);
        };
      };

      e.Controller = function () {
        function r() {
          this.clickBubbled = t(this.clickBubbled, this), this.clickCaptured = t(this.clickCaptured, this), this.pageLoaded = t(this.pageLoaded, this), this.history = new e.History(this), this.view = new e.View(this), this.scrollManager = new e.ScrollManager(this), this.restorationData = {}, this.clearCache(), this.setProgressBarDelay(500);
        }

        return r.prototype.start = function () {
          return e.supported && !this.started ? (addEventListener("click", this.clickCaptured, !0), addEventListener("DOMContentLoaded", this.pageLoaded, !1), this.scrollManager.start(), this.startHistory(), this.started = !0, this.enabled = !0) : void 0;
        }, r.prototype.disable = function () {
          return this.enabled = !1;
        }, r.prototype.stop = function () {
          return this.started ? (removeEventListener("click", this.clickCaptured, !0), removeEventListener("DOMContentLoaded", this.pageLoaded, !1), this.scrollManager.stop(), this.stopHistory(), this.started = !1) : void 0;
        }, r.prototype.clearCache = function () {
          return this.cache = new e.SnapshotCache(10);
        }, r.prototype.visit = function (t, r) {
          var n, o;
          return null == r && (r = {}), t = e.Location.wrap(t), this.applicationAllowsVisitingLocation(t) ? this.locationIsVisitable(t) ? (n = null != (o = r.action) ? o : "advance", this.adapter.visitProposedToLocationWithAction(t, n)) : window.location = t : void 0;
        }, r.prototype.startVisitToLocationWithAction = function (t, r, n) {
          var o;
          return e.supported ? (o = this.getRestorationDataForIdentifier(n), this.startVisit(t, r, {
            restorationData: o
          })) : window.location = t;
        }, r.prototype.setProgressBarDelay = function (t) {
          return this.progressBarDelay = t;
        }, r.prototype.startHistory = function () {
          return this.location = e.Location.wrap(window.location), this.restorationIdentifier = e.uuid(), this.history.start(), this.history.replace(this.location, this.restorationIdentifier);
        }, r.prototype.stopHistory = function () {
          return this.history.stop();
        }, r.prototype.pushHistoryWithLocationAndRestorationIdentifier = function (t, r) {
          return this.restorationIdentifier = r, this.location = e.Location.wrap(t), this.history.push(this.location, this.restorationIdentifier);
        }, r.prototype.replaceHistoryWithLocationAndRestorationIdentifier = function (t, r) {
          return this.restorationIdentifier = r, this.location = e.Location.wrap(t), this.history.replace(this.location, this.restorationIdentifier);
        }, r.prototype.historyPoppedToLocationWithRestorationIdentifier = function (t, r) {
          var n;
          return this.restorationIdentifier = r, this.enabled ? (n = this.getRestorationDataForIdentifier(this.restorationIdentifier), this.startVisit(t, "restore", {
            restorationIdentifier: this.restorationIdentifier,
            restorationData: n,
            historyChanged: !0
          }), this.location = e.Location.wrap(t)) : this.adapter.pageInvalidated();
        }, r.prototype.getCachedSnapshotForLocation = function (t) {
          var e;
          return null != (e = this.cache.get(t)) ? e.clone() : void 0;
        }, r.prototype.shouldCacheSnapshot = function () {
          return this.view.getSnapshot().isCacheable();
        }, r.prototype.cacheSnapshot = function () {
          var t, r;
          return this.shouldCacheSnapshot() ? (this.notifyApplicationBeforeCachingSnapshot(), r = this.view.getSnapshot(), t = this.lastRenderedLocation, e.defer(function (e) {
            return function () {
              return e.cache.put(t, r.clone());
            };
          }(this))) : void 0;
        }, r.prototype.scrollToAnchor = function (t) {
          var e;
          return (e = this.view.getElementForAnchor(t)) ? this.scrollToElement(e) : this.scrollToPosition({
            x: 0,
            y: 0
          });
        }, r.prototype.scrollToElement = function (t) {
          return this.scrollManager.scrollToElement(t);
        }, r.prototype.scrollToPosition = function (t) {
          return this.scrollManager.scrollToPosition(t);
        }, r.prototype.scrollPositionChanged = function (t) {
          var e;
          return e = this.getCurrentRestorationData(), e.scrollPosition = t;
        }, r.prototype.render = function (t, e) {
          return this.view.render(t, e);
        }, r.prototype.viewInvalidated = function () {
          return this.adapter.pageInvalidated();
        }, r.prototype.viewWillRender = function (t) {
          return this.notifyApplicationBeforeRender(t);
        }, r.prototype.viewRendered = function () {
          return this.lastRenderedLocation = this.currentVisit.location, this.notifyApplicationAfterRender();
        }, r.prototype.pageLoaded = function () {
          return this.lastRenderedLocation = this.location, this.notifyApplicationAfterPageLoad();
        }, r.prototype.clickCaptured = function () {
          return removeEventListener("click", this.clickBubbled, !1), addEventListener("click", this.clickBubbled, !1);
        }, r.prototype.clickBubbled = function (t) {
          var e, r, n;
          return this.enabled && this.clickEventIsSignificant(t) && (r = this.getVisitableLinkForNode(t.target)) && (n = this.getVisitableLocationForLink(r)) && this.applicationAllowsFollowingLinkToLocation(r, n) ? (t.preventDefault(), e = this.getActionForLink(r), this.visit(n, {
            action: e
          })) : void 0;
        }, r.prototype.applicationAllowsFollowingLinkToLocation = function (t, e) {
          var r;
          return r = this.notifyApplicationAfterClickingLinkToLocation(t, e), !r.defaultPrevented;
        }, r.prototype.applicationAllowsVisitingLocation = function (t) {
          var e;
          return e = this.notifyApplicationBeforeVisitingLocation(t), !e.defaultPrevented;
        }, r.prototype.notifyApplicationAfterClickingLinkToLocation = function (t, r) {
          return e.dispatch("turbolinks:click", {
            target: t,
            data: {
              url: r.absoluteURL
            },
            cancelable: !0
          });
        }, r.prototype.notifyApplicationBeforeVisitingLocation = function (t) {
          return e.dispatch("turbolinks:before-visit", {
            data: {
              url: t.absoluteURL
            },
            cancelable: !0
          });
        }, r.prototype.notifyApplicationAfterVisitingLocation = function (t) {
          return e.dispatch("turbolinks:visit", {
            data: {
              url: t.absoluteURL
            }
          });
        }, r.prototype.notifyApplicationBeforeCachingSnapshot = function () {
          return e.dispatch("turbolinks:before-cache");
        }, r.prototype.notifyApplicationBeforeRender = function (t) {
          return e.dispatch("turbolinks:before-render", {
            data: {
              newBody: t
            }
          });
        }, r.prototype.notifyApplicationAfterRender = function () {
          return e.dispatch("turbolinks:render");
        }, r.prototype.notifyApplicationAfterPageLoad = function (t) {
          return null == t && (t = {}), e.dispatch("turbolinks:load", {
            data: {
              url: this.location.absoluteURL,
              timing: t
            }
          });
        }, r.prototype.startVisit = function (t, e, r) {
          var n;
          return null != (n = this.currentVisit) && n.cancel(), this.currentVisit = this.createVisit(t, e, r), this.currentVisit.start(), this.notifyApplicationAfterVisitingLocation(t);
        }, r.prototype.createVisit = function (t, r, n) {
          var o, i, s, a, u;
          return i = null != n ? n : {}, a = i.restorationIdentifier, s = i.restorationData, o = i.historyChanged, u = new e.Visit(this, t, r), u.restorationIdentifier = null != a ? a : e.uuid(), u.restorationData = e.copyObject(s), u.historyChanged = o, u.referrer = this.location, u;
        }, r.prototype.visitCompleted = function (t) {
          return this.notifyApplicationAfterPageLoad(t.getTimingMetrics());
        }, r.prototype.clickEventIsSignificant = function (t) {
          return !(t.defaultPrevented || t.target.isContentEditable || t.which > 1 || t.altKey || t.ctrlKey || t.metaKey || t.shiftKey);
        }, r.prototype.getVisitableLinkForNode = function (t) {
          return this.nodeIsVisitable(t) ? e.closest(t, "a[href]:not([target]):not([download])") : void 0;
        }, r.prototype.getVisitableLocationForLink = function (t) {
          var r;
          return r = new e.Location(t.getAttribute("href")), this.locationIsVisitable(r) ? r : void 0;
        }, r.prototype.getActionForLink = function (t) {
          var e;
          return null != (e = t.getAttribute("data-turbolinks-action")) ? e : "advance";
        }, r.prototype.nodeIsVisitable = function (t) {
          var r;
          return (r = e.closest(t, "[data-turbolinks]")) ? "false" !== r.getAttribute("data-turbolinks") : !0;
        }, r.prototype.locationIsVisitable = function (t) {
          return t.isPrefixedBy(this.view.getRootLocation()) && t.isHTML();
        }, r.prototype.getCurrentRestorationData = function () {
          return this.getRestorationDataForIdentifier(this.restorationIdentifier);
        }, r.prototype.getRestorationDataForIdentifier = function (t) {
          var e;
          return null != (e = this.restorationData)[t] ? e[t] : e[t] = {};
        }, r;
      }();
    }.call(this), function () {
      !function () {
        var t, e;
        if ((t = e = document.currentScript) && !e.hasAttribute("data-turbolinks-suppress-warning")) for (; t = t.parentNode;) {
          if (t === document.body) return console.warn("You are loading Turbolinks from a <script> element inside the <body> element. This is probably not what you meant to do!\n\nLoad your application\u2019s JavaScript bundle inside the <head> element instead. <script> elements in <body> are evaluated with each page change.\n\nFor more information, see: https://github.com/turbolinks/turbolinks#working-with-script-elements\n\n\u2014\u2014\nSuppress this warning by adding a `data-turbolinks-suppress-warning` attribute to: %s", e.outerHTML);
        }
      }();
    }.call(this), function () {
      var t, r, n;
      e.start = function () {
        return r() ? (null == e.controller && (e.controller = t()), e.controller.start()) : void 0;
      }, r = function r() {
        return null == window.Turbolinks && (window.Turbolinks = e), n();
      }, t = function t() {
        var t;
        return t = new e.Controller(), t.adapter = new e.BrowserAdapter(t), t;
      }, n = function n() {
        return window.Turbolinks === e;
      }, n() && e.start();
    }.call(this);
  }).call(this), "object" == ( false ? undefined : _typeof(module)) && module.exports ? module.exports = e :  true && !(__WEBPACK_AMD_DEFINE_FACTORY__ = (e),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}).call(this);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (module) {
  if (!module.webpackPolyfill) {
    module.deprecate = function () {};

    module.paths = []; // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ })

/******/ });
//# sourceMappingURL=application-78d268172be9476dd515.js.map