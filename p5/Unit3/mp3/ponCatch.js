var kidPos;
let pons = [];
let timerPon = 1200;
var pieces = 50;
var one, two, three;
var ouch, die;
var img1, img2, img3;
var pon;
var gameWidth;
var gameHeight;


function ponPreload() {
  one = loadSound("sounds/One.mp3");
  two = loadSound("sounds/Two.mp3");
  three = loadSound("sounds/Three.mp3");
  die = loadSound("sounds/Die.mp3");



}

function ponSetup() {
  gameWidth = 900;
  gameHeight = 580;
  createCanvas(gameWidth, gameHeight);
  textAlign(CENTER);
  imageMode(CENTER);
  ellipseMode(CENTER);
  f4 = loadFont("fonts/CurseCasual.ttf");
  img1 = loadImage("images/HatKid_ScooterLeft1.png");
  img2 = loadImage("images/HatKid_ScooterRight1.png");
  img3 = loadImage("images/MafiaTown.jpg");
  pon = loadImage("images/pon1.png");


  kidPos = createVector(gameWidth / 2, gameHeight - 80);
  // Spawn 20 objects
  for (let i = 0; i < pieces; i++) {
    pons.push(new Pon());
  }
}



function ponCatch() {
  image(img3, gameWidth / 2, gameHeight / 2, gameWidth, gameHeight);
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

function resetPonTimer(){
  timerPon = 600;;
}

function getPonTimer(){
  return timerPon;
}
function getPonNumber()
{
  return pons.length;
}


class Pon {

  // constructor and attributes
  constructor() {
    this.pos = createVector(gameWidth / 2, gameHeight / 2);
    this.vel = createVector(random(-3, 3), random(-3, 3));
  }

  // methods

  display() {
    image(pon, this.pos.x, this.pos.y);
  }

  move() {
    this.pos.add(this.vel);
    if (this.pos.x > gameWidth) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = gameWidth;
    if (this.pos.y > gameHeight) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = gameHeight;

  }
}

function resetPon() {
  kidPos = createVector(gameWidth / 2, gameHeight - 80);
  image(img2, kidPos.x, kidPos.y);
  pons = [];
  for (let i = 0; i < pieces; i++) {
    pons.push(new Pon());
  }

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
