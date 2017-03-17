$(document).ready(function() {
	var map;
	var $defaultZoom = 3;
	var $defaultCenter = {lat: 20, lng: 10};
	var markers = []
	
	$(function initMap() {
		map = new google.maps.Map(document.getElementById('map'), {
			zoom: $defaultZoom,
			center: $defaultCenter
		});
	  
		//Style of the map
		map.data.setStyle({
			fillColor: '#DB9200',
			strokeColor: '#DB6300',
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
			if(event.feature.getGeometry().getType() == "Polygon"){
				map.setZoom(5);
			}
		});
	});
	
	function calculate(map) {
		map.data.forEach(function (feature) {
			if(feature.getGeometry().getType() == "Point"){;
				var marker = new google.maps.Marker({
					position: feature.getGeometry().get(),
					title: feature.getProperty('name'),
					map: map
				});				
				markers.push(marker);
				//Remove point, because we created a marker in it's place
				map.data.remove(feature);
			}
		});
		var markerCluster = new MarkerClusterer(map, markers, {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
	}

	function loadGeoJson(map) {
		map.data.loadGeoJson('https://raw.githubusercontent.com/wzwietering/lionwebsite/master/data/lionhabitat.geojson');
	}

	google.maps.event.addDomListener(window, 'load', function () {
		$('initMap');
		loadGeoJson(map);
		setTimeout(function() {calculate(map);}, 500);
	});


	$("#reset_zoom").click(function() {
		map.setZoom($defaultZoom);
		map.setCenter($defaultCenter);
	});
});
