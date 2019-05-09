//Initialise map
//-------------------------------------------------------------------------------------------------------------
// https://developer.mozilla.org/en-US/docs/Web/API/Window/devicePixelRatio (if youhave to work wit canvas)
var pixel_ratio = parseInt(window.devicePixelRatio) || 1;
// leaflet max zoom
var max_zoom = 16;
// Width and height of tiles (reduce number of tiles and increase tile size)
var tile_size = 512;
// zoom to italy (lat,lon, zoom)
var map = L.map('map', {
}).setView([42, 10], 6);

//vado a dire allo script javascrip che esiste una sidebar, vado a dire che sidebar è un controllo di leaflet
// sidebar è l'id in index, aggiungo li il control
var sidebar = L.control.sidebar({container:'sidebar'}).addTo(map);
// open legend after a second! (mille millisecondi)
setTimeout(function(){
sidebar.open('legend')
}, 1000);
