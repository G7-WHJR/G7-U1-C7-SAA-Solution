var box;
function setup() {
  createCanvas(400, 400);
  box = createSprite(40, 40, 40, 40);
  box.shapeColor = "white";
  box.velocityX=0.5;
  box.velocityY=0.5;
}
function draw() {
  background("orange");
  drawSprites();
}




  