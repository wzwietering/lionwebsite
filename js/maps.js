$(document).ready(function() {
	var map;
	var $default_zoom = 3;
	var $default_center = {lat: 20, lng: 10};
	
	$(function initMap() {
		map = new google.maps.Map(document.getElementById('map'), {
			zoom: $default_zoom,
			center: $default_center
		});
	  
		map.data.loadGeoJson('../data/lionhabitat.geojson');
	  
		//Style of the map
		map.data.setStyle({
			fillColor: '#E65100',
			strokeColor: '#B94000',
			strokeWeight: 1
		});
		
		//Make lines bold on hover
		map.data.addListener('mouseover', function(event) {
			map.data.revertStyle();
			map.data.overrideStyle(event.feature, {strokeWeight: 4});
		});
		
		map.data.addListener('mouseout', function(event) {
			map.data.revertStyle();
		});
		
		map.data.addListener('click', function(event) {
			map.setCenter(event.latLng);
			//Description and zoom is only for the point
			if(event.feature.getGeometry().getType() == "Point"){
				map.setZoom(12);
				var infowindow = new google.maps.InfoWindow({
					content: event.feature.getProperty("Name"),
					position: event.latLng
				});
				infowindow.open(map);
			} else if(event.feature.getGeometry().getType() == "Polygon"){
				map.setZoom(5);
			}
		});
	});


	$("#reset_zoom").click(function() {
		map.setZoom($default_zoom);
		map.setCenter($default_center);
	});
});
