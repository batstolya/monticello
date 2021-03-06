const styles =
[
 {
   "elementType": "geometry",
   "stylers": [
     {
       "color": "#f5f5f5"
     }
   ]
 },
 {
   "elementType": "labels.icon",
   "stylers": [
     {
       "visibility": "off"
     }
   ]
 },
 {
   "elementType": "labels.text.fill",
   "stylers": [
     {
       "color": "#616161"
     }
   ]
 },
 {
   "elementType": "labels.text.stroke",
   "stylers": [
     {
       "color": "#f5f5f5"
     }
   ]
 },
 {
   "featureType": "administrative.land_parcel",
   "elementType": "labels.text.fill",
   "stylers": [
     {
       "color": "#bdbdbd"
     }
   ]
 },
 {
   "featureType": "poi",
   "elementType": "geometry",
   "stylers": [
     {
       "color": "#eeeeee"
     }
   ]
 },
 {
   "featureType": "poi",
   "elementType": "labels.text.fill",
   "stylers": [
     {
       "color": "#757575"
     }
   ]
 },
 {
   "featureType": "poi.park",
   "elementType": "geometry",
   "stylers": [
     {
       "color": "#e5e5e5"
     }
   ]
 },
 {
   "featureType": "poi.park",
   "elementType": "labels.text.fill",
   "stylers": [
     {
       "color": "#9e9e9e"
     }
   ]
 },
 {
   "featureType": "road",
   "elementType": "geometry",
   "stylers": [
     {
       "color": "#ffffff"
     }
   ]
 },
 {
   "featureType": "road.arterial",
   "elementType": "labels.text.fill",
   "stylers": [
     {
       "color": "#757575"
     }
   ]
 },
 {
   "featureType": "road.highway",
   "elementType": "geometry",
   "stylers": [
     {
       "color": "#dadada"
     }
   ]
 },
 {
   "featureType": "road.highway",
   "elementType": "labels.text.fill",
   "stylers": [
     {
       "color": "#616161"
     }
   ]
 },
 {
   "featureType": "road.local",
   "elementType": "labels.text.fill",
   "stylers": [
     {
       "color": "#9e9e9e"
     }
   ]
 },
 {
   "featureType": "transit.line",
   "elementType": "geometry",
   "stylers": [
     {
       "color": "#e5e5e5"
     }
   ]
 },
 {
   "featureType": "transit.station",
   "elementType": "geometry",
   "stylers": [
     {
       "color": "#eeeeee"
     }
   ]
 },
 {
   "featureType": "water",
   "elementType": "geometry",
   "stylers": [
     {
       "color": "#c9c9c9"
     }
   ]
 },
 {
   "featureType": "water",
   "elementType": "labels.text.fill",
   "stylers": [
     {
       "color": "#9e9e9e"
     }
   ]
 }
]

function initMap() {
  // The location of Uluru
  const uluru = { lat: 46.1161000, lng: 32.9112400 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: uluru,
    disableDefaultUI: true,
    mapTypeControl: true,
    styles,
  });
  
  const marker = new google.maps.Marker({
    position: uluru,
    icon: {
     url: "../images/map.png",
      scaledSize: {
        width:40,
        height:40,
      }
    }, 
   map: map,
    title: "Beetroot Academy"
  });

};

   