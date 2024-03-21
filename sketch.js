var box = createSprite(200,200,30,30);

function setup() {
  createCanvas(400,400);
  background(51);

}

function draw() 
{
  // escribir el código para cambiar el color del fondo 
  if (keyIsDown(RHIGHT_ARROW))
  {
    background("red");

  }
  if (keyIsDown(LEFT_ARROW)) 
  {
    background("blue");
    
  }
 
    if (keyIsDown(UP_ARROW)) 
  {
    background("yellow");
   
  }

  if (keyIsDown(DOWN_ARROW)) 
  {
    background("green");
  }


  
  drawSprites();
}

