$(document).ready(function() {

var _index = 0;
var isMapReady = false;

console.log('Twst')

$('body').click(console.log('please'))

// document.getElementById("tracker-button").click(console.log('please'))

var proxyCoordinates = {
  x:1.3554,
  y:103.8677
}

function applyCoordinates(){
  marker.setPosition(new google.maps.LatLng(proxyCoordinates.x, proxyCoordinates.y));
}

function move_tweenMax() {
  console.log('test')
 if (isMapReady)
    TweenMax.to(
      proxyCoordinates,10,
      {
        x:-41.2865,
        y:174.7762,
        onUpdate:applyCoordinates
      }
    );  
}

function initMap() {
  var lineCoordinates = [
    new google.maps.LatLng(1.3554, 103.8677),
    new google.maps.LatLng(1.3554, 103.8677)
  ]

  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -20, lng: 140},
    zoom: 3,
    disableDefaultUI: true,
    draggable: false,
    scrollwheel: false,
    zoomControl: false,
    scaleControl: false,
    disableDoubleClickZoom: true,
    mapTypeId: 'satellite'
  });

  // var mapOptions = {
  //   center: new google.maps.LatLng(1.3554, 103.8677),
  //   zoom:11,mapTypeId:google.maps.MapTypeId.ROADMAP,
  //   disableDefaultUI: true
  // };
  var marker = new google.maps.Marker();

  google.maps.event.addListenerOnce(map, 'idle', mapReady);
  function mapReady() {
      marker.setMap(map);
      marker.setPosition(lineCoordinates[0]);
      isMapReady = true;
  }
}

})