console.log(Math.min(...cars.map(d => d.mpg)));
console.log(d3.min(cars.map(d => d.mpg)));
console.log(d3.max(cars.map(d => d.mpg)));
console.log(d3.extent(cars.map(d => d.mpg)));

//d3.csv("cars-data.csv").then(draw);
d3.select("svg#cars-scatter")
  .style("width", 600)
  .style("height", 400);

let dispScale = d3
  .scaleLinear()
  .domain(d3.extent(cars.map(d => d.disp)))
  .range([0, 350]);

let mpgScale = d3
  .scaleLinear()
  .domain(d3.extent(cars.map(d => d.mpg)))
  .range([0, 500]);

let dotScale = d3
  .scaleSqrt()
  .domain(d3.extent(cars.map(d => d.wt)))
  .range([0, d3.max(cars.map(d => d.wt)) + 20]);

let colorScale = d3
  .scaleSequential()
  .domain(d3.extent(cars.map(d => d.cyl)))
  .interpolator(d3.interpolateCool);

d3.select("svg#cars-scatter")
  .selectAll("circle")
  .data(cars)
  .enter()
  .append("circle")
  .attr("cx", d => dispScale(d.disp))
  .attr("cy", d => mpgScale(d.mpg))
  .attr("r", d => dotScale(d.wt))
  .style("fill", d => colorScale(d.cyl))
  .style("stroke", "red");

console.log(cars.length);
