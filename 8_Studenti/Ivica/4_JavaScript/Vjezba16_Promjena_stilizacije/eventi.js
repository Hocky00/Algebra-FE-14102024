var button = document.getElementById("btn");

function onClickHandler(e) {
console.log("Kliknuto na gumb");
}

// button.onclick = onClickHandler;
button.addEventListener("click", onClickHandler);