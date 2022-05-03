var appleImage,apple, aGroup;
var bananaImage,banana, bGroup;
var bomb, bombBlastImage, bombImage;
var knife, knifeLeftImage, knifeRightImage, knifeImage;

function preload(){
  bk=loadImage ("images/background.jpg");
  appleImage=loadImage ("images/apple2.png");
  bananaImage=loadImage ("images/banana2.png");
  bombImage = loadImage ("images/bomb.png");
  bombBlastImage = loadImage ("images/bomb blast.png");
  knifeImage = loadImage ("images/knife.jpg");
  knifeLeftImage = loadImage ("images/knife left.png");
  knifeRightImage = loadImage ("images/knife right.png");
  }
  
function setup() {
  createCanvas(windowWidth, windowHeight);

  knife = createSprite (width/2, height-100, 50, 50);
  knife.addImage (knifeImage);
}



function draw() {
  background(bk);

  drawSprites();
}