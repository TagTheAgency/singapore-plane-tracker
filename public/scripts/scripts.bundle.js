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
/***/ function(module, exports) {

	
	var fxml_url = 'http://iraritchiemeek:b66b5f80cd578cb1318c9e1c5748338e8a24b370@flightxml.flightaware.com/json/FlightXML2/';

	google.load("visualization", "1", {packages:["map"]});


	// data: { 'ident': 'ANZ281', 'departureTime': '1473901980' },

	$(document).ready(function() {
	    $(document).on('click', '#tracker-button', function() {
	    var coords = []
	    setInterval(function(){  
	      $.ajax({
	          type: 'GET',
	          url: fxml_url + 'GetLastTrack',
	          data: { 'ident': 'ANZ281'},
	          success : function(response) {
	            for (var i = response.GetLastTrackResult.data.length - 1; i >= 0; i--) {
	              var flight_update = response.GetLastTrackResult.data[i]
	              coords.push({lat: flight_update.latitude, lng: flight_update.longitude})
	            }
	            plotCoords(coords)
	          },
	          error: function(data, text) { alert('Failed to fetch flight: ' + data); },
	          dataType: 'jsonp',
	          jsonp: 'jsonp_callback',
	          xhrFields: { withCredentials: true }
	          });
	      });
	    }, 8000);

	    function plotCoords(coords) {
	      var flightPath = new google.maps.Polyline({
	          path: coords,
	          geodesic: true,
	          strokeColor: '#FFF',
	          strokeOpacity: 0.7,
	          strokeWeight: 3
	        });

	        flightPath.setMap(map);
	    }
	});

/***/ }
/******/ ]);