const source = document.getElementById("hb-template").innerHTML;
const destination = document.getElementById("hb-result");
const template = Handlebars.compile(source);

document.addEventListener("DOMContentLoaded", main);

function main() {
  // Dohvati pokemone

  async function getPokemons() {
    const response = await fetch(
      "https://pokeapi.co/api/v2/pokemon-color/yellow"
    );
    const responseData = await response.json();
    return responseData.pokemon_species.slice(0, 20); //slice metoda vraća niz (ona je skratila naš niz sa 80 na 20)
    //niz koji nastaje je shallow kopija (dodatni pokazivač koji pokazuje na jedan određeni dio početnog niza)
  }

  // Prikazi pokemone

  function fillList(pokemons) {
    const context = {
      pokemon: pokemons,
    };
    const html = template(context);
    destination.innerHTML = html;
    $('[data-toggle="popover"]').popover();

    afterRender();
  }

  function afterRender() {
    $("table th").css("color", "darkBlue");
    addStripes();

    //Nakon 2s brišemo sve pokemone koji počinju sa slovom p

    setTimeout(function () {
      const hideElements = $("table td a:contains('p')").filter(function () {
        //return true ili false
        return this.innerHTML.indexOf("p") == 0;
      });
      hideElements.closest("tr").remove();
      addStripes();
    }, 2000);
  }

  function addStripes() {
    $("table tr").removeClass("striped");
    $("table tr:nth-child(even)").addClass("striped");
  }

  getPokemons().then((pkmns) => {
    fillList(pkmns);
  });
}
