var box;
function setup() {
  createCanvas(400, 400);

  //for SAA2:
  box = createSprite(40, 40, 40, 40);
  box.shapeColor = "white";
  box.velocityX=0.5;
  box.velocityY=0.5;

  //For SAA1:
  /*
  box = createSprite(300, 40, 40, 40);
  box.shapeColor = "white";
  box.velocityX=-0.5;
  */
}
function draw() {
  background("orange");
  drawSprites();
}




  