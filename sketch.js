var sea
var seaImg
var shipImg1
function preload(){
seaImg = loadAnimation("sea.png");
shipImg1 = loadAnimation("ship-1.png","ship-2.png","ship-3.png", "ship-4.png");

sea.addImage(seaImg);
}

function setup(){
  createCanvas(400,400);
}



function draw() {
  background("blue");

}