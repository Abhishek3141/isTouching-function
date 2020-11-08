var rect1, rect2;

function setup() {
  createCanvas(1200,800);
  rect1 = createSprite(600, 400, 50, 80);
  
  rect1.debug = true;
  rect2 = createSprite(400,200,80,30);
  
  rect2.debug = true;
}

function draw() {
  background(0,0,0);  
  rect1.x = World.mouseX;
  rect1.y = World.mouseY;

  if(isTouching(rect1,rect2)){
    rect1.x = 100;
    rect2.x = 300;
    rect1.y = 150;
    rect2.y = 320;


  }
  drawSprites();
}


function isTouching(movingRect,fixedRect){
  if (movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
    && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2
    && movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
    && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2) {
      return true;
}
else {
    return false;
}
}