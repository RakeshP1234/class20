var car,wall
var speed,weight



function setup() {
  createCanvas(800,400);
 // createSprite(400, 200, 50, 50);
  speed=random(55,90)
  weight=random(400,1500)
  car=createSprite(50,200,50,50)
  wall=createSprite(1500,200,60,height/2)
  
}

function draw() {
  background(0);  
  car.velocityX=speed

if(wall.x=car.x<(car.width+wall.width)/2){
car.velocityX=0

var deforination=0.5*weight*speed*speed/22509

if(deforination<180 && deforination>100){
  car.shapeColor="yellow"
}

if(deforination<100){
  car.shapeColor="green"
}

if(deforination>180){
  car.shapeColor="red"
}

}

  drawSprites();
}