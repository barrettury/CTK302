var f;
var p2;
function setup() {
createCanvas(800,800);
f = loadFont("Jumpman.ttf");
p2 = loadFont("PressStart2P.ttf");
textAlign(CENTER);
}

function draw() {
background(100);
textFont(f);
textSize(68);
text("King K. Rool", width/2,height/2);
textFont(p2)
textSize(30);
text("This is", width/2, 500);
text("MY personal", width/2, 600);
text("Font!", width/2, 700);


}
