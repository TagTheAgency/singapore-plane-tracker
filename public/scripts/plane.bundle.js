webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var angular = __webpack_require__(1)

	angular.module('singaporeAirlinesApp', []);

	__webpack_require__(3)
	__webpack_require__(5)


/***/ },
/* 1 */,
/* 2 */,
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var angular = __webpack_require__(1)

	angular.module('singaporeAirlinesApp')
	.controller('mainCtrl', function($scope, $window){        

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
/* 4 */,
/* 5 */
/***/ function(module, exports) {

	angular.module('singaporeAirlinesApp')
	.directive('homepage', function(){
	  return {
	    templateUrl: 'templates/homepage.html',
	    controller: 'mainCtrl'
	  }
	});

/***/ }
]);