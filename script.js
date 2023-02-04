var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");

// document.body.style.background = "blue";

function setGradient() {
    document.body.style.background = "linear-gradient(to right, " + color1.value + "," + color2.value + ")";

    css.textContent = body.style.bacground + ";";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);