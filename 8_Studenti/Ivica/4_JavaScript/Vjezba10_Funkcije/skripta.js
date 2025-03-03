

var words = [
  "quickest",
  "brown",
  "fox",
  "jumps",
  "over",
  "the",
  "lazy",
  "dog",
  "otorinolaringologija",
];

//1. Napišite JavaScript funkciju koja prihvaća zadani niz 
// kao parametar 
// i pronalazi najdužu riječ unutar niza.

function findLongestWord(niz) {
  var word = "";

  for (var i = 0; i < niz.length; i++) {
    if (word.length < niz[i].length) {
      word = niz[i];
    }
  }

  return word;
}

var najduzaRijec = findLongestWord(words);

console.log(najduzaRijec);

// Bonus

var novaFunkcija = findLongestWord;

console.log(novaFunkcija(words));


// forEach

var mojNiz = [1, 2, 3, 4];

function ispisi(element) {
  console.log(element);
}

mojNiz.forEach(ispisi);

mojNiz.forEach(function (el) {
  console.log(el);
});

//   map

function novi(br){
    return br + 1;
}

var noviNiz = mojNiz.map(novi); 



console.log(mojNiz);
console.log(noviNiz);











//2. Vratite tu riječ iz funkcije i spremite u varijablu.

//3. Ispišite varijablu u konzoli.
