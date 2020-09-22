let state = 0;

function setup() {
  createCanvas(500, 500);
  textSize(30);
  textAlign(CENTER);
}

function draw() {
  switch(state){
    case 0:
    background(125);
    text("A mushroom is my friend", width/2, height/2);
    break;

    case 1:
    background("purple");
    text("That's because he's a\nFunGi", width/2, height/2);
    break;

  }

}
function mouseReleased(){
  state++;
  if(state>1)
  {
    state = 0;
  }

}
