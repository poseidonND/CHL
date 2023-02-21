var map = L.map("map").setView([52.8, 18], 4);
//var imageOverlay = L.imageOverlay(imageUrl,options);

L.tileLayer('https://github.com/poseidonND/CHL/raw/main/gridsat/gridsat/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>'
}).addTo(map);
// var nexrad = L.tileLayer.wms("http://mesonet.agron.iastate.edu/cgi-bin/wms/nexrad/n0r.cgi", {
//     layers: 'nexrad-n0r-900913',
//     format: 'image/png',
//     transparent: true,
//     attribution: "Weather data © 2012 IEM Nexrad"
// }).addTo(map);
//var imageUrl = 'https://maps.lib.utexas.edu/maps/historical/newark_nj_1922.jpg';
//var errorOverlayUrl = 'https://cdn-icons-png.flaticon.com/512/110/110686.png';
//var altText = 'Image of Newark, N.J. in 1922. Source: The University of Texas at Austin, UT Libraries Map Collection.';
//var latLngBounds = L.latLngBounds([[40.799311, -74.118464], [40.68202047785919, -74.33]]);

// //var imageOverlay = L.imageOverlay(imageUrl, latLngBounds, {
//     opacity: 0.8,
//     errorOverlayUrl: errorOverlayUrl,
//     alt: altText,
//     interactive: true
// }).addTo(map);
