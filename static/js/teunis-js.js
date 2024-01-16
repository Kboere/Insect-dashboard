/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/

console.log('yes');


var overlay = document.querySelector('#overlay');

var enthusiastCard = document.querySelector('.enthusiast');
var initiativeCard = document.querySelector('.initiative');

var popup1 = document.querySelector('.popup');
var popup2 = document.querySelector('.popupInitiative');


var liButton = document.querySelectorAll('.liButton');

var seeMore = document.querySelectorAll('.initiative .more');

var textArea = document.querySelector('#linkedinMessage');


function showPopup1() {
    popup2.classList.remove("popupActive");
    popup1.classList.add("popupActive");
    textArea.focus();

}


function showPopup2() {
    popup1.classList.remove("popupActive");
    popup2.classList.add("popupActive");

}


function hidePopups() {

    popup1.classList.remove("popupActive");
    popup2.classList.remove("popupActive");

}


for (let i = 0; i < 5; i++) {
    liButton[i].addEventListener("click", function (event) {

        showPopup1();
    });

}

for (let i = 0; i < 3; i++) {
    seeMore[i].addEventListener("click", function (event) {

        showPopup2();
    });

}




overlay.addEventListener("click", function (event) {

        hidePopups();
    });





//initiativeCard.addEventListener("click", function( event ) {
//    
//    showPopup2();
//});
