var diceOneImage = Math.round(Math.random() * Math.floor(5) + 1);
var diceTwoImage = Math.round(Math.random() * Math.floor(5) + 1);
document
  .getElementsByTagName("img")[0]
  .setAttribute("src", "images/dice" + diceOneImage + ".png");
document
  .getElementsByTagName("img")[1]
  .setAttribute("src", "images/dice" + diceTwoImage + ".png");

if (diceOneImage > diceTwoImage) {
  document.getElementById("headline").innerHTML = " 🏆 Player One Wins!  🏆 ";
} else if (diceOneImage < diceTwoImage) {
  document.getElementById("headline").innerHTML = " 🏆 Player Two Wins! 🏆 ";
} else {
  document.getElementById("headline").innerHTML = "It's A Draw!";
}

const refreshButton = document.querySelector('.refresh-button');

const refreshPage = () => {
  location.reload();
}

refreshButton.addEventListener('click', refreshPage)
