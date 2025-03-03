// 1. Napišite while petlju koja će ispisivati brojeve od 3 do 20, osim onih djeljivih sa 9.

var i = 2;

while (i <= 20) {
    

    if ( i % 9 !== 0) console.log(i);
    
    i++;
}

// alternativa

for(let i = 3; i<= 20; i++) {
    if (i % 9 !== 0) console.log(i);
}




// 2. Koja je vrijednost isprintana u konzoli?

var varOne = 0;
for (i = 0; i < 4; i++){
    for (j = 0; j < 4; j++){
        varOne++;
    }
}
console.log(varOne);

//  Bonus

//  obicna (standardna) "for" petlja I
                                  

const niz = ["a", "b", "c", "d"];

for (let i=0; i<niz.length; i++) {
console.log(niz[i]);
}

//   for...of petlja         .....(bolja,laksa,kompaktnija....)za ispisivanje stringova itd.

for (const element of niz) {
    console.log(element);
}

//for...in  za ispisivanje objekata

const objekt = {a:1, b:2, c:3};
for(const svojstvo in objekt){
    console.log(svojstvo + " : " + objekt[svojstvo]);
}