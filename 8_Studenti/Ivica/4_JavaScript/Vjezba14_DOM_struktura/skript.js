// 1. U folderu /Pocetno se nalaze html i js file kao pocetna tocka.
// 2. Uključite script.js u html dokument.
// 2. HTML index.html-a treba promijeniti pomocu JS i HTML DOM API-ja tako da:
// - se na početak doda h1 element

// var descriptionNode = document.querySelector(".description");
// var h1 = document.createElement("h1");
// descriptionNode.parentNode.prepend(h1);

var descriptionNode = document.querySelector(".description");
var h1 = document.createElement("h1");
descriptionNode.parentNode.prepend(h1);

// console.log(descriptionNode);

// - ispod diva sa klasom "description" se umetne novi div sa klasom "info"

var infoDiv = document.createElement("div");
infoDiv.classList.add("info");
descriptionNode.parentNode.insertBefore(infoDiv, descriptionNode.nextSibling);


// - lista u footer elementu na kraju mora sadrzavati 5 praznih <li> elemenata

var ul = document.getElementsByTagName("ul");
console.log(ul);
