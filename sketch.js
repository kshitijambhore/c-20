var fixRect,movingRect,rect1,rect2

function setup() {
  createCanvas(800,400);
  fixRect=createSprite(200,200,50,50)
  movingRect=createSprite(100,100,50,80)
  fixRect.shapeColor="red"
  movingRect.shapeColor="red"
  rect1=createSprite(400,0,50,80)
  rect2=createSprite(400,600,80,30)
  rect1.shapeColor="orange"
  rect2.shapeColor="white"
  
  rect1.velocityY=+5
  rect2.velocityY=-5
  
}

function draw() {
  background(0);  
  movingRect.x=mouseX;
  movingRect.y=mouseY;

  //x axis touching
  if(rect2.x-rect1.x<rect1.width/2+rect2.width/2 &&
    rect1.x-rect2.x<rect1.width/2+rect2.width/2){
      rect1.velocityX=rect1.velocityX*(-1);
      rect2.velocityX=rect2.velocityX*(-1);
  }

  //y axis touching
  if(rect2.y-rect1.y<rect1.height/2+rect2.height/2 &&
    rect1.y-rect2.y<rect1.height/2+rect2.height/2){
      rect1.velocityY=rect1.velocityY*(-1);
      rect2.velocityY=rect2.velocityY*(-1);
  }

  console.log(movingRect.x);

  //(250-200===50)


  if(movingRect.x-fixRect.x<fixRect.width/2+movingRect.width/2 &&
    fixRect.x-movingRect.x<fixRect.width/2+movingRect.width/2 &&
    movingRect.y-fixRect.y<fixRect.height/2+movingRect.height/2 &&
    fixRect.y-movingRect.y<fixRect.height/2+movingRect.height/2){
    fixRect.shapeColor="aqua"
  movingRect.shapeColor="aqua"
  }
  else {
    fixRect.shapeColor="red"
  movingRect.shapeColor="red"
  }
  
  drawSprites();
}