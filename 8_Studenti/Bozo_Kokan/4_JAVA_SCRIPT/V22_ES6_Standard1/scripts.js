// 1. Postavite “use strict” direktivu na početak programa u scripts.js. Ispravite sve greške koje se javljaju.

// 2. Dodajte polje "user" u "users" pomoću spread operatora. Spremite rezultat u novu varijablu i ispisite rezultat.

// 3.Koju vrijednost vraćaju console.log izjave? Probajte zamijeniti let sa var.


"use strict";

// 1.
var a = 78;
var b = 34;
// delete a;
// delete window.b;
const myObject = {property1:1, property2:2, property1:1};

// 2.
const users = [
    { name: 'Fabio', surname: 'Biondi' },
    { name: 'Mario', surname: 'Rossi' },
  ];
  
  const user = { name: 'Lorenzo', surname: 'Verdi' };

const allUsers = [...users,user];
console.log(allUsers);

// let niz1 = [1,2,3];
// let niz2 = niz1;
// console.log(niz2);
// niz2[3] = 5;
// console.log(niz2);
// console.log(niz1);

// let niz3 = [1,2,3];
// const noviElement = 7;
// console.log(niz3);
// let noviNiz = [...niz3,noviElement];
// niz3 = noviNiz;
// console.log(niz3);
  
  // 3.
  for (let i = 0; i < 10; i++) {
   setTimeout(function() {
     console.log('The number is ' + i);
   }, 1000);
   //console.log(i);
  }
  console.log(i);

  // Bonus --- REST operator

  function ispisiImena(...args){
    console.log(args);
    console.log(args[0]);
    console.log(args[1]);
  }

  ispisiImena("Ivan", "Marija");