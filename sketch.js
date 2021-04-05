var bullet,speed;
var wall,weight,thickness
var dam=0


function setup() {
	createCanvas(1600,800)
  bullet=createSprite(10,400,20,10)
  bullet.shapeColor="white";
  wall=createSprite(1100,400,20,50);
  wall.shapeColor="blue";
  weight=random(30,50);
  speed=random(223,400);
  thickness=random(22,80);
  wall.width=thickness  
  bullet.velocityX=speed

}



function draw() {
  background("black");
  if (collision(bullet,wall)){
    dam=0.5*weight*speed*speed/thickness*thickness*thickness
    if (dam>10){wall.shapeColor="red"}
    else {wall.shapeColor="green"}
  }
  drawSprites();
}

function collision(ibullet,iwall){
var bulletrightedge=ibullet.x+ibullet.width/2
var walllefted=iwall.x-iwall.width/2  
if (bulletrightedge>=walllefted){return true}
return false
}

