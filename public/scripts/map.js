var map;
		function initMap() {
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
		    // styles: [{featureType: "administrative",elementType: "geometry",stylers: [{ visibility: "off" }]},{"featureType":"administrative","elementType":"labels","stylers":[{visibility:"off"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#FCB132"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#003778"},{"visibility":"on"}]}]
		  });
		}

function refreshMap(){
	console.log('refresh')
	google.maps.event.trigger(map, 'resize')
}