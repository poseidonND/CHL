var osm = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1
});
var lyr = L.tileLayer('https://github.com/poseidonND/CHL/raw/main/{z}/{x}/{y}.png', {tms: true, opacity: 0.7, attribution: ""});

        // Map
var map = L.map('map', {
            center: [25.027607447969586, -90.00850432226032],
            zoom: 10,
            minZoom: 1,
            maxZoom: 10,
            layers: [osm]
        });

var basemaps = {"OpenStreetMap": osm}
var overlaymaps = {"Layer": lyr}
        // Add base layers
L.control.layers(basemaps, overlaymaps, {collapsed: false}).addTo(map);

// Fit to overlay bounds (SW and NE points with (lat, lon))
map.fitBounds([[15.055214895939162, -70.01700864452066], [35.000000000000014, -109.99999999999999]]);

