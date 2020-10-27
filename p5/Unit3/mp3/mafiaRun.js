var kidPos;
let mafiaGoons = [];
let timerMafia = 3600;
let grace = 1;
let graceTimer = 150;
let lives = 4;
var one, two, three;
var ouch, die;
var img1, img2, img3;
var goon;
var gameWidth;
var gameHeight;


function mafiaPreload() {
  one = loadSound("sounds/One.mp3");
  two = loadSound("sounds/Two.mp3");
  three = loadSound("sounds/Three.mp3");
  die = loadSound("sounds/Die.mp3");
  ouch = loadSound("sounds/Ow.mp3");



}

function mafiaSetup() {
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
  goon = loadImage("images/Mafia.png");


  kidPos = createVector(gameWidth / 2, gameHeight - 80);
  // Spawn 20 objects
    mafiaGoons.push(new Mafia());
}



function mafiaRun() {
  image(img3, gameWidth / 2, gameHeight / 2, gameWidth, gameHeight);
  // display and move 20 objects
  for (let i = 0; i < mafiaGoons.length; i++) {
    mafiaGoons[i].display();
    mafiaGoons[i].move();

    if ((mafiaGoons[i].pos.dist(kidPos) < 100) && (grace==1)) {
      lives--;
      ouch.play();
      grace = 0;
    }
  }

  if (grace == 0)
    graceTimer--;
  if(graceTimer<0){
    grace = 1;
    graceTimer = 150;
    }

  checkForKeys();

}

function resetMafiaTimer(){
  timerMafia = 7200;
}

function getMafiaTimer(){
  return timerMafia;
}
function getLives()
{
  return lives;
}


class Mafia {

  // constructor and attributes
  constructor() {
    this.pos = createVector(gameWidth / 2, gameHeight / 2);
    this.vel = createVector(random(-10, 10), random(-10, 10));
  }

  // methods

  display() {
    image(goon, this.pos.x, this.pos.y,200,200);
  }

  move() {
    this.pos.add(this.vel);
    if (this.pos.x > gameWidth) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = gameWidth;
    if (this.pos.y > gameHeight) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = gameHeight;

  }
}

function resetMafia() {
  kidPos = createVector(gameWidth / 2, gameHeight - 80);
  image(img2, kidPos.x, kidPos.y);
  mafiaGoons = [];

grace = 1;
lives = 4;
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

    if(kidPos.x>900)kidPos.x = 900;
    if(kidPos.y>580)kidPos.y = 580;
    if(kidPos.x<0) kidPos.x = 0;
    if(kidPos.y<0) kidPos.y = 0;

}

function touchStarted() {
  getAudioContext().resume();
}
