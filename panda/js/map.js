mapboxgl.accessToken = 'pk.eyJ1IjoibHVjeXJvbGZlNDIxIiwiYSI6ImNrbzM4Nzl0YzBjZjAyb21saGQza3BqMnUifQ.T7z70s8jWux0miBjZpajOQ'; 
      var map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-120.548843, 476.994110],
      zoom: 20
      });

      

map.addControl(
    new MapboxGeocoder({
        accessToken: mapboxgl.accessToken, 
        mapboxgl: mapboxgl        
    })
);