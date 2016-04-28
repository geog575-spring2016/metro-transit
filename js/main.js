/* Metro Transit */

//Create the Leaflet map
function createMap(){
    //setting pan bounds
    var southWest = L.latLng(44.796356, -93.812432),
    northEast = L.latLng(45.103478, -92.812017),
    bounds = L.latLngBounds(southWest, northEast);
    //access token
    // L.mapbox.accessToken = '<pk.eyJ1IjoiZ3ZyaWV6ZW4iLCJhIjoiY2lsMTJvZ3BtMmZyeHYybTNocm1kZmg0eiJ9.mW_JTzHQbMfovynNVqHaZA>';
    //create the map and set center and zoom max/min
    var map = L.map('map', {
        center: [44.958401, -93.166810],
        zoom: 11,
        maxBounds: bounds,
        maxZoom: 13,
        minZoom: 10
    }
    );

    //make map a global variable
    window.map = map;

     var CartoDB_PositronNoLabels = L.tileLayer('http://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">CartoDB</a>',
        subdomains: 'abcd'
    }).addTo(map);


    // var CartoDB_PositronNoLabels = L.tileLayer('https://api.mapbox.com/styles/v1/gvriezen/cinjd2amr001gadniy7zysc61/tiles/%7Bz%7D/%7Bx%7D/%7By%7D?access_token=pk.eyJ1IjoiZ3ZyaWV6ZW4iLCJhIjoiY2lsMTJvZ3BtMmZyeHYybTNocm1kZmg0eiJ9.mW_JTzHQbMfovynNVqHaZA'), {
    //     attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">CartoDB</a>',
    //     subdomains: 'abcd'
    // }.addTo(map);

    // var mapboxTiles = L.tileLayer('https://api.mapbox.com/styles/v1/gvriezen/cinjd2amr001gadniy7zysc61/tiles/%7Bz%7D/%7Bx%7D/%7By%7D?access_token=pk.eyJ1IjoiZ3ZyaWV6ZW4iLCJhIjoiY2lsMTJvZ3BtMmZyeHYybTNocm1kZmg0eiJ9.mW_JTzHQbMfovynNVqHaZA', {
    //     attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">CartoDB</a>',
    //     subdomains: 'abcd'
    // }).addTo(map);
    // var mapbox = L.tileLayer ('https://api.mapbox.com/styles/v1/gvriezen/cinjd2amr001gadniy7zysc61/tiles/%7Bz%7D/%7Bx%7D/%7By%7D?access_token=pk.eyJ1IjoiZ3ZyaWV6ZW4iLCJhIjoiY2lsMTJvZ3BtMmZyeHYybTNocm1kZmg0eiJ9.mW_JTzHQbMfovynNVqHaZA'),
    // }).addTo(map);

    getData(map);


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

  //  var topoLayer = new L.TopoJSON();


  // var blueLine = $.getJSON('data/topojsons/BlueLine.topojson')
  //   .done(addTopoData);

  //   // $("blueLine").addClass( "blue" );

  // var greenLine = $.getJSON('data/topojsons/GreenLine.topojson')
  //   .done(addTopoData);

  //   // $("greenLine").addClass( "green" );

  // var goldLine = $.getJSON('data/topojsons/GoldLine.topojson')
  //   .done(addTopoData);

  //   // $("goldLine").addClass( "gold" );

  // var orangeLine = $.getJSON('data/topojsons/OrangeLine.topojson')
  //   .done(addTopoData);

  //   // $("orangeLine").addClass( "orange" );

  // var redLine = $.getJSON('data/topojsons/RedLine.topojson')
  //   .done(addTopoData);

  //   // $("redLine").addClass( "red" );

  // function addTopoData(topoData){  
  //   topoLayer.addData(topoData);
  //   topoLayer.addTo(map);
  // }
  var blueLine = L.geoJson (null,{
   style: function(feature) {
        return { color: '#0053A0' };
    }
  });
  var redLine = L.geoJson (null,{
   style: function(feature) {
        return { color: '#ED1B2E' };
    }
  });
  var goldLine = L.geoJson (null,{
   style: function(feature) {
        return { 
            color: '#FBBD12', 
            weight: 3,
            opacity: 0.5,
            dashArray: '3'

        };
    }
  });
  var greenLine = L.geoJson (null,{
   style: function(feature) {
        return { color: '#028244' };
    }
  });
  var orangeLine = L.geoJson (null,{
   style: function(feature) {
        return {
         color: ' #F68B1F',
         weight: 3,
         opacity: 0.5,
         dashArray: '3' 
     };
    }
  });
  var northStarLine = L.geoJson (null,{
   style: function(feature) {
        return { color: ' #0053A0' };
    }
  });
  var blueLineExt = L.geoJson (null,{
   style: function(feature) {
        return { 
            color: '#0053A0',
            weight: 3,
            opacity: 0.5,
            dashArray: '3'
      };
    }
  });
  var redLineExt = L.geoJson (null,{
   style: function(feature) {
        return { 
            color: '#ED1B2E',
            weight: 3,
            opacity: 0.5,
            dashArray: '3',
     };
    }
  });
  var greenLineExt = L.geoJson (null,{
   style: function(feature) {
        return { 
            color: ' #028244',
            weight: 3,
            opacity: 0.5,
            dashArray: '3',

     };
    }
  });
  // var metroCensusTracts = L.geoJson (null,{
  //  style: function(feature) {
  //       return { color: ' #5a8c8c' };
  //   }
  // });
  var blueStations = L.geoJson (null,{
   style: function(feature) {
        return { color: ' #028244' };
    }
  });
  var greenStations = L.geoJson (null,{
   style: function(feature) {
        return { color: ' #028244' };
    }
  });
  var redStations = L.geoJson (null,{
   style: function(feature) {
        return { color: ' #028244' };
    }
  });
  var sharedStations = L.geoJson (null,{
   style: function(feature) {
        return { color: ' #028244' };
    }
  });
  var northStarStations = L.geoJson (null,{
   style: function(feature) {
        return { color: ' #028244' };
    }
  });
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
  omnivore.topojson('data/topojsons/MetroCensusTracts.topojson', null, metroCensusTracts)
    .addTo(map);

// station topojsons are coming in as pngs?? 
  // omnivore.topojson('data/topojsons/BlueStations.topojson', null, blueStations)
  //   .addTo(map);
  // omnivore.topojson('data/topojsons/GreenStations.topojson', null, greenStations)
  //   .addTo(map);
  // omnivore.topojson('data/topojsons/RedStations.topojson', null, redStations)
  //   .addTo(map);
  // omnivore.topojson('data/topojsons/SharedStations.topojson', null, sharedStations)
  //   .addTo(map);
  // omnivore.topojson('data/topojsons/NorthStarStations.topojson', null, northStarStations)
  //   .addTo(map);



};




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

$(document).ready(createMap);