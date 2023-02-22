var containerE1 = document.querySelector(".container");

for (let index = 0; index < 30; index++) {
  var colorContainerE1 = document.createElement("div");

  colorContainerE1.classList.add("colorContainer");
  containerE1.appendChild(colorContainerE1);
}

var colorContainerE1s = document.querySelectorAll(".colorContainer");

generateColors();

function generateColors() {
  colorContainerE1s.forEach((colorContainerE1) => {
    var newColorCode = randomColor();
    colorContainerE1.style.backgroundColor = "#" + newColorCode;
    colorContainerE1.innerText = "#" + newColorCode;
  });
}

function randomColor() {
  var chars = "0123456789abcdef";
  var colorCodeLength = 6;
  let colorCode = "";
  for (let index = 0; index < colorCodeLength; index++) {
    var randomNum = Math.floor(Math.random() * chars.length);
    colorCode += chars.substring(randomNum, randomNum + 1);
  }
  return colorCode;
}
