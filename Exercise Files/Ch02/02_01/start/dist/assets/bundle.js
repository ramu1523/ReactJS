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
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	'use strict';

	/**const {createElement} = React
	const {render}=ReactDOM
	const style = {
	  backgroundColor:'orange',
	  color:'white',
	  fontFamily:'verdana'
	}
	const title = createElement(
	  'h1',
	  {id: 'title',className: 'header',style: style},
	  'Hello React World'
	)

	render(
	  title,
	  document.getElementById('react-container')
	)*/

	//The below code will not work because  browser will not recognize the tags until you use some compiler/traspiler tool like babel to convert the below code to java script.

	var _ReactDOM = ReactDOM,
	    render = _ReactDOM.render;

	var style = {
	  backgroundColor: 'orange',
	  color: 'white',
	  fontFamily: 'verdana'
	};
	render(React.createElement(
	  'h1',
	  { id: 'title',
	    className: 'header',
	    style: style },
	  'Hello React World'
	), document.getElementById('react-container'));

/***/ }
/******/ ]);