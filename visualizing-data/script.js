var dataArray = [10, 30, 50];
var canvas = d3.select("body")
                .append("svg")
                .attr("width", 500)
                .attr("height", 500);
var bars = canvas.selectAll("rect")
            .data(dataArray)
            .enter()
                .append("rect")
                .attr("height", function(d) {return d;})
                .attr("width", 50)
                .attr("x", function (d, i) {return i * 100});
