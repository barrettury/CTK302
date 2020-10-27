let f1, f2, f3, f4;
let state = 0;
var music1, music2;
var one, two, three;
var ouch, die;
var img1, img2, img3;
var logo;
var gameWidth;
var gameHeight;
var townPlay;
let timer;


function preload() {
  ponPreload();
  music1 = loadSound("sounds/MafiaTown.mp3");
  music2 = loadSound("sounds/MafiaTownRemix.mp3");
  one = loadSound("sounds/One.mp3");
  two = loadSound("sounds/Two.mp3");
  three = loadSound("sounds/Three.mp3");
  die = loadSound("sounds/Die.mp3");
  ouch = loadSound("sounds/Ow.mp3");




}

function setup() {
  gameWidth = 900;
  gameHeight = 580;
  createCanvas(gameWidth, gameHeight);
  textAlign(CENTER);
  imageMode(CENTER);
  ellipseMode(CENTER);
  rectMode(CENTER);
  music1.loop();
  music2.loop();
  music1.pause();
  music2.pause();
  townPlay = 0;
  f1 = loadFont("fonts/Jumpman.ttf");
  f2 = loadFont("fonts/rwby_style.ttf");
  f3 = loadFont("fonts/PressStart2P.ttf");
  f4 = loadFont("fonts/CurseCasual.ttf");
  logo = loadImage("images/HiTLogo.png");


}

function draw() {
  switch (state) {

    case 0:
    gameWidth = width;
    gameHeight = height;
    createCanvas(gameWidth, gameHeight);
      textSize(30);
      textFont(f4);
      background("blue");
      fill("white");
      image(logo, width / 2, height / 2);
      text("Welcome to", width / 2, height / 5);
      text("Minigames!!!", width / 2, height * 5 / 6);
      break;
    case 1:
    textSize(30);
    textFont(f4);
    background("blue");
    fill("white");
    text("Which Minigame would you like to play?", width / 2, height / 5);
    image(logo, width / 2, height / 2);
    fill("green");
    rect(100, height / 2,100,100);
    fill("white");
    text("Pon\nCollect", 100,height/2);
    fill("red");
    rect(800, height / 2,100,100);
    fill("white");
    text("Mafia\nRun", 800,height/2);

      break;
    case 2:
      textSize(30);
      textFont(f4);
      background("blue");
      fill("white");
      text("Welcome to Pon Catch\nThe goal is to catch all the\nPons before the timer runs out\n\nGood Luck!", width / 2, 20);
      break;

    case 3:
    ponCatch();
    textSize(30);
    textFont(f4);
    fill("black");
    text(timer,20, 20);
      timer--;
      if(timer == 180) three.play();
      if(timer == 120) two.play();
      if(timer == 60) one.play();

      if (getPonNumber() == 0)
        state = 6;
      if (timer < 0){
        state = 7;
        die.play();
      }

      break;

      case 4:
      textSize(30);
      textFont(f4);
      background("orange");
      fill("white");
      text("Welcome to Mafia Run\nMafia say goal is to avoid\nMafia for 1 munute\n\nGood Luck!\nMafia think you need it", width / 2, height/2);
      break;

      case 5:
      mafiaRun();
      textSize(30);
      textFont(f4);
      fill("black");
      text("Time: " + timer,55, 20);
      text("Lives: " + lives,40, 40);

        timer--;
        if(timer == 180) three.play();
        if(timer == 120) two.play();
        if(timer == 60) one.play();

      if(timer == 0) state = 6;
      if(lives <1) {
        state = 7;
        die.play();
      }
      break;
  case 6:
    textSize(30);
  textFont(f4);
  background("green");
  fill("white");
  text("yay you won", width / 2, height / 2);
  resetMafia();
  resetPon();
  break;

  case 7:
    background("red")
  textSize(30);
  textFont(f4);
  fill("white");
  text("boo you lost", width / 2, height / 2);
  resetMafia();
  resetPon();
  break;
}
}


function mouseReleased() {
  switch (state) {
    case 0:
      music1.play()
      state = 1;
      break;
    case 1:
    if((mouseX>50) && (mouseX<150) && (mouseY>240) && (mouseY<340)){
      state = 2;
      timer = getPonTimer();
      ponSetup();
  }
    if((mouseX>750) && (mouseX<850) && (mouseY>240) && (mouseY<340)){
      state = 4;
      timer = getMafiaTimer();
      mafiaSetup();
      music1.pause();
      music2.play()
    }
      break;

      case 2:
      state = 3;
      break;

      case 4:
      mafiaSetup();
      state = 5;
      break;

      case 5:
      break;

    case 6:
    state = 0;
    music1.pause();
    music2.pause();
      break;

    case 7:
    state = 0;
    music1.pause();
    music2.pause();
      break;
  }
}


function touchStarted() {
  getAudioContext().resume();
}
