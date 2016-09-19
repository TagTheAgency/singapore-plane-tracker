
var fxml_url = 'http://iraritchiemeek:b66b5f80cd578cb1318c9e1c5748338e8a24b370@flightxml.flightaware.com/json/FlightXML2/';
google.load("visualization", "1", {packages:["map"]});
// data: { 'ident': 'ANZ281', 'departureTime': '1473901980' },
$(document).ready(function() {

    $(document).on('click', '#tracker-button, #plane-icon', function() {

    var coords = []
    var count = 0
    var flightPath
    var pathLength
    getFlightUpdate()

    function getFlightUpdate() {
      coords = []
      $.ajax({
          type: 'GET',
          url: fxml_url + 'GetLastTrack',
          data: { 'ident': 'ANZ281'},
          success : function(response) {
            for (var i = response.GetLastTrackResult.data.length - 1; i >= 0; i--) {
              var flight_update = response.GetLastTrackResult.data[i]
              coords.push({lat: flight_update.latitude, lng: flight_update.longitude})
            }
            if(flightPath !== undefined) {
               flightPath.setMap(null);
                flightPath = null
            }
            plotCoords2(coords)
          },
          error: function(data, text) { console.log('Failed to fetch flight: ' + data); },
          dataType: 'jsonp',
          jsonp: 'jsonp_callback',
          xhrFields: { withCredentials: true }
      });
    }

    setInterval(function(){getFlightUpdate()}, 60000);

    function plotCoords2(coords) {
      // if(flightPath !== undefined) {
      //   flightPath.setMap(null);
      //   flightPath = null
      // }

      flightPath = new google.maps.Polyline({
          path: coords,
          geodesic: true,
          strokeColor: '#FFF',
          strokeOpacity: 0.8,
          strokeWeight: 3
        });
        flightPath.setMap(map);
    }

    function plotCoords(coords) {
      if(flightPath !== undefined) {
        var path = flightPath.getPath()
        console.log(path)
        for (var i = coords.length -1; i >= 0; i--) {
          if(i > pathLength) {
            console.log(i)
            console.log(coords[i -1])
            path.push(new google.maps.LatLng(coords[i-1].lat, coords[i-1].lng))
            console.log(path)
          }
            flightPath.setPath(path)
        }
      } else {
        flightPath = new google.maps.Polyline({
            path: coords,
            geodesic: true,
            strokeColor: '#FFF',
            strokeOpacity: 0.8,
            strokeWeight: 3
          });
          flightPath.setMap(map);
      }
      pathLength = coords.length
    }
  });
});