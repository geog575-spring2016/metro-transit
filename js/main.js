/* Metro Transit */
//pseudo-global variables
var attrArray = ["Population", "Median age (years)", "Households", "Normalized Kids", "Normalized Car, truck, or van - Mean travel time to work", "Public transportation - Mean travel time to work", "Drove Alone Normalized", "Carpool Normalized", "Public Transport Normalized", "Bikes Normalized", "Walked Normalized", "Other Normalized", "Home Normalized", "White Normalized", "Black Normalized", "Am Indian Normalized", "Asian Normalized", "Hawaiian", "Other", "Two", "Median household income"]; //list of attributes
var expressed = attrArray[0]; //initial attribute

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

  // L.choropleth(geojsonData, {
  //   valueProperty: 'incidents', // which property in the features to use
  //   scale: ['white', 'red'], // chroma.js scale - include as many as you like
  //   steps: 5, // number of breaks or steps in range
  //   mode: 'q', // q for quantile, e for equidistant, k for k-means
  //   style: {
  //       color: '#fff', // border color
  //       weight: 2,
  //       fillOpacity: 0.8
  //   },
  //   onEachFeature: function(feature, layer) {
  //       layer.bindPopup(feature.properties.value)
  //   }
  // }).addTo(map)

    //   function callback(error, csvData, tracts){

    //     //translate canada TopoJSON
    //     var censusTracts = topojson.feature(tracts, tracts.objects.MetroCensusTracts).features;

    //     //create the color scale
    //     var colorScale = makeColorScale(csvData);

    //     //add enumeration units to the map
    //     setEnumerationUnits(censusTracts, map, path, colorScale);

    //     //function to create a dropdown menu for attribute selection
    //     createDropdown(csvData);
    // };

};

// function setEnumerationUnits(censusTracts, map, path, colorScale){
//     //add Canadian Provinces to map
//     var tracts = map.selectAll(".GEOID")
//         .data(censusTracts)
//         .enter()
//         .append("path")
//         .attr("class", function(d){
//             return "census tract ID" + d.properties.GEOID;
//         })
//         .attr("d", path)
//         .style("fill", function(d){
//             return choropleth(d.properties, colorScale);
//         })
//         //highlight, dehighlight, and create labels when mousing over provinces and bars
//         .on("mouseover", function(d){
//             highlight(d.properties);
//         })
//         .on("mouseout", function(d){
//             dehighlight(d.properties);
//         })
//         .on("mousemove", moveLabel);

//     //add style descriptor to each path
//     var desc = tracts.append("desc")
//         .text('{"stroke": "#fff", "stroke-width": "2px"}');
// };

//Import GeoJSON data
function getData(map){

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
            color: '#028244',
            weight: 3,
            opacity: 1,
            dashArray: '5'
     };
    }
  });
  var blueStations = L.geoJson (null,{
   style: function(feature) {
        return { color: '#0053A0' };
    }
  });
  var greenStations = L.geoJson (null,{
   style: function(feature) {
        return { color: ' #028244' };
    }
  });
  var redStations = L.geoJson (null,{
   style: function(feature) {
        return { color: '#ED1B2E' };
    }
  });
  var sharedStations = L.geoJson (null,{
   style: function(feature) {
        return { color: '#000' };
    }
  });
  var northStarStations = L.geoJson (null,{
   style: function(feature) {
        return { color: '#FFD204' };
    }
  });

  var water = 
  omnivore.topojson('data/topojsons/LakesAndRivers.topojson', null, lakesRivers)
    .addTo(map); 

  var census =  
  omnivore.topojson('data/topojsons/MetroCensusTracts.topojson', null, metroCensusTracts)
    .addTo(map);

  var railLines =
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


// // station topojsons are coming in as pngs?? 
//   omnivore.topojson('data/topojsons/BlueStations.topojson', null, blueStations)
//     .addTo(map);
//   omnivore.topojson('data/topojsons/GreenStations.topojson', null, greenStations)
//     .addTo(map);
//   omnivore.topojson('data/topojsons/RedStations.topojson', null, redStations)
//     .addTo(map);
//   omnivore.topojson('data/topojsons/SharedStations.topojson', null, sharedStations)
//     .addTo(map);
//   omnivore.topojson('data/topojsons/NorthStarStations.topojson', null, northStarStations)
//     .addTo(map);

//function to create color scale generator
function makeColorScale(data){
    var colorClasses = ['#f7f7f7','#cccccc','#969696','#636363','#252525'];

    //create color scale generator
    var colorScale = d3.scale.threshold()
        .range(colorClasses);

    //build array of all values of the expressed attribute
    var domainArray = [];
    for (var i=0; i<data.length; i++){
        var val = parseFloat(data[i][expressed]);
        domainArray.push(val);
    };

    //cluster data using ckmeans clustering algorithm to create natural breaks
    var clusters = ss.ckmeans(domainArray, 5);
    //reset domain array to cluster minimums
    domainArray = clusters.map(function(d){
        return d3.min(d);
    });
    //remove first value from domain array to create class breakpoints
    domainArray.shift();

    //assign array of last 4 cluster minimums as domain
    colorScale.domain(domainArray);

    return colorScale;
};

//function to create a dropdown menu for attribute selection
function createDropdown(csvData){
    //add select element
    var dropdown = d3.select("body")
        .append("select")
        .attr("class", "dropdown")
        .on("change", function(){
            changeAttribute(this.value, csvData)
        });

    //add initial option
    var titleOption = dropdown.append("option")
        .attr("class", "titleOption")
        .attr("disabled", "true")
        .text("Select Resource");

    //add attribute name options
    var attrOptions = dropdown.selectAll("attrOptions")
        .data(attrArray)
        .enter()
        .append("option")
        .attr("value", function(d){ return d })
        .text(function(d){ return d });
};

};


$(document).ready(createMap);