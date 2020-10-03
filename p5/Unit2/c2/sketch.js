var mic;
var vol;
let state = 0;

function setup() {
  createCanvas(500, 500);
  textAlign(CENTER);

  // code for initializing mic in.
  mic = new p5.AudioIn();
  mic.start();
}


function draw() {
  // get the sound input
  vol = (mic.getLevel()).toFixed(2); // returned level is between 0 and 1

switch(state){
  case 0:
  background("blue");
  fill("white");
  text("SHhhh\n Please Stay Quiet", width/2, height/2);
  if (vol > .45) state = 1;
  break;

  case 1:
  background("red");
  fill("white");
  text("QUITET DOWN!!!", width/2, height/2);
  if(vol<.45) state = 0;
  break;
}

// check how loud the input is

  // extra stuff for debugging
  textSize(18);
  text("Click the screen first to give\npermission for mic input.\nMy volume is " + vol, 120, 60);


}


// you need this code for audio programs and also, the user
// needs to click the screen before the mic input will work.

function touchStarted() {
  getAudioContext().resume();
}
