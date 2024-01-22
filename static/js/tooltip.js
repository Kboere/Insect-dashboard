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
                    <td colspan="2" id="population-s">' + (feature.properties['complete_dataset_inwoners'] !== null ? autolinker.link(feature.properties['complete_dataset_inwoners'].toLocaleString()) : '') + " inhabitants" + '</td>\
                </tr>\
                <tr class="no-display">\
                    <td colspan="2" id="surface-s">' + (feature.properties['complete_dataset_oppervlakteHa'] !== null ? autolinker.link(feature.properties['complete_dataset_oppervlakteHa'].toLocaleString()) : '') + " ha" + '</td>\
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
                    <td colspan="2" id="population-s">' + (feature.properties['complete_dataset_inwoners'] !== null ? autolinker.link(feature.properties['complete_dataset_inwoners'].toLocaleString()) : '') + " inhabitants" + '</td>\
                </tr>\
                <tr class="no-display">\
                    <td colspan="2" id="surface-s">' + (feature.properties['complete_dataset_oppervlakteHa'] !== null ? autolinker.link(feature.properties['complete_dataset_oppervlakteHa'].toLocaleString()) : '') + " ha" + '</td>\
                </tr>\
            </table>';
    }

    layer.bindPopup(popupContent, { maxHeight: 400 });
}
