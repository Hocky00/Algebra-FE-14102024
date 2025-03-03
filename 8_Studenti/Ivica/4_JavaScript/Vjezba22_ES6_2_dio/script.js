// 1. Napišite Promise koji čeka funkciju getX, i na resolved reagira sa console.log-om vrijednosti vraćene vrijednosti,
//  a na reject reagira sa console.log-om stringa "Oh no!"

//                function getX() {
// return Math.random() >= 0.5;
//                 }

// arow funkcija

const getX = () => Math.random() >= 0.5;

// console.log(getX());

const prom = new Promise((resolve, reject) => {
  const x = getX();

  if (x) {
    return setTimeout(() => resolve(x), 1000);
  }

  setTimeout(() => reject(x), 1000);
});

prom
  .then((value) => console.log(`Yay! ${value}`))
  .catch((value) => console.log(`Oh no! ${value}`));

// console.log(prom);







// 2. Ako već niste, prepišite sve funkcije u arrow funkcije.
