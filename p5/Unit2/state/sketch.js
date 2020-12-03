let state = 0;
function setup() {
  createCanvas(500, 500);
  textSize(24);
  textAlign(CENTER);
}

function draw() {

  switch(state
  )  {
  //  case 'a' :
  case 0:
  background('red');
  text("You are in Case 0", width/2, height/2);
  break;

  case 1:
  background('green');
  text("You are in Case 1", width/2, height/2);
  break;

  case 2:
  background('blue');
  text("You are in Case 2", width/2, height/2);
  break;


  }
}
function mouseReleased(){
  state++;
  if(state>2)
  {
    state = 0;
  }

}
