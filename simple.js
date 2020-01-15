d3.select("svg").style("background-color", "skyblue");

d3.select("svg")
  .append("rect")
  .attr("x", 50)
  .attr("y", 50)
  .attr("width", 200)
  .attr("height", 100)
  .style("fill", "transparent")
  .style("stroke", "red")
  .style("stroke-width", 5);

d3.select("h2").text("A really simple description");

d3.select("h2").style("color", "red");

d3.select("#simple-pic")
  .select("circle")
  .style("fill", "yellow");

d3.select("#simple-pic")
  .select("text")
  .remove();

d3.select("svg")
  .append("circle")
  .attr("cx", 100)
  .attr("cy", 100)
  .attr("r", 30)
  .style("fill", "blue");

console.log("console text");

d3.select("svg").style("opacity", 0.3);

let nextX = 50;
for (let i = 1; i < 11; i++) {
  d3.select("svg")
    .append("circle")
    .attr("cx", nextX)
    .attr("cy", 175)
    .attr("r", 17 + i)
    .style("fill", "transparent")
    .style("stroke", "red");
  nextX += 35;
}

let rectX = 50;
for (let i = 1; i < 7; i++) {
  d3.select("svg")
    .append("rect")
    .attr("x", rectX)
    .attr("y", 20)
    .attr("width", 20)
    .attr("height", 20);
  if (i < 4) {
    d3.select("svg")
      .select("rect")
      .style("fill", "blue");
  }
  rectX += 35;
}

d3.select("#picture-description").text("A not so simple picture");
