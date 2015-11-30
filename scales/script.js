var dataArray = [10, 30, 50, 100];

var canvasSize = 500;

var scale = d3.scale.linear()
                .domain([0, 100])
                .range([0, canvasSize]);

var colorScale = d3.scale.linear()
                    .domain([0, 60])
                    .range(["red", "green"]);

var canvas = d3.select("body")
                .append("svg")
                .attr("width", canvasSize)
                .attr("height", canvasSize);

var bars = canvas.selectAll("rect")
            .data(dataArray)
            .enter()
                .append("rect")
                .attr("height", function(d) {return scale(d);})
                .attr("width", 50)
                .attr("fill", function(d) { return colorScale(d); })
                .attr("x", function (d, i) {return i * 100});
