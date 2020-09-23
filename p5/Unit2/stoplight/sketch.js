let timer = 0;
let state = 0;
var x = 0;
function setup(
) {
  createCanvas(800, 800);
  rectMode(CENTER);
}

function draw() {
  background(100);
fill("yellow");
rect(width/2,width/2,200,500);
fill("blue");
rect(x,750,75,20);


switch(state){

  case 0:
  fill("200");
  ellipse(width/2,250,100,100);
  ellipse(width/2,400,100,100);
  fill("green");
  ellipse(width/2,550,100,100);
  x+=7;
  break;

  case 1:
  fill("200");
  ellipse(width/2,250,100,100);
  fill("yellow");
  ellipse(width/2,400,100,100);
  fill("200");
  ellipse(width/2,550,100,100);
  x+=2;
  break;

  case 2:
  fill("red");
  ellipse(width/2,250,100,100);
  fill("200");
  ellipse(width/2,400,100,100);
  ellipse(width/2,550,100,100);
  break;

}

timer++;
if(timer > 60)
{
state++;
timer = 0;
}
if (state>2) state = 0;
if(x > width) x = 0;
}
