//Opcija 1
/*
var request = new XMLHttpRequest();

request.open("GET", "https://dummyjson.com/products/1", true);

request.onload = function(result); {
    console.log(result.currentTarget.responseText);
};

request.send();
*/

//Opcija 2

function getData() {
  fetch("https://dummyjson.com/products/1")
    .then((response) => response.json())
    .then((responseData) => console.log(responseData))
    .catch((error) => console.log(error));
}
getData();

//Opcija 3

var divEl = document.getElementById("div");
var btn = document.getElementById("btn");

btn.addEventListener("click", getData2);

async function getData2() {
  try {
    const response = await fetch("https://dummyjson.com/products/2");
    const responseData = await response.json();

    divEl.innerText = responseData.description;

    console.log(responseData);
  } catch (error) {
    console.log(error);
  }
}
getData2();
