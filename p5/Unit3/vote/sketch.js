let words = [];
let f1, f2, f3;
let fonts = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER);
  f1 = loadFont("Jumpman.ttf");
  f2 = loadFont("rwby_style.ttf");
  f3 = loadFont("PressStart2P.ttf");

  fonts= [f1, f2, f3];

  // Spawn 20 objects
  for (let i=0; i < 20; i++) {
    words.push(new Word());
  }
}

function draw() {
  background(100);

  // display and move 20 objects
  for (let i=0; i < words.length; i++) {
    words[i].display();
    words[i].move();
  }
}


// word class
class Word {

  // constructor and attributes
  constructor() {
    this.pos = createVector(width/2, height/2);
    this.vel = createVector(random(-3, 3), random(-3, 3));
    this.size = random(30,80);
    this.r = random(255);
    this.g = random(255);
    this.b = random(255);
    this.f = random();
    this.font = floor(random(3));


  }

  // methods

  display() {
    textFont(fonts[this.font]);
    fill(this.r,this.g,this.b);
    textSize(this.size);
    text("VOTE", this.pos.x, this.pos.y);
  }

  move() {
    this.pos.add(this.vel);
    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;

  }

}
