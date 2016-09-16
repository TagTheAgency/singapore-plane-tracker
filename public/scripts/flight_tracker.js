
var fxml_url = 'http://iraritchiemeek:b66b5f80cd578cb1318c9e1c5748338e8a24b370@flightxml.flightaware.com/json/FlightXML2/';

google.load("visualization", "1", {packages:["map"]});


// data: { 'ident': 'ANZ281', 'departureTime': '1473901980' },

$(document).ready(function() {
    $(document).on('click', '#tracker-button', function() {
      console.log('test')
    $.ajax({
        type: 'GET',
        url: fxml_url + 'FlightInfo',
        // url: fxml_url + 'GetLastTrack',
        data: { 'ident': 'SQ291'},
        // data: { 'ident': "ANZ281"},
        success : function(result) {
          console.log(result)
        },
        error: function(data, text) { alert('Failed to fetch flight: ' + data); },
        dataType: 'jsonp',
        jsonp: 'jsonp_callback',
        xhrFields: { withCredentials: true }
        });
    });
});