/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "assets";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react-dom\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	var _Employee = __webpack_require__(1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	window.React = _react2.default;
	(0, _reactDom.render)(_react2.default.createElement(_Employee.Employee, null), document.getElementById('react-container'));

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Employee = undefined;

	var _react = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	var _react2 = _interopRequireDefault(_react);

	__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"../stylesheets/ui.scss\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Employee = exports.Employee = _react2.default.createClass({
	  displayName: 'Employee',
	  render: function render() {
	    return _react2.default.createElement(
	      'div',
	      { className: 'employee' },
	      _react2.default.createElement(
	        'div',
	        { className: 'employeeNumber' },
	        _react2.default.createElement(
	          'span',
	          null,
	          ' Employee Number: 123456'
	        )
	      ),
	      _react2.default.createElement(
	        'div',
	        { className: 'employeeName' },
	        _react2.default.createElement(
	          'span',
	          null,
	          'Employee Name: Ramu Chinni'
	        )
	      ),
	      _react2.default.createElement(
	        'div',
	        { className: 'employeeAddress' },
	        _react2.default.createElement(
	          'span',
	          null,
	          ' Employee Address: Eagan, MN, 55123'
	        )
	      )
	    );
	  }
	});

/***/ }
/******/ ]);