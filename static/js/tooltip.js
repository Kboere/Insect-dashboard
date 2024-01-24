// Assuming you have removed the div with id "myDiv"
var deleteCameraInfo = document.querySelector(".gemeente-stats.camera");
var deleteGrafieken = document.querySelectorAll(".gemeente-stats.grafiek");

// Function to show/hide the div based on groenPercentage
function showDiv(groenPercentage) {
    // Check if the div with camera info already exists
    if (deleteCameraInfo) {
        // Display "grafiek" if groenPercentage is not 0, otherwise hide it
        deleteGrafieken.forEach(grafiek => {
            grafiek.style.display = groenPercentage === 0 ? "none" : "flex";
        });

        // Display "camera" div
        deleteCameraInfo.style.display = "flex";
    }
}

function pop_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0(feature, layer) {
    layer.on({
        mouseout: function (e) {
            if (typeof layer.closePopup == 'function') {
                layer.closePopup();
            } else {
                layer.eachLayer(function (feature) {
                    feature.closePopup();
                });
            }
        },
        mouseover: highlightFeature,
        click: function (e) {
            // Show the div with appropriate display settings
            showDiv(feature.properties['complete_dataset_groenPercentage/2018']);
        }
    });

    let groenPercentage = feature.properties['complete_dataset_groenPercentage/2018'];

       // Check if groenPercentage is 0
       if (groenPercentage === 0) {
        // Set different content if groenPercentage is 0
        var popupContent =
            '<table>\
                <tr">\
                    <td colspan="2">' + '<h3 class="gemeente-titel">' + (feature.properties['Gemeentena'] !== null ? autolinker.link(feature.properties['Gemeentena'].toLocaleString()) : '') + '</h3>' + '</td>\
                </tr>\
                <tr>\
                    <th scope="row"> Niet aangesloten </th>\
                </tr>\
                <tr class="no-display">\
                    <td colspan="2" id="population-s">' + "Geen data" + '</td>\
                </tr>\
                <tr class="no-display">\
                    <td colspan="2" id="surface-s">' + "Geen data" + '</td>\
                </tr>\
            </table>';
    } else {
        // Use the original content if groenPercentage is not 0
        var popupContent =
            '<table>\
                <tr">\
                    <td colspan="2">' + '<h3 class="gemeente-titel">' + (feature.properties['Gemeentena'] !== null ? autolinker.link(feature.properties['Gemeentena'].toLocaleString()) : '') + '</h3>' + '</td>\
                </tr>\
                <tr>\
                    <th scope="row"> Biomassa: </th>\
                    <td>' + plusSymbol + groenPercentage + energySymbol + '</td>\
                </tr>\
                <tr class="no-display">\
                    <td colspan="2" id="population-s">' + (feature.properties['complete_dataset_aantalInsecten'] !== null ? autolinker.link(feature.properties['complete_dataset_aantalInsecten'].toLocaleString()) : '') + " insecten" + '</td>\
                </tr>\
                <tr class="no-display">\
                    <td colspan="2" id="surface-s">' + (feature.properties['complete_dataset_aantalCamera'] !== null ? autolinker.link(feature.properties['complete_dataset_aantalCamera'].toLocaleString()) : '') + " camera's" + '</td>\
                </tr>\
            </table>';
    }

    layer.bindPopup(popupContent, { maxHeight: 400 });
}
