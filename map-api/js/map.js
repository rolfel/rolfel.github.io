mapboxgl.accessToken = 'pk.eyJ1IjoibHVjeXJvbGZlNDIxIiwiYSI6ImNrbzM4Nzl0YzBjZjAyb21saGQza3BqMnUifQ.T7z70s8jWux0miBjZpajOQ'; //insert your API key here
      var map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-120.55, 47.0000045],
      zoom: 11
      });
      
      // Add the search bar control to the map.
      

map.addControl(
    new MapboxGeocoder({
        accessToken: mapboxgl.accessToken, 
        mapboxgl: mapboxgl        
    })
);