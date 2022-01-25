var issimg,iss;
var bgimg;
var sp1,sp2,sp3,sp4,spacecraft;
var hasDocked;
function preload(){
issimg = loadImage("images/iss.png");
bgimg = loadImage("images/spacebg.jpg")
sp1 = loadImage("images/spacecraft1.png")
sp2 = loadImage("images/spacecraft2.png")
sp3 = loadImage("images/spacecraft3.png")
sp4 = loadImage("images/spacecraft4.png")
}
function setup() {
  createCanvas(1200,600);
  iss = createSprite(600,300,70,70);
  iss.addImage(issimg);
  iss.scale=1;
  spacecraft = createSprite(580,500,10,10);
  spacecraft.addImage(sp1)
  spacecraft.scale=0.3;
  hasDocked=false
}

function draw() {
  background(bgimg);  

if(!hasDocked){
  if(keyCode === LEFT_ARROW){
    spacecraft.velocityX=-2
    spacecraft.addImage(sp3)
  }
  if(keyCode === RIGHT_ARROW){
    spacecraft.velocityX=2
    spacecraft.addImage(sp4)
  }
  if(keyCode === DOWN_ARROW){
    spacecraft.velocityY=2
    spacecraft.addImage(sp2)
  }
  if(keyCode === UP_ARROW){
    spacecraft.velocityY=-2
    spacecraft.addImage(sp2)
  }
  if(spacecraft.isTouching(iss)){
    spacecraft.velocityX=0
    spacecraft.velocityY=0
    hasDocked=true
 }
}




  drawSprites();
}