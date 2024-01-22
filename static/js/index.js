//variables that get used in multiple functions
const welcomeSidebar = document.querySelector(".info-aside");
const sidebarAway = document.getElementById("sidebar-away");
const gemeenteNaam = document.getElementsByClassName("gemeente-titel");
let leafletMapPane;
let currentGemeente;

document.addEventListener("DOMContentLoaded", function () {
  // Animate loader off screen
  var loader = document.querySelector(".se-pre-con");
  loader.style.transition = "opacity 0.5s ease";
  loader.style.opacity = "0";

  // Optionally, you can add a delay before removing the loader element
  setTimeout(function () {
    loader.style.display = "none";
  }, 10); // Adjust the delay time as needed
});

function checkIfDragOne() {
  leafletMapPane =
    document.getElementsByClassName("leaflet-map-pane")[0].attributes[1].value;
}

//this function checks if the map is dragged or clicked
function checkIfDragTwo(gemeente) {
  if (
    leafletMapPane ==
    document.getElementsByClassName("leaflet-map-pane")[0].attributes[1].value
  ) {
    buildSidebarLeft(gemeente);
  }

  leafletMapPane =
    document.getElementsByClassName("leaflet-map-pane")[0].attributes[1].value;
}

function buildSidebarLeft(gemeente) {
  const sidebarTitle = document.querySelector("aside:nth-of-type(1) h2");
  const inwonersTekst = document.getElementById("population");
  const oppervlakteTekst = document.getElementById("surface");

  //fills all the text of the sidebar with info
  sidebarTitle.innerText =
    `Statistieken ` + gemeenteNaam[0].innerText + ` 2022`;
  inwonersTekst.innerText = document.getElementById("population-s").innerText;
  oppervlakteTekst.innerText = document.getElementById("surface-s").innerText;
  currentGemeente = datasetArray.find(
    (item) => item.properties.Gemeentena === gemeenteNaam[0].innerText
  );
}

function moveSidebar() {
  if (parseInt(getComputedStyle(welcomeSidebar).right) === 0) {
    welcomeSidebar.style.right = "-300px";
    sidebarAway.classList.add("active");
  } else {
    // If the sidebar is currently hidden, show it
    welcomeSidebar.style.right = "0";
    sidebarAway.classList.remove("active");
  }
}

function togglePage(page) {
	setTimeout(function () {
	  window.location.href = page;
	}, 500); // 500 milliseconds delay
  }

sidebarAway.addEventListener("click", moveSidebar);
