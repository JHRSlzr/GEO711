var mymap = L.map("mapid").setView(
  [21.152364203854884, -101.71115227036523],
  16
);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(mymap);

var salle = L.marker([21.15223412617155, -101.7113883047542]).addTo(mymap);

function onEachFeature(feature, layer) {
  var popupContent = "Soy un " + feature.geometry.type + " en la salle";

  if (feature.properties && feature.properties.popupContent) {
    popupContent += feature.properties.popupContent;
  }

  layer.bindPopup(popupContent);
}

L.geoJSON(lasalle, {
  filter: function (feature, layer) {
    if (feature.properties) {
      return true;
    }
  },
  onEachFeature: onEachFeature,
}).addTo(mymap);

var marker = L.marker([21.15223412617155, -101.7113883047542])
  .addTo(mymap)
  .bindPopup("Holi");

  var markers = Array();

// function onMapClick(e) {

//   var markerxd= L.marker(e.latlng)
//   markerxd
//   .addTo(mymap)
//   .bindPopup("You clicked the map at " + e.latlng.toString());
//   markers.push(markerxd);
// }

// function connectDots() {
//   var latlngs = Array();
//   var a= markers.length;
//   //Get latlng from first marker
//   latlngs.push(markers[a].latlng);
  
//   //Get latlng from first marker
//   latlngs.push(markers[a-1].latlng);
  
//   //You can just keep adding markers
  
//   //From documentation http://leafletjs.com/reference.html#polyline
//   // create a red polyline from an arrays of LatLng points
//   var polyline = L.polyline(latlngs, {color: 'red'}).addTo(map);
  
//   // zoom the map to the polyline
//   map.fitBounds(polyline.getBounds());
// }


var marker1 = '', ponyline = null;
function onMapClick(e) {
  if (e.originalEvent.detail === 1) {
      if(ponyline !== null){
          mymap.removeLayer(ponyline)
      }
    L.marker(e.latlng).addTo(mymap).bindPopup("You clicked the map at " + e.latlng.toString());
    if(marker1!= '')
    {
      var pointList = [marker1, e.latlng];

      ponyline = new L.Polyline(pointList, {
          color: 'red',
          weight: 5,
      });
    }
    marker1 = e.latlng;
  } else if (e.originalEvent.detail === 2) {
  // L.marker(e.latlng).addTo(mymap).bindPopup("You clicked the map at " + e.latlng.toString());

ponyline.addTo(mymap)
marker1 = e.latlng
  }
}
// function onMapClick(e) {
//       if(ponyline !== null){
//           mymap.removeLayer(ponyline)
//       }
//     L.marker(e.latlng).addTo(mymap).bindPopup("You clicked the map at " + e.latlng.toString());
//     marker1 = e.latlng;
// }

// function xd(e){
//   L.marker(e.latlng).addTo(mymap).bindPopup("You clicked the map at " + e.latlng.toString());
//   var pointList = [marker1, e.latlng];

//   ponyline = new L.Polyline(pointList, {
//       color: 'red',
//       weight: 5,
//   });
// ponyline.addTo(mymap)
// marker1 = e.latlng
// }

mymap.doubleClickZoom.disable(); 
mymap.on('click', onMapClick);