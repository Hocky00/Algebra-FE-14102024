//1. Pomoću petlje napravite iteraciju kroz niz i ispisite u konzolu sve elemente niza.
//2. Dodajte svoje ime na kraj niza.
//3. Koristeći petlju, napravite iteraciju kroz ovaj niz te nakon išto ispišete "Jane" izađite iz petlje.
//4. Napišite naredbu za uklanjanje undefined vrijednosti iz niza.

var names = ['John', 'Jane', 'Bob',, 'Mike'];

// console.log(names);


//1. Pomoću petlje napravite iteraciju kroz niz i ispisite u konzolu sve elemente niza.(for petlja)

for (var i = 0; i < names.length; i++){
    console.log(names[i]);
}
// ili ovako: (for...of petlja):

//  for (var name of names) {
    //  console.log(name);
//  }


//2. Dodajte svoje ime na kraj niza. Metoda push dodaje element NA KRAJ niza.

names.push('Ivica');
console.log(names);

// names[9] = 'Goran';


//3. Koristeći petlju, napravite iteraciju kroz ovaj niz te nakon išto ispišete "Jane" izađite iz petlje.

for (var i=0; i <= names.length-1; i++) {
    console.log(names[i]);
    if (names[i] === 'Jane') {
        break;
    }
}

//  ili ovako:

     for (var name of names) {
     console.log(name);
     if (name === 'Bob') break;
     }


//4. Napišite naredbu za uklanjanje undefined vrijednosti iz niza.
// splice metoda mice elemente iz niza. Prvi parametar je index od kojeg 
// pocinje brisanje, a drugi parametar je broj elemenata koji se brisu.


for (var i = 0; i < names.length; i++){
 if (!names[i]) {
    names.splice(i,1);
 }
}

console.log(names);
