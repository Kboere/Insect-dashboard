// Import necessary D3 modules
import * as d3 from "https://unpkg.com/d3?module";

// Declare variables for chart setup
const body = document.querySelector("body");
const modeSwitch = body.querySelector(".toggle-switch");

// Function to aggregate data based on date
function aggregateData(data) {
  const aggregatedData = [];
  const counts = new Map();

  // Adjusted the date parsing format
  const parseDate = d3.timeParse("%-d-%-m-%Y");

  data.forEach((d) => {
    try {
      if (d.date && typeof d.date === "string") {
        const [day, month, year] = d.date.split("-");
        const date = new Date(`${year}-${month}-${day}`);
        if (counts.has(date)) {
          counts.set(date, counts.get(date) + 1);
        } else {
          counts.set(date, 1);
        }
      }
    } catch (error) {
      console.error("Error processing data:", d, "Error:", error);
    }
  });

  counts.forEach((count, date) => {
    aggregatedData.push({ date, count });
  });

  return aggregatedData;
}

// Function to update the chart based on selected values
function updateChart(selectedLocation, selectedIdentification) {
  fetch(
    `/filteredData?location=${selectedLocation}&identification=${selectedIdentification}`
  )
    .then((response) => response.json())
    .then((filteredData) => {
      // Aggregate the filtered data
      const aggregatedData = aggregateData(filteredData);
      // Update the chart using the aggregated data
      createChart(aggregatedData);
    })
    .catch((error) => console.error("Error updating chart:", error));
}

// Add an event listener to the "Update Chart" button
document.getElementById("updateBtn").addEventListener("click", function () {
  const selectedLocation = document.getElementById("locationDropdown").value;
  const selectedIdentification = document.getElementById(
    "identificationDropdown"
  ).value;

  updateChart(selectedLocation, selectedIdentification);
});

// Function to create the initial D3.js chart
function createChart(data) {
  data.forEach((d) => {
    try {
      if (d.date && typeof d.date === "string") {
        const [day, month, year] = d.date.split("-");
        d.date = new Date(`${year}-${month}-${day}`);
        console.log("Parsed date:", d.date);
      }
    } catch (error) {
      console.error("Error processing data:", d, "Error:", error);
    }
  });

  console.log("received data:", data);

  // Specify the chart’s dimensions.
  const width = 1800;
  const height = 700;
  const marginTop = 20;
  const marginRight = 20;
  const marginBottom = 30;
  const marginLeft = 60; // Increased margin for better visibility

  // Create the horizontal and vertical scales.
  const x = d3
    .scaleTime()
    .domain(d3.extent(data, (d) => d.date))
    .range([marginLeft, width - marginRight]);

  console.log("X Scale Domain:", x.domain());

  const y = d3
    .scaleLinear()
    .domain([0, d3.max(data, (d) => d.count)])
    .nice()
    .range([height - marginBottom, marginTop]);

  // Create the horizontal axis generator, called at startup and when zooming.
  const xAxis = (g, x) =>
    g.call(
      d3
        .axisBottom(x)
        .ticks(width / 80)
        .tickSizeOuter(0)
    );

  // The line generator.
  const line = d3
    .line()
    .defined((d) => !isNaN(d.count)) // Exclude NaN values
    .x((d) => x(d.date))
    .y((d) => y(d.count));

  console.log("Line generator:", line);

  // Create the SVG container.
  const svg = d3
    .create("svg")
    .attr("viewBox", [0, 0, width, height])
    .attr("width", width)
    .attr("height", height)
    .attr("style", "max-width: 100%; height: auto;");

  console.log("Created SVG container:", svg);

  // Create a clip-path with a unique ID.
  const clip = svg
    .append("clipPath")
    .attr("id", "clip")
    .append("rect")
    .attr("x", marginLeft)
    .attr("y", marginTop)
    .attr("width", width - marginLeft - marginRight)
    .attr("height", height - marginTop - marginBottom);

  // Create the line.
  const path = svg
    .append("path")
    .datum(data)
    .attr("clip-path", "url(#clip)")
    .attr("fill", "none")
    .attr("stroke", "steelblue")
    .attr("stroke-width", 1.5)
    .attr("d", line);

  console.log("Created line:", path);

  // Append circles for each data point with tooltips
svg.selectAll("circle")
.data(data)
.enter()
.append("circle")
.attr("cx", (d) => x(d.date))
.attr("cy", (d) => y(d.count))
.attr("r", 4) // Radius of the circle
.attr("fill", "steelblue")
.on("mouseover", (event, d) => showTooltip(event, d))
.on("mouseout", hideTooltip);


  // Append the horizontal axis.
  const gx = svg
    .append("g")
    .attr("transform", `translate(0,${height - marginBottom})`)
    .call(xAxis, x);

  // Append the vertical axis.
  svg
    .append("g")
    .attr("transform", `translate(${marginLeft},0)`)
    .call(d3.axisLeft(y).ticks(null, "s"))
    .call((g) => g.select(".domain").remove())
    .call((g) =>
      g
        .select(".tick:last-of-type text")
        .clone()
        .attr("x", 3)
        .attr("text-anchor", "start")
        .attr("font-weight", "bold")
        .text("Count")
    );

  // Append the chart to the HTML body or any other container.
  document.getElementById("chart").innerHTML = "";
  document.getElementById("chart").appendChild(svg.node());
}

// Fetch the data from the server and call the initial chart creation function
fetch("/filteredData")
  .then((response) => response.json())
  .then((data) => {
    // Aggregate the initial data
    const aggregatedData = aggregateData(data);
    // Call the initial chart creation function with the aggregated data
    createChart(aggregatedData);
  })
  .catch((error) => console.error("Error fetching data:", error));

modeSwitch.addEventListener("click", () => {
  body.classList.toggle("dark");
});

// Function to show tooltip
function showTooltip(event, data) {
  const tooltip = d3.select("#tooltip");
  tooltip.transition().duration(200).style("opacity", 0.9);

  // Check if data.probability exists before using it
  const probabilityText = data.object_order_probability !== undefined ? `<br>Probability: ${data.object_order_probability.toFixed(3)}` : '';

  tooltip.html(`Date: ${data.date.toDateString()}<br>${probabilityText}`)
    .style("left", (event.pageX) + "px")
    .style("top", (event.pageY - 28) + "px");
}


// Function to hide tooltip
function hideTooltip() {
  d3.select("#tooltip").transition().duration(500).style("opacity", 0);
}



const dataset = [
  { name: "Direct", count: 2742 },
  { name: "Facebook", count: 2242 },
  { name: "Pinterest", count: 3112 }
];

let total = 0;

dataset.forEach((d) => {
  total += d.count;
});

const pie = d3.pie()
  .value((d) => d.count)
  .sort(null);

const w = 300;
const h = 300;

const outerRadiusArc = w / 2;
const innerRadiusArc = 100;
const shadowWidth = 10;
const outerRadiusArcShadow = innerRadiusArc + 1;
const innerRadiusArcShadow = innerRadiusArc - shadowWidth;

const color = d3.scaleOrdinal()
  .range(["#1ECAD3", "#00A0C6", "#F7A92E"]);

const svg = d3
  .select("#pie-chart")
  .append("svg")
  .attr("width", w)
  .attr("height", h)
  .attr("class", "shadow")
  .append("g")
  .attr("transform", `translate(${w / 2},${h / 2})`);

const createPieChart = (
  svg,
  outerRadius,
  innerRadius,
  fillFunction,
  className
) => {
  const arc = d3.arc().innerRadius(outerRadius).outerRadius(innerRadius);

  const path = svg
    .selectAll(`.${className}`)
    .data(pie(dataset))
    .enter()
    .append("path")
    .attr("class", className)
    .attr("d", arc)
    .attr("fill", fillFunction);

  path
    .transition()
    .duration(1000)
    .attrTween("d", (d) => {
      const interpolate = d3.interpolate({ startAngle: 0, endAngle: 0 }, d);
      return (t) => arc(interpolate(t));
    });
};

createPieChart(
  svg,
  outerRadiusArc,
  innerRadiusArc,
  (d) => color(d.data.name),
  "path1"
);

createPieChart(
  svg,
  outerRadiusArcShadow,
  innerRadiusArcShadow,
  (d) => {
    const c = d3.hsl(color(d.data.name));
    return d3.hsl(c.h + 5, c.s - 0.07, c.l - 0.15);
  },
  "path2"
);

const addText = (text, y, size) => {
  svg
    .append("text")
    .text(text)
    .attr("text-anchor", "middle")
    .attr("y", y)
    .style("fill", "#929DAF")
    .style("font-size", size);
};

const restOfTheData = () => {
  addText(numberWithCommas(total), 0, "30px");
  addText("This Year", "20px");
};

setTimeout(restOfTheData, 1000);

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}


