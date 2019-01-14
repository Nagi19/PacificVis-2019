var countries = {"Cote Divoire" : [-5.54, 7.54]
,"Congo" :  [15.28, -4.27]
,"England": [-0.13, 51.51]
,"Gabon": [9.45, 0.39]
,"Guniea": [-9.69, 9.95]
,"Italy": [12.48, 41.89]
,"Liberia": [-9.4, 6.45]
,"Mali": [-8.00, 12.65]
,"Nigeria": [7.49, 9.06]
,"Phillipines": [120.98, 14.60]
,"Russia": [37.62, 55.75]
,"Senegal": [-17.44, 14.69]
,"Sierra Leone": [-11.98, 8.4]
,"South Africa": [18.42, -33.93]
,"Spain": [-3.70, 40.42]
,"Sudan": [32.53, 15.55]
,"Uganda": [32.58, 0.32]
,"USA": [-77.04, 38.90]
}

var arcdata = [
	{
		sourceLocation: [15.28, -4.27],
        targetLocation: [85, 500],
		year : "2018"
        ,name: "Congo",
        continent: "africa",
        items: -1,
        virus: "zaire"
		,reported: 54,
		deaths: 33
	},
	{
		sourceLocation: [15.28, -4.27],
        targetLocation: [85, 500],
		year : "2018"
        ,name: "Congo",
        continent: "africa",
        items: 1,
        virus: "zaire"
		,reported: "ongoing",
		deaths : "ongoing"
	},
	{
		sourceLocation: [15.28, -4.27],
        targetLocation: [85, 500],
		year : "2017"
        ,name: "Congo",
        continent: "africa",
        items: 0,
        virus: "zaire"
		,reported: 8,
		deaths: 4
	},
	{
		sourceLocation: [15.28, -4.27],
        targetLocation: [85, 500],
		year : "2014"
        ,name: "Congo",
        continent: "africa",
        items: -4,
        virus: "zaire"
		,reported: 69,
		deaths: 49
	},
	{
		sourceLocation: [-15.98, 18.09],
        targetLocation: [85, 500],
		year : "2014"
        ,name: "West africa",
        continent: "africa",
        items: -3,
        virus: "zaire"
		,reported: 28610,
		deaths: 11308
	},
	{
		sourceLocation: [12.48, 41.89],
        targetLocation: [85, 500],
		year : "2014"
        ,name: "Italy",
        continent: "europe",
        items: -2,
        virus: "zaire"
		,reported: 1,
		deaths: 0
	},
	{
		sourceLocation: [-8.00, 12.65],
        targetLocation: [85, 500],
		year : "2014"
        ,name: "Mali",
        continent: "africa",
        items: -1,
        virus: "zaire"
		,reported: 8,
		deaths: 6
	},
	{
		sourceLocation: [7.49, 9.06],
        targetLocation: [85, 500],
		year : "2014"
        ,name: "Nigeria",
        continent: "africa",
        items: 1,
        virus: "zaire"
		,reported: 20,
		deaths: 8
	},
	{
		sourceLocation: [-17.44, 14.69],
        targetLocation: [85, 500],
		year : "2014"
        ,name: "Senegal",
        continent: "africa",
        items: 2,
        virus: "zaire"
		,reported: 1,
		deaths: 0
	},
	{
		sourceLocation: [-3.70, 40.42],
        targetLocation: [85, 500],
		year : "2014"
        ,name: "Spain",
        continent: "europe",
        items: 3,
        virus: "zaire"
		,reported: 1,
		deaths: 0
	},
	{
		sourceLocation: [-77.04, 38.90],
        targetLocation: [85, 500],
		year : "2014"
        ,name: "USA",
        continent: "nAmerica",
        items: 3,
        virus: "zaire"
		,reported: 4,
		deaths: 1
	},
	{
		sourceLocation: [32.58, 0.32],
        targetLocation: [85, 500],
		year : "2012"
        ,name: "Uganda",
        continent: "africa",
        items: -1,
        virus: "sudanVirus"
		,reported: 6,
		deaths: 3
	},
	{
		sourceLocation: [15.28, -4.27],
        targetLocation: [85, 500],
		year : "2012"
        ,name: "Congo",
        continent: "africa",
        items: 0,
        virus: "bundibugyo"
		,reported: 36,
		deaths: 13
	},
	{
		sourceLocation: [32.58, 0.32],
        targetLocation: [85, 500],
		year : "2012"
        ,name: "Uganda",
        continent: "africa",
        items: 1,
        virus: "sudanVirus"
		,reported: 11,
		deaths: 4
	},
		{
		sourceLocation: [32.58, 0.32],
        targetLocation: [85, 500],
		year : "2011"
        ,name: "Uganda",
        continent: "africa",
        items: 0,
        virus: "sudanVirus"
		,reported: 1,
		deaths: 1
	},
	{
		sourceLocation: [15.28, -4.27],
        targetLocation: [85, 500],
		year : "2008"
        ,name: "Congo",
        continent: "africa",
        items: 0,
        virus: "zaire"
		,reported: 32,
		deaths: 15
	},
	{
		sourceLocation: [120.98, 14.60],
        targetLocation: [85, 500],
		year : "2008"
        ,name: "Philippines",
        continent: "asia",
        items: 0,
        virus: "reston"
		,reported: 6,
		deaths: 0
	},
	{
		sourceLocation: [32.58, 0.32],
        targetLocation: [85, 500],
		year : "2007"
        ,name: "Uganda",
        continent: "africa",
        items: -1,
        virus: "bundibugyo"
		,reported: 131,
		deaths: 42
	},
	{
		sourceLocation: [15.28, -4.27],
        targetLocation: [85, 500],
		year : "2007"
        ,name: "Congo",
        continent: "africa",
        items: 1,
        virus: "zaire"
		,reported: 264,
		deaths: 187
	},
	{
		sourceLocation: [15.28, -4.27],
        targetLocation: [85, 500],
		year : "2005"
        ,name: "Congo",
        continent: "africa",
        items: 0,
        virus: "zaire"
		,reported: 12,
		deaths: 10
	},
	{
		sourceLocation: [37.62, 55.75],
        targetLocation: [85, 500],
		year : "2004"
        ,name: "Russia",
        continent: "asia",
        items: -1,
        virus: "zaire"
		,reported: 1,
		deaths: 1
	},
	{
		sourceLocation: [32.53, 15.55],
        targetLocation: [85, 500],
		year : "2004"
        ,name: "Sudan",
        continent: "africa",
        items: 1,
        virus: "sudanVirus"
		,reported: 17,
		deaths: 7
	},
		{
		sourceLocation: [15.28, -4.27],
        targetLocation: [85, 500],
		year : "2003"
        ,name: "Congo",
        continent: "africa",
        items: 0,
        virus: "zaire"
		,reported: 35,
		deaths: 29
	},
	{
		sourceLocation: [15.28, -4.27],
        targetLocation: [85, 500],
		year : "2002"
        ,name: "Congo",
        continent: "africa",
        items: 0,
        virus: "zaire"
		,reported: 143,
		deaths: 128
	},
	{
		sourceLocation: [15.28, -4.27],
        targetLocation: [85, 500],
		year : "2001"
        ,name: "Congo",
        continent: "africa",
        items: 0,
        virus: "zaire"
		,reported: 59,
		deaths: 43
	},
	{
		sourceLocation: [9.45, 0.39],
        targetLocation: [85, 500],
		year : "2001"
        ,name: "Gabon",
        continent: "africa",
        items: 0,
        virus: "zaire"
		,reported: 65,
		deaths: 53
	},
	{
		sourceLocation: [32.58, 0.32],
        targetLocation: [85, 500],
		year : "2000"
        ,name: "Uganda",
        continent: "africa",
        items: 0,
        virus: "sudanVirus"
		,reported: 425,
		deaths: 224
	},
		{
		sourceLocation: [37.62, 55.75],
        targetLocation: [85, 500],
		year : "1996"
        ,name: "Russia",
        continent: "asia",
        items: -3,
        virus: "zaire"
		,reported: 1,
		deaths: 1
	},
	{
		sourceLocation: [120.98, 14.60],
        targetLocation: [85, 500],
		year : "1996"
        ,name: "Philippines",
        continent: "asia",
        items: -2,
        virus: "reston"
		,reported: 0,
		deaths: 0
	},
	{
		sourceLocation: [-77.04, 38.90],
        targetLocation: [85, 500],
		year : "1996"
        ,name: "USA",
        continent: "nAmerica",
        items: -1,
        virus: "reston"
		,reported: 0,
		deaths: 0
	},
	{
		sourceLocation: [18.42, -33.93],
        targetLocation: [85, 500],
		year : "1996"
        ,name: "South africa",
        continent: "africa",
        items: 1,
        virus: "zaire"
		,reported: 2,
		deaths: 1
	},
	{
		sourceLocation: [9.45, 0.39],
        targetLocation: [85, 500],
		year : "1996"
        ,name: "Gabon",
        continent: "africa",
        items: 2,
        virus: "zaire"
		,reported: 60,
		deaths: 45
	},
	{
		sourceLocation: [9.45, 0.39],
        targetLocation: [85, 500],
		year : "1996"
        ,name: "Gabon",
        continent: "africa",
        items: 3,
        virus: "zaire"
		,reported: 37,
		deaths: 21
	},
	{
		sourceLocation: [15.28, -4.27],
        targetLocation: [85, 500],
		year : "1995"
        ,name: "Congo",
        continent: "africa",
        items: 0,
        virus: "zaire"
		,reported: 315,
		deaths: 250
	},
		{
		sourceLocation: [-5.54, 7.54],
        targetLocation: [85, 500],
		year : "1994"
        ,name: "Cote d’Ivoire",
        continent: "africa",
        items: -1,
        virus: "taiForest"
		,reported: 1,
		deaths: 0
	},
	{
		sourceLocation: [9.45, 0.39],
        targetLocation: [85, 500],
		year : "1994"
        ,name: "Gabon",
        continent: "africa",
        items: 1,
        virus: "zaire"
		,reported: 52,
		deaths: 31
	},
	{
		sourceLocation: [12.48, 41.89],
        targetLocation: [85, 500],
		year : "1992"
        ,name: "Italy",
        continent: "europe",
        items: 0,
        virus: "reston"
		,reported: 0,
		deaths: 0
	},
		{
		sourceLocation: [-77.04, 38.90],
        targetLocation: [85, 500],
		year : "1990"
        ,name: "USA",
        continent: "nAmerica",
        items: 0,
        virus: "reston"
		,reported: 0,
		deaths: 0
	},
	{
		sourceLocation: [120.98, 14.60],
        targetLocation: [85, 500],
		year : "1989"
        ,name: "Philippines",
        continent: "asia",
        items: -1,
        virus: "reston"
		,reported: 0,
		deaths: 0
	},
			{
		sourceLocation: [-77.04, 38.90],
        targetLocation: [85, 500],
		year : "1989"
        ,name: "USA",
        continent: "nAmerica",
        items: 1,
        virus: "reston"
		,reported: 0,
		deaths: 0
	},
	{
		sourceLocation: [32.53, 15.55],
        targetLocation: [85, 500],
		year : "1979"
        ,name: "Sudan",
        continent: "africa",
        items: 0,
        virus: "sudanVirus"
		,reported: 34,
		deaths: 22
	},
	{
		sourceLocation: [15.28, -4.27],
        targetLocation: [85, 500],
		year : "1977"
        ,name: "Congo",
        continent: "africa",
        items: 0,
        virus: "zaire"
		,reported: 1,
		deaths: 1
	},
	{
		sourceLocation: [-0.13, 51.51],
        targetLocation: [85, 500],
		year : "1976"
        ,name: "England",
        continent: "europe",
        items: 0,
        virus: "sudanVirus"
		,reported: 1,
		deaths: 0
	},
	{
		sourceLocation: [32.53, 15.55],
        targetLocation: [85, 500],
		year : "1976"
        ,name: "Sudan",
        continent: "africa",
        items: -1,
        virus: "sudanVirus"
		,reported: 284,
		deaths: 151
	},
	{
        sourceLocation : [15.28, -4.27],
        targetLocation: [85, 500],
		year : "1976"
        ,name: "Congo",
        continent: "africa",
        items: 1,
        virus: "zaire"
		,reported: 318,
		deaths: 280
	},
	];

    var virusColor = {
        "zaire" : "#ee4036",
        "reston" : "#2bb673",
        "sudanVirus" : "#00adef",
        "bundibugyo" : "#f9a33c",
        "taiForest" : "#d91b5b"
        };

var svg = d3.select("svg.map"),
    width = 1000,
    height = +svg.attr("height");

// Map and projection
var path = d3.geoPath();
var projection = d3.geoNaturalEarth()
    .scale(width / 2 / Math.PI)
    .translate([width / 2, height /2])
var path = d3.geoPath()
    .projection(projection);

// Data and color scale
var data = d3.map();



d3.queue()
    .defer(d3.json, "geo-map.json")
    .await(ready);

function updateData(self, val){

    var button = self;

    if (button)
    {
        var id_b = "." + self.id;
        $(id_b).toggle();
    }
    $(".arcs").toggle();
    $(".tarcs").toggle();
    $(".parcs").toggle();
    $(".circles").toggle();
    $(".names").toggle();


}

function ready(error, topo) {

    if (error) throw error;

var i, count;
count = 0;

var years = [1976, 1977, 1978, 1979, 1980, 1981, 1982, 1983, 1984, 1985, 1986, 1987, 1988, 1989, 1990, 1991, 1992, 1993,
            1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010,
            2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018 ];
var dataYears = [2018, 2017, 2014, 2012, 2011, 2008,
                2007, 2005, 2004, 2003, 2002, 2001, 2000,
                1996, 1995,1994, 1992, 1990, 1989, 1979,
                 1977, 1976];
for (i in years){
    var g1 = svg.append("g")
    .attr("class", "years")
    .attr("width", 2000)
    .attr("transform", "translate(20,20)");

g1.append("text")
    .attr("x",  count-15)
    .attr("y", 510)
    .style("font-size", "8px")
    .style("fill","#2f3e51")
    .attr("transform", "translate(0, 100)")
    .text(years[i]);
    if (dataYears.indexOf(years[i]) >= 0){

         svg.append("path")
        .attr("width", "2000px")
        .style("fill", "#a8a9ad")
        .attr("transform", "translate(0, 100)")
        .attr("d", rightRoundedRect(3 + count , 494,  24, 6, 4));
    }
    else{
        for (var i = 0; i< 24; i++ )
        {
        svg.append("path")
        .attr("width", "2000px")
        .style("fill", "#a8a9ad")
        .attr("transform", "translate(0, 100)")
        .attr("d", rightRoundedRect(3 + count + i, 500,  1, 1, 0));
          }
    }

    count = count + 25 ;

}
// Draw the map
svg.append("g")
    .attr("class", "countries")
    .selectAll("path")
    .data(topo.features)
    .enter().append("path")
    .style("stroke", function(d){
        if (Object.keys(countries).includes(d.properties.name ))

        {
            return "#c6ad8e"
        }
    })
    .style("stroke-width", function(d){
        if (Object.keys(countries).includes(d.properties.name ))

        {
            return "0.3px"
        }
    })
    .attr("transform", "translate(0, -150)")
    .attr("d", path);


var arcs = svg.append("g");
var thickArcs = svg.append("g");
var names = svg.append("g");
var polytest = svg.append("g").attr("class","test");


svg.attr("transform", "scale(1.15)")
for (var i in arcdata ){

    var d = arcdata[i];
    if (d) {
    var initCircle = [32,588];
    var a = polyCirleArray(polytest,d.reported,d.deaths,initCircle, d);

    var targetX = (parseInt(d.year) - 1976 + 1)*25 - 19,
    targetY = d.targetLocation[1] ;

    var dx = targetX +  d.items *10,
        dy = targetY - 185 ;

      a.attr("transform", "translate("+dx+ ","+ dy +") scale(0.3)")
       .attr("class",function(){
            return "names" + " " +d.virus + " " + d.name + " " + d.continent+ " " +"y"+d.year
        })
    }
}

names.selectAll("circle")
    .data(arcdata)
    .enter()
    .append("circle")
    .attr("class",function(d){
        return "circles" + " " +d.virus + " " + d.name + " " + d.continent+ " " +"y"+d.year
    })
    .attr("cx", function (d) { return projection(d.sourceLocation)[0] ; })
    .attr("cy", function (d) { return projection(d.sourceLocation)[1] ; })
    .attr("r", function (d) { return 2; })
    .style("stroke","#8e6d4d")
    .style("fill", "#c2b49a")
    .style("stroke-width", "1px")
    .attr("transform", "translate(0, -150)");

names.selectAll("text")
    .data(arcdata)
    .enter()
    .append("text")
    .attr("class",function(d){
        return "names" + " " +d.virus + " " + d.name + " " + d.continent+ " " +"y"+d.year
    })
    .attr("x", function (d) { return projection(d.sourceLocation)[0] + 5; })
    .attr("y", function (d) { return projection(d.sourceLocation)[1] - 5; })
    .style("font-size", "8px")
    .style("fill","#2f3e51")
    .attr("transform", "translate(0, -150)")
    .text( function(d){
            return d.name
        });

thickArcs.selectAll("path")
    .data(arcdata)
    .enter()
    .append("path")
    // .style("opacity", .9)
    .attr("class",function(d){
        return "tarcs" + " " +d.virus + " " + d.name + " " + d.continent+ " " +"y"+d.year
    })
    .style("stroke",function(d){
        return virusColor[d.virus]
    })
    .style("stroke-width", function(d){
        if (d.reported  <= 10){
            return "2px"
        }
        else if (d.reported <50)
        {return (1 * (d.reported)/25) + "px" }
        else if (d.reported <150)
        {return (1 * (d.reported)/50) + "px" }
        else
        {return "8px" }
    })
    .style("fill", "transparent")
    .on("mouseover", function(d) {

        div.transition()
            .duration(200)
            .style("opacity", .9);
        div.html(d.name)
            .style("left", (d3.event.pageX) + "px")
            .style("top", (d3.event.pageY - 28) + "px");
        })
    .on("mouseout", function(d) {
        div.transition()
            .duration(500)
            .style("opacity", 0);
    })
		.on("click",function(d){

		var selectTPath = 	d3.select(this)
		var clickClassName = selectTPath.attr("class");
		if (clickClassName.includes("select")) {
			console.log("YES");
			var selected = $('*[class^="select"]')
			for (var i = 0; i < selected.length; i++) {
				var name = selected[i].getAttribute("class");
				name = name.substr(7)
				selected[i].setAttribute("class",name);

				var arcsFade = $("path[class^='arcs']")
				var tarcsFade = $("path[class^='tarcs']")
				var circleFade = $("g[class^='names']")

				
				arcsFade.fadeTo(300, 1);
				tarcsFade.fadeTo(300, 1);
				circleFade.fadeTo(300, 1);
			}
		}
		else {
			selectTPath.attr("class","select "+clickClassName);

			var nameString = clickClassName.substr(1)

			nameString = nameString.split(' ').join('.')

			var selectPath = d3.select("path."+nameString);
			var pName = selectPath.attr("class")
			selectPath.attr("class","select "+pName);

			nameString = nameString.substr(5)
			nameString = "names."+nameString


			var selectG = d3.select("g."+nameString);
			var GName = selectG.attr("class")
			selectG.attr("class","select "+GName);

			// .attr("class","mouseoverTp");
			var arcsFade = $("path[class^='arcs']")
			var tarcsFade = $("path[class^='tarcs']")
			var circleFade = $("g[class^='names']")

			arcsFade.fadeTo(300, 0.2);
			tarcsFade.fadeTo(300, 0.2);
			circleFade.fadeTo(300, 0.2);

		}


		})
     .attr("transform", "translate(0, 100)")
    .attr('d', function(d) {
        return lngLatToArc(d, 'sourceLocation', 'targetLocation');
        });


// Define the div for the tooltip
var div = d3.select("body").append("div")
    .attr("class", "tooltip")
    .style("opacity", 0);

arcs.selectAll("path")
    .data(arcdata)
    .enter()
    .append("path")
    .attr("class",function(d){
        return "arcs" + " " +d.virus + " " + d.name + " " + d.continent +" " + "y" +d.year
    })
    .style("stroke",function(d){
        return virusColor[d.virus]
    })
    .style("stroke-width", "0.75px")
    .style("fill", "transparent")
    .on("mouseover", function(d) {
        // this.setAttribute("style",
        // '{"stroke": "#fff", \
        // "stroke-width": "1.75px",\
        // "opacity" : .6,\
        // "fill" : "transparent"\
        //     }');
        this.setAttribute("stroke", "#fff")
        // this.setAttribute("fill", "trasparent")
        // this.setAttribute("opacity", "1")

        div.transition()
            .duration(200)
            .style("opacity", .9);
        div.html(d.name)
            .style("left", (d3.event.pageX) + "px")
            .style("top", (d3.event.pageY - 28) + "px");
        })
    .on("mouseout", function(d) {
        this.setAttribute("stroke", virusColor[d.virus])
        // this.setAttribute("fill", "trasparent")
        // this.setAttribute("opacity", "1")
        div.transition()
            .duration(500)
            .style("opacity", 0);
    })
     .attr("transform", "translate(0, 100)")
    .attr('d', function(d) {
        return test(d, 'sourceLocation', 'targetLocation', 15);
        });



}

function test(d, sourceName, targetName, bend){
    var sourceLngLat = d[sourceName],
             targetLngLat = d[targetName];
    var projection = d3.geoNaturalEarth()
                    .scale(width / 2 / Math.PI)
                    .translate([width / 2, height / 2])
    var sourceXY = projection( [sourceLngLat[0], sourceLngLat[1]]),
            targetXY = projection( [targetLngLat[1] , targetLngLat[0]] );

    var sourceX = sourceXY[0]  ,
            sourceY = sourceXY[1] - 150;

    var targetX = (parseInt(d.year) - 1976 + 1)*25 - 10,
        targetY = targetLngLat[1];

    var midPoint1 = [Math.abs(-sourceX + targetX + 50)/2 , Math.abs(-sourceY + targetY )/2 -75 ]

    var startY = targetY -110 - d.reported/5;
    var startX = targetX + d.items *10;

    var a = Math.abs(sourceX - startX);
    var b = Math.abs(sourceY - startY);


    if(Math.abs(Math.abs(sourceX) - Math.abs(startX)) < 40){

       if (sourceX > startX) {
            return "M" + startX + "," + startY
            + "v" + (-midPoint1[1] - 10)
            + "a" + 10 + "," + -10 + " 0  0 1" + 10 + "," + -10
            + "h" + (a - 2 * 10)
            + "a" + 10 + "," + -10 + " 0  0 0 " + 10 + "," + -10
            + "v" + (-b + midPoint1[1] + - 80 )
            ;}
        else {

            return "M" + startX + "," + startY
            + "v" + (-midPoint1[1] - 1)
            + "a" + -10 + "," + -10 + " 0  0 0" + -10 + "," + -10
            + "h" + -(a - 2 * 10)
            + "a" + -10 + "," + -10 + " 0  0 1 " + -10 + "," + -10
            + "v" + -(b - midPoint1[1] + 80 )
            ;
        }
    }

    else if (Math.abs(Math.abs(sourceX) - Math.abs(startX)) < 50){

        if (Math.abs(sourceX) >= Math.abs(startX)){
            return "M" + startX + "," + startY
            + "v" + (-midPoint1[1] - 50)
            + "a" + 50 + "," + -50 + " 0  0 1" + 50 + "," + -50
            + "h" + (a - 2 * 50)
            + "a" + 50 + "," + -50 + " 0  0 0 " + 50 + "," + -50
            + "v" + (-b + midPoint1[1] +50 )
            ;
        }

        else{
                return "M" + startX + "," + startY
                + "v" + (-midPoint1[1] - 50)
                + "a" + 50 + "," + -50 + " 0  0 1" + 50 + "," + -50
                + "h" + -(a - 2 * 50)
                + "a" + 50 + "," + -50 + " 0  0 0 " + 50 + "," + -50
                + "v" + (-b + midPoint1[1] + 50 )
                ;
        }
          }
    else{

        if (Math.abs(sourceX) >= Math.abs(startX)){
            return "M" + startX + "," + startY
            + "v" + (-midPoint1[1] - 50)
            + "a" + 50 + "," + -50 + " 0  0 1" + 50 + "," + -50
            + "h" + (a - 2 * 50)
            + "a" + 50 + "," + -50 + " 0  0 0 " + 50 + "," + -50
            + "v" + -(b - midPoint1[1] - 50 )
            ;

        }
        else{

            return "M" + startX + "," + startY
            + "v" + (-midPoint1[1] - 50)
            + "a" + -50 + "," + -50 + " 0  0 0" + -50 + "," + -50
            + "h" + -(a - 2 * 50)
            + "a" + -50 + "," + -50 + " 0  0 1 " + -50 + "," + -50
            + "v" + -(b - midPoint1[1] - 50 )
            ;

        }}



}


function rightRoundedRect(x, y, width, height, radius, year) {
    return "M" + x + "," + (y + radius )
         + "a" + radius + "," + radius + " 0 0 1 " + radius + "," + -radius
         + "h" + (width - 2*radius)
         + "a" + radius + "," + radius + " 0 0 1 " + radius + "," + radius
         + "v" + (height -  radius)
         + "h" + ( - width)
         + "z";
  }

function lngLatToArc(d, sourceName, targetName, bend){
    bend = bend || 1;
    var sourceLngLat = d[sourceName],
             targetLngLat = d[targetName];
        var targetX = (parseInt(d.year) - 1976 + 1)*25 - 10,
            targetY = targetLngLat[1] - 6;

        var dx = targetX +  d.items *10,
                dy = targetY - 100,
                dr = Math.sqrt(dx * dx + dy * dy);
        if (d.items < 0)
        {
            var bendY =  targetY - 10;
            return "M"  +targetX + "," + targetY + "," + "C" + targetX + "," + bendY + "," + dx + "," + bendY + "," +dx + "," + dy  ;
        }
        else if (d.items > 0)
        {
            var bendY =  targetY - 10;
            return "M"  +targetX + "," + targetY + "," + "C" + targetX + "," + bendY + "," + dx + "," + bendY + "," +dx + "," + dy  ;
        }
        else {
        return "M"  +targetX + "," + targetY + "," +dx + "," + dy  ;

        }}
