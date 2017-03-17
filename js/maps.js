$(document).ready(function() {
	var map;
	var $defaultZoom = 3;
	var $defaultCenter = {lat: 20, lng: 10};
	
	$(function initMap() {
		map = new google.maps.Map(document.getElementById('map'), {
			zoom: $defaultZoom,
			center: $defaultCenter
		});
	  
		map.data.loadGeoJson('https://raw.githubusercontent.com/wzwietering/lionwebsite/master/data/lionhabitat.geojson');
		var data = map.data;
		data.forEach(function(feature){
			alert('hallo');
		});
		
		$.each(data.features, function(key, val) {
			alert('hi');
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
		map.setZoom($defaultZoom);
		map.setCenter($defaultCenter);
	});
});
