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

var text = " Lorem ipsum dolor sit amet";

//1. Spremite duljinu stringa u varijablu.
var duljinaStringa = text.length;
console.log(duljinaStringa);

//2. Izdvojite riječ 'sit' u zasebnu varijablu.
var rijecSit = text.substr(19, 3);
console.log(rijecSit);
//ili ovako:
var rijecSit2 = text.substring(19, 22);
console.log(rijecSit2);

//3. Zamijenite riječ 'amet' sa riječi 'elit'.
var noviTekst = text.replace("amet", "elit");
console.log(noviTekst);

//4. Konkatenirajte u novu varijablu zadani string sa stringom 'consectetur adipiscing elit', sa zarezom izmedu.
var dodaniTekst = text + "," + "consectetur adipiscing elit";
console.log(dodaniTekst);

//5. Konvertirajte sve riječi u orginalnom stringu u velika slova
var velikiTekst = text.toUpperCase;
console.log(velikiTekst);

//6. Maknite počenu prazninu u stringu
var tekstBezPraznine = text.trim();
console.log(tekstBezPraznine);

//7. Nađite slovo na poziciji 12
var slovo = text.charAt(12);
console.log(slovo);
