//variables that get used in multiple functions
const welcomeSidebar = document.querySelector(".info-aside");
const sidebarAway =  document.getElementById("sidebar-away");
// const liveSidebar = document.querySelector(".live-sidebar");
// const buttonContainer = document.querySelector(".energy-buttons");
// const yearContainer = document.querySelector(".year-selector");
// const yearMenuItems = document.querySelectorAll(".year-selector > p");
// const energyItems = document.querySelectorAll(".energy-buttons > div > div");
const gemeenteNaam = document.getElementsByClassName("gemeente-titel");
// const barPoints = document.querySelectorAll('#year-progression > div');
// const svgPath = document.querySelectorAll('#svg-overlay line');
let leafletMapPane;
let currentGemeente;

function checkIfDragOne() {
	leafletMapPane = document.getElementsByClassName('leaflet-map-pane')[0].attributes[1].value;
}

//this function checks if the map is dragged or clicked
function checkIfDragTwo(gemeente) {
	if (leafletMapPane == document.getElementsByClassName('leaflet-map-pane')[0].attributes[1].value) {
		buildSidebarLeft(gemeente);
	};

	leafletMapPane = document.getElementsByClassName('leaflet-map-pane')[0].attributes[1].value;
}

function buildSidebarLeft(gemeente) {	
	// const shapeClass = document.querySelector(".sidebar-gemeente");
	const sidebarTitle = document.querySelector("aside:nth-of-type(1) h2");
	const inwonersTekst = document.getElementById("population");
	const oppervlakteTekst = document.getElementById("surface");
	// const bevDichtheidTekst = document.getElementById("density");
	// const woningenTekst = document.getElementById("houses");
	// const elektTekst = document.getElementById("electricity");

	// const shapeValues = gemeente.getAttribute('d');
	// const xCoordinate = gemeente.getBBox().x;
	// const yCoordinate = gemeente.getBBox().y;

	//fills all the text of the sidebar with info
	sidebarTitle.innerText = gemeenteNaam[0].innerText;
	inwonersTekst.innerText = document.getElementById('population-s').innerText;
	oppervlakteTekst.innerText = document.getElementById('surface-s').innerText;
	// bevDichtheidTekst.innerText = document.getElementById('density-s').innerText;
	// woningenTekst.innerText = document.getElementById('houses-s').innerText;
	// elektTekst.innerText = document.getElementById('electricity-s').innerText;
	currentGemeente = datasetArray.find(item => item.properties.Gemeentena === gemeenteNaam[0].innerText);


	//makes the gemeente shape in sidebar
	// shapeClass.setAttribute('d', shapeValues);
	// buttonContainer.style.left = '240px';
	// yearContainer.style.left = '240px';
	// yearContainer.style.left = '240px';
	// document.querySelector('aside:nth-of-type(2)').style.right = '0px';
	// initiativeSidebar.style.left = '0';

	// document.getElementById('legenda').style.left = '240px';

	//places the gemeente svg/path on point 0,0
	// if (yCoordinate < 0) {
	// 	shapeClass.style.transform = "translate(" + "-" + xCoordinate + "px," + (yCoordinate * -1) + "px)";
	// } else if (xCoordinate < 0) {
	// 	shapeClass.style.transform = "translate(" + (xCoordinate * -1) + "px, -" + yCoordinate + "px)";
	// } else {
	// 	shapeClass.style.transform = "translate(" + "-" + xCoordinate + "px, -" + yCoordinate + "px)";
	// }

};

function moveSidebar() {
	if (parseInt(getComputedStyle(welcomeSidebar).right) === 0) {
		welcomeSidebar.style.right = '-300px';
		sidebarAway.classList.add('active');
	  } else {
		// If the sidebar is currently hidden, show it
		welcomeSidebar.style.right = '0';
		sidebarAway.classList.remove('active');
	  }
};

function generateNewPath() {
	let svgGroup = document.getElementsByTagName("g")[0];

	//makes array with all datasets empty before all elements get pushed again
	datasetArray = [];

	//removes all paths before they get drawn again below
	for (let element of svgGroup.children) {
		element.remove();
	};

	//draws all gemeentes. This is copied from the leaflet code in index.html
    var layer_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0 = new L.geoJson(json_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0, {
            attribution: '',
            interactive: true,
            dataVar: 'json_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
            layerName: 'layer_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
            pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
            onEachFeature: pop_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0,
            style: style_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0_0,
        });
    map.addLayer(layer_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0);
};

sidebarAway.addEventListener("click", moveSidebar);

