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
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	module.exports = __webpack_require__(2);


/***/ },
/* 1 */
/***/ function(module, exports) {

	var map;
			function initMap() {
			  map = new google.maps.Map(document.getElementById('map'), {
			    center: {lat: -20, lng: 140},
			    zoom: 3,
			    disableDefaultUI: true,
			    draggable: false,
			    scrollwheel: false,
			    zoomControl: false,
				scaleControl: false,
				disableDoubleClickZoom: true,
				mapTypeId: 'satellite'
			    // styles: [{featureType: "administrative",elementType: "geometry",stylers: [{ visibility: "off" }]},{"featureType":"administrative","elementType":"labels","stylers":[{visibility:"off"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#FCB132"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#003778"},{"visibility":"on"}]}]
			  });
			}

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(console) {
	var fxml_url = 'http://iraritchiemeek:b66b5f80cd578cb1318c9e1c5748338e8a24b370@flightxml.flightaware.com/json/FlightXML2/';

	google.load("visualization", "1", {packages:["map"]});


	// data: { 'ident': 'SIA285', 'departureTime': '1473945000' },
	// data: { 'ident': 'ANZ281', 'departureTime': '1473901980' },

	$(document).ready(function() {
	    $(document).on('click', '#tracker-button', function() {
	      console.log('test')
	    $.ajax({
	        type: 'GET',
	        url: fxml_url + 'GetLastTrack',
	        data: { 'ident': "ANZ281"},
	        // data: { 'faFlightID': "ANZ281-1473730220-airline-0890"},
	        // data: { 'ident': 'SIA285-1473744949-airline-0114', 'departureTime': '1473945000' },
	        success : function(result) {
	          console.log(result)
	        },
	        error: function(data, text) { alert('Failed to fetch flight: ' + data); },
	        dataType: 'jsonp',
	        jsonp: 'jsonp_callback',
	        xhrFields: { withCredentials: true }
	        });
	    });
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },
/* 3 */,
/* 4 */,
/* 5 */
/***/ function(module, exports) {

	

/***/ }
/******/ ]);