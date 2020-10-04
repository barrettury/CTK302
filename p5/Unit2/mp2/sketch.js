var numberOfTouches;
let state = 0;
var s;
var x = 0;
var img1;
var img2;
var img3;
var img4;
var rwby;
var pet = 0;
var timer = 0;

function preload() {
  s = loadSound("getTheChicken.mp3");
}

function setup() {
  createCanvas(500, 500);
  img1 = loadImage("Zwei_Chibi.png");
  img2 = loadImage("RubywithChicken.png");
  img3 = loadImage("WeissBlakeSit.png");
  img4 = loadImage("sofa.png");
  rwby = loadFont("rwby_style.ttf");

  imageMode(CENTER);
  textAlign(CENTER);
}

function draw() {
  background(240);
  numberOfTouches = touches.length;
  text(numberOfTouches + ' touches', 40, 20);

  textFont(rwby);
  textSize(20);
  image(img4,width/2, height/2,400,400);
  image(img3,250,300,300,300);
  switch (state) {
    case 0:
    text("Pet Zwei to start a cutscene",width/2,40);
      image(img1, 260, 400, 200, 200);
      if ((numberOfTouches > 0) && (mouseX > 199) && (mouseX < 301) && (mouseY > 199) && (mouseY < 401)) {
        pet++;
      }
      if (pet > 180) {
        state++;
      }
      break;

    case 1:
      s.play();
      state++;
      break;

    case 2:
      image(img1, 260, 400, 200, 200);
      image(img2, 100, 290, 250, 250);
      timer++;
      if (timer > 300) {
        state++;
      }
      break;

    case 3:
      x = x - 5;
      if (x > -300) {
        push();
        translate(x, 0);
        image(img1, 260, 400, 200, 200);
        image(img2, 100, 290, 250, 250);
        pop();
      } else {
        state++;
      }
      break;
  }

}

function touchStarted() {
  getAudioContext().resume();
}
