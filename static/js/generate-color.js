//values when page is loaded
let propertyValue = 'groenPercentage/';
let currentYear = '2018'
let datasetArray = [];
let popupEnergyType = 'Green energy:';
let energySymbol = '%';

function style_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0_0(feature) {
    datasetArray.push(feature);

    if (propertyValue === 'groenPercentage/') {
        switch(String(feature.properties['complete_dataset_' + propertyValue + currentYear])) {
                case '0':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(204,204,204,1.0)',
                interactive: true,
            }
                    break;
                case '0.6':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(254,255,254,1.0)',
                interactive: true,
            }
                    break;
                case '0.7':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(252,254,253,1.0)',
                interactive: true,
            }
                    break;
                case '0.8':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(251,254,252,1.0)',
                interactive: true,
            }
                    break;
                case '0.9':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(249,253,251,1.0)',
                interactive: true,
            }
                    break;
                case '1':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(248,253,250,1.0)',
                interactive: true,
            }
                    break;
                case '1.1':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(246,252,248,1.0)',
                interactive: true,
            }
                    break;
                case '1.2':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(245,252,247,1.0)',
                interactive: true,
            }
                    break;
                case '1.3':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(243,251,246,1.0)',
                interactive: true,
            }
                    break;
                case '1.4':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(242,251,245,1.0)',
                interactive: true,
            }
                    break;
                case '1.5':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(240,250,244,1.0)',
                interactive: true,
            }
                    break;
                case '1.6':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(239,250,243,1.0)',
                interactive: true,
            }
                    break;
                case '1.7':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(237,249,241,1.0)',
                interactive: true,
            }
                    break;
                case '1.8':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(235,249,240,1.0)',
                interactive: true,
            }
                    break;
                case '1.9':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(234,248,239,1.0)',
                interactive: true,
            }
                    break;
                case '2':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(232,248,238,1.0)',
                interactive: true,
            }
                    break;
                case '2.1':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(231,247,237,1.0)',
                interactive: true,
            }
                    break;
                case '2.2':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(229,246,236,1.0)',
                interactive: true,
            }
                    break;
                case '2.3':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(228,246,234,1.0)',
                interactive: true,
            }
                    break;
                case '2.4':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(226,245,233,1.0)',
                interactive: true,
            }
                    break;
                case '2.5':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(225,245,232,1.0)',
                interactive: true,
            }
                    break;
                case '2.6':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(223,245,231,1.0)',
                interactive: true,
            }
                    break;
                case '2.7':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(222,245,229,1.0)',
                interactive: true,
            }
                    break;
                case '2.8':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(220,245,228,1.0)',
                interactive: true,
            }
                    break;
                case '2.9':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(218,244,227,1.0)',
                interactive: true,
            }
                    break;
                case '3':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(217,244,225,1.0)',
                interactive: true,
            }
                    break;
                case '3.1':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(215,244,224,1.0)',
                interactive: true,
            }
                    break;
                case '3.2':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(214,244,223,1.0)',
                interactive: true,
            }
                    break;
                case '3.3':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(212,244,221,1.0)',
                interactive: true,
            }
                    break;
                case '3.4':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(211,243,220,1.0)',
                interactive: true,
            }
                    break;
                case '3.5':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(209,243,219,1.0)',
                interactive: true,
            }
                    break;
                case '3.6':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(208,243,217,1.0)',
                interactive: true,
            }
                    break;
                case '3.7':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(206,243,216,1.0)',
                interactive: true,
            }
                    break;
                case '3.8':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(205,243,215,1.0)',
                interactive: true,
            }
                    break;
                case '3.9':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(203,242,214,1.0)',
                interactive: true,
            }
                    break;
                case '4':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(201,242,212,1.0)',
                interactive: true,
            }
                    break;
                case '4.1':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(200,242,211,1.0)',
                interactive: true,
            }
                    break;
                case '4.2':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(198,242,210,1.0)',
                interactive: true,
            }
                    break;
                case '4.3':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(197,241,208,1.0)',
                interactive: true,
            }
                    break;
                case '4.4':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(195,241,207,1.0)',
                interactive: true,
            }
                    break;
                case '4.5':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(194,241,206,1.0)',
                interactive: true,
            }
                    break;
                case '4.6':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(192,241,204,1.0)',
                interactive: true,
            }
                    break;
                case '4.7':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(191,241,203,1.0)',
                interactive: true,
            }
                    break;
                case '4.8':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(189,240,202,1.0)',
                interactive: true,
            }
                    break;
                case '4.9':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(188,240,200,1.0)',
                interactive: true,
            }
                    break;
                case '5':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(186,240,199,1.0)',
                interactive: true,
            }
                    break;
                case '5.1':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(185,240,198,1.0)',
                interactive: true,
            }
                    break;
                case '5.2':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(183,240,196,1.0)',
                interactive: true,
            }
                    break;
                case '5.3':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(181,239,195,1.0)',
                interactive: true,
            }
                    break;
                case '5.4':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(180,239,194,1.0)',
                interactive: true,
            }
                    break;
                case '5.5':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(178,239,193,1.0)',
                interactive: true,
            }
                    break;
                case '5.6':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(177,239,191,1.0)',
                interactive: true,
            }
                    break;
                case '5.7':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(175,239,190,1.0)',
                interactive: true,
            }
                    break;
                case '5.8':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(174,238,189,1.0)',
                interactive: true,
            }
                    break;
                case '5.9':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(172,238,187,1.0)',
                interactive: true,
            }
                    break;
                case '6':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(171,238,186,1.0)',
                interactive: true,
            }
                    break;
                case '6.1':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(169,238,185,1.0)',
                interactive: true,
            }
                    break;
                case '6.2':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(168,238,183,1.0)',
                interactive: true,
            }
                    break;
                case '6.3':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(166,237,182,1.0)',
                interactive: true,
            }
                    break;
                case '6.4':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(164,237,181,1.0)',
                interactive: true,
            }
                    break;
                case '6.5':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(163,237,179,1.0)',
                interactive: true,
            }
                    break;
                case '6.6':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(161,237,178,1.0)',
                interactive: true,
            }
                    break;
                case '6.7':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(160,236,177,1.0)',
                interactive: true,
            }
                    break;
                case '6.8':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(158,236,175,1.0)',
                interactive: true,
            }
                    break;
                case '6.9':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(157,236,174,1.0)',
                interactive: true,
            }
                    break;
                case '7':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(155,236,173,1.0)',
                interactive: true,
            }
                    break;
                case '7.1':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(154,236,171,1.0)',
                interactive: true,
            }
                    break;
                case '7.2':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(152,235,170,1.0)',
                interactive: true,
            }
                    break;
                case '7.3':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(151,235,170,1.0)',
                interactive: true,
            }
                    break;
                case '7.4':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(151,235,169,1.0)',
                interactive: true,
            }
                    break;
                case '7.5':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(150,235,168,1.0)',
                interactive: true,
            }
                    break;
                case '7.6':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(149,235,168,1.0)',
                interactive: true,
            }
                    break;
                case '7.7':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(148,235,167,1.0)',
                interactive: true,
            }
                    break;
                case '7.8':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(148,235,166,1.0)',
                interactive: true,
            }
                    break;
                case '7.9':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(147,235,166,1.0)',
                interactive: true,
            }
                    break;
                case '8':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(146,235,165,1.0)',
                interactive: true,
            }
                    break;
                case '8.1':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(145,235,165,1.0)',
                interactive: true,
            }
                    break;
                case '8.2':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(145,234,164,1.0)',
                interactive: true,
            }
                    break;
                case '8.4':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(144,234,163,1.0)',
                interactive: true,
            }
                    break;
                case '8.5':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(143,234,163,1.0)',
                interactive: true,
            }
                    break;
                case '8.6':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(142,234,162,1.0)',
                interactive: true,
            }
                    break;
                case '8.7':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(142,234,161,1.0)',
                interactive: true,
            }
                    break;
                case '8.8':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(141,234,161,1.0)',
                interactive: true,
            }
                    break;
                case '8.9':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(140,234,160,1.0)',
                interactive: true,
            }
                    break;
                case '9':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(139,234,160,1.0)',
                interactive: true,
            }
                    break;
                case '9.1':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(139,234,159,1.0)',
                interactive: true,
            }
                    break;
                case '9.2':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(138,234,158,1.0)',
                interactive: true,
            }
                    break;
                case '9.3':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(137,233,158,1.0)',
                interactive: true,
            }
                    break;
                case '9.4':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(136,233,157,1.0)',
                interactive: true,
            }
                    break;
                case '9.5':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(135,233,156,1.0)',
                interactive: true,
            }
                    break;
                case '9.6':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(135,233,156,1.0)',
                interactive: true,
            }
                    break;
                case '9.7':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(134,233,155,1.0)',
                interactive: true,
            }
                    break;
                case '9.8':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(133,233,154,1.0)',
                interactive: true,
            }
                    break;
                case '9.9':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(132,233,154,1.0)',
                interactive: true,
            }
                    break;
                case '10':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(132,233,153,1.0)',
                interactive: true,
            }
                    break;
                case '10.2':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(131,233,153,1.0)',
                interactive: true,
            }
                    break;
                case '10.3':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(130,233,152,1.0)',
                interactive: true,
            }
                    break;
                case '10.4':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(129,233,151,1.0)',
                interactive: true,
            }
                    break;
                case '10.5':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(129,232,151,1.0)',
                interactive: true,
            }
                    break;
                case '10.6':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(128,232,150,1.0)',
                interactive: true,
            }
                    break;
                case '10.8':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(127,232,149,1.0)',
                interactive: true,
            }
                    break;
                case '10.9':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(126,232,149,1.0)',
                interactive: true,
            }
                    break;
                case '11':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(126,232,148,1.0)',
                interactive: true,
            }
                    break;
                case '11.4':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(125,232,148,1.0)',
                interactive: true,
            }
                    break;
                case '11.5':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(124,232,147,1.0)',
                interactive: true,
            }
                    break;
                case '11.8':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(123,232,146,1.0)',
                interactive: true,
            }
                    break;
                case '11.9':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(123,232,146,1.0)',
                interactive: true,
            }
                    break;
                case '12':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(122,232,145,1.0)',
                interactive: true,
            }
                    break;
                case '12.2':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(121,231,144,1.0)',
                interactive: true,
            }
                    break;
                case '12.3':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(120,231,144,1.0)',
                interactive: true,
            }
                    break;
                case '12.4':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(120,231,143,1.0)',
                interactive: true,
            }
                    break;
                case '12.5':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(119,231,143,1.0)',
                interactive: true,
            }
                    break;
                case '12.6':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(118,231,142,1.0)',
                interactive: true,
            }
                    break;
                case '12.7':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(117,231,141,1.0)',
                interactive: true,
            }
                    break;
                case '12.8':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(117,231,141,1.0)',
                interactive: true,
            }
                    break;
                case '13':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(116,231,140,1.0)',
                interactive: true,
            }
                    break;
                case '13.1':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(115,231,139,1.0)',
                interactive: true,
            }
                    break;
                case '13.2':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(114,231,139,1.0)',
                interactive: true,
            }
                    break;
                case '13.3':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(114,231,138,1.0)',
                interactive: true,
            }
                    break;
                case '13.4':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(113,230,138,1.0)',
                interactive: true,
            }
                    break;
                case '13.6':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(112,230,137,1.0)',
                interactive: true,
            }
                    break;
                case '13.7':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(111,230,136,1.0)',
                interactive: true,
            }
                    break;
                case '13.8':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(111,230,136,1.0)',
                interactive: true,
            }
                    break;
                case '13.9':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(110,230,135,1.0)',
                interactive: true,
            }
                    break;
                case '14':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(109,230,134,1.0)',
                interactive: true,
            }
                    break;
                case '14.1':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(108,230,134,1.0)',
                interactive: true,
            }
                    break;
                case '14.4':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(108,230,133,1.0)',
                interactive: true,
            }
                    break;
                case '14.9':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(107,230,133,1.0)',
                interactive: true,
            }
                    break;
                case '15':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(106,230,132,1.0)',
                interactive: true,
            }
                    break;
                case '15.1':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(105,229,131,1.0)',
                interactive: true,
            }
                    break;
                case '15.3':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(104,229,130,1.0)',
                interactive: true,
            }
                    break;
                case '15.8':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(103,229,129,1.0)',
                interactive: true,
            }
                    break;
                case '15.9':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(102,229,128,1.0)',
                interactive: true,
            }
                    break;
                case '16':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(101,229,127,1.0)',
                interactive: true,
            }
                    break;
                case '16.1':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(99,229,126,1.0)',
                interactive: true,
            }
                    break;
                case '16.4':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(98,229,125,1.0)',
                interactive: true,
            }
                    break;
                case '16.7':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(97,228,124,1.0)',
                interactive: true,
            }
                    break;
                case '16.8':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(96,228,123,1.0)',
                interactive: true,
            }
                    break;
                case '16.9':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(95,228,122,1.0)',
                interactive: true,
            }
                    break;
                case '17.2':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(93,228,121,1.0)',
                interactive: true,
            }
                    break;
                case '17.5':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(92,228,120,1.0)',
                interactive: true,
            }
                    break;
                case '17.6':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(91,228,119,1.0)',
                interactive: true,
            }
                    break;
                case '17.7':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(90,227,118,1.0)',
                interactive: true,
            }
                    break;
                case '18.1':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(88,227,117,1.0)',
                interactive: true,
            }
                    break;
                case '18.7':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(87,227,116,1.0)',
                interactive: true,
            }
                    break;
                case '18.8':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(86,227,115,1.0)',
                interactive: true,
            }
                    break;
                case '18.9':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(85,227,114,1.0)',
                interactive: true,
            }
                    break;
                case '19':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(84,227,112,1.0)',
                interactive: true,
            }
                    break;
                case '19.8':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(82,226,111,1.0)',
                interactive: true,
            }
                    break;
                case '20':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(81,226,110,1.0)',
                interactive: true,
            }
                    break;
                case '20.2':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(80,226,109,1.0)',
                interactive: true,
            }
                    break;
                case '20.4':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(79,226,108,1.0)',
                interactive: true,
            }
                    break;
                case '20.6':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(77,226,107,1.0)',
                interactive: true,
            }
                    break;
                case '20.7':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(76,226,106,1.0)',
                interactive: true,
            }
                    break;
                case '20.9':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(75,226,105,1.0)',
                interactive: true,
            }
                    break;
                case '21.1':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(74,225,104,1.0)',
                interactive: true,
            }
                    break;
                case '21.2':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(73,225,103,1.0)',
                interactive: true,
            }
                    break;
                case '21.3':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(71,225,102,1.0)',
                interactive: true,
            }
                    break;
                case '21.4':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(70,225,101,1.0)',
                interactive: true,
            }
                    break;
                case '21.5':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(69,225,100,1.0)',
                interactive: true,
            }
                    break;
                case '21.6':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(68,225,99,1.0)',
                interactive: true,
            }
                    break;
                case '21.7':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(67,224,98,1.0)',
                interactive: true,
            }
                    break;
                case '21.8':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(65,224,97,1.0)',
                interactive: true,
            }
                    break;
                case '21.9':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(64,224,96,1.0)',
                interactive: true,
            }
                    break;
                case '22.3':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(63,224,94,1.0)',
                interactive: true,
            }
                    break;
                case '22.8':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(62,224,93,1.0)',
                interactive: true,
            }
                    break;
                case '22.9':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(60,224,92,1.0)',
                interactive: true,
            }
                    break;
                case '23.2':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(59,223,91,1.0)',
                interactive: true,
            }
                    break;
                case '23.4':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(59,223,90,1.0)',
                interactive: true,
            }
                    break;
                case '24.4':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(58,222,89,1.0)',
                interactive: true,
            }
                    break;
                case '24.7':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(58,222,87,1.0)',
                interactive: true,
            }
                    break;
                case '25.5':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(58,221,86,1.0)',
                interactive: true,
            }
                    break;
                case '25.9':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(58,221,85,1.0)',
                interactive: true,
            }
                    break;
                case '26.4':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(58,220,83,1.0)',
                interactive: true,
            }
                    break;
                case '27.2':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(58,220,82,1.0)',
                interactive: true,
            }
                    break;
                case '27.7':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(58,219,80,1.0)',
                interactive: true,
            }
                    break;
                case '27.8':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(57,218,79,1.0)',
                interactive: true,
            }
                    break;
                case '28.2':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(57,218,78,1.0)',
                interactive: true,
            }
                    break;
                case '28.3':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(57,217,76,1.0)',
                interactive: true,
            }
                    break;
                case '28.7':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(57,217,75,1.0)',
                interactive: true,
            }
                    break;
                case '28.9':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(57,216,73,1.0)',
                interactive: true,
            }
                    break;
                case '29.4':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(57,215,72,1.0)',
                interactive: true,
            }
                    break;
                case '31.9':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(56,215,71,1.0)',
                interactive: true,
            }
                    break;
                case '32.4':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(56,214,69,1.0)',
                interactive: true,
            }
                    break;
                case '33.5':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(56,214,68,1.0)',
                interactive: true,
            }
                    break;
                case '34.8':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(56,213,67,1.0)',
                interactive: true,
            }
                    break;
                case '35':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(56,213,65,1.0)',
                interactive: true,
            }
                    break;
                case '35.1':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(56,212,64,1.0)',
                interactive: true,
            }
                    break;
                case '35.4':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(55,211,62,1.0)',
                interactive: true,
            }
                    break;
                case '35.7':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(55,211,61,1.0)',
                interactive: true,
            }
                    break;
                case '37.2':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(55,210,60,1.0)',
                interactive: true,
            }
                    break;
                case '37.6':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(55,210,58,1.0)',
                interactive: true,
            }
                    break;
                case '37.7':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(55,209,57,1.0)',
                interactive: true,
            }
                    break;
                case '38.1':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(55,209,55,1.0)',
                interactive: true,
            }
                    break;
                case '39.1':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(55,208,54,1.0)',
                interactive: true,
            }
                    break;
                case '39.2':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(54,207,53,1.0)',
                interactive: true,
            }
                    break;
                case '39.8':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(54,207,51,1.0)',
                interactive: true,
            }
                    break;
                case '41':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(54,205,51,1.0)',
                interactive: true,
            }
                    break;
                case '41.3':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(54,204,53,1.0)',
                interactive: true,
            }
                    break;
                case '41.4':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(53,202,54,1.0)',
                interactive: true,
            }
                    break;
                case '41.7':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(53,200,55,1.0)',
                interactive: true,
            }
                    break;
                case '43.5':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(53,198,56,1.0)',
                interactive: true,
            }
                    break;
                case '44.1':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(53,196,58,1.0)',
                interactive: true,
            }
                    break;
                case '46.5':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(52,194,59,1.0)',
                interactive: true,
            }
                    break;
                case '49':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(52,192,60,1.0)',
                interactive: true,
            }
                    break;
                case '50.3':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(52,190,61,1.0)',
                interactive: true,
            }
                    break;
                case '52.4':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(51,189,62,1.0)',
                interactive: true,
            }
                    break;
                case '64.1':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(51,187,64,1.0)',
                interactive: true,
            }
                    break;
                case '91.4':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(51,185,65,1.0)',
                interactive: true,
            }
                    break;
                case '93.7':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(51,183,66,1.0)',
                interactive: true,
            }
                    break;
                case '95.8':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(50,181,67,1.0)',
                interactive: true,
            }
                    break;
                case '105.2':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(50,179,69,1.0)',
                interactive: true,
            }
                    break;
                default:
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(204,204,204,1.0)',
                interactive: true,
            }
                    break;
            }
        } 
        else if (propertyValue === 'zonneStroomTj/') {
            switch(String(feature.properties['complete_dataset_' + propertyValue + currentYear])) {
                default:
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(204,204,204,1.0)',
                interactive: true,
            }
                    break;
                case '1':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(247,252,244,1.0)',
                interactive: true,
            }
                    break;
                case '2':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(247,251,242,1.0)',
                interactive: true,
            }
                    break;
                case '3':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(247,250,240,1.0)',
                interactive: true,
            }
                    break;
                case '4':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(247,250,238,1.0)',
                interactive: true,
            }
                    break;
                case '5':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(247,249,236,1.0)',
                interactive: true,
            }
                    break;
                case '6':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(246,248,234,1.0)',
                interactive: true,
            }
                    break;
                case '7':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(246,247,232,1.0)',
                interactive: true,
            }
                    break;
                case '8':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(246,247,230,1.0)',
                interactive: true,
            }
                    break;
                case '9':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(246,246,228,1.0)',
                interactive: true,
            }
                    break;
                case '10':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(246,245,226,1.0)',
                interactive: true,
            }
                    break;
                case '11':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(246,244,224,1.0)',
                interactive: true,
            }
                    break;
                case '12':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(246,244,220,1.0)',
                interactive: true,
            }
                    break;
                case '13':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(246,244,216,1.0)',
                interactive: true,
            }
                    break;
                case '14':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(246,243,212,1.0)',
                interactive: true,
            }
                    break;
                case '15':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(246,243,208,1.0)',
                interactive: true,
            }
                    break;
                case '16':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(247,242,204,1.0)',
                interactive: true,
            }
                    break;
                case '17':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(247,242,200,1.0)',
                interactive: true,
            }
                    break;
                case '18':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(247,241,196,1.0)',
                interactive: true,
            }
                    break;
                case '19':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(247,241,193,1.0)',
                interactive: true,
            }
                    break;
                case '20':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(247,241,189,1.0)',
                interactive: true,
            }
                    break;
                case '21':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(248,240,185,1.0)',
                interactive: true,
            }
                    break;
                case '22':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(248,240,182,1.0)',
                interactive: true,
            }
                    break;
                case '23':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(248,240,179,1.0)',
                interactive: true,
            }
                    break;
                case '24':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(248,240,176,1.0)',
                interactive: true,
            }
                    break;
                case '25':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(248,239,173,1.0)',
                interactive: true,
            }
                    break;
                case '26':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(248,239,170,1.0)',
                interactive: true,
            }
                    break;
                case '27':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(248,239,167,1.0)',
                interactive: true,
            }
                    break;
                case '28':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(248,239,164,1.0)',
                interactive: true,
            }
                    break;
                case '29':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(248,239,161,1.0)',
                interactive: true,
            }
                    break;
                case '30':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(248,238,158,1.0)',
                interactive: true,
            }
                    break;
                case '31':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(248,238,155,1.0)',
                interactive: true,
            }
                    break;
                case '32':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(249,238,151,1.0)',
                interactive: true,
            }
                    break;
                case '33':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(249,238,148,1.0)',
                interactive: true,
            }
                    break;
                case '34':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(249,238,145,1.0)',
                interactive: true,
            }
                    break;
                case '35':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(249,237,142,1.0)',
                interactive: true,
            }
                    break;
                case '36':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(249,237,139,1.0)',
                interactive: true,
            }
                    break;
                case '37':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(249,237,136,1.0)',
                interactive: true,
            }
                    break;
                case '38':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(249,237,134,1.0)',
                interactive: true,
            }
                    break;
                case '39':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(249,237,133,1.0)',
                interactive: true,
            }
                    break;
                case '40':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(249,236,132,1.0)',
                interactive: true,
            }
                    break;
                case '41':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(249,236,131,1.0)',
                interactive: true,
            }
                    break;
                case '42':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(249,236,130,1.0)',
                interactive: true,
            }
                    break;
                case '43':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(249,236,129,1.0)',
                interactive: true,
            }
                    break;
                case '44':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(249,236,128,1.0)',
                interactive: true,
            }
                    break;
                case '45':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(249,236,127,1.0)',
                interactive: true,
            }
                    break;
                case '46':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(250,236,126,1.0)',
                interactive: true,
            }
                    break;
                case '47':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(250,235,125,1.0)',
                interactive: true,
            }
                    break;
                case '48':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(250,235,124,1.0)',
                interactive: true,
            }
                    break;
                case '49':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(250,235,123,1.0)',
                interactive: true,
            }
                    break;
                case '50':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(250,235,122,1.0)',
                interactive: true,
            }
                    break;
                case '51':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(250,235,121,1.0)',
                interactive: true,
            }
                    break;
                case '52':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(250,235,120,1.0)',
                interactive: true,
            }
                    break;
                case '53':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(250,235,119,1.0)',
                interactive: true,
            }
                    break;
                case '54':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(250,234,118,1.0)',
                interactive: true,
            }
                    break;
                case '55':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(250,234,117,1.0)',
                interactive: true,
            }
                    break;
                case '56':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(250,234,116,1.0)',
                interactive: true,
            }
                    break;
                case '57':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(250,234,116,1.0)',
                interactive: true,
            }
                    break;
                case '58':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(250,234,115,1.0)',
                interactive: true,
            }
                    break;
                case '59':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(250,234,114,1.0)',
                interactive: true,
            }
                    break;
                case '60':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(250,234,113,1.0)',
                interactive: true,
            }
                    break;
                case '61':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(250,233,111,1.0)',
                interactive: true,
            }
                    break;
                case '62':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(251,233,109,1.0)',
                interactive: true,
            }
                    break;
                case '63':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(251,233,107,1.0)',
                interactive: true,
            }
                    break;
                case '64':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(251,233,105,1.0)',
                interactive: true,
            }
                    break;
                case '65':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(251,232,104,1.0)',
                interactive: true,
            }
                    break;
                case '66':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(251,232,102,1.0)',
                interactive: true,
            }
                    break;
                case '67':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(251,232,100,1.0)',
                interactive: true,
            }
                    break;
                case '68':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(251,231,98,1.0)',
                interactive: true,
            }
                    break;
                case '69':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(251,231,96,1.0)',
                interactive: true,
            }
                    break;
                case '71':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(251,231,94,1.0)',
                interactive: true,
            }
                    break;
                case '72':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(251,231,92,1.0)',
                interactive: true,
            }
                    break;
                case '73':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(251,230,90,1.0)',
                interactive: true,
            }
                    break;
                case '74':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(251,230,88,1.0)',
                interactive: true,
            }
                    break;
                case '75':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(252,230,86,1.0)',
                interactive: true,
            }
                    break;
                case '76':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(252,229,84,1.0)',
                interactive: true,
            }
                    break;
                case '77':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(252,229,82,1.0)',
                interactive: true,
            }
                    break;
                case '78':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(252,229,80,1.0)',
                interactive: true,
            }
                    break;
                case '79':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(252,229,78,1.0)',
                interactive: true,
            }
                    break;
                case '85':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(252,228,76,1.0)',
                interactive: true,
            }
                    break;
                case '88':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(252,228,74,1.0)',
                interactive: true,
            }
                    break;
                case '89':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(252,228,72,1.0)',
                interactive: true,
            }
                    break;
                case '90':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(252,228,70,1.0)',
                interactive: true,
            }
                    break;
                case '91':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(252,227,68,1.0)',
                interactive: true,
            }
                    break;
                case '93':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(252,227,66,1.0)',
                interactive: true,
            }
                    break;
                case '94':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(252,227,64,1.0)',
                interactive: true,
            }
                    break;
                case '95':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(252,226,62,1.0)',
                interactive: true,
            }
                    break;
                case '96':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(253,223,62,1.0)',
                interactive: true,
            }
                    break;
                case '99':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(253,220,62,1.0)',
                interactive: true,
            }
                    break;
                case '104':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(253,217,62,1.0)',
                interactive: true,
            }
                    break;
                case '106':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(253,214,62,1.0)',
                interactive: true,
            }
                    break;
                case '108':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(253,210,62,1.0)',
                interactive: true,
            }
                    break;
                case '110':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(254,207,62,1.0)',
                interactive: true,
            }
                    break;
                case '113':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(254,204,62,1.0)',
                interactive: true,
            }
                    break;
                case '115':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(254,201,62,1.0)',
                interactive: true,
            }
                    break;
                case '117':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(254,198,62,1.0)',
                interactive: true,
            }
                    break;
                case '118':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(254,194,62,1.0)',
                interactive: true,
            }
                    break;
                case '119':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(255,191,62,1.0)',
                interactive: true,
            }
                    break;
                case '132':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(255,188,62,1.0)',
                interactive: true,
            }
                    break;
                case '135':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(255,185,62,1.0)',
                interactive: true,
            }
                    break;
                case '139':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(255,181,62,1.0)',
                interactive: true,
            }
                    break;
                case '143':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(255,178,62,1.0)',
                interactive: true,
            }
                    break;
                case '144':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(255,175,53,1.0)',
                interactive: true,
            }
                    break;
                case '154':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(255,171,44,1.0)',
                interactive: true,
            }
                    break;
                case '156':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(255,167,35,1.0)',
                interactive: true,
            }
                    break;
                case '166':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(255,164,26,1.0)',
                interactive: true,
            }
                    break;
                case '169':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(255,160,17,1.0)',
                interactive: true,
            }
                    break;
                case '183':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(255,157,8,1.0)',
                interactive: true,
            }
                    break;
                case '209':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(255,153,0,1.0)',
                interactive: true,
            }
                    break;
            }
        }

     else if (propertyValue === 'windStroomTj/') {
        switch(String(feature.properties['complete_dataset_' + propertyValue + currentYear])) {
                default:
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(204,204,204,1.0)',
                interactive: true,
            }
                    break;
                case '1':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(246,251,255,1.0)',
                interactive: true,
            }
                    break;
                case '2':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(245,251,255,1.0)',
                interactive: true,
            }
                    break;
                case '3':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(244,250,255,1.0)',
                interactive: true,
            }
                    break;
                case '4':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(243,250,255,1.0)',
                interactive: true,
            }
                    break;
                case '5':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(242,249,255,1.0)',
                interactive: true,
            }
                    break;
                case '6':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(241,249,255,1.0)',
                interactive: true,
            }
                    break;
                case '7':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(240,248,255,1.0)',
                interactive: true,
            }
                    break;
                case '8':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(239,248,255,1.0)',
                interactive: true,
            }
                    break;
                case '9':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(238,247,255,1.0)',
                interactive: true,
            }
                    break;
                case '10':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(237,247,255,1.0)',
                interactive: true,
            }
                    break;
                case '11':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(236,247,255,1.0)',
                interactive: true,
            }
                    break;
                case '12':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(235,246,255,1.0)',
                interactive: true,
            }
                    break;
                case '13':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(234,246,255,1.0)',
                interactive: true,
            }
                    break;
                case '14':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(233,245,255,1.0)',
                interactive: true,
            }
                    break;
                case '15':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(232,245,255,1.0)',
                interactive: true,
            }
                    break;
                case '16':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(231,244,255,1.0)',
                interactive: true,
            }
                    break;
                case '17':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(230,244,255,1.0)',
                interactive: true,
            }
                    break;
                case '18':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(229,243,255,1.0)',
                interactive: true,
            }
                    break;
                case '19':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(228,243,255,1.0)',
                interactive: true,
            }
                    break;
                case '20':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(227,242,255,1.0)',
                interactive: true,
            }
                    break;
                case '22':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(225,242,255,1.0)',
                interactive: true,
            }
                    break;
                case '23':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(224,242,255,1.0)',
                interactive: true,
            }
                    break;
                case '24':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(223,241,255,1.0)',
                interactive: true,
            }
                    break;
                case '25':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(222,241,255,1.0)',
                interactive: true,
            }
                    break;
                case '26':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(221,240,255,1.0)',
                interactive: true,
            }
                    break;
                case '27':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(220,240,255,1.0)',
                interactive: true,
            }
                    break;
                case '28':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(219,239,255,1.0)',
                interactive: true,
            }
                    break;
                case '29':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(218,239,255,1.0)',
                interactive: true,
            }
                    break;
                case '30':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(217,238,254,1.0)',
                interactive: true,
            }
                    break;
                case '31':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(216,238,254,1.0)',
                interactive: true,
            }
                    break;
                case '32':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(215,237,254,1.0)',
                interactive: true,
            }
                    break;
                case '33':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(214,237,254,1.0)',
                interactive: true,
            }
                    break;
                case '34':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(213,237,254,1.0)',
                interactive: true,
            }
                    break;
                case '35':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(212,236,254,1.0)',
                interactive: true,
            }
                    break;
                case '36':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(211,236,254,1.0)',
                interactive: true,
            }
                    break;
                case '37':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(210,235,254,1.0)',
                interactive: true,
            }
                    break;
                case '38':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(209,235,254,1.0)',
                interactive: true,
            }
                    break;
                case '39':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(208,234,254,1.0)',
                interactive: true,
            }
                    break;
                case '40':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(207,234,254,1.0)',
                interactive: true,
            }
                    break;
                case '42':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(206,233,254,1.0)',
                interactive: true,
            }
                    break;
                case '44':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(205,233,254,1.0)',
                interactive: true,
            }
                    break;
                case '45':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(203,233,254,1.0)',
                interactive: true,
            }
                    break;
                case '46':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(202,232,254,1.0)',
                interactive: true,
            }
                    break;
                case '47':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(201,232,254,1.0)',
                interactive: true,
            }
                    break;
                case '48':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(200,231,254,1.0)',
                interactive: true,
            }
                    break;
                case '49':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(199,231,254,1.0)',
                interactive: true,
            }
                    break;
                case '50':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(198,230,254,1.0)',
                interactive: true,
            }
                    break;
                case '51':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(197,230,254,1.0)',
                interactive: true,
            }
                    break;
                case '52':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(196,229,254,1.0)',
                interactive: true,
            }
                    break;
                case '53':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(195,229,254,1.0)',
                interactive: true,
            }
                    break;
                case '54':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(194,228,254,1.0)',
                interactive: true,
            }
                    break;
                case '55':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(193,228,254,1.0)',
                interactive: true,
            }
                    break;
                case '56':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(192,228,254,1.0)',
                interactive: true,
            }
                    break;
                case '58':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(191,227,254,1.0)',
                interactive: true,
            }
                    break;
                case '59':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(190,227,254,1.0)',
                interactive: true,
            }
                    break;
                case '60':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(189,226,254,1.0)',
                interactive: true,
            }
                    break;
                case '63':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(188,226,253,1.0)',
                interactive: true,
            }
                    break;
                case '64':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(187,225,253,1.0)',
                interactive: true,
            }
                    break;
                case '65':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(186,225,253,1.0)',
                interactive: true,
            }
                    break;
                case '66':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(185,224,253,1.0)',
                interactive: true,
            }
                    break;
                case '67':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(184,224,253,1.0)',
                interactive: true,
            }
                    break;
                case '68':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(183,224,253,1.0)',
                interactive: true,
            }
                    break;
                case '69':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(181,223,253,1.0)',
                interactive: true,
            }
                    break;
                case '70':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(180,223,253,1.0)',
                interactive: true,
            }
                    break;
                case '71':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(179,222,253,1.0)',
                interactive: true,
            }
                    break;
                case '72':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(178,222,253,1.0)',
                interactive: true,
            }
                    break;
                case '74':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(177,221,253,1.0)',
                interactive: true,
            }
                    break;
                case '76':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(176,221,253,1.0)',
                interactive: true,
            }
                    break;
                case '77':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(175,220,253,1.0)',
                interactive: true,
            }
                    break;
                case '79':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(174,220,253,1.0)',
                interactive: true,
            }
                    break;
                case '80':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(173,219,253,1.0)',
                interactive: true,
            }
                    break;
                case '81':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(172,219,253,1.0)',
                interactive: true,
            }
                    break;
                case '83':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(171,219,253,1.0)',
                interactive: true,
            }
                    break;
                case '86':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(170,218,253,1.0)',
                interactive: true,
            }
                    break;
                case '88':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(169,218,253,1.0)',
                interactive: true,
            }
                    break;
                case '90':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(168,217,253,1.0)',
                interactive: true,
            }
                    break;
                case '95':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(167,217,253,1.0)',
                interactive: true,
            }
                    break;
                case '96':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(166,216,253,1.0)',
                interactive: true,
            }
                    break;
                case '98':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(165,216,253,1.0)',
                interactive: true,
            }
                    break;
                case '100':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(164,215,253,1.0)',
                interactive: true,
            }
                    break;
                case '102':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(163,215,253,1.0)',
                interactive: true,
            }
                    break;
                case '103':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(162,214,253,1.0)',
                interactive: true,
            }
                    break;
                case '105':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(161,214,253,1.0)',
                interactive: true,
            }
                    break;
                case '106':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(159,214,253,1.0)',
                interactive: true,
            }
                    break;
                case '108':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(158,213,253,1.0)',
                interactive: true,
            }
                    break;
                case '109':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(157,213,252,1.0)',
                interactive: true,
            }
                    break;
                case '114':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(156,212,252,1.0)',
                interactive: true,
            }
                    break;
                case '118':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(155,212,252,1.0)',
                interactive: true,
            }
                    break;
                case '123':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(154,211,252,1.0)',
                interactive: true,
            }
                    break;
                case '124':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(153,211,252,1.0)',
                interactive: true,
            }
                    break;
                case '126':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(152,210,252,1.0)',
                interactive: true,
            }
                    break;
                case '137':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(151,210,252,1.0)',
                interactive: true,
            }
                    break;
                case '138':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(150,210,252,1.0)',
                interactive: true,
            }
                    break;
                case '139':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(149,209,252,1.0)',
                interactive: true,
            }
                    break;
                case '140':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(148,209,252,1.0)',
                interactive: true,
            }
                    break;
                case '147':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(147,208,252,1.0)',
                interactive: true,
            }
                    break;
                case '158':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(146,208,252,1.0)',
                interactive: true,
            }
                    break;
                case '159':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(145,207,252,1.0)',
                interactive: true,
            }
                    break;
                case '167':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(144,207,252,1.0)',
                interactive: true,
            }
                    break;
                case '170':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(143,206,252,1.0)',
                interactive: true,
            }
                    break;
                case '171':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(142,206,252,1.0)',
                interactive: true,
            }
                    break;
                case '175':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(141,205,252,1.0)',
                interactive: true,
            }
                    break;
                case '182':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(140,205,252,1.0)',
                interactive: true,
            }
                    break;
                case '187':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(139,205,252,1.0)',
                interactive: true,
            }
                    break;
                case '193':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(137,204,252,1.0)',
                interactive: true,
            }
                    break;
                case '195':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(136,204,252,1.0)',
                interactive: true,
            }
                    break;
                case '196':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(135,203,252,1.0)',
                interactive: true,
            }
                    break;
                case '198':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(134,203,252,1.0)',
                interactive: true,
            }
                    break;
                case '201':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(133,202,252,1.0)',
                interactive: true,
            }
                    break;
                case '202':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(132,202,252,1.0)',
                interactive: true,
            }
                    break;
                case '212':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(131,201,252,1.0)',
                interactive: true,
            }
                    break;
                case '213':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(130,201,252,1.0)',
                interactive: true,
            }
                    break;
                case '215':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(129,201,252,1.0)',
                interactive: true,
            }
                    break;
                case '216':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(128,200,251,1.0)',
                interactive: true,
            }
                    break;
                case '219':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(125,199,252,1.0)',
                interactive: true,
            }
                    break;
                case '225':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(123,198,252,1.0)',
                interactive: true,
            }
                    break;
                case '226':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(120,196,252,1.0)',
                interactive: true,
            }
                    break;
                case '228':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(117,195,252,1.0)',
                interactive: true,
            }
                    break;
                case '229':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(114,194,252,1.0)',
                interactive: true,
            }
                    break;
                case '236':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(111,193,252,1.0)',
                interactive: true,
            }
                    break;
                case '238':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(108,192,252,1.0)',
                interactive: true,
            }
                    break;
                case '239':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(106,190,252,1.0)',
                interactive: true,
            }
                    break;
                case '241':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(103,189,252,1.0)',
                interactive: true,
            }
                    break;
                case '244':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(100,188,252,1.0)',
                interactive: true,
            }
                    break;
                case '245':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(97,187,252,1.0)',
                interactive: true,
            }
                    break;
                case '246':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(94,185,252,1.0)',
                interactive: true,
            }
                    break;
                case '257':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(91,184,252,1.0)',
                interactive: true,
            }
                    break;
                case '262':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(89,183,252,1.0)',
                interactive: true,
            }
                    break;
                case '274':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(86,182,252,1.0)',
                interactive: true,
            }
                    break;
                case '277':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(83,181,253,1.0)',
                interactive: true,
            }
                    break;
                case '278':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(80,179,253,1.0)',
                interactive: true,
            }
                    break;
                case '285':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(77,178,253,1.0)',
                interactive: true,
            }
                    break;
                case '302':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(74,177,253,1.0)',
                interactive: true,
            }
                    break;
                case '304':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(72,176,253,1.0)',
                interactive: true,
            }
                    break;
                case '307':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(69,174,253,1.0)',
                interactive: true,
            }
                    break;
                case '311':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(66,173,253,1.0)',
                interactive: true,
            }
                    break;
                case '334':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(63,172,253,1.0)',
                interactive: true,
            }
                    break;
                case '339':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(60,171,253,1.0)',
                interactive: true,
            }
                    break;
                case '344':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(57,169,253,1.0)',
                interactive: true,
            }
                    break;
                case '354':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(54,168,253,1.0)',
                interactive: true,
            }
                    break;
                case '366':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(52,167,253,1.0)',
                interactive: true,
            }
                    break;
                case '372':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(49,166,253,1.0)',
                interactive: true,
            }
                    break;
                case '375':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(46,165,253,1.0)',
                interactive: true,
            }
                    break;
                case '388':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(43,163,253,1.0)',
                interactive: true,
            }
                    break;
                case '415':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(43,162,253,1.0)',
                interactive: true,
            }
                    break;
                case '425':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(44,161,253,1.0)',
                interactive: true,
            }
                    break;
                case '437':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(45,159,253,1.0)',
                interactive: true,
            }
                    break;
                case '450':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(45,158,253,1.0)',
                interactive: true,
            }
                    break;
                case '472':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(46,157,253,1.0)',
                interactive: true,
            }
                    break;
                case '501':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(47,155,253,1.0)',
                interactive: true,
            }
                    break;
                case '504':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(47,154,253,1.0)',
                interactive: true,
            }
                    break;
                case '589':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(48,153,253,1.0)',
                interactive: true,
            }
                    break;
                case '606':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(49,151,253,1.0)',
                interactive: true,
            }
                    break;
                case '625':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(49,150,253,1.0)',
                interactive: true,
            }
                    break;
                case '724':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(50,149,253,1.0)',
                interactive: true,
            }
                    break;
                case '774':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(51,147,253,1.0)',
                interactive: true,
            }
                    break;
                case '781':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(52,146,253,1.0)',
                interactive: true,
            }
                    break;
                case '794':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(52,145,253,1.0)',
                interactive: true,
            }
                    break;
                case '805':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(53,143,253,1.0)',
                interactive: true,
            }
                    break;
                case '824':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(54,142,253,1.0)',
                interactive: true,
            }
                    break;
                case '854':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(54,141,253,1.0)',
                interactive: true,
            }
                    break;
                case '984':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(55,139,253,1.0)',
                interactive: true,
            }
                    break;
                case '1004':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(56,138,253,1.0)',
                interactive: true,
            }
                    break;
                case '1023':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(56,137,253,1.0)',
                interactive: true,
            }
                    break;
                case '1028':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(57,135,253,1.0)',
                interactive: true,
            }
                    break;
                case '1046':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(58,134,253,1.0)',
                interactive: true,
            }
                    break;
                case '1052':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(58,132,253,1.0)',
                interactive: true,
            }
                    break;
                case '1075':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(59,131,253,1.0)',
                interactive: true,
            }
                    break;
                case '1089':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(60,130,253,1.0)',
                interactive: true,
            }
                    break;
                case '1131':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(61,128,253,1.0)',
                interactive: true,
            }
                    break;
                case '1163':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(61,126,253,1.0)',
                interactive: true,
            }
                    break;
                case '1172':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(60,123,251,1.0)',
                interactive: true,
            }
                    break;
                case '1203':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(60,121,250,1.0)',
                interactive: true,
            }
                    break;
                case '1228':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(59,118,249,1.0)',
                interactive: true,
            }
                    break;
                case '1295':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(59,115,248,1.0)',
                interactive: true,
            }
                    break;
                case '1311':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(59,113,247,1.0)',
                interactive: true,
            }
                    break;
                case '1324':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(58,110,245,1.0)',
                interactive: true,
            }
                    break;
                case '1372':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(58,107,244,1.0)',
                interactive: true,
            }
                    break;
                case '1569':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(58,104,243,1.0)',
                interactive: true,
            }
                    break;
                case '1659':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(33,110,231,1.0)',
                interactive: true,
            }
                    break;
                case '2122':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(30,109,229,1.0)',
                interactive: true,
            }
                    break;
                case '2149':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(28,107,227,1.0)',
                interactive: true,
            }
                    break;
                case '2218':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(25,105,225,1.0)',
                interactive: true,
            }
                    break;
                case '2269':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(22,103,222,1.0)',
                interactive: true,
            }
                    break;
                case '2287':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(19,101,220,1.0)',
                interactive: true,
            }
                    break;
                case '2347':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(16,100,218,1.0)',
                interactive: true,
            }
                    break;
                case '2438':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(13,98,215,1.0)',
                interactive: true,
            }
                    break;
                case '2442':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(10,96,213,1.0)',
                interactive: true,
            }
                    break;
                case '2663':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(8,94,211,1.0)',
                interactive: true,
            }
                    break;
                case '3398':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(5,92,209,1.0)',
                interactive: true,
            }
                    break;
                case '3516':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(2,90,206,1.0)',
                interactive: true,
            }
                    break;
            }
        }
        else if (propertyValue === 'biogasStroomTj/') {
            switch(String(feature.properties['complete_dataset_' + propertyValue + currentYear])) {
                default:
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(204,204,204,1.0)',
                interactive: true,
            }
                    break;
                case '0':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(204,204,204,1.0)',
                interactive: true,
            }
                    break;
                case '-26':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(253,253,254,1.0)',
                interactive: true,
            }
                    break;
                case '-21':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(250,251,252,1.0)',
                interactive: true,
            }
                    break;
                case '-8':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(247,249,251,1.0)',
                interactive: true,
            }
                    break;
                case '-3':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(244,247,249,1.0)',
                interactive: true,
            }
                    break;
                case '1':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(238,242,246,1.0)',
                interactive: true,
            }
                    break;
                case '2':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(235,240,245,1.0)',
                interactive: true,
            }
                    break;
                case '3':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(232,238,243,1.0)',
                interactive: true,
            }
                    break;
                case '4':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(229,236,242,1.0)',
                interactive: true,
            }
                    break;
                case '5':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(226,233,240,1.0)',
                interactive: true,
            }
                    break;
                case '6':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(223,231,238,1.0)',
                interactive: true,
            }
                    break;
                case '7':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(220,229,237,1.0)',
                interactive: true,
            }
                    break;
                case '8':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(217,227,235,1.0)',
                interactive: true,
            }
                    break;
                case '9':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(214,224,234,1.0)',
                interactive: true,
            }
                    break;
                case '10':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(211,222,232,1.0)',
                interactive: true,
            }
                    break;
                case '11':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(209,221,231,1.0)',
                interactive: true,
            }
                    break;
                case '12':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(207,219,230,1.0)',
                interactive: true,
            }
                    break;
                case '13':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(205,217,229,1.0)',
                interactive: true,
            }
                    break;
                case '14':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(203,216,228,1.0)',
                interactive: true,
            }
                    break;
                case '15':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(201,214,227,1.0)',
                interactive: true,
            }
                    break;
                case '16':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(198,212,226,1.0)',
                interactive: true,
            }
                    break;
                case '17':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(196,211,224,1.0)',
                interactive: true,
            }
                    break;
                case '18':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(194,209,223,1.0)',
                interactive: true,
            }
                    break;
                case '19':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(192,207,222,1.0)',
                interactive: true,
            }
                    break;
                case '20':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(190,206,221,1.0)',
                interactive: true,
            }
                    break;
                case '21':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(188,204,220,1.0)',
                interactive: true,
            }
                    break;
                case '22':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(186,202,219,1.0)',
                interactive: true,
            }
                    break;
                case '23':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(184,201,218,1.0)',
                interactive: true,
            }
                    break;
                case '24':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(182,199,217,1.0)',
                interactive: true,
            }
                    break;
                case '25':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(179,197,215,1.0)',
                interactive: true,
            }
                    break;
                case '26':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(178,196,215,1.0)',
                interactive: true,
            }
                    break;
                case '27':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(177,194,214,1.0)',
                interactive: true,
            }
                    break;
                case '28':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(176,193,213,1.0)',
                interactive: true,
            }
                    break;
                case '29':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(175,192,212,1.0)',
                interactive: true,
            }
                    break;
                case '30':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(173,190,211,1.0)',
                interactive: true,
            }
                    break;
                case '31':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(172,189,210,1.0)',
                interactive: true,
            }
                    break;
                case '32':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(171,187,209,1.0)',
                interactive: true,
            }
                    break;
                case '33':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(170,186,208,1.0)',
                interactive: true,
            }
                    break;
                case '34':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(169,184,207,1.0)',
                interactive: true,
            }
                    break;
                case '35':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(167,183,207,1.0)',
                interactive: true,
            }
                    break;
                case '36':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(166,181,206,1.0)',
                interactive: true,
            }
                    break;
                case '37':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(165,180,205,1.0)',
                interactive: true,
            }
                    break;
                case '38':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(164,178,204,1.0)',
                interactive: true,
            }
                    break;
                case '39':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(163,177,203,1.0)',
                interactive: true,
            }
                    break;
                case '40':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(161,175,202,1.0)',
                interactive: true,
            }
                    break;
                case '41':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(160,174,201,1.0)',
                interactive: true,
            }
                    break;
                case '42':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(159,172,200,1.0)',
                interactive: true,
            }
                    break;
                case '43':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(158,171,199,1.0)',
                interactive: true,
            }
                    break;
                case '44':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(157,169,199,1.0)',
                interactive: true,
            }
                    break;
                case '45':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(155,168,198,1.0)',
                interactive: true,
            }
                    break;
                case '46':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(154,167,197,1.0)',
                interactive: true,
            }
                    break;
                case '47':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(153,165,196,1.0)',
                interactive: true,
            }
                    break;
                case '48':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(152,164,195,1.0)',
                interactive: true,
            }
                    break;
                case '49':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(151,162,194,1.0)',
                interactive: true,
            }
                    break;
                case '50':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(149,161,193,1.0)',
                interactive: true,
            }
                    break;
                case '51':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(148,159,192,1.0)',
                interactive: true,
            }
                    break;
                case '52':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(147,158,191,1.0)',
                interactive: true,
            }
                    break;
                case '53':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(146,156,191,1.0)',
                interactive: true,
            }
                    break;
                case '54':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(145,155,190,1.0)',
                interactive: true,
            }
                    break;
                case '55':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(143,153,189,1.0)',
                interactive: true,
            }
                    break;
                case '56':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(142,152,188,1.0)',
                interactive: true,
            }
                    break;
                case '57':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(141,150,187,1.0)',
                interactive: true,
            }
                    break;
                case '58':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(140,149,186,1.0)',
                interactive: true,
            }
                    break;
                case '59':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(137,147,185,1.0)',
                interactive: true,
            }
                    break;
                case '60':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(135,144,183,1.0)',
                interactive: true,
            }
                    break;
                case '61':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(133,142,182,1.0)',
                interactive: true,
            }
                    break;
                case '62':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(130,140,180,1.0)',
                interactive: true,
            }
                    break;
                case '63':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(128,137,179,1.0)',
                interactive: true,
            }
                    break;
                case '64':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(125,135,177,1.0)',
                interactive: true,
            }
                    break;
                case '65':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(123,133,176,1.0)',
                interactive: true,
            }
                    break;
                case '66':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(121,130,174,1.0)',
                interactive: true,
            }
                    break;
                case '67':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(118,128,173,1.0)',
                interactive: true,
            }
                    break;
                case '68':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(116,126,171,1.0)',
                interactive: true,
            }
                    break;
                case '69':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(113,124,170,1.0)',
                interactive: true,
            }
                    break;
                case '70':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(111,121,168,1.0)',
                interactive: true,
            }
                    break;
                case '73':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(108,119,167,1.0)',
                interactive: true,
            }
                    break;
                case '74':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(106,117,165,1.0)',
                interactive: true,
            }
                    break;
                case '75':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(104,114,164,1.0)',
                interactive: true,
            }
                    break;
                case '76':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(101,112,162,1.0)',
                interactive: true,
            }
                    break;
                case '77':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(99,110,161,1.0)',
                interactive: true,
            }
                    break;
                case '80':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(96,108,159,1.0)',
                interactive: true,
            }
                    break;
                case '81':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(94,105,158,1.0)',
                interactive: true,
            }
                    break;
                case '82':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(92,103,157,1.0)',
                interactive: true,
            }
                    break;
                case '84':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(89,101,155,1.0)',
                interactive: true,
            }
                    break;
                case '85':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(87,98,154,1.0)',
                interactive: true,
            }
                    break;
                case '86':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(84,96,152,1.0)',
                interactive: true,
            }
                    break;
                case '91':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(82,94,151,1.0)',
                interactive: true,
            }
                    break;
                case '93':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(80,92,149,1.0)',
                interactive: true,
            }
                    break;
                case '96':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(77,89,148,1.0)',
                interactive: true,
            }
                    break;
                case '97':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(75,87,146,1.0)',
                interactive: true,
            }
                    break;
                case '98':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(73,85,145,1.0)',
                interactive: true,
            }
                    break;
                case '101':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(70,83,143,1.0)',
                interactive: true,
            }
                    break;
                case '103':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(68,81,142,1.0)',
                interactive: true,
            }
                    break;
                case '109':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(66,79,141,1.0)',
                interactive: true,
            }
                    break;
                case '113':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(63,76,139,1.0)',
                interactive: true,
            }
                    break;
                case '114':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(61,74,138,1.0)',
                interactive: true,
            }
                    break;
                case '116':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(59,72,136,1.0)',
                interactive: true,
            }
                    break;
                case '117':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(56,70,135,1.0)',
                interactive: true,
            }
                    break;
                case '128':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(54,68,133,1.0)',
                interactive: true,
            }
                    break;
                case '150':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(52,66,132,1.0)',
                interactive: true,
            }
                    break;
                case '158':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(49,64,131,1.0)',
                interactive: true,
            }
                    break;
                case '161':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(47,61,129,1.0)',
                interactive: true,
            }
                    break;
                case '165':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(45,59,128,1.0)',
                interactive: true,
            }
                    break;
                case '176':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(43,57,126,1.0)',
                interactive: true,
            }
                    break;
                case '184':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(40,55,125,1.0)',
                interactive: true,
            }
                    break;
                case '185':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(38,53,123,1.0)',
                interactive: true,
            }
                    break;
                case '252':
                    return {
                pane: 'pane_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0',
                opacity: 1,
                color: 'rgba(118,129,141,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(36,51,122,1.0)',
                interactive: true,
            }
                    break;
            }
        }
}