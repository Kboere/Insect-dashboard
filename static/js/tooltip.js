// Assuming you have removed the div with id "myDiv"
var deleteCameraInfo = document.querySelector(".gemeente-stats.camera");

// // Function to remove the div
// function removeDiv() {
//     if (deleteCameraInfo) {
//         deleteCameraInfo.remove();
//     }
// }

// Function to show the div
function showDiv() {
    // Check if the div already exists
    if (deleteCameraInfo) {
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
                    feature.closePopup()
                });
            }
        },
        mouseover: highlightFeature,
        click: function (e) {
            // Show the div when the layer is clicked
            showDiv();
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
