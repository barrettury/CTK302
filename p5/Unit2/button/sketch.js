let state = 0

function setup() {
  createCanvas(500, 500);
  rectMode(CENTER);
}

function draw() {

 switch(state){
   case 0:
   background(125);
   fill("red");
    text("case 0", 250, 250);
   break;

   case 1:
   background("pink");
   fill("red");
   text("case 1", 250, 250);
   break;
 }
fill("blue");
 rect(width/2,325,50,25);
}

function mouseReleased(){
  if((mouseX > width/2-25) && (mouseX < width/2+25) && (mouseY > 312.5  ) && (mouseY < 337.5)){
    state++;
    if(state > 1){
      state = 0;
    }
  }
}
