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

<<<<<<< HEAD
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
=======
};



//Import GeoJSON data
function getData(map){
    //load the data
  //  L.TopoJSON = L.GeoJSON.extend({  
  //     addData: function(jsonData) {    
  //       if (jsonData.type === "Topology") {
  //         for (key in jsonData.objects) {
  //           geojson = topojson.feature(jsonData, jsonData.objects[key]);
  //           L.GeoJSON.prototype.addData.call(this, geojson);
  //         }
  //       }    
  //       else {
  //         L.GeoJSON.prototype.addData.call(this, jsonData);
  //       }
  //     }  
  //   });

 $.ajax(
  "data/geojsons/BlueStations.geojson.json",
   {
        dataType: "json",
        success: function(response){
            var geojsonMarkerOptions = {
              radius: 5,
              fillColor: "#fff",
              color: "#0053A0",
              weight: 1, 
              opacity: 1, 
              fillOpacity: 0.8
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
              radius: 5,
              fillColor: "#fff",
              color: "#028244",
              weight: 1, 
              opacity: 1, 
              fillOpacity: 0.8
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
              radius: 5,
              fillColor: "#fff",
              color: "#ED1B2E",
              weight: 1, 
              opacity: 1, 
              fillOpacity: 0.8
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
              radius: 5,
              fillColor: "#000",
              color: "fff",
              weight: 1, 
              opacity: 1, 
              fillOpacity: 0.8
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
              radius: 5,
              fillColor: "#fff",
              color: "#0053A0",
              weight: 1, 
              opacity: 1, 
              fillOpacity: 0.8
            };
//create a Leaflet GeoJSON layer and add it to the map
            L.geoJson(response,{
              pointToLayer: function(feature, latlng) {
                return L.circleMarker(latlng, geojsonMarkerOptions);
              }
            }).addTo(map);
          }
      });
   // var topoLayer = new L.GeoJSON();


  // var blueLine = $.getJSON('data/topojsons/BlueLine.topojson')
  //   .done(addTopoData);
>>>>>>> origin/master

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

<<<<<<< HEAD
=======
  function addTopoData(topoData){  
    topoLayer.addData(topoData);
    topoLayer.addTo(map);
  }
>>>>>>> origin/master
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

<<<<<<< HEAD
=======
//no longer need to add topojsons, station markers added through geojsons in ajax callback

  // omnivore.topojson('data/topojsons/BlueStations.topojson')
  //   .addTo(map);
  // omnivore.topojson('data/topojsons/GreenStations.topojson')
  //   .addTo(map);
  // omnivore.topojson('data/topojsons/RedStations.topojson')
  //   .addTo(map);
  // omnivore.topojson('data/topojsons/SharedStations.topojson')
  //   .addTo(map);
  // omnivore.topojson('data/topojsons/NorthStarStations.topojson')
  //   .addTo(map);

// // set default image path, as leaflet did not reconize path previously
// L.Icon.Default.imagePath = 'lib/leaflet-0.7.3/images';

// var redCircles = L.circleMarker(
//   [-93.21837341791357,44.812572627890475], 500,
//   [-93.21773410422519,44.72566663579015], 500, 
//   [-93.21772070594864,44.73666730224267], 500,
//   [-93.21767341738634,44.74805838798914], 500,
// {
//   color: 'red', 
//   fillColor: '#fff',
//   fillOpacity: 0.5
// }).addTo(map);

>>>>>>> origin/master

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


<<<<<<< HEAD
=======



    // use queue.js to parallelize asynchronous data loading
//     d3_queue.queue()
//         .defer(d3.csv, "data/TransitData.csv") //load attributes from csv
//         .defer(d3.json, "data/topojsons/MetroCensusTracts.topojson")
//         .defer(d3.json, "data/topojsons/LakesAndRivers.topojson")
//         .defer(d3.json, "data/topojsons/BlueLine.topojson")
//         .defer(d3.json, "data/topojsons/BlueLineExt.topojson")
//         .defer(d3.json, "data/topojsons/GoldLine.topojson")
//         .defer(d3.json, "data/topojsons/GreenLine.topojson")
//         .defer(d3.json, "data/topojsons/GreenLineExt.topojson")
//         .defer(d3.json, "data/topojsons/NorthStarLine.topojson")
//         .defer(d3.json, "data/topojsons/OrangeLine.topojson")
//         .defer(d3.json, "data/topojsons/RedLine.topojson")
//         .defer(d3.json, "data/topojsons/RedLineExt.topojson")
//         .defer(d3.json, "data/topojsons/BlueStations.topojson")
//         .defer(d3.json, "data/topojsons/GreenStations.topojson")
//         .defer(d3.json, "data/topojsons/RedStations.topojson")
//         .defer(d3.json, "data/topojsons/NorthStarStations.topojson")
//         .defer(d3.json, "data/topojsons/SharedStations.topojson")
//         .await(callback);

//         function callback(error, transitData, censustracts, lakes, blueline, bluelineext, goldline, greenline, greenlineext, northstarline, orangeline, redline, redlineext, bluestations, greenstations, redstations, northstarstations, sharedstations){
//         //translate europe TopoJSON
//         var censusTracts = topojson.feature(censustracts, censustracts.objects.MetroCensusTracts),
//             lakesAndRivers = topojson.feature(lakes, lakes.objects.LakesAndRivers),
//             blueLine = topojson.feature(blueline, blueline.objects.BlueLine),
//         	blueLineExt = topojson.feature(bluelineext, bluelineext.objects.BlueLineExt),
//         	goldLine = topojson.feature(goldline, goldline.objects.GoldLine),
//         	greenLine = topojson.feature(greenline, greenline.objects.GreenLine),
//         	greenLineExt = topojson.feature(greenlineext, greenlineext.objects.GreenLineExt),
//         	northStarLine = topojson.feature(northstarline, northstarline.objects.NorthStarLine),
//         	orangeLine = topojson.feature(orangeline, orangeline.objects.OrangeLine)
//         	redLine = topojson.feature(redline, redline.objects.RedLine),
//         	redLineExt = topojson.feature(redlineext, redlineext.objects.RedLineExt),
//             blueStations = topojson.feature(bluestations, bluestations.objects.BlueStations),
//             greenStations = topojson.feature(greenstations, greenstations.objects.GreenStations),
//             redStations = topojson.feature(redstations, redstations.objects.RedStations),
//             northStarStations = topojson.feature(northstarstations, northstarstations.objects.NorthStarStations),
//             sharedStations = topojson.feature(sharedstations, sharedstations.objects.SharedStations);


//         //add geojsons to map
//         var tracts = map.append("path")
//             .datum(censusTracts)
//             .attr("class", "tracts")
//             .attr("d", path);

//         var hydro = map.append("path")
//             .datum(lakesAndRivers)
//             .attr("class", "hydro")
//             .attr("d", path);

//         var blue = map.append("path")
//             .datum(blueLine)
//             .attr("class", "blue")
//             .attr("d", path);

//         var blueext = map.append("path")
//             .datum(blueLineExt)
//             .attr("class", "blueext")
//             .attr("d", path);

//         var gold = map.append("path")
//             .datum(goldLine)
//             .attr("class", "gold")
//             .attr("d", path);

//         var green = map.append("path")
//             .datum(greenLine)
//             .attr("class", "green")
//             .attr("d", path);

//         var greenext = map.append("path")
//             .datum(greenLineExt)
//             .attr("class", "greenext")
//             .attr("d", path);

//         var northstar3 = map.append("path")
//             .datum(northStarLine)
//             .attr("class", "northstar3")
//             .attr("d", path);

//         var northstar2 = map.append("path")
//             .datum(northStarLine)
//             .attr("class", "northstar2")
//             .attr("d", path);

//         var northstar = map.append("path")
//             .datum(northStarLine)
//             .attr("class", "northstar")
//             .attr("d", path);

//         var orange = map.append("path")
//             .datum(orangeLine)
//             .attr("class", "orange")
//             .attr("d", path);

//         var red = map.append("path")
//             .datum(redLine)
//             .attr("class", "red")
//             .attr("d", path);

//         var redext = map.append("path")
//             .datum(redLineExt)
//             .attr("class", "redext")
//             .attr("d", path);



//         var bluestat = map.selectAll(".bluestat")
//             .data(blueStations.features)
//             .enter()
//             .append("path")
//             .attr("class", function(d){
//                 return "bluestat " + d.StationID;
//             })
//             .attr("d", path);
            
//         var greenstat = map.selectAll(".greenstat")
//             .data(greenStations.features)
//             .enter()
//             .append("path")
//             .attr("class", function(d){
//                 return "greenstat " + d.StationID;
//             })
//             .attr("d", path);  

//         var redstat = map.selectAll(".redstat")
//             .data(redStations.features)
//             .enter()
//             .append("path")
//             .attr("class", function(d){
//                 return "redstat " + d.StationID;
//             })
//             .attr("d", path);  

//         var northstarstat = map.selectAll(".northstarstat")
//             .data(northStarStations.features)
//             .enter()
//             .append("path")
//             .attr("class", function(d){
//                 return "northstarstat " + d.StationID;
//             })
//             .attr("d", path);  

//         var sharedstat = map.selectAll(".sharedstat")
//             .data(sharedStations.features)
//             .enter()
//             .append("path")
//             .attr("class", function(d){
//                 return "sharedstat " + d.StationID;
//             })
//             .attr("d", path);     
// };

    // var attrArray = ["Median age (years)", "Households", "Kids Under 18", "Car, truck, or van - Mean travel time to work (minutes)", "Public transportation - Mean travel time to work (minutes)", "Drove Alone", "Carpooled", "Public transportation (excluding taxicab)", "Bicycle", "Walked", "Other means", "Worked at home", "White", "Black or African American", "American Indian and Alaska Native", "Asian", "Native Hawaiian and Other Pacific Islander", "Some other race alone", "Two or more races", "Median household income"]; 

    // var width = window.innerWidth * 0.9,
    //  height = 700;

    // var map = d3.select("body")
    //  .append("svg")
    //  .attr("class", "map")
    //  .attr("width", width)
    //  .attr("height", height);

    // var projection = d3.geo.azimuthalEquidistant()
 //        .center([0, 44.886])
 //        .rotate([93.24, 0, 0])
 //        .scale(78000)
 //        .translate([width / 2, height / 2]);

    // var path = d3.geo.path()
    //  .projection(projection);

 //    var zoom = d3.behavior.zoom()
 //    .scaleExtent([1, 8])
 //    .on("zoom", move);

 //    var svg = d3.select("body").append("svg")
 //        .attr("width", width)
 //        .attr("height", height)
 //        .append("g")
 //        .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")")
 //        .call(zoom);

 //    var g = svg.append("g");

 //    svg.append("rect")
 //        .attr("class", "overlay")
 //        .attr("x", -width / 2)
 //        .attr("y", -height / 2)
 //        .attr("width", width)
 //        .attr("height", height);

 //    function move() {
 //      var t = d3.event.translate,
 //          s = d3.event.scale;
 //      t[0] = Math.min(width / 2 * (s - 1), Math.max(width / 2 * (1 - s), t[0]));
 //      t[1] = Math.min(height / 2 * (s - 1) + 230 * s, Math.max(height / 2 * (1 - s) - 230 * s, t[1]));
 //      zoom.translate(t);
 //      g.style("stroke-width", 1 / s).attr("transform", "translate(" + t + ")scale(" + s + ")");
 //    }

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

>>>>>>> origin/master
$(document).ready(createMap);