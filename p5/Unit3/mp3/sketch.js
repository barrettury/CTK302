let kidPos;
let pons = [];
let f1, f2, f3, f4;
let state = 0;
let timerHold = 600;
let timer = timerHold;
var pieces = 20;
var music1, music2;
var one, two, three;
var ouch, die;
var img1, img2, img3;
var logo;
var pon;
var gameWidth;
var gameHeight;

function preload() {
  music1 = loadSound("sounds/MafiaTown.mp3");
  music2 = loadSound("sounds/MafiaTownRemix.mp3");
  one = loadSound("sounds/One.mp3");
  two = loadSound("sounds/Two.mp3");
  three = loadSound("sounds/Three.mp3");
  die = loadSound("sounds/Die.mp3");



}

function setup() {
  gameWidth = 600;
  gameHeight = 400;
  createCanvas(gameWidth, gameHeight);
  textAlign(CENTER);
  imageMode(CENTER);
  ellipseMode(CENTER);
  music1.play();
  f1 = loadFont("fonts/Jumpman.ttf");
  f2 = loadFont("fonts/rwby_style.ttf");
  f3 = loadFont("fonts/PressStart2P.ttf");
  f4 = loadFont("fonts/CurseCasual.ttf");

  img1 = loadImage("images/HatKid_ScooterLeft1.png");
  img2 = loadImage("images/HatKid_ScooterRight1.png");
  img3 = loadImage("images/MafiaTown.jpg");
  pon = loadImage("images/pon1.png");
  logo = loadImage("images/HiTLogo.png");


  kidPos = createVector(width / 2, height - 80);
  // Spawn 20 objects
  for (let i = 0; i < pieces; i++) {
    pons.push(new Pon());
  }
}

function draw() {
  switch (state) {

    case 0:
      textSize(30);
      textFont(f4);
      background("blue");
      fill("white");
      image(logo, width / 2, height / 2);
      text("Welcome to", width / 2, height / 5);
      text("Minigames!!!", width / 2, height * 5 / 6);

      break;

    case 1:
      game();
      textSize(20);
      fill("black");
      text(timer, 20, 20);
      timer--;
      if (timer == 180)
        three.play();
      if (timer == 120)
        two.play();
      if (timer == 60)
        one.play();
      if (timer == 0) {
        die.play();
        state = 3;
      }

      break;

    case 2:
      textSize(30);
      textFont(f4);
      background("green");
      fill("white");
      text("yay you won", width / 2, height / 2);
      reset();
      break;

    case 3:
      background("red")
      textSize(30);
      textFont(f4);
      fill("white");
      text("boo you lost", width / 2, height / 2);
      reset();
      break;
  }
}

function game() {
  image(img3, width / 2, height / 2, gameWidth, gameHeight);
  // display and move 20 objects
  for (let i = 0; i < pons.length; i++) {
    pons[i].display();
    pons[i].move();

    if (pons[i].pos.dist(kidPos) < 50) {
      pons.splice(i, 1);
    }
  }

  if (pons.length == 0) {
    state = 2;
  }

  checkForKeys();

}


class Pon {

  // constructor and attributes
  constructor() {
    this.pos = createVector(width / 2, height / 2);
    this.vel = createVector(random(-3, 3), random(-3, 3));
  }

  // methods

  display() {
    image(pon, this.pos.x, this.pos.y);
  }

  move() {
    this.pos.add(this.vel);
    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;

  }
}

function mouseReleased() {
  switch (state) {
    case 0:
      state = 1;
      break;

    case 2:
      state = 0;
      break;

    case 3:
      state = 0;
      break;
  }
}

function reset() {
  kidPos = createVector(width / 2, height - 80);
  image(img2, kidPos.x, kidPos.y);
  pons = [];
  for (let i = 0; i < pieces; i++) {
    pons.push(new Pon());
  }
  timer = timerHold;

}

function checkForKeys() {
  if (keyIsDown(UP_ARROW)) {
    kidPos.y -= 7;
  }
  if (keyIsDown(UP_ARROW) && !(keyIsDown(LEFT_ARROW))) {
    image(img2, kidPos.x, kidPos.y, 150, 150);
  }
  if (keyIsDown(DOWN_ARROW)) {
    kidPos.y += 7;
  }
  if (keyIsDown(DOWN_ARROW) && !(keyIsDown(LEFT_ARROW))) {
    image(img2, kidPos.x, kidPos.y, 150, 150);
  }
  if (keyIsDown(RIGHT_ARROW)) {
    kidPos.x += 7;
  }
  if (keyIsDown(RIGHT_ARROW) && !(keyIsDown(LEFT_ARROW))) {
    image(img2, kidPos.x, kidPos.y, 150, 150);
  }

  if (keyIsDown(LEFT_ARROW)) {
    kidPos.x -= 7;
    image(img1, kidPos.x, kidPos.y, 150, 150);

  }
  if (!(keyIsDown(UP_ARROW) || keyIsDown(DOWN_ARROW) || keyIsDown(RIGHT_ARROW) || keyIsDown(LEFT_ARROW)))
    image(img2, kidPos.x, kidPos.y, 150, 150);

}

function touchStarted() {
  getAudioContext().resume();
}
