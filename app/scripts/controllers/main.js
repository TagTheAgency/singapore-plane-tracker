var angular = require('angular')

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