webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var angular = __webpack_require__(1)

	angular.module('singaporeAirlinesApp', []);

	__webpack_require__(3)
	__webpack_require__(4)
	__webpack_require__(5)
	__webpack_require__(6)


/***/ },
/* 1 */,
/* 2 */,
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var angular = __webpack_require__(1)

	angular.module('singaporeAirlinesApp')
	.controller('mainCtrl', function($scope, $location, $window, dataService){        
		$scope.trackFlight = function () {
			dataService.trackFlight(function successCallback(response){
				$scope.getCoords(response)
			},
			function errorCallback(response) {
				console.log(response)
			})
		}

		$scope.getCoords = function(coords) {
			for (var i = coords.GetLastTrackResult.data.length - 1; i >= 0; i--) {
			  var flight_update = coords.GetLastTrackResult.data[i]
			  coords.push({lat: flight_update.latitude, lng: flight_update.longitude})
			}
			console.log(coords)
		} 

		$scope.refreshMap = function () {
			setTimeout(function(){ 
				google.maps.event.trigger(map, 'resize')
				map.setCenter(new google.maps.LatLng(-20, 140)); }, 1000);
			
		}

		$scope.openWaSite = function () {
			$window.open('https://www.wellingtonairport.co.nz/', '_blank');
		}
	})

/***/ },
/* 4 */
/***/ function(module, exports) {

	
	angular.module('singaporeAirlinesApp')
	// .run(function($http) {
	// 	$http.defaults.headers.common['Authorization'] = 'Basic ' + btoa('iraritchiemeek:b66b5f80cd578cb1318c9e1c5748338e8a24b370');
	// })
	.service('dataService', function($http) {

		this.trackFlight = function(cb, error) {
			var fxml_url = 'http://iraritchiemeek:b66b5f80cd578cb1318c9e1c5748338e8a24b370@flightxml.flightaware.com/json/FlightXML2/';
			$http({
			    method: 'GET',
	          	url: fxml_url + 'GetLastTrack',
	          	headers:  {
	          	        'Authorization': 'Basic d2VudHdvcnRobWFuOkNoYW5nZV9tZQ==',
	          	        'Accept': 'application/json;odata=verbose'
	          	        // "username" : "iraritchiemeek",
	          	        // 'apiKey': 'b66b5f80cd578cb1318c9e1c5748338e8a24b370'
	          	},
	          	data: { 'ident': 'ANZ281'}
			}).then(cb, error)
		}
	})


/***/ },
/* 5 */
/***/ function(module, exports) {

	angular.module('singaporeAirlinesApp')
	.directive('homepage', function(){
	  return {
	    templateUrl: 'templates/homepage.html',
	    controller: 'mainCtrl'
	  }
	});

/***/ },
/* 6 */
/***/ function(module, exports) {

	angular.module('singaporeAirlinesApp')
	.directive('map', function(){
	  return {
	    templateUrl: 'templates/map.html',
	    controller: 'mainCtrl'
	  }
	});

/***/ }
]);