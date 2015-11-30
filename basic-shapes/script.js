d3.select("body")
.append("p")
.text("Hello There");

var canvas = d3.select("body")
.append("svg")
.attr("width", 200)
.attr("height", 200);

var circle = canvas.append("circle")
.attr("cx", 100)
.attr("cy", 100)
.attr("r", 50)
.attr("fill", "red");

var rectangle = canvas.append("rect")
.attr("width", 50)
.attr("height", 50)
.attr("fill", "blue");

var line = canvas.append("line")
.attr("x1", 10)
.attr("y1", 10)
.attr("x2", 150)
.attr("y2", 150)
.attr("stroke", "yellow")
.attr("stroke-width", 5)
