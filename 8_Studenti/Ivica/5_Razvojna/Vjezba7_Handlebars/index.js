const source = document.getElementById("hb-template").innerHTML;
const destination = document.getElementById("hb-result");
const template = Handlebars.compile(source);

document.addEventListener("DOMContentLoaded", main);


  function main() {

  async function getPokemons() {
    const response = await fetch(
      "https://pokeapi.co/api/v2/pokemon-color/yellow"
    );

    const responseData = await response.json();

    return responseData.pokemon_species.slice(0, 20);
  }


 //prikazi pokemone

 function fillList(pokemons) {
    
  const context = { pokemon: pokemons };
  const html = template(context);
  destination.innerHTML = html;
 }

 getPokemons().then((pkmns) => {
  fillList(pkmns);
 });
}