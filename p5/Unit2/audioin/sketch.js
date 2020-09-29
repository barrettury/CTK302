var mic;
var vol;
var p;

function preload(){
p = loadImage("Mettaton.png");
}
function setup() {
  createCanvas(600, 700);

  // code for initializing mic in.
  mic = new p5.AudioIn();
  mic.start();
  imageMode(CENTER);
}


function draw() {
  background(203,106,203);

  // get the sound input
  vol = (mic.getLevel()).toFixed(2); // returned level is between 0 and 1

  //toFixed limits the decimal places

// check how loud the input is
  if (vol > .45) { // if the volume is LOUD?

  image(p, width/2, height/2);  // do something
  }

  // extra stuff for debugging
  textSize(18);
  text("Cheer loudly to see Mettaton appear! " + vol, 10, 60);


}


// you need this code for audio programs and also, the user
// needs to click the screen before the mic input will work.

function touchStarted() {
  getAudioContext().resume();
}
