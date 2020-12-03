var count = 0;
function setup() {
  createCanvas(500, 500);
  textAlign(CENTER);
}

function draw() {
background(252);
text("You have clicked " + count + " times!", width/2, height/2);
}

function mouseReleased()
{
  count++;
}
