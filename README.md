<img width="1709" alt="voorkant" src="https://github.com/Kboere/Insect-dashboard/blob/main/static/images/voorkant.png">

# Het Naturalis insecten dashboard concept
Tijdens dit 5 week durende project, hebben we met een groep van 3 personen gewerkt aan een insecten dashboard voor DIOPSIS. Zij vallen onder naturalis en zijn vooral bezig met het onderzoeken hoe de insecten ervoor staan. Hierbij houden ze data bij door middel van een camera en AI. De camera's van DIOPSIS staan op 53 plekken door 6 provincies en met dank aan AI kan er worden gemeten welk soorten/families er op deze plekken zijn. Wij hebben in ons concept via een visuele manier proberen vast te leggen hoe de verschillende eindgebruikers deze data kunnen bekijken

## 🎯 Features
Wij hebben ervoor gekozen om te focussen op een aantal features. In de tabel hieronder kun je ze bekijken:

| Features | 
| ----------- | 
| Interactieve kaart van Nederland | 
| Gebruik van QGIS & Leaflet | 
| Leaflet Markers voor camera locaties | 
| Gebruik van stacked barchart met d3.js |
| Gebruik van Treemap met d3.js |
| Filtering op basis van: provincie, locatie, soort, familie & landschap |
| Gebruik van Zoomable area chart met d3.js |

## 🚀 Dit Project Gebruiken?
Om de app te gebruiken moet je deze repository clonen. gebruik de volgende commando in jouw Terminal:
```
git clone https://github.com/Kboere/Insect-dashboard.git
```

Nadat je dit hebt gedaan is het noodzakelijk om alle **NPM Packages** te downloaden. Deze kun je zien in de package.json file onder "dependencies". Gebruik hiervoor:
```
$ npm install (naam van package)
```
#### .env file aanmaken

Het is belangrijk dat je een .env file aanmaakt. Hier in staat namelijk een "geheime" code die je gaat aanmaken zodat (in dit geval nodemeon) ziet op welke localhost port de websote te zien zal zijn.

in het .env file zet je vervolgens het volgende:

```
PORT=3000

// dit mag ook een ander getal zijn!
```

### Developing

Nadat je alles hebt geinstallerd en gedownload kun je een "development server" aanmaken, doe doe je op deze manier in je Terminal:

```bash
npm start
```

Je kan het resultaat bekijken met via de opgegeven PORT die je wil gebruiken. in de meeste gevallen zal dat http://localhost:3000/ zijn.

## GEFELICITEERD!🎉  je kunt het project gaan gebruiken!

## ✍🏻 Auteur
Dit project is gemaakt door Kevin Boere, Luca Oudejans & Bibi van Beurden

## 📜 License
Copyright © 2023 Kevin Boere<br>
Dit project heeft een [MIT](https://github.com/Kboere/Insect-dashboard/blob/main/LICENSE) license

