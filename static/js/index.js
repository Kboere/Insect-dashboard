//variables that get used in multiple functions
const initiativeSidebar = document.querySelector("aside");
const liveSidebar = document.querySelector(".live-sidebar");
const buttonContainer = document.querySelector(".energy-buttons");
const yearContainer = document.querySelector(".year-selector");
const yearMenuItems = document.querySelectorAll(".year-selector > p");
const energyItems = document.querySelectorAll(".energy-buttons > div > div");
const gemeenteNaam = document.getElementsByClassName("gemeente-titel");
const barPoints = document.querySelectorAll('#year-progression > div');
const svgPath = document.querySelectorAll('#svg-overlay line');
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
	const shapeClass = document.querySelector(".sidebar-gemeente");
	const sidebarTitle = document.querySelector("aside:nth-of-type(1) h2");
	// const gemeenteNaam = document.getElementsByClassName("gemeente-titel");
	const inwonersTekst = document.getElementById("population");
	const oppervlakteTekst = document.getElementById("surface");
	const bevDichtheidTekst = document.getElementById("density");
	const woningenTekst = document.getElementById("houses");
	const elektTekst = document.getElementById("electricity");
	// const gasTekst = document.getElementById("gas");
	// const bedrijvenTekst = document.getElementById("businesses");
	// const autosTekst = document.getElementById("cars");
	const shapeValues = gemeente.getAttribute('d');
	const xCoordinate = gemeente.getBBox().x;
	const yCoordinate = gemeente.getBBox().y;

	//fills all the text of the sidebar with info
	sidebarTitle.innerText = gemeenteNaam[0].innerText;
	inwonersTekst.innerText = document.getElementById('population-s').innerText;
	oppervlakteTekst.innerText = document.getElementById('surface-s').innerText;
	bevDichtheidTekst.innerText = document.getElementById('density-s').innerText;
	woningenTekst.innerText = document.getElementById('houses-s').innerText;
	elektTekst.innerText = document.getElementById('electricity-s').innerText;
	// gasTekst.innerText = document.getElementById('gas-s').innerText;
	// bedrijvenTekst.innerText = document.getElementById('businesses-s').innerText;
	// autosTekst.innerText = document.getElementById('cars-s').innerText;
	currentGemeente = datasetArray.find(item => item.properties.Gemeentena === gemeenteNaam[0].innerText);


	//makes the gemeente shape in sidebar
	shapeClass.setAttribute('d', shapeValues);
	buttonContainer.style.left = '240px';
	yearContainer.style.left = '240px';
	yearContainer.style.left = '240px';
	document.querySelector('aside:nth-of-type(2)').style.right = '0px';
	initiativeSidebar.style.left = '0';

	// if (window.innerHeight < 800) {
		document.getElementById('legenda').style.left = '240px';
	// } 

	//places the gemeente svg/path on point 0,0
	if (yCoordinate < 0) {
		shapeClass.style.transform = "translate(" + "-" + xCoordinate + "px," + (yCoordinate * -1) + "px)";
	} else if (xCoordinate < 0) {
		shapeClass.style.transform = "translate(" + (xCoordinate * -1) + "px, -" + yCoordinate + "px)";
	} else {
		shapeClass.style.transform = "translate(" + "-" + xCoordinate + "px, -" + yCoordinate + "px)";
	}

	// buildSidebarRight();
	// createGraph(gemeenteNaam[0].innerText);
};

// function buildSidebarRight() {
// 	const sidebarTitle = document.querySelector("aside:nth-of-type(2) h2 span:nth-of-type(1)");
// 	const sidebarJaar = document.querySelector("aside:nth-of-type(2) > p span");
// 	const energyStats = document.querySelectorAll(".energy-container span");
// 	const totaalVerbruik = document.getElementById("totaal-verbruik");
// 	const zonneStats = document.getElementById('zonnestroom-' + currentYear).innerText;
// 	const windStats = document.getElementById('windstroom-' + currentYear).innerText;
// 	const biogasStats = document.getElementById('biogasstroom-' + currentYear).innerText;
// 	const totaalStats = document.getElementById('totaal-verbruik-' + currentYear).innerText;

// 	energyStats[0].innerText = zonneStats;
// 	energyStats[1].innerText = windStats.replace(/,|\./g, '');
// 	energyStats[2].innerText = biogasStats;

// 	if (+(totaalStats.replace(/,|\./g, '')) - (+(windStats.replace(/,|\./g, '')) + +(biogasStats.replace(/,|\./g, '')) + +zonneStats) > 0) {
// 		energyStats[3].innerText = +(totaalStats.replace(/,|\./g, '')) - (+(windStats.replace(/,|\./g, '')) + +(biogasStats.replace(/,|\./g, '')) + +zonneStats);
// 	} else {
// 		energyStats[3].innerText = '-';
// 	}

// 	sidebarTitle.innerText = gemeenteNaam[0].innerText;
// 	totaalVerbruik.innerText = totaalStats.replace(/,|\./g, '') + ' TJ';
// 	sidebarJaar.innerText = currentYear;
// };

// function createGraph() {
// 	const energyTitle = document.querySelector('aside:nth-of-type(2) > div:nth-of-type(2) h3');
// 	const yAxis = document.querySelectorAll('#y-axis p');
// 	const chartHeight = 90;
// 	let maxValue;

// 	if (propertyValue === "groenPercentage/") {
// 		maxValue = 100;
// 		energyTitle.innerText = "Green energy";
// 		yAxis[0].innerText = '100%';
// 		yAxis[1].innerText = '75%';
// 		yAxis[2].innerText = '50%';
// 		yAxis[3].innerText = '25%';
// 		yAxis[4].innerText = '0%';
// 	} else if (propertyValue === "zonneStroomTj/") {
// 		maxValue = 209;
// 		energyTitle.innerText = "Solar energy";
// 		yAxis[0].innerText = '200 TJ';
// 		yAxis[1].innerText = '150 TJ';
// 		yAxis[2].innerText = '100 TJ';
// 		yAxis[3].innerText = '50 TJ';
// 		yAxis[4].innerText = '0 TJ';
// 	} else if (propertyValue === "windStroomTj/") {
// 		maxValue = 3500;
// 		energyTitle.innerText = "Wind energy";
// 		yAxis[0].innerText = '3500 TJ';
// 		yAxis[1].innerText = '2625 TJ';
// 		yAxis[2].innerText = '1750 TJ';
// 		yAxis[3].innerText = '875 TJ';
// 		yAxis[4].innerText = '0 TJ';
// 	} else if (propertyValue === "biogasStroomTj/") {
// 		maxValue = 250;
// 		energyTitle.innerText = "Biogas energy";
// 		yAxis[0].innerText = '260 TJ';
// 		yAxis[1].innerText = '195 TJ';
// 		yAxis[2].innerText = '130 TJ';
// 		yAxis[3].innerText = '65 TJ';
// 		yAxis[4].innerText = '0 TJ';
// 	}

// 	for (let i = 0; i < barPoints.length; i++) {
// 		if (currentGemeente.properties['complete_dataset_' + propertyValue + (2015 + i)] !== '-') {
// 			barPoints[i].style.marginBottom = ((currentGemeente.properties['complete_dataset_' + propertyValue + (2015 + i)]) / maxValue) * chartHeight - 3 + 'px';
// 			barPoints[i].style.opacity = '1';
// 		} else {
// 			barPoints[i].style.opacity = '0';
// 		}
// 	};

// 	createLines(barPoints);
// };

// function createLines(barPoints) {
// 	const svgItem = document.getElementById('svg-overlay');

// 	for (let i = 0; i < svgPath.length; i++) {
// 		if (barPoints[i].style.opacity === '0') {
// 			svgPath[i].style.opacity = '0';
// 		} else {
// 			svgPath[i].setAttribute('y1', (barPoints[i].offsetTop - 41));
// 			svgPath[i].setAttribute('y2', (barPoints[i + 1].offsetTop - 41));
// 			svgPath[i].style.opacity = '1';

// 			if (barPoints[2].style.opacity === '0'){
// 				svgPath[1].style.opacity = '0';
// 			}

// 			if (barPoints[3].style.opacity === '0'){
// 				svgPath[2].style.opacity = '0';
// 			}
// 		}
// 	};

// 	colorGraphLines();
// };

// function colorGraphLines(){
// 	if (propertyValue === "groenPercentage/") {
// 		for (let i = 0; i < svgPath.length; i++) {
// 	    	svgPath[i].setAttribute('stroke', '#6bd679');
// 	    	barPoints[i].style.backgroundColor = '#2ea83e';
// 	    	barPoints[3].style.backgroundColor = '#2ea83e';
//     	}
// 	} else if (propertyValue === "windStroomTj/") {
// 		for (let i = 0; i < svgPath.length; i++) {
// 	    	svgPath[i].setAttribute('stroke', '#69bffd');
// 	    	barPoints[i].style.backgroundColor = '#3597f3';
// 	    	barPoints[3].style.backgroundColor = '#3597f3';
//     	}
// 	} else if (propertyValue === "zonneStroomTj/") {
// 		for (let i = 0; i < svgPath.length; i++) {
// 	    	svgPath[i].setAttribute('stroke', '#fed83e');
// 	    	barPoints[i].style.backgroundColor = '#ff9900';
// 	    	barPoints[3].style.backgroundColor = '#ff9900';
//     	}
// 	} else if (propertyValue === "biogasStroomTj/") {
// 		for (let i = 0; i < svgPath.length; i++) {
// 	    	svgPath[i].setAttribute('stroke', '#a0aec9');
// 	    	barPoints[i].style.backgroundColor = '#44518e';
// 	    	barPoints[3].style.backgroundColor = '#44518e';
//     	}
// 	}
// };

function moveSidebar() {
	initiativeSidebar.style.left = '-300px';
	liveSidebar.style.right = '-320px';
	buttonContainer.style.left = '0';
	yearContainer.style.left = '0';

	// if (window.innerHeight < 800) {
		document.getElementById('legenda').style.left = '0';
	// }
};

function changeYear(jaarItem) {
	const jaar = jaarItem.innerText;

	// removes active class from all years
	yearMenuItems.forEach(item => {
		if (item.classList.contains('active-year')) {
			item.classList.remove('active-year')
		}
	});

	// adds active year class to correct year
	jaarItem.classList.add('active-year');
 
	//updates year
	currentYear = jaar;
	generateNewPath();
};

function colorEnergyButton(buttonItem) {
	energyItems.forEach(item => {
		if (item.classList.contains('active-energy')) {
			item.classList.remove('active-energy')
		}
	});

	// adds active energy class to correct button
	buttonItem.classList.add('active-energy');
};

function switchEnergy() {
	const legendaColor = document.querySelectorAll(".color-container > div .legenda-color");
	const legendaTitle = document.querySelector("#legenda > p");
	const legendaNumbers = document.querySelectorAll(".color-container > div p");

	if (propertyValue === "groenPercentage/") {
		legendaTitle.innerText = "Green energy percentage";
		legendaColor[1].style.backgroundColor = "#baf0c7";
		legendaColor[2].style.backgroundColor = "#6ae684";
		legendaColor[3].style.backgroundColor = "#3add56";
		legendaColor[4].style.backgroundColor = "#38d440";
		legendaColor[5].style.backgroundColor = "#30b035";
		legendaNumbers[1].innerText = "5%"
		legendaNumbers[2].innerText = "15%"
		legendaNumbers[3].innerText = "25%"
		legendaNumbers[4].innerText = "35%"
		legendaNumbers[5].innerText = ">45%"
	} else if (propertyValue === "windStroomTj/") {
		legendaTitle.innerText = "Consumption in TJ";
		legendaColor[1].style.backgroundColor = "#edf7ff";
		legendaColor[2].style.backgroundColor = "#c6e6fe";
		legendaColor[3].style.backgroundColor = "#5eb9fc";
		legendaColor[4].style.backgroundColor = "#3b76f9";
		legendaColor[5].style.backgroundColor = "#0a60d5";
		legendaNumbers[1].innerText = "10"
		legendaNumbers[2].innerText = "50"
		legendaNumbers[3].innerText = "250"
		legendaNumbers[4].innerText = "1250"
		legendaNumbers[5].innerText = "2500"
	} else if (propertyValue === "zonneStroomTj/") {
		legendaTitle.innerText = "Consumption in TJ";
		legendaColor[1].style.backgroundColor = "#f6f5e2";
		legendaColor[2].style.backgroundColor = "#f9ec84";
		legendaColor[3].style.backgroundColor = "#fce54e";
		legendaColor[4].style.backgroundColor = "#ffab2c";
		legendaColor[5].style.backgroundColor = "#ff9900";
		legendaNumbers[1].innerText = "0"
		legendaNumbers[2].innerText = "50"
		legendaNumbers[3].innerText = "100"
		legendaNumbers[4].innerText = "150"
		legendaNumbers[5].innerText = "200"
	} else if (propertyValue === "biogasStroomTj/") {
		legendaTitle.innerText = "Consumption in TJ";
		legendaColor[1].style.backgroundColor = "#FFF";
		legendaColor[2].style.backgroundColor = "#95a1c1";
		legendaColor[3].style.backgroundColor = "#46538f";
		legendaColor[4].style.backgroundColor = "#314083";
		legendaColor[5].style.backgroundColor = "#24337a";
		legendaNumbers[1].innerText = "0"
		legendaNumbers[2].innerText = "50"
		legendaNumbers[3].innerText = "100"
		legendaNumbers[4].innerText = "150"
		legendaNumbers[5].innerText = "200"
	}
};

function switchZonneEnergie() {
	propertyValue = 'zonneStroomTj/';
	popupEnergyType = 'Solar energy:';
    energySymbol = ' TJ';
	generateNewPath();
	switchEnergy();
	createGraph();
};

function switchGroenPercentage() {
	propertyValue = 'groenPercentage/';
	popupEnergyType = 'Green energy:';
    energySymbol = '%';
	generateNewPath();
	switchEnergy();
	createGraph();
};

function switchWindEnergie() {
	propertyValue = 'windStroomTj/';
	popupEnergyType = 'Wind energy:';
    energySymbol = ' TJ';
	generateNewPath();
	switchEnergy();
	createGraph();
};

function switchBiogasEnergie() {
	propertyValue = 'biogasStroomTj/';
	popupEnergyType = 'Biogas power:';
    energySymbol = ' TJ';
	generateNewPath();
	switchEnergy();
	createGraph();
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

//doens't send 'this' to function unless inline onclick function
// for (let button of energyButtons) {
// 	button.addEventListener("click", colorEnergyButton(this));
// };
// document.getElementById("sun").addEventListener("click", switchZonneEnergie);
// document.getElementById("percentage").addEventListener("click", switchGroenPercentage);
// document.getElementById("wind").addEventListener("click", switchWindEnergie);
// document.getElementById("biogas").addEventListener("click", switchBiogasEnergie);
document.getElementById("sidebar-away").addEventListener("click", moveSidebar);

