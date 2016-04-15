//begin script when window loads
window.onload = setMap();

function setMap(){
	var width = window.innerWidth * 0.5,
		height = 560;

	var map = d3.select("body")
		.append("svg")
		.attr("class", "map")
		.attr("width", width)
		.attr("height", height);

	var projection = d3.geo.azimuthalEquidistant()
		.center([0, 44.9686414])
		.rotate([93.27,0,0])
		.scale(200000)
		.translate([width / 2, height / 2]);

	var path = d3.geo.path()
		.projection(projection);

    //use queue.js to parallelize asynchronous data loading
    d3_queue.queue()
        .defer(d3.csv, "../data/___.csv") //load attributes from csv
        .defer(d3.json, "../data/topojsons/BlueLine.topojson")
        // .defer(d3.json, "data/topojsons/BlueLineExt.topojson")
        // .defer(d3.json, "data/topojsons/GoldLine.topojson")
        // .defer(d3.json, "data/topojsons/GreenLine.topojson")
        // .defer(d3.json, "data/topojsons/GreenLineExt.topojson")
        // .defer(d3.json, "data/topojsons/NorthStarLine.topojson")
        // .defer(d3.json, "data/topojsons/OrangeLine.topojson")
        // .defer(d3.json, "data/topojsons/RedLine.topojson")
        // .defer(d3.json, "data/topojsons/RedLineExt.topojson")
        .await(callback);

        function callback(error, csvData, blueline){
        //translate europe TopoJSON
        var blueLine = topojson.feature(blueline, blueline.objects.BlueLine);
        	// blueLineExt = topojson.feature(bluelineext, bluelineext.objects.BlueLineExt),
        	// goldLine = topojson.feature(goldline, goldline.objects.GoldLine),
        	// greenLine = topojson.feature(greenline, greenline.objects.GreenLine),
        	// greenLineExt = topojson.feature(greenlineext, greenlineext.objects.GreenLineExt),
        	// northStarLine = topojson.feature(northstarline, northstarline.objects.NorthStarLine),
        	// orangeLine = topojson.feature(orangeline, orangeline.objects.OrangeLine)
        	// redLine = topojson.feature(redline, redline.objects.RedLine),
        	// redLineExt = topojson.feature(redlineext, redlineext.objects.RedLineExt);

        console.log(blueline)

        //add Blue Line to map
        var blue = map.append("path")
            .datum(blueLine)
            .attr("class", "blue")
            .attr("d", path);
    };
