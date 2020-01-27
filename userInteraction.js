let someData = {
  a: 20,
  b: 40,
  c: 80
};

d3.select("svg")
  .append("rect")
  .style("fill", "red")
  .attr("x", 210)
  .attr("y", 10)
  .attr("height", someData.a)
  .attr("width", someData.a);

d3.select("select.letterVar")
  .on("change", () => update(someData))
  .selectAll("option")
  .data(Object.keys(someData))
  .enter()
  .append("option")
  .attr("value", d => d)
  .text(d => someData[d]);

d3.select("#colorButton").on("change", changeColor);

function update(someData) {
  let letterVar = d3.select("select.letterVar").property("value");
  console.log(someData[letterVar]);
  d3.select("svg")
    .selectAll("rect")
    .transition()
    .duration(1000)
    .attr("height", someData[letterVar])
    .attr("width", someData[letterVar]);
}

function changeColor() {
  let color = $("input[name='colorButton']:active");
  console.log(color);
}
