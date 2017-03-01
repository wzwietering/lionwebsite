var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 3,
    center: {lat: 0, lng: 0}
  });
  
  map.data.loadGeoJson('../data/lionhabitat.geojson');
  
  map.data.setStyle({
	  fillColor: '#E65100',
	  strokeColor: '#B94000',
	  strokeWeight: 1
	});
}