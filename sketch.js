var wall1;
var person;
var backgroundImg;
var backgroundS

function preload(){
  backgroundImg = loadImage("background.jpg");
  }

function setup(){
  createCanvas(600,600);
  backgroundS = createSprite(600,600);
  backgroundS.addImage("backgroundG",backgroundImg);
 // backgroundS.scale = 1.0;
  backgroundS.velocityX = -3;

  //fill("red");
  wall1 = createSprite(200,200,10,400);
  wall1.shapeColor = "red";
  wall1.velocityY = -5;
  // fill("blue");
  person = createSprite(500,200,10,10);
  person.shapeColor = "blue"
  
}



function draw(){
  background("blue");
  drawSprites();
  if(keyDown(UP_ARROW))
{
      person.y -= 5;
  }
  if (keyDown(DOWN_ARROW)){
      person.y += 5;
  }
  if (keyDown(RIGHT_ARROW)){
      person.x += 5;
  }
  if(keyDown(LEFT_ARROW)){
      person.x -= 5;
  }
   if (backgroundS.x < 0){
     background.x = width/2;
   }
   console.log(backgroundS.x);

  
   person.bounceOff(wall1);
   edges = createEdgeSprites();
   wall1.bounceOff(edges);

  
}

function spawnwall(){

}