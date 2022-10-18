let randomNumber1 = Math.floor(Math.random() * 6) + 1;

let randomDiceName1 = "dice" + randomNumber1 + ".png";

let randomSource1 = "images/" + randomDiceName1;

let imageOne = document.querySelectorAll("img")[0];

imageOne.setAttribute("src", randomSource1);


let randomNumber2 = Math.floor(Math.random() * 6) + 1;

let randomDiceName2 = "dice" + randomNumber2 + ".png";

let randomSource2 = "images/" + randomDiceName2;

let imageTwo = document.querySelectorAll("img")[1]

imageTwo.setAttribute("src", randomSource2);