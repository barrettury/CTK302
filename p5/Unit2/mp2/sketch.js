var numberOfTouches;
let state = 0;
var s;
var img1;
var img2;
var pet = 0;
var timer1 = 0;

function preload() {
  s = loadSound("getTheChicken.mp3");
}

function setup() {
  createCanvas(500, 500);
  img1 = loadImage("Zwei_Chibi.png");
  img2 = loadImage("RubywithChicken.png");
  imageMode(CENTER);
  textAlign(CENTER);
}

function draw() {
  background(240);
  numberOfTouches = touches.length;
  text(numberOfTouches + ' touches', 30, 10);

  switch (state) {
    case 0:
      image(img1, 260, 300, 200, 200);
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
      image(img1, 260, 300, 200, 200);
      image(img2,100,190,250,250);
      timer1++;
      if (timer1 > 120) {
        state++;
      }
      break;

    case 3:
      break;
  }

}

function touchStarted() {
  getAudioContext().resume();
}
