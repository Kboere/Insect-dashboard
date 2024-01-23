// Import necessary D3 modules
import * as d3 from "https://unpkg.com/d3?module";

// Data
var data = [
    { category: 'Category 1', group1: 10, group2: 15, group3: 55 },
];

// SVG container
var svg = d3.select('#groupedBarChart');

// Create a tooltip div
var tooltip = d3.select("#tooltip")

// X scale
var xScale = d3.scaleLinear()
    .domain([0, d3.max(data, d => d.group1 + d.group2 + d.group3)])
    .range([0, svg.attr('width')]);

// Y scale
var yScale = d3.scaleBand()
    .domain(data.map(d => d.category))
    .range([0, svg.attr('height')])
    .padding(0.1);

// Draw stacked bars with tooltips
svg.selectAll('.bar.group1')
    .data(data)
    .enter().append('rect')
    .attr('class', 'bar group1')
    .attr('y', d => yScale(d.category))
    .attr('x', 0)
    .attr('height', yScale.bandwidth())
    .attr('width', d => xScale(d.group1))
    .style('fill', '#41A85A')
    .on("mouseover", function (event, d) {
        tooltip.attr("class", "active")
        tooltip.html(`<h3> Aantal gemeten families:</h3> <p>${d.group3} Grasmotten families`)
    })
    .on("mouseout", function (d) {
        tooltip.attr("class" , "")
    });

svg.selectAll('.bar.group2')
    .data(data)
    .enter().append('rect')
    .attr('class', 'bar group2')
    .attr('y', d => yScale(d.category))
    .attr('x', d => xScale(d.group1))
    .attr('height', yScale.bandwidth())
    .attr('width', d => xScale(d.group2))
    .style('fill', '#8CCA9B')
    .on("mouseover", function (event, d) {
        tooltip.attr("class", "active")
        tooltip.html(`<h3> Aantal gemeten families:</h3> <p>${d.group2} Vlinders families`)
    })
    .on("mouseout", function (d) {
        tooltip.attr("class" , "")
    });

svg.selectAll('.bar.group3')
    .data(data)
    .enter().append('rect')
    .attr('class', 'bar group3')
    .attr('y', d => yScale(d.category))
    .attr('x', d => xScale(d.group1 + d.group2))
    .attr('height', yScale.bandwidth())
    .attr('width', d => xScale(d.group3))
    .style('fill', '#149333')
    .on("mouseover", function (event, d) {
        tooltip.attr("class", "active")
        tooltip.html(`<h3> Aantal gemeten families:</h3> <p>${d.group3} Spinnen families`)
    })
    .on("mouseout", function (d) {
        tooltip.attr("class" , "")
    });

// Add axes
svg.append('g')
    .call(d3.axisLeft(yScale));

svg.append('g')
    .attr('transform', 'translate(0,' + svg.attr('height') + ')')
    // .call(d3.axisBottom(xScale));


    // set the dimensions and margins of the graph
const margin = {top: 10, right: 10, bottom: 10, left: 10},
width = 420 - margin.left - margin.right,
height = 200 - margin.top - margin.bottom;

// append the svg object to the body of the page
const svgTree = d3.select("#treemap")
.append("svg")
.attr("width", width + margin.left + margin.right)
.attr("height", height + margin.top + margin.bottom)
.append("g")
.attr("transform", `translate(${margin.left}, ${margin.top})`);

// Define data in JavaScript
const dataTree = [
{ name: "Root", parent: "", value: 200 },
{ name: "A", parent: "Root", value: 200 },
{ name: "1", parent: "A", value: 50 },
{ name: "2", parent: "A", value: 20 },
{ name: "3", parent: "A", value: 35 },
{ name: "4", parent: "A", value: 65 },
{ name: "5", parent: "A", value: 30 },
];

// stratify the data: reformatting for d3.js
const root = d3.stratify()
.id(function(d) { return d.name; })
.parentId(function(d) { return d.parent; })
(dataTree);

root.sum(function(d) { return +d.value });

d3.treemap()
.size([width, height])
.padding(2)
(root);

// use this information to add rectangles:
svgTree.selectAll("rect")
.data(root.leaves())
.join("rect")
  .attr('x', function (d) { return d.x0; })
  .attr('y', function (d) { return d.y0; })
  .attr('width', function (d) { return d.x1 - d.x0; })
  .attr('height', function (d) { return d.y1 - d.y0; })
  .style("fill", "#008c38")
  .on("mouseover", function (event, d) {
    tooltip.attr("class", "active")
    tooltip.html(`<h3> Top ${d.data.name}:</h3> <p>${d.data.value}x gemeten`)
})
.on("mouseout", function (d) {
    tooltip.attr("class" , "")
});

// and to add the text labels
svgTree.selectAll("text")
.data(root.leaves())
.join("text")
  .attr("x", function(d){ return d.x0+10})
  .attr("y", function(d){ return d.y0+20})
  .text(function(d){ return d.data.name})
  .attr("font-size", "15px")
  .attr("fill", "white");
