var x = 0;
var cook;

function setup() {
  createCanvas(960, 720);
  cook = loadFont("Cookies.ttf");
  textAlign(CENTER);
}

function draw() {
  background(30);
fill(200);
rect(0, 600, 150, 200);
triangle(0, 500, 0, 600, 150, 600);
fill(150);
rect(200, 600, 200, 200);
triangle(200, 600, 300, 475, 400, 600);
fill(200);
rect(450, 600, 200, 200);
triangle(450, 600, 550, 475, 650, 600);
fill(150);
rect(700, 600, 200, 200);
triangle(700, 600, 800, 475, 900, 600);



fill('white');
arc(100, 125, 175, 200, 5 * PI / 11, 18 * PI / 11);

rect(75, 640, 50, 50);
rect(210, 620, 50, 50);
rect(590, 620, 50, 50);

fill(120, 82, 41);
rect(310, 640, 50, 100);
rect(485, 640, 50, 100);
rect(775, 640, 50, 100);

Bg();

push();
translate(x,0);
avatar();
x += 5
if( x> width) {
  x = 0;
}
pop();
}
