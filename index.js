var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');
 
mapboxgl.accessToken = 'pk.eyJ1IjoiZGV3ZXJuZXIiLCJhIjoiY2pkZDRnenE2MGsydDJ3dWlrdzJ4MXdvOCJ9.BmmpyB1818u9Od3nwIQg_A';
var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/dewerner/cjdmz0b840pyo2rr5llujnpvg'
})