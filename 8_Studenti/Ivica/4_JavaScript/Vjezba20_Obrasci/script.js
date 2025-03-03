import ispisiPozdrav from "./utility/mylib.js";
import mojaFunkcija from "./utility/mylib.js";
import {
  zbrojiDvaBroja as f,
  pomnoziDvaBroja,
  mojNiz,
  mojObjekt,
  Exercise,
} from "./utility/mylib.js";

// window.addEventListener("load", main);           <---- alternativa
document.addEventListener("DOMContentLoaded", main);

function main() {
  ispisiPozdrav();
  mojaFunkcija();

  var zbroj = f(2, 3);
  console.log("Zbroj " + zbroj);

  var umnozak = pomnoziDvaBroja(2, 3);
  console.log("Umnozak " + umnozak);

}
console.log(mojNiz);
console.log(mojObjekt);

console.log(Exercise.getTotalSteps());
Exercise.walk();
Exercise.walk();
Exercise.walk();
Exercise.walk();
console.log(Exercise.getTotalSteps());