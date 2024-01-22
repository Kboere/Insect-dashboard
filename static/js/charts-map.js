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
