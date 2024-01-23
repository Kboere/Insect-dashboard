// Import necessary D3 modules
import * as d3 from "https://unpkg.com/d3?module";

// Declare variables for chart setup
const body = document.querySelector("body");

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
function updateChart(selectedLocation, selectedIdentification, selectedProvince) {
  fetch(
    `/filteredData?location=${selectedLocation}&identification=${selectedIdentification}&province=${selectedProvince}`
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
  const selectedIdentification = document.getElementById("identificationDropdown").value;
  const selectedProvince = document.getElementById("provinceDropdown").value

  updateChart(selectedLocation, selectedIdentification, selectedProvince);
});

// Function to create the initial D3.js chart
function createChart(data) {

  // Check if data is empty
  if (data.length === 0) {
    document.getElementById("chart").innerHTML = `<section class="no-data"><h1>Geen data gevonden?</h1><h3>Selecteer eerst uw vergelijkings wensen voordat u de data kunt bekijken</h3></section>`;
    return;
  }

  data.forEach((d) => {
    try {
      if (d.date && typeof d.date === "string") {
        const [day, month, year] = d.date.split("-");
        d.date = new Date(`${year}-${month}-${day}`);
      }
    } catch (error) {
      console.error("Error processing data:", d, "Error:", error);
    }
  });

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

  // Create the SVG container.
  const svg = d3
    .create("svg")
    .attr("viewBox", [0, 0, width, height])
    .attr("width", width)
    .attr("height", height)
    .attr("style", "max-width: 90%; height: auto;");

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
    .attr("stroke", "#008c38")
    .attr("stroke-width", 1.5)
    .attr("d", line);

  // Append circles for each data point with tooltips
svg.selectAll("circle")
.data(data)
.enter()
.append("circle")
.attr("cx", (d) => x(d.date))
.attr("cy", (d) => y(d.count))
.attr("r", 4) // Radius of the circle
.attr("fill", "#008c38")
.on("mouseover", (event, d) => {
  showTooltip(event, d);
  d3.select(event.currentTarget).style("cursor", "pointer");
})
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

// Function to show tooltip
function showTooltip(event, data) {
  const tooltip = d3.select("#tooltip");
  tooltip.transition().duration(200).style("opacity", 1);

  tooltip.html(`
  <h3>Wanneer is deze insect gemeten:</h3>
  Datum: ${data.date ? data.date.toLocaleDateString('nl-NL') : 'N/A'}`);
}


// Function to hide tooltip
function hideTooltip() {
  d3.select("#tooltip").transition().duration(200).style("opacity", 0);
}



