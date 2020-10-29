var car1;
var speed;
var wall;
var weight;
var look;

function setup() {
  createCanvas(1600,400);
  car1=createSprite(50, 200, 50, 20);
  wall=createSprite(1500,200,60, height/2);
speed=random(55,90);
weight=random(400,1500);
car1.velocityX=speed;
}

function draw() {
  background(0,0,0);  
  for(var i=10;i<1500;i=i+75){
    look=createSprite(i,200,20,5);
    look.shapeColor=color(255,255,255);
  }
  if(wall.x-car1.x<(wall.width+car1.width)/2)
  {
    car1.velocityX=0;

    var deformation=0.5* weight* speed * speed/22500;

if (deformation>=180){
 car1.shapeColor=color(255,0,0);
 textSize(24);
 fill("red")
text("He is gone",1300,160);
 }

 if (deformation>100 &&deformation<180 ){
  car1.shapeColor=color(230,230,0);
  textSize(24);
 fill("YELLOW")
text("Almost Gone ",1300,160);
  }
  if (deformation<100){
    car1.shapeColor=color(0,250,0);
    textSize(24);
    fill("green")
   text("Saved",1400,160);
    }



  }
  drawSprites();
}