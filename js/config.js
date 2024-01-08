// grau

// variables
var mapSW = [0,8192],
    mapNE = [8192, 0];

// declare map object
var map = L.map('map').setView([0, 0], 5);

// reference the tiles
L.tileLayer('maps/grau/{z}/{x}/{y}.png', {
    minZoom: 3,
    maxZoom: 5,
    continuousWorld: false,
    noWrap: true,
    crs: L.CRS.Simple,
}).addTo(map);

map.setMaxBounds(new L.LatLngBounds(
    map.unproject (mapSW, map.getMaxZoom()),
    map.unproject (mapNE, map.getMaxZoom())
));

// prevent menus
window.oncontextmenu = function (event) {
  event.preventDefault()
  event.stopPropagation()
  return false
}