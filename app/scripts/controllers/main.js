var angular = require('angular')

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