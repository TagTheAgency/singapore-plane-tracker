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


	$(document).ready(function() {
	    $(document).on('click', '#tracker-button', function() {
	      console.log('test')
	    $.ajax({
	        type: 'GET',
	        url: fxml_url + 'FlightInfoEx',
	        data: { 'ident': $('#ident_text').val(), 'howMany': 10, 'offset': 0 },
	        success : function(result) {
	          console.log('yes')
	            if (result.error) {
	                alert('Failed to fetch flight: ' + result.error);
	                return;
	            }
	            for (flight of result.FlightInfoExResult.flights) {
	                if (flight.actualdeparturetime > 0) {
	                    // display some textual details about the flight.
	                    console.log('Flight ' + flight.ident + ' from ' + flight.origin + ' to ' + flight.destination);

	                    // display the route on a map.
	                    fetchAndRenderRoute(flight.faFlightID);
	                    return;
	                }
	            }
	            alert('Did not find any useful flights');
	        },
	        error: function(data, text) { alert('Failed to fetch flight: ' + data); },
	        dataType: 'jsonp',
	        jsonp: 'jsonp_callback',
	        xhrFields: { withCredentials: true }
	        });
	    });
	});


	// Fetch the planned route for a specified flight_id.
	function fetchAndRenderRoute(flight_id) {
	    $.ajax({
	       type: 'GET',
	       url: fxml_url + 'DecodeFlightRoute', 
	       data: { 'faFlightID': flight_id },
	       success : function(result) {
	           if (result.error) {
	               alert('Failed to decode route: ' + result.error);
	               return;
	           }

	           // Initialize a data table using the Google API.
	           var table = new google.visualization.DataTable();
	           table.addColumn('number', 'Lat');
	           table.addColumn('number', 'Lon');
	           table.addColumn('string', 'Name');

	           // Insert all of the points into the data table.
	           var points = result.DecodeFlightRouteResult.data;
	           table.addRows(points.length);
	           for (rowid = 0; rowid < points.length; rowid++) {
	                table.setCell(rowid, 0, points[rowid].latitude);
	                table.setCell(rowid, 1, points[rowid].longitude);
	                table.setCell(rowid, 2, points[rowid].name + ' (' + points[rowid].type + ')' );
	           }

	           // Render the data table into a map using Google Maps API.
	           var map = new google.visualization.Map(document.getElementById('map_div'));
	           map.draw(table, {showTip: true, showLine: true, lineWidth: 3, lineColor: '#009900'});
	       },
	       error: function(data, text) { alert('Failed to decode route: ' + data); },
	       dataType: 'jsonp',
	       jsonp: 'jsonp_callback',
	       xhrFields: { withCredentials: true }
	   });
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },
/* 3 */,
/* 4 */,
/* 5 */
/***/ function(module, exports) {

	

/***/ }
/******/ ]);