var botoes = document.querySelectorAll(".desktop .aside1 .tabutton");
var tabs = document.querySelectorAll(".desktop .tab");
var configButtons=document.querySelectorAll(".tab.configuracoes .configbuttons button")
var configTabs=document.querySelectorAll(".tab.configuracoes .opconfigs")
var map;

function showPanel(panelIndex){
    botoes.forEach(function(node){

        node.style.backgroundColor="rgb(78, 78, 78)";

    });

    tabs.forEach(function(node){

        node.style.display="none";

    });
    botoes[panelIndex].style.backgroundColor="rgb(100, 100, 100)";
    tabs[panelIndex].style.display="block";

}

showPanel(0);

function showOPanel(panelIndex) {
  configButtons.forEach(function(node) {
    node.style.backgroundColor="rgb(78, 78, 78)";
    node.style.color="";
  })
  configTabs.forEach(function(node){

    node.style.display="none";

});

configButtons[panelIndex].style.backgroundColor="rgb(100, 100, 100)";
configTabs[panelIndex].style.display="block";

}

showOPanel(0);

function initMap(){
    
    var mapOptions = {
        center: {lat: -25.4284, lng: -49.2733},
        zoom: 18,styles: [
            {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
            {
              featureType: 'administrative.locality',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'poi',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'poi.park',
              elementType: 'geometry',
              stylers: [{color: '#263c3f'}]
            },
            {
              featureType: 'poi.park',
              elementType: 'labels.text.fill',
              stylers: [{color: '#6b9a76'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry',
              stylers: [{color: '#38414e'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry.stroke',
              stylers: [{color: '#212a37'}]
            },
            {
              featureType: 'road',
              elementType: 'labels.text.fill',
              stylers: [{color: '#9ca5b3'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry',
              stylers: [{color: '#746855'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry.stroke',
              stylers: [{color: '#1f2835'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'labels.text.fill',
              stylers: [{color: '#f3d19c'}]
            },
            {
              featureType: 'transit',
              elementType: 'geometry',
              stylers: [{color: '#2f3948'}]
            },
            {
              featureType: 'transit.station',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'water',
              elementType: 'geometry',
              stylers: [{color: '#17263c'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.fill',
              stylers: [{color: '#515c6d'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.stroke',
              stylers: [{color: '#17263c'}]
            }
          ]
        };

    map = new google.maps.Map(document.getElementById('mapa'), mapOptions);

}
