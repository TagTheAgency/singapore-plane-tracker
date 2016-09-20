
var fxml_url = 'http://iraritchiemeek:b66b5f80cd578cb1318c9e1c5748338e8a24b370@flightxml.flightaware.com/json/FlightXML2/';
google.load("visualization", "1", {packages:["map"]});
// data: { 'ident': 'ANZ281', 'departureTime': '1473901980' },
$(document).ready(function() {

    // $(document).on('click', '#tracker-button, #plane-icon', function() {

    var coords = []
    var count = 0
    var flightPath
    var pathLength
    var marker
    getFlightUpdate()
    var image = {
        url: '../imgs/rotated-white.png',
        scaledSize: new google.maps.Size(30, 30),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(10, 10),
        rotation: 90
      };

    function getFlightUpdate() {
      coords = []
      $.ajax({
          type: 'GET',
          url: fxml_url + 'GetLastTrack',
          data: { 'ident': 'SQ291'},
          success : function(response) {
            for (var i = response.GetLastTrackResult.data.length - 1; i >= 0; i--) {
              var flight_update = response.GetLastTrackResult.data[i]
              coords.push({lat: flight_update.latitude, lng: flight_update.longitude})
            }
            if(flightPath !== undefined) {
              flightPath.setMap(null);
              flightPath = null
              marker.setMap(null);
            }
            plotCoords2(coords)
            addMarker(coords)
          },
          error: function(data, text) { console.log('Failed to fetch flight: ' + data); },
          dataType: 'jsonp',
          jsonp: 'jsonp_callback',
          xhrFields: { withCredentials: true }
      });
    }

    setInterval(function(){getFlightUpdate()}, 60000);

    function plotCoords2(coords) {
      flightPath = new google.maps.Polyline({
          path: coords,
          geodesic: true,
          strokeColor: '#FFF',
          strokeOpacity: 0.8,
          strokeWeight: 3
        });
        flightPath.setMap(map);
    }

    function addMarker(coords) {
      var lastCoords = coords[0]
      var position = new google.maps.LatLng(lastCoords.lat, lastCoords.lng)
      marker = new google.maps.Marker({
                  position: position,
                  icon: image,
                  map: map
      });
    }

  // });
});