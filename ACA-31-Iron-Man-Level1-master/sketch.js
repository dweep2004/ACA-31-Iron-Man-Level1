
var bg, backgroundImg;
var iron_man,iron_man_img;
function preload() {
  backgroundImg = loadImage("images/bg.jpg");
  iron_man_img=loadImage("images/iron.png")
}

function setup() {
  createCanvas(1000, 600);
  bg = createSprite(580,300);
  iron_man= createSprite(200,500,200,5)
  bg.addImage(backgroundImg)
  bg.scale=2
  iron_man.addImage(iron_man_img)
}

function draw() {
  if (keyDown("up")){
    iron_man.velocityY=-10;
  }
  if (keyDown("left")){
    iron_man.x=iron_man.x - 5;
  }
  if (keyDown("right")){
    iron_man.x=iron_man.x + 5;
  }
    iron_man.velocityY=iron_man.velocityY+0.5;
    drawSprites();
   
}

