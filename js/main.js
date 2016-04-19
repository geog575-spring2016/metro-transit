//begin script when window loads
window.onload = setMap();

function setMap(){
	var width = window.innerWidth * 0.5,
		height = 600;

	var map = d3.select("body")
		.append("svg")
		.attr("class", "map")
		.attr("width", width)
		.attr("height", height);

	var projection = d3.geo.azimuthalEquidistant()
        .center([0, 44.89])
        .rotate([93.23, 0, 0])
        .scale(65000)
        .translate([width / 2, height / 2]);

	var path = d3.geo.path()
		.projection(projection);

    //use queue.js to parallelize asynchronous data loading
    d3_queue.queue()
        .defer(d3.csv, "data/TransitData.csv") //load attributes from csv
        .defer(d3.json, "data/topojsons/MNCensusTracts.topojson")
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
        .await(callback);

        function callback(error, transitData, censustracts, lakes, blueline, bluelineext, goldline, greenline, greenlineext, northstarline, orangeline, redline, redlineext){
        //translate europe TopoJSON
        var censusTracts = topojson.feature(censustracts, censustracts.objects.MNCensusTracts),
            lakesAndRivers = topojson.feature(lakes, lakes.objects.LakesAndRivers),
            blueLine = topojson.feature(blueline, blueline.objects.BlueLine),
        	blueLineExt = topojson.feature(bluelineext, bluelineext.objects.BlueLineExt),
        	goldLine = topojson.feature(goldline, goldline.objects.GoldLine),
        	greenLine = topojson.feature(greenline, greenline.objects.GreenLine),
        	greenLineExt = topojson.feature(greenlineext, greenlineext.objects.GreenLineExt),
        	northStarLine = topojson.feature(northstarline, northstarline.objects.NorthStarLine),
        	orangeLine = topojson.feature(orangeline, orangeline.objects.OrangeLine)
        	redLine = topojson.feature(redline, redline.objects.RedLine),
        	redLineExt = topojson.feature(redlineext, redlineext.objects.RedLineExt);

        // var census = map.append("path")
        //     .datum(censusTracts)
        //     .attr("class", "census")
        //     .attr("d", path);

        //add Blue Line to map
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


    };
};