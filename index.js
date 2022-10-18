//first dice

let randomNumber1 = Math.floor(Math.random() * 6) + 1;

let randomSource1 = "images/dice" + randomNumber1 + ".png";

document.querySelectorAll("img")[0].setAttribute("src", randomSource1);


//second dice

let randomNumber2 = Math.floor(Math.random() * 6) + 1;

let randomSource2 = "images/dice" + randomNumber2 + ".png";

 document.querySelectorAll("img")[1].setAttribute("src", randomSource2);


//messages
let message = document.querySelector("h1").innerHTML;

if (randomNumber1 > randomNumber2) {
   document.querySelector("h1").innerHTML = "Player 1 wins!";
} else if (randomNumber1 < randomNumber2) {
   document.querySelector("h1").innerHTML = "Player 2 wins!";
} else if (randomNumber1 === randomNumber2) {
    document.querySelector("h1").innerHTML = "Draw!";
}