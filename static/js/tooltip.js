function pop_Gemeentegrenzen_2019shpGemeentegrenzen__voorlopig____kustlijn_0(feature, layer) {
    layer.on({
        mouseout: function(e) {
            if (typeof layer.closePopup == 'function') {
                layer.closePopup();
            } else {
                layer.eachLayer(function(feature){
                    feature.closePopup()
                });
            }
        },
        mouseover: highlightFeature,
    });

    let popupContent = 
    '<table>\
            <tr">\
                <td colspan="2">' + '<h3 class="gemeente-titel">' + (feature.properties['Gemeentena'] !== null ? autolinker.link(feature.properties['Gemeentena'].toLocaleString()) : '') + '</h3>' + '</td>\
            </tr>\
            <tr>\
                <th scope="row">' + popupEnergyType + '</th>\
                <td>' + feature.properties['complete_dataset_' + propertyValue + currentYear] + energySymbol + '</td>\
            </tr>\
            <tr class="no-display">\
                <th scope="row">Groene energie (2018):</th>\
                <td colspan="2">' + (feature.properties['complete_dataset_groenPercentage/2018'] !== null ? autolinker.link(feature.properties['complete_dataset_groenPercentage/2018'].toLocaleString()) : '') + '%' + '</td>\
            </tr>\
            <tr class="no-display">\
                <td colspan="2">' + (feature.properties['FID'] !== null ? autolinker.link(feature.properties['FID'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr class="no-display">\
                <td colspan="2">' + (feature.properties['Code'] !== null ? autolinker.link(feature.properties['Code'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr class="no-display">\
                <td colspan="2">' + (feature.properties['Gemeenteco'] !== null ? autolinker.link(feature.properties['Gemeenteco'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr class="no-display">\
                <td colspan="2">' + (feature.properties['SHAPE_Leng'] !== null ? autolinker.link(feature.properties['SHAPE_Leng'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr class="no-display">\
                <td colspan="2">' + (feature.properties['SHAPE_Area'] !== null ? autolinker.link(feature.properties['SHAPE_Area'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr class="no-display">\
                <td colspan="2">' + (feature.properties['complete_dataset_gemeenteNaam'] !== null ? autolinker.link(feature.properties['complete_dataset_gemeenteNaam'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr class="no-display">\
                <td colspan="2" id="population-s">' + (feature.properties['complete_dataset_inwoners'] !== null ? autolinker.link(feature.properties['complete_dataset_inwoners'].toLocaleString()) : '') + " inhabitants" + '</td>\
            </tr>\
            <tr class="no-display">\
                <td colspan="2">' + (feature.properties['complete_dataset_huisHoudens'] !== null ? autolinker.link(feature.properties['complete_dataset_huisHoudens'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr class="no-display">\
                <td colspan="2" id="density-s">' + (feature.properties['complete_dataset_bevolkingsDichtheid'] !== null ? autolinker.link(feature.properties['complete_dataset_bevolkingsDichtheid'].toLocaleString()) : '') + " people / km2" + '</td>\
            </tr>\
            <tr class="no-display">\
                <td colspan="2" id="houses-s">' + (feature.properties['complete_dataset_aantalWoningen'] !== null ? autolinker.link(feature.properties['complete_dataset_aantalWoningen'].toLocaleString()) : '') + " houses" + '</td>\
            </tr>\
            <tr class="no-display">\
                <td colspan="2">' + (feature.properties['complete_dataset_percentageBewoond'] !== null ? autolinker.link(feature.properties['complete_dataset_percentageBewoond'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr class="no-display">\
                <td colspan="2" id="electricity-s">' + (feature.properties['complete_dataset_gemElekVerbuikKwh'] !== null ? autolinker.link(feature.properties['complete_dataset_gemElekVerbuikKwh'].toLocaleString()) : '') + " kWh (per house)" + '</td>\
            </tr>\
            <tr class="no-display">\
                <td colspan="2" id="gas-s">' + (feature.properties['complete_dataset_gemAardgasVerbruikM3'] !== null ? autolinker.link(feature.properties['complete_dataset_gemAardgasVerbruikM3'].toLocaleString()) : '') + " m3 (per house)" + '</td>\
            </tr>\
            <tr class="no-display">\
                <td colspan="2" id="businesses-s">' + (feature.properties['complete_dataset_aantalBedrijfvestg'] !== null ? autolinker.link(feature.properties['complete_dataset_aantalBedrijfvestg'].toLocaleString()) : '') + " businesses" + '</td>\
            </tr>\
            <tr class="no-display">\
                <td colspan="2" id="cars-s">' + (feature.properties['complete_dataset_totaalPersonenAuto'] !== null ? autolinker.link(feature.properties['complete_dataset_totaalPersonenAuto'].toLocaleString()) : '') + " cars" + '</td>\
            </tr>\
            <tr class="no-display">\
                <td colspan="2" id="surface-s">' + (feature.properties['complete_dataset_oppervlakteHa'] !== null ? autolinker.link(feature.properties['complete_dataset_oppervlakteHa'].toLocaleString()) : '') + " ha" + '</td>\
            </tr>\
            <tr class="no-display">\
                <th scope="row">complete_dataset_zonneStroomTj/2015</th>\
                <td id="zonnestroom-2015">' + (feature.properties['complete_dataset_zonneStroomTj/2015'] !== null ? autolinker.link(feature.properties['complete_dataset_zonneStroomTj/2015'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr class="no-display">\
                <th scope="row">complete_dataset_zonneStroomTj/2016</th>\
                <td id="zonnestroom-2016">' + (feature.properties['complete_dataset_zonneStroomTj/2016'] !== null ? autolinker.link(feature.properties['complete_dataset_zonneStroomTj/2016'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr class="no-display">\
                <th scope="row">complete_dataset_zonneStroomTj/2017</th>\
                <td id="zonnestroom-2017">' + (feature.properties['complete_dataset_zonneStroomTj/2017'] !== null ? autolinker.link(feature.properties['complete_dataset_zonneStroomTj/2017'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr class="no-display">\
                <th scope="row">complete_dataset_zonneStroomTj/2018</th>\
                <td id="zonnestroom-2018">' + (feature.properties['complete_dataset_zonneStroomTj/2018'] !== null ? autolinker.link(feature.properties['complete_dataset_zonneStroomTj/2018'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr class="no-display">\
                <th scope="row">complete_dataset_windStroomTj/2015</th>\
                <td id="windstroom-2015">' + (feature.properties['complete_dataset_windStroomTj/2015'] !== null ? autolinker.link(feature.properties['complete_dataset_windStroomTj/2015'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr class="no-display">\
                <th scope="row">complete_dataset_windStroomTj/2016</th>\
                <td id="windstroom-2016">' + (feature.properties['complete_dataset_windStroomTj/2016'] !== null ? autolinker.link(feature.properties['complete_dataset_windStroomTj/2016'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr class="no-display">\
                <th scope="row">complete_dataset_windStroomTj/2017</th>\
                <td id="windstroom-2017">' + (feature.properties['complete_dataset_windStroomTj/2017'] !== null ? autolinker.link(feature.properties['complete_dataset_windStroomTj/2017'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr class="no-display">\
                <th scope="row">complete_dataset_windStroomTj/2018</th>\
                <td id="windstroom-2018">' + (feature.properties['complete_dataset_windStroomTj/2018'] !== null ? autolinker.link(feature.properties['complete_dataset_windStroomTj/2018'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr class="no-display">\
                <th scope="row">complete_dataset_biogasStroomTj/2015</th>\
                <td id="biogasstroom-2015">' + (feature.properties['complete_dataset_biogasStroomTj/2015'] !== null ? autolinker.link(feature.properties['complete_dataset_biogasStroomTj/2015'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr class="no-display">\
                <th scope="row">complete_dataset_biogasStroomTj/2016</th>\
                <td id="biogasstroom-2016">' + (feature.properties['complete_dataset_biogasStroomTj/2016'] !== null ? autolinker.link(feature.properties['complete_dataset_biogasStroomTj/2016'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr class="no-display">\
                <th scope="row">complete_dataset_biogasStroomTj/2017</th>\
                <td id="biogasstroom-2017">' + (feature.properties['complete_dataset_biogasStroomTj/2017'] !== null ? autolinker.link(feature.properties['complete_dataset_biogasStroomTj/2017'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr class="no-display">\
                <th scope="row">complete_dataset_biogasStroomTj/2018</th>\
                <td id="biogasstroom-2018">' + (feature.properties['complete_dataset_biogasStroomTj/2018'] !== null ? autolinker.link(feature.properties['complete_dataset_biogasStroomTj/2018'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr class="no-display">\
                <th scope="row">complete_dataset_groenPercentage/2015</th>\
                <td id="groen-energie-2015">' + (feature.properties['complete_dataset_groenPercentage/2015'] !== null ? autolinker.link(feature.properties['complete_dataset_groenPercentage/2015'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr class="no-display">\
                <th scope="row">complete_dataset_groenPercentage/2016</th>\
                <td id="groen-energie-2016">' + (feature.properties['complete_dataset_groenPercentage/2016'] !== null ? autolinker.link(feature.properties['complete_dataset_groenPercentage/2016'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr class="no-display">\
                <th scope="row">complete_dataset_groenPercentage/2017</th>\
                <td id="groen-energie-2017">' + (feature.properties['complete_dataset_groenPercentage/2017'] !== null ? autolinker.link(feature.properties['complete_dataset_groenPercentage/2017'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr class="no-display">\
                <th scope="row">complete_dataset_groenPercentage/2018</th>\
                <td id="groen-energie-2018">' + (feature.properties['complete_dataset_groenPercentage/2018'] !== null ? autolinker.link(feature.properties['complete_dataset_groenPercentage/2018'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr class="no-display">\
                <td id="totaal-verbruik-2015" colspan="2">' + (feature.properties['complete_dataset_totaalEnergieGebruik/2015'] !== null ? autolinker.link(feature.properties['complete_dataset_totaalEnergieGebruik/2015'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr class="no-display">\
                <td id="totaal-verbruik-2016" colspan="2">' + (feature.properties['complete_dataset_totaalEnergieGebruik/2016'] !== null ? autolinker.link(feature.properties['complete_dataset_totaalEnergieGebruik/2016'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr class="no-display">\
                <td id="totaal-verbruik-2017" colspan="2">' + (feature.properties['complete_dataset_totaalEnergieGebruik/2017'] !== null ? autolinker.link(feature.properties['complete_dataset_totaalEnergieGebruik/2017'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr class="no-display">\
                <td id="totaal-verbruik-2018" colspan="2">' + (feature.properties['complete_dataset_totaalEnergieGebruik/2018'] !== null ? autolinker.link(feature.properties['complete_dataset_totaalEnergieGebruik/2018'].toLocaleString()) : '') + '</td>\
            </tr>\
        </table>';
    layer.bindPopup(popupContent, {maxHeight: 400});
}