var bath ;
var brush ;
var eat ;
var gym ;
var sleep ;
var move ;
var at ;
var bg ;
var edges ;

function setup() {
  createCanvas(600,500);
  at = createSprite(300, 230);
  at.addAnimation("sleeping",sleep);
  at.scale = 0.1 ;

}

function draw() {
  background(bg);  
  drawSprites();
  textSize(20);
  fill("white");
  text("Instructions :-" , 20 ,35);
  textSize(15);
  text(" UP ARROW = BRUSHING",20,55);
  text("DOWN ARROW  = GYMING",20,70);
  text("LEFT ARROW = EATING",20,85);
  text("RIGHT ARROW = BATHING",20,100);
  text("M KEY = MOVING",20,115);
  
  edges = createEdgeSprites();
  at.bounceOff(edges);

  if(keyDown("UP_ARROW")){
    at.addAnimation("brushing",brush);
    at.changeAnimation("brushing");
    at.y = 350 ;
    at.velocityX = 0;
    at.velocityY = 0;
  }

  if(keyDown("DOWN_ARROW")){
    at.addAnimation("gyming",gym);
    at.changeAnimation("gyming");
    at.y = 350 ;
    at.velocityY = 0;
    at.velocityX = 0;
  }

  if(keyDown("LEFT_ARROW")){
    at.addAnimation("eating",eat);
    at.changeAnimation("eating");
    at.x = 150;
    at.y = 350;
    at.velocityX = 0.5;
    at.velocityY = 0.5;
  }

  if(keyDown("RIGHT_ARROW")){
    at.addAnimation("bathing",bath);
    at.changeAnimation("bathing");
    at.x = 300 ;
    at.velocityX = 0;
    at.velocityY = 0;
  }

  if(keyDown("m")){
    at.addAnimation("moving",move);
    at.changeAnimation("moving");
    at.velocityX = 1;
    at.velocityY = 1;
  }
  
}

function preload (){
   bath = loadAnimation("bath1.png","bath1.png","bath1.png","bath2.png","bath2.png","bath2.png");
   brush = loadAnimation("brush.png");
   eat = loadAnimation("eat1.png","eat1.png","eat1.png","eat2.png","eat2.png","eat2.png");
   gym = loadAnimation("gym1.png","gym1.png","gym2.png","gym2.png");
   move = loadAnimation("move.png","move.png","move1.png","move1.png");
   sleep = loadAnimation("sleep.png");
   bg = loadImage("iss.png");
}