//begin script when window loads
window.onload = setMap();

function setMap(){
	var width = window.innerWidth * 0.9,
		height = 700;

	var map = d3.select("body")
		.append("svg")
		.attr("class", "map")
		.attr("width", width)
		.attr("height", height);

	var projection = d3.geo.azimuthalEquidistant()
        .center([0, 44.886])
        .rotate([93.24, 0, 0])
        .scale(78000)
        .translate([width / 2, height / 2]);

	var path = d3.geo.path()
		.projection(projection);

    //use queue.js to parallelize asynchronous data loading
    d3_queue.queue()
        .defer(d3.csv, "data/TransitData.csv") //load attributes from csv
        .defer(d3.json, "data/topojsons/MetroCensusTracts.topojson")
        .defer(d3.json, "data/topojsons/LakesAndRivers.topojson")
        .defer(d3.json, "data/topojsons/BlueLine.topojson")
        .defer(d3.json, "data/topojsons/BlueLineExt.topojson")
        .defer(d3.json, "data/topojsons/GoldLine.topojson")
        .defer(d3.json, "data/topojsons/GreenLine.topojson")
        .defer(d3.json, "data/topojsons/GreenLineExt.topojson")
        .defer(d3.json, "data/topojsons/NorthStarLine.topojson")
        .defer(d3.json, "data/topojsons/OrangeLine.topojson")
        .defer(d3.json, "data/topojsons/RedLine.topojson")
        .defer(d3.json, "data/topojsons/RedLineExt.topojson")
        .defer(d3.json, "data/topojsons/BlueStations.topojson")
        .defer(d3.json, "data/topojsons/GreenStations.topojson")
        .defer(d3.json, "data/topojsons/RedStations.topojson")
        .defer(d3.json, "data/topojsons/NorthStarStations.topojson")
        .defer(d3.json, "data/topojsons/SharedStations.topojson")
        .await(callback);

        function callback(error, transitData, censustracts, lakes, blueline, bluelineext, goldline, greenline, greenlineext, northstarline, orangeline, redline, redlineext, bluestations, greenstations, redstations, northstarstations, sharedstations){
        //translate europe TopoJSON
        var censusTracts = topojson.feature(censustracts, censustracts.objects.MetroCensusTracts),
            lakesAndRivers = topojson.feature(lakes, lakes.objects.LakesAndRivers),
            blueLine = topojson.feature(blueline, blueline.objects.BlueLine),
        	blueLineExt = topojson.feature(bluelineext, bluelineext.objects.BlueLineExt),
        	goldLine = topojson.feature(goldline, goldline.objects.GoldLine),
        	greenLine = topojson.feature(greenline, greenline.objects.GreenLine),
        	greenLineExt = topojson.feature(greenlineext, greenlineext.objects.GreenLineExt),
        	northStarLine = topojson.feature(northstarline, northstarline.objects.NorthStarLine),
        	orangeLine = topojson.feature(orangeline, orangeline.objects.OrangeLine)
        	redLine = topojson.feature(redline, redline.objects.RedLine),
        	redLineExt = topojson.feature(redlineext, redlineext.objects.RedLineExt),
            blueStations = topojson.feature(bluestations, bluestations.objects.BlueStations),
            greenStations = topojson.feature(greenstations, greenstations.objects.GreenStations),
            redStations = topojson.feature(redstations, redstations.objects.RedStations),
            northStarStations = topojson.feature(northstarstations, northstarstations.objects.NorthStarStations),
            sharedStations = topojson.feature(sharedstations, sharedstations.objects.SharedStations);


        //add geojsons to map
        var tracts = map.append("path")
            .datum(censusTracts)
            .attr("class", "tracts")
            .attr("d", path);

        var hydro = map.append("path")
            .datum(lakesAndRivers)
            .attr("class", "hydro")
            .attr("d", path);

        var blue = map.append("path")
            .datum(blueLine)
            .attr("class", "blue")
            .attr("d", path);

        var blueext = map.append("path")
            .datum(blueLineExt)
            .attr("class", "blueext")
            .attr("d", path);

        var gold = map.append("path")
            .datum(goldLine)
            .attr("class", "gold")
            .attr("d", path);

        var green = map.append("path")
            .datum(greenLine)
            .attr("class", "green")
            .attr("d", path);

        var greenext = map.append("path")
            .datum(greenLineExt)
            .attr("class", "greenext")
            .attr("d", path);

        var northstar3 = map.append("path")
            .datum(northStarLine)
            .attr("class", "northstar3")
            .attr("d", path);

        var northstar2 = map.append("path")
            .datum(northStarLine)
            .attr("class", "northstar2")
            .attr("d", path);

        var northstar = map.append("path")
            .datum(northStarLine)
            .attr("class", "northstar")
            .attr("d", path);

        var orange = map.append("path")
            .datum(orangeLine)
            .attr("class", "orange")
            .attr("d", path);

        var red = map.append("path")
            .datum(redLine)
            .attr("class", "red")
            .attr("d", path);

        var redext = map.append("path")
            .datum(redLineExt)
            .attr("class", "redext")
            .attr("d", path);

        var bluestat = map.selectAll(".bluestat")
            .data(blueStations.features)
            .enter()
            .append("path")
            .attr("class", function(d){
                return "bluestat " + d.properties.StationID;
            })
            .attr("d", path);   
        // var regions = map.selectAll(".regions")
        //     .data(franceRegions)
        //     .enter()
        //     .append("path")
        //     .attr("class", function(d){
        //         return "regions " + d.properties.adm1_code;
        //     })
        //     .attr("d", path)          

        // var greenstat = map.append("path")
        //     .datum(greenStations)
        //     .attr("class", "greenstat")
        //     .attr("d", path);        

        // var redstat = map.append("path")
        //     .datum(redStations)
        //     .attr("class", "redstat")
        //     .attr("d", path);        

        // var northstarstat = map.append("path")
        //     .datum(northStarStations)
        //     .attr("class", "northstarstat")
        //     .attr("d", path);  

        // var sharedstat = map.append("path")
        //     .datum(sharedStations)
        //     .attr("class", "sharedstat")
        //     .attr("d", path);         

    };
};