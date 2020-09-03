var f;
function setup() {
createCanvas(800,800);
f = loadFont("Jumpman.ttf");
textAlign(CENTER);
}

function draw() {
background(100);
textFont(f);
textSize(68);
text("King K. Rool", width/2,height/2);

}
