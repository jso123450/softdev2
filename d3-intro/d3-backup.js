/* -------------- CHECK --------------  */
console.log("Cats!");

/* -------------- D3 -------------- */

var data = [4,8,15,16,23,42];

var foo = d3.scale.linear()
  .domain([0,d3.max(data)])
  .range([0,420]);

d3.select(".graph")
  .selectAll("div")
    .data(data)
  .enter().append("div")
    .style("width",function(d){
	return foo(d) + "px"; })
    .text(function(d) {return d;});

