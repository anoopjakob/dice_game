var randomNumber1 = Math.floor(Math.random()*6) +1;
var imageDest1 = "images/"+"dice"+ randomNumber1+ ".png";
document.querySelector("body > div > div:nth-child(2) > img").setAttribute("src",imageDest1);

var randomNumber2 = Math.floor(Math.random()*6) +1;
var imageDest2 = "images/"+"dice"+ randomNumber2+ ".png";
document.querySelector("body > div > div:nth-child(3) > img").setAttribute("src",imageDest2);

// document.querySelector("body > div > h1")

if(randomNumber1>randomNumber2){
  document.querySelector("body > div > h1").innerHTML="🚩 player 1 wins";
}
else if(randomNumber1<randomNumber2){
  document.querySelector("body > div > h1").innerHTML=" Player 2 Wins! 🚩";
}
else{
  document.querySelector("body > div > h1").innerHTML=" Draw!";
}
