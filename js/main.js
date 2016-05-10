/* Metro Transit */

//global variables
var populationLayer
var ageLayer
var whiteLayer
var blackLayer
var asianLayer
var otherRaceLayer
var mhiLayer
var droveAloneLayer
var carpoolLayer
var publicTransitLayer
var bikesLayer
var walkedLayer
var otherCommuteLayer
var homeLayer
var publicTransporationLayer
var vehicleLayer
var householdsLayer
var kidsLayer
var X = 0

var attrArray = ["Population","MedianAge", "Households", "Kids", "CarTruckVan", "PublicTransportation", "DroveAlone", "Carpool", "PublicTransit", "Bikes", "Walked", "OtherCommute", "WorkedFromHome", "WhiteNormalized", "BlackNormalized", "AsianNormalized", "MHI", "Other Race"]; 


//Create the Leaflet map
function createMap(){

  //setting pan bounds
  var southWest = L.latLng(44.596356, -93.812432),
  northEast = L.latLng(45.403478, -92.812017),
  bounds = L.latLngBounds(southWest, northEast);
  
	var map = L.map('map', {
		center: [44.958401, -93.206810],
		zoom: 11,
    zoomControl: false,
    scrollWheelZoom: false,
    maxBounds: bounds
	});

	//mapbox://styles/gvriezen/cinjd2amr001gadniy7zysc61
	//pk.eyJ1IjoiZ3ZyaWV6ZW4iLCJhIjoiY2lsMTJvZ3BtMmZyeHYybTNocm1kZmg0eiJ9.mW_JTzHQbMfovynNVqHaZA


	L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
  	attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
  	maxZoom: 14,
  	minZoom: 10,
  	id: 'gvriezen.59a5f47c', //here's what we need <--- EX: swal94.4103e88e
  	accessToken: 'pk.eyJ1IjoiZ3ZyaWV6ZW4iLCJhIjoiY2lsMTJvZ3BtMmZyeHYybTNocm1kZmg0eiJ9.mW_JTzHQbMfovynNVqHaZA'
  }).addTo(map);

  Stamen_TonerLabels = L.tileLayer('http://stamen-tiles-{s}.a.ssl.fastly.net/toner-labels/{z}/{x}/{y}.{ext}', {
    attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    subdomains: 'abcd',
    minZoom: 10,
    maxZoom: 14,
    ext: 'png',
    zIndex: 1000000
  }).addTo(map).bringToFront;


  getRailData(map);

  var zoomHome = L.Control.zoomHome();
  zoomHome.addTo(map);

  new L.Control.GeoSearch({
    provider: new L.GeoSearch.Provider.Google()
  }).addTo(map);

  dropdown(map);

  showDropdown(map);

  


  var walkable = L.circle([44.938992, -93.178415], 10000, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5
  })
  
  var walkOverlay = {
    "Walkable Distance": walkable
  };

  L.control.layers(null, walkOverlay).addTo(map);

// function showDropdown() {
//     document.getElementById("myDropdown").classList.toggle("show");
// }

//Close the dropdown menu if the user clicks outside of it
// window.onclick = function(event) {
//   if (!event.target.matches('.dropbtn')) {

//     var dropdowns = document.getElementsByClassName("dropdown-content");
//     var i;
//     for (i = 0; i < dropdowns.length; i++) {
//       var openDropdown = dropdowns[i];
//       if (openDropdown.classList.contains('show')) {
//         openDropdown.classList.remove('show');
//       }
//     }
//   }
// }

  function showDropdown(map) {

    $('#blank').click(function() {
      removeAllLayers(map);
    });

    $('#population').click(function(){
      
      removeAllLayers(map);
      getCensusDataPopulation(map);
      
    });

    $('#age').click(function(){
       
      removeAllLayers(map);
      getCensusDataAge(map);
    
    }); 

    $('#white').click(function(){
    
      removeAllLayers(map);
      getCensusDataWhite(map);
      
    });

    $('#black').click(function(){
  
      removeAllLayers(map);
      getCensusDataBlack(map);
      
    });
    $('#asian').click(function(){
  
      removeAllLayers(map);
      getCensusDataAsian(map);
      
    });
    $('#other').click(function(){
  
      removeAllLayers(map);
      getCensusDataOtherRace(map);
      
    });
    $('#vehicle').click(function(){
   
      removeAllLayers(map);
      getCensusDataVehicle(map);
      
    });
    $('#public').click(function(){
  
      removeAllLayers(map);
      getCensusDataPublicTransportation(map);
      
    });
    $('#alone').click(function(){
   
      removeAllLayers(map);
      getCensusDataDroveAlone(map);
      
    });
    $('#carpool').click(function(){
   
      removeAllLayers(map);
      getCensusDataCarpool(map);
      
    });
    $('#publictransit').click(function(){
  
      removeAllLayers(map);
      getCensusDataPublicTransit(map);
      
    });
    $('#bike').click(function(){
   
      removeAllLayers(map);
      getCensusDataBikes(map);
      
    });
    $('#walked').click(function(){
  
      removeAllLayers(map);
      getCensusDataWalked(map);
      
    });
    $('#alternate').click(function(){
  
      removeAllLayers(map);
      getCensusDataOtherCommute(map);
      
    });
    $('#home').click(function(){
  
      removeAllLayers(map);
      getCensusDataWorkedFromHome(map);
      
    });
    $('#household').click(function(){
  
      removeAllLayers(map);
      getCensusDataHouseholds(map);
      
    });
    $('#kids').click(function(){
  
      removeAllLayers(map);
      getCensusDataKids(map);
      
    });
    $('#income').click(function(){
  
      removeAllLayers(map);
      getCensusDataIncome(map);
      
    });


  };


};


function removeAllLayers (map) {

  console.log(X);
  
  if (X===1){
    map.removeLayer(populationLayer);
  } else if (X===2){
    map.removeLayer(ageLayer);
  } else if (X===3){
    map.removeLayer(whiteLayer);
  } else if (X===4){
    map.removeLayer(blackLayer)
  } else if (X===5){
    map.removeLayer(asianLayer);
  } else if (X===6){
    map.removeLayer(otherRaceLayer);
  } else if (X===7){
    map.removeLayer(mhiLayer);
  } else if (X===8){
    map.removeLayer(droveAloneLayer);
  } else if (X===9){
    map.removeLayer(carpoolLayer);
  } else if (X===10){
    map.removeLayer(carpoolLayer);
  } else if (X===11){
    map.removeLayer(publicTransitLayer);
  } else if (X===12){
    map.removeLayer(bikesLayer);
  } else if (X===13){
    map.removeLayer(walkedLayer);
  } else if (X===14){
    map.removeLayer(otherCommuteLayer);
  } else if (X===15){
    map.removeLayer(homeLayer);
  } else if (X===16){
    map.removeLayer(publicTransporationLayer);
  } else if (X===17){
    map.removeLayer(vehicleLayer);
  } else if (X===18){
    map.removeLayer(householdsLayer);
  } else if (X===19){
    map.removeLayer(kidsLayer);
  }

};



 function dropdown (map) {

//  var legend = L.control({position: 'topright'});
// legend.onAdd = function (map) {
//   var div = L.DomUtil.create('div', 'info legend');
// div.innerHTML = 
// '<select id="income"><option>Income</option></select>
//  <select id="age"><option>Median Age</option></select>';
// div.firstChild.onmousedown = div.firstChild.ondblclick = L.DomEvent.stopPropagation;
// return div;

// var div = L.DomUtil.create('div', 'info legend');
// div.innerHTML='<select id="income"><option>Income</option></select>
//                 <select id="age"><option>Age</option></select>';
// div.firstChild.onmousedown = div.firstChild.ondblclick = L.DomEvent.stopPropagation;
// return div;
 var legend = L.control({position: 'topright'});
legend.onAdd = function (map) {
var div = L.DomUtil.create('div', 'info legend');
div.innerHTML = 
'<select><option>--</option><option id="population">Population per Square Mile</option><option id="age">Median Age</option><option id ="white">White</option><option id ="black">Black</option><option id ="asian">Asian</option><option id ="other">Other</option><option id ="vehicle">Mean Travel Time to Work - Vehicle</option><option id ="public">Mean Travel Time To Work - Public Transit</option><option id ="alone">Drove Alone</option><option id ="carpool">Carpool</option><option id ="publictransit">Public Transit</option><option id ="bike">Bike</option><option id ="walked">Walked</option><option id ="alternate">Other Commute Type</option><option id ="home">Work From Home</option><option id ="household">Households</option><option id ="kids">Kids</option><option id ="income">Median Household Income</option></select>';
div.firstChild.onmousedown = div.firstChild.ondblclick = L.DomEvent.stopPropagation;
return div;

};

legend.addTo(map);
};



//Import GeoJSON data
function getCensusDataPopulation(map){
  X=1
  $.getJSON("data/CensusTracts/CensusTracts3.geojson",function(censusTracts){

  function getColor(d) {
    return d > 10000 ? '#000000' :
           d > 6000  ? '#404040' :
           d > 4000  ? '#808080' :
           d > 1000   ? '#BFBFBF' :
           d <= 1000   ? '#FFFFFF' :
                      '#FFF';
  }
  function style(feature) {
     
    return {
        fillColor: getColor(feature.properties.PopArea),
        weight: .5,
        opacity: 1,
        color: 'white',
        fillOpacity: 0.6,
        zIndex: 2
    };
  }

populationLayer = L.geoJson(censusTracts, {style: style}).addTo(map).bringToBack();
  });
};

function getCensusDataAge(map){
  X=2
  $.getJSON("data/CensusTracts/CensusTracts3.geojson",function(censusTracts){

  function getColor(d) {
    return d > 40 ? '#000000' :
           d > 38  ? '#404040' :
           d > 37  ? '#808080' :
           d > 34   ? '#BFBFBF' :
           d <= 34   ? '#FFFFFF' :
                      '#FFF';
  }
  function style(feature) {
    return {
        fillColor: getColor(feature.properties.MedianAge),
        weight: .5,
        opacity: 1,
        color: 'white',
        fillOpacity: 0.6,
        zIndex: 2
    };
  }

 ageLayer = L.geoJson(censusTracts, {style: style}).addTo(map).bringToBack();
  });
};

//race data

function getCensusDataWhite(map){
  X=3
  $.getJSON("data/CensusTracts/CensusTracts3.geojson",function(censusTracts){

  function getColor(d) {
    return d > 98 ? '#000000' :
           d > 95  ? '#404040' :
           d > 90  ? '#808080' :
           d > 85   ? '#BFBFBF' :
           d <= 80   ? '#FFFFFF' :
                      '#FFF';
  }
  function style(feature) {
    return {
        fillColor: getColor(feature.properties.WhiteNormalized),
        weight: .5,
        opacity: 1,
        color: 'white',
        fillOpacity: 0.6,
        zIndex: 2
    };
  }

 whiteLayer = L.geoJson(censusTracts, {style: style}).addTo(map).bringToBack();
  });
};


function getCensusDataBlack(map){
  X=4
  $.getJSON("data/CensusTracts/CensusTracts3.geojson",function(censusTracts){

  function getColor(d) {
    return d > 50 ? '#000000' :
           d > 40  ? '#404040' :
           d > 25  ? '#808080' :
           d > 15   ? '#BFBFBF' :
           d <= 5   ? '#FFFFFF' :
                      '#FFF';
  }
  function style(feature) {
    return {
        fillColor: getColor(feature.properties.BlackNormalized),
        weight: .5,
        opacity: 1,
        color: 'white',
        fillOpacity: 0.6,
        zIndex: 2
    };
  }

 blackLayer = L.geoJson(censusTracts, {style: style}).addTo(map).bringToBack();
  });
};


function getCensusDataAsian(map){
  X=5
  $.getJSON("data/CensusTracts/CensusTracts3.geojson",function(censusTracts){

  function getColor(d) {
    return d > 98 ? '#000000' :
           d > 95  ? '#404040' :
           d > 90  ? '#808080' :
           d > 85   ? '#BFBFBF' :
           d <= 80   ? '#FFFFFF' :
                      '#FFF';
  }
  function style(feature) {
    return {
        fillColor: getColor(feature.properties.AsianNormalized),
        weight: .5,
        opacity: 1,
        color: 'white',
        fillOpacity: 0.6,
        zIndex: 2
    };
  }

 asianLayer = L.geoJson(censusTracts, {style: style}).addTo(map).bringToBack();
  });
};


function getCensusDataOtherRace(map){
  X=6
  $.getJSON("data/CensusTracts/CensusTracts3.geojson",function(censusTracts){

  function getColor(d) {
    return d > 98 ? '#000000' :
           d > 95  ? '#404040' :
           d > 90  ? '#808080' :
           d > 85   ? '#BFBFBF' :
           d <= 80   ? '#FFFFFF' :
                      '#FFF';
  }
  function style(feature) {
    return {
        fillColor: getColor(feature.properties.Other),
        weight: .5,
        opacity: 1,
        color: 'white',
        fillOpacity: 0.6,
        zIndex: 2
    };
  }

 otherRaceLayer = L.geoJson(censusTracts, {style: style}).addTo(map).bringToBack();
  });
};

//median household income data

function getCensusDataIncome(map){
  X=7
  $.getJSON("data/CensusTracts/CensusTracts3.geojson",function(censusTracts){

  function getColor(d) {
    return d > 98 ? '#000000' :
           d > 95  ? '#404040' :
           d > 90  ? '#808080' :
           d > 85   ? '#BFBFBF' :
           d <= 80   ? '#FFFFFF' :
                      '#FFF';
  }
  function style(feature) {
    return {
        fillColor: getColor(feature.properties.MHI),
        weight: .5,
        opacity: 1,
        color: 'white',
        fillOpacity: 0.6,
        zIndex: 2
    };
  }

 mhiLayer = L.geoJson(censusTracts, {style: style}).addTo(map).bringToBack();
  });
};

//commmute type

function getCensusDataDroveAlone(map){
  X=8
  $.getJSON("data/CensusTracts/CensusTracts3.geojson",function(censusTracts){

  function getColor(d) {
    return d > 98 ? '#000000' :
           d > 95  ? '#404040' :
           d > 90  ? '#808080' :
           d > 85   ? '#BFBFBF' :
           d <= 80   ? '#FFFFFF' :
                      '#FFF';
  }
  function style(feature) {
    return {
        fillColor: getColor(feature.properties.DroveAlone),
        weight: .5,
        opacity: 1,
        color: 'white',
        fillOpacity: 0.6,
        zIndex: 2
    };
  }

 droveAloneLayer = L.geoJson(censusTracts, {style: style}).addTo(map).bringToBack();
  });
};

function getCensusDataCarpool(map){
  X=9
  $.getJSON("data/CensusTracts/CensusTracts3.geojson",function(censusTracts){

  function getColor(d) {
    return d > 98 ? '#000000' :
           d > 95  ? '#404040' :
           d > 90  ? '#808080' :
           d > 85   ? '#BFBFBF' :
           d <= 80   ? '#FFFFFF' :
                      '#FFF';
  }
  function style(feature) {
    return {
        fillColor: getColor(feature.properties.Carpool),
        weight: .5,
        opacity: 1,
        color: 'white',
        fillOpacity: 0.6,
        zIndex: 2
    };
  }

 carpoolLayer = L.geoJson(censusTracts, {style: style}).addTo(map).bringToBack();
  });
};


function getCensusDataPublicTransit(map){
  X=10
  $.getJSON("data/CensusTracts/CensusTracts3.geojson",function(censusTracts){

  function getColor(d) {
    return d > 98 ? '#000000' :
           d > 95  ? '#404040' :
           d > 90  ? '#808080' :
           d > 85   ? '#BFBFBF' :
           d <= 80   ? '#FFFFFF' :
                      '#FFF';
  }
  function style(feature) {
    return {
        fillColor: getColor(feature.properties.PublicTransit),
        weight: .5,
        opacity: 1,
        color: 'white',
        fillOpacity: 0.6,
        zIndex: 2
    };
  }

 publicTransitLayer = L.geoJson(censusTracts, {style: style}).addTo(map).bringToBack();
  });
};

function getCensusDataBikes(map){
  X=11
  $.getJSON("data/CensusTracts/CensusTracts3.geojson",function(censusTracts){

  function getColor(d) {
    return d > 98 ? '#000000' :
           d > 95  ? '#404040' :
           d > 90  ? '#808080' :
           d > 85   ? '#BFBFBF' :
           d <= 80   ? '#FFFFFF' :
                      '#FFF';
  }
  function style(feature) {
    return {
        fillColor: getColor(feature.properties.Bikes),
        weight: .5,
        opacity: 1,
        color: 'white',
        fillOpacity: 0.6,
        zIndex: 2
    };
  }

 bikesLayer = L.geoJson(censusTracts, {style: style}).addTo(map).bringToBack();
  });
};


function getCensusDataWalked(map){
  X=12
  $.getJSON("data/CensusTracts/CensusTracts3.geojson",function(censusTracts){

  function getColor(d) {
    return d > 98 ? '#000000' :
           d > 95  ? '#404040' :
           d > 90  ? '#808080' :
           d > 85   ? '#BFBFBF' :
           d <= 80   ? '#FFFFFF' :
                      '#FFF';
  }
  function style(feature) {
    return {
        fillColor: getColor(feature.properties.Walked),
        weight: .5,
        opacity: 1,
        color: 'white',
        fillOpacity: 0.6,
        zIndex: 2
    };
  }

 walkedLayer = L.geoJson(censusTracts, {style: style}).addTo(map).bringToBack();
  });
};


function getCensusDataOtherCommute(map){
  X=13
  $.getJSON("data/CensusTracts/CensusTracts3.geojson",function(censusTracts){

  function getColor(d) {
    return d > 98 ? '#000000' :
           d > 95  ? '#404040' :
           d > 90  ? '#808080' :
           d > 85   ? '#BFBFBF' :
           d <= 80   ? '#FFFFFF' :
                      '#FFF';
  }
  function style(feature) {
    return {
        fillColor: getColor(feature.properties.OtherCommute),
        weight: .5,
        opacity: 1,
        color: 'white',
        fillOpacity: 0.6,
        zIndex: 2
    };
  }

 otherCommuteLayer = L.geoJson(censusTracts, {style: style}).addTo(map).bringToBack();
  });
};


function getCensusDataWorkedFromHome(map){
  X=14
  $.getJSON("data/CensusTracts/CensusTracts3.geojson",function(censusTracts){

  function getColor(d) {
    return d > 98 ? '#000000' :
           d > 95  ? '#404040' :
           d > 90  ? '#808080' :
           d > 85   ? '#BFBFBF' :
           d <= 80   ? '#FFFFFF' :
                      '#FFF';
  }
  function style(feature) {
    return {
        fillColor: getColor(feature.properties.WorkedFromHome),
        weight: .5,
        opacity: 1,
        color: 'white',
        fillOpacity: 0.6,
        zIndex: 2
    };
  }

 homeLayer = L.geoJson(censusTracts, {style: style}).addTo(map).bringToBack();
  });
};

// mean travel time to work data

function getCensusDataPublicTransportation(map){
  X=15
  $.getJSON("data/CensusTracts/CensusTracts3.geojson",function(censusTracts){

  function getColor(d) {
    return d > 98 ? '#000000' :
           d > 95  ? '#404040' :
           d > 90  ? '#808080' :
           d > 85   ? '#BFBFBF' :
           d <= 80   ? '#FFFFFF' :
                      '#FFF';
  }
  function style(feature) {
    return {
        fillColor: getColor(feature.properties.PublicTransportation),
        weight: .5,
        opacity: 1,
        color: 'white',
        fillOpacity: 0.6,
        zIndex: 2
    };
  }

 publicTransporationLayer = L.geoJson(censusTracts, {style: style}).addTo(map).bringToBack();
  });
};

function getCensusDataVehicle(map){
  X=16
  $.getJSON("data/CensusTracts/CensusTracts3.geojson",function(censusTracts){

  function getColor(d) {
    return d > 98 ? '#000000' :
           d > 95  ? '#404040' :
           d > 90  ? '#808080' :
           d > 85   ? '#BFBFBF' :
           d <= 80   ? '#FFFFFF' :
                      '#FFF';
  }
  function style(feature) {
    return {
        fillColor: getColor(feature.properties.CarTruckVan),
        weight: .5,
        opacity: 1,
        color: 'white',
        fillOpacity: 0.6,
        zIndex: 2
    };
  }

 vehicleLayer = L.geoJson(censusTracts, {style: style}).addTo(map).bringToBack();
  });
};
// get data for household type

function getCensusDataHouseholds(map){
  X=17
  $.getJSON("data/CensusTracts/CensusTracts3.geojson",function(censusTracts){

  function getColor(d) {
    return d > 98 ? '#000000' :
           d > 95  ? '#404040' :
           d > 90  ? '#808080' :
           d > 85   ? '#BFBFBF' :
           d <= 80   ? '#FFFFFF' :
                      '#FFF';
  }
  function style(feature) {
    return {
        fillColor: getColor(feature.properties.Households),
        weight: .5,
        opacity: 1,
        color: 'white',
        fillOpacity: 0.6,
        zIndex: 2
    };
  }

 householdsLayer = L.geoJson(censusTracts, {style: style}).addTo(map).bringToBack();
  });
};

function getCensusDataKids(map){
  X=18
  $.getJSON("data/CensusTracts/CensusTracts3.geojson",function(censusTracts){

  function getColor(d) {
    return d > 98 ? '#000000' :
           d > 95  ? '#404040' :
           d > 90  ? '#808080' :
           d > 85   ? '#BFBFBF' :
           d <= 80   ? '#FFFFFF' :
                      '#FFF';
  }
  function style(feature) {
    return {
        fillColor: getColor(feature.properties.Kids),
        weight: .5,
        opacity: 1,
        color: 'white',
        fillOpacity: 0.6,
        zIndex: 2
    };
  }

 kidsLayer = L.geoJson(censusTracts, {style: style}).addTo(map).bringToBack();
  });
};

//end of censustracts3 geojson data

//get data for stations and make markers

function getRailData(map){
  var blueStations = $.ajax(
    "data/geojsons/BlueStations.geojson.json",
     {
          dataType: "json",
          success: function(response){
              var geojsonMarkerOptions = {
                radius: 3,
                fillColor: "#fff",
                fillOpacity: 1,
                color: "#0053A0",
                weight: 1, 
                opacity: 1,
                zIndex: 10000000000000
              };
  //create a Leaflet GeoJSON layer and add it to the map
              L.geoJson(response,{
                pointToLayer: function(feature, latlng) {
                  return L.circleMarker(latlng, geojsonMarkerOptions);
                }
              }).addTo(map);
            }
        });
  var greenStations = $.ajax(
    "data/geojsons/GreenStations.geojson.json",
     {
          dataType: "json",
          success: function(response){
              var geojsonMarkerOptions = {
                radius: 3,
                fillColor: "#fff",
                fillOpacity: 1,
                color: "#028244",
                weight: 1, 
                opacity: 1,
                zIndex: 6
              };
  //create a Leaflet GeoJSON layer and add it to the map
              L.geoJson(response,{
                pointToLayer: function(feature, latlng) {
                  return L.circleMarker(latlng, geojsonMarkerOptions);
                }
              }).addTo(map);
            }
        });
  var redStations = $.ajax(
    "data/geojsons/RedStations.geojson.json",
     {
          dataType: "json",
          success: function(response){
              var geojsonMarkerOptions = {
                radius: 3,
                fillColor: "#fff",
                fillOpacity: 1,
                color: "#ED1B2E",
                weight: 1, 
                opacity: 1,
                zIndex: 6
              };
  //create a Leaflet GeoJSON layer and add it to the map
              L.geoJson(response,{
                pointToLayer: function(feature, latlng) {
                  return L.circleMarker(latlng, geojsonMarkerOptions);
                }
              }).addTo(map);
            }
        });
   var sharedStations =$.ajax(
    "data/geojsons/SharedStations.geojson.json",
     {
          dataType: "json",
          success: function(response){
              var geojsonMarkerOptions = {
                radius: 3,
                fillColor: "#fff",
                fillOpacity: 1,
                color: "#000",
                weight: 1, 
                opacity: 1,
                zIndex: 6
              };
  //create a Leaflet GeoJSON layer and add it to the map
              L.geoJson(response,{
                pointToLayer: function(feature, latlng) {
                  return L.circleMarker(latlng, geojsonMarkerOptions);
                }
              }).addTo(map).bringToFront();
            }
        });
  var northStarStations = $.ajax(
    "data/geojsons/NorthStarStations.geojson.json",
     {
          dataType: "json",
          success: function(response){
              var geojsonMarkerOptions = {
                radius: 4,
                fillColor: "#FFD204",
                fillOpacity: 1,
                color: "#000066",
                weight: 1, 
                opacity: 1,
                zIndex: 6
              };
  //create a Leaflet GeoJSON layer and add it to the map
              L.geoJson(response,{
                pointToLayer: function(feature, latlng) {
                  return L.circleMarker(latlng, geojsonMarkerOptions);
                }
              }).addTo(map);
            }
        });
  var proposedStations = $.ajax(
    "data/geojsons/ProposedStations.geojson.json",
     {
          dataType: "json",
          success: function(response){
              var geojsonMarkerOptions = {
                radius: 3,
                fillColor: "#000",
                fillOpacity: 1,
                color: "#fff",
                weight: 1, 
                opacity: 1,
                zIndex: 6
              };
  //create a Leaflet GeoJSON layer and add it to the map
              L.geoJson(response,{
                pointToLayer: function(feature, latlng) {
                  return L.circleMarker(latlng, geojsonMarkerOptions);
                }
              }).addTo(map);
            }
        });

  function addTopoData(topoData){  
    topoLayer.addData(topoData);
    topoLayer.addTo(map);
  }

  // var metroCensusTracts = L.geoJson (null,{
  //  style: function(feature) {
  //       return { 
  //         color: '#8c8c8c',
  //         weight: 1,
  //         fillOpacity: 0
  //     };
  //   }
  // });
  var lakesRivers = L.geoJson (null,{
   style: function(feature) {
        return { 
          color: '#99ddff',
          fillColor: '#e6f2ff',
          fillOpacity: 1,
          weight: 1,
          zIndex: 3,
          opacity: 1
      };
    }
  });
  var blueLine = L.geoJson (null,{
   style: function(feature) {
        return { 
          color: '#0053A0',
          weight: 3,
          opacity: 1,
          zIndex: 3 
        };
    }
  });
  var redLine = L.geoJson (null,{
   style: function(feature) {
        return { 
          color: '#ED1B2E', 
          weight: 3,
          opacity: 1,
          zIndex: 3
        };
    }
  });
  var goldLine = L.geoJson (null,{
   style: function(feature) {
        return { 
            color: '#FBBD12', 
            weight: 3,
            dashArray: '5',
            opacity: 1,
            zIndex: 3
        };
    }
  });
  var greenLine = L.geoJson (null,{
   style: function(feature) {
        return { 
          color: '#028244',
          weight: 3,
          opacity: 1,
          zIndex: 3
        };
    }
  });
  var orangeLine = L.geoJson (null,{
   style: function(feature) {
        return {
         color: ' #F68B1F',
         weight: 3,
         dashArray: '5',
         opacity: 1,
         zIndex: 3 
     };
    }
  });
  var northStarLine = L.geoJson (null,{
   style: function(feature) {
        return { 
          color: '#0053A0',
          weight: 1,
          opacity: 1,
          zIndex: 5
        };
    }
  });
  var northStarLine2 = L.geoJson (null,{
   style: function(feature) {
        return { 
          color: '#FFD204',
          weight: 3,
          opacity: 1,
          zIndex: 4
        };
    }
  });
  var northStarLine3 = L.geoJson (null,{
   style: function(feature) {
        return { 
          color: '#000066',
          weight: 5,
          opacity: 1,
          zIndex: 3
        };
    }
  });
  var blueLineExt = L.geoJson (null,{
   style: function(feature) {
        return { 
            color: '#0053A0',
            weight: 3,
            dashArray: '5',
            opacity: 1,
            zIndex: 3
      };
    }
  });
  var redLineExt = L.geoJson (null,{
   style: function(feature) {
        return { 
            color: '#ED1B2E',
            weight: 3,
            dashArray: '5',
            opacity: 1,
            zIndex: 3
     };
    }
  });
  var greenLineExt = L.geoJson (null,{
   style: function(feature) {
        return { 
            color: ' #028244',
            weight: 3,
            opacity: 1,
            dashArray: '5',
            zIndex: 3
     };
    }
  });

  var railLines =
  omnivore.topojson('data/topojsons/LakesAndRivers.topojson', null, lakesRivers)
    .addTo(map); 
  // omnivore.topojson('data/topojsons/MetroCensusTracts.topojson', null, metroCensusTracts)
  //   .addTo(map);
  omnivore.topojson('data/topojsons/BlueLine.topojson', null, blueLine)
    .addTo(map);
  omnivore.topojson('data/topojsons/RedLine.topojson', null, redLine)
    .addTo(map);
  omnivore.topojson('data/topojsons/GreenLine.topojson', null, greenLine)
    .addTo(map);
  omnivore.topojson('data/topojsons/GoldLine.topojson', null, goldLine)
    .addTo(map);
  omnivore.topojson('data/topojsons/OrangeLine.topojson', null, orangeLine)
    .addTo(map);
  omnivore.topojson('data/topojsons/BlueLineExt.topojson', null, blueLineExt)
    .addTo(map);
  omnivore.topojson('data/topojsons/GreenLineExt.topojson', null, greenLineExt)
    .addTo(map);
  omnivore.topojson('data/topojsons/RedLineExt.topojson', null, redLineExt)
    .addTo(map);
  omnivore.topojson('data/topojsons/NorthStarLine.topojson', null, northStarLine)
    .addTo(map);
  omnivore.topojson('data/topojsons/NorthStarLine.topojson', null, northStarLine2)
    .addTo(map);
  omnivore.topojson('data/topojsons/NorthStarLine.topojson', null, northStarLine3)
    .addTo(map);

};






// function createDropdown(){
//     //add select element
//     var dropdown = d3.select("body")
//         .append("select")
//         .attr("class", "dropdown");

//     //add initial option
//     var titleOption = dropdown.append("option")
//         .attr("class", "titleOption")
//         .attr("disabled", "true")
//         .text("Select Attribute");

//     //add attribute name options
//     var attrOptions = dropdown.selectAll("attrOptions")
//         .data(attrArray)
//         .enter()
//         .append("option")
//         .attr("value", function(d){ return d })
//         .text(function(d){ return d });
// };

$(document).ready(createMap);