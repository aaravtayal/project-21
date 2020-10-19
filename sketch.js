var bullet;
var wall;
var thickness,speed,weight;



function setup() 
{
  createCanvas(700,400);
// giving random velocity to bullet and thiickness to wall
  thickness = random(22,83);
  speed = random(100,200);
  weight = random(30,52);

  // creating bullet
   bullet = createSprite(50, 200, 30, 10);
   bullet.velocityX = speed;
   bullet.shapeColor = "white";

   //creating wall
   wall = createSprite(600,200,thickness,width/2);
}

function draw() {
  background("black");


    if (hascollided(bullet,wall))
      {
        bullet.velocityX = 0;
        var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness)
           
        if (damage>10)
         {
           wall.shapeColor = color(255,0,0)
         }
        
         if (damage<10)
          {
            wall.shapeColor = color(0,255,0)
          }

      }


  drawSprites();
}

function hascollided(lbullet,lwall)
 {
    if (wall.x-bullet.x < (bullet.width+wall.width)/2)
     {
        return true;
     } else
      {
         return false
      }




 }
