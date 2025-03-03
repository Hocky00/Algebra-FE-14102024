// 1. U folderu /Pocetno se nalaze html i js file kao pocetna tocka.
// 2. Stil elemenata treba promijeniti pomocu JS i HTML DOM API-ja tako da:

//-----------------------------------------------------------------------------------------
// 1 - umjesto circle buleta na elementima liste prikažu redne brojke

var liNiz = document.querySelectorAll("li");

// console.log(li);
// li.style.listStyleType = "decimal";

for (var i = 0; i < liNiz.length; i++) {
  liNiz[i].style.listStyleType = "decimal";
}

// ---------------------------------------------------------------------------------------
// 2 - div sa klasom info treba dobiti klasu koja će ga sakriti (dodajte u stylesheet)

var info = document.querySelector(".info");
info.classList.add("hide");

//-----------------------------------------------------------------------------------------
// 3 - saznajte margin-left izračunati stil koji je primijenjen na body elementu

var body = document.querySelector("body");
var bodyStyles = window.getComputedStyle(body, null);
var marginLeft = bodyStyles.getPropertyValue("margin-left");
console.log(marginLeft);

//-----------------------------------------------------------------------------------------
// - 4 - animirajte veličinu margine body elementa od pocetne do 30px i natrag u ponavljajućoj petlji

var marginNum = marginLeft;
var reverse = false;

// console.log(marginNum); 

function frame() {

  if (reverse) {
    marginNum--;

  } else {
    marginNum++;
  }

  if (marginNum == 30) {
    reverse = true;
  }

  if (marginNum === 0) {
    reverse = false;
  }

  body.style.margin = marginNum + "px";
}

var mojInterval = setInterval(frame, 500);
// clearInterval(mojInterval);

// var mojTimeout = setTimeout(function () {
//   clearInterval(mojInterval);
// }, 20000);

// clearTimeout(mojTimeout);
