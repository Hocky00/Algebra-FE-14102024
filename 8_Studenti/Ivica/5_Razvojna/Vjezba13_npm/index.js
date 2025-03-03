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

    $('[data-toggle="popover"]').popover();

    afterRender();
  }

  function afterRender() {
    $("table th").css("color", "darkBlue");
    addStripes();

    $("table tr").on("mouseenter", (event) => {
      $(event.currentTarget).css("backgroundColor", "lightBlue");
    });

    $("table tr").on("mouseleave", (event) => {
      $(event.currentTarget).removeAttr("style");
    });

    //nakon 2 sekunde brisevo sve pokemone koji pocinju s p

    setTimeout(function () {
      const hideElements = $('table td a:contains("p")').filter(function () {
        return this.innerHTML.indexOf("p") == 0;
      });
      hideElements.closest("tr").remove();
      addStripes();

      //ispisi broj uklonjenih elemenata
      $("<div><div>")
        .insertAfter($("#hb-template"))
        .text("Skriveno: " + hideElements.length + " elemenata");
    }, 2000);
  }

  function addStripes() {
    $("table tr").removeClass("striped");
    $("table tr:nth-child(even)").addClass("striped");
  }

  getPokemons().then((pkmns) => {
    fillList(pkmns);
  });

  $(window).resize(() => {
    console.log($(window).width());
  });
}
