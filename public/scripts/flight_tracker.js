
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