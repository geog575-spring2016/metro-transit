/* Metro Transit */
var attrArray = ["Median age (years)", "Households", "Kids Under 18", "Car, truck, or van - Mean travel time to work (minutes)", "Public transportation - Mean travel time to work (minutes)", "Drove Alone", "Carpooled", "Public transportation (excluding taxicab)", "Bicycle", "Walked", "Other means", "Worked at home", "White", "Black or African American", "American Indian and Alaska Native", "Asian", "Native Hawaiian and Other Pacific Islander", "Some other race alone", "Two or more races", "Median household income"]; 


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

  var Stamen_TonerLabels = L.tileLayer('http://stamen-tiles-{s}.a.ssl.fastly.net/toner-labels/{z}/{x}/{y}.{ext}', {
  attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  subdomains: 'abcd',
  minZoom: 10,
  maxZoom: 14,
  ext: 'png'
  }).addTo(map);

  getData(map);

  var zoomHome = L.Control.zoomHome();
  zoomHome.addTo(map);

  new L.Control.GeoSearch({
    provider: new L.GeoSearch.Provider.Google()
  }).addTo(map);

};


//Import GeoJSON data
function getData(map){
  $.getJSON("data/Census Tracts/CensusTracts.geojson",function(censusTracts){
  L.geoJson( censusTracts ).addTo(map);

  function getColor(d) {
    return d > 10000 ? '#000000' :
           d > 8000  ? '#2B2B2B' :
           d > 6000  ? '#555555' :
           d > 4000  ? '#808080' :
           d > 2000   ? '#AAAAAA' :
           d > 1000   ? '#D5D5D5' :
           d > 500   ? '#FFFFFF' :
                      '#FFEDA0';
  }
  function style(feature) {
    return {
        fillColor: getColor(feature.properties.TransitData_Population),
        weight: 2,
        opacity: 1,
        color: 'white',
        dashArray: '3',
        fillOpacity: 0.6
    };
  }

  L.geoJson(censusTracts, {style: style}).addTo(map);
  console.log(censusTracts)
  });
  //       $.ajax(
  //   "data/Census Tracts/CensusTracts.geojson",
  //    {
  //         dataType: "json",
  //         success: function(response){
  //             var geojsonMarkerOptions = {
  //               fillColor: "#fff",
  //               color: "#000",
  //               weight: 1, 
  //               opacity: 1
  //             };
  // //create a Leaflet GeoJSON layer and add it to the map
  //             L.geoJson(response,{
  //               pointToLayer: function(feature, latlng) {
  //                 return L.circleMarker(latlng, geojsonMarkerOptions);
  //               }
  //             }).addTo(map);
  //           }
  //       });
   $.ajax(
    "data/geojsons/BlueStations.geojson.json",
     {
          dataType: "json",
          success: function(response){
              var geojsonMarkerOptions = {
                radius: 3,
                fillColor: "#fff",
                color: "#0053A0",
                weight: 1, 
                opacity: 1
              };
  //create a Leaflet GeoJSON layer and add it to the map
              L.geoJson(response,{
                pointToLayer: function(feature, latlng) {
                  return L.circleMarker(latlng, geojsonMarkerOptions);
                }
              }).addTo(map);
            }
        });
   $.ajax(
    "data/geojsons/GreenStations.geojson.json",
     {
          dataType: "json",
          success: function(response){
              var geojsonMarkerOptions = {
                radius: 3,
                fillColor: "#fff",
                color: "#028244",
                weight: 1, 
                opacity: 1
              };
  //create a Leaflet GeoJSON layer and add it to the map
              L.geoJson(response,{
                pointToLayer: function(feature, latlng) {
                  return L.circleMarker(latlng, geojsonMarkerOptions);
                }
              }).addTo(map);
            }
        });
   $.ajax(
    "data/geojsons/RedStations.geojson.json",
     {
          dataType: "json",
          success: function(response){
              var geojsonMarkerOptions = {
                radius: 3,
                fillColor: "#fff",
                color: "#ED1B2E",
                weight: 1, 
                opacity: 1
              };
  //create a Leaflet GeoJSON layer and add it to the map
              L.geoJson(response,{
                pointToLayer: function(feature, latlng) {
                  return L.circleMarker(latlng, geojsonMarkerOptions);
                }
              }).addTo(map);
            }
        });
   $.ajax(
    "data/geojsons/SharedStations.geojson.json",
     {
          dataType: "json",
          success: function(response){
              var geojsonMarkerOptions = {
                radius: 3,
                fillColor: "#000",
                color: "fff",
                weight: 1, 
                opacity: 1
              };
  //create a Leaflet GeoJSON layer and add it to the map
              L.geoJson(response,{
                pointToLayer: function(feature, latlng) {
                  return L.circleMarker(latlng, geojsonMarkerOptions);
                }
              }).addTo(map);
            }
        });
   $.ajax(
    "data/geojsons/NorthStarStations.geojson.json",
     {
          dataType: "json",
          success: function(response){
              var geojsonMarkerOptions = {
                radius: 4,
                fillColor: "#FFD204",
                color: "#000066",
                weight: 1, 
                opacity: 1
              };
  //create a Leaflet GeoJSON layer and add it to the map
              L.geoJson(response,{
                pointToLayer: function(feature, latlng) {
                  return L.circleMarker(latlng, geojsonMarkerOptions);
                }
              }).addTo(map);
            }
        });
    $.ajax(
    "data/geojsons/ProposedStations.geojson.json",
     {
          dataType: "json",
          success: function(response){
              var geojsonMarkerOptions = {
                radius: 3,
                fillColor: "#fff",
                color: "#000",
                weight: 1, 
                opacity: 1
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

  var metroCensusTracts = L.geoJson (null,{
   style: function(feature) {
        return { 
          color: '#8c8c8c',
          weight: 1,
          fillOpacity: 0
      };
    }
  });
  var lakesRivers = L.geoJson (null,{
   style: function(feature) {
        return { 
          color: '#99ddff',
          weight: 1,
      };
    }
  });
  var blueLine = L.geoJson (null,{
   style: function(feature) {
        return { 
          color: '#0053A0',
          weight: 3,
          opacity: 1 
        };
    }
  });
  var redLine = L.geoJson (null,{
   style: function(feature) {
        return { 
          color: '#ED1B2E', 
          weight: 3,
          opacity: 1
        };
    }
  });
  var goldLine = L.geoJson (null,{
   style: function(feature) {
        return { 
            color: '#FBBD12', 
            weight: 3,
            dashArray: '5',
            opacity: 1
        };
    }
  });
  var greenLine = L.geoJson (null,{
   style: function(feature) {
        return { 
          color: '#028244',
          weight: 3,
          opacity: 1
        };
    }
  });
  var orangeLine = L.geoJson (null,{
   style: function(feature) {
        return {
         color: ' #F68B1F',
         weight: 3,
         dashArray: '5',
         opacity: 1 
     };
    }
  });
  var northStarLine = L.geoJson (null,{
   style: function(feature) {
        return { 
          color: '#0053A0',
          weight: 1,
          opacity: 1
        };
    }
  });
  var northStarLine2 = L.geoJson (null,{
   style: function(feature) {
        return { 
          color: '#FFD204',
          weight: 3,
          opacity: 1
        };
    }
  });
  var northStarLine3 = L.geoJson (null,{
   style: function(feature) {
        return { 
          color: '#000066',
          weight: 5,
          opacity: 1
        };
    }
  });
  var blueLineExt = L.geoJson (null,{
   style: function(feature) {
        return { 
            color: '#0053A0',
            weight: 3,
            dashArray: '5',
            opacity: 1
      };
    }
  });
  var redLineExt = L.geoJson (null,{
   style: function(feature) {
        return { 
            color: '#ED1B2E',
            weight: 3,
            dashArray: '5',
            opacity: 1
     };
    }
  });
  var greenLineExt = L.geoJson (null,{
   style: function(feature) {
        return { 
            color: ' #028244',
            weight: 3,
            opacity: 1,
            dashArray: '5'
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