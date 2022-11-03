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
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/javascript/packs/client.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/javascript/packs/client.js":
/*!****************************************!*\
  !*** ./app/javascript/packs/client.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

alert("hello");
$(function () {
  var _Highcharts$Chart;

  // Create the chart
  chart = new Highcharts.Chart((_Highcharts$Chart = {
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
  chart = new Highcharts.Chart((_Highcharts$Chart2 = {
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
  chart = new Highcharts.Chart((_Highcharts$Chart3 = {
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
Highcharts.chart('monthly_billable', {
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
Highcharts.chart('weekly_billable', {
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
Highcharts.chart('yearly_billable', {
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

/***/ })

/******/ });
//# sourceMappingURL=client-8ceade555b71dfd9d21f.js.map