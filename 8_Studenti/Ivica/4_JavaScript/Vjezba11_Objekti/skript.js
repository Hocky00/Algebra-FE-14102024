//   1. Kreiraj objekt koji reprezentira neki specifični auto, sa bar 8 svojstava, od kojih su 3 funkcije (npr. ubrzaj, zakoci itd.),
//     a jedna je također objekt. Probajte referencirati druge vrijednosti objekta u funkcijama.
//   Svaka funkcija mora primati argumente i vracati neku vrijednost.

var auto = {
  brend: {
    tip: "Volvo",
    model: "XC60",
  },
  boja: "crna",
  brzina: 60,
  maxBrzina: 200,
  godinaProizvodnje: 2019,
  ubrzaj: function (brojSekundi) {
    while (brojSekundi && this.brzina <= this.maxBrzina) {
      // this.maxBrzina je referenca na maxBrzina svojstvo objekta
      this.brzina += 5;
      brojSekundi--;
    }
    return this.brzina;
  },

  zakoci: function (brojSekundi) {
    while (brojSekundi && this.brzina > 0) {
      this.brzina -= 20;
      brojSekundi--;
    }
    return this.brzina; // ?
  },

  promijeniBoju: function (novaBoja) {
    this.boja = novaBoja;
    return this.boja;
  },
};

// console.log(auto);

// 2. Pozovite funkcije svog objekta sa argumentima i ispisite rezultat.

console.log(auto.brzina);
console.log(auto.zakoci(2));
console.log(auto.ubrzaj(10));
console.log(auto.promijeniBoju("bijela"));

// 3. Sa petljom pristupi svim brojivim svojstvima tvog auto objekta i ispiši vrijednosti u konzoli zajedno sa njihovim imenima (kljucevima)
//  (npr. ime: Ivan)

//      Object.defineProperty(auto, "godinaProizvodnje", {
//      enumerable: false,
//      });

for (var key in auto) {
  var value = auto[key];
  if (auto.propertyIsEnumerable(key)) {
    console.log(key + ": " + value);
  }
}

// 4. Ispiši u konzoli razumljivu rečenicu koja uključuje bar 2 svojstva tvog objekta.

console.log('Boja moga ' + auto.brend.tip + ' auta je ' + auto.boja);

// 5. Pretvori svoj objekt u JSON string.


console.log(JSON.stringify(auto));