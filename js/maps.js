var map;
function initMap() {
	map = new google.maps.Map(document.getElementById('map'), {
		zoom: 3,
		center: {lat: 0, lng: 0}
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
		
	});
}