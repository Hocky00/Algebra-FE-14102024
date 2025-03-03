/*
Koristeći metode rada nad stringovima iz zadanog stringa:
  1. Spremite duljinu stringa u varijablu.
  2. Izdvojite riječ 'sit' u zasebnu varijablu.
  3. Zamijenite riječ 'amet' sa riječi 'elit'.
  4. Konkatenirajte u novu varijablu zadani string sa stringom 'consectetur adipiscing elit', sa zarezom izmedu.
  5. Konvertirajte sve riječi u orginalnom stringu u velika slova
  6. Maknite počenu prazninu u stringu
  7. Nađite slovo na poziciji 12
*/

var text = " Lorem ipsum  dolor sit amet";

//1. Spremite duljinu stringa u varijablu.
var duljinaStringa = text.length;
console.log(duljinaStringa);

//2. Izdvojite riječ 'sit' u zasebnu varijablu.
// Ova metoda se vise ne koristi.
var rijecSit = text.substr(20, 4);
console.log(rijecSit);
//ili ovako. Ova metoda se koristi
var rijecSit2 = text.substring(20, 23);
console.log(rijecSit2);

//3. Zamijenite riječ 'amet' sa riječi 'elit'.
var noviTekst = text.replace("amet","elit");
console.log(noviTekst);

//4. Konkatenirajte u novu varijablu zadani string sa stringom 'consectetur adipiscing elit', sa zarezom izmedu.
var dodaniTekst = text + "," + " consectetur adipiscing \"elit\".";
console.log(dodaniTekst);

//5. Konvertirajte sve riječi u orginalnom stringu u velika slova
var velikiTekst = text.toUpperCase();
console.log(velikiTekst);

//6. Maknite početnu prazninu u stringu
var tekstBezPrvePraznine = text.trim();
console.log(tekstBezPrvePraznine);

//7. Nađite slovo na poziciji 12
// Dobili smo prazninu izmedju rijeci.
var slovo = text.charAt(12);
console.log(slovo);
