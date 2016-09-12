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
	.controller('mainCtrl', function($scope, $location, dataService){        
	  
	})

/***/ },
/* 4 */
/***/ function(module, exports) {

	
	angular.module('singaporeAirlinesApp')
	.service('dataService', function($http) {
	 
	});


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