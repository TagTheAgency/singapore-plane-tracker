
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
